n.d(t, {
    Z: () => _,
}),
    n(321073),
    n(65821),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162),
    n(896048);
var r = n(626584),
    i = n(723702),
    a = n(536194),
    s = n(4655);

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
let { NativeModules: l } = {},
    c = {},
    u = 65535,
    d = [];
class f {
    static canUse() {
        return !1;
    }
    bindWebSocket(e) {}
    feed(e) {}
    dataReady(e) {
        this._onDataReady = e;
    }
    constructor(e) {
        o(this, "_onDataReady", void 0),
            o(this, "_gatewayEncoding", void 0),
            (this._onDataReady = null),
            (this._gatewayEncoding = e);
    }
}
d.push(
    class extends f {
        static canUse() {
            return (0, s.y)();
        }
        getAlgorithm() {
            return "zstd-stream";
        }
        usesLegacyCompression() {
            return !1;
        }
        feed(e) {
            let t;
            if (null == this._stream) throw Error("Trying to decompress with zstd but did not initialize with it");
            if (!(e instanceof ArrayBuffer)) throw Error("Expected array buffer, but got " + typeof e);
            (t = this._stream.decompress(e)),
                null != this._decoder && (t = this._decoder.decode(t)),
                null != this._onDataReady && this._onDataReady(t);
        }
        close() {}
        constructor(e) {
            super(e),
                o(this, "_decoder", null),
                o(this, "_stream", void 0),
                this._gatewayEncoding.wantsString()
                    ? (this._decoder = new TextDecoder("utf-8"))
                    : (this._decoder = null),
                (this._stream = (0, s.t)());
        }
    },
),
    d.push(
        class extends f {
            static canUse() {
                return void 0 !== window.Uint8Array;
            }
            getAlgorithm() {
                return "zlib-stream";
            }
            usesLegacyCompression() {
                return !1;
            }
            feed(e) {
                if (null == this._inflate) throw Error("Trying to feed to closed compression adapter");
                if (null === this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
                if (!(e instanceof ArrayBuffer)) throw Error("Expected array buffer, but got " + typeof e);
                let t = new DataView(e),
                    n = t.byteLength >= 4 && t.getUint32(t.byteLength - 4, !1) === u;
                this._inflate.push(e, !!n && this._pako.Z_SYNC_FLUSH);
            }
            close() {
                null != this._inflate && ((this._inflate.onEnd = null), (this._inflate.chunks = [])),
                    (this._inflate = null);
            }
            handleFlushEnd(e) {
                let t,
                    n = this._pako,
                    i = this._inflate;
                if (null == i)
                    return void new r.A("GatewayCompressionHandler").error(
                        "flush end happened on closed compression adapter",
                    );
                if (e !== n.Z_OK) throw Error("zlib error, ".concat(e, ", ").concat(i.strm.msg));
                let { chunks: a } = i,
                    s = a.length;
                if (this._gatewayEncoding.wantsString()) t = s > 1 ? a.join("") : a[0];
                else if (s > 1) {
                    let e = 0;
                    for (let t = 0; t < s; t++) e += a[t].length;
                    let n = new Uint8Array(e),
                        r = 0;
                    for (let e = 0; e < s; e++) {
                        let t = a[e];
                        n.set(t, r), (r += t.length);
                    }
                    t = n;
                } else t = a[0];
                (a.length = 0), null != this._onDataReady && this._onDataReady(t);
            }
            constructor(e) {
                super(e),
                    o(this, "_inflate", void 0),
                    o(this, "_pako", n(777915)),
                    o(this, "_usesZstd", !1),
                    o(this, "_zstdDecoder", null),
                    o(this, "_zstdStream", null),
                    (this._inflate = new this._pako.Inflate({
                        chunkSize: 65536,
                        to: this._gatewayEncoding.wantsString() ? "string" : "",
                    })),
                    (this._inflate.onEnd = this.handleFlushEnd.bind(this));
            }
        },
    ),
    d.push(
        class extends f {
            static canUse() {
                return !0;
            }
            getAlgorithm() {
                return null;
            }
            usesLegacyCompression() {
                return !0;
            }
            feed(e) {
                let t = this._pako;
                if (
                    (e instanceof ArrayBuffer &&
                        this._gatewayEncoding.wantsString() &&
                        (e = t.inflate(e, {
                            to: "string",
                        })),
                    null == this._onDataReady)
                )
                    throw Error("Cannot feed unless a data ready callback is registered.");
                this._onDataReady(e);
            }
            close() {}
            constructor(...e) {
                super(...e), o(this, "_pako", n(777915));
            }
        },
    ),
    d.push(
        class extends f {
            static canUse() {
                return !1;
            }
            bindWebSocket(e) {
                this.close(),
                    (this._socketId = e._socketId),
                    (0, s.y)()
                        ? (0, i.isAndroid)()
                            ? null == c || c.enableZstdStreamSupport(this._socketId)
                            : l.DCDCompressionManager.enableZstdStreamSupport(this._socketId, 0)
                        : (0, i.isAndroid)()
                          ? null == c || c.enableZlibStreamSupport(this._socketId)
                          : l.DCDCompressionManager.enableZlibStreamSupport(this._socketId);
            }
            getAlgorithm() {
                return (0, s.y)() ? "zstd-stream" : "zlib-stream";
            }
            usesLegacyCompression() {
                return !1;
            }
            feed(e) {
                if (null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
                null !== e && this._onDataReady(e);
            }
            close() {
                let e = this._socketId;
                (this._socketId = null),
                    null !== e &&
                        ((0, i.isAndroid)()
                            ? null == c || c.disableZlibStreamSupport(e)
                            : l.DCDCompressionManager.disableZlibStreamSupport(e));
            }
            constructor(e) {
                super(e), o(this, "_socketId", void 0), (this._socketId = null);
            }
        },
    );
class p extends f {
    static canUse() {
        return !0;
    }
    getAlgorithm() {
        return null;
    }
    usesLegacyCompression() {
        return !1;
    }
    feed(e) {
        if (null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
        this._onDataReady(e);
    }
    close() {}
}

function _(e) {
    if (a.P.isDiscordGatewayPlaintextSet()) return new p(e);
    for (var t of d) if (t.canUse()) return new t(e);
    return new p(e);
}
d.push(p);
