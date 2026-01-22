n.d(t, { A: () => S }), n(321073), n(65821), n(896048), n(457529), n(667532), n(747238);
var r,
    i = n(837385),
    a = n.n(i),
    s = n(415955),
    o = n.n(s),
    l = n(214958),
    c = n.n(l),
    u = n(118356),
    d = n(205693),
    f = n(909131),
    p = n(993760),
    _ = n(405163),
    h = n(267411),
    m = n(400976),
    g = n(731854),
    E = n(396574);
function b(e, t, n) {
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
let y = 10,
    O = 10,
    A = null == (r = c().name) ? void 0 : r.toLowerCase().includes("firefox");
function v(e, t) {
    e.sender.replaceTrack(t), (e.direction = null != t ? "sendrecv" : "recvonly");
}
class S extends f.A {
    destroy() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.destroy(e), "closed" !== this.signalingState && this.pc.close();
    }
    setCodecs(e, t, n) {
        var r, i, a, s;
        let o;
        (this.audioCodec !== e || this.videoCodec !== t) &&
            ((o = this.codecs.find((t) => t.name === e)),
            (this.audioCodec = e),
            (this.audioPayloadType = null != (r = null == o ? void 0 : o.payloadType) ? r : 0),
            (o = this.codecs.find((e) => e.name === t)),
            (this.videoCodec = t),
            (this.videoPayloadType = null != (i = null == o ? void 0 : o.payloadType) ? i : 0),
            (this.rtxPayloadType = null != (a = null == o ? void 0 : o.rtxPayloadType) ? a : 0),
            null == (s = this.daveSessionManager) || s.updateLocalUserCodecs(e, t),
            this.logger.info("Renegotiating: Codecs changed"),
            this.handleNegotiationNeeded());
    }
    setStream(e) {
        let t = "closed" === this.iceConnectionState;
        null != e &&
            !t &&
            (v(this.audioTransceiver, e.getAudioTracks()[0]),
            this.videoSupported && v(this.videoTransceiver, e.getVideoTracks()[0])),
            this.logger.info("Renegotiating: Streams changed"),
            this.handleNegotiationNeeded();
    }
    createUser(e, t, n) {
        var r, i, a;
        if ((null == (i = this.daveSessionManager) || i.createUser(e), 0 === t))
            return void this.logger.warn("Attempting to create user ".concat(e, " with 0 audio SSRC"));
        this.logger.info(
            "Creating user: "
                .concat(e, " with audio SSRC: ")
                .concat(t, " and video SSRCs: ")
                .concat(null != (r = null == n ? void 0 : n.join(",")) ? r : 0),
        );
        let s = !1,
            o = this.users.get(e);
        if ((null == o && (o = {}), o.audioSSRC !== t)) {
            (o.audioSSRC = t),
                (s = !0),
                this.unassignedStreams.audio.push({
                    cname: e,
                    ssrc: t,
                });
            let n = this.inactiveTransceivers.audio.length,
                r = y + this.unassignedStreams.audio.length - n;
            this.addTransceivers("audio", "recvonly", r);
        }
        if (this.videoSupported && void 0 !== n && (!A || void 0 === o.videoSSRC)) {
            let t = null != n && n.length > 0 ? n[0] : 0;
            if (t > 0) {
                if (o.videoSSRC !== t) {
                    (o.videoSSRC = t),
                        (s = !0),
                        this.unassignedStreams.video.push({
                            cname: e,
                            ssrc: t,
                        });
                    let n = this.inactiveTransceivers.video.length,
                        r = O + this.unassignedStreams.video.length - n;
                    this.addTransceivers("video", "recvonly", r);
                }
            } else null != o.videoSSRC && ((o.videoSSRC = void 0), (s = !0));
        }
        if (s) {
            this.users.set(e, o), t > 0 && this.userIdsBySsrc.set(t, e);
            let r = null != n && n.length > 0 ? n[0] : 0;
            r > 0 && this.userIdsBySsrc.set(r, e),
                null == (a = this.daveSessionManager) || a.updateSsrcs(e, t, null != n ? n : []),
                this.logger.info("Renegotiating: User joined"),
                this.handleNegotiationNeeded();
        }
    }
    destroyUser(e) {
        var t;
        null == (t = this.daveSessionManager) || t.destroyUser(e);
        let n = this.users.get(e);
        if (null != n) {
            let { audioSSRC: t, videoSSRC: r } = n;
            this.users.delete(e),
                null != t && this.userIdsBySsrc.delete(t),
                null != r && this.userIdsBySsrc.delete(r),
                this.logger.info("Renegotiating: User left: ".concat(e)),
                this.handleNegotiationNeeded();
        }
    }
    setBitRate(e) {
        this.voiceBitrate !== e &&
            (super.setBitRate(e),
            this.setAudioEncoderParameters([
                {
                    parameter: f.k.AUDIO_BITRATE,
                    value: e,
                },
            ]));
    }
    setRemoteAudioHistory(e) {
        this.enableAudioNack = e > 0;
    }
    setSDP(e) {
        if (!(0, m.IJ)(e)) throw Error("Incorrect SDP received from rtc-worker: ".concat(e));
        if ("have-local-offer" !== this.signalingState)
            throw Error("Invalid signaling state ".concat(this.signalingState));
        let { outboundStreams: t } = this.parseLocalDescription();
        (this.sdp = e), this.setRemoteAnswer(t, [], [], new Map());
    }
    prepareSecureFramesTransition(e, t, n) {
        var r;
        null == (r = this.daveSessionManager) || r.prepareSecureFramesTransition(e, t, n);
    }
    prepareSecureFramesEpoch(e, t, n) {
        var r;
        null == (r = this.daveSessionManager) || r.prepareSecureFramesEpoch(e, t, n);
    }
    executeSecureFramesTransition(e) {
        var t;
        null == (t = this.daveSessionManager) || t.executeSecureFramesTransition(e);
    }
    getMLSKeyPackage(e) {
        var t;
        null == (t = this.daveSessionManager) || t.getMLSKeyPackage(e);
    }
    updateMLSExternalSender(e) {
        var t;
        null == (t = this.daveSessionManager) || t.updateMLSExternalSender(e);
    }
    processMLSProposals(e, t) {
        var n;
        null == (n = this.daveSessionManager) || n.processMLSProposals(e, t);
    }
    prepareMLSCommitTransition(e, t, n) {
        var r;
        null == (r = this.daveSessionManager) || r.prepareMLSCommitTransition(e, t, n);
    }
    processMLSWelcome(e, t, n) {
        var r;
        null == (r = this.daveSessionManager) || r.processMLSWelcome(e, t, n);
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
            r = n.getParameters();
        if (null == r.encodings) return;
        let i = !1;
        for (let e of r.encodings)
            for (let { propertyName: n, value: r } of t)
                e[n] !== r &&
                    (this.logger.info(
                        "UnifiedConnection.setTransceiverEncodingParameters: "
                            .concat(n, ": from '")
                            .concat(e[n], "' to '")
                            .concat(r, "'"),
                    ),
                    (i = !0),
                    (e[n] = r));
        if (!i) return;
        let a = (e) => {
            this.logger.error(
                'UnifiedConnection.setTransceiverEncodingProperty: setParameters failed: "'
                    .concat(e, '" (')
                    .concat(JSON.stringify(t), ')"'),
            );
        };
        n.setParameters(r)
            .then(
                () => {},
                (e) => a(e),
            )
            .catch((e) => a(e));
    }
    setAudioEncoderParameters(e) {
        let t = { [f.k.AUDIO_BITRATE]: "maxBitrate" },
            n = [];
        for (let { parameter: r, value: i } of e) {
            let e = t[r];
            if (null == e)
                return void this.logger.info(
                    'UnifiedConnection.setEncoderParameter: Unable to set parameter "'.concat(r, '"'),
                );
            n.push({
                propertyName: e,
                value: i,
            });
        }
        this.setTransceiverEncodingParameters(this.audioTransceiver, n);
    }
    setVideoEncoderParameters(e) {
        let t = {
                [f.k.VIDEO_BITRATE]: "maxBitrate",
                [f.k.VIDEO_RESOLUTION_SCALE]: "scaleResolutionDownBy",
                [f.k.VIDEO_FRAMERATE]: "maxFramerate",
            },
            n = [];
        for (let { parameter: r, value: i } of e) {
            let e = t[r];
            if (null == e)
                return void this.logger.info(
                    'UnifiedConnection.setEncoderParameter: Unable to set parameter "'.concat(r, '"'),
                );
            n.push({
                propertyName: e,
                value: i,
            });
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
                codecs: r,
                audioSSRC: i,
                videoSSRC: a,
                rtxSSRC: s,
            } = (0, m.$k)(t, this.experimentFlags.has(g.fd.BROWSER_HEVC)),
            o = (0, m.v5)(t);
        return {
            sdp: t,
            outboundStreams: n,
            codecs: r,
            audioSSRC: i,
            videoSSRC: a,
            rtxSSRC: s,
            extensions: o,
        };
    }
    addTransceivers(e, t, n, r) {
        let i = this.pc,
            a = i.getTransceivers().length;
        for (let o = a; o < a + n; o++) {
            var s;
            let n = { direction: t };
            "video" === e && null != r && (n.streams = [r]);
            let a = i.addTransceiver(e, n);
            null == (s = this.daveSessionManager) || s.setupEncodedTransformsForTransceiver(a),
                this.inactiveTransceivers[e].push(o.toString());
        }
    }
    buildSSRCsFromOutboundStreams(e, t, n, r) {
        return {
            ssrcs: e.map((e) => {
                let { mid: i, type: a, direction: s } = e;
                i = String(i);
                let o = this.assignedStreams.get(i);
                if (null != o) {
                    let e = r.get(o.cname),
                        t = "audio" === a ? (null == e ? void 0 : e.audioSSRC) : null == e ? void 0 : e.videoSSRC;
                    o.ssrc !== t &&
                        (this.logger.info(
                            "Deleting inactive stream for user with mid: "
                                .concat(i, ", type: ")
                                .concat(a, ", ssrc: ")
                                .concat(o.ssrc),
                        ),
                        (o = void 0),
                        this.assignedStreams.delete(i));
                }
                let l = "audio" === a ? t : n,
                    c = this.inactiveTransceivers[a],
                    u = c.indexOf(i);
                return (
                    null == o &&
                        l.length > 0 &&
                        -1 !== u &&
                        ((o = l.pop()), c.splice(u, 1), this.assignedStreams.set(i, o)),
                    null == o &&
                        (o = {
                            ssrc: -1,
                            cname: "",
                        }),
                    {
                        ssrc: o.ssrc,
                        cname: o.cname,
                        type: a,
                        direction: (0, m.u6)(s),
                        mid: i,
                    }
                );
            }),
            remainingAudioStreams: t,
            remainingVideoStreams: n,
        };
    }
    generateSDPAnswer(e, t, n, r) {
        var i, a;
        let s = this.audioCodec,
            o = this.audioPayloadType,
            l = this.videoCodec,
            c = this.videoPayloadType,
            u =
                this.videoSupported &&
                (null == (a = this.videoTransceiver) || null == (i = a.sender) ? void 0 : i.track) != null,
            d = this.rtxPayloadType,
            f = this.sdp;
        if (null == s || null == o || null == l || null == c || null == d || null == f)
            throw Error(
                "Invalid payload: audioCodec: "
                    .concat(s, ", audioPayloadType: ")
                    .concat(null == o ? "null" : o, ", videoCodec: ")
                    .concat(l, ", videoCodecPayloadType: ")
                    .concat(null == c ? "null" : c, ", rtxPayloadType: ")
                    .concat(null == d ? "null" : d, ", sdp: ")
                    .concat(null == f ? "null" : f),
            );
        let {
            ssrcs: p,
            remainingAudioStreams: _,
            remainingVideoStreams: h,
        } = this.buildSSRCsFromOutboundStreams(e, t, n, r);
        return {
            remainingAudioStreams: _,
            remainingVideoStreams: h,
            answer: (0, m.AK)({
                type: "answer",
                baseSDP: f,
                audioCodec: s,
                audioPayloadType: o,
                audioBitRate: this.voiceBitrate,
                videoCodec: l,
                videoPayloadType: c,
                videoBitRate: 2500,
                sendingVideo: u,
                rtxPayloadType: d,
                ssrcs: p,
                extensions: this.extensions,
                enableAudioNack: this.enableAudioNack,
            }),
        };
    }
    async setRemoteAnswer(e, t, n, r) {
        let i = this.pc,
            { answer: a, remainingAudioStreams: s, remainingVideoStreams: o } = this.generateSDPAnswer(e, t, n, r);
        try {
            await i.setRemoteDescription(a);
        } catch (e) {
            this.logger.warn("Failed to set remote answer: ".concat(e, ", type: ").concat(a.type)),
                this.emit(d.yq.SdpError, "setRemoteDescription", e.message, a.type);
        }
        this.unassignedStreams.audio.unshift(...s),
            this.unassignedStreams.video.unshift(...o),
            (this.unassignedStreams.audio.length > 0 || this.unassignedStreams.video.length > 0) &&
                ((this.negotiationNeeded = !0),
                this.logger.info("Renegotiating: Streams left unassigned after negotiation - renegotiate")),
            (this.negotiating = !1),
            this.negotiationNeeded && this.handleNegotiationNeeded();
    }
    setConnected() {
        this.input.reset(),
            this.setConnectionState(g.$I.CONNECTED),
            this.on(d.yq.Stats, this.handleStats),
            this.input.on(_.T.VoiceActivity, this.handleVoiceActivity);
    }
    async handleNegotiationNeeded() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!e && (this.negotiating || null == this.sdp)) {
            this.negotiationNeeded = !0;
            return;
        }
        (this.negotiating = !0), (this.negotiationNeeded = !1);
        let t = a()(this.unassignedStreams.audio),
            n = a()(this.unassignedStreams.video),
            r = o()(this.users);
        (this.unassignedStreams.audio = []), (this.unassignedStreams.video = []);
        let i = this.pc,
            s = await i.createOffer(this.makeOfferAnswerOptions());
        try {
            await i.setLocalDescription(s);
        } catch (e) {
            this.logger.warn(
                "Failed to set local offer: ".concat(e, ", type: ").concat(s.type, ", sdp: ").concat(s.sdp),
            ),
                this.emit(d.yq.SdpError, "setLocalDescription", e.message, s.type);
        }
        let {
            sdp: l,
            outboundStreams: c,
            codecs: u,
            audioSSRC: f,
            videoSSRC: p,
            rtxSSRC: _,
            extensions: h,
        } = this.parseLocalDescription();
        if (((this.codecs = u), (this.extensions = h), f !== this.audioSSRC || p !== this.videoSSRC)) {
            var E;
            null == (E = this.daveSessionManager) || E.updateSsrcs(this.userId, f, [p]);
        }
        (this.audioSSRC = f),
            (this.videoSSRC = p),
            (this.videoReady = p > 0 && _ > 0),
            (this.videoStreamParameters[0].ssrc !== p ||
                this.videoStreamParameters[0].rtxSsrc !== _ ||
                this.videoReady) &&
                ((this.videoStreamParameters[0].ssrc = 0 === p ? this.videoStreamParameters[0].ssrc : p),
                (this.videoStreamParameters[0].rtxSsrc = 0 === _ ? this.videoStreamParameters[0].rtxSsrc : _),
                (this.videoStreamParameters[0].active = this.videoReady),
                this.emit(
                    d.yq.Video,
                    this.userId,
                    this.input.getVideoStreamId(),
                    this.audioSSRC,
                    p,
                    _,
                    this.videoStreamParameters,
                )),
            null == this.sdp
                ? this.emit(d.yq.Connected, "webrtc", (0, m.An)(l, this.experimentFlags.has(g.fd.BROWSER_HEVC)))
                : this.setRemoteAnswer(c, t, n, r);
    }
    constructor(e) {
        var t;
        super(e),
            b(this, "pc", void 0),
            b(this, "sdp", null),
            b(this, "negotiating", !1),
            b(this, "negotiationNeeded", !1),
            b(this, "audioTransceiver", void 0),
            b(this, "videoTransceiver", void 0),
            b(this, "users", new Map()),
            b(this, "userIdsBySsrc", new Map()),
            b(this, "assignedStreams", new Map()),
            b(this, "unassignedStreams", {
                audio: [],
                video: [],
            }),
            b(this, "inactiveTransceivers", {
                audio: [],
                video: [],
            }),
            b(this, "trackUserIds", {}),
            b(this, "audioCodec", null),
            b(this, "audioPayloadType", null),
            b(this, "videoCodec", null),
            b(this, "videoPayloadType", null),
            b(this, "rtxPayloadType", null),
            b(this, "enableAudioNack", !1),
            b(this, "extensions", []),
            b(this, "codecs", []),
            b(this, "daveSessionManager", null),
            b(this, "logger", void 0),
            b(this, "getUserIdBySsrc", (e) => this.userIdsBySsrc.get(e)),
            b(this, "handlePeerConnectionStateChange", () => {
                let e = this.peerConnectionState;
                switch ((this.logger.info("peerConnectionState =>", e), e)) {
                    case "connected":
                        this.setConnected();
                        break;
                    case "connecting":
                        "connected" === this.iceConnectionState
                            ? this.setConnectionState(g.$I.DTLS_CONNECTING)
                            : this.setConnectionState(g.$I.ICE_CHECKING);
                        break;
                    case "failed":
                        this.setConnectionState(g.$I.NO_ROUTE);
                        break;
                    case "disconnected":
                    case "closed":
                        this.setConnectionState(g.$I.DISCONNECTED);
                }
            }),
            b(this, "handleIceConnectionStateChange", () => {
                let e = this.iceConnectionState;
                switch ((this.logger.info("iceConnectionState =>", e), e)) {
                    case "connected":
                        this.setConnected();
                        break;
                    case "checking":
                        this.setConnectionState(g.$I.ICE_CHECKING);
                        break;
                    case "failed":
                        this.setConnectionState(g.$I.NO_ROUTE);
                        break;
                    case "disconnected":
                    case "closed":
                        this.setConnectionState(g.$I.DISCONNECTED);
                }
            }),
            b(this, "handleSignalingStateChange", () => {
                let e = this.signalingState;
                this.logger.info("signalingState => ".concat(e));
            }),
            b(this, "handleIceGatheringStateChange", () => {
                this.logger.info("iceGatheringState =>", this.iceGatheringState);
            }),
            b(this, "handleTrack", (e) => {
                let t = e.streams[0].id,
                    n = e.track;
                if (!/^default/.test(n.id)) {
                    var r, i, a, s;
                    let [e, o] = t.split("-");
                    this.trackUserIds[n.id] = e;
                    let l = this.users.get(e);
                    if (
                        (null == l || null == (i = l.videoSSRC) || null == (r = i.toString) ? void 0 : r.call(i)) !==
                            o &&
                        (null == l || null == (s = l.audioSSRC) || null == (a = s.toString) ? void 0 : a.call(s)) !== o
                    )
                        return void this.logger.info(
                            "Got stale ssrc ".concat(o, " for ").concat(n.kind, " track, user ID ").concat(e),
                        );
                    this.createOutput(e, n),
                        (n.onunmute = () => this.createOutput(e, n)),
                        (n.onmute = () => {
                            var t;
                            (null == (t = this.users.get(e)) ? void 0 : t.videoSSRC) == null &&
                                this.destroyOutput(e, n);
                        });
                }
            }),
            (this.logger = new u.Vy("UnifiedConnection(".concat(e.context, ")")));
        let n = e.dave;
        null == n ||
            (0, h.o7)() ||
            (this.logger.warn("DAVE is initialized but encoded transforms are not supported"), (n = null)),
            null != n &&
                ((this.daveSessionManager = new p.m(n, e.transientKeys, this.userId)),
                this.daveSessionManager.on(d.yq.MLSFailure, (e, t) => {
                    this.emit(d.yq.MLSFailure, e, t);
                }),
                this.daveSessionManager.on(d.yq.SecureFramesUpdate, (e) => {
                    this.emit(d.yq.SecureFramesUpdate, e);
                })),
            (this.videoSupported = E.g7);
        const r = (this.pc = new RTCPeerConnection({
            bundlePolicy: "max-bundle",
            sdpSemantics: "unified-plan",
            encodedInsertableStreams: null != this.daveSessionManager,
        }));
        E.LU
            ? ((r.onconnectionstatechange = this.handlePeerConnectionStateChange),
              (r.oniceconnectionstatechange = this.handlePeerConnectionStateChange))
            : (r.oniceconnectionstatechange = this.handleIceConnectionStateChange),
            (r.onsignalingstatechange = this.handleSignalingStateChange),
            (r.onicegatheringstatechange = this.handleIceGatheringStateChange),
            (r.ontrack = this.handleTrack),
            (this.audioTransceiver = r.addTransceiver("audio", {
                direction: "recvonly",
                sendEncodings: [{ maxBitrate: this.voiceBitrate }],
            })),
            null == (t = this.daveSessionManager) || t.setupEncodedTransformsForTransceiver(this.audioTransceiver),
            this.videoSupported &&
                (this.addTransceivers("video", "recvonly", 1, this.input.getVideoStream()),
                (this.videoTransceiver = r.getTransceivers()[1])),
            this.addTransceivers("audio", "recvonly", y),
            this.videoSupported && this.addTransceivers("video", "recvonly", O),
            this.setStream(this.input.stream),
            this.logger.info("Renegotiating: Initial negotiation, user id: ".concat(e.userId)),
            this.handleNegotiationNeeded(!0);
    }
}
