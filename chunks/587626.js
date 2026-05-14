"use strict";
n.d(t, { A: () => nF });
var i,
    r,
    s,
    a,
    o,
    l = n(735438),
    u = n.n(l),
    c = n(17928),
    d = n(506774),
    _ = n(228366),
    f = n(730852),
    h = n(626584),
    p = n(652896),
    E = n(796774),
    m = n(617617),
    g = n(495544),
    A = n(470710),
    I = n(734057),
    T = n(235058),
    S = n(763827),
    N = n(873985),
    y = n(309010),
    C = n(461213),
    v = n(116956),
    O = n(723702),
    R =
        (((i = R || {}).CLOSED = "CLOSED"),
        (i.WILL_RECONNECT = "WILL_RECONNECT"),
        (i.CONNECTING = "CONNECTING"),
        (i.IDENTIFYING = "IDENTIFYING"),
        (i.RESUMING = "RESUMING"),
        (i.SESSION_ESTABLISHED = "SESSION_ESTABLISHED"),
        i),
    b = n(77729),
    D = n(183636),
    L = n(174459),
    w = n(209489);
n(323874), n(14289), n(35956), n(321073), n(142703);
var M = n(284009),
    P = n.n(M),
    x = n(777915),
    U = n(61090),
    k = n(158390),
    G = n(731738),
    F = n(70298),
    V = n(636537),
    B = n(71393),
    H = n(403362),
    j = n(723176);
let Y = new h.A("GuildVersions");
class W {
    pending = new Map();
    committed = new Map();
    async getCommittedVersions() {
        try {
            let e = j.A.guildVersions();
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
                null == B.A.getGuild(n.id) && this.remove(n.id, t);
        this.commit(t);
    }
    handleConnectionOpen(e, t) {
        this.reset();
        let n = [...e.guilds.map((e) => e.id), ...e.unavailableGuilds];
        for (let i of (j.A.guildVersionsTransaction(t).deleteAllExcept(n), e.guilds)) this.updateWith(i.id, [i]);
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
                    (0, H.xb)(e);
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
            let t = j.A.guildVersionsTransaction(e);
            for (let [e, n] of this.pending)
                null != n
                    ? (t.put({ id: e, version: n }), this.committed.set(e, n))
                    : (t.delete(e), this.committed.delete(e));
            this.pending.clear();
        }
    }
}
let K = new W();
var z = n(314732),
    $ = n(214771),
    q = n(937724),
    Z = n(807393),
    X = n(464578),
    Q = n(111162),
    J = n(353835),
    ee = n(927813),
    et = n(38405);
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
class eu {
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
    class extends eu {
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
        class extends eu {
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
                    return void new h.A("GatewayCompressionHandler").error(
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
        class extends eu {
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
        class extends eu {
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
                        ? (0, O.isAndroid)()
                            ? eo?.enableZstdStreamSupport(this._socketId)
                            : ea.DCDCompressionManager.enableZstdStreamSupport(this._socketId, 0)
                        : (0, O.isAndroid)()
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
                        ((0, O.isAndroid)()
                            ? eo?.disableZlibStreamSupport(e)
                            : ea.DCDCompressionManager.disableZlibStreamSupport(e));
            }
        },
    );
class ec extends eu {
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
function ed(e) {
    if (en.P.isDiscordGatewayPlaintextSet()) return new ec(e);
    for (var t of el) if (t.canUse()) return new t(e);
    return new ec(e);
}
el.push(ec);
let e_ = BigInt(0),
    ef = BigInt(8),
    eh = BigInt(16),
    ep = BigInt(32),
    eE = BigInt(64),
    em = BigInt(128),
    eg = BigInt(256),
    eA = BigInt(65536),
    eI = BigInt(0x1000000),
    eT = BigInt(0x80000000),
    eS = BigInt(0x100000000),
    eN = BigInt(0x10000000000),
    ey = BigInt(0x1000000000000),
    eC = BigInt("72057594037927936"),
    ev = BigInt("18446744073709551615"),
    eO = BigInt("18446744073709551616"),
    eR = BigInt("340282366920938463463374607431768211455"),
    eb = BigInt("340282366920938463463374607431768211456"),
    eD = BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639935"),
    eL = BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639936");
function ew(e, t) {
    let n = e.indexOf(t?.toLowerCase() ?? "");
    return -1 === n ? void 0 : n + 1;
}
var eM = n(945810);
let eP = (0, eM.mj)({
    name: "2026-04-wetf-parser",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function ex(e) {
    return eP.getConfig({ location: e }).enabled;
}
let eU = new (class {
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
                ((this._stringEncoding = ew(["string", "binary"], e.encoding?.string) ?? 1),
                (this._keyEncoding = ew(["atom", "binary", "string"], e.encoding?.key) ?? 1),
                (this._safeIntEncoding = ew(["bigint", "float"], e.encoding?.safeInt) ?? 1),
                (this._safeBigIntEncoding = ew(["number", "bigint"], e.encoding?.safeBigInt) ?? 1),
                (this._nullEncoding = ew(["atom", "nil"], e.encoding?.null) ?? 1),
                (this._bufferEncoding = ew(["binary", "bitbinary", "string"], e.encoding?.buffer) ?? 1),
                (this._undefinedEncoding = ew(["atom", "null", "ignore"], e.encoding?.undefined) ?? 1),
                (this._infinityEncoding = ew(["atom", "null", "ignore"], e.encoding?.infinity) ?? 1),
                (this._nanEncoding = ew(["atom", "null", "ignore"], e.encoding?.nan) ?? 1),
                (this._arrayEncoding = ew(["list", "improperlist", "tuple"], e.encoding?.array) ?? 3),
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
                    if (e === e_) {
                        this._expand(3),
                            2 === this._safeBigIntEncoding
                                ? ((this._u[this._i++] = 110), (this._u[this._i++] = 0))
                                : (this._u[this._i++] = 97),
                            (this._u[this._i++] = 0);
                        break;
                    }
                    let t = e < e_,
                        n = t ? -e : e;
                    if (n < eO)
                        if ((this._expand(11), 1 === this._safeBigIntEncoding && n < eT))
                            n < eg && !t
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
                    else if (n < eb) {
                        this._expand(19),
                            (this._u[this._i] = 110),
                            (this._u[this._i + 2] = +!!t),
                            this._v.setBigUint64(this._i + 3, n & ev, !0),
                            this._v.setBigUint64(this._i + 11, n >> eE, !0);
                        for (let e = 18; e > 10; e--)
                            if (0 !== this._u[this._i + e]) {
                                (this._u[this._i + 1] = e - 2), (this._i += e + 1);
                                break;
                            }
                    } else if (n < eL) {
                        this._expand(35), (this._u[this._i] = 110), (this._u[this._i + 2] = +!!t);
                        let e = n >> em,
                            i = n & eR;
                        this._v.setBigUint64(this._i + 3, i & ev, !0),
                            this._v.setBigUint64(this._i + 11, i >> eE, !0),
                            this._v.setBigUint64(this._i + 19, e & ev, !0),
                            this._v.setBigUint64(this._i + 27, e >> eE, !0);
                        for (let e = 34; e > 18; e--)
                            if (0 !== this._u[this._i + e]) {
                                (this._u[this._i + 1] = e - 2), (this._i += e + 1);
                                break;
                            }
                    } else {
                        let e = n,
                            i = [];
                        for (; e > eD; ) {
                            let t = e & eD,
                                n = t >> em,
                                r = t & eR;
                            i.push(r & ev, r >> eE, n & ev, n >> eE), (e >>= eg);
                        }
                        if (e > eR) {
                            let t = e >> em,
                                n = e & eR;
                            i.push(n & ev, n >> eE, t & ev, t >> eE);
                        } else e > ev ? i.push(e & ev, e >> eE) : e > e_ && i.push(e);
                        let r = i[i.length - 1],
                            s =
                                8 * i.length -
                                (r < eS
                                    ? r < eA
                                        ? r < eg
                                            ? 7
                                            : 6
                                        : r < eI
                                          ? 5
                                          : 4
                                    : r < ey
                                      ? r < eN
                                          ? 3
                                          : 2
                                      : +(r < eC));
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
    ek = new (class {
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
            (this._nilDecoding = ew(["null", "array"], e.decoding?.nil) ?? 1),
                (this._stringDecoding =
                    ew(["utf8", "latin1", "buffer", "uint8array", "array"], e.decoding?.string) ?? 1),
                (this._binaryDecoding =
                    ew(["utf8", "latin1", "buffer", "uint8array", "array"], e.decoding?.binary) ?? 4),
                (this._bitbinaryDecoding =
                    ew(["utf8", "latin1", "buffer", "uint8array", "array"], e.decoding?.bitbinary) ?? 4),
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
                        for (n = e_; e > 0; )
                            e >= 8
                                ? ((n <<= eE), (n += this._v.getBigUint64(this._i + (e -= 8), !0)))
                                : e >= 4
                                  ? ((n <<= ep), (n += BigInt(this._v.getUint32(this._i + (e -= 4), !0))))
                                  : e >= 2
                                    ? ((n <<= eh), (n += BigInt(this._v.getUint16(this._i + (e -= 2), !0))))
                                    : ((n <<= ef), (n += BigInt(this._d[this._i])), e--);
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
    eG = (function () {
        let e;
        if (O.isPlatformEmbedded) {
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
                        if ((null == this._useWetf && (this._useWetf = ex("EtfEncoding")), this._useWetf)) {
                            let e = eU.pack(t);
                            return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                        }
                        return e.pack(t).buffer;
                    }
                    unpack(t) {
                        if ((null == this._useWetf && (this._useWetf = ex("EtfEncoding")), this._useWetf)) {
                            let e = t instanceof Uint8Array ? t : new Uint8Array(t);
                            try {
                                return ek.unpack(e);
                            } catch (n) {
                                throw (
                                    (et.A.captureException(n, { tags: { app_context: "WetfParser" } }),
                                    new h.A("GatewayEncodingErlpackEncoding").error("Error unpacking (wetf)", {
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
                                (new h.A("GatewayEncodingErlpackEncoding").error("Error unpacking", {
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
class eF {
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
let eV = void 0 !== eG ? eG : eF;
en.P.isDiscordGatewayPlaintextSet() && (eV = eF);
let eB = eV;
n(423034);
var eH = n(287809),
    ej = n(652215);
function eY(e) {
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
function eW(e) {
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
class eK {
    socket;
    static batchers = [];
    static flush(e, t) {
        for (let n of eK.batchers) null != n.action && (null == e || n.shouldFlush(e, t)) && n.flush();
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
            eK.batchers.push(this);
    }
    flush() {
        let { action: e } = this;
        (this.action = null),
            null != e &&
                _.h.dispatch(e).catch((t) => this.socket.resetSocketAndClearCacheOnError({ error: t, action: e.type }));
    }
}
var ez = n(365971),
    e$ =
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
    eZ =
        (((a = {}).COUNT_DISPATCHES_LEFT_AFTER_YIELD = "count_dispatches_left_after_yield"),
        (a.COUNT_FLUSH_BEFORE_QUEUE_EMPTY = "count_flush_before_queue_empty"),
        (a.COUNT_INITIAL_DISPATCHS_LENGTH = "count_initial_dispatches_length"),
        a);
let eX = Object.freeze({
        time_to_fire_idle_callback: null,
        time_to_flush_all_work: null,
        time_over_deadline: null,
        initial_time_of_deadline: null,
    }),
    eQ = Object.freeze({
        time_to_fire_idle_callback: [0, 0],
        time_to_flush_all_work: [0, 0],
        time_over_deadline: [0, 0],
        initial_time_of_deadline: [0, 0],
    }),
    eJ = Object.freeze({
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
    _timeTracking = (0, l.cloneDeep)(eX);
    _timingStats = (0, l.cloneDeep)(eQ);
    _measurements = (0, l.cloneDeep)(eJ);
    _eventCounts = (0, l.cloneDeep)(e0);
    _enabled = !1;
    reset() {
        (this._timeTracking = (0, l.cloneDeep)(eX)),
            (this._timingStats = (0, l.cloneDeep)(eQ)),
            (this._measurements = (0, l.cloneDeep)(eJ)),
            (this._eventCounts = (0, l.cloneDeep)(e0));
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
class e5 {
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
let e7 = new h.A("DispatcherWorkScheduler");
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
    _logger = e7;
    _trackAppBackgrounded(e) {
        this._isBackgrounded === e ||
            ((this._isBackgrounded = e),
            this._isBackgrounded &&
                this.hasWorkScheduled &&
                (this.telemetry.track(e$.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED), this._processWorkCallback()));
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
            e7.log("Unable to fully flush work queue after max retries, skipping future deadline."),
                this._workCallbackFn(),
                this.clearWorkTimeout(),
                this.telemetry.measure(eZ.COUNT_FLUSH_BEFORE_QUEUE_EMPTY, this._consecutiveFlushesBeforeQueueEmpty),
                this.telemetry.track(e$.EXCEEDED_MAX_CONSECUTIVE_FLUSHES),
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
                          eZ.COUNT_FLUSH_BEFORE_QUEUE_EMPTY,
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
                this._nextDispatchTimeout === e4 && this.telemetry.track(e$.LONGER_DISPATCH),
                t)
            )
                return void this._queueIdleCallback();
            this._flushTimeoutHandler = setTimeout(() => {
                if ((P()(null != this._workCallbackFn, "Work callback should be set"), this._isBackgrounded))
                    return this.telemetry.track(e$.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED), this._processWorkCallback();
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
    return null == e ? new e5(e6, !0) : new e5(e.timeRemaining(), e.didTimeout);
}
class tn extends e8 {
    _flushIdleMaxTimeoutHandler = null;
    constructor() {
        super(),
            _.h.subscribe("WINDOW_VISIBILITY_CHANGE", (e) => {
                let { visible: t, windowId: n } = e;
                n === (0, ez.Xg)() && this._trackAppBackgrounded(!t);
            });
    }
    _queueIdleCallback() {
        if (!this._enableRequestIdleCallback || this._criticalWorkScheduled) return this._processWorkCallback();
        this.telemetry.time(eq.TIME_TO_FIRE_IDLE_CALLBACK),
            this._scheduleRequestIdleCallback(
                (e) => {
                    if (e?.didTimeout) {
                        this.telemetry.track(e$.FIRED_DUE_TO_MAX_TIMEOUT),
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
let ti = new h.A("GatewaySocket"),
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
class tu {
    socket;
    scheduler = new tn();
    queue = [];
    paused = !0;
    resumeAnalytics = eW();
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
        this.scheduler.telemetry.measure(eZ.COUNT_INITIAL_DISPATCHS_LENGTH, e.length);
        try {
            let r = [];
            this.socket.connectionState === R.RESUMING && c.Ay.Emitter.pause(150);
            let s = 0;
            if (
                (c.Ay.Emitter.batched(() => {
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
                    eK.flush();
                }),
                i && c.Ay.Emitter.resume(),
                r.length > 0)
            )
                return (
                    this.scheduler.telemetry.measure(eZ.COUNT_DISPATCHES_LEFT_AFTER_YIELD, r.length),
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
        if (this.socket.connectionState === R.RESUMING) {
            let e = o - this.resumeAnalytics.lastUpdateTime;
            0 === this.resumeAnalytics.numEvents
                ? (this.resumeAnalytics.initialWaitTime = e)
                : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e),
                (this.resumeAnalytics.totalWaitTime += e),
                (this.resumeAnalytics.lastUpdateTime = o),
                (this.resumeAnalytics.numEvents += 1);
        }
        if ((eK.flush(r, i), "READY" === r)) {
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
                            user_settings_proto: u,
                            experiments: c,
                            guild_experiments: d,
                            relationships: _,
                            users: f,
                            ...h
                        } = e,
                        p = [],
                        E = [],
                        m = [],
                        g = [],
                        A = [],
                        I = [],
                        T = [],
                        S = [];
                    return (
                        n.forEach((e) => {
                            if (e.unavailable) return;
                            let { features: t, ...n } = e.properties ?? {},
                                { threads: i, guild_scheduled_events: r, ...s } = e;
                            p.push("partial" === e.data_mode ? e.partial_updates.channels : e.channels),
                                E.push("partial" === e.data_mode ? e.partial_updates.roles : e.roles),
                                m.push("partial" === e.data_mode ? e.partial_updates.emojis : e.emojis),
                                g.push(i),
                                A.push("partial" === e.data_mode ? e.partial_updates.stickers : e.stickers),
                                I.push(t),
                                T.push(r),
                                S.push(s, n);
                        }),
                        {
                            presences_size: JSON.stringify(i?.friends ?? []).length,
                            users_size: JSON.stringify(f).length,
                            read_states_size: JSON.stringify(s).length,
                            private_channels_size: JSON.stringify(a).length,
                            user_settings_size: JSON.stringify(l ?? "").length + (u ?? "").length,
                            experiments_size: JSON.stringify(c ?? []).length + JSON.stringify(d ?? []).length,
                            user_guild_settings_size: JSON.stringify(o).length,
                            relationships_size: JSON.stringify(_).length,
                            remaining_data_size: JSON.stringify(h ?? {}).length,
                            guild_channels_size: JSON.stringify(p).length,
                            guild_members_size: JSON.stringify(r ?? []).length,
                            guild_presences_size: JSON.stringify(i?.guilds ?? []).length,
                            guild_roles_size: JSON.stringify(E).length,
                            guild_emojis_size: JSON.stringify(m).length,
                            guild_threads_size: JSON.stringify(g).length,
                            guild_stickers_size: JSON.stringify(A).length,
                            guild_events_size: JSON.stringify(T).length,
                            guild_features_size: JSON.stringify(I).length,
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
                                        i++, e.type === ej.rbe.GUILD_CATEGORY && n++;
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
                L.default.track(ej.HAw.READY_PAYLOAD_RECEIVED, n, { logEventProperties: !0 });
        } else
            "RESUMED" === r
                ? (this.getDispatchHandler(r)?.dispatch(i, r, a),
                  (n = this.resumeAnalytics),
                  (!eH.default.getCurrentUser()?.isStaff() && 0.5 > Math.random()) ||
                      L.default.track(
                          ej.HAw.CONNECTION_RESUMED,
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
                  (this.resumeAnalytics = eW()))
                : this.getDispatchHandler(r)?.dispatch(i, r, a);
        this.socket.connectionState === R.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - o);
    }
    clear() {
        (this.paused = !1), (this.queue.length = 0);
    }
}
n(938796);
var tc = n(143236),
    td = n(935208),
    t_ =
        (((o = {})[(o.DISPATCH = 0)] = "DISPATCH"),
        (o[(o.HEARTBEAT = 1)] = "HEARTBEAT"),
        (o[(o.IDENTIFY = 2)] = "IDENTIFY"),
        (o[(o.PRESENCE_UPDATE = 3)] = "PRESENCE_UPDATE"),
        (o[(o.VOICE_STATE_UPDATE = 4)] = "VOICE_STATE_UPDATE"),
        (o[(o.VOICE_SERVER_PING = 5)] = "VOICE_SERVER_PING"),
        (o[(o.RESUME = 6)] = "RESUME"),
        (o[(o.RECONNECT = 7)] = "RECONNECT"),
        (o[(o.REQUEST_GUILD_MEMBERS = 8)] = "REQUEST_GUILD_MEMBERS"),
        (o[(o.INVALID_SESSION = 9)] = "INVALID_SESSION"),
        (o[(o.HELLO = 10)] = "HELLO"),
        (o[(o.HEARTBEAT_ACK = 11)] = "HEARTBEAT_ACK"),
        (o[(o.CALL_CONNECT = 13)] = "CALL_CONNECT"),
        (o[(o.GUILD_SUBSCRIPTIONS = 14)] = "GUILD_SUBSCRIPTIONS"),
        (o[(o.STREAM_CREATE = 18)] = "STREAM_CREATE"),
        (o[(o.STREAM_DELETE = 19)] = "STREAM_DELETE"),
        (o[(o.STREAM_WATCH = 20)] = "STREAM_WATCH"),
        (o[(o.STREAM_PING = 21)] = "STREAM_PING"),
        (o[(o.STREAM_SET_PAUSED = 22)] = "STREAM_SET_PAUSED"),
        (o[(o.REQUEST_GUILD_APPLICATION_COMMANDS = 24)] = "REQUEST_GUILD_APPLICATION_COMMANDS"),
        (o[(o.REQUEST_FORUM_UNREADS = 28)] = "REQUEST_FORUM_UNREADS"),
        (o[(o.REMOTE_COMMAND = 29)] = "REMOTE_COMMAND"),
        (o[(o.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH = 30)] = "GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH"),
        (o[(o.REQUEST_SOUNDBOARD_SOUNDS = 31)] = "REQUEST_SOUNDBOARD_SOUNDS"),
        (o[(o.REQUEST_LAST_MESSAGES = 34)] = "REQUEST_LAST_MESSAGES"),
        (o[(o.SEARCH_RECENT_MEMBERS = 35)] = "SEARCH_RECENT_MEMBERS"),
        (o[(o.GUILD_SUBSCRIPTIONS_BULK = 37)] = "GUILD_SUBSCRIPTIONS_BULK"),
        (o[(o.GUILD_CHANNELS_RESYNC = 38)] = "GUILD_CHANNELS_RESYNC"),
        (o[(o.REQUEST_CHANNEL_MEMBER_COUNT = 39)] = "REQUEST_CHANNEL_MEMBER_COUNT"),
        (o[(o.QOS_HEARTBEAT = 40)] = "QOS_HEARTBEAT"),
        (o[(o.UPDATE_TIME_SPENT_SESSION_ID = 41)] = "UPDATE_TIME_SPENT_SESSION_ID"),
        (o[(o.REQUEST_CHANNEL_INFO = 43)] = "REQUEST_CHANNEL_INFO"),
        o);
class tf extends tc.EventEmitter {
    presenceUpdate(e, t, n, i) {
        this.send(t_.PRESENCE_UPDATE, { status: e, since: t, activities: n, afk: i });
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
                flags: u = 0,
            } = e,
            c = { guild_id: t, channel_id: n, self_mute: i, self_deaf: r, self_video: s, flags: u };
        null != n && N.A.shouldIncludePreferredRegion() && ((c.preferred_region = a), (c.preferred_regions = o)),
            null != l && (c.tracks = l?.map((e) => ({ type: e.type, rid: e.rid, quality: e.quality }))),
            this.send(t_.VOICE_STATE_UPDATE, c);
    }
    voiceServerPing() {
        this.send(t_.VOICE_SERVER_PING, null);
    }
    requestGuildMembers(e, t) {
        let { query: n, limit: i, userIds: r, presences: s } = t;
        this.send(t_.REQUEST_GUILD_MEMBERS, { guild_id: e, query: n, limit: i, user_ids: r, presences: s });
    }
    searchRecentMembers(e, t) {
        let { query: n, continuationToken: i } = t;
        this.send(t_.SEARCH_RECENT_MEMBERS, { guild_id: e, query: n ?? "", continuation_token: i ?? null });
    }
    updateGuildSubscriptions(e) {
        let t = {},
            n = 0;
        td.default.keys(e).forEach((i) => {
            let r = e[i],
                s = JSON.stringify([i, r]).length;
            n + s > 15360 && (this.send(t_.GUILD_SUBSCRIPTIONS_BULK, { subscriptions: t }), (t = {}), (n = 0)),
                (t[i] = r),
                (n += s);
        }),
            n > 0 && this.send(t_.GUILD_SUBSCRIPTIONS_BULK, { subscriptions: t });
    }
    callConnect(e) {
        this.send(t_.CALL_CONNECT, { channel_id: e });
    }
    streamCreate(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.send(t_.STREAM_CREATE, { type: e, guild_id: t, channel_id: n, preferred_region: i });
    }
    streamWatch(e) {
        this.send(t_.STREAM_WATCH, { stream_key: e });
    }
    streamPing(e) {
        this.send(t_.STREAM_PING, { stream_key: e });
    }
    streamDelete(e) {
        this.send(t_.STREAM_DELETE, { stream_key: e });
    }
    streamSetPaused(e, t) {
        this.send(t_.STREAM_SET_PAUSED, { stream_key: e, paused: t });
    }
    requestForumUnreads(e, t, n) {
        this.send(t_.REQUEST_FORUM_UNREADS, {
            guild_id: e,
            channel_id: t,
            threads: n.map((e) => ({ thread_id: e.threadId, ack_message_id: e.ackMessageId })),
        });
    }
    requestSoundboardSounds(e) {
        this.send(t_.REQUEST_SOUNDBOARD_SOUNDS, { guild_ids: e });
    }
    requestLastMessages(e, t) {
        this.send(t_.REQUEST_LAST_MESSAGES, { guild_id: e, channel_ids: t });
    }
    getDeletedEntityIdsNotMatchingHash(e, t, n, i, r) {
        this.send(t_.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH, {
            guild_id: e,
            channel_ids_hash: t,
            role_ids_hash: n,
            emoji_ids_hash: i,
            sticker_ids_hash: r,
        });
    }
    triggerGuildChannelResync(e, t) {
        this.send(t_.GUILD_CHANNELS_RESYNC, { guild_id: e, obfuscated_channel_ids: t });
    }
    requestChannelInfo(e, t) {
        this.send(t_.REQUEST_CHANNEL_INFO, { guild_id: e, fields: t });
    }
    requestChannelMemberCount(e, t) {
        this.send(t_.REQUEST_CHANNEL_MEMBER_COUNT, { guild_id: e, channel_id: t });
    }
    remoteCommand(e, t) {
        this.send(t_.REMOTE_COMMAND, { target_session_id: e, payload: t });
    }
}
let th = !1;
var tp = n(981133),
    tE = n(751124);
let tm = new h.A("GatewaySocket"),
    tg = new eB();
function tA() {}
let tI = 30 * ee.A.Millis.SECOND,
    tT = 3 * ee.A.Millis.MINUTE,
    tS = +ee.A.Millis.MINUTE;
function tN(e) {
    return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength;
}
let ty = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
class tC extends tf {
    gatewayBackoff;
    handleIdentify;
    dispatchExceptionBackoff = new k.A(1e3, tS);
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
        tm.verbose(`Setting connection state to ${e}`), (this.connectionState_ = e);
    }
    constructor() {
        super(),
            (this.dispatcher = new tu(this)),
            (this.gatewayBackoff = new k.A(1e3, 6e4)),
            (this.connectionState_ = R.CLOSED),
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
            (this.compressionHandler = ed(tg)),
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
            null !== e && tm.verbose(`Updating resume url to ${e}`),
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
        this.connectionState_ === R.SESSION_ESTABLISHED &&
            (this.send(t_.UPDATE_TIME_SPENT_SESSION_ID, {
                initialization_timestamp: e,
                session_id: t,
                client_launch_id: n,
            }),
            this._sendHeartbeat());
    }
    _connect() {
        var e, t, n;
        let i, r;
        if (!this.willReconnect()) return void tm.verbose("Skipping _connect because willReconnect is false");
        if (th) return void tm.info("Skipping _connect because socket is paused");
        (this.connectionState = R.CONNECTING), (this.nextReconnectIsImmediate = !1);
        let s = this.compressionHandler.getAlgorithm(),
            a = tg.getName(),
            o = this._getGatewayUrl(),
            l = window.GLOBAL_ENV.API_VERSION;
        U.A.mark("\uD83C\uDF10", "Socket._connect"),
            tm.info(`[CONNECT] ${o}, encoding: ${a}, version: ${l}, compression: ${s ?? "none"}`),
            null !== this.webSocket &&
                (tm.error("_connect called with already existing websocket"), this._cleanup((e) => e.close(4e3))),
            (this.connectionStartTime = Date.now()),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this._handleClose(!1, 0, `The connection timed out after ${e} ms - did not receive OP_HELLO in time.`),
                    this.setResumeUrl(null);
            }, tI));
        let u = new URL(o);
        u.searchParams.append("encoding", a),
            u.searchParams.append("v", l.toString()),
            null != s && u.searchParams.append("compress", s),
            !(function (e) {
                let t,
                    { gatewayURL: n, newCallback: i, onOpen: r, onMessage: s, onError: a, onClose: o } = e;
                tm.enableNativeLogger(!0);
                let l = window._ws,
                    u = !1,
                    c = !1,
                    d = null,
                    _ = null;
                if (((window._ws = null), null != l))
                    if (((t = l.ws), l.state.gateway !== n))
                        tm.verbose(`[FAST CONNECT] gatewayURL mismatch: ${l.state.gateway} !== ${n}`),
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
                            tm.log("[FAST CONNECT] successfully took over websocket, state:", {
                                ...e,
                                messages: e.messages?.length,
                            }),
                            (u = l.state.open),
                            (c = l.state.identify),
                            (d = l.state.messages),
                            (_ = l.state.clientState);
                    }
                null == t && ((t = (0, tE.A)(n)).binaryType = "arraybuffer"),
                    i(t),
                    u && r(c, _),
                    null != d && d.forEach(s),
                    (t.onopen = () => r(c, _)),
                    (t.onmessage = s),
                    (t.onclose = o),
                    (t.onerror = a);
            })({
                gatewayURL: u.toString(),
                newCallback: (e) => {
                    (this.webSocket = e), this.compressionHandler.bindWebSocket(e);
                },
                onOpen: (e) => {
                    U.A.mark(`\u{1F310}`, `GatewaySocket.onOpen ${e}`);
                    let t = Date.now() - this.connectionStartTime;
                    tm.info(`[CONNECTED] ${u.toString()} in ${t} ms`),
                        (this.isFastConnect = e),
                        e ? this._doFastConnectIdentify() : this._doResumeOrIdentify();
                },
                onMessage:
                    ((e = this.compressionHandler),
                    (t = this._handleClose.bind(this)),
                    (n = (e, t) => {
                        let n = Date.now(),
                            { op: i, s: r, t: s, d: a } = tg.unpack(e);
                        if (
                            (i !== t_.DISPATCH && U.A.mark(`\u{1F310}`, `GatewaySocket.onMessage ${i} ${t_[i]}`),
                            Q.default.isLoggingGatewayEvents)
                        ) {
                            let e = [i];
                            i === t_.DISPATCH && e.push(s), e.push(a), tm.verboseDangerously("<~", ...e);
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
                            case t_.HELLO:
                                this._clearHelloTimeout(), this._handleHello(a);
                                break;
                            case t_.RECONNECT:
                                this._handleReconnect();
                                break;
                            case t_.INVALID_SESSION:
                                this._handleInvalidSession(a);
                                break;
                            case t_.HEARTBEAT:
                                this._handleHeartbeatReceive();
                                break;
                            case t_.HEARTBEAT_ACK:
                                this._handleHeartbeatAck(a);
                                break;
                            case t_.DISPATCH:
                                this._handleDispatch(
                                    a,
                                    s,
                                    "READY" === s
                                        ? {
                                              compressed_byte_size: t,
                                              uncompressed_byte_size: tN(e),
                                              compression_algorithm: this.compressionHandler.getAlgorithm(),
                                              packing_algorithm: tg.getName(),
                                              unpack_duration_ms: o,
                                          }
                                        : null,
                                );
                                break;
                            default:
                                tm.info(`Unhandled op ${i}`);
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
        tm.verbose(`[HELLO] via ${eY(e)}, heartbeat interval: ${t}, took ${n} ms`), this._startHeartbeater();
    }
    _handleReconnect() {
        tm.verbose("[RECONNECT] gateway requested I reconnect."),
            this._cleanup((e) => e.close(4e3)),
            (this.connectionState = R.WILL_RECONNECT),
            this._connect();
    }
    _handleInvalidSession(e) {
        tm.info(`[INVALID_SESSION]${e ? " can resume)" : ""}`), e ? this._doResumeOrIdentify() : this._doIdentify();
    }
    _handleDispatch(e, t, n) {
        let i = Date.now() - this.connectionStartTime;
        if ("READY" === t) {
            let t = e.session_id;
            this.sessionId = t;
            let n = eY(e);
            U.A.setServerTrace(n),
                tm.info(`[READY] took ${i}ms, as ${t}`),
                tm.verbose(`${n}`),
                (this.connectionState = R.SESSION_ESTABLISHED),
                this.gatewayBackoff.succeed(),
                (this.iosGoingAwayEventCount = 0),
                this.setResumeUrl(e.resume_gateway_url);
        } else
            "READY_SUPPLEMENTAL" === t
                ? (tm.info(`[READY_SUPPLEMENTAL] took ${i}ms`),
                  (this.connectionState = R.SESSION_ESTABLISHED),
                  this.gatewayBackoff.succeed(),
                  (this.iosGoingAwayEventCount = 0))
                : "RESUMED" === t &&
                  (tm.verbose(eY(e)),
                  (this.connectionState = R.SESSION_ESTABLISHED),
                  this.gatewayBackoff.succeed(),
                  (this.iosGoingAwayEventCount = 0));
        this.dispatcher.receiveDispatch(e, t, n);
    }
    handleResumeDispatched() {
        let e = Date.now() - this.connectionStartTime;
        tm.info(
            `[RESUMED] took ${e}ms, replayed ${this.dispatcher.resumeAnalytics.numEvents} events, new seq: ${this.seq}`,
        );
    }
    handleReadyDispatched() {
        (this.didForceClearGuildHashes = !1), (this.hasConnectedOnce = !0);
    }
    _getGatewayUrl() {
        return null != this.resumeUrl ? this.resumeUrl : ty;
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
                tm.verbose("Expedited heartbeat succeeded"));
    }
    _handleHeartbeatTimeout() {
        this._cleanup((e) => e.close(4e3)), (this.connectionState = R.WILL_RECONNECT);
        let e = this.gatewayBackoff.fail(() => this._connect());
        tm.warn(`[ACK TIMEOUT] reconnecting in ${(e / 1e3).toFixed(2)} seconds.`);
    }
    _handleClose(e, t, n) {
        if (((e = e || !1), this._cleanup(), this.emit("close", { code: t, reason: n }), 4004 === t))
            return (
                (this.connectionState = R.CLOSED),
                tm.warn("[WS CLOSED] because of authentication failure, marking as closed."),
                this._reset(e, t, n)
            );
        if (
            (this._tryDetectInvalidIOSToken(t, n, e),
            (this.connectionState = R.WILL_RECONNECT),
            this.nextReconnectIsImmediate)
        )
            tm.info(`[WS CLOSED] (${e.toString()}, ${t}, ${n}) retrying immediately.`), this._connect();
        else {
            let i = this.gatewayBackoff.fail(() => this._connect());
            tm.info(`[WS CLOSED] (${e.toString()}, ${t}, ${n}) retrying in ${(i / 1e3).toFixed(2)} seconds.`),
                this.gatewayBackoff.fails > 4 && this._reset(e, t, n);
        }
    }
    _tryDetectInvalidIOSToken(e, t, n) {
        (0, O.isIOS)() &&
            null != this.token &&
            1001 === e &&
            "Stream end encountered" === t &&
            ((this.iosGoingAwayEventCount += 1),
            3 === this.iosGoingAwayEventCount &&
                V.Bo.get({ url: ej.Rsh.ME, headers: { authorization: this.token }, rejectWithError: !1 }).then(
                    (e) => {
                        let { status: t } = e;
                        L.default.track(ej.HAw.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                    },
                    (e) => {
                        let { status: t } = e;
                        401 === t &&
                            ((this.connectionState = R.CLOSED),
                            tm.warn("[WS CLOSED] because of manual authentication failure, marking as closed."),
                            this._reset(n, 4004, "invalid token manually detected")),
                            L.default.track(ej.HAw.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                    },
                ));
    }
    _reset(e, t, n) {
        (this.sessionId = null),
            (this.seq = 0),
            tm.warn(`[RESET] (${e.toString()}, ${t}, ${n})`),
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
        P()(null != e, "GatewaySocket: Heartbeat interval should never null here."),
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
        c.Ay.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
        let t = this.webSocket;
        (this.webSocket = null),
            null != t && ((t.onopen = tA), (t.onmessage = tA), (t.onerror = tA), (t.onclose = tA), e?.(t)),
            this.gatewayBackoff.cancel(),
            this.compressionHandler.close(),
            (this.compressionHandler = ed(tg));
    }
    _doResume() {
        (this.connectionState = R.RESUMING),
            (this.dispatcher.resumeAnalytics = eW(Date.now() - this.connectionStartTime)),
            tm.info(`[RESUME] resuming session ${this.sessionId ?? ""}, seq: ${this.seq}`),
            this.send(t_.RESUME, { token: this.token, session_id: this.sessionId, seq: this.seq }, !1);
    }
    async _doIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, 4004, "No connection info provided");
        this.connectionState = R.IDENTIFYING;
        let t = Date.now();
        this.identifyStartTime = t;
        let [n, i, r] = await Promise.all([
                (0, q.O)() ? K.getCommittedVersions() : {},
                (0, q.O)() ? $.A.getCommittedVersions() : {},
                !!(0, q.O)() && z.A.canUseGuildVersions(),
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
        if (this.connectionState !== R.IDENTIFYING || this.identifyStartTime !== t)
            return void tm.warn("Skipping identify because connectionState or identifyStartTime has changed");
        let { token: a, properties: o = {}, presence: l } = e;
        (this.token = a), tm.verbose("[IDENTIFY]");
        let u = {
                token: a,
                capabilities: (function (e) {
                    let { useChannelObfuscation: t } = e;
                    return t ? 1767421 : 1734653;
                })({ useChannelObfuscation: (0, tp.RK)("GatewaySocket") }),
                properties: o,
                presence: l,
                compress: this.compressionHandler.usesLegacyCompression(),
                client_state: s,
            },
            c = JSON.stringify(u);
        (this.identifyUncompressedByteSize = c.length),
            (this.identifyCompressedByteSize = x.deflate(c).length),
            (this.identifyCount += 1),
            this.send(t_.IDENTIFY, u, !1),
            L.default.track(ej.HAw.SESSION_START_CLIENT, {});
    }
    _doFastConnectIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, 4004, "No connection info provided");
        let { token: t } = e;
        (this.token = t),
            (this.connectionState = R.IDENTIFYING),
            (this.identifyStartTime = Date.now()),
            (this.identifyCount += 1),
            tm.verbose("[IDENTIFY, fast-connect]"),
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
        this.send(t_.QOS_HEARTBEAT, { seq: this.seq, qos: e }, !1), (this.lastHeartbeatTime = Date.now());
    }
    getLogger() {
        return tm;
    }
    willReconnect() {
        return this.connectionState === R.WILL_RECONNECT;
    }
    isClosed() {
        return this.connectionState === R.CLOSED;
    }
    isSessionEstablished() {
        return this.connectionState === R.SESSION_ESTABLISHED || this.connectionState === R.RESUMING;
    }
    isConnected() {
        return (
            this.connectionState === R.IDENTIFYING ||
            this.connectionState === R.RESUMING ||
            this.connectionState === R.SESSION_ESTABLISHED
        );
    }
    connect() {
        return this.isClosed()
            ? (tm.verbose(".connect() called, new state is WILL_RECONNECT"),
              (this.connectionState = R.WILL_RECONNECT),
              this._connect(),
              !0)
            : (tm.error("Cannot start a new connection, connection state is not closed"), !1);
    }
    resetSocketAndClearCacheOnError(e) {
        let { action: t, error: n, metricAction: i } = e;
        tm.error(`resetSocketAndClearCacheOnError during ${t}: ${n.message}`, n.stack);
        let r = (0, F.b)();
        Z.A.increment({ name: G.K.SOCKET_CRASHED, tags: [`action:${i ?? t}`, `modded_client:${r}`] }, !0),
            !1 !== e.sentry && et.A.captureException(n, { tags: { socketCrashedAction: t } }),
            L.default.track(ej.HAw.GATEWAY_SOCKET_RESET, {
                error_message: n.message,
                error_stack: n.stack,
                has_client_mods: r,
                action: t,
            }),
            this._cleanup((e) => e.close()),
            this._reset(!0, 1e3, "Resetting socket due to error."),
            this.dispatcher.clear(),
            (this.connectionState = R.WILL_RECONNECT),
            this.dispatchExceptionBackoff.cancel(),
            0 === this.dispatchExceptionBackoff._fails
                ? (tm.verbose("Triggering fast reconnect"),
                  this.dispatchExceptionBackoff.fail(() => {}),
                  setTimeout(() => this._connect(), 0))
                : this.dispatchExceptionBackoff.fail(() => this._connect()),
            (this.didForceClearGuildHashes = !0),
            _.h.dispatch({ type: "CLEAR_CACHES", reason: `Socket reset during ${t}` }),
            _.h.dispatch({ type: "LIBDISCORE_RESET" }),
            clearTimeout(this.dispatchSuccessTimer),
            (this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * tS));
    }
    resetSocketOnDispatchError(e) {
        let t = null != e.error.message && e.error.message.indexOf("Guild data was missing from store") >= 0;
        this.resetSocketAndClearCacheOnError({ ...e, sentry: !t });
    }
    close() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.isClosed()) return void tm.verbose("close() called, but socket is already closed.");
        tm.info(`Closing connection, current state is ${this.connectionState}`);
        let t = e ? 4e3 : void 0;
        this._cleanup((e) => e.close(t)),
            (this.connectionState = R.CLOSED),
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
                tm.verbose(`Performing an expedited heartbeat ${null != t && "" !== t ? "reason: " + t : ""}`),
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
                : tm.verbose(
                      `Expedited heartbeat requested, but, connection state is ${this.connectionState} and reconnectImmediately was not requested ${null != t && "" !== t ? "reason: " + t : ""}`,
                  );
        }
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        tm.verbose(`Connection has reset backoff${null != e && "" !== e ? " for reason: " + e : ""}`),
            this.gatewayBackoff.succeed(),
            (this.iosGoingAwayEventCount = 0),
            (this.nextReconnectIsImmediate = !0),
            this.willReconnect()
                ? this._connect()
                : t && this.connectionState !== R.SESSION_ESTABLISHED && this._handleClose(!0, 0, e);
    }
    send = (e, t, n) => {
        Q.default.isLoggingGatewayEvents && tm.verboseDangerously("~>", e, t_[e], t);
        let i = tg.pack({ op: e, d: t });
        if (!n || this.isSessionEstablished())
            try {
                null != this.webSocket && this.webSocket.send(i);
            } catch (e) {}
        else tm.warn(`Attempted to send while not being in a connected state opcode: ${e}`);
    };
}
var tv = n(812729),
    tO = n.n(tv);
class tR {
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
        if (t) this.dirty = !tO()(n, this.getInitialState());
        else for (let e of Object.keys(n)) this.dirty = this.dirty || !tO()(this.state[e], n[e]);
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
class tb extends tR {
    socket;
    switchingAccounts = !1;
    constructor(e) {
        super(!1), (this.socket = e);
    }
    getInitialState() {
        return C.A.getLocalPresence();
    }
    getNextState() {
        return C.A.getLocalPresence();
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
var tD = n(665260),
    tL = n(572164),
    tw = n(952818),
    tM = n(885386),
    tP = n(616356),
    tx = n(469177);
let tU = new h.A("ConnectionStore"),
    tk = new tC(),
    tG = new tb(tk),
    tF = new (class extends tR {
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
                t = tM.Q$.getSetting();
            e = (0, tD.lA)(e, ej.Ajs.ALLOW_VOICE_RECORDING, t);
            let n =
                    (0, tL.TD)() &&
                    (tP.A.getCurrentUserActiveStream()?.state === ej.XYD.ACTIVE ||
                        tP.A.getCurrentUserActiveStream()?.state === ej.XYD.PAUSED),
                i = (0, tL.Ao)() && tw.Ay.getVisibleGame()?.windowHandle != null;
            return (0, tD.lA)(e, ej.Ajs.CLIPS_ENABLED, n || i);
        }
        getInitialState() {
            return {
                guildId: null,
                channelId: null,
                selfMute: T.Ay.isSelfMute(),
                selfDeaf: T.Ay.isSelfDeaf(),
                selfVideo: T.Ay.isVideoEnabled(),
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
                selfMute: T.Ay.isSelfMute(),
                selfDeaf: T.Ay.isSelfDeaf(),
                selfVideo: T.Ay.isVideoEnabled(),
                preferredRegion: N.A.getPreferredRegion(),
                preferredRegions: N.A.getPreferredRegions(),
                videoStreamParameters: T.Ay.getVideoStreamParameters(),
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
                flags: u = 0,
            } = e;
            s && I.A.getChannel(n)?.type === ej.rbe.GUILD_STAGE_VOICE
                ? this.socket.voiceStateUpdate({
                      guildId: t,
                      channelId: n,
                      selfMute: i,
                      selfDeaf: r,
                      selfVideo: s,
                      preferredRegion: a,
                      preferredRegions: o,
                      videoStreamParameters: l,
                      flags: u,
                  })
                : this.socket.voiceStateUpdate({
                      guildId: t,
                      channelId: n,
                      selfMute: i,
                      selfDeaf: r,
                      selfVideo: s,
                      preferredRegion: a,
                      preferredRegions: o,
                      flags: u,
                  });
        }
    })(tk);
(tk.handleIdentify = () => {
    let e = g.default.getToken();
    if ((tU.verbose("handleIdentify called", { hasToken: null != e }), null == e)) return null;
    let t = D.A.getState(),
        n = g.default.getInstallationForTracking();
    return {
        token: e,
        properties: {
            ...L.default.getSuperProperties(),
            client_app_state: t,
            is_fast_connect: !1,
            gateway_connect_reasons: tx.L7(),
            ...(null != n ? { installation_id: n } : {}),
        },
        presence: tG.getInitialState(),
    };
}),
    (0, O.isDesktop)() &&
        b.A.powerMonitor.on("resume", () => {
            tk.expeditedHeartbeat(5e3, "power monitor resumed");
        }),
    w.A.addOfflineCallback(() => {
        tk.networkStateChange(15e3, "network detected offline.", !1);
    }),
    w.A.addOnlineCallback(() => {
        tk.networkStateChange(5e3, "network detected online.");
    }),
    tk.on("disconnect", (e) => {
        let { code: t, reason: n } = e;
        _.h.dispatch({ type: "CONNECTION_CLOSED", code: t, reason: n });
    }),
    tk.on("close", (e) => {
        let { code: t, reason: n } = e;
        _.h.dispatch({ type: "CONNECTION_INTERRUPTED", code: t, reason: n });
    }),
    n(237751);
var tV = n(73825),
    tB = n(803306),
    tH = n(821956),
    tj = n(628856),
    tY = n(945096),
    tW = n(692744),
    tK = n(814890),
    tz = n(505527),
    t$ = n(853811),
    tq = n(381438);
let tZ = (0, eM.mj)({
    kind: "user",
    name: "2026-02-content-classification-presence-filter",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tX = n(756377),
    tQ = n(736130),
    tJ = n(761821),
    t0 = n(843010),
    t1 = n(95701),
    t2 = n(545934),
    t3 = n(889227),
    t6 = n(696451),
    t4 = n(977997),
    t5 = n(97352),
    t7 = n(166403),
    t8 = n(107351),
    t9 = n(531743),
    ne = n(45773);
let nt = null,
    nn = {};
function ni(e, t, n) {
    return null == nt || nt.identifyTime !== e || (null != t && t.some((e) => e.id === nt.guild.id))
        ? null
        : n(nt.guild);
}
function nr(e, t) {
    let n = [];
    return (
        t?.forEach((t) => {
            if (null == t) return;
            let i = t.user_id;
            null != i && (P()(null != e[i], `Missing user[${i}] in compressed ready payload`), (t.user = e[i])),
                delete t.user_id,
                n.push(t);
        }),
        n
    );
}
function ns(e) {
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
              threads: e.threads?.map((t) => (0, t1.UE)(t, e.id)) ?? [],
              threadMessages: no(e.threads),
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, t1.UE)(t, e.id))) },
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          }
        : {
              id: e.id,
              dataMode: e.data_mode,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, t1.UE)(t, e.id)) ?? [],
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
              threads: e.threads?.map((t) => (0, t1.UE)(t, e.id)) ?? [],
              threadMessages: no(e.threads),
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function na(e) {
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
              threads: e.threads?.map((t) => (0, t1.UE)(t, e.id)) ?? [],
              threadMessages: no(e.threads),
              presences: e.presences,
              activity_instances: e.activity_instances,
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
              emojis: { op: "full_sync", items: e.emojis },
              stickers: { op: "full_sync", items: e.stickers },
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, t1.UE)(t, e.id))) },
          }
        : {
              id: e.id,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, t1.UE)(t, e.id)) ?? [],
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
              threads: e.threads?.map((t) => (0, t1.UE)(t, e.id)) ?? [],
              threadMessages: no(e.threads),
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function no(e) {
    let t = [];
    if (null != e) for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
    return t;
}
let nl = new h.A("ConnectionStore");
function nu(e) {
    return e.map((e) => {
        let t = e.timestamps?.end,
            n = e.created_at;
        return null != t && null != n
            ? { ...e, timestamps: { ...e.timestamps, isCountDown: t > n && e.type !== ej.$pd.LISTENING } }
            : e;
    });
}
let nc = new eK(
        tk,
        (e, t) => {
            e = e ?? { type: "CHANNEL_UPDATES", channels: [] };
            let n = (0, t1.UE)(t),
                i = I.A.getChannel(t.id),
                r = i?.merge({ ...n, recipients: i.recipients, bitrate: n.bitrate ?? i.bitrate });
            return e.channels.push(r ?? n), e;
        },
        (e) => "CHANNEL_UPDATE" !== e,
    ),
    nd = new eK(
        tk,
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
    n_ = new eK(
        tk,
        (e, t) => ((e = e ?? { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] }).chunks.push(t), e),
        (e) => "GUILD_MEMBERS_CHUNK" !== e,
    ),
    nf = new eK(
        tk,
        (e, t) => ((e = null == e ? { type: "PRESENCE_UPDATES", updates: [] } : e).updates.push(t), e),
        (e) => "PRESENCE_UPDATE" !== e && "GUILD_MEMBERS_CHUNK" !== e,
    ),
    nh = {};
function np(e, t) {
    for (let n of e) nh[n] = { preload: () => null, dispatch: t };
}
function nE(e, t, n) {
    for (let i of e) nh[i] = { preload: t, dispatch: n };
}
function nm(e) {
    let t = [];
    for (let n of e)
        null != n.member && nA(n.guild_id, n.member.user, n.member),
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
                oldChannelId: t4.A.getUserVoiceChannelId(n.guild_id, n.user_id),
                connectedAt: n.connected_at,
            });
    ng({ type: "VOICE_STATE_UPDATES", voiceStates: t });
}
function ng(e) {
    _.h.dispatch(e).catch((t) => {
        nl.error(`dispatchOrResetSocket error during ${e.type}:`, t),
            tk.resetSocketOnDispatchError({ error: t, action: e.type });
    });
}
function nA(e, t, n) {
    let {
            roles: i,
            nick: r,
            avatar: s,
            avatar_decoration_data: a,
            flags: o,
            premium_since: l,
            pending: c,
            joined_at: d,
            communication_disabled_until: _,
            unusual_dm_activity_until: f,
            collectibles: h,
            display_name_styles: p,
        } = n,
        E = t6.Ay.getMember(e, t.id),
        m = (0, tj.t)(h),
        g = (0, tY.mT)(p);
    (null != E &&
        E.nick === r &&
        E.avatar === s &&
        u().isEqual(E.roles, i) &&
        (0, tH.kn)(E.avatarDecoration ?? null, a ?? null) &&
        E.premiumSince === l &&
        E.isPending === c &&
        E.joinedAt === d &&
        E.communicationDisabledUntil === _ &&
        E.flags === o &&
        (E.unusualDMActivityUntil ?? null) === (f ?? null) &&
        u().isEqual(E.collectibles ?? null, m ?? null) &&
        u().isEqual(E.displayNameStyles ?? null, g ?? null)) ||
        ng({
            type: "GUILD_MEMBER_ADD",
            guildId: e,
            user: t,
            roles: i,
            nick: r,
            avatar: s,
            avatarDecoration: a,
            premiumSince: l,
            isPending: c,
            joinedAt: d,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: f,
            flags: o,
            collectibles: m,
            displayNameStyles: g,
        });
}
function nI(e) {
    let { member: t, mentions: n, author: i, guild_id: r } = e;
    null != t && null != r && nA(r, i, t),
        null != n &&
            n.forEach((e) => {
                if (null != e.member && null != r) {
                    let { member: t } = e;
                    delete e.member, nA(r, e, t);
                }
            });
}
function nT(e) {
    return e.map((e) => ({
        sessionId: e.session_id,
        lastModified: e.last_modified,
        status: e.status,
        activities: nu(e.activities ?? []),
        hiddenActivities: e.hidden_activities ?? [],
        active: !!e.active,
        clientInfo: e.client_info,
    }));
}
function nS(e, t) {
    return e.map((e) => nN(e, t));
}
function nN(e, t) {
    let n = (function (e, t) {
        let { enabled: n } = tZ.getConfig({ location: "presence_filtering" });
        if (!n) return { activities: e, hiddenActivities: t };
        let i = [],
            r = [];
        for (let t of e)
            (
                t.content_classification?.loaded
                    ? null == t.content_classification.data
                        ? 0
                        : (0, t$.U1)({ type: t$.fS.MINIMAL, data: t.content_classification.data }) !== tq.Y.EVERYONE
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
        activities: nu(n.activities),
        hiddenActivities: n.hiddenActivities,
        guildId: t,
        processedAtTimestamp: e.processed_at_timestamp,
    };
}
function ny(e) {
    nf.add(e);
}
nE(
    ["INITIAL_GUILD"],
    (e) => ("full" === e.data_mode ? null : I.D.loadGuildIds([e.id])),
    (e) => {
        X.A.initialGuild.measure(() => {
            c.Ay.Emitter.batched(() => {
                var t;
                let n,
                    i = ((t = tk.identifyStartTime), (n = na(e)), (nt = { guild: e, identifyTime: t }), n);
                null != eH.default.getCurrentUser() &&
                    (ng({ type: "GUILD_CREATE", guild: i }),
                    ng({
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
                    nl.log(`Dispatched INITIAL_GUILD ${e.id}`));
            });
        });
    },
),
    np(["READY_SUPPLEMENTAL"], (e) => {
        X.A.readySupplemental.measure(() => {
            c.Ay.Emitter.batched(() => {
                let t = (e = X.A.hydrateReadySupplemental.measure(() =>
                    (function (e, t) {
                        let { guilds: n, merged_members: i, merged_presences: r, ...s } = e,
                            a = nr(nn, r?.friends),
                            o =
                                n?.map((e, t) => {
                                    let n = nr(nn, r?.guilds[t]),
                                        s = nr(nn, i?.[t]);
                                    return { ...e, unavailable: void 0 === e.voice_states, presences: n, members: s };
                                }) ?? [],
                            l = ni(t, n, (e) => ({
                                id: e.id,
                                members: e.members,
                                presences: e.presences,
                                activity_instances: e.activity_instances,
                                voice_states: e.voice_states,
                                unavailable: !1,
                            }));
                        return null != l && o.push(l), (nn = {}), { ...s, presences: a, guilds: o };
                    })(e, tk.identifyStartTime),
                )).guilds.filter((e) => !0 !== e.unavailable);
                t.forEach((e) => {
                    e.presences = nS(e.presences || [], e.id);
                });
                let n = nS(e.presences ?? [], void 0),
                    i = (e.lazy_private_channels ?? []).map((e) => (0, t1.UE)(e));
                X.A.dispatchReadySupplemental.measure(() => {
                    ng({ type: "CONNECTION_OPEN_SUPPLEMENTAL", guilds: t, presences: n, lazyPrivateChannels: i });
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
                    ng({ type: "VOICE_STATE_UPDATES", voiceStates: r, initial: !0 }),
                    tF.update();
            });
        }),
            setTimeout(() => ng({ type: "POST_CONNECTION_OPEN" }), 2e3);
    }),
    nE(
        ["READY"],
        (e) => {
            let t,
                n,
                i =
                    ((t = j.A.database()),
                    (n = (0, q.O)() ? K.getCommittedVersions() : Promise.resolve({})),
                    Promise.all([
                        n,
                        (0, q.O)() ? t9.A.getGuildIds() : Promise.resolve(new Set()),
                        null != t ? z.A.okAsync(t) : Promise.resolve(!1),
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
                ? ng({ type: "LOGOUT" })
                : X.A.ready.measure(() => {
                      c.Ay.Emitter.batched(() => {
                          let t = (e = X.A.hydrateReady.measure(() =>
                                  (function (e, t, n) {
                                      let { users: i, private_channels: r, merged_members: s, guilds: a, ...o } = e;
                                      null != j.A.database() &&
                                          !1 === n.databaseOk &&
                                          ne.A.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"),
                                          (nn = u().keyBy(i, (e) => e.id)),
                                          r?.forEach((e) => {
                                              let t = e.recipient_ids;
                                              null != t &&
                                                  (e.recipients = t.map(
                                                      (e) => (
                                                          P()(
                                                              null != nn[e],
                                                              "Missing user in compressed ready payload",
                                                          ),
                                                          nn[e]
                                                      ),
                                                  )),
                                                  delete e.recipient_ids;
                                          });
                                      let l =
                                              a?.map((e, t) =>
                                                  !0 === e.unavailable ? e : ((e.members = nr(nn, s?.[t])), ns(e)),
                                              ) ?? [],
                                          c = ni(t, a, (e) => ns(e));
                                      return (
                                          null != c && l.push(c),
                                          { ...o, users: i, presences: [], guilds: l, private_channels: r ?? [] }
                                      );
                                  })(e, tk.identifyStartTime, n),
                              )).private_channels.map((e) => (0, t1.UE)(e)),
                              i = e.guilds
                                  .filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted)
                                  .map((e) => e.id),
                              r = e.guilds.filter((e) => !0 !== e.unavailable),
                              s = e.guilds.filter((e) => !0 === e.geo_restricted),
                              a = null == e.user_settings_proto ? void 0 : (0, tJ.Gd)(e.user_settings_proto);
                          X.A.dispatchReady.measure(() => {
                              ng({
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
                                  sessions: nT(e.sessions ?? []),
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
                                  ng({ type: "UPDATE_TOKEN", token: e.auth_token, userId: e.user.id }),
                              null != e.ad_personalization_toggles_disabled &&
                                  ng({
                                      type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED",
                                      disabled: e.ad_personalization_toggles_disabled,
                                  }),
                              tG.update(),
                              tF.update();
                      });
                  });
        },
    ),
    np(["STATE_UPDATE"], (e) => {
        ng({ type: "CONNECTION_OPEN_STATE_UPDATE", apexExperiments: e.apex_experiments ?? void 0 });
    }),
    np(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (e) => {
        _.h.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE",
            experimentName: e.experiment_name,
            variantId: e.variant_id,
        });
    }),
    np(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (e) => {
        _.h.dispatch({ type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: e.experiment_name });
    }),
    np(["RESUMED"], () => {
        tG.forceUpdate(), tF.forceUpdate(), ng({ type: "CONNECTION_RESUMED" });
    }),
    np(["TYPING_START"], (e) => {
        null != e.member && nA(e.guild_id, e.member.user, e.member),
            ng({ type: "TYPING_START", channelId: e.channel_id, userId: e.user_id });
    }),
    np(["GUILD_RING_START"], (e) => {
        ng({ type: "GUILD_RING_START", ongoingRings: e.ongoing_rings, channelId: e.channel_id, guildId: e.guild_id });
    }),
    np(["GUILD_RING_STOP"], (e) => {
        ng({ type: "GUILD_RING_STOP", ringing: e.ringing, channelId: e.channel_id, guildId: e.guild_id });
    }),
    np(["ACTIVITY_START"], (e) => {
        ng({ type: "ACTIVITY_START", userId: e.user_id, activity: e.activity });
    }),
    np(["ACTIVITY_USER_ACTION"], (e) => {
        ng({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    nE(
        ["MESSAGE_CREATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            nI(e),
                null != e.author &&
                    ng({
                        type: "MESSAGE_CREATE",
                        guildId: e.guild_id,
                        channelId: e.channel_id,
                        message: e,
                        optimistic: !1,
                        isPushNotification: !1,
                    });
        },
    ),
    nE(
        ["MESSAGE_UPDATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            nI(e), ng({ type: "MESSAGE_UPDATE", guildId: e.guild_id, message: e });
        },
    ),
    nE(
        ["MESSAGE_DELETE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            ng({ type: "MESSAGE_DELETE", guildId: e.guild_id, id: e.id, channelId: e.channel_id });
        },
    ),
    nE(
        ["MESSAGE_DELETE_BULK"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            ng({ type: "MESSAGE_DELETE_BULK", guildId: e.guild_id, ids: e.ids, channelId: e.channel_id });
        },
    ),
    nE(
        ["MESSAGE_ACK"],
        (e) => I.D.loadGuildFromChannelId(e.channel_id),
        (e) => {
            ng({
                type: "MESSAGE_ACK",
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version,
            });
        },
    ),
    np(["GUILD_FEATURE_ACK"], (e) => {
        ng({ type: "GUILD_FEATURE_ACK", id: e.resource_id, ackType: e.ack_type, ackedId: e.entity_id });
    }),
    np(["USER_NON_CHANNEL_ACK"], (e) => {
        ng({ type: "USER_NON_CHANNEL_ACK", ackType: e.ack_type, ackedId: e.entity_id });
    }),
    nE(
        ["CHANNEL_PINS_ACK"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            ng({ type: "CHANNEL_PINS_ACK", channelId: e.channel_id, timestamp: e.timestamp, version: e.version });
        },
    ),
    nE(
        ["CHANNEL_PINS_UPDATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            ng({ type: "CHANNEL_PINS_UPDATE", channelId: e.channel_id, lastPinTimestamp: e.last_pin_timestamp });
        },
    ),
    nE(
        ["CHANNEL_CREATE", "CHANNEL_DELETE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            ng({ type: t, channel: (0, t1.UE)(e) });
        },
    ),
    np(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        ng({ type: t, id: e.id, guildId: e.guild_id, status: e.status });
    }),
    np(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
        ng({ type: t, id: e.id, guildId: e.guild_id, voiceStartTime: e.voice_start_time ?? void 0 });
    }),
    np(["CHANNEL_INFO"], (e, t) => {
        ng({
            type: t,
            guildId: e.guild_id,
            channels: e.channels.map((e) => ({ id: e.id, status: e.status, voiceStartTime: e.voice_start_time })),
        });
    }),
    np(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
        ng({ type: t, guildId: e.guild_id, channelId: e.channel_id, online: e.presence_count, total: e.member_count });
    }),
    nE(
        ["CHANNEL_UPDATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            nc.add(e);
        },
    ),
    nE(
        ["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n, ...i } = e;
            ng({ type: t, isNewlyCreated: n, channel: (0, t1.UE)(i) });
        },
    ),
    nE(
        ["THREAD_LIST_SYNC"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            ng({
                type: "THREAD_LIST_SYNC",
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = I.A.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, t1.UE)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? u().map(e.members, tQ.A) : void 0,
                channelIds: e.channel_ids,
            });
        },
    ),
    np(["THREAD_MEMBER_UPDATE"], (e) => {
        ng({
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
    np(["THREAD_MEMBERS_UPDATE"], (e) => {
        ng({
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
    np(["FORUM_UNREADS"], (e) => {
        e.permission_denied ||
            ng({
                type: "FORUM_UNREADS",
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({ threadId: e.thread_id, missing: e.missing, count: e.count })),
            });
    }),
    np(["SOUNDBOARD_SOUNDS"], (e) => {
        nd.add(e);
    }),
    np(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = I.A.getBasicChannel(e.channel_id);
        ng({ type: t, channelId: e.channel_id, user: e.user, nick: e.nick, isMember: null != n });
    }),
    nE(
        ["GUILD_CREATE"],
        (e) => ("full" === e.data_mode ? null : I.D.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable) ng({ type: "GUILD_UNAVAILABLE", guildId: e.id });
            else {
                let t = na(e);
                ng({ type: "GUILD_CREATE", guild: t }),
                    ng({
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
    np(["GUILD_UPDATE"], (e) => {
        ng({ type: "GUILD_UPDATE", guild: e }), e.unavailable && ng({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    np(["GUILD_PRUNE_UPDATE"], (e) => {
        ng({
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
    np(["GUILD_BULK_BAN_UPDATE"], (e) => {
        ng({
            type: "GUILD_BULK_BAN_UPDATE",
            guildId: e.guild_id,
            bulkBan: { bannedUsers: e.bulk_ban?.banned_users ?? [], failedUsers: e.bulk_ban?.failed_users ?? [] },
        });
    }),
    np(["GUILD_DELETE"], (e) => {
        ng({ type: "GUILD_DELETE", guild: e }),
            e.geo_restricted
                ? ng({ type: "GUILD_GEO_RESTRICTED", guildId: e.id, icon: e.icon, name: e.name })
                : e.unavailable && ng({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    np(["GUILD_MEMBERS_CHUNK"], (e) => {
        c.Ay.Emitter.batched(() => {
            n_.add({ guildId: e.guild_id, members: e.members, notFound: e.not_found }),
                null != e.presences && nS(e.presences, e.guild_id).forEach(ny),
                eK.flush("GUILD_MEMBERS_CHUNK");
        });
    }),
    np(["THREAD_MEMBER_LIST_UPDATE"], (e) => {
        c.Ay.Emitter.batched(() => {
            ng({ type: "THREAD_MEMBER_LIST_UPDATE", guildId: e.guild_id, threadId: e.thread_id, members: e.members }),
                null != e.presences && nS(e.presences, e.guild_id).forEach(ny),
                eK.flush();
        });
    }),
    np(
        ["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"],
        (e, t) => {
            ng({
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
                collectibles: (0, tj.t)(e.collectibles),
                displayNameStyles: (0, tY.mT)(e.display_name_styles),
            });
        },
    ),
    nE(
        ["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            ng({ type: t, guildId: e.guild_id, role: e.role });
        },
    ),
    nE(
        ["GUILD_ROLE_DELETE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            ng({ type: "GUILD_ROLE_DELETE", guildId: e.guild_id, roleId: e.role_id, version: e.version });
        },
    ),
    np(["GUILD_EMOJIS_UPDATE"], (e) => {
        ng({ type: "GUILD_EMOJIS_UPDATE", guildId: e.guild_id, emojis: e.emojis });
    }),
    np(["GUILD_STICKERS_UPDATE"], (e) => {
        ng({ type: "GUILD_STICKERS_UPDATE", guildId: e.guild_id, stickers: e.stickers });
    }),
    np(["GUILD_INTEGRATIONS_UPDATE"], (e) => {
        ng({ type: "GUILD_INTEGRATIONS_UPDATE", guildId: e.guild_id });
    }),
    np(["INTEGRATION_CREATE"], (e) => {
        ng({ type: "INTEGRATION_CREATE", application: e.application, guildId: e.guild_id });
    }),
    np(["INTEGRATION_DELETE"], (e) => {
        ng({ type: "INTEGRATION_DELETE", applicationId: e.application_id, guildId: e.guild_id });
    }),
    np(["USER_UPDATE"], (e) => {
        ng({ type: "CURRENT_USER_UPDATE", user: e });
    }),
    np(["USER_SETTINGS_PROTO_UPDATE"], (e) => {
        let t = (0, tJ.Y5)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ("string" == typeof t)
                throw (
                    (console.error(`Invalid proto: |${t}| |${e.settings.proto}|`),
                    console.error({ parsed: t, wire: e.settings.proto, type: e.settings.type }),
                    Error("UserSettingsProto must not be a string"))
                );
            ng({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: { proto: t, type: e.settings.type },
                partial: e.partial,
            });
        }
    }),
    np(["USER_GUILD_SETTINGS_UPDATE"], (e) => {
        ng({ type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: [e] });
    }),
    np(["USER_CONNECTIONS_UPDATE"], () => {
        ng({ type: "USER_CONNECTIONS_UPDATE" });
    }),
    np(["USER_REQUIRED_ACTION_UPDATE"], (e) => {
        ng({ type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: e.required_action });
    }),
    np(["USER_NOTE_UPDATE"], (e) => {
        ng({ type: "USER_NOTE_UPDATE", ...e });
    }),
    np(["RELATIONSHIP_ADD"], (e) => {
        ng({
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
    np(["RELATIONSHIP_REMOVE"], (e) => {
        ng({ type: "RELATIONSHIP_REMOVE", relationship: e });
    }),
    np(["RELATIONSHIP_UPDATE"], (e) => {
        ng({
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
    np(["GAME_RELATIONSHIP_ADD"], (e) => {
        ng({
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
    np(["GAME_RELATIONSHIP_REMOVE"], (e) => {
        ng({ type: "GAME_RELATIONSHIP_REMOVE", userId: e.id, applicationId: e.application_id });
    }),
    np(["PRESENCE_UPDATE"], (e) => {
        ny(nN(e, e.guild_id));
    }),
    np(["PRESENCES_REPLACE"], (e) => {
        ng({ type: "PRESENCES_REPLACE", presences: nS(e, void 0) });
    }),
    np(["SESSIONS_REPLACE"], (e) => {
        ng({ type: "SESSIONS_REPLACE", sessions: nT(e) });
    }),
    np(["VOICE_STATE_UPDATE"], (e) => {
        nm([e]);
    }),
    np(["VOICE_STATE_UPDATE_BATCH"], (e) => {
        nm(e.voice_states);
    }),
    np(["VOICE_SERVER_UPDATE"], (e) => {
        ng({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    np(["CALL_CREATE"], (e) => {
        ng({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
        let t = e.voice_states;
        null != t &&
            ng({
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
    np(["CALL_UPDATE"], (e) => {
        ng({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
    }),
    np(["CALL_DELETE"], (e) => {
        ng({ type: "CALL_DELETE", channelId: e.channel_id, unavailable: e.unavailable });
    }),
    np(["OAUTH2_TOKEN_CREATE"], (e) => {
        ng({ type: "OAUTH2_TOKEN_CREATE", id: e.id, scopes: e.scopes, application: e.application });
    }),
    np(["OAUTH2_TOKEN_DELETE"], (e) => {
        ng({ type: "OAUTH2_TOKEN_DELETE", id: e.id, applicationId: e.application_id });
    }),
    np(["OAUTH2_TOKEN_REVOKE"], (e) => {
        ng({ type: "OAUTH2_TOKEN_REVOKE", accessToken: e.access_token });
    }),
    np(["RECENT_MENTION_DELETE"], (e) => {
        ng({ type: "RECENT_MENTION_DELETE", id: e.message_id });
    }),
    np(["SAVED_MESSAGE_CREATE"], (e) => {
        ng({ type: "SAVED_MESSAGE_CREATE", savedMessage: (0, tX.iz)(e) });
    }),
    np(["SAVED_MESSAGE_DELETE"], (e) => {
        ng({ type: "SAVED_MESSAGE_DELETE", savedMessageData: (0, tX.x6)(e) });
    }),
    np(["FRIEND_SUGGESTION_CREATE"], (e) => {
        ng({ type: "FRIEND_SUGGESTION_CREATE", suggestion: e });
    }),
    np(["FRIEND_SUGGESTION_DELETE"], (e) => {
        ng({ type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: e.suggested_user_id });
    }),
    np(["WEBHOOKS_UPDATE"], (e) => {
        ng({ type: "WEBHOOKS_UPDATE", guildId: e.guild_id, channelId: e.channel_id });
    }),
    np(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        ng({
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
    np(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        ng({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: { id: e.answer_id, name: "" },
            reactionType: tz.v.VOTE,
        });
    }),
    np(["MESSAGE_POLL_VOTE_ADD_MANY"], (e) => {
        ng({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.votes.map((e) => ({ ...e, emoji: { id: e.answer_id, name: "" }, reactionType: tz.v.VOTE })),
        });
    }),
    np(["MESSAGE_REACTION_REMOVE_ALL"], (e) => {
        ng({ type: "MESSAGE_REACTION_REMOVE_ALL", channelId: e.channel_id, messageId: e.message_id });
    }),
    np(["MESSAGE_REACTION_REMOVE_EMOJI"], (e) => {
        ng({ type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: e.channel_id, messageId: e.message_id, emoji: e.emoji });
    }),
    np(["MESSAGE_REACTION_ADD_MANY"], (e) => {
        ng({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions,
        });
    }),
    np(["PAYMENT_UPDATE"], (e) => {
        ng({ type: "PAYMENT_UPDATE", payment: e });
    }),
    np(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        ng({ type: t, entitlement: e });
    }),
    np(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        (0, t0.f)() && (n(753390).$o(), tV.jv(t5.A.getFetchedSKUIDs()));
    }),
    np(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        tB.rQ(), (0, t0.f)() && n(753390).hP();
    }),
    np(["WISHLIST_ITEM_PURCHASED"], (e) => {
        ng({ type: "WISHLIST_ITEM_PURCHASED", recipientId: e.recipient_id, skuId: e.sku_id });
    }),
    np(["USER_BADGE_STATE_UPDATE"], (e) => {
        n(682618).o(e.badge_id);
    }),
    np(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (e) => {
        ng({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: t2.A.createFromServer(e, t7.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    np(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (e) => {
        ng({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: t2.A.createFromServer(e, t7.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    np(["BILLING_POPUP_BRIDGE_CALLBACK"], (e) => {
        ng({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query,
        });
    }),
    np(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (e) => {
        ng({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id,
        });
    }),
    np(["USER_PAYMENT_CLIENT_ADD"], (e) => {
        (0, t8.D)().then((t) => {
            let n = e.purchase_token_hash;
            n === t && ng({ type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: n, expiresAt: e.expires_at });
        });
    }),
    np(["GUILD_MEMBER_LIST_UPDATE"], (e) => {
        c.Ay.Emitter.batched(() => {
            let t = (t) => {
                if (null == t.member) return;
                let { member: n } = t;
                if ((nA(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: i } = n;
                ny(nN(i, e.guild_id));
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
                eK.flush(),
                ng({
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
    np(["GIFT_CODE_UPDATE"], (e) => {
        ng({ type: "GIFT_CODE_UPDATE", uses: e.uses, code: e.code });
    }),
    np(["GIFT_CODE_CREATE"], (e) => {
        ng({ type: "GIFT_CODE_CREATE", giftCode: e });
    }),
    np(["LIBRARY_APPLICATION_UPDATE"], (e) => {
        ng({ type: "LIBRARY_APPLICATION_UPDATE", libraryApplication: e });
    }),
    np(["STREAM_CREATE"], (e) => {
        ng({
            type: "STREAM_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            rtcChannelId: e.rtc_channel_id,
            paused: e.paused,
        });
    }),
    np(["STREAM_SERVER_UPDATE"], (e) => {
        ng({ type: "STREAM_SERVER_UPDATE", streamKey: e.stream_key, endpoint: e.endpoint, token: e.token });
    }),
    np(["STREAM_UPDATE"], (e) => {
        ng({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused,
        });
    }),
    np(["STREAM_DELETE"], (e) => {
        ng({ type: "STREAM_DELETE", streamKey: e.stream_key, unavailable: e.unavailable, reason: e.reason });
    }),
    np(["GENERIC_PUSH_NOTIFICATION_SENT"], (e) => {
        ng({
            type: "GENERIC_PUSH_NOTIFICATION_SENT",
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag,
        });
    }),
    np(["REACTION_NOTIFICATION_SENT"], (e) => {
        ng({
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
    np(["NOTIFICATION_CENTER_ITEM_CREATE"], (e) => {
        ng({ type: "NOTIFICATION_CENTER_ITEM_CREATE", item: e });
    }),
    np(["NOTIFICATION_CENTER_ITEM_DELETE"], (e) => {
        ng({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id });
    }),
    np(["NOTIFICATION_CENTER_ITEMS_ACK"], (e) => {
        ng({ type: "NOTIFICATION_CENTER_ITEMS_ACK", ids: [e.id], optimistic: !1 });
    }),
    np(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (e) => {
        ng({ type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: e.item_enum });
    }),
    np(["QUESTS_USER_STATUS_UPDATE"], (e) => {
        ng({ type: "QUESTS_USER_STATUS_UPDATE", user_status: e.user_status });
    }),
    np(["QUESTS_USER_COMPLETION_UPDATE"], (e) => {
        ng({ type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: e.quest_enrollment_blocked_until });
    }),
    np(["QUEST_PREVIEW_UPDATE"], (e) => {
        ng({ type: "QUEST_PREVIEW_UPDATE", quest_id: e.quest_id });
    }),
    np(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        ng({ type: t, guildId: e.guild_id });
    }),
    np(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (e) => {
        ng({ type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: e.guild_id, version: e.version });
    }),
    np(["GUILD_JOIN_REQUEST_CREATE"], (e) => {
        ng({ type: "GUILD_JOIN_REQUEST_CREATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    np(["GUILD_JOIN_REQUEST_UPDATE"], (e) => {
        ng({ type: "GUILD_JOIN_REQUEST_UPDATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    np(["GUILD_JOIN_REQUEST_DELETE"], (e) => {
        ng({ type: "GUILD_JOIN_REQUEST_DELETE", id: e.id, userId: e.user_id, guildId: e.guild_id });
    }),
    np(["INTERACTION_CREATE"], (e) => {
        ng({ type: "INTERACTION_CREATE", interactionId: e.id, nonce: e.nonce });
    }),
    np(["INTERACTION_SUCCESS"], (e) => {
        ng({ type: "INTERACTION_SUCCESS", interactionId: e.id, nonce: e.nonce });
    }),
    np(["INTERACTION_FAILURE"], (e) => {
        ng({ type: "INTERACTION_FAILURE", interactionId: e.id, nonce: e.nonce, reasonCode: e.reason_code });
    }),
    np(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (e) => {
        ng({ type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: e.choices, nonce: e.nonce });
    }),
    np(["INTERACTION_MODAL_CREATE"], (e) => {
        ng({
            type: "INTERACTION_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: (0, tK.ZV)(e.components),
            nonce: e.nonce,
            resolved: e.resolved,
        });
    }),
    np(["INTERACTION_IFRAME_MODAL_CREATE"], (e) => {
        ng({
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
    np(["STAGE_INSTANCE_CREATE"], (e) => {
        ng({ type: "STAGE_INSTANCE_CREATE", instance: e });
    }),
    np(["STAGE_INSTANCE_UPDATE"], (e) => {
        ng({ type: "STAGE_INSTANCE_UPDATE", instance: e });
    }),
    np(["STAGE_INSTANCE_DELETE"], (e) => {
        ng({ type: "STAGE_INSTANCE_DELETE", instance: e });
    }),
    np(["GUILD_SCHEDULED_EVENT_CREATE"], (e) => {
        ng({ type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent: e });
    }),
    np(["GUILD_SCHEDULED_EVENT_UPDATE"], (e) => {
        ng({ type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent: e });
    }),
    np(["GUILD_SCHEDULED_EVENT_DELETE"], (e) => {
        ng({ type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent: e });
    }),
    np(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (e) => {
        ng({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException: e });
    }),
    np(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (e) => {
        ng({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException: e });
    }),
    np(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (e) => {
        ng({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException: e });
    }),
    np(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (e) => {
        ng({ type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE", eventId: e.event_id });
    }),
    np(["GUILD_SCHEDULED_EVENT_USER_ADD"], (e) => {
        ng({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    np(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (e) => {
        ng({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    np(["GUILD_DIRECTORY_ENTRY_CREATE"], (e) => {
        ng({ type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: e.directory_channel_id, entry: e });
    }),
    np(["GUILD_DIRECTORY_ENTRY_UPDATE"], (e) => {
        ng({ type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: e.directory_channel_id, entry: e });
    }),
    np(["GUILD_DIRECTORY_ENTRY_DELETE"], (e) => {
        ng({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: e.directory_channel_id, guildId: e.entity_id });
    }),
    np(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (e) => {
        ng({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until,
        });
    }),
    np(["VOICE_CHANNEL_EFFECT_SEND"], (e) => {
        ng({
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
    np(["CLIPS_REMOTE_TRIGGER"], (e) => {
        ng({
            type: "CLIPS_REMOTE_TRIGGER",
            userId: e.user_id,
            applicationId: e.application_id,
            partyId: e.party_id ?? null,
            remoteClipId: e.remote_clip_id,
        });
    }),
    np(["GUILD_SOUNDBOARD_SOUND_CREATE"], (e) => {
        ng({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new t3.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    np(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (e) => {
        ng({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new t3.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    np(["GUILD_SOUNDBOARD_SOUND_DELETE"], (e) => {
        ng({ type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: e.guild_id, soundId: e.sound_id });
    }),
    np(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (e) => {
        ng({
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
    nE(
        ["EMBEDDED_ACTIVITY_UPDATE_V2"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            ng({
                type: "EMBEDDED_ACTIVITY_UPDATE_V2",
                applicationId: e.application_id,
                launchId: e.launch_id,
                compositeInstanceId: e.composite_instance_id,
                location: e.location,
                participants: e.participants,
            });
        },
    ),
    np(["AUTH_SESSION_CHANGE"], (e) => {
        ng({ type: "AUTH_SESSION_CHANGE", authSessionIdHash: e.auth_session_id_hash });
    }),
    np(["USER_CONNECTIONS_LINK_CALLBACK"], (e) => {
        ng({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state,
        });
    }),
    np(["USER_CONNECTIONS_CALLBACK"], (e) => {
        ng({
            type: "USER_CONNECTIONS_CALLBACK",
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params,
        });
    }),
    np(["DELETED_ENTITY_IDS"], (e) => {
        ng({ type: "DELETED_ENTITY_IDS", ...e });
    }),
    nE(
        ["CHANNEL_SYNC"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            e.channels.forEach((e) => {
                nc.add(e);
            }),
                ng({
                    type: "CHANNEL_SYNC",
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check,
                });
        },
    ),
    np(["CONSOLE_COMMAND_UPDATE"], (e) => {
        ng({ type: "CONSOLE_COMMAND_UPDATE", id: e.id, result: e.result, error: e.error });
    }),
    nE(
        ["PASSIVE_UPDATE_V2"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            ng({
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
    np(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (e) => {
        ng({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions,
        });
    }),
    np(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (e) => {
        ng({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id,
        });
    }),
    np(["LAST_MESSAGES"], (e) => {
        ng({ type: "MESSAGE_PREVIEWS_LOADED", guildId: e.guild_id, messages: e.messages });
    }),
    np(["AUTHENTICATOR_UPDATE"], (e) => {
        ng({ type: "AUTHENTICATOR_UPDATE", credential: e });
    }),
    np(["AUTHENTICATOR_CREATE"], (e) => {
        ng({ type: "AUTHENTICATOR_CREATE", credential: e });
    }),
    np(["AUTHENTICATOR_DELETE"], (e) => {
        ng({ type: "AUTHENTICATOR_DELETE", credential: e });
    }),
    np(["NOTIFICATION_SETTINGS_UPDATE"], (e) => {
        ng({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: e.flags } });
    }),
    np(["CONVERSATION_SUMMARY_UPDATE"], (e) => {
        ng({ type: "CONVERSATION_SUMMARY_UPDATE", ...e });
    }),
    np(["PREMIUM_MARKETING_PREVIEW"], (e) => {
        ng({ type: "PREMIUM_MARKETING_PREVIEW", data: e });
    }),
    np(["USER_APPLICATION_UPDATE"], (e) => {
        ng({ type: "USER_APPLICATION_UPDATE", applicationId: e.application_id });
    }),
    np(["USER_APPLICATION_REMOVE"], (e) => {
        ng({ type: "USER_APPLICATION_REMOVE", applicationId: e.application_id });
    }),
    np(["DM_SETTINGS_UPSELL_SHOW"], (e) => {
        ng({ type: "DM_SETTINGS_UPSELL_SHOW", guildId: e.guild_id });
    }),
    np(["CONTENT_INVENTORY_INBOX_STALE"], (e) => {
        ng({ type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: e.refresh_after_ms });
    }),
    np(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (e) => {
        ng({ type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: e.balance });
    }),
    np(["WALLET_BALANCE_UPDATE"], (e) => {
        ng({
            type: "WALLET_BALANCE_UPDATE",
            paymentSourceId: e.payment_source_id,
            balance: e.balance,
            currency: e.currency,
        });
    }),
    np(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
        ng({ type: t, guildId: e.guild_id, entitlements: e.entitlements });
    }),
    np(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
        ng({ type: t, guildId: e.guild_id, gameServer: e.game_server });
    }),
    np(["GAME_SERVER_DELETE"], (e, t) => {
        ng({ type: t, guildId: e.guild_id, gameServerId: e.game_server_id });
    }),
    np(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
        ng({ type: t, guildId: e.guild_id });
    }),
    np(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
        ng({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
            username: e.username,
            avatar_hash: e.avatar_hash,
            metadata: e.metadata,
        });
    }),
    np(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
        ng({ type: t, user_id: e.user_id, application_id: e.application_id });
    }),
    np(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (e) => {
        ng({
            type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
            interactionId: e.interaction_id,
            applicationId: e.application_id,
            skuId: e.sku_id,
            recipientId: e.recipient_id,
            eligible: e.eligible,
            ineligibleReason: e.ineligible_reason,
        });
    }),
    np(["HAVEN_CONNECT"], (e, t) => {
        ng({ type: t, room: (0, tW.xf)(e) });
    }),
    np(["HAVEN_DISCONNECT"], (e, t) => {
        ng({ type: t, userId: e.user_id, roomId: e.room_id });
    }),
    np(["HAVEN_UPDATE"], (e, t) => {
        ng({ type: t, room: (0, tW.xf)(e) });
    }),
    np(["GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE"], (e, t) => {
        ng({ type: t, gameApplicationIds: e.game_application_ids, guildId: e.guild_id });
    });
var nC = n(355097);
let nv = window.DiscordNative;
tk.dispatcher.getDispatchHandler = function (e) {
    return nh[e];
};
let nO = new h.A("ConnectionStore"),
    nR = 0,
    nb = null,
    nD = !0,
    nL = null,
    nw = null;
async function nM(e) {
    (nR = Date.now()), (nb = e.sessionId), tG.handleConnectionOpen();
    let t = {},
        n = y.A.getVoiceChannelId();
    if (null != n) {
        let e = d.w.get("discord_watchdog_restart_timestamp"),
            i = null != e && Date.now() - parseInt(e, 10) < 6e4;
        if (
            (d.w.remove("discord_watchdog_restart_timestamp"),
            window?.performance?.getEntriesByType?.("navigation")?.[0]?.type === "reload" ||
                i ||
                (await nv?.processUtils?.getLastCrash?.())?.rendererCrashReason != null ||
                !nD)
        ) {
            let e = I.A.getChannel(n);
            null != e && ((t = { guildId: e.getGuildId(), channelId: n }), (0, E.CX)(n));
        } else S.A.setLastSessionVoiceChannelId(null != n ? n : null), f.default.selectVoiceChannel(null);
    }
    tF.update(t, !0), (nD = !1), (nw = null);
}
function nP() {
    tF.update();
}
function nx() {
    return tF.update(), !1;
}
function nU() {
    return tG.update(), !1;
}
function nk(e) {
    tk.isSessionEstablished() && tk.streamDelete(e);
}
class nG extends c.Ay.Store {
    static displayName = "GatewayConnectionStore";
    initialize() {
        this.waitFor(g.default, A.A, I.A, T.Ay, S.A, N.A, y.A, C.A, v.A, m.A),
            this.syncWith([T.Ay], nx),
            this.syncWith([C.A], nU);
    }
    getSocket() {
        return tk;
    }
    isTryingToConnect() {
        return !tk.isClosed();
    }
    isConnected() {
        return tk.isSessionEstablished();
    }
    isConnectedOrOverlay() {
        return tk.isSessionEstablished() || __OVERLAY__;
    }
    lastTimeConnectedChanged() {
        return nR;
    }
}
let nF = new nG(_.h, {
    START_SESSION: function () {
        return tk.isClosed()
            ? (nO.verbose("Socket is reconnecting because of starting new session"), tk.connect())
            : (nO.verbose("Socket is not reconnecting during a new session because it is not closed"), !1);
    },
    LOGIN_SUCCESS: function () {
        return (
            nO.verbose("session refresh dispatched", { isEstablished: tk.isSessionEstablished() }),
            !!tk.isSessionEstablished() && (tk.close(), tk.connect())
        );
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount && tG.handleAccountSwitch(), nO.verbose("Closing socket because of logout"), tk.close();
    },
    CLEAR_CACHES: function (e) {
        return e.resetSocket && (tk.close(), tk.dispatcher.clear(), tk.connect()), !1;
    },
    CONNECTION_OPEN: (e) => {
        nM(e);
    },
    CONNECTION_RESUMED: function () {
        nw = null;
    },
    CONNECTION_CLOSED: function () {
        nO.verbose("connection closed dispatched"), (nR = Date.now());
    },
    RTC_CONNECTION_STATE: function (e) {
        if (e.state !== ej.S7L.DISCONNECTED) return !1;
        e.willReconnect && (null != e.streamKey ? tk.streamPing(e.streamKey) : tk.voiceServerPing());
    },
    VOICE_CHANNEL_SELECT: function (e) {
        return (
            tF.update({ guildId: e.guildId, channelId: e.channelId }),
            (nw = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
            (0, O.isIOS)() &&
                nL === ej.g6G.BACKGROUND &&
                (null == e.channelId ? tk.close(!0) : tk.isClosed() && ((th = !1), tk.connect())),
            !1
        );
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (g.default.getId() !== t.userId) return e;
            if (t.sessionId === nb) {
                if (null != nw)
                    return nO.verbose("Ignoring voice state for own session due to VSU lock on channel:", nw), e;
                tF.setState({ guildId: t.guildId, channelId: t.channelId });
            } else {
                if (t.guildId !== tF.guildId) return e;
                tF.setState({ guildId: null, channelId: null });
            }
            return !0;
        }, !1);
    },
    GUILD_DELETE: function (e) {
        e.guild.id === tF.guildId && tF.setState({ guildId: null, channelId: null });
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        t.id === tF.channelId && tF.setState({ guildId: null, channelId: null });
    },
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        if (t === tF.channelId) {
            if (nw === t) return !1;
            tF.setState({ guildId: null, channelId: null });
        }
    },
    APP_STATE_UPDATE: function (e) {
        return (
            (0, O.isIOS)()
                ? (g.default.isAuthenticated() &&
                      (nL === ej.g6G.INACTIVE && e.state === ej.g6G.BACKGROUND && null == tF.channelId
                          ? tk.close(!0)
                          : nL === ej.g6G.BACKGROUND &&
                            e.state === ej.g6G.ACTIVE &&
                            tk.isClosed() &&
                            ((th = !1), tk.connect())),
                  (nL = e.state))
                : e.state === ej.g6G.ACTIVE &&
                  ((th = !1), g.default.isAuthenticated() && tk.resetBackoff("App state is active")),
            !1
        );
    },
    GUILD_MEMBERS_REQUEST: function (e) {
        return (
            tk.isSessionEstablished() &&
                ("userIds" in e
                    ? u()(e.userIds)
                          .chunk(100)
                          .forEach((t) => {
                              tk.requestGuildMembers(e.guildIds, { userIds: t, presences: !!e.presences });
                          })
                    : tk.requestGuildMembers(e.guildIds, { query: e.query, limit: e.limit, presences: !!e.presences })),
            !1
        );
    },
    GUILD_SEARCH_RECENT_MEMBERS: function (e) {
        let { guildId: t, query: n, continuationToken: i } = e;
        tk.isSessionEstablished() && tk.searchRecentMembers(t, { query: n, continuationToken: i });
    },
    GUILD_SUBSCRIPTIONS_FLUSH: function (e) {
        let { subscriptions: t } = e;
        return tk.isSessionEstablished() && tk.updateGuildSubscriptions(t), !1;
    },
    CALL_CONNECT: function (e) {
        let { channelId: t } = e;
        return tk.isSessionEstablished() && tk.callConnect(t), !1;
    },
    CALL_CONNECT_MULTIPLE: function (e) {
        let { channelIds: t } = e;
        return (
            tk.isSessionEstablished() &&
                t.forEach((e) => {
                    tk.callConnect(e);
                }),
            !1
        );
    },
    STREAM_CREATE: nP,
    STREAM_START: function (e) {
        let { streamType: t, guildId: n, channelId: i } = e;
        if (tk.isSessionEstablished()) {
            let e = null != n ? I.A.getChannel(i)?.rtcRegion : A.A.getCall(i)?.region;
            tk.streamCreate(t, n, i, e ?? N.A.getPreferredRegion());
        }
        return !1;
    },
    STREAM_WATCH: function (e) {
        let { streamKey: t, allowMultiple: n } = e;
        if (tk.isSessionEstablished()) {
            if (n);
            else {
                let e;
                (e = v.A.getAllActiveStreamKeys().find((e) => (0, p.Iy)(e).ownerId === g.default.getId())),
                    v.A.getAllActiveStreamKeys()
                        .filter((t) => t !== e)
                        .forEach((e) => nk(e));
            }
            tk.streamWatch(t);
        }
        return !1;
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        return nk(t), nP(), !1;
    },
    STREAM_SET_PAUSED: function (e) {
        let { streamKey: t, paused: n } = e;
        tk.isSessionEstablished() && tk.streamSetPaused(t, n);
    },
    PUSH_NOTIFICATION_CLICK: function () {
        return tk.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1;
    },
    REQUEST_FORUM_UNREADS: function (e) {
        let { guildId: t, channelId: n, threads: i } = e;
        tk.requestForumUnreads(t, n, i);
    },
    REQUEST_SOUNDBOARD_SOUNDS: function (e) {
        let { guildIds: t } = e;
        tk.requestSoundboardSounds(t);
    },
    REMOTE_COMMAND: function (e) {
        let { sessionId: t, payload: n } = e;
        return tk.isSessionEstablished() && tk.remoteCommand(t, n), !1;
    },
    RESET_SOCKET: function (e) {
        tk.connectionState !== R.WILL_RECONNECT && tk.resetSocketAndClearCacheOnError(e.args);
    },
    CLIPS_SETTINGS_UPDATE: nP,
    RUNNING_GAMES_CHANGE: nP,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        e.settings.type === nC.oD.PRELOADED_USER_SETTINGS &&
            e.settings.proto.clips?.allowVoiceRecording != null &&
            nP();
    },
});
