n.d(t, { Z: () => g }), n(47120);
var i = n(442837),
    r = n(348326),
    a = n(570140),
    s = n(710845),
    o = n(314897),
    l = n(115522);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = new s.Z('DatabaseManager'),
    d = !1;
class f extends i.ZP.Store {
    initialize() {
        this.waitFor(o.default), this.carefullySpeculativelyOpen(l.n()), this.handleAuthenticationStoreChanged(), o.default.addChangeListener(() => this.handleAuthenticationStoreChanged());
    }
    databaseName(e) {
        return p(e);
    }
    database(e) {
        if (null != e) {
            var t;
            return null !== (t = this.databases.get(e)) && void 0 !== t ? t : null;
        }
        return null;
    }
    carefullyOpenDatabase(e) {
        if (this.preventWritingCachesAgainThisSession) return c.verbose('Not opening database because caches have been manually cleared.'), null;
        if (null != e && !this.databases.has(e)) {
            let t = h(e);
            c.verbose('added database ('.concat(e, ' \u2192 ').concat(t, ')')), this.databases.set(e, t), this.emitChange();
        }
        return this.database(e);
    }
    replaceDisableAllDatabases(e) {
        for (let t of (c.info('disabling and nulling all databases (reason: '.concat(e, ')')), this.databases.keys())) {
            let n = this.databases.get(t);
            null == n || n.disable(e), null == n || n.close(), this.databases.set(t, null);
        }
        this.emitChange();
    }
    remove(e) {
        let t = this.databases.get(e);
        c.log('removing database (user: '.concat(e, ', database: ').concat(t, ')')), null == t || t.close(), this.databases.delete(e), this.emitChange();
    }
    handleClearCaches(e) {
        e.preventWritingCachesAgainThisSession && (this.preventWritingCachesAgainThisSession = !0), this.replaceDisableAllDatabases('DatabaseManager ('.concat(e.reason, ')'));
    }
    handleConnectionOpen() {
        let e = o.default.getId(),
            t = this.databases.get(e),
            n = null == t ? void 0 : t.state();
        null == t && n !== r.hi.Open && this.remove(e), this.carefullyOpenDatabase(e);
    }
    handleAuthenticationStoreChanged() {
        let e = o.default.getId(),
            t = this.activeUserId;
        if (e !== t) {
            let n = this.databases.get(t);
            c.verbose('active user changed (now: '.concat(e, ', was: ').concat(t, ', was: ').concat(n, ')')), null == n || n.close(), l.I(e), (this.activeUserId = e), this.databases.delete(t);
        }
    }
    async carefullySpeculativelyOpen(e) {
        if (this.preventWritingCachesAgainThisSession) {
            c.verbose('Not opening database because caches have been manually cleared.');
            return;
        }
        if (null != e) {
            let t = await m(e);
            null == t || this.databases.has(e) ? (c.verbose('discarding speculative database ('.concat(e, ' \u2192 ').concat(t, ')')), null == t || t.close()) : (c.verbose('added speculative database ('.concat(e, ' \u2192 ').concat(t, ')')), this.databases.set(e, t), this.emitChange());
        }
    }
    constructor() {
        super(
            a.Z,
            {
                CLEAR_CACHES: (e) => this.handleClearCaches(e),
                CONNECTION_CLOSED: () => this.handleAuthenticationStoreChanged(),
                CONNECTION_OPEN: () => this.handleConnectionOpen(),
                LOGOUT: () => this.handleAuthenticationStoreChanged()
            },
            a.c.Early
        ),
            u(this, 'databases', new Map()),
            u(this, 'activeUserId', null),
            u(this, 'preventWritingCachesAgainThisSession', !1);
    }
}
function _(e, t) {
    for (let n = 0; n < e; n++)
        try {
            return t();
        } catch (e) {
            c.error('tryUntil '.concat(n), e);
        }
    return null;
}
function p(e) {
    return '@account.'.concat(e);
}
function h(e) {
    if (d) {
        let t = 50,
            n = p(e);
        return c.verbose('synchronously opening '.concat(n)), _(t, () => r.vo.openSyncUnsafe(n, { invalidateDisabledHandles: !0 }));
    }
    return null;
}
async function m(e) {
    if (d) {
        let t = p(e);
        c.verbose('speculatively opening '.concat(t));
        try {
            return await r.vo.open(t);
        } catch (e) {
            c.warn("couldn't speculatively open database.", e);
        }
    }
    return null;
}
let g = new f();
