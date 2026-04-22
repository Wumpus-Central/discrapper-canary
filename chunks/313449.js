"use strict";
n.d(t, { Z: () => _ }), n(321073), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var r = n(626584),
    i = n(723702),
    s = n(536194),
    a = n(4655);
let { NativeModules: o } = {},
    l = {},
    u = [];
class d {
    _onDataReady;
    _gatewayEncoding;
    static canUse() {
        return !1;
    }
    constructor(e) {
        (this._onDataReady = null), (this._gatewayEncoding = e);
    }
    bindWebSocket(e) {}
    feed(e) {}
    dataReady(e) {
        this._onDataReady = e;
    }
}
u.push(
    class extends d {
        _decoder = null;
        _stream;
        static canUse() {
            return (0, a.y)();
        }
        getAlgorithm() {
            return "zstd-stream";
        }
        usesLegacyCompression() {
            return !1;
        }
        constructor(e) {
            super(e),
                this._gatewayEncoding.wantsString()
                    ? (this._decoder = new TextDecoder("utf-8"))
                    : (this._decoder = null),
                (this._stream = (0, a.t)());
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
    },
),
    u.push(
        class extends d {
            _inflate;
            _pako = n(777915);
            _usesZstd = !1;
            _zstdDecoder = null;
            _zstdStream = null;
            static canUse() {
                return void 0 !== window.Uint8Array;
            }
            getAlgorithm() {
                return "zlib-stream";
            }
            usesLegacyCompression() {
                return !1;
            }
            constructor(e) {
                super(e),
                    (this._inflate = new this._pako.Inflate({
                        chunkSize: 65536,
                        to: this._gatewayEncoding.wantsString() ? "string" : "",
                    })),
                    (this._inflate.onEnd = this.handleFlushEnd.bind(this));
            }
            feed(e) {
                if (null == this._inflate) throw Error("Trying to feed to closed compression adapter");
                if (null === this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
                if (!(e instanceof ArrayBuffer)) throw Error("Expected array buffer, but got " + typeof e);
                let t = new DataView(e),
                    n = t.byteLength >= 4 && 65535 === t.getUint32(t.byteLength - 4, !1);
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
                if (e !== n.Z_OK) throw Error(`zlib error, ${e}, ${i.strm.msg}`);
                let { chunks: s } = i,
                    a = s.length;
                if (this._gatewayEncoding.wantsString()) t = a > 1 ? s.join("") : s[0];
                else if (a > 1) {
                    let e = 0;
                    for (let t = 0; t < a; t++) e += s[t].length;
                    let n = new Uint8Array(e),
                        r = 0;
                    for (let e = 0; e < a; e++) {
                        let t = s[e];
                        n.set(t, r), (r += t.length);
                    }
                    t = n;
                } else t = s[0];
                (s.length = 0), null != this._onDataReady && this._onDataReady(t);
            }
        },
    ),
    u.push(
        class extends d {
            _pako = n(777915);
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
                        (e = t.inflate(e, { to: "string" })),
                    null == this._onDataReady)
                )
                    throw Error("Cannot feed unless a data ready callback is registered.");
                this._onDataReady(e);
            }
            close() {}
        },
    ),
    u.push(
        class extends d {
            _socketId;
            static canUse() {
                return !1;
            }
            constructor(e) {
                super(e), (this._socketId = null);
            }
            bindWebSocket(e) {
                this.close(),
                    (this._socketId = e._socketId),
                    (0, a.y)()
                        ? (0, i.isAndroid)()
                            ? l?.enableZstdStreamSupport(this._socketId)
                            : o.DCDCompressionManager.enableZstdStreamSupport(this._socketId, 0)
                        : (0, i.isAndroid)()
                          ? l?.enableZlibStreamSupport(this._socketId)
                          : o.DCDCompressionManager.enableZlibStreamSupport(this._socketId);
            }
            getAlgorithm() {
                return (0, a.y)() ? "zstd-stream" : "zlib-stream";
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
                            ? l?.disableZlibStreamSupport(e)
                            : o.DCDCompressionManager.disableZlibStreamSupport(e));
            }
        },
    );
class c extends d {
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
    if (s.P.isDiscordGatewayPlaintextSet()) return new c(e);
    for (var t of u) if (t.canUse()) return new t(e);
    return new c(e);
}
u.push(c);
