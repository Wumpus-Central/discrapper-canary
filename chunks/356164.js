n.d(t, { Z: () => I }), n(47120), n(653041);
var i,
    r = n(442837),
    a = n(570140),
    s = n(881052),
    o = n(128449);
function l(e, t, n) {
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
let u = new Map(),
    c = new Map();
function d(e) {
    return [o.BP, e.query, o.t0, e.categoryId, o.KL, e.languageCode].join('-');
}
class f {
    handleSearchStart() {
        (this.error = null), (this.isFetching = !0);
    }
    handleSearchFailure(e) {
        (this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.error = new s.Hx(e));
    }
    handleSearchSuccess(e) {
        let { total: t, guilds: n } = e;
        (this.error = null), (this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.lastFetchTimestamp = Date.now()), null != t && (this.total = t);
        let i = [...this.guildIds];
        n.forEach((e) => i.push(e.id)), (this.guildIds = i), (this.offset = i.length);
    }
    constructor({ query: e }) {
        l(this, 'guildIds', []), l(this, 'error', null), l(this, 'offset', null), l(this, 'total', null), l(this, 'isFetching', !1), l(this, 'isInitialFetchComplete', !1), l(this, 'lastFetchTimestamp', null), l(this, 'query', void 0), (this.query = e);
    }
}
function _(e) {
    var t;
    let n = d(e),
        i = null !== (t = u.get(n)) && void 0 !== t ? t : new f({ query: e.query });
    return u.set(n, i), i;
}
function p(e, t) {
    let n = d(e),
        i = u.get(n);
    return null != i ? t(i) : null;
}
function h() {
    u.clear(), c.clear();
}
function m(e) {
    let { query: t, categoryId: n, languageCode: i, reset: r } = e,
        a = d({
            query: t,
            categoryId: n,
            languageCode: i
        });
    r && u.delete(a),
        _({
            query: t,
            categoryId: n,
            languageCode: i
        }).handleSearchStart();
}
function g(e) {
    let { query: t, categoryId: n, languageCode: i, total: r, guilds: a } = e;
    _({
        query: t,
        categoryId: n,
        languageCode: i
    }).handleSearchSuccess({
        total: r,
        guilds: a
    }),
        a.forEach((e) => {
            c.set(e.id, e);
        });
}
function E(e) {
    let { query: t, categoryId: n, languageCode: i, error: r } = e;
    _({
        query: t,
        categoryId: n,
        languageCode: i
    }).handleSearchFailure(r);
}
function v(e) {
    let { ignoreQueries: t } = e,
        n = new Set(t);
    u.forEach((e, t) => {
        null != e.query && (n.has(e.query) || u.delete(t));
    });
}
class y extends (i = r.ZP.Store) {
    getGuild(e) {
        return c.get(e);
    }
    getGuildIds(e) {
        return p(e, (e) => e.guildIds);
    }
    getIsFetching(e) {
        return p(e, (e) => e.isFetching);
    }
    getIsInitialFetchComplete(e) {
        return p(e, (e) => e.isInitialFetchComplete);
    }
    getOffset(e) {
        return p(e, (e) => e.offset);
    }
    getTotal(e) {
        return p(e, (e) => e.total);
    }
    getLastFetchTimestamp(e) {
        return p(e, (e) => e.lastFetchTimestamp);
    }
    getError(e) {
        return p(e, (e) => e.error);
    }
    getErrorMessage(e) {
        return p(e, (e) => {
            var t;
            return null === (t = e.error) || void 0 === t ? void 0 : t.getAnyErrorMessage();
        });
    }
}
l(y, 'displayName', 'GlobalDiscoveryServersSearchResultsStore');
let I = new y(a.Z, {
    CONNECTION_OPEN: h,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_START: m,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: g,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: E,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: v
});
