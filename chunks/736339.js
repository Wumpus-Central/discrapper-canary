"use strict";
n.d(t, { A: () => S }), n(321073);
var l = n(311907),
    a = n(73153),
    s = n(661191),
    i = n(17447),
    r = n(256331),
    o = n(141850),
    c = n(705448);
let u = new Map(),
    d = new Set(),
    m = new Map(),
    g = new Map(),
    h = new Map(),
    p = !1,
    A = null,
    _ = null,
    f = null,
    v = null,
    x = null,
    C = null,
    I = 0,
    N = null,
    E = null,
    b = 0;
class T extends l.Ay.Store {
    static displayName = "ConversationsStore";
    initialize() {
        this.waitFor(r.A);
    }
    getMessageConversationColor(e, t) {
        if (!r.A.isHighlightingEnabled()) return null;
        let n = u.get(e);
        if (null == n) return null;
        let l = n.messageMetadataByMessageId.get(t);
        if (null == l) return null;
        let a = n.conversationMetadataById.get(l.conversationId)?.color ?? null;
        return null == a ? null : null != _ && _.has(t) ? a.replace(/,\s*0\.12\)$/, ", 0.24)") : a;
    }
    getChannelConversations(e) {
        let t = u.get(e);
        return null == t
            ? []
            : t.conversations.map((e) => {
                  let n = t.conversationMetadataById.get(e.id);
                  return { conversation: e, color: n?.color ?? c.J["0"] };
              });
    }
    getVisibleConversationIds(e) {
        let t = new Set();
        if (null == f && null == v) return t;
        let n = u.get(e)?.conversations;
        if (null == n) return t;
        for (let e of n) {
            let n = null != v && 0 > s.default.compare(v, e.start_message_id);
            (null != f && s.default.compare(f, e.end_message_id) > 0) || n || t.add(e.id);
        }
        return t;
    }
    getConversationForMessage(e, t) {
        return u.get(e)?.messageMetadataByMessageId.get(t)?.conversationId ?? null;
    }
    getMessageMetadata(e, t) {
        return u.get(e)?.messageMetadataByMessageId.get(t) ?? null;
    }
    getConversationMetadata(e, t) {
        return u.get(e)?.conversationMetadataById.get(t) ?? null;
    }
    getScrollToConversation(e) {
        return C === e && null != x ? { conversationId: x, seq: I } : null;
    }
    hasMoreConversations(e, t) {
        return !!u.has(e) && ("before" === t ? !g.get(e) : !h.get(e));
    }
    isPendingFetch(e) {
        return d.has(e);
    }
    getSelectedConversation(e) {
        return E !== e || null == N ? null : (u.get(e)?.conversationMetadataById.get(N)?.conversation ?? null);
    }
    getSelectedConversationColor(e) {
        return E !== e || null == N ? null : (u.get(e)?.conversationMetadataById.get(N)?.color ?? null);
    }
}
let S = new T(a.h, {
    CONVERSATIONS_FETCH_START: function (e) {
        let { channelId: t } = e;
        return d.add(t), !0;
    },
    CONVERSATIONS_FETCH_SUCCESS: function (e) {
        let {
            channelId: t,
            conversations: n,
            direction: l,
            beforeShortCircuited: a,
            afterShortCircuited: i,
            isStaleRefresh: r,
        } = e;
        d.delete(t), m.set(t, Date.now());
        let o = u.get(t)?.conversations ?? [];
        r &&
            (o = (function (e, t) {
                if (0 === t.length) return e;
                let n = new Set(t.map((e) => e.id)),
                    l = Math.min(...t.map((e) => s.default.extractTimestamp(e.start_message_id))),
                    a = Math.max(...t.map((e) => s.default.extractTimestamp(e.start_message_id)));
                return e.filter((e) => {
                    let t = s.default.extractTimestamp(e.start_message_id);
                    return t < l || t > a || n.has(e.id);
                });
            })(o, n)),
            a && ("before" === l || "around" === l) && g.set(t, !0),
            i && ("after" === l || "around" === l) && h.set(t, !0);
        let p = (function (e, t) {
            let n = new Map();
            for (let t of e) n.set(t.id, t);
            for (let e of t) n.set(e.id, e);
            let l = Array.from(n.values());
            return l.sort((e, t) => s.default.compare(e.start_message_id, t.start_message_id)), l;
        })(o, n);
        return (
            u.set(
                t,
                (function (e, t) {
                    let n = new Map(),
                        l = new Map();
                    for (let a of e) {
                        let e = t?.conversationMetadataById.get(a.id)?.color ?? c.J[b++ % c.J.length];
                        n.set(a.id, { conversation: a, color: e });
                        let s = null;
                        if (null != a.moderation)
                            for (let e of ((s = new Map()), a.moderation.flagged_message_details)) {
                                let t = s.get(e.message_id);
                                null != t ? t.push(e) : s.set(e.message_id, [e]);
                            }
                        for (let e of a.message_ids) {
                            let t = null;
                            null != a.moderation &&
                                a.moderation.flagged_message_ids.includes(e) &&
                                null != s &&
                                (t = (function (e) {
                                    let t = e[0],
                                        n = e.map((e) => e.category ?? e.reason).filter((e) => null != e),
                                        l = t?.severity ?? null,
                                        a = t?.confidence ?? null,
                                        s = [null != l ? `${l} severity` : null, null != a ? `${a} confidence` : null]
                                            .filter(Boolean)
                                            .join(", "),
                                        i = [n.length > 0 ? n.join(", ") : null, s.length > 0 ? s : null]
                                            .filter(Boolean)
                                            .join(" \xb7 ");
                                    return i.length > 0 ? i : "Moderation Failed";
                                })(s.get(e) ?? [])),
                                l.set(e, { conversationId: a.id, moderationLabel: t });
                        }
                    }
                    return { conversations: e, conversationMetadataById: n, messageMetadataByMessageId: l };
                })(p, u.get(t)),
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
            (p = !1),
            (A = t ?? null),
            (f = null),
            (v = null),
            E !== t && ((N = null), (E = null)),
            null != t &&
                !d.has(t) &&
                !u.has(t) &&
                (0, i.f)("channel_select") &&
                (null != n
                    ? (0, o.WF)({ channelId: t, around: n, limit: 25 })
                    : (0, o.WF)({ channelId: t, limit: 25 })),
            !0
        );
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, jump: n } = e;
        return null != n && A === t && (m.delete(t), g.delete(t), h.delete(t), (p = !0), !0);
    },
    UPDATE_VISIBLE_MESSAGES: function (e) {
        let { topVisibleMessage: t, bottomVisibleMessage: n } = e;
        if (null == A || !(0, i.f)("visible_messages")) return !1;
        let l = f !== t,
            a = v !== n;
        if (((f = t ?? null), (v = n ?? null), !l && !a)) return !1;
        if (d.has(A) || null == t) return !0;
        if (p) return (p = !1), (0, o.WF)({ channelId: A, around: t, limit: 25 }), !0;
        let r = m.get(A) ?? 0,
            c = Date.now() - r;
        if (c < 2e3) return !0;
        let { above: _, below: x } = (function (e, t, n) {
            let l = u.get(e)?.conversations;
            if (null == l || 0 === l.length) return { above: 0, below: 0 };
            let a = 0,
                i = 0;
            for (let e of l)
                null != t && 0 > s.default.compare(e.start_message_id, t) && a++,
                    null != n && s.default.compare(e.start_message_id, n) > 0 && i++;
            return { above: a, below: i };
        })(A, t, n);
        return (
            _ < 5 && !g.get(A)
                ? (0, o.WF)({ channelId: A, before: t, limit: 25 })
                : x < 5 && null != n && !h.get(A)
                  ? (0, o.WF)({ channelId: A, after: n, limit: 25 })
                  : c > 6e4 && (0, o.WF)({ channelId: A, around: t, limit: 25, isStaleRefresh: !0 }),
            !0
        );
    },
    CONVERSATIONS_HOVER_CONVERSATION: function (e) {
        let { channelId: t, conversationId: n } = e;
        if (null != t && null != n) {
            let e = u.get(t)?.conversationMetadataById.get(n)?.conversation;
            _ = null != e ? new Set(e.message_ids) : null;
        } else _ = null;
        return !0;
    },
    SET_SELECTED_CONVERSATION: function (e) {
        let { channelId: t, conversationId: n } = e;
        return (E !== t || N !== n) && ((E = t), (N = n), null != t && null != n && ((x = n), (C = t), I++), !0);
    },
});
