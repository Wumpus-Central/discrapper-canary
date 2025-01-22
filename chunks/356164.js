var i,
    a = r(47120);
var o = r(653041);
var s = r(442837),
    l = r(570140),
    u = r(881052),
    c = r(128449);
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
let f = new Map(),
    p = new Map();
function h(e) {
    return [c.BP, e.query, c.t0, e.categoryId, c.KL, e.languageCode].join('-');
}
class _ {
    handleSearchStart() {
        (this.error = null), (this.isFetching = !0);
    }
    handleSearchFailure(e) {
        (this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.error = new u.Hx(e));
    }
    handleSearchSuccess(e) {
        let { total: n, guilds: r } = e;
        (this.error = null), (this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.lastFetchTimestamp = Date.now()), null != n && (this.total = n);
        let i = [...this.guildIds];
        r.forEach((e) => i.push(e.id)), (this.guildIds = i), (this.offset = i.length);
    }
    constructor({ query: e }) {
        d(this, 'guildIds', []), d(this, 'error', null), d(this, 'offset', null), d(this, 'total', null), d(this, 'isFetching', !1), d(this, 'isInitialFetchComplete', !1), d(this, 'lastFetchTimestamp', null), d(this, 'query', void 0), (this.query = e);
    }
}
function m(e) {
    var n;
    let r = h(e),
        i = null !== (n = f.get(r)) && void 0 !== n ? n : new _({ query: e.query });
    return f.set(r, i), i;
}
function g(e, n) {
    let r = h(e),
        i = f.get(r);
    return null != i ? n(i) : null;
}
function E() {
    f.clear(), p.clear();
}
function v(e) {
    let { query: n, categoryId: r, languageCode: i, reset: a } = e,
        o = h({
            query: n,
            categoryId: r,
            languageCode: i
        });
    a && f.delete(o),
        m({
            query: n,
            categoryId: r,
            languageCode: i
        }).handleSearchStart();
}
function y(e) {
    let { query: n, categoryId: r, languageCode: i, total: a, guilds: o } = e;
    m({
        query: n,
        categoryId: r,
        languageCode: i
    }).handleSearchSuccess({
        total: a,
        guilds: o
    }),
        o.forEach((e) => {
            p.set(e.id, e);
        });
}
function b(e) {
    let { query: n, categoryId: r, languageCode: i, error: a } = e;
    m({
        query: n,
        categoryId: r,
        languageCode: i
    }).handleSearchFailure(a);
}
function I(e) {
    let { ignoreQueries: n } = e,
        r = new Set(n);
    f.forEach((e, n) => {
        if (null != e.query) !r.has(e.query) && f.delete(n);
    });
}
class T extends (i = s.ZP.Store) {
    getGuild(e) {
        return p.get(e);
    }
    getGuildIds(e) {
        return g(e, (e) => e.guildIds);
    }
    getIsFetching(e) {
        return g(e, (e) => e.isFetching);
    }
    getIsInitialFetchComplete(e) {
        return g(e, (e) => e.isInitialFetchComplete);
    }
    getOffset(e) {
        return g(e, (e) => e.offset);
    }
    getTotal(e) {
        return g(e, (e) => e.total);
    }
    getLastFetchTimestamp(e) {
        return g(e, (e) => e.lastFetchTimestamp);
    }
    getError(e) {
        return g(e, (e) => e.error);
    }
    getErrorMessage(e) {
        return g(e, (e) => {
            var n;
            return null === (n = e.error) || void 0 === n ? void 0 : n.getAnyErrorMessage();
        });
    }
}
d(T, 'displayName', 'GlobalDiscoveryServersSearchResultsStore'),
    (n.Z = new T(l.Z, {
        CONNECTION_OPEN: E,
        GLOBAL_DISCOVERY_SERVERS_SEARCH_START: v,
        GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: y,
        GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: b,
        GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: I
    }));
