n.d(t, { Z: () => l }), n(301563), n(47120), n(411104);
var r = n(836560),
    i = n(259443),
    o = n(436620);
function a(e, t, n) {
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
let s = new i.Yd('PeerConnection');
class l extends r.EventEmitter {
    setBitRate(e) {
        this.bitrate !== e && ((this.bitrate = e), this.negotiationNeeded());
    }
    close() {
        s.info('Close RTCPeerConnection'), 'closed' !== this.signalingState && this.pc.close(), this.removeAllListeners();
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
            r = 'closed' === this.iceConnectionState,
            i = !1;
        null == this.stream || r || (this.senders.forEach((e) => n.removeTrack(e)), (i = !0)), (this.stream = e), (this.senders = []), null == e || r || ((this.senders = [...e.getAudioTracks().map((t) => n.addTrack(t, e)), ...e.getVideoTracks().map((t) => n.addTrack(t, e))]), (i = !0)), i && !t && this.negotiationNeeded();
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
                if ('have-remote-offer' === e.signalingState) return s.error(t), this.createOffer();
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
                throw (s.warn('PeerConnection#createAnswer: Attempted to set local description in state: '.concat(e.signalingState)), t);
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
            offerToReceiveVideo: o.U8,
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
            a(this, 'bitrate', void 0),
            a(this, 'pc', void 0),
            a(this, 'stream', null),
            a(this, 'senders', []),
            a(this, 'negotiating', !1),
            a(this, '_negotiationNeeded', !1),
            a(this, 'handlePeerConnectionStateChange', () => {
                let e = this.peerConnectionState;
                s.info('peerConnectionState =>', e), 'connecting' === e ? ('connected' === this.iceConnectionState ? this.emit(e) : this.emit(this.iceConnectionState)) : this.emit(e);
            }),
            a(this, 'handleIceConnectionStateChange', () => {
                let e = this.iceConnectionState;
                s.info('iceConnectionState =>', e), 'completed' === e && (e = 'connected'), this.emit(e);
            }),
            a(this, 'handleSignalingStateChange', () => {
                s.info('signalingState => '.concat(this.signalingState, ', negotiation needed: ').concat(this._negotiationNeeded.toString())), 'stable' === this.signalingState && ((this.negotiating = !1), this._negotiationNeeded && this.negotiationNeeded());
            }),
            a(this, 'handleIceGatheringStateChange', () => {
                s.info('iceGatheringState =>', this.iceGatheringState);
            }),
            a(this, 'handleTrack', (e) => {
                this.emitTrack(e.streams[0].id, e.track);
            }),
            (this.bitrate = e);
        let t = (this.pc = new RTCPeerConnection({ sdpSemantics: 'plan-b' }));
        o.X6 ? ((t.onconnectionstatechange = this.handlePeerConnectionStateChange), (t.oniceconnectionstatechange = this.handlePeerConnectionStateChange)) : (t.oniceconnectionstatechange = this.handleIceConnectionStateChange), (t.onsignalingstatechange = this.handleSignalingStateChange), (t.onicegatheringstatechange = this.handleIceGatheringStateChange), (t.ontrack = this.handleTrack.bind(this)), s.info('Constructed RTCPeerConnection');
    }
}
