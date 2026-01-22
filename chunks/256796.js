n.d(t, { A: () => E }), n(896048), n(733351);
var r = n(735438),
    i = n.n(r),
    a = n(73153),
    s = n(736130),
    o = n(594061),
    l = n(822382),
    c = n(23667),
    u = n(956467),
    d = n(652215);
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
function h(e, t) {
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
function m(e) {
    if (!Array.isArray(e.pinned)) return;
    let t = e.pinned.some((e) => !0 === e);
    e.pinned = t;
}
function g(e) {
    return e === d.YYv ? null : e;
}
let E = {
    fetchTabMessages: function (e) {
        let {
                searchContext: t,
                searchTabs: n,
                searchQueryString: r,
                pagination: o,
                trackExactTotalHits: c,
                getId: d,
                getLimit: f,
                onFetchStart: _,
                onFetchSuccess: h,
                searchMode: E,
            } = e,
            b = (0, l._o)(r),
            y = (0, l.Zf)(b);
        m(y);
        let O = p({}, y, (0, l.nm)(E)),
            A = (0, l.mt)(t);
        null != A && (0, l.L5)(O, A);
        let v = u.A.create({
            id: (0, l.bS)(t),
            searchContext: t,
            searchQuery: O,
            searchTabs: n,
            getLimit: f,
            pagination: o,
            trackExactTotalHits: c,
        });
        null == _ ||
            _({
                searchContext: t,
                searchQueryString: r,
                searchQuery: O,
            });
        let S = n.map((e) => d(e));
        return (
            a.h.dispatch({
                type: "SEARCH_MESSAGES_START",
                ids: S,
            }),
            v.fetch(
                (e) => {
                    let { body: n } = e,
                        r = Object.entries(n.tabs);
                    a.h.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: g(A),
                        data: r.map((e) => {
                            var t, r, a;
                            let [o, l] = e,
                                c = d(o),
                                u = l.cursor;
                            return {
                                id: c,
                                analyticsId: n.analytics_id,
                                totalResults: l.total_results,
                                cursor: null != u && i().isEmpty(u) ? null : u,
                                messages: l.messages,
                                channels: null != (t = l.channels) ? t : [],
                                threads: null != (r = l.threads) ? r : [],
                                members: (null != (a = l.members) ? a : []).map((e) => (0, s.A)(e)),
                                doingHistoricalIndex: n.doing_deep_historical_index,
                                documentsIndexed: n.documents_indexed,
                            };
                        }),
                    }),
                        null == h ||
                            h({
                                searchContext: t,
                                tabEntries: r,
                            });
                },
                () => {
                    a.h.dispatch({
                        type: "SEARCH_MESSAGES_INDEXING",
                        ids: S,
                    });
                },
                (e) => {
                    a.h.dispatch({
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
        let {
                searchContext: t,
                searchQueryString: n,
                pagination: r,
                searchMode: i,
                searchEverywhere: o,
                onFetchStart: u,
            } = e,
            d = (0, l._o)(n),
            f = h(p({}, (0, l.Zf)(d), (0, l.nm)(i)), { offset: r.offset }),
            _ = (0, l.mt)(t);
        null != _ && (0, l.L5)(f, _), o && (f.search_everywhere = !0);
        let m = (0, l.bS)(t),
            E = c.A.create({
                id: m,
                searchType: t.type,
                searchQuery: f,
            });
        null == u ||
            u({
                searchContext: t,
                searchQueryString: n,
                searchQuery: f,
            }),
            a.h.dispatch({
                type: "SEARCH_MESSAGES_START",
                ids: [m],
            }),
            E.fetch(
                (e) => {
                    var t, n, r;
                    a.h.dispatch({
                        type: "SEARCH_MESSAGES_SUCCESS",
                        guildId: g(_),
                        data: [
                            {
                                id: m,
                                analyticsId: e.body.analytics_id,
                                totalResults: e.body.total_results,
                                messages: e.body.messages,
                                threads: null != (t = e.body.threads) ? t : [],
                                members: (null != (n = e.body.members) ? n : []).map((e) => (0, s.A)(e)),
                                doingHistoricalIndex: e.body.doing_deep_historical_index,
                                documentsIndexed: e.body.documents_indexed,
                                channels: null != (r = e.body.channels) ? r : [],
                                cursor: null,
                            },
                        ],
                    });
                },
                () => {
                    a.h.dispatch({
                        type: "SEARCH_MESSAGES_INDEXING",
                        ids: [m],
                    });
                },
                (e) => {
                    a.h.dispatch({
                        type: "SEARCH_MESSAGES_FAILURE",
                        ids: [m],
                        error: e,
                    });
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
        a.h.dispatch({
            type: "SEARCH_MESSAGES_CLEAR",
            id: e,
        });
    },
    initializeAutocomplete: function (e) {
        a.h.dispatch({
            type: "SEARCH_AUTOCOMPLETE_INITIALIZE",
            searchContext: e,
        });
    },
    updateAutocompleteQuery: function (e) {
        let { searchContext: t, tokens: n, queryString: r, cursorScope: i } = e;
        r.trim().length > 0 && o.bW.loadIfNecessary(),
            a.h.dispatch({
                type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
                searchContext: t,
                tokens: n,
                cursorScope: i,
            });
    },
    markSearchTokensRefreshed: function () {
        a.h.dispatch({ type: "SEARCH_TOKENS_REFRESHED" });
    },
};
