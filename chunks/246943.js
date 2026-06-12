"use strict";
var i = n(17928),
    r = n(228366),
    s = n(320095),
    a = n(734057),
    o = n(287809),
    l = n(403362),
    u = n(935208);
let c = {};
function d(e) {
    let t = a.A.getChannel(e?.channel_id);
    if (null == t || !t.isForumPost()) return !1;
    let n = c[t.id];
    return u.default.compare(e?.id, n?.message?.id) > -1;
}
function _(e, t) {
    let n = null == t ? null : (0, s.rh)(t);
    return (c[e] = { loaded: !0, message: n }), !0;
}
function h(e) {
    return c[e]?.message;
}
function f(e) {
    let { threads: t, mostRecentMessages: n } = e;
    t.forEach((e) => _(e.id, null)),
        n?.filter(l.Vq).forEach((e) => {
            _(e.channel_id, e);
        });
}
class p extends i.Ay.Store {
    static displayName = "ForumPostRecentMessageStore";
    initialize() {
        this.waitFor(a.A, o.default);
    }
    getMessageState(e) {
        return e in c || (c[e] = { loaded: !1, message: null }), c[e];
    }
}
new p(r.h, {
    CONNECTION_OPEN: function () {
        c = {};
    },
    MESSAGE_CREATE: function (e) {
        if (e.isPushNotification || !d(e.message)) return !1;
        e.message.channel_id === u.default.castMessageIdAsChannelId(e.message.id)
            ? _(e.message.channel_id, null)
            : _(e.message.channel_id, e.message);
    },
    MESSAGE_UPDATE: function (e) {
        var t, n;
        let i, r;
        if (!d(e.message) || e.message.channel_id === e.message.id) return !1;
        (t = e.message.channel_id),
            (n = e.message),
            (i = c[t]),
            (r = h(t)),
            null == i || null == r || (c[t] = { ...i, message: (0, s.IU)(r, n) });
    },
    MESSAGE_DELETE: function (e) {
        var t, n;
        let i;
        return (t = e.channelId), (n = e.id), (i = h(t)), i?.id === n && (delete c[t], !0);
    },
    LOAD_FORUM_POSTS: function (e) {
        let { threads: t } = e;
        for (let e in t) _(e, t[e].most_recent_message);
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: f,
    LOAD_THREADS_SUCCESS: f,
});
