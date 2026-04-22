n.d(t, { A: () => G });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(834730),
    r = n(939249),
    o = n(408278),
    d = n(624479),
    c = n(691540),
    u = n(857250),
    h = n(97483),
    A = n(534890),
    _ = n(39623),
    m = n(952270),
    g = n(835835),
    p = n(381849),
    f = n(549973),
    E = n(976860),
    x = n(957565),
    I = n(661191),
    C = n(256331),
    b = n(141850),
    N = n(736339),
    S = n(701952),
    v = n(652215),
    T = n(84593);
function y(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].conversation.id !== t[n].conversation.id) return !1;
    return !0;
}
function R(e, t) {
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    return !0;
}
let j = ["high", "medium", "low"],
    L = l.memo(function (e) {
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
            d =
                null != t
                    ? (t.flagged_summary_details.find((e) => {
                          var n;
                          return (
                              e.severity ===
                              ((n = t.flagged_summary_details.map((e) => e.severity)),
                              j.find((e) => n.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            c = d?.severity ?? null,
            u = d?.confidence ?? null;
        return (0, i.jsxs)("div", {
            className: T.UO,
            children: [
                (0, i.jsx)(a.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: T.a9,
                    children: "Moderation",
                }),
                (0, i.jsxs)("div", {
                    className: T.so,
                    children: [
                        (0, i.jsxs)("div", {
                            className: T.a7,
                            children: [
                                (0, i.jsx)(a.E, {
                                    variant: "text-md/semibold",
                                    color: null == t ? "text-muted" : n ? "status-positive" : "status-danger",
                                    children: null == t ? "—" : n ? "✓" : "✗",
                                }),
                                (0, i.jsx)(a.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Conversation",
                                }),
                                null != t &&
                                    !n &&
                                    null != t.status_reason &&
                                    (0, i.jsx)(a.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: t.status_reason,
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: T.a7,
                            children: [
                                (0, i.jsx)(a.E, {
                                    variant: "text-md/semibold",
                                    color: null == t ? "text-muted" : s ? "status-positive" : "status-danger",
                                    children: null == t ? "—" : s ? "✓" : "✗",
                                }),
                                (0, i.jsx)(a.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Summary",
                                }),
                                null != t &&
                                    !s &&
                                    (0, i.jsxs)(a.E, {
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
                                    (null != c || null != u) &&
                                    (0, i.jsx)(a.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [c, u].filter(Boolean).join(" \xb7 "),
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: T.a7,
                            children: [
                                (0, i.jsx)(a.E, {
                                    variant: "text-md/semibold",
                                    color:
                                        null == t || "unknown" === o
                                            ? "text-muted"
                                            : "passed" === o
                                              ? "status-positive"
                                              : "status-danger",
                                    children: null == t || "unknown" === o ? "—" : "passed" === o ? "✓" : "✗",
                                }),
                                (0, i.jsx)(a.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Messages",
                                }),
                                null != t &&
                                    (r.passed > 0 || r.failed > 0 || r.unknown > 0) &&
                                    (0, i.jsx)(a.E, {
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
    O = l.memo(function (e) {
        let {
                conversation: t,
                color: n,
                isInViewport: s,
                scrollTarget: A,
                onJump: _,
                onHoverStart: m,
                onHoverEnd: g,
            } = e,
            E = l.useRef(null);
        l.useEffect(() => {
            null != A && null != E.current && E.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }, [A]);
        let C = I.default.extractTimestamp(t.start_message_id),
            b = I.default.extractTimestamp(t.end_message_id),
            N = (0, f.e)({ timestamp: C }),
            v = Math.max(1, Math.round((b - C) / 1e3)),
            y = (0, p.WR)({ seconds: v, getFormatter: p.i }),
            R = t.summary_map?.entries.find((e) => "TOPIC_EXTRACTION_SUMMARY" === e.summary_type),
            j = null != R ? (0, S.i)(R.content_json) : null;
        return (0, i.jsxs)(r.D, {
            innerRef: E,
            className: `${T.Nm}${s ? ` ${T.Sk}` : ""}`,
            style: { backgroundColor: s ? n.replace(/,\s*0\.12\)$/, ", 0.24)") : n },
            onClick: () => _(t),
            onMouseEnter: () => m(t.id),
            onMouseLeave: g,
            children: [
                (0, i.jsxs)("div", {
                    className: T.PY,
                    children: [
                        (0, i.jsx)(a.E, {
                            variant: "text-md/medium",
                            color: null != j ? "text-default" : "text-muted",
                            className: T.So,
                            children: j?.title ?? "Summary not available",
                        }),
                        (0, i.jsx)(o.K, {
                            icon: d.T,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(),
                                    (0, x.C)(JSON.stringify(t, null, 2), () =>
                                        (0, c.P0)((0, u.o)("Copied conversation JSON", h.Ck.SUCCESS)),
                                    );
                            },
                        }),
                    ],
                }),
                (0, i.jsxs)(a.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: T.FR,
                    children: [
                        N,
                        " ago \xb7 ",
                        y,
                        " duration \xb7 ",
                        t.message_count,
                        " messages \xb7 ",
                        t.user_count,
                        " users",
                    ],
                }),
                j?.brief_summary != null &&
                    (0, i.jsx)(a.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: T.g5,
                        children: j.brief_summary,
                    }),
                null != j &&
                    j.key_points.length > 0 &&
                    (0, i.jsx)("ul", {
                        className: T.JP,
                        children: j.key_points.map((e, t) =>
                            (0, i.jsx)(
                                "li",
                                {
                                    children: (0, i.jsx)(a.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: e,
                                    }),
                                },
                                t,
                            ),
                        ),
                    }),
                (0, i.jsxs)(a.E, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: T.RE,
                    children: [
                        "Keywords: ",
                        (0, i.jsx)("span", {
                            className: T.Br,
                            children: t.keywords.length > 0 ? t.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: T.UO,
                    children: [
                        (0, i.jsx)(a.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: T.a9,
                            children: "Quality Scores",
                        }),
                        (0, i.jsxs)("div", {
                            className: T.so,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: T.a7,
                                    children: [
                                        (0, i.jsx)(a.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: t.substance?.score?.toFixed(2) ?? "—",
                                        }),
                                        (0, i.jsx)(a.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Substance",
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: T.a7,
                                    children: [
                                        (0, i.jsx)(a.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: t.engagement?.score?.toFixed(2) ?? "—",
                                        }),
                                        (0, i.jsx)(a.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Engagement",
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: T.a7,
                                    children: [
                                        (0, i.jsx)(a.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: t.dynamics?.score?.toFixed(2) ?? "—",
                                        }),
                                        (0, i.jsx)(a.E, {
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
                (0, i.jsx)(L, { moderation: t.moderation }),
            ],
        });
    });
function G(e) {
    let { channel: t } = e,
        n = (0, s.bG)([N.A], () => N.A.getChannelConversations(t.id), [t.id], y),
        d = (0, s.bG)([N.A], () => N.A.getVisibleConversationIds(t.id), [t.id], R),
        c = (0, s.bG)([N.A], () => N.A.hasMoreConversations(t.id, "before"), [t.id]),
        u = (0, s.bG)([N.A], () => N.A.hasMoreConversations(t.id, "after"), [t.id]),
        h = (0, s.bG)([N.A], () => N.A.isPendingFetch(t.id), [t.id]),
        p = (0, s.bG)([C.A], () => C.A.isHighlightingEnabled(), []),
        f = (0, s.bG)([N.A], () => N.A.getScrollToConversation(t.id), [t.id]),
        x = l.useCallback(
            (e) => {
                (0, b.UA)(t.id, e);
            },
            [t.id],
        ),
        I = l.useCallback(() => {
            (0, b.UA)(null, null);
        }, []),
        S = l.useCallback((e) => {
            (0, b.xI)(e.channel_id, e.id), (0, E.pX)(v.BVt.CHANNEL(e.guild_id, e.channel_id, e.start_message_id));
        }, []);
    return (0, i.jsxs)("aside", {
        "aria-label": "Conversations",
        className: T.zr,
        children: [
            (0, i.jsx)(g.Y9, {
                icon: A.o,
                title: "Conversations",
                children: (0, i.jsx)("div", {
                    className: T.y6,
                    children: (0, i.jsx)(o.K, {
                        icon: p ? _.b : m.G,
                        "aria-label": p ? "Hide highlights" : "Show highlights",
                        variant: "secondary",
                        size: "sm",
                        onClick: b.Eg,
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: T.Qs,
                children: [
                    c &&
                        (0, i.jsx)("div", {
                            className: T.f,
                            children: (0, i.jsx)(r.D, {
                                className: T.Qf,
                                onClick: function () {
                                    if (0 === n.length || h) return;
                                    let e = n[0].conversation;
                                    (0, b.WF)({ channelId: t.id, before: e.start_message_id });
                                },
                                children: (0, i.jsx)(a.E, {
                                    variant: "text-sm/medium",
                                    color: "text-link",
                                    children: h ? "Loading..." : "Load previous conversations",
                                }),
                            }),
                        }),
                    0 !== n.length || h
                        ? n.map((e) => {
                              let { conversation: t, color: n } = e;
                              return (0, i.jsx)(
                                  O,
                                  {
                                      conversation: t,
                                      color: n,
                                      isInViewport: d.has(t.id),
                                      scrollTarget: f?.conversationId === t.id ? f.seq : null,
                                      onJump: S,
                                      onHoverStart: x,
                                      onHoverEnd: I,
                                  },
                                  t.id,
                              );
                          })
                        : (0, i.jsx)(a.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: T.BI,
                              children: "No conversations available.",
                          }),
                    u &&
                        (0, i.jsx)("div", {
                            className: T.f,
                            children: (0, i.jsx)(r.D, {
                                className: T.Qf,
                                onClick: function () {
                                    if (0 === n.length || h) return;
                                    let e = n[n.length - 1].conversation;
                                    (0, b.WF)({ channelId: t.id, after: e.end_message_id });
                                },
                                children: (0, i.jsx)(a.E, {
                                    variant: "text-sm/medium",
                                    color: "text-link",
                                    children: h ? "Loading..." : "Load newer conversations",
                                }),
                            }),
                        }),
                ],
            }),
        ],
    });
}
