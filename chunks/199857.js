n.d(t, { Z: () => b }), n(653041), n(411104), n(26686), n(47120), n(566702), n(733860), n(301563);
var r,
    i = n(74514),
    o = n.n(i),
    a = n(264344),
    s = n.n(a),
    l = n(46973),
    c = n(912095),
    u = n(886848),
    d = n(986770),
    f = n(649318),
    _ = n(65154),
    p = n(436620);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = 10,
    m = 10,
    E = null === (r = s().name) || void 0 === r ? void 0 : r.toLowerCase().includes('firefox');
function v(e, t) {
    e.sender.replaceTrack(t), (e.direction = null != t ? 'sendrecv' : 'recvonly');
}
class b extends c.Z {
    destroy() {
        super.destroy(), 'closed' !== this.signalingState && this.pc.close();
    }
    setCodecs(e, t, n) {
        var r, i, o;
        let a;
        (this.audioCodec !== e || this.videoCodec !== t) && ((a = this.codecs.find((t) => t.name === e)), (this.audioCodec = e), (this.audioPayloadType = null !== (r = null == a ? void 0 : a.payloadType) && void 0 !== r ? r : 0), (a = this.codecs.find((e) => e.name === t)), (this.videoCodec = t), (this.videoPayloadType = null !== (i = null == a ? void 0 : a.payloadType) && void 0 !== i ? i : 0), (this.rtxPayloadType = null !== (o = null == a ? void 0 : a.rtxPayloadType) && void 0 !== o ? o : 0), this.logger.info('Renegotiating: Codecs changed'), this.handleNegotiationNeeded());
    }
    setStream(e) {
        let t = 'closed' === this.iceConnectionState;
        null != e && !t && (v(this.audioTransceiver, e.getAudioTracks()[0]), this.videoSupported && v(this.videoTransceiver, e.getVideoTracks()[0])), this.logger.info('Renegotiating: Streams changed'), this.handleNegotiationNeeded();
    }
    createUser(e, t, n) {
        var r;
        if (0 === t) {
            this.logger.warn('Attempting to create user '.concat(e, ' with 0 audio SSRC'));
            return;
        }
        this.logger.info(
            'Creating user: '
                .concat(e, ' with audio SSRC: ')
                .concat(t, ' and video SSRCs: ')
                .concat(null !== (r = null == n ? void 0 : n.join(',')) && void 0 !== r ? r : 0)
        );
        let i = !1,
            o = this.users.get(e);
        if ((null == o && (o = {}), o.audioSSRC !== t)) {
            (o.audioSSRC = t),
                (i = !0),
                this.unassignedStreams.audio.push({
                    cname: e,
                    ssrc: t
                });
            let n = this.inactiveTransceivers.audio.length,
                r = g + this.unassignedStreams.audio.length - n;
            this.addTransceivers('audio', 'recvonly', r);
        }
        if (this.videoSupported && void 0 !== n && (!E || void 0 === o.videoSSRC)) {
            let t = null != n && n.length > 0 ? n[0] : 0;
            if (t > 0) {
                if (o.videoSSRC !== t) {
                    (o.videoSSRC = t),
                        (i = !0),
                        this.unassignedStreams.video.push({
                            cname: e,
                            ssrc: t
                        });
                    let n = this.inactiveTransceivers.video.length,
                        r = m + this.unassignedStreams.video.length - n;
                    this.addTransceivers('video', 'recvonly', r);
                }
            } else null != o.videoSSRC && ((o.videoSSRC = void 0), (i = !0));
        }
        if (i) {
            this.users.set(e, o), t > 0 && this.userIdsBySsrc.set(t, e);
            let r = null != n && n.length > 0 ? n[0] : 0;
            r > 0 && this.userIdsBySsrc.set(r, e), this.logger.info('Renegotiating: User joined'), this.handleNegotiationNeeded();
        }
    }
    destroyUser(e) {
        let t = this.users.get(e);
        if (null != t) {
            let { audioSSRC: n, videoSSRC: r } = t;
            this.users.delete(e), null != n && this.userIdsBySsrc.delete(n), null != r && this.userIdsBySsrc.delete(r), this.logger.info('Renegotiating: User left: '.concat(e)), this.handleNegotiationNeeded();
        }
    }
    setBitRate(e) {
        this.voiceBitrate !== e &&
            (super.setBitRate(e),
            this.setAudioEncoderParameters([
                {
                    parameter: c.p.AUDIO_BITRATE,
                    value: e
                }
            ]));
    }
    setSDP(e) {
        if (!(0, f.$6)(e)) throw Error('Incorrect SDP received from rtc-worker: '.concat(e));
        if ('have-local-offer' !== this.signalingState) throw Error('Invalid signaling state '.concat(this.signalingState));
        let { outboundStreams: t } = this.parseLocalDescription();
        (this.sdp = e), this.logger.info('Set sdp: '.concat(e, ', unassigned streams: ').concat(JSON.stringify(this.unassignedStreams))), this.setRemoteAnswer(t, [], []);
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
    setTransceiverEncodingParameters(e, t) {
        if (null == e || 0 === t.length) return;
        let n = e.sender,
            r = n.getParameters();
        if (null == r.encodings) return;
        let i = !1;
        for (let e of r.encodings) for (let { propertyName: n, value: r } of t) e[n] !== r && (this.logger.info('UnifiedConnection.setTransceiverEncodingParameters: '.concat(n, ": from '").concat(e[n], "' to '").concat(r, "'")), (i = !0), (e[n] = r));
        if (!i) return;
        let o = (e) => {
            this.logger.error('UnifiedConnection.setTransceiverEncodingProperty: setParameters failed: "'.concat(e, '" (').concat(JSON.stringify(t), ')"'));
        };
        n.setParameters(r)
            .then(
                () => {},
                (e) => o(e)
            )
            .catch((e) => o(e));
    }
    setAudioEncoderParameters(e) {
        let t = { [c.p.AUDIO_BITRATE]: 'maxBitrate' },
            n = [];
        for (let { parameter: r, value: i } of e) {
            let e = t[r];
            if (null == e) {
                this.logger.info('UnifiedConnection.setEncoderParameter: Unable to set parameter "'.concat(r, '"'));
                return;
            }
            n.push({
                propertyName: e,
                value: i
            });
        }
        this.setTransceiverEncodingParameters(this.audioTransceiver, n);
    }
    setVideoEncoderParameters(e) {
        let t = {
                [c.p.VIDEO_BITRATE]: 'maxBitrate',
                [c.p.VIDEO_RESOLUTION_SCALE]: 'scaleResolutionDownBy',
                [c.p.VIDEO_FRAMERATE]: 'maxFramerate'
            },
            n = [];
        for (let { parameter: r, value: i } of e) {
            let e = t[r];
            if (null == e) {
                this.logger.info('UnifiedConnection.setEncoderParameter: Unable to set parameter "'.concat(r, '"'));
                return;
            }
            n.push({
                propertyName: e,
                value: i
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
        if (null == e) throw Error('localDescription is null');
        let t = e.sdp,
            { outboundStreams: n, codecs: r, audioSSRC: i, videoSSRC: o, rtxSSRC: a } = (0, f.Nl)(t),
            s = (0, f.nX)(t);
        return {
            sdp: t,
            outboundStreams: n,
            codecs: r,
            audioSSRC: i,
            videoSSRC: o,
            rtxSSRC: a,
            extensions: s
        };
    }
    addTransceivers(e, t, n, r) {
        let i = this.pc,
            o = i.getTransceivers().length;
        for (let a = o; a < o + n; a++)
            'video' === e && null != r
                ? i.addTransceiver(e, {
                      direction: t,
                      streams: [r]
                  })
                : i.addTransceiver(e, { direction: t }),
                this.inactiveTransceivers[e].push(a.toString());
    }
    buildSSRCsFromOutboundStreams(e, t, n) {
        return {
            ssrcs: e.map((e) => {
                let { mid: r, type: i, direction: o } = e;
                r = String(r);
                let a = this.assignedStreams.get(r);
                if (null != a) {
                    let e = this.users.get(a.cname),
                        t = 'audio' === i ? (null == e ? void 0 : e.audioSSRC) : null == e ? void 0 : e.videoSSRC;
                    a.ssrc !== t && (this.logger.info('Deleting inactive stream for user with mid: '.concat(r, ', type: ').concat(i, ', ssrc: ').concat(a.ssrc)), (a = void 0), this.assignedStreams.delete(r));
                }
                let s = 'audio' === i ? t : n,
                    l = this.inactiveTransceivers[i],
                    c = l.indexOf(r);
                return (
                    null == a && s.length > 0 && -1 !== c && ((a = s.pop()), l.splice(c, 1), this.assignedStreams.set(r, a)),
                    null == a &&
                        (a = {
                            ssrc: -1,
                            cname: ''
                        }),
                    {
                        ssrc: a.ssrc,
                        cname: a.cname,
                        type: i,
                        direction: (0, f.Mg)(o),
                        mid: r
                    }
                );
            }),
            remainingAudioStreams: t,
            remainingVideoStreams: n
        };
    }
    generateSDPAnswer(e, t, n) {
        var r, i;
        let o = this.audioCodec,
            a = this.audioPayloadType,
            s = this.videoCodec,
            l = this.videoPayloadType,
            c = this.videoSupported && (null === (i = this.videoTransceiver) || void 0 === i ? void 0 : null === (r = i.sender) || void 0 === r ? void 0 : r.track) != null,
            u = this.rtxPayloadType,
            d = this.sdp;
        if (null == o || null == a || null == s || null == l || null == u || null == d)
            throw Error(
                'Invalid payload: audioCodec: '
                    .concat(o, ', audioPayloadType: ')
                    .concat(null == a ? 'null' : a, ', videoCodec: ')
                    .concat(s, ', videoCodecPayloadType: ')
                    .concat(null == l ? 'null' : l, ', rtxPayloadType: ')
                    .concat(null == u ? 'null' : u, ', sdp: ')
                    .concat(null == d ? 'null' : d)
            );
        let { ssrcs: _, remainingAudioStreams: p, remainingVideoStreams: h } = this.buildSSRCsFromOutboundStreams(e, t, n);
        return {
            ssrcs: _,
            remainingAudioStreams: p,
            remainingVideoStreams: h,
            answer: (0, f.Rx)({
                type: 'answer',
                baseSDP: d,
                audioCodec: o,
                audioPayloadType: a,
                audioBitRate: this.voiceBitrate,
                videoCodec: s,
                videoPayloadType: l,
                videoBitRate: 2500,
                sendingVideo: c,
                rtxPayloadType: u,
                ssrcs: _,
                extensions: this.extensions
            })
        };
    }
    async setRemoteAnswer(e, t, n) {
        let r = JSON.stringify(this.assignedStreams),
            i = JSON.stringify(t),
            o = JSON.stringify(n);
        this.logger.info('setRemoteDescription: available audio streams: '.concat(i, ', available video streams: ').concat(o, ', assigned streams: ').concat(r, ', outbound streams: ').concat(e.length));
        let a = this.pc,
            { ssrcs: s, answer: c, remainingAudioStreams: u, remainingVideoStreams: f } = this.generateSDPAnswer(e, t, n),
            _ = a.localDescription;
        try {
            await a.setRemoteDescription(c);
        } catch (n) {
            this.logger.warn('Failed to set remote answer: '.concat(n, ', type: ').concat(c.type)), this.emit(l.Sh.SdpError, 'setRemoteDescription', n.message, c.type, c.sdp), null != _ && this.emit(l.Sh.SdpError, 'setLocalDescription', n.message, _.type, _.sdp);
            let e = JSON.stringify((0, d.y)().map((e) => ''.concat(e.time, ': ').concat(e.message).trim())),
                t = 'availableAudioStreams: '.concat(i, ', availableVideoStreams: ').concat(o, ', assignedStreams: ').concat(r, ', ssrcs: ').concat(JSON.stringify(s), ', logs: ').concat(e);
            this.emit(l.Sh.SdpError, 'generateSDPAnswer', n.message, 'streams20250304', t);
        }
        this.logger.info('setRemoteDescription succeeded: remainingAudioStreams: '.concat(JSON.stringify(u), ', remainingVideoStreams: ').concat(JSON.stringify(f), ', unassignedStreams: ').concat(JSON.stringify(this.unassignedStreams), ', assignedStreams: ').concat(JSON.stringify(this.assignedStreams))), this.unassignedStreams.audio.unshift(...u), this.unassignedStreams.video.unshift(...f), (this.unassignedStreams.audio.length > 0 || this.unassignedStreams.video.length > 0) && ((this.negotiationNeeded = !0), this.logger.info('Renegotiating: Streams left unassigned after negotiation - renegotiate')), (this.negotiating = !1), this.negotiationNeeded && this.handleNegotiationNeeded();
    }
    setConnected() {
        this.input.reset(), this.setConnectionState(_.$j.CONNECTED), this.on(l.Sh.Stats, this.handleStats), this.input.on(u.G.VoiceActivity, this.handleVoiceActivity);
    }
    async handleNegotiationNeeded() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!e && (this.negotiating || null == this.sdp)) {
            this.negotiationNeeded = !0;
            return;
        }
        this.logger.info('Negotiation started, available streams: '.concat(JSON.stringify(this.unassignedStreams), ', assigned streams: ').concat(JSON.stringify(this.assignedStreams))), (this.negotiating = !0), (this.negotiationNeeded = !1);
        let t = o()(this.unassignedStreams.audio),
            n = o()(this.unassignedStreams.video);
        (this.unassignedStreams.audio = []), (this.unassignedStreams.video = []);
        let r = this.pc,
            i = await r.createOffer(this.makeOfferAnswerOptions());
        try {
            await r.setLocalDescription(i);
        } catch (e) {
            this.logger.warn('Failed to set local offer: '.concat(e, ', type: ').concat(i.type, ', sdp: ').concat(i.sdp)), this.emit(l.Sh.SdpError, 'setLocalDescription', e.message, i.type, i.sdp);
        }
        let { sdp: a, outboundStreams: s, codecs: c, audioSSRC: u, videoSSRC: d, rtxSSRC: _, extensions: p } = this.parseLocalDescription();
        (this.codecs = c), (this.extensions = p), (this.audioSSRC = u), (this.videoReady = d > 0 && _ > 0), (this.videoStreamParameters[0].ssrc !== d || this.videoStreamParameters[0].rtxSsrc !== _ || this.videoReady) && ((this.videoStreamParameters[0].ssrc = 0 === d ? this.videoStreamParameters[0].ssrc : d), (this.videoStreamParameters[0].rtxSsrc = 0 === _ ? this.videoStreamParameters[0].rtxSsrc : _), (this.videoStreamParameters[0].active = this.videoReady), this.emit(l.Sh.Video, this.userId, this.input.getVideoStreamId(), this.audioSSRC, d, _, this.videoStreamParameters)), null == this.sdp ? this.emit(l.Sh.Connected, 'webrtc', (0, f.sc)(a)) : this.setRemoteAnswer(s, t, n);
    }
    constructor(e, t, n, r) {
        super(e, t, n, r),
            h(this, 'pc', void 0),
            h(this, 'sdp', null),
            h(this, 'negotiating', !1),
            h(this, 'negotiationNeeded', !1),
            h(this, 'audioTransceiver', void 0),
            h(this, 'videoTransceiver', void 0),
            h(this, 'users', new Map()),
            h(this, 'userIdsBySsrc', new Map()),
            h(this, 'assignedStreams', new Map()),
            h(this, 'unassignedStreams', {
                audio: [],
                video: []
            }),
            h(this, 'inactiveTransceivers', {
                audio: [],
                video: []
            }),
            h(this, 'trackUserIds', {}),
            h(this, 'audioCodec', null),
            h(this, 'audioPayloadType', null),
            h(this, 'videoCodec', null),
            h(this, 'videoPayloadType', null),
            h(this, 'rtxPayloadType', null),
            h(this, 'extensions', []),
            h(this, 'codecs', []),
            h(this, 'logger', void 0),
            h(this, 'getUserIdBySsrc', (e) => this.userIdsBySsrc.get(e)),
            h(this, 'handlePeerConnectionStateChange', () => {
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
            h(this, 'handleIceConnectionStateChange', () => {
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
            h(this, 'handleSignalingStateChange', () => {
                let e = this.signalingState;
                this.logger.info('signalingState => '.concat(e));
            }),
            h(this, 'handleIceGatheringStateChange', () => {
                this.logger.info('iceGatheringState =>', this.iceGatheringState);
            }),
            h(this, 'handleTrack', (e) => {
                let t = e.streams[0].id,
                    n = e.track;
                if (!/^default/.test(n.id)) {
                    var r, i, o, a;
                    let [e, s] = t.split('-');
                    this.trackUserIds[n.id] = e;
                    let l = this.users.get(e);
                    if ((null == l ? void 0 : null === (i = l.videoSSRC) || void 0 === i ? void 0 : null === (r = i.toString) || void 0 === r ? void 0 : r.call(i)) !== s && (null == l ? void 0 : null === (a = l.audioSSRC) || void 0 === a ? void 0 : null === (o = a.toString) || void 0 === o ? void 0 : o.call(a)) !== s) {
                        this.logger.info('Got stale ssrc '.concat(s, ' for ').concat(n.kind, ' track, user ID ').concat(e));
                        return;
                    }
                    this.createOutput(e, n),
                        (n.onunmute = () => this.createOutput(e, n)),
                        (n.onmute = () => {
                            var t;
                            (null === (t = this.users.get(e)) || void 0 === t ? void 0 : t.videoSSRC) == null && this.destroyOutput(e, n);
                        });
                }
            }),
            (this.logger = new d.Y('UnifiedConnection('.concat(e, ')'))),
            (this.videoSupported = p.U8);
        let i = (this.pc = new RTCPeerConnection({
            bundlePolicy: 'max-bundle',
            sdpSemantics: 'unified-plan'
        }));
        p.X6 ? ((i.onconnectionstatechange = this.handlePeerConnectionStateChange), (i.oniceconnectionstatechange = this.handlePeerConnectionStateChange)) : (i.oniceconnectionstatechange = this.handleIceConnectionStateChange),
            (i.onsignalingstatechange = this.handleSignalingStateChange),
            (i.onicegatheringstatechange = this.handleIceGatheringStateChange),
            (i.ontrack = this.handleTrack),
            i.addTransceiver('audio', {
                direction: 'recvonly',
                sendEncodings: [{ maxBitrate: this.voiceBitrate }]
            }),
            (this.audioTransceiver = i.getTransceivers()[0]),
            this.videoSupported && (this.addTransceivers('video', 'recvonly', 1, this.input.getVideoStream()), (this.videoTransceiver = i.getTransceivers()[1])),
            this.addTransceivers('audio', 'recvonly', g),
            this.videoSupported && this.addTransceivers('video', 'recvonly', m),
            this.setStream(this.input.stream),
            this.logger.info('Renegotiating: Initial negotiation, user id: '.concat(t)),
            this.handleNegotiationNeeded(!0);
    }
}
