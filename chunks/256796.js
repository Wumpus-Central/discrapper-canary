var r = s(435558),
    a = s.n(r),
    n = s(73153),
    i = s(736130),
    c = s(594061),
    l = s(822382),
    _ = s(23667),
    u = s(956467);
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
                        trackExactTotalHits: _,
                        getId: d,
                        getLimit: h,
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
                let f = u.A.create({
                    id: (0, l.bS)(t),
                    searchContext: t,
                    searchQuery: R,
                    searchTabs: s,
                    getLimit: h,
                    pagination: c,
                    trackExactTotalHits: _,
                });
                o?.({ searchContext: t, searchQueryString: r, searchQuery: R });
                let I = s.map((e) => d(e));
                return (
                    n.h.dispatch({ type: "SEARCH_MESSAGES_START", ids: I }),
                    f.fetch(
                        (e) => {
                            let { body: s } = e,
                                r = Object.entries(s.tabs);
                            (n.h.dispatch({
                                type: "SEARCH_MESSAGES_SUCCESS",
                                guildId: T,
                                data: r.map((e) => {
                                    let [t, r] = e,
                                        n = d(t),
                                        c = r.cursor;
                                    return {
                                        id: n,
                                        analyticsId: s.analytics_id,
                                        totalResults: r.total_results,
                                        cursor: null != c && a().isEmpty(c) ? null : c,
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
                            n.h.dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: I });
                        },
                        (e) => {
                            n.h.dispatch({ type: "SEARCH_MESSAGES_FAILURE", ids: I, error: e });
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
                        searchMode: a,
                        searchEverywhere: c,
                        onFetchStart: u,
                        searchAnalyticsIds: d,
                    } = e,
                    h = (0, l._o)(s),
                    o = (0, l.Zf)(h),
                    S = (0, l.nm)(a),
                    A = { ...o, ...S, ...d, offset: r.offset },
                    E = (0, l.mt)(t);
                (null != E && (0, l.L5)(A, E), c && (A.search_everywhere = !0));
                let g = (0, l.bS)(t),
                    p = _.A.create({ id: g, searchType: t.type, searchQuery: A });
                (u?.({ searchContext: t, searchQueryString: s, searchQuery: A }),
                    n.h.dispatch({ type: "SEARCH_MESSAGES_START", ids: [g] }),
                    p.fetch(
                        (e) => {
                            n.h.dispatch({
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
                            n.h.dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: [g] });
                        },
                        (e) => {
                            n.h.dispatch({ type: "SEARCH_MESSAGES_FAILURE", ids: [g], error: e });
                        },
                    ));
            },
            clearSearchRecentMessages: function () {
                n.h.dispatch({ type: "SEARCH_RECENT_MESSAGES_CLEAR" });
            },
            clearAllSearchMesssages: function () {
                n.h.dispatch({ type: "SEARCH_MESSAGES_CLEAR_ALL" });
            },
            clearSearchMessages: function (e) {
                n.h.dispatch({ type: "SEARCH_MESSAGES_CLEAR", id: e });
            },
            initializeAutocomplete: function (e) {
                n.h.dispatch({ type: "SEARCH_AUTOCOMPLETE_INITIALIZE", searchContext: e });
            },
            updateAutocompleteQuery: function (e) {
                let { searchContext: t, tokens: s, queryString: r, cursorScope: a } = e;
                (r.trim().length > 0 && c.bW.loadIfNecessary(),
                    n.h.dispatch({
                        type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
                        searchContext: t,
                        tokens: s,
                        cursorScope: a,
                    }));
            },
        },
    },
);
