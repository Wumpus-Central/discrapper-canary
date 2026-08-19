"use strict";
var i = n(17928),
    r = n(228366),
    a = n(320095),
    s = n(734057),
    l = n(287809),
    o = n(403362),
    d = n(935208);
let c = {};
function u(e) {
    let t = s.A.getChannel(e?.channel_id);
    if (null == t || !t.isForumPost()) return !1;
    let n = c[t.id];
    return d.default.compare(e?.id, n?.message?.id) > -1;
}
function _(e, t) {
    let n = null == t ? null : (0, a.rh)(t);
    return (c[e] = { loaded: !0, message: n }), !0;
}
function E(e) {
    return c[e]?.message;
}
function A(e) {
    let { threads: t, mostRecentMessages: n } = e;
    t.forEach((e) => _(e.id, null)),
        n?.filter(o.Vq).forEach((e) => {
            _(e.channel_id, e);
        });
}
class h extends i.Ay.Store {
    static displayName = "ForumPostRecentMessageStore";
    initialize() {
        this.waitFor(s.A, l.default);
    }
    getMessageState(e) {
        return e in c || (c[e] = { loaded: !1, message: null }), c[e];
    }
}
new h(r.h, {
    CONNECTION_OPEN: function () {
        c = {};
    },
    MESSAGE_CREATE: function (e) {
        if (e.isPushNotification || !u(e.message)) return !1;
        e.message.channel_id === d.default.castMessageIdAsChannelId(e.message.id)
            ? _(e.message.channel_id, null)
            : _(e.message.channel_id, e.message);
    },
    MESSAGE_UPDATE: function (e) {
        var t, n;
        let i, r;
        if (!u(e.message) || e.message.channel_id === e.message.id) return !1;
        (t = e.message.channel_id),
            (n = e.message),
            (i = c[t]),
            (r = E(t)),
            null == i || null == r || (c[t] = { ...i, message: (0, a.IU)(r, n) });
    },
    MESSAGE_DELETE: function (e) {
        var t, n;
        let i;
        return (t = e.channelId), (n = e.id), (i = E(t)), i?.id === n && (delete c[t], !0);
    },
    LOAD_FORUM_POSTS: function (e) {
        let { threads: t } = e;
        for (let e in t) _(e, t[e].most_recent_message);
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: A,
    LOAD_THREADS_SUCCESS: A,
});
