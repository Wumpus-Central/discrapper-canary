n.d(t, { Z: () => b }), n(388685), n(415506);
var r = n(392711),
    i = n.n(r),
    a = n(570140),
    o = n(952537),
    s = n(675478),
    l = n(607802),
    c = n(464626),
    u = n(187462),
    d = n(532496),
    f = n(981631);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e) {
    if (!Array.isArray(e.pinned)) return;
    let t = e.pinned.some((e) => !0 === e);
    e.pinned = t;
}
function m(e) {
    return e === f.I_8 ? null : e;
}
function g() {
    return !1;
}
function E() {
    return !0;
}
let b = {
    fetchTabMessages: function (e) {
        let {
                searchContext: t,
                searchTabs: n,
                searchQueryString: r,
                pagination: s,
                trackExactTotalHits: c,
                getId: u,
                getLimit: _,
                onFetchStart: g,
                onFetchSuccess: E,
                searchMode: b = f.QIO.NEWEST,
            } = e,
            y = (0, l.kG)(r),
            O = (0, l.$G)(y);
        h(O);
        let v = p({}, O, (0, l.zH)(b)),
            I = (0, l.s5)(t);
        null != I && (0, l.jW)(v, I);
        let T = d.Z.create({
            id: (0, l.Tm)(t),
            searchContext: t,
            searchQuery: v,
            searchTabs: n,
            getLimit: _,
            pagination: s,
            trackExactTotalHits: c,
        });
        null == g ||
            g({
                searchContext: t,
                searchQueryString: r,
                searchQuery: v,
            });
        let S = n.map((e) => u(e));
        return (
            a.Z.dispatch({
                type: "SEARCH_MESSAGES_START",
                ids: S,
            }),
            T.fetch(
                (e) => {
                    let { body: n } = e,
                        r = Object.entries(n.tabs);
                    a.Z.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: m(I),
                        data: r.map((e) => {
                            var t, r, a;
                            let [s, l] = e,
                                c = u(s),
                                d = l.cursor;
                            return {
                                id: c,
                                analyticsId: n.analytics_id,
                                totalResults: l.total_results,
                                cursor: null != d && i().isEmpty(d) ? null : d,
                                messages: l.messages,
                                channels: null != (t = l.channels) ? t : [],
                                threads: null != (r = l.threads) ? r : [],
                                members: (null != (a = l.members) ? a : []).map((e) => (0, o.Z)(e)),
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
                    a.Z.dispatch({
                        type: "SEARCH_MESSAGES_INDEXING",
                        ids: S,
                    });
                },
                (e) => {
                    a.Z.dispatch({
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
            i = (0, l.s5)(t);
        null != i && (0, l.jW)(n, i), r && (n.search_everywhere = !0);
        let s = (0, l.Tm)(t),
            c = u.Z.create({
                id: s,
                searchType: t.type,
                searchQuery: n,
            });
        a.Z.dispatch({
            type: "SEARCH_MESSAGES_START",
            ids: [s],
        }),
            c.fetch(
                (e) => {
                    var t, n, r;
                    a.Z.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: m(i),
                        data: [
                            {
                                id: s,
                                analyticsId: e.body.analytics_id,
                                totalResults: e.body.total_results,
                                messages: e.body.messages,
                                threads: null != (t = e.body.threads) ? t : [],
                                members: (null != (n = e.body.members) ? n : []).map((e) => (0, o.Z)(e)),
                                doingHistoricalIndex: e.body.doing_deep_historical_index,
                                documentsIndexed: e.body.documents_indexed,
                                channels: null != (r = e.body.channels) ? r : [],
                                cursor: null,
                            },
                        ],
                    });
                },
                () => {
                    a.Z.dispatch({
                        type: "SEARCH_MESSAGES_INDEXING",
                        ids: [s],
                    });
                },
                (e) => {
                    a.Z.dispatch({
                        type: "SEARCH_MESSAGES_FAILURE",
                        ids: [s],
                        error: e,
                    });
                },
            );
    },
    clearSearchRecentMessages: function () {
        a.Z.dispatch({ type: "SEARCH_RECENT_MESSAGES_CLEAR" });
    },
    clearAllSearchMesssages: function () {
        a.Z.dispatch({ type: "SEARCH_MESSAGES_CLEAR_ALL" });
    },
    clearSearchMessages: function (e) {
        a.Z.dispatch({
            type: "SEARCH_MESSAGES_CLEAR",
            id: e,
        });
    },
    addNativeSearchHistoryItem: function (e, t) {
        if (!g() || (e.type !== f.aib.DMS && e.type !== f.aib.GUILD)) return;
        let n = (0, l.Tm)(e);
        a.Z.dispatch({
            type: "SEARCH_HISTORY_NATIVE_ADD_ITEM",
            id: n,
            item: t,
        });
    },
    removeNativeSearchHistoryItem: function (e, t) {
        if (!g()) return;
        let n = (0, l.Tm)(e);
        a.Z.dispatch({
            type: "SEARCH_HISTORY_NATIVE_REMOVE_ITEM",
            id: n,
            item: t,
        });
    },
    clearNativeSearchHistory: function (e) {
        if (!g()) return;
        let t = (0, l.Tm)(e);
        a.Z.dispatch({
            type: "SEARCH_HISTORY_NATIVE_CLEAR_ITEMS",
            id: t,
        });
    },
    addWebSearchHistoryItem: function (e, t) {
        if (!E()) return;
        let n = (0, l.Tm)(e);
        a.Z.dispatch({
            type: "SEARCH_HISTORY_WEB_ADD_ITEM",
            id: n,
            query: t,
        });
    },
    removeWebSearchHistoryItem: function (e, t) {
        if (!E()) return;
        let n = (0, l.Tm)(e);
        a.Z.dispatch({
            type: "SEARCH_HISTORY_WEB_REMOVE_ITEM",
            id: n,
            query: t,
        });
    },
    clearWebSearchHistory: function (e) {
        if (!E()) return;
        let t = (0, l.Tm)(e);
        a.Z.dispatch({
            type: "SEARCH_HISTORY_WEB_CLEAR_ITEMS",
            id: t,
        });
    },
    initializeAutocomplete: function (e) {
        a.Z.dispatch({
            type: "SEARCH_AUTOCOMPLETE_INITIALIZE",
            searchContext: e,
        });
    },
    setShowBlockedResults: function (e, t) {
        let n = (0, l.Tm)(e);
        a.Z.dispatch({
            type: "SEARCH_SET_SHOW_BLOCKED_RESULTS",
            id: n,
            showBlocked: t,
        });
    },
    setShowNoResultsAlt: function (e) {
        let t = (0, l.Tm)(e);
        a.Z.dispatch({
            type: "SEARCH_SET_SHOW_NO_RESULTS_ALT",
            id: t,
        });
    },
    updateSearchResultsQuery: function (e, t, n, r) {
        let i = (0, l.Tm)(e);
        a.Z.dispatch({
            type: "SEARCH_RESULTS_QUERY_UPDATE",
            id: i,
            queryString: t,
            query: n,
            offset: r,
        });
    },
    ensureSearchState: function (e) {
        let t = (0, l.Tm)(e);
        a.Z.wait(() =>
            a.Z.dispatch({
                type: "SEARCH_ENSURE_SEARCH_STATE",
                id: t,
            }),
        );
    },
    setSearchState: function (e, t) {
        let n = (0, l.Tm)(e);
        a.Z.dispatch({
            type: "SEARCH_EDITOR_STATE_CHANGE",
            id: n,
            editorState: t,
        });
    },
    clearSearchState: function (e) {
        let t = (0, l.Tm)(e);
        a.Z.wait(() =>
            a.Z.dispatch({
                type: "SEARCH_EDITOR_STATE_CLEAR",
                id: t,
            }),
        );
    },
    updateAutocompleteQuery: function (e, t, n) {
        (0, c.y)({ location: "updateAutocompleteQuery" }) && s.DZ.loadIfNecessary(),
            a.Z.dispatch({
                type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
                searchContext: e,
                tokens: t,
                cursorScope: n,
            });
    },
    markSearchTokensRefreshed: function () {
        a.Z.dispatch({ type: "SEARCH_TOKENS_REFRESHED" });
    },
};
