n.d(t, {
    Gn: () => g,
    Nz: () => _,
    QQ: () => E,
    QY: () => O,
    Vj: () => d,
    Vs: () => S,
    h7: () => T,
    j8: () => I,
    oO: () => h,
    qt: () => p,
    u$: () => C,
    yC: () => c,
    zH: () => u
});
var i = n(570140),
    r = n(768119),
    l = n(405656),
    o = n(981631);
function s(e) {
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
function a(e, t) {
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
function c(e, t, n, r) {
    ((0, l.jW)(t, e),
        r && (t.search_everywhere = !0),
        i.Z.dispatch({
            type: 'SEARCH_START',
            query: t,
            searchId: e,
            queryString: n,
            searchEverywhere: r
        }));
}
function u(e) {
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
}
function d(e) {
    return null == e.sort_by || null == e.sort_order ? o.QIO.NEWEST : 'relevance' === e.sort_by ? o.QIO.MOST_RELEVANT : 'asc' === e.sort_order ? o.QIO.OLDEST : o.QIO.NEWEST;
}
function _(e, t, n) {
    let i = r.Z.getQuery(e);
    return c(e, a(s({}, i, u(t)), { offset: 0 }), n);
}
function h(e, t, n) {
    var i = e,
        l = t * o.vpv,
        u = n;
    let d = r.Z.getQuery(i),
        _ = r.Z.getTotalResults(i);
    return l < 0 || l > _ ? void 0 : c(i, a(s({}, d), { offset: l }), u);
}
function E(e) {
    i.Z.dispatch({
        type: 'SEARCH_CLEAR_HISTORY',
        searchId: e
    });
}
function I(e, t) {
    null != e &&
        i.Z.dispatch({
            type: 'SEARCH_EDITOR_STATE_CHANGE',
            searchId: e,
            editorState: t
        });
}
function p(e) {
    i.Z.wait(() =>
        i.Z.dispatch({
            type: 'SEARCH_EDITOR_STATE_CLEAR',
            searchId: e
        })
    );
}
function C(e, t, n) {
    null != e &&
        i.Z.dispatch({
            type: 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE',
            searchId: e,
            tokens: t,
            cursorScope: n
        });
}
function O(e, t) {
    i.Z.dispatch({
        type: 'SEARCH_SET_SHOW_BLOCKED_RESULTS',
        searchId: e,
        showBlocked: t
    });
}
function g(e) {
    i.Z.dispatch({
        type: 'SEARCH_SET_SHOW_NO_RESULTS_ALT',
        searchId: e
    });
}
function T(e, t) {
    i.Z.dispatch({
        type: 'SEARCH_ADD_HISTORY',
        searchId: e,
        query: t
    });
}
function S(e, t, n, r) {
    i.Z.dispatch({
        type: 'SEARCH_RESULTS_QUERY_UPDATE',
        searchId: e,
        queryString: t,
        query: n,
        offset: r
    });
}
