n.d(t, {
    I1: () => g,
    IZ: () => _,
    Qb: () => h,
    cy: () => b,
    hM: () => p,
    sL: () => m,
    tI: () => x,
    zW: () => f
});
var r = n(367907),
    i = n(710845),
    l = n(654427),
    a = n(768119),
    o = n(626135),
    s = n(981631),
    c = n(862825);
function u(e, t) {
    let n = (function (e) {
        let t = null != e ? (0, a.g)(e) : null;
        return t === s.aib.DMS
            ? { type: s.aib.DMS }
            : t === s.aib.FAVORITES
              ? { type: s.aib.FAVORITES }
              : t === s.aib.GUILD
                ? {
                      type: s.aib.GUILD,
                      guildId: e
                  }
                : t === s.aib.CHANNEL
                  ? {
                        type: s.aib.CHANNEL,
                        channelId: e
                    }
                  : null;
    })(e);
    return null != n ? t(n) : null;
}
function d(e) {
    return u(e, (e) => l.Z.getSessionId(e));
}
function p(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: i, prevSearchAnalyticsId: l, isError: a, limit: o, offset: c, page: u, totalResults: p, pageResults: m, isIndexing: f, pageNumMessages: h, pageNumLinks: g, pageNumEmbeds: _, pageNumAttachments: b } = e;
    r.ZP.trackWithMetadata(s.rMx.SEARCH_RESULT_VIEWED, {
        search_type: t,
        search_id: i,
        prev_search_id: l,
        search_session_id: d(n),
        is_error: a,
        limit: o,
        offset: c,
        page: u,
        total_results: p,
        page_results: m,
        is_indexing: f,
        page_num_messages: h,
        page_num_links: g,
        page_num_embeds: _,
        page_num_attach: b
    });
}
function m(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: r, guildId: i, channelId: l, pageResults: a, totalResults: c, page: u, limit: p, offset: m, index: f } = e;
    o.default.track(s.rMx.SEARCH_RESULT_SELECTED, {
        search_type: t,
        search_id: r,
        search_session_id: d(n),
        guild_id: i,
        channel_id: l,
        page_results: a,
        total_results: c,
        page: u,
        limit: p,
        offset: m,
        index_num: f
    });
}
function f(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: i, mode: l } = e;
    r.ZP.trackWithMetadata(s.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: i,
        search_session_id: d(n),
        search_type: t,
        new_sort_type: l
    });
}
function h(e) {
    let { searchType: t, searchId: n, searchAnalyticsId: i } = e;
    r.ZP.trackWithMetadata(s.rMx.SEARCH_RESULT_EMPTY, {
        search_id: i,
        search_session_id: d(n),
        search_type: t
    });
}
function g(e) {
    let { searchType: t, searchId: n } = e;
    u(n, (e) => {
        l.Z.initialize(e, c.sR.MESSAGES);
    }),
        r.ZP.trackWithMetadata(s.rMx.SEARCH_OPENED, {
            search_id: null != n ? a.Z.getAnalyticsId(n) : null,
            search_session_id: d(n),
            search_type: t
        });
}
function _(e) {
    let { searchId: t, searchType: n } = e;
    r.ZP.trackWithMetadata(s.rMx.SEARCH_CLOSED, {
        search_id: null != t ? a.Z.getAnalyticsId(t) : null,
        search_session_id: d(t),
        search_type: n
    }),
        u(t, (e) => {
            l.Z.terminate(e);
        });
}
function b(e) {
    let { searchType: t, searchId: n } = e;
    r.ZP.trackWithMetadata(s.rMx.SEARCH_INPUT_CLEARED, {
        search_id: null != n ? a.Z.getAnalyticsId(n) : null,
        search_session_id: d(n),
        search_type: t
    });
}
function x(e) {
    let { searchType: t, searchId: n, query: i } = e,
        l = Object.keys(i),
        o = l.reduce((e, t) => {
            let n = i[t];
            return (e[t] = Array.isArray(n) ? n.length : 1), e;
        }, {});
    r.ZP.trackWithMetadata(s.rMx.SEARCH_STARTED, {
        search_id: null != n ? a.Z.getAnalyticsId(n) : null,
        search_session_id: d(n),
        search_type: t,
        num_modifiers: l.length,
        modifiers: o
    });
}
new i.Z('SearchTracking');
