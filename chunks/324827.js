"use strict";
n.d(t, { A: () => o });
var r = n(626584),
    i = n(723176),
    s = n(194188);
let a = new r.A("KvCacheVersion"),
    o = new (class {
        hasSuccessfullyConnected = !1;
        async okAsync(e) {
            let t = await i.A.cache(e).get(s.WL);
            return null == t ? null : 3 === t;
        }
        canUseGuildVersions() {
            return this.hasSuccessfullyConnected ? Promise.resolve(!0) : this.doesDatabaseVersionMatchJsConstants();
        }
        async doesDatabaseVersionMatchJsConstants() {
            let e = i.A.forceResyncVersion();
            if (null == e) return !1;
            let t = await e.get(s.pE),
                n = t?.version;
            return n === s.NI || (a.info(`KVStore version mismatch: ${n} vs ${s.NI}`), !1);
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
                i.A.cacheTransaction(e).put(s.WL, 3),
                i.A.forceResyncVersionTransaction(e).put(s.pE, { version: s.NI });
        }
        resetInMemoryState() {
            this.hasSuccessfullyConnected = !1;
        }
    })();
