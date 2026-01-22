n.d(t, {
    A: () => d,
}),
    n(321073),
    n(65821),
    n(896048);
var r = n(143236),
    i = n(214958),
    a = n.n(i),
    s = n(400976);

function o(e, t, n) {
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

function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}

function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class d extends r.EventEmitter {
    addStream(e, t, n) {
        let r = !1;
        this.streams.some((e) => e.ssrc === t) ||
            this.streams.push({
                ssrc: t,
                cname: e,
                type: "audio",
            }),
            this.activeAudioSSRCs[e] !== t &&
                ((this.activeAudioSSRCs = u(l({}, this.activeAudioSSRCs), {
                    [e]: t,
                })),
                (r = !0)),
            null != n &&
                (n > 0
                    ? (this.streams.some((e) => e.ssrc === n) ||
                          this.streams.push({
                              ssrc: n,
                              cname: e,
                              type: "video",
                          }),
                      this.activeVideoSSRCs[e] !== n &&
                          ((this.activeVideoSSRCs = u(l({}, this.activeVideoSSRCs), {
                              [e]: n,
                          })),
                          (r = !0)))
                    : null != this.activeVideoSSRCs[e] &&
                      ((r = !0),
                      (this.activeVideoSSRCs = l({}, this.activeVideoSSRCs)),
                      delete this.activeVideoSSRCs[e])),
            r && this.negotiationNeeded();
    }
    removeStream(e) {
        let t = !1;
        null != this.activeAudioSSRCs[e] &&
            ((t = !0), (this.activeAudioSSRCs = l({}, this.activeAudioSSRCs)), delete this.activeAudioSSRCs[e]),
            null != this.activeVideoSSRCs[e] &&
                ((t = !0), (this.activeVideoSSRCs = l({}, this.activeVideoSSRCs)), delete this.activeVideoSSRCs[e]),
            t && this.negotiationNeeded();
    }
    get sdp() {
        if (null == this._sdp) throw Error("sdp is not set");
        return this._sdp;
    }
    set sdp(e) {
        if (!(0, s.IJ)(e)) throw Error("Incorrect SDP received from rtc-worker: ".concat(e));
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
                a = this.activeAudioSSRCs[n],
                o = this.activeVideoSSRCs[n],
                l = "".concat(i, "_inbound_").concat(t);
            return [r, n, i, a === r || o === r ? this.direction : s.HO.INACTIVE, l];
        });
        if ("Firefox" !== a().name) return this.connected ? t : [];
        let n = this.outboundStreams.map((e, t) => [
            0,
            "outbound",
            e.type,
            (0, s.u6)(e.direction),
            "".concat(e.type, "_outbound_").concat(t),
        ]);
        if ("answer" !== e) return n.concat(t);
        {
            let e = n.length - t.length;
            return n
                .slice(0, e)
                .concat(t)
                .slice(0, n.length)
                .map((e, t) => {
                    let [n, r, i, a, o] = e;
                    return [n, r, i, (0, s.u6)(this.outboundStreams[t].direction), this.outboundStreams[t].mid];
                });
        }
    }
    generateSessionDescription(e) {
        let t = this.audioCodec,
            n = this.audioPayloadType,
            r = this.videoCodec,
            i = this.videoPayloadType,
            a = this.rtxPayloadType,
            o = this.sdp;
        if (null == t || null == n || null == r || null == i || null == a || null == o || null == this.direction)
            throw Error(
                "Invalid payload: audioCodec: "
                    .concat(t, ", audioPayloadType: ")
                    .concat(null == n ? "null" : n, ", videoCodec: ")
                    .concat(r, ", videoCodecPayloadType: ")
                    .concat(null == i ? "null" : i, ", rtxPayloadType: ")
                    .concat(null == a ? "null" : a, ", sdp: ")
                    .concat(o),
            );
        let l = (0, s.aC)({
            type: e,
            baseSDP: o,
            direction: this.direction,
            audioCodec: t,
            audioPayloadType: n,
            audioBitRate: 40,
            videoCodec: r,
            videoPayloadType: i,
            videoBitRate: 2500,
            rtxPayloadType: a,
            ssrcs: this.getSSRCs(e),
            extensions: this.extensions,
        });
        return this.emit(e, l), Promise.resolve(l);
    }
    constructor(...e) {
        super(...e),
            o(this, "audioCodec", null),
            o(this, "audioPayloadType", null),
            o(this, "videoCodec", null),
            o(this, "videoPayloadType", null),
            o(this, "rtxPayloadType", null),
            o(this, "direction", null),
            o(this, "outboundStreams", []),
            o(this, "extensions", []),
            o(this, "streams", []),
            o(this, "activeAudioSSRCs", {}),
            o(this, "activeVideoSSRCs", {}),
            o(this, "_sdp", null),
            o(this, "connected", !1),
            o(this, "negotiating", !1),
            o(this, "_negotiationNeeded", !1);
    }
}
