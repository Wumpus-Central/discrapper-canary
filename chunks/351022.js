n.d(t, { A: () => I }), n(896048), n(321073);
var r,
    i = n(311907),
    a = n(73153),
    s = n(198982),
    o = n(324580);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
    p = new Map();
function _(e) {
    return [o.I9, e.query, o.OR, e.categoryId, o.O3, e.languageCode].join("-");
}
class h {
    handleSearchStart() {
        (this.error = null), (this.isFetching = !0);
    }
    handleSearchFailure(e) {
        (this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.error = new s.LG(e));
    }
    handleSearchSuccess(e) {
        let { total: t, guilds: n } = e;
        (this.error = null),
            (this.isFetching = !1),
            (this.isInitialFetchComplete = !0),
            (this.lastFetchTimestamp = Date.now()),
            null != t && (this.total = t);
        let r = [...this.guildIds];
        n.forEach((e) => r.push(e.id)), (this.guildIds = r), (this.offset = r.length);
    }
    constructor({ query: e }) {
        l(this, "guildIds", []),
            l(this, "error", null),
            l(this, "offset", null),
            l(this, "total", null),
            l(this, "isFetching", !1),
            l(this, "isInitialFetchComplete", !1),
            l(this, "lastFetchTimestamp", null),
            l(this, "query", void 0),
            (this.query = e);
    }
}
function m(e) {
    var t;
    let n = _(e),
        r = null != (t = f.get(n)) ? t : new h({ query: e.query });
    return f.set(n, r), r;
}
function g(e, t) {
    let n = _(e),
        r = f.get(n);
    return null != r ? t(r) : null;
}
function E() {
    f.clear(), p.clear();
}
function b(e) {
    let { query: t, categoryId: n, languageCode: r, reset: i } = e,
        a = _({
            query: t,
            categoryId: n,
            languageCode: r,
        });
    i && f.delete(a),
        m({
            query: t,
            categoryId: n,
            languageCode: r,
        }).handleSearchStart();
}
function y(e) {
    let { query: t, categoryId: n, languageCode: r, total: i, guilds: a } = e;
    m({
        query: t,
        categoryId: n,
        languageCode: r,
    }).handleSearchSuccess({
        total: i,
        guilds: a,
    }),
        a.forEach((e) => {
            p.set(e.id, e);
        });
}
function O(e) {
    let { query: t, categoryId: n, languageCode: r, error: i } = e;
    m({
        query: t,
        categoryId: n,
        languageCode: r,
    }).handleSearchFailure(i);
}
function A(e) {
    let { ignoreQueries: t } = e,
        n = new Set(t);
    f.forEach((e, t) => {
        null == e.query || n.has(e.query) || f.delete(t);
    });
}
function v(e) {
    var t, n;
    let { guildId: r, profile: i } = e,
        a = p.get(r);
    if (null == a) return !1;
    p.set(
        r,
        d(c({}, a), {
            memberCount: null != (t = i.memberCount) ? t : a.memberCount,
            presenceCount: null != (n = i.onlineCount) ? n : a.presenceCount,
        }),
    );
}
class S extends (r = i.Ay.Store) {
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
            var t;
            return null == (t = e.error) ? void 0 : t.getAnyErrorMessage();
        });
    }
}
l(S, "displayName", "GlobalDiscoveryServersSearchResultsStore");
let I = new S(a.h, {
    CONNECTION_OPEN: E,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_START: b,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: y,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: O,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: A,
    GUILD_PROFILE_FETCH_SUCCESS: v,
});
