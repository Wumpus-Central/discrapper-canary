n.d(t, {
    Gn: () => N,
    Nz: () => p,
    QQ: () => O,
    QY: () => f,
    Vj: () => I,
    Vs: () => R,
    h7: () => m,
    j8: () => g,
    oO: () => C,
    qt: () => T,
    u$: () => S,
    yC: () => h,
    zH: () => E
});
var i = n(570140),
    r = n(861262),
    l = n(187462),
    o = n(952537),
    s = n(592125),
    a = n(768119),
    c = n(405656),
    d = n(981631);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t, n, a) {
    var u;
    ((0, c.jW)(t, e), a && (t.search_everywhere = !0));
    let _ = (0, r.g)(e),
        h = l.Z.create({
            id: e,
            searchType: _,
            searchQuery: t
        }),
        E = e === d.I_8 ? (null == (u = s.Z.getChannel(e)) ? void 0 : u.guild_id) : _ === d.aib.GUILD ? e : null;
    (i.Z.dispatch({
        type: 'SEARCH_START',
        query: t,
        searchId: e,
        queryString: n
    }),
        i.Z.dispatch({
            type: 'SEARCH_ADD_HISTORY',
            searchId: e,
            query: n
        }),
        h.fetch(
            (t) => {
                var n, r;
                i.Z.dispatch({
                    type: 'SEARCH_FINISH',
                    searchId: e,
                    guildId: E,
                    analyticsId: t.body.analytics_id,
                    totalResults: t.body.total_results,
                    messages: t.body.messages,
                    threads: null != (n = t.body.threads) ? n : [],
                    members: (null != (r = t.body.members) ? r : []).map((e) => (0, o.Z)(e)),
                    hasError: !1,
                    doingHistoricalIndex: t.body.doing_deep_historical_index,
                    documentsIndexed: t.body.documents_indexed
                });
            },
            () => {
                i.Z.dispatch({
                    type: 'SEARCH_INDEXING',
                    searchId: e
                });
            },
            () => {
                i.Z.dispatch({
                    type: 'SEARCH_FINISH',
                    searchId: e,
                    guildId: E,
                    messages: [],
                    threads: [],
                    members: [],
                    totalResults: 0,
                    analyticsId: null,
                    hasError: !0,
                    doingHistoricalIndex: !1,
                    documentsIndexed: 0
                });
            }
        ));
}
function E(e) {
    switch (e) {
        case d.QIO.MOST_RELEVANT:
            return {
                sort_by: 'relevance',
                sort_order: 'desc'
            };
        case d.QIO.OLDEST:
            return {
                sort_by: 'timestamp',
                sort_order: 'asc'
            };
        case d.QIO.NEWEST:
        default:
            return {
                sort_by: 'timestamp',
                sort_order: 'desc'
            };
    }
}
function I(e) {
    return null == e.sort_by || null == e.sort_order ? d.QIO.NEWEST : 'relevance' === e.sort_by ? d.QIO.MOST_RELEVANT : 'asc' === e.sort_order ? d.QIO.OLDEST : d.QIO.NEWEST;
}
function p(e, t, n) {
    let i = a.Z.getQuery(e);
    return h(e, _(u({}, i, E(t)), { offset: 0 }), n);
}
function C(e, t, n) {
    var i = e,
        r = t * d.vpv,
        l = n;
    let o = a.Z.getQuery(i),
        s = a.Z.getTotalResults(i);
    return r < 0 || r > s ? void 0 : h(i, _(u({}, o), { offset: r }), l);
}
function O(e) {
    i.Z.dispatch({
        type: 'SEARCH_CLEAR_HISTORY',
        searchId: e
    });
}
function g(e, t) {
    null != e &&
        i.Z.dispatch({
            type: 'SEARCH_EDITOR_STATE_CHANGE',
            searchId: e,
            editorState: t
        });
}
function T(e) {
    i.Z.wait(() =>
        i.Z.dispatch({
            type: 'SEARCH_EDITOR_STATE_CLEAR',
            searchId: e
        })
    );
}
function S(e, t, n) {
    null != e &&
        i.Z.dispatch({
            type: 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE',
            searchId: e,
            tokens: t,
            cursorScope: n
        });
}
function f(e, t) {
    i.Z.dispatch({
        type: 'SEARCH_SET_SHOW_BLOCKED_RESULTS',
        searchId: e,
        showBlocked: t
    });
}
function N(e) {
    i.Z.dispatch({
        type: 'SEARCH_SET_SHOW_NO_RESULTS_ALT',
        searchId: e
    });
}
function m(e, t) {
    i.Z.dispatch({
        type: 'SEARCH_ADD_HISTORY',
        searchId: e,
        query: t
    });
}
function R(e, t, n, r) {
    i.Z.dispatch({
        type: 'SEARCH_RESULTS_QUERY_UPDATE',
        searchId: e,
        queryString: t,
        query: n,
        offset: r
    });
}
