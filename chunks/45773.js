"use strict";
n.d(t, { A: () => u });
var i = n(17928),
    r = n(519551),
    s = n(228366),
    a = n(626584),
    o = n(495544);
let l = new a.A("DatabaseManager");
class d extends i.Ay.Store {
    databases = new Map();
    activeUserId = null;
    preventWritingCachesAgainThisSession = !1;
    constructor() {
        super(
            s.h,
            {
                CLEAR_CACHES: (e) => this.handleClearCaches(e),
                CONNECTION_CLOSED: () => this.handleAuthenticationStoreChanged(),
                CONNECTION_OPEN: () => this.handleConnectionOpen(),
                LOGOUT: () => this.handleAuthenticationStoreChanged(),
            },
            s.A.Early,
        );
    }
    initialize() {
        this.waitFor(o.default),
            this.carefullySpeculativelyOpen(null),
            this.handleAuthenticationStoreChanged(),
            o.default.addChangeListener(() => this.handleAuthenticationStoreChanged());
    }
    databaseName(e) {
        return (function (e) {
            return `@account.${e}`;
        })(e);
    }
    database(e) {
        return null != e ? (this.databases.get(e) ?? null) : null;
    }
    carefullyOpenDatabase(e) {
        return this.preventWritingCachesAgainThisSession
            ? (l.verbose("Not opening database because caches have been manually cleared."), null)
            : (null == e ||
                  this.databases.has(e) ||
                  (l.verbose(`added database (${e} → null)`), this.databases.set(e, null), this.emitChange()),
              this.database(e));
    }
    replaceDisableAllDatabases(e) {
        for (let t of (l.info(`disabling and nulling all databases (reason: ${e})`), this.databases.keys())) {
            let n = this.databases.get(t);
            n?.disable(e), n?.close(), this.databases.set(t, null);
        }
        this.emitChange();
    }
    remove(e) {
        let t = this.databases.get(e);
        l.log(`removing database (user: ${e}, database: ${t})`),
            t?.close(),
            this.databases.delete(e),
            this.emitChange();
    }
    handleClearCaches(e) {
        e.preventWritingCachesAgainThisSession && (this.preventWritingCachesAgainThisSession = !0),
            this.replaceDisableAllDatabases(`DatabaseManager (${e.reason})`);
    }
    handleConnectionOpen() {
        let e = o.default.getId(),
            t = this.databases.get(e),
            n = t?.state();
        null == t && n !== r.z9.Open && this.remove(e), this.carefullyOpenDatabase(e);
    }
    handleAuthenticationStoreChanged() {
        let e = o.default.getId(),
            t = this.activeUserId;
        if (e !== t) {
            let n = this.databases.get(t);
            l.verbose(`active user changed (now: ${e}, was: ${t}, was: ${n})`),
                n?.close(),
                (this.activeUserId = e),
                this.databases.delete(t);
        }
    }
    async carefullySpeculativelyOpen(e) {
        if (this.preventWritingCachesAgainThisSession)
            return void l.verbose("Not opening database because caches have been manually cleared.");
        if (null != e) {
            let t = await _(e);
            null == t || this.databases.has(e)
                ? (l.verbose(`discarding speculative database (${e} → ${t})`), t?.close())
                : (l.verbose(`added speculative database (${e} → ${t})`), this.databases.set(e, t), this.emitChange());
        }
    }
}
async function _(e) {
    return null;
}
let u = new d();
