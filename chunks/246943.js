"use strict";
var i = n(17928),
    r = n(228366),
    s = n(320095),
    a = n(734057),
    o = n(287809),
    l = n(403362),
    d = n(935208);
let _ = {};
function u(e) {
    let t = a.A.getChannel(e?.channel_id);
    if (null == t || !t.isForumPost()) return !1;
    let n = _[t.id];
    return d.default.compare(e?.id, n?.message?.id) > -1;
}
function c(e, t) {
    let n = null == t ? null : (0, s.rh)(t);
    return (_[e] = { loaded: !0, message: n }), !0;
}
function E(e) {
    return _[e]?.message;
}
function h(e) {
    let { threads: t, mostRecentMessages: n } = e;
    t.forEach((e) => c(e.id, null)),
        n?.filter(l.Vq).forEach((e) => {
            c(e.channel_id, e);
        });
}
class m extends i.Ay.Store {
    static displayName = "ForumPostRecentMessageStore";
    initialize() {
        this.waitFor(a.A, o.default);
    }
    getMessageState(e) {
        return e in _ || (_[e] = { loaded: !1, message: null }), _[e];
    }
}
new m(r.h, {
    CONNECTION_OPEN: function () {
        _ = {};
    },
    MESSAGE_CREATE: function (e) {
        if (e.isPushNotification || !u(e.message)) return !1;
        e.message.channel_id === d.default.castMessageIdAsChannelId(e.message.id)
            ? c(e.message.channel_id, null)
            : c(e.message.channel_id, e.message);
    },
    MESSAGE_UPDATE: function (e) {
        var t, n;
        let i, r;
        if (!u(e.message) || e.message.channel_id === e.message.id) return !1;
        (t = e.message.channel_id),
            (n = e.message),
            (i = _[t]),
            (r = E(t)),
            null == i || null == r || (_[t] = { ...i, message: (0, s.IU)(r, n) });
    },
    MESSAGE_DELETE: function (e) {
        var t, n;
        let i;
        return (t = e.channelId), (n = e.id), (i = E(t)), i?.id === n && (delete _[t], !0);
    },
    LOAD_FORUM_POSTS: function (e) {
        let { threads: t } = e;
        for (let e in t) c(e, t[e].most_recent_message);
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: h,
    LOAD_THREADS_SUCCESS: h,
});
