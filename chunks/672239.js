"use strict";
n.d(t, { d: () => m });
var r = n(214958),
    i = n.n(r),
    s = n(118356),
    a = n(205693),
    o = n(909131),
    l = n(659468),
    u = n(405163),
    c = n(506643),
    d = n(400976),
    _ = n(682561),
    f = n(731854),
    p = n(396574);
function h(e) {
    return e.split("-")[0];
}
class E extends o.A {
    pc;
    fpc;
    codecs = [];
    logger;
    constructor(e) {
        super(e), (this.logger = new s.Vy(`Connection(${e.context})`));
        const t = new l.A();
        t.on("answer", (e) =>
            this.pc
                .setRemoteDescription(e)
                .catch((e) => this.logger.error(`Failed to set remote description (answer): ${e}`)),
        ),
            t.on("offer", (e) => {
                this.pc
                    .setRemoteDescription(e)
                    .then(() => this.pc.createAnswer())
                    .then((e) => this.fpc.setRemoteDescription(e))
                    .catch((e) => this.logger.error(`Failed to set remote description (offer): ${e}`));
            }),
            (t.direction = null != this.input.stream ? d.HO.SENDRECV : d.HO.SENDONLY),
            (this.fpc = t);
        const n = new c.A(this.voiceBitrate);
        n.on("addtrack", (e, t) => this.createOutput(h(e), t)),
            n.on("removetrack", (e, t) => this.destroyOutput(h(e), t)),
            n.once("connected", () => {
                this.input.reset(),
                    this.setConnectionState(f.$I.CONNECTED),
                    this.on(a.yq.Stats, this.handleStats),
                    this.input.on(u.T.VoiceActivity, this.handleVoiceActivity);
            }),
            n.on("connecting", () => this.setConnectionState(f.$I.DTLS_CONNECTING)),
            n.on("checking", () => this.setConnectionState(f.$I.ICE_CHECKING)),
            n.on("failed", () => this.setConnectionState(f.$I.NO_ROUTE)),
            n.on("disconnected", () => this.setConnectionState(f.$I.DISCONNECTED)),
            n.on("closed", () => this.setConnectionState(f.$I.DISCONNECTED)),
            n.on("offer", (e) => {
                let { sdp: n } = e,
                    { outboundStreams: r, codecs: i, audioSSRC: s, videoSSRC: o, rtxSSRC: l } = (0, d.$k)(n, !1);
                this.codecs = i;
                let u = (0, d.v5)(n);
                (t.outboundStreams = r),
                    (this.audioSSRC = s),
                    (t.extensions = u),
                    (this.videoStreamParameters[0].ssrc === o &&
                        this.videoStreamParameters[0].rtxSsrc === l &&
                        this.videoReady) ||
                        ((this.videoStreamParameters[0].ssrc = o),
                        (this.videoStreamParameters[0].rtxSsrc = l),
                        this.emit(
                            a.yq.Video,
                            this.userId,
                            this.input.getVideoStreamId(),
                            this.audioSSRC,
                            this.videoStreamParameters[0].ssrc,
                            this.videoStreamParameters[0].rtxSsrc,
                            this.videoStreamParameters,
                        ),
                        (this.videoReady = !0));
            }),
            n.once("offer", (e) => {
                let { sdp: t } = e;
                this.emit(a.yq.Connected, "webrtc", (0, d.An)(t, !1));
            }),
            null != this.input.stream ? n.setStream(this.input.stream) : n.negotiationNeeded(),
            (this.pc = n);
    }
    destroy() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.destroy(e), this.pc.close();
    }
    setCodecs(e, t, n) {
        let r;
        (this.fpc.audioCodec !== e || this.fpc.videoCodec !== t) &&
            ((r = this.codecs.find((t) => t.name === e)),
            (this.fpc.audioCodec = e),
            (this.fpc.audioPayloadType = r?.payloadType ?? 0),
            (r = this.codecs.find((e) => e.name === t)),
            (this.fpc.videoCodec = t),
            (this.fpc.videoPayloadType = r?.payloadType ?? 0),
            (this.fpc.rtxPayloadType = r?.rtxPayloadType ?? 0),
            this.pc.negotiationNeeded());
    }
    setStream(e) {
        (this.fpc.direction = null != e ? d.HO.SENDRECV : d.HO.SENDONLY), this.pc.setStream(e ?? null);
    }
    createUser(e, t, n) {
        if (0 === t) return void this.logger.warn(`Attempting to create user ${e} with 0 audio SSRC`);
        this.logger.info(`Creating user: ${e} with audio SSRC: ${t} and video SSRCs: ${n?.join(",") ?? 0}`);
        let r = null != n && n.length > 0 ? n[0] : 0;
        this.fpc.addStream(e, t, r);
    }
    destroyUser(e) {
        this.fpc.removeStream(e);
    }
    setBitRate(e) {
        this.voiceBitrate !== e && (super.setBitRate(e), this.pc.setBitRate(e));
    }
    setSDP(e) {
        this.pc.on("offer", () => this.fpc.createAnswer()), (this.fpc.sdp = e);
    }
    getUserIdBySsrc(e) {}
    getRawStats() {
        return this.pc.getStats();
    }
    setVideoEncoderParameters(e) {}
}
function m(e) {
    let t = `${null != i().name && "" !== i().name ? i().name : "unknown"} ${null != i().version && "" !== i().version ? i().version : "unknown"}`,
        n = new s.Vy(`Connection(${e.context})`);
    return p.PF ? (n.info(`Using Unified Plan (${t})`), new _.A(e)) : (n.info(`Using Plan B (${t})`), new E(e));
}
