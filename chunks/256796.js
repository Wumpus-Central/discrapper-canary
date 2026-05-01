n.d(t, { A: () => _ });
var i = n(735438),
    a = n.n(i),
    r = n(228366),
    s = n(736130),
    l = n(594061),
    o = n(822382),
    d = n(23667),
    c = n(956467);
let _ = {
    fetchTabMessages: function (e) {
        let {
                searchContext: t,
                searchTabs: n,
                searchQueryString: i,
                pagination: l,
                trackExactTotalHits: d,
                getId: _,
                getLimit: E,
                onFetchStart: u,
                onFetchSuccess: A,
                searchMode: I,
            } = e,
            T = (0, o._o)(i),
            h = (0, o.Zf)(T);
        !(function (e) {
            if (!Array.isArray(e.pinned)) return;
            let t = e.pinned.some((e) => !0 === e);
            e.pinned = t;
        })(h);
        let S = (0, o.nm)(I),
            N = { ...h, ...S },
            f = (0, o.mt)(t);
        null != f && (0, o.L5)(N, f);
        let p = c.A.create({
            id: (0, o.bS)(t),
            searchContext: t,
            searchQuery: N,
            searchTabs: n,
            getLimit: E,
            pagination: l,
            trackExactTotalHits: d,
        });
        u?.({ searchContext: t, searchQueryString: i, searchQuery: N });
        let m = n.map((e) => _(e));
        return (
            r.h.dispatch({ type: "SEARCH_MESSAGES_START", ids: m }),
            p.fetch(
                (e) => {
                    let { body: n } = e,
                        i = Object.entries(n.tabs);
                    r.h.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: f,
                        data: i.map((e) => {
                            let [t, i] = e,
                                r = _(t),
                                l = i.cursor;
                            return {
                                id: r,
                                analyticsId: n.analytics_id,
                                totalResults: i.total_results,
                                cursor: null != l && a().isEmpty(l) ? null : l,
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
                    r.h.dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: m });
                },
                (e) => {
                    r.h.dispatch({ type: "SEARCH_MESSAGES_FAILURE", ids: m, error: e });
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
                searchMode: a,
                searchEverywhere: l,
                onFetchStart: c,
            } = e,
            _ = (0, o._o)(n),
            E = (0, o.Zf)(_),
            u = (0, o.nm)(a),
            A = { ...E, ...u, offset: i.offset },
            I = (0, o.mt)(t);
        null != I && (0, o.L5)(A, I), l && (A.search_everywhere = !0);
        let T = (0, o.bS)(t),
            h = d.A.create({ id: T, searchType: t.type, searchQuery: A });
        c?.({ searchContext: t, searchQueryString: n, searchQuery: A }),
            r.h.dispatch({ type: "SEARCH_MESSAGES_START", ids: [T] }),
            h.fetch(
                (e) => {
                    r.h.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: I,
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
                    r.h.dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: [T] });
                },
                (e) => {
                    r.h.dispatch({ type: "SEARCH_MESSAGES_FAILURE", ids: [T], error: e });
                },
            );
    },
    clearSearchRecentMessages: function () {
        r.h.dispatch({ type: "SEARCH_RECENT_MESSAGES_CLEAR" });
    },
    clearAllSearchMesssages: function () {
        r.h.dispatch({ type: "SEARCH_MESSAGES_CLEAR_ALL" });
    },
    clearSearchMessages: function (e) {
        r.h.dispatch({ type: "SEARCH_MESSAGES_CLEAR", id: e });
    },
    initializeAutocomplete: function (e) {
        r.h.dispatch({ type: "SEARCH_AUTOCOMPLETE_INITIALIZE", searchContext: e });
    },
    updateAutocompleteQuery: function (e) {
        let { searchContext: t, tokens: n, queryString: i, cursorScope: a } = e;
        i.trim().length > 0 && l.bW.loadIfNecessary(),
            r.h.dispatch({ type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", searchContext: t, tokens: n, cursorScope: a });
    },
    markSearchTokensRefreshed: function () {
        r.h.dispatch({ type: "SEARCH_TOKENS_REFRESHED" });
    },
};
