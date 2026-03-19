"use strict";
n.d(t, { A: () => T }), n(321073);
var l = n(311907),
    s = n(73153),
    i = n(661191),
    r = n(17447),
    a = n(256331),
    o = n(141850);
let u = [
        "rgba(88, 101, 242, 0.12)",
        "rgba(87, 242, 135, 0.12)",
        "rgba(254, 231, 92, 0.12)",
        "rgba(235, 69, 158, 0.12)",
        "rgba(237, 66, 69, 0.12)",
        "rgba(49, 196, 182, 0.12)",
        "rgba(230, 126, 34, 0.12)",
        "rgba(149, 165, 166, 0.12)",
        "rgba(155, 89, 182, 0.12)",
        "rgba(52, 152, 219, 0.12)",
    ],
    c = new Map(),
    d = new Set(),
    m = new Map(),
    h = null,
    g = null,
    A = null,
    f = null,
    p = null,
    x = null,
    v = 0;
function C(e) {
    return u[
        (function (e) {
            let t = 0;
            for (let n = 0; n < e.length; n++) t = (31 * t + e.charCodeAt(n)) | 0;
            return Math.abs(t);
        })(e.id) % u.length
    ];
}
function N(e, t) {
    let n = m.get(e);
    if (null == n || 0 === n.length) return !1;
    for (let e = 0; e < n.length; e++) {
        let l = n[e];
        if (t >= l.startTime && t <= l.endTime) return !0;
        if (t < l.startTime) return 0 === e && !l.hasMoreBefore;
        if (e < n.length - 1 && t < n[e + 1].startTime) return !1;
    }
    return !n[n.length - 1].hasMoreAfter;
}
class b extends l.Ay.Store {
    static displayName = "ConversationsStore";
    initialize() {
        this.waitFor(a.A);
    }
    getMessageConversationColor(e, t) {
        if (!a.A.isHighlightingEnabled()) return null;
        let n = c.get(e)?.messageToColor.get(t) ?? null;
        return null == n ? null : null != g && g.has(t) ? n.replace(/,\s*0\.12\)$/, ", 0.24)") : n;
    }
    getChannelConversations(e) {
        return (c.get(e)?.conversations ?? []).map((e) => ({ conversation: e, color: C(e) }));
    }
    getVisibleConversationIds(e) {
        let t = new Set();
        if (null == A && null == f) return t;
        let n = c.get(e)?.conversations;
        if (null == n) return t;
        for (let e of n) {
            let n = null != f && 0 > i.default.compare(f, e.start_message_id);
            (null != A && i.default.compare(A, e.end_message_id) > 0) || n || t.add(e.id);
        }
        return t;
    }
    getMessageModerationLabel(e, t) {
        return a.A.isHighlightingEnabled() && (0, r.f)("message_header")
            ? (c.get(e)?.messageToModerationLabel.get(t) ?? null)
            : null;
    }
    getConversationForMessage(e, t) {
        return c.get(e)?.messageToConversationId.get(t) ?? null;
    }
    getScrollToConversation(e) {
        return x === e && null != p ? { conversationId: p, seq: v } : null;
    }
    hasMoreConversations(e, t) {
        let n = m.get(e);
        return null != n && 0 !== n.length && ("before" === t ? n[0].hasMoreBefore : n[n.length - 1].hasMoreAfter);
    }
    isPendingFetch(e) {
        return d.has(e);
    }
}
let T = new b(s.h, {
    CONVERSATIONS_FETCH_START: function (e) {
        let { channelId: t } = e;
        return d.add(t), !0;
    },
    CONVERSATIONS_FETCH_SUCCESS: function (e) {
        let {
            channelId: t,
            conversations: n,
            direction: l,
            beforeShortCircuited: s,
            afterShortCircuited: r,
            anchor: a,
        } = e;
        d.delete(t),
            (function (e) {
                let {
                        channelId: t,
                        conversations: n,
                        direction: l,
                        beforeShortCircuited: s,
                        afterShortCircuited: r,
                        anchorTimestamp: a,
                    } = e,
                    o = m.get(t) ?? [],
                    u = n.length >= 5;
                if (n.length > 0) {
                    let e,
                        t,
                        a = n.map((e) => i.default.extractTimestamp(e.start_message_id)),
                        c = Math.min(...a),
                        d = Math.max(...a);
                    "around" === l
                        ? ((e = !s && u), (t = !r && u))
                        : "before" === l
                          ? ((e = !s && u), (t = !1))
                          : ((e = !1), (t = !r && u));
                    let m = { startTime: c, endTime: d, hasMoreBefore: e, hasMoreAfter: t };
                    o.push(m);
                } else {
                    let e = a ?? Date.now();
                    o.push({ startTime: e, endTime: e, hasMoreBefore: !1, hasMoreAfter: !1 });
                }
                m.set(
                    t,
                    (function (e) {
                        if (e.length <= 1) return e;
                        e.sort((e, t) => e.startTime - t.startTime);
                        let t = [e[0]];
                        for (let n = 1; n < e.length; n++) {
                            let l = t[t.length - 1],
                                s = e[n];
                            s.startTime <= l.endTime + 1e3
                                ? (s.endTime > l.endTime
                                      ? ((l.endTime = s.endTime), (l.hasMoreAfter = s.hasMoreAfter))
                                      : (l.hasMoreAfter = l.hasMoreAfter && s.hasMoreAfter),
                                  (l.hasMoreBefore = l.hasMoreBefore && s.hasMoreBefore))
                                : t.push(s);
                        }
                        return t;
                    })(o),
                );
            })({
                channelId: t,
                conversations: n,
                direction: l,
                beforeShortCircuited: s,
                afterShortCircuited: r,
                anchorTimestamp: null != a ? i.default.extractTimestamp(a) : void 0,
            });
        let o = (function (e, t) {
            let n = new Map();
            for (let t of e) n.set(t.id, t);
            for (let e of t) n.set(e.id, e);
            let l = Array.from(n.values());
            return l.sort((e, t) => i.default.compare(e.start_message_id, t.start_message_id)), l;
        })(c.get(t)?.conversations ?? [], n);
        return (
            c.set(
                t,
                (function (e) {
                    let t = new Map(),
                        n = new Map(),
                        l = new Map(),
                        s = new Map();
                    for (let i of e) {
                        t.set(i.id, i);
                        let e = C(i);
                        for (let t of i.message_ids) n.set(t, i.id), l.set(t, e);
                        if (null != i.moderation) {
                            let e = new Map();
                            for (let t of i.moderation.flagged_message_details) {
                                let n = e.get(t.message_id);
                                null != n ? n.push(t) : e.set(t.message_id, [t]);
                            }
                            for (let t of i.moderation.flagged_message_ids) {
                                let n = e.get(t) ?? [],
                                    l = n[0],
                                    i = n.map((e) => e.category ?? e.reason).filter((e) => null != e),
                                    r = l?.severity ?? null,
                                    a = l?.confidence ?? null,
                                    o = [null != r ? `${r} severity` : null, null != a ? `${a} confidence` : null]
                                        .filter(Boolean)
                                        .join(", "),
                                    u = [i.length > 0 ? i.join(", ") : null, o.length > 0 ? o : null]
                                        .filter(Boolean)
                                        .join(" \xb7 ");
                                s.set(t, u.length > 0 ? u : "Moderation Failed");
                            }
                        }
                    }
                    return {
                        conversations: e,
                        conversationById: t,
                        messageToConversationId: n,
                        messageToColor: l,
                        messageToModerationLabel: s,
                    };
                })(o),
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
            (h = t ?? null),
            (A = null),
            (f = null),
            null != t &&
                !d.has(t) &&
                !c.has(t) &&
                (0, r.f)("channel_select") &&
                (null != n ? (0, o.WF)({ channelId: t, around: n }) : (0, o.WF)({ channelId: t })),
            !0
        );
    },
    UPDATE_VISIBLE_MESSAGES: function (e) {
        let { topVisibleMessage: t, bottomVisibleMessage: n } = e;
        if (null == h || !(0, r.f)("visible_messages")) return !1;
        let l = A !== t,
            s = f !== n;
        if (((A = t ?? null), (f = n ?? null), d.has(h) || null == t)) return l || s;
        let a = i.default.extractTimestamp(t);
        if (N(h, a)) {
            if (null != n) {
                let e = i.default.extractTimestamp(n);
                N(h, e) || (0, o.WF)({ channelId: h, around: n });
            }
        } else (0, o.WF)({ channelId: h, around: t });
        return l || s;
    },
    CONVERSATIONS_HOVER_CONVERSATION: function (e) {
        let { channelId: t, conversationId: n } = e;
        if (null != t && null != n) {
            let e = c.get(t)?.conversationById.get(n);
            g = null != e ? new Set(e.message_ids) : null;
        } else g = null;
        return !0;
    },
    CONVERSATIONS_SCROLL_TO: function (e) {
        let { channelId: t, conversationId: n } = e;
        return (p = n), (x = t), v++, !0;
    },
});
