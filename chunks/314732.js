"use strict";
n.d(t, { A: () => d });
var i = n(626584),
    r = n(723176);
let s = "version",
    a = "force-resync-version",
    o = "stable-297",
    l = new i.A("KvCacheVersion"),
    d = new (class {
        hasSuccessfullyConnected = !1;
        async okAsync(e) {
            let t = await r.A.cache(e).get(s);
            return null == t ? null : 3 === t;
        }
        canUseGuildVersions() {
            return this.hasSuccessfullyConnected ? Promise.resolve(!0) : this.doesDatabaseVersionMatchJsConstants();
        }
        async doesDatabaseVersionMatchJsConstants() {
            let e = r.A.forceResyncVersion();
            if (null == e) return !1;
            let t = await e.get(a),
                n = t?.version;
            return n === o || (l.info(`KVStore version mismatch: ${n} vs ${o}`), !1);
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
                r.A.cacheTransaction(e).put(s, 3),
                r.A.forceResyncVersionTransaction(e).put(a, { version: o });
        }
        resetInMemoryState() {
            this.hasSuccessfullyConnected = !1;
        }
    })();
