"use strict";
n.d(t, { A: () => o }), n(321073);
var r = n(143236),
    i = n(214958),
    s = n.n(i),
    a = n(400976);
class o extends r.EventEmitter {
    audioCodec = null;
    audioPayloadType = null;
    videoCodec = null;
    videoPayloadType = null;
    rtxPayloadType = null;
    direction = null;
    outboundStreams = [];
    extensions = [];
    streams = [];
    activeAudioSSRCs = {};
    activeVideoSSRCs = {};
    _sdp = null;
    connected = !1;
    negotiating = !1;
    _negotiationNeeded = !1;
    addStream(e, t, n) {
        let r = !1;
        this.streams.some((e) => e.ssrc === t) || this.streams.push({ ssrc: t, cname: e, type: "audio" }),
            this.activeAudioSSRCs[e] !== t &&
                ((this.activeAudioSSRCs = { ...this.activeAudioSSRCs, [e]: t }), (r = !0)),
            null != n &&
                (n > 0
                    ? (this.streams.some((e) => e.ssrc === n) ||
                          this.streams.push({ ssrc: n, cname: e, type: "video" }),
                      this.activeVideoSSRCs[e] !== n &&
                          ((this.activeVideoSSRCs = { ...this.activeVideoSSRCs, [e]: n }), (r = !0)))
                    : null != this.activeVideoSSRCs[e] &&
                      ((r = !0),
                      (this.activeVideoSSRCs = { ...this.activeVideoSSRCs }),
                      delete this.activeVideoSSRCs[e])),
            r && this.negotiationNeeded();
    }
    removeStream(e) {
        let t = !1;
        null != this.activeAudioSSRCs[e] &&
            ((t = !0), (this.activeAudioSSRCs = { ...this.activeAudioSSRCs }), delete this.activeAudioSSRCs[e]),
            null != this.activeVideoSSRCs[e] &&
                ((t = !0), (this.activeVideoSSRCs = { ...this.activeVideoSSRCs }), delete this.activeVideoSSRCs[e]),
            t && this.negotiationNeeded();
    }
    get sdp() {
        if (null == this._sdp) throw Error("sdp is not set");
        return this._sdp;
    }
    set sdp(e) {
        if (!(0, a.IJ)(e)) throw Error(`Incorrect SDP received from rtc-worker: ${e}`);
        (this._sdp = e),
            this.createAnswer(),
            (this.connected = !0),
            this._negotiationNeeded && this.negotiationNeeded();
    }
    negotiationNeeded() {
        if (this.negotiating) {
            this._negotiationNeeded = !0;
            return;
        }
        null != this._sdp
            ? ((this.negotiating = !0), (this._negotiationNeeded = !1), this.generateSessionDescription("offer"))
            : (this._negotiationNeeded = !0);
    }
    setRemoteDescription(e) {
        return (this.negotiating = !1), this._negotiationNeeded && this.negotiationNeeded(), Promise.resolve();
    }
    createAnswer() {
        return this.generateSessionDescription("answer");
    }
    getSSRCs(e) {
        let t = this.streams.map((e, t) => {
            let { cname: n, ssrc: r, type: i } = e,
                s = this.activeAudioSSRCs[n],
                o = this.activeVideoSSRCs[n],
                l = `${i}_inbound_${t}`;
            return [r, n, i, s === r || o === r ? this.direction : a.HO.INACTIVE, l];
        });
        if ("Firefox" !== s().name) return this.connected ? t : [];
        let n = this.outboundStreams.map((e, t) => [
            0,
            "outbound",
            e.type,
            (0, a.u6)(e.direction),
            `${e.type}_outbound_${t}`,
        ]);
        if ("answer" !== e) return n.concat(t);
        {
            let e = n.length - t.length;
            return n
                .slice(0, e)
                .concat(t)
                .slice(0, n.length)
                .map((e, t) => {
                    let [n, r, i, s, o] = e;
                    return [n, r, i, (0, a.u6)(this.outboundStreams[t].direction), this.outboundStreams[t].mid];
                });
        }
    }
    generateSessionDescription(e) {
        let t = this.audioCodec,
            n = this.audioPayloadType,
            r = this.videoCodec,
            i = this.videoPayloadType,
            s = this.rtxPayloadType,
            o = this.sdp;
        if (null == t || null == n || null == r || null == i || null == s || null == o || null == this.direction)
            throw Error(
                `Invalid payload: audioCodec: ${t}, audioPayloadType: ${null == n ? "null" : n}, videoCodec: ${r}, videoCodecPayloadType: ${null == i ? "null" : i}, rtxPayloadType: ${null == s ? "null" : s}, sdp: ${o}`,
            );
        let l = (0, a.aC)({
            type: e,
            baseSDP: o,
            direction: this.direction,
            audioCodec: t,
            audioPayloadType: n,
            audioBitRate: 40,
            videoCodec: r,
            videoPayloadType: i,
            videoBitRate: 2500,
            rtxPayloadType: s,
            ssrcs: this.getSSRCs(e),
            extensions: this.extensions,
        });
        return this.emit(e, l), Promise.resolve(l);
    }
}
