"use strict";
n.d(t, { A: () => E });
var r = n(311907),
    i = n(73153),
    a = n(734057);
let s = {};
function o(e) {
    let t = a.A.getChannel(e);
    return null != t && !!t.isForumLikeChannel();
}
function l(e) {
    let t = s[e] ?? { query: null, loading: !1, results: null };
    return (s[e] = t), t;
}
function u(e) {
    let { channelId: t, query: n } = e;
    if (!o(t)) return !1;
    let r = l(t);
    s[t] = { ...r, query: n };
}
function c(e) {
    let { channelId: t } = e;
    if (!o(t)) return !1;
    let n = l(t);
    s[t] = { ...n, loading: !0 };
}
function d(e) {
    let { channelId: t, threadIds: n } = e;
    if (!o(t)) return !1;
    let r = l(t);
    s[t] = { ...r, loading: !1, results: n };
}
function _(e) {
    let { channelId: t } = e;
    if (!o(t)) return !1;
    let n = l(t);
    s[t] = { ...n, loading: !1, results: [] };
}
function f(e) {
    let { channelId: t } = e;
    return !!o(t) && delete s[t];
}
function p(e) {
    let { channel: t } = e,
        n = t.parent_id;
    if (null == n) return !1;
    let r = s[n];
    if (null == r) return !1;
    s[n] = { ...r, results: r.results?.filter((e) => t.id !== e) };
}
function h(e) {
    let { channel: t } = e;
    return delete s[t.id];
}
function m() {
    s = {};
}
class g extends r.Ay.Store {
    initialize() {
        this.waitFor(a.A);
    }
    static displayName = "ForumSearchStore";
    getSearchQuery(e) {
        let t = s[e];
        return t?.query;
    }
    getSearchLoading(e) {
        let t = s[e];
        return t?.loading ?? !1;
    }
    getSearchResults(e) {
        let t = s[e];
        return t?.results;
    }
    getHasSearchResults(e) {
        let t = s[e];
        return t?.results != null && t.results.length > 0;
    }
}
let E = new g(i.h, {
    CONNECTION_OPEN: m,
    THREAD_DELETE: p,
    CHANNEL_DELETE: h,
    FORUM_SEARCH_QUERY_UPDATED: u,
    FORUM_SEARCH_START: c,
    FORUM_SEARCH_SUCCESS: d,
    FORUM_SEARCH_FAILURE: _,
    FORUM_SEARCH_CLEAR: f,
});
