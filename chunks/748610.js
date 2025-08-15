n.d(t, { Z: () => h }), n(388685), n(415506);
var r = n(392711),
    s = n.n(r),
    l = n(570140),
    a = n(952537),
    i = n(607802),
    o = n(187462),
    c = n(532496),
    u = n(981631);
function d(e) {
    return e === u.I_8 ? null : e;
}
let h = {
    fetchTabMessages: function (e) {
        let {
                searchContext: t,
                searchTabs: n,
                searchQueryString: r,
                pagination: o,
                trackExactTotalHits: h,
                getId: p,
                getLimit: f,
                onFetchStart: _,
                onFetchSuccess: g,
                searchMode: S = u.QIO.NEWEST,
            } = e,
            m = (0, i.kG)(r),
            y = (0, i.$G)(m);
        !(function (e) {
            if (!Array.isArray(e.pinned)) return;
            let t = e.pinned.some((e) => !0 === e);
            e.pinned = t;
        })(y);
        let b = (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, y, (0, i.zH)(S)),
            E = (0, i.s5)(t);
        null != E && (0, i.jW)(b, E);
        let x = c.Z.create({
            id: (0, i.Tm)(t),
            searchContext: t,
            searchQuery: b,
            searchTabs: n,
            getLimit: f,
            pagination: o,
            trackExactTotalHits: h,
        });
        null == _ ||
            _({
                searchContext: t,
                searchQueryString: r,
                searchQuery: b,
            });
        let C = n.map((e) => p(e));
        return (
            l.Z.dispatch({
                type: "SEARCH_MESSAGES_START",
                ids: C,
            }),
            x.fetch(
                (e) => {
                    let { body: n } = e,
                        r = Object.entries(n.tabs);
                    l.Z.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: d(E),
                        data: r.map((e) => {
                            var t, r, l;
                            let [i, o] = e,
                                c = p(i),
                                u = o.cursor;
                            return {
                                id: c,
                                analyticsId: n.analytics_id,
                                totalResults: o.total_results,
                                cursor: null != u && s().isEmpty(u) ? null : u,
                                messages: o.messages,
                                channels: null != (t = o.channels) ? t : [],
                                threads: null != (r = o.threads) ? r : [],
                                members: (null != (l = o.members) ? l : []).map((e) => (0, a.Z)(e)),
                                doingHistoricalIndex: n.doing_deep_historical_index,
                                documentsIndexed: n.documents_indexed,
                            };
                        }),
                    }),
                        null == g ||
                            g({
                                searchContext: t,
                                tabEntries: r,
                            });
                },
                () => {
                    l.Z.dispatch({
                        type: "SEARCH_MESSAGES_INDEXING",
                        ids: C,
                    });
                },
                (e) => {
                    l.Z.dispatch({
                        type: "SEARCH_MESSAGES_FAILURE",
                        ids: C,
                        error: e,
                    });
                },
            ),
            !0
        );
    },
    fetchMessages: function (e) {
        let { searchContext: t, query: n, searchEverywhere: r } = e,
            s = (0, i.s5)(t);
        null != s && (0, i.jW)(n, s), r && (n.search_everywhere = !0);
        let c = (0, i.Tm)(t),
            u = o.Z.create({
                id: c,
                searchType: t.type,
                searchQuery: n,
            });
        l.Z.dispatch({
            type: "SEARCH_MESSAGES_START",
            ids: [c],
        }),
            u.fetch(
                (e) => {
                    var t, n, r;
                    l.Z.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: d(s),
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
                    l.Z.dispatch({
                        type: "SEARCH_MESSAGES_INDEXING",
                        ids: [c],
                    });
                },
                (e) => {
                    l.Z.dispatch({
                        type: "SEARCH_MESSAGES_FAILURE",
                        ids: [c],
                        error: e,
                    });
                },
            );
    },
    clearSearchRecentMessages: function () {
        l.Z.dispatch({ type: "SEARCH_RECENT_MESSAGES_CLEAR" });
    },
    clearAllSearchMesssages: function () {
        l.Z.dispatch({ type: "SEARCH_MESSAGES_CLEAR_ALL" });
    },
    clearSearchMessages: function (e) {
        l.Z.dispatch({
            type: "SEARCH_MESSAGES_CLEAR",
            id: e,
        });
    },
    addNativeSearchHistoryItem: function (e, t) {
        1;
    },
    removeNativeSearchHistoryItem: function (e, t) {
        1;
    },
    clearNativeSearchHistory: function (e) {
        1;
    },
    addWebSearchHistoryItem: function (e, t) {
        let n = (0, i.Tm)(e);
        l.Z.dispatch({
            type: "SEARCH_HISTORY_WEB_ADD_ITEM",
            id: n,
            query: t,
        });
    },
    removeWebSearchHistoryItem: function (e, t) {
        let n = (0, i.Tm)(e);
        l.Z.dispatch({
            type: "SEARCH_HISTORY_WEB_REMOVE_ITEM",
            id: n,
            query: t,
        });
    },
    clearWebSearchHistory: function (e) {
        let t = (0, i.Tm)(e);
        l.Z.dispatch({
            type: "SEARCH_HISTORY_WEB_CLEAR_ITEMS",
            id: t,
        });
    },
    openSearchScreen: function (e) {
        l.Z.dispatch({
            type: "SEARCH_SCREEN_OPEN",
            searchContext: e,
            id: (0, i.Tm)(e),
        });
    },
    setShowBlockedResults: function (e, t) {
        let n = (0, i.Tm)(e);
        l.Z.dispatch({
            type: "SEARCH_SET_SHOW_BLOCKED_RESULTS",
            id: n,
            showBlocked: t,
        });
    },
    setShowNoResultsAlt: function (e) {
        let t = (0, i.Tm)(e);
        l.Z.dispatch({
            type: "SEARCH_SET_SHOW_NO_RESULTS_ALT",
            id: t,
        });
    },
    updateSearchResultsQuery: function (e, t, n, r) {
        let s = (0, i.Tm)(e);
        l.Z.dispatch({
            type: "SEARCH_RESULTS_QUERY_UPDATE",
            id: s,
            queryString: t,
            query: n,
            offset: r,
        });
    },
    ensureSearchState: function (e) {
        let t = (0, i.Tm)(e);
        l.Z.wait(() =>
            l.Z.dispatch({
                type: "SEARCH_ENSURE_SEARCH_STATE",
                id: t,
            }),
        );
    },
    setSearchState: function (e, t) {
        let n = (0, i.Tm)(e);
        l.Z.dispatch({
            type: "SEARCH_EDITOR_STATE_CHANGE",
            id: n,
            editorState: t,
        });
    },
    clearSearchState: function (e) {
        let t = (0, i.Tm)(e);
        l.Z.wait(() =>
            l.Z.dispatch({
                type: "SEARCH_EDITOR_STATE_CLEAR",
                id: t,
            }),
        );
    },
    updateAutocompleteQuery: function (e, t, n) {
        l.Z.dispatch({
            type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
            searchContext: e,
            tokens: t,
            cursorScope: n,
        });
    },
};
