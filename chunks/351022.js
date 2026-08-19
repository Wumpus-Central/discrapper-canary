"use strict";
n.d(t, { A: () => A }), n(321073);
var i = n(17928),
    r = n(228366),
    a = n(913122),
    s = n(324580);
let l = new Map(),
    o = new Map();
function d(e) {
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
        let i = [...this.guildIds];
        n.forEach((e) => i.push(e.id)), (this.guildIds = i), (this.offset = i.length);
    }
}
function u(e) {
    let t = d(e),
        n = l.get(t) ?? new c({ query: e.query });
    return l.set(t, n), n;
}
function _(e, t) {
    let n = d(e),
        i = l.get(n);
    return null != i ? t(i) : null;
}
class E extends i.Ay.Store {
    static displayName = "GlobalDiscoveryServersSearchResultsStore";
    getGuild(e) {
        return o.get(e);
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
let A = new E(r.h, {
    CONNECTION_OPEN: function () {
        l.clear(), o.clear();
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_START: function (e) {
        let { query: t, categoryId: n, languageCode: i, reset: r } = e,
            a = d({ query: t, categoryId: n, languageCode: i });
        r && l.delete(a), u({ query: t, categoryId: n, languageCode: i }).handleSearchStart();
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: function (e) {
        let { query: t, categoryId: n, languageCode: i, total: r, guilds: a } = e;
        u({ query: t, categoryId: n, languageCode: i }).handleSearchSuccess({ total: r, guilds: a }),
            a.forEach((e) => {
                o.set(e.id, e);
            });
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: function (e) {
        let { query: t, categoryId: n, languageCode: i, error: r } = e;
        u({ query: t, categoryId: n, languageCode: i }).handleSearchFailure(r);
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function (e) {
        let { ignoreQueries: t } = e,
            n = new Set(t);
        l.forEach((e, t) => {
            null == e.query || n.has(e.query) || l.delete(t);
        });
    },
    GUILD_PROFILE_FETCH_SUCCESS: function (e) {
        let { guildId: t, profile: n } = e,
            i = o.get(t);
        if (null == i) return !1;
        o.set(t, {
            ...i,
            memberCount: n.memberCount ?? i.memberCount,
            presenceCount: n.onlineCount ?? i.presenceCount,
        });
    },
});
