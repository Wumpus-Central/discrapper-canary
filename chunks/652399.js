n.d(t, {
    I1: () => b,
    IZ: () => E,
    Qb: () => _,
    cy: () => y,
    hM: () => f,
    sL: () => h,
    tI: () => x,
    zW: () => g
});
var r = n(603263),
    i = n(367907),
    l = n(710845),
    a = n(654427),
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
    let { searchType: t, searchId: n, searchAnalyticsId: r, prevSearchAnalyticsId: l, isError: a, limit: o, offset: s, page: c, totalResults: d, pageResults: p, isIndexing: f, pageNumMessages: h, pageNumLinks: g, pageNumEmbeds: _, pageNumAttachments: b } = e;
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
        is_indexing: f,
        page_num_messages: h,
        page_num_links: g,
        page_num_embeds: _,
        page_num_attach: b
    });
}
function h(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, guildId: i, channelId: l, pageResults: a, totalResults: o, page: c, limit: d, offset: p, index: f } = e;
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
        index_num: f
    });
}
function g(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, mode: l } = e;
    i.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: r,
        search_session_id: m(n),
        search_type: t,
        new_sort_type: l
    });
}
function _(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r } = e;
    i.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_EMPTY, {
        search_id: r,
        search_session_id: m(n),
        search_type: t
    });
}
function b(e) {
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
function E(e) {
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
function y(e) {
    let { searchType: t, searchId: n } = e;
    i.ZP.trackWithMetadata(u.rMx.SEARCH_INPUT_CLEARED, {
        search_id: null != n ? o.Z.getAnalyticsId(n) : null,
        search_session_id: m(n),
        search_type: t
    });
}
function x(e) {
    var t, n;
    let { searchType: l, searchId: a, query: s, queryString: d } = e,
        p = Object.keys(s),
        f = p.reduce((e, t) => {
            let n = s[t];
            return (e[t] = Array.isArray(n) ? n.length : 1), e;
        }, {}),
        h = null != d ? (0, c.kG)(d) : [],
        g = 0,
        _ = 0,
        b = 0,
        E = 0,
        y = 0,
        x = 0,
        v = 0,
        O = 0;
    h.forEach((e) => {
        e.type === u.dCx.ANSWER_IN ? g++ : e.type === u.dCx.ANSWER_USERNAME_FROM ? _++ : e.type === u.dCx.ANSWER_USERNAME_MENTIONS ? b++ : e.type === u.dCx.ANSWER_HAS ? E++ : e.type === u.dCx.ANSWER_BEFORE ? y++ : e.type === u.dCx.ANSWER_ON ? x++ : e.type === u.dCx.ANSWER_AFTER ? v++ : e.type === u.dCx.ANSWER_PINNED && O++;
    }),
        i.ZP.trackWithMetadata(u.rMx.MESSAGES_SEARCH_STARTED, {
            search_id: null != a ? o.Z.getAnalyticsId(a) : null,
            search_session_id: m(a),
            search_type: l,
            search_query_content_length: null != (n = null == (t = s.content) ? void 0 : t.length) ? n : 0,
            sort_type: (0, r.Vj)(s),
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
            search_id: null != a ? o.Z.getAnalyticsId(a) : null,
            search_session_id: m(a),
            search_type: l,
            num_modifiers: p.length,
            modifiers: f
        });
}
new l.Z('SearchTracking');
