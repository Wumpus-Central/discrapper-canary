n.d(t, { A: () => u });
var i = n(435558),
    r = n.n(i),
    a = n(228366),
    s = n(736130),
    l = n(594061),
    o = n(822382),
    d = n(23667),
    c = n(956467);
let u = {
    fetchTabMessages: function (e) {
        let {
                searchContext: t,
                searchTabs: n,
                searchQueryString: i,
                pagination: l,
                trackExactTotalHits: d,
                getId: u,
                getLimit: _,
                onFetchStart: E,
                onFetchSuccess: A,
                searchMode: h,
            } = e,
            I = (0, o._o)(i),
            f = (0, o.Zf)(I);
        !(function (e) {
            if (!Array.isArray(e.pinned)) return;
            let t = e.pinned.some((e) => !0 === e);
            e.pinned = t;
        })(f);
        let p = (0, o.nm)(h),
            T = { ...f, ...p },
            m = (0, o.mt)(t);
        null != m && (0, o.L5)(T, m);
        let g = c.A.create({
            id: (0, o.bS)(t),
            searchContext: t,
            searchQuery: T,
            searchTabs: n,
            getLimit: _,
            pagination: l,
            trackExactTotalHits: d,
        });
        E?.({ searchContext: t, searchQueryString: i, searchQuery: T });
        let S = n.map((e) => u(e));
        return (
            a.h.dispatch({ type: "SEARCH_MESSAGES_START", ids: S }),
            g.fetch(
                (e) => {
                    let { body: n } = e,
                        i = Object.entries(n.tabs);
                    a.h.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: m,
                        data: i.map((e) => {
                            let [t, i] = e,
                                a = u(t),
                                l = i.cursor;
                            return {
                                id: a,
                                analyticsId: n.analytics_id,
                                totalResults: i.total_results,
                                cursor: null != l && r().isEmpty(l) ? null : l,
                                messages: i.messages,
                                channels: i.channels ?? [],
                                threads: i.threads ?? [],
                                members: (i.members ?? []).map((e) => (0, s.A)(e)),
                                doingHistoricalIndex: n.doing_deep_historical_index,
                                documentsIndexed: n.documents_indexed,
                            };
                        }),
                    }),
                        A?.({ searchContext: t, tabEntries: i });
                },
                () => {
                    a.h.dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: S });
                },
                (e) => {
                    a.h.dispatch({ type: "SEARCH_MESSAGES_FAILURE", ids: S, error: e });
                },
            ),
            !0
        );
    },
    fetchMessages: function (e) {
        let {
                searchContext: t,
                searchQueryString: n,
                pagination: i,
                searchMode: r,
                searchEverywhere: l,
                onFetchStart: c,
            } = e,
            u = (0, o._o)(n),
            _ = (0, o.Zf)(u),
            E = (0, o.nm)(r),
            A = { ..._, ...E, offset: i.offset },
            h = (0, o.mt)(t);
        null != h && (0, o.L5)(A, h), l && (A.search_everywhere = !0);
        let I = (0, o.bS)(t),
            f = d.A.create({ id: I, searchType: t.type, searchQuery: A });
        c?.({ searchContext: t, searchQueryString: n, searchQuery: A }),
            a.h.dispatch({ type: "SEARCH_MESSAGES_START", ids: [I] }),
            f.fetch(
                (e) => {
                    a.h.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: h,
                        data: [
                            {
                                id: I,
                                analyticsId: e.body.analytics_id,
                                totalResults: e.body.total_results,
                                messages: e.body.messages,
                                threads: e.body.threads ?? [],
                                members: (e.body.members ?? []).map((e) => (0, s.A)(e)),
                                doingHistoricalIndex: e.body.doing_deep_historical_index,
                                documentsIndexed: e.body.documents_indexed,
                                channels: e.body.channels ?? [],
                                cursor: null,
                            },
                        ],
                    });
                },
                () => {
                    a.h.dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: [I] });
                },
                (e) => {
                    a.h.dispatch({ type: "SEARCH_MESSAGES_FAILURE", ids: [I], error: e });
                },
            );
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
        let { searchContext: t, tokens: n, queryString: i, cursorScope: r } = e;
        i.trim().length > 0 && l.bW.loadIfNecessary(),
            a.h.dispatch({ type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", searchContext: t, tokens: n, cursorScope: r });
    },
    markSearchTokensRefreshed: function () {
        a.h.dispatch({ type: "SEARCH_TOKENS_REFRESHED" });
    },
};
