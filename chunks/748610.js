(n.d(t, { Z: () => m }), n(388685), n(415506));
var r = n(392711),
    i = n.n(r),
    a = n(570140),
    o = n(952537),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            }));
    }
    return e;
}
function _(e) {
    if (!Array.isArray(e.pinned)) return;
    let t = e.pinned.some((e) => !0 === e);
    e.pinned = t;
}
function p() {
    return !1;
}
function h() {
    return !0;
}
let m = {
    fetchTabMessages: function (e) {
        let { searchContext: t, searchTabs: n, searchQueryString: r, pagination: l, trackExactTotalHits: d, getId: p, getLimit: h, onFetchStart: m, onFetchSuccess: g, searchMode: E = u.QIO.NEWEST } = e,
            b = (0, s.kG)(r),
            y = (0, s.$G)(b);
        _(y);
        let O = f({}, y, (0, s.zH)(E)),
            v = (0, s.s5)(t);
        null != v && (0, s.jW)(O, v);
        let I = c.Z.create({
            id: (0, s.Tm)(t),
            searchContext: t,
            searchQuery: O,
            searchTabs: n,
            getLimit: h,
            pagination: l,
            trackExactTotalHits: d
        });
        null == m ||
            m({
                searchContext: t,
                searchQueryString: r,
                searchQuery: O
            });
        let T = n.map((e) => p(e));
        return (
            a.Z.dispatch({
                type: 'SEARCH_MESSAGES_START',
                ids: T
            }),
            I.fetch(
                (e) => {
                    let { body: n } = e,
                        r = Object.entries(n.tabs);
                    (a.Z.dispatch({
                        type: 'SEARCH_MESSAGES_SUCCESS',
                        guildId: v,
                        data: r.map((e) => {
                            var t, r, a;
                            let [s, l] = e,
                                c = p(s),
                                u = l.cursor;
                            return {
                                id: c,
                                analyticsId: n.analytics_id,
                                totalResults: l.total_results,
                                cursor: null != u && i().isEmpty(u) ? null : u,
                                messages: l.messages,
                                channels: null != (t = l.channels) ? t : [],
                                threads: null != (r = l.threads) ? r : [],
                                members: (null != (a = l.members) ? a : []).map((e) => (0, o.Z)(e)),
                                doingHistoricalIndex: n.doing_deep_historical_index,
                                documentsIndexed: n.documents_indexed
                            };
                        })
                    }),
                        null == g ||
                            g({
                                searchContext: t,
                                tabEntries: r
                            }));
                },
                () => {
                    a.Z.dispatch({
                        type: 'SEARCH_MESSAGES_INDEXING',
                        ids: T
                    });
                },
                (e) => {
                    a.Z.dispatch({
                        type: 'SEARCH_MESSAGES_FAILURE',
                        ids: T,
                        error: e
                    });
                }
            ),
            !0
        );
    },
    fetchMessages: function (e) {
        let { searchContext: t, query: n, searchEverywhere: r } = e,
            i = (0, s.s5)(t);
        (null != i && (0, s.jW)(n, i), r && (n.search_everywhere = !0));
        let c = (0, s.WJ)(t),
            u = l.Z.create({
                id: c,
                searchType: t.type,
                searchQuery: n
            });
        (a.Z.dispatch({
            type: 'SEARCH_MESSAGES_START',
            ids: [c]
        }),
            u.fetch(
                (e) => {
                    var t, n, r;
                    a.Z.dispatch({
                        type: 'SEARCH_MESSAGES_SUCCESS',
                        guildId: i,
                        data: [
                            {
                                id: c,
                                analyticsId: e.body.analytics_id,
                                totalResults: e.body.total_results,
                                messages: e.body.messages,
                                threads: null != (t = e.body.threads) ? t : [],
                                members: (null != (n = e.body.members) ? n : []).map((e) => (0, o.Z)(e)),
                                doingHistoricalIndex: e.body.doing_deep_historical_index,
                                documentsIndexed: e.body.documents_indexed,
                                channels: null != (r = e.body.channels) ? r : [],
                                cursor: null
                            }
                        ]
                    });
                },
                () => {
                    a.Z.dispatch({
                        type: 'SEARCH_MESSAGES_INDEXING',
                        ids: [c]
                    });
                },
                (e) => {
                    a.Z.dispatch({
                        type: 'SEARCH_MESSAGES_FAILURE',
                        ids: [c],
                        error: e
                    });
                }
            ));
    },
    clearSearchRecentMessages: function () {
        a.Z.dispatch({ type: 'SEARCH_RECENT_MESSAGES_CLEAR' });
    },
    clearAllSearchMesssages: function () {
        a.Z.dispatch({ type: 'SEARCH_MESSAGES_CLEAR_ALL' });
    },
    clearSearchMessages: function (e) {
        a.Z.dispatch({
            type: 'SEARCH_MESSAGES_CLEAR',
            id: e
        });
    },
    addNativeSearchHistoryItem: function (e, t) {
        if (!p() || (e.type !== u.aib.DMS && e.type !== u.aib.GUILD)) return;
        let n = (0, s.Tm)(e);
        a.Z.dispatch({
            type: 'SEARCH_HISTORY_NATIVE_ADD_ITEM',
            id: n,
            item: t
        });
    },
    removeNativeSearchHistoryItem: function (e, t) {
        if (!p()) return;
        let n = (0, s.Tm)(e);
        a.Z.dispatch({
            type: 'SEARCH_HISTORY_NATIVE_REMOVE_ITEM',
            id: n,
            item: t
        });
    },
    clearNativeSearchHistory: function (e) {
        if (!p()) return;
        let t = (0, s.Tm)(e);
        a.Z.dispatch({
            type: 'SEARCH_HISTORY_NATIVE_CLEAR_ITEMS',
            id: t
        });
    },
    addWebSearchHistoryItem: function (e, t) {
        h() &&
            a.Z.dispatch({
                type: 'SEARCH_HISTORY_WEB_ADD_ITEM',
                searchId: e,
                query: t
            });
    },
    removeWebSearchHistoryItem: function (e, t) {
        h() &&
            a.Z.dispatch({
                type: 'SEARCH_HISTORY_WEB_REMOVE_ITEM',
                searchId: e,
                query: t
            });
    },
    clearWebSearchHistory: function (e) {
        h() &&
            a.Z.dispatch({
                type: 'SEARCH_HISTORY_WEB_CLEAR_ITEMS',
                searchId: e
            });
    },
    openSearchScreen: function (e) {
        a.Z.dispatch({
            type: 'SEARCH_SCREEN_OPEN',
            searchContext: e,
            searchId: (0, s.WJ)(e)
        });
    },
    setShowBlockedResults: function (e, t) {
        a.Z.dispatch({
            type: 'SEARCH_SET_SHOW_BLOCKED_RESULTS',
            searchId: e,
            showBlocked: t
        });
    },
    setShowNoResultsAlt: function (e) {
        a.Z.dispatch({
            type: 'SEARCH_SET_SHOW_NO_RESULTS_ALT',
            searchId: e
        });
    },
    updateSearchResultsQuery: function (e, t, n, r) {
        a.Z.dispatch({
            type: 'SEARCH_RESULTS_QUERY_UPDATE',
            searchId: e,
            queryString: t,
            query: n,
            offset: r
        });
    },
    ensureSearchState: function (e) {
        a.Z.wait(() =>
            a.Z.dispatch({
                type: 'SEARCH_ENSURE_SEARCH_STATE',
                searchId: e
            })
        );
    },
    setSearchState: function (e, t) {
        null != e &&
            a.Z.dispatch({
                type: 'SEARCH_EDITOR_STATE_CHANGE',
                searchId: e,
                editorState: t
            });
    },
    clearSearchState: function (e) {
        a.Z.wait(() =>
            a.Z.dispatch({
                type: 'SEARCH_EDITOR_STATE_CLEAR',
                searchId: e
            })
        );
    },
    updateAutocompleteQuery: function (e, t, n) {
        a.Z.dispatch({
            type: 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE',
            searchContext: e,
            tokens: t,
            cursorScope: n
        });
    }
};
