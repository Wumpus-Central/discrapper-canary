n.d(t, {
    Nz: function () {
        return d;
    },
    QQ: function () {
        return _;
    },
    QY: function () {
        return I;
    },
    Vj: function () {
        return c;
    },
    j8: function () {
        return g;
    },
    jn: function () {
        return m;
    },
    m$: function () {
        return u;
    },
    oO: function () {
        return h;
    },
    qt: function () {
        return E;
    },
    u$: function () {
        return C;
    },
    yC: function () {
        return s;
    }
}),
    n(724458);
var i = n(570140),
    r = n(367907),
    l = n(768119),
    a = n(405656),
    o = n(981631);
function s(e, t, n, s) {
    (0, a.jW)(t, e), s && (t.search_everywhere = !0);
    let c = Object.keys(t);
    r.ZP.trackWithMetadata(o.rMx.SEARCH_STARTED, {
        search_type: l.Z.getSearchType(),
        prev_search_id: l.Z.getAnalyticsId(e),
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
            searchEverywhere: s
        });
}
function c(e) {
    return 'relevance' === e.sort_by ? o.QIO.MOST_RELEVANT : 'asc' === e.sort_order ? o.QIO.OLDEST : o.QIO.NEWEST;
}
function d(e, t) {
    let n = l.Z.getQuery(e),
        i = (function (e) {
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
        })(t);
    return s(e, {
        ...n,
        ...i,
        offset: 0
    });
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.vpv;
    return f(e, t);
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.vpv;
    return f(e, -t);
}
function h(e, t) {
    return p(e, t * o.vpv);
}
function f(e, t) {
    let n = l.Z.getOffset(e);
    return p(e, n + t);
}
function p(e, t) {
    let n = l.Z.getQuery(e),
        i = l.Z.getTotalResults(e);
    if (!(t < 0) && !(t > i))
        return s(e, {
            ...n,
            offset: t
        });
}
function _(e) {
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
function E(e) {
    r.ZP.trackWithMetadata(o.rMx.SEARCH_CLOSED, { search_id: l.Z.getAnalyticsId(e) }),
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
function I(e, t) {
    i.Z.dispatch({
        type: 'SEARCH_SET_SHOW_BLOCKED_RESULTS',
        searchId: e,
        showBlocked: t
    });
}
