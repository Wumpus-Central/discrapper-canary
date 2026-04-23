"use strict";
n.d(t, { A: () => o });
var r = n(143236),
    i = n(118356),
    s = n(396574);
let a = new i.Vy("PeerConnection");
class o extends r.EventEmitter {
    bitrate;
    pc;
    stream = null;
    senders = [];
    negotiating = !1;
    _negotiationNeeded = !1;
    constructor(e) {
        super(), (this.bitrate = e);
        const t = (this.pc = new RTCPeerConnection({ sdpSemantics: "plan-b" }));
        s.LU
            ? ((t.onconnectionstatechange = this.handlePeerConnectionStateChange),
              (t.oniceconnectionstatechange = this.handlePeerConnectionStateChange))
            : (t.oniceconnectionstatechange = this.handleIceConnectionStateChange),
            (t.onsignalingstatechange = this.handleSignalingStateChange),
            (t.onicegatheringstatechange = this.handleIceGatheringStateChange),
            (t.ontrack = this.handleTrack.bind(this)),
            a.info("Constructed RTCPeerConnection");
    }
    setBitRate(e) {
        this.bitrate !== e && ((this.bitrate = e), this.negotiationNeeded());
    }
    close() {
        a.info("Close RTCPeerConnection"),
            "closed" !== this.signalingState && this.pc.close(),
            this.removeAllListeners();
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
            r = "closed" === this.iceConnectionState,
            i = !1;
        null == this.stream || r || (this.senders.forEach((e) => n.removeTrack(e)), (i = !0)),
            (this.stream = e),
            (this.senders = []),
            null == e ||
                r ||
                ((this.senders = [
                    ...e.getAudioTracks().map((t) => n.addTrack(t, e)),
                    ...e.getVideoTracks().map((t) => n.addTrack(t, e)),
                ]),
                (i = !0)),
            i && !t && this.negotiationNeeded();
    }
    createOffer() {
        let e = this.pc;
        return e
            .createOffer(this.makeOfferAnswerOptions())
            .then((t) => e.setLocalDescription(this.mungeLocalDescription(t)))
            .then(() => {
                let t = e.localDescription;
                if (null == t) throw Error("localDescription is null");
                return this.emit("offer", t), t;
            })
            .catch((t) => {
                if ("have-remote-offer" === e.signalingState) return a.error(t), this.createOffer();
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
                if (null == t) throw Error("localDescription is null");
                return this.emit("answer", t), t;
            })
            .catch((t) => {
                throw (
                    (a.warn(
                        `PeerConnection#createAnswer: Attempted to set local description in state: ${e.signalingState}`,
                    ),
                    t)
                );
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
        return { offerToReceiveAudio: !0, offerToReceiveVideo: s.g7, iceRestart: !1 };
    }
    mungeLocalDescription(e) {
        let t = e.sdp.split("\n");
        for (let e = 0; e < t.length; e++) {
            let n = t[e];
            if (/^a=mid:/.test(n)) {
                null != this.bitrate && t.splice(e + 1, 0, `b=AS:${Math.floor(this.bitrate / 1e3)}`);
                break;
            }
        }
        return (e.sdp = t.join("\n")), e;
    }
    emitTrack(e, t) {
        /^default/.test(t.id) ||
            ((t.onended = () => {
                this.emit("removetrack", e, t);
            }),
            this.emit("addtrack", e, t));
    }
    handlePeerConnectionStateChange = () => {
        let e = this.peerConnectionState;
        a.info("peerConnectionState =>", e),
            "connecting" === e
                ? "connected" === this.iceConnectionState
                    ? this.emit(e)
                    : this.emit(this.iceConnectionState)
                : this.emit(e);
    };
    handleIceConnectionStateChange = () => {
        let e = this.iceConnectionState;
        a.info("iceConnectionState =>", e), "completed" === e && (e = "connected"), this.emit(e);
    };
    handleSignalingStateChange = () => {
        a.info(`signalingState => ${this.signalingState}, negotiation needed: ${this._negotiationNeeded.toString()}`),
            "stable" === this.signalingState &&
                ((this.negotiating = !1), this._negotiationNeeded && this.negotiationNeeded());
    };
    handleIceGatheringStateChange = () => {
        a.info("iceGatheringState =>", this.iceGatheringState);
    };
    handleTrack = (e) => {
        this.emitTrack(e.streams[0].id, e.track);
    };
}
