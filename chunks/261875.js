var i = r(47120);
var a = r(442837),
    o = r(348326),
    s = r(570140),
    l = r(710845),
    u = r(314897),
    c = r(115522);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = new l.Z('DatabaseManager'),
    p = !1;
class h extends a.ZP.Store {
    initialize() {
        this.waitFor(u.default), this.carefullySpeculativelyOpen(c.n()), this.handleAuthenticationStoreChanged(), u.default.addChangeListener(() => this.handleAuthenticationStoreChanged());
    }
    databaseName(e) {
        return m(e);
    }
    database(e) {
        if (null != e) {
            var n;
            return null !== (n = this.databases.get(e)) && void 0 !== n ? n : null;
        }
        return null;
    }
    carefullyOpenDatabase(e) {
        if (this.preventWritingCachesAgainThisSession) return f.verbose('Not opening database because caches have been manually cleared.'), null;
        if (null != e && !this.databases.has(e)) {
            let n = g(e);
            f.verbose('added database ('.concat(e, ' \u2192 ').concat(n, ')')), this.databases.set(e, n), this.emitChange();
        }
        return this.database(e);
    }
    replaceDisableAllDatabases(e) {
        for (let n of (f.info('disabling and nulling all databases (reason: '.concat(e, ')')), this.databases.keys())) {
            let r = this.databases.get(n);
            null == r || r.disable(e), null == r || r.close(), this.databases.set(n, null);
        }
        this.emitChange();
    }
    remove(e) {
        let n = this.databases.get(e);
        f.log('removing database (user: '.concat(e, ', database: ').concat(n, ')')), null == n || n.close(), this.databases.delete(e), this.emitChange();
    }
    handleClearCaches(e) {
        e.preventWritingCachesAgainThisSession && (this.preventWritingCachesAgainThisSession = !0), this.replaceDisableAllDatabases('DatabaseManager ('.concat(e.reason, ')'));
    }
    handleConnectionOpen() {
        let e = u.default.getId(),
            n = this.databases.get(e),
            r = null == n ? void 0 : n.state();
        null == n && r !== o.hi.Open && this.remove(e), this.carefullyOpenDatabase(e);
    }
    handleAuthenticationStoreChanged() {
        let e = u.default.getId(),
            n = this.activeUserId;
        if (e !== n) {
            let r = this.databases.get(n);
            f.verbose('active user changed (now: '.concat(e, ', was: ').concat(n, ', was: ').concat(r, ')')), null == r || r.close(), c.I(e), (this.activeUserId = e), this.databases.delete(n);
        }
    }
    async carefullySpeculativelyOpen(e) {
        if (this.preventWritingCachesAgainThisSession) {
            f.verbose('Not opening database because caches have been manually cleared.');
            return;
        }
        if (null != e) {
            let n = await E(e);
            null == n || this.databases.has(e) ? (f.verbose('discarding speculative database ('.concat(e, ' \u2192 ').concat(n, ')')), null == n || n.close()) : (f.verbose('added speculative database ('.concat(e, ' \u2192 ').concat(n, ')')), this.databases.set(e, n), this.emitChange());
        }
    }
    constructor() {
        super(
            s.Z,
            {
                CLEAR_CACHES: (e) => this.handleClearCaches(e),
                CONNECTION_CLOSED: () => this.handleAuthenticationStoreChanged(),
                CONNECTION_OPEN: () => this.handleConnectionOpen(),
                LOGOUT: () => this.handleAuthenticationStoreChanged()
            },
            s.c.Early
        ),
            d(this, 'databases', new Map()),
            d(this, 'activeUserId', null),
            d(this, 'preventWritingCachesAgainThisSession', !1);
    }
}
function _(e, n) {
    for (let r = 0; r < e; r++)
        try {
            return n();
        } catch (e) {
            f.error('tryUntil '.concat(r), e);
        }
    return null;
}
function m(e) {
    return '@account.'.concat(e);
}
function g(e) {
    if (p) {
        let n = 50,
            r = m(e);
        return f.verbose('synchronously opening '.concat(r)), _(n, () => o.vo.openSyncUnsafe(r, { invalidateDisabledHandles: !0 }));
    }
    return null;
}
async function E(e) {
    if (p) {
        let n = m(e);
        f.verbose('speculatively opening '.concat(n));
        try {
            return await o.vo.open(n);
        } catch (e) {
            f.warn("couldn't speculatively open database.", e);
        }
    }
    return null;
}
n.Z = new h();
