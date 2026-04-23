"use strict";
n.d(t, { A: () => nh });
var i,
    r,
    s,
    a,
    o,
    l = n(735438),
    d = n.n(l),
    _ = n(17928),
    u = n(506774),
    c = n(228366),
    E = n(956793),
    h = n(626584),
    m = n(652896),
    f = n(796774),
    g = n(617617),
    p = n(495544),
    A = n(470710),
    I = n(734057),
    T = n(969341),
    S = n(763827),
    N = n(873985),
    C = n(309010),
    R = n(461213),
    O = n(116956),
    y = n(723702),
    v =
        (((i = v || {}).CLOSED = "CLOSED"),
        (i.WILL_RECONNECT = "WILL_RECONNECT"),
        (i.CONNECTING = "CONNECTING"),
        (i.IDENTIFYING = "IDENTIFYING"),
        (i.RESUMING = "RESUMING"),
        (i.SESSION_ESTABLISHED = "SESSION_ESTABLISHED"),
        i),
    D = n(77729),
    L = n(183636),
    b = n(954571),
    w = n(209489);
n(323874), n(14289), n(35956), n(321073), n(142703);
var P = n(284009),
    k = n.n(P),
    M = n(777915),
    U = n(61090),
    x = n(158390),
    G = n(731738),
    V = n(70298),
    F = n(636537),
    B = n(71393),
    H = n(403362),
    j = n(723176);
let W = new h.A("GuildVersions");
class Y {
    pending = new Map();
    committed = new Map();
    async getCommittedVersions() {
        try {
            let e = j.A.guildVersions();
            if (null == e) return {};
            let t = (await e.getMany()).map((e) => [e.id, e.version]);
            return Object.fromEntries(t ?? []);
        } catch (e) {
            return W.warn("couldn't load guild versions", e), {};
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
let K = new Y();
var z = n(314732),
    $ = n(214771),
    q = n(937724),
    X = n(831062),
    Z = n(464578),
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
class ed {
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
    class extends ed {
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
        class extends ed {
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
        class extends ed {
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
        class extends ed {
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
                        ? (0, y.isAndroid)()
                            ? eo?.enableZstdStreamSupport(this._socketId)
                            : ea.DCDCompressionManager.enableZstdStreamSupport(this._socketId, 0)
                        : (0, y.isAndroid)()
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
                        ((0, y.isAndroid)()
                            ? eo?.disableZlibStreamSupport(e)
                            : ea.DCDCompressionManager.disableZlibStreamSupport(e));
            }
        },
    );
class e_ extends ed {
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
    if (en.P.isDiscordGatewayPlaintextSet()) return new e_(e);
    for (var t of el) if (t.canUse()) return new t(e);
    return new e_(e);
}
el.push(e_);
let ec = (function () {
    if (y.isPlatformEmbedded) {
        let e;
        try {
            e = ei.Ay.requireModule("discord_erlpack");
        } catch (t) {
            try {
                e = ei.Ay.requireModule("erlpack");
            } catch (e) {}
        }
        if (null != e)
            return class {
                static canUse() {
                    return null != e;
                }
                pack(t) {
                    return e.pack(t).buffer;
                }
                unpack(t) {
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
class eE {
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
let eh = void 0 !== ec ? ec : eE;
en.P.isDiscordGatewayPlaintextSet() && (eh = eE);
let em = eh;
n(423034);
var ef = n(287809),
    eg = n(652215);
function ep(e) {
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
function eA(e) {
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
class eI {
    socket;
    static batchers = [];
    static flush(e, t) {
        for (let n of eI.batchers) null != n.action && (null == e || n.shouldFlush(e, t)) && n.flush();
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
            eI.batchers.push(this);
    }
    flush() {
        let { action: e } = this;
        (this.action = null),
            null != e &&
                c.h.dispatch(e).catch((t) => this.socket.resetSocketAndClearCacheOnError({ error: t, action: e.type }));
    }
}
var eT = n(365971),
    eS =
        (((r = {}).LONGER_DISPATCH = "longer_dispatch"),
        (r.EXCEEDED_MAX_CONSECUTIVE_FLUSHES = "exceeded_max_consecutive_flushes"),
        (r.FIRED_DUE_TO_MAX_TIMEOUT = "fired_due_to_max_timeout"),
        (r.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED = "skip_idle_callback_due_to_backgrounded"),
        r),
    eN =
        (((s = {}).TIME_TO_FIRE_IDLE_CALLBACK = "time_to_fire_idle_callback"),
        (s.TIME_TO_QUEUE_EMPTY = "time_to_flush_all_work"),
        (s.TIME_OVER_DEADLINE = "time_over_deadline"),
        (s.DEADLINE_INITIAL_TIME_REMAINING = "initial_time_of_deadline"),
        s),
    eC =
        (((a = {}).COUNT_DISPATCHES_LEFT_AFTER_YIELD = "count_dispatches_left_after_yield"),
        (a.COUNT_FLUSH_BEFORE_QUEUE_EMPTY = "count_flush_before_queue_empty"),
        (a.COUNT_INITIAL_DISPATCHS_LENGTH = "count_initial_dispatches_length"),
        a);
let eR = Object.freeze({
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
    ey = Object.freeze({
        count_flush_before_queue_empty: [0, 0],
        count_dispatches_left_after_yield: [0, 0],
        count_initial_dispatches_length: [0, 0],
    }),
    ev = Object.freeze({
        longer_dispatch: 0,
        exceeded_max_consecutive_flushes: 0,
        fired_due_to_max_timeout: 0,
        skip_idle_callback_due_to_backgrounded: 0,
    });
class eD {
    _timeTracking = (0, l.cloneDeep)(eR);
    _timingStats = (0, l.cloneDeep)(eO);
    _measurements = (0, l.cloneDeep)(ey);
    _eventCounts = (0, l.cloneDeep)(ev);
    _enabled = !1;
    reset() {
        (this._timeTracking = (0, l.cloneDeep)(eR)),
            (this._timingStats = (0, l.cloneDeep)(eO)),
            (this._measurements = (0, l.cloneDeep)(ey)),
            (this._eventCounts = (0, l.cloneDeep)(ev));
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
let eL = (1e3 / 60) * 3,
    eb = (1e3 / 60) * 3,
    ew = 1e3 / 60 / 8,
    eP = (1e3 / 60) * 12;
class ek {
    _browserDeadlineMs;
    _deadlineMs;
    _startMs;
    _firedDueToMaxTimeout;
    constructor(e, t = !1) {
        (this._deadlineMs = Math.max(ew, e)),
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
            isDeadlineNotIdeal: this._browserDeadlineMs < ew,
            deadlineMs: this._deadlineMs.toFixed(2),
            timeSinceStartMs: (performance.now() - this._startMs).toFixed(2),
        };
    }
}
let eM = new h.A("DispatcherWorkScheduler");
class eU {
    _flushTimeoutHandler = null;
    _flushIdleHandler = null;
    _nextDispatchTimeout = eL;
    _workCallbackFn = null;
    _consecutiveFlushesBeforeQueueEmpty = 0;
    _isBackgrounded = !1;
    _enableRequestIdleCallback = !0;
    _criticalWorkScheduled = !1;
    telemetry = new eD();
    _logger = eM;
    _trackAppBackgrounded(e) {
        this._isBackgrounded === e ||
            ((this._isBackgrounded = e),
            this._isBackgrounded &&
                this.hasWorkScheduled &&
                (this.telemetry.track(eS.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED), this._processWorkCallback()));
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
            eM.log("Unable to fully flush work queue after max retries, skipping future deadline."),
                this._workCallbackFn(),
                this.clearWorkTimeout(),
                this.telemetry.measure(eC.COUNT_FLUSH_BEFORE_QUEUE_EMPTY, this._consecutiveFlushesBeforeQueueEmpty),
                this.telemetry.track(eS.EXCEEDED_MAX_CONSECUTIVE_FLUSHES),
                (this._consecutiveFlushesBeforeQueueEmpty = 0),
                (this._nextDispatchTimeout = eP);
            return;
        }
        let t = performance.now(),
            n = this._workCallbackFn(e),
            i = performance.now();
        this.clearWorkTimeout(),
            i - t > eb ? (this._nextDispatchTimeout = eP) : (this._nextDispatchTimeout = eL),
            n
                ? (this._consecutiveFlushesBeforeQueueEmpty > 0 &&
                      this.telemetry.measure(
                          eC.COUNT_FLUSH_BEFORE_QUEUE_EMPTY,
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
            (this._nextDispatchTimeout = eL),
            (this._workCallbackFn = null);
    }
    requestWorkTimeout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (((this._workCallbackFn = e), !this.hasWorkScheduled)) {
            if (
                (this.telemetry.time(eN.TIME_TO_QUEUE_EMPTY),
                this._nextDispatchTimeout === eP && this.telemetry.track(eS.LONGER_DISPATCH),
                t)
            )
                return void this._queueIdleCallback();
            this._flushTimeoutHandler = setTimeout(() => {
                if ((k()(null != this._workCallbackFn, "Work callback should be set"), this._isBackgrounded))
                    return this.telemetry.track(eS.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED), this._processWorkCallback();
                this._queueIdleCallback();
            }, this._nextDispatchTimeout);
        }
    }
}
let ex =
        window.requestIdleCallback ??
        ((e) => {
            let t = Date.now();
            return setTimeout(() => {
                e({ didTimeout: !1, timeRemaining: () => Math.max(0, 50 - (Date.now() - t)) });
            }, 1);
        }),
    eG = window.cancelIdleCallback ?? clearTimeout;
function eV(e) {
    return null == e ? new ek(ew, !0) : new ek(e.timeRemaining(), e.didTimeout);
}
class eF extends eU {
    _flushIdleMaxTimeoutHandler = null;
    constructor() {
        super(),
            c.h.subscribe("WINDOW_VISIBILITY_CHANGE", (e) => {
                let { visible: t, windowId: n } = e;
                n === (0, eT.Xg)() && this._trackAppBackgrounded(!t);
            });
    }
    _queueIdleCallback() {
        if (!this._enableRequestIdleCallback || this._criticalWorkScheduled) return this._processWorkCallback();
        this.telemetry.time(eN.TIME_TO_FIRE_IDLE_CALLBACK),
            this._scheduleRequestIdleCallback(
                (e) => {
                    if (e?.didTimeout) {
                        this.telemetry.track(eS.FIRED_DUE_TO_MAX_TIMEOUT),
                            this.telemetry.clearTime(eN.TIME_TO_FIRE_IDLE_CALLBACK),
                            this._processWorkCallback();
                        return;
                    }
                    if ((this.telemetry.timeEnd(eN.TIME_TO_FIRE_IDLE_CALLBACK), (e?.timeRemaining() ?? ew) < ew))
                        this.telemetry.time(eN.TIME_TO_FIRE_IDLE_CALLBACK),
                            this._scheduleRequestIdleCallback(
                                (e) => {
                                    this.telemetry.timeEnd(eN.TIME_TO_FIRE_IDLE_CALLBACK);
                                    let t = eV(e),
                                        n = t?.timeRemaining();
                                    null != n && this.telemetry.timeTrack(eN.DEADLINE_INITIAL_TIME_REMAINING, n),
                                        this._processWorkCallback(t);
                                },
                                { timeout: 200 },
                            );
                    else {
                        this.telemetry.timeEnd(eN.TIME_TO_FIRE_IDLE_CALLBACK);
                        let t = eV(e),
                            n = t?.timeRemaining();
                        null != n && this.telemetry.timeTrack(eN.DEADLINE_INITIAL_TIME_REMAINING, n),
                            this._processWorkCallback(t);
                    }
                },
                { timeout: 1e3 },
            );
    }
    _scheduleRequestIdleCallback(e, t) {
        (this._flushIdleHandler = ex((t) => {
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
        null != this._flushIdleHandler && (eG(this._flushIdleHandler), (this._flushIdleHandler = null)),
            null != this._flushIdleMaxTimeoutHandler &&
                (clearTimeout(this._flushIdleMaxTimeoutHandler), (this._flushIdleMaxTimeoutHandler = null));
    }
}
let eB = new h.A("GatewaySocket"),
    eH = new Set(["INITIAL_GUILD", "READY"]),
    ej = new Set(["READY", "INITIAL_GUILD"]),
    eW = new Set(["READY", "READY_SUPPLEMENTAL", "RESUMED"]),
    eY = new Set([
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
    eK = {};
class ez {
    socket;
    scheduler = new eF();
    queue = [];
    paused = !0;
    resumeAnalytics = eA();
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
        if (this.paused && !eH.has(e.type)) return !1;
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
            (ej.has(e)
                ? (this.scheduler.clearWorkTimeout(), this.flush())
                : this.scheduler.hasWorkScheduled || this.scheduler.requestWorkTimeout(this.flush),
            eY.has(e) && this.scheduler.markCriticalWorkScheduled());
    }
    flush = (e) => {
        if (this.paused) return !0;
        let t = performance.now(),
            n = 0;
        for (; n < this.queue.length && 2 === this.queue[n].status; n++);
        if (0 === n) return !0;
        let i = this.queue.splice(0, n),
            r = this.dispatchMultiple(i, e);
        r && this.scheduler.telemetry.timeEnd(eN.TIME_TO_QUEUE_EMPTY);
        let s = performance.now() - t;
        return s > eb && !r && eB.log(`Dispatched ${i.length} messages in ${s}ms`), r;
    };
    getDispatchTimings() {
        return eK;
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
        this.scheduler.telemetry.measure(eC.COUNT_INITIAL_DISPATCHS_LENGTH, e.length);
        try {
            let r = [];
            this.socket.connectionState === v.RESUMING && _.Ay.Emitter.pause(150);
            let s = 0;
            if (
                (_.Ay.Emitter.batched(() => {
                    for (let a = 0; a < e.length; a++) {
                        let o = e[a];
                        (n = o.type), (i = i || eW.has(o.type));
                        let l = performance.now();
                        if (
                            (this.dispatchOne(o),
                            (s = performance.now() - l),
                            !(function (e, t) {
                                let [n, i] = eK[e] ?? [0, 0];
                                eK[e] = [(n * i + t) / (i + 1), i + 1];
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
                                    this.scheduler.telemetry.timeTrack(eN.TIME_OVER_DEADLINE, t.timeSinceExpiration);
                            break;
                        }
                    }
                    eI.flush();
                }),
                i && _.Ay.Emitter.resume(),
                r.length > 0)
            )
                return (
                    this.scheduler.telemetry.measure(eC.COUNT_DISPATCHES_LEFT_AFTER_YIELD, r.length),
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
        if (this.socket.connectionState === v.RESUMING) {
            let e = o - this.resumeAnalytics.lastUpdateTime;
            0 === this.resumeAnalytics.numEvents
                ? (this.resumeAnalytics.initialWaitTime = e)
                : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e),
                (this.resumeAnalytics.totalWaitTime += e),
                (this.resumeAnalytics.lastUpdateTime = o),
                (this.resumeAnalytics.numEvents += 1);
        }
        if ((eI.flush(r, i), "READY" === r)) {
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
                            user_settings_proto: d,
                            experiments: _,
                            guild_experiments: u,
                            relationships: c,
                            users: E,
                            ...h
                        } = e,
                        m = [],
                        f = [],
                        g = [],
                        p = [],
                        A = [],
                        I = [],
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
                                p.push(i),
                                A.push("partial" === e.data_mode ? e.partial_updates.stickers : e.stickers),
                                I.push(t),
                                T.push(r),
                                S.push(s, n);
                        }),
                        {
                            presences_size: JSON.stringify(i?.friends ?? []).length,
                            users_size: JSON.stringify(E).length,
                            read_states_size: JSON.stringify(s).length,
                            private_channels_size: JSON.stringify(a).length,
                            user_settings_size: JSON.stringify(l ?? "").length + (d ?? "").length,
                            experiments_size: JSON.stringify(_ ?? []).length + JSON.stringify(u ?? []).length,
                            user_guild_settings_size: JSON.stringify(o).length,
                            relationships_size: JSON.stringify(c).length,
                            remaining_data_size: JSON.stringify(h ?? {}).length,
                            guild_channels_size: JSON.stringify(m).length,
                            guild_members_size: JSON.stringify(r ?? []).length,
                            guild_presences_size: JSON.stringify(i?.guilds ?? []).length,
                            guild_roles_size: JSON.stringify(f).length,
                            guild_emojis_size: JSON.stringify(g).length,
                            guild_threads_size: JSON.stringify(p).length,
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
                                        i++, e.type === eg.rbe.GUILD_CATEGORY && n++;
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
                Z.A.attachReadyPayloadProperties(n),
                b.default.track(eg.HAw.READY_PAYLOAD_RECEIVED, n, { logEventProperties: !0 });
        } else
            "RESUMED" === r
                ? (this.getDispatchHandler(r)?.dispatch(i, r, a),
                  (n = this.resumeAnalytics),
                  (!ef.default.getCurrentUser()?.isStaff() && 0.5 > Math.random()) ||
                      b.default.track(
                          eg.HAw.CONNECTION_RESUMED,
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
                  (this.resumeAnalytics = eA()))
                : this.getDispatchHandler(r)?.dispatch(i, r, a);
        this.socket.connectionState === v.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - o);
    }
    clear() {
        (this.paused = !1), (this.queue.length = 0);
    }
}
n(938796);
var e$ = n(143236),
    eq = n(935208),
    eX =
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
class eZ extends e$.EventEmitter {
    presenceUpdate(e, t, n, i) {
        this.send(eX.PRESENCE_UPDATE, { status: e, since: t, activities: n, afk: i });
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
                flags: d = 0,
            } = e,
            _ = { guild_id: t, channel_id: n, self_mute: i, self_deaf: r, self_video: s, flags: d };
        null != n && N.A.shouldIncludePreferredRegion() && ((_.preferred_region = a), (_.preferred_regions = o)),
            null != l && (_.tracks = l?.map((e) => ({ type: e.type, rid: e.rid, quality: e.quality }))),
            this.send(eX.VOICE_STATE_UPDATE, _);
    }
    voiceServerPing() {
        this.send(eX.VOICE_SERVER_PING, null);
    }
    requestGuildMembers(e, t) {
        let { query: n, limit: i, userIds: r, presences: s } = t;
        this.send(eX.REQUEST_GUILD_MEMBERS, { guild_id: e, query: n, limit: i, user_ids: r, presences: s });
    }
    searchRecentMembers(e, t) {
        let { query: n, continuationToken: i } = t;
        this.send(eX.SEARCH_RECENT_MEMBERS, { guild_id: e, query: n ?? "", continuation_token: i ?? null });
    }
    updateGuildSubscriptions(e) {
        let t = {},
            n = 0;
        eq.default.keys(e).forEach((i) => {
            let r = e[i],
                s = JSON.stringify([i, r]).length;
            n + s > 15360 && (this.send(eX.GUILD_SUBSCRIPTIONS_BULK, { subscriptions: t }), (t = {}), (n = 0)),
                (t[i] = r),
                (n += s);
        }),
            n > 0 && this.send(eX.GUILD_SUBSCRIPTIONS_BULK, { subscriptions: t });
    }
    callConnect(e) {
        this.send(eX.CALL_CONNECT, { channel_id: e });
    }
    streamCreate(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.send(eX.STREAM_CREATE, { type: e, guild_id: t, channel_id: n, preferred_region: i });
    }
    streamWatch(e) {
        this.send(eX.STREAM_WATCH, { stream_key: e });
    }
    streamPing(e) {
        this.send(eX.STREAM_PING, { stream_key: e });
    }
    streamDelete(e) {
        this.send(eX.STREAM_DELETE, { stream_key: e });
    }
    streamSetPaused(e, t) {
        this.send(eX.STREAM_SET_PAUSED, { stream_key: e, paused: t });
    }
    requestForumUnreads(e, t, n) {
        this.send(eX.REQUEST_FORUM_UNREADS, {
            guild_id: e,
            channel_id: t,
            threads: n.map((e) => ({ thread_id: e.threadId, ack_message_id: e.ackMessageId })),
        });
    }
    requestSoundboardSounds(e) {
        this.send(eX.REQUEST_SOUNDBOARD_SOUNDS, { guild_ids: e });
    }
    requestLastMessages(e, t) {
        this.send(eX.REQUEST_LAST_MESSAGES, { guild_id: e, channel_ids: t });
    }
    getDeletedEntityIdsNotMatchingHash(e, t, n, i, r) {
        this.send(eX.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH, {
            guild_id: e,
            channel_ids_hash: t,
            role_ids_hash: n,
            emoji_ids_hash: i,
            sticker_ids_hash: r,
        });
    }
    triggerGuildChannelResync(e, t) {
        this.send(eX.GUILD_CHANNELS_RESYNC, { guild_id: e, obfuscated_channel_ids: t });
    }
    requestChannelInfo(e, t) {
        this.send(eX.REQUEST_CHANNEL_INFO, { guild_id: e, fields: t });
    }
    requestChannelMemberCount(e, t) {
        this.send(eX.REQUEST_CHANNEL_MEMBER_COUNT, { guild_id: e, channel_id: t });
    }
    remoteCommand(e, t) {
        this.send(eX.REMOTE_COMMAND, { target_session_id: e, payload: t });
    }
}
let eQ = !1;
var eJ = n(981133),
    e0 = n(751124);
let e1 = new h.A("GatewaySocket"),
    e2 = new em();
function e3() {}
let e6 = 30 * ee.A.Millis.SECOND,
    e4 = 3 * ee.A.Millis.MINUTE,
    e7 = +ee.A.Millis.MINUTE;
function e5(e) {
    return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength;
}
let e8 = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
class e9 extends eZ {
    gatewayBackoff;
    handleIdentify;
    dispatchExceptionBackoff = new x.A(1e3, e7);
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
        e1.verbose(`Setting connection state to ${e}`), (this.connectionState_ = e);
    }
    constructor() {
        super(),
            (this.dispatcher = new ez(this)),
            (this.gatewayBackoff = new x.A(1e3, 6e4)),
            (this.connectionState_ = v.CLOSED),
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
            (this.compressionHandler = eu(e2)),
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
            null !== e && e1.verbose(`Updating resume url to ${e}`),
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
        this.connectionState_ === v.SESSION_ESTABLISHED &&
            (this.send(eX.UPDATE_TIME_SPENT_SESSION_ID, {
                initialization_timestamp: e,
                session_id: t,
                client_launch_id: n,
            }),
            this._sendHeartbeat());
    }
    _connect() {
        var e, t, n;
        let i, r;
        if (!this.willReconnect()) return void e1.verbose("Skipping _connect because willReconnect is false");
        if (eQ) return void e1.info("Skipping _connect because socket is paused");
        (this.connectionState = v.CONNECTING), (this.nextReconnectIsImmediate = !1);
        let s = this.compressionHandler.getAlgorithm(),
            a = e2.getName(),
            o = this._getGatewayUrl(),
            l = window.GLOBAL_ENV.API_VERSION;
        U.A.mark("\uD83C\uDF10", "Socket._connect"),
            e1.info(`[CONNECT] ${o}, encoding: ${a}, version: ${l}, compression: ${s ?? "none"}`),
            null !== this.webSocket &&
                (e1.error("_connect called with already existing websocket"), this._cleanup((e) => e.close(4e3))),
            (this.connectionStartTime = Date.now()),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this._handleClose(!1, 0, `The connection timed out after ${e} ms - did not receive OP_HELLO in time.`),
                    this.setResumeUrl(null);
            }, e6));
        let d = new URL(o);
        d.searchParams.append("encoding", a),
            d.searchParams.append("v", l.toString()),
            null != s && d.searchParams.append("compress", s),
            !(function (e) {
                let t,
                    { gatewayURL: n, newCallback: i, onOpen: r, onMessage: s, onError: a, onClose: o } = e;
                e1.enableNativeLogger(!0);
                let l = window._ws,
                    d = !1,
                    _ = !1,
                    u = null,
                    c = null;
                if (((window._ws = null), null != l))
                    if (((t = l.ws), l.state.gateway !== n))
                        e1.verbose(`[FAST CONNECT] gatewayURL mismatch: ${l.state.gateway} !== ${n}`),
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
                            e1.log("[FAST CONNECT] successfully took over websocket, state:", {
                                ...e,
                                messages: e.messages?.length,
                            }),
                            (d = l.state.open),
                            (_ = l.state.identify),
                            (u = l.state.messages),
                            (c = l.state.clientState);
                    }
                null == t && ((t = (0, e0.A)(n)).binaryType = "arraybuffer"),
                    i(t),
                    d && r(_, c),
                    null != u && u.forEach(s),
                    (t.onopen = () => r(_, c)),
                    (t.onmessage = s),
                    (t.onclose = o),
                    (t.onerror = a);
            })({
                gatewayURL: d.toString(),
                newCallback: (e) => {
                    (this.webSocket = e), this.compressionHandler.bindWebSocket(e);
                },
                onOpen: (e) => {
                    U.A.mark(`🌐`, `GatewaySocket.onOpen ${e}`);
                    let t = Date.now() - this.connectionStartTime;
                    e1.info(`[CONNECTED] ${d.toString()} in ${t} ms`),
                        (this.isFastConnect = e),
                        e ? this._doFastConnectIdentify() : this._doResumeOrIdentify();
                },
                onMessage:
                    ((e = this.compressionHandler),
                    (t = this._handleClose.bind(this)),
                    (n = (e, t) => {
                        let n = Date.now(),
                            { op: i, s: r, t: s, d: a } = e2.unpack(e);
                        if (
                            (i !== eX.DISPATCH && U.A.mark(`🌐`, `GatewaySocket.onMessage ${i} ${eX[i]}`),
                            Q.default.isLoggingGatewayEvents)
                        ) {
                            let e = [i];
                            i === eX.DISPATCH && e.push(s), e.push(a), e1.verboseDangerously("<~", ...e);
                        }
                        let o = Date.now() - n;
                        switch (
                            ("READY" === s
                                ? Z.A.parseReady.set(n, o)
                                : "READY_SUPPLEMENTAL" === s
                                  ? Z.A.parseReadySupplemental.set(n, o)
                                  : o > 10 && U.A.mark("\uD83C\uDF10", "Parse " + s, o),
                            null != r && (this.seq = r),
                            i)
                        ) {
                            case eX.HELLO:
                                this._clearHelloTimeout(), this._handleHello(a);
                                break;
                            case eX.RECONNECT:
                                this._handleReconnect();
                                break;
                            case eX.INVALID_SESSION:
                                this._handleInvalidSession(a);
                                break;
                            case eX.HEARTBEAT:
                                this._handleHeartbeatReceive();
                                break;
                            case eX.HEARTBEAT_ACK:
                                this._handleHeartbeatAck(a);
                                break;
                            case eX.DISPATCH:
                                this._handleDispatch(
                                    a,
                                    s,
                                    "READY" === s
                                        ? {
                                              compressed_byte_size: t,
                                              uncompressed_byte_size: e5(e),
                                              compression_algorithm: this.compressionHandler.getAlgorithm(),
                                              packing_algorithm: e2.getName(),
                                              unpack_duration_ms: o,
                                          }
                                        : null,
                                );
                                break;
                            default:
                                e1.info(`Unhandled op ${i}`);
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
                        null != n.raw_length ? (i += n.raw_length) : (i += e5(s));
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
        e1.verbose(`[HELLO] via ${ep(e)}, heartbeat interval: ${t}, took ${n} ms`), this._startHeartbeater();
    }
    _handleReconnect() {
        e1.verbose("[RECONNECT] gateway requested I reconnect."),
            this._cleanup((e) => e.close(4e3)),
            (this.connectionState = v.WILL_RECONNECT),
            this._connect();
    }
    _handleInvalidSession(e) {
        e1.info(`[INVALID_SESSION]${e ? " can resume)" : ""}`), e ? this._doResumeOrIdentify() : this._doIdentify();
    }
    _handleDispatch(e, t, n) {
        let i = Date.now() - this.connectionStartTime;
        if ("READY" === t) {
            let t = e.session_id;
            this.sessionId = t;
            let n = ep(e);
            U.A.setServerTrace(n),
                e1.info(`[READY] took ${i}ms, as ${t}`),
                e1.verbose(`${n}`),
                (this.connectionState = v.SESSION_ESTABLISHED),
                this.gatewayBackoff.succeed(),
                (this.iosGoingAwayEventCount = 0),
                this.setResumeUrl(e.resume_gateway_url);
        } else
            "READY_SUPPLEMENTAL" === t
                ? (e1.info(`[READY_SUPPLEMENTAL] took ${i}ms`),
                  (this.connectionState = v.SESSION_ESTABLISHED),
                  this.gatewayBackoff.succeed(),
                  (this.iosGoingAwayEventCount = 0))
                : "RESUMED" === t &&
                  (e1.verbose(ep(e)),
                  (this.connectionState = v.SESSION_ESTABLISHED),
                  this.gatewayBackoff.succeed(),
                  (this.iosGoingAwayEventCount = 0));
        this.dispatcher.receiveDispatch(e, t, n);
    }
    handleResumeDispatched() {
        let e = Date.now() - this.connectionStartTime;
        e1.info(
            `[RESUMED] took ${e}ms, replayed ${this.dispatcher.resumeAnalytics.numEvents} events, new seq: ${this.seq}`,
        );
    }
    handleReadyDispatched() {
        (this.didForceClearGuildHashes = !1), (this.hasConnectedOnce = !0);
    }
    _getGatewayUrl() {
        return null != this.resumeUrl ? this.resumeUrl : e8;
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
                e1.verbose("Expedited heartbeat succeeded"));
    }
    _handleHeartbeatTimeout() {
        this._cleanup((e) => e.close(4e3)), (this.connectionState = v.WILL_RECONNECT);
        let e = this.gatewayBackoff.fail(() => this._connect());
        e1.warn(`[ACK TIMEOUT] reconnecting in ${(e / 1e3).toFixed(2)} seconds.`);
    }
    _handleClose(e, t, n) {
        if (((e = e || !1), this._cleanup(), this.emit("close", { code: t, reason: n }), 4004 === t))
            return (
                (this.connectionState = v.CLOSED),
                e1.warn("[WS CLOSED] because of authentication failure, marking as closed."),
                this._reset(e, t, n)
            );
        if (
            (this._tryDetectInvalidIOSToken(t, n, e),
            (this.connectionState = v.WILL_RECONNECT),
            this.nextReconnectIsImmediate)
        )
            e1.info(`[WS CLOSED] (${e.toString()}, ${t}, ${n}) retrying immediately.`), this._connect();
        else {
            let i = this.gatewayBackoff.fail(() => this._connect());
            e1.info(`[WS CLOSED] (${e.toString()}, ${t}, ${n}) retrying in ${(i / 1e3).toFixed(2)} seconds.`),
                this.gatewayBackoff.fails > 4 && this._reset(e, t, n);
        }
    }
    _tryDetectInvalidIOSToken(e, t, n) {
        (0, y.isIOS)() &&
            null != this.token &&
            1001 === e &&
            "Stream end encountered" === t &&
            ((this.iosGoingAwayEventCount += 1),
            3 === this.iosGoingAwayEventCount &&
                F.Bo.get({ url: eg.Rsh.ME, headers: { authorization: this.token }, rejectWithError: !1 }).then(
                    (e) => {
                        let { status: t } = e;
                        b.default.track(eg.HAw.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                    },
                    (e) => {
                        let { status: t } = e;
                        401 === t &&
                            ((this.connectionState = v.CLOSED),
                            e1.warn("[WS CLOSED] because of manual authentication failure, marking as closed."),
                            this._reset(n, 4004, "invalid token manually detected")),
                            b.default.track(eg.HAw.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                    },
                ));
    }
    _reset(e, t, n) {
        (this.sessionId = null),
            (this.seq = 0),
            e1.warn(`[RESET] (${e.toString()}, ${t}, ${n})`),
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
        k()(null != e, "GatewaySocket: Heartbeat interval should never null here."),
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
            null != t && ((t.onopen = e3), (t.onmessage = e3), (t.onerror = e3), (t.onclose = e3), e?.(t)),
            this.gatewayBackoff.cancel(),
            this.compressionHandler.close(),
            (this.compressionHandler = eu(e2));
    }
    _doResume() {
        (this.connectionState = v.RESUMING),
            (this.dispatcher.resumeAnalytics = eA(Date.now() - this.connectionStartTime)),
            e1.info(`[RESUME] resuming session ${this.sessionId ?? ""}, seq: ${this.seq}`),
            this.send(eX.RESUME, { token: this.token, session_id: this.sessionId, seq: this.seq }, !1);
    }
    async _doIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, 4004, "No connection info provided");
        this.connectionState = v.IDENTIFYING;
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
        if (this.connectionState !== v.IDENTIFYING || this.identifyStartTime !== t)
            return void e1.warn("Skipping identify because connectionState or identifyStartTime has changed");
        let { token: a, properties: o = {}, presence: l } = e;
        (this.token = a), e1.verbose("[IDENTIFY]");
        let d = {
                token: a,
                capabilities: (function (e) {
                    let { useChannelObfuscation: t } = e;
                    return t ? 1767421 : 1734653;
                })({ useChannelObfuscation: (0, eJ.RK)("GatewaySocket") }),
                properties: o,
                presence: l,
                compress: this.compressionHandler.usesLegacyCompression(),
                client_state: s,
            },
            _ = JSON.stringify(d);
        (this.identifyUncompressedByteSize = _.length),
            (this.identifyCompressedByteSize = M.deflate(_).length),
            (this.identifyCount += 1),
            this.send(eX.IDENTIFY, d, !1),
            b.default.track(eg.HAw.SESSION_START_CLIENT, {});
    }
    _doFastConnectIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) return void this._handleClose(!0, 4004, "No connection info provided");
        let { token: t } = e;
        (this.token = t),
            (this.connectionState = v.IDENTIFYING),
            (this.identifyStartTime = Date.now()),
            (this.identifyCount += 1),
            e1.verbose("[IDENTIFY, fast-connect]"),
            this._updateLastHeartbeatAckTime();
    }
    _doResumeOrIdentify() {
        let e = Date.now();
        null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= e4)
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
        this.send(eX.QOS_HEARTBEAT, { seq: this.seq, qos: e }, !1), (this.lastHeartbeatTime = Date.now());
    }
    getLogger() {
        return e1;
    }
    willReconnect() {
        return this.connectionState === v.WILL_RECONNECT;
    }
    isClosed() {
        return this.connectionState === v.CLOSED;
    }
    isSessionEstablished() {
        return this.connectionState === v.SESSION_ESTABLISHED || this.connectionState === v.RESUMING;
    }
    isConnected() {
        return (
            this.connectionState === v.IDENTIFYING ||
            this.connectionState === v.RESUMING ||
            this.connectionState === v.SESSION_ESTABLISHED
        );
    }
    connect() {
        return this.isClosed()
            ? (e1.verbose(".connect() called, new state is WILL_RECONNECT"),
              (this.connectionState = v.WILL_RECONNECT),
              this._connect(),
              !0)
            : (e1.error("Cannot start a new connection, connection state is not closed"), !1);
    }
    resetSocketAndClearCacheOnError(e) {
        let { action: t, error: n, metricAction: i } = e;
        e1.error(`resetSocketAndClearCacheOnError during ${t}: ${n.message}`, n.stack);
        let r = (0, V.b)();
        X.A.increment({ name: G.K.SOCKET_CRASHED, tags: [`action:${i ?? t}`, `modded_client:${r}`] }, !0),
            !1 !== e.sentry && et.A.captureException(n, { tags: { socketCrashedAction: t } }),
            b.default.track(eg.HAw.GATEWAY_SOCKET_RESET, {
                error_message: n.message,
                error_stack: n.stack,
                has_client_mods: r,
                action: t,
            }),
            this._cleanup((e) => e.close()),
            this._reset(!0, 1e3, "Resetting socket due to error."),
            this.dispatcher.clear(),
            (this.connectionState = v.WILL_RECONNECT),
            this.dispatchExceptionBackoff.cancel(),
            0 === this.dispatchExceptionBackoff._fails
                ? (e1.verbose("Triggering fast reconnect"),
                  this.dispatchExceptionBackoff.fail(() => {}),
                  setTimeout(() => this._connect(), 0))
                : this.dispatchExceptionBackoff.fail(() => this._connect()),
            (this.didForceClearGuildHashes = !0),
            c.h.dispatch({ type: "CLEAR_CACHES", reason: `Socket reset during ${t}` }),
            c.h.dispatch({ type: "LIBDISCORE_RESET" }),
            clearTimeout(this.dispatchSuccessTimer),
            (this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * e7));
    }
    resetSocketOnDispatchError(e) {
        let t = null != e.error.message && e.error.message.indexOf("Guild data was missing from store") >= 0;
        this.resetSocketAndClearCacheOnError({ ...e, sentry: !t });
    }
    close() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.isClosed()) return void e1.verbose("close() called, but socket is already closed.");
        e1.info(`Closing connection, current state is ${this.connectionState}`);
        let t = e ? 4e3 : void 0;
        this._cleanup((e) => e.close(t)),
            (this.connectionState = v.CLOSED),
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
                e1.verbose(`Performing an expedited heartbeat ${null != t && "" !== t ? "reason: " + t : ""}`),
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
                : e1.verbose(
                      `Expedited heartbeat requested, but, connection state is ${this.connectionState} and reconnectImmediately was not requested ${null != t && "" !== t ? "reason: " + t : ""}`,
                  );
        }
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        e1.verbose(`Connection has reset backoff${null != e && "" !== e ? " for reason: " + e : ""}`),
            this.gatewayBackoff.succeed(),
            (this.iosGoingAwayEventCount = 0),
            (this.nextReconnectIsImmediate = !0),
            this.willReconnect()
                ? this._connect()
                : t && this.connectionState !== v.SESSION_ESTABLISHED && this._handleClose(!0, 0, e);
    }
    send = (e, t, n) => {
        Q.default.isLoggingGatewayEvents && e1.verboseDangerously("~>", e, eX[e], t);
        let i = e2.pack({ op: e, d: t });
        if (!n || this.isSessionEstablished())
            try {
                null != this.webSocket && this.webSocket.send(i);
            } catch (e) {}
        else e1.warn(`Attempted to send while not being in a connected state opcode: ${e}`);
    };
}
var te = n(812729),
    tt = n.n(te);
class tn {
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
        if (t) this.dirty = !tt()(n, this.getInitialState());
        else for (let e of Object.keys(n)) this.dirty = this.dirty || !tt()(this.state[e], n[e]);
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
class ti extends tn {
    socket;
    switchingAccounts = !1;
    constructor(e) {
        super(!1), (this.socket = e);
    }
    getInitialState() {
        return R.A.getLocalPresence();
    }
    getNextState() {
        return R.A.getLocalPresence();
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
var tr = n(665260),
    ts = n(572164),
    ta = n(328153),
    to = n(253932),
    tl = n(616356),
    td = n(469177);
let t_ = new h.A("ConnectionStore"),
    tu = new e9(),
    tc = new ti(tu),
    tE = new (class extends tn {
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
                t = to.Q$.getSetting();
            e = (0, tr.lA)(e, eg.Ajs.ALLOW_VOICE_RECORDING, t);
            let n =
                    (0, ts.TD)() &&
                    (tl.A.getCurrentUserActiveStream()?.state === eg.XYD.ACTIVE ||
                        tl.A.getCurrentUserActiveStream()?.state === eg.XYD.PAUSED),
                i = (0, ts.Ao)() && ta.Ay.getVisibleGame()?.windowHandle != null;
            return (0, tr.lA)(e, eg.Ajs.CLIPS_ENABLED, n || i);
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
                flags: d = 0,
            } = e;
            s && I.A.getChannel(n)?.type === eg.rbe.GUILD_STAGE_VOICE
                ? this.socket.voiceStateUpdate({
                      guildId: t,
                      channelId: n,
                      selfMute: i,
                      selfDeaf: r,
                      selfVideo: s,
                      preferredRegion: a,
                      preferredRegions: o,
                      videoStreamParameters: l,
                      flags: d,
                  })
                : this.socket.voiceStateUpdate({
                      guildId: t,
                      channelId: n,
                      selfMute: i,
                      selfDeaf: r,
                      selfVideo: s,
                      preferredRegion: a,
                      preferredRegions: o,
                      flags: d,
                  });
        }
    })(tu);
(tu.handleIdentify = () => {
    let e = p.default.getToken();
    if ((t_.verbose("handleIdentify called", { hasToken: null != e }), null == e)) return null;
    let t = L.A.getState(),
        n = p.default.getInstallationForTracking();
    return {
        token: e,
        properties: {
            ...b.default.getSuperProperties(),
            client_app_state: t,
            is_fast_connect: !1,
            gateway_connect_reasons: td.L7(),
            ...(null != n ? { installation_id: n } : {}),
        },
        presence: tc.getInitialState(),
    };
}),
    (0, y.isDesktop)() &&
        D.A.powerMonitor.on("resume", () => {
            tu.expeditedHeartbeat(5e3, "power monitor resumed");
        }),
    w.A.addOfflineCallback(() => {
        tu.networkStateChange(15e3, "network detected offline.", !1);
    }),
    w.A.addOnlineCallback(() => {
        tu.networkStateChange(5e3, "network detected online.");
    }),
    tu.on("disconnect", (e) => {
        let { code: t, reason: n } = e;
        c.h.dispatch({ type: "CONNECTION_CLOSED", code: t, reason: n });
    }),
    tu.on("close", (e) => {
        let { code: t, reason: n } = e;
        c.h.dispatch({ type: "CONNECTION_INTERRUPTED", code: t, reason: n });
    }),
    n(237751);
var th = n(73825),
    tm = n(803306),
    tf = n(821956),
    tg = n(628856),
    tp = n(945096),
    tA = n(692744),
    tI = n(814890),
    tT = n(505527),
    tS = n(853811),
    tN = n(381438);
let tC = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-content-classification-presence-filter",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tR = n(756377),
    tO = n(736130),
    ty = n(761821),
    tv = n(95701),
    tD = n(545934),
    tL = n(889227),
    tb = n(696451),
    tw = n(186111),
    tP = n(628965),
    tk = n(977997),
    tM = n(97352),
    tU = n(166403),
    tx = n(107351),
    tG = n(531743),
    tV = n(45773);
let tF = null,
    tB = {};
function tH(e, t, n) {
    return null == tF || tF.identifyTime !== e || (null != t && t.some((e) => e.id === tF.guild.id))
        ? null
        : n(tF.guild);
}
function tj(e, t) {
    let n = [];
    return (
        t?.forEach((t) => {
            if (null == t) return;
            let i = t.user_id;
            null != i && (k()(null != e[i], `Missing user[${i}] in compressed ready payload`), (t.user = e[i])),
                delete t.user_id,
                n.push(t);
        }),
        n
    );
}
function tW(e) {
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
              threads: e.threads?.map((t) => (0, tv.UE)(t, e.id)) ?? [],
              threadMessages: tK(e.threads),
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, tv.UE)(t, e.id))) },
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          }
        : {
              id: e.id,
              dataMode: e.data_mode,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, tv.UE)(t, e.id)) ?? [],
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
              threads: e.threads?.map((t) => (0, tv.UE)(t, e.id)) ?? [],
              threadMessages: tK(e.threads),
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function tY(e) {
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
              threads: e.threads?.map((t) => (0, tv.UE)(t, e.id)) ?? [],
              threadMessages: tK(e.threads),
              presences: e.presences,
              activity_instances: e.activity_instances,
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
              emojis: { op: "full_sync", items: e.emojis },
              stickers: { op: "full_sync", items: e.stickers },
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, tv.UE)(t, e.id))) },
          }
        : {
              id: e.id,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, tv.UE)(t, e.id)) ?? [],
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
              threads: e.threads?.map((t) => (0, tv.UE)(t, e.id)) ?? [],
              threadMessages: tK(e.threads),
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function tK(e) {
    let t = [];
    if (null != e) for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
    return t;
}
let tz = new h.A("ConnectionStore");
function t$(e) {
    return e.map((e) => {
        let t = e.timestamps?.end,
            n = e.created_at;
        return null != t && null != n
            ? { ...e, timestamps: { ...e.timestamps, isCountDown: t > n && e.type !== eg.$pd.LISTENING } }
            : e;
    });
}
let tq = new eI(
        tu,
        (e, t) => {
            e = e ?? { type: "CHANNEL_UPDATES", channels: [] };
            let n = (0, tv.UE)(t),
                i = I.A.getChannel(t.id),
                r = i?.merge({ ...n, recipients: i.recipients, bitrate: n.bitrate ?? i.bitrate });
            return e.channels.push(r ?? n), e;
        },
        (e) => "CHANNEL_UPDATE" !== e,
    ),
    tX = new eI(
        tu,
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
    tZ = new eI(
        tu,
        (e, t) => ((e = e ?? { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] }).chunks.push(t), e),
        (e) => "GUILD_MEMBERS_CHUNK" !== e,
    ),
    tQ = new eI(
        tu,
        (e, t) => ((e = null == e ? { type: "PRESENCE_UPDATES", updates: [] } : e).updates.push(t), e),
        (e) => "PRESENCE_UPDATE" !== e && "GUILD_MEMBERS_CHUNK" !== e,
    ),
    tJ = {};
function t0(e, t) {
    for (let n of e) tJ[n] = { preload: () => null, dispatch: t };
}
function t1(e, t, n) {
    for (let i of e) tJ[i] = { preload: t, dispatch: n };
}
function t2(e) {
    let t = [];
    for (let n of e)
        null != n.member && t6(n.guild_id, n.member.user, n.member),
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
                oldChannelId: tk.A.getUserVoiceChannelId(n.guild_id, n.user_id),
            });
    t3({ type: "VOICE_STATE_UPDATES", voiceStates: t });
}
function t3(e) {
    c.h.dispatch(e).catch((t) => {
        tz.error(`dispatchOrResetSocket error during ${e.type}:`, t),
            tu.resetSocketOnDispatchError({ error: t, action: e.type });
    });
}
function t6(e, t, n) {
    let {
            roles: i,
            nick: r,
            avatar: s,
            avatar_decoration_data: a,
            flags: o,
            premium_since: l,
            pending: _,
            joined_at: u,
            communication_disabled_until: c,
            unusual_dm_activity_until: E,
            collectibles: h,
            display_name_styles: m,
        } = n,
        f = tb.Ay.getMember(e, t.id),
        g = (0, tg.t)(h),
        p = (0, tp.mT)(m);
    (null != f &&
        f.nick === r &&
        f.avatar === s &&
        d().isEqual(f.roles, i) &&
        (0, tf.kn)(f.avatarDecoration ?? null, a ?? null) &&
        f.premiumSince === l &&
        f.isPending === _ &&
        f.joinedAt === u &&
        f.communicationDisabledUntil === c &&
        f.flags === o &&
        (f.unusualDMActivityUntil ?? null) === (E ?? null) &&
        d().isEqual(f.collectibles ?? null, g ?? null) &&
        d().isEqual(f.displayNameStyles ?? null, p ?? null)) ||
        t3({
            type: "GUILD_MEMBER_ADD",
            guildId: e,
            user: t,
            roles: i,
            nick: r,
            avatar: s,
            avatarDecoration: a,
            premiumSince: l,
            isPending: _,
            joinedAt: u,
            communicationDisabledUntil: c,
            unusualDMActivityUntil: E,
            flags: o,
            collectibles: g,
            displayNameStyles: p,
        });
}
function t4(e) {
    let { member: t, mentions: n, author: i, guild_id: r } = e;
    null != t && null != r && t6(r, i, t),
        null != n &&
            n.forEach((e) => {
                if (null != e.member && null != r) {
                    let { member: t } = e;
                    delete e.member, t6(r, e, t);
                }
            });
}
function t7(e) {
    return e.map((e) => ({
        sessionId: e.session_id,
        lastModified: e.last_modified,
        status: e.status,
        activities: t$(e.activities ?? []),
        hiddenActivities: e.hidden_activities ?? [],
        active: !!e.active,
        clientInfo: e.client_info,
    }));
}
function t5(e, t) {
    return e.map((e) => t8(e, t));
}
function t8(e, t) {
    let n = (function (e, t) {
        let { enabled: n } = tC.getConfig({ location: "presence_filtering" });
        if (!n) return { activities: e, hiddenActivities: t };
        let i = [],
            r = [];
        for (let t of e)
            (
                t.content_classification?.loaded
                    ? null == t.content_classification.data
                        ? 0
                        : (0, tS.U1)({ type: tS.fS.MINIMAL, data: t.content_classification.data }) !== tN.Y.EVERYONE
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
        activities: t$(n.activities),
        hiddenActivities: n.hiddenActivities,
        guildId: t,
        processedAtTimestamp: e.processed_at_timestamp,
    };
}
function t9(e) {
    tQ.add(e);
}
t1(
    ["INITIAL_GUILD"],
    (e) => ("full" === e.data_mode ? null : I.D.loadGuildIds([e.id])),
    (e) => {
        Z.A.initialGuild.measure(() => {
            _.Ay.Emitter.batched(() => {
                var t;
                let n,
                    i = ((t = tu.identifyStartTime), (n = tY(e)), (tF = { guild: e, identifyTime: t }), n);
                null != ef.default.getCurrentUser() &&
                    (t3({ type: "GUILD_CREATE", guild: i }),
                    t3({
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
                        })),
                    }),
                    tz.log(`Dispatched INITIAL_GUILD ${e.id}`));
            });
        });
    },
),
    t0(["READY_SUPPLEMENTAL"], (e) => {
        Z.A.readySupplemental.measure(() => {
            _.Ay.Emitter.batched(() => {
                let t = (e = Z.A.hydrateReadySupplemental.measure(() =>
                    (function (e, t) {
                        let { guilds: n, merged_members: i, merged_presences: r, ...s } = e,
                            a = tj(tB, r?.friends),
                            o =
                                n?.map((e, t) => {
                                    let n = tj(tB, r?.guilds[t]),
                                        s = tj(tB, i?.[t]);
                                    return { ...e, unavailable: void 0 === e.voice_states, presences: n, members: s };
                                }) ?? [],
                            l = tH(t, n, (e) => ({
                                id: e.id,
                                members: e.members,
                                presences: e.presences,
                                activity_instances: e.activity_instances,
                                voice_states: e.voice_states,
                                unavailable: !1,
                            }));
                        return null != l && o.push(l), (tB = {}), { ...s, presences: a, guilds: o };
                    })(e, tu.identifyStartTime),
                )).guilds.filter((e) => !0 !== e.unavailable);
                t.forEach((e) => {
                    e.presences = t5(e.presences || [], e.id);
                });
                let n = t5(e.presences ?? [], void 0),
                    i = (e.lazy_private_channels ?? []).map((e) => (0, tv.UE)(e));
                Z.A.dispatchReadySupplemental.measure(() => {
                    t3({ type: "CONNECTION_OPEN_SUPPLEMENTAL", guilds: t, presences: n, lazyPrivateChannels: i });
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
                        });
                    });
                }),
                    t3({ type: "VOICE_STATE_UPDATES", voiceStates: r, initial: !0 }),
                    tE.update();
            });
        }),
            setTimeout(() => t3({ type: "POST_CONNECTION_OPEN" }), 2e3);
    }),
    t1(
        ["READY"],
        (e) => {
            let t,
                n,
                i =
                    ((t = j.A.database()),
                    (n = (0, q.O)() ? K.getCommittedVersions() : Promise.resolve({})),
                    Promise.all([
                        n,
                        (0, q.O)() ? tG.A.getGuildIds() : Promise.resolve(new Set()),
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
                ? t3({ type: "LOGOUT" })
                : Z.A.ready.measure(() => {
                      _.Ay.Emitter.batched(() => {
                          let t = (e = Z.A.hydrateReady.measure(() =>
                                  (function (e, t, n) {
                                      let { users: i, private_channels: r, merged_members: s, guilds: a, ...o } = e;
                                      null != j.A.database() &&
                                          !1 === n.databaseOk &&
                                          tV.A.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"),
                                          (tB = d().keyBy(i, (e) => e.id)),
                                          r?.forEach((e) => {
                                              let t = e.recipient_ids;
                                              null != t &&
                                                  (e.recipients = t.map(
                                                      (e) => (
                                                          k()(
                                                              null != tB[e],
                                                              "Missing user in compressed ready payload",
                                                          ),
                                                          tB[e]
                                                      ),
                                                  )),
                                                  delete e.recipient_ids;
                                          });
                                      let l =
                                              a?.map((e, t) =>
                                                  !0 === e.unavailable ? e : ((e.members = tj(tB, s?.[t])), tW(e)),
                                              ) ?? [],
                                          _ = tH(t, a, (e) => tW(e));
                                      return (
                                          null != _ && l.push(_),
                                          { ...o, users: i, presences: [], guilds: l, private_channels: r ?? [] }
                                      );
                                  })(e, tu.identifyStartTime, n),
                              )).private_channels.map((e) => (0, tv.UE)(e)),
                              i = e.guilds
                                  .filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted)
                                  .map((e) => e.id),
                              r = e.guilds.filter((e) => !0 !== e.unavailable),
                              s = e.guilds.filter((e) => !0 === e.geo_restricted),
                              a = null == e.user_settings_proto ? void 0 : (0, ty.Gd)(e.user_settings_proto);
                          Z.A.dispatchReady.measure(() => {
                              t3({
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
                                  sessions: t7(e.sessions ?? []),
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
                                  t3({ type: "UPDATE_TOKEN", token: e.auth_token, userId: e.user.id }),
                              null != e.ad_personalization_toggles_disabled &&
                                  t3({
                                      type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED",
                                      disabled: e.ad_personalization_toggles_disabled,
                                  }),
                              tc.update(),
                              tE.update();
                      });
                  });
        },
    ),
    t0(["STATE_UPDATE"], (e) => {
        t3({ type: "CONNECTION_OPEN_STATE_UPDATE", apexExperiments: e.apex_experiments ?? void 0 });
    }),
    t0(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (e) => {
        c.h.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE",
            experimentName: e.experiment_name,
            variantId: e.variant_id,
        });
    }),
    t0(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (e) => {
        c.h.dispatch({ type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: e.experiment_name });
    }),
    t0(["RESUMED"], () => {
        tc.forceUpdate(), tE.forceUpdate(), t3({ type: "CONNECTION_RESUMED" });
    }),
    t0(["TYPING_START"], (e) => {
        null != e.member && t6(e.guild_id, e.member.user, e.member),
            t3({ type: "TYPING_START", channelId: e.channel_id, userId: e.user_id });
    }),
    t0(["GUILD_RING_START"], (e) => {
        t3({ type: "GUILD_RING_START", ongoingRings: e.ongoing_rings, channelId: e.channel_id, guildId: e.guild_id });
    }),
    t0(["GUILD_RING_STOP"], (e) => {
        t3({ type: "GUILD_RING_STOP", ringing: e.ringing, channelId: e.channel_id, guildId: e.guild_id });
    }),
    t0(["ACTIVITY_START"], (e) => {
        t3({ type: "ACTIVITY_START", userId: e.user_id, activity: e.activity });
    }),
    t0(["ACTIVITY_USER_ACTION"], (e) => {
        t3({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    t1(
        ["MESSAGE_CREATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            t4(e),
                null != e.author &&
                    t3({
                        type: "MESSAGE_CREATE",
                        guildId: e.guild_id,
                        channelId: e.channel_id,
                        message: e,
                        optimistic: !1,
                        isPushNotification: !1,
                    });
        },
    ),
    t1(
        ["MESSAGE_UPDATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            t4(e), t3({ type: "MESSAGE_UPDATE", guildId: e.guild_id, message: e });
        },
    ),
    t1(
        ["MESSAGE_DELETE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            t3({ type: "MESSAGE_DELETE", guildId: e.guild_id, id: e.id, channelId: e.channel_id });
        },
    ),
    t1(
        ["MESSAGE_DELETE_BULK"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            t3({ type: "MESSAGE_DELETE_BULK", guildId: e.guild_id, ids: e.ids, channelId: e.channel_id });
        },
    ),
    t1(
        ["MESSAGE_ACK"],
        (e) => I.D.loadGuildFromChannelId(e.channel_id),
        (e) => {
            t3({
                type: "MESSAGE_ACK",
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version,
            });
        },
    ),
    t0(["GUILD_FEATURE_ACK"], (e) => {
        t3({ type: "GUILD_FEATURE_ACK", id: e.resource_id, ackType: e.ack_type, ackedId: e.entity_id });
    }),
    t0(["USER_NON_CHANNEL_ACK"], (e) => {
        t3({ type: "USER_NON_CHANNEL_ACK", ackType: e.ack_type, ackedId: e.entity_id });
    }),
    t1(
        ["CHANNEL_PINS_ACK"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            t3({ type: "CHANNEL_PINS_ACK", channelId: e.channel_id, timestamp: e.timestamp, version: e.version });
        },
    ),
    t1(
        ["CHANNEL_PINS_UPDATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            t3({ type: "CHANNEL_PINS_UPDATE", channelId: e.channel_id, lastPinTimestamp: e.last_pin_timestamp });
        },
    ),
    t1(
        ["CHANNEL_CREATE", "CHANNEL_DELETE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            t3({ type: t, channel: (0, tv.UE)(e) });
        },
    ),
    t0(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        t3({ type: t, id: e.id, guildId: e.guild_id, status: e.status });
    }),
    t0(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
        t3({ type: t, id: e.id, guildId: e.guild_id, voiceStartTime: e.voice_start_time ?? void 0 });
    }),
    t0(["CHANNEL_INFO"], (e, t) => {
        t3({
            type: t,
            guildId: e.guild_id,
            channels: e.channels.map((e) => ({ id: e.id, status: e.status, voiceStartTime: e.voice_start_time })),
        });
    }),
    t0(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
        t3({ type: t, guildId: e.guild_id, channelId: e.channel_id, online: e.presence_count, total: e.member_count });
    }),
    t1(
        ["CHANNEL_UPDATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            tq.add(e);
        },
    ),
    t1(
        ["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n, ...i } = e;
            t3({ type: t, isNewlyCreated: n, channel: (0, tv.UE)(i) });
        },
    ),
    t1(
        ["THREAD_LIST_SYNC"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            t3({
                type: "THREAD_LIST_SYNC",
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = I.A.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, tv.UE)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? d().map(e.members, tO.A) : void 0,
                channelIds: e.channel_ids,
            });
        },
    ),
    t0(["THREAD_MEMBER_UPDATE"], (e) => {
        t3({
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
    t0(["THREAD_MEMBERS_UPDATE"], (e) => {
        t3({
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
    t0(["FORUM_UNREADS"], (e) => {
        e.permission_denied ||
            t3({
                type: "FORUM_UNREADS",
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({ threadId: e.thread_id, missing: e.missing, count: e.count })),
            });
    }),
    t0(["SOUNDBOARD_SOUNDS"], (e) => {
        tX.add(e);
    }),
    t0(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = I.A.getBasicChannel(e.channel_id);
        t3({ type: t, channelId: e.channel_id, user: e.user, nick: e.nick, isMember: null != n });
    }),
    t1(
        ["GUILD_CREATE"],
        (e) => ("full" === e.data_mode ? null : I.D.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable) t3({ type: "GUILD_UNAVAILABLE", guildId: e.id });
            else {
                let t = tY(e);
                t3({ type: "GUILD_CREATE", guild: t }),
                    t3({
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
                        })),
                    });
            }
        },
    ),
    t0(["GUILD_UPDATE"], (e) => {
        t3({ type: "GUILD_UPDATE", guild: e }), e.unavailable && t3({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    t0(["GUILD_PRUNE_UPDATE"], (e) => {
        t3({
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
    t0(["GUILD_BULK_BAN_UPDATE"], (e) => {
        t3({
            type: "GUILD_BULK_BAN_UPDATE",
            guildId: e.guild_id,
            bulkBan: { bannedUsers: e.bulk_ban?.banned_users ?? [], failedUsers: e.bulk_ban?.failed_users ?? [] },
        });
    }),
    t0(["GUILD_DELETE"], (e) => {
        t3({ type: "GUILD_DELETE", guild: e }),
            e.geo_restricted
                ? t3({ type: "GUILD_GEO_RESTRICTED", guildId: e.id, icon: e.icon, name: e.name })
                : e.unavailable && t3({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    t0(["GUILD_MEMBERS_CHUNK"], (e) => {
        _.Ay.Emitter.batched(() => {
            tZ.add({ guildId: e.guild_id, members: e.members, notFound: e.not_found }),
                null != e.presences && t5(e.presences, e.guild_id).forEach(t9),
                eI.flush("GUILD_MEMBERS_CHUNK");
        });
    }),
    t0(["THREAD_MEMBER_LIST_UPDATE"], (e) => {
        _.Ay.Emitter.batched(() => {
            t3({ type: "THREAD_MEMBER_LIST_UPDATE", guildId: e.guild_id, threadId: e.thread_id, members: e.members }),
                null != e.presences && t5(e.presences, e.guild_id).forEach(t9),
                eI.flush();
        });
    }),
    t0(
        ["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"],
        (e, t) => {
            t3({
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
                collectibles: (0, tg.t)(e.collectibles),
                displayNameStyles: (0, tp.mT)(e.display_name_styles),
            });
        },
    ),
    t1(
        ["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            t3({ type: t, guildId: e.guild_id, role: e.role });
        },
    ),
    t1(
        ["GUILD_ROLE_DELETE"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            t3({ type: "GUILD_ROLE_DELETE", guildId: e.guild_id, roleId: e.role_id, version: e.version });
        },
    ),
    t0(["GUILD_EMOJIS_UPDATE"], (e) => {
        t3({ type: "GUILD_EMOJIS_UPDATE", guildId: e.guild_id, emojis: e.emojis });
    }),
    t0(["GUILD_STICKERS_UPDATE"], (e) => {
        t3({ type: "GUILD_STICKERS_UPDATE", guildId: e.guild_id, stickers: e.stickers });
    }),
    t0(["GUILD_INTEGRATIONS_UPDATE"], (e) => {
        t3({ type: "GUILD_INTEGRATIONS_UPDATE", guildId: e.guild_id });
    }),
    t0(["INTEGRATION_CREATE"], (e) => {
        t3({ type: "INTEGRATION_CREATE", application: e.application, guildId: e.guild_id });
    }),
    t0(["INTEGRATION_DELETE"], (e) => {
        t3({ type: "INTEGRATION_DELETE", applicationId: e.application_id, guildId: e.guild_id });
    }),
    t0(["USER_UPDATE"], (e) => {
        t3({ type: "CURRENT_USER_UPDATE", user: e });
    }),
    t0(["USER_SETTINGS_PROTO_UPDATE"], (e) => {
        let t = (0, ty.Y5)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ("string" == typeof t)
                throw (
                    (console.error(`Invalid proto: |${t}| |${e.settings.proto}|`),
                    console.error({ parsed: t, wire: e.settings.proto, type: e.settings.type }),
                    Error("UserSettingsProto must not be a string"))
                );
            t3({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: { proto: t, type: e.settings.type },
                partial: e.partial,
            });
        }
    }),
    t0(["USER_GUILD_SETTINGS_UPDATE"], (e) => {
        t3({ type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: [e] });
    }),
    t0(["USER_CONNECTIONS_UPDATE"], () => {
        t3({ type: "USER_CONNECTIONS_UPDATE" });
    }),
    t0(["USER_REQUIRED_ACTION_UPDATE"], (e) => {
        t3({ type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: e.required_action });
    }),
    t0(["USER_NOTE_UPDATE"], (e) => {
        t3({ type: "USER_NOTE_UPDATE", ...e });
    }),
    t0(["RELATIONSHIP_ADD"], (e) => {
        t3({
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
            },
            shouldNotify: !0 === e.should_notify,
        });
    }),
    t0(["RELATIONSHIP_REMOVE"], (e) => {
        t3({ type: "RELATIONSHIP_REMOVE", relationship: e });
    }),
    t0(["RELATIONSHIP_UPDATE"], (e) => {
        t3({
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
            },
        });
    }),
    t0(["GAME_RELATIONSHIP_ADD"], (e) => {
        t3({
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
    t0(["GAME_RELATIONSHIP_REMOVE"], (e) => {
        t3({ type: "GAME_RELATIONSHIP_REMOVE", userId: e.id, applicationId: e.application_id });
    }),
    t0(["PRESENCE_UPDATE"], (e) => {
        t9(t8(e, e.guild_id));
    }),
    t0(["PRESENCES_REPLACE"], (e) => {
        t3({ type: "PRESENCES_REPLACE", presences: t5(e, void 0) });
    }),
    t0(["SESSIONS_REPLACE"], (e) => {
        t3({ type: "SESSIONS_REPLACE", sessions: t7(e) });
    }),
    t0(["VOICE_STATE_UPDATE"], (e) => {
        t2([e]);
    }),
    t0(["VOICE_STATE_UPDATE_BATCH"], (e) => {
        t2(e.voice_states);
    }),
    t0(["VOICE_SERVER_UPDATE"], (e) => {
        t3({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    t0(["CALL_CREATE"], (e) => {
        t3({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
        let t = e.voice_states;
        null != t &&
            t3({
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
                })),
            });
    }),
    t0(["CALL_UPDATE"], (e) => {
        t3({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
    }),
    t0(["CALL_DELETE"], (e) => {
        t3({ type: "CALL_DELETE", channelId: e.channel_id, unavailable: e.unavailable });
    }),
    t0(["OAUTH2_TOKEN_CREATE"], (e) => {
        t3({ type: "OAUTH2_TOKEN_CREATE", id: e.id, scopes: e.scopes, application: e.application });
    }),
    t0(["OAUTH2_TOKEN_DELETE"], (e) => {
        t3({ type: "OAUTH2_TOKEN_DELETE", id: e.id, applicationId: e.application_id });
    }),
    t0(["OAUTH2_TOKEN_REVOKE"], (e) => {
        t3({ type: "OAUTH2_TOKEN_REVOKE", accessToken: e.access_token });
    }),
    t0(["RECENT_MENTION_DELETE"], (e) => {
        t3({ type: "RECENT_MENTION_DELETE", id: e.message_id });
    }),
    t0(["SAVED_MESSAGE_CREATE"], (e) => {
        t3({ type: "SAVED_MESSAGE_CREATE", savedMessage: (0, tR.iz)(e) });
    }),
    t0(["SAVED_MESSAGE_DELETE"], (e) => {
        t3({ type: "SAVED_MESSAGE_DELETE", savedMessageData: (0, tR.x6)(e) });
    }),
    t0(["FRIEND_SUGGESTION_CREATE"], (e) => {
        t3({ type: "FRIEND_SUGGESTION_CREATE", suggestion: e });
    }),
    t0(["FRIEND_SUGGESTION_DELETE"], (e) => {
        t3({ type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: e.suggested_user_id });
    }),
    t0(["WEBHOOKS_UPDATE"], (e) => {
        t3({ type: "WEBHOOKS_UPDATE", guildId: e.guild_id, channelId: e.channel_id });
    }),
    t0(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        t3({
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
    t0(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        t3({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: { id: e.answer_id, name: "" },
            reactionType: tT.v.VOTE,
        });
    }),
    t0(["MESSAGE_POLL_VOTE_ADD_MANY"], (e) => {
        t3({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.votes.map((e) => ({ ...e, emoji: { id: e.answer_id, name: "" }, reactionType: tT.v.VOTE })),
        });
    }),
    t0(["MESSAGE_REACTION_REMOVE_ALL"], (e) => {
        t3({ type: "MESSAGE_REACTION_REMOVE_ALL", channelId: e.channel_id, messageId: e.message_id });
    }),
    t0(["MESSAGE_REACTION_REMOVE_EMOJI"], (e) => {
        t3({ type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: e.channel_id, messageId: e.message_id, emoji: e.emoji });
    }),
    t0(["MESSAGE_REACTION_ADD_MANY"], (e) => {
        t3({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions,
        });
    }),
    t0(["PAYMENT_UPDATE"], (e) => {
        t3({ type: "PAYMENT_UPDATE", payment: e });
    }),
    t0(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        t3({ type: t, entitlement: e });
    }),
    t0(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        (tw.A.hasLayers() || null != tP.A.getSection()) && (n(323082).$o(), th.jv(tM.A.getFetchedSKUIDs()));
    }),
    t0(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        tm.rQ(), (tw.A.hasLayers() || null != tP.A.getSection()) && n(323082).hP();
    }),
    t0(["WISHLIST_ITEM_PURCHASED"], (e) => {
        t3({ type: "WISHLIST_ITEM_PURCHASED", recipientId: e.recipient_id, skuId: e.sku_id });
    }),
    t0(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (e) => {
        t3({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: tD.A.createFromServer(e, tU.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    t0(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (e) => {
        t3({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: tD.A.createFromServer(e, tU.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    t0(["BILLING_POPUP_BRIDGE_CALLBACK"], (e) => {
        t3({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query,
        });
    }),
    t0(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (e) => {
        t3({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id,
        });
    }),
    t0(["USER_PAYMENT_CLIENT_ADD"], (e) => {
        (0, tx.D)().then((t) => {
            let n = e.purchase_token_hash;
            n === t && t3({ type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: n, expiresAt: e.expires_at });
        });
    }),
    t0(["GUILD_MEMBER_LIST_UPDATE"], (e) => {
        _.Ay.Emitter.batched(() => {
            let t = (t) => {
                if (null == t.member) return;
                let { member: n } = t;
                if ((t6(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: i } = n;
                t9(t8(i, e.guild_id));
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
                eI.flush(),
                t3({
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
    t0(["GIFT_CODE_UPDATE"], (e) => {
        t3({ type: "GIFT_CODE_UPDATE", uses: e.uses, code: e.code });
    }),
    t0(["GIFT_CODE_CREATE"], (e) => {
        t3({ type: "GIFT_CODE_CREATE", giftCode: e });
    }),
    t0(["LIBRARY_APPLICATION_UPDATE"], (e) => {
        t3({ type: "LIBRARY_APPLICATION_UPDATE", libraryApplication: e });
    }),
    t0(["STREAM_CREATE"], (e) => {
        t3({
            type: "STREAM_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            rtcChannelId: e.rtc_channel_id,
            paused: e.paused,
        });
    }),
    t0(["STREAM_SERVER_UPDATE"], (e) => {
        t3({ type: "STREAM_SERVER_UPDATE", streamKey: e.stream_key, endpoint: e.endpoint, token: e.token });
    }),
    t0(["STREAM_UPDATE"], (e) => {
        t3({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused,
        });
    }),
    t0(["STREAM_DELETE"], (e) => {
        t3({ type: "STREAM_DELETE", streamKey: e.stream_key, unavailable: e.unavailable, reason: e.reason });
    }),
    t0(["GENERIC_PUSH_NOTIFICATION_SENT"], (e) => {
        t3({
            type: "GENERIC_PUSH_NOTIFICATION_SENT",
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag,
        });
    }),
    t0(["REACTION_NOTIFICATION_SENT"], (e) => {
        t3({
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
    t0(["NOTIFICATION_CENTER_ITEM_CREATE"], (e) => {
        t3({ type: "NOTIFICATION_CENTER_ITEM_CREATE", item: e });
    }),
    t0(["NOTIFICATION_CENTER_ITEM_DELETE"], (e) => {
        t3({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id });
    }),
    t0(["NOTIFICATION_CENTER_ITEMS_ACK"], (e) => {
        t3({ type: "NOTIFICATION_CENTER_ITEMS_ACK", ids: [e.id], optimistic: !1 });
    }),
    t0(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (e) => {
        t3({ type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: e.item_enum });
    }),
    t0(["QUESTS_USER_STATUS_UPDATE"], (e) => {
        t3({ type: "QUESTS_USER_STATUS_UPDATE", user_status: e.user_status });
    }),
    t0(["QUESTS_USER_COMPLETION_UPDATE"], (e) => {
        t3({ type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: e.quest_enrollment_blocked_until });
    }),
    t0(["QUEST_PREVIEW_UPDATE"], (e) => {
        t3({ type: "QUEST_PREVIEW_UPDATE", quest_id: e.quest_id });
    }),
    t0(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        t3({ type: t, guildId: e.guild_id });
    }),
    t0(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (e) => {
        t3({ type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: e.guild_id, version: e.version });
    }),
    t0(["GUILD_JOIN_REQUEST_CREATE"], (e) => {
        t3({ type: "GUILD_JOIN_REQUEST_CREATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    t0(["GUILD_JOIN_REQUEST_UPDATE"], (e) => {
        t3({ type: "GUILD_JOIN_REQUEST_UPDATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    t0(["GUILD_JOIN_REQUEST_DELETE"], (e) => {
        t3({ type: "GUILD_JOIN_REQUEST_DELETE", id: e.id, userId: e.user_id, guildId: e.guild_id });
    }),
    t0(["INTERACTION_CREATE"], (e) => {
        t3({ type: "INTERACTION_CREATE", interactionId: e.id, nonce: e.nonce });
    }),
    t0(["INTERACTION_SUCCESS"], (e) => {
        t3({ type: "INTERACTION_SUCCESS", interactionId: e.id, nonce: e.nonce });
    }),
    t0(["INTERACTION_FAILURE"], (e) => {
        t3({ type: "INTERACTION_FAILURE", interactionId: e.id, nonce: e.nonce, reasonCode: e.reason_code });
    }),
    t0(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (e) => {
        t3({ type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: e.choices, nonce: e.nonce });
    }),
    t0(["INTERACTION_MODAL_CREATE"], (e) => {
        t3({
            type: "INTERACTION_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: (0, tI.ZV)(e.components),
            nonce: e.nonce,
            resolved: e.resolved,
        });
    }),
    t0(["INTERACTION_IFRAME_MODAL_CREATE"], (e) => {
        t3({
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
    t0(["STAGE_INSTANCE_CREATE"], (e) => {
        t3({ type: "STAGE_INSTANCE_CREATE", instance: e });
    }),
    t0(["STAGE_INSTANCE_UPDATE"], (e) => {
        t3({ type: "STAGE_INSTANCE_UPDATE", instance: e });
    }),
    t0(["STAGE_INSTANCE_DELETE"], (e) => {
        t3({ type: "STAGE_INSTANCE_DELETE", instance: e });
    }),
    t0(["GUILD_SCHEDULED_EVENT_CREATE"], (e) => {
        t3({ type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent: e });
    }),
    t0(["GUILD_SCHEDULED_EVENT_UPDATE"], (e) => {
        t3({ type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent: e });
    }),
    t0(["GUILD_SCHEDULED_EVENT_DELETE"], (e) => {
        t3({ type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent: e });
    }),
    t0(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (e) => {
        t3({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException: e });
    }),
    t0(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (e) => {
        t3({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException: e });
    }),
    t0(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (e) => {
        t3({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException: e });
    }),
    t0(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (e) => {
        t3({ type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE", eventId: e.event_id });
    }),
    t0(["GUILD_SCHEDULED_EVENT_USER_ADD"], (e) => {
        t3({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    t0(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (e) => {
        t3({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    t0(["GUILD_DIRECTORY_ENTRY_CREATE"], (e) => {
        t3({ type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: e.directory_channel_id, entry: e });
    }),
    t0(["GUILD_DIRECTORY_ENTRY_UPDATE"], (e) => {
        t3({ type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: e.directory_channel_id, entry: e });
    }),
    t0(["GUILD_DIRECTORY_ENTRY_DELETE"], (e) => {
        t3({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: e.directory_channel_id, guildId: e.entity_id });
    }),
    t0(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (e) => {
        t3({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until,
        });
    }),
    t0(["VOICE_CHANNEL_EFFECT_SEND"], (e) => {
        t3({
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
    t0(["CLIPS_REMOTE_TRIGGER"], (e) => {
        t3({
            type: "CLIPS_REMOTE_TRIGGER",
            userId: e.user_id,
            applicationId: e.application_id,
            partyId: e.party_id ?? null,
            remoteClipId: e.remote_clip_id,
        });
    }),
    t0(["GUILD_SOUNDBOARD_SOUND_CREATE"], (e) => {
        t3({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new tL.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    t0(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (e) => {
        t3({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new tL.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    t0(["GUILD_SOUNDBOARD_SOUND_DELETE"], (e) => {
        t3({ type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: e.guild_id, soundId: e.sound_id });
    }),
    t0(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (e) => {
        t3({
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
    t1(
        ["EMBEDDED_ACTIVITY_UPDATE_V2"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            t3({
                type: "EMBEDDED_ACTIVITY_UPDATE_V2",
                applicationId: e.application_id,
                launchId: e.launch_id,
                compositeInstanceId: e.composite_instance_id,
                location: e.location,
                participants: e.participants,
            });
        },
    ),
    t0(["AUTH_SESSION_CHANGE"], (e) => {
        t3({ type: "AUTH_SESSION_CHANGE", authSessionIdHash: e.auth_session_id_hash });
    }),
    t0(["USER_CONNECTIONS_LINK_CALLBACK"], (e) => {
        t3({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state,
        });
    }),
    t0(["USER_CONNECTIONS_CALLBACK"], (e) => {
        t3({
            type: "USER_CONNECTIONS_CALLBACK",
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params,
        });
    }),
    t0(["DELETED_ENTITY_IDS"], (e) => {
        t3({ type: "DELETED_ENTITY_IDS", ...e });
    }),
    t1(
        ["CHANNEL_SYNC"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            e.channels.forEach((e) => {
                tq.add(e);
            }),
                t3({
                    type: "CHANNEL_SYNC",
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check,
                });
        },
    ),
    t0(["CONSOLE_COMMAND_UPDATE"], (e) => {
        t3({ type: "CONSOLE_COMMAND_UPDATE", id: e.id, result: e.result, error: e.error });
    }),
    t1(
        ["PASSIVE_UPDATE_V2"],
        (e) => I.D.loadGuildIds([e.guild_id]),
        (e) => {
            t3({
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
                })),
                removedVoiceStateUsers: e.removed_voice_states,
            });
        },
    ),
    t0(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (e) => {
        t3({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions,
        });
    }),
    t0(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (e) => {
        t3({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id,
        });
    }),
    t0(["LAST_MESSAGES"], (e) => {
        t3({ type: "MESSAGE_PREVIEWS_LOADED", guildId: e.guild_id, messages: e.messages });
    }),
    t0(["AUTHENTICATOR_UPDATE"], (e) => {
        t3({ type: "AUTHENTICATOR_UPDATE", credential: e });
    }),
    t0(["AUTHENTICATOR_CREATE"], (e) => {
        t3({ type: "AUTHENTICATOR_CREATE", credential: e });
    }),
    t0(["AUTHENTICATOR_DELETE"], (e) => {
        t3({ type: "AUTHENTICATOR_DELETE", credential: e });
    }),
    t0(["NOTIFICATION_SETTINGS_UPDATE"], (e) => {
        t3({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: e.flags } });
    }),
    t0(["CONVERSATION_SUMMARY_UPDATE"], (e) => {
        t3({ type: "CONVERSATION_SUMMARY_UPDATE", ...e });
    }),
    t0(["PREMIUM_MARKETING_PREVIEW"], (e) => {
        t3({ type: "PREMIUM_MARKETING_PREVIEW", data: e });
    }),
    t0(["USER_APPLICATION_UPDATE"], (e) => {
        t3({ type: "USER_APPLICATION_UPDATE", applicationId: e.application_id });
    }),
    t0(["USER_APPLICATION_REMOVE"], (e) => {
        t3({ type: "USER_APPLICATION_REMOVE", applicationId: e.application_id });
    }),
    t0(["DM_SETTINGS_UPSELL_SHOW"], (e) => {
        t3({ type: "DM_SETTINGS_UPSELL_SHOW", guildId: e.guild_id });
    }),
    t0(["CONTENT_INVENTORY_INBOX_STALE"], (e) => {
        t3({ type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: e.refresh_after_ms });
    }),
    t0(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (e) => {
        t3({ type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: e.balance });
    }),
    t0(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
        t3({ type: t, guildId: e.guild_id, entitlements: e.entitlements });
    }),
    t0(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
        t3({ type: t, guildId: e.guild_id, gameServer: e.game_server });
    }),
    t0(["GAME_SERVER_DELETE"], (e, t) => {
        t3({ type: t, guildId: e.guild_id, gameServerId: e.game_server_id });
    }),
    t0(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
        t3({ type: t, guildId: e.guild_id });
    }),
    t0(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
        t3({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
            username: e.username,
            avatar_hash: e.avatar_hash,
            metadata: e.metadata,
        });
    }),
    t0(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
        t3({ type: t, user_id: e.user_id, application_id: e.application_id });
    }),
    t0(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (e) => {
        t3({
            type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
            interactionId: e.interaction_id,
            applicationId: e.application_id,
            skuId: e.sku_id,
            recipientId: e.recipient_id,
            eligible: e.eligible,
            ineligibleReason: e.ineligible_reason,
        });
    }),
    t0(["HAVEN_CONNECT"], (e, t) => {
        t3({ type: t, room: (0, tA.xf)(e) });
    }),
    t0(["HAVEN_DISCONNECT"], (e, t) => {
        t3({ type: t, userId: e.user_id, roomId: e.room_id });
    }),
    t0(["HAVEN_UPDATE"], (e, t) => {
        t3({ type: t, room: (0, tA.xf)(e) });
    }),
    t0(["GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE"], (e, t) => {
        t3({ type: t, gameApplicationIds: e.game_application_ids, guildId: e.guild_id });
    });
var ne = n(355097);
let nt = window.DiscordNative;
tu.dispatcher.getDispatchHandler = function (e) {
    return tJ[e];
};
let nn = new h.A("ConnectionStore"),
    ni = 0,
    nr = null,
    ns = !0,
    na = null,
    no = null;
async function nl(e) {
    (ni = Date.now()), (nr = e.sessionId), tc.handleConnectionOpen();
    let t = {},
        n = C.A.getVoiceChannelId();
    if (null != n) {
        let e = u.w.get("discord_watchdog_restart_timestamp"),
            i = null != e && Date.now() - parseInt(e, 10) < 6e4;
        if (
            (u.w.remove("discord_watchdog_restart_timestamp"),
            window?.performance?.getEntriesByType?.("navigation")?.[0]?.type === "reload" ||
                i ||
                (await nt?.processUtils?.getLastCrash?.())?.rendererCrashReason != null ||
                !ns)
        ) {
            let e = I.A.getChannel(n);
            null != e && ((t = { guildId: e.getGuildId(), channelId: n }), (0, f.CX)(n));
        } else S.A.setLastSessionVoiceChannelId(null != n ? n : null), E.default.selectVoiceChannel(null);
    }
    tE.update(t, !0), (ns = !1), (no = null);
}
function nd() {
    tE.update();
}
function n_() {
    return tE.update(), !1;
}
function nu() {
    return tc.update(), !1;
}
function nc(e) {
    tu.isSessionEstablished() && tu.streamDelete(e);
}
class nE extends _.Ay.Store {
    static displayName = "GatewayConnectionStore";
    initialize() {
        this.waitFor(p.default, A.A, I.A, T.Ay, S.A, N.A, C.A, R.A, O.A, g.A),
            this.syncWith([T.Ay], n_),
            this.syncWith([R.A], nu);
    }
    getSocket() {
        return tu;
    }
    isTryingToConnect() {
        return !tu.isClosed();
    }
    isConnected() {
        return tu.isSessionEstablished();
    }
    isConnectedOrOverlay() {
        return tu.isSessionEstablished() || __OVERLAY__;
    }
    lastTimeConnectedChanged() {
        return ni;
    }
}
let nh = new nE(c.h, {
    START_SESSION: function () {
        return tu.isClosed()
            ? (nn.verbose("Socket is reconnecting because of starting new session"), tu.connect())
            : (nn.verbose("Socket is not reconnecting during a new session because it is not closed"), !1);
    },
    LOGIN_SUCCESS: function () {
        return (
            nn.verbose("session refresh dispatched", { isEstablished: tu.isSessionEstablished() }),
            !!tu.isSessionEstablished() && (tu.close(), tu.connect())
        );
    },
    LOGOUT: function (e) {
        e.isSwitchingAccount && tc.handleAccountSwitch(), nn.verbose("Closing socket because of logout"), tu.close();
    },
    CLEAR_CACHES: function (e) {
        return e.resetSocket && (tu.close(), tu.dispatcher.clear(), tu.connect()), !1;
    },
    CONNECTION_OPEN: (e) => {
        nl(e);
    },
    CONNECTION_RESUMED: function () {
        no = null;
    },
    CONNECTION_CLOSED: function () {
        nn.verbose("connection closed dispatched"), (ni = Date.now());
    },
    RTC_CONNECTION_STATE: function (e) {
        if (e.state !== eg.S7L.DISCONNECTED) return !1;
        e.willReconnect && (null != e.streamKey ? tu.streamPing(e.streamKey) : tu.voiceServerPing());
    },
    VOICE_CHANNEL_SELECT: function (e) {
        return (
            tE.update({ guildId: e.guildId, channelId: e.channelId }),
            (no = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null),
            (0, y.isIOS)() &&
                na === eg.g6G.BACKGROUND &&
                (null == e.channelId ? tu.close(!0) : tu.isClosed() && ((eQ = !1), tu.connect())),
            !1
        );
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (p.default.getId() !== t.userId) return e;
            if (t.sessionId === nr) {
                if (null != no)
                    return nn.verbose("Ignoring voice state for own session due to VSU lock on channel:", no), e;
                tE.setState({ guildId: t.guildId, channelId: t.channelId });
            } else {
                if (t.guildId !== tE.guildId) return e;
                tE.setState({ guildId: null, channelId: null });
            }
            return !0;
        }, !1);
    },
    GUILD_DELETE: function (e) {
        e.guild.id === tE.guildId && tE.setState({ guildId: null, channelId: null });
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        t.id === tE.channelId && tE.setState({ guildId: null, channelId: null });
    },
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        if (t === tE.channelId) {
            if (no === t) return !1;
            tE.setState({ guildId: null, channelId: null });
        }
    },
    APP_STATE_UPDATE: function (e) {
        return (
            (0, y.isIOS)()
                ? (p.default.isAuthenticated() &&
                      (na === eg.g6G.INACTIVE && e.state === eg.g6G.BACKGROUND && null == tE.channelId
                          ? tu.close(!0)
                          : na === eg.g6G.BACKGROUND &&
                            e.state === eg.g6G.ACTIVE &&
                            tu.isClosed() &&
                            ((eQ = !1), tu.connect())),
                  (na = e.state))
                : e.state === eg.g6G.ACTIVE &&
                  ((eQ = !1), p.default.isAuthenticated() && tu.resetBackoff("App state is active")),
            !1
        );
    },
    GUILD_MEMBERS_REQUEST: function (e) {
        return (
            tu.isSessionEstablished() &&
                ("userIds" in e
                    ? d()(e.userIds)
                          .chunk(100)
                          .forEach((t) => {
                              tu.requestGuildMembers(e.guildIds, { userIds: t, presences: !!e.presences });
                          })
                    : tu.requestGuildMembers(e.guildIds, { query: e.query, limit: e.limit, presences: !!e.presences })),
            !1
        );
    },
    GUILD_SEARCH_RECENT_MEMBERS: function (e) {
        let { guildId: t, query: n, continuationToken: i } = e;
        tu.isSessionEstablished() && tu.searchRecentMembers(t, { query: n, continuationToken: i });
    },
    GUILD_SUBSCRIPTIONS_FLUSH: function (e) {
        let { subscriptions: t } = e;
        return tu.isSessionEstablished() && tu.updateGuildSubscriptions(t), !1;
    },
    CALL_CONNECT: function (e) {
        let { channelId: t } = e;
        return tu.isSessionEstablished() && tu.callConnect(t), !1;
    },
    CALL_CONNECT_MULTIPLE: function (e) {
        let { channelIds: t } = e;
        return (
            tu.isSessionEstablished() &&
                t.forEach((e) => {
                    tu.callConnect(e);
                }),
            !1
        );
    },
    STREAM_CREATE: nd,
    STREAM_START: function (e) {
        let { streamType: t, guildId: n, channelId: i } = e;
        if (tu.isSessionEstablished()) {
            let e = null != n ? I.A.getChannel(i)?.rtcRegion : A.A.getCall(i)?.region;
            tu.streamCreate(t, n, i, e ?? N.A.getPreferredRegion());
        }
        return !1;
    },
    STREAM_WATCH: function (e) {
        let { streamKey: t, allowMultiple: n } = e;
        if (tu.isSessionEstablished()) {
            if (n);
            else {
                let e;
                (e = O.A.getAllActiveStreamKeys().find((e) => (0, m.Iy)(e).ownerId === p.default.getId())),
                    O.A.getAllActiveStreamKeys()
                        .filter((t) => t !== e)
                        .forEach((e) => nc(e));
            }
            tu.streamWatch(t);
        }
        return !1;
    },
    STREAM_STOP: function (e) {
        let { streamKey: t } = e;
        return nc(t), nd(), !1;
    },
    STREAM_SET_PAUSED: function (e) {
        let { streamKey: t, paused: n } = e;
        tu.isSessionEstablished() && tu.streamSetPaused(t, n);
    },
    PUSH_NOTIFICATION_CLICK: function () {
        return tu.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1;
    },
    REQUEST_FORUM_UNREADS: function (e) {
        let { guildId: t, channelId: n, threads: i } = e;
        tu.requestForumUnreads(t, n, i);
    },
    REQUEST_SOUNDBOARD_SOUNDS: function (e) {
        let { guildIds: t } = e;
        tu.requestSoundboardSounds(t);
    },
    REMOTE_COMMAND: function (e) {
        let { sessionId: t, payload: n } = e;
        return tu.isSessionEstablished() && tu.remoteCommand(t, n), !1;
    },
    RESET_SOCKET: function (e) {
        tu.connectionState !== v.WILL_RECONNECT && tu.resetSocketAndClearCacheOnError(e.args);
    },
    CLIPS_SETTINGS_UPDATE: nd,
    RUNNING_GAMES_CHANGE: nd,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        e.settings.type === ne.oD.PRELOADED_USER_SETTINGS &&
            e.settings.proto.clips?.allowVoiceRecording != null &&
            nd();
    },
});
