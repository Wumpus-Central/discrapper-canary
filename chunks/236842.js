n.d(t, { Z: () => l }), n(47120), n(411104);
var i = n(836560),
    r = n(259443),
    a = n(436620);
function s(e, t, n) {
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
let o = new r.Yd('PeerConnection');
class l extends i.EventEmitter {
    setBitRate(e) {
        this.bitrate !== e && ((this.bitrate = e), this.negotiationNeeded());
    }
    close() {
        o.info('Close RTCPeerConnection'), 'closed' !== this.signalingState && this.pc.close(), this.removeAllListeners();
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
        return null != this.pc && /connected|completed/.test(this.pc.iceConnectionState);
    }
    setStream(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.pc,
            i = 'closed' === this.iceConnectionState,
            r = !1;
        null == this.stream || i || (this.senders.forEach((e) => n.removeTrack(e)), (r = !0)), (this.stream = e), (this.senders = []), null == e || i || ((this.senders = [...e.getAudioTracks().map((t) => n.addTrack(t, e)), ...e.getVideoTracks().map((t) => n.addTrack(t, e))]), (r = !0)), r && !t && this.negotiationNeeded();
    }
    createOffer() {
        let e = this.pc;
        return e
            .createOffer(this.makeOfferAnswerOptions())
            .then((t) => e.setLocalDescription(this.mungeLocalDescription(t)))
            .then(() => {
                let t = e.localDescription;
                if (null == t) throw Error('localDescription is null');
                return this.emit('offer', t), t;
            })
            .catch((t) => {
                if ('have-remote-offer' === e.signalingState) return o.error(t), this.createOffer();
                throw t;
            });
    }
    createAnswer() {
        let e = this.pc;
        return e
            .createAnswer(this.makeOfferAnswerOptions())
            .then((t) => e.setLocalDescription(this.mungeLocalDescription(t)))
            .then(() => {
                let t = e.localDescription;
                if (null == t) throw Error('localDescription is null');
                return this.emit('answer', t), t;
            })
            .catch((t) => {
                throw (o.warn('PeerConnection#createAnswer: Attempted to set local description in state: '.concat(e.signalingState)), t);
            });
    }
    negotiationNeeded() {
        if (this.negotiating) {
            this._negotiationNeeded = !0;
            return;
        }
        (this.negotiating = !0), (this._negotiationNeeded = !1), this.createOffer();
    }
    setRemoteDescription(e) {
        return this.pc.setRemoteDescription(e);
    }
    getStats() {
        return this.pc.getStats();
    }
    makeOfferAnswerOptions() {
        return {
            offerToReceiveAudio: !0,
            offerToReceiveVideo: a.U8,
            iceRestart: !1
        };
    }
    mungeLocalDescription(e) {
        let t = e.sdp.split('\n');
        for (let e = 0; e < t.length; e++) {
            let n = t[e];
            if (/^a=mid:/.test(n)) {
                null != this.bitrate && t.splice(e + 1, 0, 'b=AS:'.concat(Math.floor(this.bitrate / 1000)));
                break;
            }
        }
        return (e.sdp = t.join('\n')), e;
    }
    emitTrack(e, t) {
        /^default/.test(t.id) ||
            ((t.onended = () => {
                this.emit('removetrack', e, t);
            }),
            this.emit('addtrack', e, t));
    }
    constructor(e) {
        super(),
            s(this, 'bitrate', void 0),
            s(this, 'pc', void 0),
            s(this, 'stream', null),
            s(this, 'senders', []),
            s(this, 'negotiating', !1),
            s(this, '_negotiationNeeded', !1),
            s(this, 'handlePeerConnectionStateChange', () => {
                let e = this.peerConnectionState;
                o.info('peerConnectionState =>', e), 'connecting' === e ? ('connected' === this.iceConnectionState ? this.emit(e) : this.emit(this.iceConnectionState)) : this.emit(e);
            }),
            s(this, 'handleIceConnectionStateChange', () => {
                let e = this.iceConnectionState;
                o.info('iceConnectionState =>', e), 'completed' === e && (e = 'connected'), this.emit(e);
            }),
            s(this, 'handleSignalingStateChange', () => {
                o.info('signalingState => '.concat(this.signalingState, ', negotiation needed: ').concat(this._negotiationNeeded.toString())), 'stable' === this.signalingState && ((this.negotiating = !1), this._negotiationNeeded && this.negotiationNeeded());
            }),
            s(this, 'handleIceGatheringStateChange', () => {
                o.info('iceGatheringState =>', this.iceGatheringState);
            }),
            s(this, 'handleTrack', (e) => {
                this.emitTrack(e.streams[0].id, e.track);
            }),
            (this.bitrate = e);
        let t = (this.pc = new RTCPeerConnection({ sdpSemantics: 'plan-b' }));
        a.X6 ? ((t.onconnectionstatechange = this.handlePeerConnectionStateChange), (t.oniceconnectionstatechange = this.handlePeerConnectionStateChange)) : (t.oniceconnectionstatechange = this.handleIceConnectionStateChange), (t.onsignalingstatechange = this.handleSignalingStateChange), (t.onicegatheringstatechange = this.handleIceGatheringStateChange), (t.ontrack = this.handleTrack.bind(this)), o.info('Constructed RTCPeerConnection');
    }
}
