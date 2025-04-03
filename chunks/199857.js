n.d(t, { Z: () => O }), n(653041), n(411104), n(47120), n(26686), n(733860), n(301563);
var r,
    i = n(74514),
    o = n.n(i),
    a = n(117806),
    s = n.n(a),
    l = n(264344),
    c = n.n(l),
    u = n(259443),
    d = n(46973),
    f = n(912095),
    _ = n(886848),
    p = n(649318),
    h = n(65154),
    m = n(436620);
function g(e, t, n) {
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
let E = 10,
    b = 10,
    y = null == (r = c().name) ? void 0 : r.toLowerCase().includes('firefox');
function v(e, t) {
    e.sender.replaceTrack(t), (e.direction = null != t ? 'sendrecv' : 'recvonly');
}
class O extends f.Z {
    destroy() {
        super.destroy(), 'closed' !== this.signalingState && this.pc.close();
    }
    setCodecs(e, t, n) {
        var r, i, o;
        let a;
        (this.audioCodec !== e || this.videoCodec !== t) && ((a = this.codecs.find((t) => t.name === e)), (this.audioCodec = e), (this.audioPayloadType = null != (r = null == a ? void 0 : a.payloadType) ? r : 0), (a = this.codecs.find((e) => e.name === t)), (this.videoCodec = t), (this.videoPayloadType = null != (i = null == a ? void 0 : a.payloadType) ? i : 0), (this.rtxPayloadType = null != (o = null == a ? void 0 : a.rtxPayloadType) ? o : 0), this.logger.info('Renegotiating: Codecs changed'), this.handleNegotiationNeeded());
    }
    setStream(e) {
        let t = 'closed' === this.iceConnectionState;
        null != e && !t && (v(this.audioTransceiver, e.getAudioTracks()[0]), this.videoSupported && v(this.videoTransceiver, e.getVideoTracks()[0])), this.logger.info('Renegotiating: Streams changed'), this.handleNegotiationNeeded();
    }
    createUser(e, t, n) {
        var r;
        if (0 === t) return void this.logger.warn('Attempting to create user '.concat(e, ' with 0 audio SSRC'));
        this.logger.info(
            'Creating user: '
                .concat(e, ' with audio SSRC: ')
                .concat(t, ' and video SSRCs: ')
                .concat(null != (r = null == n ? void 0 : n.join(',')) ? r : 0)
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
                r = E + this.unassignedStreams.audio.length - n;
            this.addTransceivers('audio', 'recvonly', r);
        }
        if (this.videoSupported && void 0 !== n && (!y || void 0 === o.videoSSRC)) {
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
                        r = b + this.unassignedStreams.video.length - n;
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
                    parameter: f.p.AUDIO_BITRATE,
                    value: e
                }
            ]));
    }
    setRemoteAudioHistory(e) {
        this.enableAudioNack = e > 0;
    }
    setSDP(e) {
        if (!(0, p.$6)(e)) throw Error('Incorrect SDP received from rtc-worker: '.concat(e));
        if ('have-local-offer' !== this.signalingState) throw Error('Invalid signaling state '.concat(this.signalingState));
        let { outboundStreams: t } = this.parseLocalDescription();
        (this.sdp = e), this.setRemoteAnswer(t, [], [], new Map());
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
        let t = { [f.p.AUDIO_BITRATE]: 'maxBitrate' },
            n = [];
        for (let { parameter: r, value: i } of e) {
            let e = t[r];
            if (null == e) return void this.logger.info('UnifiedConnection.setEncoderParameter: Unable to set parameter "'.concat(r, '"'));
            n.push({
                propertyName: e,
                value: i
            });
        }
        this.setTransceiverEncodingParameters(this.audioTransceiver, n);
    }
    setVideoEncoderParameters(e) {
        let t = {
                [f.p.VIDEO_BITRATE]: 'maxBitrate',
                [f.p.VIDEO_RESOLUTION_SCALE]: 'scaleResolutionDownBy',
                [f.p.VIDEO_FRAMERATE]: 'maxFramerate'
            },
            n = [];
        for (let { parameter: r, value: i } of e) {
            let e = t[r];
            if (null == e) return void this.logger.info('UnifiedConnection.setEncoderParameter: Unable to set parameter "'.concat(r, '"'));
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
            { outboundStreams: n, codecs: r, audioSSRC: i, videoSSRC: o, rtxSSRC: a } = (0, p.Nl)(t),
            s = (0, p.nX)(t);
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
    buildSSRCsFromOutboundStreams(e, t, n, r) {
        return {
            ssrcs: e.map((e) => {
                let { mid: i, type: o, direction: a } = e;
                i = String(i);
                let s = this.assignedStreams.get(i);
                if (null != s) {
                    let e = r.get(s.cname),
                        t = 'audio' === o ? (null == e ? void 0 : e.audioSSRC) : null == e ? void 0 : e.videoSSRC;
                    s.ssrc !== t && (this.logger.info('Deleting inactive stream for user with mid: '.concat(i, ', type: ').concat(o, ', ssrc: ').concat(s.ssrc)), (s = void 0), this.assignedStreams.delete(i));
                }
                let l = 'audio' === o ? t : n,
                    c = this.inactiveTransceivers[o],
                    u = c.indexOf(i);
                return (
                    null == s && l.length > 0 && -1 !== u && ((s = l.pop()), c.splice(u, 1), this.assignedStreams.set(i, s)),
                    null == s &&
                        (s = {
                            ssrc: -1,
                            cname: ''
                        }),
                    {
                        ssrc: s.ssrc,
                        cname: s.cname,
                        type: o,
                        direction: (0, p.Mg)(a),
                        mid: i
                    }
                );
            }),
            remainingAudioStreams: t,
            remainingVideoStreams: n
        };
    }
    generateSDPAnswer(e, t, n, r) {
        var i, o;
        let a = this.audioCodec,
            s = this.audioPayloadType,
            l = this.videoCodec,
            c = this.videoPayloadType,
            u = this.videoSupported && (null == (o = this.videoTransceiver) || null == (i = o.sender) ? void 0 : i.track) != null,
            d = this.rtxPayloadType,
            f = this.sdp;
        if (null == a || null == s || null == l || null == c || null == d || null == f)
            throw Error(
                'Invalid payload: audioCodec: '
                    .concat(a, ', audioPayloadType: ')
                    .concat(null == s ? 'null' : s, ', videoCodec: ')
                    .concat(l, ', videoCodecPayloadType: ')
                    .concat(null == c ? 'null' : c, ', rtxPayloadType: ')
                    .concat(null == d ? 'null' : d, ', sdp: ')
                    .concat(null == f ? 'null' : f)
            );
        let { ssrcs: _, remainingAudioStreams: h, remainingVideoStreams: m } = this.buildSSRCsFromOutboundStreams(e, t, n, r);
        return {
            remainingAudioStreams: h,
            remainingVideoStreams: m,
            answer: (0, p.Rx)({
                type: 'answer',
                baseSDP: f,
                audioCodec: a,
                audioPayloadType: s,
                audioBitRate: this.voiceBitrate,
                videoCodec: l,
                videoPayloadType: c,
                videoBitRate: 2500,
                sendingVideo: u,
                rtxPayloadType: d,
                ssrcs: _,
                extensions: this.extensions,
                enableAudioNack: this.enableAudioNack
            })
        };
    }
    async setRemoteAnswer(e, t, n, r) {
        let i = this.pc,
            { answer: o, remainingAudioStreams: a, remainingVideoStreams: s } = this.generateSDPAnswer(e, t, n, r);
        try {
            await i.setRemoteDescription(o);
        } catch (e) {
            this.logger.warn('Failed to set remote answer: '.concat(e, ', type: ').concat(o.type)), this.emit(d.Sh.SdpError, 'setRemoteDescription', e.message, o.type);
        }
        this.unassignedStreams.audio.unshift(...a), this.unassignedStreams.video.unshift(...s), (this.unassignedStreams.audio.length > 0 || this.unassignedStreams.video.length > 0) && ((this.negotiationNeeded = !0), this.logger.info('Renegotiating: Streams left unassigned after negotiation - renegotiate')), (this.negotiating = !1), this.negotiationNeeded && this.handleNegotiationNeeded();
    }
    setConnected() {
        this.input.reset(), this.setConnectionState(h.$j.CONNECTED), this.on(d.Sh.Stats, this.handleStats), this.input.on(_.G.VoiceActivity, this.handleVoiceActivity);
    }
    async handleNegotiationNeeded() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!e && (this.negotiating || null == this.sdp)) {
            this.negotiationNeeded = !0;
            return;
        }
        (this.negotiating = !0), (this.negotiationNeeded = !1);
        let t = o()(this.unassignedStreams.audio),
            n = o()(this.unassignedStreams.video),
            r = s()(this.users);
        (this.unassignedStreams.audio = []), (this.unassignedStreams.video = []);
        let i = this.pc,
            a = await i.createOffer(this.makeOfferAnswerOptions());
        try {
            await i.setLocalDescription(a);
        } catch (e) {
            this.logger.warn('Failed to set local offer: '.concat(e, ', type: ').concat(a.type, ', sdp: ').concat(a.sdp)), this.emit(d.Sh.SdpError, 'setLocalDescription', e.message, a.type);
        }
        let { sdp: l, outboundStreams: c, codecs: u, audioSSRC: f, videoSSRC: _, rtxSSRC: h, extensions: m } = this.parseLocalDescription();
        (this.codecs = u), (this.extensions = m), (this.audioSSRC = f), (this.videoReady = _ > 0 && h > 0), (this.videoStreamParameters[0].ssrc !== _ || this.videoStreamParameters[0].rtxSsrc !== h || this.videoReady) && ((this.videoStreamParameters[0].ssrc = 0 === _ ? this.videoStreamParameters[0].ssrc : _), (this.videoStreamParameters[0].rtxSsrc = 0 === h ? this.videoStreamParameters[0].rtxSsrc : h), (this.videoStreamParameters[0].active = this.videoReady), this.emit(d.Sh.Video, this.userId, this.input.getVideoStreamId(), this.audioSSRC, _, h, this.videoStreamParameters)), null == this.sdp ? this.emit(d.Sh.Connected, 'webrtc', (0, p.sc)(l)) : this.setRemoteAnswer(c, t, n, r);
    }
    constructor(e, t, n, r) {
        super(e, t, n, r),
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
            g(this, 'trackUserIds', {}),
            g(this, 'audioCodec', null),
            g(this, 'audioPayloadType', null),
            g(this, 'videoCodec', null),
            g(this, 'videoPayloadType', null),
            g(this, 'rtxPayloadType', null),
            g(this, 'enableAudioNack', !1),
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
                        'connected' === this.iceConnectionState ? this.setConnectionState(h.$j.DTLS_CONNECTING) : this.setConnectionState(h.$j.ICE_CHECKING);
                        break;
                    case 'failed':
                        this.setConnectionState(h.$j.NO_ROUTE);
                        break;
                    case 'disconnected':
                    case 'closed':
                        this.setConnectionState(h.$j.DISCONNECTED);
                }
            }),
            g(this, 'handleIceConnectionStateChange', () => {
                let e = this.iceConnectionState;
                switch ((this.logger.info('iceConnectionState =>', e), e)) {
                    case 'connected':
                        this.setConnected();
                        break;
                    case 'checking':
                        this.setConnectionState(h.$j.ICE_CHECKING);
                        break;
                    case 'failed':
                        this.setConnectionState(h.$j.NO_ROUTE);
                        break;
                    case 'disconnected':
                    case 'closed':
                        this.setConnectionState(h.$j.DISCONNECTED);
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
                let t = e.streams[0].id,
                    n = e.track;
                if (!/^default/.test(n.id)) {
                    var r, i, o, a;
                    let [e, s] = t.split('-');
                    this.trackUserIds[n.id] = e;
                    let l = this.users.get(e);
                    if ((null == l || null == (i = l.videoSSRC) || null == (r = i.toString) ? void 0 : r.call(i)) !== s && (null == l || null == (a = l.audioSSRC) || null == (o = a.toString) ? void 0 : o.call(a)) !== s) return void this.logger.info('Got stale ssrc '.concat(s, ' for ').concat(n.kind, ' track, user ID ').concat(e));
                    this.createOutput(e, n),
                        (n.onunmute = () => this.createOutput(e, n)),
                        (n.onmute = () => {
                            var t;
                            (null == (t = this.users.get(e)) ? void 0 : t.videoSSRC) == null && this.destroyOutput(e, n);
                        });
                }
            }),
            (this.logger = new u.Yd('UnifiedConnection('.concat(e, ')'))),
            (this.videoSupported = m.U8);
        let i = (this.pc = new RTCPeerConnection({
            bundlePolicy: 'max-bundle',
            sdpSemantics: 'unified-plan'
        }));
        m.X6 ? ((i.onconnectionstatechange = this.handlePeerConnectionStateChange), (i.oniceconnectionstatechange = this.handlePeerConnectionStateChange)) : (i.oniceconnectionstatechange = this.handleIceConnectionStateChange),
            (i.onsignalingstatechange = this.handleSignalingStateChange),
            (i.onicegatheringstatechange = this.handleIceGatheringStateChange),
            (i.ontrack = this.handleTrack),
            i.addTransceiver('audio', {
                direction: 'recvonly',
                sendEncodings: [{ maxBitrate: this.voiceBitrate }]
            }),
            (this.audioTransceiver = i.getTransceivers()[0]),
            this.videoSupported && (this.addTransceivers('video', 'recvonly', 1, this.input.getVideoStream()), (this.videoTransceiver = i.getTransceivers()[1])),
            this.addTransceivers('audio', 'recvonly', E),
            this.videoSupported && this.addTransceivers('video', 'recvonly', b),
            this.setStream(this.input.stream),
            this.logger.info('Renegotiating: Initial negotiation, user id: '.concat(t)),
            this.handleNegotiationNeeded(!0);
    }
}
