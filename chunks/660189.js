var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(786761),
    u = r(797316),
    c = r(594174),
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
function h() {
    p = {};
}
function _(e) {
    let { threads: n } = e;
    for (let e in n) E(e, n[e].first_message);
}
function m(e) {
    let { threads: n, firstMessages: r } = e;
    if (null == r) return !1;
    for (let e of n)
        p[e.id] = {
            loaded: !0,
            firstMessage: null
        };
    for (let e of r) E(e.channel_id, e);
}
function g(e) {
    if (e.isPushNotification || e.message.id !== d.default.castChannelIdAsMessageId(e.message.channel_id)) return !1;
    E(e.message.channel_id, e.message);
}
function E(e, n) {
    let r = null == n ? null : (0, l.e5)(n);
    p[e] = {
        loaded: !0,
        firstMessage: r
    };
}
function v(e) {
    if (e.message.id !== e.message.channel_id) return !1;
    let n = p[d.default.castMessageIdAsChannelId(e.message.id)];
    if (null == n || null == n.firstMessage) return !1;
    p[d.default.castMessageIdAsChannelId(e.message.id)] = {
        ...n,
        firstMessage: (0, l.wi)(n.firstMessage, e.message)
    };
}
function y(e) {
    if (e.id !== d.default.castChannelIdAsMessageId(e.channelId)) return !1;
    p[e.channelId] = {
        loaded: !0,
        firstMessage: null
    };
}
function b(e) {
    if (null != p[e.channel.id] || !u.Z.isSubscribedToThreads(e.channel.guild_id)) return !1;
    p[e.channel.id] = {
        loaded: !0,
        firstMessage: null
    };
}
function I(e) {
    let { type: n, channelId: r, messageId: i, userId: a, emoji: o, optimistic: s, reactionType: l } = e,
        u = p[r];
    if (null == u || null == u.firstMessage || i !== u.firstMessage.id) return !1;
    let d = c.default.getCurrentUser(),
        f = null != d && d.id === a;
    if (s && !f) return !1;
    (p[r] = { ...u }), 'MESSAGE_REACTION_ADD' === n ? (p[r].firstMessage = u.firstMessage.addReaction(o, f, e.colors, l)) : (p[r].firstMessage = u.firstMessage.removeReaction(o, f, l));
}
function T(e) {
    let { channelId: n, messageId: r, reactions: i } = e,
        a = p[n];
    if (null == a || null == a.firstMessage || r !== a.firstMessage.id) return !1;
    let o = c.default.getCurrentUser(),
        s = a.firstMessage.addReactionBatch(i, null == o ? void 0 : o.id);
    p[n] = {
        ...a,
        firstMessage: s
    };
}
function S(e) {
    let { channelId: n, messageId: r } = e,
        i = p[n];
    if (null == i || null == i.firstMessage || r !== i.firstMessage.id) return !1;
    p[n] = {
        ...i,
        firstMessage: i.firstMessage.set('reactions', [])
    };
}
function A(e) {
    let { channelId: n, messageId: r, emoji: i } = e,
        a = p[n];
    if (null == a || null == a.firstMessage || r !== a.firstMessage.id) return !1;
    p[n] = {
        ...a,
        firstMessage: a.firstMessage.removeReactionsForEmoji(i)
    };
}
function C(e) {
    let { channelId: n, messages: r } = e,
        i = r[r.length - 1];
    null != i &&
        i.id === d.default.castChannelIdAsMessageId(n) &&
        (p[n] = {
            loaded: !0,
            firstMessage: (0, l.e5)(i)
        });
}
class N extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, c.default);
    }
    isLoading(e) {
        var n;
        return (null === (n = p[e]) || void 0 === n ? void 0 : n.loaded) !== !0;
    }
    getMessage(e) {
        return (
            !(e in p) &&
                (p[e] = {
                    loaded: !1,
                    firstMessage: null
                }),
            p[e]
        );
    }
}
f(N, 'displayName', 'ForumPostMessagesStore'),
    (n.Z = new N(s.Z, {
        CONNECTION_OPEN: h,
        MESSAGE_CREATE: g,
        MESSAGE_UPDATE: v,
        MESSAGE_DELETE: y,
        THREAD_CREATE: b,
        MESSAGE_REACTION_ADD: I,
        MESSAGE_REACTION_REMOVE: I,
        MESSAGE_REACTION_REMOVE_ALL: S,
        MESSAGE_REACTION_REMOVE_EMOJI: A,
        MESSAGE_REACTION_ADD_MANY: T,
        LOAD_FORUM_POSTS: _,
        LOAD_THREADS_SUCCESS: m,
        LOAD_ARCHIVED_THREADS_SUCCESS: m,
        LOAD_MESSAGES_SUCCESS: C
    }));
