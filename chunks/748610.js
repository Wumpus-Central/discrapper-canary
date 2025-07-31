(n.d(t, { Z: () => _ }), n(388685), n(415506));
var r = n(392711),
    i = n.n(r),
    l = n(570140),
    a = n(952537),
    o = n(607802),
    s = n(187462),
    c = n(532496),
    u = n(981631);
function d() {
    return !1;
}
let _ = {
    fetchTabMessages: function (e) {
        let { searchContext: t, searchTabs: n, searchQueryString: r, pagination: s, trackExactTotalHits: d, getId: _, getLimit: E, onFetchStart: p, onFetchSuccess: O, searchMode: S = u.QIO.NEWEST } = e,
            I = (0, o.kG)(r),
            f = (0, o.$G)(I);
        !(function (e) {
            if (!Array.isArray(e.pinned)) return;
            let t = e.pinned.some((e) => !0 === e);
            e.pinned = t;
        })(f);
        let h = (function (e) {
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
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })({}, f, (0, o.zH)(S)),
            T = (0, o.s5)(t);
        null != T && (0, o.jW)(h, T);
        let m = c.Z.create({
            id: (0, o.Tm)(t),
            searchContext: t,
            searchQuery: h,
            searchTabs: n,
            getLimit: E,
            pagination: s,
            trackExactTotalHits: d
        });
        null == p ||
            p({
                searchContext: t,
                searchQueryString: r,
                searchQuery: h
            });
        let g = n.map((e) => _(e));
        return (
            l.Z.dispatch({
                type: 'SEARCH_MESSAGES_START',
                ids: g
            }),
            m.fetch(
                (e) => {
                    let { body: n } = e,
                        r = Object.entries(n.tabs);
                    (l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_SUCCESS',
                        guildId: T,
                        data: r.map((e) => {
                            var t, r, l;
                            let [o, s] = e,
                                c = _(o),
                                u = s.cursor;
                            return {
                                id: c,
                                analyticsId: n.analytics_id,
                                totalResults: s.total_results,
                                cursor: null != u && i().isEmpty(u) ? null : u,
                                messages: s.messages,
                                channels: null != (t = s.channels) ? t : [],
                                threads: null != (r = s.threads) ? r : [],
                                members: (null != (l = s.members) ? l : []).map((e) => (0, a.Z)(e)),
                                doingHistoricalIndex: n.doing_deep_historical_index,
                                documentsIndexed: n.documents_indexed
                            };
                        })
                    }),
                        null == O ||
                            O({
                                searchContext: t,
                                tabEntries: r
                            }));
                },
                () => {
                    l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_INDEXING',
                        ids: g
                    });
                },
                (e) => {
                    l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_FAILURE',
                        ids: g,
                        error: e
                    });
                }
            ),
            !0
        );
    },
    fetchMessages: function (e) {
        let { searchContext: t, query: n, searchEverywhere: r } = e,
            i = (0, o.s5)(t);
        (null != i && (0, o.jW)(n, i), r && (n.search_everywhere = !0));
        let c = (0, o.WJ)(t),
            u = s.Z.create({
                id: c,
                searchType: t.type,
                searchQuery: n
            });
        (l.Z.dispatch({
            type: 'SEARCH_MESSAGES_START',
            ids: [c]
        }),
            u.fetch(
                (e) => {
                    var t, n, r;
                    l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_SUCCESS',
                        guildId: i,
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
                                cursor: null
                            }
                        ]
                    });
                },
                () => {
                    l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_INDEXING',
                        ids: [c]
                    });
                },
                (e) => {
                    l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_FAILURE',
                        ids: [c],
                        error: e
                    });
                }
            ));
    },
    clearSearchRecentMessages: function () {
        l.Z.dispatch({ type: 'SEARCH_RECENT_MESSAGES_CLEAR' });
    },
    clearAllSearchMesssages: function () {
        l.Z.dispatch({ type: 'SEARCH_MESSAGES_CLEAR_ALL' });
    },
    clearSearchMessages: function (e) {
        l.Z.dispatch({
            type: 'SEARCH_MESSAGES_CLEAR',
            id: e
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
        l.Z.dispatch({
            type: 'SEARCH_HISTORY_WEB_ADD_ITEM',
            searchId: e,
            query: t
        });
    },
    removeWebSearchHistoryItem: function (e, t) {
        l.Z.dispatch({
            type: 'SEARCH_HISTORY_WEB_REMOVE_ITEM',
            searchId: e,
            query: t
        });
    },
    clearWebSearchHistory: function (e) {
        l.Z.dispatch({
            type: 'SEARCH_HISTORY_WEB_CLEAR_ITEMS',
            searchId: e
        });
    },
    openSearchScreen: function (e) {
        l.Z.dispatch({
            type: 'SEARCH_SCREEN_OPEN',
            searchContext: e,
            searchId: (0, o.WJ)(e)
        });
    },
    setShowBlockedResults: function (e, t) {
        l.Z.dispatch({
            type: 'SEARCH_SET_SHOW_BLOCKED_RESULTS',
            searchId: e,
            showBlocked: t
        });
    },
    setShowNoResultsAlt: function (e) {
        l.Z.dispatch({
            type: 'SEARCH_SET_SHOW_NO_RESULTS_ALT',
            searchId: e
        });
    },
    updateSearchResultsQuery: function (e, t, n, r) {
        l.Z.dispatch({
            type: 'SEARCH_RESULTS_QUERY_UPDATE',
            searchId: e,
            queryString: t,
            query: n,
            offset: r
        });
    },
    ensureSearchState: function (e) {
        l.Z.wait(() =>
            l.Z.dispatch({
                type: 'SEARCH_ENSURE_SEARCH_STATE',
                searchId: e
            })
        );
    },
    setSearchState: function (e, t) {
        null != e &&
            l.Z.dispatch({
                type: 'SEARCH_EDITOR_STATE_CHANGE',
                searchId: e,
                editorState: t
            });
    },
    clearSearchState: function (e) {
        l.Z.wait(() =>
            l.Z.dispatch({
                type: 'SEARCH_EDITOR_STATE_CLEAR',
                searchId: e
            })
        );
    },
    updateAutocompleteQuery: function (e, t, n) {
        l.Z.dispatch({
            type: 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE',
            searchContext: e,
            tokens: t,
            cursorScope: n
        });
    }
};
