n.d(t, { Z: () => u }), n(653041);
var r = n(544891),
    i = n(343817),
    l = n(570140),
    a = n(900849),
    o = n(726115),
    s = n(128449),
    c = n(981631);
let u = {
    fetchSearchResults: async function e(e, t) {
        let { categoryId: n, languageCode: u, offset: d, limit: p, withCounts: h } = t;
        l.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
            query: e,
            categoryId: n,
            languageCode: u
        });
        try {
            let t = await r.tn.get({
                    url: c.ANM.GUILD_DISCOVERY_SEARCH,
                    query: {
                        query: e,
                        category_id: n === s.Hk ? null : n,
                        offset: d,
                        limit: p,
                        language_code: u,
                        with_counts: h
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1
                }),
                i = t.body.guilds.map(o.Iv),
                a = t.body.total_count;
            if (h) {
                var f;
                let n = [];
                null == (f = t.body.categories) ||
                    f.slice(0, 8).forEach((e) => {
                        let { id: t, count: r } = e;
                        n.push([Number(t), r]);
                    }),
                    l.Z.dispatch({
                        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS',
                        query: e,
                        categoryCounts: n
                    });
            }
            l.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
                query: e,
                categoryId: n,
                languageCode: u,
                guilds: i,
                total: a
            });
        } catch (r) {
            let t = new i.Hx(r);
            a.m9({
                categoryId: n,
                error: t,
                willRequestRetry: !1,
                isRequestRetry: !1
            }),
                h &&
                    l.Z.dispatch({
                        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS',
                        query: e,
                        categoryCounts: []
                    }),
                l.Z.dispatch({
                    type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                    query: e,
                    categoryId: n,
                    languageCode: u,
                    error: r
                });
        }
    },
    clearSearchResults: function (e) {
        var t;
        l.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR',
            ignoreQueries: null != (t = null == e ? void 0 : e.ignoreQueries) ? t : []
        });
    },
    resetSearchLayout: function () {
        l.Z.dispatch({ type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET' });
    }
};
