"use strict";
n.d(t, { A: () => j }), n(321073);
var l = n(311907),
    i = n(73153),
    s = n(661191),
    a = n(17447),
    r = n(256331),
    o = n(141850),
    u = n(705448);
let c = new Map(),
    d = new Set(),
    m = new Map(),
    g = new Map(),
    h = new Map(),
    A = !1,
    f = null,
    p = null,
    x = null,
    v = null,
    C = null,
    N = null,
    E = 0,
    I = null,
    _ = null,
    b = 0;
class S extends l.Ay.Store {
    static displayName = "ConversationsStore";
    initialize() {
        this.waitFor(r.A);
    }
    getMessageConversationColor(e, t) {
        if (!r.A.isHighlightingEnabled()) return null;
        let n = c.get(e);
        if (null == n) return null;
        let l = n.messageMetadataByMessageId.get(t);
        if (null == l) return null;
        let i = n.conversationMetadataById.get(l.conversationId)?.color ?? null;
        return null == i ? null : null != p && p.has(t) ? i.replace(/,\s*0\.12\)$/, ", 0.24)") : i;
    }
    getChannelConversations(e) {
        let t = c.get(e);
        return null == t
            ? []
            : t.conversations.map((e) => {
                  let n = t.conversationMetadataById.get(e.id);
                  return { conversation: e, color: n?.color ?? u.J["0"] };
              });
    }
    getVisibleConversationIds(e) {
        let t = new Set();
        if (null == x && null == v) return t;
        let n = c.get(e)?.conversations;
        if (null == n) return t;
        for (let e of n) {
            let n = null != v && 0 > s.default.compare(v, e.start_message_id);
            (null != x && s.default.compare(x, e.end_message_id) > 0) || n || t.add(e.id);
        }
        return t;
    }
    getConversationForMessage(e, t) {
        return c.get(e)?.messageMetadataByMessageId.get(t)?.conversationId ?? null;
    }
    getMessageMetadata(e, t) {
        return c.get(e)?.messageMetadataByMessageId.get(t) ?? null;
    }
    getConversationMetadata(e, t) {
        return c.get(e)?.conversationMetadataById.get(t) ?? null;
    }
    getScrollToConversation(e) {
        return N === e && null != C ? { conversationId: C, seq: E } : null;
    }
    hasMoreConversations(e, t) {
        return !!c.has(e) && ("before" === t ? !g.get(e) : !h.get(e));
    }
    isPendingFetch(e) {
        return d.has(e);
    }
    getSelectedConversation(e) {
        return _ !== e || null == I ? null : (c.get(e)?.conversationMetadataById.get(I)?.conversation ?? null);
    }
    getSelectedConversationColor(e) {
        return _ !== e || null == I ? null : (c.get(e)?.conversationMetadataById.get(I)?.color ?? null);
    }
}
let j = new S(i.h, {
    CONVERSATIONS_FETCH_START: function (e) {
        let { channelId: t } = e;
        return d.add(t), !0;
    },
    CONVERSATIONS_FETCH_SUCCESS: function (e) {
        let {
            channelId: t,
            conversations: n,
            direction: l,
            beforeShortCircuited: i,
            afterShortCircuited: a,
            isStaleRefresh: r,
        } = e;
        d.delete(t), m.set(t, Date.now());
        let o = c.get(t)?.conversations ?? [];
        r &&
            (o = (function (e, t) {
                if (0 === t.length) return e;
                let n = new Set(t.map((e) => e.id)),
                    l = Math.min(...t.map((e) => s.default.extractTimestamp(e.start_message_id))),
                    i = Math.max(...t.map((e) => s.default.extractTimestamp(e.start_message_id)));
                return e.filter((e) => {
                    let t = s.default.extractTimestamp(e.start_message_id);
                    return t < l || t > i || n.has(e.id);
                });
            })(o, n)),
            i && ("before" === l || "around" === l) && g.set(t, !0),
            a && ("after" === l || "around" === l) && h.set(t, !0);
        let A = (function (e, t) {
            let n = new Map();
            for (let t of e) n.set(t.id, t);
            for (let e of t) n.set(e.id, e);
            let l = Array.from(n.values());
            return l.sort((e, t) => s.default.compare(e.start_message_id, t.start_message_id)), l;
        })(o, n);
        return (
            c.set(
                t,
                (function (e, t) {
                    let n = new Map(),
                        l = new Map();
                    for (let i of e) {
                        let e = t?.conversationMetadataById.get(i.id)?.color ?? u.J[b++ % u.J.length];
                        n.set(i.id, { conversation: i, color: e });
                        let s = null;
                        if (null != i.moderation)
                            for (let e of ((s = new Map()), i.moderation.flagged_message_details)) {
                                let t = s.get(e.message_id);
                                null != t ? t.push(e) : s.set(e.message_id, [e]);
                            }
                        for (let e of i.message_ids) {
                            let t = null;
                            null != i.moderation &&
                                i.moderation.flagged_message_ids.includes(e) &&
                                null != s &&
                                (t = (function (e) {
                                    let t = e[0],
                                        n = e.map((e) => e.category ?? e.reason).filter((e) => null != e),
                                        l = t?.severity ?? null,
                                        i = t?.confidence ?? null,
                                        s = [null != l ? `${l} severity` : null, null != i ? `${i} confidence` : null]
                                            .filter(Boolean)
                                            .join(", "),
                                        a = [n.length > 0 ? n.join(", ") : null, s.length > 0 ? s : null]
                                            .filter(Boolean)
                                            .join(" \xb7 ");
                                    return a.length > 0 ? a : "Moderation Failed";
                                })(s.get(e) ?? [])),
                                l.set(e, { conversationId: i.id, moderationLabel: t });
                        }
                    }
                    return { conversations: e, conversationMetadataById: n, messageMetadataByMessageId: l };
                })(A, c.get(t)),
            ),
            !0
        );
    },
    CONVERSATIONS_FETCH_FAILURE: function (e) {
        let { channelId: t } = e;
        return d.delete(t), !0;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e;
        return (
            (A = !1),
            (f = t ?? null),
            (x = null),
            (v = null),
            _ !== t && ((I = null), (_ = null)),
            null != t &&
                !d.has(t) &&
                !c.has(t) &&
                (0, a.f)("channel_select") &&
                (null != n
                    ? (0, o.WF)({ channelId: t, around: n, limit: 25 })
                    : (0, o.WF)({ channelId: t, limit: 25 })),
            !0
        );
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, jump: n } = e;
        return null != n && f === t && (m.delete(t), g.delete(t), h.delete(t), (A = !0), !0);
    },
    UPDATE_VISIBLE_MESSAGES: function (e) {
        let { topVisibleMessage: t, bottomVisibleMessage: n } = e;
        if (null == f || !(0, a.f)("visible_messages")) return !1;
        let l = x !== t,
            i = v !== n;
        if (((x = t ?? null), (v = n ?? null), !l && !i)) return !1;
        if (d.has(f) || null == t) return !0;
        if (A) return (A = !1), (0, o.WF)({ channelId: f, around: t, limit: 25 }), !0;
        let r = m.get(f) ?? 0,
            u = Date.now() - r;
        if (u < 2e3) return !0;
        let { above: p, below: C } = (function (e, t, n) {
            let l = c.get(e)?.conversations;
            if (null == l || 0 === l.length) return { above: 0, below: 0 };
            let i = 0,
                a = 0;
            for (let e of l)
                null != t && 0 > s.default.compare(e.start_message_id, t) && i++,
                    null != n && s.default.compare(e.start_message_id, n) > 0 && a++;
            return { above: i, below: a };
        })(f, t, n);
        return (
            p < 5 && !g.get(f)
                ? (0, o.WF)({ channelId: f, before: t, limit: 25 })
                : C < 5 && null != n && !h.get(f)
                  ? (0, o.WF)({ channelId: f, after: n, limit: 25 })
                  : u > 6e4 && (0, o.WF)({ channelId: f, around: t, limit: 25, isStaleRefresh: !0 }),
            !0
        );
    },
    CONVERSATIONS_HOVER_CONVERSATION: function (e) {
        let { channelId: t, conversationId: n } = e;
        if (null != t && null != n) {
            let e = c.get(t)?.conversationMetadataById.get(n)?.conversation;
            p = null != e ? new Set(e.message_ids) : null;
        } else p = null;
        return !0;
    },
    SET_SELECTED_CONVERSATION: function (e) {
        let { channelId: t, conversationId: n } = e;
        return (_ !== t || I !== n) && ((_ = t), (I = n), null != t && null != n && ((C = n), (N = t), E++), !0);
    },
});
