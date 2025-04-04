n.d(t, { Z: () => R }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(786761),
    s = n(797316),
    l = n(594174),
    c = n(709054);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = {};
function h() {
    p = {};
}
function m(e) {
    let { threads: t } = e;
    for (let e in t) b(e, t[e].first_message);
}
function g(e) {
    let { threads: t, firstMessages: n } = e;
    if (null == n) return !1;
    for (let e of t)
        p[e.id] = {
            loaded: !0,
            firstMessage: null
        };
    for (let e of n) b(e.channel_id, e);
}
function E(e) {
    if (e.isPushNotification || e.message.id !== c.default.castChannelIdAsMessageId(e.message.channel_id)) return !1;
    b(e.message.channel_id, e.message);
}
function b(e, t) {
    let n = null == t ? null : (0, a.e5)(t);
    p[e] = {
        loaded: !0,
        firstMessage: n
    };
}
function y(e) {
    if (e.message.id !== e.message.channel_id) return !1;
    let t = p[c.default.castMessageIdAsChannelId(e.message.id)];
    if (null == t || null == t.firstMessage) return !1;
    p[c.default.castMessageIdAsChannelId(e.message.id)] = _(d({}, t), { firstMessage: (0, a.wi)(t.firstMessage, e.message) });
}
function v(e) {
    if (e.id !== c.default.castChannelIdAsMessageId(e.channelId)) return !1;
    p[e.channelId] = {
        loaded: !0,
        firstMessage: null
    };
}
function O(e) {
    if (null != p[e.channel.id] || !s.Z.isSubscribedToThreads(e.channel.guild_id)) return !1;
    p[e.channel.id] = {
        loaded: !0,
        firstMessage: null
    };
}
function I(e) {
    let { type: t, channelId: n, messageId: r, userId: i, emoji: o, optimistic: a, reactionType: s } = e,
        c = p[n];
    if (null == c || null == c.firstMessage || r !== c.firstMessage.id) return !1;
    let u = l.default.getCurrentUser(),
        f = null != u && u.id === i;
    if (a && !f) return !1;
    (p[n] = d({}, c)), 'MESSAGE_REACTION_ADD' === t ? (p[n].firstMessage = c.firstMessage.addReaction(o, f, e.colors, s)) : (p[n].firstMessage = c.firstMessage.removeReaction(o, f, s));
}
function S(e) {
    let { channelId: t, messageId: n, reactions: r } = e,
        i = p[t];
    if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
    let o = l.default.getCurrentUser(),
        a = i.firstMessage.addReactionBatch(r, null == o ? void 0 : o.id);
    p[t] = _(d({}, i), { firstMessage: a });
}
function T(e) {
    let { channelId: t, messageId: n } = e,
        r = p[t];
    if (null == r || null == r.firstMessage || n !== r.firstMessage.id) return !1;
    p[t] = _(d({}, r), { firstMessage: r.firstMessage.set('reactions', []) });
}
function N(e) {
    let { channelId: t, messageId: n, emoji: r } = e,
        i = p[t];
    if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
    p[t] = _(d({}, i), { firstMessage: i.firstMessage.removeReactionsForEmoji(r) });
}
function A(e) {
    let { channelId: t, messages: n } = e,
        r = n[n.length - 1];
    null != r &&
        r.id === c.default.castChannelIdAsMessageId(t) &&
        (p[t] = {
            loaded: !0,
            firstMessage: (0, a.e5)(r)
        });
}
class C extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, l.default);
    }
    isLoading(e) {
        var t;
        return (null == (t = p[e]) ? void 0 : t.loaded) !== !0;
    }
    getMessage(e) {
        return (
            e in p ||
                (p[e] = {
                    loaded: !1,
                    firstMessage: null
                }),
            p[e]
        );
    }
}
u(C, 'displayName', 'ForumPostMessagesStore');
let R = new C(o.Z, {
    CONNECTION_OPEN: h,
    MESSAGE_CREATE: E,
    MESSAGE_UPDATE: y,
    MESSAGE_DELETE: v,
    THREAD_CREATE: O,
    MESSAGE_REACTION_ADD: I,
    MESSAGE_REACTION_REMOVE: I,
    MESSAGE_REACTION_REMOVE_ALL: T,
    MESSAGE_REACTION_REMOVE_EMOJI: N,
    MESSAGE_REACTION_ADD_MANY: S,
    LOAD_FORUM_POSTS: m,
    LOAD_THREADS_SUCCESS: g,
    LOAD_ARCHIVED_THREADS_SUCCESS: g,
    LOAD_MESSAGES_SUCCESS: A
});
