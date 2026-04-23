n.d(t, { A: () => d });
var i = n(735438),
    r = n.n(i),
    a = n(228366),
    s = n(736130),
    _ = n(594061),
    l = n(822382),
    o = n(23667),
    E = n(956467);
let d = {
    fetchTabMessages: function (e) {
        let {
                searchContext: t,
                searchTabs: n,
                searchQueryString: i,
                pagination: _,
                trackExactTotalHits: o,
                getId: d,
                getLimit: c,
                onFetchStart: u,
                onFetchSuccess: I,
                searchMode: A,
            } = e,
            T = (0, l._o)(i),
            S = (0, l.Zf)(T);
        !(function (e) {
            if (!Array.isArray(e.pinned)) return;
            let t = e.pinned.some((e) => !0 === e);
            e.pinned = t;
        })(S);
        let N = (0, l.nm)(A),
            O = { ...S, ...N },
            R = (0, l.mt)(t);
        null != R && (0, l.L5)(O, R);
        let f = E.A.create({
            id: (0, l.bS)(t),
            searchContext: t,
            searchQuery: O,
            searchTabs: n,
            getLimit: c,
            pagination: _,
            trackExactTotalHits: o,
        });
        u?.({ searchContext: t, searchQueryString: i, searchQuery: O });
        let C = n.map((e) => d(e));
        return (
            a.h.dispatch({ type: "SEARCH_MESSAGES_START", ids: C }),
            f.fetch(
                (e) => {
                    let { body: n } = e,
                        i = Object.entries(n.tabs);
                    a.h.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: R,
                        data: i.map((e) => {
                            let [t, i] = e,
                                a = d(t),
                                _ = i.cursor;
                            return {
                                id: a,
                                analyticsId: n.analytics_id,
                                totalResults: i.total_results,
                                cursor: null != _ && r().isEmpty(_) ? null : _,
                                messages: i.messages,
                                channels: i.channels ?? [],
                                threads: i.threads ?? [],
                                members: (i.members ?? []).map((e) => (0, s.A)(e)),
                                doingHistoricalIndex: n.doing_deep_historical_index,
                                documentsIndexed: n.documents_indexed,
                            };
                        }),
                    }),
                        I?.({ searchContext: t, tabEntries: i });
                },
                () => {
                    a.h.dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: C });
                },
                (e) => {
                    a.h.dispatch({ type: "SEARCH_MESSAGES_FAILURE", ids: C, error: e });
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
                searchEverywhere: _,
                onFetchStart: E,
            } = e,
            d = (0, l._o)(n),
            c = (0, l.Zf)(d),
            u = (0, l.nm)(r),
            I = { ...c, ...u, offset: i.offset },
            A = (0, l.mt)(t);
        null != A && (0, l.L5)(I, A), _ && (I.search_everywhere = !0);
        let T = (0, l.bS)(t),
            S = o.A.create({ id: T, searchType: t.type, searchQuery: I });
        E?.({ searchContext: t, searchQueryString: n, searchQuery: I }),
            a.h.dispatch({ type: "SEARCH_MESSAGES_START", ids: [T] }),
            S.fetch(
                (e) => {
                    a.h.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: A,
                        data: [
                            {
                                id: T,
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
                    a.h.dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: [T] });
                },
                (e) => {
                    a.h.dispatch({ type: "SEARCH_MESSAGES_FAILURE", ids: [T], error: e });
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
        i.trim().length > 0 && _.bW.loadIfNecessary(),
            a.h.dispatch({ type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", searchContext: t, tokens: n, cursorScope: r });
    },
    markSearchTokensRefreshed: function () {
        a.h.dispatch({ type: "SEARCH_TOKENS_REFRESHED" });
    },
};
