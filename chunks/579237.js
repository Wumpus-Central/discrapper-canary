r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(47120);
var a = r(836560);
var o = r(68721),
    s = r(961304),
    l = r(65154);
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
let c = {
    voiceActivityDetection: !0,
    offerToReceiveAudio: !0,
    offerToReceiveVideo: !1,
    iceRestart: !1
};
class d extends a.EventEmitter {
    stop() {
        for (let e of (this.pc1.close(), this.pc2.close(), this.input.destroy(), Object.keys(this.outputs))) this.destroyOutput(e);
    }
    setAudioSource(e) {
        this.input.setSource(e);
    }
    setAudioSink(e) {
        for (let n of ((this.sinkId = e), Object.keys(this.outputs))) this.outputs[n].setSinkId(e);
    }
    setNoiseCancellation(e) {
        this.input.noiseCancellation = e;
    }
    createOutput(e, n) {
        let r = this.outputs[e];
        null == r && (((r = new s.Z(this.userId, this.audioContext)).mute = !1), (r.volume = 100), r.setSpeakingFlags(l.Dg.VOICE), r.setSinkId(this.sinkId), (this.outputs[e] = r)), r.addTrack(n), r.play();
    }
    destroyOutput(e, n) {
        let r = this.outputs[e];
        null != r && (null == n || 0 === r.removeTrack(n)) && (r.destroy(), delete this.outputs[e]);
    }
    handshake() {
        let e = (e) => {
            let n = e.sdp.split('\n');
            for (let e = 0; e < n.length; e++) {
                let r = n[e];
                if (/^a=mid:/.test(r)) break;
            }
            return (e.sdp = n.join('\n')), e;
        };
        this.pc1.createOffer(c).then((n) => {
            this.pc1.setLocalDescription(e(n)).then(() => {
                this.pc2.setRemoteDescription(n).then(() => {
                    this.pc2.createAnswer().then((e) => {
                        this.pc2.setLocalDescription(e).then(() => {
                            this.pc1.setRemoteDescription(e);
                        });
                    });
                });
            });
        });
    }
    constructor(e, n, r, i = '') {
        super(),
            u(this, 'userId', void 0),
            u(this, 'sinkId', void 0),
            u(this, 'input', void 0),
            u(this, 'pc1', void 0),
            u(this, 'pc2', void 0),
            u(this, 'senders', []),
            u(this, 'outputs', {}),
            u(this, 'audioContext', void 0),
            u(this, 'handleStream', () => {
                let e = this.input.getDelayedStream();
                this.senders.forEach((e) => this.pc1.removeTrack(e)), (this.senders = [...e.getAudioTracks().map((n) => this.pc1.addTrack(n, e))]), this.handshake();
            }),
            u(this, 'handleTrack', (e) => {
                e.streams[0].getTracks().forEach((e) => {
                    this.createOutput(e.id, e),
                        (e.onmute = () => {
                            this.destroyOutput(e.id, e);
                        });
                });
            }),
            (this.userId = i),
            (this.sinkId = r),
            (this.pc1 = new RTCPeerConnection()),
            (this.pc1.onicecandidate = (e) => {
                null != e.candidate && this.pc2.addIceCandidate(e.candidate);
            }),
            (this.pc2 = new RTCPeerConnection()),
            (this.pc2.onicecandidate = (e) => {
                null != e.candidate && this.pc1.addIceCandidate(e.candidate);
            }),
            (this.pc2.ontrack = this.handleTrack),
            (this.input = new o.Z(e)),
            this.input.setSource(n),
            this.input.on('stream', this.handleStream),
            this.input.enable(),
            (this.audioContext = e);
    }
}
