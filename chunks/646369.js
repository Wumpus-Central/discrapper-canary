n.d(t, {
    A: () => D,
}),
    n(896048),
    n(65821),
    n(457529),
    n(638769),
    n(747238),
    n(321073);
var r = n(119479),
    i = n.n(r),
    a = n(415955),
    o = n.n(a),
    s = n(128080),
    l = n.n(s),
    c = n(264968),
    u = n.n(c),
    d = n(141697),
    f = n(118356),
    p = n(904986);
n(618792);
var _ = n(466376),
    h = n(205693),
    m = n(138767),
    g = n(97113),
    E = n(823598),
    y = n(807908),
    b = n(731854),
    O = n(713754);

function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}

function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = 50,
    C = 0.9,
    N = 0.1,
    w = 0;

function R(e) {
    return (null != e ? e : O.Hz) / O.Hz;
}

function P(e) {
    return null != e && 0 !== e ? e + 1 : 0;
}
class D extends p.A {
    static create(e, t, n) {
        let r = new D(e, t, !0);
        return r.initialize(n), r;
    }
    static createReplay(e, t) {
        let n = new D(e, "0", !0),
            r = (0, E.lE)();
        n.initializeStreamParameters([
            {
                type: b.mI.VIDEO,
                rid: "100",
                ssrc: 0,
                rtxSsrc: 0,
                quality: 100,
                active: !1,
            },
        ]);
        let i = (t, i) => {
                n.on(h.yq.Stats, n.handleStats),
                    n.conn.setOnVideoCallback(n.handleVideo),
                    r.getCodecCapabilities((t) => {
                        let r = (0, m.ZF)(n.experimentFlags);
                        (n.codecs = [
                            {
                                type: "audio",
                                name: O.UK.OPUS,
                                priority: 1,
                                payloadType: 120,
                            },
                            ...(0, m.RQ)(t, r).map((e, t) => {
                                let n = t + 1,
                                    r = 101 + 2 * t;
                                return {
                                    type: "video",
                                    name: e.name,
                                    priority: n,
                                    payloadType: r,
                                    rtxPayloadType: r + 1,
                                    encode: e.encode,
                                    decode: e.decode,
                                };
                            }),
                        ]),
                            n.setCodecs(O.UK.OPUS, O.UK.H264, e),
                            n.conn.startReplay();
                    });
            },
            a = r.createReplayConnection("default", i, t);
        return null == a ? null : ((n.conn = a), n);
    }
    initialize(e) {
        let t;
        this.logger.info(
            "Creating connection to ".concat(e.address, ":").concat(e.port, " with audio ssrc: ").concat(e.ssrc),
        ),
            (this.beginInitializeAt = performance.now()),
            (this.audioSSRC = e.ssrc),
            (this.streamUserId = e.streamUserId),
            this.initializeStreamParameters(e.streamParameters),
            (e.streamParameters = [
                {
                    type: b.mI.AUDIO,
                    ssrc: this.audioSSRC,
                    rid: "",
                    maxBitrate: 64e3,
                    soundshare: this.context === O.x.STREAM,
                },
                ...this.videoStreamParameters,
            ]),
            (e.context = this.context);
        let n = (0, E.lE)(),
            r = (r, i) => {
                if (this.destroyed) return;
                if (null != r && "" !== r) {
                    this.setConnectionState(O.$I.NO_ROUTE), this.emit(h.yq.Error, r);
                    return;
                }
                if (null == i) throw Error("Invalid transport info");
                this.transportInfo = i;
                let { protocol: a, address: o, port: s } = i;
                this.logger.info("Connected with local address ".concat(o, ":").concat(s, " and protocol: ").concat(a)),
                    (this.onConnectCallbackAt = performance.now()),
                    n.getCodecCapabilities((r) => {
                        (this.onVideoCodecsCallbackAt = performance.now()),
                            this.logger.info("Available engine codecs: ".concat(JSON.stringify(r)));
                        let i = (0, m.ZF)(this.experimentFlags);
                        this.logger.info("Experimental codecs: ".concat(JSON.stringify(i))),
                            (this.codecs = [
                                {
                                    type: "audio",
                                    name: O.UK.OPUS,
                                    priority: 1,
                                    payloadType: 120,
                                },
                                ...(0, m.RQ)(r, i).map((e, t) => {
                                    let n = t + 1,
                                        r = 101 + 2 * t;
                                    return {
                                        type: "video",
                                        name: e.name,
                                        priority: n,
                                        payloadType: r,
                                        rtxPayloadType: r + 1,
                                        encode: e.encode,
                                        decode: e.decode,
                                    };
                                }),
                            ]),
                            this.logger.info(
                                "Audio codecs: ".concat(
                                    this.codecs.filter((e) => "audio" === e.type).map((e) => e.name),
                                ),
                            ),
                            this.logger.info(
                                "Video codecs: ".concat(
                                    this.codecs
                                        .filter((e) => "video" === e.type)
                                        .map((e) => e.name + "[encode: " + e.encode + ", decode: " + e.decode + "]"),
                                ),
                            ),
                            t.getEncryptionModes((r) => {
                                var i, l, c, u, d, f, p, _, m, g, E, y, b, v, A, I;
                                (this.onEncryptionModesCallbackAt = performance.now()),
                                    this.logger.info("Encryption modes: ".concat(r)),
                                    t.setTransportOptions(this.getConnectionTransportOptions()),
                                    t.setSelfMute(this.selfMute || this.context === O.x.STREAM),
                                    t.setSelfDeafen(this.selfDeaf),
                                    t.setOnSpeakingCallback(this.handleSpeakingNative),
                                    null == (i = t.setOnNativeMuteToggleCallback) ||
                                        i.call(t, this.handleNativeMuteToggled),
                                    null == (l = t.setOnNativeMuteChangedCallback) ||
                                        l.call(t, this.handleNativeMuteChanged),
                                    null == (c = t.setOnSpeakingWhileMutedCallback) ||
                                        c.call(t, this.handleSpeakingWhileMuted),
                                    null == (u = t.setPingInterval) || u.call(t, O.n8),
                                    t.setPingCallback(this.handlePing),
                                    null == (d = t.setPingTimeoutCallback) || d.call(t, this.handlePingTimeout),
                                    null == (f = t.setOnVideoEncoderFallbackCallback) ||
                                        f.call(t, this.handleVideoEncoderFallback),
                                    null == (p = t.setOnVideoDecoderFallbackCallback) ||
                                        p.call(t, this.handleVideoDecoderFallback),
                                    null == (_ = t.setOnRtcpMessageCallback) || _.call(t, this.handleRTCPMessage),
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
                                        voiceFilters: null != this.voiceFilterId,
                                    }),
                                    n.setNoInputThreshold(-100),
                                    n.setNoInputCallback(this.handleNoInput),
                                    this.videoSupported &&
                                        (t.setOnVideoCallback(this.handleVideo),
                                        null == (g = t.setOnFirstFrameCallback) || g.call(t, this.handleFirstFrame),
                                        null == (E = t.setOnFirstFrameDeliveredStatsCallback) ||
                                            E.call(t, this.handleFirstFrameStats),
                                        null == (y = t.setOnFirstFrameEncryptedStatsCallback) ||
                                            y.call(t, this.handleFirstFrameEncryptedStats),
                                        null == (b = t.setOnDesktopSourceEnded) ||
                                            b.call(t, this.handleDesktopSourceEnded),
                                        null == (v = t.setOnSoundshare) || v.call(t, this.handleSoundshare),
                                        null == (A = t.setOnSoundshareEnded) || A.call(t, this.handleSoundshareEnded),
                                        null == (I = t.setOnSoundshareFailed) ||
                                            I.call(t, this.handleSoundshareFailed)),
                                    null == (m = t.setOnMLSFailureCallback) || m.call(t, this.handleMLSFailure),
                                    this.setConnectionState(O.$I.CONNECTED),
                                    this.emit(h.yq.Connected, a, {
                                        address: o,
                                        port: s,
                                        mode: this.chooseEncryptionMode(e.modes, r),
                                        codecs: this.codecs,
                                    }),
                                    this.on(h.yq.Stats, this.handleStats);
                                let S = this.getUserOptions();
                                for (let e of (S.forEach((e) => {
                                    var t, n;
                                    return this.logger.info(
                                        "Creating user: "
                                            .concat(e.id, " with audio SSRC: ")
                                            .concat(e.ssrc, " and video SSRCs: ")
                                            .concat(
                                                null != (t = null == (n = e.videoSsrcs) ? void 0 : n.join(",")) ? t : 0,
                                            ),
                                    );
                                }),
                                this.mergeUsers(S),
                                this.emit(h.yq.RemoteStreamsReady, S.length),
                                Object.keys(this.localSpeakingFlags)))
                                    e !== this.userId && this.setSpeakingFlags(e, this.localSpeakingFlags[e]);
                            });
                    });
            };
        if (null != n.createOwnStreamConnectionWithOptions)
            o =
                this.context === O.x.STREAM && this.streamUserId === this.userId
                    ? n.createOwnStreamConnectionWithOptions
                    : n.createVoiceConnectionWithOptions;
        else if (null != n.createOwnStreamConnection) {
            var i,
                a,
                o,
                s =
                    this.context === O.x.STREAM && this.streamUserId === this.userId
                        ? n.createOwnStreamConnection
                        : n.createVoiceConnection;
            o = (e, t, n) => s(t.ssrc, this.userId, t.address, t.port, n, t.experiments, t.streamParameters);
        } else
            o = (e, t, r) => new n.VoiceConnection(t.ssrc, e, t.address, t.port, r, t.experiments, t.streamParameters);
        null == (i = (t = this.conn = o(this.userId, e, r)).setSecureFramesStateUpdateCallback) ||
            i.call(t, (e) => {
                this.logger.info("DAVE protocol state update: ".concat(JSON.stringify(e))),
                    this.emit(h.yq.SecureFramesUpdate, e);
            }),
            null == (a = t.setDesktopSourceStatusCallback) ||
                a.call(t, (e) => {
                    if ("videohook_start" === e.type) this.emit(h.yq.VideoHookStart);
                    else if ("videohook_stop" === e.type) this.emit(h.yq.VideoHookStop);
                    else if ("videohook_initialize" === e.type)
                        this.emit(
                            h.yq.VideoHookInitialize,
                            e.backend,
                            e.format,
                            e.framebufferFormat,
                            e.sampleCount,
                            e.success,
                            e.reinitialization,
                        );
                    else if ("screenshare_finish" === e.type) {
                        var t;
                        this.emit(
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
                            e.quartzFrames,
                            null != (t = e.desktopCapturerType) ? t : e.desktop_capturer_type,
                            e.activity,
                            e.goLiveCameraFrames,
                            e.screenCaptureKitFrames,
                        );
                    } else
                        "video_state" === e.type
                            ? this.emit(h.yq.VideoState, e.state)
                            : e.type.startsWith("soundshare_") && this.emit(h.yq.SoundshareTrace, e);
                }),
            this.on("newListener", this.handleNewListenerNative);
    }
    destroy() {
        this.conn.destroy(),
            Object.keys(this.localSpeakingFlags)
                .filter((e) => e !== this.userId)
                .forEach((e) => this.emit(h.yq.Speaking, e, O.ME.NONE, this.remoteAudioSSRCs[e])),
            this.setConnectionState(O.$I.DISCONNECTED),
            super.destroy();
    }
    setCodecs(e, t, n) {
        this.conn.setTransportOptions(this.getCodecOptions(e, t, n)),
            this.videoEncoderFallbackPending && (this.videoEncoderFallbackPending = !1);
    }
    getStats() {
        return this.connectionState === O.$I.DISCONNECTED
            ? Promise.resolve(null)
            : (0, d.timeout)(
                  new Promise((e) => {
                      null != this.conn.getFilteredStats
                          ? this.conn.getFilteredStats(b.yt.ALL, (t) =>
                                e(
                                    (0, y.A)(
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
                                      (0, y.A)(
                                          this.mediaEngineConnectionId,
                                          t,
                                          this.remoteVideoSinkWants,
                                          this.localVideoSinkWants,
                                      ),
                                  ),
                              )
                            : (0, E.lE)().getStats((t) =>
                                  e(
                                      (0, y.A)(
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
                  if (!(e instanceof d.TimeoutError)) throw e;
              });
    }
    createUser(e, t, n) {
        let r = this.remoteAudioSSRCs[e],
            i = this.remoteVideoSSRCs[e];
        if (null != r && 0 === t)
            return void this.logger.info("Ignoring attempt to recreate user ".concat(e, " with 0 audio SSRC"));
        (i = void 0 !== i ? [...i].sort() : []), (n = void 0 === n ? (null != i ? i : []) : [...n].sort());
        let a = r !== t,
            o = !l()(i, n);
        if (
            ((this.remoteAudioSSRCs[e] = t),
            (this.remoteVideoSSRCs[e] = null != n ? n : []),
            this.userId !== e && (a || o))
        ) {
            let r = void 0 !== n && n.length > 0 ? n[0] : 0,
                i = {
                    id: e,
                    ssrc: t,
                    videoSsrc: r,
                    videoSsrcs: n,
                    rtxSsrc: P(r),
                    mute: this.getLocalMute(e),
                    volume: this.getLocalVolume(e),
                };
            if (this.connectionState === O.$I.CONNECTED) {
                var s;
                this.logger.info(
                    "Creating user: "
                        .concat(e, " with audio SSRC: ")
                        .concat(t, " and video SSRCs: ")
                        .concat(null != (s = null == n ? void 0 : n.join(",")) ? s : 0),
                ),
                    this.mergeUsers([i]);
            }
            let a = this.localPans[e];
            null != a && this.setLocalPan(e, a.left, a.right);
            let o = this.localSpeakingFlags[e];
            null != o && o !== O.ME.NONE && this.setSpeakingFlags(e, o);
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
        if ((this.soundshareId === e && this.soundshareSentSpeakingEvent) || this.context !== O.x.STREAM) return;
        (this.soundshareId = e), (this.soundshareSentSpeakingEvent = !1);
        let n = e;
        null === n && (n = 0),
            this.conn.setTransportOptions({
                soundsharePid: n,
                soundshareEventDriven: !0,
                soundshareLoopback: t,
            });
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
        var e, t;
        null == (e = (t = this.conn).wasRemoteDisconnected) || e.call(t);
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
            var r, i;
            let a;
            (a =
                "soundboard" === t
                    ? "soundboardAudio"
                    : (this.context === O.x.STREAM ? "application" : "user").concat("audio" === t ? "Audio" : "Video")),
                null == (r = (i = this.conn).setClipRecordUser) || r.call(i, e, a, n);
        }
    }
    setClipsKeyFrameInterval(e) {
        this.context === O.x.STREAM &&
            ((this.clipsKeyFrameInterval = e),
            this.conn.setTransportOptions({
                keyframeInterval: this.getKeyFrameInterval(),
                alwaysSendVideo: this.keyframeInterval > 0,
            }));
    }
    setViewerSideClip(e) {
        this.context === O.x.STREAM &&
            this.conn.setTransportOptions({
                enableViewerSideClip: e,
            });
    }
    setRemoteAudioHistory(e) {
        this.conn.setTransportOptions({
            remoteAudioHistoryMs: e,
        });
    }
    setQualityDecoupling(e) {
        this.context === O.x.STREAM &&
            this.conn.setTransportOptions({
                enableQualityDecoupling: e,
            });
    }
    getLocalVolume(e) {
        let t = this.localVolumes[e];
        return null == t && (t = this.context === O.x.DEFAULT ? O.Hz : O.Cn), R(t);
    }
    setLocalVolume(e, t) {
        this.localVolumes[e] = t;
        try {
            this.conn.setLocalVolume(e, this.getLocalVolume(e));
        } catch (n) {
            this.logger.warn("Failed to set volume for user: ".concat(e, ": ").concat(t));
        }
    }
    setLocalPan(e, t, n) {
        (this.localPans[e] = {
            left: t,
            right: n,
        }),
            this.conn.setLocalPan(e, t, n);
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
        var n, r;
        null == (n = (r = this.conn).setRemoteUserCanHavePriority) || n.call(r, e, t);
    }
    setBitRate(e) {
        this.setVoiceBitRate(e);
    }
    setVoiceBitRate(e) {
        if (this.voiceBitrate === e) return;
        this.voiceBitrate = e;
        let t = this.voiceBitrate;
        this.soundshareActive && (t = Math.max(O.kO, t)),
            this.conn.setTransportOptions({
                encodingVoiceBitRate: t,
            });
    }
    setCameraBitRate(e, t, n) {
        null != n || null != t
            ? this.videoQualityManager.setQualityOverwrite({
                  bitrateMin: null != n && n > 0 ? n : t,
                  bitrateMax: t,
              })
            : this.videoQualityManager.setQualityOverwrite({}),
            this.hasDesktopSource() ||
                this.conn.setTransportOptions({
                    encodingVideoBitRate: e,
                    encodingVideoMinBitRate: n,
                    encodingVideoMaxBitRate: t,
                });
    }
    setEchoCancellation(e) {
        (this.echoCancellation = e),
            (0, E.lE)().setTransportOptions({
                echoCancellation: this.echoCancellation,
            });
    }
    setNoiseSuppression(e) {
        (this.noiseSuppression = e),
            (0, E.lE)().setTransportOptions({
                noiseSuppression: this.noiseSuppression,
            });
    }
    setAutomaticGainControl(e) {
        (this.automaticGainControl = e),
            (0, E.lE)().setTransportOptions({
                automaticGainControl: this.automaticGainControl.enabled,
                automaticGainControlConfig: this.automaticGainControl,
            });
    }
    setNoiseCancellation(e) {
        (this.noiseCancellation = e),
            (0, E.lE)().setTransportOptions({
                noiseCancellation: this.noiseCancellation,
            });
    }
    setNoiseCancellationDuringProcessing(e) {
        (this.noiseCancellationDuringProcessing = e),
            (0, E.lE)().setTransportOptions({
                noiseCancellationDuringProcessing: this.noiseCancellationDuringProcessing,
            });
    }
    setNoiseCancellationAfterProcessing(e) {
        (this.noiseCancellationAfterProcessing = e),
            (0, E.lE)().setTransportOptions({
                noiseCancellationAfterProcessing: this.noiseCancellationAfterProcessing,
            });
    }
    setVADAfterWebrtc(e) {
        (this.vadAfterWebrtc = e),
            (0, E.lE)().setTransportOptions({
                vadAfterWebrtc: this.vadAfterWebrtc,
            });
    }
    getNoiseCancellation() {
        return this.noiseCancellation;
    }
    getVoiceFilterId() {
        return this.voiceFilterId;
    }
    setVoiceFilterId(e) {
        (this.voiceFilterId = e),
            this.emit(h.yq.VoiceFilterChanged, e),
            (0, E.lE)().setTransportOptions({
                voiceFilters: null != this.voiceFilterId,
            });
    }
    setQoS(e) {
        (this.qos = e),
            this.conn.setTransportOptions({
                qos: this.qos,
            });
    }
    setSoundshareDiscardRearChannels(e) {
        this.conn.setTransportOptions({
            soundshareDiscardRearChannels: e,
        });
    }
    setInputMode(e, t) {
        switch (((this.inputMode = e), e)) {
            case O.TB.PUSH_TO_TALK:
                this.pttReleaseDelay = t.pttReleaseDelay;
                break;
            case O.TB.VOICE_ACTIVITY:
                (this.vadThreshold = t.vadThreshold),
                    (this.vadAutoThreshold = t.vadAutoThreshold),
                    (this.vadUseKrisp = t.vadUseKrisp),
                    (this.vadLeading = t.vadLeading),
                    (this.vadTrailing = t.vadTrailing),
                    (this.vadKrispActivationThreshold = t.vadKrispActivationThreshold),
                    (this.vadDuringPreProcess = t.vadDuringPreProcess);
                break;
            default:
                throw Error("Unknown Input Mode: ".concat(e));
        }
        this.conn.setTransportOptions({
            inputMode: O.s6[this.inputMode],
            inputModeOptions: this.createInputModeOptions(),
        });
    }
    setSilenceThreshold(e) {
        (0, E.lE)().setNoInputThreshold(e);
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
              this.conn.setRemoteUserSpeaking(e, (t & O.ME.VOICE) === O.ME.VOICE),
            this.handleSpeakingFlags(e, t);
    }
    clearAllSpeaking() {}
    setEncryption(e, t) {
        this.logger.info("Selected encryption mode: ".concat(e)),
            this.conn.setTransportOptions({
                encryptionSettings: {
                    mode: e,
                    secretKey: t,
                },
            });
    }
    setReconnectInterval(e) {
        (this.reconnectInterval = e),
            this.conn.setTransportOptions({
                reconnectInterval: this.reconnectInterval,
            });
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
            this.conn.setTransportOptions({
                videoQualityMeasurement: this.videoQualityMeasurement,
            });
    }
    setVideoEncoderExperiments(e) {
        (this.videoEncoderExperiments = e),
            this.conn.setTransportOptions({
                videoEncoderExperiments: this.videoEncoderExperiments,
            });
    }
    setVideoBroadcast(e) {
        this.selfVideo !== e && ((this.selfVideo = e), this.applyVideoTransportOptions());
    }
    setGoLiveSource(e) {
        let { resolution: t, frameRate: n } = e.quality,
            r = t <= 480 ? (t / 3) * 4 : (t / 9) * 16,
            i = t,
            a = null;
        if (
            (null != e.desktopDescription
                ? (a = e.desktopDescription.id)
                : null != e.cameraDescription &&
                  (a = "".concat(e.cameraDescription.videoDeviceGuid, ":").concat(e.cameraDescription.audioDeviceGuid)),
            this.goLiveSourceIdentifier === a)
        ) {
            if ((this.setDesktopEncodingOptions(r, i, n), null != e.desktopDescription)) {
                let { soundshareId: t, useLoopback: n } = e.desktopDescription;
                this.soundshareId !== t && this.setSoundshareSource(t, n);
            }
            return;
        }
        if (((this.goLiveSourceIdentifier = a), null != this.conn.setDesktopSource)) {
            if (null != e.desktopDescription) {
                let {
                    id: t,
                    soundshareId: n,
                    useLoopback: r,
                    useVideoHook: i,
                    useGraphicsCaptureApiLevel: a,
                    useCaptureDeviceForEncode: o,
                    useGraphicsCapture: s,
                    useQuartzCapturer: l,
                    allowScreenCaptureKit: c,
                    videoHookStaleFrameTimeoutMs: u,
                    graphicsCaptureStaleFrameTimeoutMs: d,
                    hdrCaptureMode: f,
                    enableGlobalFramePoolLock: p,
                    useGraphicsCaptureDirtyRegions: _,
                } = e.desktopDescription;
                this.setSoundshareSource(n, r);
                let [h, m] = null != t ? t.split(":") : ["", ""];
                null != t
                    ? this.logger.info(
                          "capturing desktop (type: "
                              .concat(h, ", handle: ")
                              .concat(m, ", use-video-hook: ")
                              .concat(i.toString(), ", use-graphics-capture: ")
                              .concat(null == s ? void 0 : s.toString(), ", use-graphics-capture-api-level: ")
                              .concat(null == a ? void 0 : a.toString(), ", use-capture-device-for-encode: ")
                              .concat(null == o ? void 0 : o.toString(), ")."),
                      )
                    : this.logger.info("capturing desktop (type: <stop>)."),
                    null != this.conn.setDesktopSourceWithOptions
                        ? null != t
                            ? this.conn.setDesktopSourceWithOptions({
                                  type: h,
                                  sourceId: m,
                                  useVideoHook: i,
                                  useGraphicsCapture: s,
                                  useGraphicsCaptureApiLevel: a,
                                  useCaptureDeviceForEncode: o,
                                  useQuartzCapturer: l,
                                  allowScreenCaptureKit: c,
                                  videoHookStaleFrameTimeoutMs: u,
                                  graphicsCaptureStaleFrameTimeoutMs: d,
                                  hdrCaptureMode: f,
                                  enableGlobalFramePoolLock: p,
                                  useGraphicsCaptureDirtyRegions: _,
                              })
                            : this.conn.clearDesktopSource()
                        : this.conn.setDesktopSource("wumpus-".concat(m), i, h);
            } else if (null != e.cameraDescription) {
                let { videoDeviceGuid: t, audioDeviceGuid: n } = e.cameraDescription;
                this.conn.setGoLiveDevices({
                    videoInputDeviceId: t,
                    audioInputDeviceId: n,
                });
            }
            this.setDesktopEncodingOptions(r, i, n);
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
        var t, n;
        null == (t = (n = this.conn).setDesktopSourceStatusCallback) || t.call(n, e);
    }
    hasDesktopSource() {
        return null != this.goLiveSourceIdentifier;
    }
    setDesktopEncodingOptions(e, t, n) {
        if (this.destroyed) return;
        let r = (0 === t && n >= 10) || t > 720 || n > 30 ? b.oL : b.lo,
            i = {
                width: e,
                height: t,
                framerate: n,
            },
            a = this.videoQualityManager.getQuality(),
            o = !_.Xb.equals(i, a.capture) || a.bitrateMax !== r,
            s = this.videoStreamParameters.findIndex((e) => e.quality === b.Y4);
        -1 === s && (s = 0),
            o &&
                (this.videoQualityManager.setGoliveQuality({
                    capture: i,
                    encode: i,
                    bitrateMax: r,
                }),
                this.videoStreamParameters.length > s &&
                    ((this.videoStreamParameters[s].maxResolution = {
                        type: 0 === e && 0 === t ? O.ei.SOURCE : O.ei.FIXED,
                        width: e,
                        height: t,
                    }),
                    (this.videoStreamParameters[s].maxFrameRate = n),
                    (this.videoStreamParameters[s].maxBitrate = r)));
        let l = this.videoStreamParameters.findIndex((e) => e.quality === b.Cl),
            c = -1 !== l && this.videoStreamParameters.length > l,
            u = this.videoQualityManager.shouldEnableGoliveSimulcastForHqQuality(i),
            d = c && this.videoStreamParameters[l].active !== u;
        c &&
            ((this.videoStreamParameters[l].active = u),
            (this.simulcastLQDisabledSsrc = u ? void 0 : this.videoStreamParameters[l].ssrc)),
            (o || d) &&
                (this.emit(
                    h.yq.Video,
                    this.userId,
                    null,
                    this.audioSSRC,
                    this.videoStreamParameters[s].ssrc,
                    P(this.videoStreamParameters[s].ssrc),
                    this.videoStreamParameters,
                ),
                this.conn.setTransportOptions(this.applyQualityConstraints().constraints));
    }
    setSDP(e) {}
    setRemoteVideoSinkWants(e) {
        (this.remoteVideoSinkWants = e), this.updateVideoQuality(b.nJ);
    }
    setLocalVideoSinkWants(e) {
        let t = this.localVideoSinkWants,
            n = e;
        for (let [e, s] of Object.entries(this.remoteVideoSSRCs)) {
            var r, i, a, o;
            let l = 0,
                c = 0;
            for (let e of s) (l += null == t ? void 0 : t[e]), (c += null == n ? void 0 : n[e]);
            0 === l && 0 !== c && (null == (r = (i = this.conn).setDisableLocalVideo) || r.call(i, e, !1)),
                0 !== l && 0 === c && (null == (a = (o = this.conn).setDisableLocalVideo) || a.call(o, e, !0));
        }
        this.localVideoSinkWants = e;
    }
    startSamplesLocalPlayback(e, t, n, r) {
        if (t.numberOfChannels > 2) return void r(2, "Too many channels");
        if (null == this.conn.startSamplesLocalPlayback) return void r(3, "Not supported");
        for (var i = [], a = 0; a < t.numberOfChannels; a++) {
            var o = t.getChannelData(a);
            i.push(o);
        }
        this.conn.startSamplesLocalPlayback(
            e,
            {
                sampleRate: t.sampleRate,
                volume: n,
            },
            i,
            r,
        );
    }
    stopAllSamplesLocalPlayback() {
        this.conn.stopAllSamplesLocalPlayback();
    }
    stopSamplesLocalPlayback(e) {
        var t, n;
        null == (t = (n = this.conn).stopSamplesLocalPlayback) || t.call(n, e);
    }
    setBandwidthEstimationExperiments(e) {
        this.conn.setTransportOptions({
            bandwidthEstimationExperiments: e,
        });
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
                    ((this.videoStreamParameters[r] = A({}, e[r])), i.push(A({}, e[r]))),
                    this.conn.setTransportOptions({
                        streamParameters: i,
                    });
            }
            t();
        });
    }
    applyVideoTransportOptions() {
        if (!this.videoSupported) return;
        let e = !1;
        if (this.hasDesktopSource() && this.videoStreamParameters.length > 0) {
            var t;
            e = (null == (t = this.videoStreamParameters[0].maxResolution) ? void 0 : t.type) === O.ei.SOURCE;
        }
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
                rtxSsrc: P(t),
                mute: this.getLocalMute(e),
                volume: this.getLocalVolume(e),
            };
        });
    }
    createInputModeOptions() {
        switch (this.inputMode) {
            case O.TB.VOICE_ACTIVITY:
                return {
                    vadThreshold: this.vadThreshold,
                    vadAutoThreshold: this.vadAutoThreshold ? g.B.VERY_AGGRESSIVE : g.B.DISABLED,
                    vadUseKrisp: this.vadUseKrisp,
                    vadLeading: this.vadLeading,
                    vadTrailing: this.vadTrailing,
                    vadKrispActivationThreshold: this.vadKrispActivationThreshold,
                    vadDuringPreProcess: this.vadDuringPreProcess,
                };
            case O.TB.PUSH_TO_TALK:
                return {
                    pttReleaseDelay: this.pttReleaseDelay,
                };
            default:
                throw Error("Unknown Input Mode: ".concat(this.inputMode));
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
        if (e !== O.UK.H264) return {};
        if (t)
            return {
                "level-asymmetry-allowed": "1",
                "packetization-mode": "1",
                "profile-level-id": "42e034",
            };
        {
            let e = "4d0033",
                t = "42e01f";
            return {
                "level-asymmetry-allowed": "1",
                "packetization-mode": "1",
                "profile-level-id": "android" === (0, E.lE)().platform ? t : e,
            };
        }
    }
    getCodecOptions(e, t, n) {
        var r, i, a;
        let o,
            s = {
                type:
                    null != (r = null == (o = this.codecs.find((t) => t.name === e)) ? void 0 : o.payloadType) ? r : 0,
                name: e,
                freq: 48e3,
                pacsize: 960,
                channels: 1,
                rate: 64e3,
            },
            l = this.codecs
                .filter((e) => "audio" === e.type)
                .map((e) => {
                    var t;
                    return {
                        type: null != (t = null == e ? void 0 : e.payloadType) ? t : 0,
                        name: e.name,
                        freq: 48e3,
                        channels: 2,
                        params: {
                            stereo: "1",
                        },
                    };
                });
        n === O.x.STREAM && (s.channels = 2);
        let c = [],
            u = {
                name: "",
                type: 0,
                rtxType: 0,
                params: {},
            };
        for (o of this.codecs) {
            if (o.name === e) continue;
            let n = {
                name: (0, m.Q5)(o.name),
                type: null != (i = null == o ? void 0 : o.payloadType) ? i : 0,
                rtxType: null != (a = null == o ? void 0 : o.rtxPayloadType) ? a : 0,
                params: this.getCodecParams(o.name, !0),
            };
            this.experimentFlags.has(b.fd.RESET_DECODER_ON_ERRORS) && (n.params["reset-on-errors"] = "1"),
                this.experimentFlags.has(b.fd.SOFTWARE_FALLBACK_ON_ERRORS) && (n.params["fallback-after-errors"] = "3"),
                this.experimentFlags.has(b.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS) &&
                    (n.params["fallback-on-consecutive-errors"] = "1"),
                this.experimentFlags.has(b.fd.SIGNAL_AV1_HARDWARE_DECODE) && (n.params["hardware-av1-decode"] = "1"),
                "H265" === n.name &&
                    (n.params["software-h265"] = this.experimentFlags.has(b.fd.H265_HARDWARE_ONLY) ? "0" : "1"),
                (n.params["hardware-h264"] = this.useElectronVideo ? "1" : "0"),
                this.experimentFlags.has(b.fd.USE_H264_MF_DECODER) && (n.params["h264-mf"] = "1"),
                c.push(n),
                o.name === t &&
                    ((u = S(A({}, n), {
                        params: this.getCodecParams(o.name, !1),
                    })),
                    this.experimentFlags.has(b.fd.VIDEOTOOLBOX_RATE_CONTROL) &&
                        (u.params["fixed-rate-presentation-timestamps"] = "1"),
                    this.experimentFlags.has(b.fd.LOW_LATENCY_RATE_CONTROL) &&
                        (u.params["low-latency-rate-control"] = "1"),
                    this.experimentFlags.has(b.fd.WMF_GPU_ENCODE) && (u.params["wmf-gpu"] = "1"));
        }
        return {
            videoEncoder: u,
            videoDecoders: c,
            audioEncoder: s,
            audioDecoders: l,
        };
    }
    getKeyFrameInterval() {
        return this.keyframeInterval > 0 && this.clipsKeyFrameInterval > 0
            ? Math.min(this.keyframeInterval, this.clipsKeyFrameInterval)
            : Math.max(this.keyframeInterval, this.clipsKeyFrameInterval);
    }
    getConnectionTransportOptions() {
        let e = S(
            A(
                {
                    selfMute: this.selfMute,
                    inputMode: O.s6[this.inputMode],
                    inputModeOptions: this.createInputModeOptions(),
                    minimumJitterBufferLevel: this.minimumJitterBufferLevel,
                    postponeDecodeLevel: this.postponeDecodeLevel,
                },
                this.getAttenuationOptions(),
            ),
            {
                fec: !0,
                packetLossRate: 0.3,
                qos: this.qos,
                prioritySpeakerDucking: O.zt,
                encodingVoiceBitRate: this.voiceBitrate,
                callBitRate: O.l2,
                callMinBitRate: O.KR,
                callMaxBitRate: O.us,
                encodingVideoDegradationPreference: this.videoDegradationPreference,
                reconnectInterval: this.reconnectInterval,
            },
        );
        return (
            (0, E.$b)(O.BY.VIDEO_EFFECTS) && this.context === O.x.STREAM && (e.enableVideoEffects = !0),
            this.experimentFlags.has(b.fd.MUTE_BEFORE_PROCESSING) && (e.muteBeforeProcessing = !0),
            this.experimentFlags.has(b.fd.PTT_BEFORE_PROCESSING) && (e.pttBeforeProcessing = !0),
            this.experimentFlags.has(b.fd.SKIP_ENCODE) && (e.skipEncode = !0),
            e
        );
    }
    setStream(e) {
        throw Error("Method not implemented.");
    }
    getUserIdBySsrc(e) {}
    prepareSecureFramesTransition(e, t, n) {
        var r, i;
        0 === e && ((this.lastExecutedTransitionId = -1), (this.lastPreparedTransitionId = -1)),
            (this.lastPreparedTransitionId = e),
            null == (r = (i = this.conn).prepareSecureFramesTransition) || r.call(i, e, t, n);
    }
    prepareSecureFramesEpoch(e, t, n) {
        var r, i;
        null == (r = (i = this.conn).prepareSecureFramesEpoch) || r.call(i, e, t, n);
    }
    executeSecureFramesTransition(e) {
        var t, n;
        let r;
        if (
            !(r =
                -1 === this.lastExecutedTransitionId ||
                -1 === this.lastPreparedTransitionId ||
                (this.lastPreparedTransitionId >= this.lastExecutedTransitionId
                    ? e > this.lastExecutedTransitionId && e <= this.lastPreparedTransitionId
                    : e > this.lastExecutedTransitionId || e <= this.lastPreparedTransitionId))
        ) {
            let t = "Skipping invalid transition "
                .concat(e, " outside of range (")
                .concat(this.lastExecutedTransitionId, "-")
                .concat(this.lastPreparedTransitionId, "]");
            throw (this.logger.warn(t), Error(t));
        }
        (this.lastExecutedTransitionId = e),
            null == (t = (n = this.conn).executeSecureFramesTransition) || t.call(n, e);
    }
    getMLSKeyPackage(e) {
        var t, n;
        null == (t = (n = this.conn).getMLSKeyPackage) || t.call(n, e);
    }
    updateMLSExternalSender(e) {
        var t, n;
        null == (t = (n = this.conn).updateMLSExternalSender) || t.call(n, e);
    }
    processMLSProposals(e, t) {
        var n, r;
        null == (n = (r = this.conn).processMLSProposals) || n.call(r, e, t);
    }
    prepareMLSCommitTransition(e, t, n) {
        var r, i;
        (this.lastPreparedTransitionId = e),
            null == (r = (i = this.conn).prepareMLSCommitTransition) || r.call(i, e, t, n);
    }
    processMLSWelcome(e, t, n) {
        var r, i;
        (this.lastPreparedTransitionId = e), null == (r = (i = this.conn).processMLSWelcome) || r.call(i, e, t, n);
    }
    getMLSPairwiseFingerprint(e, t, n) {
        var r, i;
        null == (r = (i = this.conn).getMLSPairwiseFingerprint) || r.call(i, e, t, n);
    }
    presentDesktopSourcePicker(e) {
        var t, n;
        null == (t = (n = this.conn).presentDesktopSourcePicker) || t.call(n, e);
    }
    mergeUsers(e) {
        this.conn.mergeUsers(e), this.emit(h.yq.UsersMerged, e);
    }
    constructor(e, t, n) {
        super(e, t),
            v(this, "mediaEngineConnectionId", "Native-".concat(w++)),
            v(this, "goLiveSourceIdentifier", void 0),
            v(this, "selfVideo", !1),
            v(this, "codecs", []),
            v(this, "videoEncoderFallbackPending", !1),
            v(this, "videoDecoderFallbackSent", new Set()),
            v(this, "desktopDegradationPreference", (0, E.lE)().DegradationPreference.MAINTAIN_FRAMERATE),
            v(this, "sourceDesktopDegradationPreference", (0, E.lE)().DegradationPreference.DISABLED),
            v(this, "videoDegradationPreference", (0, E.lE)().DegradationPreference.BALANCED),
            v(this, "localPans", {}),
            v(this, "remoteAudioSSRCs", {}),
            v(this, "remoteVideoSSRCs", {}),
            v(this, "inputMode", O.TB.VOICE_ACTIVITY),
            v(this, "vadThreshold", -40),
            v(this, "vadAutoThreshold", !0),
            v(this, "vadKrispActivationThreshold", 0.5),
            v(this, "vadUseKrisp", !0),
            v(this, "vadLeading", 5),
            v(this, "vadTrailing", 25),
            v(this, "vadDuringPreProcess", !1),
            v(this, "pttReleaseDelay", 20),
            v(this, "soundshareActive", !1),
            v(this, "soundshareId", null),
            v(this, "soundshareSentSpeakingEvent", !1),
            v(this, "echoCancellation", !0),
            v(this, "noiseSuppression", !0),
            v(this, "automaticGainControl", {
                enabled: !0,
            }),
            v(this, "noiseCancellation", !1),
            v(this, "noiseCancellationDuringProcessing", !1),
            v(this, "noiseCancellationAfterProcessing", !1),
            v(this, "vadAfterWebrtc", !1),
            v(this, "voiceFilterId", null),
            v(this, "attenuationFactor", 0.5),
            v(this, "attenuateWhileSpeakingSelf", !1),
            v(this, "attenuateWhileSpeakingOthers", !0),
            v(this, "qos", !0),
            v(this, "conn", void 0),
            v(this, "minimumJitterBufferLevel", 0),
            v(this, "postponeDecodeLevel", 100),
            v(this, "reconnectInterval", 6e4),
            v(this, "keyframeInterval", 0),
            v(this, "clipsKeyFrameInterval", 0),
            v(this, "videoQualityMeasurement", ""),
            v(this, "videoEncoderExperiments", ""),
            v(this, "numFastUdpReconnects", 0),
            v(this, "simulcastLQDisabledSsrc", void 0),
            v(this, "lastPreparedTransitionId", -1),
            v(this, "lastExecutedTransitionId", -1),
            v(this, "logger", void 0),
            v(this, "transportInfo", void 0),
            v(this, "beginInitializeAt", void 0),
            v(this, "onConnectCallbackAt", void 0),
            v(this, "onVideoCodecsCallbackAt", void 0),
            v(this, "onEncryptionModesCallbackAt", void 0),
            v(this, "handleSpeakingNative", (e, t, n) => {
                let r = O.ME.NONE;
                (r = "boolean" == typeof t ? (t ? O.ME.VOICE : O.ME.NONE) : t), this.handleSpeakingFlags(e, r, n);
            }),
            v(this, "handleNativeMuteToggled", () => {
                this.emit(h.yq.ToggleMuteFromNative);
            }),
            v(this, "handleNativeMuteChanged", (e) => {
                this.emit(h.yq.NativeMuteChanged, e);
            }),
            v(this, "handleSpeakingFlags", (e, t, n) => {
                this.localSpeakingFlags[e] = t;
                let r = e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e];
                this.emit(h.yq.Speaking, e, t, r, n),
                    (t & O.ME.SOUNDSHARE) != 0 &&
                        !1 === this.soundshareSentSpeakingEvent &&
                        (this.emit(h.yq.SoundshareSpeaking), (this.soundshareSentSpeakingEvent = !0));
            }),
            v(this, "handleSpeakingWhileMuted", () => {
                this.emit(h.yq.SpeakingWhileMuted);
            }),
            v(this, "handlePing", (e, t, n) => {
                this.emit(h.yq.Ping, e);
            }),
            v(this, "handlePingTimeout", (e, t, n, r) => {
                this.emit(h.yq.PingTimeout, n, r > 0 ? r : 4e3);
            }),
            v(this, "handleVideoEncoderFallback", (e) => {
                this.videoEncoderFallbackPending ||
                    (this.logger.info("Falling back from current video encoder: ".concat(e)),
                    (this.codecs = this.codecs
                        .map((t) => ((e === t.name || ("AV1" === t.name && "AV1X" === e)) && (t.encode = !1), t))
                        .filter((e) => "video" !== e.type || !1 !== e.encode || !1 !== e.decode)),
                    this.emit(h.yq.VideoEncoderFallback, this.codecs),
                    (this.videoEncoderFallbackPending = !0));
            }),
            v(this, "handleVideoDecoderFallback", (e) => {
                this.videoDecoderFallbackSent.has(e) ||
                    (this.videoDecoderFallbackSent.add(e),
                    this.logger.info("Falling back from current video decoder: ".concat(e)),
                    (this.codecs = this.codecs
                        .map((t) => ((e === t.name || ("AV1" === t.name && "AV1X" === e)) && (t.decode = !1), t))
                        .filter((e) => "video" !== e.type || !1 !== e.encode || !1 !== e.decode)),
                    this.emit(h.yq.VideoDecoderFallback, this.codecs));
            }),
            v(this, "handleRTCPMessage", (e, t) => {
                if (e === b.U9.REMB && this.context === O.x.STREAM) {
                    let e = JSON.parse(t);
                    e.ssrcs.forEach((t) => {
                        var n, r, a, o;
                        let s = this.videoStreamParameters.find((e) => e.ssrc === t);
                        if (void 0 !== s && (null != (n = s.quality) ? n : 0) < 100 && "video" === s.type) {
                            let n = Math.floor(e.bitrate * C);
                            n = i()(n, null != (r = s.minBitrate) ? r : 0, null != (a = s.maxBitrate) ? a : n);
                            let l = null != (o = s.targetBitrate) ? o : 0;
                            (Math.abs(n - l) / ((n + l) / 2) > N || void 0 === s.targetBitrate) &&
                                (this.logger.info(
                                    "Updating target bitrate for SSRC "
                                        .concat(t, " from ")
                                        .concat(s.targetBitrate, " to ")
                                        .concat(n),
                                ),
                                this.videoQualityManager.setGoLiveSimulcastLQTargetBitrate(n),
                                this.updateVideoQuality());
                        }
                    });
                }
            }),
            v(this, "handleVideo", (e, t, n, r) => {
                let i = o()(this.videoStreamParameters);
                e === this.userId
                    ? null != r && Array.isArray(r) && r.length > 0
                        ? r.forEach((e) => {
                              i.forEach((t, n) => {
                                  if (t.rid === e.rid) {
                                      let r = this.simulcastLQDisabledSsrc !== e.ssrc && e.active;
                                      i[n] = S(A({}, t), {
                                          ssrc: e.ssrc,
                                          rtxSsrc: e.rtxSsrc,
                                          active: r,
                                      });
                                  }
                              });
                          })
                        : t > 0
                          ? ((i[0].active = !0), (i[0].ssrc = t), (i[0].rtxSsrc = P(t)))
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
                        P(t),
                        this.videoStreamParameters,
                    );
            }),
            v(this, "handleFirstFrame", (e, t, n) => {
                this.emit(h.yq.FirstFrame, e, t, n);
            }),
            v(this, "handleFirstFrameStats", (e) => {
                this.emit(h.yq.FirstFrameStats, e);
            }),
            v(this, "handleFirstFrameEncryptedStats", (e) => {
                this.emit(h.yq.FirstFrameEncryptedStats, e);
            }),
            v(this, "handleNoInput", (e) => {
                this.emit(h.yq.Silence, !e);
            }),
            v(this, "handleDesktopSourceEnded", (e, t) => {
                this.emit(h.yq.DesktopSourceEnd, e, t);
            }),
            v(this, "handleSoundshare", (e) => {
                e &&
                    ((this.soundshareActive = !0),
                    this.conn.setTransportOptions({
                        encodingVoiceBitRate: Math.max(O.kO, this.voiceBitrate),
                    }),
                    this.emit(h.yq.SoundshareAttached));
            }),
            v(this, "handleSoundshareFailed", (e, t, n) => {
                this.emit(h.yq.SoundshareFailed, {
                    failureCode: e,
                    failureReason: t,
                    willRetry: n,
                });
            }),
            v(this, "handleSoundshareEnded", () => {
                (this.soundshareActive = !1),
                    this.destroyed ||
                        this.conn.setTransportOptions({
                            encodingVoiceBitRate: this.voiceBitrate,
                        });
            }),
            v(this, "handleNewListenerNative", (e) => {
                e === h.yq.ConnectionStateChange && this.emit(e, this.connectionState);
            }),
            v(this, "handleStats", (e) => {
                if (this.connectionState === O.$I.DISCONNECTED) return void this.off(h.yq.Stats, this.handleStats);
                if (null != e) {
                    if (null != this.stats) {
                        let t = u()(
                                e.rtp.outbound,
                                (e, t) => {
                                    var n, r;
                                    return (
                                        (e.lost += null != (n = t.packetsLost) ? n : 0),
                                        (e.sent += null != (r = t.packetsSent) ? r : 0),
                                        e
                                    );
                                },
                                {
                                    lost: 0,
                                    sent: 0,
                                },
                            ),
                            n = u()(
                                this.stats.rtp.outbound,
                                (e, t) => {
                                    var n, r;
                                    return (
                                        (e.lost += null != (n = t.packetsLost) ? n : 0),
                                        (e.sent += null != (r = t.packetsSent) ? r : 0),
                                        e
                                    );
                                },
                                {
                                    lost: 0,
                                    sent: 0,
                                },
                            ),
                            r = t.sent - n.sent,
                            a = t.lost - n.lost;
                        if (0 === r) this.emit(h.yq.OutboundLossRate, 0);
                        else if (r > 0 && a >= 0) {
                            let e = i()(a / (r + a), 0, 1);
                            this.emit(h.yq.OutboundLossRate, 100 * e);
                        }
                        let o = e.rtp.outbound.filter((e) => "audio" === e.type)[0],
                            s = this.stats.rtp.outbound.filter((e) => "audio" === e.type)[0];
                        if (null != o && null != s && null != o.framesCaptured && null != s.framesCaptured) {
                            let e = o.framesCaptured - s.framesCaptured,
                                t =
                                    null != o.noiseCancellerFrames
                                        ? null != s.noiseCancellerFrames
                                            ? o.noiseCancellerFrames - s.noiseCancellerFrames
                                            : 0
                                        : e;
                            if (
                                this.noiseCancellation &&
                                t > T &&
                                null != o.noiseCancellerProcessTime &&
                                null != s.noiseCancellerProcessTime
                            ) {
                                let e = o.noiseCancellerProcessTime - s.noiseCancellerProcessTime;
                                e / t > 8
                                    ? this.emit(h.yq.NoiseCancellationError, O.CO.CPU_OVERUSE)
                                    : 0 === e && this.emit(h.yq.NoiseCancellationError, O.CO.FAILED);
                            }
                            this.inputMode === O.TB.VOICE_ACTIVITY &&
                                this.vadAutoThreshold &&
                                this.vadUseKrisp &&
                                e > T &&
                                null != o.voiceActivityDetectorProcessTime &&
                                null != s.voiceActivityDetectorProcessTime &&
                                (o.voiceActivityDetectorProcessTime - s.voiceActivityDetectorProcessTime) / e > 4 &&
                                this.emit(h.yq.VoiceActivityDetectorError, O.CO.VAD_CPU_OVERUSE);
                        }
                    }
                    this.stats = e;
                }
            }),
            v(this, "handleMLSFailure", (e, t) => {
                this.emit(h.yq.MLSFailure, e, t);
            }),
            (this.videoSupported = n),
            (this.logger = new f.Vy("Connection(".concat(e, ")"))),
            this.logger.enableNativeLogger(!0);
    }
}
