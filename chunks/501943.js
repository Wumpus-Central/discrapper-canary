n.d(t, { A: () => lq });
var l,
    a = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    o = n(789645),
    c = n(672929),
    u = n(58736),
    d = n(948230),
    h = n(18739),
    m = n(289873),
    f = n(821609),
    p = n(627363),
    g = n(207371),
    x = n(580954),
    v = n(297264),
    b = n(834730),
    j = n(625180),
    y = n(91242),
    k = n(812901),
    w = n(317608),
    A = n(17928),
    S = n(956518),
    N = n(869146),
    E = n(165610),
    C = n(652215),
    I =
        (((l = {}).Loading = "loading"),
        (l.AwaitingLaunch = "awaiting-launch"),
        (l.Launched = "launched"),
        (l.RenderingElsewhere = "rendering-elsewhere"),
        (l.NoApplication = "no-application"),
        (l.DoesNotSupportSurface = "does-not-support-surface"),
        (l.Error = "error"),
        l),
    T = n(742023),
    _ = n(697744),
    R = n(295813),
    P = n(375708),
    M = n(296167);
function O(e) {
    let { className: t } = e,
        { Component: n, events: l, getDuration: s } = (0, _.c)();
    return (
        i.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function n() {
                    ((e = null), null != s()) ? l.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(n));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [l, s]),
        i.useEffect(() => {
            let e = setInterval(l.onMouseEnter, 3e4);
            return () => clearInterval(e);
        }, [l]),
        (0, a.jsxs)("div", {
            className: t,
            onMouseEnter: l.onMouseEnter,
            onMouseLeave: l.onMouseLeave,
            children: [
                (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                (0, a.jsx)(b.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: M.o,
                    children: P.intl.string(R.default.jTuX7C),
                }),
            ],
        })
    );
}
var L = n(328284);
function D(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: r()(L.Bf, l && L.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: L.Ux,
                children: [
                    (0, a.jsx)(v.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(b.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
        ],
    });
}
var F = n(963691);
function $(e) {
    let { applicationId: t, surface: n } = e,
        { frame: l, state: s } = (function (e) {
            let { applicationId: t, surface: n } = e,
                {
                    surface: l,
                    setFailed: a,
                    lifecycle: s,
                } = (function (e) {
                    let { applicationId: t, surface: n } = e,
                        l = i.useMemo(() => (0, E.VA)(t, n), [t, n]),
                        a = i.useMemo(() => n, [l]),
                        s = (0, A.bG)([y.A], () => y.A.getFrame(l), [l]),
                        r = (0, A.bG)(
                            [N.A, y.A],
                            () => N.A.getWindowOpen(C.MLl.ACTIVITY_POPOUT) && y.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: c } = (0, p.YY)(t),
                        u = (0, g.x)(o),
                        d = null != (0, S.Ay)(t),
                        [h, m] = i.useState(null),
                        f = h === l;
                    return {
                        surface: a,
                        setFailed: i.useCallback(() => m(l), [l]),
                        lifecycle: (0, E.x1)(s)
                            ? r
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: s }
                            : f
                              ? { state: "error" }
                              : s?.state === "loading"
                                ? { state: "loading", frame: s }
                                : c
                                  ? { state: "loading", frame: void 0 }
                                  : null != o && d
                                    ? u
                                        ? { state: "awaiting-launch" }
                                        : { state: "does-not-support-surface" }
                                    : { state: "no-application" },
                    };
                })({ applicationId: t, surface: n }),
                { state: r } = s;
            return (
                i.useEffect(() => {
                    "awaiting-launch" === r && e();
                    async function e() {
                        try {
                            await j.A.launchFrame({ applicationId: t, surface: l });
                        } catch {
                            a();
                        }
                    }
                }, [r, t, l, a]),
                s
            );
        })({ applicationId: t, surface: n }),
        r = (0, E.VA)(t, n);
    switch (
        (i.useEffect(() => {
            let e;
            return (
                null == (e = y.A.getFrame(r)) ||
                    y.A.getMainFrame()?.id !== r ||
                    N.A.getWindowOpen(C.MLl.ACTIVITY_POPOUT) ||
                    (e.intent === E.sV.MAIN ? j.A.resetFrameLayoutModes(r) : j.A.clearMainFrameSlot()),
                () => {
                    let e;
                    null != (e = y.A.getFrame(r)) &&
                        ((0, E.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        T.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === E.sV.INLINE && j.A.promoteFrame(r),
                              j.A.updateFrameLayoutMode({ frameId: r, layoutMode: E.y0.PIP }))
                            : e.intent === E.sV.MAIN && (0, x.A)().leaveFrame(r));
                }
            );
        }, [r]),
        s)
    ) {
        case I.Launched:
            return (0, a.jsx)(w.A, { frameId: l.id, level: k.A.WithinAppContent, className: F.Z7 });
        case I.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: F.qs,
                children: (0, a.jsx)(D, {
                    title: P.intl.string(R.default["4f6Vkr"]),
                    body: P.intl.string(R.default.LJ2q1H),
                }),
            });
        case I.NoApplication:
            return (0, a.jsx)(O, { className: F.qs });
        case I.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: F.qs,
                children: (0, a.jsx)(D, {
                    title: P.intl.string(R.default.FHOJiH),
                    body: P.intl.string(R.default["1yLQoV"]),
                }),
            });
        case I.Error:
            return (0, a.jsxs)("div", {
                className: F.qs,
                children: [
                    (0, a.jsx)(v.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: P.intl.string(R.default.MeLWCr),
                    }),
                    (0, a.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: F.tj,
                        children: P.intl.string(R.default["1RCbQT"]),
                    }),
                ],
            });
        case I.AwaitingLaunch:
        case I.Loading:
            return (0, a.jsx)("div", { className: F.qs, children: (0, a.jsx)(m.y, {}) });
    }
}
var q = n(323384),
    U = n(308528),
    G = n(334738),
    H = n(373204),
    B = n(355622),
    V = n(734057),
    z = n(531685),
    W = n(365971),
    Y = n(362417);
function K(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: Y.f,
        children: [
            (0, a.jsx)(q.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(b.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function Z() {
    return (0, a.jsx)("div", { className: Y.f, children: (0, a.jsx)(m.y, {}) });
}
function J(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: s, isLoading: r } = (0, p.YY)(l),
        o = s?.bot?.id ?? null,
        c = (0, A.bG)([V.A], () => {
            if (null == o) return null;
            let e = V.A.getDMFromUserId(o);
            return null != e ? V.A.getChannel(e) : null;
        });
    (t = c?.id ?? null),
        i.useEffect(() => {
            null != t && U.A.preload(C.ME, t);
        }, [t]),
        (n = (0, A.bG)([z.A], () => z.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, W.Xg)();
            return (
                (0, G.yl)(t, e),
                () => {
                    (0, G.dm)(t, e);
                }
            );
        }, [t, n]);
    let [u, d] = i.useState(null),
        h = null != o && u === o;
    return (i.useEffect(() => {
        if (null == o || null != c) return;
        let e = !1;
        return (
            U.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || d(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, c]),
    r)
        ? (0, a.jsx)(Z, {})
        : null == o || h
          ? (0, a.jsx)(K, { message: P.intl.string(R.default.bl4eBc) })
          : null == c
            ? (0, a.jsx)(Z, {})
            : (0, a.jsx)("div", {
                  className: Y.g,
                  children: (0, a.jsx)(H.A, { channel: c, guild: null, chatInputType: B.oU.SIDEBAR }, c.id),
              });
}
var Q = n(250872),
    X = n(976102);
function ee(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            previewReady: s,
            previewGate: r,
            previewMode: o = Q.VW.ACTIVITY,
        } = e,
        u = (0, c.A)(t, l),
        { data: d, isLoading: h } = (0, p.YY)(t ?? void 0),
        { data: v } = (0, p.YY)(n ?? void 0),
        b = null != d && (0, g.x)(d),
        j = null != n && v?.bot?.id != null;
    return (i.useEffect(() => {
        r?.type === "permissions" && null != u && (0, x.A)().leaveFrame(u.id);
    }, [u, r?.type]),
    r?.type === "checking")
        ? (0, a.jsx)("div", { className: X.q, children: (0, a.jsx)(m.y, {}) })
        : r?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: X.q,
                children: (0, a.jsx)(D, {
                    wide: !0,
                    title: P.intl.string(R.default.DYwf2n),
                    body: P.intl.string(R.default.WWj3pN),
                    children: (0, a.jsx)(f.$, {
                        variant: "primary",
                        size: "md",
                        text: P.intl.string(R.default["CRfE/E"]),
                        onClick: r.onReviewPermissions,
                        loading: r.loading,
                    }),
                }),
            })
          : s
            ? null == t
                ? null
                : h
                  ? (0, a.jsx)("div", { className: X.q, children: (0, a.jsx)(m.y, {}) })
                  : b && j && null != n
                    ? (0, a.jsx)("div", {
                          className: X.m,
                          role: "tabpanel",
                          id: (0, Q.z3)(o),
                          "aria-label": (0, Q.kZ)(o),
                          children:
                              o === Q.VW.ACTIVITY
                                  ? (0, a.jsx)($, { applicationId: t, surface: l })
                                  : (0, a.jsx)(J, { previewApplicationId: n }),
                      })
                    : null == d || (0, g.x)(d) || null == n
                      ? (0, a.jsx)($, { applicationId: t, surface: l })
                      : (0, a.jsx)(J, { previewApplicationId: n })
            : (0, a.jsx)(O, { className: X.q });
}
var et = n(534890),
    en = n(738876),
    el = n(47167),
    ea = n(31717),
    ei = n(372054);
function es(e) {
    let { channel: t, guild: n, onClose: l } = e,
        i = (0, el.Ay)(t),
        s = (0, a.jsx)(u.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l });
    return (0, a.jsxs)("div", {
        className: ei.Wx,
        children: [
            (0, a.jsx)(en.A, { channel: t, draftType: ea.C.ChannelMessage }),
            (0, a.jsxs)(u.Ay, {
                toolbar: s,
                "aria-label": P.intl.string(P.t.BIYAqa),
                children: [
                    (0, a.jsx)(u.Ay.ChannelIcon, { icon: et.ChatIcon, "aria-label": P.intl.string(P.t["/VQax8"]) }),
                    (0, a.jsx)(u.Ay.Title, { children: i }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ei.GZ,
                children: (0, a.jsx)(H.A, { channel: t, guild: n, chatInputType: B.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var er = n(689175);
n(321073), n(134528), n(947204);
let eo = {
    assembling: R.default["9G3ZmA"],
    installing_deps: R.default.VZuRug,
    building: R.default["s+ylXP"],
    bundling: R.default.rEQlMx,
    committing: R.default.Yvyw1H,
    built: R.default.hOcVAj,
    build_error: R.default["6L9Vwt"],
    healthchecking: R.default.sz8yAj,
    awaiting_auth: R.default["orD+xo"],
    healthcheck_passed: R.default["x+sqTG"],
    healthcheck_failed: R.default.FUWbq1,
    deploying: R.default.wcXX8Z,
    preview_ready: R.default["78YNh7"],
    working: R.default.nv6pUM,
    error: R.default.j3hBoA,
};
function ec(e) {
    if (null != e.labelText && "" !== e.labelText) return e.labelText;
    let t = null != e.labelKey ? eo[e.labelKey] : void 0;
    return P.intl.string(t ?? R.default.nv6pUM);
}
function eu(e) {
    let t,
        { turnActive: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = [],
        a = new Map(),
        i = new Map(),
        s = 0,
        { segmentOf: r } = em(e);
    function o(e, t, n) {
        return { id: e, kind: t, detail: [], status: "running", screenshots: [], touched: 0, segment: n };
    }
    function c(e, t) {
        let n = a.get(e);
        if (null != n) return n;
        let l = { taskId: e, task: o("task", "task", t), steps: [] };
        return a.set(e, l), l;
    }
    function u(e, n, a, s) {
        if ("task" === a || "task" === n) return null != e ? c(e, s).task : (t = t ?? o("task", "task", s));
        let r = `${e ?? ""} ${n}`,
            u = i.get(r);
        if (null != u) return u;
        let d = o(n, "step", s);
        return i.set(r, d), null != e ? c(e, s).steps.push(d) : l.push(d), d;
    }
    let d = (function (e) {
        let t = new Set();
        for (let n of e) {
            if ("node" !== n.kind || null == n.node) continue;
            let e = n.task_id;
            null != e &&
                "" !== e &&
                ("task" === n.node.node_kind || "task" === n.node.id) &&
                "cancelled" === n.node.status &&
                t.add(e);
        }
        return t;
    })(e);
    for (let [t, n] of e.entries()) {
        if (
            0 !== d.size &&
            "error" !== n.kind &&
            "terminal_error" !== n.kind &&
            null != n.task_id &&
            "" !== n.task_id &&
            d.has(n.task_id)
        )
            continue;
        let e = r[t] ?? 0;
        if ("node" === n.kind && null != n.node) {
            let t = n.node,
                l = u(n.task_id, t.id, t.node_kind ?? "step", e);
            (l.touched = ++s),
                null != t.label_key && (l.labelKey = t.label_key),
                null != t.label_text && (l.labelText = t.label_text),
                null != t.group_label && (l.groupLabel = t.group_label),
                null != t.helper_name && (l.helperName = t.helper_name),
                null != t.helper_mark && (l.helperMark = t.helper_mark),
                null != t.detail && (l.detail = t.detail),
                null != t.append_detail && (l.detail = [...l.detail, ...t.append_detail]),
                null != t.status && (l.status = t.status),
                null != t.duration && (l.durationMs = t.duration),
                null != t.screenshots && (l.screenshots = t.screenshots);
            continue;
        }
        if ("error" === n.kind || "terminal_error" === n.kind) {
            let l = u(void 0, `${n.kind}-${t}`, "step", e);
            (l.touched = ++s),
                (l.labelKey = "error"),
                (l.status = "failed"),
                null != n.message && "" !== n.message && (l.detail = [n.message]);
        }
    }
    let h = [...a.values()];
    for (let e of h) n || "running" !== e.task.status || (e.task.status = "incomplete");
    return { steps: l, tasks: h, ...(null != t ? { turn: t } : {}) };
}
function ed(e) {
    let t;
    for (let n of e) (null == t || n.touched > t.touched) && (t = n);
    return t;
}
function eh(e) {
    return (
        "node" === e.kind &&
        null != e.node &&
        null == e.task_id &&
        ("task" === e.node.node_kind || "task" === e.node.id)
    );
}
function em(e) {
    let t = [],
        n = [],
        l = null,
        a = null,
        i = 0;
    for (let [r, o] of e.entries()) {
        var s;
        let e = o.segment;
        if (
            (n.push(e ?? i),
            "thinking" === o.kind ||
                ((null == (s = o).task_id || "" === s.task_id) &&
                    ("error" === s.kind ||
                        "terminal_error" === s.kind ||
                        ("node" === s.kind && null != s.node && !eh(s)))))
        ) {
            l = null;
            continue;
        }
        if ("todos" === o.kind) {
            if (null != o.task_id && "" !== o.task_id) continue;
            let n = o.items ?? [];
            if (0 === n.length) continue;
            null != a
                ? (a.todos = n)
                : ((a = { type: "todos", key: `todos-${r}`, segment: e ?? i, todos: n }), t.push(a));
            continue;
        }
        if ("assistant_delta" !== o.kind || (null != o.task_id && "" !== o.task_id)) continue;
        let c = o.message ?? "";
        if ("" !== c)
            if (null == l) {
                i++;
                let a = e ?? i;
                (n[r] = a), (l = { type: "message", key: `message-${r}`, segment: a, content: c }), t.push(l);
            } else l.content = c;
        !0 === o.message_finished && (l = null);
    }
    return { items: t, segmentOf: n };
}
function ef(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (n?.kind === "todos" && (null == n.task_id || "" === n.task_id) && null != n.items && n.items.length > 0)
            return n.items;
    }
    return null;
}
var ep = n(783791),
    eg = n(13699);
function ex(e) {
    let { className: t, size: n = 20 } = e;
    return (0, a.jsxs)("svg", {
        className: t,
        width: n,
        height: n,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        focusable: !1,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M12.37 9.04c.25-.26.73-.2 1.06.13L15 10.7c.33.33.39.8.13 1.06L4.92 21.84c-.27.26-.74.2-1.07-.13l-1.56-1.54c-.33-.32-.39-.8-.13-1.05l10.2-10.08ZM16.09 5.16c.25-.26.73-.2 1.06.13l1.56 1.54c.33.32.39.8.13 1.05l-2.1 2.08c-.26.25-.74.2-1.07-.13l-1.56-1.54c-.33-.33-.38-.8-.13-1.05l2.1-2.08Z",
            }),
            (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M7.6 2.32a.5.5 0 0 1 .94 0L9.17 4l1.66.62a.5.5 0 0 1 0 .93l-1.66.63-.63 1.66a.5.5 0 0 1-.93 0l-.63-1.66-1.66-.63a.5.5 0 0 1 0-.93l1.66-.62.63-1.67Z",
                className: r()(eg.Z$, eg.KH),
            }),
            (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M17.48 14.36a.56.56 0 0 1 1.04 0l.85 2.27 2.27.85c.48.18.48.86 0 1.04l-2.27.85-.85 2.27a.56.56 0 0 1-1.04 0l-.85-2.27-2.27-.85a.56.56 0 0 1 0-1.04l2.27-.85.85-2.27Z",
                className: r()(eg.Z$, eg.Q_),
            }),
        ],
    });
}
var ev = n(847374),
    eb = n(320448),
    ej = n(939249);
let ey = i.createContext(0);
function ek(e) {
    let {
            glyph: t,
            line: n,
            live: l,
            settled: s,
            tint: o,
            detail: c,
            connected: u = !1,
            connectsDown: d = !1,
            anchor: h = !1,
        } = e,
        [m, f] = i.useState(!1),
        p = i.useContext(ey),
        g = i.useId(),
        x = i.useCallback(() => f((e) => !e), []),
        { text: v, phase: j } = (function (e) {
            let [t, n] = i.useState(e),
                [l, a] = i.useState("idle"),
                [s, r] = i.useState(e);
            return (
                s !== e && (r(e), a(e === t ? "idle" : "exit")),
                i.useEffect(() => {
                    if ("exit" !== l) return;
                    let e = setTimeout(() => {
                        n(s), a("enter");
                    }, 150);
                    return () => clearTimeout(e);
                }, [l, s]),
                i.useEffect(() => {
                    if ("enter" !== l) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => a("idle"));
                        });
                    return () => {
                        cancelAnimationFrame(t), cancelAnimationFrame(e);
                    };
                }, [l]),
                { text: t, phase: l }
            );
        })(n),
        y = m ? ev.a : eb._,
        k = null != c,
        w = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: eg.hd, children: t }),
                (0, a.jsx)(b.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: r()(eg.qo, { [eg._q]: "exit" === j, [eg.GD]: "enter" === j }),
                    children: v,
                }),
                k ? (0, a.jsx)(y, { size: "xs", color: "currentColor", className: eg.nD }) : null,
            ],
        }),
        A = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: eg.$m, children: w }, `face-${p}`),
                l
                    ? (0, a.jsx)("span", { className: r()(eg.$m, eg.pw), "aria-hidden": !0, children: w }, `shine-${p}`)
                    : null,
            ],
        });
    return (0, a.jsxs)("li", {
        className: eg.K1,
        "data-live": l,
        "data-settled": s,
        "data-connected": u,
        "data-connects-down": d,
        "data-vibegrations-turn-status": h ? "true" : void 0,
        style: null != o ? { "--custom-vibegrations-shimmer-tint": o } : void 0,
        children: [
            k
                ? (0, a.jsx)(ej.D, {
                      tag: "div",
                      className: r()(eg.ep, eg.EK),
                      "aria-expanded": m,
                      "aria-controls": g,
                      "aria-label": P.intl.formatToPlainString(R.default.s1wx5H, { activity: v }),
                      onClick: x,
                      children: A,
                  })
                : (0, a.jsx)("div", { className: eg.ep, children: A }),
            (0, a.jsx)("div", { id: g, hidden: !m, className: eg.BA, children: c }),
        ],
    });
}
var ew = n(256905),
    eA = n(514042),
    eS = n(298668);
function eN(e) {
    return r()(eS._B, { [eS.ND]: e });
}
function eE(e) {
    let { name: t, thumbSrc: n = null, compact: l = !1, subText: i, children: s, onThumbError: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: eS.gJ, onError: r })
                : (0, a.jsx)(eA.FileIcon, { size: l ? "xs" : "sm", color: "currentColor" }),
            (0, a.jsxs)("div", {
                className: eS.Wd,
                children: [
                    (0, a.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: eS.Rr,
                        children: t,
                    }),
                    i,
                ],
            }),
            s,
        ],
    });
}
function eC(e) {
    return (0, a.jsx)("div", { className: eN(e.compact ?? !1), children: eE(e) });
}
function eI(e) {
    let { name: t, thumbSrc: n, ariaLabel: l, onClick: i, onThumbError: s } = e;
    return (0, a.jsx)(ej.D, {
        className: r()(eN(!0), eS.w8),
        onClick: i,
        "aria-label": l,
        children: eE({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
let eT = /^(.*?)\s*\((\+\d+)?[\s,]*([\u2212-]\d+)?\)$/,
    e_ =
        /^(.*?)\s*\((\d+ lines?|\d+ match(?:es)?|no matches|\d+ files?|empty|no logs yet|\d+ not found(?:, \d+ read-only)?|\d+ read-only|\d+KB|\d+ steps?)\)$/,
    eR =
        /^(Reading|Writing|Editing|Listing|Searching|Deleting|Running|Downloading|Saving|Sending|Importing|Imported|Building|Viewing|Loaded|Updating|Registering|Collecting|Clicking|Right-clicking|Double-clicking|Typing|Pressing|Hovering|Scrolling|Selecting|Waiting|Navigating|Going|Reloading|Capturing|Checking|Setting|Delegating|Driving|Working)(?= )/,
    eP = {
        "text-xs/normal": "text-xs/semibold",
        "text-sm/normal": "text-sm/semibold",
        "text-md/normal": "text-md/semibold",
    };
function eM(e, t) {
    let n = eR.exec(e);
    return null == n
        ? e
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(b.E, { tag: "span", variant: eP[t], color: "none", children: n[1] }),
                  e.slice(n[1].length),
              ],
          });
}
function eO(e) {
    let { text: t, variant: n, prose: l } = e;
    if (!0 === l) return t;
    let i = eT.exec(t),
        s = i?.[2],
        r = i?.[3];
    if (null != i && (null != s || null != r))
        return (0, a.jsxs)(a.Fragment, {
            children: [
                eM(i[1], n),
                null == s ? null : (0, a.jsxs)("span", { className: eg.MM, children: [" ", s] }),
                null == r ? null : (0, a.jsxs)("span", { className: eg.ie, children: [" ", r] }),
            ],
        });
    let o = e_.exec(t);
    return null == o
        ? eM(t, n)
        : (0, a.jsxs)(a.Fragment, {
              children: [eM(o[1], n), (0, a.jsxs)("span", { className: eg.qZ, children: [" ", o[2]] })],
          });
}
var eL = n(229775);
function eD(e) {
    let { projectId: t, node: n, presentation: l = "row", active: s = !1 } = e,
        [o, c] = i.useState(!1),
        u = i.useId(),
        d = i.useCallback(() => c((e) => !e), []),
        h = ec(n),
        m = n.detail,
        f = "failed" === n.status ? "text-feedback-critical" : "detail" === l ? "text-muted" : "text-default",
        p = "text-muted" === f,
        g = s && p ? "none" : o && p ? "currentColor" : f,
        x = r()(eg.iq, { [eL.Hz]: s && p }),
        v = "detail" === l ? "text-md/normal" : "text-sm/normal",
        j = "detail" === l ? "text-sm/normal" : "text-xs/normal",
        y = null != t ? n.screenshots : [];
    if (0 === m.length && 0 === y.length)
        return (0, a.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: eg.Dx,
            children: (0, a.jsx)(b.E, {
                tag: "div",
                variant: v,
                color: g,
                selectable: !0,
                className: x,
                children: (0, a.jsx)(eO, { text: h, variant: v, prose: !0 }),
            }),
        });
    let k = o ? ev.a : eb._;
    return (0, a.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: eg.Dx,
        children: [
            (0, a.jsxs)(ej.D, {
                tag: "div",
                className: eg.kG,
                "aria-expanded": o,
                "aria-controls": u,
                "aria-label": P.intl.formatToPlainString(R.default.z4KWsN, { step: h }),
                onClick: d,
                children: [
                    (0, a.jsx)(b.E, {
                        tag: "span",
                        variant: v,
                        color: g,
                        className: x,
                        children: (0, a.jsx)(eO, { text: h, variant: v, prose: !0 }),
                    }),
                    (0, a.jsx)(k, { size: "xs", color: "currentColor", className: eg.Ue }),
                ],
            }),
            (0, a.jsxs)("div", {
                id: u,
                hidden: !o,
                className: eg.yJ,
                children: [
                    m.map((e, t) =>
                        (0, a.jsx)(
                            b.E,
                            {
                                tag: "div",
                                variant: j,
                                color: s && p ? "none" : "text-muted",
                                selectable: !0,
                                className: r()({ [eL.Hz]: s && p }),
                                children: (0, a.jsx)(eO, { text: e, variant: j }),
                            },
                            t,
                        ),
                    ),
                    null != t && y.length > 0
                        ? (0, a.jsx)("div", {
                              className: eg.y8,
                              children: y.map((e) => (0, a.jsx)(e$, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function eF() {}
function e$(e) {
    let { projectId: t, screenshotId: n } = e,
        [l, s] = i.useState(null),
        [r, o] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        return (
            (0, h.aF)(t, n).then(
                (t) => {
                    e || s(t);
                },
                () => {
                    e || o(!0);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [t, n]);
    let c = P.intl.string(R.default["3Hq9pQ"]),
        u = i.useCallback(() => {
            (0, h.aF)(t, n).then((e) => {
                (0, ew.R)({
                    items: [{ type: "IMAGE", url: e, alt: c }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, eF);
        }, [t, n, c]);
    return r ? null : (0, a.jsx)(eI, { name: c, thumbSrc: l, ariaLabel: c, onClick: u, onThumbError: () => o(!0) });
}
function eq(e) {
    let { projectId: t, steps: n, fallbackLabel: l, live: i, durationMs: s, connectsDown: r = !1, closed: o = !1 } = e,
        c = ed(n),
        u = i ? void 0 : s,
        d =
            null != u
                ? (function (e) {
                      let t = Math.max(1, Math.round(e / 1e3));
                      if (t < 60) return P.intl.formatToPlainString(R.default["49T8W0"], { count: t });
                      let n = Math.round(t / 60);
                      return n < 60
                          ? P.intl.formatToPlainString(R.default.NkZO2t, { count: n })
                          : P.intl.formatToPlainString(R.default["2qYUUZ"], {
                                hours: Math.floor(n / 60),
                                minutes: n % 60,
                            });
                  })(u)
                : null != c
                  ? ec(c)
                  : (l ?? P.intl.string(R.default.nv6pUM)),
        h = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0);
    return (0, a.jsx)(ek, {
        glyph: (0, a.jsx)(ex, {}),
        line: d,
        anchor: !0,
        live: i,
        settled: null != u || (!i && o),
        connectsDown: r,
        detail: h
            ? (0, a.jsx)("ol", {
                  className: eg.dO,
                  children: n.map((e) =>
                      (0, a.jsx)(eD, { projectId: t, node: e, presentation: "detail", active: i && e === c }, e.id),
                  ),
              })
            : void 0,
    });
}
var eU = n(29080),
    eG = n(46054);
function eH(e) {
    let { steps: t, content: n, hasProposal: l, hasAttachments: a } = e,
        i = em(t).items,
        s = i.filter((e) => "message" === e.type).at(-1),
        r = (function (e) {
            for (let t = e.length - 1; t >= 0; t--) {
                let n = e[t];
                if (null != n) {
                    if ("assistant_delta" === n.kind && null != n.message && "" !== n.message) return !0;
                    if (!eh(n) && ("node" === n.kind || "error" === n.kind || "terminal_error" === n.kind)) break;
                }
            }
            return !1;
        })(t),
        o = r && null != s && s.content.trim() === n.trim(),
        c = !l && "" !== n && !o;
    return {
        streamed: i,
        lastStreamedMessage: s,
        showsClosingMessage: c,
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: a, showsClosingMessage: c, endsOnStreamedMessage: r }),
    };
}
var eB = n(478016),
    eV = n(34136);
function ez(e) {
    let { title: t, trailing: n, children: l, className: i, headerClassName: s, ...o } = e;
    return (0, a.jsxs)("section", {
        className: r()(eV.Nr, i),
        ...o,
        children: [
            (0, a.jsxs)("header", {
                className: r()(eV.wx, null != n && eV.o5, s),
                children: [
                    (0, a.jsx)(b.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var eW = n(113757);
function eY(e) {
    let { idea: t, selected: n, onPick: l } = e,
        s = i.useId(),
        o = null == l;
    return (0, a.jsxs)(ej.D, {
        className: r()(eW.nM, { [eW.f1]: o, [eW.CZ]: n }),
        onClick: o ? void 0 : () => l(t),
        "aria-label": P.intl.formatToPlainString(R.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: eW.jo,
                children: [
                    n
                        ? (0, a.jsx)(eB.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: eW.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(b.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: eW.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(b.E, {
                      tag: "div",
                      id: s,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function eK(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [s, r] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                r((t) => new Set(t).add(e.id)), l?.(e);
            },
            [l],
        );
    return (0, a.jsx)(ez, {
        title: P.intl.string(R.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                eY,
                { idea: e, selected: s.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var eZ = n(673724),
    eJ = n(375068);
function eQ(e) {
    let { projectId: t, attachments: n } = e,
        l = n.filter(eX),
        [s, r] = i.useState(() => new Set()),
        o = i.useCallback((e) => {
            r((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, a.jsx)("div", {
        className: eJ.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(e0, { name: e.name }, n)
                : eX(e)
                  ? (0, a.jsx)(
                        e2,
                        {
                            projectId: t,
                            viewableImages: l,
                            viewerIndex: l.indexOf(e),
                            unavailableIds: s,
                            markUnavailable: o,
                        },
                        n,
                    )
                  : (0, a.jsx)(e1, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function eX(e) {
    return null != e.id && eZ.Wb.has(e.content_type);
}
function e0(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? P.intl.formatToPlainString(R.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)(eC, { name: l, compact: !0 });
}
function e1(e) {
    let { projectId: t, id: n, name: l } = e,
        [s, r] = i.useState(!1),
        o = i.useCallback(() => {
            (0, h.n6)(t, n)
                .then(async (e) => {
                    if (!e) return void r(!0);
                    let l = document.createElement("a");
                    (l.href = await (0, h.PK)(t, n, { download: !0 })),
                        (l.target = "_blank"),
                        (l.rel = "noopener noreferrer"),
                        l.click();
                })
                .catch(() => {});
        }, [t, n]);
    return s
        ? (0, a.jsx)(e0, { name: l, unavailable: !0 })
        : (0, a.jsx)(eI, {
              name: l,
              thumbSrc: null,
              ariaLabel: P.intl.formatToPlainString(R.default.gV5YcR, { name: l }),
              onClick: o,
          });
}
function e2(e) {
    let { projectId: t, viewableImages: n, viewerIndex: l, unavailableIds: s, markUnavailable: r } = e,
        { id: o, name: c } = n[l],
        [u, d] = i.useState(null),
        m = s.has(o),
        [f, p] = i.useState(0);
    i.useEffect(() => {
        let e = !1;
        return (
            (0, h.PK)(t, o).then(
                (t) => {
                    e || d(t);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, o, f]);
    let g = i.useCallback(() => {
        Promise.all(
            n.map(async (e) => (s.has(e.id) ? null : { type: "IMAGE", url: await (0, h.PK)(t, e.id), alt: e.name })),
        ).then(
            (e) => {
                null != e[l] &&
                    (0, ew.R)({
                        items: e.filter((e) => null != e),
                        startingIndex: e.slice(0, l).filter((e) => null != e).length,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
            },
            () => {},
        );
    }, [t, n, l, s]);
    return m
        ? (0, a.jsx)(e0, { name: c, unavailable: !0 })
        : (0, a.jsx)(eI, {
              name: c,
              thumbSrc: u,
              ariaLabel: P.intl.formatToPlainString(R.default.QUFLUq, { name: c }),
              onClick: g,
              onThumbError: () => {
                  d(null),
                      (0, h.n6)(t, o).then(
                          (e) => {
                              e ? 0 === f && p(1) : r(o);
                          },
                          () => {},
                      );
              },
          });
}
var e6 = n(430392),
    e3 = n(824757);
function e5(e) {
    let { label: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: e3.uW,
        children: [(0, a.jsx)(b.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }), n],
    });
}
function e7(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(e5, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: e3.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: e3.jw,
                              children: (0, a.jsx)(b.E, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  tag: "span",
                                  children: e
                                      .split("_")
                                      .map((e) => (0 === e.length ? e : e[0] + e.slice(1).toLowerCase()))
                                      .join(" "),
                              }),
                          },
                          e,
                      ),
                  ),
              }),
          });
}
function e4(e) {
    let { isActivity: t } = e,
        n = t ? q.k : e6.RobotIcon;
    return (0, a.jsxs)("span", {
        className: e3.L6,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
            (0, a.jsx)(b.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                tag: "span",
                children: P.intl.string(t ? P.t.IC5Ann : R.default.oNtdYP),
            }),
        ],
    });
}
function e8(e) {
    let { proposal: t } = e;
    return (0, a.jsx)(ez, {
        title: P.intl.string(R.default["60htw+"]),
        trailing: (0, a.jsx)(e4, { isActivity: !0 === t.is_activity }),
        "data-vibegrations-plan-card": !0,
        children: (0, a.jsxs)("div", {
            className: e3.rf,
            children: [
                (0, a.jsx)(b.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: t.summary,
                }),
                t.changes.length > 0
                    ? (0, a.jsx)(e5, {
                          label: P.intl.string(R.default.KLyB8Y),
                          children: (0, a.jsx)("ul", {
                              className: e3.p_,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsx)(
                                      "li",
                                      {
                                          className: e3.Aw,
                                          children: (0, a.jsx)(b.E, {
                                              variant: "experimental/body-md/normal",
                                              color: "text-default",
                                              tag: "span",
                                              selectable: !0,
                                              children: e,
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      })
                    : null,
                t.commands.length > 0
                    ? (0, a.jsx)(e5, {
                          label: P.intl.string(P.t["0hKkS+"]),
                          children: (0, a.jsx)("ul", {
                              className: e3.p_,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: e3.uX,
                                          children: [
                                              (0, a.jsxs)(b.E, {
                                                  variant: "experimental/body-md/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, a.jsx)(b.E, {
                                                  variant: "experimental/body-md/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: e.description,
                                              }),
                                          ],
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      })
                    : null,
                (0, a.jsx)(e7, { label: P.intl.string(R.default.ieqTtP), names: t.bot_permissions ?? [] }),
                (0, a.jsx)(e7, { label: P.intl.string(R.default.Cn9qix), names: t.privileged_intents ?? [] }),
            ],
        }),
    });
}
var e9 = n(192308),
    te = n(479191);
function tt(e) {
    let { projectId: t, request: l } = e,
        s = i.useCallback(() => {
            (0, e9.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("338013"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: l });
            });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: te.Lo,
        children: [
            (0, a.jsx)(b.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(R.default["/e28TK"]),
            }),
            (0, a.jsx)(b.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : P.intl.string(R.default.jxvtin),
            }),
            (0, a.jsx)("div", {
                className: te.cS,
                children: l.fields.map((e) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: te.$H,
                            children: (0, a.jsx)(b.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                tag: "span",
                                children: e.label,
                            }),
                        },
                        e.name,
                    ),
                ),
            }),
            (0, a.jsx)("div", {
                className: te.sq,
                children: (0, a.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: P.intl.string(R.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var tn = n(976814),
    tl = n(973e3);
function ta(e) {
    let { projectId: t, request: n } = e,
        l = (0, A.bG)([h.Ay], () => h.Ay.getSettings(t)),
        s = (n.keys ?? []).map((e) => l?.schema.find((t) => t.key === e)).filter((e) => null != e),
        r = i.useCallback(() => {
            (0, tn.A)(t, { scopeKeys: n.keys, note: n.note, notifyAgent: !0 });
        }, [t, n]);
    return (0, a.jsxs)("article", {
        className: tl.Mk,
        children: [
            (0, a.jsx)(b.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(R.default.wgDhiQ),
            }),
            (0, a.jsx)(b.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != n.note && "" !== n.note ? n.note : P.intl.string(R.default["V+DBhs"]),
            }),
            s.length > 0
                ? (0, a.jsx)("div", {
                      className: tl.R6,
                      children: s.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: tl.K4,
                                  children: (0, a.jsx)(b.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      tag: "span",
                                      children: e.label,
                                  }),
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)("div", {
                className: tl.p0,
                children: (0, a.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: r,
                    text: P.intl.string(R.default["KO2xN+"]),
                }),
            }),
        ],
    });
}
function ti(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function ts(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tr(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function to(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tc(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tu(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function td(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function th(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tm(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tf(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tp(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tg() {
    return [
        { key: "snail", Illocon: ti, tint: "var(--illo-yellow-40)", name: tv(R.default["2l3AEQ"]) },
        { key: "goat", Illocon: ts, tint: "var(--illo-orange-40)", name: tv(R.default["+FPL+I"]) },
        { key: "frog", Illocon: tr, tint: "var(--illo-green-40)", name: tv(R.default.w4GOfR) },
        { key: "bunny", Illocon: to, tint: "var(--illo-pink-40)", name: tv(R.default.XmZT9M) },
        { key: "cat", Illocon: tc, tint: "var(--illo-pink-40)", name: tv(R.default.NnydwQ) },
        { key: "caterpillar", Illocon: tu, tint: "var(--illo-green-40)", name: tv(R.default["4iXcNT"]) },
        { key: "butterfly", Illocon: td, tint: "var(--illo-purple-40)", name: tv(R.default.DoTGt5) },
        { key: "dog", Illocon: th, tint: "var(--illo-yellow-40)", name: tv(R.default["9zxqmP"]) },
        { key: "spider", Illocon: tm, tint: "var(--illo-orange-40)", name: tv(R.default.HF0T3L) },
        { key: "bee", Illocon: tf, tint: "var(--illo-yellow-40)", name: tv(R.default.XTzDga) },
        { key: "bot", Illocon: tp, tint: "var(--illo-purple-40)", name: tv(R.default.abtC2b) },
    ];
}
function tx(e) {
    return tg().find((t) => t.key === e);
}
function tv(e) {
    return P.intl.string(e);
}
function tb(e) {
    let t = tg(),
        n = 0,
        l = e[0] ?? "";
    for (let e = 0; e < l.length; e++) n = (31 * n + l.charCodeAt(e)) % t.length;
    let a = new Map();
    return (
        e.forEach((e, l) => {
            a.set(e, t[(n + l) % t.length]);
        }),
        a
    );
}
var tj = n(683063);
function ty(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : P.intl.string(R.default.MdXWEK);
}
function tk(e) {
    let { lane: t, Illocon: n, tint: l, name: i, connectsDown: s } = e,
        r = t.task,
        o = "running" === r.status,
        c = ed(t.steps),
        u = o
            ? null != c
                ? ec(c)
                : ty(r)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(ty(e));
                  switch (e.status) {
                      case "failed":
                          return P.intl.formatToPlainString(R.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return P.intl.formatToPlainString(R.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return P.intl.formatToPlainString(R.default.vuv9bT, {
                                  task: t,
                                  duration: (function (e) {
                                      let t = Math.max(1, Math.round(e / 1e3));
                                      if (t < 60) return P.intl.formatToPlainString(R.default.RsOwXc, { count: t });
                                      let n = Math.round(t / 60);
                                      return n < 60
                                          ? P.intl.formatToPlainString(R.default["z+U4YX"], { count: n })
                                          : P.intl.formatToPlainString(R.default["7Q/vz0"], {
                                                hours: Math.floor(n / 60),
                                                minutes: n % 60,
                                            });
                                  })(e.durationMs),
                              });
                          return P.intl.formatToPlainString(R.default.KS49RN, { task: t });
                      default:
                          return P.intl.formatToPlainString(R.default.KS49RN, { task: t });
                  }
              })(r),
        d =
            0 === t.steps.length && 0 === r.detail.length
                ? void 0
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          t.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: eg.dO,
                                    children: t.steps.map((e) =>
                                        (0, a.jsx)(eD, { node: e, presentation: "detail", active: o && e === c }, e.id),
                                    ),
                                })
                              : null,
                          r.detail.map((e, t) =>
                              (0, a.jsx)(
                                  "div",
                                  {
                                      className: eg.iq,
                                      children: (0, a.jsx)(eO, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  });
    return (0, a.jsx)(ek, {
        glyph: (0, a.jsx)(tj.u, {
            asset: (0, a.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: ty(r),
            position: "left",
            children: (0, a.jsx)("span", {
                className: eg.nC,
                children: (0, a.jsx)(n, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: u,
        live: o,
        settled: !o,
        tint: l,
        detail: d,
        connected: !0,
        connectsDown: s,
    });
}
var tw = n(140735),
    tA = n(329456);
let tS = [];
function tN(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: tA.xL,
        "data-status": t,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return P.intl.string(R.default.TkPGOH);
                case "in_progress":
                    return P.intl.string(R.default["oK+fmd"]);
                default:
                    return P.intl.string(R.default.d7lieu);
            }
        })(t),
        children: (0, a.jsx)("svg", {
            className: tA.L5,
            viewBox: "0 0 10.1668 10.1668",
            "aria-hidden": !0,
            focusable: "false",
            children: (0, a.jsx)("path", { d: "M1 5.52L3.92 9.17L9.17 1" }),
        }),
    });
}
function tE(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : tS), [n, t]),
        s = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        r = l.map((e) => e.key).join("\0"),
        [o, c] = i.useState(l),
        [u, d] = i.useState(r),
        [h, m] = i.useState(!1);
    u !== r && (d(r), c([...l, ...o.filter((e) => !s.has(e.key))]), 0 === l.length && m(!1));
    let f = o.some((e) => !s.has(e.key));
    if (
        (i.useEffect(() => {
            if (!f) return;
            let e = setTimeout(() => c(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [f, l, n]),
        i.useEffect(() => {
            if (!n || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => m(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [n, o.length]),
        0 === o.length)
    )
        return null;
    let p = o.slice(0, 3),
        g = o.length - p.length;
    return (0, a.jsxs)("span", {
        className: tA.X6,
        "data-shown": n && h ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l } = e,
                    { Illocon: i } = n;
                return (0, a.jsx)(
                    "span",
                    {
                        className: tA.MA,
                        "data-leaving": s.has(t) ? void 0 : "true",
                        title: l,
                        children: (0, a.jsx)(i, { size: 16, alt: l, ariaHidden: !0 }),
                    },
                    t,
                );
            }),
            g > 0
                ? (0, a.jsx)(b.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: tA.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function tC(e) {
    let { todos: t, provisional: n, agents: l } = e,
        s = (function (e) {
            let t = e.join("\0"),
                [n, l] = i.useState(() => new Set(e)),
                [a, s] = i.useState(t),
                [r, o] = i.useState(() => new Set());
            return (
                a !== t && (s(t), l(new Set(e)), o(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                i.useEffect(() => {
                    if (0 === r.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => o(new Set()));
                        });
                    return () => {
                        cancelAnimationFrame(t), cancelAnimationFrame(e);
                    };
                }, [r]),
                r
            );
        })(i.useMemo(() => t.map((e) => e.id), [t]));
    return (0, a.jsxs)("ul", {
        className: tA.p_,
        children: [
            t.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: tA.AS,
                        "data-status": e.status,
                        "data-arriving": s.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(tN, { status: e.status }),
                            (0, a.jsx)(b.E, {
                                variant: "experimental/body-sm/medium",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: tA.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", { className: tA.Qq, children: e.text }),
                            }),
                            null != l && l.length > 0
                                ? (0, a.jsx)(tE, { agents: l, active: "in_progress" === e.status })
                                : null,
                        ],
                    },
                    e.id,
                ),
            ),
            null != n
                ? (0, a.jsxs)("li", {
                      className: tA.AS,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(tN, { status: "pending" }),
                          (0, a.jsx)(b.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: tA.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: tA.Qq, children: n }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tI(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: i = !0 } = e,
        { completed: s, total: r } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === r
        ? null
        : (0, a.jsxs)(ez, {
              title: P.intl.string(R.default.qCRC6c),
              trailing: (0, a.jsx)(b.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: P.intl.formatToPlainString(R.default.bQvqly, { completed: s, total: r }),
              }),
              className: tA.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  i
                      ? (0, a.jsx)(tw.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: P.intl.formatToPlainString(R.default["QG/EiF"], { completed: s, total: r }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: tA.rf,
                      children: (0, a.jsx)(tC, { todos: t, provisional: n, agents: l }),
                  }),
              ],
          });
}
var tT = n(165648);
function t_(e) {
    let t = tb(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? tx(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [{ key: e.taskId, mark: l, name: null != n && null != e.task.helperName ? e.task.helperName : l.name }];
    });
}
function tR(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            durationMs: s,
            interrupted: r = !1,
            todos: o,
            provisionalTodo: c,
            segment: u,
            hostsChecklist: d = !0,
            reportsDuration: h = !0,
            closed: m = !1,
            segmentDurationMs: f,
        } = e,
        p = i.useMemo(() => eu(n, { turnActive: l }), [n, l]),
        g = i.useMemo(
            () =>
                null == u
                    ? p
                    : {
                          ...p,
                          steps: p.steps.filter((e) => e.segment === u),
                          tasks: p.tasks.filter((e) => e.task.segment === u),
                      },
            [p, u],
        );
    if (r)
        return (0, a.jsx)("ol", {
            className: eg.pj,
            "data-live": !1,
            children: (0, a.jsx)(ek, {
                glyph: (0, a.jsx)(eU.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: P.intl.string(R.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let x = l ? void 0 : (f ?? (h ? (p.turn?.durationMs ?? s) : void 0)),
        v = d ? (ef(n) ?? o ?? null) : null,
        b = null != v && v.length > 0;
    if (0 === g.steps.length && 0 === g.tasks.length && !b) return null;
    let j = g.tasks,
        y = tb(j.map((e) => e.taskId)),
        k = !m && (l || j.some((e) => "running" === e.task.status)),
        w = t_(j);
    return (0, a.jsx)(ey.Provider, {
        value: j.length,
        children: (0, a.jsxs)("ol", {
            className: eg.pj,
            "data-live": k,
            children: [
                (0, a.jsx)(eq, {
                    projectId: t,
                    steps: g.steps,
                    fallbackLabel: j.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: l,
                    closed: m,
                    durationMs: x,
                    connectsDown: j.length > 0,
                }),
                j.map((e, t) => {
                    let n = null != e.task.helperMark ? tx(e.task.helperMark) : void 0,
                        l = n ?? y.get(e.taskId);
                    return null == l
                        ? null
                        : (0, a.jsx)(
                              tk,
                              {
                                  lane: e,
                                  Illocon: l.Illocon,
                                  tint: l.tint,
                                  name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                                  connectsDown: t < j.length - 1,
                              },
                              e.taskId,
                          );
                }),
                b
                    ? (0, a.jsx)("li", {
                          className: eg.YO,
                          children: (0, a.jsx)(tI, { todos: v, provisional: c, agents: w }),
                      })
                    : null,
            ],
        }),
    });
}
function tP(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: s,
            ideas: o,
            attachments: c,
            secretRequest: u,
            settingsRequest: d,
            onPickIdea: h,
            pickedIdeaIds: m,
            sideReply: f = !1,
            hoistedProse: p = !1,
        } = e,
        {
            streamed: g,
            lastStreamedMessage: x,
            showsClosingMessage: v,
            attachmentsHost: j,
        } = i.useMemo(
            () => eH({ steps: n, content: l, hasProposal: null != s, hasAttachments: null != c && c.length > 0 }),
            [n, l, s, c],
        ),
        y = null == c ? null : (0, a.jsx)(eQ, { projectId: t, attachments: c }),
        k = null == y ? null : (0, a.jsx)("div", { className: eg.MT, children: y }),
        w = f
            ? (0, a.jsx)(b.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: P.intl.string(R.default.OAjkIT),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: eg.ue,
        children: [
            g.length > 0 && !p
                ? (0, a.jsx)("ol", {
                      className: eg.dO,
                      children: g
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: eg.DV,
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: tT.PT,
                                              children: eG.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === j && e === x ? k : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != s
                ? (0, a.jsx)(e8, { proposal: s })
                : v
                  ? (0, a.jsxs)("div", {
                        className: r()(eg.ky, eL.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: r()(tT.PT, eg.cW),
                                children: eG.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === j ? k : null,
                            w,
                        ],
                    })
                  : null,
            null != u
                ? (0, a.jsx)("div", {
                      className: r()(eg.ky, eL.XR),
                      children: (0, a.jsx)(tt, { projectId: t, request: u }),
                  })
                : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: r()(eg.ky, eL.XR),
                      children: (0, a.jsx)(ta, { projectId: t, request: d }),
                  })
                : null,
            "standalone" === j ? y : null,
            null != o && o.length > 0 ? (0, a.jsx)(eK, { ideas: o, pickedIdeaIds: m, onPick: h }) : null,
            v ? null : w,
        ],
    });
}
n(323874), n(14289), n(35956);
var tM = n(475358),
    tO = n(922016),
    tL = n(980707),
    tD = n(477782),
    tF = n(81369),
    t$ = n(717400),
    tq = n(663341),
    tU = n(826745),
    tG = n(866665),
    tH = n(783977),
    tB = n(559647),
    tV = n(285796),
    tz = n(775602),
    tW = n(311656),
    tY = n(789438);
let tK = eZ.Is;
function tZ(e) {
    let { text: t } = e,
        [n, l] = i.useState(""),
        [s, r] = i.useState("enterStart"),
        [o, c] = i.useState("");
    t !== o && (c(t), t !== n && ("" === n ? (l(t), r("enterStart")) : "idle" === s && r("exit"))),
        i.useEffect(() => {
            if ("exit" === s) {
                let e = window.setTimeout(() => {
                    l(t), r("enterStart");
                }, 250);
                return () => window.clearTimeout(e);
            }
            if ("enterStart" === s) {
                let e = 0,
                    t = window.requestAnimationFrame(() => {
                        e = window.requestAnimationFrame(() => r("idle"));
                    });
                return () => {
                    window.cancelAnimationFrame(t), 0 !== e && window.cancelAnimationFrame(e);
                };
            }
        }, [s, t]);
    let u = "exit" === s ? tY.t0 : "enterStart" === s ? tY.Rj : "";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { className: `${tY.xM} ${tY.nT} ${u}`, children: n }),
            (0, a.jsx)(tM.e, { shortcut: "tab", className: `${tY.xT} ${tY.nT} ${u}`, keyClassName: tY.IS }),
        ],
    });
}
let tJ = 0;
function tQ(e) {
    let {
            canSend: t,
            stopped: n,
            running: l,
            restoring: s = !1,
            onSend: r,
            onInterrupt: o,
            onUploadFile: c,
            onDeleteFile: u,
            onApprove: d,
            onImport: h,
            suggestion: m,
            questionOpen: f = !1,
            modelSettings: p,
            onModelSettingsChange: g,
        } = e,
        [x, v] = i.useState(""),
        b = (0, A.bG)([tz.Ay], () => tz.Ay.isSubmitButtonEnabled),
        [j, y] = i.useState([]),
        [k, w] = i.useState(!1),
        [S, N] = i.useState(!1);
    i.useEffect(() => {
        l || N(!1);
    }, [l]);
    let E = i.useRef(null),
        C = i.useRef([]),
        I = i.useRef(new Set()),
        T = i.useRef(u);
    T.current = u;
    let _ = i.useCallback((e) => {
            (C.current = e), y(e);
        }, []),
        M = i.useCallback((e) => {
            T.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    i.useEffect(() => {
        let e = I.current;
        return () => {
            for (let t of C.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && M(t.ref);
        };
    }, [M]);
    let O = i.useCallback(
            (e, t) => {
                if (I.current.has(e)) return;
                let n = C.current;
                n.some((t) => t.localId === e) && _(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [_],
        ),
        L = i.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...C.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++tJ,
                        i = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= tK) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.DlX57a, { count: tK }),
                        });
                        continue;
                    }
                    if (!(0, eZ.x5)(l.size, e)) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.cI7t94, {
                                size: (0, eZ.ZJ)((0, eZ.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let s = eZ.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...i, previewUrl: s }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: l } of (_(t), n))
                    c(e).then(
                        (e) => {
                            I.current.has(l) ? M(e) : O(l, { status: "ready", ref: e });
                        },
                        (e) => {
                            I.current.has(l) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                O(l, { status: "error", errorText: P.intl.string(R.default.GwEHvn) }));
                        },
                    );
            },
            [M, c, O, _],
        ),
        D = i.useCallback(
            (e) => {
                let t = C.current,
                    n = t.find((t) => t.localId === e);
                I.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && M(n.ref),
                    _(t.filter((t) => t.localId !== e));
            },
            [M, _],
        ),
        F = j.every((e) => "ready" === e.status),
        $ = "" !== x.trim() || j.length > 0,
        q = t && $ && F,
        U = i.useCallback(() => {
            if (!q) return;
            let e = C.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (r(x, e.length > 0 ? e : void 0), C.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            v(""), _([]);
        }, [q, x, r, _]),
        G = i.useCallback(
            (e) => {
                e.preventDefault(), U();
            },
            [U],
        ),
        H = i.useCallback(() => {
            null == o || S || (N(!0), o());
        }, [o, S]),
        B = null == m || "" !== x || !t || n || s ? null : m,
        V = i.useCallback(
            (e) => {
                if ("Escape" === e.key && l && null != o && !S) {
                    e.preventDefault(), e.stopPropagation(), H();
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != B) {
                    e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), v(B);
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != d && (e.preventDefault(), d());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), U());
            },
            [U, d, l, o, S, H, B],
        ),
        z = i.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), L(n));
            },
            [t, L],
        ),
        W = i.useCallback(
            (e) => {
                e.preventDefault(), w(!1), t && L(Array.from(e.dataTransfer.files));
            },
            [t, L],
        ),
        Y = i.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), w(!0));
        }, []),
        K = i.useCallback(
            (e) => {
                L(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [L],
        ),
        Z = i.useRef(null),
        J = i.useRef(null),
        [Q, X] = i.useState(0),
        [ee, et] = i.useState(!1);
    i.useEffect(() => {
        if (0 === x.length) return void et(!1);
        let e = Z.current?.querySelector("textarea");
        if (null != e) {
            let t = t1(e);
            null != t && X(t);
        }
        et(!0);
        let t = setTimeout(() => et(!1), tX);
        return () => clearTimeout(t);
    }, [x]);
    let en = i.useMemo(() => ({ "--custom-glow-x": `${Q}px` }), [Q]),
        el = ee ? ` ${tY.EB}` : "",
        ea = null != B;
    return (0, a.jsxs)("form", {
        onSubmit: G,
        onDrop: W,
        onDragOver: Y,
        onDragLeave: () => w(!1),
        className: k ? `${tY.DA} ${tY.pV}` : tY.DA,
        children: [
            j.length > 0
                ? (0, a.jsx)("div", {
                      className: tY.lN,
                      children: j.map((e) => (0, a.jsx)(t2, { draft: e, onRemove: D }, e.localId)),
                  })
                : null,
            (0, a.jsx)("span", { className: `${tY.wg} ${tY.LP}${el}`, style: en, "aria-hidden": !0 }),
            (0, a.jsx)("span", { className: `${tY.wg} ${tY.L3}${el}`, style: en, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: tY.VA,
                ref: Z,
                children: [
                    (0, a.jsx)("input", {
                        ref: E,
                        type: "file",
                        multiple: !0,
                        onChange: K,
                        className: tY.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(tO.Y, {
                        targetElementRef: J,
                        position: "top",
                        align: "left",
                        animation: tO.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, a.jsx)(tL.W, {
                                "data-menu-migrated": !0,
                                navId: "vibegrations-composer-attach",
                                "aria-label": P.intl.string(P.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, a.jsxs)(tD.rX, {
                                    children: [
                                        (0, a.jsx)(tD.Dr, {
                                            id: "upload-file",
                                            label: P.intl.string(P.t["d3+iYs"]),
                                            iconLeft: tF.H,
                                            leadingAccessory: { type: "icon", icon: tF.H },
                                            action: () => E.current?.click(),
                                        }),
                                        null != h
                                            ? (0, a.jsx)(tD.Dr, {
                                                  id: "import-project",
                                                  label: P.intl.string(R.default.edKajy),
                                                  iconLeft: t$.q,
                                                  leadingAccessory: { type: "icon", icon: t$.q },
                                                  action: h,
                                              })
                                            : null,
                                    ],
                                }),
                            });
                        },
                        children: (e, n) => {
                            let { isShown: l } = n;
                            return (0, a.jsx)("button", {
                                ...e,
                                ref: J,
                                type: "button",
                                className: `${tY.Y0} ${tY.nu}`,
                                disabled: !t,
                                "aria-label": P.intl.string(P.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": l,
                                children: (0, a.jsx)(tq.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: tY.Qu,
                                }),
                            });
                        },
                    }),
                    null == B
                        ? null
                        : (0, a.jsx)("div", {
                              className: tY.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(tZ, { text: B }),
                          }),
                    (0, a.jsx)(tU.y, {
                        value: x,
                        onChange: (e) => v(e.currentTarget.value),
                        onKeyDown: V,
                        onPaste: z,
                        placeholder: s
                            ? P.intl.string(R.default.pGFXZ0)
                            : n
                              ? P.intl.string(R.default.JeM47J)
                              : t
                                ? ea
                                    ? ""
                                    : f
                                      ? P.intl.string(R.default.M3ovXY)
                                      : P.intl.string(l ? R.default["67PpcP"] : R.default.ahRdoJ)
                                : P.intl.string(R.default.nm4w9P),
                        disabled: !t,
                        "aria-label": P.intl.string(R.default.OPr66w),
                        rows: 1,
                        className: tY.jp,
                    }),
                    (0, a.jsx)("div", {
                        className: tY.Sz,
                        children:
                            l && null != o
                                ? (0, a.jsx)(tG.m, {
                                      text: P.intl.string(R.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: tY.AW,
                                          disabled: S,
                                          onClick: H,
                                          "aria-label": P.intl.string(R.default.KdgI4k),
                                          children: (0, a.jsx)(eU.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != p && null != g
                                  ? (0, a.jsx)(tW.A, {
                                        settings: p.settings,
                                        choices: p.choices,
                                        disabled: !t,
                                        onChange: g,
                                        className: `${tY.Y0} ${tY.Il}`,
                                        icon: (0, a.jsx)(tH.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    b
                        ? (0, a.jsxs)("div", {
                              className: tY.fF,
                              children: [
                                  (0, a.jsx)("div", { className: tY.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: tY.rt,
                                      disabled: !q,
                                      "aria-label": P.intl.string(R.default["22GHMt"]),
                                      children: (0, a.jsx)(tB.SendMessageIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
let tX = 1500,
    t0 = [
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "letter-spacing",
        "word-spacing",
        "line-height",
        "text-indent",
        "text-transform",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "border-top-width",
        "border-right-width",
        "border-bottom-width",
        "border-left-width",
    ];
function t1(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = t1.mirror;
            if (null != e) return e;
            let t = document.createElement("div");
            return (
                t.setAttribute("aria-hidden", "true"),
                (t.style.position = "absolute"),
                (t.style.top = "0"),
                (t.style.left = "-9999px"),
                (t.style.visibility = "hidden"),
                (t.style.boxSizing = "border-box"),
                (t.style.whiteSpace = "pre-wrap"),
                (t.style.overflowWrap = "break-word"),
                document.body.appendChild(t),
                (t1.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of t0) t.style.setProperty(e, n.getPropertyValue(e));
    (t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length));
    let l = document.createElement("span");
    (l.textContent = "\u200B"), t.appendChild(l);
    let a = l.offsetLeft;
    return (t.textContent = ""), e.offsetLeft + a - e.scrollLeft;
}
function t2(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(eC, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(b.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: tY.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: tY.o1,
                onClick: () => n(t.localId),
                "aria-label": P.intl.string(R.default["3HWvgk"]),
                children: (0, a.jsx)(tV.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
t1.mirror = null;
var t6 = n(287809),
    t3 = n(320095),
    t5 = n(963852),
    t7 = n(521981),
    t4 = n(763754),
    t8 = n(491182),
    t9 = n(622868),
    ne = n(308334),
    nt = n(837528),
    nn = n(375199),
    nl = n(715628),
    na = n(752636),
    ni = n(9842),
    ns = n(589022),
    nr = n(95701),
    no = n(994500),
    nc = n(967198),
    nu = n(441136);
let nd = (0, nr.createChannelRecord)({ id: "vibegrations-builder", type: C.rbe.DM }),
    nh = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function nm(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: r()(nu.Yq, { [nu.x1]: t }), children: e });
}
function nf(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function np(e, t) {
    let { content: n } = (0, nn.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        l = i.useMemo(() => ({ message: e, channel: nd, compact: !1 }), [e]);
    return "" !== t ? (0, nl.A)(l, n) : null;
}
function ng(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        s = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        r = (0, nt.m)(e, nd, t.usernameProfile, l),
        o = (0, nt.Jo)(t.avatarProfile, l),
        c = (0, A.bG)([nc.A], () => nc.A.getGuildId()),
        u = (0, A.bG)([t6.default], () => t6.default.getCurrentUser()),
        d = i.useCallback(
            (t) => {
                let n = t6.default.getUser(e.author.id) ?? e.author;
                return null == u ? null : (0, a.jsx)(ns.A, { ...t, user: n, currentUser: u, guildId: c ?? void 0 });
            },
            [u, c, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: r,
        onPopoutRequestClose: s,
        renderPopout: d,
        guildId: c ?? void 0,
    };
}
function nx(e) {
    let { baseMessage: t, referenced: n, onJumpToReplied: l } = e,
        s = i.useMemo(
            () => ("" !== n.content ? (0, t7.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null),
            [n],
        ),
        { isReplyAuthorBlocked: r, isReplyAuthorIgnored: o } = (0, A.cf)(
            [no.A],
            () => ({
                isReplyAuthorBlocked: no.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: no.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        c = (0, t4.X4)(n),
        u = (0, t4.X4)(t),
        d = ng(n);
    return (0, a.jsx)(ne.A, {
        repliedAuthor: c,
        baseAuthor: u,
        baseMessage: t,
        channel: nd,
        referencedMessage: { state: ni.a.LOADED, message: n },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: r,
        isReplyAuthorIgnored: o,
        isReplySpineClickable: null != l,
        showReplySpine: !0,
        renderPopout: d.renderPopout,
        showAvatarPopout: d.showAvatarPopout,
        showUsernamePopout: d.showUsernamePopout,
        onClickAvatar: d.onClickAvatar,
        onClickUsername: d.onClickUsername,
        onClickReply: l,
        onPopoutRequestClose: d.onPopoutRequestClose,
    });
}
function nv(e) {
    let { message: t, author: n } = e,
        l = ng(t);
    return (0, a.jsx)(t9.Ay, {
        message: t,
        channel: nd,
        author: n,
        guildId: l.guildId,
        subscribeToGroupId: t.id,
        renderPopout: l.renderPopout,
        showAvatarPopout: l.showAvatarPopout,
        showUsernamePopout: l.showUsernamePopout,
        onClickAvatar: l.onClickAvatar,
        onClickUsername: l.onClickUsername,
        onPopoutRequestClose: l.onPopoutRequestClose,
    });
}
function nb(e) {
    let { content: t, createdAt: n, userId: l, accessories: s, groupStart: r } = e,
        o = (0, A.bG)([t6.default], () => (null != l ? t6.default.getUser(l) : null) ?? t6.default.getCurrentUser(), [
            l,
        ]),
        c = i.useMemo(() => (0, t4.FT)(o, null), [o]),
        u = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, t5.Ay)({ channelId: nd.id, content: t, author: o });
            return (0, t3.rh)({ ...e, timestamp: nf(n, e.timestamp), state: C.cmJ.SENT });
        }, [t, o, n]);
    return null == u ? null : (0, a.jsx)(nj, { message: u, author: c, content: t, accessories: s, groupStart: r });
}
function nj(e) {
    let { message: t, author: n, content: l, accessories: i, groupStart: s = !0 } = e,
        r = np(t, l);
    return (0, a.jsx)(t8.A, {
        className: nu.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(nv, { message: t, author: n }) : void 0,
        childrenMessageContent: r,
        childrenAccessories: nm(i, "" !== l),
        disableInteraction: !0,
    });
}
function ny(e) {
    let { content: t, createdAt: n, accessories: l, replyTo: s, onJumpToReplied: r, groupStart: o = !0 } = e,
        c = i.useMemo(() => (0, t4.FT)(null, null), []),
        u = i.useMemo(() => ({ ...c, nick: "Conjure", colorString: "var(--text-brand)" }), [c]),
        d = s?.userId,
        h = (0, A.bG)([t6.default], () => (null != d ? t6.default.getUser(d) : null) ?? t6.default.getCurrentUser(), [
            d,
        ]),
        m = i.useMemo(() => {
            if (null == s || null == h) return null;
            let e = (0, t5.Ay)({ channelId: nd.id, content: s.content, author: h });
            return (0, t3.rh)({ ...e, id: s.id, timestamp: nf(s.createdAt, e.timestamp), state: C.cmJ.SENT });
        }, [s, h]),
        f = i.useMemo(() => (null == s ? void 0 : { channel_id: nd.id, message_id: s.id }), [s]),
        p = i.useMemo(() => {
            let e = (0, t5.Ay)({ channelId: nd.id, content: t, author: nh });
            return (0, t3.rh)({
                ...e,
                timestamp: nf(n, e.timestamp),
                state: C.cmJ.SENT,
                ...(null != f ? { type: C.lAJ.REPLY, message_reference: f } : {}),
            });
        }, [t, n, f]),
        g = np(p, t);
    return (0, a.jsxs)("div", {
        className: nu.$4,
        "data-replying": null != m ? "true" : void 0,
        children: [
            (0, a.jsx)(t8.A, {
                className: nu.yE,
                author: u,
                childrenRepliedMessage:
                    null == m ? null : (0, a.jsx)(nx, { baseMessage: p, referenced: m, onJumpToReplied: r }),
                childrenHeader: (0, na.A)({ message: p, channel: nd, author: u, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: g,
                childrenAccessories: nm(l, "" !== t),
                disableInteraction: !0,
            }),
            o
                ? (0, a.jsx)("span", {
                      className: nu.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(q.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
function nk(e) {
    let { projectId: t, messages: n, ref: l, onPickIdea: s } = e,
        r = (0, A.bG)([t6.default], () => t6.default.getCurrentUser()),
        o = i.useRef(null),
        c = i.useCallback(
            (e) => {
                (o.current = e), "function" == typeof l ? l(e) : null != l && (l.current = e);
            },
            [l],
        ),
        [u, d] = i.useState(null),
        h = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(h.current), []);
    let m = i.useCallback((e) => {
            let t = o.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                d(e),
                window.clearTimeout(h.current),
                (h.current = window.setTimeout(() => d(null), 1600));
        }, []),
        f = i.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    function n(e, n) {
                        t.push({ row: e, groupable: { key: e.key, ...n } });
                    }
                    for (let t of e) {
                        if ("user" === t.role) {
                            n(
                                { kind: "user", key: t.render_id, message: t, groupStart: !1 },
                                { actor: "user", boundary: void 0 },
                            );
                            continue;
                        }
                        let e = !(0, ep.BL)(t),
                            l = eH({
                                steps: t.steps,
                                content: t.content,
                                hasProposal: null != t.proposal,
                                hasAttachments: (t.attachments?.length ?? 0) > 0,
                            }),
                            a = l.lastStreamedMessage?.key,
                            i = (function (e) {
                                let { turnActive: t = !0 } =
                                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    { items: n } = em(e),
                                    l = eu(e, { turnActive: t }),
                                    a = (function (e) {
                                        let t = new Map();
                                        for (let n of e)
                                            "segment_settled" === n.kind &&
                                                (null == n.task_id || "" === n.task_id) &&
                                                null != n.segment &&
                                                null != n.duration &&
                                                t.set(n.segment, n.duration);
                                        return t;
                                    })(e),
                                    i = new Map();
                                for (let e of n) "message" === e.type && i.set(e.segment, e);
                                let s = new Set();
                                for (let e of l.steps) s.add(e.segment);
                                for (let e of l.tasks) s.add(e.task.segment);
                                let r = n.find((e) => "todos" === e.type)?.segment,
                                    o = Math.max(0, ...i.keys(), ...s, ...(null != r ? [r] : [])),
                                    c = [];
                                for (let e = 0; e <= o; e++) {
                                    let t = i.get(e),
                                        n = s.has(e),
                                        l = r === e;
                                    (null != t || n || l) &&
                                        c.push({
                                            key: t?.key ?? `work-${e}`,
                                            index: e,
                                            ...(null != t ? { prose: t } : {}),
                                            hasWork: n,
                                            hasTodos: l,
                                            ...(a.has(e) ? { durationMs: a.get(e) } : {}),
                                        });
                                }
                                return c;
                            })(t.steps, { turnActive: e }),
                            { lastWork: s, open: r } = (function (e, t) {
                                let { turnActive: n } = t,
                                    l = e.filter((e) => e.hasWork || e.hasTodos).at(-1)?.index,
                                    a = e.at(-1)?.index,
                                    i = n && null != l && l === a ? l : void 0;
                                return { ...(null != l ? { lastWork: l } : {}), ...(null != i ? { open: i } : {}) };
                            })(i, { turnActive: e });
                        for (let e of i) {
                            if (null != e.prose) {
                                let i = `${t.render_id}:${e.key}`;
                                n(
                                    {
                                        kind: "prose",
                                        key: i,
                                        message: t,
                                        groupStart: !1,
                                        content: e.prose.content,
                                        hostsAttachments:
                                            "streamed" === l.attachmentsHost &&
                                            e.prose.key === a &&
                                            null != t.attachments,
                                    },
                                    { actor: "assistant", boundary: i },
                                );
                            }
                            (e.hasWork || e.hasTodos) &&
                                n(
                                    {
                                        kind: "activity",
                                        key: `${t.render_id}:work-${e.index}`,
                                        message: t,
                                        groupStart: !1,
                                        segment: e.index,
                                        active: e.index === r,
                                        closed: e.index !== r,
                                        ...(null != e.durationMs ? { segmentDurationMs: e.durationMs } : {}),
                                        reportsDuration: e.index === s,
                                        hostsChecklist: e.hasTodos,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        if (
                            (!0 === t.interrupted
                                ? n(
                                      {
                                          kind: "interrupted",
                                          key: `${t.render_id}:interrupted`,
                                          message: t,
                                          groupStart: !1,
                                      },
                                      { actor: null, boundary: void 0 },
                                  )
                                : i.every((e) => !e.hasTodos) &&
                                  (t.todos?.length ?? 0) > 0 &&
                                  n(
                                      { kind: "legacyTodos", key: `${t.render_id}:todos`, message: t, groupStart: !1 },
                                      { actor: null, boundary: void 0 },
                                  ),
                            l.showsClosingMessage ||
                                null != t.proposal ||
                                null != t.ideas ||
                                null != t.clarification ||
                                null != t.secretRequest ||
                                null != t.settingsRequest ||
                                "standalone" === l.attachmentsHost)
                        ) {
                            let a = `${t.render_id}:closing`;
                            n(
                                {
                                    kind: "closing",
                                    key: a,
                                    message: t,
                                    groupStart: !1,
                                    active: e,
                                    attachmentsHost: l.attachmentsHost,
                                },
                                {
                                    actor: "assistant",
                                    boundary: a,
                                    separate: null != t.proposal || null != t.clarification || "side_reply" === t.kind,
                                },
                            );
                        }
                    }
                    let l = (function (e) {
                        let t,
                            n = [],
                            l = null,
                            a = !1,
                            i = !1;
                        for (let s of e) {
                            if (null == s.actor) {
                                n.push(!1), (l = null), (a = !1), (i = !1), (t = void 0);
                                continue;
                            }
                            let e = !a || l !== s.actor || s.boundary !== t || !0 === s.separate || i;
                            e && ((l = s.actor), (a = !0), (i = !0 === s.separate), (t = s.boundary)), n.push(e);
                        }
                        return n;
                    })(t.map((e) => e.groupable));
                    return t.map((e, t) => ({ ...e.row, groupStart: l[t] ?? !0 }));
                })(n),
            [n],
        );
    return 0 === n.length
        ? (0, a.jsx)("ol", {
              ref: l,
              className: eJ.x7,
              children: (0, a.jsx)(nw, {
                  role: "assistant",
                  children: (0, a.jsx)(ny, { content: P.intl.string(R.default.khZEUv) }),
              }),
          })
        : (0, a.jsx)("ol", {
              ref: c,
              className: eJ.x7,
              children: f.map((e) => {
                  let l = e.message;
                  switch (e.kind) {
                      case "user": {
                          let n = null != l.attachments && l.attachments.length > 0 ? l.attachments : null;
                          return (0, a.jsx)(
                              nw,
                              {
                                  role: "user",
                                  anchorId: l.id,
                                  highlighted: u === l.id,
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(nb, {
                                      groupStart: e.groupStart,
                                      content: l.content,
                                      createdAt: l.created_at,
                                      userId: l.user_id ?? r?.id,
                                      accessories:
                                          null != n ? (0, a.jsx)(eQ, { projectId: t, attachments: n }) : void 0,
                                  }),
                              },
                              e.key,
                          );
                      }
                      case "prose":
                          return (0, a.jsx)(
                              nw,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(ny, {
                                      groupStart: e.groupStart,
                                      content: e.content,
                                      createdAt: l.created_at,
                                      accessories:
                                          e.hostsAttachments && null != l.attachments
                                              ? (0, a.jsx)(eQ, { projectId: t, attachments: l.attachments })
                                              : void 0,
                                  }),
                              },
                              e.key,
                          );
                      case "activity":
                          return (0, a.jsx)(
                              nw,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tR, {
                                      projectId: t,
                                      steps: l.steps,
                                      segment: e.segment,
                                      active: e.active,
                                      closed: e.closed,
                                      segmentDurationMs: e.segmentDurationMs,
                                      reportsDuration: e.reportsDuration,
                                      hostsChecklist: e.hostsChecklist,
                                      durationMs: null != l.finished_at ? l.finished_at - l.created_at : void 0,
                                      todos: l.todos,
                                      provisionalTodo: l.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "interrupted":
                          return (0, a.jsx)(
                              nw,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tR, { projectId: t, interrupted: !0, steps: l.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, a.jsx)(
                              nw,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tR, {
                                      projectId: t,
                                      steps: [],
                                      active: !1,
                                      todos: l.todos,
                                      provisionalTodo: l.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "closing":
                          return (0, a.jsx)(
                              nw,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(ny, {
                                      groupStart: e.groupStart,
                                      content: l.content,
                                      createdAt: l.created_at,
                                      replyTo: (function (e, t) {
                                          if (null == t) return;
                                          let n = e.find((e) => e.id === t && "user" === e.role);
                                          if (null != n)
                                              return {
                                                  id: n.id,
                                                  content: n.content,
                                                  ...(null != n.user_id ? { userId: n.user_id } : {}),
                                                  createdAt: n.created_at,
                                              };
                                      })(n, l.in_reply_to),
                                      onJumpToReplied: null != l.in_reply_to ? () => m(l.in_reply_to) : void 0,
                                      accessories: (0, a.jsx)(tP, {
                                          projectId: t,
                                          steps: l.steps,
                                          announcement: l.announcement,
                                          content: "",
                                          proposal: l.proposal,
                                          interrupted: !0 === l.interrupted,
                                          hoistedProse: !0,
                                          active: e.active,
                                          ideas: l.ideas,
                                          pickedIdeaIds:
                                              null == l.ideas
                                                  ? void 0
                                                  : (function (e, t, n) {
                                                        let l = new Set();
                                                        for (let a = e.indexOf(t) + 1; a > 0 && a < e.length; a++) {
                                                            let t = e[a];
                                                            if ("user" === t.role)
                                                                for (let e of n)
                                                                    e.implementation_prompt.trim() ===
                                                                        t.content.trim() && l.add(e.id);
                                                        }
                                                        return l;
                                                    })(n, l, l.ideas),
                                          attachments: l.attachments,
                                          secretRequest: l.secretRequest,
                                          settingsRequest: l.settingsRequest,
                                          onPickIdea: s,
                                      }),
                                  }),
                              },
                              e.key,
                          );
                  }
              }),
          });
}
function nw(e) {
    let { role: t, children: n, anchorId: l, highlighted: i = !1, continuation: s = !1 } = e;
    return (0, a.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": l,
        className: r()(eJ.xk, { [eJ.Qo]: i, [eJ.q3]: s }),
        children: n,
    });
}
var nA = n(625903),
    nS = n(964675);
function nN(e) {
    let { projectId: t } = e,
        n = (0, A.bG)([h.Ay], () => null != h.Ay.getSettings(t), [t]),
        l = i.useCallback(() => {
            (0, tn.A)(t);
        }, [t]);
    return n
        ? (0, a.jsx)(ej.D, {
              className: nS.h,
              "aria-label": P.intl.string(R.default.gTMvzD),
              onClick: l,
              children: (0, a.jsx)(nA.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var nE = n(863610),
    nC = n(495557);
function nI(e) {
    let { activity: t, id: n } = e,
        l = t?.text ?? "",
        s = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            s.current?.scrollToBottom();
        }, [l]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: nC.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(er.Ch, {
                ref: s,
                className: nC.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: r()(tT.PT, nC.bb),
                    children: eG.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var nT = n(921461);
function n_(e) {
    let { activity: t, compacting: n = !1, restoring: l = !1, controlling: s = !1 } = e,
        o = i.useRef(null),
        c = i.useId(),
        [u, d] = i.useState(null),
        h = null != t && "end" !== t.phase,
        m = s
            ? R.default.ivvYHP
            : l
              ? R.default.aFffp2
              : n
                ? R.default["0vH/5G"]
                : h
                  ? R.default.Ly7F7x
                  : R.default.QDGuNS,
        f = null != t && "" !== t.text,
        p = t?.session ?? null,
        g = f && null != p && u === p,
        x = i.useCallback(() => {
            f && null != p && d((e) => (e === p ? null : p));
        }, [f, p]),
        v = i.useCallback(() => d(null), []);
    return (0, a.jsx)(tO.Y, {
        targetElementRef: o,
        position: "top",
        align: "left",
        shouldShow: g,
        onRequestClose: v,
        renderPopout: () => (0, a.jsx)(nI, { id: c, activity: t }),
        children: () =>
            (0, a.jsxs)(ej.D, {
                innerRef: o,
                className: r()(nT.hF, f && nT.Xd),
                "aria-label": P.intl.string(l ? R.default.pGFXZ0 : R.default.SzdX35),
                "aria-expanded": g,
                "aria-describedby": g ? c : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: x,
                children: [
                    (0, a.jsx)("span", {
                        className: nT.bl,
                        children: (0, a.jsx)(nE.n, { dotRadius: 3.5, themed: !0 }),
                    }),
                    (0, a.jsx)(b.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        "aria-hidden": !!s || void 0,
                        "data-vibegrations-activity-label": !0,
                        children: P.intl.string(m),
                    }),
                ],
            }),
    });
}
var nR = n(885574),
    nP = n(280894);
function nM(e) {
    return e.toLocaleString();
}
function nO(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: nP.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: nP.mf,
                children: [
                    (0, a.jsx)(b.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [nM((0, eZ.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(b.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    nM(n.input_tokens),
                    " in \xb7 ",
                    nM(n.output_tokens),
                    " out \xb7 ",
                    nM(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    nM(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function nL(e) {
    let { project: t } = e,
        n = (0, eZ.wV)(t.orchestrator, t.codegen);
    return (0, a.jsxs)("div", {
        className: nP.si,
        role: "dialog",
        "aria-label": P.intl.string(R.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: nP.Q$,
                children: (0, a.jsxs)("div", {
                    className: nP.mf,
                    children: [
                        (0, a.jsxs)(b.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [nM((0, eZ.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(b.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(nO, { label: P.intl.string(R.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(nO, { label: P.intl.string(R.default.R9aduM), usage: t.codegen }),
            (0, a.jsxs)("div", {
                className: nP.mf,
                children: [
                    (0, a.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(R.default["kILb+R"]),
                    }),
                    (0, a.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, eZ.sj)(n) ? "\u2014" : `${Math.round(100 * (0, eZ.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function nD(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(tO.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(nL, { project: t }),
        children: (e) =>
            (0, a.jsx)(ej.D, {
                innerRef: n,
                className: nP.Y$,
                "aria-label": P.intl.string(R.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(nR.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var nF = n(985451),
    n$ = n(258216);
function nq(e) {
    switch (e) {
        case "connecting":
            return P.intl.string(R.default.W7oyuf);
        case "failed":
            return P.intl.string(R.default.eE60xI);
        case "closed":
            return P.intl.string(R.default["yBmS+I"]);
    }
}
function nU(e) {
    let {
            projectId: t,
            thinking: n,
            restoring: l = !1,
            thinkingActivity: i,
            compacting: s,
            projectUsage: r,
            connState: o,
        } = e,
        c = (0, nF.o4)(t);
    return (0, a.jsxs)("div", {
        className: n$.jf,
        children: [
            (0, a.jsx)("div", {
                className: n$.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children:
                    n || l || c ? (0, a.jsx)(n_, { activity: i, compacting: s, restoring: l, controlling: c }) : null,
            }),
            (0, a.jsx)(nN, { projectId: t }),
            null == r
                ? null
                : (0, a.jsxs)("span", {
                      className: n$.BP,
                      children: [
                          (0, a.jsx)(b.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": P.intl.formatToPlainString(R.default["7SZZvj"], {
                                  runes: (0, eZ.a7)(r.cost_usd),
                                  turns: r.turns,
                              }),
                              children: P.intl.formatToPlainString(R.default["4PFO2p"], {
                                  runes: (0, eZ.a7)(r.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(nD, { project: r }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, a.jsx)(b.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": P.intl.formatToPlainString(R.default.eDDdhB, { status: nq(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: n$.XF,
                      children: nq(o),
                  }),
        ],
    });
}
var nG = n(22231),
    nH = n(477155),
    nB = n(935286),
    nV = n(424110);
function nz(e) {
    let { option: t, position: n, disabled: l, onPick: s } = e,
        o = i.useId(),
        c = !0 === t.recommended,
        u = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(ej.D, {
        className: r()(nV.uK, { [nV.ue]: l }),
        onClick: l ? void 0 : () => s(t),
        "aria-label": P.intl.formatToPlainString(c ? R.default.aL1BKQ : R.default.k7lEgj, { answer: t.label }),
        "aria-describedby": u ? o : void 0,
        "aria-disabled": l,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            (0, a.jsx)("span", { className: nV.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: nV.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: nV.l8,
                        children: (0, a.jsx)(b.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: nV.ed,
                            children: t.label,
                        }),
                    }),
                    u
                        ? (0, a.jsx)(b.E, {
                              tag: "span",
                              id: o,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            c
                ? (0, a.jsx)(b.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: nV.rM,
                      children: P.intl.string(R.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function nW(e) {
    let { clarification: t, onSubmit: n, onDismiss: l } = e,
        [s, c] = i.useState({}),
        [u, d] = i.useState({}),
        [h, m] = i.useState(0),
        f = null == n,
        p = t.questions.length,
        g = Math.min(h, p - 1),
        x = t.questions[g],
        v = i.useCallback(
            (e) => {
                if (null == n) return;
                let l = t.questions
                    .map((t, n) => ({ question: t, index: n, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: n, answer: l } = e;
                        return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
                    })
                    .join("\n");
                "" !== l && n(l);
            },
            [t, n],
        ),
        j = i.useCallback(
            (e) => {
                if (f) return;
                let n = { ...s, [x.id]: e };
                c(n);
                let l = (function (e, t, n) {
                    let { questions: l } = e;
                    for (let e = 1; e <= l.length; e++) {
                        let a = (n + e) % l.length,
                            i = t[l[a].id];
                        if (null == i || "" === i.text.trim()) return a;
                    }
                    return null;
                })(t, n, g);
                null == l ? v(n) : m(l);
            },
            [s, t, f, g, x.id, v],
        ),
        y = i.useCallback(() => {
            if (f || 0 === g) return;
            let e = t.questions[g - 1];
            c((t) => {
                let n = { ...t };
                return delete n[e.id], n;
            }),
                d((t) => {
                    let n = { ...t };
                    return delete n[e.id], n;
                }),
                m(g - 1);
        }, [t, f, g]),
        k = g > 0 && !f,
        w = u[x.id] ?? "",
        A = i.useCallback(() => {
            let e = w.trim();
            "" !== e && j({ kind: "custom", text: e });
        }, [w, j]),
        [S, N] = i.useState(!1),
        [E, C] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => N(!0));
            });
        return () => {
            cancelAnimationFrame(t), cancelAnimationFrame(e);
        };
    }, []);
    let I = i.useCallback(() => {
            null != l && (C(!0), setTimeout(l, 150));
        }, [l]),
        T = i.useCallback(() => {
            f || g >= p - 1 || m(g + 1);
        }, [f, g, p]),
        _ = g < p - 1 && !f;
    return (0, a.jsxs)("section", {
        className: r()(nV.$O, { [nV.fI]: S && !E, [nV.Oh]: E }),
        role: "dialog",
        "aria-label": x.question,
        "data-vibegrations-clarification": t.id,
        "data-state": f ? "inert" : "open",
        "data-step": g,
        children: [
            (0, a.jsxs)("div", {
                className: nV.wx,
                children: [
                    (0, a.jsx)(b.E, {
                        tag: "span",
                        id: `${x.id}-label`,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        selectable: !0,
                        className: nV.TK,
                        children: x.question,
                    }),
                    null == l
                        ? null
                        : (0, a.jsx)(ej.D, {
                              className: r()(nV.gb, nV.Q7),
                              onClick: I,
                              "aria-label": P.intl.string(R.default.fMdUNR),
                              "data-vibegrations-clarification-close": !0,
                              children: (0, a.jsx)(o.P, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: nV.Ge,
                role: "group",
                "aria-labelledby": `${x.id}-label`,
                children: [
                    x.options.map((e, t) =>
                        (0, a.jsx)(
                            nz,
                            {
                                option: e,
                                position: t + 1,
                                disabled: f,
                                onPick: (e) => j({ kind: "option", optionId: e.id, text: e.label }),
                            },
                            e.id,
                        ),
                    ),
                    (0, a.jsxs)("div", {
                        className: nV.Xy,
                        children: [
                            (0, a.jsx)("span", {
                                className: nV.Gy,
                                "aria-hidden": !0,
                                children: (0, a.jsx)(nG.PencilIcon, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: "currentColor",
                                }),
                            }),
                            (0, a.jsx)(tU.y, {
                                value: w,
                                onChange: (e) => {
                                    let { value: t } = e.currentTarget;
                                    d((e) => ({ ...e, [x.id]: t }));
                                },
                                onKeyDown: (e) => {
                                    "Enter" !== e.key ||
                                        e.shiftKey ||
                                        e.nativeEvent.isComposing ||
                                        (e.preventDefault(), A());
                                },
                                placeholder: P.intl.string(R.default.qifsdL),
                                "aria-label": P.intl.formatToPlainString(R.default.XHESTL, { question: x.question }),
                                disabled: f,
                                rows: 1,
                                className: nV.Pu,
                                "data-vibegrations-clarification-other": x.id,
                            }),
                        ],
                    }),
                ],
            }),
            p > 1
                ? (0, a.jsxs)("div", {
                      className: nV.qr,
                      children: [
                          (0, a.jsx)(b.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: P.intl.formatToPlainString(R.default["7bypa+"], { index: g + 1, total: p }),
                          }),
                          (0, a.jsxs)("div", {
                              className: nV.Np,
                              children: [
                                  (0, a.jsx)(ej.D, {
                                      className: r()(nV.gb, { [nV.yI]: !k }),
                                      onClick: k ? y : void 0,
                                      tabIndex: k ? 0 : -1,
                                      "aria-hidden": !k,
                                      "aria-disabled": f,
                                      "aria-label": P.intl.string(R.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": k ? void 0 : "true",
                                      children: (0, a.jsx)(nH.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, a.jsx)(ej.D, {
                                      className: r()(nV.gb, { [nV.yI]: !_ }),
                                      onClick: _ ? T : void 0,
                                      tabIndex: _ ? 0 : -1,
                                      "aria-hidden": !_,
                                      "aria-disabled": f,
                                      "aria-label": P.intl.string(R.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": _ ? void 0 : "true",
                                      children: (0, a.jsx)(nB.E, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var nY = n(643278),
    nK = n(405189);
function nZ(e) {
    let { line: t, placement: n, todos: l, provisionalTodo: s, agents: o } = e,
        c = null != n,
        [u, d] = i.useState(n ?? "top"),
        [h, m] = i.useState(c),
        [f, p] = i.useState(!1),
        [g, x] = i.useState(!1),
        [v, b] = i.useState(c);
    v !== c && (b(c), null != n ? (d(n), m(!0)) : (p(!1), x(!1))),
        i.useEffect(() => {
            if (c || !h) return;
            let e = setTimeout(() => m(!1), 150);
            return () => clearTimeout(e);
        }, [c, h]),
        i.useEffect(() => {
            if (!h || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => p(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [h, c]);
    let [j, y] = i.useState(!1),
        [k, w] = i.useState(!1),
        [A, S] = i.useState(g);
    A !== g && (S(g), g ? y(!0) : w(!1)),
        i.useEffect(() => {
            if (g || !j) return;
            let e = setTimeout(() => y(!1), 150);
            return () => clearTimeout(e);
        }, [g, j]),
        i.useEffect(() => {
            if (!j || !g) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => w(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [j, g]);
    let N = null != l && l.length > 0,
        E = i.useCallback(() => x((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: nK.qd,
              "data-placement": u,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: r()(nK.vK, { [nK.ho]: f && c, [nK.ET]: !c }),
                      children: [
                          (0, a.jsx)("ol", {
                              className: r()(nK.Rk, eg.pj),
                              "data-live": "true",
                              children: (0, a.jsx)(ek, { glyph: (0, a.jsx)(ex, {}), line: t, live: !0, settled: !1 }),
                          }),
                          N
                              ? (0, a.jsx)(tG.m, {
                                    text: P.intl.string(R.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(ej.D, {
                                        className: nK.BO,
                                        onClick: E,
                                        "aria-expanded": g,
                                        "aria-label": P.intl.string(R.default.qCRC6c),
                                        children: (0, a.jsx)(nY.ClipboardListIcon, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  j && N
                      ? (0, a.jsx)("div", {
                            className: r()(nK.vB, { [nK.pg]: g && k, [nK.ui]: !g }),
                            children: (0, a.jsx)(tI, { todos: l, provisional: s, agents: o, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var nJ = n(366010),
    nQ = n(825484),
    nX = n(859703),
    n0 = n(24001),
    n1 = n(291749),
    n2 = n(971276),
    n6 = n(590202),
    n3 = n(710969),
    n5 = n(792620),
    n7 = n(201805),
    n4 = n(617986),
    n8 = n(363195),
    n9 = n(749414);
let le = !1;
function lt(e) {
    let t,
        n,
        l,
        { open: s } = e,
        r =
            ((t = (0, n7.dN)()),
            (n = (0, A.bG)([nX.A], () => nX.A.isQuestAccessSuspended || null != nX.A.questEnrollmentBlockedUntil, [])),
            (l = (0, A.bG)([nX.A], () => null != nX.A.getQuestPreviewOverride(n0.uF.QUEST_BAR_V2), [])),
            null != t && (0, n5.vv)(t)
                ? l
                    ? t.userStatus?.claimedAt != null
                        ? null
                        : t
                    : !(0, n2.s)() || n || (0, n3.Ic)(t) || t.userStatus?.completedAt != null
                      ? null
                      : t
                : null),
        [o, c] = i.useState(() => le),
        { mounted: u, closing: d } = (function (e) {
            let [t, n] = i.useState(e),
                [l, a] = i.useState(!1),
                s = i.useRef(null);
            return (
                e && (!t || l) ? (n(!0), a(!1)) : e || !t || l || a(!0),
                i.useEffect(() => {
                    if (!e && t)
                        return (
                            (s.current = setTimeout(() => {
                                (s.current = null), a(!1), n(!1);
                            }, 150)),
                            () => {
                                null != s.current && (clearTimeout(s.current), (s.current = null));
                            }
                        );
                }, [e, t, 150]),
                { mounted: t, closing: l }
            );
        })(s && !o && null != r),
        [h, m] = i.useState(r);
    null != r && r !== h && m(r);
    let p = r ?? h,
        g = (0, A.bG)([n8.A], () => n8.A.getState().theme),
        x = (0, nJ.M)(g) ? C.NJ8.DARK : C.NJ8.LIGHT,
        v = null != p ? (0, n1.tW)(p, n1.fY.GAME_TILE, x).url : null,
        j = null != v && "" !== v ? v : null,
        y = i.useCallback(async () => {
            if (null == r) return;
            let e = {
                questContent: n0.uF.QUEST_BAR_V2,
                sourceQuestContent: n0.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: n6.Cy.WATCH_VIDEO,
            };
            r.userStatus?.enrolledAt != null
                ? (0, n4.d5)({ quest: r, ...e })
                : await (0, n4.e0)(r, { ...e, questContentCTA: n6.Cy.ACCEPT_QUEST });
        }, [r]),
        k = i.useCallback(() => {
            (le = !0), c(!0);
        }, []);
    return u && null != p
        ? (0, a.jsxs)("aside", {
              className: n9.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": d ? "closing" : "open",
              "aria-hidden": d,
              children: [
                  null != j
                      ? (0, a.jsxs)("div", {
                            className: n9.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, a.jsx)("img", { className: n9.Rx, src: j, alt: "" }),
                                (0, a.jsx)("div", { className: n9._e }),
                            ],
                        })
                      : null,
                  (0, a.jsxs)("div", {
                      className: n9.iB,
                      children: [
                          null != j ? (0, a.jsx)("img", { className: n9.w1, src: j, alt: "" }) : null,
                          (0, a.jsxs)("div", {
                              className: n9.Ug,
                              children: [
                                  (0, a.jsx)(b.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: P.intl.string(R.default["09LJ+I"]),
                                  }),
                                  (0, a.jsx)(b.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: P.intl.format(P.t.EQa7os, { questName: p.config.messages.questName }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, a.jsxs)(nQ.e, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, a.jsx)(f.$, {
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: k,
                              text: P.intl.string(R.default.egO5fO),
                          }),
                          (0, a.jsx)(f.$, {
                              variant: "primary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: y,
                              text: P.intl.string(P.t.kUQLMJ),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var ln = n(506774),
    ll = n(651649),
    la = n(670455);
let li = "shownVibegrationsFeedbackProjectIds";
var ls = n(348800);
let lr = [P.intl.string(R.default["E+Q26x"]), P.intl.string(R.default["06/jqP"]), P.intl.string(R.default["3gSfUa"])];
function lo(e) {
    let { projectId: t, restoreState: l } = e,
        s = (0, A.bG)([ep.Ay], () => ep.Ay.getMessages(t), [t]),
        r = (0, A.bG)([h.Ay], () => h.Ay.getConnState(t), [t]),
        o = (0, A.bG)([h.Ay], () => h.Ay.isChatStopped(t), [t]),
        c = (0, A.bG)([ep.Ay], () => ep.Ay.getProjectUsage(t), [t]),
        u = (0, A.bG)([ep.Ay], () => ep.Ay.getThinkingActivity(t), [t]),
        d = (0, A.bG)([ep.Ay], () => ep.Ay.isCompacting(t), [t]),
        m = (0, A.bG)([h.Ay], () => h.Ay.getModelSettings(t), [t]),
        f = i.useRef(null),
        p = i.useRef(null),
        g = i.useRef(null),
        x = i.useRef(!0),
        [v, b] = i.useState(!0);
    i.useEffect(() => {
        x.current && p.current?.scrollToBottom();
    }, [s]);
    let j = i.useCallback(() => {
        let e = p.current;
        if (null == e) return;
        let t = e.getDistanceFromBottom();
        x.current = t < 32;
        let n = t > 1;
        b((e) => (!n === e ? e : !n));
    }, []);
    i.useLayoutEffect(() => {
        let e = f.current,
            t = g.current;
        if (null == e) return;
        let n = e.getBoundingClientRect().width,
            l = t?.getBoundingClientRect().height,
            a = null;
        function i() {
            x.current &&
                (null != a && cancelAnimationFrame(a), (a = requestAnimationFrame(() => p.current?.scrollToBottom())));
        }
        let s = new ResizeObserver((t) => {
            for (let a of t)
                if (a.target === e) {
                    let e = a.contentRect.width;
                    if (e === n) continue;
                    (n = e), i();
                } else {
                    let e = a.contentRect.height;
                    if (e === l) continue;
                    (l = e), i();
                }
        });
        return (
            s.observe(e),
            null != t && s.observe(t),
            () => {
                s.disconnect(), null != a && cancelAnimationFrame(a);
            }
        );
    }, []),
        i.useEffect(() => {
            (0, h.Hc)(t);
        }, [t]),
        i.useEffect(
            () => () =>
                (function (e) {
                    let t = ep.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, ep.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((ln.w.get(li) ?? []).includes(e) ||
                            ll.A.possiblyShowFeedbackModal(la.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = ln.w.get(li) ?? []).includes(e) || ln.w.set(li, [...l, e]),
                                    (0, e9.openModalLazy)(async () => {
                                        let { default: l } = await Promise.all([
                                            n.e("312513"),
                                            n.e("104143"),
                                            n.e("155925"),
                                            n.e("218413"),
                                            n.e("137381"),
                                            n.e("847004"),
                                            n.e("341676"),
                                        ]).then(n.bind(n, 580711));
                                        return (n) => (0, a.jsx)(l, { ...n, projectId: e, promptCount: t });
                                    });
                            }));
                })(t),
            [t],
        );
    let y = i.useCallback(
            (e, n) => {
                (0, h.dv)(t, e, n);
            },
            [t],
        ),
        k = i.useCallback(() => (0, h.fu)(t), [t]),
        w = i.useCallback((e) => y(e.implementation_prompt), [y]),
        S = i.useCallback((e) => y(e), [y]),
        N = i.useCallback((e) => (0, h.XZ)(t, e), [t]),
        E = i.useCallback((e) => (0, h.vX)(t, e), [t]),
        C = i.useCallback((e) => (0, h.Vm)(t, e), [t]),
        I = i.useCallback(() => y(P.intl.string(R.default.Jj8Ftb)), [y]),
        T = l?.status === "restoring",
        _ = "open" === r && !o && !T,
        M = s[s.length - 1],
        O = null != M && "assistant" === M.role && null != M.proposal,
        [L, D] = i.useState(null),
        F = M?.clarification != null && M.clarification.id !== L ? M.clarification : null,
        $ = i.useCallback(() => {
            null != F && D(F.id);
        }, [F]),
        q = (0, A.bG)([ep.Ay], () => ep.Ay.hasLoadedHistory(t), [t]),
        U = i.useMemo(() => {
            let e = 0;
            for (let n = 0; n < t.length; n++) e = (31 * e + t.charCodeAt(n)) % 0x7fffffff;
            return lr[e % lr.length];
        }, [t]),
        G = O
            ? P.intl.string(R.default.Jj8Ftb)
            : M?.kind === "plan_implemented"
              ? P.intl.string(R.default["3sTTBu"])
              : q && 0 === s.length
                ? U
                : null,
        H = i.useMemo(() => {
            for (let e = s.length - 1; e >= 0; e--) {
                let t = s[e];
                if ("assistant" === t.role && !(0, ep.BL)(t)) return t;
            }
        }, [s]),
        B = null != H,
        V = O && _ ? I : void 0,
        [z, W] = i.useState(null),
        [Y, K] = i.useState(B);
    Y !== B && (K(B), B || W(null)),
        i.useEffect(() => {
            if (!B) return;
            let e = f.current?.querySelector("[data-vibegrations-chat-log]"),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? W(null)
                        : W(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return n.observe(t), () => n.disconnect();
        }, [B, H?.steps]);
    let Z = i.useMemo(() => {
            let e, t;
            return null != H
                ? null != (t = ed((e = eu(H.steps, { turnActive: !0 })).steps))
                    ? ec(t)
                    : (e.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ??
                      P.intl.string(R.default.nv6pUM))
                : "";
        }, [H]),
        J = i.useMemo(() => (null != H ? (ef(H.steps) ?? H.todos) : void 0), [H]),
        Q = H?.provisionalTodo,
        X = i.useMemo(() => (null != H ? t_(eu(H.steps, { turnActive: !0 }).tasks) : void 0), [H]);
    return (0, a.jsxs)("section", {
        ref: f,
        "data-vibegrations-chat": !0,
        className: ls.TE,
        children: [
            (0, a.jsx)(lt, { open: null != H }),
            (0, a.jsx)(nZ, {
                line: Z,
                placement: B && "top" === z ? "top" : null,
                todos: J,
                provisionalTodo: Q,
                agents: X,
            }),
            (0, a.jsx)(er.Ch, {
                ref: p,
                onScroll: j,
                "data-vibegrations-chat-log": !0,
                className: v ? ls.N$ : `${ls.N$} ${ls.hB}`,
                children: (0, a.jsx)(nk, { ref: g, projectId: t, messages: s, onPickIdea: _ ? w : void 0 }),
            }),
            (0, a.jsxs)("div", {
                className: ls.im,
                children: [
                    (0, a.jsx)(nU, {
                        projectId: t,
                        thinking: B,
                        restoring: T,
                        thinkingActivity: u,
                        compacting: d,
                        projectUsage: c,
                        connState: r,
                    }),
                    (0, a.jsxs)("div", {
                        className: ls.Jx,
                        children: [
                            (0, a.jsx)(nZ, {
                                line: Z,
                                placement: B && "bottom" === z ? "bottom" : null,
                                todos: J,
                                provisionalTodo: Q,
                                agents: X,
                            }),
                            null == F
                                ? null
                                : (0, a.jsx)("div", {
                                      className: ls.B5,
                                      children: (0, a.jsx)(
                                          nW,
                                          { clarification: F, onSubmit: _ ? S : void 0, onDismiss: $ },
                                          F.id,
                                      ),
                                  }),
                            (0, a.jsx)(tQ, {
                                canSend: _,
                                stopped: o,
                                running: B,
                                restoring: T,
                                onSend: y,
                                onInterrupt: _ ? k : void 0,
                                onUploadFile: E,
                                onDeleteFile: C,
                                onApprove: V,
                                suggestion: G,
                                questionOpen: null != F,
                                modelSettings: m,
                                onModelSettingsChange: N,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lc = n(435558),
    lu = n(661531),
    ld = n(602853),
    lh = n(517461),
    lm = n(761929),
    lf = n(927506);
function lp(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: s } = e,
        r = (0, ld.r)(lu.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [c, u] = (0, lh.V)("VibegrationsChatSidebarWidth", 460),
        [d, h] = i.useState(c ?? 460),
        m = (0, lc.clamp)(d, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + r : 0);
    }, [m, t, r, l]);
    let f = (0, lm.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: u,
            orientation: lm.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        p = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), f(e));
            },
            [f],
        );
    return (0, a.jsxs)("div", {
        className: lf.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: lf.Di, onPointerDown: p }),
            (0, a.jsx)("div", { ref: o, className: lf.kL, style: { width: m }, children: s }),
        ],
    });
}
var lg = n(145615);
let lx = [6, 8, 10, 12],
    lv = {
        home: { blob: 1, twink: 1, alpha: 0.7 },
        conversation: { blob: 1, twink: 1, alpha: 0.7 },
        thinking: { blob: 3, twink: 2.4, alpha: 0.7 },
    };
function lb(e, t, n) {
    let l = (0x165667b1 * e) ^ (0x27d4eb2f * t) ^ (0x7fffffff * n);
    return (l = Math.imul(l ^ (l >>> 13), 0x4bf19f61)), (((l ^= l >>> 16) >>> 0) % 1e6) / 1e6;
}
let lj = i.memo(function (e) {
    let { state: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        s = i.useRef(t);
    i.useEffect(() => {
        s.current = t;
    }, [t]),
        i.useEffect(() => {
            let e = l.current,
                t = n.current;
            if (null == e || null == t || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            let a = e.getContext("2d", { alpha: !0 });
            if (null == a) return;
            let i =
                    Number.isFinite(window.devicePixelRatio) && window.devicePixelRatio > 0
                        ? window.devicePixelRatio
                        : 1,
                r = 0,
                o = 0,
                c = [],
                u = 0,
                d = (function () {
                    let e = [];
                    for (let t = 0; t < 3; t++)
                        e.push({
                            x: Math.random(),
                            y: 0.4 + 0.6 * Math.random(),
                            vx: (Math.random() - 0.5) * 2e-4,
                            vy: (Math.random() - 0.5) * 15e-5,
                            radius: 0.16 + 0.18 * Math.random(),
                            strength: 0.7 + 0.5 * Math.random(),
                        });
                    return e;
                })(),
                h = lv.home.blob,
                m = lv.home.twink,
                f = lv.home.alpha,
                p = 0,
                g = lx[0],
                x = [],
                v = 0,
                b = 0,
                j = Array(8).fill("");
            function y() {
                let {
                        r: e,
                        g: n,
                        b: l,
                    } = (function () {
                        let e = getComputedStyle(t).getPropertyValue("--custom-vibegrations-dither-fill").trim();
                        if ("" === e) return { r: 225, g: 240, b: 255 };
                        let n = e.split(",").map((e) => parseInt(e.trim(), 10));
                        return 3 !== n.length || n.some((e) => !Number.isFinite(e))
                            ? { r: 225, g: 240, b: 255 }
                            : { r: n[0], g: n[1], b: n[2] };
                    })(),
                    a = (function () {
                        let e = getComputedStyle(t).getPropertyValue("--custom-vibegrations-dither-opacity").trim();
                        if ("" === e) return 0.1;
                        let n = parseFloat(e);
                        return Number.isFinite(n) ? n : 0.1;
                    })();
                for (let t = 0; t < 8; t++) {
                    let i = ((t + 0.5) / 8) * a;
                    j[t] = `rgba(${e}, ${n}, ${l}, ${i})`;
                }
            }
            y();
            let k = [];
            for (let e = 0; e < 8; e++) k.push([]);
            let w = new MutationObserver(y);
            w.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] });
            let A = -1;
            function S() {
                let e = Math.max(r, u);
                (e === u && A === g && c.length > 0) ||
                    ((u = e),
                    (A = g),
                    (c = (function (e, t) {
                        let n = [],
                            l = Math.ceil(e / t) + 1,
                            a = Math.ceil(600 / t) + 1;
                        for (let e = 0; e < a; e++)
                            for (let t = 0; t < l; t++)
                                n.push({
                                    i: t,
                                    j: e,
                                    threshold: 0.05 + 0.95 * lb(t, e, 1),
                                    phase: lb(t, e, 2) * Math.PI * 2,
                                    freq: 0.25 + 1.5 * lb(t, e, 3),
                                });
                        return n;
                    })(e, g)));
            }
            function N() {
                let t = e.getBoundingClientRect(),
                    n = t.width,
                    l = t.height;
                (0.5 > Math.abs(n - r) && 0.5 > Math.abs(l - o)) ||
                    ((r = n),
                    (o = l),
                    (e.width = Math.max(1, Math.floor(r * i))),
                    (e.height = Math.max(1, Math.floor(o * i))),
                    null != a && (a.setTransform(i, 0, 0, i, 0, 0), (a.imageSmoothingEnabled = !1)),
                    S(),
                    T(0.001 * performance.now()));
            }
            N();
            let E = new ResizeObserver(N);
            E.observe(t), window.addEventListener("resize", N);
            let C = performance.now(),
                I = 0;
            function T(e) {
                a.clearRect(0, 0, r, o), (a.globalAlpha = f);
                let t = g,
                    n = r <= 1e3 ? 1.2 : (1e3 / r) * 1.2;
                for (let e = 0; e < 8; e++) k[e].length = 0;
                for (let l = 0; l < c.length; l++) {
                    let a,
                        i = c[l],
                        s = (i.i * t) / r,
                        u = (i.j * t) / o,
                        h =
                            0.55 *
                            (function (e, t, n) {
                                let l = (e - 0.5) * n,
                                    a = 1 - t,
                                    i = 1 - Math.sqrt(l * l + a * a * 1.8);
                                return i < 0 ? 0 : i * i;
                            })(s, u, n);
                    for (let e = 0; e < d.length; e++) {
                        let t = d[e],
                            n = s - t.x,
                            l = u - t.y,
                            a = (n * n + l * l) / (t.radius * t.radius);
                        h += t.strength * Math.exp(-a) * 0.7;
                    }
                    let f = 0.1 * Math.sin(e * i.freq * 1.85 * m + i.phase),
                        p = h - (i.threshold + f);
                    1;
                    if (!(p <= -0.1)) {
                        if (p >= 0.1) a = 7;
                        else {
                            let e = (p + 0.1) / 0.2;
                            a = Math.min(7, Math.floor(e * e * (3 - 2 * e) * 8));
                        }
                        k[a].push(i);
                    }
                }
                for (let e = 0; e < 8; e++) {
                    let n = k[e];
                    if (0 !== n.length) {
                        (a.fillStyle = j[e]), a.beginPath();
                        for (let e = 0; e < n.length; e++) {
                            var l, i;
                            let s = n[e];
                            (l = s.i * t),
                                (i = s.j * t),
                                "function" == typeof a.roundRect
                                    ? a.roundRect(l, i, 4, 4, 1)
                                    : (a.moveTo(l + 1, i),
                                      a.arcTo(l + 4, i, l + 4, i + 4, 1),
                                      a.arcTo(l + 4, i + 4, l, i + 4, 1),
                                      a.arcTo(l, i + 4, l, i, 1),
                                      a.arcTo(l, i, l + 4, i, 1));
                        }
                        a.fill();
                    }
                }
            }
            return (
                (I = requestAnimationFrame(function e(t) {
                    let n = t - C,
                        l = Math.min(64, n);
                    (C = t),
                        !(function (e) {
                            if (
                                (v++,
                                b++,
                                v < 30 ||
                                    e > 100 ||
                                    (x.push(e),
                                    x.length > 60 && x.shift(),
                                    x.length < 60 || b < 180 || p >= lx.length - 1))
                            )
                                return;
                            let t = 0;
                            for (let e = 0; e < x.length; e++) t += x[e];
                            let n = t / x.length;
                            n <= 22 ||
                                ((g = lx[++p]),
                                (b = 0),
                                (A = -1),
                                S(),
                                console.log(
                                    "[Vibegrations/glow-dither] perf degrade \u2192 spacing",
                                    g,
                                    "avg",
                                    n.toFixed(2),
                                    "ms",
                                ));
                        })(n);
                    let a = lv[s.current] ?? lv.home,
                        i = 1 - Math.exp(-l / 80);
                    (h += (a.blob - h) * i), (m += (a.twink - m) * i), (f += (a.alpha - f) * i);
                    let r = 1.5 * h;
                    for (let e = 0; e < d.length; e++) {
                        let t = d[e];
                        (t.x += t.vx * l * r),
                            (t.y += t.vy * l * r),
                            (t.x < -0.1 || t.x > 1.1) && (t.vx *= -1),
                            (t.y < 0.1 || t.y > 1.1) && (t.vy *= -1),
                            (t.vx += (Math.random() - 0.5) * 2e-7 * l),
                            (t.vy += (Math.random() - 0.5) * 2e-7 * l);
                    }
                    T(0.001 * t), (I = requestAnimationFrame(e));
                })),
                () => {
                    cancelAnimationFrame(I), E.disconnect(), w.disconnect(), window.removeEventListener("resize", N);
                }
            );
        }, []);
    let r = lg.P5;
    return (
        (r = "conversation" === t ? `${r} ${lg.wY}` : "home" === t ? `${r} ${lg.Qy}` : `${r} ${lg.fR}`),
        (0, a.jsx)("div", {
            ref: n,
            className: r,
            "aria-hidden": "true",
            children: (0, a.jsx)("canvas", { ref: l, className: lg.DX }),
        })
    );
});
var ly = n(408694);
function lk(e) {
    let { projectId: t } = e,
        n = (0, A.bG)([ep.Ay], () => (ep.Ay.isThinking(t) ? "thinking" : "conversation"), [t]);
    return (0, a.jsxs)("div", {
        className: ly.D1,
        "aria-hidden": !0,
        children: [
            (0, a.jsxs)("div", {
                className: ly.ys,
                "data-state": n,
                children: [(0, a.jsx)("div", { className: ly.Fc }), (0, a.jsx)("div", { className: ly.dW })],
            }),
            (0, a.jsx)(lj, { state: n }),
        ],
    });
}
var lw = n(333007),
    lA = n(342667);
function lS(e) {
    let { projectId: t, resolveIframe: n } = e,
        l = (0, nF.o4)(t),
        [s, r] = i.useState(null);
    i.useEffect(() => {
        if (!l) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(n());
            r((t) =>
                (
                    null == t || null == e
                        ? t === e
                        : t.left === e.left && t.top === e.top && t.width === e.width && t.height === e.height
                )
                    ? t
                    : e,
            );
        }
        e();
        let t = window.setInterval(e, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                window.clearInterval(t), window.removeEventListener("resize", e);
            }
        );
    }, [l, n]);
    let o = l && null != s;
    return (0, lw.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", {
                    className: lA.y,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: l ? P.intl.string(R.default.dIE9zO) : "",
                }),
                o
                    ? (0, a.jsx)("div", {
                          className: lA.o,
                          style: { left: s.left, top: s.top, width: s.width, height: s.height },
                          "data-testid": "vibegrations-control-block",
                          "aria-hidden": !0,
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
var lN = n(314116),
    lE = n(364522),
    lC = n(406810),
    lI = n(381849),
    lT = n(977628);
function l_(e) {
    let t,
        { projectId: n, onClose: l, onRestore: s } = e,
        [r, c] = i.useState({ status: "loading" });
    return (
        i.useEffect(() => {
            let e = !1;
            return (
                (0, h.ST)(n)
                    .then((t) => {
                        e || c({ status: "loaded", entries: t });
                    })
                    .catch(() => {
                        e || c({ status: "failed" });
                    }),
                () => {
                    e = !0;
                }
            );
        }, [n]),
        (t =
            "loading" === r.status
                ? (0, a.jsx)("div", { className: lT.E8, children: (0, a.jsx)(m.y, {}) })
                : "failed" === r.status
                  ? (0, a.jsx)("div", {
                        className: lT.E8,
                        role: "alert",
                        children: (0, a.jsx)(b.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: P.intl.string(R.default["mSJn+K"]),
                        }),
                    })
                  : 0 === r.entries.length
                    ? (0, a.jsx)("div", {
                          className: lT.E8,
                          children: (0, a.jsx)(b.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: P.intl.string(R.default.TOmYPT),
                          }),
                      })
                    : (0, a.jsx)(lE.Ip, {
                          className: lT.p_,
                          children: (0, a.jsx)("div", {
                              className: lT.jO,
                              children: r.entries.map((e) => {
                                  let t,
                                      n = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, lI.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: lI._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, a.jsxs)(
                                      "button",
                                      {
                                          className: lT.f_,
                                          type: "button",
                                          onClick: () =>
                                              (0, lN.A)({
                                                  title: P.intl.string(R.default.qOUOPE),
                                                  subtitle: P.intl.string(R.default.k2JBj5),
                                                  confirmText: P.intl.string(R.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      l(), s(e);
                                                  },
                                              }),
                                          children: [
                                              (0, a.jsx)(b.E, {
                                                  variant: "text-md/medium",
                                                  className: lT.bc,
                                                  children: e.subject.replace(/^Build: /, ""),
                                              }),
                                              null != n.relative &&
                                                  (0, a.jsx)(b.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      title: n.absolute ?? void 0,
                                                      children: n.relative,
                                                  }),
                                          ],
                                      },
                                      e.sha,
                                  );
                              }),
                          }),
                      })),
        (0, a.jsxs)("section", {
            className: lT.nd,
            "aria-label": P.intl.string(R.default.jAWwzi),
            children: [
                (0, a.jsxs)(u.Ay, {
                    "aria-label": P.intl.string(R.default.jAWwzi),
                    toolbar: (0, a.jsx)(u.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l }),
                    children: [
                        (0, a.jsx)(u.Ay.ChannelIcon, { icon: lC.ClockIcon, "aria-hidden": !0 }),
                        (0, a.jsx)(u.Ay.Title, { children: P.intl.string(R.default.jAWwzi) }),
                    ],
                }),
                (0, a.jsx)("div", { className: lT.rf, children: t }),
            ],
        })
    );
}
var lR = n(120426),
    lP = n(873727),
    lM = n(147248),
    lO = n(418842),
    lL = n(885386),
    lD = n(940107),
    lF = n(171936);
function l$(e) {
    let { projectId: t, applicationId: n, surface: l, header: s, mainClassName: o, content: u, sidebar: d } = e,
        [h, m] = i.useState(null),
        f = (0, c.A)(n, l),
        p = f?.id ?? null;
    !(function (e, t) {
        let n = (0, A.bG)([n8.A], () => (0, lP.x4)(n8.A.theme)),
            l = (0, A.bG)([lM.A], () => lM.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: s,
                highContrast: r,
                forcedColors: o,
                underlineLinks: c,
            } = (0, A.cf)([tz.Ay], () => ({
                reducedMotion: tz.Ay.useReducedMotion,
                fontScale: (0, lP.U0)(),
                highContrast: tz.Ay.isHighContrastModeEnabled,
                forcedColors: tz.Ay.useForcedColors,
                underlineLinks: tz.Ay.alwaysShowLinkDecorations,
            })),
            u = lL.hH.useSetting(),
            d = (0, lO.C)(),
            h = i.useRef(!1),
            m = i.useRef(!1),
            f = i.useRef(0),
            p = i.useRef(null),
            g = i.useCallback(() => {
                let l = (0, lR.F)(e, t);
                if (null == l) return;
                p.current = l;
                let i = {
                    revision: ++f.current,
                    baseTheme: n,
                    customTheme: (0, lP.Lq)(),
                    uiDensity: d,
                    messageDisplayCompact: u,
                    fontScale: s,
                    reducedMotion: a,
                    highContrast: r,
                    forcedColors: o,
                    underlineLinks: c,
                };
                (0, lD.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, s, t, r, u, e, a, d, c]),
            x = i.useRef(g);
        i.useLayoutEffect(() => {
            x.current = g;
        });
        let v = i.useCallback(() => {
            h.current ||
                ((h.current = !0),
                queueMicrotask(() => {
                    (h.current = !1), m.current || x.current();
                }));
        }, []);
        i.useEffect(
            () => (
                (m.current = !1),
                () => {
                    m.current = !0;
                }
            ),
            [],
        ),
            i.useEffect(() => {
                v();
            }, [l, v]),
            i.useLayoutEffect(() => {
                g(), v();
            }, [v, g]),
            i.useLayoutEffect(() => {
                let n = (0, lR.F)(e, t);
                null != n && n !== p.current && v();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, lR.F)(e, t) && ((p.current = null), v());
                }
                return document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0);
            }, [t, e, v]),
            i.useEffect(() => {
                let e = new MutationObserver(v);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [v]);
    })(h, p),
        i.useEffect(() => {
            if (null != t) return (0, lF.mn)(t, () => (0, lR.F)(h, p));
        }, [t, h, p]);
    let g = i.useCallback(() => (0, lR.F)(h, p), [h, p]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: r()(ei.Mh, o),
                children: [s, (0, a.jsx)("div", { ref: m, className: ei.fm, children: u })],
            }),
            d,
            (0, a.jsx)(lS, { projectId: t ?? null, resolveIframe: g }),
        ],
    });
}
function lq(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            surface: s,
            header: c,
            chatOpen: m,
            onCloseChat: f,
            versionHistoryOpen: p = !1,
            onCloseVersionHistory: g,
            onRestoreVersion: x,
            restoreState: v,
            previewReady: b,
            previewGate: j,
            previewMode: y,
            channelMessages: k,
        } = e,
        w = i.useRef(null),
        [A, S] = i.useState(0);
    i.useLayoutEffect(() => {
        if (s.type === E.U4.MAIN) return (0, d.HV)(n), () => (0, d.HV)(null);
    }, [n, s.type]),
        i.useEffect(() => {
            null != t && (0, h.Hc)(t);
        }, [t]),
        i.useLayoutEffect(() => {
            let e = w.current;
            if (null == e) return;
            function t() {
                null != e && S(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        i.useEffect(() => () => (0, d.Zq)(0), []);
    let N = Math.max(360, A - 320),
        C = null != k ? k.open : m,
        I = m || s.type === E.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: w,
        className: ei.LB,
        children: (0, a.jsx)(l$, {
            projectId: t,
            applicationId: n,
            surface: s,
            header: c,
            mainClassName: null == c ? void 0 : r()(ei.ez, { [ei.zt]: C }),
            content: (0, a.jsx)(ee, {
                applicationId: n,
                previewApplicationId: l,
                surface: s,
                previewReady: b,
                previewGate: j,
                previewMode: y,
            }),
            sidebar:
                null != k
                    ? (0, a.jsx)(lp, {
                          open: k.open,
                          maxWidth: N,
                          onWidthChange: d.Zq,
                          children: k.open
                              ? (0, a.jsx)(es, { channel: k.channel, guild: k.guild, onClose: k.onClose })
                              : null,
                      })
                    : null != t && I
                      ? (0, a.jsx)(lp, {
                            open: m,
                            maxWidth: N,
                            onWidthChange: d.Zq,
                            children: (0, a.jsx)("div", {
                                className: ei.cO,
                                children: p
                                    ? (0, a.jsx)(
                                          l_,
                                          { projectId: t, onClose: g ?? (() => {}), onRestore: x ?? (() => {}) },
                                          t,
                                      )
                                    : (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(lk, { projectId: t }),
                                              (0, a.jsx)(u.Ay, {
                                                  "aria-label": P.intl.string(P.t["/VQax8"]),
                                                  toolbar:
                                                      null == f
                                                          ? null
                                                          : (0, a.jsx)(u.Ay.Icon, {
                                                                icon: o.P,
                                                                tooltip: P.intl.string(R.default.YdgE0j),
                                                                onClick: f,
                                                            }),
                                                  children: (0, a.jsx)(u.Ay.Title, {
                                                      children: P.intl.string(P.t["/VQax8"]),
                                                  }),
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: ei.cb,
                                                  children: (0, a.jsx)(lo, { projectId: t, restoreState: v }, t),
                                              }),
                                          ],
                                      }),
                            }),
                        })
                      : null,
        }),
    });
}
