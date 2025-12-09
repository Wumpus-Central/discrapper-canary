n.d(t, { Z: () => X }), n(388685);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(786761),
    c = n(131704),
    u = n(23750),
    d = n(598077),
    f = n(592125),
    p = n(375954),
    _ = n(709054),
    m = n(124368),
    h = n(981631);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = new Set(),
    v = {},
    S = {};
function I(e) {
    v = a().omitBy(v, (t) => {
        let n = t.guildId === e;
        return n && delete S[t.parentId], n;
    });
}
function T(e) {
    (v = a().omitBy(v, (t) => t.parentId === e)), delete S[e];
}
function A(e, t) {
    c.AW.has(e.type) && C(P(e), t);
}
function C(e, t) {
    var n;
    let r = (null != (n = S[e.parentId]) ? n : 0) + 1;
    (S[e.parentId] = r), t(e);
}
function N(e) {
    var t, n;
    null == (t = e.threads) || t.forEach(D), null == (n = e.threadMessages) || n.forEach(R);
}
function P(e) {
    if (!(e.id in v)) {
        var t;
        v[e.id] = {
            guildId: e.guild_id,
            parentId: e.parent_id,
            count: null != (t = e.messageCount) ? t : 0,
            mostRecentRawMessage: null,
            mostRecentMessage: null,
        };
    }
    return v[e.id];
}
function R(e) {
    if (e.type === h.uaV.THREAD_STARTER_MESSAGE) return;
    let t = f.Z.getChannel(e.channel_id);
    null != t &&
        A(t, (t) => {
            (t.mostRecentRawMessage = e), (t.mostRecentMessage = null);
        });
}
function D(e) {
    A(e, (t) => {
        var n;
        null != e.messageCount && (t.count = e.messageCount);
        let r = null != (n = t.mostRecentRawMessage) ? n : t.mostRecentMessage;
        null != e.lastMessageId &&
            (null == r ? void 0 : r.id) !== e.lastMessageId &&
            ((t.mostRecentRawMessage = null), (t.mostRecentMessage = null));
    });
}
function w(e) {
    if (null != e && !(e.id in v)) {
        let t = f.Z.getChannel(e.id);
        if (null != t) return D(t), !0;
    }
    return !1;
}
function x(e) {
    (S = {}), O.clear(), e.guilds.forEach(N);
}
function L(e) {
    let { threadMessages: t } = e;
    for (let e in (v = E({}, t))) {
        let n = t[e].mostRecentMessage;
        null != n && (t[e].mostRecentMessage = new u.ZP(y(E({}, n), { author: new d.Z(n.author) })));
    }
}
function j(e) {
    let { guild: t } = e;
    N(t);
}
function M(e) {
    let { guild: t } = e;
    I(t.id);
}
function k(e) {
    let { channel: t } = e;
    D(t);
}
function U(e) {
    let { threads: t, mostRecentMessages: n } = e;
    t.forEach(D),
        null == n ||
            n.forEach((e) => {
                let t = f.Z.getChannel(e.channel_id);
                null != t &&
                    e.type !== h.uaV.THREAD_STARTER_MESSAGE &&
                    A(t, (t) => {
                        (t.mostRecentRawMessage = e), (t.mostRecentMessage = null);
                    });
            });
}
function G(e) {
    let { threads: t } = e;
    t.forEach(w);
}
function Z(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n } = e;
        t.forEach((e) => {
            e.forEach((e) => {
                w(e.thread);
            });
        }),
            n.forEach(w);
    });
}
function B(e) {
    let { channel: t } = e;
    T(t.id);
}
function F(e) {
    let { channel: t } = e;
    delete v[t.id];
}
function V(e) {
    let { message: t, optimistic: n, isPushNotification: r, sendMessageOptions: i } = e;
    if (n || r || null != i) return !1;
    let a = f.Z.getChannel(t.channel_id);
    if (null == a || !c.Ec.has(a.type) || !H(a, t)) return !1;
    A(a, (e) => {
        (e.count = Math.min(e.count + 1, m.M3)), (e.mostRecentRawMessage = t), (e.mostRecentMessage = null);
    });
}
function H(e, t) {
    return !(
        t.type === h.uaV.THREAD_STARTER_MESSAGE ||
        (e.isForumPost() && t.id === _.default.castChannelIdAsMessageId(e.id))
    );
}
function Y(e) {
    var t;
    let { message: n } = e,
        r = v[n.channel_id],
        i = null != (t = null == r ? void 0 : r.mostRecentRawMessage) ? t : null == r ? void 0 : r.mostRecentMessage;
    if (null == r || null == i || i.id !== n.id) return !1;
    C(r, (e) => {
        null != e.mostRecentMessage && (e.mostRecentMessage = (0, l.wi)(e.mostRecentMessage, n)),
            null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, l.gx)(e.mostRecentRawMessage, n));
    });
}
function W(e) {
    let { id: t, channelId: n } = e,
        r = v[n];
    if (null == r) return !1;
    let i = _.default.castChannelIdAsMessageId(n) !== t,
        a = !O.has(t);
    C(r, (e) => {
        var n;
        let r = null != (n = e.mostRecentRawMessage) ? n : e.mostRecentMessage;
        null != r && r.id === t && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)),
            (e.count = i && a ? Math.max(e.count - 1, 0) : e.count),
            O.add(t);
    });
}
function K(e) {
    let { ids: t, channelId: n } = e,
        r = v[n];
    if (null == r) return !1;
    let i = t.filter((e) => {
        let t = _.default.castChannelIdAsMessageId(n) !== e,
            r = !O.has(e);
        return t && r;
    }).length;
    i > 0 &&
        C(r, (e) => {
            var n;
            let r = null != (n = e.mostRecentRawMessage) ? n : e.mostRecentMessage;
            null != r && t.includes(r.id) && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)),
                (e.count -= i),
                t.forEach((e) => O.add(e));
        });
}
function z(e) {
    let t = !1;
    for (let n of e.messages) t = w(n.thread) || t;
    if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
    let n = f.Z.getChannel(e.channelId);
    if (null == n || !c.Ec.has(n.type)) return t;
    A(n, (t) => {
        if (0 === e.messages.length) (t.mostRecentRawMessage = null), (t.mostRecentMessage = null), (t.count = 0);
        else {
            var n;
            let r = null != (n = e.messages[0]) ? n : null;
            (t.count = e.messages.length >= m.M3 ? m.M3 : t.count),
                (null == r ? void 0 : r.type) !== h.uaV.THREAD_STARTER_MESSAGE &&
                    ((t.mostRecentRawMessage = r), (t.mostRecentMessage = null));
        }
    });
}
function q() {
    for (let e in v) {
        let t = v[e];
        if (null != t && null != t.mostRecentMessage) {
            let n = p.Z.getMessage(e, t.mostRecentMessage.id);
            if (null == n) continue;
            t.mostRecentMessage = n;
        }
    }
}
class Q extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, p.Z);
    }
    getCount(e) {
        var t, n;
        return null != (n = null == (t = v[e]) ? void 0 : t.count) ? n : null;
    }
    getMostRecentMessage(e) {
        var t, n;
        let r = v[e];
        return null == r
            ? null
            : (null == r.mostRecentMessage &&
                  null != r.mostRecentRawMessage &&
                  ((r.mostRecentMessage =
                      null != (t = p.Z.getMessage(e, r.mostRecentRawMessage.id))
                          ? t
                          : (0, l.e5)(r.mostRecentRawMessage)),
                  (r.mostRecentRawMessage = null)),
              null != (n = r.mostRecentMessage) ? n : null);
    }
    getChannelThreadsVersion(e) {
        return S[e];
    }
    getInitialOverlayState() {
        return v;
    }
}
g(Q, "displayName", "ThreadMessageStore");
let X = new Q(s.Z, {
    CONNECTION_OPEN: x,
    OVERLAY_INITIALIZE: L,
    GUILD_CREATE: j,
    GUILD_DELETE: M,
    THREAD_CREATE: k,
    THREAD_UPDATE: k,
    THREAD_LIST_SYNC: U,
    LOAD_THREADS_SUCCESS: G,
    LOAD_ARCHIVED_THREADS_SUCCESS: G,
    RELATIONSHIP_ADD: q,
    RELATIONSHIP_UPDATE: q,
    RELATIONSHIP_REMOVE: q,
    SEARCH_MESSAGES_SUCCESS: Z,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: Z,
    THREAD_DELETE: F,
    CHANNEL_DELETE: B,
    MESSAGE_CREATE: V,
    MESSAGE_UPDATE: Y,
    MESSAGE_DELETE: W,
    MESSAGE_DELETE_BULK: K,
    LOAD_MESSAGES_SUCCESS: z,
});
