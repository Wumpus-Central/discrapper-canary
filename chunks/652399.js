n.d(t, {
    I1: () => u,
    IZ: () => d,
    Qb: () => c,
    cy: () => p,
    hM: () => a,
    sL: () => o,
    zW: () => s
});
var r = n(367907),
    i = n(626135),
    l = n(981631);
function a(e) {
    let { searchType: t, searchAnalyticsId: n, prevSearchId: i, isError: a, limit: o, offset: s, page: c, totalResults: u, pageResults: d, isIndexing: p, pageNumMessages: m, pageNumLinks: f, pageNumEmbeds: h, pageNumAttachments: g } = e;
    r.ZP.trackWithMetadata(l.rMx.SEARCH_RESULT_VIEWED, {
        search_type: t,
        search_id: n,
        prev_search_id: i,
        is_error: a,
        limit: o,
        offset: s,
        page: c,
        total_results: u,
        page_results: d,
        is_indexing: p,
        page_num_messages: m,
        page_num_links: f,
        page_num_embeds: h,
        page_num_attach: g
    });
}
function o(e) {
    let { searchType: t, searchAnalyticsId: n, guildId: r, channelId: a, pageResults: o, totalResults: s, page: c, limit: u, offset: d, index: p } = e;
    i.default.track(l.rMx.SEARCH_RESULT_SELECTED, {
        search_type: t,
        search_id: n,
        guild_id: r,
        channel_id: a,
        page_results: o,
        total_results: s,
        page: c,
        limit: u,
        offset: d,
        index_num: p
    });
}
function s(e) {
    let { searchAnalyticsId: t, mode: n } = e;
    r.ZP.trackWithMetadata(l.rMx.SEARCH_RESULT_SORT_CHANGED, {
        search_id: t,
        new_sort_type: n
    });
}
function c(e) {
    let { searchType: t } = e;
    r.ZP.trackWithMetadata(l.rMx.SEARCH_RESULT_EMPTY, { search_type: t });
}
function u(e) {
    let { searchType: t } = e;
    r.ZP.trackWithMetadata(l.rMx.SEARCH_OPENED, { search_type: t });
}
function d(e) {
    let { searchAnalyticsId: t } = e;
    r.ZP.trackWithMetadata(l.rMx.SEARCH_CLOSED, { search_id: t });
}
function p(e) {
    let { searchType: t, searchAnalyticsId: n } = e;
    r.ZP.trackWithMetadata(l.rMx.SEARCH_INPUT_CLEARED, {
        search_id: n,
        search_type: t
    });
}
