n(321073);
var i = n(855986),
    r = n(73153),
    a = n(627784);
n(324580);
let s = new Map(),
    l = new Map();
function o(e) {
    return ["q", e.query, "c", e.categoryId, "l", e.languageCode].join("-");
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
        ((this.error = null), (this.isFetching = !0));
    }
    handleSearchFailure(e) {
        ((this.isFetching = !1), (this.isInitialFetchComplete = !0), (this.error = new a.LG(e)));
    }
    handleSearchSuccess(e) {
        let { total: t, guilds: n } = e;
        ((this.error = null),
            (this.isFetching = !1),
            (this.isInitialFetchComplete = !0),
            (this.lastFetchTimestamp = Date.now()),
            null != t && (this.total = t));
        let i = [...this.guildIds];
        (n.forEach((e) => i.push(e.id)), (this.guildIds = i), (this.offset = i.length));
    }
}
function c(e) {
    let t = o(e),
        n = s.get(t) ?? new d({ query: e.query });
    return (s.set(t, n), n);
}
function u(e, t) {
    let n = o(e),
        i = s.get(n);
    return null != i ? t(i) : null;
}
class _ extends i.Ay.Store {
    static displayName = "GlobalDiscoveryServersSearchResultsStore";
    getGuild(e) {
        return l.get(e);
    }
    getGuildIds(e) {
        return u(e, (e) => e.guildIds);
    }
    getIsFetching(e) {
        return u(e, (e) => e.isFetching);
    }
    getIsInitialFetchComplete(e) {
        return u(e, (e) => e.isInitialFetchComplete);
    }
    getOffset(e) {
        return u(e, (e) => e.offset);
    }
    getTotal(e) {
        return u(e, (e) => e.total);
    }
    getLastFetchTimestamp(e) {
        return u(e, (e) => e.lastFetchTimestamp);
    }
    getError(e) {
        return u(e, (e) => e.error);
    }
    getErrorMessage(e) {
        return u(e, (e) => e.error?.getAnyErrorMessage());
    }
}
let E = new _(r.h, {
    CONNECTION_OPEN: function () {
        (s.clear(), l.clear());
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_START: function (e) {
        let { query: t, categoryId: n, languageCode: i, reset: r } = e,
            a = o({ query: t, categoryId: n, languageCode: i });
        (r && s.delete(a), c({ query: t, categoryId: n, languageCode: i }).handleSearchStart());
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: function (e) {
        let { query: t, categoryId: n, languageCode: i, total: r, guilds: a } = e;
        (c({ query: t, categoryId: n, languageCode: i }).handleSearchSuccess({ total: r, guilds: a }),
            a.forEach((e) => {
                l.set(e.id, e);
            }));
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: function (e) {
        let { query: t, categoryId: n, languageCode: i, error: r } = e;
        c({ query: t, categoryId: n, languageCode: i }).handleSearchFailure(r);
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function (e) {
        let { ignoreQueries: t } = e,
            n = new Set(t);
        s.forEach((e, t) => {
            null == e.query || n.has(e.query) || s.delete(t);
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
n.d(t, {}, { A: E });
