n.d(t, {
    Nz: () => p,
    QQ: () => b,
    QY: () => E,
    Vj: () => d,
    j8: () => x,
    jn: () => f,
    m$: () => m,
    oO: () => h,
    qt: () => y,
    u$: () => v,
    yC: () => u
});
var r = n(570140),
    i = n(652399),
    l = n(768119),
    a = n(405656),
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
function u(e, t, n, o) {
    (0, a.jW)(t, e),
        o && (t.search_everywhere = !0),
        (0, i.tI)({
            searchType: l.Z.getSearchType(),
            searchAnalyticsId: l.Z.getAnalyticsId(e),
            query: t
        }),
        r.Z.dispatch({
            type: 'SEARCH_START',
            query: t,
            searchId: e,
            queryString: n,
            searchEverywhere: o
        });
}
function d(e) {
    return 'relevance' === e.sort_by ? o.QIO.MOST_RELEVANT : 'asc' === e.sort_order ? o.QIO.OLDEST : o.QIO.NEWEST;
}
function p(e, t) {
    let n = l.Z.getQuery(e);
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
    let n = l.Z.getOffset(e);
    return _(e, n + t);
}
function _(e, t) {
    let n = l.Z.getQuery(e),
        r = l.Z.getTotalResults(e);
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
    r.Z.wait(() =>
        r.Z.dispatch({
            type: 'SEARCH_EDITOR_STATE_CLEAR',
            searchId: e
        })
    );
}
function v(e, t, n) {
    null != e &&
        r.Z.dispatch({
            type: 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE',
            searchId: e,
            tokens: t,
            cursorScope: n
        });
}
function E(e, t) {
    r.Z.dispatch({
        type: 'SEARCH_SET_SHOW_BLOCKED_RESULTS',
        searchId: e,
        showBlocked: t
    });
}
