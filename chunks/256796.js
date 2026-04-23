"use strict";
n.d(t, { A: () => d });
var r = n(735438),
    i = n.n(r),
    s = n(73153),
    a = n(736130),
    o = n(594061),
    l = n(822382),
    u = n(23667),
    c = n(956467);
let d = {
    fetchTabMessages: function (e) {
        let {
                searchContext: t,
                searchTabs: n,
                searchQueryString: r,
                pagination: o,
                trackExactTotalHits: u,
                getId: d,
                getLimit: _,
                onFetchStart: f,
                onFetchSuccess: p,
                searchMode: h,
            } = e,
            E = (0, l._o)(r),
            m = (0, l.Zf)(E);
        !(function (e) {
            if (!Array.isArray(e.pinned)) return;
            let t = e.pinned.some((e) => !0 === e);
            e.pinned = t;
        })(m);
        let g = (0, l.nm)(h),
            A = { ...m, ...g },
            I = (0, l.mt)(t);
        null != I && (0, l.L5)(A, I);
        let T = c.A.create({
            id: (0, l.bS)(t),
            searchContext: t,
            searchQuery: A,
            searchTabs: n,
            getLimit: _,
            pagination: o,
            trackExactTotalHits: u,
        });
        f?.({ searchContext: t, searchQueryString: r, searchQuery: A });
        let S = n.map((e) => d(e));
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
                                s = d(t),
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
                        p?.({ searchContext: t, tabEntries: r });
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
                onFetchStart: c,
            } = e,
            d = (0, l._o)(n),
            _ = (0, l.Zf)(d),
            f = (0, l.nm)(i),
            p = { ..._, ...f, offset: r.offset },
            h = (0, l.mt)(t);
        null != h && (0, l.L5)(p, h), o && (p.search_everywhere = !0);
        let E = (0, l.bS)(t),
            m = u.A.create({ id: E, searchType: t.type, searchQuery: p });
        c?.({ searchContext: t, searchQueryString: n, searchQuery: p }),
            s.h.dispatch({ type: "SEARCH_MESSAGES_START", ids: [E] }),
            m.fetch(
                (e) => {
                    s.h.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: h,
                        data: [
                            {
                                id: E,
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
                    s.h.dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: [E] });
                },
                (e) => {
                    s.h.dispatch({ type: "SEARCH_MESSAGES_FAILURE", ids: [E], error: e });
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
