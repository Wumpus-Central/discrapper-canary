"use strict";
n.d(t, { A: () => D });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(320095),
    l = n(95701),
    u = n(383233),
    c = n(889227),
    d = n(734057),
    _ = n(232835),
    h = n(935208),
    f = n(37411),
    p = n(652215);
let E = new Set(),
    m = {},
    g = {};
function A(e, t) {
    var n;
    l.A_.has(e.type) &&
        I(
            ((n = e).id in m ||
                (m[n.id] = {
                    guildId: n.guild_id,
                    parentId: n.parent_id,
                    count: n.messageCount ?? 0,
                    mostRecentRawMessage: null,
                    mostRecentMessage: null,
                }),
            m[n.id]),
            t,
        );
}
function I(e, t) {
    let n = (g[e.parentId] ?? 0) + 1;
    (g[e.parentId] = n), t(e);
}
function T(e) {
    e.threads?.forEach(y), e.threadMessages?.forEach(S);
}
function S(e) {
    if (e.type === p.lAJ.THREAD_STARTER_MESSAGE) return;
    let t = d.A.getChannel(e.channel_id);
    null != t &&
        A(t, (t) => {
            (t.mostRecentRawMessage = e), (t.mostRecentMessage = null);
        });
}
function y(e) {
    A(e, (t) => {
        null != e.messageCount && (t.count = e.messageCount);
        let n = t.mostRecentRawMessage ?? t.mostRecentMessage;
        null != e.lastMessageId &&
            n?.id !== e.lastMessageId &&
            ((t.mostRecentRawMessage = null), (t.mostRecentMessage = null));
    });
}
function N(e) {
    if (null != e && !(e.id in m)) {
        let t = d.A.getChannel(e.id);
        if (null != t) return y(t), !0;
    }
    return !1;
}
function v(e) {
    let { channel: t } = e;
    y(t);
}
function C(e) {
    let { threads: t } = e;
    t.forEach(N);
}
function R(e) {
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
function O() {
    for (let e in m) {
        let t = m[e];
        if (null != t && null != t.mostRecentMessage) {
            let n = _.A.getMessage(e, t.mostRecentMessage.id);
            if (null == n) continue;
            t.mostRecentMessage = n;
        }
    }
}
class b extends s.Ay.Store {
    static displayName = "ThreadMessageStore";
    initialize() {
        this.waitFor(d.A, _.A);
    }
    getCount(e) {
        return m[e]?.count ?? null;
    }
    getMostRecentMessage(e) {
        let t = m[e];
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
        return g[e];
    }
    getInitialOverlayState() {
        return m;
    }
}
let D = new b(a.h, {
    CONNECTION_OPEN: function (e) {
        (g = {}), E.clear(), e.guilds.forEach(T);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { threadMessages: t } = e;
        for (let e in (m = { ...t })) {
            let n = t[e].mostRecentMessage;
            null != n && (t[e].mostRecentMessage = new u.Ay({ ...n, author: new c.A(n.author) }));
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
            (m = r().omitBy(m, (e) => {
                let n = e.guildId === t;
                return n && delete g[e.parentId], n;
            }));
    },
    THREAD_CREATE: v,
    THREAD_UPDATE: v,
    THREAD_LIST_SYNC: function (e) {
        let { threads: t, mostRecentMessages: n } = e;
        t.forEach(y),
            n?.forEach((e) => {
                let t = d.A.getChannel(e.channel_id);
                null != t &&
                    e.type !== p.lAJ.THREAD_STARTER_MESSAGE &&
                    A(t, (t) => {
                        (t.mostRecentRawMessage = e), (t.mostRecentMessage = null);
                    });
            });
    },
    LOAD_THREADS_SUCCESS: C,
    LOAD_ARCHIVED_THREADS_SUCCESS: C,
    RELATIONSHIP_ADD: O,
    RELATIONSHIP_UPDATE: O,
    RELATIONSHIP_REMOVE: O,
    SEARCH_MESSAGES_SUCCESS: R,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: R,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        delete m[t.id];
    },
    CHANNEL_DELETE: function (e) {
        var t;
        let { channel: n } = e;
        (t = n.id), (m = r().omitBy(m, (e) => e.parentId === t)), delete g[t];
    },
    MESSAGE_CREATE: function (e) {
        var t, n;
        let { message: i, optimistic: r, isPushNotification: s, sendMessageOptions: a } = e;
        if (r || s || null != a) return !1;
        let o = d.A.getChannel(i.channel_id);
        if (
            null == o ||
            !l.Le.has(o.type) ||
            ((t = o),
            (n = i).type === p.lAJ.THREAD_STARTER_MESSAGE ||
                (t.isForumPost() && n.id === h.default.castChannelIdAsMessageId(t.id)))
        )
            return !1;
        A(o, (e) => {
            (e.count = Math.min(e.count + 1, f.su)), (e.mostRecentRawMessage = i), (e.mostRecentMessage = null);
        });
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e,
            n = m[t.channel_id],
            i = n?.mostRecentRawMessage ?? n?.mostRecentMessage;
        if (null == n || null == i || i.id !== t.id) return !1;
        I(n, (e) => {
            null != e.mostRecentMessage && (e.mostRecentMessage = (0, o.IU)(e.mostRecentMessage, t)),
                null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, o.SP)(e.mostRecentRawMessage, t));
        });
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e,
            i = m[n];
        if (null == i) return !1;
        let r = h.default.castChannelIdAsMessageId(n) !== t,
            s = !E.has(t);
        I(i, (e) => {
            let n = e.mostRecentRawMessage ?? e.mostRecentMessage;
            null != n && n.id === t && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)),
                (e.count = r && s ? Math.max(e.count - 1, 0) : e.count),
                E.add(t);
        });
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e,
            i = m[n];
        if (null == i) return !1;
        let r = t.filter((e) => {
            let t = h.default.castChannelIdAsMessageId(n) !== e,
                i = !E.has(e);
            return t && i;
        }).length;
        r > 0 &&
            I(i, (e) => {
                let n = e.mostRecentRawMessage ?? e.mostRecentMessage;
                null != n && t.includes(n.id) && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)),
                    (e.count -= r),
                    t.forEach((e) => E.add(e));
            });
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let t = !1;
        for (let n of e.messages) t = N(n.thread) || t;
        if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
        let n = d.A.getChannel(e.channelId);
        if (null == n || !l.Le.has(n.type)) return t;
        A(n, (t) => {
            if (0 === e.messages.length) (t.mostRecentRawMessage = null), (t.mostRecentMessage = null), (t.count = 0);
            else {
                let n = e.messages[0] ?? null;
                (t.count = e.messages.length >= f.su ? f.su : t.count),
                    n?.type !== p.lAJ.THREAD_STARTER_MESSAGE &&
                        ((t.mostRecentRawMessage = n), (t.mostRecentMessage = null));
            }
        });
    },
});
