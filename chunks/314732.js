"use strict";
n.d(t, { A: () => d });
var i = n(626584),
    r = n(723176);
let a = "version",
    s = "force-resync-version",
    l = "stable-300",
    o = new i.A("KvCacheVersion"),
    d = new (class {
        hasSuccessfullyConnected = !1;
        async okAsync(e) {
            let t = await r.A.cache(e).get(a);
            return null == t ? null : 3 === t;
        }
        canUseGuildVersions() {
            return this.hasSuccessfullyConnected ? Promise.resolve(!0) : this.doesDatabaseVersionMatchJsConstants();
        }
        async doesDatabaseVersionMatchJsConstants() {
            let e = r.A.forceResyncVersion();
            if (null == e) return !1;
            let t = await e.get(s),
                n = t?.version;
            return n === l || (o.info(`KVStore version mismatch: ${n} vs ${l}`), !1);
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
                r.A.cacheTransaction(e).put("hello", "\uD83D\uDC4B"),
                r.A.cacheTransaction(e).put(a, 3),
                r.A.forceResyncVersionTransaction(e).put(s, { version: l });
        }
        resetInMemoryState() {
            this.hasSuccessfullyConnected = !1;
        }
    })();
