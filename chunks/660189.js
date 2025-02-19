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
function p(e, t) {
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
let _ = {};
function h() {
    _ = {};
}
function m(e) {
    let { threads: t } = e;
    for (let e in t) v(e, t[e].first_message);
}
function g(e) {
    let { threads: t, firstMessages: n } = e;
    if (null == n) return !1;
    for (let e of t)
        _[e.id] = {
            loaded: !0,
            firstMessage: null
        };
    for (let e of n) v(e.channel_id, e);
}
function E(e) {
    if (e.isPushNotification || e.message.id !== c.default.castChannelIdAsMessageId(e.message.channel_id)) return !1;
    v(e.message.channel_id, e.message);
}
function v(e, t) {
    let n = null == t ? null : (0, a.e5)(t);
    _[e] = {
        loaded: !0,
        firstMessage: n
    };
}
function b(e) {
    if (e.message.id !== e.message.channel_id) return !1;
    let t = _[c.default.castMessageIdAsChannelId(e.message.id)];
    if (null == t || null == t.firstMessage) return !1;
    _[c.default.castMessageIdAsChannelId(e.message.id)] = p(d({}, t), { firstMessage: (0, a.wi)(t.firstMessage, e.message) });
}
function y(e) {
    if (e.id !== c.default.castChannelIdAsMessageId(e.channelId)) return !1;
    _[e.channelId] = {
        loaded: !0,
        firstMessage: null
    };
}
function O(e) {
    if (null != _[e.channel.id] || !s.Z.isSubscribedToThreads(e.channel.guild_id)) return !1;
    _[e.channel.id] = {
        loaded: !0,
        firstMessage: null
    };
}
function S(e) {
    let { type: t, channelId: n, messageId: r, userId: i, emoji: o, optimistic: a, reactionType: s } = e,
        c = _[n];
    if (null == c || null == c.firstMessage || r !== c.firstMessage.id) return !1;
    let u = l.default.getCurrentUser(),
        f = null != u && u.id === i;
    if (a && !f) return !1;
    (_[n] = d({}, c)), 'MESSAGE_REACTION_ADD' === t ? (_[n].firstMessage = c.firstMessage.addReaction(o, f, e.colors, s)) : (_[n].firstMessage = c.firstMessage.removeReaction(o, f, s));
}
function I(e) {
    let { channelId: t, messageId: n, reactions: r } = e,
        i = _[t];
    if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
    let o = l.default.getCurrentUser(),
        a = i.firstMessage.addReactionBatch(r, null == o ? void 0 : o.id);
    _[t] = p(d({}, i), { firstMessage: a });
}
function T(e) {
    let { channelId: t, messageId: n } = e,
        r = _[t];
    if (null == r || null == r.firstMessage || n !== r.firstMessage.id) return !1;
    _[t] = p(d({}, r), { firstMessage: r.firstMessage.set('reactions', []) });
}
function N(e) {
    let { channelId: t, messageId: n, emoji: r } = e,
        i = _[t];
    if (null == i || null == i.firstMessage || n !== i.firstMessage.id) return !1;
    _[t] = p(d({}, i), { firstMessage: i.firstMessage.removeReactionsForEmoji(r) });
}
function A(e) {
    let { channelId: t, messages: n } = e,
        r = n[n.length - 1];
    null != r &&
        r.id === c.default.castChannelIdAsMessageId(t) &&
        (_[t] = {
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
        return (null === (t = _[e]) || void 0 === t ? void 0 : t.loaded) !== !0;
    }
    getMessage(e) {
        return (
            e in _ ||
                (_[e] = {
                    loaded: !1,
                    firstMessage: null
                }),
            _[e]
        );
    }
}
u(C, 'displayName', 'ForumPostMessagesStore');
let R = new C(o.Z, {
    CONNECTION_OPEN: h,
    MESSAGE_CREATE: E,
    MESSAGE_UPDATE: b,
    MESSAGE_DELETE: y,
    THREAD_CREATE: O,
    MESSAGE_REACTION_ADD: S,
    MESSAGE_REACTION_REMOVE: S,
    MESSAGE_REACTION_REMOVE_ALL: T,
    MESSAGE_REACTION_REMOVE_EMOJI: N,
    MESSAGE_REACTION_ADD_MANY: I,
    LOAD_FORUM_POSTS: m,
    LOAD_THREADS_SUCCESS: g,
    LOAD_ARCHIVED_THREADS_SUCCESS: g,
    LOAD_MESSAGES_SUCCESS: A
});
