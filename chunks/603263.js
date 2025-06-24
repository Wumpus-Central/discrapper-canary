n.d(t, {
    Nz: () => p,
    QQ: () => f,
    QY: () => b,
    Vj: () => d,
    Vs: () => x,
    j8: () => h,
    oO: () => m,
    qt: () => g,
    u$: () => _,
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
            searchType: l.Z.getSearchType(e),
            searchId: e,
            query: t,
            queryString: n
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
    return null == e.sort_by || null == e.sort_order ? o.QIO.NEWEST : 'relevance' === e.sort_by ? o.QIO.MOST_RELEVANT : 'asc' === e.sort_order ? o.QIO.OLDEST : o.QIO.NEWEST;
}
function p(e, t, n) {
    let r = l.Z.getQuery(e);
    return u(
        e,
        c(
            s(
                {},
                r,
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
        ),
        n
    );
}
function m(e, t, n) {
    var r = e,
        i = t * o.vpv,
        a = n;
    let d = l.Z.getQuery(r),
        p = l.Z.getTotalResults(r);
    return i < 0 || i > p ? void 0 : u(r, c(s({}, d), { offset: i }), a);
}
function f(e) {
    r.Z.dispatch({
        type: 'SEARCH_CLEAR_HISTORY',
        searchId: e
    });
}
function h(e, t) {
    null != e &&
        r.Z.dispatch({
            type: 'SEARCH_EDITOR_STATE_CHANGE',
            searchId: e,
            editorState: t
        });
}
function g(e) {
    r.Z.wait(() =>
        r.Z.dispatch({
            type: 'SEARCH_EDITOR_STATE_CLEAR',
            searchId: e
        })
    );
}
function _(e, t, n) {
    null != e &&
        r.Z.dispatch({
            type: 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE',
            searchId: e,
            tokens: t,
            cursorScope: n
        });
}
function b(e, t) {
    r.Z.dispatch({
        type: 'SEARCH_SET_SHOW_BLOCKED_RESULTS',
        searchId: e,
        showBlocked: t
    });
}
function x(e, t, n) {
    r.Z.dispatch({
        type: 'SEARCH_RESULTS_QUERY_UPDATE',
        searchId: e,
        queryString: t,
        query: n
    });
}
