n.d(t, {
    A: () => Q,
}),
    n(896048);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(141468),
    c = n(95701),
    u = n(383233),
    d = n(427157),
    f = n(734057),
    p = n(320501),
    _ = n(661191),
    h = n(37411),
    m = n(652215);

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
    A = {},
    v = {};

function S(e) {
    A = a().omitBy(A, (t) => {
        let n = t.guildId === e;
        return n && delete v[t.parentId], n;
    });
}

function I(e) {
    (A = a().omitBy(A, (t) => t.parentId === e)), delete v[e];
}

function T(e, t) {
    c.A_.has(e.type) && C(R(e), t);
}

function C(e, t) {
    var n;
    let r = (null != (n = v[e.parentId]) ? n : 0) + 1;
    (v[e.parentId] = r), t(e);
}

function N(e) {
    var t, n;
    null == (t = e.threads) || t.forEach(P), null == (n = e.threadMessages) || n.forEach(w);
}

function R(e) {
    if (!(e.id in A)) {
        var t;
        A[e.id] = {
            guildId: e.guild_id,
            parentId: e.parent_id,
            count: null != (t = e.messageCount) ? t : 0,
            mostRecentRawMessage: null,
            mostRecentMessage: null,
        };
    }
    return A[e.id];
}

function w(e) {
    if (e.type === m.lAJ.THREAD_STARTER_MESSAGE) return;
    let t = f.A.getChannel(e.channel_id);
    null != t &&
        T(t, (t) => {
            (t.mostRecentRawMessage = e), (t.mostRecentMessage = null);
        });
}

function P(e) {
    T(e, (t) => {
        var n;
        null != e.messageCount && (t.count = e.messageCount);
        let r = null != (n = t.mostRecentRawMessage) ? n : t.mostRecentMessage;
        null != e.lastMessageId &&
            (null == r ? void 0 : r.id) !== e.lastMessageId &&
            ((t.mostRecentRawMessage = null), (t.mostRecentMessage = null));
    });
}

function D(e) {
    if (null != e && !(e.id in A)) {
        let t = f.A.getChannel(e.id);
        if (null != t) return P(t), !0;
    }
    return !1;
}

function x(e) {
    (v = {}), O.clear(), e.guilds.forEach(N);
}

function L(e) {
    let { threadMessages: t } = e;
    for (let e in (A = E({}, t))) {
        let n = t[e].mostRecentMessage;
        null != n &&
            (t[e].mostRecentMessage = new u.Ay(
                y(E({}, n), {
                    author: new d.A(n.author),
                }),
            ));
    }
}

function j(e) {
    let { guild: t } = e;
    N(t);
}

function M(e) {
    let { guild: t } = e;
    S(t.id);
}

function k(e) {
    let { channel: t } = e;
    P(t);
}

function U(e) {
    let { threads: t, mostRecentMessages: n } = e;
    t.forEach(P),
        null == n ||
            n.forEach((e) => {
                let t = f.A.getChannel(e.channel_id);
                null != t &&
                    e.type !== m.lAJ.THREAD_STARTER_MESSAGE &&
                    T(t, (t) => {
                        (t.mostRecentRawMessage = e), (t.mostRecentMessage = null);
                    });
            });
}

function G(e) {
    let { threads: t } = e;
    t.forEach(D);
}

function V(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n } = e;
        t.forEach((e) => {
            e.forEach((e) => {
                D(e.thread);
            });
        }),
            n.forEach(D);
    });
}

function F(e) {
    let { channel: t } = e;
    I(t.id);
}

function B(e) {
    let { channel: t } = e;
    delete A[t.id];
}

function H(e) {
    let { message: t, optimistic: n, isPushNotification: r, sendMessageOptions: i } = e;
    if (n || r || null != i) return !1;
    let a = f.A.getChannel(t.channel_id);
    if (null == a || !c.Le.has(a.type) || !Y(a, t)) return !1;
    T(a, (e) => {
        (e.count = Math.min(e.count + 1, h.su)), (e.mostRecentRawMessage = t), (e.mostRecentMessage = null);
    });
}

function Y(e, t) {
    return !(
        t.type === m.lAJ.THREAD_STARTER_MESSAGE ||
        (e.isForumPost() && t.id === _.default.castChannelIdAsMessageId(e.id))
    );
}

function W(e) {
    var t;
    let { message: n } = e,
        r = A[n.channel_id],
        i = null != (t = null == r ? void 0 : r.mostRecentRawMessage) ? t : null == r ? void 0 : r.mostRecentMessage;
    if (null == r || null == i || i.id !== n.id) return !1;
    C(r, (e) => {
        null != e.mostRecentMessage && (e.mostRecentMessage = (0, l.IU)(e.mostRecentMessage, n)),
            null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, l.SP)(e.mostRecentRawMessage, n));
    });
}

function K(e) {
    let { id: t, channelId: n } = e,
        r = A[n];
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

function z(e) {
    let { ids: t, channelId: n } = e,
        r = A[n];
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

function q(e) {
    let t = !1;
    for (let n of e.messages) t = D(n.thread) || t;
    if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
    let n = f.A.getChannel(e.channelId);
    if (null == n || !c.Le.has(n.type)) return t;
    T(n, (t) => {
        if (0 === e.messages.length) (t.mostRecentRawMessage = null), (t.mostRecentMessage = null), (t.count = 0);
        else {
            var n;
            let r = null != (n = e.messages[0]) ? n : null;
            (t.count = e.messages.length >= h.su ? h.su : t.count),
                (null == r ? void 0 : r.type) !== m.lAJ.THREAD_STARTER_MESSAGE &&
                    ((t.mostRecentRawMessage = r), (t.mostRecentMessage = null));
        }
    });
}

function X() {
    for (let e in A) {
        let t = A[e];
        if (null != t && null != t.mostRecentMessage) {
            let n = p.A.getMessage(e, t.mostRecentMessage.id);
            if (null == n) continue;
            t.mostRecentMessage = n;
        }
    }
}
class Z extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(f.A, p.A);
    }
    getCount(e) {
        var t, n;
        return null != (t = null == (n = A[e]) ? void 0 : n.count) ? t : null;
    }
    getMostRecentMessage(e) {
        var t, n;
        let r = A[e];
        return null == r
            ? null
            : (null == r.mostRecentMessage &&
                  null != r.mostRecentRawMessage &&
                  ((r.mostRecentMessage =
                      null != (n = p.A.getMessage(e, r.mostRecentRawMessage.id))
                          ? n
                          : (0, l.rh)(r.mostRecentRawMessage)),
                  (r.mostRecentRawMessage = null)),
              null != (t = r.mostRecentMessage) ? t : null);
    }
    getChannelThreadsVersion(e) {
        return v[e];
    }
    getInitialOverlayState() {
        return A;
    }
}
g(Z, "displayName", "ThreadMessageStore");
let Q = new Z(o.h, {
    CONNECTION_OPEN: x,
    OVERLAY_INITIALIZE: L,
    GUILD_CREATE: j,
    GUILD_DELETE: M,
    THREAD_CREATE: k,
    THREAD_UPDATE: k,
    THREAD_LIST_SYNC: U,
    LOAD_THREADS_SUCCESS: G,
    LOAD_ARCHIVED_THREADS_SUCCESS: G,
    RELATIONSHIP_ADD: X,
    RELATIONSHIP_UPDATE: X,
    RELATIONSHIP_REMOVE: X,
    SEARCH_MESSAGES_SUCCESS: V,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: V,
    THREAD_DELETE: B,
    CHANNEL_DELETE: F,
    MESSAGE_CREATE: H,
    MESSAGE_UPDATE: W,
    MESSAGE_DELETE: K,
    MESSAGE_DELETE_BULK: z,
    LOAD_MESSAGES_SUCCESS: q,
});
