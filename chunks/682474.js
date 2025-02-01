var i,
    r = n(442837),
    a = n(570140),
    s = n(786761),
    o = n(592125),
    l = n(594174),
    u = n(823379),
    c = n(709054);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = {};
function _(e) {
    var t;
    let n = o.Z.getChannel(null == e ? void 0 : e.channel_id);
    if (null == n || !n.isForumPost()) return !1;
    let i = f[n.id];
    return c.default.compare(null == e ? void 0 : e.id, null == i ? void 0 : null === (t = i.message) || void 0 === t ? void 0 : t.id) > -1;
}
function p(e, t) {
    let n = null == t ? null : (0, s.e5)(t);
    return (
        (f[e] = {
            loaded: !0,
            message: n
        }),
        !0
    );
}
function h(e, t) {
    let n = g(e),
        i = E(e);
    return (
        null != n &&
        null != i &&
        ((f[e] = {
            ...n,
            message: (0, s.wi)(i, t)
        }),
        !0)
    );
}
function m(e, t) {
    let n = E(e);
    return (null == n ? void 0 : n.id) === t && (delete f[e], !0);
}
function g(e) {
    return f[e];
}
function E(e) {
    var t;
    return null === (t = g(e)) || void 0 === t ? void 0 : t.message;
}
function v() {
    f = {};
}
function y(e) {
    let { threads: t } = e;
    for (let e in t) p(e, t[e].most_recent_message);
}
function I(e) {
    if (e.isPushNotification || !_(e.message)) return !1;
    e.message.channel_id === c.default.castMessageIdAsChannelId(e.message.id) ? p(e.message.channel_id, null) : p(e.message.channel_id, e.message);
}
function T(e) {
    if (!_(e.message) || e.message.channel_id === e.message.id) return !1;
    h(e.message.channel_id, e.message);
}
function b(e) {
    return m(e.channelId, e.id);
}
function S(e) {
    let { threads: t, mostRecentMessages: n } = e;
    t.forEach((e) => p(e.id, null)),
        null == n ||
            n.filter(u.lm).forEach((e) => {
                p(e.channel_id, e);
            });
}
class A extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(o.Z, l.default);
    }
    getMessageState(e) {
        return (
            e in f ||
                (f[e] = {
                    loaded: !1,
                    message: null
                }),
            f[e]
        );
    }
}
d(A, 'displayName', 'ForumPostRecentMessageStore'),
    new A(a.Z, {
        CONNECTION_OPEN: v,
        MESSAGE_CREATE: I,
        MESSAGE_UPDATE: T,
        MESSAGE_DELETE: b,
        LOAD_FORUM_POSTS: y,
        LOAD_ARCHIVED_THREADS_SUCCESS: S,
        LOAD_THREADS_SUCCESS: S
    });
