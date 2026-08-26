n.d(t, { A: () => aa });
var l,
    a = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    o = n(789645),
    u = n(672929),
    d = n(58736),
    c = n(948230),
    m = n(18739),
    h = n(289873),
    f = n(821609),
    g = n(627363),
    x = n(580954),
    p = n(297264),
    v = n(834730),
    j = n(625180),
    b = n(91242),
    y = n(812901),
    k = n(317608),
    A = n(17928),
    w = n(956518),
    N = n(869146),
    C = n(207371),
    S = n(165610),
    I = n(652215),
    E =
        (((l = {}).Loading = "loading"),
        (l.AwaitingLaunch = "awaiting-launch"),
        (l.Launched = "launched"),
        (l.RenderingElsewhere = "rendering-elsewhere"),
        (l.NoApplication = "no-application"),
        (l.DoesNotSupportSurface = "does-not-support-surface"),
        (l.Error = "error"),
        l),
    M = n(742023),
    T = n(697744),
    R = n(295813),
    P = n(375708),
    _ = n(296167);
function L(e) {
    let { className: t } = e,
        { Component: n, events: l, getDuration: r } = (0, T.c)();
    return (
        i.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function n() {
                    ((e = null), null != r()) ? l.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(n));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [l, r]),
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
                (0, a.jsx)(v.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: _.o,
                    children: P.intl.string(R.default.jTuX7C),
                }),
            ],
        })
    );
}
var F = n(328284);
function q(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: s()(F.Bf, l && F.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: F.Ux,
                children: [
                    (0, a.jsx)(p.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
        ],
    });
}
var D = n(963691);
function $(e) {
    let { applicationId: t, surface: n } = e,
        { frame: l, state: r } = (function (e) {
            let { applicationId: t, surface: n } = e,
                {
                    surface: l,
                    setFailed: a,
                    lifecycle: r,
                } = (function (e) {
                    let { applicationId: t, surface: n } = e,
                        l = i.useMemo(() => (0, S.VA)(t, n), [t, n]),
                        a = i.useMemo(() => n, [l]),
                        r = (0, A.bG)([b.A], () => b.A.getFrame(l), [l]),
                        s = (0, A.bG)(
                            [N.A, b.A],
                            () => N.A.getWindowOpen(I.MLl.ACTIVITY_POPOUT) && b.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: u } = (0, g.YY)(t),
                        d = (0, C.x)(o),
                        c = null != (0, w.Ay)(t),
                        [m, h] = i.useState(null),
                        f = m === l;
                    return {
                        surface: a,
                        setFailed: i.useCallback(() => h(l), [l]),
                        lifecycle: (0, S.x1)(r)
                            ? s
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: r }
                            : f
                              ? { state: "error" }
                              : r?.state === "loading"
                                ? { state: "loading", frame: r }
                                : u
                                  ? { state: "loading", frame: void 0 }
                                  : null != o && c
                                    ? d
                                        ? { state: "awaiting-launch" }
                                        : { state: "does-not-support-surface" }
                                    : { state: "no-application" },
                    };
                })({ applicationId: t, surface: n }),
                { state: s } = r;
            return (
                i.useEffect(() => {
                    "awaiting-launch" === s && e();
                    async function e() {
                        try {
                            await j.A.launchFrame({ applicationId: t, surface: l });
                        } catch {
                            a();
                        }
                    }
                }, [s, t, l, a]),
                r
            );
        })({ applicationId: t, surface: n }),
        s = (0, S.VA)(t, n);
    switch (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = b.A.getFrame(e);
                    if (null == t || N.A.getWindowOpen(I.MLl.ACTIVITY_POPOUT)) return;
                    let n = b.A.getMainFrame()?.id === e;
                    t.intent === S.sV.MAIN
                        ? (n || j.A.promoteFrame(e), j.A.resetFrameLayoutModes(e))
                        : n && j.A.clearMainFrameSlot();
                })(s),
                () => {
                    let e;
                    null != (e = b.A.getFrame(s)) &&
                        ((0, S.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        M.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === S.sV.INLINE && j.A.promoteFrame(s),
                              j.A.updateFrameLayoutMode({ frameId: s, layoutMode: S.y0.PIP }))
                            : e.intent === S.sV.MAIN && j.A.demoteMainFrame(s));
                }
            ),
            [s],
        ),
        r)
    ) {
        case E.Launched:
            return (0, a.jsx)(k.A, { frameId: l.id, level: y.A.WithinAppContent, className: D.Z7 });
        case E.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: D.qs,
                children: (0, a.jsx)(q, {
                    title: P.intl.string(R.default["4f6Vkr"]),
                    body: P.intl.string(R.default.LJ2q1H),
                }),
            });
        case E.NoApplication:
            return (0, a.jsx)(L, { className: D.qs });
        case E.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: D.qs,
                children: (0, a.jsx)(q, {
                    title: P.intl.string(R.default.FHOJiH),
                    body: P.intl.string(R.default["1yLQoV"]),
                }),
            });
        case E.Error:
            return (0, a.jsxs)("div", {
                className: D.qs,
                children: [
                    (0, a.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: P.intl.string(R.default.MeLWCr),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: D.tj,
                        children: P.intl.string(R.default["1RCbQT"]),
                    }),
                ],
            });
        case E.AwaitingLaunch:
        case E.Loading:
            return (0, a.jsx)("div", { className: D.qs, children: (0, a.jsx)(h.y, {}) });
    }
}
var z = n(323384),
    O = n(308528),
    U = n(334738),
    G = n(373204),
    B = n(355622),
    W = n(734057),
    H = n(531685),
    V = n(365971),
    K = n(362417);
function Y(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: K.f,
        children: [
            (0, a.jsx)(z.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function Q() {
    return (0, a.jsx)("div", { className: K.f, children: (0, a.jsx)(h.y, {}) });
}
function Z(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: s } = (0, g.YY)(l),
        o = r?.bot?.id ?? null,
        u = (0, A.bG)([W.A], () => {
            if (null == o) return null;
            let e = W.A.getDMFromUserId(o);
            return null != e ? W.A.getChannel(e) : null;
        });
    (t = u?.id ?? null),
        i.useEffect(() => {
            null != t && O.A.preload(I.ME, t);
        }, [t]),
        (n = (0, A.bG)([H.A], () => H.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, V.Xg)();
            return (
                (0, U.yl)(t, e),
                () => {
                    (0, U.dm)(t, e);
                }
            );
        }, [t, n]);
    let [d, c] = i.useState(null),
        m = null != o && d === o;
    return (i.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            O.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || c(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s)
        ? (0, a.jsx)(Q, {})
        : null == o || m
          ? (0, a.jsx)(Y, { message: P.intl.string(R.default.bl4eBc) })
          : null == u
            ? (0, a.jsx)(Q, {})
            : (0, a.jsx)("div", {
                  className: K.g,
                  children: (0, a.jsx)(G.A, { channel: u, guild: null, chatInputType: B.oU.SIDEBAR }, u.id),
              });
}
var X = n(148853),
    J = n(598748),
    ee = n(486610),
    et = n(531913),
    en = n(587895),
    el = n(633075),
    ea = n(946356),
    ei = n(139730),
    er = n(520082),
    es = n(287809),
    eo = n(675210),
    eu = n(71495);
function ed(e) {
    let { applicationId: t } = e,
        n = (0, A.bG)([es.default], () => es.default.getCurrentUser());
    return null == n ? null : (0, a.jsx)(ec, { applicationId: t, user: n });
}
function ec(e) {
    let { applicationId: t, user: n } = e,
        l = (0, A.bG)([en.A], () => en.A.getApplication(t)),
        r = i.useMemo(() => new el.R({ applicationId: t }), [t]),
        s = (0, et.A)(n.id, t),
        o = s.surfaceConfigs,
        u = (0, eo.yZ)({
            widgetTop: null != o[J.m.WIDGET_TOP],
            widgetBottom: null != o[J.m.WIDGET_BOTTOM],
            miniProfile: null != o[J.m.MINI_PROFILE],
        });
    return u.hasAny
        ? (0, a.jsx)("div", {
              className: eu.$C,
              children: (0, a.jsxs)("div", {
                  className: eu.PV,
                  children: [
                      u.hasMainCard
                          ? (0, a.jsx)("div", {
                                className: eu.a9,
                                children: (0, a.jsx)(ea.A.Overlay, {
                                    className: eu.Qb,
                                    children: (0, a.jsx)(er.A, {
                                        user: n,
                                        widget: r,
                                        allowEditing: !1,
                                        disableInteraction: !0,
                                        interactiveLinks: !0,
                                        disableCTAActions: !0,
                                    }),
                                }),
                            })
                          : null,
                      u.hasPopoutCard && null != l
                          ? (0, a.jsx)("div", {
                                className: eu.ql,
                                children: (0, a.jsx)(ei.A, { application: l, rendererProps: s, renderText: ee.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var em = n(976102);
function eh(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            previewReady: r,
            previewGate: s,
            availability: o,
            activeMode: d,
            widgetApplicationId: c,
        } = e,
        m = (0, u.A)(t, l),
        { isLoading: p } = (0, g.YY)(t ?? void 0);
    if (
        (i.useEffect(() => {
            s?.type === "permissions" && null != m && (0, x.A)().leaveFrame(m.id);
        }, [m, s?.type]),
        s?.type === "checking")
    )
        return (0, a.jsx)("div", { className: em.q, children: (0, a.jsx)(h.y, {}) });
    if (s?.type === "permissions")
        return (0, a.jsx)("div", {
            className: em.q,
            children: (0, a.jsx)(q, {
                wide: !0,
                title: P.intl.string(R.default.DYwf2n),
                body: P.intl.string(R.default.WWj3pN),
                children: (0, a.jsx)(f.$, {
                    variant: "primary",
                    size: "md",
                    text: P.intl.string(R.default["CRfE/E"]),
                    onClick: s.onReviewPermissions,
                    loading: s.loading,
                }),
            }),
        });
    if (!r) return (0, a.jsx)(L, { className: em.q });
    if (null == t) return null;
    if (p) return (0, a.jsx)("div", { className: em.q, children: (0, a.jsx)(h.y, {}) });
    let v = o.showModeSwitch && null != d ? { role: "tabpanel", id: (0, X.z3)(d), "aria-label": (0, X.kZ)(d) } : {};
    return (0, a.jsxs)("div", {
        className: em.R,
        ...v,
        children: [
            ("frame" === d && o.modes.includes("frame")) || 0 === o.modes.length
                ? (0, a.jsx)($, { applicationId: t, surface: l })
                : null,
            "widget" === d && null != c
                ? "unavailable-authorization-revoked" === o.profileState
                    ? (0, a.jsx)("div", {
                          className: em.q,
                          children: (0, a.jsx)(q, {
                              wide: !0,
                              title: P.intl.string(R.default.SGHO9K),
                              body: P.intl.string(R.default["pV/rS2"]),
                          }),
                      })
                    : (0, a.jsx)(ed, { applicationId: c })
                : null,
            "bot" === d && null != n ? (0, a.jsx)(Z, { previewApplicationId: n }) : null,
        ],
    });
}
var ef = n(534890),
    eg = n(738876),
    ex = n(47167),
    ep = n(31717),
    ev = n(372054);
function ej(e) {
    let { channel: t, guild: n, onClose: l } = e,
        i = (0, ex.Ay)(t),
        r = (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l });
    return (0, a.jsxs)("div", {
        className: ev.Wx,
        children: [
            (0, a.jsx)(eg.A, { channel: t, draftType: ep.C.ChannelMessage }),
            (0, a.jsxs)(d.Ay, {
                toolbar: r,
                "aria-label": P.intl.string(P.t.BIYAqa),
                children: [
                    (0, a.jsx)(d.Ay.ChannelIcon, { icon: ef.ChatIcon, "aria-label": P.intl.string(P.t["/VQax8"]) }),
                    (0, a.jsx)(d.Ay.Title, { children: i }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ev.GZ,
                children: (0, a.jsx)(G.A, { channel: t, guild: n, chatInputType: B.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var eb = n(689175);
n(321073), n(134528), n(947204);
let ey = {
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
function ek(e) {
    if (null != e.labelText && "" !== e.labelText) return e.labelText;
    let t = null != e.labelKey ? ey[e.labelKey] : void 0;
    return P.intl.string(t ?? R.default.nv6pUM);
}
function eA(e) {
    let t,
        { turnActive: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = [],
        a = new Map(),
        i = new Map(),
        r = 0,
        { segmentOf: s } = eC(e);
    function o(e, t, n) {
        return {
            id: e,
            kind: t,
            detail: [],
            detailDrivenBy: [],
            status: "running",
            screenshots: [],
            touched: 0,
            segment: n,
        };
    }
    function u(e, t) {
        let n = a.get(e);
        if (null != n) return n;
        let l = { taskId: e, task: o("task", "task", t), steps: [] };
        return a.set(e, l), l;
    }
    function d(e, n, a, r) {
        if ("task" === a || "task" === n) return null != e ? u(e, r).task : (t = t ?? o("task", "task", r));
        let s = `${e ?? ""} ${n}`,
            d = i.get(s);
        if (null != d) return d;
        let c = o(n, "step", r);
        return i.set(s, c), null != e ? u(e, r).steps.push(c) : l.push(c), c;
    }
    let c = (function (e) {
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
            0 !== c.size &&
            "error" !== n.kind &&
            "terminal_error" !== n.kind &&
            null != n.task_id &&
            "" !== n.task_id &&
            c.has(n.task_id)
        )
            continue;
        let e = s[t] ?? 0;
        if ("node" === n.kind && null != n.node) {
            let t = n.node,
                l = d(n.task_id, t.id, t.node_kind ?? "step", e);
            if (
                ((l.touched = ++r),
                null != t.label_key && (l.labelKey = t.label_key),
                null != t.label_text && (l.labelText = t.label_text),
                null != t.group_label && (l.groupLabel = t.group_label),
                null != t.helper_name && (l.helperName = t.helper_name),
                null != t.helper_mark && (l.helperMark = t.helper_mark),
                null != t.todo_id && (l.todoId = t.todo_id),
                null != t.detail && ((l.detail = t.detail), (l.detailDrivenBy = t.detail.map(() => null))),
                null != t.append_detail)
            ) {
                let e = t.driven_by ?? null;
                (l.detail = [...l.detail, ...t.append_detail]),
                    (l.detailDrivenBy = [...l.detailDrivenBy, ...t.append_detail.map(() => e)]);
            }
            null != t.status && (l.status = t.status),
                null != t.duration && (l.durationMs = t.duration),
                null != t.screenshots && (l.screenshots = t.screenshots);
            continue;
        }
        if ("error" === n.kind || "terminal_error" === n.kind) {
            let l = d(void 0, `${n.kind}-${t}`, "step", e);
            (l.touched = ++r),
                (l.labelKey = "error"),
                (l.status = "failed"),
                null != n.message && "" !== n.message && (l.detail = [n.message]);
        }
    }
    let m = [...a.values()];
    for (let e of m) n || "running" !== e.task.status || (e.task.status = "incomplete");
    return { steps: l, tasks: m, ...(null != t ? { turn: t } : {}) };
}
function ew(e) {
    let t;
    for (let n of e) (null == t || n.touched > t.touched) && (t = n);
    return t;
}
function eN(e) {
    return (
        "node" === e.kind &&
        null != e.node &&
        null == e.task_id &&
        ("task" === e.node.node_kind || "task" === e.node.id)
    );
}
function eC(e) {
    let t = [],
        n = [],
        l = null,
        a = null,
        i = 0;
    for (let [s, o] of e.entries()) {
        var r;
        let e = o.segment;
        if (
            (n.push(e ?? i),
            "thinking" === o.kind ||
                ((null == (r = o).task_id || "" === r.task_id) &&
                    ("error" === r.kind ||
                        "terminal_error" === r.kind ||
                        ("node" === r.kind && null != r.node && !eN(r)))))
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
                : ((a = { type: "todos", key: `todos-${s}`, segment: e ?? i, todos: n }), t.push(a));
            continue;
        }
        if ("assistant_delta" !== o.kind || (null != o.task_id && "" !== o.task_id)) continue;
        let u = o.message ?? "";
        if ("" !== u)
            if (null == l) {
                i++;
                let a = e ?? i;
                (n[s] = a), (l = { type: "message", key: `message-${s}`, segment: a, content: u }), t.push(l);
            } else l.content = u;
        !0 === o.message_finished && (l = null);
    }
    return { items: t, segmentOf: n };
}
function eS(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (n?.kind === "todos" && (null == n.task_id || "" === n.task_id) && null != n.items && n.items.length > 0)
            return n.items;
    }
    return null;
}
var eI = n(783791),
    eE = n(13699);
function eM(e) {
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
                className: s()(eE.Z$, eE.KH),
            }),
            (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M17.48 14.36a.56.56 0 0 1 1.04 0l.85 2.27 2.27.85c.48.18.48.86 0 1.04l-2.27.85-.85 2.27a.56.56 0 0 1-1.04 0l-.85-2.27-2.27-.85a.56.56 0 0 1 0-1.04l2.27-.85.85-2.27Z",
                className: s()(eE.Z$, eE.Q_),
            }),
        ],
    });
}
var eT = n(847374),
    eR = n(320448),
    eP = n(939249);
let e_ = i.createContext(0);
function eL(e) {
    let {
            glyph: t,
            line: n,
            live: l,
            settled: r,
            tint: o,
            detail: u,
            connected: d = !1,
            connectsDown: c = !1,
            anchor: m = !1,
        } = e,
        [h, f] = i.useState(!1),
        g = i.useContext(e_),
        x = i.useId(),
        p = i.useCallback(() => f((e) => !e), []),
        { text: j, phase: b } = (function (e) {
            let [t, n] = i.useState(e),
                [l, a] = i.useState("idle"),
                [r, s] = i.useState(e);
            return (
                r !== e && (s(e), a(e === t ? "idle" : "exit")),
                i.useEffect(() => {
                    if ("exit" !== l) return;
                    let e = setTimeout(() => {
                        n(r), a("enter");
                    }, 150);
                    return () => clearTimeout(e);
                }, [l, r]),
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
        y = h ? eT.a : eR._,
        k = null != u,
        A = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: eE.hd, children: t }),
                (0, a.jsx)(v.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: s()(eE.qo, { [eE._q]: "exit" === b, [eE.GD]: "enter" === b }),
                    children: j,
                }),
                k ? (0, a.jsx)(y, { size: "xs", color: "currentColor", className: eE.nD }) : null,
            ],
        }),
        w = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: eE.$m, children: A }, `face-${g}`),
                l
                    ? (0, a.jsx)("span", { className: s()(eE.$m, eE.pw), "aria-hidden": !0, children: A }, `shine-${g}`)
                    : null,
            ],
        });
    return (0, a.jsxs)("li", {
        className: eE.K1,
        "data-live": l,
        "data-settled": r,
        "data-connected": d,
        "data-connects-down": c,
        "data-vibegrations-turn-status": m ? "true" : void 0,
        style: null != o ? { "--custom-vibegrations-shimmer-tint": o } : void 0,
        children: [
            k
                ? (0, a.jsx)(eP.D, {
                      tag: "div",
                      className: s()(eE.ep, eE.EK),
                      "aria-expanded": h,
                      "aria-controls": x,
                      "aria-label": P.intl.formatToPlainString(R.default.s1wx5H, { activity: j }),
                      onClick: p,
                      children: w,
                  })
                : (0, a.jsx)("div", { className: eE.ep, children: w }),
            (0, a.jsx)("div", { id: x, hidden: !h, className: eE.BA, children: u }),
        ],
    });
}
var eF = n(256905),
    eq = n(514042),
    eD = n(298668);
function e$(e) {
    return s()(eD._B, { [eD.ND]: e });
}
function ez(e) {
    let { name: t, thumbSrc: n = null, compact: l = !1, subText: i, children: r, onThumbError: s } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: eD.gJ, onError: s })
                : (0, a.jsx)(eq.FileIcon, { size: l ? "xs" : "sm", color: "currentColor" }),
            (0, a.jsxs)("div", {
                className: eD.Wd,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: eD.Rr,
                        children: t,
                    }),
                    i,
                ],
            }),
            r,
        ],
    });
}
function eO(e) {
    return (0, a.jsx)("div", { className: e$(e.compact ?? !1), children: ez(e) });
}
function eU(e) {
    let { name: t, thumbSrc: n, ariaLabel: l, onClick: i, onThumbError: r } = e;
    return (0, a.jsx)(eP.D, {
        className: s()(e$(!0), eD.w8),
        onClick: i,
        "aria-label": l,
        children: ez({ name: t, thumbSrc: n, compact: !0, onThumbError: r }),
    });
}
var eG = n(866665),
    eB = n(778712),
    eW = n(730134),
    eH = n(427262);
function eV(e) {
    let { userId: t } = e,
        n = (0, A.bG)([es.default], () => es.default.getUser(t), [t]),
        l = (0, eH.tx)(n);
    if (null == n || null == l) return null;
    let i = P.intl.formatToPlainString(R.default["8s30Te"], { name: l });
    return (0, a.jsx)(eG.m, {
        text: i,
        ariaHidden: !0,
        children: (0, a.jsx)("span", {
            className: eE.jz,
            role: "img",
            "aria-label": i,
            children: (0, a.jsx)(eW.A, { user: n, size: eB._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
let eK = /^(.*?)\s*\((\+\d+)?[\s,]*([\u2212-]\d+)?\)$/,
    eY =
        /^(.*?)\s*\((\d+ lines?|\d+ match(?:es)?|no matches|\d+ files?|empty|no logs yet|\d+ not found(?:, \d+ read-only)?|\d+ read-only|\d+KB|\d+ steps?|\d+\xd7\d+(?: @\d+(?:\.\d+)?x| narrow)?|(?:low|medium|high), (?:\d+x\d+|auto)(?:, transparent)?(?:, from \d+ source images?)?)\)$/,
    eQ =
        /^(Reading|Writing|Editing|Listing|Searching|Deleting|Running|Downloading|Saving|Sending|Importing|Imported|Building|Generating|Viewing|Loaded|Updating|Registering|Collecting|Clicking|Right-clicking|Double-clicking|Dragging|Typing|Pressing|Hovering|Scrolling|Selecting|Waiting|Navigating|Going|Reloading|Capturing|Checking|Setting|Answering|Delegating|Driving|Working)(?= )/,
    eZ = {
        "text-xs/normal": "text-xs/semibold",
        "text-sm/normal": "text-sm/semibold",
        "text-md/normal": "text-md/semibold",
    };
function eX(e, t) {
    let n = eQ.exec(e);
    return null == n
        ? e
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(v.E, { tag: "span", variant: eZ[t], color: "none", children: n[1] }),
                  e.slice(n[1].length),
              ],
          });
}
function eJ(e) {
    let { text: t, variant: n, prose: l } = e;
    if (!0 === l) return t;
    let i = eK.exec(t),
        r = i?.[2],
        s = i?.[3];
    if (null != i && (null != r || null != s))
        return (0, a.jsxs)(a.Fragment, {
            children: [
                eX(i[1], n),
                null == r ? null : (0, a.jsxs)("span", { className: eE.MM, children: [" ", r] }),
                null == s ? null : (0, a.jsxs)("span", { className: eE.ie, children: [" ", s] }),
            ],
        });
    let o = eY.exec(t);
    return null == o
        ? eX(t, n)
        : (0, a.jsxs)(a.Fragment, {
              children: [eX(o[1], n), (0, a.jsxs)("span", { className: eE.qZ, children: [" ", o[2]] })],
          });
}
var e0 = n(229775);
function e1(e) {
    let { projectId: t, node: n, presentation: l = "row", active: r = !1 } = e,
        [o, u] = i.useState(!1),
        d = i.useId(),
        c = i.useCallback(() => u((e) => !e), []),
        m = ek(n),
        h = n.detail,
        f = "failed" === n.status ? "text-feedback-critical" : "detail" === l ? "text-muted" : "text-default",
        g = "text-muted" === f,
        x = r && g ? "none" : o && g ? "currentColor" : f,
        p = s()(eE.iq, { [e0.Hz]: r && g }),
        j = "detail" === l ? "text-md/normal" : "text-sm/normal",
        b = "detail" === l ? "text-sm/normal" : "text-xs/normal",
        y = null != t ? n.screenshots : [];
    if (0 === h.length && 0 === y.length)
        return (0, a.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: eE.Dx,
            children: (0, a.jsx)(v.E, {
                tag: "div",
                variant: j,
                color: x,
                selectable: !0,
                className: p,
                children: (0, a.jsx)(eJ, { text: m, variant: j, prose: !0 }),
            }),
        });
    let k = o ? eT.a : eR._;
    return (0, a.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: eE.Dx,
        children: [
            (0, a.jsxs)(eP.D, {
                tag: "div",
                className: eE.kG,
                "aria-expanded": o,
                "aria-controls": d,
                "aria-label": P.intl.formatToPlainString(R.default.z4KWsN, { step: m }),
                onClick: c,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: j,
                        color: x,
                        className: p,
                        children: (0, a.jsx)(eJ, { text: m, variant: j, prose: !0 }),
                    }),
                    (0, a.jsx)(k, { size: "xs", color: "currentColor", className: eE.Ue }),
                ],
            }),
            (0, a.jsxs)("div", {
                id: d,
                hidden: !o,
                className: eE.yJ,
                children: [
                    h.map((e, t) => {
                        let l = n.detailDrivenBy[t];
                        return (0, a.jsxs)(
                            "div",
                            {
                                className: eE.l6,
                                children: [
                                    (0, a.jsx)(v.E, {
                                        tag: "div",
                                        variant: b,
                                        color: r && g ? "none" : "text-muted",
                                        selectable: !0,
                                        className: s()({ [e0.Hz]: r && g }),
                                        children: (0, a.jsx)(eJ, { text: e, variant: b }),
                                    }),
                                    null != l ? (0, a.jsx)(eV, { userId: l }) : null,
                                ],
                            },
                            t,
                        );
                    }),
                    null != t && y.length > 0
                        ? (0, a.jsx)("div", {
                              className: eE.y8,
                              children: y.map((e) => (0, a.jsx)(e6, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function e2() {}
function e6(e) {
    let { projectId: t, screenshotId: n } = e,
        [l, r] = i.useState(null),
        [s, o] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        return (
            (0, m.aF)(t, n).then(
                (t) => {
                    e || r(t);
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
        d = i.useCallback(() => {
            (0, m.aF)(t, n).then((e) => {
                (0, eF.R)({
                    items: [{ type: "IMAGE", url: e, alt: u }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, e2);
        }, [t, n, u]);
    return s ? null : (0, a.jsx)(eU, { name: u, thumbSrc: l, ariaLabel: u, onClick: d, onThumbError: () => o(!0) });
}
function e3(e) {
    let { projectId: t, steps: n, fallbackLabel: l, live: i, durationMs: r, connectsDown: s = !1, closed: o = !1 } = e,
        u = ew(n),
        d = i ? void 0 : r,
        c =
            null != d
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
                  })(d)
                : null != u
                  ? ek(u)
                  : (l ?? P.intl.string(R.default.nv6pUM)),
        m = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0);
    return (0, a.jsx)(eL, {
        glyph: (0, a.jsx)(eM, {}),
        line: c,
        anchor: !0,
        live: i,
        settled: null != d || (!i && o),
        connectsDown: s,
        detail: m
            ? (0, a.jsx)("ol", {
                  className: eE.dO,
                  children: n.map((e) =>
                      (0, a.jsx)(e1, { projectId: t, node: e, presentation: "detail", active: i && e === u }, e.id),
                  ),
              })
            : void 0,
    });
}
var e5 = n(29080),
    e7 = n(46054);
function e4(e) {
    let { steps: t, content: n, hasProposal: l, hasAttachments: a } = e,
        i = eC(t).items,
        r = i.filter((e) => "message" === e.type).at(-1),
        s = (function (e) {
            for (let t = e.length - 1; t >= 0; t--) {
                let n = e[t];
                if (null != n) {
                    if ("assistant_delta" === n.kind && null != n.message && "" !== n.message) return !0;
                    if (!eN(n) && ("node" === n.kind || "error" === n.kind || "terminal_error" === n.kind)) break;
                }
            }
            return !1;
        })(t),
        o = s && null != r && r.content.trim() === n.trim(),
        u = !l && "" !== n && !o;
    return {
        streamed: i,
        lastStreamedMessage: r,
        showsClosingMessage: u,
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: a, showsClosingMessage: u, endsOnStreamedMessage: s }),
    };
}
var e8 = n(478016),
    e9 = n(34136);
function te(e) {
    let { title: t, trailing: n, children: l, className: i, headerClassName: r, ...o } = e;
    return (0, a.jsxs)("section", {
        className: s()(e9.Nr, i),
        ...o,
        children: [
            (0, a.jsxs)("header", {
                className: s()(e9.wx, null != n && e9.o5, r),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var tt = n(113757);
function tn(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        o = null == l;
    return (0, a.jsxs)(eP.D, {
        className: s()(tt.nM, { [tt.f1]: o, [tt.CZ]: n }),
        onClick: o ? void 0 : () => l(t),
        "aria-label": P.intl.formatToPlainString(R.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": o,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: tt.jo,
                children: [
                    n
                        ? (0, a.jsx)(e8.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: tt.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: tt.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "div",
                      id: r,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function tl(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                s((t) => new Set(t).add(e.id)), l?.(e);
            },
            [l],
        );
    return (0, a.jsx)(te, {
        title: P.intl.string(R.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                tn,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var ta = n(673724),
    ti = n(375068);
function tr(e) {
    let { projectId: t, attachments: n } = e,
        l = n.filter(ts),
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback((e) => {
            s((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, a.jsx)("div", {
        className: ti.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(to, { name: e.name }, n)
                : ts(e)
                  ? (0, a.jsx)(
                        td,
                        {
                            projectId: t,
                            viewableImages: l,
                            viewerIndex: l.indexOf(e),
                            unavailableIds: r,
                            markUnavailable: o,
                        },
                        n,
                    )
                  : (0, a.jsx)(tu, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function ts(e) {
    return null != e.id && ta.Wb.has(e.content_type);
}
function to(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? P.intl.formatToPlainString(R.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)(eO, { name: l, compact: !0 });
}
function tu(e) {
    let { projectId: t, id: n, name: l } = e,
        [r, s] = i.useState(!1),
        o = i.useCallback(() => {
            (0, m.n6)(t, n)
                .then(async (e) => {
                    if (!e) return void s(!0);
                    let l = document.createElement("a");
                    (l.href = await (0, m.PK)(t, n, { download: !0 })),
                        (l.target = "_blank"),
                        (l.rel = "noopener noreferrer"),
                        l.click();
                })
                .catch(() => {});
        }, [t, n]);
    return r
        ? (0, a.jsx)(to, { name: l, unavailable: !0 })
        : (0, a.jsx)(eU, {
              name: l,
              thumbSrc: null,
              ariaLabel: P.intl.formatToPlainString(R.default.gV5YcR, { name: l }),
              onClick: o,
          });
}
function td(e) {
    let { projectId: t, viewableImages: n, viewerIndex: l, unavailableIds: r, markUnavailable: s } = e,
        { id: o, name: u } = n[l],
        [d, c] = i.useState(null),
        h = r.has(o),
        [f, g] = i.useState(0);
    i.useEffect(() => {
        let e = !1;
        return (
            (0, m.PK)(t, o).then(
                (t) => {
                    e || c(t);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, o, f]);
    let x = i.useCallback(() => {
        Promise.all(
            n.map(async (e) => (r.has(e.id) ? null : { type: "IMAGE", url: await (0, m.PK)(t, e.id), alt: e.name })),
        ).then(
            (e) => {
                null != e[l] &&
                    (0, eF.R)({
                        items: e.filter((e) => null != e),
                        startingIndex: e.slice(0, l).filter((e) => null != e).length,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
            },
            () => {},
        );
    }, [t, n, l, r]);
    return h
        ? (0, a.jsx)(to, { name: u, unavailable: !0 })
        : (0, a.jsx)(eU, {
              name: u,
              thumbSrc: d,
              ariaLabel: P.intl.formatToPlainString(R.default.QUFLUq, { name: u }),
              onClick: x,
              onThumbError: () => {
                  c(null),
                      (0, m.n6)(t, o).then(
                          (e) => {
                              e ? 0 === f && g(1) : s(o);
                          },
                          () => {},
                      );
              },
          });
}
var tc = n(430392),
    tm = n(632015),
    th = n(824757);
function tf(e) {
    let { label: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: th.uW,
        children: [(0, a.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }), n],
    });
}
function tg(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(tf, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: th.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: th.jw,
                              children: (0, a.jsx)(v.E, {
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
function tx(e) {
    let { isActivity: t, hasWidget: n } = e,
        l = t ? z.k : tc.RobotIcon;
    return (0, a.jsxs)("span", {
        className: th.K2,
        children: [
            n
                ? (0, a.jsxs)("span", {
                      className: th.L6,
                      children: [
                          (0, a.jsx)(tm.f, {
                              size: "custom",
                              width: 16,
                              height: 16,
                              color: "currentColor",
                              "aria-hidden": !0,
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              tag: "span",
                              children: P.intl.string(R.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("span", {
                className: th.L6,
                children: [
                    (0, a.jsx)(l, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: P.intl.string(t ? P.t.IC5Ann : R.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function tp(e) {
    let { proposal: t } = e;
    return (0, a.jsx)(te, {
        title: P.intl.string(R.default["60htw+"]),
        trailing: (0, a.jsx)(tx, { isActivity: !0 === t.is_activity, hasWidget: null != t.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, a.jsxs)("div", {
            className: th.rf,
            children: [
                (0, a.jsx)(v.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: t.summary,
                }),
                t.changes.length > 0
                    ? (0, a.jsx)(tf, {
                          label: P.intl.string(R.default.KLyB8Y),
                          children: (0, a.jsx)("ul", {
                              className: th.p_,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsx)(
                                      "li",
                                      {
                                          className: th.Aw,
                                          children: (0, a.jsx)(v.E, {
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
                    ? (0, a.jsx)(tf, {
                          label: P.intl.string(P.t["0hKkS+"]),
                          children: (0, a.jsx)("ul", {
                              className: th.p_,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: th.uX,
                                          children: [
                                              (0, a.jsxs)(v.E, {
                                                  variant: "experimental/body-md/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, a.jsx)(v.E, {
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
                (0, a.jsx)(tg, { label: P.intl.string(R.default.ieqTtP), names: t.bot_permissions ?? [] }),
                (0, a.jsx)(tg, { label: P.intl.string(R.default.Cn9qix), names: t.privileged_intents ?? [] }),
            ],
        }),
    });
}
var tv = n(192308),
    tj = n(479191);
function tb(e) {
    let { projectId: t, request: l } = e,
        r = i.useCallback(() => {
            (0, tv.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("338013"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: l });
            });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: tj.Lo,
        children: [
            (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(R.default["/e28TK"]),
            }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : P.intl.string(R.default.jxvtin),
            }),
            (0, a.jsx)("div", {
                className: tj.cS,
                children: l.fields.map((e) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: tj.$H,
                            children: (0, a.jsx)(v.E, {
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
                className: tj.sq,
                children: (0, a.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: r,
                    text: P.intl.string(R.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var ty = n(976814),
    tk = n(973e3);
function tA(e) {
    let { projectId: t, request: n } = e,
        l = (0, A.bG)([m.Ay], () => m.Ay.getSettings(t)),
        r = (n.keys ?? []).map((e) => l?.schema.find((t) => t.key === e)).filter((e) => null != e),
        s = i.useCallback(() => {
            (0, ty.A)(t, { scopeKeys: n.keys, note: n.note, notifyAgent: !0 });
        }, [t, n]);
    return (0, a.jsxs)("article", {
        className: tk.Mk,
        children: [
            (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(R.default.wgDhiQ),
            }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != n.note && "" !== n.note ? n.note : P.intl.string(R.default["V+DBhs"]),
            }),
            r.length > 0
                ? (0, a.jsx)("div", {
                      className: tk.R6,
                      children: r.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: tk.K4,
                                  children: (0, a.jsx)(v.E, {
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
                className: tk.p0,
                children: (0, a.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: P.intl.string(R.default["KO2xN+"]),
                }),
            }),
        ],
    });
}
function tw(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tN(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tC(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tS(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tI(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tE(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tM(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tT(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tR(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tP(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function t_(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tL() {
    return [
        { key: "snail", Illocon: tw, tint: "var(--illo-yellow-40)", name: tq(R.default["2l3AEQ"]) },
        { key: "goat", Illocon: tN, tint: "var(--illo-orange-40)", name: tq(R.default["+FPL+I"]) },
        { key: "frog", Illocon: tC, tint: "var(--illo-green-40)", name: tq(R.default.w4GOfR) },
        { key: "bunny", Illocon: tS, tint: "var(--illo-pink-40)", name: tq(R.default.XmZT9M) },
        { key: "cat", Illocon: tI, tint: "var(--illo-pink-40)", name: tq(R.default.NnydwQ) },
        { key: "caterpillar", Illocon: tE, tint: "var(--illo-green-40)", name: tq(R.default["4iXcNT"]) },
        { key: "butterfly", Illocon: tM, tint: "var(--illo-purple-40)", name: tq(R.default.DoTGt5) },
        { key: "dog", Illocon: tT, tint: "var(--illo-yellow-40)", name: tq(R.default["9zxqmP"]) },
        { key: "spider", Illocon: tR, tint: "var(--illo-orange-40)", name: tq(R.default.HF0T3L) },
        { key: "bee", Illocon: tP, tint: "var(--illo-yellow-40)", name: tq(R.default.XTzDga) },
        { key: "bot", Illocon: t_, tint: "var(--illo-purple-40)", name: tq(R.default.abtC2b) },
    ];
}
function tF(e) {
    return tL().find((t) => t.key === e);
}
function tq(e) {
    return P.intl.string(e);
}
function tD(e) {
    let t = tL(),
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
var t$ = n(683063);
function tz(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : P.intl.string(R.default.MdXWEK);
}
function tO(e) {
    let { projectId: t, lane: n, Illocon: l, tint: i, name: r, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        d = ew(n.steps),
        c = u
            ? null != d
                ? ek(d)
                : tz(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(tz(e));
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
              })(o),
        m =
            0 === n.steps.length && 0 === o.detail.length
                ? void 0
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: eE.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            e1,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === d },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, a.jsx)(
                                  "div",
                                  {
                                      className: eE.iq,
                                      children: (0, a.jsx)(eJ, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  });
    return (0, a.jsx)(eL, {
        glyph: (0, a.jsx)(t$.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: r,
            body: tz(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: eE.nC,
                children: (0, a.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: u,
        settled: !u,
        tint: i,
        detail: m,
        connected: !0,
        connectsDown: s,
    });
}
var tU = n(140735),
    tG = n(329456);
let tB = [];
function tW(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: tG.xL,
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
            className: tG.L5,
            viewBox: "0 0 10.1668 10.1668",
            "aria-hidden": !0,
            focusable: "false",
            children: (0, a.jsx)("path", { d: "M1 5.52L3.92 9.17L9.17 1" }),
        }),
    });
}
function tH(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : tB), [n, t]),
        r = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [o, u] = i.useState(l),
        [d, c] = i.useState(s),
        [m, h] = i.useState(!1);
    d !== s && (c(s), u([...l, ...o.filter((e) => !r.has(e.key))]), 0 === l.length && h(!1));
    let f = o.some((e) => !r.has(e.key));
    if (
        (i.useEffect(() => {
            if (!f) return;
            let e = setTimeout(() => u(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [f, l, n]),
        i.useEffect(() => {
            if (!n || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => h(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [n, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        x = o.length - g.length;
    return (0, a.jsxs)("span", {
        className: tG.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    t$.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: tG.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: tG.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function tV(e) {
    let t,
        { todos: n, provisional: l, agents: r } = e,
        s = (function (e) {
            let t = e.join("\0"),
                [n, l] = i.useState(() => new Set(e)),
                [a, r] = i.useState(t),
                [s, o] = i.useState(() => new Set());
            return (
                a !== t && (r(t), l(new Set(e)), o(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                i.useEffect(() => {
                    if (0 === s.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => o(new Set()));
                        });
                    return () => {
                        cancelAnimationFrame(t), cancelAnimationFrame(e);
                    };
                }, [s]),
                s
            );
        })(i.useMemo(() => n.map((e) => e.id), [n])),
        o =
            ((t = (r ?? tB).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of r ?? tB) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: tG.p_,
        children: [
            n.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: tG.AS,
                        "data-status": e.status,
                        "data-arriving": s.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(tW, { status: e.status }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: tG.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", { className: tG.Qq, children: e.text }),
                            }),
                            (0, a.jsx)(tH, { agents: o.get(e.id) ?? tB, active: "in_progress" === e.status }),
                        ],
                    },
                    e.id,
                ),
            ),
            null != l
                ? (0, a.jsxs)("li", {
                      className: tG.AS,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(tW, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: tG.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: tG.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tK(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: i = !0 } = e,
        { completed: r, total: s } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === s
        ? null
        : (0, a.jsxs)(te, {
              title: P.intl.string(R.default.qCRC6c),
              trailing: (0, a.jsx)(v.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: P.intl.formatToPlainString(R.default.bQvqly, { completed: r, total: s }),
              }),
              className: tG.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  i
                      ? (0, a.jsx)(tU.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: P.intl.formatToPlainString(R.default["QG/EiF"], { completed: r, total: s }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: tG.rf,
                      children: (0, a.jsx)(tV, { todos: t, provisional: n, agents: l }),
                  }),
              ],
          });
}
var tY = n(165648);
function tQ(e) {
    let t = tD(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? tF(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: tz(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function tZ(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            durationMs: r,
            interrupted: s = !1,
            todos: o,
            provisionalTodo: u,
            segment: d,
            hostsChecklist: c = !0,
            reportsDuration: m = !0,
            closed: h = !1,
            segmentDurationMs: f,
        } = e,
        g = i.useMemo(() => eA(n, { turnActive: l }), [n, l]),
        x = i.useMemo(
            () =>
                null == d
                    ? g
                    : {
                          ...g,
                          steps: g.steps.filter((e) => e.segment === d),
                          tasks: g.tasks.filter((e) => e.task.segment === d),
                      },
            [g, d],
        );
    if (s)
        return (0, a.jsx)("ol", {
            className: eE.pj,
            "data-live": !1,
            children: (0, a.jsx)(eL, {
                glyph: (0, a.jsx)(e5.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: P.intl.string(R.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let p = l ? void 0 : (f ?? (m ? (g.turn?.durationMs ?? r) : void 0)),
        v = c ? (eS(n) ?? o ?? null) : null,
        j = null != v && v.length > 0;
    if (0 === x.steps.length && 0 === x.tasks.length && !j) return null;
    let b = x.tasks,
        y = tD(b.map((e) => e.taskId)),
        k = !h && (l || b.some((e) => "running" === e.task.status)),
        A = tQ(b);
    return (0, a.jsx)(e_.Provider, {
        value: b.length,
        children: (0, a.jsxs)("ol", {
            className: eE.pj,
            "data-live": k,
            children: [
                (0, a.jsx)(e3, {
                    projectId: t,
                    steps: x.steps,
                    fallbackLabel: b.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: l,
                    closed: h,
                    durationMs: p,
                    connectsDown: b.length > 0,
                }),
                b.map((e, n) => {
                    let l = null != e.task.helperMark ? tF(e.task.helperMark) : void 0,
                        i = l ?? y.get(e.taskId);
                    return null == i
                        ? null
                        : (0, a.jsx)(
                              tO,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: i.Illocon,
                                  tint: i.tint,
                                  name: null != l && null != e.task.helperName ? e.task.helperName : i.name,
                                  connectsDown: n < b.length - 1,
                              },
                              e.taskId,
                          );
                }),
                j
                    ? (0, a.jsx)("li", {
                          className: eE.YO,
                          children: (0, a.jsx)(tK, { todos: v, provisional: u, agents: A }),
                      })
                    : null,
            ],
        }),
    });
}
function tX(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: r,
            ideas: o,
            attachments: u,
            secretRequest: d,
            settingsRequest: c,
            onPickIdea: m,
            pickedIdeaIds: h,
            sideReply: f = !1,
            hoistedProse: g = !1,
        } = e,
        {
            streamed: x,
            lastStreamedMessage: p,
            showsClosingMessage: j,
            attachmentsHost: b,
        } = i.useMemo(
            () => e4({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        y = null == u ? null : (0, a.jsx)(tr, { projectId: t, attachments: u }),
        k = null == y ? null : (0, a.jsx)("div", { className: eE.MT, children: y }),
        A = f
            ? (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: P.intl.string(R.default.OAjkIT),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: eE.ue,
        children: [
            x.length > 0 && !g
                ? (0, a.jsx)("ol", {
                      className: eE.dO,
                      children: x
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: eE.DV,
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: tY.PT,
                                              children: e7.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === b && e === p ? k : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(tp, { proposal: r })
                : j
                  ? (0, a.jsxs)("div", {
                        className: s()(eE.ky, e0.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: s()(tY.PT, eE.cW),
                                children: e7.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === b ? k : null,
                            A,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: s()(eE.ky, e0.XR),
                      children: (0, a.jsx)(tb, { projectId: t, request: d }),
                  })
                : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: s()(eE.ky, e0.XR),
                      children: (0, a.jsx)(tA, { projectId: t, request: c }),
                  })
                : null,
            "standalone" === b ? y : null,
            null != o && o.length > 0 ? (0, a.jsx)(tl, { ideas: o, pickedIdeaIds: h, onPick: m }) : null,
            j ? null : A,
        ],
    });
}
n(323874), n(14289), n(35956);
var tJ = n(475358),
    t0 = n(922016),
    t1 = n(980707),
    t2 = n(477782),
    t6 = n(81369),
    t3 = n(717400),
    t5 = n(663341),
    t7 = n(826745),
    t4 = n(783977),
    t8 = n(559647),
    t9 = n(285796),
    ne = n(775602),
    nt = n(311656),
    nn = n(789438);
let nl = ta.Is;
function na(e) {
    let { text: t } = e,
        [n, l] = i.useState(""),
        [r, s] = i.useState("enterStart"),
        [o, u] = i.useState("");
    t !== o && (u(t), t !== n && ("" === n ? (l(t), s("enterStart")) : "idle" === r && s("exit"))),
        i.useEffect(() => {
            if ("exit" === r) {
                let e = window.setTimeout(() => {
                    l(t), s("enterStart");
                }, 250);
                return () => window.clearTimeout(e);
            }
            if ("enterStart" === r) {
                let e = 0,
                    t = window.requestAnimationFrame(() => {
                        e = window.requestAnimationFrame(() => s("idle"));
                    });
                return () => {
                    window.cancelAnimationFrame(t), 0 !== e && window.cancelAnimationFrame(e);
                };
            }
        }, [r, t]);
    let d = "exit" === r ? nn.t0 : "enterStart" === r ? nn.Rj : "";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { className: `${nn.xM} ${nn.nT} ${d}`, children: n }),
            (0, a.jsx)(tJ.e, { shortcut: "tab", className: `${nn.xT} ${nn.nT} ${d}`, keyClassName: nn.IS }),
        ],
    });
}
let ni = 0;
function nr(e) {
    let {
            canSend: t,
            stopped: n,
            running: l,
            restoring: r = !1,
            onSend: s,
            onInterrupt: o,
            onUploadFile: u,
            onDeleteFile: d,
            onApprove: c,
            onImport: m,
            suggestion: h,
            questionOpen: f = !1,
            modelSettings: g,
            onModelSettingsChange: x,
        } = e,
        [p, v] = i.useState(""),
        j = (0, A.bG)([ne.Ay], () => ne.Ay.isSubmitButtonEnabled),
        [b, y] = i.useState([]),
        [k, w] = i.useState(!1),
        [N, C] = i.useState(!1);
    i.useEffect(() => {
        l || C(!1);
    }, [l]);
    let S = i.useRef(null),
        I = i.useRef([]),
        E = i.useRef(new Set()),
        M = i.useRef(d);
    M.current = d;
    let T = i.useCallback((e) => {
            (I.current = e), y(e);
        }, []),
        _ = i.useCallback((e) => {
            M.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    i.useEffect(() => {
        let e = E.current;
        return () => {
            for (let t of I.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && _(t.ref);
        };
    }, [_]);
    let L = i.useCallback(
            (e, t) => {
                if (E.current.has(e)) return;
                let n = I.current;
                n.some((t) => t.localId === e) && T(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [T],
        ),
        F = i.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...I.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++ni,
                        i = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= nl) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.DlX57a, { count: nl }),
                        });
                        continue;
                    }
                    if (!(0, ta.x5)(l.size, e)) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.cI7t94, {
                                size: (0, ta.ZJ)((0, ta.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let r = ta.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...i, previewUrl: r }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: l } of (T(t), n))
                    u(e).then(
                        (e) => {
                            E.current.has(l) ? _(e) : L(l, { status: "ready", ref: e });
                        },
                        (e) => {
                            E.current.has(l) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                L(l, { status: "error", errorText: P.intl.string(R.default.GwEHvn) }));
                        },
                    );
            },
            [_, u, L, T],
        ),
        q = i.useCallback(
            (e) => {
                let t = I.current,
                    n = t.find((t) => t.localId === e);
                E.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && _(n.ref),
                    T(t.filter((t) => t.localId !== e));
            },
            [_, T],
        ),
        D = b.every((e) => "ready" === e.status),
        $ = "" !== p.trim() || b.length > 0,
        z = t && $ && D,
        O = i.useCallback(() => {
            if (!z) return;
            let e = I.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (s(p, e.length > 0 ? e : void 0), I.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            v(""), T([]);
        }, [z, p, s, T]),
        U = i.useCallback(
            (e) => {
                e.preventDefault(), O();
            },
            [O],
        ),
        G = i.useCallback(() => {
            null == o || N || (C(!0), o());
        }, [o, N]),
        B = null == h || "" !== p || !t || n || r ? null : h,
        W = i.useCallback(
            (e) => {
                if ("Escape" === e.key && l && null != o && !N) {
                    e.preventDefault(), e.stopPropagation(), G();
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != B) {
                    e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), v(B);
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != c && (e.preventDefault(), c());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), O());
            },
            [O, c, l, o, N, G, B],
        ),
        H = i.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), F(n));
            },
            [t, F],
        ),
        V = i.useCallback(
            (e) => {
                e.preventDefault(), w(!1), t && F(Array.from(e.dataTransfer.files));
            },
            [t, F],
        ),
        K = i.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), w(!0));
        }, []),
        Y = i.useCallback(
            (e) => {
                F(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [F],
        ),
        Q = i.useRef(null),
        Z = i.useRef(null),
        [X, J] = i.useState(0),
        [ee, et] = i.useState(!1);
    i.useEffect(() => {
        if (0 === p.length) return void et(!1);
        let e = Q.current?.querySelector("textarea");
        if (null != e) {
            let t = nu(e);
            null != t && J(t);
        }
        et(!0);
        let t = setTimeout(() => et(!1), ns);
        return () => clearTimeout(t);
    }, [p]);
    let en = i.useMemo(() => ({ "--custom-glow-x": `${X}px` }), [X]),
        el = ee ? ` ${nn.EB}` : "",
        ea = null != B;
    return (0, a.jsxs)("form", {
        onSubmit: U,
        onDrop: V,
        onDragOver: K,
        onDragLeave: () => w(!1),
        className: k ? `${nn.DA} ${nn.pV}` : nn.DA,
        children: [
            b.length > 0
                ? (0, a.jsx)("div", {
                      className: nn.lN,
                      children: b.map((e) => (0, a.jsx)(nd, { draft: e, onRemove: q }, e.localId)),
                  })
                : null,
            (0, a.jsx)("span", { className: `${nn.wg} ${nn.LP}${el}`, style: en, "aria-hidden": !0 }),
            (0, a.jsx)("span", { className: `${nn.wg} ${nn.L3}${el}`, style: en, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: nn.VA,
                ref: Q,
                children: [
                    (0, a.jsx)("input", {
                        ref: S,
                        type: "file",
                        multiple: !0,
                        onChange: Y,
                        className: nn.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(t0.Y, {
                        targetElementRef: Z,
                        position: "top",
                        align: "left",
                        animation: t0.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, a.jsx)(t1.W, {
                                "data-menu-migrated": !0,
                                navId: "vibegrations-composer-attach",
                                "aria-label": P.intl.string(P.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, a.jsxs)(t2.rX, {
                                    children: [
                                        (0, a.jsx)(t2.Dr, {
                                            id: "upload-file",
                                            label: P.intl.string(P.t["d3+iYs"]),
                                            iconLeft: t6.H,
                                            leadingAccessory: { type: "icon", icon: t6.H },
                                            action: () => S.current?.click(),
                                        }),
                                        null != m
                                            ? (0, a.jsx)(t2.Dr, {
                                                  id: "import-project",
                                                  label: P.intl.string(R.default.edKajy),
                                                  iconLeft: t3.q,
                                                  leadingAccessory: { type: "icon", icon: t3.q },
                                                  action: m,
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
                                ref: Z,
                                type: "button",
                                className: `${nn.Y0} ${nn.nu}`,
                                disabled: !t,
                                "aria-label": P.intl.string(P.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": l,
                                children: (0, a.jsx)(t5.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: nn.Qu,
                                }),
                            });
                        },
                    }),
                    null == B
                        ? null
                        : (0, a.jsx)("div", {
                              className: nn.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(na, { text: B }),
                          }),
                    (0, a.jsx)(t7.y, {
                        value: p,
                        onChange: (e) => v(e.currentTarget.value),
                        onKeyDown: W,
                        onPaste: H,
                        placeholder: r
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
                        className: nn.jp,
                    }),
                    (0, a.jsx)("div", {
                        className: nn.Sz,
                        children:
                            l && null != o
                                ? (0, a.jsx)(eG.m, {
                                      text: P.intl.string(R.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${nn.Y0} ${nn.$E}`,
                                          disabled: N,
                                          onClick: G,
                                          "aria-label": P.intl.string(R.default.KdgI4k),
                                          children: (0, a.jsx)(e5.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != g && null != x
                                  ? (0, a.jsx)(nt.A, {
                                        settings: g.settings,
                                        choices: g.choices,
                                        disabled: !t,
                                        onChange: x,
                                        className: `${nn.Y0} ${nn.$E}`,
                                        icon: (0, a.jsx)(t4.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    j
                        ? (0, a.jsxs)("div", {
                              className: nn.fF,
                              children: [
                                  (0, a.jsx)("div", { className: nn.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: nn.rt,
                                      disabled: !z,
                                      "aria-label": P.intl.string(R.default["22GHMt"]),
                                      children: (0, a.jsx)(t8.SendMessageIcon, {
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
let ns = 1500,
    no = [
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
function nu(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = nu.mirror;
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
                (nu.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of no) t.style.setProperty(e, n.getPropertyValue(e));
    (t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length));
    let l = document.createElement("span");
    (l.textContent = "\u200B"), t.appendChild(l);
    let a = l.offsetLeft;
    return (t.textContent = ""), e.offsetLeft + a - e.scrollLeft;
}
function nd(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(eO, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(h.y, { type: h.t.SPINNING_CIRCLE_SIMPLE, className: nn.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: nn.o1,
                onClick: () => n(t.localId),
                "aria-label": P.intl.string(R.default["3HWvgk"]),
                children: (0, a.jsx)(t9.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
nu.mirror = null;
var nc = n(320095),
    nm = n(963852),
    nh = n(521981),
    nf = n(763754),
    ng = n(491182),
    nx = n(438729),
    np = n(622868),
    nv = n(308334),
    nj = n(837528),
    nb = n(375199),
    ny = n(715628),
    nk = n(752636),
    nA = n(9842),
    nw = n(589022),
    nN = n(95701),
    nC = n(994500),
    nS = n(967198),
    nI = n(803306);
let nE = new Set(),
    nM = new Map();
function nT(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
let nR = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function nP(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function n_(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function nL(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let a = n_(e, t),
        i = e.codePointAt(t);
    if (
        (null != i &&
            (8205 === i ||
                (i >= 65024 && i <= 65039) ||
                (i >= 127995 && i <= 127999) ||
                (i >= 768 && i <= 879) ||
                (i >= 8400 && i <= 8447) ||
                (i >= 65056 && i <= 65071) ||
                (i >= 917536 && i <= 917631))) ||
        8205 === a
    )
        return !0;
    if (nP(a) && nP(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && nP(n_(e, l)); ) n++, (l -= 2);
        return n % 2 == 1;
    }
    return !1;
}
function nF(e, t) {
    let { streaming: n } = t,
        l = (0, A.bG)([ne.Ay], () => ne.Ay.useReducedMotion),
        a = n && !l,
        [r, s] = i.useState(() => ({ target: e, length: e.length })),
        o = r;
    o.target !== e &&
        (o = {
            target: e,
            length: a
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let a = Math.min(l, t.length),
                          i = 0;
                      for (; i < a && e.charCodeAt(i) === t.charCodeAt(i); ) i++;
                      for (; i > 0 && nL(t, i); ) i--;
                      return i;
                  })(o.target, e, o.length)
                : e.length,
        }),
        a || o.length === e.length || (o = { target: e, length: e.length }),
        o !== r && s(o);
    let u = a && o.length < e.length,
        d = i.useRef(o);
    i.useLayoutEffect(() => {
        d.current = o;
    });
    let c = i.useRef(0),
        m = i.useRef(0);
    i.useEffect(() => {
        if (u)
            return (
                (m.current = 0),
                (c.current = requestAnimationFrame(function e(t) {
                    let n = 0 === m.current ? 32 : t - m.current;
                    if (n >= 32) {
                        m.current = t;
                        let e = d.current,
                            l = (function (e) {
                                let { target: t, revealed: n, elapsedMs: l } = e,
                                    a = Math.min(Math.max(n, 0), t.length),
                                    i = t.length - a;
                                if (i <= 0) return a;
                                if (i > 900) return t.length;
                                let r = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, i / 280) * Math.max(l, 0))),
                                );
                                var s = (function (e, t, n) {
                                    if (n >= e.length) return n;
                                    let l = n;
                                    for (; l > t + 1 && n - l < 12 && nR.has(e.charAt(l - 1)); ) l--;
                                    return nR.has(e.charAt(l - 1)) ? n : l;
                                })(t, a, Math.min(t.length, a + r));
                                let o = s;
                                for (; o < t.length && o - s < 32 && nL(t, o); ) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    c.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(c.current)
            );
    }, [u]),
        i.useEffect(() => {
            if (u)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = d.current;
                s({ target: e, length: e.length });
            }
        }, [u]);
    let h = Math.min(o.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: a && h < e.length };
}
var nq = n(441136);
let nD = (0, nN.createChannelRecord)({ id: "vibegrations-builder", type: I.rbe.DM }),
    n$ = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function nz(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: s()(nq.Yq, { [nq.x1]: t }), children: e });
}
function nO(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function nU(e, t, n) {
    let { content: l } = (0, nb.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        r = i.useMemo(() => ({ message: e, channel: nD, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(nx.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, ny.A)(r, l);
}
function nG(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, nj.m)(e, nD, t.usernameProfile, l),
        o = (0, nj.Jo)(t.avatarProfile, l),
        u = (0, A.bG)([nS.A], () => nS.A.getGuildId()),
        d = (0, A.bG)([es.default], () => es.default.getCurrentUser()),
        c = i.useCallback(
            (t) => {
                let n = es.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(nw.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
            },
            [d, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: c,
        guildId: u ?? void 0,
    };
}
function nB(e) {
    let { baseMessage: t, referenced: n, onJumpToReplied: l } = e,
        r = i.useMemo(
            () => ("" !== n.content ? (0, nh.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null),
            [n],
        ),
        { isReplyAuthorBlocked: s, isReplyAuthorIgnored: o } = (0, A.cf)(
            [nC.A],
            () => ({
                isReplyAuthorBlocked: nC.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: nC.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        u = (0, nf.X4)(n),
        d = (0, nf.X4)(t),
        c = nG(n);
    return (0, a.jsx)(nv.A, {
        repliedAuthor: u,
        baseAuthor: d,
        baseMessage: t,
        channel: nD,
        referencedMessage: { state: nA.a.LOADED, message: n },
        content: r,
        compact: !1,
        isReplyAuthorBlocked: s,
        isReplyAuthorIgnored: o,
        isReplySpineClickable: null != l,
        showReplySpine: !0,
        renderPopout: c.renderPopout,
        showAvatarPopout: c.showAvatarPopout,
        showUsernamePopout: c.showUsernamePopout,
        onClickAvatar: c.onClickAvatar,
        onClickUsername: c.onClickUsername,
        onClickReply: l,
        onPopoutRequestClose: c.onPopoutRequestClose,
    });
}
function nW(e) {
    let { message: t, author: n } = e,
        l = nG(t);
    return (0, a.jsx)(np.Ay, {
        message: t,
        channel: nD,
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
function nH(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s } = e;
    i.useEffect(
        () =>
            (function (e) {
                if (null == e || nE.has(e) || null != es.default.getUser(e)) return;
                let t = nM.get(e) ?? 0;
                t >= 3 ||
                    (nM.set(e, t + 1),
                    nE.add(e),
                    nI
                        .getUser(e)
                        .finally(() => nE.delete(e))
                        .catch(() => {}));
            })(l),
        [l],
    );
    let o = (0, A.bG)(
            [es.default],
            () => nT(l, null != l ? es.default.getUser(l) : null, es.default.getCurrentUser()),
            [l],
        ),
        u = i.useMemo(() => (0, nf.FT)(o, null), [o]),
        d = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, nm.Ay)({ channelId: nD.id, content: t, author: o });
            return (0, nc.rh)({ ...e, timestamp: nO(n, e.timestamp), state: I.cmJ.SENT });
        }, [t, o, n]);
    return null == d ? null : (0, a.jsx)(nV, { message: d, author: u, content: t, accessories: r, groupStart: s });
}
function nV(e) {
    let { message: t, author: n, content: l, accessories: i, groupStart: r = !0 } = e,
        s = nU(t, l);
    return (0, a.jsx)(ng.A, {
        className: nq.yE,
        author: n,
        childrenHeader: r ? (0, a.jsx)(nW, { message: t, author: n }) : void 0,
        childrenMessageContent: s,
        childrenAccessories: nz(i, "" !== l),
        disableInteraction: !0,
    });
}
function nK(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
        } = e,
        { text: d, revealing: c } = nF(t, { streaming: u }),
        m = i.useMemo(() => (0, nf.FT)(null, null), []),
        h = i.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        f = r?.userId,
        g = (0, A.bG)(
            [es.default],
            () => nT(f, null != f ? es.default.getUser(f) : null, es.default.getCurrentUser()),
            [f],
        ),
        x = i.useMemo(() => {
            if (null == r || null == g) return null;
            let e = (0, nm.Ay)({ channelId: nD.id, content: r.content, author: g });
            return (0, nc.rh)({ ...e, id: r.id, timestamp: nO(r.createdAt, e.timestamp), state: I.cmJ.SENT });
        }, [r, g]),
        p = i.useMemo(() => (null == r ? void 0 : { channel_id: nD.id, message_id: r.id }), [r]),
        v = i.useMemo(() => {
            let e = (0, nm.Ay)({ channelId: nD.id, content: d, author: n$ });
            return (0, nc.rh)({
                ...e,
                timestamp: nO(n, e.timestamp),
                state: I.cmJ.SENT,
                ...(null != p ? { type: I.lAJ.REPLY, message_reference: p } : {}),
            });
        }, [d, n, p]),
        j = nU(v, d, nq.OS);
    return (0, a.jsxs)("div", {
        className: nq.$4,
        "data-replying": null != x ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, a.jsx)(ng.A, {
                className: nq.yE,
                author: h,
                childrenRepliedMessage:
                    null == x ? null : (0, a.jsx)(nB, { baseMessage: v, referenced: x, onJumpToReplied: s }),
                childrenHeader: (0, nk.A)({ message: v, channel: nD, author: h, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: nz(l, "" !== d),
                disableInteraction: !0,
            }),
            o
                ? (0, a.jsx)("span", {
                      className: nq.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(z.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
function nY(e) {
    let { projectId: t, messages: n, ref: l, onPickIdea: r } = e,
        s = i.useRef(null),
        o = i.useCallback(
            (e) => {
                (s.current = e), "function" == typeof l ? l(e) : null != l && (l.current = e);
            },
            [l],
        ),
        [u, d] = i.useState(null),
        c = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(c.current), []);
    let m = i.useCallback((e) => {
            let t = s.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                d(e),
                window.clearTimeout(c.current),
                (c.current = window.setTimeout(() => d(null), 1600));
        }, []),
        h = i.useMemo(
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
                                { actor: "user", authorId: t.user_id, boundary: void 0 },
                            );
                            continue;
                        }
                        let e = !(0, eI.BL)(t),
                            l = e4({
                                steps: t.steps,
                                content: t.content,
                                hasProposal: null != t.proposal,
                                hasAttachments: (t.attachments?.length ?? 0) > 0,
                            }),
                            a = l.lastStreamedMessage?.key,
                            i = (function (e) {
                                let { turnActive: t = !0 } =
                                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    { items: n } = eC(e),
                                    l = eA(e, { turnActive: t }),
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
                                let r = new Set();
                                for (let e of l.steps) r.add(e.segment);
                                for (let e of l.tasks) r.add(e.task.segment);
                                let s = n.find((e) => "todos" === e.type)?.segment,
                                    o = Math.max(0, ...i.keys(), ...r, ...(null != s ? [s] : [])),
                                    u = [];
                                for (let e = 0; e <= o; e++) {
                                    let t = i.get(e),
                                        n = r.has(e),
                                        l = s === e;
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
                            { lastWork: r, open: s } = (function (e, t) {
                                let { turnActive: n } = t,
                                    l = e.filter((e) => e.hasWork || e.hasTodos).at(-1)?.index,
                                    a = e.at(-1)?.index,
                                    i = n && null != l && l === a ? l : void 0;
                                return { ...(null != l ? { lastWork: l } : {}), ...(null != i ? { open: i } : {}) };
                            })(i, { turnActive: e }),
                            o = i.at(-1)?.index;
                        for (let u of i) {
                            if (null != u.prose) {
                                let i = `${t.render_id}:${u.key}`;
                                n(
                                    {
                                        kind: "prose",
                                        key: i,
                                        message: t,
                                        groupStart: !1,
                                        content: u.prose.content,
                                        hostsAttachments:
                                            "streamed" === l.attachmentsHost &&
                                            u.prose.key === a &&
                                            null != t.attachments,
                                        streaming: e && u.index === o && !u.hasWork,
                                    },
                                    { actor: "assistant", boundary: i },
                                );
                            }
                            (u.hasWork || u.hasTodos) &&
                                n(
                                    {
                                        kind: "activity",
                                        key: `${t.render_id}:work-${u.index}`,
                                        message: t,
                                        groupStart: !1,
                                        segment: u.index,
                                        active: u.index === s,
                                        closed: u.index !== s,
                                        ...(null != u.durationMs ? { segmentDurationMs: u.durationMs } : {}),
                                        reportsDuration: u.index === r,
                                        hostsChecklist: u.hasTodos,
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
                            n,
                            l = [],
                            a = null,
                            i = !1,
                            r = !1;
                        for (let s of e) {
                            if (null == s.actor) {
                                l.push(!1), (a = null), (t = void 0), (i = !1), (r = !1), (n = void 0);
                                continue;
                            }
                            let e =
                                !i || a !== s.actor || t !== s.authorId || s.boundary !== n || !0 === s.separate || r;
                            e && ((a = s.actor), (t = s.authorId), (i = !0), (r = !0 === s.separate), (n = s.boundary)),
                                l.push(e);
                        }
                        return l;
                    })(t.map((e) => e.groupable));
                    return t.map((e, t) => ({ ...e.row, groupStart: l[t] ?? !0 }));
                })(n),
            [n],
        );
    return 0 === n.length
        ? (0, a.jsx)("ol", {
              ref: l,
              className: ti.x7,
              children: (0, a.jsx)(nQ, {
                  role: "assistant",
                  children: (0, a.jsx)(nK, { content: P.intl.string(R.default.khZEUv) }),
              }),
          })
        : (0, a.jsx)("ol", {
              ref: o,
              className: ti.x7,
              children: h.map((e) => {
                  let l = e.message;
                  switch (e.kind) {
                      case "user": {
                          let n = null != l.attachments && l.attachments.length > 0 ? l.attachments : null;
                          return (0, a.jsx)(
                              nQ,
                              {
                                  role: "user",
                                  anchorId: l.id,
                                  highlighted: u === l.id,
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(nH, {
                                      groupStart: e.groupStart,
                                      content: l.content,
                                      createdAt: l.created_at,
                                      userId: l.user_id,
                                      accessories:
                                          null != n ? (0, a.jsx)(tr, { projectId: t, attachments: n }) : void 0,
                                  }),
                              },
                              e.key,
                          );
                      }
                      case "prose":
                          return (0, a.jsx)(
                              nQ,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(nK, {
                                      groupStart: e.groupStart,
                                      content: e.content,
                                      streaming: e.streaming,
                                      createdAt: l.created_at,
                                      accessories:
                                          e.hostsAttachments && null != l.attachments
                                              ? (0, a.jsx)(tr, { projectId: t, attachments: l.attachments })
                                              : void 0,
                                  }),
                              },
                              e.key,
                          );
                      case "activity":
                          return (0, a.jsx)(
                              nQ,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tZ, {
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
                              nQ,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tZ, { projectId: t, interrupted: !0, steps: l.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, a.jsx)(
                              nQ,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tZ, {
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
                              nQ,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(nK, {
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
                                      accessories: (0, a.jsx)(tX, {
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
                                          onPickIdea: r,
                                      }),
                                  }),
                              },
                              e.key,
                          );
                  }
              }),
          });
}
function nQ(e) {
    let { role: t, children: n, anchorId: l, highlighted: i = !1, continuation: r = !1 } = e;
    return (0, a.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": l,
        className: s()(ti.xk, { [ti.Qo]: i, [ti.q3]: r }),
        children: n,
    });
}
var nZ = n(625903),
    nX = n(964675);
function nJ(e) {
    let { projectId: t } = e,
        n = (0, A.bG)([m.Ay], () => null != m.Ay.getSettings(t), [t]),
        l = i.useCallback(() => {
            (0, ty.A)(t);
        }, [t]);
    return n
        ? (0, a.jsx)(eP.D, {
              className: nX.h,
              "aria-label": P.intl.string(R.default.gTMvzD),
              onClick: l,
              children: (0, a.jsx)(nZ.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var n0 = n(863610),
    n1 = n(495557);
function n2(e) {
    let { activity: t, id: n } = e,
        { text: l, revealing: r } = nF(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [l]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: n1.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(eb.Ch, {
                ref: o,
                className: n1.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: s()(tY.PT, n1.bb),
                    "data-vibegrations-revealing": r ? "true" : void 0,
                    children: e7.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var n6 = n(921461);
function n3(e) {
    let { activity: t, compacting: n = !1, restoring: l = !1, controlling: r = !1 } = e,
        o = i.useRef(null),
        u = i.useId(),
        [d, c] = i.useState(null),
        m = null != t && "end" !== t.phase,
        h = r
            ? R.default.ivvYHP
            : l
              ? R.default.aFffp2
              : n
                ? R.default["0vH/5G"]
                : m
                  ? R.default.Ly7F7x
                  : R.default.QDGuNS,
        f = null != t && "" !== t.text,
        g = t?.session ?? null,
        x = f && null != g && d === g,
        p = i.useCallback(() => {
            f && null != g && c((e) => (e === g ? null : g));
        }, [f, g]),
        j = i.useCallback(() => c(null), []);
    return (0, a.jsx)(t0.Y, {
        targetElementRef: o,
        position: "top",
        align: "left",
        shouldShow: x,
        onRequestClose: j,
        renderPopout: () => (0, a.jsx)(n2, { id: u, activity: t }),
        children: () =>
            (0, a.jsxs)(eP.D, {
                innerRef: o,
                className: s()(n6.hF, f && n6.Xd),
                "aria-label": P.intl.string(l ? R.default.pGFXZ0 : R.default.SzdX35),
                "aria-expanded": x,
                "aria-describedby": x ? u : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: p,
                children: [
                    (0, a.jsx)("span", {
                        className: n6.bl,
                        children: (0, a.jsx)(n0.n, { dotRadius: 3.5, themed: !0 }),
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        "aria-hidden": !!r || void 0,
                        "data-vibegrations-activity-label": !0,
                        children: P.intl.string(h),
                    }),
                ],
            }),
    });
}
var n5 = n(885574),
    n7 = n(280894);
function n4(e) {
    return e.toLocaleString();
}
function n8(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: n7.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: n7.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [n4((0, ta.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    n4(n.input_tokens),
                    " in \xb7 ",
                    n4(n.output_tokens),
                    " out \xb7 ",
                    n4(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    n4(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function n9(e) {
    let { project: t } = e,
        n = (0, ta.wU)(t.compaction),
        l = (0, ta.wV)((0, ta.wV)(t.orchestrator, t.codegen), n);
    return (0, a.jsxs)("div", {
        className: n7.si,
        role: "dialog",
        "aria-label": P.intl.string(R.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: n7.Q$,
                children: (0, a.jsxs)("div", {
                    className: n7.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [n4((0, ta.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(n8, { label: P.intl.string(R.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(n8, { label: P.intl.string(R.default.R9aduM), usage: t.codegen }),
            (0, a.jsx)(n8, { label: P.intl.string(R.default.Tj6b30), usage: n }),
            (0, a.jsxs)("div", {
                className: n7.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(R.default["kILb+R"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, ta.sj)(l) ? "\u2014" : `${Math.round(100 * (0, ta.CA)(l))}%`,
                    }),
                ],
            }),
        ],
    });
}
function le(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(t0.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(n9, { project: t }),
        children: (e) =>
            (0, a.jsx)(eP.D, {
                innerRef: n,
                className: n7.Y$,
                "aria-label": P.intl.string(R.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(n5.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var lt = n(985451),
    ln = n(258216);
function ll(e) {
    switch (e) {
        case "connecting":
            return P.intl.string(R.default.W7oyuf);
        case "failed":
            return P.intl.string(R.default.eE60xI);
        case "closed":
            return P.intl.string(R.default["yBmS+I"]);
    }
}
function la(e) {
    let {
            projectId: t,
            thinking: n,
            restoring: l = !1,
            thinkingActivity: i,
            compacting: r,
            projectUsage: s,
            connState: o,
        } = e,
        u = (0, lt.o4)(t);
    return (0, a.jsxs)("div", {
        className: ln.jf,
        children: [
            (0, a.jsx)("div", {
                className: ln.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children:
                    n || l || u ? (0, a.jsx)(n3, { activity: i, compacting: r, restoring: l, controlling: u }) : null,
            }),
            (0, a.jsx)(nJ, { projectId: t }),
            null == s
                ? null
                : (0, a.jsxs)("span", {
                      className: ln.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": P.intl.formatToPlainString(R.default["7SZZvj"], {
                                  runes: (0, ta.a7)(s.cost_usd),
                                  turns: s.turns,
                              }),
                              children: P.intl.formatToPlainString(R.default["4PFO2p"], {
                                  runes: (0, ta.a7)(s.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(le, { project: s }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": P.intl.formatToPlainString(R.default.eDDdhB, { status: ll(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: ln.XF,
                      children: ll(o),
                  }),
        ],
    });
}
var li = n(22231),
    lr = n(477155),
    ls = n(935286),
    lo = n(424110);
function lu(e) {
    let { option: t, position: n, disabled: l, onPick: r } = e,
        o = i.useId(),
        u = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eP.D, {
        className: s()(lo.uK, { [lo.ue]: l }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": P.intl.formatToPlainString(u ? R.default.aL1BKQ : R.default.k7lEgj, { answer: t.label }),
        "aria-describedby": d ? o : void 0,
        "aria-disabled": l,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": u ? "true" : void 0,
        children: [
            (0, a.jsx)("span", { className: lo.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: lo.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: lo.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: lo.ed,
                            children: t.label,
                        }),
                    }),
                    d
                        ? (0, a.jsx)(v.E, {
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
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: lo.rM,
                      children: P.intl.string(R.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function ld(e) {
    let { clarification: t, onSubmit: n, onDismiss: l } = e,
        [r, u] = i.useState({}),
        [d, c] = i.useState({}),
        [m, h] = i.useState(0),
        f = null == n,
        g = t.questions.length,
        x = Math.min(m, g - 1),
        p = t.questions[x],
        j = i.useCallback(
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
        b = i.useCallback(
            (e) => {
                if (f) return;
                let n = { ...r, [p.id]: e };
                u(n);
                let l = (function (e, t, n) {
                    let { questions: l } = e;
                    for (let e = 1; e <= l.length; e++) {
                        let a = (n + e) % l.length,
                            i = t[l[a].id];
                        if (null == i || "" === i.text.trim()) return a;
                    }
                    return null;
                })(t, n, x);
                null == l ? j(n) : h(l);
            },
            [r, t, f, x, p.id, j],
        ),
        y = i.useCallback(() => {
            if (f || 0 === x) return;
            let e = t.questions[x - 1];
            u((t) => {
                let n = { ...t };
                return delete n[e.id], n;
            }),
                c((t) => {
                    let n = { ...t };
                    return delete n[e.id], n;
                }),
                h(x - 1);
        }, [t, f, x]),
        k = x > 0 && !f,
        A = d[p.id] ?? "",
        w = i.useCallback(() => {
            let e = A.trim();
            "" !== e && b({ kind: "custom", text: e });
        }, [A, b]),
        [N, C] = i.useState(!1),
        [S, I] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => C(!0));
            });
        return () => {
            cancelAnimationFrame(t), cancelAnimationFrame(e);
        };
    }, []);
    let E = i.useCallback(() => {
            null != l && (I(!0), setTimeout(l, 150));
        }, [l]),
        M = i.useCallback(() => {
            f || x >= g - 1 || h(x + 1);
        }, [f, x, g]),
        T = x < g - 1 && !f;
    return (0, a.jsxs)("section", {
        className: s()(lo.$O, { [lo.fI]: N && !S, [lo.Oh]: S }),
        role: "dialog",
        "aria-label": p.question,
        "data-vibegrations-clarification": t.id,
        "data-state": f ? "inert" : "open",
        "data-step": x,
        children: [
            (0, a.jsxs)("div", {
                className: lo.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: `${p.id}-label`,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        selectable: !0,
                        className: lo.TK,
                        children: p.question,
                    }),
                    null == l
                        ? null
                        : (0, a.jsx)(eP.D, {
                              className: s()(lo.gb, lo.Q7),
                              onClick: E,
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
                className: lo.Ge,
                role: "group",
                "aria-labelledby": `${p.id}-label`,
                children: [
                    p.options.map((e, t) =>
                        (0, a.jsx)(
                            lu,
                            {
                                option: e,
                                position: t + 1,
                                disabled: f,
                                onPick: (e) => b({ kind: "option", optionId: e.id, text: e.label }),
                            },
                            e.id,
                        ),
                    ),
                    (0, a.jsxs)("div", {
                        className: lo.Xy,
                        children: [
                            (0, a.jsx)("span", {
                                className: lo.Gy,
                                "aria-hidden": !0,
                                children: (0, a.jsx)(li.PencilIcon, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: "currentColor",
                                }),
                            }),
                            (0, a.jsx)(t7.y, {
                                value: A,
                                onChange: (e) => {
                                    let { value: t } = e.currentTarget;
                                    c((e) => ({ ...e, [p.id]: t }));
                                },
                                onKeyDown: (e) => {
                                    "Enter" !== e.key ||
                                        e.shiftKey ||
                                        e.nativeEvent.isComposing ||
                                        (e.preventDefault(), w());
                                },
                                placeholder: P.intl.string(R.default.qifsdL),
                                "aria-label": P.intl.formatToPlainString(R.default.XHESTL, { question: p.question }),
                                disabled: f,
                                rows: 1,
                                className: lo.Pu,
                                "data-vibegrations-clarification-other": p.id,
                            }),
                        ],
                    }),
                ],
            }),
            g > 1
                ? (0, a.jsxs)("div", {
                      className: lo.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: P.intl.formatToPlainString(R.default["7bypa+"], { index: x + 1, total: g }),
                          }),
                          (0, a.jsxs)("div", {
                              className: lo.Np,
                              children: [
                                  (0, a.jsx)(eP.D, {
                                      className: s()(lo.gb, { [lo.yI]: !k }),
                                      onClick: k ? y : void 0,
                                      tabIndex: k ? 0 : -1,
                                      "aria-hidden": !k,
                                      "aria-disabled": f,
                                      "aria-label": P.intl.string(R.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": k ? void 0 : "true",
                                      children: (0, a.jsx)(lr.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, a.jsx)(eP.D, {
                                      className: s()(lo.gb, { [lo.yI]: !T }),
                                      onClick: T ? M : void 0,
                                      tabIndex: T ? 0 : -1,
                                      "aria-hidden": !T,
                                      "aria-disabled": f,
                                      "aria-label": P.intl.string(R.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": T ? void 0 : "true",
                                      children: (0, a.jsx)(ls.E, {
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
var lc = n(643278),
    lm = n(405189);
function lh(e) {
    let { line: t, placement: n, todos: l, provisionalTodo: r, agents: o, onJumpToActivity: u } = e,
        d = null != n,
        [c, m] = i.useState(n ?? "top"),
        [h, f] = i.useState(d),
        [g, x] = i.useState(!1),
        [p, v] = i.useState(!1),
        [j, b] = i.useState(d);
    j !== d && (b(d), null != n ? (m(n), f(!0)) : (x(!1), v(!1))),
        i.useEffect(() => {
            if (d || !h) return;
            let e = setTimeout(() => f(!1), 150);
            return () => clearTimeout(e);
        }, [d, h]),
        i.useEffect(() => {
            if (!h || !d) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [h, d]);
    let [y, k] = i.useState(!1),
        [A, w] = i.useState(!1),
        [N, C] = i.useState(p);
    N !== p && (C(p), p ? k(!0) : w(!1)),
        i.useEffect(() => {
            if (p || !y) return;
            let e = setTimeout(() => k(!1), 150);
            return () => clearTimeout(e);
        }, [p, y]),
        i.useEffect(() => {
            if (!y || !p) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => w(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [y, p]);
    let S = null != l && l.length > 0,
        I = i.useCallback(() => v((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: lm.qd,
              "data-placement": c,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: s()(lm.vK, { [lm.ho]: g && d, [lm.ET]: !d }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: s()(lm.Rk, eE.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(eL, {
                                        glyph: (0, a.jsx)(eM, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(eP.D, {
                                    className: lm.pZ,
                                    onClick: u,
                                    "aria-label": P.intl.string(R.default.tYjQFG),
                                    children: (0, a.jsx)("ol", {
                                        className: s()(lm.Rk, eE.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(eL, {
                                            glyph: (0, a.jsx)(eM, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          S
                              ? (0, a.jsx)(eG.m, {
                                    text: P.intl.string(R.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(eP.D, {
                                        className: lm.BO,
                                        onClick: I,
                                        "aria-expanded": p,
                                        "aria-label": P.intl.string(R.default.qCRC6c),
                                        children: (0, a.jsx)(lc.ClipboardListIcon, {
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
                  y && S
                      ? (0, a.jsx)("div", {
                            className: s()(lm.vB, { [lm.pg]: p && A, [lm.ui]: !p }),
                            children: (0, a.jsx)(tK, { todos: l, provisional: r, agents: o, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var lf = n(366010),
    lg = n(825484),
    lx = n(859703),
    lp = n(24001),
    lv = n(291749),
    lj = n(971276),
    lb = n(590202),
    ly = n(710969),
    lk = n(792620),
    lA = n(201805),
    lw = n(617986),
    lN = n(363195),
    lC = n(749414);
let lS = !1;
function lI(e) {
    let t,
        n,
        l,
        { open: r } = e,
        s =
            ((t = (0, lA.dN)()),
            (n = (0, A.bG)([lx.A], () => lx.A.isQuestAccessSuspended || null != lx.A.questEnrollmentBlockedUntil, [])),
            (l = (0, A.bG)([lx.A], () => null != lx.A.getQuestPreviewOverride(lp.uF.QUEST_BAR_V2), [])),
            null != t && (0, lk.vv)(t)
                ? l
                    ? t.userStatus?.claimedAt != null
                        ? null
                        : t
                    : !(0, lj.s)() || n || (0, ly.Ic)(t) || t.userStatus?.completedAt != null
                      ? null
                      : t
                : null),
        [o, u] = i.useState(() => lS),
        { mounted: d, closing: c } = (function (e) {
            let [t, n] = i.useState(e),
                [l, a] = i.useState(!1),
                r = i.useRef(null);
            return (
                e && (!t || l) ? (n(!0), a(!1)) : e || !t || l || a(!0),
                i.useEffect(() => {
                    if (!e && t)
                        return (
                            (r.current = setTimeout(() => {
                                (r.current = null), a(!1), n(!1);
                            }, 150)),
                            () => {
                                null != r.current && (clearTimeout(r.current), (r.current = null));
                            }
                        );
                }, [e, t, 150]),
                { mounted: t, closing: l }
            );
        })(r && !o && null != s),
        [m, h] = i.useState(s);
    null != s && s !== m && h(s);
    let g = s ?? m,
        x = (0, A.bG)([lN.A], () => lN.A.getState().theme),
        p = (0, lf.M)(x) ? I.NJ8.DARK : I.NJ8.LIGHT,
        j = null != g ? (0, lv.tW)(g, lv.fY.GAME_TILE, p).url : null,
        b = null != j && "" !== j ? j : null,
        y = i.useCallback(async () => {
            if (null == s) return;
            let e = {
                questContent: lp.uF.QUEST_BAR_V2,
                sourceQuestContent: lp.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: lb.Cy.WATCH_VIDEO,
            };
            s.userStatus?.enrolledAt != null
                ? (0, lw.d5)({ quest: s, ...e })
                : await (0, lw.e0)(s, { ...e, questContentCTA: lb.Cy.ACCEPT_QUEST });
        }, [s]),
        k = i.useCallback(() => {
            (lS = !0), u(!0);
        }, []);
    return d && null != g
        ? (0, a.jsxs)("aside", {
              className: lC.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": c ? "closing" : "open",
              "aria-hidden": c,
              children: [
                  null != b
                      ? (0, a.jsxs)("div", {
                            className: lC.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, a.jsx)("img", { className: lC.Rx, src: b, alt: "" }),
                                (0, a.jsx)("div", { className: lC._e }),
                            ],
                        })
                      : null,
                  (0, a.jsxs)("div", {
                      className: lC.iB,
                      children: [
                          null != b ? (0, a.jsx)("img", { className: lC.w1, src: b, alt: "" }) : null,
                          (0, a.jsxs)("div", {
                              className: lC.Ug,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: P.intl.string(R.default["09LJ+I"]),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: P.intl.format(P.t.EQa7os, { questName: g.config.messages.questName }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, a.jsxs)(lg.e, {
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
var lE = n(506774),
    lM = n(651649),
    lT = n(670455);
let lR = "shownVibegrationsFeedbackProjectIds";
var lP = n(348800);
let l_ = [P.intl.string(R.default["E+Q26x"]), P.intl.string(R.default["06/jqP"]), P.intl.string(R.default["3gSfUa"])];
function lL(e) {
    let { projectId: t, restoreState: l } = e,
        r = (0, A.bG)([eI.Ay], () => eI.Ay.getMessages(t), [t]),
        s = (0, A.bG)([m.Ay], () => m.Ay.getConnState(t), [t]),
        o = (0, A.bG)([m.Ay], () => m.Ay.isChatStopped(t), [t]),
        u = (0, A.bG)([eI.Ay], () => eI.Ay.getProjectUsage(t), [t]),
        d = (0, A.bG)([eI.Ay], () => eI.Ay.getThinkingActivity(t), [t]),
        c = (0, A.bG)([eI.Ay], () => eI.Ay.isCompacting(t), [t]),
        h = (0, A.bG)([m.Ay], () => m.Ay.getModelSettings(t), [t]),
        f = i.useRef(null),
        g = i.useRef(null),
        x = i.useRef(null),
        p = i.useRef(!0),
        [v, j] = i.useState(!0);
    i.useEffect(() => {
        p.current && g.current?.scrollToBottom();
    }, [r]);
    let b = i.useCallback(() => {
            let e = f.current;
            if (null == e) return;
            let t = e.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]'),
                n = e.querySelectorAll('[data-vibegrations-turn-status="true"]'),
                l = t ?? n[n.length - 1];
            if (null == l) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            l.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        y = i.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            p.current = t < 32;
            let n = t > 1;
            j((e) => (!n === e ? e : !n));
        }, []);
    i.useLayoutEffect(() => {
        let e = f.current,
            t = x.current;
        if (null == e) return;
        let n = e.getBoundingClientRect().width,
            l = t?.getBoundingClientRect().height,
            a = null;
        function i() {
            p.current &&
                (null != a && cancelAnimationFrame(a), (a = requestAnimationFrame(() => g.current?.scrollToBottom())));
        }
        let r = new ResizeObserver((t) => {
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
            r.observe(e),
            null != t && r.observe(t),
            () => {
                r.disconnect(), null != a && cancelAnimationFrame(a);
            }
        );
    }, []),
        i.useEffect(() => {
            (0, m.Hc)(t);
        }, [t]),
        i.useEffect(
            () => () =>
                (function (e) {
                    let t = eI.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, eI.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((lE.w.get(lR) ?? []).includes(e) ||
                            lM.A.possiblyShowFeedbackModal(lT.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = lE.w.get(lR) ?? []).includes(e) || lE.w.set(lR, [...l, e]),
                                    (0, tv.openModalLazy)(async () => {
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
                (0, m.dv)(t, e, n);
            },
            [t],
        ),
        w = i.useCallback(() => (0, m.fu)(t), [t]),
        N = i.useCallback((e) => k(e.implementation_prompt), [k]),
        C = i.useCallback((e) => k(e), [k]),
        S = i.useCallback((e) => (0, m.XZ)(t, e), [t]),
        I = i.useCallback((e) => (0, m.vX)(t, e), [t]),
        E = i.useCallback((e) => (0, m.Vm)(t, e), [t]),
        M = i.useCallback(() => k(P.intl.string(R.default.Jj8Ftb)), [k]),
        T = l?.status === "restoring",
        _ = "open" === s && !o && !T,
        L = r[r.length - 1],
        F = null != L && "assistant" === L.role && null != L.proposal,
        [q, D] = i.useState(null),
        $ = L?.clarification != null && L.clarification.id !== q ? L.clarification : null,
        z = i.useCallback(() => {
            null != $ && D($.id);
        }, [$]),
        O = (0, A.bG)([eI.Ay], () => eI.Ay.hasLoadedHistory(t), [t]),
        U = i.useMemo(() => {
            let e = 0;
            for (let n = 0; n < t.length; n++) e = (31 * e + t.charCodeAt(n)) % 0x7fffffff;
            return l_[e % l_.length];
        }, [t]),
        G = F
            ? P.intl.string(R.default.Jj8Ftb)
            : L?.kind === "plan_implemented"
              ? P.intl.string(R.default["3sTTBu"])
              : O && 0 === r.length
                ? U
                : null,
        B = i.useMemo(() => {
            for (let e = r.length - 1; e >= 0; e--) {
                let t = r[e];
                if ("assistant" === t.role && !(0, eI.BL)(t)) return t;
            }
        }, [r]),
        W = null != B,
        H = F && _ ? M : void 0,
        [V, K] = i.useState(null),
        [Y, Q] = i.useState(W);
    Y !== W && (Q(W), W || K(null)),
        i.useEffect(() => {
            if (!W) return;
            let e = f.current?.querySelector("[data-vibegrations-chat-log]"),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? K(null)
                        : K(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return n.observe(t), () => n.disconnect();
        }, [W, B?.steps]);
    let Z = i.useMemo(() => {
            let e, t;
            return null != B
                ? null != (t = ew((e = eA(B.steps, { turnActive: !0 })).steps))
                    ? ek(t)
                    : (e.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ??
                      P.intl.string(R.default.nv6pUM))
                : "";
        }, [B]),
        X = i.useMemo(() => (null != B ? (eS(B.steps) ?? B.todos) : void 0), [B]),
        J = B?.provisionalTodo,
        ee = i.useMemo(() => (null != B ? tQ(eA(B.steps, { turnActive: !0 }).tasks) : void 0), [B]);
    return (0, a.jsxs)("section", {
        ref: f,
        "data-vibegrations-chat": !0,
        className: lP.TE,
        children: [
            (0, a.jsx)(lI, { open: null != B }),
            (0, a.jsx)(lh, {
                onJumpToActivity: b,
                line: Z,
                placement: W && "top" === V ? "top" : null,
                todos: X,
                provisionalTodo: J,
                agents: ee,
            }),
            (0, a.jsx)(eb.Ch, {
                ref: g,
                onScroll: y,
                "data-vibegrations-chat-log": !0,
                className: v ? lP.N$ : `${lP.N$} ${lP.hB}`,
                children: (0, a.jsx)(nY, { ref: x, projectId: t, messages: r, onPickIdea: _ ? N : void 0 }),
            }),
            (0, a.jsxs)("div", {
                className: lP.im,
                children: [
                    (0, a.jsx)(la, {
                        projectId: t,
                        thinking: W,
                        restoring: T,
                        thinkingActivity: d,
                        compacting: c,
                        projectUsage: u,
                        connState: s,
                    }),
                    (0, a.jsxs)("div", {
                        className: lP.Jx,
                        children: [
                            (0, a.jsx)(lh, {
                                onJumpToActivity: b,
                                line: Z,
                                placement: W && "bottom" === V ? "bottom" : null,
                                todos: X,
                                provisionalTodo: J,
                                agents: ee,
                            }),
                            null == $
                                ? null
                                : (0, a.jsx)("div", {
                                      className: lP.B5,
                                      children: (0, a.jsx)(
                                          ld,
                                          { clarification: $, onSubmit: _ ? C : void 0, onDismiss: z },
                                          $.id,
                                      ),
                                  }),
                            (0, a.jsx)(nr, {
                                canSend: _,
                                stopped: o,
                                running: W,
                                restoring: T,
                                onSend: k,
                                onInterrupt: _ ? w : void 0,
                                onUploadFile: I,
                                onDeleteFile: E,
                                onApprove: H,
                                suggestion: G,
                                questionOpen: null != $,
                                modelSettings: h,
                                onModelSettingsChange: S,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lF = n(435558),
    lq = n(661531),
    lD = n(602853),
    l$ = n(517461),
    lz = n(761929),
    lO = n(927506);
function lU(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: r } = e,
        s = (0, lD.r)(lq.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, d] = (0, l$.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = i.useState(u ?? 460),
        h = (0, lF.clamp)(c, 360, n);
    i.useLayoutEffect(() => {
        l(t ? h + s : 0);
    }, [h, t, s, l]);
    let f = (0, lz.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: lz.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        g = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), f(e));
            },
            [f],
        );
    return (0, a.jsxs)("div", {
        className: lO.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: lO.Di, onPointerDown: g }),
            (0, a.jsx)("div", { ref: o, className: lO.kL, style: { width: h }, children: r }),
        ],
    });
}
var lG = n(145615);
let lB = [6, 8, 10, 12],
    lW = {
        home: { blob: 1, twink: 1, alpha: 0.7 },
        conversation: { blob: 1, twink: 1, alpha: 0.7 },
        thinking: { blob: 3, twink: 2.4, alpha: 0.7 },
    };
function lH(e, t, n) {
    let l = (0x165667b1 * e) ^ (0x27d4eb2f * t) ^ (0x7fffffff * n);
    return (l = Math.imul(l ^ (l >>> 13), 0x4bf19f61)), (((l ^= l >>> 16) >>> 0) % 1e6) / 1e6;
}
let lV = i.memo(function (e) {
    let { state: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = i.useRef(t);
    i.useEffect(() => {
        r.current = t;
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
                s = 0,
                o = 0,
                u = [],
                d = 0,
                c = (function () {
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
                m = lW.home.blob,
                h = lW.home.twink,
                f = lW.home.alpha,
                g = 0,
                x = lB[0],
                p = [],
                v = 0,
                j = 0,
                b = Array(8).fill("");
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
                    b[t] = `rgba(${e}, ${n}, ${l}, ${i})`;
                }
            }
            y();
            let k = [];
            for (let e = 0; e < 8; e++) k.push([]);
            let A = new MutationObserver(y);
            A.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] });
            let w = -1;
            function N() {
                let e = Math.max(s, d);
                (e === d && w === x && u.length > 0) ||
                    ((d = e),
                    (w = x),
                    (u = (function (e, t) {
                        let n = [],
                            l = Math.ceil(e / t) + 1,
                            a = Math.ceil(600 / t) + 1;
                        for (let e = 0; e < a; e++)
                            for (let t = 0; t < l; t++)
                                n.push({
                                    i: t,
                                    j: e,
                                    threshold: 0.05 + 0.95 * lH(t, e, 1),
                                    phase: lH(t, e, 2) * Math.PI * 2,
                                    freq: 0.25 + 1.5 * lH(t, e, 3),
                                });
                        return n;
                    })(e, x)));
            }
            function C() {
                let t = e.getBoundingClientRect(),
                    n = t.width,
                    l = t.height;
                (0.5 > Math.abs(n - s) && 0.5 > Math.abs(l - o)) ||
                    ((s = n),
                    (o = l),
                    (e.width = Math.max(1, Math.floor(s * i))),
                    (e.height = Math.max(1, Math.floor(o * i))),
                    null != a && (a.setTransform(i, 0, 0, i, 0, 0), (a.imageSmoothingEnabled = !1)),
                    N(),
                    M(0.001 * performance.now()));
            }
            C();
            let S = new ResizeObserver(C);
            S.observe(t), window.addEventListener("resize", C);
            let I = performance.now(),
                E = 0;
            function M(e) {
                a.clearRect(0, 0, s, o), (a.globalAlpha = f);
                let t = x,
                    n = s <= 1e3 ? 1.2 : (1e3 / s) * 1.2;
                for (let e = 0; e < 8; e++) k[e].length = 0;
                for (let l = 0; l < u.length; l++) {
                    let a,
                        i = u[l],
                        r = (i.i * t) / s,
                        d = (i.j * t) / o,
                        m =
                            0.55 *
                            (function (e, t, n) {
                                let l = (e - 0.5) * n,
                                    a = 1 - t,
                                    i = 1 - Math.sqrt(l * l + a * a * 1.8);
                                return i < 0 ? 0 : i * i;
                            })(r, d, n);
                    for (let e = 0; e < c.length; e++) {
                        let t = c[e],
                            n = r - t.x,
                            l = d - t.y,
                            a = (n * n + l * l) / (t.radius * t.radius);
                        m += t.strength * Math.exp(-a) * 0.7;
                    }
                    let f = 0.1 * Math.sin(e * i.freq * 1.85 * h + i.phase),
                        g = m - (i.threshold + f);
                    1;
                    if (!(g <= -0.1)) {
                        if (g >= 0.1) a = 7;
                        else {
                            let e = (g + 0.1) / 0.2;
                            a = Math.min(7, Math.floor(e * e * (3 - 2 * e) * 8));
                        }
                        k[a].push(i);
                    }
                }
                for (let e = 0; e < 8; e++) {
                    let n = k[e];
                    if (0 !== n.length) {
                        (a.fillStyle = b[e]), a.beginPath();
                        for (let e = 0; e < n.length; e++) {
                            var l, i;
                            let r = n[e];
                            (l = r.i * t),
                                (i = r.j * t),
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
                (E = requestAnimationFrame(function e(t) {
                    let n = t - I,
                        l = Math.min(64, n);
                    (I = t),
                        !(function (e) {
                            if (
                                (v++,
                                j++,
                                v < 30 ||
                                    e > 100 ||
                                    (p.push(e),
                                    p.length > 60 && p.shift(),
                                    p.length < 60 || j < 180 || g >= lB.length - 1))
                            )
                                return;
                            let t = 0;
                            for (let e = 0; e < p.length; e++) t += p[e];
                            let n = t / p.length;
                            n <= 22 ||
                                ((x = lB[++g]),
                                (j = 0),
                                (w = -1),
                                N(),
                                console.log(
                                    "[Vibegrations/glow-dither] perf degrade \u2192 spacing",
                                    x,
                                    "avg",
                                    n.toFixed(2),
                                    "ms",
                                ));
                        })(n);
                    let a = lW[r.current] ?? lW.home,
                        i = 1 - Math.exp(-l / 80);
                    (m += (a.blob - m) * i), (h += (a.twink - h) * i), (f += (a.alpha - f) * i);
                    let s = 1.5 * m;
                    for (let e = 0; e < c.length; e++) {
                        let t = c[e];
                        (t.x += t.vx * l * s),
                            (t.y += t.vy * l * s),
                            (t.x < -0.1 || t.x > 1.1) && (t.vx *= -1),
                            (t.y < 0.1 || t.y > 1.1) && (t.vy *= -1),
                            (t.vx += (Math.random() - 0.5) * 2e-7 * l),
                            (t.vy += (Math.random() - 0.5) * 2e-7 * l);
                    }
                    M(0.001 * t), (E = requestAnimationFrame(e));
                })),
                () => {
                    cancelAnimationFrame(E), S.disconnect(), A.disconnect(), window.removeEventListener("resize", C);
                }
            );
        }, []);
    let s = lG.P5;
    return (
        (s = "conversation" === t ? `${s} ${lG.wY}` : "home" === t ? `${s} ${lG.Qy}` : `${s} ${lG.fR}`),
        (0, a.jsx)("div", {
            ref: n,
            className: s,
            "aria-hidden": "true",
            children: (0, a.jsx)("canvas", { ref: l, className: lG.DX }),
        })
    );
});
var lK = n(408694);
function lY(e) {
    let { projectId: t } = e,
        n = (0, A.bG)([eI.Ay], () => (eI.Ay.isThinking(t) ? "thinking" : "conversation"), [t]);
    return (0, a.jsxs)("div", {
        className: lK.D1,
        "aria-hidden": !0,
        children: [
            (0, a.jsxs)("div", {
                className: lK.ys,
                "data-state": n,
                children: [(0, a.jsx)("div", { className: lK.Fc }), (0, a.jsx)("div", { className: lK.dW })],
            }),
            (0, a.jsx)(lV, { state: n }),
        ],
    });
}
var lQ = n(333007),
    lZ = n(342667);
function lX(e) {
    let { projectId: t, resolveIframe: n } = e,
        l = (0, lt.o4)(t),
        r = (0, tv.useHasAnyModalOpen)(),
        [s, o] = i.useState(null);
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
            o((t) =>
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
    let u = l && null != s && !r;
    return (0, lQ.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", {
                    className: lZ.y,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: l ? P.intl.string(R.default.dIE9zO) : "",
                }),
                u
                    ? (0, a.jsx)("div", {
                          className: lZ.o,
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
var lJ = n(314116),
    l0 = n(364522),
    l1 = n(406810),
    l2 = n(381849),
    l6 = n(977628);
function l3(e) {
    let t,
        { projectId: n, onClose: l, onRestore: r } = e,
        [s, u] = i.useState({ status: "loading" });
    return (
        i.useEffect(() => {
            let e = !1;
            return (
                (0, m.ST)(n)
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
            "loading" === s.status
                ? (0, a.jsx)("div", { className: l6.E8, children: (0, a.jsx)(h.y, {}) })
                : "failed" === s.status
                  ? (0, a.jsx)("div", {
                        className: l6.E8,
                        role: "alert",
                        children: (0, a.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: P.intl.string(R.default["mSJn+K"]),
                        }),
                    })
                  : 0 === s.entries.length
                    ? (0, a.jsx)("div", {
                          className: l6.E8,
                          children: (0, a.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: P.intl.string(R.default.TOmYPT),
                          }),
                      })
                    : (0, a.jsx)(l0.Ip, {
                          className: l6.p_,
                          children: (0, a.jsx)("div", {
                              className: l6.jO,
                              children: s.entries.map((e) => {
                                  let t,
                                      n = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, l2.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: l2._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, a.jsxs)(
                                      "button",
                                      {
                                          className: l6.f_,
                                          type: "button",
                                          onClick: () =>
                                              (0, lJ.A)({
                                                  title: P.intl.string(R.default.qOUOPE),
                                                  subtitle: P.intl.string(R.default.k2JBj5),
                                                  confirmText: P.intl.string(R.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      l(), r(e);
                                                  },
                                              }),
                                          children: [
                                              (0, a.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  className: l6.bc,
                                                  children: e.subject.replace(/^Build: /, ""),
                                              }),
                                              null != n.relative &&
                                                  (0, a.jsx)(v.E, {
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
            className: l6.nd,
            "aria-label": P.intl.string(R.default.jAWwzi),
            children: [
                (0, a.jsxs)(d.Ay, {
                    "aria-label": P.intl.string(R.default.jAWwzi),
                    toolbar: (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l }),
                    children: [
                        (0, a.jsx)(d.Ay.ChannelIcon, { icon: l1.ClockIcon, "aria-hidden": !0 }),
                        (0, a.jsx)(d.Ay.Title, { children: P.intl.string(R.default.jAWwzi) }),
                    ],
                }),
                (0, a.jsx)("div", { className: l6.rf, children: t }),
            ],
        })
    );
}
var l5 = n(120426),
    l7 = n(873727),
    l4 = n(147248),
    l8 = n(418842),
    l9 = n(885386),
    ae = n(940107),
    at = n(171936),
    an = n(796036);
function al(e) {
    let { projectId: t, applicationId: n, surface: l, header: r, mainClassName: o, content: d, sidebar: c } = e,
        [m, h] = i.useState(null),
        f = (0, u.A)(n, l),
        g = f?.id ?? null;
    !(function (e, t) {
        let n = (0, A.bG)([lN.A], () => (0, l7.x4)(lN.A.theme)),
            l = (0, A.bG)([l4.A], () => l4.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: r,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, A.cf)([ne.Ay], () => ({
                reducedMotion: ne.Ay.useReducedMotion,
                fontScale: (0, l7.U0)(),
                highContrast: ne.Ay.isHighContrastModeEnabled,
                forcedColors: ne.Ay.useForcedColors,
                underlineLinks: ne.Ay.alwaysShowLinkDecorations,
            })),
            d = l9.hH.useSetting(),
            c = (0, l8.C)(),
            m = i.useRef(!1),
            h = i.useRef(!1),
            f = i.useRef(0),
            g = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, l5.F)(e, t);
                if (null == l) return;
                g.current = l;
                let i = {
                    revision: ++f.current,
                    baseTheme: n,
                    customTheme: (0, l7.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: r,
                    reducedMotion: a,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, ae.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, r, t, s, d, e, a, c, u]),
            p = i.useRef(x);
        i.useLayoutEffect(() => {
            p.current = x;
        });
        let v = i.useCallback(() => {
            m.current ||
                ((m.current = !0),
                queueMicrotask(() => {
                    (m.current = !1), h.current || p.current();
                }));
        }, []);
        i.useEffect(
            () => (
                (h.current = !1),
                () => {
                    h.current = !0;
                }
            ),
            [],
        ),
            i.useEffect(() => {
                v();
            }, [l, v]),
            i.useLayoutEffect(() => {
                x(), v();
            }, [v, x]),
            i.useLayoutEffect(() => {
                let n = (0, l5.F)(e, t);
                null != n && n !== g.current && v();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, l5.F)(e, t) && ((g.current = null), v());
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
    })(m, g),
        i.useEffect(() => {
            if (null != t) return (0, at.mn)(t, () => (0, l5.F)(m, g));
        }, [t, m, g]);
    let x = i.useCallback(() => (0, l5.F)(m, g), [m, g]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: s()(ev.Mh, o),
                children: [r, (0, a.jsx)("div", { ref: h, className: ev.fm, children: d })],
            }),
            c,
            (0, a.jsx)(lX, { projectId: t ?? null, resolveIframe: x }),
        ],
    });
}
function aa(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            surface: r,
            header: u,
            chatOpen: h,
            onCloseChat: f,
            versionHistoryOpen: g = !1,
            onCloseVersionHistory: x,
            onRestoreVersion: p,
            restoreState: v,
            previewReady: j,
            previewGate: b,
            channelMessages: y,
            availability: k,
            activeMode: A,
            widgetApplicationId: w,
        } = e,
        N = i.useRef(null),
        [C, I] = i.useState(0);
    i.useLayoutEffect(() => {
        if (r.type === S.U4.MAIN) return (0, c.HV)(n), () => (0, c.HV)(null);
    }, [n, r.type]),
        i.useEffect(() => {
            null != t && ((0, m.Hc)(t), (0, an.s)());
        }, [t]),
        i.useLayoutEffect(() => {
            let e = N.current;
            if (null == e) return;
            function t() {
                null != e && I(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        i.useEffect(() => () => (0, c.Zq)(0), []);
    let E = Math.max(360, C - 320),
        M = null != y ? y.open : h,
        T = h || r.type === S.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: N,
        className: ev.LB,
        children: (0, a.jsx)(al, {
            projectId: t,
            applicationId: n,
            surface: r,
            header: u,
            mainClassName: null == u ? void 0 : s()(ev.ez, { [ev.zt]: M }),
            content: (0, a.jsx)(eh, {
                applicationId: n,
                previewApplicationId: l,
                surface: r,
                previewReady: j,
                previewGate: b,
                availability: k,
                activeMode: A,
                widgetApplicationId: w,
            }),
            sidebar:
                null != y
                    ? (0, a.jsx)(lU, {
                          open: y.open,
                          maxWidth: E,
                          onWidthChange: c.Zq,
                          children: y.open
                              ? (0, a.jsx)(ej, { channel: y.channel, guild: y.guild, onClose: y.onClose })
                              : null,
                      })
                    : null != t && T
                      ? (0, a.jsx)(lU, {
                            open: h,
                            maxWidth: E,
                            onWidthChange: c.Zq,
                            children: (0, a.jsx)("div", {
                                className: ev.cO,
                                children: g
                                    ? (0, a.jsx)(
                                          l3,
                                          { projectId: t, onClose: x ?? (() => {}), onRestore: p ?? (() => {}) },
                                          t,
                                      )
                                    : (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(lY, { projectId: t }),
                                              (0, a.jsx)(d.Ay, {
                                                  "aria-label": P.intl.string(P.t["/VQax8"]),
                                                  toolbar:
                                                      null == f
                                                          ? null
                                                          : (0, a.jsx)(d.Ay.Icon, {
                                                                icon: o.P,
                                                                tooltip: P.intl.string(R.default.YdgE0j),
                                                                onClick: f,
                                                            }),
                                                  children: (0, a.jsx)(d.Ay.Title, {
                                                      children: P.intl.string(P.t["/VQax8"]),
                                                  }),
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: ev.cb,
                                                  children: (0, a.jsx)(lL, { projectId: t, restoreState: v }, t),
                                              }),
                                          ],
                                      }),
                            }),
                        })
                      : null,
        }),
    });
}
