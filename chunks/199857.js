n.d(t, { Z: () => E }), n(653041), n(411104), n(47120);
var i,
    r = n(264344),
    a = n.n(r),
    s = n(259443),
    o = n(46973),
    l = n(912095),
    u = n(886848),
    c = n(649318),
    d = n(65154),
    f = n(436620);
function _(e, t, n) {
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
let p = 10,
    h = 10,
    m = null === (i = a().name) || void 0 === i ? void 0 : i.toLowerCase().includes('firefox');
function g(e, t) {
    e.sender.replaceTrack(t), (e.direction = null != t ? 'sendrecv' : 'recvonly');
}
class E extends l.Z {
    destroy() {
        super.destroy(), 'closed' !== this.signalingState && this.pc.close();
    }
    setCodecs(e, t, n) {
        var i, r, a;
        let s;
        (this.audioCodec !== e || this.videoCodec !== t) && ((s = this.codecs.find((t) => t.name === e)), (this.audioCodec = e), (this.audioPayloadType = null !== (i = null == s ? void 0 : s.payloadType) && void 0 !== i ? i : 0), (s = this.codecs.find((e) => e.name === t)), (this.videoCodec = t), (this.videoPayloadType = null !== (r = null == s ? void 0 : s.payloadType) && void 0 !== r ? r : 0), (this.rtxPayloadType = null !== (a = null == s ? void 0 : s.rtxPayloadType) && void 0 !== a ? a : 0), this.logger.info('Renegotiating: Codecs changed'), this.handleNegotiationNeeded());
    }
    setStream(e) {
        let t = 'closed' === this.iceConnectionState;
        null != e && !t && (g(this.audioTransceiver, e.getAudioTracks()[0]), this.videoSupported && g(this.videoTransceiver, e.getVideoTracks()[0])), this.logger.info('Renegotiating: Streams changed'), this.handleNegotiationNeeded();
    }
    createUser(e, t, n) {
        var i;
        if (0 === t) {
            this.logger.warn('Attempting to create user '.concat(e, ' with 0 audio SSRC'));
            return;
        }
        this.logger.info(
            'Creating user: '
                .concat(e, ' with audio SSRC: ')
                .concat(t, ' and video SSRCs: ')
                .concat(null !== (i = null == n ? void 0 : n.join(',')) && void 0 !== i ? i : 0)
        );
        let r = !1,
            a = this.users.get(e);
        if ((null == a && (a = {}), a.audioSSRC !== t)) {
            (a.audioSSRC = t),
                (r = !0),
                this.unassignedStreams.audio.push({
                    cname: e,
                    ssrc: t
                });
            let n = this.inactiveTransceivers.audio.length,
                i = p + this.unassignedStreams.audio.length - n;
            this.addTransceivers('audio', 'recvonly', i);
        }
        if (this.videoSupported && void 0 !== n && (!m || void 0 === a.videoSSRC)) {
            let t = null != n && n.length > 0 ? n[0] : 0;
            if (t > 0) {
                if (a.videoSSRC !== t) {
                    (a.videoSSRC = t),
                        (r = !0),
                        this.unassignedStreams.video.push({
                            cname: e,
                            ssrc: t
                        });
                    let n = this.inactiveTransceivers.video.length,
                        i = h + this.unassignedStreams.video.length - n;
                    this.addTransceivers('video', 'recvonly', i);
                }
            } else null != a.videoSSRC && ((a.videoSSRC = void 0), (r = !0));
        }
        if (r) {
            this.users.set(e, a), t > 0 && this.userIdsBySsrc.set(t, e);
            let i = null != n && n.length > 0 ? n[0] : 0;
            i > 0 && this.userIdsBySsrc.set(i, e), this.logger.info('Renegotiating: User joined'), this.handleNegotiationNeeded();
        }
    }
    destroyUser(e) {
        let t = this.users.get(e);
        if (null != t) {
            let { audioSSRC: n, videoSSRC: i } = t;
            this.users.delete(e), null != n && this.userIdsBySsrc.delete(n), null != i && this.userIdsBySsrc.delete(i), this.logger.info('Renegotiating: User left'), this.handleNegotiationNeeded();
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
        if (!(0, c.$6)(e)) throw Error('Incorrect SDP received from rtc-worker: '.concat(e));
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
    setTransceiverEncodingParameters(e, t) {
        if (null == e || 0 === t.length) return;
        let n = e.sender,
            i = n.getParameters();
        if (null == i.encodings) return;
        let r = !1;
        for (let e of i.encodings) for (let { propertyName: n, value: i } of t) e[n] !== i && (this.logger.info('UnifiedConnection.setTransceiverEncodingParameters: '.concat(n, ": from '").concat(e[n], "' to '").concat(i, "'")), (r = !0), (e[n] = i));
        if (!r) return;
        let a = (e) => {
            this.logger.error('UnifiedConnection.setTransceiverEncodingProperty: setParameters failed: "'.concat(e, '" (').concat(JSON.stringify(t), ')"'));
        };
        n.setParameters(i)
            .then(
                () => {},
                (e) => a(e)
            )
            .catch((e) => a(e));
    }
    setAudioEncoderParameters(e) {
        let t = { [l.p.AUDIO_BITRATE]: 'maxBitrate' },
            n = [];
        for (let { parameter: i, value: r } of e) {
            let e = t[i];
            if (null == e) {
                this.logger.info('UnifiedConnection.setEncoderParameter: Unable to set parameter "'.concat(i, '"'));
                return;
            }
            n.push({
                propertyName: e,
                value: r
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
        for (let { parameter: i, value: r } of e) {
            let e = t[i];
            if (null == e) {
                this.logger.info('UnifiedConnection.setEncoderParameter: Unable to set parameter "'.concat(i, '"'));
                return;
            }
            n.push({
                propertyName: e,
                value: r
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
            { outboundStreams: n, codecs: i, audioSSRC: r, videoSSRC: a, rtxSSRC: s } = (0, c.Nl)(t);
        return (this.outboundStreams = n), (this.codecs = i), (this.extensions = (0, c.nX)(t)), (this.audioSSRC = r), (this.videoReady = a > 0 && s > 0), (this.videoStreamParameters[0].ssrc !== a || this.videoStreamParameters[0].rtxSsrc !== s || this.videoReady) && ((this.videoStreamParameters[0].ssrc = 0 === a ? this.videoStreamParameters[0].ssrc : a), (this.videoStreamParameters[0].rtxSsrc = 0 === s ? this.videoStreamParameters[0].rtxSsrc : s), (this.videoStreamParameters[0].active = this.videoReady), this.emit(o.Sh.Video, this.userId, this.input.getVideoStreamId(), this.audioSSRC, a, s, this.videoStreamParameters)), t;
    }
    addTransceivers(e, t, n, i) {
        let r = this.pc,
            a = r.getTransceivers().length;
        for (let s = a; s < a + n; s++)
            'video' === e && null != i
                ? r.addTransceiver(e, {
                      direction: t,
                      streams: [i]
                  })
                : r.addTransceiver(e, { direction: t }),
                this.inactiveTransceivers[e].push(s.toString());
    }
    buildSSRCsFromOutboundStreams() {
        return this.outboundStreams.map((e) => {
            let { mid: t, type: n, direction: i } = e;
            t = String(t);
            let r = this.assignedStreams.get(t);
            if (null != r) {
                let e = this.users.get(r.cname),
                    i = 'audio' === n ? (null == e ? void 0 : e.audioSSRC) : null == e ? void 0 : e.videoSSRC;
                r.ssrc !== i && ((r = void 0), this.assignedStreams.delete(t));
            }
            let a = this.unassignedStreams[n],
                s = this.inactiveTransceivers[n],
                o = s.indexOf(t);
            return (
                null == r && a.length > 0 && -1 !== o && ((r = a.pop()), s.splice(o, 1), this.assignedStreams.set(t, r)),
                null == r &&
                    (r = {
                        ssrc: -1,
                        cname: ''
                    }),
                {
                    ssrc: r.ssrc,
                    cname: r.cname,
                    type: n,
                    direction: (0, c.Mg)(i),
                    mid: t
                }
            );
        });
    }
    generateSDPAnswer() {
        var e, t;
        let n = this.audioCodec,
            i = this.audioPayloadType,
            r = this.videoCodec,
            a = this.videoPayloadType,
            s = this.videoSupported && (null === (t = this.videoTransceiver) || void 0 === t ? void 0 : null === (e = t.sender) || void 0 === e ? void 0 : e.track) != null,
            o = this.rtxPayloadType,
            l = this.sdp;
        if (null == n || null == i || null == r || null == a || null == o || null == l)
            throw Error(
                'Invalid payload: audioCodec: '
                    .concat(n, ', audioPayloadType: ')
                    .concat(null == i ? 'null' : i, ', videoCodec: ')
                    .concat(r, ', videoCodecPayloadType: ')
                    .concat(null == a ? 'null' : a, ', rtxPayloadType: ')
                    .concat(null == o ? 'null' : o, ', sdp: ')
                    .concat(null == l ? 'null' : l)
            );
        let u = this.buildSSRCsFromOutboundStreams();
        return {
            ssrcs: u,
            answer: (0, c.Rx)({
                type: 'answer',
                baseSDP: l,
                audioCodec: n,
                audioPayloadType: i,
                audioBitRate: this.voiceBitrate,
                videoCodec: r,
                videoPayloadType: a,
                videoBitRate: 2500,
                sendingVideo: s,
                rtxPayloadType: o,
                ssrcs: u,
                extensions: this.extensions
            })
        };
    }
    async setRemoteAnswer() {
        let e = JSON.stringify(this.unassignedStreams),
            t = JSON.stringify(this.assignedStreams),
            n = this.pc,
            { ssrcs: i, answer: r } = this.generateSDPAnswer(),
            a = n.localDescription;
        try {
            await n.setRemoteDescription(r);
        } catch (s) {
            this.logger.warn('Failed to set remote answer: '.concat(s, ', type: ').concat(r.type, ', sdp: ').concat(r.sdp)), this.emit(o.Sh.SdpError, 'setRemoteDescription', s.message, r.type, r.sdp), null != a && this.emit(o.Sh.SdpError, 'setLocalDescription', s.message, a.type, a.sdp);
            let n = 'unassignedStreams: '.concat(e, ', assignedStreams: ').concat(t, ', ssrcs: ').concat(JSON.stringify(i));
            this.emit(o.Sh.SdpError, 'generateSDPAnswer', s.message, 'streams', n);
        }
        (this.unassignedStreams.audio.length > 0 || this.unassignedStreams.video.length > 0) && ((this.negotiationNeeded = !0), this.logger.info('Renegotiating: Streams left unassigned after negotiation - renegotiate')), (this.negotiating = !1), this.negotiationNeeded && this.handleNegotiationNeeded();
    }
    setConnected() {
        this.input.reset(), this.setConnectionState(d.$j.CONNECTED), this.on(o.Sh.Stats, this.handleStats), this.input.on(u.G.VoiceActivity, this.handleVoiceActivity);
    }
    async handleNegotiationNeeded() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!e && (this.negotiating || null == this.sdp)) {
            this.negotiationNeeded = !0;
            return;
        }
        (this.negotiating = !0), (this.negotiationNeeded = !1);
        let t = this.pc,
            n = await t.createOffer(this.makeOfferAnswerOptions());
        try {
            await t.setLocalDescription(n);
        } catch (e) {
            this.logger.warn('Failed to set local offer: '.concat(e, ', type: ').concat(n.type, ', sdp: ').concat(n.sdp)), this.emit(o.Sh.SdpError, 'setLocalDescription', e.message, n.type, n.sdp);
        }
        let i = this.parseLocalDescription();
        null == this.sdp ? this.emit(o.Sh.Connected, 'webrtc', (0, c.sc)(i)) : this.setRemoteAnswer();
    }
    constructor(e, t, n, i) {
        super(e, t, n, i),
            _(this, 'pc', void 0),
            _(this, 'sdp', null),
            _(this, 'negotiating', !1),
            _(this, 'negotiationNeeded', !1),
            _(this, 'audioTransceiver', void 0),
            _(this, 'videoTransceiver', void 0),
            _(this, 'users', new Map()),
            _(this, 'userIdsBySsrc', new Map()),
            _(this, 'assignedStreams', new Map()),
            _(this, 'unassignedStreams', {
                audio: [],
                video: []
            }),
            _(this, 'inactiveTransceivers', {
                audio: [],
                video: []
            }),
            _(this, 'outboundStreams', []),
            _(this, 'trackUserIds', {}),
            _(this, 'audioCodec', null),
            _(this, 'audioPayloadType', null),
            _(this, 'videoCodec', null),
            _(this, 'videoPayloadType', null),
            _(this, 'rtxPayloadType', null),
            _(this, 'extensions', []),
            _(this, 'codecs', []),
            _(this, 'logger', void 0),
            _(this, 'getUserIdBySsrc', (e) => this.userIdsBySsrc.get(e)),
            _(this, 'handlePeerConnectionStateChange', () => {
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
            _(this, 'handleIceConnectionStateChange', () => {
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
            _(this, 'handleSignalingStateChange', () => {
                let e = this.signalingState;
                this.logger.info('signalingState => '.concat(e));
            }),
            _(this, 'handleIceGatheringStateChange', () => {
                this.logger.info('iceGatheringState =>', this.iceGatheringState);
            }),
            _(this, 'handleTrack', (e) => {
                let t = e.streams[0].id,
                    n = e.track;
                if (!/^default/.test(n.id)) {
                    var i, r, a, s;
                    let [e, o] = t.split('-');
                    this.trackUserIds[n.id] = e;
                    let l = this.users.get(e);
                    if ((null == l ? void 0 : null === (r = l.videoSSRC) || void 0 === r ? void 0 : null === (i = r.toString) || void 0 === i ? void 0 : i.call(r)) !== o && (null == l ? void 0 : null === (s = l.audioSSRC) || void 0 === s ? void 0 : null === (a = s.toString) || void 0 === a ? void 0 : a.call(s)) !== o) {
                        this.logger.info('Got stale ssrc '.concat(o, ' for ').concat(n.kind, ' track, user ID ').concat(e));
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
            (this.logger = new s.Yd('UnifiedConnection('.concat(e, ')'))),
            (this.videoSupported = f.U8);
        let r = (this.pc = new RTCPeerConnection({
            bundlePolicy: 'max-bundle',
            sdpSemantics: 'unified-plan'
        }));
        f.X6 ? ((r.onconnectionstatechange = this.handlePeerConnectionStateChange), (r.oniceconnectionstatechange = this.handlePeerConnectionStateChange)) : (r.oniceconnectionstatechange = this.handleIceConnectionStateChange),
            (r.onsignalingstatechange = this.handleSignalingStateChange),
            (r.onicegatheringstatechange = this.handleIceGatheringStateChange),
            (r.ontrack = this.handleTrack),
            r.addTransceiver('audio', {
                direction: 'recvonly',
                sendEncodings: [{ maxBitrate: this.voiceBitrate }]
            }),
            (this.audioTransceiver = r.getTransceivers()[0]),
            this.videoSupported && (this.addTransceivers('video', 'recvonly', 1, this.input.getVideoStream()), (this.videoTransceiver = r.getTransceivers()[1])),
            this.addTransceivers('audio', 'recvonly', p),
            this.videoSupported && this.addTransceivers('video', 'recvonly', h),
            this.setStream(this.input.stream),
            this.logger.info('Renegotiating: Initial negotiation'),
            this.handleNegotiationNeeded(!0);
    }
}
