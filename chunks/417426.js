a.d(t, { A: () => d }), a(321073);
var s = a(562465),
    l = a(319400),
    r = a(73153),
    i = a(449054),
    n = a(965660),
    c = a(324580),
    o = a(652215);
let d = {
    fetchSearchResults: async function e(e, t) {
        let { categoryId: a, languageCode: d, offset: u, limit: h, withCounts: g } = t;
        r.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", query: e, categoryId: a, languageCode: d });
        try {
            let t = await s.Bo.get({
                    url: o.Rsh.GUILD_DISCOVERY_SEARCH,
                    query: {
                        query: e,
                        category_id: a === c.Iq ? null : a,
                        offset: u,
                        limit: h,
                        language_code: d,
                        with_counts: g,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }),
                l = t.body.guilds.map(n.uk),
                i = t.body.total_count;
            if (g) {
                let a = [];
                t.body.categories?.slice(0, 8).forEach((e) => {
                    let { id: t, count: s } = e;
                    a.push([Number(t), s]);
                }),
                    r.h.dispatch({
                        type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS",
                        query: e,
                        categoryCounts: a,
                    });
            }
            r.h.dispatch({
                type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
                query: e,
                categoryId: a,
                languageCode: d,
                guilds: l,
                total: i,
            });
        } catch (s) {
            let t = new l.LG(s);
            i.jb({ categoryId: a, error: t, willRequestRetry: !1, isRequestRetry: !1 }),
                g &&
                    r.h.dispatch({
                        type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS",
                        query: e,
                        categoryCounts: [],
                    }),
                r.h.dispatch({
                    type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
                    query: e,
                    categoryId: a,
                    languageCode: d,
                    error: s,
                });
        }
    },
    clearSearchResults: function (e) {
        r.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR", ignoreQueries: e?.ignoreQueries ?? [] });
    },
    resetSearchLayout: function () {
        r.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET" });
    },
};
