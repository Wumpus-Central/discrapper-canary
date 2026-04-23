"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(228366),
    s = n(734057);
let a = {};
function o(e) {
    let t = s.A.getChannel(e);
    return null != t && !!t.isForumLikeChannel();
}
function l(e) {
    let t = a[e] ?? { query: null, loading: !1, results: null };
    return (a[e] = t), t;
}
class d extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    static displayName = "ForumSearchStore";
    getSearchQuery(e) {
        let t = a[e];
        return t?.query;
    }
    getSearchLoading(e) {
        let t = a[e];
        return t?.loading ?? !1;
    }
    getSearchResults(e) {
        let t = a[e];
        return t?.results;
    }
    getHasSearchResults(e) {
        let t = a[e];
        return t?.results != null && t.results.length > 0;
    }
}
let _ = new d(r.h, {
    CONNECTION_OPEN: function () {
        a = {};
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e,
            n = t.parent_id;
        if (null == n) return !1;
        let i = a[n];
        if (null == i) return !1;
        a[n] = { ...i, results: i.results?.filter((e) => t.id !== e) };
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return delete a[t.id];
    },
    FORUM_SEARCH_QUERY_UPDATED: function (e) {
        let { channelId: t, query: n } = e;
        if (!o(t)) return !1;
        let i = l(t);
        a[t] = { ...i, query: n };
    },
    FORUM_SEARCH_START: function (e) {
        let { channelId: t } = e;
        if (!o(t)) return !1;
        let n = l(t);
        a[t] = { ...n, loading: !0 };
    },
    FORUM_SEARCH_SUCCESS: function (e) {
        let { channelId: t, threadIds: n } = e;
        if (!o(t)) return !1;
        let i = l(t);
        a[t] = { ...i, loading: !1, results: n };
    },
    FORUM_SEARCH_FAILURE: function (e) {
        let { channelId: t } = e;
        if (!o(t)) return !1;
        let n = l(t);
        a[t] = { ...n, loading: !1, results: [] };
    },
    FORUM_SEARCH_CLEAR: function (e) {
        let { channelId: t } = e;
        return !!o(t) && delete a[t];
    },
});
