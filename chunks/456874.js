var i = n(435558),
    r = n.n(i),
    a = n(855986),
    s = n(73153),
    l = n(432005),
    o = n(95701),
    d = n(383233),
    c = n(619019),
    u = n(734057),
    _ = n(596344),
    E = n(811091);
n(37411);
var A = n(652215);
let h = new Set(),
    f = {},
    I = {};
function p(e, t) {
    var n;
    o.A_.has(e.type) &&
        m(
            ((n = e).id in f ||
                (f[n.id] = {
                    guildId: n.guild_id,
                    parentId: n.parent_id,
                    count: n.messageCount ?? 0,
                    mostRecentRawMessage: null,
                    mostRecentMessage: null,
                }),
            f[n.id]),
            t,
        );
}
function m(e, t) {
    let n = (I[e.parentId] ?? 0) + 1;
    ((I[e.parentId] = n), t(e));
}
function T(e) {
    (e.threads?.forEach(S), e.threadMessages?.forEach(g));
}
function g(e) {
    if (e.type === A.lAJ.THREAD_STARTER_MESSAGE) return;
    let t = u.A.getChannel(e.channel_id);
    null != t &&
        p(t, (t) => {
            ((t.mostRecentRawMessage = e), (t.mostRecentMessage = null));
        });
}
function S(e) {
    p(e, (t) => {
        null != e.messageCount && (t.count = e.messageCount);
        let n = t.mostRecentRawMessage ?? t.mostRecentMessage;
        null != e.lastMessageId &&
            n?.id !== e.lastMessageId &&
            ((t.mostRecentRawMessage = null), (t.mostRecentMessage = null));
    });
}
function N(e) {
    if (null != e && !(e.id in f)) {
        let t = u.A.getChannel(e.id);
        if (null != t) return (S(t), !0);
    }
    return !1;
}
function C(e) {
    let { channel: t } = e;
    S(t);
}
function O(e) {
    let { threads: t } = e;
    t.forEach(N);
}
function R(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t, threads: n } = e;
        (t.forEach((e) => {
            e.forEach((e) => {
                N(e.thread);
            });
        }),
            n.forEach(N));
    });
}
function L() {
    for (let e in f) {
        let t = f[e];
        if (null != t && null != t.mostRecentMessage) {
            let n = _.A.getMessage(e, t.mostRecentMessage.id);
            if (null == n) continue;
            t.mostRecentMessage = n;
        }
    }
}
class y extends a.Ay.Store {
    static displayName = "ThreadMessageStore";
    initialize() {
        this.waitFor(u.A, _.A);
    }
    getCount(e) {
        return f[e]?.count ?? null;
    }
    getMostRecentMessage(e) {
        let t = f[e];
        return null == t
            ? null
            : (null == t.mostRecentMessage &&
                  null != t.mostRecentRawMessage &&
                  ((t.mostRecentMessage =
                      _.A.getMessage(e, t.mostRecentRawMessage.id) ?? (0, l.rh)(t.mostRecentRawMessage)),
                  (t.mostRecentRawMessage = null)),
              t.mostRecentMessage ?? null);
    }
    getChannelThreadsVersion(e) {
        return I[e];
    }
    getInitialOverlayState() {
        return f;
    }
}
let D = new y(s.h, {
    CONNECTION_OPEN: function (e) {
        ((I = {}), h.clear(), e.guilds.forEach(T));
    },
    OVERLAY_INITIALIZE: function (e) {
        let { threadMessages: t } = e;
        for (let e in (f = { ...t })) {
            let n = t[e].mostRecentMessage;
            null != n && (t[e].mostRecentMessage = new d.Ay({ ...n, author: new c.A(n.author) }));
        }
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        T(t);
    },
    GUILD_DELETE: function (e) {
        var t;
        let { guild: n } = e;
        ((t = n.id),
            (f = r().omitBy(f, (e) => {
                let n = e.guildId === t;
                return (n && delete I[e.parentId], n);
            })));
    },
    THREAD_CREATE: C,
    THREAD_UPDATE: C,
    THREAD_LIST_SYNC: function (e) {
        let { threads: t, mostRecentMessages: n } = e;
        (t.forEach(S),
            n?.forEach((e) => {
                let t = u.A.getChannel(e.channel_id);
                null != t &&
                    e.type !== A.lAJ.THREAD_STARTER_MESSAGE &&
                    p(t, (t) => {
                        ((t.mostRecentRawMessage = e), (t.mostRecentMessage = null));
                    });
            }));
    },
    LOAD_THREADS_SUCCESS: O,
    LOAD_ARCHIVED_THREADS_SUCCESS: O,
    RELATIONSHIP_ADD: L,
    RELATIONSHIP_UPDATE: L,
    RELATIONSHIP_REMOVE: L,
    SEARCH_MESSAGES_SUCCESS: R,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: R,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        delete f[t.id];
    },
    CHANNEL_DELETE: function (e) {
        var t;
        let { channel: n } = e;
        ((t = n.id), (f = r().omitBy(f, (e) => e.parentId === t)), delete I[t]);
    },
    MESSAGE_CREATE: function (e) {
        var t, n;
        let { message: i, optimistic: r, isPushNotification: a, sendMessageOptions: s } = e;
        if (r || a || null != s) return !1;
        let l = u.A.getChannel(i.channel_id);
        if (
            null == l ||
            !o.Le.has(l.type) ||
            ((t = l),
            (n = i).type === A.lAJ.THREAD_STARTER_MESSAGE ||
                (t.isForumPost() && n.id === E.default.castChannelIdAsMessageId(t.id)))
        )
            return !1;
        p(l, (e) => {
            ((e.count = Math.min(e.count + 1, 1e5)), (e.mostRecentRawMessage = i), (e.mostRecentMessage = null));
        });
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e,
            n = f[t.channel_id],
            i = n?.mostRecentRawMessage ?? n?.mostRecentMessage;
        if (null == n || null == i || i.id !== t.id) return !1;
        m(n, (e) => {
            (null != e.mostRecentMessage && (e.mostRecentMessage = (0, l.IU)(e.mostRecentMessage, t)),
                null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, l.SP)(e.mostRecentRawMessage, t)));
        });
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e,
            i = f[n];
        if (null == i) return !1;
        let r = E.default.castChannelIdAsMessageId(n) !== t,
            a = !h.has(t);
        m(i, (e) => {
            let n = e.mostRecentRawMessage ?? e.mostRecentMessage;
            (null != n && n.id === t && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)),
                (e.count = r && a ? Math.max(e.count - 1, 0) : e.count),
                h.add(t));
        });
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e,
            i = f[n];
        if (null == i) return !1;
        let r = t.filter((e) => {
            let t = E.default.castChannelIdAsMessageId(n) !== e,
                i = !h.has(e);
            return t && i;
        }).length;
        r > 0 &&
            m(i, (e) => {
                let n = e.mostRecentRawMessage ?? e.mostRecentMessage;
                (null != n && t.includes(n.id) && ((e.mostRecentMessage = null), (e.mostRecentRawMessage = null)),
                    (e.count -= r),
                    t.forEach((e) => h.add(e)));
            });
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let t = !1;
        for (let n of e.messages) t = N(n.thread) || t;
        if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
        let n = u.A.getChannel(e.channelId);
        if (null == n || !o.Le.has(n.type)) return t;
        p(n, (t) => {
            if (0 === e.messages.length) ((t.mostRecentRawMessage = null), (t.mostRecentMessage = null), (t.count = 0));
            else {
                let n = e.messages[0] ?? null;
                ((t.count = e.messages.length >= 1e5 ? 1e5 : t.count),
                    n?.type !== A.lAJ.THREAD_STARTER_MESSAGE &&
                        ((t.mostRecentRawMessage = n), (t.mostRecentMessage = null)));
            }
        });
    },
});
n.d(t, {}, { A: D });
