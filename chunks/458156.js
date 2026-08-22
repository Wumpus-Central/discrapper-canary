n.d(t, { A: () => lU });
var l,
    a = n(477900),
    s = n(582128),
    i = n(503698),
    r = n.n(i),
    o = n(789645),
    u = n(672929),
    c = n(58736),
    d = n(948230),
    h = n(998939),
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
function L(e) {
    let { className: t } = e,
        { Component: n, events: l, getDuration: i } = (0, _.c)();
    return (
        s.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function n() {
                    ((e = null), null != i()) ? l.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(n));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [l, i]),
        s.useEffect(() => {
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
var O = n(328284);
function D(e) {
    let { title: t, body: n, wide: l = !1, children: s } = e;
    return (0, a.jsxs)("div", {
        className: r()(O.Bf, l && O.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: O.Ux,
                children: [
                    (0, a.jsx)(v.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(b.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            s,
        ],
    });
}
var F = n(963691);
function $(e) {
    let { applicationId: t, surface: n } = e,
        { frame: l, state: i } = (function (e) {
            let { applicationId: t, surface: n } = e,
                {
                    surface: l,
                    setFailed: a,
                    lifecycle: i,
                } = (function (e) {
                    let { applicationId: t, surface: n } = e,
                        l = s.useMemo(() => (0, E.VA)(t, n), [t, n]),
                        a = s.useMemo(() => n, [l]),
                        i = (0, A.bG)([y.A], () => y.A.getFrame(l), [l]),
                        r = (0, A.bG)(
                            [N.A, y.A],
                            () => N.A.getWindowOpen(C.MLl.ACTIVITY_POPOUT) && y.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: u } = (0, p.YY)(t),
                        c = (0, g.x)(o),
                        d = null != (0, S.Ay)(t),
                        [h, m] = s.useState(null),
                        f = h === l;
                    return {
                        surface: a,
                        setFailed: s.useCallback(() => m(l), [l]),
                        lifecycle: (0, E.x1)(i)
                            ? r
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: i }
                            : f
                              ? { state: "error" }
                              : i?.state === "loading"
                                ? { state: "loading", frame: i }
                                : u
                                  ? { state: "loading", frame: void 0 }
                                  : null != o && d
                                    ? c
                                        ? { state: "awaiting-launch" }
                                        : { state: "does-not-support-surface" }
                                    : { state: "no-application" },
                    };
                })({ applicationId: t, surface: n }),
                { state: r } = i;
            return (
                s.useEffect(() => {
                    "awaiting-launch" === r && e();
                    async function e() {
                        try {
                            await j.A.launchFrame({ applicationId: t, surface: l });
                        } catch {
                            a();
                        }
                    }
                }, [r, t, l, a]),
                i
            );
        })({ applicationId: t, surface: n }),
        r = (0, E.VA)(t, n);
    switch (
        (s.useEffect(() => {
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
        i)
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
            return (0, a.jsx)(L, { className: F.qs });
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
function X() {
    return (0, a.jsx)("div", { className: Y.f, children: (0, a.jsx)(m.y, {}) });
}
function Z(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: i, isLoading: r } = (0, p.YY)(l),
        o = i?.bot?.id ?? null,
        u = (0, A.bG)([V.A], () => {
            if (null == o) return null;
            let e = V.A.getDMFromUserId(o);
            return null != e ? V.A.getChannel(e) : null;
        });
    (t = u?.id ?? null),
        s.useEffect(() => {
            null != t && U.A.preload(C.ME, t);
        }, [t]),
        (n = (0, A.bG)([z.A], () => z.A.isFocused())),
        s.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, W.Xg)();
            return (
                (0, G.yl)(t, e),
                () => {
                    (0, G.dm)(t, e);
                }
            );
        }, [t, n]);
    let [c, d] = s.useState(null),
        h = null != o && c === o;
    return (s.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            U.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || d(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    r)
        ? (0, a.jsx)(X, {})
        : null == o || h
          ? (0, a.jsx)(K, { message: P.intl.string(R.default.bl4eBc) })
          : null == u
            ? (0, a.jsx)(X, {})
            : (0, a.jsx)("div", {
                  className: Y.g,
                  children: (0, a.jsx)(H.A, { channel: u, guild: null, chatInputType: B.oU.SIDEBAR }, u.id),
              });
}
var Q = n(250872),
    J = n(976102);
function ee(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            previewReady: i,
            previewGate: r,
            previewMode: o = Q.VW.ACTIVITY,
        } = e,
        c = (0, u.A)(t, l),
        { data: d, isLoading: h } = (0, p.YY)(t ?? void 0),
        { data: v } = (0, p.YY)(n ?? void 0),
        b = null != d && (0, g.x)(d),
        j = null != n && v?.bot?.id != null;
    return (s.useEffect(() => {
        r?.type === "permissions" && null != c && (0, x.A)().leaveFrame(c.id);
    }, [c, r?.type]),
    r?.type === "checking")
        ? (0, a.jsx)("div", { className: J.q, children: (0, a.jsx)(m.y, {}) })
        : r?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: J.q,
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
          : i
            ? null == t
                ? null
                : h
                  ? (0, a.jsx)("div", { className: J.q, children: (0, a.jsx)(m.y, {}) })
                  : b && j && null != n
                    ? (0, a.jsx)("div", {
                          className: J.m,
                          role: "tabpanel",
                          id: (0, Q.z3)(o),
                          "aria-label": (0, Q.kZ)(o),
                          children:
                              o === Q.VW.ACTIVITY
                                  ? (0, a.jsx)($, { applicationId: t, surface: l })
                                  : (0, a.jsx)(Z, { previewApplicationId: n }),
                      })
                    : null == d || (0, g.x)(d) || null == n
                      ? (0, a.jsx)($, { applicationId: t, surface: l })
                      : (0, a.jsx)(Z, { previewApplicationId: n })
            : (0, a.jsx)(L, { className: J.q });
}
var et = n(534890),
    en = n(738876),
    el = n(47167),
    ea = n(31717),
    es = n(372054);
function ei(e) {
    let { channel: t, guild: n, onClose: l } = e,
        s = (0, el.Ay)(t),
        i = (0, a.jsx)(c.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l });
    return (0, a.jsxs)("div", {
        className: es.Wx,
        children: [
            (0, a.jsx)(en.A, { channel: t, draftType: ea.C.ChannelMessage }),
            (0, a.jsxs)(c.Ay, {
                toolbar: i,
                "aria-label": P.intl.string(P.t.BIYAqa),
                children: [
                    (0, a.jsx)(c.Ay.ChannelIcon, { icon: et.ChatIcon, "aria-label": P.intl.string(P.t["/VQax8"]) }),
                    (0, a.jsx)(c.Ay.Title, { children: s }),
                ],
            }),
            (0, a.jsx)("div", {
                className: es.GZ,
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
function eu(e) {
    if (null != e.labelText && "" !== e.labelText) return e.labelText;
    let t = null != e.labelKey ? eo[e.labelKey] : void 0;
    return P.intl.string(t ?? R.default.nv6pUM);
}
function ec(e) {
    let t,
        { turnActive: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = [],
        a = new Map(),
        s = new Map(),
        i = 0,
        { segmentOf: r } = em(e);
    function o(e, t, n) {
        return { id: e, kind: t, detail: [], status: "running", screenshots: [], touched: 0, segment: n };
    }
    function u(e, t) {
        let n = a.get(e);
        if (null != n) return n;
        let l = { taskId: e, task: o("task", "task", t), steps: [] };
        return a.set(e, l), l;
    }
    function c(e, n, a, i) {
        if ("task" === a || "task" === n) return null != e ? u(e, i).task : (t = t ?? o("task", "task", i));
        let r = `${e ?? ""} ${n}`,
            c = s.get(r);
        if (null != c) return c;
        let d = o(n, "step", i);
        return s.set(r, d), null != e ? u(e, i).steps.push(d) : l.push(d), d;
    }
    for (let [t, n] of e.entries()) {
        let e = r[t] ?? 0;
        if ("node" === n.kind && null != n.node) {
            let t = n.node,
                l = c(n.task_id, t.id, t.node_kind ?? "step", e);
            (l.touched = ++i),
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
            let l = c(void 0, `${n.kind}-${t}`, "step", e);
            (l.touched = ++i),
                (l.labelKey = "error"),
                (l.status = "failed"),
                null != n.message && "" !== n.message && (l.detail = [n.message]);
        }
    }
    let d = [...a.values()];
    for (let e of d) n || "running" !== e.task.status || (e.task.status = "incomplete");
    return { steps: l, tasks: d, ...(null != t ? { turn: t } : {}) };
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
        s = 0;
    for (let [r, o] of e.entries()) {
        var i;
        let e = o.segment;
        if (
            (n.push(e ?? s),
            "thinking" === o.kind ||
                ((null == (i = o).task_id || "" === i.task_id) &&
                    ("error" === i.kind ||
                        "terminal_error" === i.kind ||
                        ("node" === i.kind && null != i.node && !eh(i)))))
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
                : ((a = { type: "todos", key: `todos-${r}`, segment: e ?? s, todos: n }), t.push(a));
            continue;
        }
        if ("assistant_delta" !== o.kind || (null != o.task_id && "" !== o.task_id)) continue;
        let u = o.message ?? "";
        if ("" !== u)
            if (null == l) {
                s++;
                let a = e ?? s;
                (n[r] = a), (l = { type: "message", key: `message-${r}`, segment: a, content: u }), t.push(l);
            } else l.content = u;
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
let ey = s.createContext(0);
function ek(e) {
    let {
            glyph: t,
            line: n,
            live: l,
            settled: i,
            tint: o,
            detail: u,
            connected: c = !1,
            connectsDown: d = !1,
            anchor: h = !1,
        } = e,
        [m, f] = s.useState(!1),
        p = s.useContext(ey),
        g = s.useId(),
        x = s.useCallback(() => f((e) => !e), []),
        { text: v, phase: j } = (function (e) {
            let [t, n] = s.useState(e),
                [l, a] = s.useState("idle"),
                [i, r] = s.useState(e);
            return (
                i !== e && (r(e), a(e === t ? "idle" : "exit")),
                s.useEffect(() => {
                    if ("exit" !== l) return;
                    let e = setTimeout(() => {
                        n(i), a("enter");
                    }, 150);
                    return () => clearTimeout(e);
                }, [l, i]),
                s.useEffect(() => {
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
        k = null != u,
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
        "data-settled": i,
        "data-connected": c,
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
            (0, a.jsx)("div", { id: g, hidden: !m, className: eg.BA, children: u }),
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
    let { name: t, thumbSrc: n = null, compact: l = !1, subText: s, children: i, onThumbError: r } = e;
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
                    s,
                ],
            }),
            i,
        ],
    });
}
function eC(e) {
    return (0, a.jsx)("div", { className: eN(e.compact ?? !1), children: eE(e) });
}
function eI(e) {
    let { name: t, thumbSrc: n, ariaLabel: l, onClick: s, onThumbError: i } = e;
    return (0, a.jsx)(ej.D, {
        className: r()(eN(!0), eS.w8),
        onClick: s,
        "aria-label": l,
        children: eE({ name: t, thumbSrc: n, compact: !0, onThumbError: i }),
    });
}
let eT = /^(.*?)\s*\((\+\d+)?[\s,]*([\u2212-]\d+)?\)$/,
    e_ =
        /^(.*?)\s*\((\d+ lines?|\d+ match(?:es)?|no matches|\d+ files?|empty|no logs yet|\d+ not found(?:, \d+ read-only)?|\d+ read-only|\d+KB)\)$/,
    eR =
        /^(Reading|Writing|Editing|Listing|Searching|Deleting|Running|Downloading|Saving|Sending|Importing|Imported|Building|Viewing|Loaded|Updating|Registering|Collecting)(?= )/,
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
function eL(e) {
    let { text: t, variant: n } = e,
        l = eT.exec(t),
        s = l?.[2],
        i = l?.[3];
    if (null != l && (null != s || null != i))
        return (0, a.jsxs)(a.Fragment, {
            children: [
                eM(l[1], n),
                null == s ? null : (0, a.jsxs)("span", { className: eg.MM, children: [" ", s] }),
                null == i ? null : (0, a.jsxs)("span", { className: eg.ie, children: [" ", i] }),
            ],
        });
    let r = e_.exec(t);
    return null == r
        ? eM(t, n)
        : (0, a.jsxs)(a.Fragment, {
              children: [eM(r[1], n), (0, a.jsxs)("span", { className: eg.qZ, children: [" ", r[2]] })],
          });
}
var eO = n(229775);
function eD(e) {
    let { projectId: t, node: n, presentation: l = "row", active: i = !1 } = e,
        [o, u] = s.useState(!1),
        c = s.useId(),
        d = s.useCallback(() => u((e) => !e), []),
        h = eu(n),
        m = n.detail,
        f = "failed" === n.status ? "text-feedback-critical" : "detail" === l ? "text-muted" : "text-default",
        p = "text-muted" === f,
        g = i && p ? "none" : o && p ? "currentColor" : f,
        x = r()(eg.iq, { [eO.Hz]: i && p }),
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
                children: (0, a.jsx)(eL, { text: h, variant: v }),
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
                "aria-controls": c,
                "aria-label": P.intl.formatToPlainString(R.default.z4KWsN, { step: h }),
                onClick: d,
                children: [
                    (0, a.jsx)(b.E, {
                        tag: "span",
                        variant: v,
                        color: g,
                        className: x,
                        children: (0, a.jsx)(eL, { text: h, variant: v }),
                    }),
                    (0, a.jsx)(k, { size: "xs", color: "currentColor", className: eg.Ue }),
                ],
            }),
            (0, a.jsxs)("div", {
                id: c,
                hidden: !o,
                className: eg.yJ,
                children: [
                    m.map((e, t) =>
                        (0, a.jsx)(
                            b.E,
                            {
                                tag: "div",
                                variant: j,
                                color: i && p ? "none" : "text-muted",
                                selectable: !0,
                                className: r()({ [eO.Hz]: i && p }),
                                children: (0, a.jsx)(eL, { text: e, variant: j }),
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
        [l, i] = s.useState(null),
        [r, o] = s.useState(!1);
    s.useEffect(() => {
        let e = !1;
        return (
            (0, h.aF)(t, n).then(
                (t) => {
                    e || i(t);
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
    let u = P.intl.string(R.default["3Hq9pQ"]),
        c = s.useCallback(() => {
            (0, h.aF)(t, n).then((e) => {
                (0, ew.R)({
                    items: [{ type: "IMAGE", url: e, alt: u }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, eF);
        }, [t, n, u]);
    return r ? null : (0, a.jsx)(eI, { name: u, thumbSrc: l, ariaLabel: u, onClick: c, onThumbError: () => o(!0) });
}
function eq(e) {
    let { projectId: t, steps: n, fallbackLabel: l, live: s, durationMs: i, connectsDown: r = !1, closed: o = !1 } = e,
        u = ed(n),
        c = s ? void 0 : i,
        d =
            null != c
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
                  })(c)
                : null != u
                  ? eu(u)
                  : (l ?? P.intl.string(R.default.nv6pUM)),
        h = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0);
    return (0, a.jsx)(ek, {
        glyph: (0, a.jsx)(ex, {}),
        line: d,
        anchor: !0,
        live: s,
        settled: null != c || (!s && o),
        connectsDown: r,
        detail: h
            ? (0, a.jsx)("ol", {
                  className: eg.dO,
                  children: n.map((e) =>
                      (0, a.jsx)(eD, { projectId: t, node: e, presentation: "detail", active: s && e === u }, e.id),
                  ),
              })
            : void 0,
    });
}
var eU = n(29080),
    eG = n(46054);
function eH(e) {
    let { steps: t, content: n, hasProposal: l, hasAttachments: a } = e,
        s = em(t).items,
        i = s.filter((e) => "message" === e.type).at(-1),
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
        o = r && null != i && i.content.trim() === n.trim(),
        u = !l && "" !== n && !o;
    return {
        streamed: s,
        lastStreamedMessage: i,
        showsClosingMessage: u,
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: a, showsClosingMessage: u, endsOnStreamedMessage: r }),
    };
}
var eB = n(478016),
    eV = n(34136);
function ez(e) {
    let { title: t, trailing: n, children: l, className: s, headerClassName: i, ...o } = e;
    return (0, a.jsxs)("section", {
        className: r()(eV.Nr, s),
        ...o,
        children: [
            (0, a.jsxs)("header", {
                className: r()(eV.wx, null != n && eV.o5, i),
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
        i = s.useId(),
        o = null == l;
    return (0, a.jsxs)(ej.D, {
        className: r()(eW.nM, { [eW.f1]: o, [eW.CZ]: n }),
        onClick: o ? void 0 : () => l(t),
        "aria-label": P.intl.formatToPlainString(R.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : i,
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
                      id: i,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function eK(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [i, r] = s.useState(() => new Set()),
        o = s.useCallback(
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
                { idea: e, selected: i.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var eX = n(673724),
    eZ = n(375068);
function eQ(e) {
    let { projectId: t, attachments: n } = e,
        l = n.filter(eJ),
        [i, r] = s.useState(() => new Set()),
        o = s.useCallback((e) => {
            r((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, a.jsx)("div", {
        className: eZ.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(e0, { name: e.name }, n)
                : eJ(e)
                  ? (0, a.jsx)(
                        e2,
                        {
                            projectId: t,
                            viewableImages: l,
                            viewerIndex: l.indexOf(e),
                            unavailableIds: i,
                            markUnavailable: o,
                        },
                        n,
                    )
                  : (0, a.jsx)(e1, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function eJ(e) {
    return null != e.id && eX.Wb.has(e.content_type);
}
function e0(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? P.intl.formatToPlainString(R.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)(eC, { name: l, compact: !0 });
}
function e1(e) {
    let { projectId: t, id: n, name: l } = e,
        [i, r] = s.useState(!1),
        o = s.useCallback(() => {
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
    return i
        ? (0, a.jsx)(e0, { name: l, unavailable: !0 })
        : (0, a.jsx)(eI, {
              name: l,
              thumbSrc: null,
              ariaLabel: P.intl.formatToPlainString(R.default.gV5YcR, { name: l }),
              onClick: o,
          });
}
function e2(e) {
    let { projectId: t, viewableImages: n, viewerIndex: l, unavailableIds: i, markUnavailable: r } = e,
        { id: o, name: u } = n[l],
        [c, d] = s.useState(null),
        m = i.has(o),
        [f, p] = s.useState(0);
    s.useEffect(() => {
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
    let g = s.useCallback(() => {
        Promise.all(
            n.map(async (e) => (i.has(e.id) ? null : { type: "IMAGE", url: await (0, h.PK)(t, e.id), alt: e.name })),
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
    }, [t, n, l, i]);
    return m
        ? (0, a.jsx)(e0, { name: u, unavailable: !0 })
        : (0, a.jsx)(eI, {
              name: u,
              thumbSrc: c,
              ariaLabel: P.intl.formatToPlainString(R.default.QUFLUq, { name: u }),
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
        i = s.useCallback(() => {
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
                    onClick: i,
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
        i = (n.keys ?? []).map((e) => l?.schema.find((t) => t.key === e)).filter((e) => null != e),
        r = s.useCallback(() => {
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
            i.length > 0
                ? (0, a.jsx)("div", {
                      className: tl.R6,
                      children: i.map((e) =>
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
function ts(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: s, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: s ?? "img",
    });
}
function ti(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: s, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: s ?? "img",
    });
}
function tr(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: s, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: s ?? "img",
    });
}
function to(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: s, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: s ?? "img",
    });
}
function tu(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: s, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: s ?? "img",
    });
}
function tc(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: s, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: s ?? "img",
    });
}
function td(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: s, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: s ?? "img",
    });
}
function th(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: s, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: s ?? "img",
    });
}
function tm(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: s, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: s ?? "img",
    });
}
function tf(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: s, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: s ?? "img",
    });
}
function tp(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: s, size: i = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: s ?? "img",
    });
}
function tg() {
    return [
        { key: "snail", Illocon: ts, tint: "var(--illo-yellow-40)", name: tv(R.default["2l3AEQ"]) },
        { key: "goat", Illocon: ti, tint: "var(--illo-orange-40)", name: tv(R.default["+FPL+I"]) },
        { key: "frog", Illocon: tr, tint: "var(--illo-green-40)", name: tv(R.default.w4GOfR) },
        { key: "bunny", Illocon: to, tint: "var(--illo-pink-40)", name: tv(R.default.XmZT9M) },
        { key: "cat", Illocon: tu, tint: "var(--illo-pink-40)", name: tv(R.default.NnydwQ) },
        { key: "caterpillar", Illocon: tc, tint: "var(--illo-green-40)", name: tv(R.default["4iXcNT"]) },
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
    let { lane: t, Illocon: n, tint: l, name: s, connectsDown: i } = e,
        r = t.task,
        o = "running" === r.status,
        u = ed(t.steps),
        c = o
            ? null != u
                ? eu(u)
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
                                        (0, a.jsx)(eD, { node: e, presentation: "detail", active: o && e === u }, e.id),
                                    ),
                                })
                              : null,
                          r.detail.map((e, t) => (0, a.jsx)("div", { className: eg.iq, children: e }, t)),
                      ],
                  });
    return (0, a.jsx)(ek, {
        glyph: (0, a.jsx)(tj.u, {
            asset: (0, a.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: s,
            body: ty(r),
            position: "left",
            children: (0, a.jsx)("span", {
                className: eg.nC,
                children: (0, a.jsx)(n, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: o,
        settled: !o,
        tint: l,
        detail: d,
        connected: !0,
        connectsDown: i,
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
        l = s.useMemo(() => (n ? t : tS), [n, t]),
        i = s.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        r = l.map((e) => e.key).join("\0"),
        [o, u] = s.useState(l),
        [c, d] = s.useState(r),
        [h, m] = s.useState(!1);
    c !== r && (d(r), u([...l, ...o.filter((e) => !i.has(e.key))]), 0 === l.length && m(!1));
    let f = o.some((e) => !i.has(e.key));
    if (
        (s.useEffect(() => {
            if (!f) return;
            let e = setTimeout(() => u(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [f, l, n]),
        s.useEffect(() => {
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
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    "span",
                    {
                        className: tA.MA,
                        "data-leaving": i.has(t) ? void 0 : "true",
                        title: l,
                        children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
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
        i = (function (e) {
            let t = e.join("\0"),
                [n, l] = s.useState(() => new Set(e)),
                [a, i] = s.useState(t),
                [r, o] = s.useState(() => new Set());
            return (
                a !== t && (i(t), l(new Set(e)), o(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                s.useEffect(() => {
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
        })(s.useMemo(() => t.map((e) => e.id), [t]));
    return (0, a.jsxs)("ul", {
        className: tA.p_,
        children: [
            t.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: tA.AS,
                        "data-status": e.status,
                        "data-arriving": i.has(e.id) ? "true" : void 0,
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
    let { todos: t, provisional: n, agents: l, announceProgress: s = !0 } = e,
        { completed: i, total: r } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === r
        ? null
        : (0, a.jsxs)(ez, {
              title: P.intl.string(R.default.qCRC6c),
              trailing: (0, a.jsx)(b.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: P.intl.formatToPlainString(R.default.bQvqly, { completed: i, total: r }),
              }),
              className: tA.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  s
                      ? (0, a.jsx)(tw.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: P.intl.formatToPlainString(R.default["QG/EiF"], { completed: i, total: r }),
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
            durationMs: i,
            interrupted: r = !1,
            todos: o,
            provisionalTodo: u,
            segment: c,
            hostsChecklist: d = !0,
            reportsDuration: h = !0,
            closed: m = !1,
            segmentDurationMs: f,
        } = e,
        p = s.useMemo(() => ec(n, { turnActive: l }), [n, l]),
        g = s.useMemo(
            () =>
                null == c
                    ? p
                    : {
                          ...p,
                          steps: p.steps.filter((e) => e.segment === c),
                          tasks: p.tasks.filter((e) => e.task.segment === c),
                      },
            [p, c],
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
    let x = l ? void 0 : (f ?? (h ? (p.turn?.durationMs ?? i) : void 0)),
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
                          children: (0, a.jsx)(tI, { todos: v, provisional: u, agents: w }),
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
            proposal: i,
            ideas: o,
            attachments: u,
            secretRequest: c,
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
        } = s.useMemo(
            () => eH({ steps: n, content: l, hasProposal: null != i, hasAttachments: null != u && u.length > 0 }),
            [n, l, i, u],
        ),
        y = null == u ? null : (0, a.jsx)(eQ, { projectId: t, attachments: u }),
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
            null != i
                ? (0, a.jsx)(e8, { proposal: i })
                : v
                  ? (0, a.jsxs)("div", {
                        className: r()(eg.ky, eO.XR),
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
            null != c
                ? (0, a.jsx)("div", {
                      className: r()(eg.ky, eO.XR),
                      children: (0, a.jsx)(tt, { projectId: t, request: c }),
                  })
                : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: r()(eg.ky, eO.XR),
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
    tL = n(922016),
    tO = n(980707),
    tD = n(477782),
    tF = n(81369),
    t$ = n(717400),
    tq = n(663341),
    tU = n(826745),
    tG = n(866665),
    tH = n(428610),
    tB = n(783977),
    tV = n(559647),
    tz = n(285796),
    tW = n(775602),
    tY = n(311656),
    tK = n(789438);
let tX = eX.Is;
function tZ(e) {
    let { text: t } = e,
        [n, l] = s.useState(""),
        [i, r] = s.useState("enterStart"),
        [o, u] = s.useState("");
    t !== o && (u(t), t !== n && ("" === n ? (l(t), r("enterStart")) : "idle" === i && r("exit"))),
        s.useEffect(() => {
            if ("exit" === i) {
                let e = window.setTimeout(() => {
                    l(t), r("enterStart");
                }, 250);
                return () => window.clearTimeout(e);
            }
            if ("enterStart" === i) {
                let e = 0,
                    t = window.requestAnimationFrame(() => {
                        e = window.requestAnimationFrame(() => r("idle"));
                    });
                return () => {
                    window.cancelAnimationFrame(t), 0 !== e && window.cancelAnimationFrame(e);
                };
            }
        }, [i, t]);
    let c = "exit" === i ? tK.t0 : "enterStart" === i ? tK.Rj : "";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { className: `${tK.xM} ${tK.nT} ${c}`, children: n }),
            (0, a.jsx)(tM.e, { shortcut: "tab", className: `${tK.xT} ${tK.nT} ${c}`, keyClassName: tK.IS }),
        ],
    });
}
let tQ = 0;
function tJ(e) {
    let {
            canSend: t,
            stopped: n,
            running: l,
            restoring: i = !1,
            onSend: r,
            onInterrupt: o,
            onUploadFile: u,
            onDeleteFile: c,
            onApprove: d,
            onRegionCapture: h,
            onImport: f,
            suggestion: p,
            questionOpen: g = !1,
            modelSettings: x,
            onModelSettingsChange: v,
        } = e,
        [b, j] = s.useState(""),
        y = (0, A.bG)([tW.Ay], () => tW.Ay.isSubmitButtonEnabled),
        [k, w] = s.useState([]),
        [S, N] = s.useState(!1),
        [E, C] = s.useState(!1),
        [I, T] = s.useState(!1);
    s.useEffect(() => {
        l || T(!1);
    }, [l]);
    let _ = s.useRef(null),
        M = s.useRef([]),
        L = s.useRef(new Set()),
        O = s.useRef(c);
    O.current = c;
    let D = s.useCallback((e) => {
            (M.current = e), w(e);
        }, []),
        F = s.useCallback((e) => {
            O.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    s.useEffect(() => {
        let e = L.current;
        return () => {
            for (let t of M.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && F(t.ref);
        };
    }, [F]);
    let $ = s.useCallback(
            (e, t) => {
                if (L.current.has(e)) return;
                let n = M.current;
                n.some((t) => t.localId === e) && D(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [D],
        ),
        q = s.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...M.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++tQ,
                        s = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= tX) {
                        t.push({
                            ...s,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.DlX57a, { count: tX }),
                        });
                        continue;
                    }
                    if (!(0, eX.x5)(l.size, e)) {
                        t.push({
                            ...s,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.cI7t94, {
                                size: (0, eX.ZJ)((0, eX.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let i = eX.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...s, previewUrl: i }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: l } of (D(t), n))
                    u(e).then(
                        (e) => {
                            L.current.has(l) ? F(e) : $(l, { status: "ready", ref: e });
                        },
                        (e) => {
                            L.current.has(l) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                $(l, { status: "error", errorText: P.intl.string(R.default.GwEHvn) }));
                        },
                    );
            },
            [F, u, $, D],
        ),
        U = s.useCallback(async () => {
            if (null != h && !E) {
                C(!0);
                try {
                    let e = await h();
                    null != e && q([e]);
                } catch (e) {
                    console.error("[vibegrations] region capture failed", e),
                        D([
                            ...M.current,
                            {
                                localId: ++tQ,
                                name: "preview-capture.png",
                                size: 0,
                                contentType: "image/png",
                                status: "error",
                                errorText: P.intl.string(R.default["4DQd7d"]),
                            },
                        ]);
                } finally {
                    C(!1);
                }
            }
        }, [h, E, q, D]),
        G = s.useCallback(
            (e) => {
                let t = M.current,
                    n = t.find((t) => t.localId === e);
                L.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && F(n.ref),
                    D(t.filter((t) => t.localId !== e));
            },
            [F, D],
        ),
        H = k.every((e) => "ready" === e.status),
        B = "" !== b.trim() || k.length > 0,
        V = t && B && H,
        z = s.useCallback(() => {
            if (!V) return;
            let e = M.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (r(b, e.length > 0 ? e : void 0), M.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            j(""), D([]);
        }, [V, b, r, D]),
        W = s.useCallback(
            (e) => {
                e.preventDefault(), z();
            },
            [z],
        ),
        Y = s.useCallback(() => {
            null == o || I || (T(!0), o());
        }, [o, I]),
        K = s.useCallback(
            (e) => {
                if ("Escape" === e.key && l && null != o && !I) {
                    e.preventDefault(), e.stopPropagation(), Y();
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != p && "" === b) {
                    e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), j(p);
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != d && (e.preventDefault(), d());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), z());
            },
            [z, d, l, o, I, Y, p, b],
        ),
        X = s.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), q(n));
            },
            [t, q],
        ),
        Z = s.useCallback(
            (e) => {
                e.preventDefault(), N(!1), t && q(Array.from(e.dataTransfer.files));
            },
            [t, q],
        ),
        Q = s.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), N(!0));
        }, []),
        J = s.useCallback(
            (e) => {
                q(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [q],
        ),
        ee = s.useRef(null),
        et = s.useRef(null),
        [en, el] = s.useState(0),
        [ea, es] = s.useState(!1);
    s.useEffect(() => {
        if (0 === b.length) return void es(!1);
        let e = ee.current?.querySelector("textarea");
        if (null != e) {
            let t = t2(e);
            null != t && el(t);
        }
        es(!0);
        let t = setTimeout(() => es(!1), t0);
        return () => clearTimeout(t);
    }, [b]);
    let ei = s.useMemo(() => ({ "--custom-glow-x": `${en}px` }), [en]),
        er = ea ? ` ${tK.EB}` : "",
        eo = t && !i && null != p && "" === b;
    return (0, a.jsxs)("form", {
        onSubmit: W,
        onDrop: Z,
        onDragOver: Q,
        onDragLeave: () => N(!1),
        className: S ? `${tK.DA} ${tK.pV}` : tK.DA,
        children: [
            k.length > 0
                ? (0, a.jsx)("div", {
                      className: tK.lN,
                      children: k.map((e) => (0, a.jsx)(t6, { draft: e, onRemove: G }, e.localId)),
                  })
                : null,
            (0, a.jsx)("span", { className: `${tK.wg} ${tK.LP}${er}`, style: ei, "aria-hidden": !0 }),
            (0, a.jsx)("span", { className: `${tK.wg} ${tK.L3}${er}`, style: ei, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: tK.VA,
                ref: ee,
                children: [
                    (0, a.jsx)("input", {
                        ref: _,
                        type: "file",
                        multiple: !0,
                        onChange: J,
                        className: tK.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(tL.Y, {
                        targetElementRef: et,
                        position: "top",
                        align: "left",
                        animation: tL.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, a.jsx)(tO.W, {
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
                                            action: () => _.current?.click(),
                                        }),
                                        null != f
                                            ? (0, a.jsx)(tD.Dr, {
                                                  id: "import-project",
                                                  label: P.intl.string(R.default.edKajy),
                                                  iconLeft: t$.q,
                                                  leadingAccessory: { type: "icon", icon: t$.q },
                                                  action: f,
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
                                ref: et,
                                type: "button",
                                className: `${tK.Y0} ${tK.nu}`,
                                disabled: !t,
                                "aria-label": P.intl.string(P.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": l,
                                children: (0, a.jsx)(tq.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: tK.Qu,
                                }),
                            });
                        },
                    }),
                    eo
                        ? (0, a.jsx)("div", {
                              className: tK.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(tZ, { text: p }),
                          })
                        : null,
                    (0, a.jsx)(tU.y, {
                        value: b,
                        onChange: (e) => j(e.currentTarget.value),
                        onKeyDown: K,
                        onPaste: X,
                        placeholder: i
                            ? P.intl.string(R.default.pGFXZ0)
                            : n
                              ? P.intl.string(R.default.JeM47J)
                              : t
                                ? eo
                                    ? ""
                                    : g
                                      ? P.intl.string(R.default.M3ovXY)
                                      : P.intl.string(l ? R.default["67PpcP"] : R.default.ahRdoJ)
                                : P.intl.string(R.default.nm4w9P),
                        disabled: !t,
                        "aria-label": P.intl.string(R.default.OPr66w),
                        rows: 1,
                        className: tK.jp,
                    }),
                    (0, a.jsxs)("div", {
                        className: tK.Sz,
                        children: [
                            (0, a.jsx)(tG.m, {
                                text: P.intl.string(R.default.B5gWPk),
                                ariaHidden: !0,
                                children: (0, a.jsx)("button", {
                                    type: "button",
                                    className: tK.Y0,
                                    disabled: null == h || !t || E,
                                    onClick: U,
                                    "aria-label": P.intl.string(R.default.B5gWPk),
                                    children: E
                                        ? (0, a.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: tK.Rk })
                                        : (0, a.jsx)(tH.K, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                }),
                            }),
                            l && null != o
                                ? (0, a.jsx)(tG.m, {
                                      text: P.intl.string(R.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: tK.AW,
                                          disabled: I,
                                          onClick: Y,
                                          "aria-label": P.intl.string(R.default.KdgI4k),
                                          children: (0, a.jsx)(eU.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != x && null != v
                                  ? (0, a.jsx)(tY.A, {
                                        settings: x.settings,
                                        choices: x.choices,
                                        disabled: !t,
                                        onChange: v,
                                        className: `${tK.Y0} ${tK.Il}`,
                                        icon: (0, a.jsx)(tB.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                        ],
                    }),
                    y
                        ? (0, a.jsxs)("div", {
                              className: tK.fF,
                              children: [
                                  (0, a.jsx)("div", { className: tK.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: tK.rt,
                                      disabled: !V,
                                      "aria-label": P.intl.string(R.default["22GHMt"]),
                                      children: (0, a.jsx)(tV.SendMessageIcon, {
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
let t0 = 1500,
    t1 = [
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
function t2(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = t2.mirror;
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
                (t2.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of t1) t.style.setProperty(e, n.getPropertyValue(e));
    (t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length));
    let l = document.createElement("span");
    (l.textContent = "\u200B"), t.appendChild(l);
    let a = l.offsetLeft;
    return (t.textContent = ""), e.offsetLeft + a - e.scrollLeft;
}
function t6(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(eC, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(b.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: tK.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: tK.o1,
                onClick: () => n(t.localId),
                "aria-label": P.intl.string(R.default["3HWvgk"]),
                children: (0, a.jsx)(tz.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
t2.mirror = null;
var t3 = n(287809),
    t5 = n(320095),
    t7 = n(963852),
    t4 = n(521981),
    t8 = n(763754),
    t9 = n(491182),
    ne = n(622868),
    nt = n(308334),
    nn = n(837528),
    nl = n(375199),
    na = n(715628),
    ns = n(752636),
    ni = n(9842),
    nr = n(589022),
    no = n(95701),
    nu = n(994500),
    nc = n(967198),
    nd = n(441136);
let nh = (0, no.createChannelRecord)({ id: "vibegrations-builder", type: C.rbe.DM }),
    nm = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function nf(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: r()(nd.Yq, { [nd.x1]: t }), children: e });
}
function np(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function ng(e, t) {
    let { content: n } = (0, nl.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        l = s.useMemo(() => ({ message: e, channel: nh, compact: !1 }), [e]);
    return "" !== t ? (0, na.A)(l, n) : null;
}
function nx(e) {
    let [t, n] = s.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = s.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        i = s.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        r = (0, nn.m)(e, nh, t.usernameProfile, l),
        o = (0, nn.Jo)(t.avatarProfile, l),
        u = (0, A.bG)([nc.A], () => nc.A.getGuildId()),
        c = (0, A.bG)([t3.default], () => t3.default.getCurrentUser()),
        d = s.useCallback(
            (t) => {
                let n = t3.default.getUser(e.author.id) ?? e.author;
                return null == c ? null : (0, a.jsx)(nr.A, { ...t, user: n, currentUser: c, guildId: u ?? void 0 });
            },
            [c, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: r,
        onPopoutRequestClose: i,
        renderPopout: d,
        guildId: u ?? void 0,
    };
}
function nv(e) {
    let { baseMessage: t, referenced: n, onJumpToReplied: l } = e,
        i = s.useMemo(
            () => ("" !== n.content ? (0, t4.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null),
            [n],
        ),
        { isReplyAuthorBlocked: r, isReplyAuthorIgnored: o } = (0, A.cf)(
            [nu.A],
            () => ({
                isReplyAuthorBlocked: nu.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: nu.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        u = (0, t8.X4)(n),
        c = (0, t8.X4)(t),
        d = nx(n);
    return (0, a.jsx)(nt.A, {
        repliedAuthor: u,
        baseAuthor: c,
        baseMessage: t,
        channel: nh,
        referencedMessage: { state: ni.a.LOADED, message: n },
        content: i,
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
function nb(e) {
    let { message: t, author: n } = e,
        l = nx(t);
    return (0, a.jsx)(ne.Ay, {
        message: t,
        channel: nh,
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
function nj(e) {
    let { content: t, createdAt: n, userId: l, accessories: i, groupStart: r } = e,
        o = (0, A.bG)([t3.default], () => (null != l ? t3.default.getUser(l) : null) ?? t3.default.getCurrentUser(), [
            l,
        ]),
        u = s.useMemo(() => (0, t8.FT)(o, null), [o]),
        c = s.useMemo(() => {
            if (null == o) return null;
            let e = (0, t7.Ay)({ channelId: nh.id, content: t, author: o });
            return (0, t5.rh)({ ...e, timestamp: np(n, e.timestamp), state: C.cmJ.SENT });
        }, [t, o, n]);
    return null == c ? null : (0, a.jsx)(ny, { message: c, author: u, content: t, accessories: i, groupStart: r });
}
function ny(e) {
    let { message: t, author: n, content: l, accessories: s, groupStart: i = !0 } = e,
        r = ng(t, l);
    return (0, a.jsx)(t9.A, {
        className: nd.yE,
        author: n,
        childrenHeader: i ? (0, a.jsx)(nb, { message: t, author: n }) : void 0,
        childrenMessageContent: r,
        childrenAccessories: nf(s, "" !== l),
        disableInteraction: !0,
    });
}
function nk(e) {
    let { content: t, createdAt: n, accessories: l, replyTo: i, onJumpToReplied: r, groupStart: o = !0 } = e,
        u = s.useMemo(() => (0, t8.FT)(null, null), []),
        c = s.useMemo(() => ({ ...u, nick: "Conjure", colorString: "var(--text-brand)" }), [u]),
        d = i?.userId,
        h = (0, A.bG)([t3.default], () => (null != d ? t3.default.getUser(d) : null) ?? t3.default.getCurrentUser(), [
            d,
        ]),
        m = s.useMemo(() => {
            if (null == i || null == h) return null;
            let e = (0, t7.Ay)({ channelId: nh.id, content: i.content, author: h });
            return (0, t5.rh)({ ...e, id: i.id, timestamp: np(i.createdAt, e.timestamp), state: C.cmJ.SENT });
        }, [i, h]),
        f = s.useMemo(() => (null == i ? void 0 : { channel_id: nh.id, message_id: i.id }), [i]),
        p = s.useMemo(() => {
            let e = (0, t7.Ay)({ channelId: nh.id, content: t, author: nm });
            return (0, t5.rh)({
                ...e,
                timestamp: np(n, e.timestamp),
                state: C.cmJ.SENT,
                ...(null != f ? { type: C.lAJ.REPLY, message_reference: f } : {}),
            });
        }, [t, n, f]),
        g = ng(p, t);
    return (0, a.jsxs)("div", {
        className: nd.$4,
        "data-replying": null != m ? "true" : void 0,
        children: [
            (0, a.jsx)(t9.A, {
                className: nd.yE,
                author: c,
                childrenRepliedMessage:
                    null == m ? null : (0, a.jsx)(nv, { baseMessage: p, referenced: m, onJumpToReplied: r }),
                childrenHeader: (0, ns.A)({ message: p, channel: nh, author: c, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: g,
                childrenAccessories: nf(l, "" !== t),
                disableInteraction: !0,
            }),
            o
                ? (0, a.jsx)("span", {
                      className: nd.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(q.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
function nw(e) {
    let { projectId: t, messages: n, ref: l, onPickIdea: i } = e,
        r = (0, A.bG)([t3.default], () => t3.default.getCurrentUser()),
        o = s.useRef(null),
        u = s.useCallback(
            (e) => {
                (o.current = e), "function" == typeof l ? l(e) : null != l && (l.current = e);
            },
            [l],
        ),
        [c, d] = s.useState(null),
        h = s.useRef(0);
    s.useEffect(() => () => window.clearTimeout(h.current), []);
    let m = s.useCallback((e) => {
            let t = o.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                d(e),
                window.clearTimeout(h.current),
                (h.current = window.setTimeout(() => d(null), 1600));
        }, []),
        f = s.useMemo(
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
                            s = (function (e) {
                                let { turnActive: t = !0 } =
                                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    { items: n } = em(e),
                                    l = ec(e, { turnActive: t }),
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
                                    s = new Map();
                                for (let e of n) "message" === e.type && s.set(e.segment, e);
                                let i = new Set();
                                for (let e of l.steps) i.add(e.segment);
                                for (let e of l.tasks) i.add(e.task.segment);
                                let r = n.find((e) => "todos" === e.type)?.segment,
                                    o = Math.max(0, ...s.keys(), ...i, ...(null != r ? [r] : [])),
                                    u = [];
                                for (let e = 0; e <= o; e++) {
                                    let t = s.get(e),
                                        n = i.has(e),
                                        l = r === e;
                                    (null != t || n || l) &&
                                        u.push({
                                            key: t?.key ?? `work-${e}`,
                                            index: e,
                                            ...(null != t ? { prose: t } : {}),
                                            hasWork: n,
                                            hasTodos: l,
                                            ...(a.has(e) ? { durationMs: a.get(e) } : {}),
                                        });
                                }
                                return u;
                            })(t.steps, { turnActive: e }),
                            { lastWork: i, open: r } = (function (e, t) {
                                let { turnActive: n } = t,
                                    l = e.filter((e) => e.hasWork || e.hasTodos).at(-1)?.index,
                                    a = e.at(-1)?.index,
                                    s = n && null != l && l === a ? l : void 0;
                                return { ...(null != l ? { lastWork: l } : {}), ...(null != s ? { open: s } : {}) };
                            })(s, { turnActive: e });
                        for (let e of s) {
                            if (null != e.prose) {
                                let s = `${t.render_id}:${e.key}`;
                                n(
                                    {
                                        kind: "prose",
                                        key: s,
                                        message: t,
                                        groupStart: !1,
                                        content: e.prose.content,
                                        hostsAttachments:
                                            "streamed" === l.attachmentsHost &&
                                            e.prose.key === a &&
                                            null != t.attachments,
                                    },
                                    { actor: "assistant", boundary: s },
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
                                        reportsDuration: e.index === i,
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
                                : s.every((e) => !e.hasTodos) &&
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
                            s = !1;
                        for (let i of e) {
                            if (null == i.actor) {
                                n.push(!1), (l = null), (a = !1), (s = !1), (t = void 0);
                                continue;
                            }
                            let e = !a || l !== i.actor || i.boundary !== t || !0 === i.separate || s;
                            e && ((l = i.actor), (a = !0), (s = !0 === i.separate), (t = i.boundary)), n.push(e);
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
              className: eZ.x7,
              children: (0, a.jsx)(nA, {
                  role: "assistant",
                  children: (0, a.jsx)(nk, { content: P.intl.string(R.default.khZEUv) }),
              }),
          })
        : (0, a.jsx)("ol", {
              ref: u,
              className: eZ.x7,
              children: f.map((e) => {
                  let l = e.message;
                  switch (e.kind) {
                      case "user": {
                          let n = null != l.attachments && l.attachments.length > 0 ? l.attachments : null;
                          return (0, a.jsx)(
                              nA,
                              {
                                  role: "user",
                                  anchorId: l.id,
                                  highlighted: c === l.id,
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(nj, {
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
                              nA,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(nk, {
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
                              nA,
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
                              nA,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tR, { projectId: t, interrupted: !0, steps: l.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, a.jsx)(
                              nA,
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
                              nA,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(nk, {
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
                                          onPickIdea: i,
                                      }),
                                  }),
                              },
                              e.key,
                          );
                  }
              }),
          });
}
function nA(e) {
    let { role: t, children: n, anchorId: l, highlighted: s = !1, continuation: i = !1 } = e;
    return (0, a.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": l,
        className: r()(eZ.xk, { [eZ.Qo]: s, [eZ.q3]: i }),
        children: n,
    });
}
var nS = n(625903),
    nN = n(964675);
function nE(e) {
    let { projectId: t } = e,
        n = (0, A.bG)([h.Ay], () => null != h.Ay.getSettings(t), [t]),
        l = s.useCallback(() => {
            (0, tn.A)(t);
        }, [t]);
    return n
        ? (0, a.jsx)(ej.D, {
              className: nN.h,
              "aria-label": P.intl.string(R.default.gTMvzD),
              onClick: l,
              children: (0, a.jsx)(nS.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var nC = n(863610),
    nI = n(495557);
function nT(e) {
    let { activity: t, id: n } = e,
        l = t?.text ?? "",
        i = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            i.current?.scrollToBottom();
        }, [l]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: nI.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(er.Ch, {
                ref: i,
                className: nI.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: r()(tT.PT, nI.bb),
                    children: eG.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var n_ = n(921461);
function nR(e) {
    let { activity: t, compacting: n = !1, restoring: l = !1 } = e,
        i = s.useRef(null),
        o = s.useId(),
        [u, c] = s.useState(null),
        d = null != t && "end" !== t.phase,
        h = l ? R.default.aFffp2 : n ? R.default["0vH/5G"] : d ? R.default.Ly7F7x : R.default.QDGuNS,
        m = null != t && "" !== t.text,
        f = t?.session ?? null,
        p = m && null != f && u === f,
        g = s.useCallback(() => {
            m && null != f && c((e) => (e === f ? null : f));
        }, [m, f]),
        x = s.useCallback(() => c(null), []);
    return (0, a.jsx)(tL.Y, {
        targetElementRef: i,
        position: "top",
        align: "left",
        shouldShow: p,
        onRequestClose: x,
        renderPopout: () => (0, a.jsx)(nT, { id: o, activity: t }),
        children: () =>
            (0, a.jsxs)(ej.D, {
                innerRef: i,
                className: r()(n_.hF, m && n_.Xd),
                "aria-label": P.intl.string(l ? R.default.pGFXZ0 : R.default.SzdX35),
                "aria-expanded": p,
                "aria-describedby": p ? o : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: g,
                children: [
                    (0, a.jsx)("span", {
                        className: n_.bl,
                        children: (0, a.jsx)(nC.n, { dotRadius: 3.5, themed: !0 }),
                    }),
                    (0, a.jsx)(b.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        children: P.intl.string(h),
                    }),
                ],
            }),
    });
}
var nP = n(885574),
    nM = n(280894);
function nL(e) {
    return e.toLocaleString();
}
function nO(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: nM.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: nM.mf,
                children: [
                    (0, a.jsx)(b.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [nL((0, eX.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(b.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    nL(n.input_tokens),
                    " in \xb7 ",
                    nL(n.output_tokens),
                    " out \xb7 ",
                    nL(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    nL(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function nD(e) {
    let { project: t } = e,
        n = (0, eX.wV)(t.orchestrator, t.codegen);
    return (0, a.jsxs)("div", {
        className: nM.si,
        role: "dialog",
        "aria-label": P.intl.string(R.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: nM.Q$,
                children: (0, a.jsxs)("div", {
                    className: nM.mf,
                    children: [
                        (0, a.jsxs)(b.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [nL((0, eX.a7)(t.cost_usd)), " runes"],
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
                className: nM.mf,
                children: [
                    (0, a.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(R.default["kILb+R"]),
                    }),
                    (0, a.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, eX.sj)(n) ? "\u2014" : `${Math.round(100 * (0, eX.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function nF(e) {
    let { project: t } = e,
        n = s.useRef(null);
    return (0, a.jsx)(tL.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(nD, { project: t }),
        children: (e) =>
            (0, a.jsx)(ej.D, {
                innerRef: n,
                className: nM.Y$,
                "aria-label": P.intl.string(R.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(nP.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var n$ = n(258216);
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
        thinkingActivity: s,
        compacting: i,
        projectUsage: r,
        connState: o,
    } = e;
    return (0, a.jsxs)("div", {
        className: n$.jf,
        children: [
            (0, a.jsx)("div", {
                className: n$.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: n || l ? (0, a.jsx)(nR, { activity: s, compacting: i, restoring: l }) : null,
            }),
            (0, a.jsx)(nE, { projectId: t }),
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
                                  runes: (0, eX.a7)(r.cost_usd),
                                  turns: r.turns,
                              }),
                              children: P.intl.formatToPlainString(R.default["4PFO2p"], {
                                  runes: (0, eX.a7)(r.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(nF, { project: r }),
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
    let { option: t, position: n, disabled: l, onPick: i } = e,
        o = s.useId(),
        u = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(ej.D, {
        className: r()(nV.uK, { [nV.ue]: l }),
        onClick: l ? void 0 : () => i(t),
        "aria-label": P.intl.formatToPlainString(u ? R.default.aL1BKQ : R.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? o : void 0,
        "aria-disabled": l,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": u ? "true" : void 0,
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
                    c
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
            u
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
        [i, u] = s.useState({}),
        [c, d] = s.useState({}),
        [h, m] = s.useState(0),
        f = null == n,
        p = t.questions.length,
        g = Math.min(h, p - 1),
        x = t.questions[g],
        v = s.useCallback(
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
        j = s.useCallback(
            (e) => {
                if (f) return;
                let n = { ...i, [x.id]: e };
                u(n);
                let l = (function (e, t, n) {
                    let { questions: l } = e;
                    for (let e = 1; e <= l.length; e++) {
                        let a = (n + e) % l.length,
                            s = t[l[a].id];
                        if (null == s || "" === s.text.trim()) return a;
                    }
                    return null;
                })(t, n, g);
                null == l ? v(n) : m(l);
            },
            [i, t, f, g, x.id, v],
        ),
        y = s.useCallback(() => {
            if (f || 0 === g) return;
            let e = t.questions[g - 1];
            u((t) => {
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
        w = c[x.id] ?? "",
        A = s.useCallback(() => {
            let e = w.trim();
            "" !== e && j({ kind: "custom", text: e });
        }, [w, j]),
        [S, N] = s.useState(!1),
        [E, C] = s.useState(!1);
    s.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => N(!0));
            });
        return () => {
            cancelAnimationFrame(t), cancelAnimationFrame(e);
        };
    }, []);
    let I = s.useCallback(() => {
            null != l && (C(!0), setTimeout(l, 150));
        }, [l]),
        T = s.useCallback(() => {
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
function nX(e) {
    let { line: t, placement: n, todos: l, provisionalTodo: i, agents: o } = e,
        u = null != n,
        [c, d] = s.useState(n ?? "top"),
        [h, m] = s.useState(u),
        [f, p] = s.useState(!1),
        [g, x] = s.useState(!1),
        [v, b] = s.useState(u);
    v !== u && (b(u), null != n ? (d(n), m(!0)) : (p(!1), x(!1))),
        s.useEffect(() => {
            if (u || !h) return;
            let e = setTimeout(() => m(!1), 150);
            return () => clearTimeout(e);
        }, [u, h]),
        s.useEffect(() => {
            if (!h || !u) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => p(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [h, u]);
    let [j, y] = s.useState(!1),
        [k, w] = s.useState(!1),
        [A, S] = s.useState(g);
    A !== g && (S(g), g ? y(!0) : w(!1)),
        s.useEffect(() => {
            if (g || !j) return;
            let e = setTimeout(() => y(!1), 150);
            return () => clearTimeout(e);
        }, [g, j]),
        s.useEffect(() => {
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
        E = s.useCallback(() => x((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: nK.qd,
              "data-placement": c,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: r()(nK.vK, { [nK.ho]: f && u, [nK.ET]: !u }),
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
                            children: (0, a.jsx)(tI, { todos: l, provisional: i, agents: o, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var nZ = n(366010),
    nQ = n(825484),
    nJ = n(859703),
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
        { open: i } = e,
        r =
            ((t = (0, n7.dN)()),
            (n = (0, A.bG)([nJ.A], () => nJ.A.isQuestAccessSuspended || null != nJ.A.questEnrollmentBlockedUntil, [])),
            (l = (0, A.bG)([nJ.A], () => null != nJ.A.getQuestPreviewOverride(n0.uF.QUEST_BAR_V2), [])),
            null != t && (0, n5.vv)(t)
                ? l
                    ? t.userStatus?.claimedAt != null
                        ? null
                        : t
                    : !(0, n2.s)() || n || (0, n3.Ic)(t) || t.userStatus?.completedAt != null
                      ? null
                      : t
                : null),
        [o, u] = s.useState(() => le),
        { mounted: c, closing: d } = (function (e) {
            let [t, n] = s.useState(e),
                [l, a] = s.useState(!1),
                i = s.useRef(null);
            return (
                e && (!t || l) ? (n(!0), a(!1)) : e || !t || l || a(!0),
                s.useEffect(() => {
                    if (!e && t)
                        return (
                            (i.current = setTimeout(() => {
                                (i.current = null), a(!1), n(!1);
                            }, 150)),
                            () => {
                                null != i.current && (clearTimeout(i.current), (i.current = null));
                            }
                        );
                }, [e, t, 150]),
                { mounted: t, closing: l }
            );
        })(i && !o && null != r),
        [h, m] = s.useState(r);
    null != r && r !== h && m(r);
    let p = r ?? h,
        g = (0, A.bG)([n8.A], () => n8.A.getState().theme),
        x = (0, nZ.M)(g) ? C.NJ8.DARK : C.NJ8.LIGHT,
        v = null != p ? (0, n1.tW)(p, n1.fY.GAME_TILE, x).url : null,
        j = null != v && "" !== v ? v : null,
        y = s.useCallback(async () => {
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
        k = s.useCallback(() => {
            (le = !0), u(!0);
        }, []);
    return c && null != p
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
let ls = "shownVibegrationsFeedbackProjectIds";
var li = n(348800);
let lr = [P.intl.string(R.default["E+Q26x"]), P.intl.string(R.default["06/jqP"]), P.intl.string(R.default["7MCiK9"])];
function lo(e) {
    let { projectId: t, onRegionCapture: l, restoreState: i } = e,
        r = (0, A.bG)([ep.Ay], () => ep.Ay.getMessages(t), [t]),
        o = (0, A.bG)([h.Ay], () => h.Ay.getConnState(t), [t]),
        u = (0, A.bG)([h.Ay], () => h.Ay.isChatStopped(t), [t]),
        c = (0, A.bG)([ep.Ay], () => ep.Ay.getProjectUsage(t), [t]),
        d = (0, A.bG)([ep.Ay], () => ep.Ay.getThinkingActivity(t), [t]),
        m = (0, A.bG)([ep.Ay], () => ep.Ay.isCompacting(t), [t]),
        f = (0, A.bG)([h.Ay], () => h.Ay.getModelSettings(t), [t]),
        p = s.useRef(null),
        g = s.useRef(null),
        x = s.useRef(null),
        v = s.useRef(!0),
        [b, j] = s.useState(!0);
    s.useEffect(() => {
        v.current && g.current?.scrollToBottom();
    }, [r]);
    let y = s.useCallback(() => {
        let e = g.current;
        if (null == e) return;
        let t = e.getDistanceFromBottom();
        v.current = t < 32;
        let n = t > 1;
        j((e) => (!n === e ? e : !n));
    }, []);
    s.useLayoutEffect(() => {
        let e = p.current,
            t = x.current;
        if (null == e) return;
        let n = e.getBoundingClientRect().width,
            l = t?.getBoundingClientRect().height,
            a = null;
        function s() {
            v.current &&
                (null != a && cancelAnimationFrame(a), (a = requestAnimationFrame(() => g.current?.scrollToBottom())));
        }
        let i = new ResizeObserver((t) => {
            for (let a of t)
                if (a.target === e) {
                    let e = a.contentRect.width;
                    if (e === n) continue;
                    (n = e), s();
                } else {
                    let e = a.contentRect.height;
                    if (e === l) continue;
                    (l = e), s();
                }
        });
        return (
            i.observe(e),
            null != t && i.observe(t),
            () => {
                i.disconnect(), null != a && cancelAnimationFrame(a);
            }
        );
    }, []),
        s.useEffect(() => {
            (0, h.Hc)(t);
        }, [t]),
        s.useEffect(
            () => () =>
                (function (e) {
                    let t = ep.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, ep.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((ln.w.get(ls) ?? []).includes(e) ||
                            ll.A.possiblyShowFeedbackModal(la.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = ln.w.get(ls) ?? []).includes(e) || ln.w.set(ls, [...l, e]),
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
    let k = s.useCallback(
            (e, n) => {
                (0, h.dv)(t, e, n);
            },
            [t],
        ),
        w = s.useCallback(() => (0, h.fu)(t), [t]),
        S = s.useCallback((e) => k(e.implementation_prompt), [k]),
        N = s.useCallback((e) => k(e), [k]),
        E = s.useCallback((e) => (0, h.XZ)(t, e), [t]),
        C = s.useCallback((e) => (0, h.vX)(t, e), [t]),
        I = s.useCallback((e) => (0, h.Vm)(t, e), [t]),
        T = s.useCallback(() => k(P.intl.string(R.default.Jj8Ftb)), [k]),
        _ = i?.status === "restoring",
        M = "open" === o && !u && !_,
        L = r[r.length - 1],
        O = null != L && "assistant" === L.role && null != L.proposal,
        [D, F] = s.useState(null),
        $ = L?.clarification != null && L.clarification.id !== D ? L.clarification : null,
        q = s.useCallback(() => {
            null != $ && F($.id);
        }, [$]),
        U = (0, A.bG)([ep.Ay], () => ep.Ay.hasLoadedHistory(t), [t]),
        G = s.useMemo(() => {
            let e = 0;
            for (let n = 0; n < t.length; n++) e = (31 * e + t.charCodeAt(n)) % 0x7fffffff;
            return lr[e % lr.length];
        }, [t]),
        H = O
            ? P.intl.string(R.default.Jj8Ftb)
            : L?.kind === "plan_implemented"
              ? P.intl.string(R.default["3sTTBu"])
              : U && 0 === r.length
                ? G
                : null,
        B = s.useMemo(() => {
            for (let e = r.length - 1; e >= 0; e--) {
                let t = r[e];
                if ("assistant" === t.role && !(0, ep.BL)(t)) return t;
            }
        }, [r]),
        V = null != B,
        z = O && M ? T : void 0,
        [W, Y] = s.useState(null),
        [K, X] = s.useState(V);
    K !== V && (X(V), V || Y(null)),
        s.useEffect(() => {
            if (!V) return;
            let e = p.current?.querySelector("[data-vibegrations-chat-log]"),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? Y(null)
                        : Y(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return n.observe(t), () => n.disconnect();
        }, [V, B?.steps]);
    let Z = s.useMemo(() => {
            let e, t;
            return null != B
                ? null != (t = ed((e = ec(B.steps, { turnActive: !0 })).steps))
                    ? eu(t)
                    : (e.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ??
                      P.intl.string(R.default.nv6pUM))
                : "";
        }, [B]),
        Q = s.useMemo(() => (null != B ? (ef(B.steps) ?? B.todos) : void 0), [B]),
        J = B?.provisionalTodo,
        ee = s.useMemo(() => (null != B ? t_(ec(B.steps, { turnActive: !0 }).tasks) : void 0), [B]);
    return (0, a.jsxs)("section", {
        ref: p,
        "data-vibegrations-chat": !0,
        className: li.TE,
        children: [
            (0, a.jsx)(lt, { open: null != B }),
            (0, a.jsx)(nX, {
                line: Z,
                placement: V && "top" === W ? "top" : null,
                todos: Q,
                provisionalTodo: J,
                agents: ee,
            }),
            (0, a.jsx)(er.Ch, {
                ref: g,
                onScroll: y,
                "data-vibegrations-chat-log": !0,
                className: b ? li.N$ : `${li.N$} ${li.hB}`,
                children: (0, a.jsx)(nw, { ref: x, projectId: t, messages: r, onPickIdea: M ? S : void 0 }),
            }),
            (0, a.jsxs)("div", {
                className: li.im,
                children: [
                    (0, a.jsx)(nU, {
                        projectId: t,
                        thinking: V,
                        restoring: _,
                        thinkingActivity: d,
                        compacting: m,
                        projectUsage: c,
                        connState: o,
                    }),
                    (0, a.jsxs)("div", {
                        className: li.Jx,
                        children: [
                            (0, a.jsx)(nX, {
                                line: Z,
                                placement: V && "bottom" === W ? "bottom" : null,
                                todos: Q,
                                provisionalTodo: J,
                                agents: ee,
                            }),
                            null == $
                                ? null
                                : (0, a.jsx)("div", {
                                      className: li.B5,
                                      children: (0, a.jsx)(
                                          nW,
                                          { clarification: $, onSubmit: M ? N : void 0, onDismiss: q },
                                          $.id,
                                      ),
                                  }),
                            (0, a.jsx)(tJ, {
                                canSend: M,
                                stopped: u,
                                running: V,
                                restoring: _,
                                onSend: k,
                                onInterrupt: M ? w : void 0,
                                onUploadFile: C,
                                onDeleteFile: I,
                                onApprove: z,
                                onRegionCapture: l,
                                suggestion: H,
                                questionOpen: null != $,
                                modelSettings: f,
                                onModelSettingsChange: E,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lu = n(435558),
    lc = n(661531),
    ld = n(602853),
    lh = n(517461),
    lm = n(761929),
    lf = n(927506);
function lp(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: i } = e,
        r = (0, ld.r)(lc.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = s.useRef(null),
        [u, c] = (0, lh.V)("VibegrationsChatSidebarWidth", 460),
        [d, h] = s.useState(u ?? 460),
        m = (0, lu.clamp)(d, 360, n);
    s.useLayoutEffect(() => {
        l(t ? m + r : 0);
    }, [m, t, r, l]);
    let f = (0, lm.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: c,
            orientation: lm.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        p = s.useCallback(
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
            (0, a.jsx)("div", { ref: o, className: lf.kL, style: { width: m }, children: i }),
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
let lj = s.memo(function (e) {
    let { state: t } = e,
        n = s.useRef(null),
        l = s.useRef(null),
        i = s.useRef(t);
    s.useEffect(() => {
        i.current = t;
    }, [t]),
        s.useEffect(() => {
            let e = l.current,
                t = n.current;
            if (null == e || null == t || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            let a = e.getContext("2d", { alpha: !0 });
            if (null == a) return;
            let s =
                    Number.isFinite(window.devicePixelRatio) && window.devicePixelRatio > 0
                        ? window.devicePixelRatio
                        : 1,
                r = 0,
                o = 0,
                u = [],
                c = 0,
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
                    let s = ((t + 0.5) / 8) * a;
                    j[t] = `rgba(${e}, ${n}, ${l}, ${s})`;
                }
            }
            y();
            let k = [];
            for (let e = 0; e < 8; e++) k.push([]);
            let w = new MutationObserver(y);
            w.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] });
            let A = -1;
            function S() {
                let e = Math.max(r, c);
                (e === c && A === g && u.length > 0) ||
                    ((c = e),
                    (A = g),
                    (u = (function (e, t) {
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
                    (e.width = Math.max(1, Math.floor(r * s))),
                    (e.height = Math.max(1, Math.floor(o * s))),
                    null != a && (a.setTransform(s, 0, 0, s, 0, 0), (a.imageSmoothingEnabled = !1)),
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
                for (let l = 0; l < u.length; l++) {
                    let a,
                        s = u[l],
                        i = (s.i * t) / r,
                        c = (s.j * t) / o,
                        h =
                            0.55 *
                            (function (e, t, n) {
                                let l = (e - 0.5) * n,
                                    a = 1 - t,
                                    s = 1 - Math.sqrt(l * l + a * a * 1.8);
                                return s < 0 ? 0 : s * s;
                            })(i, c, n);
                    for (let e = 0; e < d.length; e++) {
                        let t = d[e],
                            n = i - t.x,
                            l = c - t.y,
                            a = (n * n + l * l) / (t.radius * t.radius);
                        h += t.strength * Math.exp(-a) * 0.7;
                    }
                    let f = 0.1 * Math.sin(e * s.freq * 1.85 * m + s.phase),
                        p = h - (s.threshold + f);
                    1;
                    if (!(p <= -0.1)) {
                        if (p >= 0.1) a = 7;
                        else {
                            let e = (p + 0.1) / 0.2;
                            a = Math.min(7, Math.floor(e * e * (3 - 2 * e) * 8));
                        }
                        k[a].push(s);
                    }
                }
                for (let e = 0; e < 8; e++) {
                    let n = k[e];
                    if (0 !== n.length) {
                        (a.fillStyle = j[e]), a.beginPath();
                        for (let e = 0; e < n.length; e++) {
                            var l, s;
                            let i = n[e];
                            (l = i.i * t),
                                (s = i.j * t),
                                "function" == typeof a.roundRect
                                    ? a.roundRect(l, s, 4, 4, 1)
                                    : (a.moveTo(l + 1, s),
                                      a.arcTo(l + 4, s, l + 4, s + 4, 1),
                                      a.arcTo(l + 4, s + 4, l, s + 4, 1),
                                      a.arcTo(l, s + 4, l, s, 1),
                                      a.arcTo(l, s, l + 4, s, 1));
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
                    let a = lv[i.current] ?? lv.home,
                        s = 1 - Math.exp(-l / 80);
                    (h += (a.blob - h) * s), (m += (a.twink - m) * s), (f += (a.alpha - f) * s);
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
    lA = n(439108);
function lS(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function lN(e) {
    let { targetRect: t, onSelect: n, onCancel: l } = e,
        [i, r] = s.useState(null);
    s.useEffect(() => {
        function e(e) {
            "Escape" === e.key && (e.stopPropagation(), l());
        }
        return window.addEventListener("keydown", e, !0), () => window.removeEventListener("keydown", e, !0);
    }, [l]);
    let o = s.useCallback(
            (e) => ({
                x: Math.min(Math.max(e.clientX - t.left, 0), t.width),
                y: Math.min(Math.max(e.clientY - t.top, 0), t.height),
            }),
            [t],
        ),
        u = s.useCallback(
            (e) => {
                if (0 !== e.button) return;
                e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId);
                let t = o(e);
                r({ startX: t.x, startY: t.y, x: t.x, y: t.y });
            },
            [o],
        ),
        c = s.useCallback(
            (e) => {
                let t = o(e);
                r((e) => (null == e ? e : { ...e, x: t.x, y: t.y }));
            },
            [o],
        ),
        d = s.useCallback(
            (e) => {
                if (null == i) return;
                let t = o(e),
                    a = lS({ ...i, x: t.x, y: t.y });
                r(null), a.width < 8 && a.height < 8 ? l() : n(a);
            },
            [i, o, n, l],
        ),
        h = null == i ? null : lS(i);
    return (0, lw.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: lA.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: lA.aC,
                    style: { left: t.left, top: t.top, width: t.width, height: t.height },
                    role: "application",
                    "aria-label": P.intl.string(R.default["9MOgRI"]),
                    onPointerDown: u,
                    onPointerMove: c,
                    onPointerUp: d,
                    onPointerCancel: l,
                    children:
                        null == h
                            ? (0, a.jsx)("div", {
                                  className: lA.F7,
                                  children: (0, a.jsx)("div", {
                                      className: lA.aK,
                                      children: (0, a.jsx)(b.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: P.intl.string(R.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: lA.r1,
                                  style: { left: h.x, top: h.y, width: h.width, height: h.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
var lE = n(314116),
    lC = n(364522),
    lI = n(406810),
    lT = n(381849),
    l_ = n(977628);
function lR(e) {
    let t,
        { projectId: n, onClose: l, onRestore: i } = e,
        [r, u] = s.useState({ status: "loading" });
    return (
        s.useEffect(() => {
            let e = !1;
            return (
                (0, h.ST)(n)
                    .then((t) => {
                        e || u({ status: "loaded", entries: t });
                    })
                    .catch(() => {
                        e || u({ status: "failed" });
                    }),
                () => {
                    e = !0;
                }
            );
        }, [n]),
        (t =
            "loading" === r.status
                ? (0, a.jsx)("div", { className: l_.E8, children: (0, a.jsx)(m.y, {}) })
                : "failed" === r.status
                  ? (0, a.jsx)("div", {
                        className: l_.E8,
                        role: "alert",
                        children: (0, a.jsx)(b.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: P.intl.string(R.default["mSJn+K"]),
                        }),
                    })
                  : 0 === r.entries.length
                    ? (0, a.jsx)("div", {
                          className: l_.E8,
                          children: (0, a.jsx)(b.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: P.intl.string(R.default.TOmYPT),
                          }),
                      })
                    : (0, a.jsx)(lC.Ip, {
                          className: l_.p_,
                          children: (0, a.jsx)("div", {
                              className: l_.jO,
                              children: r.entries.map((e) => {
                                  let t,
                                      n = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, lT.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: lT._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, a.jsxs)(
                                      "button",
                                      {
                                          className: l_.f_,
                                          type: "button",
                                          onClick: () =>
                                              (0, lE.A)({
                                                  title: P.intl.string(R.default.qOUOPE),
                                                  subtitle: P.intl.string(R.default.k2JBj5),
                                                  confirmText: P.intl.string(R.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      l(), i(e);
                                                  },
                                              }),
                                          children: [
                                              (0, a.jsx)(b.E, {
                                                  variant: "text-md/medium",
                                                  className: l_.bc,
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
            className: l_.nd,
            "aria-label": P.intl.string(R.default.jAWwzi),
            children: [
                (0, a.jsxs)(c.Ay, {
                    "aria-label": P.intl.string(R.default.jAWwzi),
                    toolbar: (0, a.jsx)(c.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l }),
                    children: [
                        (0, a.jsx)(c.Ay.ChannelIcon, { icon: lI.ClockIcon, "aria-hidden": !0 }),
                        (0, a.jsx)(c.Ay.Title, { children: P.intl.string(R.default.jAWwzi) }),
                    ],
                }),
                (0, a.jsx)("div", { className: l_.rf, children: t }),
            ],
        })
    );
}
var lP = n(120426),
    lM = n(873727),
    lL = n(147248),
    lO = n(418842),
    lD = n(885386),
    lF = n(940107),
    l$ = n(171936);
function lq(e) {
    let {
            projectId: t,
            applicationId: n,
            surface: l,
            previewReady: i,
            header: o,
            mainClassName: c,
            content: d,
            sidebar: h,
        } = e,
        [m, f] = s.useState(null),
        p = (0, u.A)(n, l),
        g = p?.id ?? null;
    !(function (e, t) {
        let n = (0, A.bG)([n8.A], () => (0, lM.x4)(n8.A.theme)),
            l = (0, A.bG)([lL.A], () => lL.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: i,
                highContrast: r,
                forcedColors: o,
                underlineLinks: u,
            } = (0, A.cf)([tW.Ay], () => ({
                reducedMotion: tW.Ay.useReducedMotion,
                fontScale: (0, lM.U0)(),
                highContrast: tW.Ay.isHighContrastModeEnabled,
                forcedColors: tW.Ay.useForcedColors,
                underlineLinks: tW.Ay.alwaysShowLinkDecorations,
            })),
            c = lD.hH.useSetting(),
            d = (0, lO.C)(),
            h = s.useRef(!1),
            m = s.useRef(!1),
            f = s.useRef(0),
            p = s.useRef(null),
            g = s.useCallback(() => {
                let l = (0, lP.F1)(e, t);
                if (null == l) return;
                p.current = l;
                let s = {
                    revision: ++f.current,
                    baseTheme: n,
                    customTheme: (0, lM.Lq)(),
                    uiDensity: d,
                    messageDisplayCompact: c,
                    fontScale: i,
                    reducedMotion: a,
                    highContrast: r,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, lF.W)(l, "set-env", s, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, i, t, r, c, e, a, d, u]),
            x = s.useRef(g);
        s.useLayoutEffect(() => {
            x.current = g;
        });
        let v = s.useCallback(() => {
            h.current ||
                ((h.current = !0),
                queueMicrotask(() => {
                    (h.current = !1), m.current || x.current();
                }));
        }, []);
        s.useEffect(
            () => (
                (m.current = !1),
                () => {
                    m.current = !0;
                }
            ),
            [],
        ),
            s.useEffect(() => {
                v();
            }, [l, v]),
            s.useLayoutEffect(() => {
                g(), v();
            }, [v, g]),
            s.useLayoutEffect(() => {
                let n = (0, lP.F1)(e, t);
                null != n && n !== p.current && v();
            }),
            s.useEffect(() => {
                function n(n) {
                    n.target === (0, lP.F1)(e, t) && ((p.current = null), v());
                }
                return document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0);
            }, [t, e, v]),
            s.useEffect(() => {
                let e = new MutationObserver(v);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [v]);
    })(m, g);
    let [x, v] = s.useState(null);
    s.useEffect(() => {
        if (null != t) return (0, l$.mn)(t, () => (0, lP.F1)(m, g));
    }, [t, m, g]);
    let b = s.useCallback(() => {
            let e = (0, lP.F1)(m, g),
                t = e?.getBoundingClientRect();
            return null == e || null == t || t.width < 1 || t.height < 1
                ? Promise.reject(Error("no visible preview to capture"))
                : new Promise((n, l) => {
                      v({
                          targetRect: { left: t.left, top: t.top, width: t.width, height: t.height },
                          iframe: e,
                          resolve: n,
                          reject: l,
                      });
                  });
        }, [m, g]),
        j = s.useCallback(
            (e) => {
                v(null), null != x && (0, lP.su)(x.iframe, e).then(x.resolve, x.reject);
            },
            [x],
        ),
        y = s.useCallback(() => {
            v(null), x?.resolve(null);
        }, [x]),
        k = i && null != n && l.type === E.U4.MAIN;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: r()(es.Mh, c),
                children: [o, (0, a.jsx)("div", { ref: f, className: es.fm, children: d })],
            }),
            h(k ? b : void 0),
            null != x ? (0, a.jsx)(lN, { targetRect: x.targetRect, onSelect: j, onCancel: y }) : null,
        ],
    });
}
function lU(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            surface: i,
            header: u,
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
        w = s.useRef(null),
        [A, S] = s.useState(0);
    s.useLayoutEffect(() => {
        if (i.type === E.U4.MAIN) return (0, d.HV)(n), () => (0, d.HV)(null);
    }, [n, i.type]),
        s.useEffect(() => {
            null != t && (0, h.Hc)(t);
        }, [t]),
        s.useLayoutEffect(() => {
            let e = w.current;
            if (null == e) return;
            function t() {
                null != e && S(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        s.useEffect(() => () => (0, d.Zq)(0), []);
    let N = Math.max(360, A - 320),
        C = null != k ? k.open : m,
        I = m || i.type === E.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: w,
        className: es.LB,
        children: (0, a.jsx)(lq, {
            projectId: t,
            applicationId: n,
            surface: i,
            previewReady: b,
            header: u,
            mainClassName: null == u ? void 0 : r()(es.ez, { [es.zt]: C }),
            content: (0, a.jsx)(ee, {
                applicationId: n,
                previewApplicationId: l,
                surface: i,
                previewReady: b,
                previewGate: j,
                previewMode: y,
            }),
            sidebar: (e) =>
                null != k
                    ? (0, a.jsx)(lp, {
                          open: k.open,
                          maxWidth: N,
                          onWidthChange: d.Zq,
                          children: k.open
                              ? (0, a.jsx)(ei, { channel: k.channel, guild: k.guild, onClose: k.onClose })
                              : null,
                      })
                    : null != t && I
                      ? (0, a.jsx)(lp, {
                            open: m,
                            maxWidth: N,
                            onWidthChange: d.Zq,
                            children: (0, a.jsx)("div", {
                                className: es.cO,
                                children: p
                                    ? (0, a.jsx)(
                                          lR,
                                          { projectId: t, onClose: g ?? (() => {}), onRestore: x ?? (() => {}) },
                                          t,
                                      )
                                    : (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(lk, { projectId: t }),
                                              (0, a.jsx)(c.Ay, {
                                                  "aria-label": P.intl.string(P.t["/VQax8"]),
                                                  toolbar:
                                                      null == f
                                                          ? null
                                                          : (0, a.jsx)(c.Ay.Icon, {
                                                                icon: o.P,
                                                                tooltip: P.intl.string(R.default.YdgE0j),
                                                                onClick: f,
                                                            }),
                                                  children: (0, a.jsx)(c.Ay.Title, {
                                                      children: P.intl.string(P.t["/VQax8"]),
                                                  }),
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: es.cb,
                                                  children: (0, a.jsx)(
                                                      lo,
                                                      { projectId: t, onRegionCapture: e, restoreState: v },
                                                      t,
                                                  ),
                                              }),
                                          ],
                                      }),
                            }),
                        })
                      : null,
        }),
    });
}
