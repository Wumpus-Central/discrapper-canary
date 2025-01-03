n(653041);
var i = n(544891),
    r = n(343817),
    l = n(570140),
    a = n(900849),
    s = n(726115),
    o = n(128449),
    c = n(981631);
async function d(e, t) {
    let { categoryId: n, languageCode: d, offset: u, limit: h, withCounts: m } = t;
    l.Z.dispatch({
        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
        query: e,
        categoryId: n,
        languageCode: d
    });
    try {
        let t = await i.tn.get({
                url: c.ANM.GUILD_DISCOVERY_SEARCH,
                query: {
                    query: e,
                    category_id: n === o.Hk ? null : n,
                    offset: u,
                    limit: h,
                    language_code: d,
                    with_counts: m
                },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            r = t.body.guilds.map(s.Iv),
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
            languageCode: d,
            guilds: r,
            total: a
        });
    } catch (i) {
        let t = new r.Hx(i);
        a.m9({
            categoryId: n,
            error: t,
            willRequestRetry: !1,
            isRequestRetry: !1
        }),
            m &&
                l.Z.dispatch({
                    type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS',
                    query: e,
                    categoryCounts: []
                }),
            l.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                query: e,
                categoryId: n,
                languageCode: d,
                error: i
            });
    }
}
t.Z = {
    fetchSearchResults: d,
    clearSearchResults: function (e) {
        var t;
        l.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR',
            ignoreQueries: null !== (t = null == e ? void 0 : e.ignoreQueries) && void 0 !== t ? t : []
        });
    },
    resetSearchLayout: function () {
        l.Z.dispatch({ type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET' });
    }
};
