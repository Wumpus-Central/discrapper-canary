(n.d(t, { Z: () => f }), n(388685), n(415506));
var r = n(392711),
    i = n.n(r),
    l = n(570140),
    a = n(952537),
    o = n(592125),
    s = n(607802),
    c = n(861262),
    u = n(187462),
    d = n(532496),
    p = n(981631);
function m() {
    return !1;
}
let f = {
    fetchTabMessages: function (e) {
        let { searchContext: t, searchTabs: n, searchQueryString: r, pagination: o, trackExactTotalHits: c, getId: u, getLimit: m, onFetchStart: f, onFetchSuccess: g, searchMode: _ = p.QIO.NEWEST } = e,
            h = (0, s.kG)(r),
            b = (0, s.$G)(h);
        !(function (e) {
            if (!Array.isArray(e.pinned)) return;
            let t = e.pinned.some((e) => !0 === e);
            e.pinned = t;
        })(b);
        let E = (function (e) {
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
            })({}, b, (0, s.zH)(_)),
            C = (0, s.s5)(t);
        null != C && (0, s.jW)(E, C);
        let x = d.Z.create({
            id: (0, s.Tm)(t),
            searchContext: t,
            searchQuery: E,
            searchTabs: n,
            getLimit: m,
            pagination: o,
            trackExactTotalHits: c
        });
        null == f ||
            f({
                searchContext: t,
                searchQueryString: r,
                searchQuery: E
            });
        let v = n.map((e) => u(e));
        return (
            l.Z.dispatch({
                type: 'SEARCH_MESSAGES_START',
                ids: v
            }),
            x.fetch(
                (e) => {
                    let { body: n } = e,
                        r = Object.entries(n.tabs);
                    (l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_SUCCESS',
                        guildId: C,
                        data: r.map((e) => {
                            var t, r, l;
                            let [o, s] = e,
                                c = u(o),
                                d = s.cursor;
                            return {
                                id: c,
                                analyticsId: n.analytics_id,
                                totalResults: s.total_results,
                                cursor: null != d && i().isEmpty(d) ? null : d,
                                messages: s.messages,
                                channels: null != (t = s.channels) ? t : [],
                                threads: null != (r = s.threads) ? r : [],
                                members: (null != (l = s.members) ? l : []).map((e) => (0, a.Z)(e)),
                                doingHistoricalIndex: n.doing_deep_historical_index,
                                documentsIndexed: n.documents_indexed
                            };
                        })
                    }),
                        r.forEach((e) => {
                            var r, i;
                            let [o, c] = e;
                            l.Z.dispatch({
                                type: 'SEARCH_FINISH',
                                searchId: (0, s.WJ)(t),
                                guildId: (0, s.s5)(t),
                                analyticsId: n.analytics_id,
                                totalResults: c.total_results,
                                channels: c.channels,
                                messages: c.messages,
                                threads: null != (r = c.threads) ? r : [],
                                members: (null != (i = c.members) ? i : []).map((e) => (0, a.Z)(e)),
                                hasError: !1,
                                doingHistoricalIndex: n.doing_deep_historical_index,
                                documentsIndexed: n.documents_indexed
                            });
                        }),
                        null == g ||
                            g({
                                searchContext: t,
                                tabEntries: r
                            }));
                },
                () => {
                    l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_INDEXING',
                        ids: v
                    });
                },
                (e) => {
                    l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_FAILURE',
                        ids: v,
                        error: e
                    });
                }
            ),
            !0
        );
    },
    fetchMessages: function (e) {
        var t;
        let { searchId: n, query: r, searchEverywhere: i } = e;
        ((0, s.jW)(r, n), i && (r.search_everywhere = !0));
        let d = (0, c.g)(n),
            m = u.Z.create({
                id: n,
                searchType: d,
                searchQuery: r
            }),
            f = n === p.I_8 ? (null == (t = o.Z.getChannel(n)) ? void 0 : t.guild_id) : d === p.aib.GUILD ? n : null;
        (l.Z.dispatch({
            type: 'SEARCH_MESSAGES_START',
            ids: [n]
        }),
            m.fetch(
                (e) => {
                    var t, r, i, o, s, c;
                    (l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_SUCCESS',
                        guildId: f,
                        data: [
                            {
                                id: n,
                                analyticsId: e.body.analytics_id,
                                totalResults: e.body.total_results,
                                messages: e.body.messages,
                                threads: null != (t = e.body.threads) ? t : [],
                                members: (null != (r = e.body.members) ? r : []).map((e) => (0, a.Z)(e)),
                                doingHistoricalIndex: e.body.doing_deep_historical_index,
                                documentsIndexed: e.body.documents_indexed,
                                channels: null != (i = e.body.channels) ? i : [],
                                cursor: null
                            }
                        ]
                    }),
                        l.Z.dispatch({
                            type: 'SEARCH_FINISH',
                            searchId: n,
                            guildId: f,
                            analyticsId: e.body.analytics_id,
                            totalResults: e.body.total_results,
                            messages: e.body.messages,
                            threads: null != (o = e.body.threads) ? o : [],
                            members: (null != (s = e.body.members) ? s : []).map((e) => (0, a.Z)(e)),
                            doingHistoricalIndex: e.body.doing_deep_historical_index,
                            documentsIndexed: e.body.documents_indexed,
                            channels: null != (c = e.body.channels) ? c : [],
                            hasError: !1
                        }));
                },
                () => {
                    l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_INDEXING',
                        ids: [n]
                    });
                },
                (e) => {
                    l.Z.dispatch({
                        type: 'SEARCH_MESSAGES_FAILURE',
                        ids: [n],
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
        let t = (0, s.WJ)(e);
        l.Z.dispatch({
            type: 'SEARCH_SCREEN_OPEN',
            searchId: t
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
        null != e &&
            l.Z.dispatch({
                type: 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE',
                searchId: e,
                tokens: t,
                cursorScope: n
            });
    }
};
