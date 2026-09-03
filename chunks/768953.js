n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    a = n(734057);
let s = {};
function l(e) {
    let t = a.A.getChannel(e);
    return null != t && !!t.isForumLikeChannel();
}
function o(e) {
    let t = s[e] ?? { query: null, loading: !1, results: null };
    return (s[e] = t), t;
}
class d extends i.Ay.Store {
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
let c = new d(r.h, {
    CONNECTION_OPEN: function () {
        s = {};
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e,
            n = t.parent_id;
        if (null == n) return !1;
        let i = s[n];
        if (null == i) return !1;
        s[n] = { ...i, results: i.results?.filter((e) => t.id !== e) };
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return delete s[t.id];
    },
    FORUM_SEARCH_QUERY_UPDATED: function (e) {
        let { channelId: t, query: n } = e;
        if (!l(t)) return !1;
        let i = o(t);
        s[t] = { ...i, query: n };
    },
    FORUM_SEARCH_START: function (e) {
        let { channelId: t } = e;
        if (!l(t)) return !1;
        let n = o(t);
        s[t] = { ...n, loading: !0 };
    },
    FORUM_SEARCH_SUCCESS: function (e) {
        let { channelId: t, threadIds: n } = e;
        if (!l(t)) return !1;
        let i = o(t);
        s[t] = { ...i, loading: !1, results: n };
    },
    FORUM_SEARCH_FAILURE: function (e) {
        let { channelId: t } = e;
        if (!l(t)) return !1;
        let n = o(t);
        s[t] = { ...n, loading: !1, results: [] };
    },
    FORUM_SEARCH_CLEAR: function (e) {
        let { channelId: t } = e;
        return !!l(t) && delete s[t];
    },
});
