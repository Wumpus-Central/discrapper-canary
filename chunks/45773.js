n.d(t, { A: () => u });
var i = n(17928),
    r = n(979096),
    a = n(228366),
    s = n(626584),
    l = n(280450);
let o = new s.A("DatabaseManager");
class d extends i.Ay.Store {
    databases = new Map();
    activeUserId = null;
    preventWritingCachesAgainThisSession = !1;
    constructor() {
        super(
            a.h,
            {
                CLEAR_CACHES: (e) => this.handleClearCaches(e),
                CONNECTION_CLOSED: () => this.handleAuthenticationStoreChanged(),
                CONNECTION_OPEN: () => this.handleConnectionOpen(),
                LOGOUT: () => this.handleAuthenticationStoreChanged(),
            },
            a.A.Early,
        );
    }
    initialize() {
        this.waitFor(l.default),
            this.carefullySpeculativelyOpen(null),
            this.handleAuthenticationStoreChanged(),
            l.default.addChangeListener(() => this.handleAuthenticationStoreChanged());
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
            ? (o.verbose("Not opening database because caches have been manually cleared."), null)
            : (null == e ||
                  this.databases.has(e) ||
                  (o.verbose(`added database (${e} \u{2192} null)`), this.databases.set(e, null), this.emitChange()),
              this.database(e));
    }
    replaceDisableAllDatabases(e) {
        for (let t of (o.info(`disabling and nulling all databases (reason: ${e})`), this.databases.keys())) {
            let n = this.databases.get(t);
            n?.disable(e), n?.close(), this.databases.set(t, null);
        }
        this.emitChange();
    }
    remove(e) {
        let t = this.databases.get(e);
        o.log(`removing database (user: ${e}, database: ${t})`),
            t?.close(),
            this.databases.delete(e),
            this.emitChange();
    }
    handleClearCaches(e) {
        e.preventWritingCachesAgainThisSession && (this.preventWritingCachesAgainThisSession = !0),
            this.replaceDisableAllDatabases(`DatabaseManager (${e.reason})`);
    }
    handleConnectionOpen() {
        let e = l.default.getId(),
            t = this.databases.get(e),
            n = t?.state();
        null == t && n !== r.z9.Open && this.remove(e), this.carefullyOpenDatabase(e);
    }
    handleAuthenticationStoreChanged() {
        let e = l.default.getId(),
            t = this.activeUserId;
        if (e !== t) {
            let n = this.databases.get(t);
            o.verbose(`active user changed (now: ${e}, was: ${t}, was: ${n})`),
                n?.close(),
                (this.activeUserId = e),
                this.databases.delete(t);
        }
    }
    async carefullySpeculativelyOpen(e) {
        if (this.preventWritingCachesAgainThisSession)
            return void o.verbose("Not opening database because caches have been manually cleared.");
        if (null != e) {
            let t = await c(e);
            null == t || this.databases.has(e)
                ? (o.verbose(`discarding speculative database (${e} \u{2192} ${t})`), t?.close())
                : (o.verbose(`added speculative database (${e} \u{2192} ${t})`),
                  this.databases.set(e, t),
                  this.emitChange());
        }
    }
}
async function c(e) {
    return null;
}
let u = new d();
