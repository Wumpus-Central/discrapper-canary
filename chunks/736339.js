n.d(l, { A: () => M }), n(321073);
var t = n(17928),
    a = n(228366),
    i = n(935208),
    s = n(17447),
    r = n(256331),
    o = n(141850),
    u = n(705448);
let d = new Map(),
    c = new Set(),
    g = new Map(),
    h = new Map(),
    m = new Map(),
    A = !1,
    v = null,
    f = null,
    x = null,
    p = null,
    j = null,
    C = null,
    N = 0,
    I = null,
    _ = null,
    E = 0;
class b extends t.Ay.Store {
    static displayName = "ConversationsStore";
    initialize() {
        this.waitFor(r.A);
    }
    getMessageConversationColor(e, l) {
        if (!r.A.isHighlightingEnabled()) return null;
        let n = d.get(e);
        if (null == n) return null;
        let t = n.messageMetadataByMessageId.get(l);
        if (null == t) return null;
        let a = n.conversationMetadataById.get(t.conversationId)?.color ?? null;
        return null == a ? null : null != f && f.has(l) ? a.replace(/,\s*0\.12\)$/, ", 0.24)") : a;
    }
    getChannelConversations(e) {
        let l = d.get(e);
        return null == l
            ? []
            : l.conversations.map((e) => {
                  let n = l.conversationMetadataById.get(e.id);
                  return { conversation: e, color: n?.color ?? u.J["0"] };
              });
    }
    getVisibleConversationIds(e) {
        let l = new Set();
        if (null == x && null == p) return l;
        let n = d.get(e)?.conversations;
        if (null == n) return l;
        for (let e of n) {
            let n = null != p && 0 > i.default.compare(p, e.start_message_id);
            (null != x && i.default.compare(x, e.end_message_id) > 0) || n || l.add(e.id);
        }
        return l;
    }
    getConversationForMessage(e, l) {
        return d.get(e)?.messageMetadataByMessageId.get(l)?.conversationId ?? null;
    }
    getMessageMetadata(e, l) {
        return d.get(e)?.messageMetadataByMessageId.get(l) ?? null;
    }
    getConversationMetadata(e, l) {
        return d.get(e)?.conversationMetadataById.get(l) ?? null;
    }
    getScrollToConversation(e) {
        return C === e && null != j ? { conversationId: j, seq: N } : null;
    }
    hasMoreConversations(e, l) {
        return !!d.has(e) && ("before" === l ? !h.get(e) : !m.get(e));
    }
    isPendingFetch(e) {
        return c.has(e);
    }
    getSelectedConversation(e) {
        return _ !== e || null == I ? null : (d.get(e)?.conversationMetadataById.get(I)?.conversation ?? null);
    }
    getSelectedConversationColor(e) {
        return _ !== e || null == I ? null : (d.get(e)?.conversationMetadataById.get(I)?.color ?? null);
    }
}
let M = new b(a.h, {
    CONVERSATIONS_FETCH_START: function (e) {
        let { channelId: l } = e;
        return c.add(l), !0;
    },
    CONVERSATIONS_FETCH_SUCCESS: function (e) {
        let {
            channelId: l,
            conversations: n,
            direction: t,
            beforeShortCircuited: a,
            afterShortCircuited: s,
            isStaleRefresh: r,
        } = e;
        c.delete(l), g.set(l, Date.now());
        let o = d.get(l)?.conversations ?? [];
        r &&
            (o = (function (e, l) {
                if (0 === l.length) return e;
                let n = new Set(l.map((e) => e.id)),
                    t = Math.min(...l.map((e) => i.default.extractTimestamp(e.start_message_id))),
                    a = Math.max(...l.map((e) => i.default.extractTimestamp(e.start_message_id)));
                return e.filter((e) => {
                    let l = i.default.extractTimestamp(e.start_message_id);
                    return l < t || l > a || n.has(e.id);
                });
            })(o, n)),
            a && ("before" === t || "around" === t) && h.set(l, !0),
            s && ("after" === t || "around" === t) && m.set(l, !0);
        let A = (function (e, l) {
            let n = new Map();
            for (let l of e) n.set(l.id, l);
            for (let e of l) n.set(e.id, e);
            let t = Array.from(n.values());
            return t.sort((e, l) => i.default.compare(e.start_message_id, l.start_message_id)), t;
        })(o, n);
        return (
            d.set(
                l,
                (function (e, l) {
                    let n = new Map(),
                        t = new Map();
                    for (let a of e) {
                        let e = l?.conversationMetadataById.get(a.id)?.color ?? u.J[E++ % u.J.length];
                        n.set(a.id, { conversation: a, color: e });
                        let i = null;
                        if (null != a.moderation)
                            for (let e of ((i = new Map()), a.moderation.flagged_message_details)) {
                                let l = i.get(e.message_id);
                                null != l ? l.push(e) : i.set(e.message_id, [e]);
                            }
                        for (let e of a.message_ids) {
                            let l = null;
                            null != a.moderation &&
                                a.moderation.flagged_message_ids.includes(e) &&
                                null != i &&
                                (l = (function (e) {
                                    let l = e[0],
                                        n = e.map((e) => e.category ?? e.reason).filter((e) => null != e),
                                        t = l?.severity ?? null,
                                        a = l?.confidence ?? null,
                                        i = [null != t ? `${t} severity` : null, null != a ? `${a} confidence` : null]
                                            .filter(Boolean)
                                            .join(", "),
                                        s = [n.length > 0 ? n.join(", ") : null, i.length > 0 ? i : null]
                                            .filter(Boolean)
                                            .join(" \xb7 ");
                                    return s.length > 0 ? s : "Moderation Failed";
                                })(i.get(e) ?? [])),
                                t.set(e, { conversationId: a.id, moderationLabel: l });
                        }
                    }
                    return { conversations: e, conversationMetadataById: n, messageMetadataByMessageId: t };
                })(A, d.get(l)),
            ),
            !0
        );
    },
    CONVERSATIONS_FETCH_FAILURE: function (e) {
        let { channelId: l } = e;
        return c.delete(l), !0;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: l, messageId: n } = e;
        return (
            (A = !1),
            (v = l ?? null),
            (x = null),
            (p = null),
            _ !== l && ((I = null), (_ = null)),
            null != l &&
                !c.has(l) &&
                !d.has(l) &&
                (0, s.f)("channel_select") &&
                (null != n
                    ? (0, o.WF)({ channelId: l, around: n, limit: 25 })
                    : (0, o.WF)({ channelId: l, limit: 25 })),
            !0
        );
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: l, jump: n } = e;
        return null != n && v === l && (g.delete(l), h.delete(l), m.delete(l), (A = !0), !0);
    },
    UPDATE_VISIBLE_MESSAGES: function (e) {
        let { topVisibleMessage: l, bottomVisibleMessage: n } = e;
        if (null == v || !(0, s.f)("visible_messages")) return !1;
        let t = x !== l,
            a = p !== n;
        if (((x = l ?? null), (p = n ?? null), !t && !a)) return !1;
        if (c.has(v) || null == l) return !0;
        if (A) return (A = !1), (0, o.WF)({ channelId: v, around: l, limit: 25 }), !0;
        let r = g.get(v) ?? 0,
            u = Date.now() - r;
        if (u < 2e3) return !0;
        let { above: f, below: j } = (function (e, l, n) {
            let t = d.get(e)?.conversations;
            if (null == t || 0 === t.length) return { above: 0, below: 0 };
            let a = 0,
                s = 0;
            for (let e of t)
                null != l && 0 > i.default.compare(e.start_message_id, l) && a++,
                    null != n && i.default.compare(e.start_message_id, n) > 0 && s++;
            return { above: a, below: s };
        })(v, l, n);
        return (
            f < 5 && !h.get(v)
                ? (0, o.WF)({ channelId: v, before: l, limit: 25 })
                : j < 5 && null != n && !m.get(v)
                  ? (0, o.WF)({ channelId: v, after: n, limit: 25 })
                  : u > 6e4 && (0, o.WF)({ channelId: v, around: l, limit: 25, isStaleRefresh: !0 }),
            !0
        );
    },
    CONVERSATIONS_HOVER_CONVERSATION: function (e) {
        let { channelId: l, conversationId: n } = e;
        if (null != l && null != n) {
            let e = d.get(l)?.conversationMetadataById.get(n)?.conversation;
            f = null != e ? new Set(e.message_ids) : null;
        } else f = null;
        return !0;
    },
    SET_SELECTED_CONVERSATION: function (e) {
        let { channelId: l, conversationId: n } = e;
        return (_ !== l || I !== n) && ((_ = l), (I = n), null != l && null != n && ((j = n), (C = l), N++), !0);
    },
});
