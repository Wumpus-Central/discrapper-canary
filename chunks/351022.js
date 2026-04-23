"use strict";
n.d(t, { A: () => h }), n(321073);
var i = n(17928),
    r = n(228366),
    s = n(845584),
    a = n(324580);
let o = new Map(),
    l = new Map();
function d(e) {
    return [a.I9, e.query, a.OR, e.categoryId, a.O3, e.languageCode].join("-");
}
class _ {
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
        let i = [...this.guildIds];
        n.forEach((e) => i.push(e.id)), (this.guildIds = i), (this.offset = i.length);
    }
}
function u(e) {
    let t = d(e),
        n = o.get(t) ?? new _({ query: e.query });
    return o.set(t, n), n;
}
function c(e, t) {
    let n = d(e),
        i = o.get(n);
    return null != i ? t(i) : null;
}
class E extends i.Ay.Store {
    static displayName = "GlobalDiscoveryServersSearchResultsStore";
    getGuild(e) {
        return l.get(e);
    }
    getGuildIds(e) {
        return c(e, (e) => e.guildIds);
    }
    getIsFetching(e) {
        return c(e, (e) => e.isFetching);
    }
    getIsInitialFetchComplete(e) {
        return c(e, (e) => e.isInitialFetchComplete);
    }
    getOffset(e) {
        return c(e, (e) => e.offset);
    }
    getTotal(e) {
        return c(e, (e) => e.total);
    }
    getLastFetchTimestamp(e) {
        return c(e, (e) => e.lastFetchTimestamp);
    }
    getError(e) {
        return c(e, (e) => e.error);
    }
    getErrorMessage(e) {
        return c(e, (e) => e.error?.getAnyErrorMessage());
    }
}
let h = new E(r.h, {
    CONNECTION_OPEN: function () {
        o.clear(), l.clear();
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_START: function (e) {
        let { query: t, categoryId: n, languageCode: i, reset: r } = e,
            s = d({ query: t, categoryId: n, languageCode: i });
        r && o.delete(s), u({ query: t, categoryId: n, languageCode: i }).handleSearchStart();
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: function (e) {
        let { query: t, categoryId: n, languageCode: i, total: r, guilds: s } = e;
        u({ query: t, categoryId: n, languageCode: i }).handleSearchSuccess({ total: r, guilds: s }),
            s.forEach((e) => {
                l.set(e.id, e);
            });
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: function (e) {
        let { query: t, categoryId: n, languageCode: i, error: r } = e;
        u({ query: t, categoryId: n, languageCode: i }).handleSearchFailure(r);
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
            i = l.get(t);
        if (null == i) return !1;
        l.set(t, {
            ...i,
            memberCount: n.memberCount ?? i.memberCount,
            presenceCount: n.onlineCount ?? i.presenceCount,
        });
    },
});
