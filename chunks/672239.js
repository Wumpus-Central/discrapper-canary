n.d(t, {
    d: () => E,
}),
    n(747238);
var r = n(214958),
    i = n.n(r),
    a = n(118356),
    s = n(205693),
    o = n(909131),
    l = n(659468),
    c = n(405163),
    u = n(506643),
    d = n(400976),
    f = n(682561),
    p = n(731854),
    _ = n(396574);

function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function m(e) {
    return e.split("-")[0];
}
class g extends o.A {
    destroy() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.destroy(e), this.pc.close();
    }
    setCodecs(e, t, n) {
        var r, i, a;
        let s;
        (this.fpc.audioCodec !== e || this.fpc.videoCodec !== t) &&
            ((s = this.codecs.find((t) => t.name === e)),
            (this.fpc.audioCodec = e),
            (this.fpc.audioPayloadType = null != (r = null == s ? void 0 : s.payloadType) ? r : 0),
            (s = this.codecs.find((e) => e.name === t)),
            (this.fpc.videoCodec = t),
            (this.fpc.videoPayloadType = null != (i = null == s ? void 0 : s.payloadType) ? i : 0),
            (this.fpc.rtxPayloadType = null != (a = null == s ? void 0 : s.rtxPayloadType) ? a : 0),
            this.pc.negotiationNeeded());
    }
    setStream(e) {
        (this.fpc.direction = null != e ? d.HO.SENDRECV : d.HO.SENDONLY), this.pc.setStream(null != e ? e : null);
    }
    createUser(e, t, n) {
        var r;
        if (0 === t) return void this.logger.warn("Attempting to create user ".concat(e, " with 0 audio SSRC"));
        this.logger.info(
            "Creating user: "
                .concat(e, " with audio SSRC: ")
                .concat(t, " and video SSRCs: ")
                .concat(null != (r = null == n ? void 0 : n.join(",")) ? r : 0),
        );
        let i = null != n && n.length > 0 ? n[0] : 0;
        this.fpc.addStream(e, t, i);
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
    constructor(e) {
        super(e),
            h(this, "pc", void 0),
            h(this, "fpc", void 0),
            h(this, "codecs", []),
            h(this, "logger", void 0),
            (this.logger = new a.Vy("Connection(".concat(e.context, ")")));
        const t = new l.A();
        t.on("answer", (e) =>
            this.pc
                .setRemoteDescription(e)
                .catch((e) => this.logger.error("Failed to set remote description (answer): ".concat(e))),
        ),
            t.on("offer", (e) => {
                this.pc
                    .setRemoteDescription(e)
                    .then(() => this.pc.createAnswer())
                    .then((e) => this.fpc.setRemoteDescription(e))
                    .catch((e) => this.logger.error("Failed to set remote description (offer): ".concat(e)));
            }),
            (t.direction = null != this.input.stream ? d.HO.SENDRECV : d.HO.SENDONLY),
            (this.fpc = t);
        const n = new u.A(this.voiceBitrate);
        n.on("addtrack", (e, t) => this.createOutput(m(e), t)),
            n.on("removetrack", (e, t) => this.destroyOutput(m(e), t)),
            n.once("connected", () => {
                this.input.reset(),
                    this.setConnectionState(p.$I.CONNECTED),
                    this.on(s.yq.Stats, this.handleStats),
                    this.input.on(c.T.VoiceActivity, this.handleVoiceActivity);
            }),
            n.on("connecting", () => this.setConnectionState(p.$I.DTLS_CONNECTING)),
            n.on("checking", () => this.setConnectionState(p.$I.ICE_CHECKING)),
            n.on("failed", () => this.setConnectionState(p.$I.NO_ROUTE)),
            n.on("disconnected", () => this.setConnectionState(p.$I.DISCONNECTED)),
            n.on("closed", () => this.setConnectionState(p.$I.DISCONNECTED)),
            n.on("offer", (e) => {
                let { sdp: n } = e,
                    { outboundStreams: r, codecs: i, audioSSRC: a, videoSSRC: o, rtxSSRC: l } = (0, d.$k)(n, !1);
                this.codecs = i;
                let c = (0, d.v5)(n);
                (t.outboundStreams = r),
                    (this.audioSSRC = a),
                    (t.extensions = c),
                    (this.videoStreamParameters[0].ssrc === o &&
                        this.videoStreamParameters[0].rtxSsrc === l &&
                        this.videoReady) ||
                        ((this.videoStreamParameters[0].ssrc = o),
                        (this.videoStreamParameters[0].rtxSsrc = l),
                        this.emit(
                            s.yq.Video,
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
                this.emit(s.yq.Connected, "webrtc", (0, d.An)(t, !1));
            }),
            null != this.input.stream ? n.setStream(this.input.stream) : n.negotiationNeeded(),
            (this.pc = n);
    }
}

function E(e) {
    let t = ""
            .concat(null != i().name && "" !== i().name ? i().name : "unknown", " ")
            .concat(null != i().version && "" !== i().version ? i().version : "unknown"),
        n = new a.Vy("Connection(".concat(e.context, ")"));
    return _.PF
        ? (n.info("Using Unified Plan (".concat(t, ")")), new f.A(e))
        : (n.info("Using Plan B (".concat(t, ")")), new g(e));
}
