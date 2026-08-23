n.d(t, { A: () => lB });
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
    y = n(625180),
    j = n(91242),
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
    P = n(295813),
    R = n(375708),
    M = n(296167);
function L(e) {
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
                    children: R.intl.string(P.default.jTuX7C),
                }),
            ],
        })
    );
}
var O = n(328284);
function D(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
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
                        s = (0, A.bG)([j.A], () => j.A.getFrame(l), [l]),
                        r = (0, A.bG)(
                            [N.A, j.A],
                            () => N.A.getWindowOpen(C.MLl.ACTIVITY_POPOUT) && j.A.getMainFrame()?.id === l,
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
                            await y.A.launchFrame({ applicationId: t, surface: l });
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
                null == (e = j.A.getFrame(r)) ||
                    j.A.getMainFrame()?.id !== r ||
                    N.A.getWindowOpen(C.MLl.ACTIVITY_POPOUT) ||
                    (e.intent === E.sV.MAIN ? y.A.resetFrameLayoutModes(r) : y.A.clearMainFrameSlot()),
                () => {
                    let e;
                    null != (e = j.A.getFrame(r)) &&
                        ((0, E.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        T.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === E.sV.INLINE && y.A.promoteFrame(r),
                              y.A.updateFrameLayoutMode({ frameId: r, layoutMode: E.y0.PIP }))
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
                    title: R.intl.string(P.default["4f6Vkr"]),
                    body: R.intl.string(P.default.LJ2q1H),
                }),
            });
        case I.NoApplication:
            return (0, a.jsx)(L, { className: F.qs });
        case I.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: F.qs,
                children: (0, a.jsx)(D, {
                    title: R.intl.string(P.default.FHOJiH),
                    body: R.intl.string(P.default["1yLQoV"]),
                }),
            });
        case I.Error:
            return (0, a.jsxs)("div", {
                className: F.qs,
                children: [
                    (0, a.jsx)(v.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: R.intl.string(P.default.MeLWCr),
                    }),
                    (0, a.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: F.tj,
                        children: R.intl.string(P.default["1RCbQT"]),
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
        ? (0, a.jsx)(X, {})
        : null == o || h
          ? (0, a.jsx)(K, { message: R.intl.string(P.default.bl4eBc) })
          : null == c
            ? (0, a.jsx)(X, {})
            : (0, a.jsx)("div", {
                  className: Y.g,
                  children: (0, a.jsx)(H.A, { channel: c, guild: null, chatInputType: B.oU.SIDEBAR }, c.id),
              });
}
var J = n(250872),
    Q = n(976102);
function ee(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            previewReady: s,
            previewGate: r,
            previewMode: o = J.VW.ACTIVITY,
        } = e,
        u = (0, c.A)(t, l),
        { data: d, isLoading: h } = (0, p.YY)(t ?? void 0),
        { data: v } = (0, p.YY)(n ?? void 0),
        b = null != d && (0, g.x)(d),
        y = null != n && v?.bot?.id != null;
    return (i.useEffect(() => {
        r?.type === "permissions" && null != u && (0, x.A)().leaveFrame(u.id);
    }, [u, r?.type]),
    r?.type === "checking")
        ? (0, a.jsx)("div", { className: Q.q, children: (0, a.jsx)(m.y, {}) })
        : r?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: Q.q,
                children: (0, a.jsx)(D, {
                    wide: !0,
                    title: R.intl.string(P.default.DYwf2n),
                    body: R.intl.string(P.default.WWj3pN),
                    children: (0, a.jsx)(f.$, {
                        variant: "primary",
                        size: "md",
                        text: R.intl.string(P.default["CRfE/E"]),
                        onClick: r.onReviewPermissions,
                        loading: r.loading,
                    }),
                }),
            })
          : s
            ? null == t
                ? null
                : h
                  ? (0, a.jsx)("div", { className: Q.q, children: (0, a.jsx)(m.y, {}) })
                  : b && y && null != n
                    ? (0, a.jsx)("div", {
                          className: Q.m,
                          role: "tabpanel",
                          id: (0, J.z3)(o),
                          "aria-label": (0, J.kZ)(o),
                          children:
                              o === J.VW.ACTIVITY
                                  ? (0, a.jsx)($, { applicationId: t, surface: l })
                                  : (0, a.jsx)(Z, { previewApplicationId: n }),
                      })
                    : null == d || (0, g.x)(d) || null == n
                      ? (0, a.jsx)($, { applicationId: t, surface: l })
                      : (0, a.jsx)(Z, { previewApplicationId: n })
            : (0, a.jsx)(L, { className: Q.q });
}
var et = n(534890),
    en = n(738876),
    el = n(47167),
    ea = n(31717),
    ei = n(372054);
function es(e) {
    let { channel: t, guild: n, onClose: l } = e,
        i = (0, el.Ay)(t),
        s = (0, a.jsx)(u.Ay.Icon, { icon: o.P, tooltip: R.intl.string(R.t.cpT0Cq), onClick: l });
    return (0, a.jsxs)("div", {
        className: ei.Wx,
        children: [
            (0, a.jsx)(en.A, { channel: t, draftType: ea.C.ChannelMessage }),
            (0, a.jsxs)(u.Ay, {
                toolbar: s,
                "aria-label": R.intl.string(R.t.BIYAqa),
                children: [
                    (0, a.jsx)(u.Ay.ChannelIcon, { icon: et.ChatIcon, "aria-label": R.intl.string(R.t["/VQax8"]) }),
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
    assembling: P.default["9G3ZmA"],
    installing_deps: P.default.VZuRug,
    building: P.default["s+ylXP"],
    bundling: P.default.rEQlMx,
    committing: P.default.Yvyw1H,
    built: P.default.hOcVAj,
    build_error: P.default["6L9Vwt"],
    healthchecking: P.default.sz8yAj,
    awaiting_auth: P.default["orD+xo"],
    healthcheck_passed: P.default["x+sqTG"],
    healthcheck_failed: P.default.FUWbq1,
    deploying: P.default.wcXX8Z,
    preview_ready: P.default["78YNh7"],
    working: P.default.nv6pUM,
    error: P.default.j3hBoA,
};
function ec(e) {
    if (null != e.labelText && "" !== e.labelText) return e.labelText;
    let t = null != e.labelKey ? eo[e.labelKey] : void 0;
    return R.intl.string(t ?? P.default.nv6pUM);
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
    ey = n(939249);
let ej = i.createContext(0);
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
        p = i.useContext(ej),
        g = i.useId(),
        x = i.useCallback(() => f((e) => !e), []),
        { text: v, phase: y } = (function (e) {
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
        j = m ? ev.a : eb._,
        k = null != c,
        w = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: eg.hd, children: t }),
                (0, a.jsx)(b.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: r()(eg.qo, { [eg._q]: "exit" === y, [eg.GD]: "enter" === y }),
                    children: v,
                }),
                k ? (0, a.jsx)(j, { size: "xs", color: "currentColor", className: eg.nD }) : null,
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
                ? (0, a.jsx)(ey.D, {
                      tag: "div",
                      className: r()(eg.ep, eg.EK),
                      "aria-expanded": m,
                      "aria-controls": g,
                      "aria-label": R.intl.formatToPlainString(P.default.s1wx5H, { activity: v }),
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
    return (0, a.jsx)(ey.D, {
        className: r()(eN(!0), eS.w8),
        onClick: i,
        "aria-label": l,
        children: eE({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
let eT = /^(.*?)\s*\((\+\d+)?[\s,]*([\u2212-]\d+)?\)$/,
    e_ =
        /^(.*?)\s*\((\d+ lines?|\d+ match(?:es)?|no matches|\d+ files?|empty|no logs yet|\d+ not found(?:, \d+ read-only)?|\d+ read-only|\d+KB|\d+ steps?)\)$/,
    eP =
        /^(Reading|Writing|Editing|Listing|Searching|Deleting|Running|Downloading|Saving|Sending|Importing|Imported|Building|Viewing|Loaded|Updating|Registering|Collecting|Clicking|Right-clicking|Double-clicking|Typing|Pressing|Hovering|Scrolling|Selecting|Waiting|Navigating|Going|Reloading|Capturing|Checking|Setting|Delegating|Driving|Working)(?= )/,
    eR = {
        "text-xs/normal": "text-xs/semibold",
        "text-sm/normal": "text-sm/semibold",
        "text-md/normal": "text-md/semibold",
    };
function eM(e, t) {
    let n = eP.exec(e);
    return null == n
        ? e
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(b.E, { tag: "span", variant: eR[t], color: "none", children: n[1] }),
                  e.slice(n[1].length),
              ],
          });
}
function eL(e) {
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
var eO = n(229775);
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
        x = r()(eg.iq, { [eO.Hz]: s && p }),
        v = "detail" === l ? "text-md/normal" : "text-sm/normal",
        y = "detail" === l ? "text-sm/normal" : "text-xs/normal",
        j = null != t ? n.screenshots : [];
    if (0 === m.length && 0 === j.length)
        return (0, a.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: eg.Dx,
            children: (0, a.jsx)(b.E, {
                tag: "div",
                variant: v,
                color: g,
                selectable: !0,
                className: x,
                children: (0, a.jsx)(eL, { text: h, variant: v, prose: !0 }),
            }),
        });
    let k = o ? ev.a : eb._;
    return (0, a.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: eg.Dx,
        children: [
            (0, a.jsxs)(ey.D, {
                tag: "div",
                className: eg.kG,
                "aria-expanded": o,
                "aria-controls": u,
                "aria-label": R.intl.formatToPlainString(P.default.z4KWsN, { step: h }),
                onClick: d,
                children: [
                    (0, a.jsx)(b.E, {
                        tag: "span",
                        variant: v,
                        color: g,
                        className: x,
                        children: (0, a.jsx)(eL, { text: h, variant: v, prose: !0 }),
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
                                variant: y,
                                color: s && p ? "none" : "text-muted",
                                selectable: !0,
                                className: r()({ [eO.Hz]: s && p }),
                                children: (0, a.jsx)(eL, { text: e, variant: y }),
                            },
                            t,
                        ),
                    ),
                    null != t && j.length > 0
                        ? (0, a.jsx)("div", {
                              className: eg.y8,
                              children: j.map((e) => (0, a.jsx)(e$, { projectId: t, screenshotId: e }, e)),
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
    let c = R.intl.string(P.default["3Hq9pQ"]),
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
                      if (t < 60) return R.intl.formatToPlainString(P.default["49T8W0"], { count: t });
                      let n = Math.round(t / 60);
                      return n < 60
                          ? R.intl.formatToPlainString(P.default.NkZO2t, { count: n })
                          : R.intl.formatToPlainString(P.default["2qYUUZ"], {
                                hours: Math.floor(n / 60),
                                minutes: n % 60,
                            });
                  })(u)
                : null != c
                  ? ec(c)
                  : (l ?? R.intl.string(P.default.nv6pUM)),
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
    return (0, a.jsxs)(ey.D, {
        className: r()(eW.nM, { [eW.f1]: o, [eW.CZ]: n }),
        onClick: o ? void 0 : () => l(t),
        "aria-label": R.intl.formatToPlainString(P.default.pztRGi, { title: t.title }),
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
        title: R.intl.string(P.default.DAvYsi),
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
var eX = n(673724),
    eZ = n(375068);
function eJ(e) {
    let { projectId: t, attachments: n } = e,
        l = n.filter(eQ),
        [s, r] = i.useState(() => new Set()),
        o = i.useCallback((e) => {
            r((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, a.jsx)("div", {
        className: eZ.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(e0, { name: e.name }, n)
                : eQ(e)
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
function eQ(e) {
    return null != e.id && eX.Wb.has(e.content_type);
}
function e0(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? R.intl.formatToPlainString(P.default.OBr7WW, { name: t }) : t;
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
              ariaLabel: R.intl.formatToPlainString(P.default.gV5YcR, { name: l }),
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
              ariaLabel: R.intl.formatToPlainString(P.default.QUFLUq, { name: c }),
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
function e7(e) {
    let { label: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: e3.uW,
        children: [(0, a.jsx)(b.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }), n],
    });
}
function e5(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(e7, {
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
                children: R.intl.string(t ? R.t.IC5Ann : P.default.oNtdYP),
            }),
        ],
    });
}
function e8(e) {
    let { proposal: t } = e;
    return (0, a.jsx)(ez, {
        title: R.intl.string(P.default["60htw+"]),
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
                    ? (0, a.jsx)(e7, {
                          label: R.intl.string(P.default.KLyB8Y),
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
                    ? (0, a.jsx)(e7, {
                          label: R.intl.string(R.t["0hKkS+"]),
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
                (0, a.jsx)(e5, { label: R.intl.string(P.default.ieqTtP), names: t.bot_permissions ?? [] }),
                (0, a.jsx)(e5, { label: R.intl.string(P.default.Cn9qix), names: t.privileged_intents ?? [] }),
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
                children: R.intl.string(P.default["/e28TK"]),
            }),
            (0, a.jsx)(b.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : R.intl.string(P.default.jxvtin),
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
                    text: R.intl.string(P.default["gVV+HX"]),
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
                children: R.intl.string(P.default.wgDhiQ),
            }),
            (0, a.jsx)(b.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != n.note && "" !== n.note ? n.note : R.intl.string(P.default["V+DBhs"]),
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
                    text: R.intl.string(P.default["KO2xN+"]),
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
        { key: "snail", Illocon: ti, tint: "var(--illo-yellow-40)", name: tv(P.default["2l3AEQ"]) },
        { key: "goat", Illocon: ts, tint: "var(--illo-orange-40)", name: tv(P.default["+FPL+I"]) },
        { key: "frog", Illocon: tr, tint: "var(--illo-green-40)", name: tv(P.default.w4GOfR) },
        { key: "bunny", Illocon: to, tint: "var(--illo-pink-40)", name: tv(P.default.XmZT9M) },
        { key: "cat", Illocon: tc, tint: "var(--illo-pink-40)", name: tv(P.default.NnydwQ) },
        { key: "caterpillar", Illocon: tu, tint: "var(--illo-green-40)", name: tv(P.default["4iXcNT"]) },
        { key: "butterfly", Illocon: td, tint: "var(--illo-purple-40)", name: tv(P.default.DoTGt5) },
        { key: "dog", Illocon: th, tint: "var(--illo-yellow-40)", name: tv(P.default["9zxqmP"]) },
        { key: "spider", Illocon: tm, tint: "var(--illo-orange-40)", name: tv(P.default.HF0T3L) },
        { key: "bee", Illocon: tf, tint: "var(--illo-yellow-40)", name: tv(P.default.XTzDga) },
        { key: "bot", Illocon: tp, tint: "var(--illo-purple-40)", name: tv(P.default.abtC2b) },
    ];
}
function tx(e) {
    return tg().find((t) => t.key === e);
}
function tv(e) {
    return R.intl.string(e);
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
var ty = n(683063);
function tj(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : R.intl.string(P.default.MdXWEK);
}
function tk(e) {
    let { lane: t, Illocon: n, tint: l, name: i, connectsDown: s } = e,
        r = t.task,
        o = "running" === r.status,
        c = ed(t.steps),
        u = o
            ? null != c
                ? ec(c)
                : tj(r)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(tj(e));
                  switch (e.status) {
                      case "failed":
                          return R.intl.formatToPlainString(P.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return R.intl.formatToPlainString(P.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return R.intl.formatToPlainString(P.default.vuv9bT, {
                                  task: t,
                                  duration: (function (e) {
                                      let t = Math.max(1, Math.round(e / 1e3));
                                      if (t < 60) return R.intl.formatToPlainString(P.default.RsOwXc, { count: t });
                                      let n = Math.round(t / 60);
                                      return n < 60
                                          ? R.intl.formatToPlainString(P.default["z+U4YX"], { count: n })
                                          : R.intl.formatToPlainString(P.default["7Q/vz0"], {
                                                hours: Math.floor(n / 60),
                                                minutes: n % 60,
                                            });
                                  })(e.durationMs),
                              });
                          return R.intl.formatToPlainString(P.default.KS49RN, { task: t });
                      default:
                          return R.intl.formatToPlainString(P.default.KS49RN, { task: t });
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
                                      children: (0, a.jsx)(eL, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  });
    return (0, a.jsx)(ek, {
        glyph: (0, a.jsx)(ty.u, {
            asset: (0, a.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: tj(r),
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
                    return R.intl.string(P.default.TkPGOH);
                case "in_progress":
                    return R.intl.string(P.default["oK+fmd"]);
                default:
                    return R.intl.string(P.default.d7lieu);
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
              title: R.intl.string(P.default.qCRC6c),
              trailing: (0, a.jsx)(b.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: R.intl.formatToPlainString(P.default.bQvqly, { completed: s, total: r }),
              }),
              className: tA.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  i
                      ? (0, a.jsx)(tw.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: R.intl.formatToPlainString(P.default["QG/EiF"], { completed: s, total: r }),
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
function tP(e) {
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
                line: R.intl.string(P.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let x = l ? void 0 : (f ?? (h ? (p.turn?.durationMs ?? s) : void 0)),
        v = d ? (ef(n) ?? o ?? null) : null,
        b = null != v && v.length > 0;
    if (0 === g.steps.length && 0 === g.tasks.length && !b) return null;
    let y = g.tasks,
        j = tb(y.map((e) => e.taskId)),
        k = !m && (l || y.some((e) => "running" === e.task.status)),
        w = t_(y);
    return (0, a.jsx)(ej.Provider, {
        value: y.length,
        children: (0, a.jsxs)("ol", {
            className: eg.pj,
            "data-live": k,
            children: [
                (0, a.jsx)(eq, {
                    projectId: t,
                    steps: g.steps,
                    fallbackLabel: y.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: l,
                    closed: m,
                    durationMs: x,
                    connectsDown: y.length > 0,
                }),
                y.map((e, t) => {
                    let n = null != e.task.helperMark ? tx(e.task.helperMark) : void 0,
                        l = n ?? j.get(e.taskId);
                    return null == l
                        ? null
                        : (0, a.jsx)(
                              tk,
                              {
                                  lane: e,
                                  Illocon: l.Illocon,
                                  tint: l.tint,
                                  name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                                  connectsDown: t < y.length - 1,
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
function tR(e) {
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
            attachmentsHost: y,
        } = i.useMemo(
            () => eH({ steps: n, content: l, hasProposal: null != s, hasAttachments: null != c && c.length > 0 }),
            [n, l, s, c],
        ),
        j = null == c ? null : (0, a.jsx)(eJ, { projectId: t, attachments: c }),
        k = null == j ? null : (0, a.jsx)("div", { className: eg.MT, children: j }),
        w = f
            ? (0, a.jsx)(b.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: R.intl.string(P.default.OAjkIT),
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
                                          "streamed" === y && e === x ? k : null,
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
                        className: r()(eg.ky, eO.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: r()(tT.PT, eg.cW),
                                children: eG.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === y ? k : null,
                            w,
                        ],
                    })
                  : null,
            null != u
                ? (0, a.jsx)("div", {
                      className: r()(eg.ky, eO.XR),
                      children: (0, a.jsx)(tt, { projectId: t, request: u }),
                  })
                : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: r()(eg.ky, eO.XR),
                      children: (0, a.jsx)(ta, { projectId: t, request: d }),
                  })
                : null,
            "standalone" === y ? j : null,
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
    let u = "exit" === s ? tK.t0 : "enterStart" === s ? tK.Rj : "";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { className: `${tK.xM} ${tK.nT} ${u}`, children: n }),
            (0, a.jsx)(tM.e, { shortcut: "tab", className: `${tK.xT} ${tK.nT} ${u}`, keyClassName: tK.IS }),
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
            onRegionCapture: h,
            onImport: f,
            suggestion: p,
            questionOpen: g = !1,
            modelSettings: x,
            onModelSettingsChange: v,
        } = e,
        [b, y] = i.useState(""),
        j = (0, A.bG)([tW.Ay], () => tW.Ay.isSubmitButtonEnabled),
        [k, w] = i.useState([]),
        [S, N] = i.useState(!1),
        [E, C] = i.useState(!1),
        [I, T] = i.useState(!1);
    i.useEffect(() => {
        l || T(!1);
    }, [l]);
    let _ = i.useRef(null),
        M = i.useRef([]),
        L = i.useRef(new Set()),
        O = i.useRef(u);
    O.current = u;
    let D = i.useCallback((e) => {
            (M.current = e), w(e);
        }, []),
        F = i.useCallback((e) => {
            O.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    i.useEffect(() => {
        let e = L.current;
        return () => {
            for (let t of M.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && F(t.ref);
        };
    }, [F]);
    let $ = i.useCallback(
            (e, t) => {
                if (L.current.has(e)) return;
                let n = M.current;
                n.some((t) => t.localId === e) && D(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [D],
        ),
        q = i.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...M.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++tJ,
                        i = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= tX) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: R.intl.formatToPlainString(P.default.DlX57a, { count: tX }),
                        });
                        continue;
                    }
                    if (!(0, eX.x5)(l.size, e)) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: R.intl.formatToPlainString(P.default.cI7t94, {
                                size: (0, eX.ZJ)((0, eX.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let s = eX.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...i, previewUrl: s }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: l } of (D(t), n))
                    c(e).then(
                        (e) => {
                            L.current.has(l) ? F(e) : $(l, { status: "ready", ref: e });
                        },
                        (e) => {
                            L.current.has(l) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                $(l, { status: "error", errorText: R.intl.string(P.default.GwEHvn) }));
                        },
                    );
            },
            [F, c, $, D],
        ),
        U = i.useCallback(async () => {
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
                                localId: ++tJ,
                                name: "preview-capture.png",
                                size: 0,
                                contentType: "image/png",
                                status: "error",
                                errorText: R.intl.string(P.default["4DQd7d"]),
                            },
                        ]);
                } finally {
                    C(!1);
                }
            }
        }, [h, E, q, D]),
        G = i.useCallback(
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
        z = i.useCallback(() => {
            if (!V) return;
            let e = M.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (r(b, e.length > 0 ? e : void 0), M.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            y(""), D([]);
        }, [V, b, r, D]),
        W = i.useCallback(
            (e) => {
                e.preventDefault(), z();
            },
            [z],
        ),
        Y = i.useCallback(() => {
            null == o || I || (T(!0), o());
        }, [o, I]),
        K = null == p || "" !== b || !t || n || s ? null : p,
        X = i.useCallback(
            (e) => {
                if ("Escape" === e.key && l && null != o && !I) {
                    e.preventDefault(), e.stopPropagation(), Y();
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != K) {
                    e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), y(K);
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != d && (e.preventDefault(), d());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), z());
            },
            [z, d, l, o, I, Y, K],
        ),
        Z = i.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), q(n));
            },
            [t, q],
        ),
        J = i.useCallback(
            (e) => {
                e.preventDefault(), N(!1), t && q(Array.from(e.dataTransfer.files));
            },
            [t, q],
        ),
        Q = i.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), N(!0));
        }, []),
        ee = i.useCallback(
            (e) => {
                q(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [q],
        ),
        et = i.useRef(null),
        en = i.useRef(null),
        [el, ea] = i.useState(0),
        [ei, es] = i.useState(!1);
    i.useEffect(() => {
        if (0 === b.length) return void es(!1);
        let e = et.current?.querySelector("textarea");
        if (null != e) {
            let t = t2(e);
            null != t && ea(t);
        }
        es(!0);
        let t = setTimeout(() => es(!1), t0);
        return () => clearTimeout(t);
    }, [b]);
    let er = i.useMemo(() => ({ "--custom-glow-x": `${el}px` }), [el]),
        eo = ei ? ` ${tK.EB}` : "",
        ec = null != K;
    return (0, a.jsxs)("form", {
        onSubmit: W,
        onDrop: J,
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
            (0, a.jsx)("span", { className: `${tK.wg} ${tK.LP}${eo}`, style: er, "aria-hidden": !0 }),
            (0, a.jsx)("span", { className: `${tK.wg} ${tK.L3}${eo}`, style: er, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: tK.VA,
                ref: et,
                children: [
                    (0, a.jsx)("input", {
                        ref: _,
                        type: "file",
                        multiple: !0,
                        onChange: ee,
                        className: tK.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(tL.Y, {
                        targetElementRef: en,
                        position: "top",
                        align: "left",
                        animation: tL.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, a.jsx)(tO.W, {
                                "data-menu-migrated": !0,
                                navId: "vibegrations-composer-attach",
                                "aria-label": R.intl.string(R.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, a.jsxs)(tD.rX, {
                                    children: [
                                        (0, a.jsx)(tD.Dr, {
                                            id: "upload-file",
                                            label: R.intl.string(R.t["d3+iYs"]),
                                            iconLeft: tF.H,
                                            leadingAccessory: { type: "icon", icon: tF.H },
                                            action: () => _.current?.click(),
                                        }),
                                        null != f
                                            ? (0, a.jsx)(tD.Dr, {
                                                  id: "import-project",
                                                  label: R.intl.string(P.default.edKajy),
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
                                ref: en,
                                type: "button",
                                className: `${tK.Y0} ${tK.nu}`,
                                disabled: !t,
                                "aria-label": R.intl.string(R.t.d56gCa),
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
                    null == K
                        ? null
                        : (0, a.jsx)("div", {
                              className: tK.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(tZ, { text: K }),
                          }),
                    (0, a.jsx)(tU.y, {
                        value: b,
                        onChange: (e) => y(e.currentTarget.value),
                        onKeyDown: X,
                        onPaste: Z,
                        placeholder: s
                            ? R.intl.string(P.default.pGFXZ0)
                            : n
                              ? R.intl.string(P.default.JeM47J)
                              : t
                                ? ec
                                    ? ""
                                    : g
                                      ? R.intl.string(P.default.M3ovXY)
                                      : R.intl.string(l ? P.default["67PpcP"] : P.default.ahRdoJ)
                                : R.intl.string(P.default.nm4w9P),
                        disabled: !t,
                        "aria-label": R.intl.string(P.default.OPr66w),
                        rows: 1,
                        className: tK.jp,
                    }),
                    (0, a.jsxs)("div", {
                        className: tK.Sz,
                        children: [
                            (0, a.jsx)(tG.m, {
                                text: R.intl.string(P.default.B5gWPk),
                                ariaHidden: !0,
                                children: (0, a.jsx)("button", {
                                    type: "button",
                                    className: tK.Y0,
                                    disabled: null == h || !t || E,
                                    onClick: U,
                                    "aria-label": R.intl.string(P.default.B5gWPk),
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
                                      text: R.intl.string(P.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: tK.AW,
                                          disabled: I,
                                          onClick: Y,
                                          "aria-label": R.intl.string(P.default.KdgI4k),
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
                    j
                        ? (0, a.jsxs)("div", {
                              className: tK.fF,
                              children: [
                                  (0, a.jsx)("div", { className: tK.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: tK.rt,
                                      disabled: !V,
                                      "aria-label": R.intl.string(P.default["22GHMt"]),
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
                "aria-label": R.intl.string(P.default["3HWvgk"]),
                children: (0, a.jsx)(tz.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
t2.mirror = null;
var t3 = n(287809),
    t7 = n(320095),
    t5 = n(963852),
    t4 = n(521981),
    t8 = n(763754),
    t9 = n(491182),
    ne = n(622868),
    nt = n(308334),
    nn = n(837528),
    nl = n(375199),
    na = n(715628),
    ni = n(752636),
    ns = n(9842),
    nr = n(589022),
    no = n(95701),
    nc = n(994500),
    nu = n(967198),
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
        l = i.useMemo(() => ({ message: e, channel: nh, compact: !1 }), [e]);
    return "" !== t ? (0, na.A)(l, n) : null;
}
function nx(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        s = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        r = (0, nn.m)(e, nh, t.usernameProfile, l),
        o = (0, nn.Jo)(t.avatarProfile, l),
        c = (0, A.bG)([nu.A], () => nu.A.getGuildId()),
        u = (0, A.bG)([t3.default], () => t3.default.getCurrentUser()),
        d = i.useCallback(
            (t) => {
                let n = t3.default.getUser(e.author.id) ?? e.author;
                return null == u ? null : (0, a.jsx)(nr.A, { ...t, user: n, currentUser: u, guildId: c ?? void 0 });
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
function nv(e) {
    let { baseMessage: t, referenced: n, onJumpToReplied: l } = e,
        s = i.useMemo(
            () => ("" !== n.content ? (0, t4.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null),
            [n],
        ),
        { isReplyAuthorBlocked: r, isReplyAuthorIgnored: o } = (0, A.cf)(
            [nc.A],
            () => ({
                isReplyAuthorBlocked: nc.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: nc.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        c = (0, t8.X4)(n),
        u = (0, t8.X4)(t),
        d = nx(n);
    return (0, a.jsx)(nt.A, {
        repliedAuthor: c,
        baseAuthor: u,
        baseMessage: t,
        channel: nh,
        referencedMessage: { state: ns.a.LOADED, message: n },
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
function ny(e) {
    let { content: t, createdAt: n, userId: l, accessories: s, groupStart: r } = e,
        o = (0, A.bG)([t3.default], () => (null != l ? t3.default.getUser(l) : null) ?? t3.default.getCurrentUser(), [
            l,
        ]),
        c = i.useMemo(() => (0, t8.FT)(o, null), [o]),
        u = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, t5.Ay)({ channelId: nh.id, content: t, author: o });
            return (0, t7.rh)({ ...e, timestamp: np(n, e.timestamp), state: C.cmJ.SENT });
        }, [t, o, n]);
    return null == u ? null : (0, a.jsx)(nj, { message: u, author: c, content: t, accessories: s, groupStart: r });
}
function nj(e) {
    let { message: t, author: n, content: l, accessories: i, groupStart: s = !0 } = e,
        r = ng(t, l);
    return (0, a.jsx)(t9.A, {
        className: nd.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(nb, { message: t, author: n }) : void 0,
        childrenMessageContent: r,
        childrenAccessories: nf(i, "" !== l),
        disableInteraction: !0,
    });
}
function nk(e) {
    let { content: t, createdAt: n, accessories: l, replyTo: s, onJumpToReplied: r, groupStart: o = !0 } = e,
        c = i.useMemo(() => (0, t8.FT)(null, null), []),
        u = i.useMemo(() => ({ ...c, nick: "Conjure", colorString: "var(--text-brand)" }), [c]),
        d = s?.userId,
        h = (0, A.bG)([t3.default], () => (null != d ? t3.default.getUser(d) : null) ?? t3.default.getCurrentUser(), [
            d,
        ]),
        m = i.useMemo(() => {
            if (null == s || null == h) return null;
            let e = (0, t5.Ay)({ channelId: nh.id, content: s.content, author: h });
            return (0, t7.rh)({ ...e, id: s.id, timestamp: np(s.createdAt, e.timestamp), state: C.cmJ.SENT });
        }, [s, h]),
        f = i.useMemo(() => (null == s ? void 0 : { channel_id: nh.id, message_id: s.id }), [s]),
        p = i.useMemo(() => {
            let e = (0, t5.Ay)({ channelId: nh.id, content: t, author: nm });
            return (0, t7.rh)({
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
                author: u,
                childrenRepliedMessage:
                    null == m ? null : (0, a.jsx)(nv, { baseMessage: p, referenced: m, onJumpToReplied: r }),
                childrenHeader: (0, ni.A)({ message: p, channel: nh, author: u, guildId: void 0, isGroupStart: o }),
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
    let { projectId: t, messages: n, ref: l, onPickIdea: s } = e,
        r = (0, A.bG)([t3.default], () => t3.default.getCurrentUser()),
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
              className: eZ.x7,
              children: (0, a.jsx)(nA, {
                  role: "assistant",
                  children: (0, a.jsx)(nk, { content: R.intl.string(P.default.khZEUv) }),
              }),
          })
        : (0, a.jsx)("ol", {
              ref: c,
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
                                  highlighted: u === l.id,
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(ny, {
                                      groupStart: e.groupStart,
                                      content: l.content,
                                      createdAt: l.created_at,
                                      userId: l.user_id ?? r?.id,
                                      accessories:
                                          null != n ? (0, a.jsx)(eJ, { projectId: t, attachments: n }) : void 0,
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
                                              ? (0, a.jsx)(eJ, { projectId: t, attachments: l.attachments })
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
                                  children: (0, a.jsx)(tP, {
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
                                  children: (0, a.jsx)(tP, { projectId: t, interrupted: !0, steps: l.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, a.jsx)(
                              nA,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tP, {
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
                                      accessories: (0, a.jsx)(tR, {
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
function nA(e) {
    let { role: t, children: n, anchorId: l, highlighted: i = !1, continuation: s = !1 } = e;
    return (0, a.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": l,
        className: r()(eZ.xk, { [eZ.Qo]: i, [eZ.q3]: s }),
        children: n,
    });
}
var nS = n(625903),
    nN = n(964675);
function nE(e) {
    let { projectId: t } = e,
        n = (0, A.bG)([h.Ay], () => null != h.Ay.getSettings(t), [t]),
        l = i.useCallback(() => {
            (0, tn.A)(t);
        }, [t]);
    return n
        ? (0, a.jsx)(ey.D, {
              className: nN.h,
              "aria-label": R.intl.string(P.default.gTMvzD),
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
        s = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            s.current?.scrollToBottom();
        }, [l]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: nI.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(er.Ch, {
                ref: s,
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
function nP(e) {
    let { activity: t, compacting: n = !1, restoring: l = !1, controlling: s = !1 } = e,
        o = i.useRef(null),
        c = i.useId(),
        [u, d] = i.useState(null),
        h = null != t && "end" !== t.phase,
        m = s
            ? P.default.ivvYHP
            : l
              ? P.default.aFffp2
              : n
                ? P.default["0vH/5G"]
                : h
                  ? P.default.Ly7F7x
                  : P.default.QDGuNS,
        f = null != t && "" !== t.text,
        p = t?.session ?? null,
        g = f && null != p && u === p,
        x = i.useCallback(() => {
            f && null != p && d((e) => (e === p ? null : p));
        }, [f, p]),
        v = i.useCallback(() => d(null), []);
    return (0, a.jsx)(tL.Y, {
        targetElementRef: o,
        position: "top",
        align: "left",
        shouldShow: g,
        onRequestClose: v,
        renderPopout: () => (0, a.jsx)(nT, { id: c, activity: t }),
        children: () =>
            (0, a.jsxs)(ey.D, {
                innerRef: o,
                className: r()(n_.hF, f && n_.Xd),
                "aria-label": R.intl.string(l ? P.default.pGFXZ0 : P.default.SzdX35),
                "aria-expanded": g,
                "aria-describedby": g ? c : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: x,
                children: [
                    (0, a.jsx)("span", {
                        className: n_.bl,
                        children: (0, a.jsx)(nC.n, { dotRadius: 3.5, themed: !0 }),
                    }),
                    (0, a.jsx)(b.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        "aria-hidden": !!s || void 0,
                        "data-vibegrations-activity-label": !0,
                        children: R.intl.string(m),
                    }),
                ],
            }),
    });
}
var nR = n(885574),
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
        "aria-label": R.intl.string(P.default["9yoLWZ"]),
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
            (0, a.jsx)(nO, { label: R.intl.string(P.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(nO, { label: R.intl.string(P.default.R9aduM), usage: t.codegen }),
            (0, a.jsxs)("div", {
                className: nM.mf,
                children: [
                    (0, a.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: R.intl.string(P.default["kILb+R"]),
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
        n = i.useRef(null);
    return (0, a.jsx)(tL.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(nD, { project: t }),
        children: (e) =>
            (0, a.jsx)(ey.D, {
                innerRef: n,
                className: nM.Y$,
                "aria-label": R.intl.string(P.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(nR.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var n$ = n(985451),
    nq = n(258216);
function nU(e) {
    switch (e) {
        case "connecting":
            return R.intl.string(P.default.W7oyuf);
        case "failed":
            return R.intl.string(P.default.eE60xI);
        case "closed":
            return R.intl.string(P.default["yBmS+I"]);
    }
}
function nG(e) {
    let {
            projectId: t,
            thinking: n,
            restoring: l = !1,
            thinkingActivity: i,
            compacting: s,
            projectUsage: r,
            connState: o,
        } = e,
        c = (0, n$.o4)(t);
    return (0, a.jsxs)("div", {
        className: nq.jf,
        children: [
            (0, a.jsx)("div", {
                className: nq.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children:
                    n || l || c ? (0, a.jsx)(nP, { activity: i, compacting: s, restoring: l, controlling: c }) : null,
            }),
            (0, a.jsx)(nE, { projectId: t }),
            null == r
                ? null
                : (0, a.jsxs)("span", {
                      className: nq.BP,
                      children: [
                          (0, a.jsx)(b.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": R.intl.formatToPlainString(P.default["7SZZvj"], {
                                  runes: (0, eX.a7)(r.cost_usd),
                                  turns: r.turns,
                              }),
                              children: R.intl.formatToPlainString(P.default["4PFO2p"], {
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
                      "aria-label": R.intl.formatToPlainString(P.default.eDDdhB, { status: nU(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: nq.XF,
                      children: nU(o),
                  }),
        ],
    });
}
var nH = n(22231),
    nB = n(477155),
    nV = n(935286),
    nz = n(424110);
function nW(e) {
    let { option: t, position: n, disabled: l, onPick: s } = e,
        o = i.useId(),
        c = !0 === t.recommended,
        u = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(ey.D, {
        className: r()(nz.uK, { [nz.ue]: l }),
        onClick: l ? void 0 : () => s(t),
        "aria-label": R.intl.formatToPlainString(c ? P.default.aL1BKQ : P.default.k7lEgj, { answer: t.label }),
        "aria-describedby": u ? o : void 0,
        "aria-disabled": l,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            (0, a.jsx)("span", { className: nz.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: nz.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: nz.l8,
                        children: (0, a.jsx)(b.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: nz.ed,
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
                      className: nz.rM,
                      children: R.intl.string(P.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function nY(e) {
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
        y = i.useCallback(
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
        j = i.useCallback(() => {
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
            "" !== e && y({ kind: "custom", text: e });
        }, [w, y]),
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
        className: r()(nz.$O, { [nz.fI]: S && !E, [nz.Oh]: E }),
        role: "dialog",
        "aria-label": x.question,
        "data-vibegrations-clarification": t.id,
        "data-state": f ? "inert" : "open",
        "data-step": g,
        children: [
            (0, a.jsxs)("div", {
                className: nz.wx,
                children: [
                    (0, a.jsx)(b.E, {
                        tag: "span",
                        id: `${x.id}-label`,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        selectable: !0,
                        className: nz.TK,
                        children: x.question,
                    }),
                    null == l
                        ? null
                        : (0, a.jsx)(ey.D, {
                              className: r()(nz.gb, nz.Q7),
                              onClick: I,
                              "aria-label": R.intl.string(P.default.fMdUNR),
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
                className: nz.Ge,
                role: "group",
                "aria-labelledby": `${x.id}-label`,
                children: [
                    x.options.map((e, t) =>
                        (0, a.jsx)(
                            nW,
                            {
                                option: e,
                                position: t + 1,
                                disabled: f,
                                onPick: (e) => y({ kind: "option", optionId: e.id, text: e.label }),
                            },
                            e.id,
                        ),
                    ),
                    (0, a.jsxs)("div", {
                        className: nz.Xy,
                        children: [
                            (0, a.jsx)("span", {
                                className: nz.Gy,
                                "aria-hidden": !0,
                                children: (0, a.jsx)(nH.PencilIcon, {
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
                                placeholder: R.intl.string(P.default.qifsdL),
                                "aria-label": R.intl.formatToPlainString(P.default.XHESTL, { question: x.question }),
                                disabled: f,
                                rows: 1,
                                className: nz.Pu,
                                "data-vibegrations-clarification-other": x.id,
                            }),
                        ],
                    }),
                ],
            }),
            p > 1
                ? (0, a.jsxs)("div", {
                      className: nz.qr,
                      children: [
                          (0, a.jsx)(b.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: R.intl.formatToPlainString(P.default["7bypa+"], { index: g + 1, total: p }),
                          }),
                          (0, a.jsxs)("div", {
                              className: nz.Np,
                              children: [
                                  (0, a.jsx)(ey.D, {
                                      className: r()(nz.gb, { [nz.yI]: !k }),
                                      onClick: k ? j : void 0,
                                      tabIndex: k ? 0 : -1,
                                      "aria-hidden": !k,
                                      "aria-disabled": f,
                                      "aria-label": R.intl.string(P.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": k ? void 0 : "true",
                                      children: (0, a.jsx)(nB.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, a.jsx)(ey.D, {
                                      className: r()(nz.gb, { [nz.yI]: !_ }),
                                      onClick: _ ? T : void 0,
                                      tabIndex: _ ? 0 : -1,
                                      "aria-hidden": !_,
                                      "aria-disabled": f,
                                      "aria-label": R.intl.string(P.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": _ ? void 0 : "true",
                                      children: (0, a.jsx)(nV.E, {
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
var nK = n(643278),
    nX = n(405189);
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
    let [y, j] = i.useState(!1),
        [k, w] = i.useState(!1),
        [A, S] = i.useState(g);
    A !== g && (S(g), g ? j(!0) : w(!1)),
        i.useEffect(() => {
            if (g || !y) return;
            let e = setTimeout(() => j(!1), 150);
            return () => clearTimeout(e);
        }, [g, y]),
        i.useEffect(() => {
            if (!y || !g) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => w(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [y, g]);
    let N = null != l && l.length > 0,
        E = i.useCallback(() => x((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: nX.qd,
              "data-placement": u,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: r()(nX.vK, { [nX.ho]: f && c, [nX.ET]: !c }),
                      children: [
                          (0, a.jsx)("ol", {
                              className: r()(nX.Rk, eg.pj),
                              "data-live": "true",
                              children: (0, a.jsx)(ek, { glyph: (0, a.jsx)(ex, {}), line: t, live: !0, settled: !1 }),
                          }),
                          N
                              ? (0, a.jsx)(tG.m, {
                                    text: R.intl.string(P.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(ey.D, {
                                        className: nX.BO,
                                        onClick: E,
                                        "aria-expanded": g,
                                        "aria-label": R.intl.string(P.default.qCRC6c),
                                        children: (0, a.jsx)(nK.ClipboardListIcon, {
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
                  y && N
                      ? (0, a.jsx)("div", {
                            className: r()(nX.vB, { [nX.pg]: g && k, [nX.ui]: !g }),
                            children: (0, a.jsx)(tI, { todos: l, provisional: s, agents: o, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var nJ = n(366010),
    nQ = n(825484),
    n0 = n(859703),
    n1 = n(24001),
    n2 = n(291749),
    n6 = n(971276),
    n3 = n(590202),
    n7 = n(710969),
    n5 = n(792620),
    n4 = n(201805),
    n8 = n(617986),
    n9 = n(363195),
    le = n(749414);
let lt = !1;
function ln(e) {
    let t,
        n,
        l,
        { open: s } = e,
        r =
            ((t = (0, n4.dN)()),
            (n = (0, A.bG)([n0.A], () => n0.A.isQuestAccessSuspended || null != n0.A.questEnrollmentBlockedUntil, [])),
            (l = (0, A.bG)([n0.A], () => null != n0.A.getQuestPreviewOverride(n1.uF.QUEST_BAR_V2), [])),
            null != t && (0, n5.vv)(t)
                ? l
                    ? t.userStatus?.claimedAt != null
                        ? null
                        : t
                    : !(0, n6.s)() || n || (0, n7.Ic)(t) || t.userStatus?.completedAt != null
                      ? null
                      : t
                : null),
        [o, c] = i.useState(() => lt),
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
        g = (0, A.bG)([n9.A], () => n9.A.getState().theme),
        x = (0, nJ.M)(g) ? C.NJ8.DARK : C.NJ8.LIGHT,
        v = null != p ? (0, n2.tW)(p, n2.fY.GAME_TILE, x).url : null,
        y = null != v && "" !== v ? v : null,
        j = i.useCallback(async () => {
            if (null == r) return;
            let e = {
                questContent: n1.uF.QUEST_BAR_V2,
                sourceQuestContent: n1.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: n3.Cy.WATCH_VIDEO,
            };
            r.userStatus?.enrolledAt != null
                ? (0, n8.d5)({ quest: r, ...e })
                : await (0, n8.e0)(r, { ...e, questContentCTA: n3.Cy.ACCEPT_QUEST });
        }, [r]),
        k = i.useCallback(() => {
            (lt = !0), c(!0);
        }, []);
    return u && null != p
        ? (0, a.jsxs)("aside", {
              className: le.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": d ? "closing" : "open",
              "aria-hidden": d,
              children: [
                  null != y
                      ? (0, a.jsxs)("div", {
                            className: le.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, a.jsx)("img", { className: le.Rx, src: y, alt: "" }),
                                (0, a.jsx)("div", { className: le._e }),
                            ],
                        })
                      : null,
                  (0, a.jsxs)("div", {
                      className: le.iB,
                      children: [
                          null != y ? (0, a.jsx)("img", { className: le.w1, src: y, alt: "" }) : null,
                          (0, a.jsxs)("div", {
                              className: le.Ug,
                              children: [
                                  (0, a.jsx)(b.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: R.intl.string(P.default["09LJ+I"]),
                                  }),
                                  (0, a.jsx)(b.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: R.intl.format(R.t.EQa7os, { questName: p.config.messages.questName }),
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
                              text: R.intl.string(P.default.egO5fO),
                          }),
                          (0, a.jsx)(f.$, {
                              variant: "primary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: j,
                              text: R.intl.string(R.t.kUQLMJ),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var ll = n(506774),
    la = n(651649),
    li = n(670455);
let ls = "shownVibegrationsFeedbackProjectIds";
var lr = n(348800);
let lo = [R.intl.string(P.default["E+Q26x"]), R.intl.string(P.default["06/jqP"]), R.intl.string(P.default["3gSfUa"])];
function lc(e) {
    let { projectId: t, onRegionCapture: l, restoreState: s } = e,
        r = (0, A.bG)([ep.Ay], () => ep.Ay.getMessages(t), [t]),
        o = (0, A.bG)([h.Ay], () => h.Ay.getConnState(t), [t]),
        c = (0, A.bG)([h.Ay], () => h.Ay.isChatStopped(t), [t]),
        u = (0, A.bG)([ep.Ay], () => ep.Ay.getProjectUsage(t), [t]),
        d = (0, A.bG)([ep.Ay], () => ep.Ay.getThinkingActivity(t), [t]),
        m = (0, A.bG)([ep.Ay], () => ep.Ay.isCompacting(t), [t]),
        f = (0, A.bG)([h.Ay], () => h.Ay.getModelSettings(t), [t]),
        p = i.useRef(null),
        g = i.useRef(null),
        x = i.useRef(null),
        v = i.useRef(!0),
        [b, y] = i.useState(!0);
    i.useEffect(() => {
        v.current && g.current?.scrollToBottom();
    }, [r]);
    let j = i.useCallback(() => {
        let e = g.current;
        if (null == e) return;
        let t = e.getDistanceFromBottom();
        v.current = t < 32;
        let n = t > 1;
        y((e) => (!n === e ? e : !n));
    }, []);
    i.useLayoutEffect(() => {
        let e = p.current,
            t = x.current;
        if (null == e) return;
        let n = e.getBoundingClientRect().width,
            l = t?.getBoundingClientRect().height,
            a = null;
        function i() {
            v.current &&
                (null != a && cancelAnimationFrame(a), (a = requestAnimationFrame(() => g.current?.scrollToBottom())));
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
                        ((ll.w.get(ls) ?? []).includes(e) ||
                            la.A.possiblyShowFeedbackModal(li.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = ll.w.get(ls) ?? []).includes(e) || ll.w.set(ls, [...l, e]),
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
    let k = i.useCallback(
            (e, n) => {
                (0, h.dv)(t, e, n);
            },
            [t],
        ),
        w = i.useCallback(() => (0, h.fu)(t), [t]),
        S = i.useCallback((e) => k(e.implementation_prompt), [k]),
        N = i.useCallback((e) => k(e), [k]),
        E = i.useCallback((e) => (0, h.XZ)(t, e), [t]),
        C = i.useCallback((e) => (0, h.vX)(t, e), [t]),
        I = i.useCallback((e) => (0, h.Vm)(t, e), [t]),
        T = i.useCallback(() => k(R.intl.string(P.default.Jj8Ftb)), [k]),
        _ = s?.status === "restoring",
        M = "open" === o && !c && !_,
        L = r[r.length - 1],
        O = null != L && "assistant" === L.role && null != L.proposal,
        [D, F] = i.useState(null),
        $ = L?.clarification != null && L.clarification.id !== D ? L.clarification : null,
        q = i.useCallback(() => {
            null != $ && F($.id);
        }, [$]),
        U = (0, A.bG)([ep.Ay], () => ep.Ay.hasLoadedHistory(t), [t]),
        G = i.useMemo(() => {
            let e = 0;
            for (let n = 0; n < t.length; n++) e = (31 * e + t.charCodeAt(n)) % 0x7fffffff;
            return lo[e % lo.length];
        }, [t]),
        H = O
            ? R.intl.string(P.default.Jj8Ftb)
            : L?.kind === "plan_implemented"
              ? R.intl.string(P.default["3sTTBu"])
              : U && 0 === r.length
                ? G
                : null,
        B = i.useMemo(() => {
            for (let e = r.length - 1; e >= 0; e--) {
                let t = r[e];
                if ("assistant" === t.role && !(0, ep.BL)(t)) return t;
            }
        }, [r]),
        V = null != B,
        z = O && M ? T : void 0,
        [W, Y] = i.useState(null),
        [K, X] = i.useState(V);
    K !== V && (X(V), V || Y(null)),
        i.useEffect(() => {
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
    let Z = i.useMemo(() => {
            let e, t;
            return null != B
                ? null != (t = ed((e = eu(B.steps, { turnActive: !0 })).steps))
                    ? ec(t)
                    : (e.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ??
                      R.intl.string(P.default.nv6pUM))
                : "";
        }, [B]),
        J = i.useMemo(() => (null != B ? (ef(B.steps) ?? B.todos) : void 0), [B]),
        Q = B?.provisionalTodo,
        ee = i.useMemo(() => (null != B ? t_(eu(B.steps, { turnActive: !0 }).tasks) : void 0), [B]);
    return (0, a.jsxs)("section", {
        ref: p,
        "data-vibegrations-chat": !0,
        className: lr.TE,
        children: [
            (0, a.jsx)(ln, { open: null != B }),
            (0, a.jsx)(nZ, {
                line: Z,
                placement: V && "top" === W ? "top" : null,
                todos: J,
                provisionalTodo: Q,
                agents: ee,
            }),
            (0, a.jsx)(er.Ch, {
                ref: g,
                onScroll: j,
                "data-vibegrations-chat-log": !0,
                className: b ? lr.N$ : `${lr.N$} ${lr.hB}`,
                children: (0, a.jsx)(nw, { ref: x, projectId: t, messages: r, onPickIdea: M ? S : void 0 }),
            }),
            (0, a.jsxs)("div", {
                className: lr.im,
                children: [
                    (0, a.jsx)(nG, {
                        projectId: t,
                        thinking: V,
                        restoring: _,
                        thinkingActivity: d,
                        compacting: m,
                        projectUsage: u,
                        connState: o,
                    }),
                    (0, a.jsxs)("div", {
                        className: lr.Jx,
                        children: [
                            (0, a.jsx)(nZ, {
                                line: Z,
                                placement: V && "bottom" === W ? "bottom" : null,
                                todos: J,
                                provisionalTodo: Q,
                                agents: ee,
                            }),
                            null == $
                                ? null
                                : (0, a.jsx)("div", {
                                      className: lr.B5,
                                      children: (0, a.jsx)(
                                          nY,
                                          { clarification: $, onSubmit: M ? N : void 0, onDismiss: q },
                                          $.id,
                                      ),
                                  }),
                            (0, a.jsx)(tQ, {
                                canSend: M,
                                stopped: c,
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
    ld = n(661531),
    lh = n(602853),
    lm = n(517461),
    lf = n(761929),
    lp = n(927506);
function lg(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: s } = e,
        r = (0, lh.r)(ld.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [c, u] = (0, lm.V)("VibegrationsChatSidebarWidth", 460),
        [d, h] = i.useState(c ?? 460),
        m = (0, lu.clamp)(d, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + r : 0);
    }, [m, t, r, l]);
    let f = (0, lf.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: u,
            orientation: lf.R.HORIZONTAL_LEFT,
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
        className: lp.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: lp.Di, onPointerDown: p }),
            (0, a.jsx)("div", { ref: o, className: lp.kL, style: { width: m }, children: s }),
        ],
    });
}
var lx = n(145615);
let lv = [6, 8, 10, 12],
    lb = {
        home: { blob: 1, twink: 1, alpha: 0.7 },
        conversation: { blob: 1, twink: 1, alpha: 0.7 },
        thinking: { blob: 3, twink: 2.4, alpha: 0.7 },
    };
function ly(e, t, n) {
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
                h = lb.home.blob,
                m = lb.home.twink,
                f = lb.home.alpha,
                p = 0,
                g = lv[0],
                x = [],
                v = 0,
                b = 0,
                y = Array(8).fill("");
            function j() {
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
                    y[t] = `rgba(${e}, ${n}, ${l}, ${i})`;
                }
            }
            j();
            let k = [];
            for (let e = 0; e < 8; e++) k.push([]);
            let w = new MutationObserver(j);
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
                                    threshold: 0.05 + 0.95 * ly(t, e, 1),
                                    phase: ly(t, e, 2) * Math.PI * 2,
                                    freq: 0.25 + 1.5 * ly(t, e, 3),
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
                        (a.fillStyle = y[e]), a.beginPath();
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
                                    x.length < 60 || b < 180 || p >= lv.length - 1))
                            )
                                return;
                            let t = 0;
                            for (let e = 0; e < x.length; e++) t += x[e];
                            let n = t / x.length;
                            n <= 22 ||
                                ((g = lv[++p]),
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
                    let a = lb[s.current] ?? lb.home,
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
    let r = lx.P5;
    return (
        (r = "conversation" === t ? `${r} ${lx.wY}` : "home" === t ? `${r} ${lx.Qy}` : `${r} ${lx.fR}`),
        (0, a.jsx)("div", {
            ref: n,
            className: r,
            "aria-hidden": "true",
            children: (0, a.jsx)("canvas", { ref: l, className: lx.DX }),
        })
    );
});
var lk = n(408694);
function lw(e) {
    let { projectId: t } = e,
        n = (0, A.bG)([ep.Ay], () => (ep.Ay.isThinking(t) ? "thinking" : "conversation"), [t]);
    return (0, a.jsxs)("div", {
        className: lk.D1,
        "aria-hidden": !0,
        children: [
            (0, a.jsxs)("div", {
                className: lk.ys,
                "data-state": n,
                children: [(0, a.jsx)("div", { className: lk.Fc }), (0, a.jsx)("div", { className: lk.dW })],
            }),
            (0, a.jsx)(lj, { state: n }),
        ],
    });
}
var lA = n(333007),
    lS = n(342667);
function lN(e) {
    let { projectId: t, resolveIframe: n } = e,
        l = (0, n$.o4)(t),
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
    return (0, lA.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", {
                    className: lS.y,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: l ? R.intl.string(P.default.dIE9zO) : "",
                }),
                o
                    ? (0, a.jsx)("div", {
                          className: lS.o,
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
var lE = n(439108);
function lC(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function lI(e) {
    let { targetRect: t, onSelect: n, onCancel: l } = e,
        [s, r] = i.useState(null);
    i.useEffect(() => {
        function e(e) {
            "Escape" === e.key && (e.stopPropagation(), l());
        }
        return window.addEventListener("keydown", e, !0), () => window.removeEventListener("keydown", e, !0);
    }, [l]);
    let o = i.useCallback(
            (e) => ({
                x: Math.min(Math.max(e.clientX - t.left, 0), t.width),
                y: Math.min(Math.max(e.clientY - t.top, 0), t.height),
            }),
            [t],
        ),
        c = i.useCallback(
            (e) => {
                if (0 !== e.button) return;
                e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId);
                let t = o(e);
                r({ startX: t.x, startY: t.y, x: t.x, y: t.y });
            },
            [o],
        ),
        u = i.useCallback(
            (e) => {
                let t = o(e);
                r((e) => (null == e ? e : { ...e, x: t.x, y: t.y }));
            },
            [o],
        ),
        d = i.useCallback(
            (e) => {
                if (null == s) return;
                let t = o(e),
                    a = lC({ ...s, x: t.x, y: t.y });
                r(null), a.width < 8 && a.height < 8 ? l() : n(a);
            },
            [s, o, n, l],
        ),
        h = null == s ? null : lC(s);
    return (0, lA.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: lE.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: lE.aC,
                    style: { left: t.left, top: t.top, width: t.width, height: t.height },
                    role: "application",
                    "aria-label": R.intl.string(P.default["9MOgRI"]),
                    onPointerDown: c,
                    onPointerMove: u,
                    onPointerUp: d,
                    onPointerCancel: l,
                    children:
                        null == h
                            ? (0, a.jsx)("div", {
                                  className: lE.F7,
                                  children: (0, a.jsx)("div", {
                                      className: lE.aK,
                                      children: (0, a.jsx)(b.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: R.intl.string(P.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: lE.r1,
                                  style: { left: h.x, top: h.y, width: h.width, height: h.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
var lT = n(314116),
    l_ = n(364522),
    lP = n(406810),
    lR = n(381849),
    lM = n(977628);
function lL(e) {
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
                ? (0, a.jsx)("div", { className: lM.E8, children: (0, a.jsx)(m.y, {}) })
                : "failed" === r.status
                  ? (0, a.jsx)("div", {
                        className: lM.E8,
                        role: "alert",
                        children: (0, a.jsx)(b.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: R.intl.string(P.default["mSJn+K"]),
                        }),
                    })
                  : 0 === r.entries.length
                    ? (0, a.jsx)("div", {
                          className: lM.E8,
                          children: (0, a.jsx)(b.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: R.intl.string(P.default.TOmYPT),
                          }),
                      })
                    : (0, a.jsx)(l_.Ip, {
                          className: lM.p_,
                          children: (0, a.jsx)("div", {
                              className: lM.jO,
                              children: r.entries.map((e) => {
                                  let t,
                                      n = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, lR.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: lR._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, a.jsxs)(
                                      "button",
                                      {
                                          className: lM.f_,
                                          type: "button",
                                          onClick: () =>
                                              (0, lT.A)({
                                                  title: R.intl.string(P.default.qOUOPE),
                                                  subtitle: R.intl.string(P.default.k2JBj5),
                                                  confirmText: R.intl.string(P.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      l(), s(e);
                                                  },
                                              }),
                                          children: [
                                              (0, a.jsx)(b.E, {
                                                  variant: "text-md/medium",
                                                  className: lM.bc,
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
            className: lM.nd,
            "aria-label": R.intl.string(P.default.jAWwzi),
            children: [
                (0, a.jsxs)(u.Ay, {
                    "aria-label": R.intl.string(P.default.jAWwzi),
                    toolbar: (0, a.jsx)(u.Ay.Icon, { icon: o.P, tooltip: R.intl.string(R.t.cpT0Cq), onClick: l }),
                    children: [
                        (0, a.jsx)(u.Ay.ChannelIcon, { icon: lP.ClockIcon, "aria-hidden": !0 }),
                        (0, a.jsx)(u.Ay.Title, { children: R.intl.string(P.default.jAWwzi) }),
                    ],
                }),
                (0, a.jsx)("div", { className: lM.rf, children: t }),
            ],
        })
    );
}
var lO = n(120426),
    lD = n(873727),
    lF = n(147248),
    l$ = n(418842),
    lq = n(885386),
    lU = n(940107),
    lG = n(171936);
function lH(e) {
    let {
            projectId: t,
            applicationId: n,
            surface: l,
            previewReady: s,
            header: o,
            mainClassName: u,
            content: d,
            sidebar: h,
        } = e,
        [m, f] = i.useState(null),
        p = (0, c.A)(n, l),
        g = p?.id ?? null;
    !(function (e, t) {
        let n = (0, A.bG)([n9.A], () => (0, lD.x4)(n9.A.theme)),
            l = (0, A.bG)([lF.A], () => lF.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: s,
                highContrast: r,
                forcedColors: o,
                underlineLinks: c,
            } = (0, A.cf)([tW.Ay], () => ({
                reducedMotion: tW.Ay.useReducedMotion,
                fontScale: (0, lD.U0)(),
                highContrast: tW.Ay.isHighContrastModeEnabled,
                forcedColors: tW.Ay.useForcedColors,
                underlineLinks: tW.Ay.alwaysShowLinkDecorations,
            })),
            u = lq.hH.useSetting(),
            d = (0, l$.C)(),
            h = i.useRef(!1),
            m = i.useRef(!1),
            f = i.useRef(0),
            p = i.useRef(null),
            g = i.useCallback(() => {
                let l = (0, lO.F1)(e, t);
                if (null == l) return;
                p.current = l;
                let i = {
                    revision: ++f.current,
                    baseTheme: n,
                    customTheme: (0, lD.Lq)(),
                    uiDensity: d,
                    messageDisplayCompact: u,
                    fontScale: s,
                    reducedMotion: a,
                    highContrast: r,
                    forcedColors: o,
                    underlineLinks: c,
                };
                (0, lU.W)(l, "set-env", i, {
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
                let n = (0, lO.F1)(e, t);
                null != n && n !== p.current && v();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, lO.F1)(e, t) && ((p.current = null), v());
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
    })(m, g);
    let [x, v] = i.useState(null);
    i.useEffect(() => {
        if (null != t) return (0, lG.mn)(t, () => (0, lO.F1)(m, g));
    }, [t, m, g]);
    let b = i.useCallback(() => {
            let e = (0, lO.F1)(m, g),
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
        y = i.useCallback(
            (e) => {
                v(null), null != x && (0, lO.su)(x.iframe, e).then(x.resolve, x.reject);
            },
            [x],
        ),
        j = i.useCallback(() => {
            v(null), x?.resolve(null);
        }, [x]),
        k = s && null != n && l.type === E.U4.MAIN,
        w = i.useCallback(() => (0, lO.F1)(m, g), [m, g]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: r()(ei.Mh, u),
                children: [o, (0, a.jsx)("div", { ref: f, className: ei.fm, children: d })],
            }),
            h(k ? b : void 0),
            (0, a.jsx)(lN, { projectId: t ?? null, resolveIframe: w }),
            null != x ? (0, a.jsx)(lI, { targetRect: x.targetRect, onSelect: y, onCancel: j }) : null,
        ],
    });
}
function lB(e) {
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
            previewGate: y,
            previewMode: j,
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
        children: (0, a.jsx)(lH, {
            projectId: t,
            applicationId: n,
            surface: s,
            previewReady: b,
            header: c,
            mainClassName: null == c ? void 0 : r()(ei.ez, { [ei.zt]: C }),
            content: (0, a.jsx)(ee, {
                applicationId: n,
                previewApplicationId: l,
                surface: s,
                previewReady: b,
                previewGate: y,
                previewMode: j,
            }),
            sidebar: (e) =>
                null != k
                    ? (0, a.jsx)(lg, {
                          open: k.open,
                          maxWidth: N,
                          onWidthChange: d.Zq,
                          children: k.open
                              ? (0, a.jsx)(es, { channel: k.channel, guild: k.guild, onClose: k.onClose })
                              : null,
                      })
                    : null != t && I
                      ? (0, a.jsx)(lg, {
                            open: m,
                            maxWidth: N,
                            onWidthChange: d.Zq,
                            children: (0, a.jsx)("div", {
                                className: ei.cO,
                                children: p
                                    ? (0, a.jsx)(
                                          lL,
                                          { projectId: t, onClose: g ?? (() => {}), onRestore: x ?? (() => {}) },
                                          t,
                                      )
                                    : (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(lw, { projectId: t }),
                                              (0, a.jsx)(u.Ay, {
                                                  "aria-label": R.intl.string(R.t["/VQax8"]),
                                                  toolbar:
                                                      null == f
                                                          ? null
                                                          : (0, a.jsx)(u.Ay.Icon, {
                                                                icon: o.P,
                                                                tooltip: R.intl.string(P.default.YdgE0j),
                                                                onClick: f,
                                                            }),
                                                  children: (0, a.jsx)(u.Ay.Title, {
                                                      children: R.intl.string(R.t["/VQax8"]),
                                                  }),
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: ei.cb,
                                                  children: (0, a.jsx)(
                                                      lc,
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
