n.d(t, {
    A: () => u,
}),
    n(321073);
var r = n(562465),
    i = n(319400),
    l = n(73153),
    a = n(449054),
    s = n(965660),
    o = n(324580),
    c = n(652215);
let u = {
    fetchSearchResults: async function e(e, t) {
        let { categoryId: n, languageCode: u, offset: d, limit: p, withCounts: f } = t;
        l.h.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START",
            query: e,
            categoryId: n,
            languageCode: u,
        });
        try {
            let t = await r.Bo.get({
                    url: c.Rsh.GUILD_DISCOVERY_SEARCH,
                    query: {
                        query: e,
                        category_id: n === o.Iq ? null : n,
                        offset: d,
                        limit: p,
                        language_code: u,
                        with_counts: f,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }),
                i = t.body.guilds.map(s.uk),
                a = t.body.total_count;
            if (f) {
                var h;
                let n = [];
                null == (h = t.body.categories) ||
                    h.slice(0, 8).forEach((e) => {
                        let { id: t, count: r } = e;
                        n.push([Number(t), r]);
                    }),
                    l.h.dispatch({
                        type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS",
                        query: e,
                        categoryCounts: n,
                    });
            }
            l.h.dispatch({
                type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
                query: e,
                categoryId: n,
                languageCode: u,
                guilds: i,
                total: a,
            });
        } catch (r) {
            let t = new i.LG(r);
            a.jb({
                categoryId: n,
                error: t,
                willRequestRetry: !1,
                isRequestRetry: !1,
            }),
                f &&
                    l.h.dispatch({
                        type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS",
                        query: e,
                        categoryCounts: [],
                    }),
                l.h.dispatch({
                    type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
                    query: e,
                    categoryId: n,
                    languageCode: u,
                    error: r,
                });
        }
    },
    clearSearchResults: function (e) {
        var t;
        l.h.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR",
            ignoreQueries: null != (t = null == e ? void 0 : e.ignoreQueries) ? t : [],
        });
    },
    resetSearchLayout: function () {
        l.h.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET",
        });
    },
};
