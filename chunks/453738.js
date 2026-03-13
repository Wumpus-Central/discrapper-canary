"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(835835),
    o = n(381849),
    c = n(549973),
    d = n(976860),
    u = n(661191),
    h = n(256331),
    A = n(141850),
    m = n(736339),
    p = n(701952),
    g = n(652215),
    _ = n(530450);
function f(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].conversation.id !== t[n].conversation.id) return !1;
    return !0;
}
function x(e, t) {
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    return !0;
}
function C(e) {
    let {
            conversation: t,
            color: n,
            index: l,
            isInViewport: a,
            scrollTarget: d,
            onJump: h,
            onHoverStart: A,
            onHoverEnd: m,
        } = e,
        g = s.useRef(null);
    s.useEffect(() => {
        null != d && null != g.current && g.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }, [d]);
    let f = u.default.extractTimestamp(t.start_message_id),
        x = u.default.extractTimestamp(t.end_message_id),
        C = (0, c.e)({ timestamp: f }),
        E = Math.max(1, Math.round((x - f) / 1e3)),
        I = (0, o.WR)({ seconds: E, getFormatter: o.i }),
        N = t.summary_map?.entries.find((e) => "TOPIC_EXTRACTION_SUMMARY" === e.summary_type),
        b = null != N ? (0, p.i)(N.content_json) : null;
    return (0, i.jsxs)(r.DUT, {
        innerRef: g,
        className: `${_.Nm}${a ? ` ${_.Sk}` : ""}`,
        style: { backgroundColor: a ? n.replace(/,\s*0\.12\)$/, ", 0.24)") : n },
        onClick: () => h(t),
        onMouseEnter: () => A(t.id),
        onMouseLeave: m,
        children: [
            (0, i.jsx)("div", {
                className: _.PY,
                children: (0, i.jsx)(r.Text, {
                    variant: "text-md/medium",
                    color: "text-default",
                    className: _.So,
                    children: b?.title ?? (t.keywords.length > 0 ? t.keywords.join(", ") : `Conversation ${l + 1}`),
                }),
            }),
            (0, i.jsxs)("div", {
                className: _.FR,
                children: [
                    (0, i.jsxs)(r.Text, { variant: "text-xs/normal", color: "text-muted", children: [C, " ago"] }),
                    (0, i.jsxs)(r.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: [t.message_count, " messages"],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: _.FR,
                children: [
                    (0, i.jsxs)(r.Text, { variant: "text-xs/normal", color: "text-muted", children: [I, " duration"] }),
                    (0, i.jsxs)(r.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: [t.user_count, " users"],
                    }),
                ],
            }),
            (0, i.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                className: _.g5,
                children: b?.brief_summary ?? `${t.message_count} messages \xb7 ${t.user_count} participants`,
            }),
            null != b &&
                b.key_points.length > 0 &&
                (0, i.jsx)("ul", {
                    className: _.JP,
                    children: b.key_points.map((e, t) =>
                        (0, i.jsx)(
                            "li",
                            {
                                children: (0, i.jsx)(r.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: e,
                                }),
                            },
                            t,
                        ),
                    ),
                }),
            (0, i.jsxs)("div", {
                className: _.so,
                children: [
                    (0, i.jsxs)("div", {
                        className: _.a7,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                children: t.substance?.score?.toFixed(2) ?? "—",
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                children: "Substance",
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: _.a7,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                children: t.engagement?.score?.toFixed(2) ?? "—",
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                children: "Engagement",
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: _.a7,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                children: t.dynamics?.score?.toFixed(2) ?? "—",
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                children: "Dynamics",
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function E(e) {
    let { channel: t } = e,
        n = (0, l.bG)([m.A], () => m.A.getChannelConversations(t.id), [t.id], f),
        o = (0, l.bG)([m.A], () => m.A.getVisibleConversationIds(t.id), [t.id], x),
        c = (0, l.bG)([m.A], () => m.A.hasMoreConversations(t.id, "before"), [t.id]),
        u = (0, l.bG)([m.A], () => m.A.hasMoreConversations(t.id, "after"), [t.id]),
        p = (0, l.bG)([m.A], () => m.A.isPendingFetch(t.id), [t.id]),
        E = (0, l.bG)([h.A], () => h.A.isHighlightingEnabled(), []),
        I = (0, l.bG)([m.A], () => m.A.getScrollToConversation(t.id), [t.id]),
        N = s.useCallback(
            (e) => {
                (0, A.UA)(t.id, e);
            },
            [t.id],
        ),
        b = s.useCallback(() => {
            (0, A.UA)(null, null);
        }, []);
    function S(e) {
        (0, d.pX)(g.BVt.CHANNEL(e.guild_id, e.channel_id, e.start_message_id));
    }
    return (0, i.jsxs)("aside", {
        "aria-label": "Conversations",
        className: _.zr,
        children: [
            (0, i.jsx)(a.Y9, {
                icon: r.oyn,
                title: "Conversations",
                children: (0, i.jsx)("div", {
                    className: _.y6,
                    children: (0, i.jsx)(r.K0, {
                        icon: E ? r.bMW : r.G3N,
                        "aria-label": E ? "Hide highlights" : "Show highlights",
                        variant: "secondary",
                        size: "sm",
                        onClick: A.Eg,
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: _.Qs,
                children: [
                    c &&
                        (0, i.jsx)("div", {
                            className: _.f,
                            children: (0, i.jsx)(r.DUT, {
                                className: _.Qf,
                                onClick: function () {
                                    if (0 === n.length || p) return;
                                    let e = n[0].conversation;
                                    (0, A.WF)({ channelId: t.id, before: e.start_message_id });
                                },
                                children: (0, i.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-link",
                                    children: p ? "Loading..." : "Load previous conversations",
                                }),
                            }),
                        }),
                    0 !== n.length || p
                        ? n.map((e, t) => {
                              let { conversation: n, color: s } = e;
                              return (0, i.jsx)(
                                  C,
                                  {
                                      conversation: n,
                                      color: s,
                                      index: t,
                                      isInViewport: o.has(n.id),
                                      scrollTarget: I?.conversationId === n.id ? I.seq : null,
                                      onJump: S,
                                      onHoverStart: N,
                                      onHoverEnd: b,
                                  },
                                  n.id,
                              );
                          })
                        : (0, i.jsx)(r.Text, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: _.BI,
                              children: "No conversations available.",
                          }),
                    u &&
                        (0, i.jsx)("div", {
                            className: _.f,
                            children: (0, i.jsx)(r.DUT, {
                                className: _.Qf,
                                onClick: function () {
                                    if (0 === n.length || p) return;
                                    let e = n[n.length - 1].conversation;
                                    (0, A.WF)({ channelId: t.id, after: e.end_message_id });
                                },
                                children: (0, i.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-link",
                                    children: p ? "Loading..." : "Load newer conversations",
                                }),
                            }),
                        }),
                ],
            }),
        ],
    });
}
