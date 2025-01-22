r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(836560);
var s = r(259443),
    l = r(436620);
function u(e, n, r) {
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
let c = new s.Yd('PeerConnection');
class d extends o.EventEmitter {
    setBitRate(e) {
        this.bitrate !== e && ((this.bitrate = e), this.negotiationNeeded());
    }
    close() {
        c.info('Close RTCPeerConnection'), 'closed' !== this.signalingState && this.pc.close(), this.removeAllListeners();
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
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = this.pc,
            i = 'closed' === this.iceConnectionState,
            a = !1;
        null != this.stream && !i && (this.senders.forEach((e) => r.removeTrack(e)), (a = !0)), (this.stream = e), (this.senders = []), null != e && !i && ((this.senders = [...e.getAudioTracks().map((n) => r.addTrack(n, e)), ...e.getVideoTracks().map((n) => r.addTrack(n, e))]), (a = !0)), a && !n && this.negotiationNeeded();
    }
    createOffer() {
        let e = this.pc;
        return e
            .createOffer(this.makeOfferAnswerOptions())
            .then((n) => e.setLocalDescription(this.mungeLocalDescription(n)))
            .then(() => {
                let n = e.localDescription;
                if (null == n) throw Error('localDescription is null');
                return this.emit('offer', n), n;
            })
            .catch((n) => {
                if ('have-remote-offer' === e.signalingState) return c.error(n), this.createOffer();
                throw n;
            });
    }
    createAnswer() {
        let e = this.pc;
        return e
            .createAnswer(this.makeOfferAnswerOptions())
            .then((n) => e.setLocalDescription(this.mungeLocalDescription(n)))
            .then(() => {
                let n = e.localDescription;
                if (null == n) throw Error('localDescription is null');
                return this.emit('answer', n), n;
            })
            .catch((n) => {
                throw (c.warn('PeerConnection#createAnswer: Attempted to set local description in state: '.concat(e.signalingState)), n);
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
            offerToReceiveVideo: l.U8,
            iceRestart: !1
        };
    }
    mungeLocalDescription(e) {
        let n = e.sdp.split('\n');
        for (let e = 0; e < n.length; e++) {
            let r = n[e];
            if (/^a=mid:/.test(r)) {
                null != this.bitrate && n.splice(e + 1, 0, 'b=AS:'.concat(Math.floor(this.bitrate / 1000)));
                break;
            }
        }
        return (e.sdp = n.join('\n')), e;
    }
    emitTrack(e, n) {
        !/^default/.test(n.id) &&
            ((n.onended = () => {
                this.emit('removetrack', e, n);
            }),
            this.emit('addtrack', e, n));
    }
    constructor(e) {
        super(),
            u(this, 'bitrate', void 0),
            u(this, 'pc', void 0),
            u(this, 'stream', null),
            u(this, 'senders', []),
            u(this, 'negotiating', !1),
            u(this, '_negotiationNeeded', !1),
            u(this, 'handlePeerConnectionStateChange', () => {
                let e = this.peerConnectionState;
                c.info('peerConnectionState =>', e), 'connecting' === e ? ('connected' === this.iceConnectionState ? this.emit(e) : this.emit(this.iceConnectionState)) : this.emit(e);
            }),
            u(this, 'handleIceConnectionStateChange', () => {
                let e = this.iceConnectionState;
                c.info('iceConnectionState =>', e), 'completed' === e && (e = 'connected'), this.emit(e);
            }),
            u(this, 'handleSignalingStateChange', () => {
                c.info('signalingState => '.concat(this.signalingState, ', negotiation needed: ').concat(this._negotiationNeeded.toString())), 'stable' === this.signalingState && ((this.negotiating = !1), this._negotiationNeeded && this.negotiationNeeded());
            }),
            u(this, 'handleIceGatheringStateChange', () => {
                c.info('iceGatheringState =>', this.iceGatheringState);
            }),
            u(this, 'handleTrack', (e) => {
                this.emitTrack(e.streams[0].id, e.track);
            }),
            (this.bitrate = e);
        let n = (this.pc = new RTCPeerConnection({ sdpSemantics: 'plan-b' }));
        l.X6 ? ((n.onconnectionstatechange = this.handlePeerConnectionStateChange), (n.oniceconnectionstatechange = this.handlePeerConnectionStateChange)) : (n.oniceconnectionstatechange = this.handleIceConnectionStateChange), (n.onsignalingstatechange = this.handleSignalingStateChange), (n.onicegatheringstatechange = this.handleIceGatheringStateChange), (n.ontrack = this.handleTrack.bind(this)), c.info('Constructed RTCPeerConnection');
    }
}
