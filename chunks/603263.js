n.d(t, {
    Nz: () => d,
    QQ: () => g,
    QY: () => v,
    Vj: () => c,
    j8: () => f,
    jn: () => m,
    m$: () => u,
    oO: () => _,
    qt: () => x,
    u$: () => C,
    yC: () => o
}),
    n(724458);
var i = n(570140),
    l = n(367907),
    a = n(768119),
    r = n(405656),
    s = n(981631);
function o(e, t, n, o) {
    (0, r.jW)(t, e), o && (t.search_everywhere = !0);
    let c = Object.keys(t);
    l.ZP.trackWithMetadata(s.rMx.SEARCH_STARTED, {
        search_type: a.Z.getSearchType(),
        prev_search_id: a.Z.getAnalyticsId(e),
        num_modifiers: c.length,
        modifiers: c.reduce((e, n) => {
            let i = t[n];
            return (e[n] = Array.isArray(i) ? i.length : 1), e;
        }, {})
    }),
        i.Z.dispatch({
            type: 'SEARCH_START',
            query: t,
            searchId: e,
            queryString: n,
            searchEverywhere: o
        });
}
function c(e) {
    return 'relevance' === e.sort_by ? s.QIO.MOST_RELEVANT : 'asc' === e.sort_order ? s.QIO.OLDEST : s.QIO.NEWEST;
}
function d(e, t) {
    let n = a.Z.getQuery(e),
        i = (function (e) {
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
        })(t);
    return o(e, {
        ...n,
        ...i,
        offset: 0
    });
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.vpv;
    return h(e, t);
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.vpv;
    return h(e, -t);
}
function _(e, t) {
    return p(e, t * s.vpv);
}
function h(e, t) {
    let n = a.Z.getOffset(e);
    return p(e, n + t);
}
function p(e, t) {
    let n = a.Z.getQuery(e),
        i = a.Z.getTotalResults(e);
    if (!(t < 0) && !(t > i))
        return o(e, {
            ...n,
            offset: t
        });
}
function g(e) {
    i.Z.dispatch({
        type: 'SEARCH_CLEAR_HISTORY',
        searchId: e
    });
}
function f(e, t) {
    null != e &&
        i.Z.dispatch({
            type: 'SEARCH_EDITOR_STATE_CHANGE',
            searchId: e,
            editorState: t
        });
}
function x(e) {
    l.ZP.trackWithMetadata(s.rMx.SEARCH_CLOSED, { search_id: a.Z.getAnalyticsId(e) }),
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
function v(e, t) {
    i.Z.dispatch({
        type: 'SEARCH_SET_SHOW_BLOCKED_RESULTS',
        searchId: e,
        showBlocked: t
    });
}
