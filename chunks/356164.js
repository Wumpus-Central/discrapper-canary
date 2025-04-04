n.d(t, { Z: () => T }), n(47120), n(653041);
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = new Map(),
    _ = new Map();
function p(e) {
    return [s.BP, e.query, s.t0, e.categoryId, s.KL, e.languageCode].join('-');
}
class h {
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
function m(e) {
    var t;
    let n = p(e),
        r = null != (t = f.get(n)) ? t : new h({ query: e.query });
    return f.set(n, r), r;
}
function g(e, t) {
    let n = p(e),
        r = f.get(n);
    return null != r ? t(r) : null;
}
function E() {
    f.clear(), _.clear();
}
function b(e) {
    let { query: t, categoryId: n, languageCode: r, reset: i } = e,
        o = p({
            query: t,
            categoryId: n,
            languageCode: r
        });
    i && f.delete(o),
        m({
            query: t,
            categoryId: n,
            languageCode: r
        }).handleSearchStart();
}
function y(e) {
    let { query: t, categoryId: n, languageCode: r, total: i, guilds: o } = e;
    m({
        query: t,
        categoryId: n,
        languageCode: r
    }).handleSearchSuccess({
        total: i,
        guilds: o
    }),
        o.forEach((e) => {
            _.set(e.id, e);
        });
}
function v(e) {
    let { query: t, categoryId: n, languageCode: r, error: i } = e;
    m({
        query: t,
        categoryId: n,
        languageCode: r
    }).handleSearchFailure(i);
}
function O(e) {
    let { ignoreQueries: t } = e,
        n = new Set(t);
    f.forEach((e, t) => {
        null != e.query && (n.has(e.query) || f.delete(t));
    });
}
function I(e) {
    var t, n;
    let { guildId: r, profile: i } = e,
        o = _.get(r);
    if (null == o) return !1;
    _.set(
        r,
        d(c({}, o), {
            memberCount: null != (t = i.memberCount) ? t : o.memberCount,
            presenceCount: null != (n = i.onlineCount) ? n : o.presenceCount
        })
    );
}
class S extends (r = i.ZP.Store) {
    getGuild(e) {
        return _.get(e);
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
            var t;
            return null == (t = e.error) ? void 0 : t.getAnyErrorMessage();
        });
    }
}
l(S, 'displayName', 'GlobalDiscoveryServersSearchResultsStore');
let T = new S(o.Z, {
    CONNECTION_OPEN: E,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_START: b,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: y,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: v,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: O,
    GUILD_PROFILE_FETCH_SUCCESS: I
});
