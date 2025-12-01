n.d(t, { Z: () => E }), n(388685), n(781311);
var r = n(392711),
    i = n.n(r),
    a = n(570140),
    o = n(952537),
    s = n(675478),
    l = n(607802),
    c = n(187462),
    u = n(532496),
    d = n(981631);
function f(e, t, n) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    if (!Array.isArray(e.pinned)) return;
    let t = e.pinned.some((e) => !0 === e);
    e.pinned = t;
}
function g(e) {
    return e === d.I_8 ? null : e;
}
let E = {
    fetchTabMessages: function (e) {
        let {
                searchContext: t,
                searchTabs: n,
                searchQueryString: r,
                pagination: s,
                trackExactTotalHits: c,
                getId: d,
                getLimit: f,
                onFetchStart: _,
                onFetchSuccess: m,
                searchMode: E,
            } = e,
            b = (0, l.kG)(r),
            y = (0, l.$G)(b);
        h(y);
        let O = p({}, y, (0, l.zH)(E)),
            v = (0, l.s5)(t);
        null != v && (0, l.jW)(O, v);
        let S = u.Z.create({
            id: (0, l.Tm)(t),
            searchContext: t,
            searchQuery: O,
            searchTabs: n,
            getLimit: f,
            pagination: s,
            trackExactTotalHits: c,
        });
        null == _ ||
            _({
                searchContext: t,
                searchQueryString: r,
                searchQuery: O,
            });
        let I = n.map((e) => d(e));
        return (
            a.Z.dispatch({
                type: "SEARCH_MESSAGES_START",
                ids: I,
            }),
            S.fetch(
                (e) => {
                    let { body: n } = e,
                        r = Object.entries(n.tabs);
                    a.Z.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: g(v),
                        data: r.map((e) => {
                            var t, r, a;
                            let [s, l] = e,
                                c = d(s),
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
                                documentsIndexed: n.documents_indexed,
                            };
                        }),
                    }),
                        null == m ||
                            m({
                                searchContext: t,
                                tabEntries: r,
                            });
                },
                () => {
                    a.Z.dispatch({
                        type: "SEARCH_MESSAGES_INDEXING",
                        ids: I,
                    });
                },
                (e) => {
                    a.Z.dispatch({
                        type: "SEARCH_MESSAGES_FAILURE",
                        ids: I,
                        error: e,
                    });
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
                searchEverywhere: s,
                onFetchStart: u,
            } = e,
            d = (0, l.kG)(n),
            f = m(p({}, (0, l.$G)(d), (0, l.zH)(i)), { offset: r.offset }),
            _ = (0, l.s5)(t);
        null != _ && (0, l.jW)(f, _), s && (f.search_everywhere = !0);
        let h = (0, l.Tm)(t),
            E = c.Z.create({
                id: h,
                searchType: t.type,
                searchQuery: f,
            });
        null == u ||
            u({
                searchContext: t,
                searchQueryString: n,
                searchQuery: f,
            }),
            a.Z.dispatch({
                type: "SEARCH_MESSAGES_START",
                ids: [h],
            }),
            E.fetch(
                (e) => {
                    var t, n, r;
                    a.Z.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: g(_),
                        data: [
                            {
                                id: h,
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
                        ids: [h],
                    });
                },
                (e) => {
                    a.Z.dispatch({
                        type: "SEARCH_MESSAGES_FAILURE",
                        ids: [h],
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
    initializeAutocomplete: function (e) {
        a.Z.dispatch({
            type: "SEARCH_AUTOCOMPLETE_INITIALIZE",
            searchContext: e,
        });
    },
    updateAutocompleteQuery: function (e) {
        let { searchContext: t, tokens: n, queryString: r, cursorScope: i } = e;
        r.trim().length > 0 && s.DZ.loadIfNecessary(),
            a.Z.dispatch({
                type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
                searchContext: t,
                tokens: n,
                cursorScope: i,
            });
    },
    markSearchTokensRefreshed: function () {
        a.Z.dispatch({ type: "SEARCH_TOKENS_REFRESHED" });
    },
};
