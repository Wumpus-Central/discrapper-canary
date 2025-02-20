n.d(t, { Z: () => y }), n(47120), n(653041);
var r,
    i = n(442837),
    o = n(570140),
    a = n(881052),
    s = n(128449);
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
let c = new Map(),
    u = new Map();
function d(e) {
    return [s.BP, e.query, s.t0, e.categoryId, s.KL, e.languageCode].join('-');
}
class f {
    handleSearchStart() {
        (this.error = null), (this.isFetching = !0);
    }
    handleSearchFailure(e) {
        (this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.error = new a.Hx(e));
    }
    handleSearchSuccess(e) {
        let { total: t, guilds: n } = e;
        (this.error = null), (this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.lastFetchTimestamp = Date.now()), null != t && (this.total = t);
        let r = [...this.guildIds];
        n.forEach((e) => r.push(e.id)), (this.guildIds = r), (this.offset = r.length);
    }
    constructor({ query: e }) {
        l(this, 'guildIds', []), l(this, 'error', null), l(this, 'offset', null), l(this, 'total', null), l(this, 'isFetching', !1), l(this, 'isInitialFetchComplete', !1), l(this, 'lastFetchTimestamp', null), l(this, 'query', void 0), (this.query = e);
    }
}
function p(e) {
    var t;
    let n = d(e),
        r = null !== (t = c.get(n)) && void 0 !== t ? t : new f({ query: e.query });
    return c.set(n, r), r;
}
function _(e, t) {
    let n = d(e),
        r = c.get(n);
    return null != r ? t(r) : null;
}
function h() {
    c.clear(), u.clear();
}
function m(e) {
    let { query: t, categoryId: n, languageCode: r, reset: i } = e,
        o = d({
            query: t,
            categoryId: n,
            languageCode: r
        });
    i && c.delete(o),
        p({
            query: t,
            categoryId: n,
            languageCode: r
        }).handleSearchStart();
}
function g(e) {
    let { query: t, categoryId: n, languageCode: r, total: i, guilds: o } = e;
    p({
        query: t,
        categoryId: n,
        languageCode: r
    }).handleSearchSuccess({
        total: i,
        guilds: o
    }),
        o.forEach((e) => {
            u.set(e.id, e);
        });
}
function E(e) {
    let { query: t, categoryId: n, languageCode: r, error: i } = e;
    p({
        query: t,
        categoryId: n,
        languageCode: r
    }).handleSearchFailure(i);
}
function v(e) {
    let { ignoreQueries: t } = e,
        n = new Set(t);
    c.forEach((e, t) => {
        null != e.query && (n.has(e.query) || c.delete(t));
    });
}
class b extends (r = i.ZP.Store) {
    getGuild(e) {
        return u.get(e);
    }
    getGuildIds(e) {
        return _(e, (e) => e.guildIds);
    }
    getIsFetching(e) {
        return _(e, (e) => e.isFetching);
    }
    getIsInitialFetchComplete(e) {
        return _(e, (e) => e.isInitialFetchComplete);
    }
    getOffset(e) {
        return _(e, (e) => e.offset);
    }
    getTotal(e) {
        return _(e, (e) => e.total);
    }
    getLastFetchTimestamp(e) {
        return _(e, (e) => e.lastFetchTimestamp);
    }
    getError(e) {
        return _(e, (e) => e.error);
    }
    getErrorMessage(e) {
        return _(e, (e) => {
            var t;
            return null === (t = e.error) || void 0 === t ? void 0 : t.getAnyErrorMessage();
        });
    }
}
l(b, 'displayName', 'GlobalDiscoveryServersSearchResultsStore');
let y = new b(o.Z, {
    CONNECTION_OPEN: h,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_START: m,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: g,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: E,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: v
});
