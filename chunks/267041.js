(n.d(t, { A: () => tI, m: () => tc }), n(323874), n(14289), n(35956), n(321073), n(142703));
var i,
    r,
    a,
    s,
    l = n(284009),
    o = n.n(l),
    d = n(777915),
    c = n(61090),
    u = n(158390),
    _ = n(731738),
    E = n(70298),
    A = n(17928),
    h = n(636537),
    f = n(73153),
    I = n(766034),
    p = n(314732),
    T = n(214771),
    m = n(937724),
    g = n(626584),
    S = n(807393),
    N = n(464578),
    C = n(111162),
    O = n(174459),
    R = n(353835),
    L = n(927813),
    y = n(723702),
    D = n(38405),
    v = n(175306);
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
var b = n(536194),
    P = n(19575);
let M = null;
function U() {
    return (
        null == M &&
            (M = (function () {
                if (null == window.DiscordNative || void 0 === window.Uint8Array || void 0 === window.TextDecoder)
                    return !1;
                try {
                    let e = P.Ay.requireModule("discord_zstd");
                    if (null == e) return !1;
                    return !0;
                } catch (e) {
                    if (e.message.includes("Cannot find"))
                        return (P.Ay.ensureModule("discord_zstd").catch((e) => {}), !1);
                    throw e;
                }
            })()),
        M
    );
}
let w = {},
    G = [];
class x {
    _onDataReady;
    _gatewayEncoding;
    static canUse() {
        return !1;
    }
    constructor(e) {
        ((this._onDataReady = null), (this._gatewayEncoding = e));
    }
    bindWebSocket(e) {}
    feed(e) {}
    dataReady(e) {
        this._onDataReady = e;
    }
}
(G.push(
    class extends x {
        _decoder = null;
        _stream;
        static canUse() {
            return U();
        }
        getAlgorithm() {
            return "zstd-stream";
        }
        usesLegacyCompression() {
            return !1;
        }
        constructor(e) {
            (super(e),
                this._gatewayEncoding.wantsString()
                    ? (this._decoder = new TextDecoder("utf-8"))
                    : (this._decoder = null),
                (this._stream = (function () {
                    if (!U()) return;
                    let { createContext: e } = P.Ay.requireModule("discord_zstd");
                    return e();
                })()));
        }
        feed(e) {
            let t;
            if (null == this._stream) throw Error("Trying to decompress with zstd but did not initialize with it");
            if (!(e instanceof ArrayBuffer)) throw Error("Expected array buffer, but got " + typeof e);
            ((t = this._stream.decompress(e)),
                null != this._decoder && (t = this._decoder.decode(t)),
                null != this._onDataReady && this._onDataReady(t));
        }
        close() {}
    },
),
    G.push(
        class extends x {
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
                (super(e),
                    (this._inflate = new this._pako.Inflate({
                        chunkSize: 65536,
                        to: this._gatewayEncoding.wantsString() ? "string" : "",
                    })),
                    (this._inflate.onEnd = this.handleFlushEnd.bind(this)));
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
                (null != this._inflate && ((this._inflate.onEnd = null), (this._inflate.chunks = [])),
                    (this._inflate = null));
            }
            handleFlushEnd(e) {
                let t,
                    n = this._pako,
                    i = this._inflate;
                if (null == i)
                    return void new g.A("GatewayCompressionHandler").error(
                        "flush end happened on closed compression adapter",
                    );
                if (e !== n.Z_OK) throw Error(`zlib error, ${e}, ${i.strm.msg}`);
                let { chunks: r } = i,
                    a = r.length;
                if (this._gatewayEncoding.wantsString()) t = a > 1 ? r.join("") : r[0];
                else if (a > 1) {
                    let e = 0;
                    for (let t = 0; t < a; t++) e += r[t].length;
                    let n = new Uint8Array(e),
                        i = 0;
                    for (let e = 0; e < a; e++) {
                        let t = r[e];
                        (n.set(t, i), (i += t.length));
                    }
                    t = n;
                } else t = r[0];
                ((r.length = 0), null != this._onDataReady && this._onDataReady(t));
            }
        },
    ),
    G.push(
        class extends x {
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
    G.push(
        class extends x {
            _socketId;
            static canUse() {
                return !1;
            }
            constructor(e) {
                (super(e), (this._socketId = null));
            }
            bindWebSocket(e) {
                (this.close(),
                    (this._socketId = e._socketId),
                    U() ? w?.enableZstdStreamSupport(this._socketId) : w?.enableZlibStreamSupport(this._socketId));
            }
            getAlgorithm() {
                return U() ? "zstd-stream" : "zlib-stream";
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
                ((this._socketId = null), null !== e && w?.disableZlibStreamSupport(e));
            }
        },
    ));
class k extends x {
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
function F(e) {
    if (b.P.isDiscordGatewayPlaintextSet()) return new k(e);
    for (var t of G) if (t.canUse()) return new t(e);
    return new k(e);
}
G.push(k);
let B = BigInt(0),
    V = BigInt(8),
    H = BigInt(16),
    j = BigInt(32),
    W = BigInt(64),
    Y = BigInt(128),
    K = BigInt(256),
    $ = BigInt(65536),
    z = BigInt(0x1000000),
    X = BigInt(0x80000000),
    q = BigInt(0x100000000),
    Z = BigInt(0x10000000000),
    Q = BigInt(0x1000000000000),
    J = BigInt("72057594037927936"),
    ee = BigInt("18446744073709551615"),
    et = BigInt("18446744073709551616"),
    en = BigInt("340282366920938463463374607431768211455"),
    ei = BigInt("340282366920938463463374607431768211456"),
    er = BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639935"),
    ea = BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639936");
function es(e, t) {
    let n = e.indexOf(t?.toLowerCase() ?? "");
    return -1 === n ? void 0 : n + 1;
}
let el = new (class {
        _stringEncoding;
        _keyEncoding;
        _safeIntEncoding;
        _safeBigIntEncoding;
        _nullEncoding;
        _bufferEncoding;
        _undefinedEncoding;
        _infinityEncoding;
        _nanEncoding;
        _arrayEncoding;
        _useLegacyAtoms;
        _initialPoolSize;
        _poolSize;
        _u;
        _v;
        _i;
        _o;
        _r;
        _T;
        _encoder;
        constructor(e = {}) {
            if (
                ((this._stringEncoding = es(["string", "binary"], e.encoding?.string) ?? 1),
                (this._keyEncoding = es(["atom", "binary", "string"], e.encoding?.key) ?? 1),
                (this._safeIntEncoding = es(["bigint", "float"], e.encoding?.safeInt) ?? 1),
                (this._safeBigIntEncoding = es(["number", "bigint"], e.encoding?.safeBigInt) ?? 1),
                (this._nullEncoding = es(["atom", "nil"], e.encoding?.null) ?? 1),
                (this._bufferEncoding = es(["binary", "bitbinary", "string"], e.encoding?.buffer) ?? 1),
                (this._undefinedEncoding = es(["atom", "null", "ignore"], e.encoding?.undefined) ?? 1),
                (this._infinityEncoding = es(["atom", "null", "ignore"], e.encoding?.infinity) ?? 1),
                (this._nanEncoding = es(["atom", "null", "ignore"], e.encoding?.nan) ?? 1),
                (this._arrayEncoding = es(["list", "improperlist", "tuple"], e.encoding?.array) ?? 3),
                (this._useLegacyAtoms = !!e.useLegacyAtoms),
                (this._initialPoolSize = null != e.poolSize && e.poolSize > 0 ? e.poolSize : 1048576),
                (this._poolSize = this._initialPoolSize),
                (this._u = new Uint8Array(this._poolSize)),
                (this._v = new DataView(this._u.buffer)),
                (this._i = 0),
                (this._o = 0),
                (this._r = 0),
                (this._encoder = new TextEncoder()),
                (this._T = 32),
                "object" == typeof navigator)
            ) {
                const e = navigator.userAgent;
                e.includes("Firefox") ? (this._T = 128) : e.includes("Chrome") && (this._T = 540);
            }
        }
        pack(e) {
            return (
                (this._o = this._i),
                (this._r = 0),
                this._expand(10),
                (this._u[this._i++] = 131),
                this._loop(e),
                this._u.subarray(this._o, this._i)
            );
        }
        packToArrayBuffer(e) {
            ((this._i = 0), (this._o = 0), (this._r = 0));
            try {
                return (this._expand(10), (this._u[this._i++] = 131), this._loop(e), this._u.buffer.slice(0, this._i));
            } finally {
                ((this._i = 0),
                    (this._o = 0),
                    (this._r = 0),
                    this._poolSize !== this._initialPoolSize &&
                        ((this._poolSize = this._initialPoolSize),
                        (this._u = new Uint8Array(this._poolSize)),
                        (this._v = new DataView(this._u.buffer))));
            }
        }
        _loop(e) {
            let t = typeof e;
            switch (t) {
                case "undefined":
                    if (3 === this._undefinedEncoding) break;
                    (this._expand(11),
                        (this._u[this._i] = this._useLegacyAtoms ? 115 : 119),
                        (this._u[this._i + 1] = 9),
                        (this._u[this._i + 2] = 117),
                        this._v.setUint32(this._i + 3, 0x6e646566),
                        this._v.setUint32(this._i + 7, 0x696e6564),
                        (this._i += 11));
                    break;
                case "boolean":
                    (this._expand(7),
                        (this._u[this._i] = this._useLegacyAtoms ? 115 : 119),
                        !0 === e
                            ? ((this._u[this._i + 1] = 4), this._v.setUint32(this._i + 2, 0x74727565), (this._i += 6))
                            : ((this._u[this._i + 1] = 5),
                              (this._u[this._i + 2] = 102),
                              this._v.setUint32(this._i + 3, 0x616c7365),
                              (this._i += 7)));
                    break;
                case "string":
                case "symbol": {
                    let n = "symbol" === t ? e.toString() : e;
                    if (2 === this._stringEncoding) {
                        (this._expand(3 * n.length + 5), (this._u[this._i++] = 109));
                        let e = this._i;
                        this._i += 4;
                        let t = this._utf(n);
                        this._v.setUint32(e, t);
                    } else {
                        (this._expand(3 * n.length + 3), (this._u[this._i++] = 107));
                        let e = this._i;
                        this._i += 2;
                        let t = this._utf(n);
                        ((this._u[e] = t >> 8), (this._u[e + 1] = 255 & t));
                    }
                    break;
                }
                case "number":
                    if (Number.isFinite(e))
                        if ((this._expand(11), Number.isInteger(e))) {
                            let t = Math.abs(e),
                                n = e < 0;
                            if (e < 256 && !n) ((this._u[this._i++] = 97), (this._u[this._i++] = e));
                            else if (t < 0x80000000)
                                ((this._u[this._i] = 98), this._v.setInt32(this._i + 1, e), (this._i += 5));
                            else if (t <= Number.MAX_SAFE_INTEGER && 1 === this._safeIntEncoding)
                                if (((this._u[this._i] = 110), (this._u[this._i + 2] = +!!n), t < 0x100000000))
                                    (this._v.setUint32(this._i + 3, t, !0), (this._u[this._i + 1] = 4), (this._i += 7));
                                else {
                                    let e = Math.floor(t / 0x100000000);
                                    (this._v.setUint32(this._i + 3, t >>> 0, !0),
                                        e < 256
                                            ? ((this._u[this._i + 1] = 5), (this._u[this._i + 7] = e), (this._i += 8))
                                            : e < 65536
                                              ? ((this._u[this._i + 1] = 6),
                                                (this._u[this._i + 7] = 255 & e),
                                                (this._u[this._i + 8] = e >> 8),
                                                (this._i += 9))
                                              : ((this._u[this._i + 1] = 7),
                                                (this._u[this._i + 7] = 255 & e),
                                                (this._u[this._i + 8] = (e >> 8) & 255),
                                                (this._u[this._i + 9] = e >> 16),
                                                (this._i += 10)));
                                }
                            else ((this._u[this._i++] = 70), this._v.setFloat64(this._i, e), (this._i += 8));
                        } else ((this._u[this._i++] = 70), this._v.setFloat64(this._i, e), (this._i += 8));
                    else if (Number.isNaN(e)) {
                        if (3 === this._nanEncoding) break;
                        (this._expand(4),
                            (this._u[this._i] = this._useLegacyAtoms ? 115 : 119),
                            (this._u[this._i + 1] = 110),
                            (this._u[this._i + 2] = 97),
                            (this._u[this._i + 3] = 110),
                            (this._i += 4));
                    } else {
                        if (3 === this._infinityEncoding) break;
                        (this._expand(18),
                            (this._u[this._i] = this._useLegacyAtoms ? 115 : 119),
                            e < 0
                                ? this._v.setUint32(this._i + 1, 0x6e656761)
                                : this._v.setUint32(this._i + 1, 0x706f7369),
                            (this._u[this._i + 5] = 95),
                            this._v.setUint32(this._i + 6, 0x6976655f),
                            this._v.setUint32(this._i + 10, 0x696e6669),
                            this._v.setUint32(this._i + 14, 0x6e697479),
                            (this._i += 18));
                    }
                    break;
                case "bigint": {
                    if (e === B) {
                        (this._expand(3),
                            2 === this._safeBigIntEncoding
                                ? ((this._u[this._i++] = 110), (this._u[this._i++] = 0))
                                : (this._u[this._i++] = 97),
                            (this._u[this._i++] = 0));
                        break;
                    }
                    let t = e < B,
                        n = t ? -e : e;
                    if (n < et)
                        if ((this._expand(11), 1 === this._safeBigIntEncoding && n < X))
                            n < K && !t
                                ? ((this._u[this._i++] = 97), this._v.setBigUint64(this._i++, n, !0))
                                : ((this._u[this._i++] = 98),
                                  this._v.setBigUint64(this._i, n),
                                  (this._u[this._i] = this._u[this._i + 4]),
                                  (this._u[this._i + 1] = this._u[this._i + 5]),
                                  (this._u[this._i + 2] = this._u[this._i + 6]),
                                  (this._u[this._i + 3] = this._u[this._i + 7]),
                                  t && (this._u[this._i] = 128 | this._u[this._i]),
                                  (this._i += 4));
                        else {
                            ((this._u[this._i] = 110),
                                (this._u[this._i + 2] = +!!t),
                                this._v.setBigUint64(this._i + 3, n, !0));
                            for (let e = 10; e > 3; e--)
                                if (0 !== this._u[this._i + e]) {
                                    ((this._u[this._i + 1] = e - 2), (this._i += e + 1));
                                    break;
                                }
                        }
                    else if (n < ei) {
                        (this._expand(19),
                            (this._u[this._i] = 110),
                            (this._u[this._i + 2] = +!!t),
                            this._v.setBigUint64(this._i + 3, n & ee, !0),
                            this._v.setBigUint64(this._i + 11, n >> W, !0));
                        for (let e = 18; e > 10; e--)
                            if (0 !== this._u[this._i + e]) {
                                ((this._u[this._i + 1] = e - 2), (this._i += e + 1));
                                break;
                            }
                    } else if (n < ea) {
                        (this._expand(35), (this._u[this._i] = 110), (this._u[this._i + 2] = +!!t));
                        let e = n >> Y,
                            i = n & en;
                        (this._v.setBigUint64(this._i + 3, i & ee, !0),
                            this._v.setBigUint64(this._i + 11, i >> W, !0),
                            this._v.setBigUint64(this._i + 19, e & ee, !0),
                            this._v.setBigUint64(this._i + 27, e >> W, !0));
                        for (let e = 34; e > 18; e--)
                            if (0 !== this._u[this._i + e]) {
                                ((this._u[this._i + 1] = e - 2), (this._i += e + 1));
                                break;
                            }
                    } else {
                        let e = n,
                            i = [];
                        for (; e > er;) {
                            let t = e & er,
                                n = t >> Y,
                                r = t & en;
                            (i.push(r & ee, r >> W, n & ee, n >> W), (e >>= K));
                        }
                        if (e > en) {
                            let t = e >> Y,
                                n = e & en;
                            i.push(n & ee, n >> W, t & ee, t >> W);
                        } else e > ee ? i.push(e & ee, e >> W) : e > B && i.push(e);
                        let r = i[i.length - 1],
                            a =
                                8 * i.length -
                                (r < q
                                    ? r < $
                                        ? r < K
                                            ? 7
                                            : 6
                                        : r < z
                                          ? 5
                                          : 4
                                    : r < Q
                                      ? r < Z
                                          ? 3
                                          : 2
                                      : +(r < J));
                        (this._expand(a + 6),
                            a < 256
                                ? ((this._u[this._i] = 110),
                                  (this._u[this._i + 1] = a),
                                  (this._u[this._i + 2] = +!!t),
                                  (this._i += 3))
                                : ((this._u[this._i] = 111),
                                  this._v.setUint32(this._i + 1, a),
                                  (this._u[this._i + 5] = +!!t),
                                  (this._i += 6)));
                        for (let e = 0; e < i.length; e++) this._v.setBigUint64(this._i + 8 * e, i[e], !0);
                        this._i += a;
                    }
                    break;
                }
                case "object":
                    if (null === e)
                        (this._expand(5),
                            2 === this._nullEncoding
                                ? (this._u[this._i++] = 106)
                                : ((this._u[this._i] = this._useLegacyAtoms ? 115 : 119),
                                  this._v.setUint32(this._i + 1, 0x36e696c),
                                  (this._i += 5)));
                    else if (Array.isArray(e))
                        if ((this._expand(5), 0 === e.length))
                            3 === this._arrayEncoding
                                ? ((this._u[this._i++] = 104), (this._u[this._i++] = 0))
                                : (this._u[this._i++] = 106);
                        else {
                            let t = e.length,
                                n = this._i + 1,
                                i = 1,
                                r = this._r;
                            3 === this._arrayEncoding
                                ? e.length < 256
                                    ? ((this._u[this._i] = 104), (this._i += 2))
                                    : ((this._u[this._i] = 105), (this._i += 5), (i = 2))
                                : ((this._u[this._i] = 108),
                                  (this._i += 5),
                                  2 === this._arrayEncoding ? (t--, (i = 3)) : (i = 4));
                            for (let n = 0; n < e.length; n++) {
                                let i = e[n],
                                    r = this._notIgnoreOrNull(i);
                                if (!0 !== r)
                                    if (null === r) i = null;
                                    else {
                                        t--;
                                        continue;
                                    }
                                this._loop(i);
                            }
                            switch ((r !== this._r && (n -= this._r), i)) {
                                case 1:
                                    this._u[n] = t;
                                    break;
                                case 2:
                                case 3:
                                    this._v.setUint32(n, t);
                                    break;
                                case 4:
                                    (this._v.setUint32(n, t), (this._u[this._i++] = 106));
                            }
                        }
                    else if (ArrayBuffer.isView(e)) {
                        let t = 1 !== e.BYTES_PER_ELEMENT ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e,
                            n = t.length,
                            i = !1;
                        if (
                            (3 === this._bufferEncoding
                                ? (this._expand(n + 3),
                                  (this._u[this._i] = 107),
                                  (this._u[this._i + 1] = n >> 8),
                                  (this._u[this._i + 2] = 255 & n),
                                  (this._i += 3))
                                : 2 === this._bufferEncoding
                                  ? (this._expand(n + 6),
                                    (this._u[this._i] = 77),
                                    this._v.setUint32(this._i + 1, n),
                                    (this._u[this._i + 5] = 0),
                                    (this._i += 6),
                                    (i = !0))
                                  : (this._expand(n + 5),
                                    (this._u[this._i] = 109),
                                    this._v.setUint32(this._i + 1, n),
                                    (this._i += 5)),
                            n > 0 && (this._u.set(t, this._i), i))
                        ) {
                            let e = this._u[this._i + n - 1],
                                t = Math.floor(Math.log2(e) + 1);
                            ((this._u[this._i + n - 1] = e << (8 - t)), (this._u[this._i - 1] = t));
                        }
                        this._i += n;
                    } else {
                        (this._expand(6), (this._u[this._i++] = 116));
                        let t = Object.keys(e),
                            n = t.length,
                            i = this._i,
                            r = this._r;
                        this._i += 4;
                        for (let i = 0; i < t.length; i++) {
                            let r = t[i],
                                a = e[r],
                                s = this._notIgnoreOrNull(a);
                            if (!0 !== s)
                                if (null === s) a = null;
                                else {
                                    n--;
                                    continue;
                                }
                            let l = r.length;
                            if (1 === this._keyEncoding && this._useLegacyAtoms) {
                                l < 256
                                    ? (this._expand(l + 2), (this._u[this._i++] = 115), (this._u[this._i++] = l))
                                    : (this._expand(l + 3),
                                      (this._u[this._i++] = 100),
                                      (this._u[this._i++] = l >> 8),
                                      (this._u[this._i++] = 255 & l));
                                for (let e = 0; e < l; e++) this._u[this._i++] = r.charCodeAt(e);
                            } else {
                                let e = 2 * l,
                                    t = 0;
                                (this._expand(3 * l + 5),
                                    2 === this._keyEncoding
                                        ? ((this._u[this._i] = 109), (t = 4))
                                        : 3 === this._keyEncoding
                                          ? ((this._u[this._i] = 107), (t = 2))
                                          : e < 256
                                            ? ((this._u[this._i] = 119), (t = 1))
                                            : ((this._u[this._i] = 118), (t = 2)));
                                let n = this._i + 1;
                                this._i += t + 1;
                                let i = this._utf(r);
                                1 === t
                                    ? (this._u[n] = i)
                                    : 2 === t
                                      ? ((this._u[n] = i >> 8), (this._u[n + 1] = 255 & i))
                                      : this._v.setUint32(n, i);
                            }
                            this._loop(a);
                        }
                        let a = r !== this._r ? i - this._r : i;
                        this._v.setUint32(a, n);
                    }
            }
        }
        _notIgnoreOrNull(e) {
            let t = typeof e;
            if ("undefined" === t) {
                if (2 === this._undefinedEncoding) return null;
                if (3 === this._undefinedEncoding) return !1;
            }
            if ("number" === t && !Number.isFinite(e)) {
                if (Number.isNaN(e)) {
                    if (2 === this._nanEncoding) return null;
                    if (3 === this._nanEncoding) return !1;
                } else if (2 === this._infinityEncoding) return null;
                else if (3 === this._infinityEncoding) return !1;
            }
            return !0;
        }
        _expand(e) {
            if (this._i + e <= this._poolSize) return;
            let t = this._u.subarray(this._o, this._i),
                n = t.length + e,
                i = this._poolSize;
            for (; i < n;) i *= 2;
            ((this._poolSize = i),
                (this._u = new Uint8Array(this._poolSize)),
                (this._v = new DataView(this._u.buffer)),
                this._u.set(t),
                (this._i = t.length),
                (this._r += this._o),
                (this._o = 0));
        }
        _utf(e) {
            let t = e.length;
            if (t < this._T) {
                let n = this._i;
                for (let n = 0; n < t; n++) {
                    let t = e.charCodeAt(n);
                    if (t < 128) this._u[this._i++] = t;
                    else if (t < 2048) ((this._u[this._i++] = 192 + (t >> 6)), (this._u[this._i++] = 128 + (63 & t)));
                    else if (t < 55296 || t > 57343)
                        ((this._u[this._i++] = 224 + (t >> 12)),
                            (this._u[this._i++] = 128 + ((t >> 6) & 63)),
                            (this._u[this._i++] = 128 + (63 & t)));
                    else {
                        let i = 65536 + ((1023 & t) << 10) + (1023 & e.charCodeAt(++n));
                        ((this._u[this._i++] = 240 + (i >> 18)),
                            (this._u[this._i++] = 128 + ((i >> 12) & 63)),
                            (this._u[this._i++] = 128 + ((i >> 6) & 63)),
                            (this._u[this._i++] = 128 + (63 & i)));
                    }
                }
                return this._i - n;
            }
            let n = this._encoder.encodeInto(e, this._u.subarray(this._i)).written ?? 0;
            return ((this._i += n), n);
        }
    })({
        poolSize: 65536,
        encoding: { string: "binary", key: "binary", array: "list", null: "atom", undefined: "null" },
        useLegacyAtoms: !0,
    }),
    eo = new (class {
        _nilDecoding;
        _stringDecoding;
        _binaryDecoding;
        _bitbinaryDecoding;
        _atomRegistration;
        _d;
        _v;
        _sd;
        _sv;
        _i;
        _u;
        _l;
        _T;
        _atoms;
        _atomTableLatin;
        _atomTableUtf;
        constructor(e = {}) {
            let t;
            ((this._nilDecoding = es(["null", "array"], e.decoding?.nil) ?? 1),
                (this._stringDecoding =
                    es(["utf8", "latin1", "buffer", "uint8array", "array"], e.decoding?.string) ?? 1),
                (this._binaryDecoding =
                    es(["utf8", "latin1", "buffer", "uint8array", "array"], e.decoding?.binary) ?? 4),
                (this._bitbinaryDecoding =
                    es(["utf8", "latin1", "buffer", "uint8array", "array"], e.decoding?.bitbinary) ?? 4),
                (this._atomRegistration = !!(e.atomRegistration ?? !0)),
                (this._d = new Uint8Array(0)),
                (this._v = new DataView(this._d.buffer, this._d.byteOffset, this._d.length)),
                (this._sd = new Uint8Array(12e3)),
                (this._sv = new DataView(this._sd.buffer, this._sd.byteOffset, this._sd.length)),
                (this._i = 0));
            const n = new TextDecoder("utf8");
            if (
                ((this._u = n.decode.bind(n)),
                (this._l = (e) => (null == t && (t = new TextDecoder("latin1")), t.decode(e))),
                (this._T = 32),
                "object" == typeof navigator)
            ) {
                const e = navigator.userAgent;
                e.includes("Firefox") ? (this._T = 4) : e.includes("Chrome") && (this._T = 16);
            }
            ((this._atoms = e.atomTable ?? {
                true: !0,
                false: !1,
                undefined: void 0,
                null: null,
                nil: null,
                nan: NaN,
                infinity: 1 / 0,
                positive_infinity: 1 / 0,
                negative_infinity: -1 / 0,
            }),
                (this._atomTableLatin = []),
                (this._atomTableUtf = []));
            const i = new TextEncoder();
            for (const [e, t] of Object.entries(this._atoms)) {
                const n = i.encode(e);
                let r = (this._atomTableLatin[e.length] ??= []),
                    a = (this._atomTableUtf[n.length] ??= []);
                for (let n = 0; n < e.length; n++) {
                    const i = e.charCodeAt(n);
                    r = r[i] ??= n === e.length - 1 ? t : [];
                }
                for (let e = 0; e < n.length; e++) {
                    const i = n[e];
                    a = a[i] ??= e === n.length - 1 ? t : [];
                }
            }
        }
        unpack(e) {
            let t = +(131 === e[0]);
            ((this._i = t),
                e.length <= this._sd.length
                    ? (this._sd.set(e), (this._d = this._sd), (this._v = this._sv))
                    : ((this._d = e), (this._v = new DataView(e.buffer, e.byteOffset, e.length))));
            try {
                return this._loop();
            } finally {
                ((this._d = this._sd), (this._v = this._sv));
            }
        }
        _loop() {
            let e = this._d[this._i++];
            switch (e) {
                case 70: {
                    let e = this._v.getFloat64(this._i);
                    return ((this._i += 8), e);
                }
                case 97:
                    return this._d[this._i++];
                case 98: {
                    let e = this._v.getInt32(this._i);
                    return ((this._i += 4), e);
                }
                case 100:
                case 115:
                case 118:
                case 119: {
                    let t =
                        100 === e || 118 === e ? (this._d[this._i++] << 8) + this._d[this._i++] : this._d[this._i++];
                    return this._resolveAtom(t, e >= 118);
                }
                case 104:
                case 105:
                case 108: {
                    let t;
                    104 === e ? (t = this._d[this._i++]) : ((t = this._v.getUint32(this._i)), (this._i += 4));
                    let n = [];
                    for (let e = 0; e < t; e++) n.push(this._loop());
                    return (108 === e && (106 === this._d[this._i] ? this._i++ : n.push(this._loop())), n);
                }
                case 106:
                    return 2 === this._nilDecoding ? [] : null;
                case 107:
                case 109:
                case 77: {
                    let t, n;
                    if (107 === e) ((t = (this._d[this._i++] << 8) + this._d[this._i++]), (n = this._stringDecoding));
                    else if (109 === e) ((t = this._v.getUint32(this._i)), (n = this._binaryDecoding), (this._i += 4));
                    else {
                        ((t = this._v.getUint32(this._i)), (n = this._bitbinaryDecoding));
                        let e = this._d[this._i + 4],
                            i = this._d[this._i + t - 1];
                        ((this._d[this._i + t - 1] = i >> (8 - e)), (this._i += 5));
                    }
                    if (5 === n) {
                        let e = [];
                        for (let n = 0; n < t; n++) e.push(this._d[this._i + n]);
                        return ((this._i += t), e);
                    }
                    if (n >= 4) {
                        let e = this._d.subarray(this._i, this._i + t);
                        this._i += t;
                        let n = new Uint8Array(t);
                        return (n.set(e), n);
                    }
                    return 2 === n ? this._latin(t) : this._utf(t);
                }
                case 110:
                case 111: {
                    let t, n;
                    if (
                        (110 === e ? (t = this._d[this._i++]) : ((t = this._v.getUint32(this._i)), (this._i += 4)),
                        0 === t)
                    )
                        return ((this._i += 1), 0);
                    if (1 === t && 0 === this._d[this._i + 1]) return ((this._i += 2), 0);
                    let i = this._d[this._i++];
                    if (t <= 4) {
                        let e = 0;
                        if (
                            ((e =
                                1 === t
                                    ? this._d[this._i]
                                    : 2 === t
                                      ? (this._d[this._i + 1] << 8) + this._d[this._i]
                                      : 3 === t
                                        ? (this._d[this._i + 2] << 16) + (this._d[this._i + 1] << 8) + this._d[this._i]
                                        : this._v.getUint32(this._i, !0)),
                            (this._i += t),
                            1 !== i)
                        )
                            return e;
                        if (e < 0x80000000) return 0 === e ? 0 : -e;
                        return (-e).toString();
                    }
                    if (t < 7 || (7 === t && this._d[this._i + 6] < 32)) {
                        let e = 0;
                        return (
                            (e =
                                5 === t
                                    ? 0x100000000 * this._d[this._i + 4] + this._v.getUint32(this._i, !0)
                                    : 6 === t
                                      ? ((this._d[this._i + 5] << 8) + this._d[this._i + 4]) * 0x100000000 +
                                        this._v.getUint32(this._i, !0)
                                      : ((this._d[this._i + 6] << 16) +
                                            (this._d[this._i + 5] << 8) +
                                            this._d[this._i + 4]) *
                                            0x100000000 +
                                        this._v.getUint32(this._i, !0)),
                            (this._i += t),
                            1 === i && (e = -e),
                            e.toString()
                        );
                    }
                    if (8 === t) n = this._v.getBigUint64(this._i, !0);
                    else {
                        let e = t;
                        for (n = B; e > 0;)
                            e >= 8
                                ? ((n <<= W), (n += this._v.getBigUint64(this._i + (e -= 8), !0)))
                                : e >= 4
                                  ? ((n <<= j), (n += BigInt(this._v.getUint32(this._i + (e -= 4), !0))))
                                  : e >= 2
                                    ? ((n <<= H), (n += BigInt(this._v.getUint16(this._i + (e -= 2), !0))))
                                    : ((n <<= V), (n += BigInt(this._d[this._i])), e--);
                    }
                    return ((this._i += t), 1 === i && (n = -n), n.toString());
                }
                case 116: {
                    let e = {},
                        t = this._v.getUint32(this._i);
                    this._i += 4;
                    for (let n = 0; n < t; n++) e[this._loop()] = this._loop();
                    return e;
                }
            }
            throw Error(`Unexpected ETF tag: ${e}`);
        }
        _resolveAtom(e, t) {
            let n = t ? this._atomTableUtf : this._atomTableLatin;
            if (e in n) {
                let t = n[e],
                    i = this._i;
                for (let n = 0; n < e; n++) {
                    let r = this._d[i++];
                    if (r in t) {
                        if (n === e - 1) return ((this._i += e), t[r]);
                        t = t[r];
                    } else break;
                }
            }
            return this._atomRegistration ? this._registerAtom(e, t) : t ? this._utf(e) : this._latin(e);
        }
        _registerAtom(e, t) {
            let n = t ? this._atomTableUtf : this._atomTableLatin;
            e in n || (n[e] = []);
            let i = n[e],
                r = "",
                a = this._i;
            for (let n = 0; n < e; n++) {
                let s = this._d[a++];
                if (s in i) i = i[s];
                else if (n === e - 1) {
                    ((r = t ? this._utf(e) : this._latin(e)), (i[s] = r));
                    break;
                } else i = i[s] = [];
            }
            return r;
        }
        _utf(e) {
            let t = "",
                n = this._i,
                i = this._d;
            if (e < this._T) {
                let r = n + e;
                for (; n < r;) {
                    let e = i[n++];
                    if (e < 128) t += String.fromCharCode(e);
                    else if (e < 224) t += String.fromCharCode(((31 & e) << 6) + (63 & i[n++]));
                    else if (e < 240) t += String.fromCharCode(((15 & e) << 12) + ((63 & i[n++]) << 6) + (63 & i[n++]));
                    else {
                        let r = ((7 & e) << 18) + ((63 & i[n++]) << 12) + ((63 & i[n++]) << 6) + (63 & i[n++]);
                        t += String.fromCharCode(55296 + ((r - 65536) >> 10), 56320 + ((r - 65536) & 1023));
                    }
                }
            } else t = this._u(i.subarray(this._i, this._i + e));
            return ((this._i += e), t);
        }
        _latin(e) {
            let t = "",
                n = this._i,
                i = this._d;
            if (e < this._T) for (let r = n; r < n + e; r++) t += String.fromCharCode(i[r]);
            else t = this._l(i.subarray(n, n + e));
            return ((this._i += e), t);
        }
    })({
        decoding: { binary: "utf8", string: "array", nil: "array" },
        atomTable: { nil: null, null: null, true: !0, false: !1 },
        atomRegistration: !1,
    }),
    ed = (function () {
        let e;
        if (y.isPlatformEmbedded) {
            try {
                e = P.Ay.requireModule("discord_erlpack");
            } catch {
                try {
                    e = P.Ay.requireModule("erlpack");
                } catch {
                    e = void 0;
                }
            }
            if (null != e)
                return class {
                    static canUse() {
                        return null != e;
                    }
                    pack(e) {
                        return el.packToArrayBuffer(e);
                    }
                    unpack(e) {
                        let t = e instanceof Uint8Array ? e : new Uint8Array(e);
                        try {
                            return eo.unpack(t);
                        } catch (n) {
                            throw (
                                D.A.captureException(n, { tags: { app_context: "WetfParser" } }),
                                new g.A("GatewayEncodingErlpackEncoding").error("Error unpacking (wetf)", {
                                    erlpackUnpackError: n,
                                    erlpackDataPreview: null != e ? Array.from(t.slice(0, 32)) : null,
                                    erlpackDataLength: t.length,
                                }),
                                n
                            );
                        }
                    }
                    getName() {
                        return "etf";
                    }
                    wantsString() {
                        return !1;
                    }
                };
        }
    })();
class ec {
    pack(e) {
        return JSON.stringify(e);
    }
    unpack(e) {
        if ("string" != typeof e)
            throw Error(`Expected a string to be passed to JSONEncoding.unpack, got ${null == e ? null : typeof e}`);
        return JSON.parse(e);
    }
    getName() {
        return "json";
    }
    wantsString() {
        return !0;
    }
}
let eu = void 0 !== ed ? ed : ec;
b.P.isDiscordGatewayPlaintextSet() && (eu = ec);
let e_ = eu;
n(423034);
var eE = n(287809),
    eA = n(652215);
function eh(e) {
    try {
        var t;
        let n =
            ((t = e._trace?.[0]),
            null == t
                ? null
                : (function e(t, n) {
                      if (null == t) return "";
                      let i = "";
                      for (let r = 0; r < t.length; r += 2)
                          ((i += `
${n}${t[r]}: ${t[r + 1].micros / 1e3}`),
                              (i += e(t[r + 1].calls, n + "|  ")));
                      return i;
                  })(JSON.parse(t), ""));
        if (null != n) return n;
    } catch (e) {}
    return null != e._trace ? e._trace.join(" -> ") : "???";
}
function ef(e) {
    return {
        connectTime: e ?? 0,
        numEvents: 0,
        largestWaitTime: 0,
        dispatchTime: 0,
        totalWaitTime: 0,
        initialWaitTime: 0,
        startTime: performance.now(),
        lastUpdateTime: performance.now(),
    };
}
n(667532);
var eI = n(499979),
    ep = n(877166),
    eT = n(365971),
    em = n(435558),
    eg =
        (((i = {}).LONGER_DISPATCH = "longer_dispatch"),
        (i.EXCEEDED_MAX_CONSECUTIVE_FLUSHES = "exceeded_max_consecutive_flushes"),
        (i.FIRED_DUE_TO_MAX_TIMEOUT = "fired_due_to_max_timeout"),
        (i.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED = "skip_idle_callback_due_to_backgrounded"),
        i),
    eS =
        (((r = {}).TIME_TO_FIRE_IDLE_CALLBACK = "time_to_fire_idle_callback"),
        (r.TIME_TO_QUEUE_EMPTY = "time_to_flush_all_work"),
        (r.TIME_OVER_DEADLINE = "time_over_deadline"),
        (r.DEADLINE_INITIAL_TIME_REMAINING = "initial_time_of_deadline"),
        r),
    eN =
        (((a = {}).COUNT_DISPATCHES_LEFT_AFTER_YIELD = "count_dispatches_left_after_yield"),
        (a.COUNT_FLUSH_BEFORE_QUEUE_EMPTY = "count_flush_before_queue_empty"),
        (a.COUNT_INITIAL_DISPATCHS_LENGTH = "count_initial_dispatches_length"),
        a);
let eC = Object.freeze({
        time_to_fire_idle_callback: null,
        time_to_flush_all_work: null,
        time_over_deadline: null,
        initial_time_of_deadline: null,
    }),
    eO = Object.freeze({
        time_to_fire_idle_callback: [0, 0],
        time_to_flush_all_work: [0, 0],
        time_over_deadline: [0, 0],
        initial_time_of_deadline: [0, 0],
    }),
    eR = Object.freeze({
        count_flush_before_queue_empty: [0, 0],
        count_dispatches_left_after_yield: [0, 0],
        count_initial_dispatches_length: [0, 0],
    }),
    eL = Object.freeze({
        longer_dispatch: 0,
        exceeded_max_consecutive_flushes: 0,
        fired_due_to_max_timeout: 0,
        skip_idle_callback_due_to_backgrounded: 0,
    });
class ey {
    _timeTracking = (0, em.cloneDeep)(eC);
    _timingStats = (0, em.cloneDeep)(eO);
    _measurements = (0, em.cloneDeep)(eR);
    _eventCounts = (0, em.cloneDeep)(eL);
    _enabled = !1;
    reset() {
        ((this._timeTracking = (0, em.cloneDeep)(eC)),
            (this._timingStats = (0, em.cloneDeep)(eO)),
            (this._measurements = (0, em.cloneDeep)(eR)),
            (this._eventCounts = (0, em.cloneDeep)(eL)));
    }
    clearTime(e) {
        this._timeTracking[e] = null;
    }
    _storeTimeValue(e, t) {
        let [n, i] = this._timingStats[e];
        this._timingStats[e] = [(n * i + t) / (i + 1), i + 1];
    }
    time(e) {
        this._enabled && (this._timeTracking[e] = performance.now());
    }
    timeEnd(e) {
        if (!this._enabled) return;
        let t = this._timeTracking[e];
        if (null == t) return;
        let n = performance.now() - t;
        (this._storeTimeValue(e, n), (this._timeTracking[e] = null));
    }
    timeTrack(e, t) {
        this._enabled && this._storeTimeValue(e, t);
    }
    measure(e, t) {
        if (!this._enabled) return;
        let [n, i] = this._measurements[e];
        this._measurements[e] = [(n * i + t) / (i + 1), i + 1];
    }
    track(e) {
        this._enabled && (this._eventCounts[e] += 1);
    }
    toggleTelemetry(e) {
        this._enabled = e;
    }
    get isTelemetryEnabled() {
        return this._enabled;
    }
    generateTelemetry() {
        let e = Object.entries(this._timingStats).reduce((e, t) => {
                let [n, [i]] = t;
                return ((e[`avg_${n}`] = `${i.toFixed(2)}ms`), e);
            }, {}),
            t = Object.entries(this._measurements).reduce((e, t) => {
                let [n, [i]] = t;
                return ((e[`avg_${n}`] = `${i.toFixed(2)}`), e);
            }, {});
        return {
            ...Object.entries(this._eventCounts).reduce((e, t) => {
                let [n, i] = t;
                return ((e[`count_${n}`] = `${i}`), e);
            }, {}),
            ...e,
            ...t,
        };
    }
}
let eD = (1e3 / 60) * 3,
    ev = (1e3 / 60) * 3,
    eb = 1e3 / 60 / 8,
    eP = (1e3 / 60) * 12;
class eM {
    _browserDeadlineMs;
    _deadlineMs;
    _startMs;
    _firedDueToMaxTimeout;
    constructor(e, t = !1) {
        ((this._deadlineMs = Math.max(eb, e)),
            (this._browserDeadlineMs = e),
            (this._firedDueToMaxTimeout = t),
            (this._startMs = performance.now()));
    }
    timeRemaining() {
        let e = performance.now() - this._startMs;
        return Math.max(0, this._deadlineMs - e);
    }
    get didTimeout() {
        return this._firedDueToMaxTimeout;
    }
    get timeSinceExpiration() {
        return performance.now() - (this._startMs + this._deadlineMs);
    }
    generateDeadlineMetrics() {
        return {
            isDeadlineNotIdeal: this._browserDeadlineMs < eb,
            deadlineMs: this._deadlineMs.toFixed(2),
            timeSinceStartMs: (performance.now() - this._startMs).toFixed(2),
        };
    }
}
let eU = new g.A("DispatcherWorkScheduler");
class ew {
    _flushTimeoutHandler = null;
    _flushIdleHandler = null;
    _nextDispatchTimeout = eD;
    _workCallbackFn = null;
    _consecutiveFlushesBeforeQueueEmpty = 0;
    _isBackgrounded = !1;
    _enableRequestIdleCallback = !0;
    _criticalWorkScheduled = !1;
    telemetry = new ey();
    _logger = eU;
    _trackAppBackgrounded(e) {
        this._isBackgrounded === e ||
            ((this._isBackgrounded = e),
            this._isBackgrounded &&
                this.hasWorkScheduled &&
                (this.telemetry.track(eg.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED), this._processWorkCallback()));
    }
    _queueIdleCallback() {
        throw Error("Not implemented");
    }
    _clearIdleCallback() {
        throw Error("Not implemented");
    }
    get _hasExceededMaxConsecutiveFlushes() {
        return this._consecutiveFlushesBeforeQueueEmpty >= 2;
    }
    _processWorkCallback(e) {
        if (null == this._workCallbackFn) return;
        if (this._hasExceededMaxConsecutiveFlushes) {
            (eU.log("Unable to fully flush work queue after max retries, skipping future deadline."),
                this._workCallbackFn(),
                this.clearWorkTimeout(),
                this.telemetry.measure(eN.COUNT_FLUSH_BEFORE_QUEUE_EMPTY, this._consecutiveFlushesBeforeQueueEmpty),
                this.telemetry.track(eg.EXCEEDED_MAX_CONSECUTIVE_FLUSHES),
                (this._consecutiveFlushesBeforeQueueEmpty = 0),
                (this._nextDispatchTimeout = eP));
            return;
        }
        let t = performance.now(),
            n = this._workCallbackFn(e),
            i = performance.now();
        (this.clearWorkTimeout(),
            i - t > ev ? (this._nextDispatchTimeout = eP) : (this._nextDispatchTimeout = eD),
            n
                ? (this._consecutiveFlushesBeforeQueueEmpty > 0 &&
                      this.telemetry.measure(
                          eN.COUNT_FLUSH_BEFORE_QUEUE_EMPTY,
                          parseInt(`${this._consecutiveFlushesBeforeQueueEmpty}`),
                      ),
                  (this._consecutiveFlushesBeforeQueueEmpty = 0),
                  (this._criticalWorkScheduled = !1))
                : (this._consecutiveFlushesBeforeQueueEmpty += 1));
    }
    markCriticalWorkScheduled() {
        ((this._criticalWorkScheduled = !0),
            null != this._flushIdleHandler && (this._clearIdleCallback(), this._processWorkCallback()));
    }
    toggleRequestIdleCallback(e) {
        ((this._enableRequestIdleCallback = e),
            !e && this.hasWorkScheduled && (this._clearIdleCallback(), this._processWorkCallback()));
    }
    get isBackgrounded() {
        return this._isBackgrounded;
    }
    get hasWorkScheduled() {
        return null != this._flushTimeoutHandler || null != this._flushIdleHandler;
    }
    get isRequestIdleCallbackEnabled() {
        return this._enableRequestIdleCallback;
    }
    clearWorkTimeout() {
        (null != this._flushTimeoutHandler &&
            (clearTimeout(this._flushTimeoutHandler), (this._flushTimeoutHandler = null)),
            this._clearIdleCallback(),
            (this._nextDispatchTimeout = eD),
            (this._workCallbackFn = null));
    }
    requestWorkTimeout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (((this._workCallbackFn = e), !this.hasWorkScheduled)) {
            if (
                (this.telemetry.time(eS.TIME_TO_QUEUE_EMPTY),
                this._nextDispatchTimeout === eP && this.telemetry.track(eg.LONGER_DISPATCH),
                t)
            )
                return void this._queueIdleCallback();
            this._flushTimeoutHandler = setTimeout(() => {
                if ((o()(null != this._workCallbackFn, "Work callback should be set"), this._isBackgrounded))
                    return (
                        this.telemetry.track(eg.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED), this._processWorkCallback()
                    );
                this._queueIdleCallback();
            }, this._nextDispatchTimeout);
        }
    }
}
let eG =
        window.requestIdleCallback ??
        ((e) => {
            let t = Date.now();
            return setTimeout(() => {
                e({ didTimeout: !1, timeRemaining: () => Math.max(0, 50 - (Date.now() - t)) });
            }, 1);
        }),
    ex = window.cancelIdleCallback ?? clearTimeout;
function ek(e) {
    return null == e ? new eM(eb, !0) : new eM(e.timeRemaining(), e.didTimeout);
}
class eF extends ew {
    _flushIdleMaxTimeoutHandler = null;
    constructor() {
        (super(),
            f.h.subscribe("WINDOW_VISIBILITY_CHANGE", (e) => {
                let { visible: t, windowId: n } = e;
                n === (0, eT.Xg)() && this._trackAppBackgrounded(!t);
            }));
    }
    _queueIdleCallback() {
        if (!this._enableRequestIdleCallback || this._criticalWorkScheduled) return this._processWorkCallback();
        (this.telemetry.time(eS.TIME_TO_FIRE_IDLE_CALLBACK),
            this._scheduleRequestIdleCallback(
                (e) => {
                    if (e?.didTimeout) {
                        (this.telemetry.track(eg.FIRED_DUE_TO_MAX_TIMEOUT),
                            this.telemetry.clearTime(eS.TIME_TO_FIRE_IDLE_CALLBACK),
                            this._processWorkCallback());
                        return;
                    }
                    if ((this.telemetry.timeEnd(eS.TIME_TO_FIRE_IDLE_CALLBACK), (e?.timeRemaining() ?? eb) < eb))
                        (this.telemetry.time(eS.TIME_TO_FIRE_IDLE_CALLBACK),
                            this._scheduleRequestIdleCallback(
                                (e) => {
                                    this.telemetry.timeEnd(eS.TIME_TO_FIRE_IDLE_CALLBACK);
                                    let t = ek(e),
                                        n = t?.timeRemaining();
                                    (null != n && this.telemetry.timeTrack(eS.DEADLINE_INITIAL_TIME_REMAINING, n),
                                        this._processWorkCallback(t));
                                },
                                { timeout: 200 },
                            ));
                    else {
                        this.telemetry.timeEnd(eS.TIME_TO_FIRE_IDLE_CALLBACK);
                        let t = ek(e),
                            n = t?.timeRemaining();
                        (null != n && this.telemetry.timeTrack(eS.DEADLINE_INITIAL_TIME_REMAINING, n),
                            this._processWorkCallback(t));
                    }
                },
                { timeout: 1e3 },
            ));
    }
    _scheduleRequestIdleCallback(e, t) {
        ((this._flushIdleHandler = eG((t) => {
            (this._clearIdleCallback(), e(t));
        })),
            t?.timeout != null && this._scheduleMaxIdleCallback(t.timeout));
    }
    _scheduleMaxIdleCallback(e) {
        (null != this._flushIdleMaxTimeoutHandler && clearTimeout(this._flushIdleMaxTimeoutHandler),
            (this._flushIdleMaxTimeoutHandler = setTimeout(() => {
                (this._clearIdleCallback(), this._processWorkCallback());
            }, e)));
    }
    _clearIdleCallback() {
        (null != this._flushIdleHandler && (ex(this._flushIdleHandler), (this._flushIdleHandler = null)),
            null != this._flushIdleMaxTimeoutHandler &&
                (clearTimeout(this._flushIdleMaxTimeoutHandler), (this._flushIdleMaxTimeoutHandler = null)));
    }
}
let eB = (0, n(945810).mj)({
        name: "2026-08-voice-server-update-immediate",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eV = new g.A("GatewaySocket"),
    eH = new Set(["INITIAL_GUILD", "READY"]),
    ej = new Set(["READY", "INITIAL_GUILD"]),
    eW = new Set(["VOICE_SERVER_UPDATE", "STREAM_SERVER_UPDATE"]),
    eY = new Set(["READY", "READY_SUPPLEMENTAL", "RESUMED"]),
    eK = new Set([
        "READY",
        "INITIAL_GUILD",
        "READY_SUPPLEMENTAL",
        "RESUMED",
        "VOICE_CHANNEL_SELECT",
        "VOICE_STATE_UPDATE",
        "VOICE_SERVER_UPDATE",
        "RTC_CONNECTION_STATE",
        "RTC_CONNECTION_VIDEO",
        "RTC_CONNECTION_CLIENT_CONNECT",
        "RTC_CONNECTION_PING",
        "MEDIA_SESSION_JOINED",
        "MEDIA_ENGINE_PERMISSION",
        "SESSIONS_REPLACE",
        "STREAM_CREATE",
        "STREAM_SERVER_UPDATE",
        "STREAM_DELETE",
        "STREAM_UPDATE",
    ]),
    e$ = {};
class ez {
    socket;
    scheduler = new eF();
    queue = [];
    paused = !0;
    resumeAnalytics = ef();
    getDispatchHandler = null;
    constructor(e) {
        this.socket = e;
    }
    hasStuffToDispatchNow() {
        return this.queue.length > 0 && 2 === this.queue[0].status;
    }
    processFirstQueuedDispatch(e) {
        let t = [];
        for (; this.queue.length > 0 && e.has(this.queue[0].type) && 2 === this.queue[0].status;)
            t.push(this.queue.shift());
        this.dispatchMultiple(t);
    }
    unpauseDispatchQueue() {
        for (let e of ((this.paused = !1), this.queue)) this.maybePreload(e);
        this.flush();
    }
    receiveDispatch(e, t, n) {
        if (null == this.getDispatchHandler) throw Error("getDispatchHandler needs to be passed in first!");
        let i = {
            data: e,
            type: t,
            compressionAnalytics: n,
            status: 0,
            preloadPromise: null,
            preloadedData: null,
            receivedAt: (0, eI.tB)(),
        };
        (this.queue.push(i), this.maybePreload(i) || this.scheduleFlush(t));
    }
    maybePreload(e) {
        if (this.paused && !eH.has(e.type)) return !1;
        if (0 === e.status) {
            let t = this.getDispatchHandler(e.type)?.preload(e.data);
            if (((e.status = null == t ? 2 : 1), (e.preloadPromise = t), null != t))
                return (
                    t
                        .then((t) => {
                            ((e.preloadedData = t), (e.status = 2), this.scheduleFlush(e.type));
                        })
                        .catch((t) => this.socket.resetSocketOnDispatchError({ error: t, action: e.type })),
                    !0
                );
        }
        return !1;
    }
    shouldFlushImmediately(e) {
        return !!ej.has(e) || (!!eW.has(e) && (eB?.getConfig({ location: "GatewaySocketDispatcher" }).enabled ?? !1));
    }
    scheduleFlush(e) {
        !this.paused &&
            (this.shouldFlushImmediately(e)
                ? (this.scheduler.clearWorkTimeout(), this.flush())
                : this.scheduler.hasWorkScheduled || this.scheduler.requestWorkTimeout(this.flush),
            eK.has(e) && this.scheduler.markCriticalWorkScheduled());
    }
    flush = (e) => {
        if (this.paused) return !0;
        let t = performance.now(),
            n = 0;
        for (; n < this.queue.length && 2 === this.queue[n].status; n++);
        if (0 === n) return !0;
        let i = this.queue.splice(0, n),
            r = this.dispatchMultiple(i, e);
        r && this.scheduler.telemetry.timeEnd(eS.TIME_TO_QUEUE_EMPTY);
        let a = performance.now() - t;
        return (a > ev && !r && eV.log(`Dispatched ${i.length} messages in ${a}ms`), r);
    };
    getDispatchTimings() {
        return e$;
    }
    getSchedulerTelemetry() {
        return this.scheduler.telemetry;
    }
    getIsSchedulerBackgrounded() {
        return this.scheduler.isBackgrounded;
    }
    toggleRequestIdleCallback(e) {
        this.scheduler.toggleRequestIdleCallback(e);
    }
    getIsRequestIdleCallbackEnabled() {
        return this.scheduler.isRequestIdleCallbackEnabled;
    }
    dispatchMultiple(e, t) {
        if (0 === e.length) return !0;
        let n = "none",
            i = !1;
        this.scheduler.telemetry.measure(eN.COUNT_INITIAL_DISPATCHS_LENGTH, e.length);
        try {
            let r = [];
            this.socket.connectionState === v.A.RESUMING && A.Ay.Emitter.pause(150);
            let a = 0;
            if (
                (A.Ay.Emitter.batched(() => {
                    for (let s = 0; s < e.length; s++) {
                        let l = e[s];
                        ((n = l.type), (i = i || eY.has(l.type)));
                        let o = performance.now();
                        if (
                            (this.dispatchOne(l),
                            (a = performance.now() - o),
                            !(function (e, t) {
                                let [n, i] = e$[e] ?? [0, 0];
                                e$[e] = [(n * i + t) / (i + 1), i + 1];
                            })(l.type, a),
                            (function (e, t, n) {
                                if (null == n) return !1;
                                let i = e[t],
                                    r = e.length - 1,
                                    a = t < r ? e[t + 1] : null,
                                    s = n?.timeRemaining() ?? 0,
                                    l = null != n && s <= 0,
                                    o = i.type === a?.type;
                                return !!l && !o && t !== r;
                            })(e, s, t))
                        ) {
                            ((r = e.slice(s + 1)),
                                null != t &&
                                    0 >= t.timeRemaining() &&
                                    this.scheduler.telemetry.timeTrack(eS.TIME_OVER_DEADLINE, t.timeSinceExpiration));
                            break;
                        }
                    }
                    ep.A.flush();
                }),
                i && A.Ay.Emitter.resume(),
                r.length > 0)
            )
                return (
                    this.scheduler.telemetry.measure(eN.COUNT_DISPATCHES_LEFT_AFTER_YIELD, r.length),
                    this.queue.unshift(...r),
                    this.scheduler.requestWorkTimeout(this.flush, !0),
                    !1
                );
        } catch (e) {
            this.socket.resetSocketOnDispatchError({ error: e, action: n });
        }
        return !0;
    }
    dispatchOne(e) {
        var t, n;
        let { data: i, type: r, compressionAnalytics: a, preloadedData: s, receivedAt: l } = e,
            o = performance.now();
        if (this.socket.connectionState === v.A.RESUMING) {
            let e = o - this.resumeAnalytics.lastUpdateTime;
            (0 === this.resumeAnalytics.numEvents
                ? (this.resumeAnalytics.initialWaitTime = e)
                : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e),
                (this.resumeAnalytics.totalWaitTime += e),
                (this.resumeAnalytics.lastUpdateTime = o),
                (this.resumeAnalytics.numEvents += 1));
        }
        if ((ep.A.flush(r, i), "READY" === r)) {
            let e,
                n,
                d = (function (e) {
                    let t = Date.now(),
                        {
                            guilds: n,
                            merged_presences: i,
                            merged_members: r,
                            read_state: a,
                            private_channels: s,
                            user_guild_settings: l,
                            user_settings: o,
                            user_settings_proto: d,
                            experiments: c,
                            guild_experiments: u,
                            relationships: _,
                            users: E,
                            ...A
                        } = e,
                        h = [],
                        f = [],
                        I = [],
                        p = [],
                        T = [],
                        m = [],
                        g = [],
                        S = [];
                    return (
                        n.forEach((e) => {
                            if (e.unavailable) return;
                            let { features: t, ...n } = e.properties ?? {},
                                { threads: i, guild_scheduled_events: r, ...a } = e;
                            (h.push("partial" === e.data_mode ? e.partial_updates.channels : e.channels),
                                f.push("partial" === e.data_mode ? e.partial_updates.roles : e.roles),
                                I.push("partial" === e.data_mode ? e.partial_updates.emojis : e.emojis),
                                p.push(i),
                                T.push("partial" === e.data_mode ? e.partial_updates.stickers : e.stickers),
                                m.push(t),
                                g.push(r),
                                S.push(a, n));
                        }),
                        {
                            presences_size: JSON.stringify(i?.friends ?? []).length,
                            users_size: JSON.stringify(E).length,
                            read_states_size: JSON.stringify(a).length,
                            private_channels_size: JSON.stringify(s).length,
                            user_settings_size: JSON.stringify(o ?? "").length + (d ?? "").length,
                            experiments_size: JSON.stringify(c ?? []).length + JSON.stringify(u ?? []).length,
                            user_guild_settings_size: JSON.stringify(l).length,
                            relationships_size: JSON.stringify(_).length,
                            remaining_data_size: JSON.stringify(A ?? {}).length,
                            guild_channels_size: JSON.stringify(h).length,
                            guild_members_size: JSON.stringify(r ?? []).length,
                            guild_presences_size: JSON.stringify(i?.guilds ?? []).length,
                            guild_roles_size: JSON.stringify(f).length,
                            guild_emojis_size: JSON.stringify(I).length,
                            guild_threads_size: JSON.stringify(p).length,
                            guild_stickers_size: JSON.stringify(T).length,
                            guild_events_size: JSON.stringify(g).length,
                            guild_features_size: JSON.stringify(m).length,
                            guild_remaining_data_size: JSON.stringify(S).length,
                            size_metrics_duration_ms: Date.now() - t,
                        }
                    );
                })(i);
            (this.getDispatchHandler(r)?.dispatch(i, r, s, l),
                (t = this.socket),
                (e = (function (e) {
                    let { _trace: t } = e,
                        n = {};
                    try {
                        let e = JSON.parse(t);
                        (null != e[0] &&
                            "" !== e[0] &&
                            "string" == typeof e[0] &&
                            e[0].startsWith("gateway-") &&
                            (n.identify_total_server_duration_ms =
                                "object" == typeof e[1] && "micros" in e[1] ? Math.floor(e[1].micros / 1e3) : 0),
                            (function e(t, n) {
                                if (null != t && t.length > 0)
                                    for (let i = 0; i < t.length; i += 2) {
                                        let r = t[i],
                                            a = t[i + 1];
                                        (n(r, a.micros), e(a.calls, n));
                                    }
                            })(e, (e, t) => {
                                "start_session" === e
                                    ? (n.identify_api_duration_ms = Math.floor(t / 1e3))
                                    : "guilds_connect" === e && (n.identify_guilds_duration_ms = Math.floor(t / 1e3));
                            }));
                    } catch (e) {}
                    return n;
                })(i)),
                null != a && c.A.addDetail("payload_size(kb)", Math.round(a.uncompressed_byte_size / 1024)),
                c.A.addDetail("server_time(ms)", e.identify_total_server_duration_ms ?? 0),
                (n = {
                    ...a,
                    ...e,
                    ...(function (e) {
                        let { guilds: t } = e,
                            n = 0,
                            i = 0;
                        return (
                            t.forEach((e) => {
                                if (e.unavailable) return;
                                let t = "partial" === e.data_mode ? e.partial_updates.channels : e.channels;
                                null != t &&
                                    null != t.forEach &&
                                    t.forEach((e) => {
                                        (i++, e.type === eA.rbe.GUILD_CATEGORY && n++);
                                    });
                            }),
                            { num_guilds: t.length, num_guild_channels: i, num_guild_category_channels: n }
                        );
                    })(i),
                    ...d,
                    duration_ms_since_identify_start: o - t.identifyStartTime,
                    duration_ms_since_connection_start: o - t.connectionStartTime,
                    duration_ms_since_emit_start: Date.now() - o,
                    is_reconnect: t.hasConnectedOnce,
                    is_fast_connect: t.isFastConnect,
                    did_force_clear_guild_hashes: t.didForceClearGuildHashes,
                    identify_uncompressed_byte_size: t.identifyUncompressedByteSize,
                    identify_compressed_byte_size: t.identifyCompressedByteSize,
                    had_cache_at_startup: t.analytics.hadCacheAtStartup ?? !1,
                    used_cache_at_startup: t.analytics.usedCacheAtStartup ?? !1,
                }),
                N.A.attachReadyPayloadProperties(n),
                O.default.track(eA.HAw.READY_PAYLOAD_RECEIVED, n, { logEventProperties: !0 }));
        } else
            "RESUMED" === r
                ? (this.getDispatchHandler(r)?.dispatch(i, r, s, l),
                  (n = this.resumeAnalytics),
                  (!eE.default.getCurrentUser()?.isStaff() && 0.5 > Math.random()) ||
                      O.default.track(
                          eA.HAw.CONNECTION_RESUMED,
                          {
                              connect_time_ms: n.connectTime,
                              resume_time_ms: Math.floor(performance.now() - n.startTime),
                              num_events: n.numEvents,
                              largest_wait_time_ms: Math.floor(n.largestWaitTime),
                              initial_wait_time_ms: Math.floor(n.initialWaitTime),
                              total_wait_time_ms: Math.floor(n.totalWaitTime),
                              total_dispatch_time_ms: Math.floor(n.dispatchTime),
                          },
                          { logEventProperties: !0 },
                      ),
                  this.socket.handleResumeDispatched(),
                  (this.resumeAnalytics = ef()))
                : this.getDispatchHandler(r)?.dispatch(i, r, s, l);
        this.socket.connectionState === v.A.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - o);
    }
    clear() {
        ((this.paused = !1), (this.queue.length = 0));
    }
}
n(938796);
var eX = n(143236),
    eq = n(873985),
    eZ = n(935208),
    eQ =
        (((s = {})[(s.DISPATCH = 0)] = "DISPATCH"),
        (s[(s.HEARTBEAT = 1)] = "HEARTBEAT"),
        (s[(s.IDENTIFY = 2)] = "IDENTIFY"),
        (s[(s.PRESENCE_UPDATE = 3)] = "PRESENCE_UPDATE"),
        (s[(s.VOICE_STATE_UPDATE = 4)] = "VOICE_STATE_UPDATE"),
        (s[(s.VOICE_SERVER_PING = 5)] = "VOICE_SERVER_PING"),
        (s[(s.RESUME = 6)] = "RESUME"),
        (s[(s.RECONNECT = 7)] = "RECONNECT"),
        (s[(s.REQUEST_GUILD_MEMBERS = 8)] = "REQUEST_GUILD_MEMBERS"),
        (s[(s.INVALID_SESSION = 9)] = "INVALID_SESSION"),
        (s[(s.HELLO = 10)] = "HELLO"),
        (s[(s.HEARTBEAT_ACK = 11)] = "HEARTBEAT_ACK"),
        (s[(s.CALL_CONNECT = 13)] = "CALL_CONNECT"),
        (s[(s.GUILD_SUBSCRIPTIONS = 14)] = "GUILD_SUBSCRIPTIONS"),
        (s[(s.STREAM_CREATE = 18)] = "STREAM_CREATE"),
        (s[(s.STREAM_DELETE = 19)] = "STREAM_DELETE"),
        (s[(s.STREAM_WATCH = 20)] = "STREAM_WATCH"),
        (s[(s.STREAM_PING = 21)] = "STREAM_PING"),
        (s[(s.STREAM_SET_PAUSED = 22)] = "STREAM_SET_PAUSED"),
        (s[(s.REQUEST_GUILD_APPLICATION_COMMANDS = 24)] = "REQUEST_GUILD_APPLICATION_COMMANDS"),
        (s[(s.REQUEST_FORUM_UNREADS = 28)] = "REQUEST_FORUM_UNREADS"),
        (s[(s.REMOTE_COMMAND = 29)] = "REMOTE_COMMAND"),
        (s[(s.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH = 30)] = "GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH"),
        (s[(s.REQUEST_SOUNDBOARD_SOUNDS = 31)] = "REQUEST_SOUNDBOARD_SOUNDS"),
        (s[(s.REQUEST_LAST_MESSAGES = 34)] = "REQUEST_LAST_MESSAGES"),
        (s[(s.SEARCH_RECENT_MEMBERS = 35)] = "SEARCH_RECENT_MEMBERS"),
        (s[(s.GUILD_SUBSCRIPTIONS_BULK = 37)] = "GUILD_SUBSCRIPTIONS_BULK"),
        (s[(s.GUILD_CHANNELS_RESYNC = 38)] = "GUILD_CHANNELS_RESYNC"),
        (s[(s.REQUEST_CHANNEL_MEMBER_COUNT = 39)] = "REQUEST_CHANNEL_MEMBER_COUNT"),
        (s[(s.QOS_HEARTBEAT = 40)] = "QOS_HEARTBEAT"),
        (s[(s.UPDATE_TIME_SPENT_SESSION_ID = 41)] = "UPDATE_TIME_SPENT_SESSION_ID"),
        (s[(s.REQUEST_CHANNEL_INFO = 43)] = "REQUEST_CHANNEL_INFO"),
        s);
class eJ extends eX.EventEmitter {
    presenceUpdate(e, t, n, i) {
        this.send(eQ.PRESENCE_UPDATE, { status: e, since: t, activities: n, afk: i });
    }
    voiceStateUpdate(e) {
        let {
                guildId: t = null,
                channelId: n = null,
                selfMute: i = !1,
                selfDeaf: r = !1,
                selfVideo: a = !1,
                preferredRegion: s = null,
                preferredRegions: l = null,
                videoStreamParameters: o = null,
                flags: d = 0,
            } = e,
            c = { guild_id: t, channel_id: n, self_mute: i, self_deaf: r, self_video: a, flags: d };
        (null != n && eq.A.shouldIncludePreferredRegion() && ((c.preferred_region = s), (c.preferred_regions = l)),
            null != o && (c.tracks = o?.map((e) => ({ type: e.type, rid: e.rid, quality: e.quality }))),
            this.send(eQ.VOICE_STATE_UPDATE, c));
    }
    voiceServerPing() {
        this.send(eQ.VOICE_SERVER_PING, null);
    }
    requestGuildMembers(e, t) {
        let { query: n, limit: i, userIds: r, presences: a } = t;
        this.send(eQ.REQUEST_GUILD_MEMBERS, { guild_id: e, query: n, limit: i, user_ids: r, presences: a });
    }
    searchRecentMembers(e, t) {
        let { query: n, continuationToken: i } = t;
        this.send(eQ.SEARCH_RECENT_MEMBERS, { guild_id: e, query: n ?? "", continuation_token: i ?? null });
    }
    updateGuildSubscriptions(e) {
        let t = {},
            n = 0;
        (eZ.default.keys(e).forEach((i) => {
            let r = e[i],
                a = JSON.stringify([i, r]).length;
            (n + a > 15360 && (this.send(eQ.GUILD_SUBSCRIPTIONS_BULK, { subscriptions: t }), (t = {}), (n = 0)),
                (t[i] = r),
                (n += a));
        }),
            n > 0 && this.send(eQ.GUILD_SUBSCRIPTIONS_BULK, { subscriptions: t }));
    }
    callConnect(e) {
        this.send(eQ.CALL_CONNECT, { channel_id: e });
    }
    streamCreate(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.send(eQ.STREAM_CREATE, { type: e, guild_id: t, channel_id: n, preferred_region: i });
    }
    streamWatch(e) {
        this.send(eQ.STREAM_WATCH, { stream_key: e });
    }
    streamPing(e) {
        this.send(eQ.STREAM_PING, { stream_key: e });
    }
    streamDelete(e) {
        this.send(eQ.STREAM_DELETE, { stream_key: e });
    }
    streamSetPaused(e, t) {
        this.send(eQ.STREAM_SET_PAUSED, { stream_key: e, paused: t });
    }
    requestForumUnreads(e, t, n) {
        this.send(eQ.REQUEST_FORUM_UNREADS, {
            guild_id: e,
            channel_id: t,
            threads: n.map((e) => ({ thread_id: e.threadId, ack_message_id: e.ackMessageId })),
        });
    }
    requestSoundboardSounds(e) {
        this.send(eQ.REQUEST_SOUNDBOARD_SOUNDS, { guild_ids: e });
    }
    requestLastMessages(e, t) {
        this.send(eQ.REQUEST_LAST_MESSAGES, { guild_id: e, channel_ids: t });
    }
    getDeletedEntityIdsNotMatchingHash(e, t, n, i, r) {
        this.send(eQ.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH, {
            guild_id: e,
            channel_ids_hash: t,
            role_ids_hash: n,
            emoji_ids_hash: i,
            sticker_ids_hash: r,
        });
    }
    triggerGuildChannelResync(e, t) {
        this.send(eQ.GUILD_CHANNELS_RESYNC, { guild_id: e, obfuscated_channel_ids: t });
    }
    requestChannelInfo(e, t) {
        this.send(eQ.REQUEST_CHANNEL_INFO, { guild_id: e, fields: t });
    }
    requestChannelMemberCount(e, t) {
        this.send(eQ.REQUEST_CHANNEL_MEMBER_COUNT, { guild_id: e, channel_id: t });
    }
    remoteCommand(e, t) {
        this.send(eQ.REMOTE_COMMAND, { target_session_id: e, payload: t });
    }
}
var e0 = n(33282),
    e1 = n(981133),
    e2 = n(751124),
    e3 = n(852015),
    e5 = n(144367),
    e6 = n(428420),
    e4 = n(535384);
class e7 extends e4.G {
    constructor() {
        super("discord_protos.qos_token.v1.QosToken", [
            { no: 1, name: "client_provided", kind: "message", T: () => te },
            { no: 2, name: "derived", kind: "message", T: () => tn },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, e6.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, e5.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.clientProvided = te.internalBinaryRead(e, e.uint32(), n, r.clientProvided);
                    break;
                case 2:
                    r.derived = tn.internalBinaryRead(e, e.uint32(), n, r.derived);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? e3.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.clientProvided && te.internalBinaryWrite(e.clientProvided, t.tag(1, e3.O0.LengthDelimited).fork(), n).join(),
            e.derived && tn.internalBinaryWrite(e.derived, t.tag(2, e3.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? e3.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let e8 = new e7();
class e9 extends e4.G {
    constructor() {
        super("discord_protos.qos_token.v1.ClientProvidedQosData", [
            { no: 1, name: "is_active", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { isActive: !1 };
        return (
            globalThis.Object.defineProperty(t, e6.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, e5.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t) r.isActive = e.bool();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? e3.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.isActive && t.tag(1, e3.O0.Varint).bool(e.isActive);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? e3.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let te = new e9();
class tt extends e4.G {
    constructor() {
        super("discord_protos.qos_token.v1.DerivedQosData", [
            { no: 1, name: "claims", kind: "scalar", T: 12 },
            { no: 2, name: "signature", kind: "scalar", T: 12 },
            { no: 3, name: "key_id", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let t = { claims: new Uint8Array(0), signature: new Uint8Array(0), keyId: 0 };
        return (
            globalThis.Object.defineProperty(t, e6.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, e5.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.claims = e.bytes();
                    break;
                case 2:
                    r.signature = e.bytes();
                    break;
                case 3:
                    r.keyId = e.uint32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? e3.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.claims.length && t.tag(1, e3.O0.LengthDelimited).bytes(e.claims),
            e.signature.length && t.tag(2, e3.O0.LengthDelimited).bytes(e.signature),
            0 !== e.keyId && t.tag(3, e3.O0.Varint).uint32(e.keyId));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? e3.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let tn = new tt();
class ti extends e4.G {
    constructor() {
        super("discord_protos.qos_token.v1.Claims", [
            { no: 1, name: "user_id", kind: "scalar", T: 6 },
            { no: 2, name: "issued_at", kind: "scalar", T: 6 },
            { no: 3, name: "is_staff", kind: "scalar", T: 8 },
            { no: 4, name: "auth_token_hash", kind: "scalar", T: 12 },
            { no: 5, name: "expires_at", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { userId: "0", issuedAt: "0", isStaff: !1, authTokenHash: new Uint8Array(0), expiresAt: "0" };
        return (
            globalThis.Object.defineProperty(t, e6.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, e5.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.userId = e.fixed64().toString();
                    break;
                case 2:
                    r.issuedAt = e.fixed64().toString();
                    break;
                case 3:
                    r.isStaff = e.bool();
                    break;
                case 4:
                    r.authTokenHash = e.bytes();
                    break;
                case 5:
                    r.expiresAt = e.fixed64().toString();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? e3.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("0" !== e.userId && t.tag(1, e3.O0.Bit64).fixed64(e.userId),
            "0" !== e.issuedAt && t.tag(2, e3.O0.Bit64).fixed64(e.issuedAt),
            !1 !== e.isStaff && t.tag(3, e3.O0.Varint).bool(e.isStaff),
            e.authTokenHash.length && t.tag(4, e3.O0.LengthDelimited).bytes(e.authTokenHash),
            "0" !== e.expiresAt && t.tag(5, e3.O0.Bit64).fixed64(e.expiresAt));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? e3.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
new ti();
var tr = n(767589),
    ta = n(458244);
let ts = new g.A("QOS"),
    tl = new g.A("GatewaySocket"),
    to = new e_(),
    td = null;
function tc(e) {
    td = e;
}
function tu() {}
let t_ = 30 * L.A.Millis.SECOND,
    tE = 3 * L.A.Millis.MINUTE,
    tA = +L.A.Millis.MINUTE;
function th(e) {
    return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength;
}
let tf = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
class tI extends eJ {
    gatewayBackoff;
    handleIdentify;
    dispatchExceptionBackoff = new u.A(1e3, tA);
    dispatchSuccessTimer = 0;
    connectionState_;
    webSocket;
    seq;
    sessionId;
    token;
    initialHeartbeatTimeout;
    expeditedHeartbeatTimeout;
    heartbeatInterval;
    helloTimeout;
    heartbeater;
    lastHeartbeatTime;
    lastHeartbeatAckTime;
    heartbeatAck;
    connectionStartTime;
    firstConnectAttemptStartTime;
    identifyStartTime;
    nextReconnectIsImmediate;
    compressionHandler;
    hasConnectedOnce;
    isFastConnect;
    didForceClearGuildHashes = !1;
    identifyUncompressedByteSize = 0;
    identifyCompressedByteSize = 0;
    analytics = {};
    identifyCount = 0;
    resumeUrl = null;
    iosGoingAwayEventCount = 0;
    failedConnectAttempts = 0;
    receivedHelloThisAttempt = !1;
    dispatcher;
    heartbeatQOSState = { currentPayload: null, upcomingState: null };
    get connectionState() {
        return this.connectionState_;
    }
    set connectionState(e) {
        (tl.verbose(`Setting connection state to ${e}`), (this.connectionState_ = e));
    }
    constructor() {
        (super(),
            (this.dispatcher = new ez(this)),
            (this.gatewayBackoff = new u.A(1e3, 6e4)),
            (this.connectionState_ = v.A.CLOSED),
            (this.webSocket = null),
            (this.seq = 0),
            (this.sessionId = null),
            (this.token = null),
            (this.initialHeartbeatTimeout = null),
            (this.expeditedHeartbeatTimeout = null),
            (this.lastHeartbeatTime = null),
            (this.lastHeartbeatAckTime = null),
            (this.helloTimeout = null),
            (this.heartbeatInterval = null),
            (this.heartbeater = null),
            (this.heartbeatAck = !0),
            (this.connectionStartTime = 0),
            (this.firstConnectAttemptStartTime = 0),
            (this.identifyStartTime = 0),
            (this.nextReconnectIsImmediate = !1),
            (this.compressionHandler = F(to)),
            (this.hasConnectedOnce = !1),
            (this.isFastConnect = !1),
            (this.identifyCount = 0),
            (this.iosGoingAwayEventCount = 0),
            (this.failedConnectAttempts = 0),
            (this.receivedHelloThisAttempt = !1));
    }
    addAnalytics(e) {
        this.analytics = { ...this.analytics, ...e };
    }
    setResumeUrl(e) {
        (null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)),
            null !== e && tl.verbose(`Updating resume url to ${e}`),
            (this.resumeUrl = e));
    }
    handleActiveStateChange(e) {
        let t = !this.heartbeatQOSState.currentPayload?.active;
        null == this.heartbeatQOSState.currentPayload && (this.heartbeatQOSState.currentPayload = e);
        let n = this.heartbeatQOSState.currentPayload;
        (e.active &&
            ((n.active = !0),
            (n.reasons = [...new Set([...n.reasons, ...e.reasons])].sort()),
            t && this.isSessionEstablished() && this._sendHeartbeat()),
            (this.heartbeatQOSState.upcomingState = e));
    }
    handleUpdateTimeSpentSessionId(e, t, n) {
        this.connectionState_ === v.A.SESSION_ESTABLISHED &&
            (this.send(eQ.UPDATE_TIME_SPENT_SESSION_ID, {
                initialization_timestamp: e,
                session_id: t,
                client_launch_id: n,
            }),
            this._sendHeartbeat());
    }
    _connect() {
        var e, t, n;
        let i, r;
        if (!this.willReconnect()) return void tl.verbose("Skipping _connect because willReconnect is false");
        if (e0.j()) return void tl.info("Skipping _connect because socket is paused");
        ((this.connectionState = v.A.CONNECTING), (this.nextReconnectIsImmediate = !1));
        let a = this.compressionHandler.getAlgorithm(),
            s = to.getName(),
            l = this._getGatewayUrl(),
            o = window.GLOBAL_ENV.API_VERSION;
        ((this.receivedHelloThisAttempt = !1),
            c.A.mark("\uD83C\uDF10", "Socket._connect"),
            tl.info(`[CONNECT] ${l}, encoding: ${s}, version: ${o}, compression: ${a ?? "none"}`),
            null !== this.webSocket &&
                (tl.error("_connect called with already existing websocket"), this._cleanup((e) => e.close(4e3))),
            (this.connectionStartTime = Date.now()),
            0 === this.firstConnectAttemptStartTime && (this.firstConnectAttemptStartTime = this.connectionStartTime),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                (this._handleClose(!1, 0, `The connection timed out after ${e} ms - did not receive OP_HELLO in time.`),
                    this.setResumeUrl(null));
            }, t_)));
        let d = new URL(l);
        (d.searchParams.append("encoding", s),
            d.searchParams.append("v", o.toString()),
            null != a && d.searchParams.append("compress", a),
            !(function (e) {
                let t,
                    { gatewayURL: n, newCallback: i, onOpen: r, onMessage: a, onError: s, onClose: l } = e;
                tl.enableNativeLogger(!0);
                let o = window._ws,
                    d = !1,
                    c = !1,
                    u = null,
                    _ = null;
                if (((window._ws = null), null != o)) {
                    t = o.ws;
                    let e = o.state.userId,
                        i = null != e && null != td && e !== td;
                    if (o.state.gateway !== n)
                        (tl.verbose(`[FAST CONNECT] gatewayURL mismatch: ${o.state.gateway} !== ${n}`),
                            t.close(1e3),
                            (t = null));
                    else if (i)
                        (tl.log(
                            `[FAST CONNECT] refusing to adopt socket: identified user ${e} does not match switch target ${td}`,
                        ),
                            t.close(1e3),
                            (t = null));
                    else {
                        let e = { ...o.state };
                        (null != e.messages &&
                            (e.messages = e.messages.map((e) =>
                                null != e.data && "string" == typeof e.data
                                    ? { ...e, data: e.data.substring(0, 100) }
                                    : e,
                            )),
                            tl.log("[FAST CONNECT] successfully took over websocket, state:", {
                                ...e,
                                messages: e.messages?.length,
                            }),
                            (d = o.state.open),
                            (c = o.state.identify),
                            (u = o.state.messages),
                            (_ = o.state.clientState));
                    }
                }
                (null == t && ((t = (0, e2.A)(n)).binaryType = "arraybuffer"),
                    i(t),
                    d && r(c, _),
                    null != u && u.forEach(a),
                    (t.onopen = () => r(c, _)),
                    (t.onmessage = a),
                    (t.onclose = l),
                    (t.onerror = s));
            })({
                gatewayURL: d.toString(),
                newCallback: (e) => {
                    ((this.webSocket = e), this.compressionHandler.bindWebSocket(e));
                },
                onOpen: (e) => {
                    c.A.mark(`\u{1F310}`, `GatewaySocket.onOpen ${e}`);
                    let t = Date.now() - this.connectionStartTime;
                    (tl.info(`[CONNECTED] ${d.toString()} in ${t} ms`),
                        (this.isFastConnect = e),
                        e ? this._doFastConnectIdentify() : this._doResumeOrIdentify());
                },
                onMessage:
                    ((e = this.compressionHandler),
                    (t = this._handleClose.bind(this)),
                    (n = (e, t) => {
                        let n = Date.now(),
                            { op: i, s: r, t: a, d: s } = to.unpack(e);
                        if (
                            (i !== eQ.DISPATCH && c.A.mark(`\u{1F310}`, `GatewaySocket.onMessage ${i} ${eQ[i]}`),
                            C.default.isLoggingGatewayEvents)
                        ) {
                            let e = [i];
                            (i === eQ.DISPATCH && e.push(a), e.push(s), tl.verboseDangerously("<~", ...e));
                        }
                        let l = Date.now() - n;
                        switch (
                            ("READY" === a
                                ? N.A.parseReady.set(n, l)
                                : "READY_SUPPLEMENTAL" === a
                                  ? N.A.parseReadySupplemental.set(n, l)
                                  : l > 10 && c.A.mark("\uD83C\uDF10", "Parse " + a, l),
                            null != r && (this.seq = r),
                            i)
                        ) {
                            case eQ.HELLO:
                                (this._clearHelloTimeout(), this._handleHello(s));
                                break;
                            case eQ.RECONNECT:
                                this._handleReconnect();
                                break;
                            case eQ.INVALID_SESSION:
                                this._handleInvalidSession(s);
                                break;
                            case eQ.HEARTBEAT:
                                this._handleHeartbeatReceive();
                                break;
                            case eQ.HEARTBEAT_ACK:
                                this._handleHeartbeatAck(s);
                                break;
                            case eQ.DISPATCH:
                                this._handleDispatch(
                                    s,
                                    a,
                                    "READY" === a
                                        ? {
                                              compressed_byte_size: t,
                                              uncompressed_byte_size: th(e),
                                              compression_algorithm: this.compressionHandler.getAlgorithm(),
                                              packing_algorithm: to.getName(),
                                              unpack_duration_ms: l,
                                          }
                                        : null,
                                );
                                break;
                            default:
                                tl.info(`Unhandled op ${i}`);
                        }
                        this._sendHeartbeatIfDue();
                    }),
                    (i = 0),
                    e.dataReady((e) => {
                        try {
                            return n(e, i);
                        } finally {
                            i = 0;
                        }
                    }),
                    (r = !1),
                    (n) => {
                        let a = n.data;
                        null != n.raw_length ? (i += n.raw_length) : (i += th(a));
                        try {
                            e.feed(a);
                        } catch (e) {
                            throw (r || ((r = !0), t(!1, 0, "A decompression error occurred")), e);
                        }
                    }),
                onError: () => {
                    (this.setResumeUrl(null),
                        R.A.flushDNSCache(),
                        this._handleClose(!1, 0, "An error with the websocket occurred"));
                },
                onClose: (e) => {
                    let { wasClean: t, code: n, reason: i } = e;
                    return this._handleClose(t, n, i);
                },
            }));
    }
    _handleHello(e) {
        let t = (this.heartbeatInterval = e.heartbeat_interval),
            n = Date.now(),
            i = n - this.connectionStartTime;
        (tl.verbose(`[HELLO] via ${eh(e)}, heartbeat interval: ${t}, took ${i} ms`),
            (function (e) {
                let { socket: t, gatewayUrl: n, now: i } = e;
                O.default.track(
                    eA.HAw.GATEWAY_CONNECTED,
                    {
                        num_failed_connect_attempts: t.failedConnectAttempts,
                        gateway_url: n,
                        is_reconnect: t.hasConnectedOnce,
                        is_fast_connect: t.isFastConnect,
                        duration_ms_since_first_connect_attempt: i - t.firstConnectAttemptStartTime,
                        duration_ms_since_connect_attempt_start: i - t.connectionStartTime,
                    },
                    { logEventProperties: !0 },
                );
            })({ socket: this, gatewayUrl: this._getGatewayUrl(), now: n }),
            (this.receivedHelloThisAttempt = !0),
            (this.failedConnectAttempts = 0),
            (this.firstConnectAttemptStartTime = 0),
            this._startHeartbeater());
    }
    _handleReconnect() {
        (tl.verbose("[RECONNECT] gateway requested I reconnect."),
            this._cleanup((e) => e.close(4e3)),
            (this.connectionState = v.A.WILL_RECONNECT),
            this._connect());
    }
    _handleInvalidSession(e) {
        (tl.info(`[INVALID_SESSION]${e ? " can resume)" : ""}`), e ? this._doResumeOrIdentify() : this._doIdentify());
    }
    _handleDispatch(e, t, n) {
        let i = Date.now() - this.connectionStartTime;
        if ("READY" === t) {
            let t = e.session_id;
            this.sessionId = t;
            let n = eh(e);
            (c.A.setServerTrace(n),
                tl.info(`[READY] took ${i}ms, as ${t}`),
                tl.verbose(`${n}`),
                (this.connectionState = v.A.SESSION_ESTABLISHED),
                this.gatewayBackoff.succeed(),
                (this.iosGoingAwayEventCount = 0),
                this.setResumeUrl(e.resume_gateway_url));
        } else
            "READY_SUPPLEMENTAL" === t
                ? (tl.info(`[READY_SUPPLEMENTAL] took ${i}ms`),
                  (this.connectionState = v.A.SESSION_ESTABLISHED),
                  this.gatewayBackoff.succeed(),
                  (this.iosGoingAwayEventCount = 0))
                : "RESUMED" === t &&
                  (tl.verbose(eh(e)),
                  (this.connectionState = v.A.SESSION_ESTABLISHED),
                  this.gatewayBackoff.succeed(),
                  (this.iosGoingAwayEventCount = 0));
        this.dispatcher.receiveDispatch(e, t, n);
    }
    handleResumeDispatched() {
        let e = Date.now() - this.connectionStartTime;
        tl.info(
            `[RESUMED] took ${e}ms, replayed ${this.dispatcher.resumeAnalytics.numEvents} events, new seq: ${this.seq}`,
        );
    }
    handleReadyDispatched() {
        ((this.didForceClearGuildHashes = !1), (this.hasConnectedOnce = !0));
    }
    _getGatewayUrl() {
        return null != this.resumeUrl ? this.resumeUrl : tf;
    }
    _handleHeartbeatReceive() {
        (this._sendHeartbeat(),
            null != this.heartbeater &&
                null != this.heartbeatInterval &&
                (clearInterval(this.heartbeater),
                (this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), this.heartbeatInterval))));
    }
    _handleHeartbeatAck(e) {
        ((this.lastHeartbeatAckTime = Date.now()),
            (this.heartbeatAck = !0),
            null !== this.expeditedHeartbeatTimeout &&
                (clearTimeout(this.expeditedHeartbeatTimeout),
                (this.expeditedHeartbeatTimeout = null),
                tl.verbose("Expedited heartbeat succeeded")));
    }
    _handleHeartbeatTimeout() {
        (this._cleanup((e) => e.close(4e3)), (this.connectionState = v.A.WILL_RECONNECT));
        let e = this.gatewayBackoff.fail(() => this._connect());
        tl.warn(`[ACK TIMEOUT] reconnecting in ${(e / 1e3).toFixed(2)} seconds.`);
    }
    _handleClose(e, t, n) {
        if (((e = e || !1), this._cleanup(), this.emit("close", { code: t, reason: n }), 4004 === t))
            return (
                (this.connectionState = v.A.CLOSED),
                tl.warn("[WS CLOSED] because of authentication failure, marking as closed."),
                this._reset(e, t, n)
            );
        if (
            (this._tryDetectInvalidIOSToken(t, n, e),
            (this.connectionState = v.A.WILL_RECONNECT),
            this.receivedHelloThisAttempt || (this.failedConnectAttempts += 1),
            this.nextReconnectIsImmediate)
        )
            (tl.info(`[WS CLOSED] (${e.toString()}, ${t}, ${n}) retrying immediately.`), this._connect());
        else {
            let i = this.gatewayBackoff.fail(() => this._connect());
            (tl.info(`[WS CLOSED] (${e.toString()}, ${t}, ${n}) retrying in ${(i / 1e3).toFixed(2)} seconds.`),
                this.gatewayBackoff.fails > 4 && this._reset(e, t, n));
        }
    }
    _tryDetectInvalidIOSToken(e, t, n) {
        (0, y.isIOS)() &&
            null != this.token &&
            1001 === e &&
            "Stream end encountered" === t &&
            ((this.iosGoingAwayEventCount += 1),
            3 === this.iosGoingAwayEventCount &&
                h.Bo.get({ url: eA.Rsh.ME, headers: { authorization: this.token }, rejectWithError: !1 }).then(
                    (e) => {
                        let { status: t } = e;
                        O.default.track(eA.HAw.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                    },
                    (e) => {
                        let { status: t } = e;
                        (401 === t &&
                            ((this.connectionState = v.A.CLOSED),
                            tl.warn("[WS CLOSED] because of manual authentication failure, marking as closed."),
                            this._reset(n, 4004, "invalid token manually detected")),
                            O.default.track(eA.HAw.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t }));
                    },
                ));
    }
    _reset(e, t, n) {
        ((this.sessionId = null),
            (this.seq = 0),
            tl.warn(`[RESET] (${e.toString()}, ${t}, ${n})`),
            this.emit("disconnect", { wasClean: e, code: t, reason: n }));
    }
    _sendHeartbeatIfDue() {
        if (null == this.heartbeatInterval || null == this.heartbeater) return;
        let e = this.lastHeartbeatTime;
        null != e && Date.now() - e > this.heartbeatInterval + 5e3 && this._sendHeartbeat();
    }
    _doHeartbeatInterval() {
        this.heartbeatAck
            ? ((this.heartbeatAck = !1), this._sendHeartbeat())
            : null === this.expeditedHeartbeatTimeout && this._handleHeartbeatTimeout();
    }
    _startHeartbeater() {
        let { heartbeatInterval: e } = this;
        (o()(null != e, "GatewaySocket: Heartbeat interval should never null here."),
            null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout),
            null !== this.heartbeater && (clearInterval(this.heartbeater), (this.heartbeater = null)),
            (this.initialHeartbeatTimeout = setTimeout(
                () => {
                    ((this.initialHeartbeatTimeout = null),
                        (this.heartbeatAck = !0),
                        (this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), e)),
                        this._doHeartbeatInterval());
                },
                Math.floor(Math.random() * e),
            )));
    }
    _stopHeartbeater() {
        (null !== this.heartbeater && (clearInterval(this.heartbeater), (this.heartbeater = null)),
            null !== this.initialHeartbeatTimeout &&
                (clearTimeout(this.initialHeartbeatTimeout), (this.initialHeartbeatTimeout = null)),
            null !== this.expeditedHeartbeatTimeout &&
                (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null)));
    }
    _clearHelloTimeout() {
        null != this.helloTimeout && (clearTimeout(this.helloTimeout), (this.helloTimeout = null));
    }
    _cleanup(e) {
        (A.Ay.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout());
        let t = this.webSocket;
        ((this.webSocket = null),
            null != t && ((t.onopen = tu), (t.onmessage = tu), (t.onerror = tu), (t.onclose = tu), e?.(t)),
            this.gatewayBackoff.cancel(),
            this.compressionHandler.close(),
            (this.compressionHandler = F(to)));
    }
    _doResume() {
        ((this.connectionState = v.A.RESUMING),
            (this.dispatcher.resumeAnalytics = ef(Date.now() - this.connectionStartTime)),
            tl.info(`[RESUME] resuming session ${this.sessionId ?? ""}, seq: ${this.seq}`),
            this.send(eQ.RESUME, { token: this.token, session_id: this.sessionId, seq: this.seq }, !1));
    }
    async _doIdentify() {
        ((this.seq = 0), (this.sessionId = null));
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, 4004, "No connection info provided");
        this.connectionState = v.A.IDENTIFYING;
        let t = Date.now();
        this.identifyStartTime = t;
        let [n, i, r] = await Promise.all([
                (0, m.O)() ? I.A.getCommittedVersions() : {},
                (0, m.O)() ? T.A.getCommittedVersions() : {},
                !!(0, m.O)() && p.A.canUseGuildVersions(),
            ]),
            a = (function (e, t) {
                let n;
                var i = ta.A.getForUser(e);
                let r = te.create({ isActive: t });
                if (null != i)
                    try {
                        n = (0, tr.ii)(tn, i);
                    } catch (e) {
                        ts.warn(`Failed to decode derived QOS data: ${e}`);
                    }
                return (0, tr.ob)(e8, { clientProvided: r, derived: n });
            })(e.userId, this.getIsUserActive()),
            s = r
                ? {
                      guild_versions: n,
                      highest_last_message_id: i.highest_last_message_id,
                      read_state_version: i.read_state_version,
                      user_guild_settings_version: i.user_guild_settings_version,
                      user_settings_version: i.user_settings_version,
                      private_channels_version: i.private_channels_version,
                      api_code_version: i.api_code_version,
                      initial_guild_id: i.initial_guild_id,
                  }
                : { guild_versions: {} };
        if (this.connectionState !== v.A.IDENTIFYING || this.identifyStartTime !== t)
            return void tl.warn("Skipping identify because connectionState or identifyStartTime has changed");
        let { token: l, properties: o = {}, presence: c } = e;
        ((this.token = l), tl.verbose("[IDENTIFY]"));
        let u = {
                token: l,
                capabilities: (function (e) {
                    let { useChannelObfuscation: t } = e;
                    return t ? 1767421 : 1734653;
                })({ useChannelObfuscation: (0, e1.RK)("GatewaySocket") }),
                properties: o,
                presence: c,
                compress: this.compressionHandler.usesLegacyCompression(),
                client_state: s,
                qos_token: a,
            },
            _ = JSON.stringify(u);
        ((this.identifyUncompressedByteSize = _.length),
            (this.identifyCompressedByteSize = d.deflate(_).length),
            (this.identifyCount += 1),
            this.send(eQ.IDENTIFY, u, !1),
            O.default.track(eA.HAw.SESSION_START_CLIENT, {}));
    }
    _doFastConnectIdentify() {
        ((this.seq = 0), (this.sessionId = null));
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, 4004, "No connection info provided");
        let { token: t } = e;
        ((this.token = t),
            (this.connectionState = v.A.IDENTIFYING),
            (this.identifyStartTime = Date.now()),
            (this.identifyCount += 1),
            tl.verbose("[IDENTIFY, fast-connect]"),
            this._updateLastHeartbeatAckTime());
    }
    _doResumeOrIdentify() {
        let e = Date.now();
        (null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= tE)
            ? this._doResume()
            : this._doIdentify(),
            this._updateLastHeartbeatAckTime());
    }
    _updateLastHeartbeatAckTime() {
        this.lastHeartbeatAckTime = Date.now();
    }
    getIsUserActive() {
        let { upcomingState: e, currentPayload: t } = this.heartbeatQOSState;
        return e?.active ?? t?.active ?? !1;
    }
    _consumeQOSPayload() {
        let e = this.heartbeatQOSState.currentPayload;
        return (
            (this.heartbeatQOSState.currentPayload =
                this.heartbeatQOSState.upcomingState ?? this.heartbeatQOSState.currentPayload),
            (this.heartbeatQOSState.upcomingState = null),
            e
        );
    }
    _sendHeartbeat() {
        let e = this._consumeQOSPayload();
        (this.send(eQ.QOS_HEARTBEAT, { seq: this.seq, qos: e }, !1), (this.lastHeartbeatTime = Date.now()));
    }
    getLogger() {
        return tl;
    }
    willReconnect() {
        return this.connectionState === v.A.WILL_RECONNECT;
    }
    isClosed() {
        return this.connectionState === v.A.CLOSED;
    }
    isSessionEstablished() {
        return this.connectionState === v.A.SESSION_ESTABLISHED || this.connectionState === v.A.RESUMING;
    }
    isConnected() {
        return (
            this.connectionState === v.A.IDENTIFYING ||
            this.connectionState === v.A.RESUMING ||
            this.connectionState === v.A.SESSION_ESTABLISHED
        );
    }
    connect() {
        return this.isClosed()
            ? (tl.verbose(".connect() called, new state is WILL_RECONNECT"),
              (this.connectionState = v.A.WILL_RECONNECT),
              (this.firstConnectAttemptStartTime = 0),
              this._connect(),
              !0)
            : (tl.error("Cannot start a new connection, connection state is not closed"), !1);
    }
    resetSocketAndClearCacheOnError(e) {
        let { action: t, error: n, metricAction: i } = e;
        tl.error(`resetSocketAndClearCacheOnError during ${t}: ${n.message}`, n.stack);
        let r = (0, E.b)();
        (S.A.increment({ name: _.K.SOCKET_CRASHED, tags: [`action:${i ?? t}`, `modded_client:${r}`] }, !0),
            !1 !== e.sentry && D.A.captureException(n, { tags: { socketCrashedAction: t } }),
            O.default.track(eA.HAw.GATEWAY_SOCKET_RESET, {
                error_message: n.message,
                error_stack: n.stack,
                has_client_mods: r,
                action: t,
            }),
            this._cleanup((e) => e.close()),
            this._reset(!0, 1e3, "Resetting socket due to error."),
            this.dispatcher.clear(),
            (this.connectionState = v.A.WILL_RECONNECT),
            this.dispatchExceptionBackoff.cancel(),
            0 === this.dispatchExceptionBackoff._fails
                ? (tl.verbose("Triggering fast reconnect"),
                  this.dispatchExceptionBackoff.fail(() => {}),
                  setTimeout(() => this._connect(), 0))
                : this.dispatchExceptionBackoff.fail(() => this._connect()),
            (this.didForceClearGuildHashes = !0),
            f.h.dispatch({ type: "CLEAR_CACHES", reason: `Socket reset during ${t}` }),
            f.h.dispatch({ type: "LIBDISCORE_RESET" }),
            clearTimeout(this.dispatchSuccessTimer),
            (this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * tA)));
    }
    resetSocketOnDispatchError(e) {
        let t = null != e.error.message && e.error.message.indexOf("Guild data was missing from store") >= 0;
        this.resetSocketAndClearCacheOnError({ ...e, sentry: !t });
    }
    close() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.isClosed()) {
            (tl.verbose("close() called, but socket is already closed."),
                e || ((this.sessionId = null), (this.token = null)));
            return;
        }
        tl.info(`Closing connection, current state is ${this.connectionState}`);
        let t = e ? 4e3 : void 0;
        (this._cleanup((e) => e.close(t)),
            (this.connectionState = v.A.CLOSED),
            e ||
                ((this.sessionId = null),
                (this.token = null),
                setImmediate(() => {
                    this._reset(!0, 1e3, "Disconnect requested by user");
                })));
    }
    networkStateChange(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        this.expeditedHeartbeat(e, t, n, !1);
    }
    expeditedHeartbeat(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (!this.isClosed()) {
            if (this.isConnected()) {
                (tl.verbose(`Performing an expedited heartbeat ${null != t && "" !== t ? "reason: " + t : ""}`),
                    (this.heartbeatAck = !1),
                    this._sendHeartbeat(),
                    null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout),
                    (this.expeditedHeartbeatTimeout = setTimeout(() => {
                        ((this.expeditedHeartbeatTimeout = null),
                            !1 === this.heartbeatAck && this._handleHeartbeatTimeout());
                    }, e)));
                return;
            }
            n
                ? this.resetBackoff(t, i)
                : tl.verbose(
                      `Expedited heartbeat requested, but, connection state is ${this.connectionState} and reconnectImmediately was not requested ${null != t && "" !== t ? "reason: " + t : ""}`,
                  );
        }
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        (tl.verbose(`Connection has reset backoff${null != e && "" !== e ? " for reason: " + e : ""}`),
            this.gatewayBackoff.succeed(),
            (this.iosGoingAwayEventCount = 0),
            (this.nextReconnectIsImmediate = !0),
            this.willReconnect()
                ? this._connect()
                : t && this.connectionState !== v.A.SESSION_ESTABLISHED && this._handleClose(!0, 0, e));
    }
    send = (e, t, n) => {
        C.default.isLoggingGatewayEvents && tl.verboseDangerously("~>", e, eQ[e], t);
        let i = to.pack({ op: e, d: t });
        if (!n || this.isSessionEstablished())
            try {
                null != this.webSocket && this.webSocket.send(i);
            } catch (e) {}
        else tl.warn(`Attempted to send while not being in a connected state opcode: ${e}`);
    };
}
