n.d(t, {
    Gn: () => g,
    QQ: () => h,
    QY: () => C,
    Vj: () => _,
    Vs: () => S,
    h7: () => O,
    j8: () => E,
    qt: () => I,
    u$: () => p,
    yC: () => d,
    zH: () => u
});
var i = n(570140),
    r = n(861262),
    l = n(187462),
    o = n(952537),
    s = n(592125),
    a = n(405656),
    c = n(981631);
function d(e) {
    var t;
    let { searchId: n, query: d, searchEverywhere: u } = e;
    ((0, a.jW)(d, n), u && (d.search_everywhere = !0));
    let _ = (0, r.g)(n),
        h = l.Z.create({
            id: n,
            searchType: _,
            searchQuery: d
        }),
        E = n === c.I_8 ? (null == (t = s.Z.getChannel(n)) ? void 0 : t.guild_id) : _ === c.aib.GUILD ? n : null;
    (i.Z.dispatch({
        type: 'SEARCH_MESSAGES_START',
        ids: [n]
    }),
        h.fetch(
            (e) => {
                var t, r, l, s, a, c;
                (i.Z.dispatch({
                    type: 'SEARCH_MESSAGES_SUCCESS',
                    guildId: E,
                    data: [
                        {
                            id: n,
                            analyticsId: e.body.analytics_id,
                            totalResults: e.body.total_results,
                            messages: e.body.messages,
                            threads: null != (t = e.body.threads) ? t : [],
                            members: (null != (r = e.body.members) ? r : []).map((e) => (0, o.Z)(e)),
                            doingHistoricalIndex: e.body.doing_deep_historical_index,
                            documentsIndexed: e.body.documents_indexed,
                            channels: null != (l = e.body.channels) ? l : [],
                            cursor: null
                        }
                    ]
                }),
                    i.Z.dispatch({
                        type: 'SEARCH_FINISH',
                        searchId: n,
                        guildId: E,
                        analyticsId: e.body.analytics_id,
                        totalResults: e.body.total_results,
                        messages: e.body.messages,
                        threads: null != (s = e.body.threads) ? s : [],
                        members: (null != (a = e.body.members) ? a : []).map((e) => (0, o.Z)(e)),
                        doingHistoricalIndex: e.body.doing_deep_historical_index,
                        documentsIndexed: e.body.documents_indexed,
                        channels: null != (c = e.body.channels) ? c : [],
                        hasError: !1
                    }));
            },
            () => {
                i.Z.dispatch({
                    type: 'SEARCH_MESSAGES_INDEXING',
                    ids: [n]
                });
            },
            (e) => {
                i.Z.dispatch({
                    type: 'SEARCH_MESSAGES_FAILURE',
                    ids: [n],
                    error: e
                });
            }
        ));
}
function u(e) {
    switch (e) {
        case c.QIO.MOST_RELEVANT:
            return {
                sort_by: 'relevance',
                sort_order: 'desc'
            };
        case c.QIO.OLDEST:
            return {
                sort_by: 'timestamp',
                sort_order: 'asc'
            };
        case c.QIO.NEWEST:
        default:
            return {
                sort_by: 'timestamp',
                sort_order: 'desc'
            };
    }
}
function _(e) {
    return null == e.sort_by || null == e.sort_order ? c.QIO.NEWEST : 'relevance' === e.sort_by ? c.QIO.MOST_RELEVANT : 'asc' === e.sort_order ? c.QIO.OLDEST : c.QIO.NEWEST;
}
function h(e) {
    i.Z.dispatch({
        type: 'SEARCH_CLEAR_HISTORY',
        searchId: e
    });
}
function E(e, t) {
    null != e &&
        i.Z.dispatch({
            type: 'SEARCH_EDITOR_STATE_CHANGE',
            searchId: e,
            editorState: t
        });
}
function I(e) {
    i.Z.wait(() =>
        i.Z.dispatch({
            type: 'SEARCH_EDITOR_STATE_CLEAR',
            searchId: e
        })
    );
}
function p(e, t, n) {
    null != e &&
        i.Z.dispatch({
            type: 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE',
            searchId: e,
            tokens: t,
            cursorScope: n
        });
}
function C(e, t) {
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
function O(e, t) {
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
