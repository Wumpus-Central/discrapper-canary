n.d(t, { Z: () => N }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(786761),
    o = n(797316),
    l = n(594174),
    u = n(709054);
function c(e, t, n) {
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
let d = {};
function f() {
    d = {};
}
function _(e) {
    let { threads: t } = e;
    for (let e in t) m(e, t[e].first_message);
}
function p(e) {
    let { threads: t, firstMessages: n } = e;
    if (null == n) return !1;
    for (let e of t)
        d[e.id] = {
            loaded: !0,
            firstMessage: null
        };
    for (let e of n) m(e.channel_id, e);
}
function h(e) {
    if (e.isPushNotification || e.message.id !== u.default.castChannelIdAsMessageId(e.message.channel_id)) return !1;
    m(e.message.channel_id, e.message);
}
function m(e, t) {
    let n = null == t ? null : (0, s.e5)(t);
    d[e] = {
        loaded: !0,
        firstMessage: n
    };
}
function g(e) {
    if (e.message.id !== e.message.channel_id) return !1;
    let t = d[u.default.castMessageIdAsChannelId(e.message.id)];
    if (null == t || null == t.firstMessage) return !1;
    d[u.default.castMessageIdAsChannelId(e.message.id)] = {
        ...t,
        firstMessage: (0, s.wi)(t.firstMessage, e.message)
    };
}
function E(e) {
    if (e.id !== u.default.castChannelIdAsMessageId(e.channelId)) return !1;
    d[e.channelId] = {
        loaded: !0,
        firstMessage: null
    };
}
function v(e) {
    if (null != d[e.channel.id] || !o.Z.isSubscribedToThreads(e.channel.guild_id)) return !1;
    d[e.channel.id] = {
        loaded: !0,
        firstMessage: null
    };
}
function y(e) {
    let { type: t, channelId: n, messageId: i, userId: r, emoji: a, optimistic: s, reactionType: o } = e,
        u = d[n];
    if (null == u || null == u.firstMessage || i !== u.firstMessage.id) return !1;
    let c = l.default.getCurrentUser(),
        f = null != c && c.id === r;
    if (s && !f) return !1;
    (d[n] = { ...u }), 'MESSAGE_REACTION_ADD' === t ? (d[n].firstMessage = u.firstMessage.addReaction(a, f, e.colors, o)) : (d[n].firstMessage = u.firstMessage.removeReaction(a, f, o));
}
function I(e) {
    let { channelId: t, messageId: n, reactions: i } = e,
        r = d[t];
    if (null == r || null == r.firstMessage || n !== r.firstMessage.id) return !1;
    let a = l.default.getCurrentUser(),
        s = r.firstMessage.addReactionBatch(i, null == a ? void 0 : a.id);
    d[t] = {
        ...r,
        firstMessage: s
    };
}
function b(e) {
    let { channelId: t, messageId: n } = e,
        i = d[t];
    if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
    d[t] = {
        ...i,
        firstMessage: i.firstMessage.set('reactions', [])
    };
}
function T(e) {
    let { channelId: t, messageId: n, emoji: i } = e,
        r = d[t];
    if (null == r || null == r.firstMessage || n !== r.firstMessage.id) return !1;
    d[t] = {
        ...r,
        firstMessage: r.firstMessage.removeReactionsForEmoji(i)
    };
}
function S(e) {
    let { channelId: t, messages: n } = e,
        i = n[n.length - 1];
    null != i &&
        i.id === u.default.castChannelIdAsMessageId(t) &&
        (d[t] = {
            loaded: !0,
            firstMessage: (0, s.e5)(i)
        });
}
class A extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(o.Z, l.default);
    }
    isLoading(e) {
        var t;
        return (null === (t = d[e]) || void 0 === t ? void 0 : t.loaded) !== !0;
    }
    getMessage(e) {
        return (
            e in d ||
                (d[e] = {
                    loaded: !1,
                    firstMessage: null
                }),
            d[e]
        );
    }
}
c(A, 'displayName', 'ForumPostMessagesStore');
let N = new A(a.Z, {
    CONNECTION_OPEN: f,
    MESSAGE_CREATE: h,
    MESSAGE_UPDATE: g,
    MESSAGE_DELETE: E,
    THREAD_CREATE: v,
    MESSAGE_REACTION_ADD: y,
    MESSAGE_REACTION_REMOVE: y,
    MESSAGE_REACTION_REMOVE_ALL: b,
    MESSAGE_REACTION_REMOVE_EMOJI: T,
    MESSAGE_REACTION_ADD_MANY: I,
    LOAD_FORUM_POSTS: _,
    LOAD_THREADS_SUCCESS: p,
    LOAD_ARCHIVED_THREADS_SUCCESS: p,
    LOAD_MESSAGES_SUCCESS: S
});
