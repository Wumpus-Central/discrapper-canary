var r = s(435558),
    n = s.n(r),
    a = s(73153),
    i = s(736130),
    c = s(594061),
    l = s(822382),
    u = s(23667),
    _ = s(956467);
s.d(
    t,
    {},
    {
        A: {
            fetchTabMessages: function (e) {
                let {
                        searchContext: t,
                        searchTabs: s,
                        searchQueryString: r,
                        pagination: c,
                        trackExactTotalHits: u,
                        getId: h,
                        getLimit: d,
                        onFetchStart: o,
                        onFetchSuccess: S,
                        searchMode: A,
                        searchAnalyticsIds: E,
                    } = e,
                    g = (0, l._o)(r),
                    p = (0, l.Zf)(g);
                !(function (e) {
                    if (!Array.isArray(e.pinned)) return;
                    let t = e.pinned.some((e) => !0 === e);
                    e.pinned = t;
                })(p);
                let y = (0, l.nm)(A),
                    R = { ...p, ...y, ...E },
                    T = (0, l.mt)(t);
                null != T && (0, l.L5)(R, T);
                let f = _.A.create({
                    id: (0, l.bS)(t),
                    searchContext: t,
                    searchQuery: R,
                    searchTabs: s,
                    getLimit: d,
                    pagination: c,
                    trackExactTotalHits: u,
                });
                o?.({ searchContext: t, searchQueryString: r, searchQuery: R });
                let m = s.map((e) => h(e));
                return (
                    a.h.dispatch({ type: "SEARCH_MESSAGES_START", ids: m }),
                    f.fetch(
                        (e) => {
                            let { body: s } = e,
                                r = Object.entries(s.tabs);
                            (a.h.dispatch({
                                type: "SEARCH_MESSAGES_SUCCESS",
                                guildId: T,
                                data: r.map((e) => {
                                    let [t, r] = e,
                                        a = h(t),
                                        c = r.cursor;
                                    return {
                                        id: a,
                                        analyticsId: s.analytics_id,
                                        totalResults: r.total_results,
                                        cursor: null != c && n().isEmpty(c) ? null : c,
                                        messages: r.messages,
                                        channels: r.channels ?? [],
                                        threads: r.threads ?? [],
                                        members: (r.members ?? []).map((e) => (0, i.A)(e)),
                                        doingHistoricalIndex: s.doing_deep_historical_index,
                                        documentsIndexed: s.documents_indexed,
                                    };
                                }),
                            }),
                                S?.({ searchContext: t, tabEntries: r }));
                        },
                        () => {
                            a.h.dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: m });
                        },
                        (e) => {
                            a.h.dispatch({ type: "SEARCH_MESSAGES_FAILURE", ids: m, error: e });
                        },
                    ),
                    !0
                );
            },
            fetchMessages: function (e) {
                let {
                        searchContext: t,
                        searchQueryString: s,
                        pagination: r,
                        searchMode: n,
                        searchEverywhere: c,
                        onFetchStart: _,
                        searchAnalyticsIds: h,
                    } = e,
                    d = (0, l._o)(s),
                    o = (0, l.Zf)(d),
                    S = (0, l.nm)(n),
                    A = { ...o, ...S, ...h, offset: r.offset },
                    E = (0, l.mt)(t);
                (null != E && (0, l.L5)(A, E), c && (A.search_everywhere = !0));
                let g = (0, l.bS)(t),
                    p = u.A.create({ id: g, searchType: t.type, searchQuery: A });
                (_?.({ searchContext: t, searchQueryString: s, searchQuery: A }),
                    a.h.dispatch({ type: "SEARCH_MESSAGES_START", ids: [g] }),
                    p.fetch(
                        (e) => {
                            a.h.dispatch({
                                type: "SEARCH_MESSAGES_SUCCESS",
                                guildId: E,
                                data: [
                                    {
                                        id: g,
                                        analyticsId: e.body.analytics_id,
                                        totalResults: e.body.total_results,
                                        messages: e.body.messages,
                                        threads: e.body.threads ?? [],
                                        members: (e.body.members ?? []).map((e) => (0, i.A)(e)),
                                        doingHistoricalIndex: e.body.doing_deep_historical_index,
                                        documentsIndexed: e.body.documents_indexed,
                                        channels: e.body.channels ?? [],
                                        cursor: null,
                                    },
                                ],
                            });
                        },
                        () => {
                            a.h.dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: [g] });
                        },
                        (e) => {
                            a.h.dispatch({ type: "SEARCH_MESSAGES_FAILURE", ids: [g], error: e });
                        },
                    ));
            },
            clearSearchRecentMessages: function () {
                a.h.dispatch({ type: "SEARCH_RECENT_MESSAGES_CLEAR" });
            },
            clearAllSearchMesssages: function () {
                a.h.dispatch({ type: "SEARCH_MESSAGES_CLEAR_ALL" });
            },
            clearSearchMessages: function (e) {
                a.h.dispatch({ type: "SEARCH_MESSAGES_CLEAR", id: e });
            },
            initializeAutocomplete: function (e) {
                a.h.dispatch({ type: "SEARCH_AUTOCOMPLETE_INITIALIZE", searchContext: e });
            },
            updateAutocompleteQuery: function (e) {
                let { searchContext: t, tokens: s, queryString: r, cursorScope: n } = e;
                (r.trim().length > 0 && c.bW.loadIfNecessary(),
                    a.h.dispatch({
                        type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
                        searchContext: t,
                        tokens: s,
                        cursorScope: n,
                    }));
            },
        },
    },
);
