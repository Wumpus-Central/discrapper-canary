r.d(n, {
    Z: function () {
        return I;
    }
});
var i,
    a = r(653041);
var o = r(411104);
var s = r(47120);
var l = r(264344),
    u = r.n(l),
    c = r(259443),
    d = r(46973),
    f = r(912095),
    p = r(886848),
    h = r(649318),
    _ = r(65154),
    m = r(436620);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = 10,
    v = 10,
    y = null === (i = u().name) || void 0 === i ? void 0 : i.toLowerCase().includes('firefox');
function b(e, n) {
    e.sender.replaceTrack(n), (e.direction = null != n ? 'sendrecv' : 'recvonly');
}
class I extends f.Z {
    destroy() {
        super.destroy(), 'closed' !== this.signalingState && this.pc.close();
    }
    setCodecs(e, n, r) {
        var i, a, o;
        let s;
        if (this.audioCodec !== e || this.videoCodec !== n) (s = this.codecs.find((n) => n.name === e)), (this.audioCodec = e), (this.audioPayloadType = null !== (i = null == s ? void 0 : s.payloadType) && void 0 !== i ? i : 0), (s = this.codecs.find((e) => e.name === n)), (this.videoCodec = n), (this.videoPayloadType = null !== (a = null == s ? void 0 : s.payloadType) && void 0 !== a ? a : 0), (this.rtxPayloadType = null !== (o = null == s ? void 0 : s.rtxPayloadType) && void 0 !== o ? o : 0), this.logger.info('Renegotiating: Codecs changed'), this.handleNegotiationNeeded();
    }
    setStream(e) {
        let n = 'closed' === this.iceConnectionState;
        null != e && !n && (b(this.audioTransceiver, e.getAudioTracks()[0]), this.videoSupported && b(this.videoTransceiver, e.getVideoTracks()[0])), this.logger.info('Renegotiating: Streams changed'), this.handleNegotiationNeeded();
    }
    createUser(e, n, r) {
        var i;
        if (0 === n) {
            this.logger.warn('Attempting to create user '.concat(e, ' with 0 audio SSRC'));
            return;
        }
        this.logger.info(
            'Creating user: '
                .concat(e, ' with audio SSRC: ')
                .concat(n, ' and video SSRCs: ')
                .concat(null !== (i = null == r ? void 0 : r.join(',')) && void 0 !== i ? i : 0)
        );
        let a = !1,
            o = this.users.get(e);
        if ((null == o && (o = {}), o.audioSSRC !== n)) {
            (o.audioSSRC = n),
                (a = !0),
                this.unassignedStreams.audio.push({
                    cname: e,
                    ssrc: n
                });
            let r = this.inactiveTransceivers.audio.length,
                i = E + this.unassignedStreams.audio.length - r;
            this.addTransceivers('audio', 'recvonly', i);
        }
        if (this.videoSupported && void 0 !== r && (!y || void 0 === o.videoSSRC)) {
            let n = null != r && r.length > 0 ? r[0] : 0;
            if (n > 0) {
                if (o.videoSSRC !== n) {
                    (o.videoSSRC = n),
                        (a = !0),
                        this.unassignedStreams.video.push({
                            cname: e,
                            ssrc: n
                        });
                    let r = this.inactiveTransceivers.video.length,
                        i = v + this.unassignedStreams.video.length - r;
                    this.addTransceivers('video', 'recvonly', i);
                }
            } else null != o.videoSSRC && ((o.videoSSRC = void 0), (a = !0));
        }
        if (a) {
            this.users.set(e, o), n > 0 && this.userIdsBySsrc.set(n, e);
            let i = null != r && r.length > 0 ? r[0] : 0;
            i > 0 && this.userIdsBySsrc.set(i, e), this.logger.info('Renegotiating: User joined'), this.handleNegotiationNeeded();
        }
    }
    destroyUser(e) {
        let n = this.users.get(e);
        if (null != n) {
            let { audioSSRC: r, videoSSRC: i } = n;
            this.users.delete(e), null != r && this.userIdsBySsrc.delete(r), null != i && this.userIdsBySsrc.delete(i), this.logger.info('Renegotiating: User left'), this.handleNegotiationNeeded();
        }
    }
    setBitRate(e) {
        this.voiceBitrate !== e &&
            (super.setBitRate(e),
            this.setAudioEncoderParameters([
                {
                    parameter: f.p.AUDIO_BITRATE,
                    value: e
                }
            ]));
    }
    setSDP(e) {
        if (!(0, h.$6)(e)) throw Error('Incorrect SDP received from rtc-worker: '.concat(e));
        (this.sdp = e), this.setRemoteAnswer();
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
        return 'connected' === this.pc.iceConnectionState;
    }
    setTransceiverEncodingParameters(e, n) {
        if (null == e || 0 === n.length) return;
        let r = e.sender,
            i = r.getParameters();
        if (null == i.encodings) return;
        let a = !1;
        for (let e of i.encodings) for (let { propertyName: r, value: i } of n) e[r] !== i && (this.logger.info('UnifiedConnection.setTransceiverEncodingParameters: '.concat(r, ": from '").concat(e[r], "' to '").concat(i, "'")), (a = !0), (e[r] = i));
        if (!a) return;
        let o = (e) => {
            this.logger.error('UnifiedConnection.setTransceiverEncodingProperty: setParameters failed: "'.concat(e, '" (').concat(JSON.stringify(n), ')"'));
        };
        r.setParameters(i)
            .then(
                () => {},
                (e) => o(e)
            )
            .catch((e) => o(e));
    }
    setAudioEncoderParameters(e) {
        let n = { [f.p.AUDIO_BITRATE]: 'maxBitrate' },
            r = [];
        for (let { parameter: i, value: a } of e) {
            let e = n[i];
            if (null == e) {
                this.logger.info('UnifiedConnection.setEncoderParameter: Unable to set parameter "'.concat(i, '"'));
                return;
            }
            r.push({
                propertyName: e,
                value: a
            });
        }
        this.setTransceiverEncodingParameters(this.audioTransceiver, r);
    }
    setVideoEncoderParameters(e) {
        let n = {
                [f.p.VIDEO_BITRATE]: 'maxBitrate',
                [f.p.VIDEO_RESOLUTION_SCALE]: 'scaleResolutionDownBy',
                [f.p.VIDEO_FRAMERATE]: 'maxFramerate'
            },
            r = [];
        for (let { parameter: i, value: a } of e) {
            let e = n[i];
            if (null == e) {
                this.logger.info('UnifiedConnection.setEncoderParameter: Unable to set parameter "'.concat(i, '"'));
                return;
            }
            r.push({
                propertyName: e,
                value: a
            });
        }
        this.setTransceiverEncodingParameters(this.videoTransceiver, r);
    }
    getRawStats() {
        return this.pc.getStats();
    }
    makeOfferAnswerOptions() {
        return { iceRestart: !1 };
    }
    parseLocalDescription() {
        let e = this.pc.localDescription;
        if (null == e) throw Error('localDescription is null');
        let n = e.sdp,
            { outboundStreams: r, codecs: i, audioSSRC: a, videoSSRC: o, rtxSSRC: s } = (0, h.Nl)(n);
        return (this.outboundStreams = r), (this.codecs = i), (this.extensions = (0, h.nX)(n)), (this.audioSSRC = a), (this.videoReady = o > 0 && s > 0), (this.videoStreamParameters[0].ssrc !== o || this.videoStreamParameters[0].rtxSsrc !== s || this.videoReady) && ((this.videoStreamParameters[0].ssrc = 0 === o ? this.videoStreamParameters[0].ssrc : o), (this.videoStreamParameters[0].rtxSsrc = 0 === s ? this.videoStreamParameters[0].rtxSsrc : s), (this.videoStreamParameters[0].active = this.videoReady), this.emit(d.Sh.Video, this.userId, this.input.getVideoStreamId(), this.audioSSRC, o, s, this.videoStreamParameters)), n;
    }
    addTransceivers(e, n, r, i) {
        let a = this.pc,
            o = a.getTransceivers().length;
        for (let s = o; s < o + r; s++)
            'video' === e && null != i
                ? a.addTransceiver(e, {
                      direction: n,
                      streams: [i]
                  })
                : a.addTransceiver(e, { direction: n }),
                this.inactiveTransceivers[e].push(s.toString());
    }
    buildSSRCsFromOutboundStreams() {
        return this.outboundStreams.map((e) => {
            let { mid: n, type: r, direction: i } = e;
            n = String(n);
            let a = this.assignedStreams.get(n);
            if (null != a) {
                let e = this.users.get(a.cname),
                    i = 'audio' === r ? (null == e ? void 0 : e.audioSSRC) : null == e ? void 0 : e.videoSSRC;
                a.ssrc !== i && ((a = void 0), this.assignedStreams.delete(n));
            }
            let o = this.unassignedStreams[r],
                s = this.inactiveTransceivers[r],
                l = s.indexOf(n);
            return (
                null == a && o.length > 0 && -1 !== l && ((a = o.pop()), s.splice(l, 1), this.assignedStreams.set(n, a)),
                null == a &&
                    (a = {
                        ssrc: -1,
                        cname: ''
                    }),
                {
                    ssrc: a.ssrc,
                    cname: a.cname,
                    type: r,
                    direction: (0, h.Mg)(i),
                    mid: n
                }
            );
        });
    }
    generateSDPAnswer() {
        var e, n;
        let r = this.audioCodec,
            i = this.audioPayloadType,
            a = this.videoCodec,
            o = this.videoPayloadType,
            s = this.videoSupported && (null === (n = this.videoTransceiver) || void 0 === n ? void 0 : null === (e = n.sender) || void 0 === e ? void 0 : e.track) != null,
            l = this.rtxPayloadType,
            u = this.sdp;
        if (null == r || null == i || null == a || null == o || null == l || null == u)
            throw Error(
                'Invalid payload: audioCodec: '
                    .concat(r, ', audioPayloadType: ')
                    .concat(null == i ? 'null' : i, ', videoCodec: ')
                    .concat(a, ', videoCodecPayloadType: ')
                    .concat(null == o ? 'null' : o, ', rtxPayloadType: ')
                    .concat(null == l ? 'null' : l, ', sdp: ')
                    .concat(null == u ? 'null' : u)
            );
        let c = this.buildSSRCsFromOutboundStreams();
        return (0, h.Rx)({
            type: 'answer',
            baseSDP: u,
            audioCodec: r,
            audioPayloadType: i,
            audioBitRate: this.voiceBitrate,
            videoCodec: a,
            videoPayloadType: o,
            videoBitRate: 2500,
            sendingVideo: s,
            rtxPayloadType: l,
            ssrcs: c,
            extensions: this.extensions
        });
    }
    async setRemoteAnswer() {
        let e = this.pc,
            n = this.generateSDPAnswer();
        try {
            await e.setRemoteDescription(n);
        } catch (e) {
            this.logger.warn('Failed to set remote answer: '.concat(e, ', type: ').concat(n.type, ', sdp: ').concat(n.sdp)), this.emit(d.Sh.SdpError, 'setRemoteDescription', e.message, n.type, n.sdp);
        }
        (this.unassignedStreams.audio.length > 0 || this.unassignedStreams.video.length > 0) && ((this.negotiationNeeded = !0), this.logger.info('Renegotiating: Streams left unassigned after negotiation - renegotiate')), (this.negotiating = !1), this.negotiationNeeded && this.handleNegotiationNeeded();
    }
    setConnected() {
        this.input.reset(), this.setConnectionState(_.$j.CONNECTED), this.on(d.Sh.Stats, this.handleStats), this.input.on(p.G.VoiceActivity, this.handleVoiceActivity);
    }
    async handleNegotiationNeeded() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!e && (this.negotiating || null == this.sdp)) {
            this.negotiationNeeded = !0;
            return;
        }
        (this.negotiating = !0), (this.negotiationNeeded = !1);
        let n = this.pc,
            r = await n.createOffer(this.makeOfferAnswerOptions());
        try {
            await n.setLocalDescription(r);
        } catch (e) {
            this.logger.warn('Failed to set local offer: '.concat(e, ', type: ').concat(r.type, ', sdp: ').concat(r.sdp)), this.emit(d.Sh.SdpError, 'setLocalDescription', e.message, r.type, r.sdp);
        }
        let i = this.parseLocalDescription();
        null == this.sdp ? this.emit(d.Sh.Connected, 'webrtc', (0, h.sc)(i)) : this.setRemoteAnswer();
    }
    constructor(e, n, r, i) {
        super(e, n, r, i),
            g(this, 'pc', void 0),
            g(this, 'sdp', null),
            g(this, 'negotiating', !1),
            g(this, 'negotiationNeeded', !1),
            g(this, 'audioTransceiver', void 0),
            g(this, 'videoTransceiver', void 0),
            g(this, 'users', new Map()),
            g(this, 'userIdsBySsrc', new Map()),
            g(this, 'assignedStreams', new Map()),
            g(this, 'unassignedStreams', {
                audio: [],
                video: []
            }),
            g(this, 'inactiveTransceivers', {
                audio: [],
                video: []
            }),
            g(this, 'outboundStreams', []),
            g(this, 'trackUserIds', {}),
            g(this, 'audioCodec', null),
            g(this, 'audioPayloadType', null),
            g(this, 'videoCodec', null),
            g(this, 'videoPayloadType', null),
            g(this, 'rtxPayloadType', null),
            g(this, 'extensions', []),
            g(this, 'codecs', []),
            g(this, 'logger', void 0),
            g(this, 'getUserIdBySsrc', (e) => this.userIdsBySsrc.get(e)),
            g(this, 'handlePeerConnectionStateChange', () => {
                let e = this.peerConnectionState;
                switch ((this.logger.info('peerConnectionState =>', e), e)) {
                    case 'connected':
                        this.setConnected();
                        break;
                    case 'connecting':
                        'connected' === this.iceConnectionState ? this.setConnectionState(_.$j.DTLS_CONNECTING) : this.setConnectionState(_.$j.ICE_CHECKING);
                        break;
                    case 'failed':
                        this.setConnectionState(_.$j.NO_ROUTE);
                        break;
                    case 'disconnected':
                    case 'closed':
                        this.setConnectionState(_.$j.DISCONNECTED);
                }
            }),
            g(this, 'handleIceConnectionStateChange', () => {
                let e = this.iceConnectionState;
                switch ((this.logger.info('iceConnectionState =>', e), e)) {
                    case 'connected':
                        this.setConnected();
                        break;
                    case 'checking':
                        this.setConnectionState(_.$j.ICE_CHECKING);
                        break;
                    case 'failed':
                        this.setConnectionState(_.$j.NO_ROUTE);
                        break;
                    case 'disconnected':
                    case 'closed':
                        this.setConnectionState(_.$j.DISCONNECTED);
                }
            }),
            g(this, 'handleSignalingStateChange', () => {
                let e = this.signalingState;
                this.logger.info('signalingState => '.concat(e));
            }),
            g(this, 'handleIceGatheringStateChange', () => {
                this.logger.info('iceGatheringState =>', this.iceGatheringState);
            }),
            g(this, 'handleTrack', (e) => {
                let n = e.streams[0].id,
                    r = e.track;
                if (!/^default/.test(r.id)) {
                    var i, a, o, s;
                    let [e, l] = n.split('-');
                    this.trackUserIds[r.id] = e;
                    let u = this.users.get(e);
                    if ((null == u ? void 0 : null === (a = u.videoSSRC) || void 0 === a ? void 0 : null === (i = a.toString) || void 0 === i ? void 0 : i.call(a)) !== l && (null == u ? void 0 : null === (s = u.audioSSRC) || void 0 === s ? void 0 : null === (o = s.toString) || void 0 === o ? void 0 : o.call(s)) !== l) {
                        this.logger.info('Got stale ssrc '.concat(l, ' for ').concat(r.kind, ' track, user ID ').concat(e));
                        return;
                    }
                    this.createOutput(e, r),
                        (r.onunmute = () => this.createOutput(e, r)),
                        (r.onmute = () => {
                            var n;
                            (null === (n = this.users.get(e)) || void 0 === n ? void 0 : n.videoSSRC) == null && this.destroyOutput(e, r);
                        });
                }
            }),
            (this.logger = new c.Yd('UnifiedConnection('.concat(e, ')'))),
            (this.videoSupported = m.U8);
        let a = (this.pc = new RTCPeerConnection({
            bundlePolicy: 'max-bundle',
            sdpSemantics: 'unified-plan'
        }));
        m.X6 ? ((a.onconnectionstatechange = this.handlePeerConnectionStateChange), (a.oniceconnectionstatechange = this.handlePeerConnectionStateChange)) : (a.oniceconnectionstatechange = this.handleIceConnectionStateChange),
            (a.onsignalingstatechange = this.handleSignalingStateChange),
            (a.onicegatheringstatechange = this.handleIceGatheringStateChange),
            (a.ontrack = this.handleTrack),
            a.addTransceiver('audio', {
                direction: 'recvonly',
                sendEncodings: [{ maxBitrate: this.voiceBitrate }]
            }),
            (this.audioTransceiver = a.getTransceivers()[0]),
            this.videoSupported && (this.addTransceivers('video', 'recvonly', 1, this.input.getVideoStream()), (this.videoTransceiver = a.getTransceivers()[1])),
            this.addTransceivers('audio', 'recvonly', E),
            this.videoSupported && this.addTransceivers('video', 'recvonly', v),
            this.setStream(this.input.stream),
            this.logger.info('Renegotiating: Initial negotiation'),
            this.handleNegotiationNeeded(!0);
    }
}
