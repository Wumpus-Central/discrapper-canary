(n.d(t, { Z: () => T }), n(539854), n(415506), n(388685), n(49124), n(290780), n(35282));
var r,
    i = n(74514),
    a = n.n(i),
    o = n(117806),
    s = n.n(o),
    l = n(264344),
    c = n.n(l),
    u = n(579092),
    d = n(46973),
    _ = n(912095),
    f = n(405475),
    p = n(886848),
    h = n(586021),
    m = n(649318),
    g = n(65154),
    E = n(436620);
function b(e, t, n) {
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
let y = 10,
    O = 10,
    v = null == (r = c().name) ? void 0 : r.toLowerCase().includes('firefox');
function I(e, t) {
    (e.sender.replaceTrack(t), (e.direction = null != t ? 'sendrecv' : 'recvonly'));
}
class T extends _.Z {
    destroy() {
        (super.destroy(), 'closed' !== this.signalingState && this.pc.close());
    }
    setCodecs(e, t, n) {
        var r, i, a, o;
        let s;
        (this.audioCodec !== e || this.videoCodec !== t) && ((s = this.codecs.find((t) => t.name === e)), (this.audioCodec = e), (this.audioPayloadType = null != (i = null == s ? void 0 : s.payloadType) ? i : 0), (s = this.codecs.find((e) => e.name === t)), (this.videoCodec = t), (this.videoPayloadType = null != (a = null == s ? void 0 : s.payloadType) ? a : 0), (this.rtxPayloadType = null != (o = null == s ? void 0 : s.rtxPayloadType) ? o : 0), null == (r = this.daveSessionManager) || r.updateLocalUserCodecs(e, t), this.logger.info('Renegotiating: Codecs changed'), this.handleNegotiationNeeded());
    }
    setStream(e) {
        let t = 'closed' === this.iceConnectionState;
        (null != e && !t && (I(this.audioTransceiver, e.getAudioTracks()[0]), this.videoSupported && I(this.videoTransceiver, e.getVideoTracks()[0])), this.logger.info('Renegotiating: Streams changed'), this.handleNegotiationNeeded());
    }
    createUser(e, t, n) {
        var r, i, a;
        if ((null == (r = this.daveSessionManager) || r.createUser(e), 0 === t)) return void this.logger.warn('Attempting to create user '.concat(e, ' with 0 audio SSRC'));
        this.logger.info(
            'Creating user: '
                .concat(e, ' with audio SSRC: ')
                .concat(t, ' and video SSRCs: ')
                .concat(null != (i = null == n ? void 0 : n.join(',')) ? i : 0)
        );
        let o = !1,
            s = this.users.get(e);
        if ((null == s && (s = {}), s.audioSSRC !== t)) {
            ((s.audioSSRC = t),
                (o = !0),
                this.unassignedStreams.audio.push({
                    cname: e,
                    ssrc: t
                }));
            let n = this.inactiveTransceivers.audio.length,
                r = y + this.unassignedStreams.audio.length - n;
            this.addTransceivers('audio', 'recvonly', r);
        }
        if (this.videoSupported && void 0 !== n && (!v || void 0 === s.videoSSRC)) {
            let t = null != n && n.length > 0 ? n[0] : 0;
            if (t > 0) {
                if (s.videoSSRC !== t) {
                    ((s.videoSSRC = t),
                        (o = !0),
                        this.unassignedStreams.video.push({
                            cname: e,
                            ssrc: t
                        }));
                    let n = this.inactiveTransceivers.video.length,
                        r = O + this.unassignedStreams.video.length - n;
                    this.addTransceivers('video', 'recvonly', r);
                }
            } else null != s.videoSSRC && ((s.videoSSRC = void 0), (o = !0));
        }
        if (o) {
            (this.users.set(e, s), t > 0 && this.userIdsBySsrc.set(t, e));
            let r = null != n && n.length > 0 ? n[0] : 0;
            (r > 0 && this.userIdsBySsrc.set(r, e), null == (a = this.daveSessionManager) || a.updateSsrcs(e, t, null != n ? n : []), this.logger.info('Renegotiating: User joined'), this.handleNegotiationNeeded());
        }
    }
    destroyUser(e) {
        var t;
        null == (t = this.daveSessionManager) || t.destroyUser(e);
        let n = this.users.get(e);
        if (null != n) {
            let { audioSSRC: t, videoSSRC: r } = n;
            (this.users.delete(e), null != t && this.userIdsBySsrc.delete(t), null != r && this.userIdsBySsrc.delete(r), this.logger.info('Renegotiating: User left: '.concat(e)), this.handleNegotiationNeeded());
        }
    }
    setBitRate(e) {
        this.voiceBitrate !== e &&
            (super.setBitRate(e),
            this.setAudioEncoderParameters([
                {
                    parameter: _.p.AUDIO_BITRATE,
                    value: e
                }
            ]));
    }
    setRemoteAudioHistory(e) {
        this.enableAudioNack = e > 0;
    }
    setSDP(e) {
        if (!(0, m.$6)(e)) throw Error('Incorrect SDP received from rtc-worker: '.concat(e));
        if ('have-local-offer' !== this.signalingState) throw Error('Invalid signaling state '.concat(this.signalingState));
        let { outboundStreams: t } = this.parseLocalDescription();
        ((this.sdp = e), this.setRemoteAnswer(t, [], [], new Map()));
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
        let a = (e) => {
            this.logger.error('UnifiedConnection.setTransceiverEncodingProperty: setParameters failed: "'.concat(e, '" (').concat(JSON.stringify(t), ')"'));
        };
        n.setParameters(r)
            .then(
                () => {},
                (e) => a(e)
            )
            .catch((e) => a(e));
    }
    setAudioEncoderParameters(e) {
        let t = { [_.p.AUDIO_BITRATE]: 'maxBitrate' },
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
                [_.p.VIDEO_BITRATE]: 'maxBitrate',
                [_.p.VIDEO_RESOLUTION_SCALE]: 'scaleResolutionDownBy',
                [_.p.VIDEO_FRAMERATE]: 'maxFramerate'
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
            { outboundStreams: n, codecs: r, audioSSRC: i, videoSSRC: a, rtxSSRC: o } = (0, m.Nl)(t),
            s = (0, m.nX)(t);
        return {
            sdp: t,
            outboundStreams: n,
            codecs: r,
            audioSSRC: i,
            videoSSRC: a,
            rtxSSRC: o,
            extensions: s
        };
    }
    addTransceivers(e, t, n, r) {
        let i = this.pc,
            a = i.getTransceivers().length;
        for (let s = a; s < a + n; s++) {
            var o;
            let n = { direction: t };
            'video' === e && null != r && (n.streams = [r]);
            let a = i.addTransceiver(e, n);
            (null == (o = this.daveSessionManager) || o.setupEncodedTransformsForTransceiver(a), this.inactiveTransceivers[e].push(s.toString()));
        }
    }
    buildSSRCsFromOutboundStreams(e, t, n, r) {
        return {
            ssrcs: e.map((e) => {
                let { mid: i, type: a, direction: o } = e;
                i = String(i);
                let s = this.assignedStreams.get(i);
                if (null != s) {
                    let e = r.get(s.cname),
                        t = 'audio' === a ? (null == e ? void 0 : e.audioSSRC) : null == e ? void 0 : e.videoSSRC;
                    s.ssrc !== t && (this.logger.info('Deleting inactive stream for user with mid: '.concat(i, ', type: ').concat(a, ', ssrc: ').concat(s.ssrc)), (s = void 0), this.assignedStreams.delete(i));
                }
                let l = 'audio' === a ? t : n,
                    c = this.inactiveTransceivers[a],
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
                        type: a,
                        direction: (0, m.Mg)(o),
                        mid: i
                    }
                );
            }),
            remainingAudioStreams: t,
            remainingVideoStreams: n
        };
    }
    generateSDPAnswer(e, t, n, r) {
        var i, a;
        let o = this.audioCodec,
            s = this.audioPayloadType,
            l = this.videoCodec,
            c = this.videoPayloadType,
            u = this.videoSupported && (null == (a = this.videoTransceiver) || null == (i = a.sender) ? void 0 : i.track) != null,
            d = this.rtxPayloadType,
            _ = this.sdp;
        if (null == o || null == s || null == l || null == c || null == d || null == _)
            throw Error(
                'Invalid payload: audioCodec: '
                    .concat(o, ', audioPayloadType: ')
                    .concat(null == s ? 'null' : s, ', videoCodec: ')
                    .concat(l, ', videoCodecPayloadType: ')
                    .concat(null == c ? 'null' : c, ', rtxPayloadType: ')
                    .concat(null == d ? 'null' : d, ', sdp: ')
                    .concat(null == _ ? 'null' : _)
            );
        let { ssrcs: f, remainingAudioStreams: p, remainingVideoStreams: h } = this.buildSSRCsFromOutboundStreams(e, t, n, r);
        return {
            remainingAudioStreams: p,
            remainingVideoStreams: h,
            answer: (0, m.Rx)({
                type: 'answer',
                baseSDP: _,
                audioCodec: o,
                audioPayloadType: s,
                audioBitRate: this.voiceBitrate,
                videoCodec: l,
                videoPayloadType: c,
                videoBitRate: 2500,
                sendingVideo: u,
                rtxPayloadType: d,
                ssrcs: f,
                extensions: this.extensions,
                enableAudioNack: this.enableAudioNack
            })
        };
    }
    async setRemoteAnswer(e, t, n, r) {
        let i = this.pc,
            { answer: a, remainingAudioStreams: o, remainingVideoStreams: s } = this.generateSDPAnswer(e, t, n, r);
        try {
            await i.setRemoteDescription(a);
        } catch (e) {
            (this.logger.warn('Failed to set remote answer: '.concat(e, ', type: ').concat(a.type)), this.emit(d.Sh.SdpError, 'setRemoteDescription', e.message, a.type));
        }
        (this.unassignedStreams.audio.unshift(...o), this.unassignedStreams.video.unshift(...s), (this.unassignedStreams.audio.length > 0 || this.unassignedStreams.video.length > 0) && ((this.negotiationNeeded = !0), this.logger.info('Renegotiating: Streams left unassigned after negotiation - renegotiate')), (this.negotiating = !1), this.negotiationNeeded && this.handleNegotiationNeeded());
    }
    setConnected() {
        (this.input.reset(), this.setConnectionState(g.$j.CONNECTED), this.on(d.Sh.Stats, this.handleStats), this.input.on(p.G.VoiceActivity, this.handleVoiceActivity));
    }
    async handleNegotiationNeeded() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!e && (this.negotiating || null == this.sdp)) {
            this.negotiationNeeded = !0;
            return;
        }
        ((this.negotiating = !0), (this.negotiationNeeded = !1));
        let t = a()(this.unassignedStreams.audio),
            n = a()(this.unassignedStreams.video),
            r = s()(this.users);
        ((this.unassignedStreams.audio = []), (this.unassignedStreams.video = []));
        let i = this.pc,
            o = await i.createOffer(this.makeOfferAnswerOptions());
        try {
            await i.setLocalDescription(o);
        } catch (e) {
            (this.logger.warn('Failed to set local offer: '.concat(e, ', type: ').concat(o.type, ', sdp: ').concat(o.sdp)), this.emit(d.Sh.SdpError, 'setLocalDescription', e.message, o.type));
        }
        let { sdp: l, outboundStreams: c, codecs: u, audioSSRC: _, videoSSRC: f, rtxSSRC: p, extensions: h } = this.parseLocalDescription();
        if (((this.codecs = u), (this.extensions = h), _ !== this.audioSSRC || f !== this.videoSSRC)) {
            var g;
            null == (g = this.daveSessionManager) || g.updateSsrcs(this.userId, _, [f]);
        }
        ((this.audioSSRC = _), (this.videoSSRC = f), (this.videoReady = f > 0 && p > 0), (this.videoStreamParameters[0].ssrc !== f || this.videoStreamParameters[0].rtxSsrc !== p || this.videoReady) && ((this.videoStreamParameters[0].ssrc = 0 === f ? this.videoStreamParameters[0].ssrc : f), (this.videoStreamParameters[0].rtxSsrc = 0 === p ? this.videoStreamParameters[0].rtxSsrc : p), (this.videoStreamParameters[0].active = this.videoReady), this.emit(d.Sh.Video, this.userId, this.input.getVideoStreamId(), this.audioSSRC, f, p, this.videoStreamParameters)), null == this.sdp ? this.emit(d.Sh.Connected, 'webrtc', (0, m.sc)(l)) : this.setRemoteAnswer(c, t, n, r));
    }
    constructor(e) {
        var t;
        (super(e),
            b(this, 'pc', void 0),
            b(this, 'sdp', null),
            b(this, 'negotiating', !1),
            b(this, 'negotiationNeeded', !1),
            b(this, 'audioTransceiver', void 0),
            b(this, 'videoTransceiver', void 0),
            b(this, 'users', new Map()),
            b(this, 'userIdsBySsrc', new Map()),
            b(this, 'assignedStreams', new Map()),
            b(this, 'unassignedStreams', {
                audio: [],
                video: []
            }),
            b(this, 'inactiveTransceivers', {
                audio: [],
                video: []
            }),
            b(this, 'trackUserIds', {}),
            b(this, 'audioCodec', null),
            b(this, 'audioPayloadType', null),
            b(this, 'videoCodec', null),
            b(this, 'videoPayloadType', null),
            b(this, 'rtxPayloadType', null),
            b(this, 'enableAudioNack', !1),
            b(this, 'extensions', []),
            b(this, 'codecs', []),
            b(this, 'daveSessionManager', null),
            b(this, 'logger', void 0),
            b(this, 'getUserIdBySsrc', (e) => this.userIdsBySsrc.get(e)),
            b(this, 'handlePeerConnectionStateChange', () => {
                let e = this.peerConnectionState;
                switch ((this.logger.info('peerConnectionState =>', e), e)) {
                    case 'connected':
                        this.setConnected();
                        break;
                    case 'connecting':
                        'connected' === this.iceConnectionState ? this.setConnectionState(g.$j.DTLS_CONNECTING) : this.setConnectionState(g.$j.ICE_CHECKING);
                        break;
                    case 'failed':
                        this.setConnectionState(g.$j.NO_ROUTE);
                        break;
                    case 'disconnected':
                    case 'closed':
                        this.setConnectionState(g.$j.DISCONNECTED);
                }
            }),
            b(this, 'handleIceConnectionStateChange', () => {
                let e = this.iceConnectionState;
                switch ((this.logger.info('iceConnectionState =>', e), e)) {
                    case 'connected':
                        this.setConnected();
                        break;
                    case 'checking':
                        this.setConnectionState(g.$j.ICE_CHECKING);
                        break;
                    case 'failed':
                        this.setConnectionState(g.$j.NO_ROUTE);
                        break;
                    case 'disconnected':
                    case 'closed':
                        this.setConnectionState(g.$j.DISCONNECTED);
                }
            }),
            b(this, 'handleSignalingStateChange', () => {
                let e = this.signalingState;
                this.logger.info('signalingState => '.concat(e));
            }),
            b(this, 'handleIceGatheringStateChange', () => {
                this.logger.info('iceGatheringState =>', this.iceGatheringState);
            }),
            b(this, 'handleTrack', (e) => {
                let t = e.streams[0].id,
                    n = e.track;
                if (!/^default/.test(n.id)) {
                    var r, i, a, o;
                    let [e, s] = t.split('-');
                    this.trackUserIds[n.id] = e;
                    let l = this.users.get(e);
                    if ((null == l || null == (i = l.videoSSRC) || null == (r = i.toString) ? void 0 : r.call(i)) !== s && (null == l || null == (o = l.audioSSRC) || null == (a = o.toString) ? void 0 : a.call(o)) !== s) return void this.logger.info('Got stale ssrc '.concat(s, ' for ').concat(n.kind, ' track, user ID ').concat(e));
                    (this.createOutput(e, n),
                        (n.onunmute = () => this.createOutput(e, n)),
                        (n.onmute = () => {
                            var t;
                            (null == (t = this.users.get(e)) ? void 0 : t.videoSSRC) == null && this.destroyOutput(e, n);
                        }));
                }
            }),
            (this.logger = new u.Yd('UnifiedConnection('.concat(e.context, ')'))));
        let n = e.dave;
        (null == n || (0, h.IT)() || (this.logger.warn('DAVE is initialized but encoded transforms are not supported'), (n = null)),
            null != n &&
                ((this.daveSessionManager = new f.j(n, e.transientKeys, this.userId)),
                this.daveSessionManager.on(d.Sh.MLSFailure, (e, t) => {
                    this.emit(d.Sh.MLSFailure, e, t);
                }),
                this.daveSessionManager.on(d.Sh.SecureFramesUpdate, (e) => {
                    this.emit(d.Sh.SecureFramesUpdate, e);
                })),
            (this.videoSupported = E.U8));
        let r = (this.pc = new RTCPeerConnection({
            bundlePolicy: 'max-bundle',
            sdpSemantics: 'unified-plan',
            encodedInsertableStreams: null != this.daveSessionManager
        }));
        (E.X6 ? ((r.onconnectionstatechange = this.handlePeerConnectionStateChange), (r.oniceconnectionstatechange = this.handlePeerConnectionStateChange)) : (r.oniceconnectionstatechange = this.handleIceConnectionStateChange),
            (r.onsignalingstatechange = this.handleSignalingStateChange),
            (r.onicegatheringstatechange = this.handleIceGatheringStateChange),
            (r.ontrack = this.handleTrack),
            (this.audioTransceiver = r.addTransceiver('audio', {
                direction: 'recvonly',
                sendEncodings: [{ maxBitrate: this.voiceBitrate }]
            })),
            null == (t = this.daveSessionManager) || t.setupEncodedTransformsForTransceiver(this.audioTransceiver),
            this.videoSupported && (this.addTransceivers('video', 'recvonly', 1, this.input.getVideoStream()), (this.videoTransceiver = r.getTransceivers()[1])),
            this.addTransceivers('audio', 'recvonly', y),
            this.videoSupported && this.addTransceivers('video', 'recvonly', O),
            this.setStream(this.input.stream),
            this.logger.info('Renegotiating: Initial negotiation, user id: '.concat(e.userId)),
            this.handleNegotiationNeeded(!0));
    }
}
