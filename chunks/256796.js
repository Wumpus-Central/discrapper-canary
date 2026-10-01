s.d(t, { A: () => d });
var r = s(435558),
    a = s.n(r),
    n = s(73153),
    i = s(736130),
    _ = s(594061),
    c = s(822382),
    l = s(23667),
    h = s(956467);
let d = {
    fetchTabMessages: function (e) {
        let {
                searchContext: t,
                searchTabs: s,
                searchQueryString: r,
                pagination: _,
                trackExactTotalHits: l,
                getId: d,
                getLimit: u,
                onFetchStart: S,
                onFetchSuccess: o,
                searchMode: E,
                searchAnalyticsIds: A,
            } = e,
            y = (0, c._o)(r),
            p = (0, c.Zf)(y);
        !(function (e) {
            if (!Array.isArray(e.pinned)) return;
            let t = e.pinned.some((e) => !0 === e);
            e.pinned = t;
        })(p);
        let R = (0, c.nm)(E),
            g = { ...p, ...R, ...A },
            T = (0, c.mt)(t);
        null != T && (0, c.L5)(g, T);
        let f = h.A.create({
            id: (0, c.bS)(t),
            searchContext: t,
            searchQuery: g,
            searchTabs: s,
            getLimit: u,
            pagination: _,
            trackExactTotalHits: l,
        });
        S?.({ searchContext: t, searchQueryString: r, searchQuery: g });
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
                                _ = r.cursor;
                            return {
                                id: n,
                                analyticsId: s.analytics_id,
                                totalResults: r.total_results,
                                cursor: null != _ && a().isEmpty(_) ? null : _,
                                messages: r.messages,
                                channels: r.channels ?? [],
                                threads: r.threads ?? [],
                                members: (r.members ?? []).map((e) => (0, i.A)(e)),
                                doingHistoricalIndex: s.doing_deep_historical_index,
                                documentsIndexed: s.documents_indexed,
                            };
                        }),
                    }),
                        o?.({ searchContext: t, tabEntries: r }));
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
                searchEverywhere: _,
                onFetchStart: h,
                searchAnalyticsIds: d,
            } = e,
            u = (0, c._o)(s),
            S = (0, c.Zf)(u),
            o = (0, c.nm)(a),
            E = { ...S, ...o, ...d, offset: r.offset },
            A = (0, c.mt)(t);
        (null != A && (0, c.L5)(E, A), _ && (E.search_everywhere = !0));
        let y = (0, c.bS)(t),
            p = l.A.create({ id: y, searchType: t.type, searchQuery: E });
        (h?.({ searchContext: t, searchQueryString: s, searchQuery: E }),
            n.h.dispatch({ type: "SEARCH_MESSAGES_START", ids: [y] }),
            p.fetch(
                (e) => {
                    n.h.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: A,
                        data: [
                            {
                                id: y,
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
                    n.h.dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: [y] });
                },
                (e) => {
                    n.h.dispatch({ type: "SEARCH_MESSAGES_FAILURE", ids: [y], error: e });
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
        (r.trim().length > 0 && _.bW.loadIfNecessary(),
            n.h.dispatch({ type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", searchContext: t, tokens: s, cursorScope: a }));
    },
};
