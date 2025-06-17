n.d(t, {
    I1: () => y,
    IZ: () => x,
    Qb: () => E,
    Yc: () => j,
    bo: () => C,
    cy: () => v,
    hM: () => g,
    sL: () => _,
    tI: () => O,
    zW: () => b
}),
    n(781311);
var r = n(603263),
    i = n(367907),
    l = n(710845),
    a = n(466863),
    o = n(768119),
    s = n(626135),
    c = n(405656),
    u = n(981631),
    d = n(862825);
function p(e, t) {
    let n = (function (e) {
        let t = null != e ? (0, o.g)(e) : null;
        return t === u.aib.DMS
            ? { type: u.aib.DMS }
            : t === u.aib.FAVORITES
              ? { type: u.aib.FAVORITES }
              : t === u.aib.GUILD
                ? {
                      type: u.aib.GUILD,
                      guildId: e
                  }
                : t === u.aib.CHANNEL
                  ? {
                        type: u.aib.CHANNEL,
                        channelId: e
                    }
                  : null;
    })(e);
    return null != n ? t(n) : null;
}
function m(e) {
    return p(e, (e) => a.Z.getSessionId(e));
}
function f(e) {
    var t, n;
    return null != (n = null == e || null == (t = e.trim()) ? void 0 : t.length) ? n : 0;
}
function h(e) {
    var t, n, r;
    return null != (r = null == e || null == (n = e.content) || null == (t = n.trim()) ? void 0 : t.length) ? r : 0;
}
function g(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, prevSearchAnalyticsId: l, isError: a, limit: o, offset: s, page: c, totalResults: d, pageResults: p, isIndexing: g, pageNumMessages: _, pageNumLinks: b, pageNumEmbeds: E, pageNumAttachments: y, searchQueryString: x, searchQuery: v } = e;
    i.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_VIEWED, {
        search_type: t,
        search_id: r,
        prev_search_id: l,
        search_session_id: m(n),
        is_error: a,
        limit: o,
        offset: s,
        page: c,
        total_results: d,
        page_results: p,
        is_indexing: g,
        page_num_messages: _,
        page_num_links: b,
        page_num_embeds: E,
        page_num_attach: y,
        search_query_length: f(x),
        search_query_content_length: h(v)
    });
}
function _(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, guildId: i, channelId: l, pageResults: a, totalResults: o, page: c, limit: d, offset: p, index: g, searchQueryString: _, searchQuery: b } = e;
    s.default.track(u.rMx.SEARCH_RESULT_SELECTED, {
        search_type: t,
        search_id: r,
        search_session_id: m(n),
        guild_id: i,
        channel_id: l,
        page_results: a,
        total_results: o,
        page: c,
        limit: d,
        offset: p,
        index_num: g,
        search_query_length: f(_),
        search_query_content_length: h(b)
    });
}
function b(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, mode: l } = e;
    i.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: r,
        search_session_id: m(n),
        search_type: t,
        new_sort_type: l
    });
}
function E(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, searchQueryString: l, searchQuery: a } = e;
    i.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_EMPTY, {
        search_id: r,
        search_session_id: m(n),
        search_type: t,
        search_query_length: f(l),
        search_query_content_length: h(a)
    });
}
function y(e) {
    let { searchType: t, searchId: n } = e;
    p(n, (e) => {
        a.Z.initialize(e, d.sR.MESSAGES);
    }),
        i.ZP.trackWithMetadata(u.rMx.SEARCH_OPENED, {
            search_id: null != n ? o.Z.getAnalyticsId(n) : null,
            search_session_id: m(n),
            search_type: t
        });
}
function x(e) {
    let { searchId: t, searchType: n } = e;
    i.ZP.trackWithMetadata(u.rMx.SEARCH_CLOSED, {
        search_id: null != t ? o.Z.getAnalyticsId(t) : null,
        search_session_id: m(t),
        search_type: n
    }),
        p(t, (e) => {
            a.Z.terminate(e);
        });
}
function v(e) {
    let { searchType: t, searchId: n } = e;
    i.ZP.trackWithMetadata(u.rMx.SEARCH_INPUT_CLEARED, {
        search_id: null != n ? o.Z.getAnalyticsId(n) : null,
        search_session_id: m(n),
        search_type: t
    });
}
function O(e) {
    let { searchType: t, searchId: n, query: l, queryString: a } = e,
        s = Object.keys(l),
        d = s.reduce((e, t) => {
            let n = l[t];
            return (e[t] = Array.isArray(n) ? n.length : 1), e;
        }, {}),
        p = null != a ? (0, c.kG)(a) : [],
        g = 0,
        _ = 0,
        b = 0,
        E = 0,
        y = 0,
        x = 0,
        v = 0,
        O = 0;
    p.forEach((e) => {
        e.type === u.dCx.ANSWER_IN ? g++ : e.type === u.dCx.ANSWER_USERNAME_FROM ? _++ : e.type === u.dCx.ANSWER_USERNAME_MENTIONS ? b++ : e.type === u.dCx.ANSWER_HAS ? E++ : e.type === u.dCx.ANSWER_BEFORE ? y++ : e.type === u.dCx.ANSWER_ON ? x++ : e.type === u.dCx.ANSWER_AFTER ? v++ : e.type === u.dCx.ANSWER_PINNED && O++;
    }),
        i.ZP.trackWithMetadata(u.rMx.MESSAGES_SEARCH_STARTED, {
            search_id: null != n ? o.Z.getAnalyticsId(n) : null,
            search_session_id: m(n),
            search_type: t,
            search_query_length: f(a),
            search_query_content_length: h(l),
            sort_type: (0, r.Vj)(l),
            filter_in_count: g,
            filter_from_count: _,
            filter_mentions_count: b,
            filter_has_count: E,
            filter_before_count: y,
            filter_during_count: x,
            filter_after_count: v,
            filter_pinned_count: O
        }),
        i.ZP.trackWithMetadata(u.rMx.SEARCH_STARTED, {
            search_id: null != n ? o.Z.getAnalyticsId(n) : null,
            search_session_id: m(n),
            search_type: t,
            num_modifiers: s.length,
            modifiers: d
        });
}
function j(e) {
    let { rating: t, searchId: n, searchType: r } = e;
    i.ZP.trackWithMetadata(u.rMx.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: null != n ? o.Z.getAnalyticsId(n) : null,
        search_type: r,
        search_session_id: m(n)
    });
}
function C(e) {
    let { searchId: t, searchType: n } = e;
    i.ZP.trackWithMetadata(u.rMx.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: null != t ? o.Z.getAnalyticsId(t) : null,
        search_type: n,
        search_session_id: m(t)
    });
}
new l.Z('SearchTracking');
