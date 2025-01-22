var i,
    a = r(442837),
    o = r(570140),
    s = r(786761),
    l = r(592125),
    u = r(594174),
    c = r(823379),
    d = r(709054);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = {};
function h(e) {
    var n;
    let r = l.Z.getChannel(null == e ? void 0 : e.channel_id);
    if (null == r || !r.isForumPost()) return !1;
    let i = p[r.id];
    return d.default.compare(null == e ? void 0 : e.id, null == i ? void 0 : null === (n = i.message) || void 0 === n ? void 0 : n.id) > -1;
}
function _(e, n) {
    let r = null == n ? null : (0, s.e5)(n);
    return (
        (p[e] = {
            loaded: !0,
            message: r
        }),
        !0
    );
}
function m(e, n) {
    let r = E(e),
        i = v(e);
    return (
        null != r &&
        null != i &&
        ((p[e] = {
            ...r,
            message: (0, s.wi)(i, n)
        }),
        !0)
    );
}
function g(e, n) {
    let r = v(e);
    return (null == r ? void 0 : r.id) === n && (delete p[e], !0);
}
function E(e) {
    return p[e];
}
function v(e) {
    var n;
    return null === (n = E(e)) || void 0 === n ? void 0 : n.message;
}
function y() {
    p = {};
}
function b(e) {
    let { threads: n } = e;
    for (let e in n) _(e, n[e].most_recent_message);
}
function I(e) {
    if (e.isPushNotification || !h(e.message)) return !1;
    e.message.channel_id === d.default.castMessageIdAsChannelId(e.message.id) ? _(e.message.channel_id, null) : _(e.message.channel_id, e.message);
}
function T(e) {
    if (!h(e.message) || e.message.channel_id === e.message.id) return !1;
    m(e.message.channel_id, e.message);
}
function S(e) {
    return g(e.channelId, e.id);
}
function A(e) {
    let { threads: n, mostRecentMessages: r } = e;
    n.forEach((e) => _(e.id, null)),
        null == r ||
            r.filter(c.lm).forEach((e) => {
                _(e.channel_id, e);
            });
}
class C extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, u.default);
    }
    getMessageState(e) {
        return (
            !(e in p) &&
                (p[e] = {
                    loaded: !1,
                    message: null
                }),
            p[e]
        );
    }
}
f(C, 'displayName', 'ForumPostRecentMessageStore'),
    new C(o.Z, {
        CONNECTION_OPEN: y,
        MESSAGE_CREATE: I,
        MESSAGE_UPDATE: T,
        MESSAGE_DELETE: S,
        LOAD_FORUM_POSTS: b,
        LOAD_ARCHIVED_THREADS_SUCCESS: A,
        LOAD_THREADS_SUCCESS: A
    });
