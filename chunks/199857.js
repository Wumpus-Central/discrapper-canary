n.d(t, { Z: () => E }), n(653041), n(411104), n(47120), n(26686), n(301563);
var r,
    i = n(264344),
    o = n.n(i),
    a = n(259443),
    s = n(46973),
    l = n(912095),
    c = n(886848),
    u = n(649318),
    d = n(65154),
    f = n(436620);
function p(e, t, n) {
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
let _ = 10,
    h = 10,
    m = null === (r = o().name) || void 0 === r ? void 0 : r.toLowerCase().includes('firefox');
function g(e, t) {
    e.sender.replaceTrack(t), (e.direction = null != t ? 'sendrecv' : 'recvonly');
}
class E extends l.Z {
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
        null != e && !t && (g(this.audioTransceiver, e.getAudioTracks()[0]), this.videoSupported && g(this.videoTransceiver, e.getVideoTracks()[0])), this.logger.info('Renegotiating: Streams changed'), this.handleNegotiationNeeded();
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
                r = _ + this.unassignedStreams.audio.length - n;
            this.addTransceivers('audio', 'recvonly', r);
        }
        if (this.videoSupported && void 0 !== n && (!m || void 0 === o.videoSSRC)) {
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
                        r = h + this.unassignedStreams.video.length - n;
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
                    parameter: l.p.AUDIO_BITRATE,
                    value: e
                }
            ]));
    }
    setSDP(e) {
        if (!(0, u.$6)(e)) throw Error('Incorrect SDP received from rtc-worker: '.concat(e));
        (this.sdp = e), this.logger.info('Set sdp: '.concat(e)), this.setRemoteAnswer();
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
        let t = { [l.p.AUDIO_BITRATE]: 'maxBitrate' },
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
                [l.p.VIDEO_BITRATE]: 'maxBitrate',
                [l.p.VIDEO_RESOLUTION_SCALE]: 'scaleResolutionDownBy',
                [l.p.VIDEO_FRAMERATE]: 'maxFramerate'
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
            { outboundStreams: n, codecs: r, audioSSRC: i, videoSSRC: o, rtxSSRC: a } = (0, u.Nl)(t);
        return (this.outboundStreams = n), (this.codecs = r), (this.extensions = (0, u.nX)(t)), (this.audioSSRC = i), (this.videoReady = o > 0 && a > 0), (this.videoStreamParameters[0].ssrc !== o || this.videoStreamParameters[0].rtxSsrc !== a || this.videoReady) && ((this.videoStreamParameters[0].ssrc = 0 === o ? this.videoStreamParameters[0].ssrc : o), (this.videoStreamParameters[0].rtxSsrc = 0 === a ? this.videoStreamParameters[0].rtxSsrc : a), (this.videoStreamParameters[0].active = this.videoReady), this.emit(s.Sh.Video, this.userId, this.input.getVideoStreamId(), this.audioSSRC, o, a, this.videoStreamParameters)), t;
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
    buildSSRCsFromOutboundStreams() {
        return this.outboundStreams.map((e) => {
            let { mid: t, type: n, direction: r } = e;
            t = String(t);
            let i = this.assignedStreams.get(t);
            if (null != i) {
                let e = this.users.get(i.cname),
                    r = 'audio' === n ? (null == e ? void 0 : e.audioSSRC) : null == e ? void 0 : e.videoSSRC;
                i.ssrc !== r && (this.logger.info('Deleting inactive stream for user with mid: '.concat(t, ', type: ').concat(n, ', ssrc: ').concat(i.ssrc)), (i = void 0), this.assignedStreams.delete(t));
            }
            let o = this.unassignedStreams[n],
                a = this.inactiveTransceivers[n],
                s = a.indexOf(t);
            return (
                null == i && o.length > 0 && -1 !== s && ((i = o.pop()), a.splice(s, 1), this.assignedStreams.set(t, i)),
                null == i &&
                    (i = {
                        ssrc: -1,
                        cname: ''
                    }),
                {
                    ssrc: i.ssrc,
                    cname: i.cname,
                    type: n,
                    direction: (0, u.Mg)(r),
                    mid: t
                }
            );
        });
    }
    generateSDPAnswer() {
        var e, t;
        let n = this.audioCodec,
            r = this.audioPayloadType,
            i = this.videoCodec,
            o = this.videoPayloadType,
            a = this.videoSupported && (null === (t = this.videoTransceiver) || void 0 === t ? void 0 : null === (e = t.sender) || void 0 === e ? void 0 : e.track) != null,
            s = this.rtxPayloadType,
            l = this.sdp;
        if (null == n || null == r || null == i || null == o || null == s || null == l)
            throw Error(
                'Invalid payload: audioCodec: '
                    .concat(n, ', audioPayloadType: ')
                    .concat(null == r ? 'null' : r, ', videoCodec: ')
                    .concat(i, ', videoCodecPayloadType: ')
                    .concat(null == o ? 'null' : o, ', rtxPayloadType: ')
                    .concat(null == s ? 'null' : s, ', sdp: ')
                    .concat(null == l ? 'null' : l)
            );
        let c = this.buildSSRCsFromOutboundStreams();
        return {
            ssrcs: c,
            answer: (0, u.Rx)({
                type: 'answer',
                baseSDP: l,
                audioCodec: n,
                audioPayloadType: r,
                audioBitRate: this.voiceBitrate,
                videoCodec: i,
                videoPayloadType: o,
                videoBitRate: 2500,
                sendingVideo: a,
                rtxPayloadType: s,
                ssrcs: c,
                extensions: this.extensions
            })
        };
    }
    async setRemoteAnswer() {
        let e = JSON.stringify(this.unassignedStreams),
            t = JSON.stringify(this.assignedStreams);
        this.logger.info('setRemoteDescription: unassigned streams: '.concat(e, ', assigned streams: ').concat(t, ', outbound streams: ').concat(this.outboundStreams.length));
        let n = this.pc,
            { ssrcs: r, answer: i } = this.generateSDPAnswer(),
            o = n.localDescription;
        try {
            await n.setRemoteDescription(i);
        } catch (a) {
            this.logger.warn('Failed to set remote answer: '.concat(a, ', type: ').concat(i.type, ', sdp: ').concat(i.sdp)), this.emit(s.Sh.SdpError, 'setRemoteDescription', a.message, i.type, i.sdp), null != o && this.emit(s.Sh.SdpError, 'setLocalDescription', a.message, o.type, o.sdp);
            let n = 'unassignedStreams: '.concat(e, ', assignedStreams: ').concat(t, ', ssrcs: ').concat(JSON.stringify(r));
            this.emit(s.Sh.SdpError, 'generateSDPAnswer', a.message, 'streams20250224', n);
        }
        (this.unassignedStreams.audio.length > 0 || this.unassignedStreams.video.length > 0) && ((this.negotiationNeeded = !0), this.logger.info('Renegotiating: Streams left unassigned after negotiation - renegotiate')), (this.negotiating = !1), this.negotiationNeeded && this.handleNegotiationNeeded();
    }
    setConnected() {
        this.input.reset(), this.setConnectionState(d.$j.CONNECTED), this.on(s.Sh.Stats, this.handleStats), this.input.on(c.G.VoiceActivity, this.handleVoiceActivity);
    }
    async handleNegotiationNeeded() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!e && (this.negotiating || null == this.sdp)) {
            this.negotiationNeeded = !0;
            return;
        }
        this.logger.info('Negotiation started, assigned streams: '.concat(JSON.stringify(this.assignedStreams), ', unassigned streams: ').concat(JSON.stringify(this.unassignedStreams), ', outbound stream: ').concat(this.outboundStreams.length)), (this.negotiating = !0), (this.negotiationNeeded = !1);
        let t = this.pc,
            n = await t.createOffer(this.makeOfferAnswerOptions());
        try {
            await t.setLocalDescription(n);
        } catch (e) {
            this.logger.warn('Failed to set local offer: '.concat(e, ', type: ').concat(n.type, ', sdp: ').concat(n.sdp)), this.emit(s.Sh.SdpError, 'setLocalDescription', e.message, n.type, n.sdp);
        }
        let r = this.parseLocalDescription();
        null == this.sdp ? this.emit(s.Sh.Connected, 'webrtc', (0, u.sc)(r)) : this.setRemoteAnswer();
    }
    constructor(e, t, n, r) {
        super(e, t, n, r),
            p(this, 'pc', void 0),
            p(this, 'sdp', null),
            p(this, 'negotiating', !1),
            p(this, 'negotiationNeeded', !1),
            p(this, 'audioTransceiver', void 0),
            p(this, 'videoTransceiver', void 0),
            p(this, 'users', new Map()),
            p(this, 'userIdsBySsrc', new Map()),
            p(this, 'assignedStreams', new Map()),
            p(this, 'unassignedStreams', {
                audio: [],
                video: []
            }),
            p(this, 'inactiveTransceivers', {
                audio: [],
                video: []
            }),
            p(this, 'outboundStreams', []),
            p(this, 'trackUserIds', {}),
            p(this, 'audioCodec', null),
            p(this, 'audioPayloadType', null),
            p(this, 'videoCodec', null),
            p(this, 'videoPayloadType', null),
            p(this, 'rtxPayloadType', null),
            p(this, 'extensions', []),
            p(this, 'codecs', []),
            p(this, 'logger', void 0),
            p(this, 'getUserIdBySsrc', (e) => this.userIdsBySsrc.get(e)),
            p(this, 'handlePeerConnectionStateChange', () => {
                let e = this.peerConnectionState;
                switch ((this.logger.info('peerConnectionState =>', e), e)) {
                    case 'connected':
                        this.setConnected();
                        break;
                    case 'connecting':
                        'connected' === this.iceConnectionState ? this.setConnectionState(d.$j.DTLS_CONNECTING) : this.setConnectionState(d.$j.ICE_CHECKING);
                        break;
                    case 'failed':
                        this.setConnectionState(d.$j.NO_ROUTE);
                        break;
                    case 'disconnected':
                    case 'closed':
                        this.setConnectionState(d.$j.DISCONNECTED);
                }
            }),
            p(this, 'handleIceConnectionStateChange', () => {
                let e = this.iceConnectionState;
                switch ((this.logger.info('iceConnectionState =>', e), e)) {
                    case 'connected':
                        this.setConnected();
                        break;
                    case 'checking':
                        this.setConnectionState(d.$j.ICE_CHECKING);
                        break;
                    case 'failed':
                        this.setConnectionState(d.$j.NO_ROUTE);
                        break;
                    case 'disconnected':
                    case 'closed':
                        this.setConnectionState(d.$j.DISCONNECTED);
                }
            }),
            p(this, 'handleSignalingStateChange', () => {
                let e = this.signalingState;
                this.logger.info('signalingState => '.concat(e));
            }),
            p(this, 'handleIceGatheringStateChange', () => {
                this.logger.info('iceGatheringState =>', this.iceGatheringState);
            }),
            p(this, 'handleTrack', (e) => {
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
            (this.logger = new a.Yd('UnifiedConnection('.concat(e, ')'))),
            (this.videoSupported = f.U8);
        let i = (this.pc = new RTCPeerConnection({
            bundlePolicy: 'max-bundle',
            sdpSemantics: 'unified-plan'
        }));
        f.X6 ? ((i.onconnectionstatechange = this.handlePeerConnectionStateChange), (i.oniceconnectionstatechange = this.handlePeerConnectionStateChange)) : (i.oniceconnectionstatechange = this.handleIceConnectionStateChange),
            (i.onsignalingstatechange = this.handleSignalingStateChange),
            (i.onicegatheringstatechange = this.handleIceGatheringStateChange),
            (i.ontrack = this.handleTrack),
            i.addTransceiver('audio', {
                direction: 'recvonly',
                sendEncodings: [{ maxBitrate: this.voiceBitrate }]
            }),
            (this.audioTransceiver = i.getTransceivers()[0]),
            this.videoSupported && (this.addTransceivers('video', 'recvonly', 1, this.input.getVideoStream()), (this.videoTransceiver = i.getTransceivers()[1])),
            this.addTransceivers('audio', 'recvonly', _),
            this.videoSupported && this.addTransceivers('video', 'recvonly', h),
            this.setStream(this.input.stream),
            this.logger.info('Renegotiating: Initial negotiation, user id: '.concat(t)),
            this.handleNegotiationNeeded(!0);
    }
}
