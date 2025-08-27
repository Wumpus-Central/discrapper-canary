n.d(t, { Z: () => g }), n(388685), n(415506);
var r = n(392711),
    i = n.n(r),
    o = n(570140),
    a = n(952537),
    s = n(607802),
    l = n(187462),
    c = n(532496),
    u = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e) {
    if (!Array.isArray(e.pinned)) return;
    let t = e.pinned.some((e) => !0 === e);
    e.pinned = t;
}
function p(e) {
    return e === u.I_8 ? null : e;
}
function h() {
    return !1;
}
function m() {
    return !0;
}
let g = {
    fetchTabMessages: function (e) {
        let {
                searchContext: t,
                searchTabs: n,
                searchQueryString: r,
                pagination: l,
                trackExactTotalHits: d,
                getId: h,
                getLimit: m,
                onFetchStart: g,
                onFetchSuccess: E,
                searchMode: b = u.QIO.NEWEST,
            } = e,
            y = (0, s.kG)(r),
            O = (0, s.$G)(y);
        _(O);
        let v = f({}, O, (0, s.zH)(b)),
            I = (0, s.s5)(t);
        null != I && (0, s.jW)(v, I);
        let T = c.Z.create({
            id: (0, s.Tm)(t),
            searchContext: t,
            searchQuery: v,
            searchTabs: n,
            getLimit: m,
            pagination: l,
            trackExactTotalHits: d,
        });
        null == g ||
            g({
                searchContext: t,
                searchQueryString: r,
                searchQuery: v,
            });
        let S = n.map((e) => h(e));
        return (
            o.Z.dispatch({
                type: "SEARCH_MESSAGES_START",
                ids: S,
            }),
            T.fetch(
                (e) => {
                    let { body: n } = e,
                        r = Object.entries(n.tabs);
                    o.Z.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: p(I),
                        data: r.map((e) => {
                            var t, r, o;
                            let [s, l] = e,
                                c = h(s),
                                u = l.cursor;
                            return {
                                id: c,
                                analyticsId: n.analytics_id,
                                totalResults: l.total_results,
                                cursor: null != u && i().isEmpty(u) ? null : u,
                                messages: l.messages,
                                channels: null != (t = l.channels) ? t : [],
                                threads: null != (r = l.threads) ? r : [],
                                members: (null != (o = l.members) ? o : []).map((e) => (0, a.Z)(e)),
                                doingHistoricalIndex: n.doing_deep_historical_index,
                                documentsIndexed: n.documents_indexed,
                            };
                        }),
                    }),
                        null == E ||
                            E({
                                searchContext: t,
                                tabEntries: r,
                            });
                },
                () => {
                    o.Z.dispatch({
                        type: "SEARCH_MESSAGES_INDEXING",
                        ids: S,
                    });
                },
                (e) => {
                    o.Z.dispatch({
                        type: "SEARCH_MESSAGES_FAILURE",
                        ids: S,
                        error: e,
                    });
                },
            ),
            !0
        );
    },
    fetchMessages: function (e) {
        let { searchContext: t, query: n, searchEverywhere: r } = e,
            i = (0, s.s5)(t);
        null != i && (0, s.jW)(n, i), r && (n.search_everywhere = !0);
        let c = (0, s.Tm)(t),
            u = l.Z.create({
                id: c,
                searchType: t.type,
                searchQuery: n,
            });
        o.Z.dispatch({
            type: "SEARCH_MESSAGES_START",
            ids: [c],
        }),
            u.fetch(
                (e) => {
                    var t, n, r;
                    o.Z.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: p(i),
                        data: [
                            {
                                id: c,
                                analyticsId: e.body.analytics_id,
                                totalResults: e.body.total_results,
                                messages: e.body.messages,
                                threads: null != (t = e.body.threads) ? t : [],
                                members: (null != (n = e.body.members) ? n : []).map((e) => (0, a.Z)(e)),
                                doingHistoricalIndex: e.body.doing_deep_historical_index,
                                documentsIndexed: e.body.documents_indexed,
                                channels: null != (r = e.body.channels) ? r : [],
                                cursor: null,
                            },
                        ],
                    });
                },
                () => {
                    o.Z.dispatch({
                        type: "SEARCH_MESSAGES_INDEXING",
                        ids: [c],
                    });
                },
                (e) => {
                    o.Z.dispatch({
                        type: "SEARCH_MESSAGES_FAILURE",
                        ids: [c],
                        error: e,
                    });
                },
            );
    },
    clearSearchRecentMessages: function () {
        o.Z.dispatch({ type: "SEARCH_RECENT_MESSAGES_CLEAR" });
    },
    clearAllSearchMesssages: function () {
        o.Z.dispatch({ type: "SEARCH_MESSAGES_CLEAR_ALL" });
    },
    clearSearchMessages: function (e) {
        o.Z.dispatch({
            type: "SEARCH_MESSAGES_CLEAR",
            id: e,
        });
    },
    addNativeSearchHistoryItem: function (e, t) {
        if (!h() || (e.type !== u.aib.DMS && e.type !== u.aib.GUILD)) return;
        let n = (0, s.Tm)(e);
        o.Z.dispatch({
            type: "SEARCH_HISTORY_NATIVE_ADD_ITEM",
            id: n,
            item: t,
        });
    },
    removeNativeSearchHistoryItem: function (e, t) {
        if (!h()) return;
        let n = (0, s.Tm)(e);
        o.Z.dispatch({
            type: "SEARCH_HISTORY_NATIVE_REMOVE_ITEM",
            id: n,
            item: t,
        });
    },
    clearNativeSearchHistory: function (e) {
        if (!h()) return;
        let t = (0, s.Tm)(e);
        o.Z.dispatch({
            type: "SEARCH_HISTORY_NATIVE_CLEAR_ITEMS",
            id: t,
        });
    },
    addWebSearchHistoryItem: function (e, t) {
        if (!m()) return;
        let n = (0, s.Tm)(e);
        o.Z.dispatch({
            type: "SEARCH_HISTORY_WEB_ADD_ITEM",
            id: n,
            query: t,
        });
    },
    removeWebSearchHistoryItem: function (e, t) {
        if (!m()) return;
        let n = (0, s.Tm)(e);
        o.Z.dispatch({
            type: "SEARCH_HISTORY_WEB_REMOVE_ITEM",
            id: n,
            query: t,
        });
    },
    clearWebSearchHistory: function (e) {
        if (!m()) return;
        let t = (0, s.Tm)(e);
        o.Z.dispatch({
            type: "SEARCH_HISTORY_WEB_CLEAR_ITEMS",
            id: t,
        });
    },
    initializeAutocomplete: function (e) {
        o.Z.dispatch({
            type: "SEARCH_AUTOCOMPLETE_INITIALIZE",
            searchContext: e,
        });
    },
    setShowBlockedResults: function (e, t) {
        let n = (0, s.Tm)(e);
        o.Z.dispatch({
            type: "SEARCH_SET_SHOW_BLOCKED_RESULTS",
            id: n,
            showBlocked: t,
        });
    },
    setShowNoResultsAlt: function (e) {
        let t = (0, s.Tm)(e);
        o.Z.dispatch({
            type: "SEARCH_SET_SHOW_NO_RESULTS_ALT",
            id: t,
        });
    },
    updateSearchResultsQuery: function (e, t, n, r) {
        let i = (0, s.Tm)(e);
        o.Z.dispatch({
            type: "SEARCH_RESULTS_QUERY_UPDATE",
            id: i,
            queryString: t,
            query: n,
            offset: r,
        });
    },
    ensureSearchState: function (e) {
        let t = (0, s.Tm)(e);
        o.Z.wait(() =>
            o.Z.dispatch({
                type: "SEARCH_ENSURE_SEARCH_STATE",
                id: t,
            }),
        );
    },
    setSearchState: function (e, t) {
        let n = (0, s.Tm)(e);
        o.Z.dispatch({
            type: "SEARCH_EDITOR_STATE_CHANGE",
            id: n,
            editorState: t,
        });
    },
    clearSearchState: function (e) {
        let t = (0, s.Tm)(e);
        o.Z.wait(() =>
            o.Z.dispatch({
                type: "SEARCH_EDITOR_STATE_CLEAR",
                id: t,
            }),
        );
    },
    updateAutocompleteQuery: function (e, t, n) {
        o.Z.dispatch({
            type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
            searchContext: e,
            tokens: t,
            cursorScope: n,
        });
    },
    markSearchTokensRefreshed: function () {
        o.Z.dispatch({ type: "SEARCH_TOKENS_REFRESHED" });
    },
};
