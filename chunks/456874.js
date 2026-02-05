"use strict";
n.d(t, { A: () => K });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(141468),
    l = n(95701),
    u = n(383233),
    c = n(427157),
    d = n(734057),
    _ = n(320501),
    f = n(661191),
    p = n(37411),
    h = n(652215);
let m = new Set(),
    g = {},
    E = {};
function A(e) {
    g = i().omitBy(g, (t) => {
        let n = t.guildId === e;
        return n && delete E[t.parentId], n;
    });
}
function I(e) {
    (g = i().omitBy(g, (t) => t.parentId === e)), delete E[e];
}
function T(e, t) {
    l.A_.has(e.type) && y(v(e), t);
}
function y(e, t) {
    let n = (E[e.parentId] ?? 0) + 1;
    (E[e.parentId] = n), t(e);
}
function S(e) {
    e.threads?.forEach(b), e.threadMessages?.forEach(C);
}
function v(e) {
    return (
        e.id in g ||
            (g[e.id] = {
                guildId: e.guild_id,
                parentId: e.parent_id,
                count: e.messageCount ?? 0,
                mostRecentRawMessage: null,
                mostRecentMessage: null,
            }),
        g[e.id]
    );
}
function C(e) {
    if (e.type === h.lAJ.THREAD_STARTER_MESSAGE) return;
    let t = d.A.getChannel(e.channel_id);
    null != t &&
        T(t, (t) => {
            (t.mostRecentRawMessage = e), (t.mostRecentMessage = null);
        });
}
function b(e) {
    T(e, (t) => {
        null != e.messageCount && (t.count = e.messageCount);
        let n = t.mostRecentRawMessage ?? t.mostRecentMessage;
        null != e.lastMessageId &&
            n?.id !== e.lastMessageId &&
            ((t.mostRecentRawMessage = null), (t.mostRecentMessage = null));
    });
}
function N(e) {
    if (null != e && !(e.id in g)) {
        let t = d.A.getChannel(e.id);
        if (null != t) return b(t), !0;
    }
    return !1;
}
function R(e) {
    (E = {}), m.clear(), e.guilds.forEach(S);
}
function O(e) {
    let { threadMessages: t } = e;
    for (let e in (g = { ...t })) {
        let n = t[e].mostRecentMessage;
        null != n && (t[e].mostRecentMessage = new u.Ay({ ...n, author: new c.A(n.author) }));
    }
}
function D(e) {
    let { guild: t } = e;
    S(t);
}
function L(e) {
    let { guild: t } = e;
    A(t.id);
}
function w(e) {
    let { channel: t } = e;
    b(t);
}
function x(e) {
    let { threads: t, mostRecentMessages: n } = e;
    t.forEach(b),
        n?.forEach((e) => {
            let t = d.A.getChannel(e.channel_id);
            null != t &&
                e.type !== h.lAJ.THREAD_STARTER_MESSAGE &&
                T(t, (t) => {
                    (t.mostRecentRawMessage = e), (t.mostRecentMessage = null);
                });
        });
}
function P(e) {
    let { threads: t } = e;
    t.forEach(N);
}
function M(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n } = e;
        t.forEach((e) => {
            e.forEach((e) => {
                N(e.thread);
            });
        }),
            n.forEach(N);
    });
}
function k(e) {
    let { channel: t } = e;
    I(t.id);
}
function U(e) {
    let { channel: t } = e;
    delete g[t.id];
}
function G(e) {
    let { message: t, optimistic: n, isPushNotification: r, sendMessageOptions: i } = e;
    if (n || r || null != i) return !1;
    let a = d.A.getChannel(t.channel_id);
    if (null == a || !l.Le.has(a.type) || !V(a, t)) return !1;
    T(a, (e) => {
        (e.count = Math.min(e.count + 1, p.su)), (e.mostRecentRawMessage = t), (e.mostRecentMessage = null);
    });
}
function V(e, t) {
    return !(
        t.type === h.lAJ.THREAD_STARTER_MESSAGE ||
        (e.isForumPost() && t.id === f.default.castChannelIdAsMessageId(e.id))
    );
}
function F(e) {
    let { message: t } = e,
        n = g[t.channel_id],
        r = n?.mostRecentRawMessage ?? n?.mostRecentMessage;
    if (null == n || null == r || r.id !== t.id) return !1;
    y(n, (e) => {
        null != e.mostRecentMessage && (e.mostRecentMessage = (0, o.IU)(e.mostRecentMessage, t)),
            null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, o.SP)(e.mostRecentRawMessage, t));
    });
}
function B(e) {
    let { id: t, channelId: n } = e,
        r = g[n];
    if (null == r) return !1;
    let i = f.default.castChannelIdAsMessageId(n) !== t,
        a = !m.has(t);
    y(r, (e) => {
        let n = e.mostRecentRawMessage ?? e.mostRecentMessage;
        null != n && n.id === t && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)),
            (e.count = i && a ? Math.max(e.count - 1, 0) : e.count),
            m.add(t);
    });
}
function j(e) {
    let { ids: t, channelId: n } = e,
        r = g[n];
    if (null == r) return !1;
    let i = t.filter((e) => {
        let t = f.default.castChannelIdAsMessageId(n) !== e,
            r = !m.has(e);
        return t && r;
    }).length;
    i > 0 &&
        y(r, (e) => {
            let n = e.mostRecentRawMessage ?? e.mostRecentMessage;
            null != n && t.includes(n.id) && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)),
                (e.count -= i),
                t.forEach((e) => m.add(e));
        });
}
function H(e) {
    let t = !1;
    for (let n of e.messages) t = N(n.thread) || t;
    if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
    let n = d.A.getChannel(e.channelId);
    if (null == n || !l.Le.has(n.type)) return t;
    T(n, (t) => {
        if (0 === e.messages.length) (t.mostRecentRawMessage = null), (t.mostRecentMessage = null), (t.count = 0);
        else {
            let n = e.messages[0] ?? null;
            (t.count = e.messages.length >= p.su ? p.su : t.count),
                n?.type !== h.lAJ.THREAD_STARTER_MESSAGE &&
                    ((t.mostRecentRawMessage = n), (t.mostRecentMessage = null));
        }
    });
}
function Y() {
    for (let e in g) {
        let t = g[e];
        if (null != t && null != t.mostRecentMessage) {
            let n = _.A.getMessage(e, t.mostRecentMessage.id);
            if (null == n) continue;
            t.mostRecentMessage = n;
        }
    }
}
class W extends a.Ay.Store {
    static displayName = "ThreadMessageStore";
    initialize() {
        this.waitFor(d.A, _.A);
    }
    getCount(e) {
        return g[e]?.count ?? null;
    }
    getMostRecentMessage(e) {
        let t = g[e];
        return null == t
            ? null
            : (null == t.mostRecentMessage &&
                  null != t.mostRecentRawMessage &&
                  ((t.mostRecentMessage =
                      _.A.getMessage(e, t.mostRecentRawMessage.id) ?? (0, o.rh)(t.mostRecentRawMessage)),
                  (t.mostRecentRawMessage = null)),
              t.mostRecentMessage ?? null);
    }
    getChannelThreadsVersion(e) {
        return E[e];
    }
    getInitialOverlayState() {
        return g;
    }
}
let K = new W(s.h, {
    CONNECTION_OPEN: R,
    OVERLAY_INITIALIZE: O,
    GUILD_CREATE: D,
    GUILD_DELETE: L,
    THREAD_CREATE: w,
    THREAD_UPDATE: w,
    THREAD_LIST_SYNC: x,
    LOAD_THREADS_SUCCESS: P,
    LOAD_ARCHIVED_THREADS_SUCCESS: P,
    RELATIONSHIP_ADD: Y,
    RELATIONSHIP_UPDATE: Y,
    RELATIONSHIP_REMOVE: Y,
    SEARCH_MESSAGES_SUCCESS: M,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: M,
    THREAD_DELETE: U,
    CHANNEL_DELETE: k,
    MESSAGE_CREATE: G,
    MESSAGE_UPDATE: F,
    MESSAGE_DELETE: B,
    MESSAGE_DELETE_BULK: j,
    LOAD_MESSAGES_SUCCESS: H,
});
