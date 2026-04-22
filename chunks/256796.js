"use strict";
n.d(t, { A: () => c });
var r = n(735438),
    i = n.n(r),
    s = n(73153),
    a = n(736130),
    o = n(594061),
    l = n(822382),
    u = n(23667),
    d = n(956467);
let c = {
    fetchTabMessages: function (e) {
        let {
                searchContext: t,
                searchTabs: n,
                searchQueryString: r,
                pagination: o,
                trackExactTotalHits: u,
                getId: c,
                getLimit: _,
                onFetchStart: f,
                onFetchSuccess: E,
                searchMode: h,
            } = e,
            p = (0, l._o)(r),
            m = (0, l.Zf)(p);
        !(function (e) {
            if (!Array.isArray(e.pinned)) return;
            let t = e.pinned.some((e) => !0 === e);
            e.pinned = t;
        })(m);
        let g = (0, l.nm)(h),
            A = { ...m, ...g },
            I = (0, l.mt)(t);
        null != I && (0, l.L5)(A, I);
        let T = d.A.create({
            id: (0, l.bS)(t),
            searchContext: t,
            searchQuery: A,
            searchTabs: n,
            getLimit: _,
            pagination: o,
            trackExactTotalHits: u,
        });
        f?.({ searchContext: t, searchQueryString: r, searchQuery: A });
        let S = n.map((e) => c(e));
        return (
            s.h.dispatch({ type: "SEARCH_MESSAGES_START", ids: S }),
            T.fetch(
                (e) => {
                    let { body: n } = e,
                        r = Object.entries(n.tabs);
                    s.h.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: I,
                        data: r.map((e) => {
                            let [t, r] = e,
                                s = c(t),
                                o = r.cursor;
                            return {
                                id: s,
                                analyticsId: n.analytics_id,
                                totalResults: r.total_results,
                                cursor: null != o && i().isEmpty(o) ? null : o,
                                messages: r.messages,
                                channels: r.channels ?? [],
                                threads: r.threads ?? [],
                                members: (r.members ?? []).map((e) => (0, a.A)(e)),
                                doingHistoricalIndex: n.doing_deep_historical_index,
                                documentsIndexed: n.documents_indexed,
                            };
                        }),
                    }),
                        E?.({ searchContext: t, tabEntries: r });
                },
                () => {
                    s.h.dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: S });
                },
                (e) => {
                    s.h.dispatch({ type: "SEARCH_MESSAGES_FAILURE", ids: S, error: e });
                },
            ),
            !0
        );
    },
    fetchMessages: function (e) {
        let {
                searchContext: t,
                searchQueryString: n,
                pagination: r,
                searchMode: i,
                searchEverywhere: o,
                onFetchStart: d,
            } = e,
            c = (0, l._o)(n),
            _ = (0, l.Zf)(c),
            f = (0, l.nm)(i),
            E = { ..._, ...f, offset: r.offset },
            h = (0, l.mt)(t);
        null != h && (0, l.L5)(E, h), o && (E.search_everywhere = !0);
        let p = (0, l.bS)(t),
            m = u.A.create({ id: p, searchType: t.type, searchQuery: E });
        d?.({ searchContext: t, searchQueryString: n, searchQuery: E }),
            s.h.dispatch({ type: "SEARCH_MESSAGES_START", ids: [p] }),
            m.fetch(
                (e) => {
                    s.h.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: h,
                        data: [
                            {
                                id: p,
                                analyticsId: e.body.analytics_id,
                                totalResults: e.body.total_results,
                                messages: e.body.messages,
                                threads: e.body.threads ?? [],
                                members: (e.body.members ?? []).map((e) => (0, a.A)(e)),
                                doingHistoricalIndex: e.body.doing_deep_historical_index,
                                documentsIndexed: e.body.documents_indexed,
                                channels: e.body.channels ?? [],
                                cursor: null,
                            },
                        ],
                    });
                },
                () => {
                    s.h.dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: [p] });
                },
                (e) => {
                    s.h.dispatch({ type: "SEARCH_MESSAGES_FAILURE", ids: [p], error: e });
                },
            );
    },
    clearSearchRecentMessages: function () {
        s.h.dispatch({ type: "SEARCH_RECENT_MESSAGES_CLEAR" });
    },
    clearAllSearchMesssages: function () {
        s.h.dispatch({ type: "SEARCH_MESSAGES_CLEAR_ALL" });
    },
    clearSearchMessages: function (e) {
        s.h.dispatch({ type: "SEARCH_MESSAGES_CLEAR", id: e });
    },
    initializeAutocomplete: function (e) {
        s.h.dispatch({ type: "SEARCH_AUTOCOMPLETE_INITIALIZE", searchContext: e });
    },
    updateAutocompleteQuery: function (e) {
        let { searchContext: t, tokens: n, queryString: r, cursorScope: i } = e;
        r.trim().length > 0 && o.bW.loadIfNecessary(),
            s.h.dispatch({ type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", searchContext: t, tokens: n, cursorScope: i });
    },
    markSearchTokensRefreshed: function () {
        s.h.dispatch({ type: "SEARCH_TOKENS_REFRESHED" });
    },
};
