var r,
    i = n(442837),
    a = n(570140),
    o = n(786761),
    s = n(592125),
    l = n(594174),
    c = n(823379),
    u = n(709054);
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
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = {};
function m(e) {
    var t;
    let n = s.Z.getChannel(null == e ? void 0 : e.channel_id);
    if (null == n || !n.isForumPost()) return !1;
    let r = h[n.id];
    return u.default.compare(null == e ? void 0 : e.id, null == r || null == (t = r.message) ? void 0 : t.id) > -1;
}
function g(e, t) {
    let n = null == t ? null : (0, o.e5)(t);
    return (
        (h[e] = {
            loaded: !0,
            message: n
        }),
        !0
    );
}
function E(e, t) {
    let n = y(e),
        r = O(e);
    return null != n && null != r && ((h[e] = p(f({}, n), { message: (0, o.wi)(r, t) })), !0);
}
function b(e, t) {
    let n = O(e);
    return (null == n ? void 0 : n.id) === t && (delete h[e], !0);
}
function y(e) {
    return h[e];
}
function O(e) {
    var t;
    return null == (t = y(e)) ? void 0 : t.message;
}
function v() {
    h = {};
}
function I(e) {
    let { threads: t } = e;
    for (let e in t) g(e, t[e].most_recent_message);
}
function S(e) {
    if (e.isPushNotification || !m(e.message)) return !1;
    e.message.channel_id === u.default.castMessageIdAsChannelId(e.message.id) ? g(e.message.channel_id, null) : g(e.message.channel_id, e.message);
}
function T(e) {
    if (!m(e.message) || e.message.channel_id === e.message.id) return !1;
    E(e.message.channel_id, e.message);
}
function A(e) {
    return b(e.channelId, e.id);
}
function N(e) {
    let { threads: t, mostRecentMessages: n } = e;
    t.forEach((e) => g(e.id, null)),
        null == n ||
            n.filter(c.lm).forEach((e) => {
                g(e.channel_id, e);
            });
}
class C extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, l.default);
    }
    getMessageState(e) {
        return (
            e in h ||
                (h[e] = {
                    loaded: !1,
                    message: null
                }),
            h[e]
        );
    }
}
d(C, 'displayName', 'ForumPostRecentMessageStore'),
    new C(a.Z, {
        CONNECTION_OPEN: v,
        MESSAGE_CREATE: S,
        MESSAGE_UPDATE: T,
        MESSAGE_DELETE: A,
        LOAD_FORUM_POSTS: I,
        LOAD_ARCHIVED_THREADS_SUCCESS: N,
        LOAD_THREADS_SUCCESS: N
    });
