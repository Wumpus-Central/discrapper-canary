n.d(t, {
    Gn: () => x,
    Nz: () => f,
    QQ: () => g,
    QY: () => y,
    Vj: () => m,
    Vs: () => v,
    h7: () => C,
    j8: () => h,
    oO: () => _,
    qt: () => b,
    u$: () => E,
    yC: () => d,
    zH: () => p
});
var r = n(570140),
    i = n(652399),
    l = n(861262),
    a = n(768119),
    o = n(405656),
    s = n(981631);
function c(e) {
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
}
function u(e, t) {
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
function d(e, t, n, a) {
    ((0, o.jW)(t, e),
        a && (t.search_everywhere = !0),
        (0, i.tI)({
            searchType: (0, l.g)(e),
            searchId: e,
            query: t,
            queryString: n
        }),
        r.Z.dispatch({
            type: 'SEARCH_START',
            query: t,
            searchId: e,
            queryString: n,
            searchEverywhere: a
        }));
}
function p(e) {
    switch (e) {
        case s.QIO.MOST_RELEVANT:
            return {
                sort_by: 'relevance',
                sort_order: 'desc'
            };
        case s.QIO.OLDEST:
            return {
                sort_by: 'timestamp',
                sort_order: 'asc'
            };
        case s.QIO.NEWEST:
        default:
            return {
                sort_by: 'timestamp',
                sort_order: 'desc'
            };
    }
}
function m(e) {
    return null == e.sort_by || null == e.sort_order ? s.QIO.NEWEST : 'relevance' === e.sort_by ? s.QIO.MOST_RELEVANT : 'asc' === e.sort_order ? s.QIO.OLDEST : s.QIO.NEWEST;
}
function f(e, t, n) {
    let r = a.Z.getQuery(e);
    return d(e, u(c({}, r, p(t)), { offset: 0 }), n);
}
function _(e, t, n) {
    var r = e,
        i = t * s.vpv,
        l = n;
    let o = a.Z.getQuery(r),
        p = a.Z.getTotalResults(r);
    return i < 0 || i > p ? void 0 : d(r, u(c({}, o), { offset: i }), l);
}
function g(e) {
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
function b(e) {
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
function y(e, t) {
    r.Z.dispatch({
        type: 'SEARCH_SET_SHOW_BLOCKED_RESULTS',
        searchId: e,
        showBlocked: t
    });
}
function x(e) {
    r.Z.dispatch({
        type: 'SEARCH_SET_SHOW_NO_RESULTS_ALT',
        searchId: e
    });
}
function C(e, t) {
    r.Z.dispatch({
        type: 'SEARCH_ADD_HISTORY',
        searchId: e,
        query: t
    });
}
function v(e, t, n) {
    r.Z.dispatch({
        type: 'SEARCH_RESULTS_QUERY_UPDATE',
        searchId: e,
        queryString: t,
        query: n
    });
}
