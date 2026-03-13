n.d(t, { A: () => v }), n(321073);
var i = n(311907),
    l = n(73153),
    r = n(661191),
    a = n(17447),
    s = n(256331),
    o = n(141850);
let d = [
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
    u = new Map(),
    g = new Set(),
    A = new Map(),
    m = null,
    f = null,
    p = null,
    h = null,
    y = null,
    E = null,
    S = 0;
function _(e) {
    return d[
        (function (e) {
            let t = 0;
            for (let n = 0; n < e.length; n++) t = (31 * t + e.charCodeAt(n)) | 0;
            return Math.abs(t);
        })(e.id) % d.length
    ];
}
function b(e, t) {
    let n = A.get(e);
    if (null == n || 0 === n.length) return !1;
    for (let e = 0; e < n.length; e++) {
        let i = n[e];
        if (t >= i.startTime && t <= i.endTime) return !0;
        if (t < i.startTime) return 0 === e && !i.hasMoreBefore;
        if (e < n.length - 1 && t < n[e + 1].startTime) return !1;
    }
    return !n[n.length - 1].hasMoreAfter;
}
class T extends i.Ay.Store {
    static displayName = "ConversationsStore";
    initialize() {
        this.waitFor(s.A);
    }
    getMessageConversationColor(e, t) {
        if (!s.A.isHighlightingEnabled()) return null;
        let n = c.get(e)?.get(t) ?? null;
        return null == n ? null : null != f && f.has(t) ? n.replace(/,\s*0\.12\)$/, ", 0.24)") : n;
    }
    getChannelConversations(e) {
        return (u.get(e) ?? []).map((e) => ({ conversation: e, color: _(e) }));
    }
    getVisibleConversationIds(e) {
        let t = new Set();
        if (null == p && null == h) return t;
        let n = u.get(e);
        if (null == n) return t;
        for (let e of n) {
            let n = null != h && 0 > r.default.compare(h, e.start_message_id);
            (null != p && r.default.compare(p, e.end_message_id) > 0) || n || t.add(e.id);
        }
        return t;
    }
    getConversationForMessage(e, t) {
        let n = u.get(e);
        if (null == n) return null;
        for (let e of n) if (e.message_ids.includes(t)) return e.id;
        return null;
    }
    getScrollToConversation(e) {
        return E === e && null != y ? { conversationId: y, seq: S } : null;
    }
    hasMoreConversations(e, t) {
        let n = A.get(e);
        return null != n && 0 !== n.length && ("before" === t ? n[0].hasMoreBefore : n[n.length - 1].hasMoreAfter);
    }
    isPendingFetch(e) {
        return g.has(e);
    }
}
let v = new T(l.h, {
    CONVERSATIONS_FETCH_START: function (e) {
        let { channelId: t } = e;
        return g.add(t), !0;
    },
    CONVERSATIONS_FETCH_SUCCESS: function (e) {
        let {
            channelId: t,
            conversations: n,
            direction: i,
            beforeShortCircuited: l,
            afterShortCircuited: a,
            anchor: s,
        } = e;
        g.delete(t),
            (function (e) {
                let {
                        channelId: t,
                        conversations: n,
                        direction: i,
                        beforeShortCircuited: l,
                        afterShortCircuited: a,
                        anchorTimestamp: s,
                    } = e,
                    o = A.get(t) ?? [],
                    d = n.length >= 5;
                if (n.length > 0) {
                    let e,
                        t,
                        s = n.map((e) => r.default.extractTimestamp(e.start_message_id)),
                        c = Math.min(...s),
                        u = Math.max(...s);
                    "around" === i
                        ? ((e = !l && d), (t = !a && d))
                        : "before" === i
                          ? ((e = !l && d), (t = !1))
                          : ((e = !1), (t = !a && d));
                    let g = { startTime: c, endTime: u, hasMoreBefore: e, hasMoreAfter: t };
                    o.push(g);
                } else {
                    let e = s ?? Date.now();
                    o.push({ startTime: e, endTime: e, hasMoreBefore: !1, hasMoreAfter: !1 });
                }
                A.set(
                    t,
                    (function (e) {
                        if (e.length <= 1) return e;
                        e.sort((e, t) => e.startTime - t.startTime);
                        let t = [e[0]];
                        for (let n = 1; n < e.length; n++) {
                            let i = t[t.length - 1],
                                l = e[n];
                            l.startTime <= i.endTime + 1e3
                                ? (l.endTime > i.endTime
                                      ? ((i.endTime = l.endTime), (i.hasMoreAfter = l.hasMoreAfter))
                                      : (i.hasMoreAfter = i.hasMoreAfter && l.hasMoreAfter),
                                  (i.hasMoreBefore = i.hasMoreBefore && l.hasMoreBefore))
                                : t.push(l);
                        }
                        return t;
                    })(o),
                );
            })({
                channelId: t,
                conversations: n,
                direction: i,
                beforeShortCircuited: l,
                afterShortCircuited: a,
                anchorTimestamp: null != s ? r.default.extractTimestamp(s) : void 0,
            });
        let o = (function (e, t) {
            let n = new Map();
            for (let t of e) n.set(t.id, t);
            for (let e of t) n.set(e.id, e);
            let i = Array.from(n.values());
            return i.sort((e, t) => r.default.compare(e.start_message_id, t.start_message_id)), i;
        })(u.get(t) ?? [], n);
        return (
            u.set(t, o),
            c.set(
                t,
                (function (e) {
                    let t = new Map();
                    for (let n of e) {
                        let e = _(n);
                        for (let i of n.message_ids) t.set(i, e);
                    }
                    return t;
                })(o),
            ),
            !0
        );
    },
    CONVERSATIONS_FETCH_FAILURE: function (e) {
        let { channelId: t } = e;
        return g.delete(t), !0;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e;
        return (
            (m = t ?? null),
            (p = null),
            (h = null),
            null != t &&
                !g.has(t) &&
                !u.has(t) &&
                (0, a.f)("channel_select") &&
                (null != n ? (0, o.WF)({ channelId: t, around: n }) : (0, o.WF)({ channelId: t })),
            !0
        );
    },
    UPDATE_VISIBLE_MESSAGES: function (e) {
        let { topVisibleMessage: t, bottomVisibleMessage: n } = e;
        if (null == m || !(0, a.f)("visible_messages")) return !1;
        let i = p !== t,
            l = h !== n;
        if (((p = t ?? null), (h = n ?? null), g.has(m) || null == t)) return i || l;
        let s = r.default.extractTimestamp(t);
        if (b(m, s)) {
            if (null != n) {
                let e = r.default.extractTimestamp(n);
                b(m, e) || (0, o.WF)({ channelId: m, around: n });
            }
        } else (0, o.WF)({ channelId: m, around: t });
        return i || l;
    },
    CONVERSATIONS_HOVER_CONVERSATION: function (e) {
        let { channelId: t, conversationId: n } = e;
        if (null != t && null != n) {
            let e = u.get(t),
                i = e?.find((e) => e.id === n);
            f = null != i ? new Set(i.message_ids) : null;
        } else f = null;
        return !0;
    },
    CONVERSATIONS_SCROLL_TO: function (e) {
        let { channelId: t, conversationId: n } = e;
        return (y = n), (E = t), S++, !0;
    },
});
