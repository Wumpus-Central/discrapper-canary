"use strict";
n.d(t, { A: () => nF });
var i,
    r,
    s,
    a,
    o = n(735438),
    l = n.n(o),
    _ = n(17928),
    d = n(506774),
    u = n(228366),
    c = n(956793),
    E = n(626584),
    h = n(652896),
    m = n(796774),
    f = n(617617),
    g = n(495544),
    A = n(470710),
    I = n(734057),
    p = n(51760),
    T = n(763827),
    S = n(873985),
    N = n(309010),
    O = n(461213),
    R = n(116956),
    C = n(723702),
    y =
        (((i = y || {}).CLOSED = "CLOSED"),
        (i.WILL_RECONNECT = "WILL_RECONNECT"),
        (i.CONNECTING = "CONNECTING"),
        (i.IDENTIFYING = "IDENTIFYING"),
        (i.RESUMING = "RESUMING"),
        (i.SESSION_ESTABLISHED = "SESSION_ESTABLISHED"),
        i),
    D = n(77729),
    L = n(183636),
    v = n(954571),
    w = n(209489);
n(323874), n(14289), n(35956), n(321073), n(142703);
var P = n(284009),
    b = n.n(P),
    k = n(777915),
    U = n(61090),
    M = n(158390),
    G = n(731738),
    x = n(70298),
    V = n(636537),
    F = n(71393),
    B = n(403362),
    H = n(723176);
let Y = new E.A("GuildVersions");
class W {
    pending = new Map();
    committed = new Map();
    async getCommittedVersions() {
        try {
            let e = H.A.guildVersions();
            if (null == e) return {};
            let t = (await e.getMany()).map((e) => [e.id, e.version]);
            return Object.fromEntries(t ?? []);
        } catch (e) {
            return Y.warn("couldn't load guild versions", e), {};
        }
    }
    remove(e, t) {
        this.deleteWith(e), this.commit(t);
    }
    actions = {
        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
        CHANNEL_CREATE: (e, t) => this.handleChannelCreate(e, t),
        CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
        CHANNEL_UPDATES: (e, t) => this.handleChannelUpdates(e, t),
        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
        GUILD_EMOJIS_UPDATE: (e, t) => this.handleGuildEmojisUpdate(e, t),
        GUILD_ROLE_CREATE: (e, t) => this.handleGuildRoleChange(e, t),
        GUILD_ROLE_DELETE: (e, t) => this.handleGuildRoleDelete(e, t),
        GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleChange(e, t),
        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t),
    };
    handleBackgroundSync(e, t) {
        for (let n of e.guilds)
            "unavailable" !== n.data_mode && this.updateWith(n.id, [n]),
                null == F.A.getGuild(n.id) && this.remove(n.id, t);
        this.commit(t);
    }
    handleConnectionOpen(e, t) {
        this.reset();
        let n = [...e.guilds.map((e) => e.id), ...e.unavailableGuilds];
        for (let i of (H.A.guildVersionsTransaction(t).deleteAllExcept(n), e.guilds)) this.updateWith(i.id, [i]);
        this.commit(t);
    }
    handleGuildCreate(e, t) {
        let n = e.guild,
            i = e.guild.id;
        function r(e) {
            switch (e.op) {
                case "full_sync":
                    return e.items;
                case "update":
                    return e.writes;
                default:
                    (0, B.xb)(e);
            }
        }
        this.updateWith(i, [n]),
            this.updateWith(i, r(n.emojis)),
            this.updateWith(i, r(n.stickers)),
            this.updateWith(i, r(n.channels)),
            this.updateWith(i, r(n.roles)),
            this.commit(t);
    }
    handleGuildUpdate(e, t) {
        let n = e.guild,
            i = e.guild.id;
        this.updateWith(i, [n]),
            this.updateWith(i, n.emojis),
            this.updateWith(i, n.stickers),
            this.updateWith(i, n.roles),
            this.commit(t);
    }
    handleGuildDelete(e, t) {
        this.deleteWith(e.guild.id), this.commit(t);
    }
    handleGuildRoleChange(e, t) {
        this.updateWith(e.guildId, [e.role]), this.commit(t);
    }
    handleGuildRoleDelete(e, t) {
        this.updateWith(e.guildId, [{ version: e.version }]), this.commit(t);
    }
    handleGuildEmojisUpdate(e, t) {
        this.updateWith(e.guildId, e.emojis), this.commit(t);
    }
    handleGuildStickersUpdate(e, t) {
        this.updateWith(e.guildId, e.stickers), this.commit(t);
    }
    handleChannelCreate(e, t) {
        null != e.channel.guild_id && this.updateWith(e.channel.guild_id, [e.channel]), this.commit(t);
    }
    handleChannelUpdates(e, t) {
        for (let t of e.channels) null != t.guild_id && this.updateWith(t.guild_id, [t]);
        this.commit(t);
    }
    handleChannelDelete(e, t) {
        null != e.channel.guild_id && this.updateWith(e.channel.guild_id, [e.channel]), this.commit(t);
    }
    resetInMemoryState() {
        this.reset();
    }
    reset() {
        (this.committed = new Map()), (this.pending = new Map());
    }
    deleteWith(e) {
        this.pending.set(e, null);
    }
    updateWith(e, t) {
        if (0 === t.length) return;
        let n = Math.max(this.committed.get(e) ?? 0, this.pending.get(e) ?? 0),
            i = this.computeLatestVersion(n, t);
        i > n && this.pending.set(e, i);
    }
    computeLatestVersion(e, t) {
        let n = e;
        for (let e of t) n = Math.max(n, e.version ?? 0);
        return n;
    }
    commit(e) {
        if (this.pending.size > 0) {
            let t = H.A.guildVersionsTransaction(e);
            for (let [e, n] of this.pending)
                null != n
                    ? (t.put({ id: e, version: n }), this.committed.set(e, n))
                    : (t.delete(e), this.committed.delete(e));
            this.pending.clear();
        }
    }
}
let K = new W();
var j = n(314732),
    $ = n(214771),
    z = n(937724),
    q = n(831062),
    X = n(464578),
    Q = n(111162),
    J = n(353835),
    Z = n(927813),
    ee = n(38405),
    et = n(949189);
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var en = n(536194),
    ei = n(19575);
let er = null;
function es() {
    return (
        null == er &&
            (er = (function () {
                if (null == window.DiscordNative || void 0 === window.Uint8Array || void 0 === window.TextDecoder)
                    return !1;
                try {
                    let e = ei.Ay.requireModule("discord_zstd");
                    if (null == e) return !1;
                    return !0;
                } catch (e) {
                    if (e.message.includes("Cannot find"))
                        return ei.Ay.ensureModule("discord_zstd").catch((e) => {}), !1;
                    throw e;
                }
            })()),
        er
    );
}
let { NativeModules: ea } = {},
    eo = {},
    el = [];
class e_ {
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
el.push(
    class extends e_ {
        _decoder = null;
        _stream;
        static canUse() {
            return es();
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
                (this._stream = (function () {
                    if (!es()) return;
                    let { createContext: e } = ei.Ay.requireModule("discord_zstd");
                    return e();
                })());
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
    el.push(
        class extends e_ {
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
                    return void new E.A("GatewayCompressionHandler").error(
                        "flush end happened on closed compression adapter",
                    );
                if (e !== n.Z_OK) throw Error(`zlib error, ${e}, ${i.strm.msg}`);
                let { chunks: r } = i,
                    s = r.length;
                if (this._gatewayEncoding.wantsString()) t = s > 1 ? r.join("") : r[0];
                else if (s > 1) {
                    let e = 0;
                    for (let t = 0; t < s; t++) e += r[t].length;
                    let n = new Uint8Array(e),
                        i = 0;
                    for (let e = 0; e < s; e++) {
                        let t = r[e];
                        n.set(t, i), (i += t.length);
                    }
                    t = n;
                } else t = r[0];
                (r.length = 0), null != this._onDataReady && this._onDataReady(t);
            }
        },
    ),
    el.push(
        class extends e_ {
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
    el.push(
        class extends e_ {
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
                    es()
                        ? (0, C.isAndroid)()
                            ? eo?.enableZstdStreamSupport(this._socketId)
                            : ea.DCDCompressionManager.enableZstdStreamSupport(this._socketId, 0)
                        : (0, C.isAndroid)()
                          ? eo?.enableZlibStreamSupport(this._socketId)
                          : ea.DCDCompressionManager.enableZlibStreamSupport(this._socketId);
            }
            getAlgorithm() {
                return es() ? "zstd-stream" : "zlib-stream";
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
                        ((0, C.isAndroid)()
                            ? eo?.disableZlibStreamSupport(e)
                            : ea.DCDCompressionManager.disableZlibStreamSupport(e));
            }
        },
    );
class ed extends e_ {
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
function eu(e) {
    if (en.P.isDiscordGatewayPlaintextSet()) return new ed(e);
    for (var t of el) if (t.canUse()) return new t(e);
    return new ed(e);
}
el.push(ed);
let ec = BigInt(0),
    eE = BigInt(8),
    eh = BigInt(16),
    em = BigInt(32),
    ef = BigInt(64),
    eg = BigInt(128),
    eA = BigInt(256),
    eI = BigInt(65536),
    ep = BigInt(0x1000000),
    eT = BigInt(0x80000000),
    eS = BigInt(0x100000000),
    eN = BigInt(0x10000000000),
    eO = BigInt(0x1000000000000),
    eR = BigInt("72057594037927936"),
    eC = BigInt("18446744073709551615"),
    ey = BigInt("18446744073709551616"),
    eD = BigInt("340282366920938463463374607431768211455"),
    eL = BigInt("340282366920938463463374607431768211456"),
    ev = BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639935"),
    ew = BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639936");
function eP(e, t) {
    let n = e.indexOf(t?.toLowerCase() ?? "");
    return -1 === n ? void 0 : n + 1;
}
var eb = n(945810);
let ek = (0, eb.mj)({
    name: "2026-04-wetf-parser",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function eU(e) {
    return ek.getConfig({ location: e }).enabled;
}
let eM = new (class {
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
                ((this._stringEncoding = eP(["string", "binary"], e.encoding?.string) ?? 1),
                (this._keyEncoding = eP(["atom", "binary", "string"], e.encoding?.key) ?? 1),
                (this._safeIntEncoding = eP(["bigint", "float"], e.encoding?.safeInt) ?? 1),
                (this._safeBigIntEncoding = eP(["number", "bigint"], e.encoding?.safeBigInt) ?? 1),
                (this._nullEncoding = eP(["atom", "nil"], e.encoding?.null) ?? 1),
                (this._bufferEncoding = eP(["binary", "bitbinary", "string"], e.encoding?.buffer) ?? 1),
                (this._undefinedEncoding = eP(["atom", "null", "ignore"], e.encoding?.undefined) ?? 1),
                (this._infinityEncoding = eP(["atom", "null", "ignore"], e.encoding?.infinity) ?? 1),
                (this._nanEncoding = eP(["atom", "null", "ignore"], e.encoding?.nan) ?? 1),
                (this._arrayEncoding = eP(["list", "improperlist", "tuple"], e.encoding?.array) ?? 3),
                (this._useLegacyAtoms = !!e.useLegacyAtoms),
                (this._poolSize = null != e.poolSize && e.poolSize > 0 ? e.poolSize : 1048576),
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
        _loop(e) {
            let t = typeof e;
            switch (t) {
                case "undefined":
                    if (3 === this._undefinedEncoding) break;
                    this._expand(11),
                        (this._u[this._i] = this._useLegacyAtoms ? 115 : 119),
                        (this._u[this._i + 1] = 9),
                        (this._u[this._i + 2] = 117),
                        this._v.setUint32(this._i + 3, 0x6e646566),
                        this._v.setUint32(this._i + 7, 0x696e6564),
                        (this._i += 11);
                    break;
                case "boolean":
                    this._expand(7),
                        (this._u[this._i] = this._useLegacyAtoms ? 115 : 119),
                        !0 === e
                            ? ((this._u[this._i + 1] = 4), this._v.setUint32(this._i + 2, 0x74727565), (this._i += 6))
                            : ((this._u[this._i + 1] = 5),
                              (this._u[this._i + 2] = 102),
                              this._v.setUint32(this._i + 3, 0x616c7365),
                              (this._i += 7));
                    break;
                case "string":
                case "symbol": {
                    let n = "symbol" === t ? e.toString() : e;
                    if (2 === this._stringEncoding) {
                        this._expand(2 * n.length + 5), (this._u[this._i++] = 109);
                        let e = this._i;
                        this._i += 4;
                        let t = this._utf(n);
                        this._v.setUint32(e, t);
                    } else {
                        this._expand(2 * n.length + 3), (this._u[this._i++] = 107);
                        let e = this._i;
                        this._i += 2;
                        let t = this._utf(n);
                        (this._u[e] = t >> 8), (this._u[e + 1] = 255 & t);
                    }
                    break;
                }
                case "number":
                    if (Number.isFinite(e))
                        if ((this._expand(11), Number.isInteger(e))) {
                            let t = Math.abs(e),
                                n = e < 0;
                            if (e < 256 && !n) (this._u[this._i++] = 97), (this._u[this._i++] = e);
                            else if (t < 0x80000000)
                                (this._u[this._i] = 98), this._v.setInt32(this._i + 1, e), (this._i += 5);
                            else if (t <= Number.MAX_SAFE_INTEGER && 1 === this._safeIntEncoding)
                                if (((this._u[this._i] = 110), (this._u[this._i + 2] = +!!n), t < 0x100000000))
                                    this._v.setUint32(this._i + 3, t, !0), (this._u[this._i + 1] = 4), (this._i += 7);
                                else {
                                    let e = Math.floor(t / 0x100000000);
                                    this._v.setUint32(this._i + 3, t >>> 0, !0),
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
                                                (this._i += 10));
                                }
                            else (this._u[this._i++] = 70), this._v.setFloat64(this._i, e), (this._i += 8);
                        } else (this._u[this._i++] = 70), this._v.setFloat64(this._i, e), (this._i += 8);
                    else if (Number.isNaN(e)) {
                        if (3 === this._nanEncoding) break;
                        this._expand(4),
                            (this._u[this._i] = this._useLegacyAtoms ? 115 : 119),
                            (this._u[this._i + 1] = 110),
                            (this._u[this._i + 2] = 97),
                            (this._u[this._i + 3] = 110),
                            (this._i += 4);
                    } else {
                        if (3 === this._infinityEncoding) break;
                        this._expand(18),
                            (this._u[this._i] = this._useLegacyAtoms ? 115 : 119),
                            e < 0
                                ? this._v.setUint32(this._i + 1, 0x6e656761)
                                : this._v.setUint32(this._i + 1, 0x706f7369),
                            (this._u[this._i + 5] = 95),
                            this._v.setUint32(this._i + 6, 0x6976655f),
                            this._v.setUint32(this._i + 10, 0x696e6669),
                            this._v.setUint32(this._i + 14, 0x6e697479),
                            (this._i += 18);
                    }
                    break;
                case "bigint": {
                    if (e === ec) {
                        this._expand(3),
                            2 === this._safeBigIntEncoding
                                ? ((this._u[this._i++] = 110), (this._u[this._i++] = 0))
                                : (this._u[this._i++] = 97),
                            (this._u[this._i++] = 0);
                        break;
                    }
                    let t = e < ec,
                        n = t ? -e : e;
                    if (n < ey)
                        if ((this._expand(11), 1 === this._safeBigIntEncoding && n < eT))
                            n < eA && !t
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
                            (this._u[this._i] = 110),
                                (this._u[this._i + 2] = +!!t),
                                this._v.setBigUint64(this._i + 3, n, !0);
                            for (let e = 10; e > 3; e--)
                                if (0 !== this._u[this._i + e]) {
                                    (this._u[this._i + 1] = e - 2), (this._i += e + 1);
                                    break;
                                }
                        }
                    else if (n < eL) {
                        this._expand(19),
                            (this._u[this._i] = 110),
                            (this._u[this._i + 2] = +!!t),
                            this._v.setBigUint64(this._i + 3, n & eC, !0),
                            this._v.setBigUint64(this._i + 11, n >> ef, !0);
                        for (let e = 18; e > 10; e--)
                            if (0 !== this._u[this._i + e]) {
                                (this._u[this._i + 1] = e - 2), (this._i += e + 1);
                                break;
                            }
                    } else if (n < ew) {
                        this._expand(35), (this._u[this._i] = 110), (this._u[this._i + 2] = +!!t);
                        let e = n >> eg,
                            i = n & eD;
                        this._v.setBigUint64(this._i + 3, i & eC, !0),
                            this._v.setBigUint64(this._i + 11, i >> ef, !0),
                            this._v.setBigUint64(this._i + 19, e & eC, !0),
                            this._v.setBigUint64(this._i + 27, e >> ef, !0);
                        for (let e = 34; e > 18; e--)
                            if (0 !== this._u[this._i + e]) {
                                (this._u[this._i + 1] = e - 2), (this._i += e + 1);
                                break;
                            }
                    } else {
                        let e = n,
                            i = [];
                        for (; e > ev; ) {
                            let t = e & ev,
                                n = t >> eg,
                                r = t & eD;
                            i.push(r & eC, r >> ef, n & eC, n >> ef), (e >>= eA);
                        }
                        if (e > eD) {
                            let t = e >> eg,
                                n = e & eD;
                            i.push(n & eC, n >> ef, t & eC, t >> ef);
                        } else e > eC ? i.push(e & eC, e >> ef) : e > ec && i.push(e);
                        let r = i[i.length - 1],
                            s =
                                8 * i.length -
                                (r < eS
                                    ? r < eI
                                        ? r < eA
                                            ? 7
                                            : 6
                                        : r < ep
                                          ? 5
                                          : 4
                                    : r < eO
                                      ? r < eN
                                          ? 3
                                          : 2
                                      : +(r < eR));
                        this._expand(s + 6),
                            s < 256
                                ? ((this._u[this._i] = 110),
                                  (this._u[this._i + 1] = s),
                                  (this._u[this._i + 2] = +!!t),
                                  (this._i += 3))
                                : ((this._u[this._i] = 111),
                                  this._v.setUint32(this._i + 1, s),
                                  (this._u[this._i + 5] = +!!t),
                                  (this._i += 6));
                        for (let e = 0; e < i.length; e++) this._v.setBigUint64(this._i + 8 * e, i[e], !0);
                        this._i += s;
                    }
                    break;
                }
                case "object":
                    if (null === e)
                        this._expand(5),
                            2 === this._nullEncoding
                                ? (this._u[this._i++] = 106)
                                : ((this._u[this._i] = this._useLegacyAtoms ? 115 : 119),
                                  this._v.setUint32(this._i + 1, 0x36e696c),
                                  (this._i += 5));
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
                                    this._v.setUint32(n, t), (this._u[this._i++] = 106);
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
                            (this._u[this._i + n - 1] = e << (8 - t)), (this._u[this._i - 1] = t);
                        }
                        this._i += n;
                    } else {
                        this._expand(6), (this._u[this._i++] = 116);
                        let t = Object.keys(e),
                            n = t.length,
                            i = this._i,
                            r = this._r;
                        this._i += 4;
                        for (let i = 0; i < t.length; i++) {
                            let r = t[i],
                                s = e[r],
                                a = this._notIgnoreOrNull(s);
                            if (!0 !== a)
                                if (null === a) s = null;
                                else {
                                    n--;
                                    continue;
                                }
                            let o = r.length;
                            if (1 === this._keyEncoding && this._useLegacyAtoms) {
                                o < 256
                                    ? (this._expand(o + 2), (this._u[this._i++] = 115), (this._u[this._i++] = o))
                                    : (this._expand(o + 3),
                                      (this._u[this._i++] = 100),
                                      (this._u[this._i++] = o >> 8),
                                      (this._u[this._i++] = 255 & o));
                                for (let e = 0; e < o; e++) this._u[this._i++] = r.charCodeAt(e);
                            } else {
                                let e = 2 * o,
                                    t = 0;
                                this._expand(e + 5),
                                    2 === this._keyEncoding
                                        ? ((this._u[this._i] = 109), (t = 4))
                                        : 3 === this._keyEncoding
                                          ? ((this._u[this._i] = 107), (t = 2))
                                          : e < 256
                                            ? ((this._u[this._i] = 119), (t = 1))
                                            : ((this._u[this._i] = 118), (t = 2));
                                let n = this._i + 1;
                                this._i += t + 1;
                                let i = this._utf(r);
                                1 === t
                                    ? (this._u[n] = i)
                                    : 2 === t
                                      ? ((this._u[n] = i >> 8), (this._u[n + 1] = 255 & i))
                                      : this._v.setUint32(n, i);
                            }
                            this._loop(s);
                        }
                        let s = r !== this._r ? i - this._r : i;
                        this._v.setUint32(s, n);
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
            if (this._i + e >= this._poolSize) {
                let e;
                0 === this._o
                    ? ((this._poolSize *= 2), (e = this._u), (this._u = new Uint8Array(this._poolSize)))
                    : ((e = this._u.subarray(this._o, this._i)),
                      (this._u = new Uint8Array(this._poolSize)),
                      (this._i = e.length),
                      (this._r = this._o),
                      (this._o = 0)),
                    (this._v = new DataView(this._u.buffer)),
                    this._u.set(e);
            }
        }
        _utf(e) {
            let t = e.length;
            if (t < this._T) {
                let n = this._i;
                for (let n = 0; n < t; n++) {
                    let t = e.charCodeAt(n);
                    if (t < 128) this._u[this._i++] = t;
                    else if (t < 2048) (this._u[this._i++] = 192 + (t >> 6)), (this._u[this._i++] = 128 + (63 & t));
                    else if (t < 55296 || t > 57343)
                        (this._u[this._i++] = 224 + (t >> 12)),
                            (this._u[this._i++] = 128 + ((t >> 6) & 63)),
                            (this._u[this._i++] = 128 + (63 & t));
                    else {
                        let i = 65536 + ((1023 & t) << 10) + (1023 & e.charCodeAt(++n));
                        (this._u[this._i++] = 240 + (i >> 18)),
                            (this._u[this._i++] = 128 + ((i >> 12) & 63)),
                            (this._u[this._i++] = 128 + ((i >> 6) & 63)),
                            (this._u[this._i++] = 128 + (63 & i));
                    }
                }
                return this._i - n;
            }
            let n = this._encoder.encodeInto(e, this._u.subarray(this._i)).written ?? 0;
            return (this._i += n), n;
        }
    })({
        encoding: { string: "binary", key: "binary", array: "list", null: "atom", undefined: "null" },
        useLegacyAtoms: !0,
    }),
    eG = new (class {
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
            (this._nilDecoding = eP(["null", "array"], e.decoding?.nil) ?? 1),
                (this._stringDecoding =
                    eP(["utf8", "latin1", "buffer", "uint8array", "array"], e.decoding?.string) ?? 1),
                (this._binaryDecoding =
                    eP(["utf8", "latin1", "buffer", "uint8array", "array"], e.decoding?.binary) ?? 4),
                (this._bitbinaryDecoding =
                    eP(["utf8", "latin1", "buffer", "uint8array", "array"], e.decoding?.bitbinary) ?? 4),
                (this._atomRegistration = !!(e.atomRegistration ?? !0)),
                (this._d = new Uint8Array(0)),
                (this._v = new DataView(this._d.buffer, this._d.byteOffset, this._d.length)),
                (this._sd = new Uint8Array(12e3)),
                (this._sv = new DataView(this._sd.buffer, this._sd.byteOffset, this._sd.length)),
                (this._i = 0);
            const n = new TextDecoder("utf8");
            if (
                ((this._u = n.decode.bind(n)),
                (this._l = (e) => (null == t && (t = new TextDecoder("latin1")), t.decode(e))),
                (this._T = 32),
                "object" == typeof navigator)
            ) {
                const e = navigator.userAgent;
                e.includes("Firefox") ? (this._T = 4) : e.includes("Chrome") && (this._T = 200);
            }
            (this._atoms = e.atomTable ?? {
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
                (this._atomTableUtf = []);
            const i = new TextEncoder();
            for (const [e, t] of Object.entries(this._atoms)) {
                const n = i.encode(e);
                let r = (this._atomTableLatin[e.length] ??= []),
                    s = (this._atomTableUtf[n.length] ??= []);
                for (let n = 0; n < e.length; n++) {
                    const i = e.charCodeAt(n);
                    r = r[i] ??= n === e.length - 1 ? t : [];
                }
                for (let e = 0; e < n.length; e++) {
                    const i = n[e];
                    s = s[i] ??= e === n.length - 1 ? t : [];
                }
            }
        }
        unpack(e) {
            let t = +(131 === e[0]);
            return (
                (this._i = t),
                e.length <= this._sd.length
                    ? (this._sd.set(e), (this._d = this._sd), (this._v = this._sv))
                    : ((this._d = e), (this._v = new DataView(e.buffer, e.byteOffset, e.length))),
                this._loop()
            );
        }
        _loop() {
            let e = this._d[this._i++];
            switch (e) {
                case 70: {
                    let e = this._v.getFloat64(this._i);
                    return (this._i += 8), e;
                }
                case 97:
                    return this._d[this._i++];
                case 98: {
                    let e = this._v.getInt32(this._i);
                    return (this._i += 4), e;
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
                    let n = Array(t);
                    for (let e = 0; e < t; e++) n[e] = this._loop();
                    return 108 === e && (106 === this._d[this._i] ? this._i++ : n.push(this._loop())), n;
                }
                case 106:
                    return 2 === this._nilDecoding ? [] : null;
                case 107:
                case 109:
                case 77: {
                    let t, n;
                    if (107 === e) (t = (this._d[this._i++] << 8) + this._d[this._i++]), (n = this._stringDecoding);
                    else if (109 === e) (t = this._v.getUint32(this._i)), (n = this._binaryDecoding), (this._i += 4);
                    else {
                        (t = this._v.getUint32(this._i)), (n = this._bitbinaryDecoding);
                        let e = this._d[this._i + 4],
                            i = this._d[this._i + t - 1];
                        (this._d[this._i + t - 1] = i >> (8 - e)), (this._i += 5);
                    }
                    if (5 === n) {
                        let e = Array(t);
                        for (let n = 0; n < t; n++) e[n] = this._d[this._i + n];
                        return (this._i += t), e;
                    }
                    if (n >= 4) {
                        let e = this._d.subarray(this._i, this._i + t);
                        this._i += t;
                        let n = new Uint8Array(t);
                        return n.set(e), n;
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
                        return (this._i += 1), 0;
                    if (1 === t && 0 === this._d[this._i + 1]) return (this._i += 2), 0;
                    let i = this._d[this._i++];
                    if (t <= 4) {
                        let e = 0;
                        return (
                            (e =
                                1 === t
                                    ? this._d[this._i]
                                    : 2 === t
                                      ? (this._d[this._i + 1] << 8) + this._d[this._i]
                                      : 3 === t
                                        ? (this._d[this._i + 2] << 16) + (this._d[this._i + 1] << 8) + this._d[this._i]
                                        : this._v.getUint32(this._i, !0)),
                            (this._i += t),
                            1 === i ? -e : e
                        );
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
                        for (n = ec; e > 0; )
                            e >= 8
                                ? ((n <<= ef), (n += this._v.getBigUint64(this._i + (e -= 8), !0)))
                                : e >= 4
                                  ? ((n <<= em), (n += BigInt(this._v.getUint32(this._i + (e -= 4), !0))))
                                  : e >= 2
                                    ? ((n <<= eh), (n += BigInt(this._v.getUint16(this._i + (e -= 2), !0))))
                                    : ((n <<= eE), (n += BigInt(this._d[this._i])), e--);
                    }
                    return (this._i += t), 1 === i && (n = -n), n.toString();
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
                        if (n === e - 1) return (this._i += e), t[r];
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
                s = this._i;
            for (let n = 0; n < e; n++) {
                let a = this._d[s++];
                if (a in i) i = i[a];
                else if (n === e - 1) {
                    (r = t ? this._utf(e) : this._latin(e)), (i[a] = r);
                    break;
                } else i = i[a] = [];
            }
            return r;
        }
        _utf(e) {
            let t = "",
                n = this._i,
                i = this._d;
            if (e < this._T) {
                let r = n + e;
                for (; n < r; ) {
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
            return (this._i += e), t;
        }
        _latin(e) {
            let t = "",
                n = this._i,
                i = this._d;
            if (e < this._T) for (let r = n; r < n + e; r++) t += String.fromCharCode(i[r]);
            else t = this._l(i.subarray(n, n + e));
            return (this._i += e), t;
        }
    })({
        decoding: { binary: "utf8", string: "array", nil: "array" },
        atomTable: { nil: null, null: null, true: !0, false: !1 },
    }),
    ex = (function () {
        let e;
        if (C.isPlatformEmbedded) {
            try {
                e = ei.Ay.requireModule("discord_erlpack");
            } catch (t) {
                try {
                    e = ei.Ay.requireModule("erlpack");
                } catch (e) {}
            }
            if (null != e)
                return class {
                    _useWetf;
                    static canUse() {
                        return null != e;
                    }
                    pack(t) {
                        if ((null == this._useWetf && (this._useWetf = eU("EtfEncoding")), this._useWetf)) {
                            let e = eM.pack(t);
                            return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                        }
                        return e.pack(t).buffer;
                    }
                    unpack(t) {
                        if ((null == this._useWetf && (this._useWetf = eU("EtfEncoding")), this._useWetf)) {
                            let e = t instanceof Uint8Array ? t : new Uint8Array(t);
                            try {
                                return eG.unpack(e);
                            } catch (n) {
                                throw (
                                    (ee.A.captureException(n, { tags: { app_context: "WetfParser" } }),
                                    new E.A("GatewayEncodingErlpackEncoding").error("Error unpacking (wetf)", {
                                        erlpackUnpackError: n,
                                        erlpackDataPreview: null != t ? Array.from(e.slice(0, 32)) : null,
                                        erlpackDataLength: e.length,
                                    }),
                                    n)
                                );
                            }
                        }
                        t instanceof ArrayBuffer && (t = new Uint8Array(t));
                        try {
                            return e.unpack(t);
                        } catch (e) {
                            throw (
                                (new E.A("GatewayEncodingErlpackEncoding").error("Error unpacking", {
                                    erlpackUnpackError: e,
                                    erlpackDataPreview: null != t ? Array.from(t.slice(0, 32)) : null,
                                    erlpackDataLength: null != t ? t.length : null,
                                }),
                                e)
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
class eV {
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
let eF = void 0 !== ex ? ex : eV;
en.P.isDiscordGatewayPlaintextSet() && (eF = eV);
let eB = eF;
n(423034);
var eH = n(287809),
    eY = n(652215);
function eW(e) {
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
                          (i += `
${n}${t[r]}: ${t[r + 1].micros / 1e3}`),
                              (i += e(t[r + 1].calls, n + "|  "));
                      return i;
                  })(JSON.parse(t), ""));
        if (null != n) return n;
    } catch (e) {}
    return null != e._trace ? e._trace.join(" -> ") : "???";
}
function eK(e) {
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
class ej {
    socket;
    static batchers = [];
    static flush(e, t) {
        for (let n of ej.batchers) null != n.action && (null == e || n.shouldFlush(e, t)) && n.flush();
    }
    action = null;
    add;
    shouldFlush;
    constructor(e, t, n) {
        (this.socket = e),
            (this.shouldFlush = n),
            (this.add = (e) => {
                this.action = t(this.action, e);
            }),
            ej.batchers.push(this);
    }
    flush() {
        let { action: e } = this;
        (this.action = null),
            null != e &&
                u.h.dispatch(e).catch((t) => this.socket.resetSocketAndClearCacheOnError({ error: t, action: e.type }));
    }
}
var e$ = n(365971),
    ez =
        (((r = {}).LONGER_DISPATCH = "longer_dispatch"),
        (r.EXCEEDED_MAX_CONSECUTIVE_FLUSHES = "exceeded_max_consecutive_flushes"),
        (r.FIRED_DUE_TO_MAX_TIMEOUT = "fired_due_to_max_timeout"),
        (r.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED = "skip_idle_callback_due_to_backgrounded"),
        r),
    eq =
        (((s = {}).TIME_TO_FIRE_IDLE_CALLBACK = "time_to_fire_idle_callback"),
        (s.TIME_TO_QUEUE_EMPTY = "time_to_flush_all_work"),
        (s.TIME_OVER_DEADLINE = "time_over_deadline"),
        (s.DEADLINE_INITIAL_TIME_REMAINING = "initial_time_of_deadline"),
        s),
    eX =
        (((a = {}).COUNT_DISPATCHES_LEFT_AFTER_YIELD = "count_dispatches_left_after_yield"),
        (a.COUNT_FLUSH_BEFORE_QUEUE_EMPTY = "count_flush_before_queue_empty"),
        (a.COUNT_INITIAL_DISPATCHS_LENGTH = "count_initial_dispatches_length"),
        a);
let eQ = Object.freeze({
        time_to_fire_idle_callback: null,
        time_to_flush_all_work: null,
        time_over_deadline: null,
        initial_time_of_deadline: null,
    }),
    eJ = Object.freeze({
        time_to_fire_idle_callback: [0, 0],
        time_to_flush_all_work: [0, 0],
        time_over_deadline: [0, 0],
        initial_time_of_deadline: [0, 0],
    }),
    eZ = Object.freeze({
        count_flush_before_queue_empty: [0, 0],
        count_dispatches_left_after_yield: [0, 0],
        count_initial_dispatches_length: [0, 0],
    }),
    e0 = Object.freeze({
        longer_dispatch: 0,
        exceeded_max_consecutive_flushes: 0,
        fired_due_to_max_timeout: 0,
        skip_idle_callback_due_to_backgrounded: 0,
    });
class e1 {
    _timeTracking = (0, o.cloneDeep)(eQ);
    _timingStats = (0, o.cloneDeep)(eJ);
    _measurements = (0, o.cloneDeep)(eZ);
    _eventCounts = (0, o.cloneDeep)(e0);
    _enabled = !1;
    reset() {
        (this._timeTracking = (0, o.cloneDeep)(eQ)),
            (this._timingStats = (0, o.cloneDeep)(eJ)),
            (this._measurements = (0, o.cloneDeep)(eZ)),
            (this._eventCounts = (0, o.cloneDeep)(e0));
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
        this._storeTimeValue(e, n), (this._timeTracking[e] = null);
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
                return (e[`avg_${n}`] = `${i.toFixed(2)}ms`), e;
            }, {}),
            t = Object.entries(this._measurements).reduce((e, t) => {
                let [n, [i]] = t;
                return (e[`avg_${n}`] = `${i.toFixed(2)}`), e;
            }, {});
        return {
            ...Object.entries(this._eventCounts).reduce((e, t) => {
                let [n, i] = t;
                return (e[`count_${n}`] = `${i}`), e;
            }, {}),
            ...e,
            ...t,
        };
    }
}
let e2 = (1e3 / 60) * 3,
    e3 = (1e3 / 60) * 3,
    e6 = 1e3 / 60 / 8,
    e4 = (1e3 / 60) * 12;
class e7 {
    _browserDeadlineMs;
    _deadlineMs;
    _startMs;
    _firedDueToMaxTimeout;
    constructor(e, t = !1) {
        (this._deadlineMs = Math.max(e6, e)),
            (this._browserDeadlineMs = e),
            (this._firedDueToMaxTimeout = t),
            (this._startMs = performance.now());
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
            isDeadlineNotIdeal: this._browserDeadlineMs < e6,
            deadlineMs: this._deadlineMs.toFixed(2),
            timeSinceStartMs: (performance.now() - this._startMs).toFixed(2),
        };
    }
}
let e5 = new E.A("DispatcherWorkScheduler");
class e8 {
    _flushTimeoutHandler = null;
    _flushIdleHandler = null;
    _nextDispatchTimeout = e2;
    _workCallbackFn = null;
    _consecutiveFlushesBeforeQueueEmpty = 0;
    _isBackgrounded = !1;
    _enableRequestIdleCallback = !0;
    _criticalWorkScheduled = !1;
    telemetry = new e1();
    _logger = e5;
    _trackAppBackgrounded(e) {
        this._isBackgrounded === e ||
            ((this._isBackgrounded = e),
            this._isBackgrounded &&
                this.hasWorkScheduled &&
                (this.telemetry.track(ez.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED), this._processWorkCallback()));
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
            e5.log("Unable to fully flush work queue after max retries, skipping future deadline."),
                this._workCallbackFn(),
                this.clearWorkTimeout(),
                this.telemetry.measure(eX.COUNT_FLUSH_BEFORE_QUEUE_EMPTY, this._consecutiveFlushesBeforeQueueEmpty),
                this.telemetry.track(ez.EXCEEDED_MAX_CONSECUTIVE_FLUSHES),
                (this._consecutiveFlushesBeforeQueueEmpty = 0),
                (this._nextDispatchTimeout = e4);
            return;
        }
        let t = performance.now(),
            n = this._workCallbackFn(e),
            i = performance.now();
        this.clearWorkTimeout(),
            i - t > e3 ? (this._nextDispatchTimeout = e4) : (this._nextDispatchTimeout = e2),
            n
                ? (this._consecutiveFlushesBeforeQueueEmpty > 0 &&
                      this.telemetry.measure(
                          eX.COUNT_FLUSH_BEFORE_QUEUE_EMPTY,
                          parseInt(`${this._consecutiveFlushesBeforeQueueEmpty}`),
                      ),
                  (this._consecutiveFlushesBeforeQueueEmpty = 0),
                  (this._criticalWorkScheduled = !1))
                : (this._consecutiveFlushesBeforeQueueEmpty += 1);
    }
    markCriticalWorkScheduled() {
        (this._criticalWorkScheduled = !0),
            null != this._flushIdleHandler && (this._clearIdleCallback(), this._processWorkCallback());
    }
    toggleRequestIdleCallback(e) {
        (this._enableRequestIdleCallback = e),
            !e && this.hasWorkScheduled && (this._clearIdleCallback(), this._processWorkCallback());
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
        null != this._flushTimeoutHandler &&
            (clearTimeout(this._flushTimeoutHandler), (this._flushTimeoutHandler = null)),
            this._clearIdleCallback(),
            (this._nextDispatchTimeout = e2),
            (this._workCallbackFn = null);
    }
    requestWorkTimeout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (((this._workCallbackFn = e), !this.hasWorkScheduled)) {
            if (
                (this.telemetry.time(eq.TIME_TO_QUEUE_EMPTY),
                this._nextDispatchTimeout === e4 && this.telemetry.track(ez.LONGER_DISPATCH),
                t)
            )
                return void this._queueIdleCallback();
            this._flushTimeoutHandler = setTimeout(() => {
                if ((b()(null != this._workCallbackFn, "Work callback should be set"), this._isBackgrounded))
                    return this.telemetry.track(ez.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED), this._processWorkCallback();
                this._queueIdleCallback();
            }, this._nextDispatchTimeout);
        }
    }
}
let e9 =
        window.requestIdleCallback ??
        ((e) => {
            let t = Date.now();
            return setTimeout(() => {
                e({ didTimeout: !1, timeRemaining: () => Math.max(0, 50 - (Date.now() - t)) });
            }, 1);
        }),
    te = window.cancelIdleCallback ?? clearTimeout;
function tt(e) {
    return null == e ? new e7(e6, !0) : new e7(e.timeRemaining(), e.didTimeout);
}
class tn extends e8 {
    _flushIdleMaxTimeoutHandler = null;
    constructor() {
        super(),
            u.h.subscribe("WINDOW_VISIBILITY_CHANGE", (e) => {
                let { visible: t, windowId: n } = e;
                n === (0, e$.Xg)() && this._trackAppBackgrounded(!t);
            });
    }
    _queueIdleCallback() {
        if (!this._enableRequestIdleCallback || this._criticalWorkScheduled) return this._processWorkCallback();
        this.telemetry.time(eq.TIME_TO_FIRE_IDLE_CALLBACK),
            this._scheduleRequestIdleCallback(
                (e) => {
                    if (e?.didTimeout) {
                        this.telemetry.track(ez.FIRED_DUE_TO_MAX_TIMEOUT),
                            this.telemetry.clearTime(eq.TIME_TO_FIRE_IDLE_CALLBACK),
                            this._processWorkCallback();
                        return;
                    }
                    if ((this.telemetry.timeEnd(eq.TIME_TO_FIRE_IDLE_CALLBACK), (e?.timeRemaining() ?? e6) < e6))
                        this.telemetry.time(eq.TIME_TO_FIRE_IDLE_CALLBACK),
                            this._scheduleRequestIdleCallback(
                                (e) => {
                                    this.telemetry.timeEnd(eq.TIME_TO_FIRE_IDLE_CALLBACK);
                                    let t = tt(e),
                                        n = t?.timeRemaining();
                                    null != n && this.telemetry.timeTrack(eq.DEADLINE_INITIAL_TIME_REMAINING, n),
                                        this._processWorkCallback(t);
                                },
                                { timeout: 200 },
                            );
                    else {
                        this.telemetry.timeEnd(eq.TIME_TO_FIRE_IDLE_CALLBACK);
                        let t = tt(e),
                            n = t?.timeRemaining();
                        null != n && this.telemetry.timeTrack(eq.DEADLINE_INITIAL_TIME_REMAINING, n),
                            this._processWorkCallback(t);
                    }
                },
                { timeout: 1e3 },
            );
    }
    _scheduleRequestIdleCallback(e, t) {
        (this._flushIdleHandler = e9((t) => {
            this._clearIdleCallback(), e(t);
        })),
            t?.timeout != null && this._scheduleMaxIdleCallback(t.timeout);
    }
    _scheduleMaxIdleCallback(e) {
        null != this._flushIdleMaxTimeoutHandler && clearTimeout(this._flushIdleMaxTimeoutHandler),
            (this._flushIdleMaxTimeoutHandler = setTimeout(() => {
                this._clearIdleCallback(), this._processWorkCallback();
            }, e));
    }
    _clearIdleCallback() {
        null != this._flushIdleHandler && (te(this._flushIdleHandler), (this._flushIdleHandler = null)),
            null != this._flushIdleMaxTimeoutHandler &&
                (clearTimeout(this._flushIdleMaxTimeoutHandler), (this._flushIdleMaxTimeoutHandler = null));
    }
}
let ti = new E.A("GatewaySocket"),
    tr = new Set(["INITIAL_GUILD", "READY"]),
    ts = new Set(["READY", "INITIAL_GUILD"]),
    ta = new Set(["READY", "READY_SUPPLEMENTAL", "RESUMED"]),
    to = new Set([
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
    tl = {};
class t_ {
    socket;
    scheduler = new tn();
    queue = [];
    paused = !0;
    resumeAnalytics = eK();
    getDispatchHandler = null;
    constructor(e) {
        this.socket = e;
    }
    hasStuffToDispatchNow() {
        return this.queue.length > 0 && 2 === this.queue[0].status;
    }
    processFirstQueuedDispatch(e) {
        let t = [];
        for (; this.queue.length > 0 && e.has(this.queue[0].type) && 2 === this.queue[0].status; )
            t.push(this.queue.shift());
        this.dispatchMultiple(t);
    }
    unpauseDispatchQueue() {
        for (let e of ((this.paused = !1), this.queue)) this.maybePreload(e);
        this.flush();
    }
    receiveDispatch(e, t, n) {
        if (null == this.getDispatchHandler) throw Error("getDispatchHandler needs to be passed in first!");
        let i = { data: e, type: t, compressionAnalytics: n, status: 0, preloadPromise: null, preloadedData: null };
        this.queue.push(i), this.maybePreload(i) || this.scheduleFlush(t);
    }
    maybePreload(e) {
        if (this.paused && !tr.has(e.type)) return !1;
        if (0 === e.status) {
            let t = this.getDispatchHandler(e.type)?.preload(e.data);
            if (((e.status = null == t ? 2 : 1), (e.preloadPromise = t), null != t))
                return (
                    t
                        .then((t) => {
                            (e.preloadedData = t), (e.status = 2), this.scheduleFlush(e.type);
                        })
                        .catch((t) => this.socket.resetSocketOnDispatchError({ error: t, action: e.type })),
                    !0
                );
        }
        return !1;
    }
    scheduleFlush(e) {
        !this.paused &&
            (ts.has(e)
                ? (this.scheduler.clearWorkTimeout(), this.flush())
                : this.scheduler.hasWorkScheduled || this.scheduler.requestWorkTimeout(this.flush),
            to.has(e) && this.scheduler.markCriticalWorkScheduled());
    }
    flush = (e) => {
        if (this.paused) return !0;
        let t = performance.now(),
            n = 0;
        for (; n < this.queue.length && 2 === this.queue[n].status; n++);
        if (0 === n) return !0;
        let i = this.queue.splice(0, n),
            r = this.dispatchMultiple(i, e);
        r && this.scheduler.telemetry.timeEnd(eq.TIME_TO_QUEUE_EMPTY);
        let s = performance.now() - t;
        return s > e3 && !r && ti.log(`Dispatched ${i.length} messages in ${s}ms`), r;
    };
    getDispatchTimings() {
        return tl;
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
        this.scheduler.telemetry.measure(eX.COUNT_INITIAL_DISPATCHS_LENGTH, e.length);
        try {
            let r = [];
            this.socket.connectionState === y.RESUMING && _.Ay.Emitter.pause(150);
            let s = 0;
            if (
                (_.Ay.Emitter.batched(() => {
                    for (let a = 0; a < e.length; a++) {
                        let o = e[a];
                        (n = o.type), (i = i || ta.has(o.type));
                        let l = performance.now();
                        if (
                            (this.dispatchOne(o),
                            (s = performance.now() - l),
                            !(function (e, t) {
                                let [n, i] = tl[e] ?? [0, 0];
                                tl[e] = [(n * i + t) / (i + 1), i + 1];
                            })(o.type, s),
                            (function (e, t, n) {
                                if (null == n) return !1;
                                let i = e[t],
                                    r = e.length - 1,
                                    s = t < r ? e[t + 1] : null,
                                    a = n?.timeRemaining() ?? 0,
                                    o = null != n && a <= 0,
                                    l = i.type === s?.type;
                                return !!o && !l && t !== r;
                            })(e, a, t))
                        ) {
                            (r = e.slice(a + 1)),
                                null != t &&
                                    0 >= t.timeRemaining() &&
                                    this.scheduler.telemetry.timeTrack(eq.TIME_OVER_DEADLINE, t.timeSinceExpiration);
                            break;
                        }
                    }
                    ej.flush();
                }),
                i && _.Ay.Emitter.resume(),
                r.length > 0)
            )
                return (
                    this.scheduler.telemetry.measure(eX.COUNT_DISPATCHES_LEFT_AFTER_YIELD, r.length),
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
        let { data: i, type: r, compressionAnalytics: s, preloadedData: a } = e,
            o = performance.now();
        if (this.socket.connectionState === y.RESUMING) {
            let e = o - this.resumeAnalytics.lastUpdateTime;
            0 === this.resumeAnalytics.numEvents
                ? (this.resumeAnalytics.initialWaitTime = e)
                : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e),
                (this.resumeAnalytics.totalWaitTime += e),
                (this.resumeAnalytics.lastUpdateTime = o),
                (this.resumeAnalytics.numEvents += 1);
        }
        if ((ej.flush(r, i), "READY" === r)) {
            let e,
                n,
                l = (function (e) {
                    let t = Date.now(),
                        {
                            guilds: n,
                            merged_presences: i,
                            merged_members: r,
                            read_state: s,
                            private_channels: a,
                            user_guild_settings: o,
                            user_settings: l,
                            user_settings_proto: _,
                            experiments: d,
                            guild_experiments: u,
                            relationships: c,
                            users: E,
                            ...h
                        } = e,
                        m = [],
                        f = [],
                        g = [],
                        A = [],
                        I = [],
                        p = [],
                        T = [],
                        S = [];
                    return (
                        n.forEach((e) => {
                            if (e.unavailable) return;
                            let { features: t, ...n } = e.properties ?? {},
                                { threads: i, guild_scheduled_events: r, ...s } = e;
                            m.push("partial" === e.data_mode ? e.partial_updates.channels : e.channels),
                                f.push("partial" === e.data_mode ? e.partial_updates.roles : e.roles),
                                g.push("partial" === e.data_mode ? e.partial_updates.emojis : e.emojis),
                                A.push(i),
                                I.push("partial" === e.data_mode ? e.partial_updates.stickers : e.stickers),
                                p.push(t),
                                T.push(r),
                                S.push(s, n);
                        }),
                        {
                            presences_size: JSON.stringify(i?.friends ?? []).length,
                            users_size: JSON.stringify(E).length,
                            read_states_size: JSON.stringify(s).length,
                            private_channels_size: JSON.stringify(a).length,
                            user_settings_size: JSON.stringify(l ?? "").length + (_ ?? "").length,
                            experiments_size: JSON.stringify(d ?? []).length + JSON.stringify(u ?? []).length,
                            user_guild_settings_size: JSON.stringify(o).length,
                            relationships_size: JSON.stringify(c).length,
                            remaining_data_size: JSON.stringify(h ?? {}).length,
                            guild_channels_size: JSON.stringify(m).length,
                            guild_members_size: JSON.stringify(r ?? []).length,
                            guild_presences_size: JSON.stringify(i?.guilds ?? []).length,
                            guild_roles_size: JSON.stringify(f).length,
                            guild_emojis_size: JSON.stringify(g).length,
                            guild_threads_size: JSON.stringify(A).length,
                            guild_stickers_size: JSON.stringify(I).length,
                            guild_events_size: JSON.stringify(T).length,
                            guild_features_size: JSON.stringify(p).length,
                            guild_remaining_data_size: JSON.stringify(S).length,
                            size_metrics_duration_ms: Date.now() - t,
                        }
                    );
                })(i);
            this.getDispatchHandler(r)?.dispatch(i, r, a),
                (t = this.socket),
                (e = (function (e) {
                    let { _trace: t } = e,
                        n = {};
                    try {
                        let e = JSON.parse(t);
                        null != e[0] &&
                            "" !== e[0] &&
                            e[0].startsWith("gateway-") &&
                            (n.identify_total_server_duration_ms = Math.floor(e[1].micros / 1e3)),
                            (function e(t, n) {
                                if (null != t && t.length > 0)
                                    for (let i = 0; i < t.length; i += 2) {
                                        let r = t[i],
                                            s = t[i + 1];
                                        n(r, s.micros), e(s.calls, n);
                                    }
                            })(e, (e, t) => {
                                "start_session" === e
                                    ? (n.identify_api_duration_ms = Math.floor(t / 1e3))
                                    : "guilds_connect" === e && (n.identify_guilds_duration_ms = Math.floor(t / 1e3));
                            });
                    } catch (e) {}
                    return n;
                })(i)),
                null != s && U.A.addDetail("payload_size(kb)", Math.round(s.uncompressed_byte_size / 1024)),
                U.A.addDetail("server_time(ms)", e.identify_total_server_duration_ms ?? 0),
                (n = {
                    ...s,
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
                                        i++, e.type === eY.rbe.GUILD_CATEGORY && n++;
                                    });
                            }),
                            { num_guilds: t.length, num_guild_channels: i, num_guild_category_channels: n }
                        );
                    })(i),
                    ...l,
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
                X.A.attachReadyPayloadProperties(n),
                v.default.track(eY.HAw.READY_PAYLOAD_RECEIVED, n, { logEventProperties: !0 });
        } else
            "RESUMED" === r
                ? (this.getDispatchHandler(r)?.dispatch(i, r, a),
                  (n = this.resumeAnalytics),
                  (!eH.default.getCurrentUser()?.isStaff() && 0.5 > Math.random()) ||
                      v.default.track(
                          eY.HAw.CONNECTION_RESUMED,
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
                  (this.resumeAnalytics = eK()))
                : this.getDispatchHandler(r)?.dispatch(i, r, a);
        this.socket.connectionState === y.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - o);
    }
    clear() {
        (this.paused = !1), (this.queue.length = 0);
    }
}
n(938796);
var td = n(143236),
    tu = n(935208),
    tc = n(353198);
class tE extends td.EventEmitter {
    presenceUpdate(e, t, n, i) {
        this.send(tc.p.PRESENCE_UPDATE, { status: e, since: t, activities: n, afk: i });
    }
    voiceStateUpdate(e) {
        let {
                guildId: t = null,
                channelId: n = null,
                selfMute: i = !1,
                selfDeaf: r = !1,
                selfVideo: s = !1,
                preferredRegion: a = null,
                preferredRegions: o = null,
                videoStreamParameters: l = null,
                flags: _ = 0,
            } = e,
            d = { guild_id: t, channel_id: n, self_mute: i, self_deaf: r, self_video: s, flags: _ };
        null != n && S.A.shouldIncludePreferredRegion() && ((d.preferred_region = a), (d.preferred_regions = o)),
            null != l && (d.tracks = l?.map((e) => ({ type: e.type, rid: e.rid, quality: e.quality }))),
            this.send(tc.p.VOICE_STATE_UPDATE, d);
    }
    voiceServerPing() {
        this.send(tc.p.VOICE_SERVER_PING, null);
    }
    requestGuildMembers(e, t) {
        let { query: n, limit: i, userIds: r, presences: s } = t;
        this.send(tc.p.REQUEST_GUILD_MEMBERS, { guild_id: e, query: n, limit: i, user_ids: r, presences: s });
    }
    searchRecentMembers(e, t) {
        let { query: n, continuationToken: i } = t;
        this.send(tc.p.SEARCH_RECENT_MEMBERS, { guild_id: e, query: n ?? "", continuation_token: i ?? null });
    }
    updateGuildSubscriptions(e) {
        let t = {},
            n = 0;
        tu.default.keys(e).forEach((i) => {
            let r = e[i],
                s = JSON.stringify([i, r]).length;
            n + s > 15360 && (this.send(tc.p.GUILD_SUBSCRIPTIONS_BULK, { subscriptions: t }), (t = {}), (n = 0)),
                (t[i] = r),
                (n += s);
        }),
            n > 0 && this.send(tc.p.GUILD_SUBSCRIPTIONS_BULK, { subscriptions: t });
    }
    callConnect(e) {
        this.send(tc.p.CALL_CONNECT, { channel_id: e });
    }
    streamCreate(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.send(tc.p.STREAM_CREATE, { type: e, guild_id: t, channel_id: n, preferred_region: i });
    }
    streamWatch(e) {
        this.send(tc.p.STREAM_WATCH, { stream_key: e });
    }
    streamPing(e) {
        this.send(tc.p.STREAM_PING, { stream_key: e });
    }
    streamDelete(e) {
        this.send(tc.p.STREAM_DELETE, { stream_key: e });
    }
    streamSetPaused(e, t) {
        this.send(tc.p.STREAM_SET_PAUSED, { stream_key: e, paused: t });
    }
    requestForumUnreads(e, t, n) {
        this.send(tc.p.REQUEST_FORUM_UNREADS, {
            guild_id: e,
            channel_id: t,
            threads: n.map((e) => ({ thread_id: e.threadId, ack_message_id: e.ackMessageId })),
        });
    }
    requestSoundboardSounds(e) {
        this.send(tc.p.REQUEST_SOUNDBOARD_SOUNDS, { guild_ids: e });
    }
    requestLastMessages(e, t) {
        this.send(tc.p.REQUEST_LAST_MESSAGES, { guild_id: e, channel_ids: t });
    }
    getDeletedEntityIdsNotMatchingHash(e, t, n, i, r) {
        this.send(tc.p.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH, {
            guild_id: e,
            channel_ids_hash: t,
            role_ids_hash: n,
            emoji_ids_hash: i,
            sticker_ids_hash: r,
        });
    }
    triggerGuildChannelResync(e, t) {
        this.send(tc.p.GUILD_CHANNELS_RESYNC, { guild_id: e, obfuscated_channel_ids: t });
    }
    requestChannelInfo(e, t) {
        this.send(tc.p.REQUEST_CHANNEL_INFO, { guild_id: e, fields: t });
    }
    requestChannelMemberCount(e, t) {
        this.send(tc.p.REQUEST_CHANNEL_MEMBER_COUNT, { guild_id: e, channel_id: t });
    }
    remoteCommand(e, t) {
        this.send(tc.p.REMOTE_COMMAND, { target_session_id: e, payload: t });
    }
}
let th = !1;
var tm = n(981133),
    tf = n(751124);
let tg = new E.A("GatewaySocket"),
    tA = new eB();
function tI() {}
let tp = 30 * Z.A.Millis.SECOND,
    tT = 3 * Z.A.Millis.MINUTE,
    tS = +Z.A.Millis.MINUTE;
function tN(e) {
    return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength;
}
let tO = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
class tR extends tE {
    gatewayBackoff;
    handleIdentify;
    dispatchExceptionBackoff = new M.A(1e3, tS);
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
    dispatcher;
    heartbeatQOSState = { currentPayload: null, upcomingState: null };
    get connectionState() {
        return this.connectionState_;
    }
    set connectionState(e) {
        tg.verbose(`Setting connection state to ${e}`), (this.connectionState_ = e);
    }
    constructor() {
        super(),
            (this.dispatcher = new t_(this)),
            (this.gatewayBackoff = new M.A(1e3, 6e4)),
            (this.connectionState_ = y.CLOSED),
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
            (this.identifyStartTime = 0),
            (this.nextReconnectIsImmediate = !1),
            (this.compressionHandler = eu(tA)),
            (this.hasConnectedOnce = !1),
            (this.isFastConnect = !1),
            (this.identifyCount = 0),
            (this.iosGoingAwayEventCount = 0);
    }
    addAnalytics(e) {
        this.analytics = { ...this.analytics, ...e };
    }
    setResumeUrl(e) {
        null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)),
            null !== e && tg.verbose(`Updating resume url to ${e}`),
            (this.resumeUrl = e);
    }
    handleActiveStateChange(e) {
        let t = !this.heartbeatQOSState.currentPayload?.active;
        null == this.heartbeatQOSState.currentPayload && (this.heartbeatQOSState.currentPayload = e);
        let n = this.heartbeatQOSState.currentPayload;
        e.active &&
            ((n.active = !0),
            (n.reasons = [...new Set([...n.reasons, ...e.reasons])].sort()),
            t && this.isSessionEstablished() && this._sendHeartbeat()),
            (this.heartbeatQOSState.upcomingState = e);
    }
    handleUpdateTimeSpentSessionId(e, t, n) {
        this.connectionState_ === y.SESSION_ESTABLISHED &&
            (this.send(tc.p.UPDATE_TIME_SPENT_SESSION_ID, {
                initialization_timestamp: e,
                session_id: t,
                client_launch_id: n,
            }),
            this._sendHeartbeat());
    }
    _connect() {
        var e, t, n;
        let i, r;
        if (!this.willReconnect()) return void tg.verbose("Skipping _connect because willReconnect is false");
        if (th) return void tg.info("Skipping _connect because socket is paused");
        (this.connectionState = y.CONNECTING), (this.nextReconnectIsImmediate = !1);
        let s = this.compressionHandler.getAlgorithm(),
            a = tA.getName(),
            o = this._getGatewayUrl(),
            l = window.GLOBAL_ENV.API_VERSION;
        U.A.mark("\uD83C\uDF10", "Socket._connect"),
            tg.info(`[CONNECT] ${o}, encoding: ${a}, version: ${l}, compression: ${s ?? "none"}`),
            null !== this.webSocket &&
                (tg.error("_connect called with already existing websocket"), this._cleanup((e) => e.close(4e3))),
            (this.connectionStartTime = Date.now()),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this._handleClose(!1, 0, `The connection timed out after ${e} ms - did not receive OP_HELLO in time.`),
                    this.setResumeUrl(null);
            }, tp));
        let _ = new URL(o);
        _.searchParams.append("encoding", a),
            _.searchParams.append("v", l.toString()),
            null != s && _.searchParams.append("compress", s),
            !(function (e) {
                let t,
                    { gatewayURL: n, newCallback: i, onOpen: r, onMessage: s, onError: a, onClose: o } = e;
                tg.enableNativeLogger(!0);
                let l = window._ws,
                    _ = !1,
                    d = !1,
                    u = null,
                    c = null;
                if (((window._ws = null), null != l))
                    if (((t = l.ws), l.state.gateway !== n))
                        tg.verbose(`[FAST CONNECT] gatewayURL mismatch: ${l.state.gateway} !== ${n}`),
                            t.close(1e3),
                            (t = null);
                    else {
                        let e = { ...l.state };
                        null != e.messages &&
                            (e.messages = e.messages.map((e) =>
                                null != e.data && "string" == typeof e.data
                                    ? { ...e, data: e.data.substring(0, 100) }
                                    : e,
                            )),
                            tg.log("[FAST CONNECT] successfully took over websocket, state:", {
                                ...e,
                                messages: e.messages?.length,
                            }),
                            (_ = l.state.open),
                            (d = l.state.identify),
                            (u = l.state.messages),
                            (c = l.state.clientState);
                    }
                null == t && ((t = (0, tf.A)(n)).binaryType = "arraybuffer"),
                    i(t),
                    _ && r(d, c),
                    null != u && u.forEach(s),
                    (t.onopen = () => r(d, c)),
                    (t.onmessage = s),
                    (t.onclose = o),
                    (t.onerror = a);
            })({
                gatewayURL: _.toString(),
                newCallback: (e) => {
                    (this.webSocket = e), this.compressionHandler.bindWebSocket(e);
                },
                onOpen: (e) => {
                    U.A.mark(`🌐`, `GatewaySocket.onOpen ${e}`);
                    let t = Date.now() - this.connectionStartTime;
                    tg.info(`[CONNECTED] ${_.toString()} in ${t} ms`),
                        (this.isFastConnect = e),
                        e ? this._doFastConnectIdentify() : this._doResumeOrIdentify();
                },
                onMessage:
                    ((e = this.compressionHandler),
                    (t = this._handleClose.bind(this)),
                    (n = (e, t) => {
                        let n = Date.now(),
                            { op: i, s: r, t: s, d: a } = tA.unpack(e);
                        if (
                            (i !== tc.p.DISPATCH && U.A.mark(`🌐`, `GatewaySocket.onMessage ${i} ${tc.p[i]}`),
                            Q.default.isLoggingGatewayEvents)
                        ) {
                            let e = [i];
                            i === tc.p.DISPATCH && e.push(s), e.push(a), tg.verboseDangerously("<~", ...e);
                        }
                        let o = Date.now() - n;
                        switch (
                            ("READY" === s
                                ? X.A.parseReady.set(n, o)
                                : "READY_SUPPLEMENTAL" === s
                                  ? X.A.parseReadySupplemental.set(n, o)
                                  : o > 10 && U.A.mark("\uD83C\uDF10", "Parse " + s, o),
                            null != r && (this.seq = r),
                            i)
                        ) {
                            case tc.p.HELLO:
                                this._clearHelloTimeout(), this._handleHello(a);
                                break;
                            case tc.p.RECONNECT:
                                this._handleReconnect();
                                break;
                            case tc.p.INVALID_SESSION:
                                this._handleInvalidSession(a);
                                break;
                            case tc.p.HEARTBEAT:
                                this._handleHeartbeatReceive();
                                break;
                            case tc.p.HEARTBEAT_ACK:
                                this._handleHeartbeatAck(a);
                                break;
                            case tc.p.DISPATCH:
                                this._handleDispatch(
                                    a,
                                    s,
                                    "READY" === s
                                        ? {
                                              compressed_byte_size: t,
                                              uncompressed_byte_size: tN(e),
                                              compression_algorithm: this.compressionHandler.getAlgorithm(),
                                              packing_algorithm: tA.getName(),
                                              unpack_duration_ms: o,
                                          }
                                        : null,
                                );
                                break;
                            default:
                                tg.info(`Unhandled op ${i}`);
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
                        let s = n.data;
                        null != n.raw_length ? (i += n.raw_length) : (i += tN(s));
                        try {
                            e.feed(s);
                        } catch (e) {
                            throw (r || ((r = !0), t(!1, 0, "A decompression error occurred")), e);
                        }
                    }),
                onError: () => {
                    this.setResumeUrl(null),
                        J.A.flushDNSCache(),
                        this._handleClose(!1, 0, "An error with the websocket occurred");
                },
                onClose: (e) => {
                    let { wasClean: t, code: n, reason: i } = e;
                    return this._handleClose(t, n, i);
                },
            });
    }
    _handleHello(e) {
        let t = (this.heartbeatInterval = e.heartbeat_interval),
            n = Date.now() - this.connectionStartTime;
        tg.verbose(`[HELLO] via ${eW(e)}, heartbeat interval: ${t}, took ${n} ms`), this._startHeartbeater();
    }
    _handleReconnect() {
        tg.verbose("[RECONNECT] gateway requested I reconnect."),
            this._cleanup((e) => e.close(4e3)),
            (this.connectionState = y.WILL_RECONNECT),
            this._connect();
    }
    _handleInvalidSession(e) {
        tg.info(`[INVALID_SESSION]${e ? " can resume)" : ""}`), e ? this._doResumeOrIdentify() : this._doIdentify();
    }
    _handleDispatch(e, t, n) {
        let i = Date.now() - this.connectionStartTime;
        if ("READY" === t) {
            let t = e.session_id;
            this.sessionId = t;
            let n = eW(e);
            U.A.setServerTrace(n),
                tg.info(`[READY] took ${i}ms, as ${t}`),
                tg.verbose(`${n}`),
                (this.connectionState = y.SESSION_ESTABLISHED),
                this.gatewayBackoff.succeed(),
                (this.iosGoingAwayEventCount = 0),
                this.setResumeUrl(e.resume_gateway_url);
        } else
            "READY_SUPPLEMENTAL" === t
                ? (tg.info(`[READY_SUPPLEMENTAL] took ${i}ms`),
                  (this.connectionState = y.SESSION_ESTABLISHED),
                  this.gatewayBackoff.succeed(),
                  (this.iosGoingAwayEventCount = 0))
                : "RESUMED" === t &&
                  (tg.verbose(eW(e)),
                  (this.connectionState = y.SESSION_ESTABLISHED),
                  this.gatewayBackoff.succeed(),
                  (this.iosGoingAwayEventCount = 0));
        this.dispatcher.receiveDispatch(e, t, n);
    }
    handleResumeDispatched() {
        let e = Date.now() - this.connectionStartTime;
        tg.info(
            `[RESUMED] took ${e}ms, replayed ${this.dispatcher.resumeAnalytics.numEvents} events, new seq: ${this.seq}`,
        );
    }
    handleReadyDispatched() {
        (this.didForceClearGuildHashes = !1), (this.hasConnectedOnce = !0);
    }
    _getGatewayUrl() {
        return null != this.resumeUrl ? this.resumeUrl : tO;
    }
    _handleHeartbeatReceive() {
        this._sendHeartbeat(),
            null != this.heartbeater &&
                null != this.heartbeatInterval &&
                (clearInterval(this.heartbeater),
                (this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), this.heartbeatInterval)));
    }
    _handleHeartbeatAck(e) {
        (this.lastHeartbeatAckTime = Date.now()),
            (this.heartbeatAck = !0),
            null !== this.expeditedHeartbeatTimeout &&
                (clearTimeout(this.expeditedHeartbeatTimeout),
                (this.expeditedHeartbeatTimeout = null),
                tg.verbose("Expedited heartbeat succeeded"));
    }
    _handleHeartbeatTimeout() {
        this._cleanup((e) => e.close(4e3)), (this.connectionState = y.WILL_RECONNECT);
        let e = this.gatewayBackoff.fail(() => this._connect());
        tg.warn(`[ACK TIMEOUT] reconnecting in ${(e / 1e3).toFixed(2)} seconds.`);
    }
    _handleClose(e, t, n) {
        if (((e = e || !1), this._cleanup(), this.emit("close", { code: t, reason: n }), 4004 === t))
            return (
                (this.connectionState = y.CLOSED),
                tg.warn("[WS CLOSED] because of authentication failure, marking as closed."),
                this._reset(e, t, n)
            );
        if (
            (this._tryDetectInvalidIOSToken(t, n, e),
            (this.connectionState = y.WILL_RECONNECT),
            this.nextReconnectIsImmediate)
        )
            tg.info(`[WS CLOSED] (${e.toString()}, ${t}, ${n}) retrying immediately.`), this._connect();
        else {
            let i = this.gatewayBackoff.fail(() => this._connect());
            tg.info(`[WS CLOSED] (${e.toString()}, ${t}, ${n}) retrying in ${(i / 1e3).toFixed(2)} seconds.`),
                this.gatewayBackoff.fails > 4 && this._reset(e, t, n);
        }
    }
    _tryDetectInvalidIOSToken(e, t, n) {
        (0, C.isIOS)() &&
            null != this.token &&
            1001 === e &&
            "Stream end encountered" === t &&
            ((this.iosGoingAwayEventCount += 1),
            3 === this.iosGoingAwayEventCount &&
                V.Bo.get({ url: eY.Rsh.ME, headers: { authorization: this.token }, rejectWithError: !1 }).then(
                    (e) => {
                        let { status: t } = e;
                        v.default.track(eY.HAw.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                    },
                    (e) => {
                        let { status: t } = e;
                        401 === t &&
                            ((this.connectionState = y.CLOSED),
                            tg.warn("[WS CLOSED] because of manual authentication failure, marking as closed."),
                            this._reset(n, 4004, "invalid token manually detected")),
                            v.default.track(eY.HAw.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                    },
                ));
    }
    _reset(e, t, n) {
        (this.sessionId = null),
            (this.seq = 0),
            tg.warn(`[RESET] (${e.toString()}, ${t}, ${n})`),
            this.emit("disconnect", { wasClean: e, code: t, reason: n });
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
        b()(null != e, "GatewaySocket: Heartbeat interval should never null here."),
            null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout),
            null !== this.heartbeater && (clearInterval(this.heartbeater), (this.heartbeater = null)),
            (this.initialHeartbeatTimeout = setTimeout(
                () => {
                    (this.initialHeartbeatTimeout = null),
                        (this.heartbeatAck = !0),
                        (this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), e)),
                        this._doHeartbeatInterval();
                },
                Math.floor(Math.random() * e),
            ));
    }
    _stopHeartbeater() {
        null !== this.heartbeater && (clearInterval(this.heartbeater), (this.heartbeater = null)),
            null !== this.initialHeartbeatTimeout &&
                (clearTimeout(this.initialHeartbeatTimeout), (this.initialHeartbeatTimeout = null)),
            null !== this.expeditedHeartbeatTimeout &&
                (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null));
    }
    _clearHelloTimeout() {
        null != this.helloTimeout && (clearTimeout(this.helloTimeout), (this.helloTimeout = null));
    }
    _cleanup(e) {
        _.Ay.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
        let t = this.webSocket;
        (this.webSocket = null),
            null != t && ((t.onopen = tI), (t.onmessage = tI), (t.onerror = tI), (t.onclose = tI), e?.(t)),
            this.gatewayBackoff.cancel(),
            this.compressionHandler.close(),
            (this.compressionHandler = eu(tA));
    }
    _doResume() {
        (this.connectionState = y.RESUMING),
            (this.dispatcher.resumeAnalytics = eK(Date.now() - this.connectionStartTime)),
            tg.info(`[RESUME] resuming session ${this.sessionId ?? ""}, seq: ${this.seq}`),
            this.send(tc.p.RESUME, { token: this.token, session_id: this.sessionId, seq: this.seq }, !1);
    }
    async _doIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, 4004, "No connection info provided");
        this.connectionState = y.IDENTIFYING;
        let t = Date.now();
        this.identifyStartTime = t;
        let [n, i, r] = await Promise.all([
                (0, z.O)() ? K.getCommittedVersions() : {},
                (0, z.O)() ? $.A.getCommittedVersions() : {},
                !!(0, z.O)() && j.A.canUseGuildVersions(),
            ]),
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
        if (this.connectionState !== y.IDENTIFYING || this.identifyStartTime !== t)
            return void tg.warn("Skipping identify because connectionState or identifyStartTime has changed");
        let { token: a, properties: o = {}, presence: l } = e;
        (this.token = a), tg.verbose("[IDENTIFY]");
        let _ = {
                token: a,
                capabilities: (0, et.O)({ useChannelObfuscation: (0, tm.RK)("GatewaySocket") }),
                properties: o,
                presence: l,
                compress: this.compressionHandler.usesLegacyCompression(),
                client_state: s,
            },
            d = JSON.stringify(_);
        (this.identifyUncompressedByteSize = d.length),
            (this.identifyCompressedByteSize = k.deflate(d).length),
            (this.identifyCount += 1),
            this.send(tc.p.IDENTIFY, _, !1),
            v.default.track(eY.HAw.SESSION_START_CLIENT, {});
    }
    _doFastConnectIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, 4004, "No connection info provided");
        let { token: t } = e;
        (this.token = t),
            (this.connectionState = y.IDENTIFYING),
            (this.identifyStartTime = Date.now()),
            (this.identifyCount += 1),
            tg.verbose("[IDENTIFY, fast-connect]"),
            this._updateLastHeartbeatAckTime();
    }
    _doResumeOrIdentify() {
        let e = Date.now();
        null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= tT)
            ? this._doResume()
            : this._doIdentify(),
            this._updateLastHeartbeatAckTime();
    }
    _updateLastHeartbeatAckTime() {
        this.lastHeartbeatAckTime = Date.now();
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
        this.send(tc.p.QOS_HEARTBEAT, { seq: this.seq, qos: e }, !1), (this.lastHeartbeatTime = Date.now());
    }
    getLogger() {
        return tg;
    }
    willReconnect() {
        return this.connectionState === y.WILL_RECONNECT;
    }
    isClosed() {
        return this.connectionState === y.CLOSED;
    }
    isSessionEstablished() {
        return this.connectionState === y.SESSION_ESTABLISHED || this.connectionState === y.RESUMING;
    }
    isConnected() {
        return (
            this.connectionState === y.IDENTIFYING ||
            this.connectionState === y.RESUMING ||
            this.connectionState === y.SESSION_ESTABLISHED
        );
    }
    connect() {
        return this.isClosed()
            ? (tg.verbose(".connect() called, new state is WILL_RECONNECT"),
              (this.connectionState = y.WILL_RECONNECT),
              this._connect(),
              !0)
            : (tg.error("Cannot start a new connection, connection state is not closed"), !1);
    }
    resetSocketAndClearCacheOnError(e) {
        let { action: t, error: n, metricAction: i } = e;
        tg.error(`resetSocketAndClearCacheOnError during ${t}: ${n.message}`, n.stack);
        let r = (0, x.b)();
        q.A.increment({ name: G.K.SOCKET_CRASHED, tags: [`action:${i ?? t}`, `modded_client:${r}`] }, !0),
            !1 !== e.sentry && ee.A.captureException(n, { tags: { socketCrashedAction: t } }),
            v.default.track(eY.HAw.GATEWAY_SOCKET_RESET, {
                error_message: n.message,
                error_stack: n.stack,
                has_client_mods: r,
                action: t,
            }),
            this._cleanup((e) => e.close()),
            this._reset(!0, 1e3, "Resetting socket due to error."),
            this.dispatcher.clear(),
            (this.connectionState = y.WILL_RECONNECT),
            this.dispatchExceptionBackoff.cancel(),
            0 === this.dispatchExceptionBackoff._fails
                ? (tg.verbose("Triggering fast reconnect"),
                  this.dispatchExceptionBackoff.fail(() => {}),
                  setTimeout(() => this._connect(), 0))
                : this.dispatchExceptionBackoff.fail(() => this._connect()),
            (this.didForceClearGuildHashes = !0),
            u.h.dispatch({ type: "CLEAR_CACHES", reason: `Socket reset during ${t}` }),
            u.h.dispatch({ type: "LIBDISCORE_RESET" }),
            clearTimeout(this.dispatchSuccessTimer),
            (this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * tS));
    }
    resetSocketOnDispatchError(e) {
        let t = null != e.error.message && e.error.message.indexOf("Guild data was missing from store") >= 0;
        this.resetSocketAndClearCacheOnError({ ...e, sentry: !t });
    }
    close() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.isClosed()) return void tg.verbose("close() called, but socket is already closed.");
        tg.info(`Closing connection, current state is ${this.connectionState}`);
        let t = e ? 4e3 : void 0;
        this._cleanup((e) => e.close(t)),
            (this.connectionState = y.CLOSED),
            e ||
                ((this.sessionId = null),
                (this.token = null),
                setImmediate(() => {
                    this._reset(!0, 1e3, "Disconnect requested by user");
                }));
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
                tg.verbose(`Performing an expedited heartbeat ${null != t && "" !== t ? "reason: " + t : ""}`),
                    (this.heartbeatAck = !1),
                    this._sendHeartbeat(),
                    null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout),
                    (this.expeditedHeartbeatTimeout = setTimeout(() => {
                        (this.expeditedHeartbeatTimeout = null),
                            !1 === this.heartbeatAck && this._handleHeartbeatTimeout();
                    }, e));
                return;
            }
            n
                ? this.resetBackoff(t, i)
                : tg.verbose(
                      `Expedited heartbeat requested, but, connection state is ${this.connectionState} and reconnectImmediately was not requested ${null != t && "" !== t ? "reason: " + t : ""}`,
                  );
        }
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        tg.verbose(`Connection has reset backoff${null != e && "" !== e ? " for reason: " + e : ""}`),
            this.gatewayBackoff.succeed(),
            (this.iosGoingAwayEventCount = 0),
            (this.nextReconnectIsImmediate = !0),
            this.willReconnect()
                ? this._connect()
                : t && this.connectionState !== y.SESSION_ESTABLISHED && this._handleClose(!0, 0, e);
    }
    send = (e, t, n) => {
        Q.default.isLoggingGatewayEvents && tg.verboseDangerously("~>", e, tc.p[e], t);
        let i = tA.pack({ op: e, d: t });
        if (!n || this.isSessionEstablished())
            try {
                null != this.webSocket && this.webSocket.send(i);
            } catch (e) {}
        else tg.warn(`Attempted to send while not being in a connected state opcode: ${e}`);
    };
}
var tC = n(812729),
    ty = n.n(tC);
class tD {
    alwaysUpdateState;
    dirty = !1;
    state = this.getInitialState();
    constructor(e = !0) {
        this.alwaysUpdateState = e;
    }
    shouldCommit() {
        return !0;
    }
    setState(e) {
        this.state = { ...this.state, ...e };
    }
    getState() {
        return this.state;
    }
    reset() {
        (this.dirty = !1), (this.state = this.getInitialState());
    }
    update() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.getNextState({ ...this.state, ...e });
        if (t) this.dirty = !ty()(n, this.getInitialState());
        else for (let e of Object.keys(n)) this.dirty = this.dirty || !ty()(this.state[e], n[e]);
        let i = this.dirty && this.shouldCommit();
        return (
            (i || this.alwaysUpdateState) && (this.state = n),
            !!i && ((this.dirty = !1), this.didCommit(this.state), !0)
        );
    }
    forceUpdate() {
        (this.dirty = !1), this.didCommit(this.state);
    }
}
class tL extends tD {
    socket;
    switchingAccounts = !1;
    constructor(e) {
        super(!1), (this.socket = e);
    }
    getInitialState() {
        return O.A.getLocalPresence();
    }
    getNextState() {
        return O.A.getLocalPresence();
    }
    shouldCommit() {
        return this.socket.isSessionEstablished();
    }
    didCommit = (function (e) {
        let t,
            n = [],
            i = function () {
                for (var r = arguments.length, s = Array(r), a = 0; a < r; a++) s[a] = arguments[a];
                let o = Date.now();
                for (null != t && (clearTimeout(t), (t = null)); n.length > 0 && n[0] <= o; ) n.shift();
                n.length < 5 ? (n.push(o + 2e4), e(...s)) : (t = setTimeout(() => i(...s), n[0] - o));
            };
        return i;
    })(this.emitPresenceUpdate.bind(this));
    emitPresenceUpdate(e) {
        let { status: t, since: n, activities: i, afk: r } = e;
        this.socket.presenceUpdate(t, n, i, r);
    }
    handleConnectionOpen() {
        let e = !this.switchingAccounts;
        this.update({}, e), (this.switchingAccounts = !1);
    }
    handleAccountSwitch() {
        (this.switchingAccounts = !0), this.reset(), this.emitPresenceUpdate(this.getState());
    }
}
var tv = n(665260),
    tw = n(572164),
    tP = n(328153),
    tb = n(253932),
    tk = n(616356),
    tU = n(469177);
let tM = new E.A("ConnectionStore"),
    tG = new tR(),
    tx = new tL(tG),
    tV = new (class extends tD {
        socket;
        constructor(e) {
            super(), (this.socket = e);
        }
        get guildId() {
            return this.getState().guildId;
        }
        get channelId() {
            return this.getState().channelId;
        }
        computeVoiceFlags() {
            let e = 0,
                t = tb.Q$.getSetting();
            e = (0, tv.lA)(e, eY.Ajs.ALLOW_VOICE_RECORDING, t);
            let n =
                    (0, tw.TD)() &&
                    (tk.A.getCurrentUserActiveStream()?.state === eY.XYD.ACTIVE ||
                        tk.A.getCurrentUserActiveStream()?.state === eY.XYD.PAUSED),
                i = (0, tw.Ao)() && tP.Ay.getVisibleGame()?.windowHandle != null;
            return (0, tv.lA)(e, eY.Ajs.CLIPS_ENABLED, n || i);
        }
        getInitialState() {
            return {
                guildId: null,
                channelId: null,
                selfMute: p.Ay.isSelfMute(),
                selfDeaf: p.Ay.isSelfDeaf(),
                selfVideo: p.Ay.isVideoEnabled(),
                preferredRegion: null,
                preferredRegions: null,
                videoStreamParameters: null,
                flags: 0,
            };
        }
        getNextState(e) {
            let { guildId: t, channelId: n } = e;
            return {
                guildId: t,
                channelId: n,
                selfMute: p.Ay.isSelfMute(),
                selfDeaf: p.Ay.isSelfDeaf(),
                selfVideo: p.Ay.isVideoEnabled(),
                preferredRegion: S.A.getPreferredRegion(),
                preferredRegions: S.A.getPreferredRegions(),
                videoStreamParameters: p.Ay.getVideoStreamParameters(),
                flags: this.computeVoiceFlags(),
            };
        }
        shouldCommit() {
            return this.socket.isSessionEstablished();
        }
        didCommit(e) {
            let {
                guildId: t,
                channelId: n,
                selfMute: i,
                selfDeaf: r,
                selfVideo: s,
                preferredRegion: a,
                preferredRegions: o,
                videoStreamParameters: l,
                flags: _ = 0,
            } = e;
            s && I.A.getChannel(n)?.type === eY.rbe.GUILD_STAGE_VOICE
                ? this.socket.voiceStateUpdate({
                      guildId: t,
                      channelId: n,
                      selfMute: i,
                      selfDeaf: r,
                      selfVideo: s,
                      preferredRegion: a,
                      preferredRegions: o,
                      videoStreamParameters: l,
                      flags: _,
                  })
                : this.socket.voiceStateUpdate({
                      guildId: t,
                      channelId: n,
                      selfMute: i,
                      selfDeaf: r,
                      selfVideo: s,
                      preferredRegion: a,
                      preferredRegions: o,
                      flags: _,
                  });
        }
    })(tG);
(tG.handleIdentify = () => {
    let e = g.default.getToken();
    if ((tM.verbose("handleIdentify called", { hasToken: null != e }), null == e)) return null;
    let t = L.A.getState(),
        n = g.default.getInstallationForTracking();
    return {
        token: e,
        properties: {
            ...v.default.getSuperProperties(),
            client_app_state: t,
            is_fast_connect: !1,
            gateway_connect_reasons: tU.L7(),
            ...(null != n ? { installation_id: n } : {}),
        },
        presence: tx.getInitialState(),
    };
}),
    (0, C.isDesktop)() &&
        D.A.powerMonitor.on("resume", () => {
            tG.expeditedHeartbeat(5e3, "power monitor resumed");
        }),
    w.A.addOfflineCallback(() => {
        tG.networkStateChange(15e3, "network detected offline.", !1);
    }),
    w.A.addOnlineCallback(() => {
        tG.networkStateChange(5e3, "network detected online.");
    }),
    tG.on("disconnect", (e) => {
        let { code: t, reason: n } = e;
        u.h.dispatch({ type: "CONNECTION_CLOSED", code: t, reason: n });
    }),
    tG.on("close", (e) => {
        let { code: t, reason: n } = e;
        u.h.dispatch({ type: "CONNECTION_INTERRUPTED", code: t, reason: n });
    }),
    n(237751);
var tF = n(73825),
    tB = n(803306),
    tH = n(821956),
    tY = n(628856),
    tW = n(945096),
    tK = n(692744),
    tj = n(814890),
    t$ = n(505527),
    tz = n(853811),
    tq = n(381438);
let tX = (0, eb.mj)({
    kind: "user",
    name: "2026-02-content-classification-presence-filter",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tQ = n(756377),
    tJ = n(736130),
    tZ = n(761821),
    t0 = n(95701),
    t1 = n(545934),
    t2 = n(889227),
    t3 = n(696451),
    t6 = n(186111),
    t4 = n(628965),
    t7 = n(977997),
    t5 = n(97352),
    t8 = n(166403),
    t9 = n(107351),
    ne = n(531743),
    nt = n(45773);
let nn = null,
    ni = {};
function nr(e, t, n) {
    return null == nn || nn.identifyTime !== e || (null != t && t.some((e) => e.id === nn.guild.id))
        ? null
        : n(nn.guild);
}
function ns(e, t) {
    let n = [];
    return (
        t?.forEach((t) => {
            if (null == t) return;
            let i = t.user_id;
            null != i && (b()(null != e[i], `Missing user[${i}] in compressed ready payload`), (t.user = e[i])),
                delete t.user_id,
                n.push(t);
        }),
        n
    );
}
function na(e) {
    return "partial" !== e.data_mode
        ? {
              id: e.id,
              dataMode: e.data_mode,
              emojis: { op: "full_sync", items: e.emojis },
              guild_scheduled_events: e.guild_scheduled_events,
              experiments: e.experiments,
              joined_at: e.joined_at,
              lastMessages: e.last_messages,
              member_count: e.member_count,
              members: e.members,
              premium_subscription_count: e.premium_subscription_count,
              properties: e.properties,
              roles: { op: "full_sync", items: e.roles },
              stage_instances: e.stage_instances,
              stickers: { op: "full_sync", items: e.stickers },
              threads: e.threads?.map((t) => (0, t0.UE)(t, e.id)) ?? [],
              threadMessages: nl(e.threads),
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, t0.UE)(t, e.id))) },
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          }
        : {
              id: e.id,
              dataMode: e.data_mode,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, t0.UE)(t, e.id)) ?? [],
                  deletes: e.partial_updates.deleted_channel_ids ?? [],
              },
              channelTimestampUpdates: e.channel_updates,
              emojis: {
                  op: "update",
                  writes: e.partial_updates.emojis ?? [],
                  deletes: e.partial_updates.deleted_emoji_ids ?? [],
              },
              guild_scheduled_events: e.guild_scheduled_events,
              experiments: e.experiments,
              joined_at: e.joined_at,
              lastMessages: e.last_messages,
              member_count: e.member_count,
              members: e.members,
              premium_subscription_count: e.premium_subscription_count,
              properties: e.properties ?? null,
              roles: {
                  op: "update",
                  writes: e.partial_updates.roles ?? [],
                  deletes: e.partial_updates.deleted_role_ids ?? [],
              },
              stage_instances: e.stage_instances,
              stickers: {
                  op: "update",
                  writes: e.partial_updates.stickers ?? [],
                  deletes: e.partial_updates.deleted_sticker_ids ?? [],
              },
              unableToSyncDeletes: e.unable_to_sync_deletes,
              threads: e.threads?.map((t) => (0, t0.UE)(t, e.id)) ?? [],
              threadMessages: nl(e.threads),
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function no(e) {
    return "partial" !== e.data_mode
        ? {
              id: e.id,
              guild_scheduled_events: e.guild_scheduled_events,
              experiments: e.experiments,
              joined_at: e.joined_at,
              lastMessages: e.last_messages,
              member_count: e.member_count,
              members: e.members,
              premium_subscription_count: e.premium_subscription_count,
              properties: e.properties,
              roles: { op: "full_sync", items: e.roles },
              stage_instances: e.stage_instances,
              threads: e.threads?.map((t) => (0, t0.UE)(t, e.id)) ?? [],
              threadMessages: nl(e.threads),
              presences: e.presences,
              activity_instances: e.activity_instances,
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
              emojis: { op: "full_sync", items: e.emojis },
              stickers: { op: "full_sync", items: e.stickers },
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, t0.UE)(t, e.id))) },
          }
        : {
              id: e.id,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, t0.UE)(t, e.id)) ?? [],
                  deletes: e.partial_updates.deleted_channel_ids ?? [],
              },
              channelTimestampUpdates: e.channel_updates,
              activity_instances: e.activity_instances,
              emojis: {
                  op: "update",
                  writes: e.partial_updates.emojis ?? [],
                  deletes: e.partial_updates.deleted_emoji_ids ?? [],
              },
              guild_scheduled_events: e.guild_scheduled_events,
              experiments: e.experiments,
              joined_at: e.joined_at,
              lastMessages: e.last_messages,
              member_count: e.member_count,
              members: e.members,
              premium_subscription_count: e.premium_subscription_count,
              presences: e.presences,
              properties: e.properties ?? null,
              roles: {
                  op: "update",
                  writes: e.partial_updates.roles ?? [],
                  deletes: e.partial_updates.deleted_role_ids ?? [],
              },
              stage_instances: e.stage_instances,
              stickers: {
                  op: "update",
                  writes: e.partial_updates.stickers ?? [],
                  deletes: e.partial_updates.deleted_sticker_ids ?? [],
              },
              unableToSyncDeletes: e.unable_to_sync_deletes,
              threads: e.threads?.map((t) => (0, t0.UE)(t, e.id)) ?? [],
              threadMessages: nl(e.threads),
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function nl(e) {
    let t = [];
    if (null != e) for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
    return t;
}
let n_ = new E.A("ConnectionStore");
function nd(e) {
    return e.map((e) => {
        let t = e.timestamps?.end,
            n = e.created_at;
        return null != t && null != n
            ? { ...e, timestamps: { ...e.timestamps, isCountDown: t > n && e.type !== eY.$pd.LISTENING } }
            : e;
    });
}
let nu = new ej(
        tG,
        (e, t) => {
            e = e ?? { type: "CHANNEL_UPDATES", channels: [] };
            let n = (0, t0.UE)(t),
                i = I.A.getChannel(t.id),
                r = i?.merge({ ...n, recipients: i.recipients, bitrate: n.bitrate ?? i.bitrate });
            return e.channels.push(r ?? n), e;
        },
        (e) => "CHANNEL_UPDATE" !== e,
    ),
    nc = new ej(
        tG,
        (e, t) => (
            (e = null == e ? { type: "SOUNDBOARD_SOUNDS_RECEIVED", updates: [] } : e).updates.push({
                guildId: t.guild_id,
                sounds: t.soundboard_sounds.map((e) => ({
                    name: e.name,
                    soundId: e.sound_id,
                    emojiName: e.emoji_name,
                    emojiId: e.emoji_id,
                    userId: e.user_id,
                    volume: e.volume,
                    available: e.available,
                    guildId: t.guild_id,
                })),
            }),
            e
        ),
        (e) => "SOUNDBOARD_SOUNDS" !== e,
    ),
    nE = new ej(
        tG,
        (e, t) => ((e = e ?? { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] }).chunks.push(t), e),
        (e) => "GUILD_MEMBERS_CHUNK" !== e,
    ),
    nh = new ej(
        tG,
        (e, t) => ((e = null == e ? { type: "PRESENCE_UPDATES", updates: [] } : e).updates.push(t), e),
        (e) => "PRESENCE_UPDATE" !== e && "GUILD_MEMBERS_CHUNK" !== e,
    ),
    nm = {};
function nf(e, t) {
    for (let n of e) nm[n] = { preload: () => null, dispatch: t };
}
function ng(e, t, n) {
    for (let i of e) nm[i] = { preload: t, dispatch: n };
}
function nA(e) {
    let t = [];
    for (let n of e)
        null != n.member && np(n.guild_id, n.member.user, n.member),
            t.push({
                userId: n.user_id,
                guildId: n.guild_id,
                sessionId: n.session_id,
                channelId: n.channel_id,
                mute: n.mute,
                deaf: n.deaf,
                selfMute: n.self_mute,
                selfDeaf: n.self_deaf,
                selfVideo: n.self_video || !1,
                suppress: n.suppress,
                selfStream: n.self_stream || !1,
                requestToSpeakTimestamp: n.request_to_speak_timestamp ?? null,
                discoverable: n.discoverable ?? !0,
                oldChannelId: t7.A.getUserVoiceChannelId(n.guild_id, n.user_id),
                connectedAt: n.connected_at,
            });
    nI({ type: "VOICE_STATE_UPDATES", voiceStates: t });
}
function nI(e) {
    u.h.dispatch(e).catch((t) => {
        n_.error(`dispatchOrResetSocket error during ${e.type}:`, t),
            tG.resetSocketOnDispatchError({ error: t, action: e.type });
    });
}
function np(e, t, n) {
    let {
            roles: i,
            nick: r,
            avatar: s,
            avatar_decoration_data: a,
            flags: o,
            premium_since: _,
            pending: d,
            joined_at: u,
            communication_disabled_until: c,
            unusual_dm_activity_until: E,
            collectibles: h,
            display_name_styles: m,
        } = n,
        f = t3.Ay.getMember(e, t.id),
        g = (0, tY.t)(h),
        A = (0, tW.mT)(m);
    (null != f &&
        f.nick === r &&
        f.avatar === s &&
        l().isEqual(f.roles, i) &&
        (0, tH.kn)(f.avatarDecoration ?? null, a ?? null) &&
        f.premiumSince === _ &&
        f.isPending === d &&
        f.joinedAt === u &&
        f.communicationDisabledUntil === c &&
        f.flags === o &&
        (f.unusualDMActivityUntil ?? null) === (E ?? null) &&
        l().isEqual(f.collectibles ?? null, g ?? null) &&
        l().isEqual(f.displayNameStyles ?? null, A ?? null)) ||
        nI({
            type: "GUILD_MEMBER_ADD",
            guildId: e,
            user: t,
            roles: i,
            nick: r,
            avatar: s,
            avatarDecoration: a,
            premiumSince: _,
            isPending: d,
            joinedAt: u,
            communicationDisabledUntil: c,
            unusualDMActivityUntil: E,
            flags: o,
            collectibles: g,
            displayNameStyles: A,
        });
}
function nT(e) {
    let { member: t, mentions: n, author: i, guild_id: r } = e;
    null != t && null != r && np(r, i, t),
        null != n &&
            n.forEach((e) => {
                if (null != e.member && null != r) {
                    let { member: t } = e;
                    delete e.member, np(r, e, t);
                }
            });
}
function nS(e) {
    return e.map((e) => ({
        sessionId: e.session_id,
        lastModified: e.last_modified,
        status: e.status,
        activities: nd(e.activities ?? []),
        hiddenActivities: e.hidden_activities ?? [],
        active: !!e.active,
        clientInfo: e.client_info,
    }));
}
function nN(e, t) {
    return e.map((e) => nO(e, t));
}
function nO(e, t) {
    let n = (function (e, t) {
        let { enabled: n } = tX.getConfig({ location: "presence_filtering" });
        if (!n) return { activities: e, hiddenActivities: t };
        let i = [],
            r = [];
        for (let t of e)
            (
                t.content_classification?.loaded
                    ? null == t.content_classification.data
                        ? 0
                        : (0, tz.U1)({ type: tz.fS.MINIMAL, data: t.content_classification.data }) !== tq.Y.EVERYONE
                    : 1
            )
                ? r.push(t)
                : i.push(t);
        return 0 === r.length
            ? { activities: e, hiddenActivities: t }
            : { activities: i, hiddenActivities: [...t, ...r] };
    })(e.activities ?? [], e.hidden_activities ?? []);
    return {
        user: e.user,
        status: e.status,
        clientStatus: e.client_status,
        activities: nd(n.activities),
        hiddenActivities: n.hiddenActivities,
        guildId: t,
        processedAtTimestamp: e.processed_at_timestamp,
    };
}
function nR(e) {
    nh.add(e);
}
ng(
    ["INITIAL_GUILD"],
    (e) => ("full" === e.data_mode ? null : I.D.loadGuildIds([e.id])),
    (e) => {
        X.A.initialGuild.measure(() => {
            _.Ay.Emitter.batched(() => {
                var t;
                let n,
                    i = ((t = tG.identifyStartTime), (n = no(e)), (nn = { guild: e, identifyTime: t }), n);
                null != eH.default.getCurrentUser() &&
                    (nI({ type: "GUILD_CREATE", guild: i }),
                    nI({
                        type: "VOICE_STATE_UPDATES",
                        voiceStates: i.voice_states.map((e) => ({
                            userId: e.user_id,
                            guildId: i.id,
                            sessionId: e.session_id,
                            channelId: e.channel_id,
                            mute: e.mute,
                            deaf: e.deaf,
                            selfMute: e.self_mute,
                            selfDeaf: e.self_deaf,
                            selfVideo: e.self_video || !1,
                            suppress: e.suppress,
                            selfStream: e.self_stream || !1,
                            requestToSpeakTimestamp: e.request_to_speak_timestamp ?? null,
                            discoverable: e.discoverable ?? !0,
                            connectedAt: e.connected_at,
                        })),
                    }),
                    n_.log(`Dispatched INITIAL_GUILD ${e.id}`));
            });
        });
    },
),
    nf(["READY_SUPPLEMENTAL"], (e) => {
        X.A.readySupplemental.measure(() => {
            _.Ay.Emitter.batched(() => {
                let t = (e = X.A.hydrateReadySupplemental.measure(() =>
                    (function (e, t) {
                        let { guilds: n, merged_members: i, merged_presences: r, ...s } = e,
                            a = ns(ni, r?.friends),
                            o =
                                n?.map((e, t) => {
                                    let n = ns(ni, r?.guilds[t]),
                                        s = ns(ni, i?.[t]);
                                    return { ...e, unavailable: void 0 === e.voice_states, presences: n, members: s };
                                }) ?? [],
                            l = nr(t, n, (e) => ({
                                id: e.id,
                                members: e.members,
                                presences: e.presences,
                                activity_instances: e.activity_instances,
                                voice_states: e.voice_states,
                                unavailable: !1,
                            }));
                        return null != l && o.push(l), (ni = {}), { ...s, presences: a, guilds: o };
                    })(e, tG.identifyStartTime),
                )).guilds.filter((e) => !0 !== e.unavailable);
                t.forEach((e) => {
                    e.presences = nN(e.presences || [], e.id);
                });
                let n = nN(e.presences ?? [], void 0),
                    i = (e.lazy_private_channels ?? []).map((e) => (0, t0.UE)(e));
                X.A.dispatchReadySupplemental.measure(() => {
                    nI({ type: "CONNECTION_OPEN_SUPPLEMENTAL", guilds: t, presences: n, lazyPrivateChannels: i });
                });
                let r = [];
                t.forEach((e) => {
                    e.voice_states.forEach((t) => {
                        r.push({
                            userId: t.user_id,
                            guildId: e.id,
                            sessionId: t.session_id,
                            channelId: t.channel_id,
                            mute: t.mute,
                            deaf: t.deaf,
                            selfMute: t.self_mute,
                            selfDeaf: t.self_deaf,
                            selfVideo: t.self_video || !1,
                            suppress: t.suppress,
                            selfStream: t.self_stream || !1,
                            requestToSpeakTimestamp: t.request_to_speak_timestamp ?? null,
                            discoverable: t.discoverable ?? !0,
                            connectedAt: t.connected_at,
                        });
                    });
                }),
                    nI({ type: "VOICE_STATE_UPDATES", voiceStates: r, initial: !0 }),
                    tV.update();
            });
        }),
            setTimeout(() => nI({ type: "POST_CONNECTION_OPEN" }), 2e3);
    }),
    ng(
        ["READY"],
        (e) => {
            let t,
                n,
                i =
                    ((t = H.A.database()),
                    (n = (0, z.O)() ? K.getCommittedVersions() : Promise.resolve({})),
                    Promise.all([
                        n,
                        (0, z.O)() ? ne.A.getGuildIds() : Promise.resolve(new Set()),
                        null != t ? j.A.okAsync(t) : Promise.resolve(!1),
                    ]).then((e) => {
                        let [t, n, i] = e;
                        return { guildVersions: t, guildChannels: n, databaseOk: i };
                    })),
                r = e.guilds
                    .filter(
                        (e) =>
                            !e.unavailable &&
                            "partial" === e.data_mode &&
                            ((e.partial_updates.channels ?? []).length > 0 ||
                                (e.partial_updates.deleted_channel_ids ?? []).length > 0 ||
                                void 0),
                    )
                    .map((e) => e.id);
            return Promise.all([i, I.D.loadGuildIds(r) ?? Promise.resolve()]).then((e) => {
                let [t] = e;
                return t;
            });
        },
        (e, t, n) => {
            e.user.bot
                ? nI({ type: "LOGOUT" })
                : X.A.ready.measure(() => {
                      _.Ay.Emitter.batched(() => {
                          let t = (e = X.A.hydrateReady.measure(() =>
                                  (function (e, t, n) {
                                      let { users: i, private_channels: r, merged_members: s, guilds: a, ...o } = e;
                                      null != H.A.database() &&
                                          !1 === n.databaseOk &&
                                          nt.A.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"),
                                          (ni = l().keyBy(i, (e) => e.id)),
                                          r?.forEach((e) => {
                                              let t = e.recipient_ids;
                                              null != t &&
                                                  (e.recipients = t.map(
                                                      (e) => (
                                                          b()(
                                                              null != ni[e],
                                                              "Missing user in compressed ready payload",
                                                          ),
                                                          ni[e]
                                                      ),
                                                  )),
                                                  delete e.recipient_ids;
                                          });
                                      let _ =
                                              a?.map((e, t) =>
                                                  !0 === e.unavailable ? e : ((e.members = ns(ni, s?.[t])), na(e)),
                                              ) ?? [],
                                          d = nr(t, a, (e) => na(e));
                                      return (
                                          null != d && _.push(d),
                                          { ...o, users: i, presences: [], guilds: _, private_channels: r ?? [] }
                                      );
                                  })(e, tG.identifyStartTime, n),
                              )).private_channels.map((e) => (0, t0.UE)(e)),
                              i = e.guilds
                                  .filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted)
                                  .map((e) => e.id),
                              r = e.guilds.filter((e) => !0 !== e.unavailable),
                              s = e.guilds.filter((e) => !0 === e.geo_restricted),
                              a = null == e.user_settings_proto ? void 0 : (0, tZ.Gd)(e.user_settings_proto);
                          X.A.dispatchReady.measure(() => {
                              nI({
                                  type: "CONNECTION_OPEN",
                                  sessionId: e.session_id,
                                  authSessionIdHash: e.auth_session_id_hash,
                                  staticAuthSessionId: e.static_client_session_id,
                                  user: e.user,
                                  users: e.users,
                                  guilds: r,
                                  initialPrivateChannels: t,
                                  unavailableGuilds: i,
                                  readState: e.read_state,
                                  userGuildSettings: e.user_guild_settings,
                                  tutorial: e.tutorial,
                                  relationships: e.relationships ?? [],
                                  gameRelationships: e.game_relationships,
                                  friendSuggestionCount: e.friend_suggestion_count,
                                  analyticsToken: e.analytics_token,
                                  experiments: e.experiments,
                                  connectedAccounts: e.connected_accounts,
                                  guildExperiments: e.guild_experiments,
                                  apexExperiments: e.apex_experiments ?? void 0,
                                  requiredAction: e.required_action,
                                  consents: e.consents,
                                  sessions: nS(e.sessions ?? []),
                                  pendingPayments: e.pending_payments,
                                  countryCode: e.country_code ?? void 0,
                                  guildJoinRequests: e.guild_join_requests ?? [],
                                  userSettingsProto: a,
                                  apiCodeVersion: e.api_code_version,
                                  auth: e.auth,
                                  notificationSettings: { flags: e.notification_settings.flags },
                                  geoRestrictedGuilds: s,
                                  explicitContentScanVersion: e.explicit_content_scan_version,
                                  failedStates: e.failed_states,
                                  linkedUsers: e.linked_users ?? void 0,
                                  regionalFeatureConfig: e.regional_feature_config ?? void 0,
                              });
                          }),
                              null != e.auth_token &&
                                  nI({ type: "UPDATE_TOKEN", token: e.auth_token, userId: e.user.id }),
                              null != e.ad_personalization_toggles_disabled &&
                                  nI({
                                      type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED",
                                      disabled: e.ad_personalization_toggles_disabled,
                                  }),
                              tx.update(),
                              tV.update();
                      });
                  });
        },
    ),
    nf(["STATE_UPDATE"], (e) => {
        nI({ type: "CONNECTION_OPEN_STATE_UPDATE", apexExperiments: e.apex_experiments ?? void 0 });
    }),
    nf(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (e) => {
        u.h.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE",
            experimentName: e.experiment_name,
            variantId: e.variant_id,
        });
    }),
    nf(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (e) => {
        u.h.dispatch({ type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: e.experiment_name });
    }),
    nf(["RESUMED"], () => {
        tx.forceUpdate(), tV.forceUpdate(), nI({ type: "CONNECTION_RESUMED" });
    }),
    nf(["TYPING_START"], (e) => {
        null != e.member && np(e.guild_id, e.member.user, e.member),
            nI({ type: "TYPING_START", channelId: e.channel_id, userId: e.user_id });
    }),
    nf(["GUILD_RING_START"], (e) => {
        nI({ type: "GUILD_RING_START", ongoingRings: e.ongoing_rings, channelId: e.channel_id, guildId: e.guild_id });
    }),
    nf(["GUILD_RING_STOP"], (e) => {
        nI({ type: "GUILD_RING_STOP", ringing: e.ringing, channelId: e.channel_id, guildId: e.guild_id });
    }),
    nf(["ACTIVITY_START"], (e) => {
        nI({ type: "ACTIVITY_START", userId: e.user_id, activity: e.activity });
    }),
    nf(["ACTIVITY_USER_ACTION"], (e) => {
        nI({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    ng(
        ["MESSAGE_CREATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            nT(e),
                null != e.author &&
                    nI({
                        type: "MESSAGE_CREATE",
                        guildId: e.guild_id,
                        channelId: e.channel_id,
                        message: e,
                        optimistic: !1,
                        isPushNotification: !1,
                    });
        },
    ),
    ng(
        ["MESSAGE_UPDATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            nT(e), nI({ type: "MESSAGE_UPDATE", guildId: e.guild_id, message: e });
        },
    ),
    ng(
        ["MESSAGE_DELETE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            nI({ type: "MESSAGE_DELETE", guildId: e.guild_id, id: e.id, channelId: e.channel_id });
        },
    ),
    ng(
        ["MESSAGE_DELETE_BULK"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            nI({ type: "MESSAGE_DELETE_BULK", guildId: e.guild_id, ids: e.ids, channelId: e.channel_id });
        },
    ),
    ng(
        ["MESSAGE_ACK"],
        (e) => I.D.loadGuildFromChannelId(e.channel_id),
        (e) => {
            nI({
                type: "MESSAGE_ACK",
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version,
            });
        },
    ),
    nf(["GUILD_FEATURE_ACK"], (e) => {
        nI({ type: "GUILD_FEATURE_ACK", id: e.resource_id, ackType: e.ack_type, ackedId: e.entity_id });
    }),
    nf(["USER_NON_CHANNEL_ACK"], (e) => {
        nI({ type: "USER_NON_CHANNEL_ACK", ackType: e.ack_type, ackedId: e.entity_id });
    }),
    ng(
        ["CHANNEL_PINS_ACK"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            nI({ type: "CHANNEL_PINS_ACK", channelId: e.channel_id, timestamp: e.timestamp, version: e.version });
        },
    ),
    ng(
        ["CHANNEL_PINS_UPDATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            nI({ type: "CHANNEL_PINS_UPDATE", channelId: e.channel_id, lastPinTimestamp: e.last_pin_timestamp });
        },
    ),
    ng(
        ["CHANNEL_CREATE", "CHANNEL_DELETE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            nI({ type: t, channel: (0, t0.UE)(e) });
        },
    ),
    nf(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        nI({ type: t, id: e.id, guildId: e.guild_id, status: e.status });
    }),
    nf(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
        nI({ type: t, id: e.id, guildId: e.guild_id, voiceStartTime: e.voice_start_time ?? void 0 });
    }),
    nf(["CHANNEL_INFO"], (e, t) => {
        nI({
            type: t,
            guildId: e.guild_id,
            channels: e.channels.map((e) => ({ id: e.id, status: e.status, voiceStartTime: e.voice_start_time })),
        });
    }),
    nf(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
        nI({ type: t, guildId: e.guild_id, channelId: e.channel_id, online: e.presence_count, total: e.member_count });
    }),
    ng(
        ["CHANNEL_UPDATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            nu.add(e);
        },
    ),
    ng(
        ["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n, ...i } = e;
            nI({ type: t, isNewlyCreated: n, channel: (0, t0.UE)(i) });
        },
    ),
    ng(
        ["THREAD_LIST_SYNC"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            nI({
                type: "THREAD_LIST_SYNC",
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = I.A.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, t0.UE)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? l().map(e.members, tJ.A) : void 0,
                channelIds: e.channel_ids,
            });
        },
    ),
    nf(["THREAD_MEMBER_UPDATE"], (e) => {
        nI({
            type: "THREAD_MEMBER_UPDATE",
            id: e.id,
            guildId: e.guild_id,
            userId: e.user_id,
            flags: e.flags,
            muted: e.muted,
            muteConfig: e.mute_config,
            joinTimestamp: e.join_timestamp,
        });
    }),
    nf(["THREAD_MEMBERS_UPDATE"], (e) => {
        nI({
            type: "THREAD_MEMBERS_UPDATE",
            id: e.id,
            guildId: e.guild_id,
            memberCount: e.member_count,
            addedMembers: e.added_members?.map((t) => ({
                id: t.id,
                guildId: e.guild_id,
                userId: t.user_id,
                flags: t.flags,
                joinTimestamp: t.join_timestamp,
            })),
            removedMemberIds: e.removed_member_ids,
            memberIdsPreview: e.member_ids_preview,
        });
    }),
    nf(["FORUM_UNREADS"], (e) => {
        e.permission_denied ||
            nI({
                type: "FORUM_UNREADS",
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({ threadId: e.thread_id, missing: e.missing, count: e.count })),
            });
    }),
    nf(["SOUNDBOARD_SOUNDS"], (e) => {
        nc.add(e);
    }),
    nf(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = I.A.getBasicChannel(e.channel_id);
        nI({ type: t, channelId: e.channel_id, user: e.user, nick: e.nick, isMember: null != n });
    }),
    ng(
        ["GUILD_CREATE"],
        (e) => ("full" === e.data_mode ? null : I.D.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable) nI({ type: "GUILD_UNAVAILABLE", guildId: e.id });
            else {
                let t = no(e);
                nI({ type: "GUILD_CREATE", guild: t }),
                    nI({
                        type: "VOICE_STATE_UPDATES",
                        voiceStates: t.voice_states.map((e) => ({
                            userId: e.user_id,
                            guildId: t.id,
                            sessionId: e.session_id,
                            channelId: e.channel_id,
                            mute: e.mute,
                            deaf: e.deaf,
                            selfMute: e.self_mute,
                            selfDeaf: e.self_deaf,
                            selfVideo: e.self_video || !1,
                            suppress: e.suppress,
                            selfStream: e.self_stream || !1,
                            requestToSpeakTimestamp: e.request_to_speak_timestamp ?? null,
                            discoverable: e.discoverable ?? !0,
                            connectedAt: e.connected_at,
                        })),
                    });
            }
        },
    ),
    nf(["GUILD_UPDATE"], (e) => {
        nI({ type: "GUILD_UPDATE", guild: e }), e.unavailable && nI({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    nf(["GUILD_PRUNE_UPDATE"], (e) => {
        nI({
            type: "GUILD_PRUNE_UPDATE",
            guildId: e.guild_id,
            prune: {
                isPreview: e.prune.is_preview,
                isFinished: e.prune.is_finished,
                days: e.prune.days,
                pruneCount: e.prune.prune_count,
                includeRoles: e.prune.include_roles,
            },
        });
    }),
    nf(["GUILD_BULK_BAN_UPDATE"], (e) => {
        nI({
            type: "GUILD_BULK_BAN_UPDATE",
            guildId: e.guild_id,
            bulkBan: { bannedUsers: e.bulk_ban?.banned_users ?? [], failedUsers: e.bulk_ban?.failed_users ?? [] },
        });
    }),
    nf(["GUILD_DELETE"], (e) => {
        nI({ type: "GUILD_DELETE", guild: e }),
            e.geo_restricted
                ? nI({ type: "GUILD_GEO_RESTRICTED", guildId: e.id, icon: e.icon, name: e.name })
                : e.unavailable && nI({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    nf(["GUILD_MEMBERS_CHUNK"], (e) => {
        _.Ay.Emitter.batched(() => {
            nE.add({ guildId: e.guild_id, members: e.members, notFound: e.not_found }),
                null != e.presences && nN(e.presences, e.guild_id).forEach(nR),
                ej.flush("GUILD_MEMBERS_CHUNK");
        });
    }),
    nf(["THREAD_MEMBER_LIST_UPDATE"], (e) => {
        _.Ay.Emitter.batched(() => {
            nI({ type: "THREAD_MEMBER_LIST_UPDATE", guildId: e.guild_id, threadId: e.thread_id, members: e.members }),
                null != e.presences && nN(e.presences, e.guild_id).forEach(nR),
                ej.flush();
        });
    }),
    nf(
        ["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"],
        (e, t) => {
            nI({
                type: t,
                guildId: e.guild_id,
                user: e.user,
                avatar: e.avatar,
                avatarDecoration: e.avatar_decoration_data,
                roles: e.roles,
                nick: e.nick,
                premiumSince: e.premium_since,
                isPending: e.pending,
                joinedAt: e.joined_at,
                communicationDisabledUntil: e.communication_disabled_until,
                unusualDMActivityUntil: e.unusual_dm_activity_until,
                flags: e.flags,
                collectibles: (0, tY.t)(e.collectibles),
                displayNameStyles: (0, tW.mT)(e.display_name_styles),
            });
        },
    ),
    ng(
        ["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            nI({ type: t, guildId: e.guild_id, role: e.role });
        },
    ),
    ng(
        ["GUILD_ROLE_DELETE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            nI({ type: "GUILD_ROLE_DELETE", guildId: e.guild_id, roleId: e.role_id, version: e.version });
        },
    ),
    nf(["GUILD_EMOJIS_UPDATE"], (e) => {
        nI({ type: "GUILD_EMOJIS_UPDATE", guildId: e.guild_id, emojis: e.emojis });
    }),
    nf(["GUILD_STICKERS_UPDATE"], (e) => {
        nI({ type: "GUILD_STICKERS_UPDATE", guildId: e.guild_id, stickers: e.stickers });
    }),
    nf(["GUILD_INTEGRATIONS_UPDATE"], (e) => {
        nI({ type: "GUILD_INTEGRATIONS_UPDATE", guildId: e.guild_id });
    }),
    nf(["INTEGRATION_CREATE"], (e) => {
        nI({ type: "INTEGRATION_CREATE", application: e.application, guildId: e.guild_id });
    }),
    nf(["INTEGRATION_DELETE"], (e) => {
        nI({ type: "INTEGRATION_DELETE", applicationId: e.application_id, guildId: e.guild_id });
    }),
    nf(["USER_UPDATE"], (e) => {
        nI({ type: "CURRENT_USER_UPDATE", user: e });
    }),
    nf(["USER_SETTINGS_PROTO_UPDATE"], (e) => {
        let t = (0, tZ.Y5)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ("string" == typeof t)
                throw (
                    (console.error(`Invalid proto: |${t}| |${e.settings.proto}|`),
                    console.error({ parsed: t, wire: e.settings.proto, type: e.settings.type }),
                    Error("UserSettingsProto must not be a string"))
                );
            nI({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: { proto: t, type: e.settings.type },
                partial: e.partial,
            });
        }
    }),
    nf(["USER_GUILD_SETTINGS_UPDATE"], (e) => {
        nI({ type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: [e] });
    }),
    nf(["USER_CONNECTIONS_UPDATE"], () => {
        nI({ type: "USER_CONNECTIONS_UPDATE" });
    }),
    nf(["USER_REQUIRED_ACTION_UPDATE"], (e) => {
        nI({ type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: e.required_action });
    }),
    nf(["USER_NOTE_UPDATE"], (e) => {
        nI({ type: "USER_NOTE_UPDATE", ...e });
    }),
    nf(["RELATIONSHIP_ADD"], (e) => {
        nI({
            type: "RELATIONSHIP_ADD",
            relationship: {
                id: e.id,
                type: e.type,
                user: e.user,
                since: e.since,
                nickname: e.nickname,
                isSpamRequest: e.is_spam_request || !1,
                isStrangerRequest: e.is_stranger_request || !1,
                userIgnored: e.user_ignored || !1,
                originApplicationId: e.origin_application_id,
                note: e.note,
            },
            shouldNotify: !0 === e.should_notify,
        });
    }),
    nf(["RELATIONSHIP_REMOVE"], (e) => {
        nI({ type: "RELATIONSHIP_REMOVE", relationship: e });
    }),
    nf(["RELATIONSHIP_UPDATE"], (e) => {
        nI({
            type: "RELATIONSHIP_UPDATE",
            relationship: {
                id: e.id,
                type: e.type,
                user: e.user,
                nickname: e.nickname,
                since: e.since,
                isSpamRequest: e.is_spam_request || !1,
                isStrangerRequest: e.is_stranger_request || !1,
                userIgnored: e.user_ignored || !1,
                originApplicationId: e.origin_application_id,
                note: e.note,
            },
        });
    }),
    nf(["GAME_RELATIONSHIP_ADD"], (e) => {
        nI({
            type: "GAME_RELATIONSHIP_ADD",
            gameRelationship: {
                id: e.id,
                applicationId: e.application_id,
                type: e.type,
                since: e.since,
                dmAccessType: e.dm_access_type,
                user: e.user,
            },
        });
    }),
    nf(["GAME_RELATIONSHIP_REMOVE"], (e) => {
        nI({ type: "GAME_RELATIONSHIP_REMOVE", userId: e.id, applicationId: e.application_id });
    }),
    nf(["PRESENCE_UPDATE"], (e) => {
        nR(nO(e, e.guild_id));
    }),
    nf(["PRESENCES_REPLACE"], (e) => {
        nI({ type: "PRESENCES_REPLACE", presences: nN(e, void 0) });
    }),
    nf(["SESSIONS_REPLACE"], (e) => {
        nI({ type: "SESSIONS_REPLACE", sessions: nS(e) });
    }),
    nf(["VOICE_STATE_UPDATE"], (e) => {
        nA([e]);
    }),
    nf(["VOICE_STATE_UPDATE_BATCH"], (e) => {
        nA(e.voice_states);
    }),
    nf(["VOICE_SERVER_UPDATE"], (e) => {
        nI({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    nf(["CALL_CREATE"], (e) => {
        nI({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
        let t = e.voice_states;
        null != t &&
            nI({
                type: "VOICE_STATE_UPDATES",
                voiceStates: t.map((e) => ({
                    userId: e.user_id,
                    guildId: null,
                    sessionId: e.session_id,
                    channelId: e.channel_id,
                    mute: e.mute,
                    deaf: e.deaf,
                    selfMute: e.self_mute,
                    selfDeaf: e.self_deaf,
                    selfVideo: e.self_video || !1,
                    suppress: e.suppress,
                    selfStream: e.self_stream || !1,
                    requestToSpeakTimestamp: e.request_to_speak_timestamp ?? null,
                    discoverable: e.discoverable ?? !0,
                    connectedAt: e.connected_at,
                })),
            });
    }),
    nf(["CALL_UPDATE"], (e) => {
        nI({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
    }),
    nf(["CALL_DELETE"], (e) => {
        nI({ type: "CALL_DELETE", channelId: e.channel_id, unavailable: e.unavailable });
    }),
    nf(["OAUTH2_TOKEN_CREATE"], (e) => {
        nI({ type: "OAUTH2_TOKEN_CREATE", id: e.id, scopes: e.scopes, application: e.application });
    }),
    nf(["OAUTH2_TOKEN_DELETE"], (e) => {
        nI({ type: "OAUTH2_TOKEN_DELETE", id: e.id, applicationId: e.application_id });
    }),
    nf(["OAUTH2_TOKEN_REVOKE"], (e) => {
        nI({ type: "OAUTH2_TOKEN_REVOKE", accessToken: e.access_token });
    }),
    nf(["RECENT_MENTION_DELETE"], (e) => {
        nI({ type: "RECENT_MENTION_DELETE", id: e.message_id });
    }),
    nf(["SAVED_MESSAGE_CREATE"], (e) => {
        nI({ type: "SAVED_MESSAGE_CREATE", savedMessage: (0, tQ.iz)(e) });
    }),
    nf(["SAVED_MESSAGE_DELETE"], (e) => {
        nI({ type: "SAVED_MESSAGE_DELETE", savedMessageData: (0, tQ.x6)(e) });
    }),
    nf(["FRIEND_SUGGESTION_CREATE"], (e) => {
        nI({ type: "FRIEND_SUGGESTION_CREATE", suggestion: e });
    }),
    nf(["FRIEND_SUGGESTION_DELETE"], (e) => {
        nI({ type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: e.suggested_user_id });
    }),
    nf(["WEBHOOKS_UPDATE"], (e) => {
        nI({ type: "WEBHOOKS_UPDATE", guildId: e.guild_id, channelId: e.channel_id });
    }),
    nf(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        nI({
            type: t,
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: e.emoji,
            colors: e.burst_colors,
            reactionType: e.type,
            messageAuthorId: e.message_author_id,
        });
    }),
    nf(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        nI({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: { id: e.answer_id, name: "" },
            reactionType: t$.v.VOTE,
        });
    }),
    nf(["MESSAGE_POLL_VOTE_ADD_MANY"], (e) => {
        nI({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.votes.map((e) => ({ ...e, emoji: { id: e.answer_id, name: "" }, reactionType: t$.v.VOTE })),
        });
    }),
    nf(["MESSAGE_REACTION_REMOVE_ALL"], (e) => {
        nI({ type: "MESSAGE_REACTION_REMOVE_ALL", channelId: e.channel_id, messageId: e.message_id });
    }),
    nf(["MESSAGE_REACTION_REMOVE_EMOJI"], (e) => {
        nI({ type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: e.channel_id, messageId: e.message_id, emoji: e.emoji });
    }),
    nf(["MESSAGE_REACTION_ADD_MANY"], (e) => {
        nI({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions,
        });
    }),
    nf(["PAYMENT_UPDATE"], (e) => {
        nI({ type: "PAYMENT_UPDATE", payment: e });
    }),
    nf(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        nI({ type: t, entitlement: e });
    }),
    nf(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        (t6.A.hasLayers() || null != t4.A.getSection()) && (n(323082).$o(), tF.jv(t5.A.getFetchedSKUIDs()));
    }),
    nf(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        tB.rQ(), (t6.A.hasLayers() || null != t4.A.getSection()) && n(323082).hP();
    }),
    nf(["WISHLIST_ITEM_PURCHASED"], (e) => {
        nI({ type: "WISHLIST_ITEM_PURCHASED", recipientId: e.recipient_id, skuId: e.sku_id });
    }),
    nf(["USER_BADGE_STATE_UPDATE"], (e) => {
        n(682618).o(e.badge_id);
    }),
    nf(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (e) => {
        nI({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: t1.A.createFromServer(e, t8.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    nf(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (e) => {
        nI({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: t1.A.createFromServer(e, t8.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    nf(["BILLING_POPUP_BRIDGE_CALLBACK"], (e) => {
        nI({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query,
        });
    }),
    nf(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (e) => {
        nI({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id,
        });
    }),
    nf(["USER_PAYMENT_CLIENT_ADD"], (e) => {
        (0, t9.D)().then((t) => {
            let n = e.purchase_token_hash;
            n === t && nI({ type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: n, expiresAt: e.expires_at });
        });
    }),
    nf(["GUILD_MEMBER_LIST_UPDATE"], (e) => {
        _.Ay.Emitter.batched(() => {
            let t = (t) => {
                if (null == t.member) return;
                let { member: n } = t;
                if ((np(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: i } = n;
                nR(nO(i, e.guild_id));
            };
            e.ops.forEach((e) => {
                let { op: n, items: i, item: r } = e;
                switch (n) {
                    case "SYNC":
                        i.forEach(t);
                        break;
                    case "UPDATE":
                    case "INSERT":
                        t(r);
                }
            }),
                ej.flush(),
                nI({
                    type: "GUILD_MEMBER_LIST_UPDATE",
                    guildId: e.guild_id,
                    id: e.id,
                    ops: e.ops,
                    groups: e.groups,
                    memberCount: e.member_count,
                    onlineCount: e.online_count,
                });
        });
    }),
    nf(["GIFT_CODE_UPDATE"], (e) => {
        nI({ type: "GIFT_CODE_UPDATE", uses: e.uses, code: e.code });
    }),
    nf(["GIFT_CODE_CREATE"], (e) => {
        nI({ type: "GIFT_CODE_CREATE", giftCode: e });
    }),
    nf(["LIBRARY_APPLICATION_UPDATE"], (e) => {
        nI({ type: "LIBRARY_APPLICATION_UPDATE", libraryApplication: e });
    }),
    nf(["STREAM_CREATE"], (e) => {
        nI({
            type: "STREAM_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            rtcChannelId: e.rtc_channel_id,
            paused: e.paused,
        });
    }),
    nf(["STREAM_SERVER_UPDATE"], (e) => {
        nI({ type: "STREAM_SERVER_UPDATE", streamKey: e.stream_key, endpoint: e.endpoint, token: e.token });
    }),
    nf(["STREAM_UPDATE"], (e) => {
        nI({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused,
        });
    }),
    nf(["STREAM_DELETE"], (e) => {
        nI({ type: "STREAM_DELETE", streamKey: e.stream_key, unavailable: e.unavailable, reason: e.reason });
    }),
    nf(["GENERIC_PUSH_NOTIFICATION_SENT"], (e) => {
        nI({
            type: "GENERIC_PUSH_NOTIFICATION_SENT",
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag,
        });
    }),
    nf(["REACTION_NOTIFICATION_SENT"], (e) => {
        nI({
            type: "REACTION_NOTIFICATION_SENT",
            route: e.route,
            message: e.message,
            emoji: e.emoji,
            reactorUserId: e.reactor_user_id,
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
        });
    }),
    nf(["NOTIFICATION_CENTER_ITEM_CREATE"], (e) => {
        nI({ type: "NOTIFICATION_CENTER_ITEM_CREATE", item: e });
    }),
    nf(["NOTIFICATION_CENTER_ITEM_DELETE"], (e) => {
        nI({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id });
    }),
    nf(["NOTIFICATION_CENTER_ITEMS_ACK"], (e) => {
        nI({ type: "NOTIFICATION_CENTER_ITEMS_ACK", ids: [e.id], optimistic: !1 });
    }),
    nf(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (e) => {
        nI({ type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: e.item_enum });
    }),
    nf(["QUESTS_USER_STATUS_UPDATE"], (e) => {
        nI({ type: "QUESTS_USER_STATUS_UPDATE", user_status: e.user_status });
    }),
    nf(["QUESTS_USER_COMPLETION_UPDATE"], (e) => {
        nI({ type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: e.quest_enrollment_blocked_until });
    }),
    nf(["QUEST_PREVIEW_UPDATE"], (e) => {
        nI({ type: "QUEST_PREVIEW_UPDATE", quest_id: e.quest_id });
    }),
    nf(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        nI({ type: t, guildId: e.guild_id });
    }),
    nf(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (e) => {
        nI({ type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: e.guild_id, version: e.version });
    }),
    nf(["GUILD_JOIN_REQUEST_CREATE"], (e) => {
        nI({ type: "GUILD_JOIN_REQUEST_CREATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    nf(["GUILD_JOIN_REQUEST_UPDATE"], (e) => {
        nI({ type: "GUILD_JOIN_REQUEST_UPDATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    nf(["GUILD_JOIN_REQUEST_DELETE"], (e) => {
        nI({ type: "GUILD_JOIN_REQUEST_DELETE", id: e.id, userId: e.user_id, guildId: e.guild_id });
    }),
    nf(["INTERACTION_CREATE"], (e) => {
        nI({ type: "INTERACTION_CREATE", interactionId: e.id, nonce: e.nonce });
    }),
    nf(["INTERACTION_SUCCESS"], (e) => {
        nI({ type: "INTERACTION_SUCCESS", interactionId: e.id, nonce: e.nonce });
    }),
    nf(["INTERACTION_FAILURE"], (e) => {
        nI({ type: "INTERACTION_FAILURE", interactionId: e.id, nonce: e.nonce, reasonCode: e.reason_code });
    }),
    nf(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (e) => {
        nI({ type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: e.choices, nonce: e.nonce });
    }),
    nf(["INTERACTION_MODAL_CREATE"], (e) => {
        nI({
            type: "INTERACTION_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: (0, tj.ZV)(e.components),
            nonce: e.nonce,
            resolved: e.resolved,
        });
    }),
    nf(["INTERACTION_IFRAME_MODAL_CREATE"], (e) => {
        nI({
            type: "INTERACTION_IFRAME_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            iframePath: e.iframe_path,
            modalSize: e.modal_size,
            nonce: e.nonce,
        });
    }),
    nf(["STAGE_INSTANCE_CREATE"], (e) => {
        nI({ type: "STAGE_INSTANCE_CREATE", instance: e });
    }),
    nf(["STAGE_INSTANCE_UPDATE"], (e) => {
        nI({ type: "STAGE_INSTANCE_UPDATE", instance: e });
    }),
    nf(["STAGE_INSTANCE_DELETE"], (e) => {
        nI({ type: "STAGE_INSTANCE_DELETE", instance: e });
    }),
    nf(["GUILD_SCHEDULED_EVENT_CREATE"], (e) => {
        nI({ type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent: e });
    }),
    nf(["GUILD_SCHEDULED_EVENT_UPDATE"], (e) => {
        nI({ type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent: e });
    }),
    nf(["GUILD_SCHEDULED_EVENT_DELETE"], (e) => {
        nI({ type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent: e });
    }),
    nf(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (e) => {
        nI({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException: e });
    }),
    nf(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (e) => {
        nI({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException: e });
    }),
    nf(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (e) => {
        nI({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException: e });
    }),
    nf(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (e) => {
        nI({ type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE", eventId: e.event_id });
    }),
    nf(["GUILD_SCHEDULED_EVENT_USER_ADD"], (e) => {
        nI({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    nf(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (e) => {
        nI({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    nf(["GUILD_DIRECTORY_ENTRY_CREATE"], (e) => {
        nI({ type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: e.directory_channel_id, entry: e });
    }),
    nf(["GUILD_DIRECTORY_ENTRY_UPDATE"], (e) => {
        nI({ type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: e.directory_channel_id, entry: e });
    }),
    nf(["GUILD_DIRECTORY_ENTRY_DELETE"], (e) => {
        nI({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: e.directory_channel_id, guildId: e.entity_id });
    }),
    nf(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (e) => {
        nI({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until,
        });
    }),
    nf(["VOICE_CHANNEL_EFFECT_SEND"], (e) => {
        nI({
            type: "VOICE_CHANNEL_EFFECT_SEND",
            emoji: e.emoji,
            channelId: e.channel_id,
            userId: e.user_id,
            animationType: e.animation_type,
            animationId: e.animation_id,
            soundId: e.sound_id,
            soundVolume: e.sound_volume,
        });
    }),
    nf(["CLIPS_REMOTE_TRIGGER"], (e) => {
        nI({
            type: "CLIPS_REMOTE_TRIGGER",
            userId: e.user_id,
            applicationId: e.application_id,
            partyId: e.party_id ?? null,
            remoteClipId: e.remote_clip_id,
        });
    }),
    nf(["GUILD_SOUNDBOARD_SOUND_CREATE"], (e) => {
        nI({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new t2.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    nf(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (e) => {
        nI({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new t2.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    nf(["GUILD_SOUNDBOARD_SOUND_DELETE"], (e) => {
        nI({ type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: e.guild_id, soundId: e.sound_id });
    }),
    nf(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (e) => {
        nI({
            type: "GUILD_SOUNDBOARD_SOUNDS_UPDATE",
            guildId: e.guild_id,
            soundboardSounds: e.soundboard_sounds.map((t) => ({
                name: t.name,
                soundId: t.sound_id,
                emojiName: t.emoji_name,
                emojiId: t.emoji_id,
                userId: t.user_id,
                volume: t.volume,
                available: t.available,
                guildId: e.guild_id,
            })),
        });
    }),
    ng(
        ["EMBEDDED_ACTIVITY_UPDATE_V2"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            nI({
                type: "EMBEDDED_ACTIVITY_UPDATE_V2",
                applicationId: e.application_id,
                launchId: e.launch_id,
                compositeInstanceId: e.composite_instance_id,
                location: e.location,
                participants: e.participants,
            });
        },
    ),
    nf(["AUTH_SESSION_CHANGE"], (e) => {
        nI({ type: "AUTH_SESSION_CHANGE", authSessionIdHash: e.auth_session_id_hash });
    }),
    nf(["USER_CONNECTIONS_LINK_CALLBACK"], (e) => {
        nI({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state,
        });
    }),
    nf(["USER_CONNECTIONS_CALLBACK"], (e) => {
        nI({
            type: "USER_CONNECTIONS_CALLBACK",
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params,
        });
    }),
    nf(["DELETED_ENTITY_IDS"], (e) => {
        nI({ type: "DELETED_ENTITY_IDS", ...e });
    }),
    ng(
        ["CHANNEL_SYNC"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            e.channels.forEach((e) => {
                nu.add(e);
            }),
                nI({
                    type: "CHANNEL_SYNC",
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check,
                });
        },
    ),
    nf(["CONSOLE_COMMAND_UPDATE"], (e) => {
        nI({ type: "CONSOLE_COMMAND_UPDATE", id: e.id, result: e.result, error: e.error });
    }),
    ng(
        ["PASSIVE_UPDATE_V2"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            nI({
                type: "PASSIVE_UPDATE_V2",
                guildId: e.guild_id,
                members: e.updated_members,
                channels: e.updated_channels.map((e) => ({
                    id: e.id,
                    lastMessageId: e.last_message_id,
                    lastPinTimestamp: e.last_pin_timestamp,
                })),
                voiceStates: e.updated_voice_states.map((e) => ({
                    channelId: e.channel_id,
                    deaf: e.deaf || !1,
                    mute: e.mute || !1,
                    requestToSpeakTimestamp: e.request_to_speak_timestamp ?? null,
                    selfDeaf: e.self_deaf || !1,
                    selfMute: e.self_mute || !1,
                    selfStream: e.self_stream || !1,
                    selfVideo: e.self_video || !1,
                    sessionId: e.session_id,
                    suppress: e.suppress,
                    userId: e.user_id,
                    discoverable: e.discoverable ?? !0,
                    connectedAt: e.connected_at,
                })),
                removedVoiceStateUsers: e.removed_voice_states,
            });
        },
    ),
    nf(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (e) => {
        nI({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions,
        });
    }),
    nf(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (e) => {
        nI({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id,
        });
    }),
    nf(["LAST_MESSAGES"], (e) => {
        nI({ type: "MESSAGE_PREVIEWS_LOADED", guildId: e.guild_id, messages: e.messages });
    }),
    nf(["AUTHENTICATOR_UPDATE"], (e) => {
        nI({ type: "AUTHENTICATOR_UPDATE", credential: e });
    }),
    nf(["AUTHENTICATOR_CREATE"], (e) => {
        nI({ type: "AUTHENTICATOR_CREATE", credential: e });
    }),
    nf(["AUTHENTICATOR_DELETE"], (e) => {
        nI({ type: "AUTHENTICATOR_DELETE", credential: e });
    }),
    nf(["NOTIFICATION_SETTINGS_UPDATE"], (e) => {
        nI({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: e.flags } });
    }),
    nf(["CONVERSATION_SUMMARY_UPDATE"], (e) => {
        nI({ type: "CONVERSATION_SUMMARY_UPDATE", ...e });
    }),
    nf(["PREMIUM_MARKETING_PREVIEW"], (e) => {
        nI({ type: "PREMIUM_MARKETING_PREVIEW", data: e });
    }),
    nf(["USER_APPLICATION_UPDATE"], (e) => {
        nI({ type: "USER_APPLICATION_UPDATE", applicationId: e.application_id });
    }),
    nf(["USER_APPLICATION_REMOVE"], (e) => {
        nI({ type: "USER_APPLICATION_REMOVE", applicationId: e.application_id });
    }),
    nf(["DM_SETTINGS_UPSELL_SHOW"], (e) => {
        nI({ type: "DM_SETTINGS_UPSELL_SHOW", guildId: e.guild_id });
    }),
    nf(["CONTENT_INVENTORY_INBOX_STALE"], (e) => {
        nI({ type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: e.refresh_after_ms });
    }),
    nf(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (e) => {
        nI({ type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: e.balance });
    }),
    nf(["WALLET_BALANCE_UPDATE"], (e) => {
        nI({
            type: "WALLET_BALANCE_UPDATE",
            paymentSourceId: e.payment_source_id,
            balance: e.balance,
            currency: e.currency,
        });
    }),
    nf(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
        nI({ type: t, guildId: e.guild_id, entitlements: e.entitlements });
    }),
    nf(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
        nI({ type: t, guildId: e.guild_id, gameServer: e.game_server });
    }),
    nf(["GAME_SERVER_DELETE"], (e, t) => {
        nI({ type: t, guildId: e.guild_id, gameServerId: e.game_server_id });
    }),
    nf(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
        nI({ type: t, guildId: e.guild_id });
    }),
    nf(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
        nI({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
            username: e.username,
            avatar_hash: e.avatar_hash,
            metadata: e.metadata,
        });
    }),
    nf(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
        nI({ type: t, user_id: e.user_id, application_id: e.application_id });
    }),
    nf(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (e) => {
        nI({
            type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
            interactionId: e.interaction_id,
            applicationId: e.application_id,
            skuId: e.sku_id,
            recipientId: e.recipient_id,
            eligible: e.eligible,
            ineligibleReason: e.ineligible_reason,
        });
    }),
    nf(["HAVEN_CONNECT"], (e, t) => {
        nI({ type: t, room: (0, tK.xf)(e) });
    }),
    nf(["HAVEN_DISCONNECT"], (e, t) => {
        nI({ type: t, userId: e.user_id, roomId: e.room_id });
    }),
    nf(["HAVEN_UPDATE"], (e, t) => {
        nI({ type: t, room: (0, tK.xf)(e) });
    }),
    nf(["GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE"], (e, t) => {
        nI({ type: t, gameApplicationIds: e.game_application_ids, guildId: e.guild_id });
    });
var nC = n(355097);
let ny = window.DiscordNative;
tG.dispatcher.getDispatchHandler = function (e) {
    return nm[e];
};
let nD = new E.A("ConnectionStore"),
    nL = 0,
    nv = null,
    nw = !0,
    nP = null,
    nb = null;
async function nk(e) {
    (nL = Date.now()), (nv = e.sessionId), tx.handleConnectionOpen();
    let t = {},
        n = N.A.getVoiceChannelId();
    if (null != n) {
        let e = d.w.get("discord_watchdog_restart_timestamp"),
            i = null != e && Date.now() - parseInt(e, 10) < 6e4;
        if (
            (d.w.remove("discord_watchdog_restart_timestamp"),
            window?.performance?.getEntriesByType?.("navigation")?.[0]?.type === "reload" ||
                i ||
                (await ny?.processUtils?.getLastCrash?.())?.rendererCrashReason != null ||
                !nw)
        ) {
            let e = I.A.getChannel(n);
            null != e && ((t = { guildId: e.getGuildId(), channelId: n }), (0, m.CX)(n));
        } else T.A.setLastSessionVoiceChannelId(null != n ? n : null), c.default.selectVoiceChannel(null);
    }
    tV.update(t, !0), (nw = !1), (nb = null);
}
function nU() {
    tV.update();
}
function nM() {
    return tV.update(), !1;
}
function nG() {
    return tx.update(), !1;
}
function nx(e) {
    tG.isSessionEstablished() && tG.streamDelete(e);
}
class nV extends _.Ay.Store {
    static displayName = "GatewayConnectionStore";
    initialize() {
        this.waitFor(g.default, A.A, I.A, p.Ay, T.A, S.A, N.A, O.A, R.A, f.A),
            this.syncWith([p.Ay], nM),
            this.syncWith([O.A], nG);
    }
    getSocket() {
        return tG;
    }
    isTryingToConnect() {
        return !tG.isClosed();
    }
    isConnected() {
        return tG.isSessionEstablished();
    }
    isConnectedOrOverlay() {
        return tG.isSessionEstablished() || __OVERLAY__;
    }
    lastTimeConnectedChanged() {
        return nL;
    }
}
let nF = new nV(u.h, {
    START_SESSION: function () {
        return tG.isClosed()
            ? (nD.verbose("Socket is reconnecting because of starting new session"), tG.connect())
            : (nD.verbose("Socket is not reconnecting during a new session because it is not closed"), !1);
    },
    LOGIN_SUCCESS: function () {
        return (
            nD.verbose("session refresh dispatched", { isEstablished: tG.isSessionEstablished() }),
            !!tG.isSessionEstablished() && (tG.close(), tG.connect())
        );
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount && tx.handleAccountSwitch(), nD.verbose("Closing socket because of logout"), tG.close();
    },
    CLEAR_CACHES: function (e) {
        return e.resetSocket && (tG.close(), tG.dispatcher.clear(), tG.connect()), !1;
    },
    CONNECTION_OPEN: (e) => {
        nk(e);
    },
    CONNECTION_RESUMED: function () {
        nb = null;
    },
    CONNECTION_CLOSED: function () {
        nD.verbose("connection closed dispatched"), (nL = Date.now());
    },
    RTC_CONNECTION_STATE: function (e) {
        if (e.state !== eY.S7L.DISCONNECTED) return !1;
        e.willReconnect && (null != e.streamKey ? tG.streamPing(e.streamKey) : tG.voiceServerPing());
    },
    VOICE_CHANNEL_SELECT: function (e) {
        return (
            tV.update({ guildId: e.guildId, channelId: e.channelId }),
            (nb = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
            (0, C.isIOS)() &&
                nP === eY.g6G.BACKGROUND &&
                (null == e.channelId ? tG.close(!0) : tG.isClosed() && ((th = !1), tG.connect())),
            !1
        );
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (g.default.getId() !== t.userId) return e;
            if (t.sessionId === nv) {
                if (null != nb)
                    return nD.verbose("Ignoring voice state for own session due to VSU lock on channel:", nb), e;
                tV.setState({ guildId: t.guildId, channelId: t.channelId });
            } else {
                if (t.guildId !== tV.guildId) return e;
                tV.setState({ guildId: null, channelId: null });
            }
            return !0;
        }, !1);
    },
    GUILD_DELETE: function (e) {
        e.guild.id === tV.guildId && tV.setState({ guildId: null, channelId: null });
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        t.id === tV.channelId && tV.setState({ guildId: null, channelId: null });
    },
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        if (t === tV.channelId) {
            if (nb === t) return !1;
            tV.setState({ guildId: null, channelId: null });
        }
    },
    APP_STATE_UPDATE: function (e) {
        return (
            (0, C.isIOS)()
                ? (g.default.isAuthenticated() &&
                      (nP === eY.g6G.INACTIVE && e.state === eY.g6G.BACKGROUND && null == tV.channelId
                          ? tG.close(!0)
                          : nP === eY.g6G.BACKGROUND &&
                            e.state === eY.g6G.ACTIVE &&
                            tG.isClosed() &&
                            ((th = !1), tG.connect())),
                  (nP = e.state))
                : e.state === eY.g6G.ACTIVE &&
                  ((th = !1), g.default.isAuthenticated() && tG.resetBackoff("App state is active")),
            !1
        );
    },
    GUILD_MEMBERS_REQUEST: function (e) {
        return (
            tG.isSessionEstablished() &&
                ("userIds" in e
                    ? l()(e.userIds)
                          .chunk(100)
                          .forEach((t) => {
                              tG.requestGuildMembers(e.guildIds, { userIds: t, presences: !!e.presences });
                          })
                    : tG.requestGuildMembers(e.guildIds, { query: e.query, limit: e.limit, presences: !!e.presences })),
            !1
        );
    },
    GUILD_SEARCH_RECENT_MEMBERS: function (e) {
        let { guildId: t, query: n, continuationToken: i } = e;
        tG.isSessionEstablished() && tG.searchRecentMembers(t, { query: n, continuationToken: i });
    },
    GUILD_SUBSCRIPTIONS_FLUSH: function (e) {
        let { subscriptions: t } = e;
        return tG.isSessionEstablished() && tG.updateGuildSubscriptions(t), !1;
    },
    CALL_CONNECT: function (e) {
        let { channelId: t } = e;
        return tG.isSessionEstablished() && tG.callConnect(t), !1;
    },
    CALL_CONNECT_MULTIPLE: function (e) {
        let { channelIds: t } = e;
        return (
            tG.isSessionEstablished() &&
                t.forEach((e) => {
                    tG.callConnect(e);
                }),
            !1
        );
    },
    STREAM_CREATE: nU,
    STREAM_START: function (e) {
        let { streamType: t, guildId: n, channelId: i } = e;
        if (tG.isSessionEstablished()) {
            let e = null != n ? I.A.getChannel(i)?.rtcRegion : A.A.getCall(i)?.region;
            tG.streamCreate(t, n, i, e ?? S.A.getPreferredRegion());
        }
        return !1;
    },
    STREAM_WATCH: function (e) {
        let { streamKey: t, allowMultiple: n } = e;
        if (tG.isSessionEstablished()) {
            if (n);
            else {
                let e;
                (e = R.A.getAllActiveStreamKeys().find((e) => (0, h.Iy)(e).ownerId === g.default.getId())),
                    R.A.getAllActiveStreamKeys()
                        .filter((t) => t !== e)
                        .forEach((e) => nx(e));
            }
            tG.streamWatch(t);
        }
        return !1;
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        return nx(t), nU(), !1;
    },
    STREAM_SET_PAUSED: function (e) {
        let { streamKey: t, paused: n } = e;
        tG.isSessionEstablished() && tG.streamSetPaused(t, n);
    },
    PUSH_NOTIFICATION_CLICK: function () {
        return tG.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1;
    },
    REQUEST_FORUM_UNREADS: function (e) {
        let { guildId: t, channelId: n, threads: i } = e;
        tG.requestForumUnreads(t, n, i);
    },
    REQUEST_SOUNDBOARD_SOUNDS: function (e) {
        let { guildIds: t } = e;
        tG.requestSoundboardSounds(t);
    },
    REMOTE_COMMAND: function (e) {
        let { sessionId: t, payload: n } = e;
        return tG.isSessionEstablished() && tG.remoteCommand(t, n), !1;
    },
    RESET_SOCKET: function (e) {
        tG.connectionState !== y.WILL_RECONNECT && tG.resetSocketAndClearCacheOnError(e.args);
    },
    CLIPS_SETTINGS_UPDATE: nU,
    RUNNING_GAMES_CHANGE: nU,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        e.settings.type === nC.oD.PRELOADED_USER_SETTINGS &&
            e.settings.proto.clips?.allowVoiceRecording != null &&
            nU();
    },
});
