"use strict";
n.d(t, { A: () => E }), n(321073);
var r = n(311907),
    i = n(73153),
    s = n(198982),
    a = n(324580);
let o = new Map(),
    l = new Map();
function u(e) {
    return [a.I9, e.query, a.OR, e.categoryId, a.O3, e.languageCode].join("-");
}
class d {
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
}
function c(e) {
    let t = u(e),
        n = o.get(t) ?? new d({ query: e.query });
    return o.set(t, n), n;
}
function _(e, t) {
    let n = u(e),
        r = o.get(n);
    return null != r ? t(r) : null;
}
class f extends r.Ay.Store {
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
let E = new f(i.h, {
    CONNECTION_OPEN: function () {
        o.clear(), l.clear();
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_START: function (e) {
        let { query: t, categoryId: n, languageCode: r, reset: i } = e,
            s = u({ query: t, categoryId: n, languageCode: r });
        i && o.delete(s), c({ query: t, categoryId: n, languageCode: r }).handleSearchStart();
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: function (e) {
        let { query: t, categoryId: n, languageCode: r, total: i, guilds: s } = e;
        c({ query: t, categoryId: n, languageCode: r }).handleSearchSuccess({ total: i, guilds: s }),
            s.forEach((e) => {
                l.set(e.id, e);
            });
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: function (e) {
        let { query: t, categoryId: n, languageCode: r, error: i } = e;
        c({ query: t, categoryId: n, languageCode: r }).handleSearchFailure(i);
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function (e) {
        let { ignoreQueries: t } = e,
            n = new Set(t);
        o.forEach((e, t) => {
            null == e.query || n.has(e.query) || o.delete(t);
        });
    },
    GUILD_PROFILE_FETCH_SUCCESS: function (e) {
        let { guildId: t, profile: n } = e,
            r = l.get(t);
        if (null == r) return !1;
        l.set(t, {
            ...r,
            memberCount: n.memberCount ?? r.memberCount,
            presenceCount: n.onlineCount ?? r.presenceCount,
        });
    },
});
