"use strict";
n.d(t, { A: () => L });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(320095),
    l = n(95701),
    d = n(383233),
    _ = n(889227),
    u = n(734057),
    c = n(232835),
    E = n(935208),
    h = n(37411),
    m = n(652215);
let f = new Set(),
    g = {},
    p = {};
function A(e, t) {
    var n;
    l.A_.has(e.type) &&
        I(
            ((n = e).id in g ||
                (g[n.id] = {
                    guildId: n.guild_id,
                    parentId: n.parent_id,
                    count: n.messageCount ?? 0,
                    mostRecentRawMessage: null,
                    mostRecentMessage: null,
                }),
            g[n.id]),
            t,
        );
}
function I(e, t) {
    let n = (p[e.parentId] ?? 0) + 1;
    (p[e.parentId] = n), t(e);
}
function T(e) {
    e.threads?.forEach(N), e.threadMessages?.forEach(S);
}
function S(e) {
    if (e.type === m.lAJ.THREAD_STARTER_MESSAGE) return;
    let t = u.A.getChannel(e.channel_id);
    null != t &&
        A(t, (t) => {
            (t.mostRecentRawMessage = e), (t.mostRecentMessage = null);
        });
}
function N(e) {
    A(e, (t) => {
        null != e.messageCount && (t.count = e.messageCount);
        let n = t.mostRecentRawMessage ?? t.mostRecentMessage;
        null != e.lastMessageId &&
            n?.id !== e.lastMessageId &&
            ((t.mostRecentRawMessage = null), (t.mostRecentMessage = null));
    });
}
function C(e) {
    if (null != e && !(e.id in g)) {
        let t = u.A.getChannel(e.id);
        if (null != t) return N(t), !0;
    }
    return !1;
}
function R(e) {
    let { channel: t } = e;
    N(t);
}
function O(e) {
    let { threads: t } = e;
    t.forEach(C);
}
function y(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n } = e;
        t.forEach((e) => {
            e.forEach((e) => {
                C(e.thread);
            });
        }),
            n.forEach(C);
    });
}
function v() {
    for (let e in g) {
        let t = g[e];
        if (null != t && null != t.mostRecentMessage) {
            let n = c.A.getMessage(e, t.mostRecentMessage.id);
            if (null == n) continue;
            t.mostRecentMessage = n;
        }
    }
}
class D extends s.Ay.Store {
    static displayName = "ThreadMessageStore";
    initialize() {
        this.waitFor(u.A, c.A);
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
                      c.A.getMessage(e, t.mostRecentRawMessage.id) ?? (0, o.rh)(t.mostRecentRawMessage)),
                  (t.mostRecentRawMessage = null)),
              t.mostRecentMessage ?? null);
    }
    getChannelThreadsVersion(e) {
        return p[e];
    }
    getInitialOverlayState() {
        return g;
    }
}
let L = new D(a.h, {
    CONNECTION_OPEN: function (e) {
        (p = {}), f.clear(), e.guilds.forEach(T);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { threadMessages: t } = e;
        for (let e in (g = { ...t })) {
            let n = t[e].mostRecentMessage;
            null != n && (t[e].mostRecentMessage = new d.Ay({ ...n, author: new _.A(n.author) }));
        }
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        T(t);
    },
    GUILD_DELETE: function (e) {
        var t;
        let { guild: n } = e;
        (t = n.id),
            (g = r().omitBy(g, (e) => {
                let n = e.guildId === t;
                return n && delete p[e.parentId], n;
            }));
    },
    THREAD_CREATE: R,
    THREAD_UPDATE: R,
    THREAD_LIST_SYNC: function (e) {
        let { threads: t, mostRecentMessages: n } = e;
        t.forEach(N),
            n?.forEach((e) => {
                let t = u.A.getChannel(e.channel_id);
                null != t &&
                    e.type !== m.lAJ.THREAD_STARTER_MESSAGE &&
                    A(t, (t) => {
                        (t.mostRecentRawMessage = e), (t.mostRecentMessage = null);
                    });
            });
    },
    LOAD_THREADS_SUCCESS: O,
    LOAD_ARCHIVED_THREADS_SUCCESS: O,
    RELATIONSHIP_ADD: v,
    RELATIONSHIP_UPDATE: v,
    RELATIONSHIP_REMOVE: v,
    SEARCH_MESSAGES_SUCCESS: y,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: y,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        delete g[t.id];
    },
    CHANNEL_DELETE: function (e) {
        var t;
        let { channel: n } = e;
        (t = n.id), (g = r().omitBy(g, (e) => e.parentId === t)), delete p[t];
    },
    MESSAGE_CREATE: function (e) {
        var t, n;
        let { message: i, optimistic: r, isPushNotification: s, sendMessageOptions: a } = e;
        if (r || s || null != a) return !1;
        let o = u.A.getChannel(i.channel_id);
        if (
            null == o ||
            !l.Le.has(o.type) ||
            ((t = o),
            (n = i).type === m.lAJ.THREAD_STARTER_MESSAGE ||
                (t.isForumPost() && n.id === E.default.castChannelIdAsMessageId(t.id)))
        )
            return !1;
        A(o, (e) => {
            (e.count = Math.min(e.count + 1, h.su)), (e.mostRecentRawMessage = i), (e.mostRecentMessage = null);
        });
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e,
            n = g[t.channel_id],
            i = n?.mostRecentRawMessage ?? n?.mostRecentMessage;
        if (null == n || null == i || i.id !== t.id) return !1;
        I(n, (e) => {
            null != e.mostRecentMessage && (e.mostRecentMessage = (0, o.IU)(e.mostRecentMessage, t)),
                null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, o.SP)(e.mostRecentRawMessage, t));
        });
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e,
            i = g[n];
        if (null == i) return !1;
        let r = E.default.castChannelIdAsMessageId(n) !== t,
            s = !f.has(t);
        I(i, (e) => {
            let n = e.mostRecentRawMessage ?? e.mostRecentMessage;
            null != n && n.id === t && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)),
                (e.count = r && s ? Math.max(e.count - 1, 0) : e.count),
                f.add(t);
        });
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e,
            i = g[n];
        if (null == i) return !1;
        let r = t.filter((e) => {
            let t = E.default.castChannelIdAsMessageId(n) !== e,
                i = !f.has(e);
            return t && i;
        }).length;
        r > 0 &&
            I(i, (e) => {
                let n = e.mostRecentRawMessage ?? e.mostRecentMessage;
                null != n && t.includes(n.id) && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)),
                    (e.count -= r),
                    t.forEach((e) => f.add(e));
            });
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let t = !1;
        for (let n of e.messages) t = C(n.thread) || t;
        if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
        let n = u.A.getChannel(e.channelId);
        if (null == n || !l.Le.has(n.type)) return t;
        A(n, (t) => {
            if (0 === e.messages.length) (t.mostRecentRawMessage = null), (t.mostRecentMessage = null), (t.count = 0);
            else {
                let n = e.messages[0] ?? null;
                (t.count = e.messages.length >= h.su ? h.su : t.count),
                    n?.type !== m.lAJ.THREAD_STARTER_MESSAGE &&
                        ((t.mostRecentRawMessage = n), (t.mostRecentMessage = null));
            }
        });
    },
});
