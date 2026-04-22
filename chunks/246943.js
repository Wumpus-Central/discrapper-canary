"use strict";
var r = n(311907),
    i = n(73153),
    s = n(141468),
    a = n(734057),
    o = n(287809),
    l = n(403362),
    u = n(661191);
let d = {};
function c(e) {
    let t = a.A.getChannel(e?.channel_id);
    if (null == t || !t.isForumPost()) return !1;
    let n = d[t.id];
    return u.default.compare(e?.id, n?.message?.id) > -1;
}
function _(e, t) {
    let n = null == t ? null : (0, s.rh)(t);
    return (d[e] = { loaded: !0, message: n }), !0;
}
function f(e) {
    return d[e]?.message;
}
function E(e) {
    let { threads: t, mostRecentMessages: n } = e;
    t.forEach((e) => _(e.id, null)),
        n?.filter(l.Vq).forEach((e) => {
            _(e.channel_id, e);
        });
}
class h extends r.Ay.Store {
    static displayName = "ForumPostRecentMessageStore";
    initialize() {
        this.waitFor(a.A, o.default);
    }
    getMessageState(e) {
        return e in d || (d[e] = { loaded: !1, message: null }), d[e];
    }
}
new h(i.h, {
    CONNECTION_OPEN: function () {
        d = {};
    },
    MESSAGE_CREATE: function (e) {
        if (e.isPushNotification || !c(e.message)) return !1;
        e.message.channel_id === u.default.castMessageIdAsChannelId(e.message.id)
            ? _(e.message.channel_id, null)
            : _(e.message.channel_id, e.message);
    },
    MESSAGE_UPDATE: function (e) {
        var t, n;
        let r, i;
        if (!c(e.message) || e.message.channel_id === e.message.id) return !1;
        (t = e.message.channel_id),
            (n = e.message),
            (r = d[t]),
            (i = f(t)),
            null == r || null == i || (d[t] = { ...r, message: (0, s.IU)(i, n) });
    },
    MESSAGE_DELETE: function (e) {
        var t, n;
        let r;
        return (t = e.channelId), (n = e.id), (r = f(t)), r?.id === n && (delete d[t], !0);
    },
    LOAD_FORUM_POSTS: function (e) {
        let { threads: t } = e;
        for (let e in t) _(e, t[e].most_recent_message);
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: E,
    LOAD_THREADS_SUCCESS: E,
});
