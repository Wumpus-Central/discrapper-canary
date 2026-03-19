"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(835835),
    o = n(381849),
    c = n(549973),
    d = n(976860),
    u = n(661191),
    h = n(256331),
    A = n(141850),
    m = n(736339),
    g = n(701952),
    p = n(652215),
    _ = n(430627);
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
let C = ["high", "medium", "low"],
    E = s.memo(function (e) {
        let { moderation: t } = e,
            n = null != t && 1 === t.status,
            l = null != t && !t.flagged_title && !t.flagged_summary && !t.flagged_key_points,
            r = s.useMemo(() => {
                if (null == t) return { passed: 0, failed: 0, unknown: 0 };
                let e = t.flagged_message_count ?? t.flagged_message_ids.length,
                    n = t.total_message_count ?? 0,
                    i = 0,
                    s = 0;
                return (
                    null == t.flagged_message_count && 0 === t.flagged_message_ids.length
                        ? (s = n)
                        : null != t.flagged_message_count
                          ? (i = Math.max(0, n - e))
                          : (s = Math.max(0, n - e)),
                    { passed: i, failed: e, unknown: s }
                );
            }, [t]),
            o =
                null == t
                    ? "unknown"
                    : r.failed > 0
                      ? "failed"
                      : r.unknown > 0
                        ? "unknown"
                        : r.passed > 0
                          ? "passed"
                          : "unknown",
            c =
                null != t
                    ? (t.flagged_summary_details.find((e) => {
                          var n;
                          return (
                              e.severity ===
                              ((n = t.flagged_summary_details.map((e) => e.severity)),
                              C.find((e) => n.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            d = c?.severity ?? null,
            u = c?.confidence ?? null;
        return (0, i.jsxs)("div", {
            className: _.UO,
            children: [
                (0, i.jsx)(a.Text, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: _.a9,
                    children: "Moderation",
                }),
                (0, i.jsxs)("div", {
                    className: _.so,
                    children: [
                        (0, i.jsxs)("div", {
                            className: _.a7,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: "text-md/semibold",
                                    color: null == t ? "text-muted" : n ? "status-positive" : "status-danger",
                                    children: null == t ? "—" : n ? "✓" : "✗",
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Conversation",
                                }),
                                null != t &&
                                    !n &&
                                    null != t.status_reason &&
                                    (0, i.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: t.status_reason,
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: _.a7,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: "text-md/semibold",
                                    color: null == t ? "text-muted" : l ? "status-positive" : "status-danger",
                                    children: null == t ? "—" : l ? "✓" : "✗",
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Summary",
                                }),
                                null != t &&
                                    !l &&
                                    (0, i.jsxs)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [
                                            [
                                                t.flagged_title && "title",
                                                t.flagged_summary && "summary",
                                                t.flagged_key_points && "key points",
                                            ]
                                                .filter(Boolean)
                                                .join(", "),
                                            " ",
                                            "flagged",
                                        ],
                                    }),
                                null != t &&
                                    !l &&
                                    (null != d || null != u) &&
                                    (0, i.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [d, u].filter(Boolean).join(" \xb7 "),
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: _.a7,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: "text-md/semibold",
                                    color:
                                        null == t || "unknown" === o
                                            ? "text-muted"
                                            : "passed" === o
                                              ? "status-positive"
                                              : "status-danger",
                                    children: null == t || "unknown" === o ? "—" : "passed" === o ? "✓" : "✗",
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Messages",
                                }),
                                null != t &&
                                    (r.passed > 0 || r.failed > 0 || r.unknown > 0) &&
                                    (0, i.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [
                                            r.passed > 0 && `${r.passed} passed`,
                                            r.failed > 0 && `${r.failed} failed`,
                                            r.unknown > 0 && `${r.unknown} unknown`,
                                        ]
                                            .filter(Boolean)
                                            .join(", "),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    I = s.memo(function (e) {
        let {
                conversation: t,
                color: n,
                isInViewport: l,
                scrollTarget: r,
                onJump: d,
                onHoverStart: h,
                onHoverEnd: A,
            } = e,
            m = s.useRef(null);
        s.useEffect(() => {
            null != r && null != m.current && m.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }, [r]);
        let p = u.default.extractTimestamp(t.start_message_id),
            f = u.default.extractTimestamp(t.end_message_id),
            x = (0, c.e)({ timestamp: p }),
            C = Math.max(1, Math.round((f - p) / 1e3)),
            I = (0, o.WR)({ seconds: C, getFormatter: o.i }),
            N = t.summary_map?.entries.find((e) => "TOPIC_EXTRACTION_SUMMARY" === e.summary_type),
            b = null != N ? (0, g.i)(N.content_json) : null;
        return (0, i.jsxs)(a.DUT, {
            innerRef: m,
            className: `${_.Nm}${l ? ` ${_.Sk}` : ""}`,
            style: { backgroundColor: l ? n.replace(/,\s*0\.12\)$/, ", 0.24)") : n },
            onClick: () => d(t),
            onMouseEnter: () => h(t.id),
            onMouseLeave: A,
            children: [
                (0, i.jsx)("div", {
                    className: _.PY,
                    children: (0, i.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: null != b ? "text-default" : "text-muted",
                        className: _.So,
                        children: b?.title ?? "Summary not available",
                    }),
                }),
                (0, i.jsxs)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: _.FR,
                    children: [
                        x,
                        " ago \xb7 ",
                        I,
                        " duration \xb7 ",
                        t.message_count,
                        " messages \xb7 ",
                        t.user_count,
                        " users",
                    ],
                }),
                b?.brief_summary != null &&
                    (0, i.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: _.g5,
                        children: b.brief_summary,
                    }),
                null != b &&
                    b.key_points.length > 0 &&
                    (0, i.jsx)("ul", {
                        className: _.JP,
                        children: b.key_points.map((e, t) =>
                            (0, i.jsx)(
                                "li",
                                {
                                    children: (0, i.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: e,
                                    }),
                                },
                                t,
                            ),
                        ),
                    }),
                (0, i.jsxs)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: _.RE,
                    children: [
                        "Keywords: ",
                        (0, i.jsx)("span", {
                            className: _.Br,
                            children: t.keywords.length > 0 ? t.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: _.UO,
                    children: [
                        (0, i.jsx)(a.Text, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: _.a9,
                            children: "Quality Scores",
                        }),
                        (0, i.jsxs)("div", {
                            className: _.so,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: _.a7,
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: t.substance?.score?.toFixed(2) ?? "—",
                                        }),
                                        (0, i.jsx)(a.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Substance",
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: _.a7,
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: t.engagement?.score?.toFixed(2) ?? "—",
                                        }),
                                        (0, i.jsx)(a.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Engagement",
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: _.a7,
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: t.dynamics?.score?.toFixed(2) ?? "—",
                                        }),
                                        (0, i.jsx)(a.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Dynamics",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(E, { moderation: t.moderation }),
            ],
        });
    });
function N(e) {
    let { channel: t } = e,
        n = (0, l.bG)([m.A], () => m.A.getChannelConversations(t.id), [t.id], f),
        o = (0, l.bG)([m.A], () => m.A.getVisibleConversationIds(t.id), [t.id], x),
        c = (0, l.bG)([m.A], () => m.A.hasMoreConversations(t.id, "before"), [t.id]),
        u = (0, l.bG)([m.A], () => m.A.hasMoreConversations(t.id, "after"), [t.id]),
        g = (0, l.bG)([m.A], () => m.A.isPendingFetch(t.id), [t.id]),
        C = (0, l.bG)([h.A], () => h.A.isHighlightingEnabled(), []),
        E = (0, l.bG)([m.A], () => m.A.getScrollToConversation(t.id), [t.id]),
        N = s.useCallback(
            (e) => {
                (0, A.UA)(t.id, e);
            },
            [t.id],
        ),
        b = s.useCallback(() => {
            (0, A.UA)(null, null);
        }, []),
        S = s.useCallback((e) => {
            (0, d.pX)(p.BVt.CHANNEL(e.guild_id, e.channel_id, e.start_message_id));
        }, []);
    return (0, i.jsxs)("aside", {
        "aria-label": "Conversations",
        className: _.zr,
        children: [
            (0, i.jsx)(r.Y9, {
                icon: a.oyn,
                title: "Conversations",
                children: (0, i.jsx)("div", {
                    className: _.y6,
                    children: (0, i.jsx)(a.K0, {
                        icon: C ? a.bMW : a.G3N,
                        "aria-label": C ? "Hide highlights" : "Show highlights",
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
                            children: (0, i.jsx)(a.DUT, {
                                className: _.Qf,
                                onClick: function () {
                                    if (0 === n.length || g) return;
                                    let e = n[0].conversation;
                                    (0, A.WF)({ channelId: t.id, before: e.start_message_id });
                                },
                                children: (0, i.jsx)(a.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-link",
                                    children: g ? "Loading..." : "Load previous conversations",
                                }),
                            }),
                        }),
                    0 !== n.length || g
                        ? n.map((e) => {
                              let { conversation: t, color: n } = e;
                              return (0, i.jsx)(
                                  I,
                                  {
                                      conversation: t,
                                      color: n,
                                      isInViewport: o.has(t.id),
                                      scrollTarget: E?.conversationId === t.id ? E.seq : null,
                                      onJump: S,
                                      onHoverStart: N,
                                      onHoverEnd: b,
                                  },
                                  t.id,
                              );
                          })
                        : (0, i.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: _.BI,
                              children: "No conversations available.",
                          }),
                    u &&
                        (0, i.jsx)("div", {
                            className: _.f,
                            children: (0, i.jsx)(a.DUT, {
                                className: _.Qf,
                                onClick: function () {
                                    if (0 === n.length || g) return;
                                    let e = n[n.length - 1].conversation;
                                    (0, A.WF)({ channelId: t.id, after: e.end_message_id });
                                },
                                children: (0, i.jsx)(a.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-link",
                                    children: g ? "Loading..." : "Load newer conversations",
                                }),
                            }),
                        }),
                ],
            }),
        ],
    });
}
