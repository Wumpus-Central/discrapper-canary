"use strict";
n.d(t, { A: () => p });
var r = n(735438),
    i = n.n(r),
    a = n(73153),
    s = n(736130),
    o = n(594061),
    l = n(822382),
    u = n(23667),
    c = n(956467),
    d = n(652215);
function _(e) {
    if (!Array.isArray(e.pinned)) return;
    let t = e.pinned.some((e) => !0 === e);
    e.pinned = t;
}
function f(e) {
    return e === d.YYv ? null : e;
}
let p = {
    fetchTabMessages: function (e) {
        let {
                searchContext: t,
                searchTabs: n,
                searchQueryString: r,
                pagination: o,
                trackExactTotalHits: u,
                getId: d,
                getLimit: p,
                onFetchStart: h,
                onFetchSuccess: m,
                searchMode: g,
            } = e,
            E = (0, l._o)(r),
            A = (0, l.Zf)(E);
        _(A);
        let I = (0, l.nm)(g),
            T = { ...A, ...I },
            y = (0, l.mt)(t);
        null != y && (0, l.L5)(T, y);
        let S = c.A.create({
            id: (0, l.bS)(t),
            searchContext: t,
            searchQuery: T,
            searchTabs: n,
            getLimit: p,
            pagination: o,
            trackExactTotalHits: u,
        });
        h?.({ searchContext: t, searchQueryString: r, searchQuery: T });
        let v = n.map((e) => d(e));
        return (
            a.h.dispatch({ type: "SEARCH_MESSAGES_START", ids: v }),
            S.fetch(
                (e) => {
                    let { body: n } = e,
                        r = Object.entries(n.tabs);
                    a.h.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: f(y),
                        data: r.map((e) => {
                            let [t, r] = e,
                                a = d(t),
                                o = r.cursor;
                            return {
                                id: a,
                                analyticsId: n.analytics_id,
                                totalResults: r.total_results,
                                cursor: null != o && i().isEmpty(o) ? null : o,
                                messages: r.messages,
                                channels: r.channels ?? [],
                                threads: r.threads ?? [],
                                members: (r.members ?? []).map((e) => (0, s.A)(e)),
                                doingHistoricalIndex: n.doing_deep_historical_index,
                                documentsIndexed: n.documents_indexed,
                            };
                        }),
                    }),
                        m?.({ searchContext: t, tabEntries: r });
                },
                () => {
                    a.h.dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: v });
                },
                (e) => {
                    a.h.dispatch({ type: "SEARCH_MESSAGES_FAILURE", ids: v, error: e });
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
            p = (0, l.nm)(i),
            h = { ..._, ...p, offset: r.offset },
            m = (0, l.mt)(t);
        null != m && (0, l.L5)(h, m), o && (h.search_everywhere = !0);
        let g = (0, l.bS)(t),
            E = u.A.create({ id: g, searchType: t.type, searchQuery: h });
        c?.({ searchContext: t, searchQueryString: n, searchQuery: h }),
            a.h.dispatch({ type: "SEARCH_MESSAGES_START", ids: [g] }),
            E.fetch(
                (e) => {
                    a.h.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: f(m),
                        data: [
                            {
                                id: g,
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
                    a.h.dispatch({ type: "SEARCH_MESSAGES_INDEXING", ids: [g] });
                },
                (e) => {
                    a.h.dispatch({ type: "SEARCH_MESSAGES_FAILURE", ids: [g], error: e });
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
        let { searchContext: t, tokens: n, queryString: r, cursorScope: i } = e;
        r.trim().length > 0 && o.bW.loadIfNecessary(),
            a.h.dispatch({ type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", searchContext: t, tokens: n, cursorScope: i });
    },
    markSearchTokensRefreshed: function () {
        a.h.dispatch({ type: "SEARCH_TOKENS_REFRESHED" });
    },
};
