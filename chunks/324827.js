"use strict";
n.d(t, { A: () => l });
var r = n(626584),
    i = n(723176),
    a = n(194188);
let s = new r.A("KvCacheVersion");
class o {
    hasSuccessfullyConnected = !1;
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
            n = t?.version;
        return n === a.NI || (s.info(`KVStore version mismatch: ${n} vs ${a.NI}`), !1);
    }
    actions = {
        BACKGROUND_SYNC: (e, t) => this.handleWrite(t),
        CONNECTION_OPEN: () => this.handleConnectionOpen(),
        WRITE_CACHES: (e, t) => this.handleWrite(t),
    };
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
}
let l = new o();
