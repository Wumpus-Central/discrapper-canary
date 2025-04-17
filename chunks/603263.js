n.d(t, {
    Nz: () => p,
    QQ: () => b,
    QY: () => v,
    Vj: () => d,
    j8: () => x,
    jn: () => f,
    m$: () => m,
    oO: () => h,
    qt: () => y,
    u$: () => E,
    yC: () => u
});
var r = n(570140),
    i = n(367907),
    a = n(768119),
    l = n(405656),
    o = n(981631);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e, t, n, s) {
    (0, l.jW)(t, e), s && (t.search_everywhere = !0);
    let c = Object.keys(t);
    i.ZP.trackWithMetadata(o.rMx.SEARCH_STARTED, {
        search_type: a.Z.getSearchType(),
        prev_search_id: a.Z.getAnalyticsId(e),
        num_modifiers: c.length,
        modifiers: c.reduce((e, n) => {
            let r = t[n];
            return (e[n] = Array.isArray(r) ? r.length : 1), e;
        }, {})
    }),
        r.Z.dispatch({
            type: 'SEARCH_START',
            query: t,
            searchId: e,
            queryString: n,
            searchEverywhere: s
        });
}
function d(e) {
    return 'relevance' === e.sort_by ? o.QIO.MOST_RELEVANT : 'asc' === e.sort_order ? o.QIO.OLDEST : o.QIO.NEWEST;
}
function p(e, t) {
    let n = a.Z.getQuery(e);
    return u(
        e,
        c(
            s(
                {},
                n,
                (function (e) {
                    switch (e) {
                        case o.QIO.MOST_RELEVANT:
                            return {
                                sort_by: 'relevance',
                                sort_order: 'desc'
                            };
                        case o.QIO.OLDEST:
                            return {
                                sort_by: 'timestamp',
                                sort_order: 'asc'
                            };
                        case o.QIO.NEWEST:
                        default:
                            return {
                                sort_by: 'timestamp',
                                sort_order: 'desc'
                            };
                    }
                })(t)
            ),
            { offset: 0 }
        )
    );
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.vpv;
    return g(e, t);
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.vpv;
    return g(e, -t);
}
function h(e, t) {
    return _(e, t * o.vpv);
}
function g(e, t) {
    let n = a.Z.getOffset(e);
    return _(e, n + t);
}
function _(e, t) {
    let n = a.Z.getQuery(e),
        r = a.Z.getTotalResults(e);
    if (!(t < 0) && !(t > r)) return u(e, c(s({}, n), { offset: t }));
}
function b(e) {
    r.Z.dispatch({
        type: 'SEARCH_CLEAR_HISTORY',
        searchId: e
    });
}
function x(e, t) {
    null != e &&
        r.Z.dispatch({
            type: 'SEARCH_EDITOR_STATE_CHANGE',
            searchId: e,
            editorState: t
        });
}
function y(e) {
    i.ZP.trackWithMetadata(o.rMx.SEARCH_CLOSED, { search_id: a.Z.getAnalyticsId(e) }),
        r.Z.wait(() =>
            r.Z.dispatch({
                type: 'SEARCH_EDITOR_STATE_CLEAR',
                searchId: e
            })
        );
}
function E(e, t, n) {
    null != e &&
        r.Z.dispatch({
            type: 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE',
            searchId: e,
            tokens: t,
            cursorScope: n
        });
}
function v(e, t) {
    r.Z.dispatch({
        type: 'SEARCH_SET_SHOW_BLOCKED_RESULTS',
        searchId: e,
        showBlocked: t
    });
}
