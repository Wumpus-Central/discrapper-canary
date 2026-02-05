"use strict";
n.d(t, { A: () => I }), n(321073);
var r = n(311907),
    i = n(73153),
    a = n(198982),
    s = n(324580);
let o = new Map(),
    l = new Map();
function u(e) {
    return [s.I9, e.query, s.OR, e.categoryId, s.O3, e.languageCode].join("-");
}
class c {
    guildIds = [];
    error = null;
    offset = null;
    total = null;
    isFetching = !1;
    isInitialFetchComplete = !1;
    lastFetchTimestamp = null;
    query;
    constructor({ query: e }) {
        this.query = e;
    }
    handleSearchStart() {
        (this.error = null), (this.isFetching = !0);
    }
    handleSearchFailure(e) {
        (this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.error = new a.LG(e));
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
}
function d(e) {
    let t = u(e),
        n = o.get(t) ?? new c({ query: e.query });
    return o.set(t, n), n;
}
function _(e, t) {
    let n = u(e),
        r = o.get(n);
    return null != r ? t(r) : null;
}
function f() {
    o.clear(), l.clear();
}
function p(e) {
    let { query: t, categoryId: n, languageCode: r, reset: i } = e,
        a = u({ query: t, categoryId: n, languageCode: r });
    i && o.delete(a), d({ query: t, categoryId: n, languageCode: r }).handleSearchStart();
}
function h(e) {
    let { query: t, categoryId: n, languageCode: r, total: i, guilds: a } = e;
    d({ query: t, categoryId: n, languageCode: r }).handleSearchSuccess({ total: i, guilds: a }),
        a.forEach((e) => {
            l.set(e.id, e);
        });
}
function m(e) {
    let { query: t, categoryId: n, languageCode: r, error: i } = e;
    d({ query: t, categoryId: n, languageCode: r }).handleSearchFailure(i);
}
function g(e) {
    let { ignoreQueries: t } = e,
        n = new Set(t);
    o.forEach((e, t) => {
        null == e.query || n.has(e.query) || o.delete(t);
    });
}
function E(e) {
    let { guildId: t, profile: n } = e,
        r = l.get(t);
    if (null == r) return !1;
    l.set(t, { ...r, memberCount: n.memberCount ?? r.memberCount, presenceCount: n.onlineCount ?? r.presenceCount });
}
class A extends r.Ay.Store {
    static displayName = "GlobalDiscoveryServersSearchResultsStore";
    getGuild(e) {
        return l.get(e);
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
        return _(e, (e) => e.error?.getAnyErrorMessage());
    }
}
let I = new A(i.h, {
    CONNECTION_OPEN: f,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_START: p,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: h,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: m,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: g,
    GUILD_PROFILE_FETCH_SUCCESS: E,
});
