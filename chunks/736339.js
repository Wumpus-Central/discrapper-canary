n.d(t, { A: () => g });
var i = n(311907),
    l = n(73153),
    s = n(17447),
    a = n(256331),
    r = n(141850);
let o = [
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
    d = new Map(),
    u = new Set(),
    h = new Map(),
    m = new Map();
class A extends i.Ay.Store {
    static displayName = "ConversationsStore";
    initialize() {
        this.waitFor(a.A);
    }
    getMessageConversationColor(e, t) {
        return a.A.isHighlightingEnabled() ? (c.get(e)?.get(t) ?? null) : null;
    }
    getChannelConversations(e) {
        return (d.get(e) ?? []).map((e, t) => ({ conversation: e, color: o[t % o.length] }));
    }
    hasMoreConversations(e) {
        return h.get(e) ?? !0;
    }
    getLastConversationId(e) {
        return m.get(e) ?? null;
    }
    isPendingFetch(e) {
        return u.has(e);
    }
}
let g = new A(l.h, {
    CONVERSATIONS_FETCH_START: function (e) {
        let { channelId: t } = e;
        return u.add(t), !0;
    },
    CONVERSATIONS_FETCH_SUCCESS: function (e) {
        let t,
            { channelId: n, conversations: i, isLoadMore: l } = e;
        u.delete(n), 0 === i.length && h.set(n, !1), m.set(n, i.length > 0 ? i[i.length - 1].id : null);
        let s = l ? [...(d.get(n) ?? []), ...i] : i;
        return (
            d.set(n, s),
            c.set(
                n,
                ((t = new Map()),
                s.forEach((e, n) => {
                    let i = o[n % o.length];
                    for (let n of e.message_ids) t.set(n, i);
                }),
                t),
            ),
            !0
        );
    },
    CONVERSATIONS_FETCH_FAILURE: function (e) {
        let { channelId: t } = e;
        return u.delete(t), !0;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null != t && !u.has(t) && !d.has(t) && (0, s.f)("channel_select") && (0, r.W)(t), !1;
    },
});
