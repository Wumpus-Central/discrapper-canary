"use strict";
n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(732955),
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
    _ = n(430627);
function f(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].conversation.id !== t[n].conversation.id) return !1;
    return !0;
}
function x(e) {
    let { conversation: t, color: n, index: s, onJump: l } = e,
        a = u.default.extractTimestamp(t.start_message_id),
        d = u.default.extractTimestamp(t.end_message_id),
        h = (0, c.e)({ timestamp: a }),
        A = Math.max(1, Math.round((d - a) / 1e3)),
        m = (0, o.WR)({ seconds: A, getFormatter: o.i }),
        g = t.summary_map?.entries.find((e) => "TOPIC_EXTRACTION_SUMMARY" === e.summary_type),
        f = null != g ? (0, p.i)(g.content_json) : null;
    return (0, i.jsxs)(r.DUT, {
        className: _.Nm,
        style: { backgroundColor: n },
        onClick: () => l(t),
        children: [
            (0, i.jsx)("div", {
                className: _.PY,
                children: (0, i.jsx)(r.Text, {
                    variant: "text-md/medium",
                    color: "text-default",
                    className: _.So,
                    children: f?.title ?? (t.keywords.length > 0 ? t.keywords.join(", ") : `Conversation ${s + 1}`),
                }),
            }),
            (0, i.jsxs)("div", {
                className: _.FR,
                children: [
                    (0, i.jsxs)(r.Text, { variant: "text-xs/normal", color: "text-muted", children: [h, " ago"] }),
                    (0, i.jsxs)(r.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: [t.message_count, " messages"],
                    }),
                    (0, i.jsxs)(r.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: [t.user_count, " users"],
                    }),
                    (0, i.jsxs)(r.Text, { variant: "text-xs/normal", color: "text-muted", children: [m, " duration"] }),
                ],
            }),
            (0, i.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                className: _.g5,
                children: f?.brief_summary ?? `${t.message_count} messages \xb7 ${t.user_count} participants`,
            }),
            null != f &&
                f.key_points.length > 0 &&
                (0, i.jsx)("ul", {
                    className: _.JP,
                    children: f.key_points.map((e, t) =>
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
function C(e) {
    let { channel: t, onClose: n } = e,
        o = (0, s.bG)([m.A], () => m.A.getChannelConversations(t.id), [t.id], f),
        c = (0, s.bG)([m.A], () => m.A.hasMoreConversations(t.id), [t.id]),
        u = (0, s.bG)([m.A], () => m.A.isPendingFetch(t.id), [t.id]),
        p = (0, s.bG)([m.A], () => m.A.getLastConversationId(t.id), [t.id]),
        C = (0, s.bG)([h.A], () => h.A.isHighlightingEnabled(), []);
    function E(e) {
        (0, d.pX)(g.BVt.CHANNEL(e.guild_id, e.channel_id, e.start_message_id)), n();
    }
    return (0, i.jsxs)(r.lGe, {
        "aria-label": "Conversations",
        className: _.zr,
        children: [
            (0, i.jsx)(a.Y9, {
                icon: r.oyn,
                title: "Conversations",
                children: (0, i.jsx)("div", {
                    className: _.y6,
                    children: (0, i.jsx)(r.K0, {
                        icon: C ? r.bMW : r.G3N,
                        "aria-label": C ? "Hide highlights" : "Show highlights",
                        variant: "secondary",
                        size: "sm",
                        onClick: A.E,
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: _.Qs,
                children:
                    0 === o.length
                        ? (0, i.jsx)(r.Text, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: _.BI,
                              children: "No conversations available.",
                          })
                        : o.map((e, t) => {
                              let { conversation: n, color: s } = e;
                              return (0, i.jsx)(x, { conversation: n, color: s, index: t, onJump: E }, n.id);
                          }),
            }),
            c &&
                (0, i.jsx)("div", {
                    className: _.f,
                    children: (0, i.jsx)(l.$nd, {
                        variant: "secondary",
                        size: "md",
                        fullWidth: !0,
                        loading: u,
                        disabled: u,
                        text: "Load more",
                        onClick: () => {
                            u || (0, A.W)(t.id, 5, p ?? void 0, !0);
                        },
                    }),
                }),
        ],
    });
}
