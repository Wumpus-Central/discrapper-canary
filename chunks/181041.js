n.d(t, { A: () => M });
var i = n(635377),
    r = n.n(i),
    a = n(17928),
    s = n(73153),
    l = n(320095),
    o = n(280450),
    d = n(734057),
    c = n(994500),
    u = n(309010),
    _ = n(287809),
    E = n(403362),
    A = n(935208),
    h = n(624044),
    f = n(161204),
    I = n(575279);
let p = new (r())({ max: 10, dispose: D }),
    T = new Map();
function m(e, t) {
    let n = T.get(e);
    return null != n && !!n.has(t) && (n.delete(t), 0 === n.size && T.delete(e), !0);
}
let g = new Map();
function S(e, t) {
    let n = g.get(e);
    null != n && (n.delete(t), 0 === n.size && g.delete(e));
}
function N(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        a = p.peek(e);
    if (null == a) return;
    let s = a.conversationMetadataById.get(t);
    null != s &&
        (0, h.ep)({
            meta: s,
            messages: n,
            fullyHydrated: i,
            messageReferences: r,
            upsertMessage: (e) => {
                let n = a.messageMetadataByMessageId.get(e.id);
                null != n
                    ? ((n.conversationId = t), (n.message = e))
                    : a.messageMetadataByMessageId.set(e.id, { conversationId: t, message: e });
            },
            upsertReference: (e) => {
                a.messageMetadataByMessageId.has(e.id) ||
                    a.messageMetadataByMessageId.set(e.id, { conversationId: null, message: e });
            },
        });
}
function C(e, t) {
    return null == t.conversationId ? null : (e.conversationMetadataById.get(t.conversationId) ?? null);
}
function O(e, t, n) {
    let i = p.peek(e);
    if (null == i) return !1;
    let r = i.messageMetadataByMessageId.get(t);
    if (r?.message == null) return !1;
    let a = n(r.message);
    return null != a && ((r.message = a), (0, h.V)(C(i, r), t, a), !0);
}
function R(e) {
    return O(e.channelId, e.messageId, (t) => (0, h.y4)(e, t));
}
function L() {
    let e = !1;
    return (
        p.forEach((t) => {
            t.messageMetadataByMessageId.forEach((n, i) => {
                if (null == n.message) return;
                let r = (0, h.a)(n.message);
                null != r && ((e = !0), (n.message = r), (0, h.V)(C(t, n), i, r));
            });
        }),
        e
    );
}
function y(e, t) {
    let n = p.peek(e);
    if (null == n) return !1;
    let i = n.messageMetadataByMessageId.get(t),
        r = null != i ? C(n, i) : null;
    return ((0, h.rO)(r, t), n.messageMetadataByMessageId.delete(t));
}
function D(e) {
    return T.delete(e);
}
function v(e) {
    let t = p.has(e);
    p.del(e);
    let n = D(e);
    return t || n;
}
class b extends a.Ay.Store {
    static displayName = "ChannelConversationsStore";
    initialize() {
        this.waitFor(o.default, d.A, c.A, u.Ay, _.default);
    }
    hasChannelData(e) {
        return p.has(e);
    }
    getChannelConversations(e) {
        let t = p.peek(e);
        return null == t ? null : t.conversations;
    }
    getConversationForMessage(e, t) {
        return p.peek(e)?.messageMetadataByMessageId.get(t)?.conversationId ?? null;
    }
    getMessageMetadata(e, t) {
        return p.peek(e)?.messageMetadataByMessageId.get(t) ?? null;
    }
    getMessage(e, t) {
        return this.getMessageMetadata(e, t)?.message ?? null;
    }
    getConversation(e, t) {
        return p.peek(e)?.conversationMetadataById.get(t)?.conversation ?? null;
    }
    getEdgeMarker(e, t) {
        let n = p.peek(e);
        return null == n ? null : "before" === t ? n.reachedOldest : n.reachedNewest;
    }
    isPendingFetch(e) {
        return T.has(e);
    }
    isListFetchPending(e, t) {
        return T.get(e)?.has(t) ?? !1;
    }
    getConversationColor(e, t) {
        let n = p.peek(e);
        if (null == n) return null;
        let i = n.conversations.findIndex((e) => e.id === t);
        return -1 === i ? null : I.J9[i % I.J9.length];
    }
    isFullyHydrated(e, t) {
        return p.peek(e)?.conversationMetadataById.get(t)?.fullyHydrated === !0;
    }
    getHydratedMessages(e, t) {
        return p.peek(e)?.conversationMetadataById.get(t)?.hydratedMessages ?? null;
    }
    getHydratedMessageById(e, t) {
        return p.peek(e)?.messageMetadataByMessageId.get(t)?.message ?? null;
    }
    isConversationFetchPending(e, t) {
        let n = g.get(e);
        return null != n && 0 !== n.size && (!0 !== t || n.has("full"));
    }
    getConversationFeedbackRating(e, t) {
        return p.peek(e)?.recentFeedbackRatingsByConversationId.get(t) ?? null;
    }
}
let M = new b(s.h, {
    CONVERSATION_MESSAGES_FETCH_START: function (e) {
        var t;
        let n,
            { conversationId: i, full: r, cacheType: a } = e;
        if ("channel" !== a) return !1;
        ((t = r ? "full" : "preview"), null != (n = g.get(i)) ? n.add(t) : g.set(i, new Set([t])));
    },
    CONVERSATION_MESSAGES_FETCH_SUCCESS: function (e) {
        let { channelId: t, conversationId: n, messages: i, messageReferences: r, fullyHydrated: a, cacheType: s } = e;
        if ("channel" !== s) return !1;
        (S(n, a ? "full" : "preview"), N(t, n, i, a, r));
    },
    CONVERSATION_MESSAGES_FETCH_FAILURE: function (e) {
        let { conversationId: t, full: n, cacheType: i } = e;
        if ("channel" !== i) return !1;
        S(t, n ? "full" : "preview");
    },
    CHANNEL_CONVERSATIONS_FETCH_START: function (e) {
        let t,
            { channelId: n, requestKey: i, isJump: r } = e;
        (r && T.delete(n), null == (t = T.get(n)) && ((t = new Set()), T.set(n, t)), t.add(i));
    },
    CHANNEL_CONVERSATIONS_FETCH_SUCCESS: function (e) {
        let t,
            {
                channelId: n,
                rawConversations: i,
                direction: a,
                anchor: s,
                isJump: l,
                requestKey: o,
                fullyHydrated: c,
                selectedConversationId: u,
            } = e;
        if (!m(n, o)) return !1;
        let _ = i.map(f.a).filter(E.Vq),
            h = p.peek(n);
        if (l) {
            let e = null != u ? h?.conversationMetadataById.get(u)?.conversation : null;
            t = null != e ? [e] : [];
        } else t = h?.conversations ?? [];
        let I = l ? null : (h?.reachedOldest ?? null),
            T = l ? null : (h?.reachedNewest ?? null),
            g = new Set(t.map((e) => e.id));
        if (
            (_.some((e) => !g.has(e.id)) ||
                null == s ||
                ("before" === a ? (I = Date.now()) : "after" === a && (T = Date.now())),
            "before" === a && null == s && (T = Date.now()),
            (_ = (function (e, t) {
                let n = new Map();
                for (let t of e) n.set(t.id, t);
                for (let e of t) n.set(e.id, e);
                let i = Array.from(n.values());
                return (i.sort((e, t) => A.default.compare(e.startMessageId, t.startMessageId)), i);
            })(t, _)).length > 50)
        )
            if ("after" === a) ((_ = _.slice(_.length - 50)), (I = null));
            else if ("before" === a) ((_ = _.slice(0, 50)), (T = null));
            else {
                let e = (function (e, t) {
                    if (null == t) return 0;
                    let n = e.findIndex((e) => A.default.compare(e.startMessageId, t) >= 0);
                    return (-1 === n && (n = e.length), Math.max(0, Math.min(n - Math.floor(25), e.length - 50)));
                })(_, s);
                (e > 0 && (I = null), e + 50 < _.length && (T = null), (_ = _.slice(e, e + 50)));
            }
        let S = (function (e, t, n) {
            let i = n?.guildId ?? t[0]?.guildId ?? d.A.getChannel(e)?.guild_id ?? null,
                a = new Map(),
                s = new Map();
            for (let e of t) {
                let t = n?.conversationMetadataById.get(e.id),
                    i = t?.hydratedMessages ?? null,
                    r = null != i && !!t?.fullyHydrated;
                for (let t of (a.set(e.id, { conversation: e, hydratedMessages: i, fullyHydrated: r }), e.messageIds)) {
                    let i = n?.messageMetadataByMessageId.get(t);
                    s.set(t, { conversationId: e.id, message: i?.message ?? null });
                    let r = i?.message?.messageReference?.message_id;
                    if (null != r) {
                        let e = n?.messageMetadataByMessageId.get(r);
                        e?.message == null || s.has(r) || s.set(r, e);
                    }
                }
            }
            return {
                guildId: i,
                conversations: t,
                conversationMetadataById: a,
                messageMetadataByMessageId: s,
                recentFeedbackRatingsByConversationId:
                    n?.recentFeedbackRatingsByConversationId ?? new (r())({ max: 10 }),
                reachedOldest: n?.reachedOldest ?? null,
                reachedNewest: n?.reachedNewest ?? null,
            };
        })(n, _, h);
        for (let e of ((S.reachedOldest = I), (S.reachedNewest = T), null != h ? Object.assign(h, S) : p.set(n, S), i))
            null != e.messages && N(n, e.id, e.messages, c);
        return !0;
    },
    CHANNEL_CONVERSATIONS_FETCH_FAILURE: function (e) {
        let { channelId: t, requestKey: n } = e;
        return m(t, n);
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (null != t && p.has(t) && p.get(t), !1);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return v(t.id);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if ("unavailable" in t && !0 === t.unavailable) return !1;
        let n = !1;
        for (let e of p.keys()) p.peek(e)?.guildId === t.id && v(e) && (n = !0);
        return n;
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, jump: n } = e;
        if (null == n || u.Ay.getChannelId() !== t) return !1;
        let i = p.peek(t);
        return null != i && ((i.reachedOldest = null), (i.reachedNewest = null), !0);
    },
    SET_CONVERSATION_FEEDBACK_RATING: function (e) {
        let { channelId: t, conversationId: n, rating: i } = e,
            r = p.peek(t);
        return null != r && (r.recentFeedbackRatingsByConversationId.set(n, i), !0);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e,
            n = t.channel_id,
            i = t.id;
        return null != n && null != i && O(n, i, (e) => (0, l.IU)(e, t));
    },
    MESSAGE_REACTION_ADD: R,
    MESSAGE_REACTION_REMOVE: R,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { channelId: t, messageId: n, reactions: i } = e;
        return O(t, n, (e) => e.addReactionBatch(i, o.default.getId()));
    },
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { channelId: t, messageId: n } = e;
        return O(t, n, (e) => e.set("reactions", []));
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { channelId: t, messageId: n, emoji: i } = e;
        return O(t, n, (e) => e.removeReactionsForEmoji(i));
    },
    MESSAGE_DELETE: function (e) {
        let { channelId: t, id: n } = e;
        return y(t, n);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { channelId: t, ids: n } = e,
            i = !1;
        for (let e of n) y(t, e) && (i = !0);
        return i;
    },
    RELATIONSHIP_ADD: L,
    RELATIONSHIP_UPDATE: L,
    RELATIONSHIP_REMOVE: L,
    LOGOUT: function () {
        (p.reset(), T.clear(), g.clear());
    },
});
