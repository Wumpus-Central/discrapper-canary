"use strict";
var r = n(311907),
    i = n(73153),
    a = n(141468),
    s = n(734057),
    o = n(287809),
    l = n(403362),
    u = n(661191);
let c = {};
function d(e) {
    let t = s.A.getChannel(e?.channel_id);
    if (null == t || !t.isForumPost()) return !1;
    let n = c[t.id];
    return u.default.compare(e?.id, n?.message?.id) > -1;
}
function _(e, t) {
    let n = null == t ? null : (0, a.rh)(t);
    return (c[e] = { loaded: !0, message: n }), !0;
}
function f(e, t) {
    let n = h(e),
        r = m(e);
    return null != n && null != r && ((c[e] = { ...n, message: (0, a.IU)(r, t) }), !0);
}
function p(e, t) {
    let n = m(e);
    return n?.id === t && (delete c[e], !0);
}
function h(e) {
    return c[e];
}
function m(e) {
    return h(e)?.message;
}
function g() {
    c = {};
}
function E(e) {
    let { threads: t } = e;
    for (let e in t) _(e, t[e].most_recent_message);
}
function A(e) {
    if (e.isPushNotification || !d(e.message)) return !1;
    e.message.channel_id === u.default.castMessageIdAsChannelId(e.message.id)
        ? _(e.message.channel_id, null)
        : _(e.message.channel_id, e.message);
}
function I(e) {
    if (!d(e.message) || e.message.channel_id === e.message.id) return !1;
    f(e.message.channel_id, e.message);
}
function T(e) {
    return p(e.channelId, e.id);
}
function y(e) {
    let { threads: t, mostRecentMessages: n } = e;
    t.forEach((e) => _(e.id, null)),
        n?.filter(l.Vq).forEach((e) => {
            _(e.channel_id, e);
        });
}
class S extends r.Ay.Store {
    static displayName = "ForumPostRecentMessageStore";
    initialize() {
        this.waitFor(s.A, o.default);
    }
    getMessageState(e) {
        return e in c || (c[e] = { loaded: !1, message: null }), c[e];
    }
}
new S(i.h, {
    CONNECTION_OPEN: g,
    MESSAGE_CREATE: A,
    MESSAGE_UPDATE: I,
    MESSAGE_DELETE: T,
    LOAD_FORUM_POSTS: E,
    LOAD_ARCHIVED_THREADS_SUCCESS: y,
    LOAD_THREADS_SUCCESS: y,
});
