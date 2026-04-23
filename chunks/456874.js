"use strict";
n.d(t, { A: () => D });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(141468),
    l = n(95701),
    u = n(383233),
    c = n(427157),
    d = n(734057),
    _ = n(320501),
    f = n(661191),
    p = n(37411),
    h = n(652215);
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
    if (e.type === h.lAJ.THREAD_STARTER_MESSAGE) return;
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
function O(e) {
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
function R() {
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
            (m = i().omitBy(m, (e) => {
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
                    e.type !== h.lAJ.THREAD_STARTER_MESSAGE &&
                    A(t, (t) => {
                        (t.mostRecentRawMessage = e), (t.mostRecentMessage = null);
                    });
            });
    },
    LOAD_THREADS_SUCCESS: C,
    LOAD_ARCHIVED_THREADS_SUCCESS: C,
    RELATIONSHIP_ADD: R,
    RELATIONSHIP_UPDATE: R,
    RELATIONSHIP_REMOVE: R,
    SEARCH_MESSAGES_SUCCESS: O,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: O,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        delete m[t.id];
    },
    CHANNEL_DELETE: function (e) {
        var t;
        let { channel: n } = e;
        (t = n.id), (m = i().omitBy(m, (e) => e.parentId === t)), delete g[t];
    },
    MESSAGE_CREATE: function (e) {
        var t, n;
        let { message: r, optimistic: i, isPushNotification: s, sendMessageOptions: a } = e;
        if (i || s || null != a) return !1;
        let o = d.A.getChannel(r.channel_id);
        if (
            null == o ||
            !l.Le.has(o.type) ||
            ((t = o),
            (n = r).type === h.lAJ.THREAD_STARTER_MESSAGE ||
                (t.isForumPost() && n.id === f.default.castChannelIdAsMessageId(t.id)))
        )
            return !1;
        A(o, (e) => {
            (e.count = Math.min(e.count + 1, p.su)), (e.mostRecentRawMessage = r), (e.mostRecentMessage = null);
        });
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e,
            n = m[t.channel_id],
            r = n?.mostRecentRawMessage ?? n?.mostRecentMessage;
        if (null == n || null == r || r.id !== t.id) return !1;
        I(n, (e) => {
            null != e.mostRecentMessage && (e.mostRecentMessage = (0, o.IU)(e.mostRecentMessage, t)),
                null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, o.SP)(e.mostRecentRawMessage, t));
        });
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e,
            r = m[n];
        if (null == r) return !1;
        let i = f.default.castChannelIdAsMessageId(n) !== t,
            s = !E.has(t);
        I(r, (e) => {
            let n = e.mostRecentRawMessage ?? e.mostRecentMessage;
            null != n && n.id === t && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)),
                (e.count = i && s ? Math.max(e.count - 1, 0) : e.count),
                E.add(t);
        });
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e,
            r = m[n];
        if (null == r) return !1;
        let i = t.filter((e) => {
            let t = f.default.castChannelIdAsMessageId(n) !== e,
                r = !E.has(e);
            return t && r;
        }).length;
        i > 0 &&
            I(r, (e) => {
                let n = e.mostRecentRawMessage ?? e.mostRecentMessage;
                null != n && t.includes(n.id) && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)),
                    (e.count -= i),
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
                (t.count = e.messages.length >= p.su ? p.su : t.count),
                    n?.type !== h.lAJ.THREAD_STARTER_MESSAGE &&
                        ((t.mostRecentRawMessage = n), (t.mostRecentMessage = null));
            }
        });
    },
});
