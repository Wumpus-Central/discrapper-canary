n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(835835),
    o = n(381849),
    d = n(549973),
    c = n(976860),
    u = n(957565),
    h = n(661191),
    A = n(256331),
    _ = n(141850),
    m = n(736339),
    p = n(701952),
    g = n(652215),
    f = n(84593);
function E(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n].conversation.id !== t[n].conversation.id) return !1;
    return !0;
}
function x(e, t) {
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    return !0;
}
let I = ["high", "medium", "low"],
    C = l.memo(function (e) {
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
                              I.find((e) => n.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            c = d?.severity ?? null,
            u = d?.confidence ?? null;
        return (0, i.jsxs)("div", {
            className: f.UO,
            children: [
                (0, i.jsx)(a.Text, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: f.a9,
                    children: "Moderation",
                }),
                (0, i.jsxs)("div", {
                    className: f.so,
                    children: [
                        (0, i.jsxs)("div", {
                            className: f.a7,
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
                            className: f.a7,
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
                                    (null != c || null != u) &&
                                    (0, i.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [c, u].filter(Boolean).join(" \xb7 "),
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: f.a7,
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
    N = l.memo(function (e) {
        let {
                conversation: t,
                color: n,
                isInViewport: s,
                scrollTarget: r,
                onJump: c,
                onHoverStart: A,
                onHoverEnd: _,
            } = e,
            m = l.useRef(null);
        l.useEffect(() => {
            null != r && null != m.current && m.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }, [r]);
        let g = h.default.extractTimestamp(t.start_message_id),
            E = h.default.extractTimestamp(t.end_message_id),
            x = (0, d.e)({ timestamp: g }),
            I = Math.max(1, Math.round((E - g) / 1e3)),
            N = (0, o.WR)({ seconds: I, getFormatter: o.i }),
            T = t.summary_map?.entries.find((e) => "TOPIC_EXTRACTION_SUMMARY" === e.summary_type),
            S = null != T ? (0, p.i)(T.content_json) : null;
        return (0, i.jsxs)(a.DUT, {
            innerRef: m,
            className: `${f.Nm}${s ? ` ${f.Sk}` : ""}`,
            style: { backgroundColor: s ? n.replace(/,\s*0\.12\)$/, ", 0.24)") : n },
            onClick: () => c(t),
            onMouseEnter: () => A(t.id),
            onMouseLeave: _,
            children: [
                (0, i.jsxs)("div", {
                    className: f.PY,
                    children: [
                        (0, i.jsx)(a.Text, {
                            variant: "text-md/medium",
                            color: null != S ? "text-default" : "text-muted",
                            className: f.So,
                            children: S?.title ?? "Summary not available",
                        }),
                        (0, i.jsx)(a.K0, {
                            icon: a.TdU,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                e.stopPropagation(),
                                    (0, u.C)(JSON.stringify(t, null, 2), () =>
                                        (0, a.showToast)(
                                            (0, a.createToast)("Copied conversation JSON", a.ToastType.SUCCESS),
                                        ),
                                    );
                            },
                        }),
                    ],
                }),
                (0, i.jsxs)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: f.FR,
                    children: [
                        x,
                        " ago \xb7 ",
                        N,
                        " duration \xb7 ",
                        t.message_count,
                        " messages \xb7 ",
                        t.user_count,
                        " users",
                    ],
                }),
                S?.brief_summary != null &&
                    (0, i.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: f.g5,
                        children: S.brief_summary,
                    }),
                null != S &&
                    S.key_points.length > 0 &&
                    (0, i.jsx)("ul", {
                        className: f.JP,
                        children: S.key_points.map((e, t) =>
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
                    className: f.RE,
                    children: [
                        "Keywords: ",
                        (0, i.jsx)("span", {
                            className: f.Br,
                            children: t.keywords.length > 0 ? t.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: f.UO,
                    children: [
                        (0, i.jsx)(a.Text, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: f.a9,
                            children: "Quality Scores",
                        }),
                        (0, i.jsxs)("div", {
                            className: f.so,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: f.a7,
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
                                    className: f.a7,
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
                                    className: f.a7,
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
                (0, i.jsx)(C, { moderation: t.moderation }),
            ],
        });
    });
function T(e) {
    let { channel: t } = e,
        n = (0, s.bG)([m.A], () => m.A.getChannelConversations(t.id), [t.id], E),
        o = (0, s.bG)([m.A], () => m.A.getVisibleConversationIds(t.id), [t.id], x),
        d = (0, s.bG)([m.A], () => m.A.hasMoreConversations(t.id, "before"), [t.id]),
        u = (0, s.bG)([m.A], () => m.A.hasMoreConversations(t.id, "after"), [t.id]),
        h = (0, s.bG)([m.A], () => m.A.isPendingFetch(t.id), [t.id]),
        p = (0, s.bG)([A.A], () => A.A.isHighlightingEnabled(), []),
        I = (0, s.bG)([m.A], () => m.A.getScrollToConversation(t.id), [t.id]),
        C = l.useCallback(
            (e) => {
                (0, _.UA)(t.id, e);
            },
            [t.id],
        ),
        T = l.useCallback(() => {
            (0, _.UA)(null, null);
        }, []),
        S = l.useCallback((e) => {
            (0, _.xI)(e.channel_id, e.id), (0, c.pX)(g.BVt.CHANNEL(e.guild_id, e.channel_id, e.start_message_id));
        }, []);
    return (0, i.jsxs)("aside", {
        "aria-label": "Conversations",
        className: f.zr,
        children: [
            (0, i.jsx)(r.Y9, {
                icon: a.oyn,
                title: "Conversations",
                children: (0, i.jsx)("div", {
                    className: f.y6,
                    children: (0, i.jsx)(a.K0, {
                        icon: p ? a.bMW : a.G3N,
                        "aria-label": p ? "Hide highlights" : "Show highlights",
                        variant: "secondary",
                        size: "sm",
                        onClick: _.Eg,
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: f.Qs,
                children: [
                    d &&
                        (0, i.jsx)("div", {
                            className: f.f,
                            children: (0, i.jsx)(a.DUT, {
                                className: f.Qf,
                                onClick: function () {
                                    if (0 === n.length || h) return;
                                    let e = n[0].conversation;
                                    (0, _.WF)({ channelId: t.id, before: e.start_message_id });
                                },
                                children: (0, i.jsx)(a.Text, {
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
                                  N,
                                  {
                                      conversation: t,
                                      color: n,
                                      isInViewport: o.has(t.id),
                                      scrollTarget: I?.conversationId === t.id ? I.seq : null,
                                      onJump: S,
                                      onHoverStart: C,
                                      onHoverEnd: T,
                                  },
                                  t.id,
                              );
                          })
                        : (0, i.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: f.BI,
                              children: "No conversations available.",
                          }),
                    u &&
                        (0, i.jsx)("div", {
                            className: f.f,
                            children: (0, i.jsx)(a.DUT, {
                                className: f.Qf,
                                onClick: function () {
                                    if (0 === n.length || h) return;
                                    let e = n[n.length - 1].conversation;
                                    (0, _.WF)({ channelId: t.id, after: e.end_message_id });
                                },
                                children: (0, i.jsx)(a.Text, {
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
