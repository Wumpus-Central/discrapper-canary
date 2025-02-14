n.d(t, { Z: () => c }), n(653041);
var i = n(544891),
    l = n(343817),
    r = n(570140),
    a = n(900849),
    s = n(726115),
    o = n(128449),
    d = n(981631);
let c = {
    fetchSearchResults: async function e(e, t) {
        let { categoryId: n, languageCode: c, offset: u, limit: h, withCounts: m } = t;
        r.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
            query: e,
            categoryId: n,
            languageCode: c
        });
        try {
            let t = await i.tn.get({
                    url: d.ANM.GUILD_DISCOVERY_SEARCH,
                    query: {
                        query: e,
                        category_id: n === o.Hk ? null : n,
                        offset: u,
                        limit: h,
                        language_code: c,
                        with_counts: m
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1
                }),
                l = t.body.guilds.map(s.Iv),
                a = t.body.total_count;
            if (m) {
                var p;
                let n = [];
                null === (p = t.body.categories) ||
                    void 0 === p ||
                    p.slice(0, 8).forEach((e) => {
                        let { id: t, count: i } = e;
                        n.push([Number(t), i]);
                    }),
                    r.Z.dispatch({
                        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS',
                        query: e,
                        categoryCounts: n
                    });
            }
            r.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
                query: e,
                categoryId: n,
                languageCode: c,
                guilds: l,
                total: a
            });
        } catch (i) {
            let t = new l.Hx(i);
            a.m9({
                categoryId: n,
                error: t,
                willRequestRetry: !1,
                isRequestRetry: !1
            }),
                m &&
                    r.Z.dispatch({
                        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS',
                        query: e,
                        categoryCounts: []
                    }),
                r.Z.dispatch({
                    type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                    query: e,
                    categoryId: n,
                    languageCode: c,
                    error: i
                });
        }
    },
    clearSearchResults: function (e) {
        var t;
        r.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR',
            ignoreQueries: null !== (t = null == e ? void 0 : e.ignoreQueries) && void 0 !== t ? t : []
        });
    },
    resetSearchLayout: function () {
        r.Z.dispatch({ type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET' });
    }
};
