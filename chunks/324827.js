n.d(t, { A: () => c });
var r = n(626584),
    i = n(723176),
    a = n(194188);
function s(e, t, n) {
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
let o = new r.A("KvCacheVersion");
class l {
    async okAsync(e) {
        let t = await i.A.cache(e).get(a.WL);
        return null == t ? null : 3 === t;
    }
    canUseGuildVersions() {
        return this.hasSuccessfullyConnected ? Promise.resolve(!0) : this.doesDatabaseVersionMatchJsConstants();
    }
    async doesDatabaseVersionMatchJsConstants() {
        let e = i.A.forceResyncVersion();
        if (null == e) return !1;
        let t = await e.get(a.pE),
            n = null == t ? void 0 : t.version;
        return n === a.NI || (o.info("KVStore version mismatch: ".concat(n, " vs ").concat(a.NI)), !1);
    }
    handleClear() {
        this.hasSuccessfullyConnected = !1;
    }
    handleConnectionOpen() {
        this.hasSuccessfullyConnected = !0;
    }
    handleWrite(e) {
        (this.hasSuccessfullyConnected = !0),
            i.A.cacheTransaction(e).put("hello", "\uD83D\uDC4B"),
            i.A.cacheTransaction(e).put(a.WL, 3),
            i.A.forceResyncVersionTransaction(e).put(a.pE, { version: a.NI });
    }
    resetInMemoryState() {
        this.hasSuccessfullyConnected = !1;
    }
    constructor() {
        s(this, "hasSuccessfullyConnected", !1),
            s(this, "actions", {
                BACKGROUND_SYNC: (e, t) => this.handleWrite(t),
                CONNECTION_OPEN: () => this.handleConnectionOpen(),
                WRITE_CACHES: (e, t) => this.handleWrite(t),
            });
    }
}
let c = new l();
