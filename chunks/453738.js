n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(835835),
    o = n(381849),
    c = n(549973),
    d = n(976860),
    u = n(661191),
    h = n(256331),
    A = n(141850),
    _ = n(736339),
    m = n(701952),
    g = n(652215),
    p = n(968353);
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
let E = ["high", "medium", "low"],
    I = l.memo(function (e) {
        let { moderation: t } = e,
            n = null != t && 1 === t.status,
            s = null != t && !t.flagged_title && !t.flagged_summary && !t.flagged_key_points,
            r = l.useMemo(() => {
                if (null == t) return { passed: 0, failed: 0, unknown: 0 };
                let e = t.flagged_message_count ?? t.flagged_message_ids.length,
                    n = t.total_message_count ?? 0,
                    i = 0,
                    l = 0;
                return (
                    null == t.flagged_message_count && 0 === t.flagged_message_ids.length
                        ? (l = n)
                        : null != t.flagged_message_count
                          ? (i = Math.max(0, n - e))
                          : (l = Math.max(0, n - e)),
                    { passed: i, failed: e, unknown: l }
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
                              E.find((e) => n.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            d = c?.severity ?? null,
            u = c?.confidence ?? null;
        return (0, i.jsxs)("div", {
            className: p.UO,
            children: [
                (0, i.jsx)(a.Text, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: p.a9,
                    children: "Moderation",
                }),
                (0, i.jsxs)("div", {
                    className: p.so,
                    children: [
                        (0, i.jsxs)("div", {
                            className: p.a7,
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
                            className: p.a7,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: "text-md/semibold",
                                    color: null == t ? "text-muted" : s ? "status-positive" : "status-danger",
                                    children: null == t ? "—" : s ? "✓" : "✗",
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Summary",
                                }),
                                null != t &&
                                    !s &&
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
                                    !s &&
                                    (null != d || null != u) &&
                                    (0, i.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [d, u].filter(Boolean).join(" \xb7 "),
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: p.a7,
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
    C = l.memo(function (e) {
        let {
                conversation: t,
                color: n,
                isInViewport: s,
                scrollTarget: r,
                onJump: d,
                onHoverStart: h,
                onHoverEnd: A,
            } = e,
            _ = l.useRef(null);
        l.useEffect(() => {
            null != r && null != _.current && _.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }, [r]);
        let g = u.default.extractTimestamp(t.start_message_id),
            f = u.default.extractTimestamp(t.end_message_id),
            x = (0, c.e)({ timestamp: g }),
            E = Math.max(1, Math.round((f - g) / 1e3)),
            C = (0, o.WR)({ seconds: E, getFormatter: o.i }),
            N = t.summary_map?.entries.find((e) => "TOPIC_EXTRACTION_SUMMARY" === e.summary_type),
            T = null != N ? (0, m.i)(N.content_json) : null;
        return (0, i.jsxs)(a.DUT, {
            innerRef: _,
            className: `${p.Nm}${s ? ` ${p.Sk}` : ""}`,
            style: { backgroundColor: s ? n.replace(/,\s*0\.12\)$/, ", 0.24)") : n },
            onClick: () => d(t),
            onMouseEnter: () => h(t.id),
            onMouseLeave: A,
            children: [
                (0, i.jsx)("div", {
                    className: p.PY,
                    children: (0, i.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: null != T ? "text-default" : "text-muted",
                        className: p.So,
                        children: T?.title ?? "Summary not available",
                    }),
                }),
                (0, i.jsxs)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: p.FR,
                    children: [
                        x,
                        " ago \xb7 ",
                        C,
                        " duration \xb7 ",
                        t.message_count,
                        " messages \xb7 ",
                        t.user_count,
                        " users",
                    ],
                }),
                T?.brief_summary != null &&
                    (0, i.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: p.g5,
                        children: T.brief_summary,
                    }),
                null != T &&
                    T.key_points.length > 0 &&
                    (0, i.jsx)("ul", {
                        className: p.JP,
                        children: T.key_points.map((e, t) =>
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
                    className: p.RE,
                    children: [
                        "Keywords: ",
                        (0, i.jsx)("span", {
                            className: p.Br,
                            children: t.keywords.length > 0 ? t.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: p.UO,
                    children: [
                        (0, i.jsx)(a.Text, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: p.a9,
                            children: "Quality Scores",
                        }),
                        (0, i.jsxs)("div", {
                            className: p.so,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: p.a7,
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
                                    className: p.a7,
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
                                    className: p.a7,
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
                (0, i.jsx)(I, { moderation: t.moderation }),
            ],
        });
    });
function N(e) {
    let { channel: t } = e,
        n = (0, s.bG)([_.A], () => _.A.getChannelConversations(t.id), [t.id], f),
        o = (0, s.bG)([_.A], () => _.A.getVisibleConversationIds(t.id), [t.id], x),
        c = (0, s.bG)([_.A], () => _.A.hasMoreConversations(t.id, "before"), [t.id]),
        u = (0, s.bG)([_.A], () => _.A.hasMoreConversations(t.id, "after"), [t.id]),
        m = (0, s.bG)([_.A], () => _.A.isPendingFetch(t.id), [t.id]),
        E = (0, s.bG)([h.A], () => h.A.isHighlightingEnabled(), []),
        I = (0, s.bG)([_.A], () => _.A.getScrollToConversation(t.id), [t.id]),
        N = l.useCallback(
            (e) => {
                (0, A.UA)(t.id, e);
            },
            [t.id],
        ),
        T = l.useCallback(() => {
            (0, A.UA)(null, null);
        }, []),
        S = l.useCallback((e) => {
            (0, A.xI)(e.channel_id, e.id), (0, d.pX)(g.BVt.CHANNEL(e.guild_id, e.channel_id, e.start_message_id));
        }, []);
    return (0, i.jsxs)("aside", {
        "aria-label": "Conversations",
        className: p.zr,
        children: [
            (0, i.jsx)(r.Y9, {
                icon: a.oyn,
                title: "Conversations",
                children: (0, i.jsx)("div", {
                    className: p.y6,
                    children: (0, i.jsx)(a.K0, {
                        icon: E ? a.bMW : a.G3N,
                        "aria-label": E ? "Hide highlights" : "Show highlights",
                        variant: "secondary",
                        size: "sm",
                        onClick: A.Eg,
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: p.Qs,
                children: [
                    c &&
                        (0, i.jsx)("div", {
                            className: p.f,
                            children: (0, i.jsx)(a.DUT, {
                                className: p.Qf,
                                onClick: function () {
                                    if (0 === n.length || m) return;
                                    let e = n[0].conversation;
                                    (0, A.WF)({ channelId: t.id, before: e.start_message_id });
                                },
                                children: (0, i.jsx)(a.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-link",
                                    children: m ? "Loading..." : "Load previous conversations",
                                }),
                            }),
                        }),
                    0 !== n.length || m
                        ? n.map((e) => {
                              let { conversation: t, color: n } = e;
                              return (0, i.jsx)(
                                  C,
                                  {
                                      conversation: t,
                                      color: n,
                                      isInViewport: o.has(t.id),
                                      scrollTarget: I?.conversationId === t.id ? I.seq : null,
                                      onJump: S,
                                      onHoverStart: N,
                                      onHoverEnd: T,
                                  },
                                  t.id,
                              );
                          })
                        : (0, i.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: p.BI,
                              children: "No conversations available.",
                          }),
                    u &&
                        (0, i.jsx)("div", {
                            className: p.f,
                            children: (0, i.jsx)(a.DUT, {
                                className: p.Qf,
                                onClick: function () {
                                    if (0 === n.length || m) return;
                                    let e = n[n.length - 1].conversation;
                                    (0, A.WF)({ channelId: t.id, after: e.end_message_id });
                                },
                                children: (0, i.jsx)(a.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-link",
                                    children: m ? "Loading..." : "Load newer conversations",
                                }),
                            }),
                        }),
                ],
            }),
        ],
    });
}
