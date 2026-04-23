"use strict";
n.d(t, { A: () => I }), n(321073), n(667532);
var r = n(837385),
    i = n.n(r),
    s = n(415955),
    a = n.n(s),
    o = n(214958),
    l = n.n(o),
    u = n(118356),
    c = n(205693),
    d = n(909131),
    _ = n(993760),
    f = n(405163),
    p = n(267411),
    h = n(400976),
    E = n(731854),
    m = n(396574);
let g = l().name?.toLowerCase().includes("firefox");
function A(e, t) {
    e.sender.replaceTrack(t), (e.direction = null != t ? "sendrecv" : "recvonly");
}
class I extends d.A {
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
        super(e), (this.logger = new u.Vy(`UnifiedConnection(${e.context})`));
        let t = e.dave;
        null == t ||
            (0, p.o7)() ||
            (this.logger.warn("DAVE is initialized but encoded transforms are not supported"), (t = null)),
            null != t &&
                ((this.daveSessionManager = new _.m(t, e.transientKeys, this.userId)),
                this.daveSessionManager.on(c.yq.MLSFailure, (e, t) => {
                    this.emit(c.yq.MLSFailure, e, t);
                }),
                this.daveSessionManager.on(c.yq.SecureFramesUpdate, (e) => {
                    this.emit(c.yq.SecureFramesUpdate, e);
                })),
            (this.videoSupported = m.g7);
        const n = (this.pc = new RTCPeerConnection({
            bundlePolicy: "max-bundle",
            sdpSemantics: "unified-plan",
            encodedInsertableStreams: null != this.daveSessionManager,
        }));
        m.LU
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
        let r;
        (this.audioCodec !== e || this.videoCodec !== t) &&
            ((r = this.codecs.find((t) => t.name === e)),
            (this.audioCodec = e),
            (this.audioPayloadType = r?.payloadType ?? 0),
            (r = this.codecs.find((e) => e.name === t)),
            (this.videoCodec = t),
            (this.videoPayloadType = r?.payloadType ?? 0),
            (this.rtxPayloadType = r?.rtxPayloadType ?? 0),
            this.daveSessionManager?.updateLocalUserCodecs(e, t),
            this.logger.info("Renegotiating: Codecs changed"),
            this.handleNegotiationNeeded());
    }
    setStream(e) {
        let t = "closed" === this.iceConnectionState;
        null != e &&
            !t &&
            (A(this.audioTransceiver, e.getAudioTracks()[0]),
            this.videoSupported && A(this.videoTransceiver, e.getVideoTracks()[0])),
            this.logger.info("Renegotiating: Streams changed"),
            this.handleNegotiationNeeded();
    }
    createUser(e, t, n) {
        if ((this.daveSessionManager?.createUser(e), 0 === t))
            return void this.logger.warn(`Attempting to create user ${e} with 0 audio SSRC`);
        this.logger.info(`Creating user: ${e} with audio SSRC: ${t} and video SSRCs: ${n?.join(",") ?? 0}`);
        let r = !1,
            i = this.users.get(e);
        if ((null == i && (i = {}), i.audioSSRC !== t)) {
            (i.audioSSRC = t), (r = !0), this.unassignedStreams.audio.push({ cname: e, ssrc: t });
            let n = this.inactiveTransceivers.audio.length,
                s = this.unassignedStreams.audio.length;
            this.addTransceivers("audio", "recvonly", 10 + s - n);
        }
        if (this.videoSupported && void 0 !== n && (!g || void 0 === i.videoSSRC)) {
            let t = null != n && n.length > 0 ? n[0] : 0;
            if (t > 0) {
                if (i.videoSSRC !== t) {
                    (i.videoSSRC = t), (r = !0), this.unassignedStreams.video.push({ cname: e, ssrc: t });
                    let n = this.inactiveTransceivers.video.length,
                        s = this.unassignedStreams.video.length;
                    this.addTransceivers("video", "recvonly", 10 + s - n);
                }
            } else null != i.videoSSRC && ((i.videoSSRC = void 0), (r = !0));
        }
        if (r) {
            this.users.set(e, i), t > 0 && this.userIdsBySsrc.set(t, e);
            let r = null != n && n.length > 0 ? n[0] : 0;
            r > 0 && this.userIdsBySsrc.set(r, e),
                this.daveSessionManager?.updateSsrcs(e, t, n ?? []),
                this.logger.info("Renegotiating: User joined"),
                this.handleNegotiationNeeded();
        }
    }
    destroyUser(e) {
        this.daveSessionManager?.destroyUser(e);
        let t = this.users.get(e);
        if (null != t) {
            let { audioSSRC: n, videoSSRC: r } = t;
            this.users.delete(e),
                null != n && this.userIdsBySsrc.delete(n),
                null != r && this.userIdsBySsrc.delete(r),
                this.logger.info(`Renegotiating: User left: ${e}`),
                this.handleNegotiationNeeded();
        }
    }
    getUserIdBySsrc = (e) => this.userIdsBySsrc.get(e);
    setBitRate(e) {
        this.voiceBitrate !== e &&
            (super.setBitRate(e), this.setAudioEncoderParameters([{ parameter: d.k.AUDIO_BITRATE, value: e }]));
    }
    setRemoteAudioHistory(e) {
        this.enableAudioNack = e > 0;
    }
    setSDP(e) {
        if (!(0, h.IJ)(e)) throw Error(`Incorrect SDP received from rtc-worker: ${e}`);
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
            r = n.getParameters();
        if (null == r.encodings) return;
        let i = !1;
        for (let e of r.encodings)
            for (let { propertyName: n, value: r } of t)
                e[n] !== r &&
                    (this.logger.info(
                        `UnifiedConnection.setTransceiverEncodingParameters: ${n}: from '${e[n]}' to '${r}'`,
                    ),
                    (i = !0),
                    (e[n] = r));
        if (!i) return;
        let s = (e) => {
            this.logger.error(
                `UnifiedConnection.setTransceiverEncodingProperty: setParameters failed: "${e}" (${JSON.stringify(t)})"`,
            );
        };
        n.setParameters(r)
            .then(
                () => {},
                (e) => s(e),
            )
            .catch((e) => s(e));
    }
    setAudioEncoderParameters(e) {
        let t = { [d.k.AUDIO_BITRATE]: "maxBitrate" },
            n = [];
        for (let { parameter: r, value: i } of e) {
            let e = t[r];
            if (null == e)
                return void this.logger.info(`UnifiedConnection.setEncoderParameter: Unable to set parameter "${r}"`);
            n.push({ propertyName: e, value: i });
        }
        this.setTransceiverEncodingParameters(this.audioTransceiver, n);
    }
    setVideoEncoderParameters(e) {
        let t = {
                [d.k.VIDEO_BITRATE]: "maxBitrate",
                [d.k.VIDEO_RESOLUTION_SCALE]: "scaleResolutionDownBy",
                [d.k.VIDEO_FRAMERATE]: "maxFramerate",
            },
            n = [];
        for (let { parameter: r, value: i } of e) {
            let e = t[r];
            if (null == e)
                return void this.logger.info(`UnifiedConnection.setEncoderParameter: Unable to set parameter "${r}"`);
            n.push({ propertyName: e, value: i });
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
                videoSSRC: s,
                rtxSSRC: a,
            } = (0, h.$k)(t, this.experimentFlags.has(E.fd.BROWSER_HEVC)),
            o = (0, h.v5)(t);
        return { sdp: t, outboundStreams: n, codecs: r, audioSSRC: i, videoSSRC: s, rtxSSRC: a, extensions: o };
    }
    addTransceivers(e, t, n, r) {
        let i = this.pc,
            s = i.getTransceivers().length;
        for (let a = s; a < s + n; a++) {
            let n = { direction: t };
            "video" === e && null != r && (n.streams = [r]);
            let s = i.addTransceiver(e, n);
            this.daveSessionManager?.setupEncodedTransformsForTransceiver(s),
                this.inactiveTransceivers[e].push(a.toString());
        }
    }
    buildSSRCsFromOutboundStreams(e, t, n, r) {
        return {
            ssrcs: e.map((e) => {
                let { mid: i, type: s, direction: a } = e;
                i = String(i);
                let o = this.assignedStreams.get(i);
                if (null != o) {
                    let e = r.get(o.cname),
                        t = "audio" === s ? e?.audioSSRC : e?.videoSSRC;
                    o.ssrc !== t &&
                        (this.logger.info(
                            `Deleting inactive stream for user with mid: ${i}, type: ${s}, ssrc: ${o.ssrc}`,
                        ),
                        (o = void 0),
                        this.assignedStreams.delete(i));
                }
                let l = "audio" === s ? t : n,
                    u = this.inactiveTransceivers[s],
                    c = u.indexOf(i);
                return (
                    null == o &&
                        l.length > 0 &&
                        -1 !== c &&
                        ((o = l.pop()), u.splice(c, 1), this.assignedStreams.set(i, o)),
                    null == o && (o = { ssrc: -1, cname: "" }),
                    { ssrc: o.ssrc, cname: o.cname, type: s, direction: (0, h.u6)(a), mid: i }
                );
            }),
            remainingAudioStreams: t,
            remainingVideoStreams: n,
        };
    }
    generateSDPAnswer(e, t, n, r) {
        let i = this.audioCodec,
            s = this.audioPayloadType,
            a = this.videoCodec,
            o = this.videoPayloadType,
            l = this.videoSupported && this.videoTransceiver?.sender?.track != null,
            u = this.rtxPayloadType,
            c = this.sdp;
        if (null == i || null == s || null == a || null == o || null == u || null == c)
            throw Error(
                `Invalid payload: audioCodec: ${i}, audioPayloadType: ${null == s ? "null" : s}, videoCodec: ${a}, videoCodecPayloadType: ${null == o ? "null" : o}, rtxPayloadType: ${null == u ? "null" : u}, sdp: ${null == c ? "null" : c}`,
            );
        let {
            ssrcs: d,
            remainingAudioStreams: _,
            remainingVideoStreams: f,
        } = this.buildSSRCsFromOutboundStreams(e, t, n, r);
        return {
            remainingAudioStreams: _,
            remainingVideoStreams: f,
            answer: (0, h.AK)({
                type: "answer",
                baseSDP: c,
                audioCodec: i,
                audioPayloadType: s,
                audioBitRate: this.voiceBitrate,
                videoCodec: a,
                videoPayloadType: o,
                videoBitRate: 2500,
                sendingVideo: l,
                rtxPayloadType: u,
                ssrcs: d,
                extensions: this.extensions,
                enableAudioNack: this.enableAudioNack,
            }),
        };
    }
    async setRemoteAnswer(e, t, n, r) {
        let i = this.pc,
            { answer: s, remainingAudioStreams: a, remainingVideoStreams: o } = this.generateSDPAnswer(e, t, n, r);
        try {
            await i.setRemoteDescription(s);
        } catch (e) {
            this.logger.warn(`Failed to set remote answer: ${e}, type: ${s.type}`),
                this.emit(c.yq.SdpError, "setRemoteDescription", e.message, s.type);
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
            this.setConnectionState(E.$I.CONNECTED),
            this.on(c.yq.Stats, this.handleStats),
            this.input.on(f.T.VoiceActivity, this.handleVoiceActivity);
    }
    async handleNegotiationNeeded() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!e && (this.negotiating || null == this.sdp)) {
            this.negotiationNeeded = !0;
            return;
        }
        (this.negotiating = !0), (this.negotiationNeeded = !1);
        let t = i()(this.unassignedStreams.audio),
            n = i()(this.unassignedStreams.video),
            r = a()(this.users);
        (this.unassignedStreams.audio = []), (this.unassignedStreams.video = []);
        let s = this.pc,
            o = await s.createOffer(this.makeOfferAnswerOptions());
        try {
            await s.setLocalDescription(o);
        } catch (e) {
            this.logger.warn(`Failed to set local offer: ${e}, type: ${o.type}, sdp: ${o.sdp}`),
                this.emit(c.yq.SdpError, "setLocalDescription", e.message, o.type);
        }
        let {
            sdp: l,
            outboundStreams: u,
            codecs: d,
            audioSSRC: _,
            videoSSRC: f,
            rtxSSRC: p,
            extensions: m,
        } = this.parseLocalDescription();
        (this.codecs = d),
            (this.extensions = m),
            (_ !== this.audioSSRC || f !== this.videoSSRC) && this.daveSessionManager?.updateSsrcs(this.userId, _, [f]),
            (this.audioSSRC = _),
            (this.videoSSRC = f),
            (this.videoReady = f > 0 && p > 0),
            (this.videoStreamParameters[0].ssrc !== f ||
                this.videoStreamParameters[0].rtxSsrc !== p ||
                this.videoReady) &&
                ((this.videoStreamParameters[0].ssrc = 0 === f ? this.videoStreamParameters[0].ssrc : f),
                (this.videoStreamParameters[0].rtxSsrc = 0 === p ? this.videoStreamParameters[0].rtxSsrc : p),
                (this.videoStreamParameters[0].active = this.videoReady),
                this.emit(
                    c.yq.Video,
                    this.userId,
                    this.input.getVideoStreamId(),
                    this.audioSSRC,
                    f,
                    p,
                    this.videoStreamParameters,
                )),
            null == this.sdp
                ? this.emit(c.yq.Connected, "webrtc", (0, h.An)(l, this.experimentFlags.has(E.fd.BROWSER_HEVC)))
                : this.setRemoteAnswer(u, t, n, r);
    }
    handlePeerConnectionStateChange = () => {
        let e = this.peerConnectionState;
        switch ((this.logger.info("peerConnectionState =>", e), e)) {
            case "connected":
                this.setConnected();
                break;
            case "connecting":
                "connected" === this.iceConnectionState
                    ? this.setConnectionState(E.$I.DTLS_CONNECTING)
                    : this.setConnectionState(E.$I.ICE_CHECKING);
                break;
            case "failed":
                this.setConnectionState(E.$I.NO_ROUTE);
                break;
            case "disconnected":
            case "closed":
                this.setConnectionState(E.$I.DISCONNECTED);
        }
    };
    handleIceConnectionStateChange = () => {
        let e = this.iceConnectionState;
        switch ((this.logger.info("iceConnectionState =>", e), e)) {
            case "connected":
                this.setConnected();
                break;
            case "checking":
                this.setConnectionState(E.$I.ICE_CHECKING);
                break;
            case "failed":
                this.setConnectionState(E.$I.NO_ROUTE);
                break;
            case "disconnected":
            case "closed":
                this.setConnectionState(E.$I.DISCONNECTED);
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
            let [e, r] = t.split("-");
            this.trackUserIds[n.id] = e;
            let i = this.users.get(e);
            if (i?.videoSSRC?.toString?.() !== r && i?.audioSSRC?.toString?.() !== r)
                return void this.logger.info(`Got stale ssrc ${r} for ${n.kind} track, user ID ${e}`);
            this.createOutput(e, n),
                (n.onunmute = () => this.createOutput(e, n)),
                (n.onmute = () => {
                    this.users.get(e)?.videoSSRC == null && this.destroyOutput(e, n);
                });
        }
    };
}
