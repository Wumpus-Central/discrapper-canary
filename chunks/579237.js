n.d(t, { Z: () => c }), n(47120), n(301563);
var r = n(836560),
    i = n(68721),
    o = n(961304),
    a = n(65154);
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
let l = {
    voiceActivityDetection: !0,
    offerToReceiveAudio: !0,
    offerToReceiveVideo: !1,
    iceRestart: !1
};
class c extends r.EventEmitter {
    stop() {
        for (let e of (this.pc1.close(), this.pc2.close(), this.input.destroy(), Object.keys(this.outputs))) this.destroyOutput(e);
    }
    setAudioSource(e) {
        this.input.setSource(e);
    }
    setAudioSink(e) {
        for (let t of ((this.sinkId = e), Object.keys(this.outputs))) this.outputs[t].setSinkId(e);
    }
    setNoiseCancellation(e) {
        this.input.noiseCancellation = e;
    }
    createOutput(e, t) {
        let n = this.outputs[e];
        null == n && (((n = new o.Z(this.userId, this.audioContext)).mute = !1), (n.volume = 100), n.setSpeakingFlags(a.Dg.VOICE), n.setSinkId(this.sinkId), (this.outputs[e] = n)), n.addTrack(t), n.play();
    }
    destroyOutput(e, t) {
        let n = this.outputs[e];
        null != n && (null == t || 0 === n.removeTrack(t)) && (n.destroy(), delete this.outputs[e]);
    }
    handshake() {
        let e = (e) => {
            let t = e.sdp.split('\n');
            for (let e = 0; e < t.length; e++) {
                let n = t[e];
                if (/^a=mid:/.test(n)) break;
            }
            return (e.sdp = t.join('\n')), e;
        };
        this.pc1.createOffer(l).then((t) => {
            this.pc1.setLocalDescription(e(t)).then(() => {
                this.pc2.setRemoteDescription(t).then(() => {
                    this.pc2.createAnswer().then((e) => {
                        this.pc2.setLocalDescription(e).then(() => {
                            this.pc1.setRemoteDescription(e);
                        });
                    });
                });
            });
        });
    }
    constructor(e, t, n, r = '') {
        super(),
            s(this, 'userId', void 0),
            s(this, 'sinkId', void 0),
            s(this, 'input', void 0),
            s(this, 'pc1', void 0),
            s(this, 'pc2', void 0),
            s(this, 'senders', []),
            s(this, 'outputs', {}),
            s(this, 'audioContext', void 0),
            s(this, 'handleStream', () => {
                let e = this.input.getDelayedStream();
                this.senders.forEach((e) => this.pc1.removeTrack(e)), (this.senders = [...e.getAudioTracks().map((t) => this.pc1.addTrack(t, e))]), this.handshake();
            }),
            s(this, 'handleTrack', (e) => {
                e.streams[0].getTracks().forEach((e) => {
                    this.createOutput(e.id, e),
                        (e.onmute = () => {
                            this.destroyOutput(e.id, e);
                        });
                });
            }),
            (this.userId = r),
            (this.sinkId = n),
            (this.pc1 = new RTCPeerConnection()),
            (this.pc1.onicecandidate = (e) => {
                null != e.candidate && this.pc2.addIceCandidate(e.candidate);
            }),
            (this.pc2 = new RTCPeerConnection()),
            (this.pc2.onicecandidate = (e) => {
                null != e.candidate && this.pc1.addIceCandidate(e.candidate);
            }),
            (this.pc2.ontrack = this.handleTrack),
            (this.input = new i.Z(e)),
            this.input.setSource(t),
            this.input.on('stream', this.handleStream),
            this.input.enable(),
            (this.audioContext = e);
    }
}
