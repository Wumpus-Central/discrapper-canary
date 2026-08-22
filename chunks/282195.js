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
    A = n(317608),
    w = n(17928),
    N = n(956518),
    S = n(869146),
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
var O = n(328284);
function F(e) {
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
var D = n(963691);
function q(e) {
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
                        s = (0, w.bG)([y.A], () => y.A.getFrame(l), [l]),
                        r = (0, w.bG)(
                            [S.A, y.A],
                            () => S.A.getWindowOpen(C.MLl.ACTIVITY_POPOUT) && y.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: c } = (0, p.YY)(t),
                        u = (0, g.x)(o),
                        d = null != (0, N.Ay)(t),
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
                    S.A.getWindowOpen(C.MLl.ACTIVITY_POPOUT) ||
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
            return (0, a.jsx)(A.A, { frameId: l.id, level: k.A.WithinAppContent, className: D.Z7 });
        case I.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: D.qs,
                children: (0, a.jsx)(F, {
                    title: P.intl.string(R.default["4f6Vkr"]),
                    body: P.intl.string(R.default.LJ2q1H),
                }),
            });
        case I.NoApplication:
            return (0, a.jsx)(L, { className: D.qs });
        case I.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: D.qs,
                children: (0, a.jsx)(F, {
                    title: P.intl.string(R.default.FHOJiH),
                    body: P.intl.string(R.default["1yLQoV"]),
                }),
            });
        case I.Error:
            return (0, a.jsxs)("div", {
                className: D.qs,
                children: [
                    (0, a.jsx)(v.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: P.intl.string(R.default.MeLWCr),
                    }),
                    (0, a.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: D.tj,
                        children: P.intl.string(R.default["1RCbQT"]),
                    }),
                ],
            });
        case I.AwaitingLaunch:
        case I.Loading:
            return (0, a.jsx)("div", { className: D.qs, children: (0, a.jsx)(m.y, {}) });
    }
}
var U = n(323384),
    $ = n(308528),
    G = n(334738),
    B = n(373204),
    H = n(355622),
    V = n(734057),
    z = n(531685),
    W = n(365971),
    Y = n(362417);
function K(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: Y.f,
        children: [
            (0, a.jsx)(U.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
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
        c = (0, w.bG)([V.A], () => {
            if (null == o) return null;
            let e = V.A.getDMFromUserId(o);
            return null != e ? V.A.getChannel(e) : null;
        });
    (t = c?.id ?? null),
        i.useEffect(() => {
            null != t && $.A.preload(C.ME, t);
        }, [t]),
        (n = (0, w.bG)([z.A], () => z.A.isFocused())),
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
            $.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
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
          ? (0, a.jsx)(K, { message: P.intl.string(R.default.bl4eBc) })
          : null == c
            ? (0, a.jsx)(X, {})
            : (0, a.jsx)("div", {
                  className: Y.g,
                  children: (0, a.jsx)(B.A, { channel: c, guild: null, chatInputType: H.oU.SIDEBAR }, c.id),
              });
}
var Q = n(250872),
    J = n(976102);
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
        ? (0, a.jsx)("div", { className: J.q, children: (0, a.jsx)(m.y, {}) })
        : r?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: J.q,
                children: (0, a.jsx)(F, {
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
                  ? (0, a.jsx)("div", { className: J.q, children: (0, a.jsx)(m.y, {}) })
                  : b && j && null != n
                    ? (0, a.jsx)("div", {
                          className: J.m,
                          role: "tabpanel",
                          id: (0, Q.z3)(o),
                          "aria-label": (0, Q.kZ)(o),
                          children:
                              o === Q.VW.ACTIVITY
                                  ? (0, a.jsx)(q, { applicationId: t, surface: l })
                                  : (0, a.jsx)(Z, { previewApplicationId: n }),
                      })
                    : null == d || (0, g.x)(d) || null == n
                      ? (0, a.jsx)(q, { applicationId: t, surface: l })
                      : (0, a.jsx)(Z, { previewApplicationId: n })
            : (0, a.jsx)(L, { className: J.q });
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
                children: (0, a.jsx)(B.A, { channel: t, guild: n, chatInputType: H.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var er = n(689175);
n(321073);
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
        s = 0;
    function r(e, t) {
        return { id: e, kind: t, detail: [], status: "running", screenshots: [], touched: 0 };
    }
    function o(e) {
        let t = a.get(e);
        if (null != t) return t;
        let n = { taskId: e, task: r("task", "task"), steps: [] };
        return a.set(e, n), n;
    }
    function c(e, n, a) {
        if ("task" === a || "task" === n) return null != e ? o(e).task : (t = t ?? r("task", "task"));
        let s = `${e ?? ""} ${n}`,
            c = i.get(s);
        if (null != c) return c;
        let u = r(n, "step");
        return i.set(s, u), null != e ? o(e).steps.push(u) : l.push(u), u;
    }
    for (let [t, n] of e.entries()) {
        if ("node" === n.kind && null != n.node) {
            let e = n.node,
                t = c(n.task_id, e.id, e.node_kind ?? "step");
            (t.touched = ++s),
                null != e.label_key && (t.labelKey = e.label_key),
                null != e.label_text && (t.labelText = e.label_text),
                null != e.group_label && (t.groupLabel = e.group_label),
                null != e.helper_name && (t.helperName = e.helper_name),
                null != e.helper_mark && (t.helperMark = e.helper_mark),
                null != e.detail && (t.detail = e.detail),
                null != e.append_detail && (t.detail = [...t.detail, ...e.append_detail]),
                null != e.status && (t.status = e.status),
                null != e.duration && (t.durationMs = e.duration),
                null != e.screenshots && (t.screenshots = e.screenshots);
            continue;
        }
        if ("error" === n.kind || "terminal_error" === n.kind) {
            let e = c(void 0, `${n.kind}-${t}`, "step");
            (e.touched = ++s),
                (e.labelKey = "error"),
                (e.status = "failed"),
                null != n.message && "" !== n.message && (e.detail = [n.message]);
        }
    }
    let u = [...a.values()];
    for (let e of u) n || "running" !== e.task.status || (e.task.status = "incomplete");
    return { steps: l, tasks: u, ...(null != t ? { turn: t } : {}) };
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
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (n?.kind === "todos" && (null == n.task_id || "" === n.task_id) && null != n.items && n.items.length > 0)
            return n.items;
    }
    return null;
}
var ef = n(783791),
    ep = n(13699);
function eg(e) {
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
                className: r()(ep.Z$, ep.KH),
            }),
            (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M17.48 14.36a.56.56 0 0 1 1.04 0l.85 2.27 2.27.85c.48.18.48.86 0 1.04l-2.27.85-.85 2.27a.56.56 0 0 1-1.04 0l-.85-2.27-2.27-.85a.56.56 0 0 1 0-1.04l2.27-.85.85-2.27Z",
                className: r()(ep.Z$, ep.Q_),
            }),
        ],
    });
}
var ex = n(847374),
    ev = n(320448),
    eb = n(939249);
let ej = i.createContext(0);
function ey(e) {
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
        y = m ? ex.a : ev._,
        k = null != c,
        A = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: ep.hd, children: t }),
                (0, a.jsx)(b.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: r()(ep.qo, { [ep._q]: "exit" === j, [ep.GD]: "enter" === j }),
                    children: v,
                }),
                k ? (0, a.jsx)(y, { size: "xs", color: "currentColor", className: ep.nD }) : null,
            ],
        }),
        w = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: ep.$m, children: A }, `face-${p}`),
                l
                    ? (0, a.jsx)("span", { className: r()(ep.$m, ep.pw), "aria-hidden": !0, children: A }, `shine-${p}`)
                    : null,
            ],
        });
    return (0, a.jsxs)("li", {
        className: ep.K1,
        "data-live": l,
        "data-settled": s,
        "data-connected": u,
        "data-connects-down": d,
        "data-vibegrations-turn-status": h ? "true" : void 0,
        style: null != o ? { "--custom-vibegrations-shimmer-tint": o } : void 0,
        children: [
            k
                ? (0, a.jsx)(eb.D, {
                      tag: "div",
                      className: r()(ep.ep, ep.EK),
                      "aria-expanded": m,
                      "aria-controls": g,
                      "aria-label": P.intl.formatToPlainString(R.default.s1wx5H, { activity: v }),
                      onClick: x,
                      children: w,
                  })
                : (0, a.jsx)("div", { className: ep.ep, children: w }),
            (0, a.jsx)("div", { id: g, hidden: !m, className: ep.BA, children: c }),
        ],
    });
}
var ek = n(256905),
    eA = n(514042),
    ew = n(298668);
function eN(e) {
    return r()(ew._B, { [ew.ND]: e });
}
function eS(e) {
    let { name: t, thumbSrc: n = null, compact: l = !1, subText: i, children: s, onThumbError: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: ew.gJ, onError: r })
                : (0, a.jsx)(eA.FileIcon, { size: l ? "xs" : "sm", color: "currentColor" }),
            (0, a.jsxs)("div", {
                className: ew.Wd,
                children: [
                    (0, a.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: ew.Rr,
                        children: t,
                    }),
                    i,
                ],
            }),
            s,
        ],
    });
}
function eE(e) {
    return (0, a.jsx)("div", { className: eN(e.compact ?? !1), children: eS(e) });
}
function eC(e) {
    let { name: t, thumbSrc: n, ariaLabel: l, onClick: i, onThumbError: s } = e;
    return (0, a.jsx)(eb.D, {
        className: r()(eN(!0), ew.w8),
        onClick: i,
        "aria-label": l,
        children: eS({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
let eI = /^(.*?)\s*\((\+\d+)?[\s,]*([\u2212-]\d+)?\)$/,
    eT =
        /^(.*?)\s*\((\d+ lines?|\d+ match(?:es)?|no matches|\d+ files?|empty|no logs yet|\d+ not found(?:, \d+ read-only)?|\d+ read-only|\d+KB)\)$/,
    e_ =
        /^(Reading|Writing|Editing|Listing|Searching|Deleting|Running|Downloading|Saving|Sending|Importing|Imported|Building|Viewing|Loaded|Updating|Registering|Collecting)(?= )/,
    eR = {
        "text-xs/normal": "text-xs/semibold",
        "text-sm/normal": "text-sm/semibold",
        "text-md/normal": "text-md/semibold",
    };
function eP(e, t) {
    let n = e_.exec(e);
    return null == n
        ? e
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(b.E, { tag: "span", variant: eR[t], color: "none", children: n[1] }),
                  e.slice(n[1].length),
              ],
          });
}
function eM(e) {
    let { text: t, variant: n } = e,
        l = eI.exec(t),
        i = l?.[2],
        s = l?.[3];
    if (null != l && (null != i || null != s))
        return (0, a.jsxs)(a.Fragment, {
            children: [
                eP(l[1], n),
                null == i ? null : (0, a.jsxs)("span", { className: ep.MM, children: [" ", i] }),
                null == s ? null : (0, a.jsxs)("span", { className: ep.ie, children: [" ", s] }),
            ],
        });
    let r = eT.exec(t);
    return null == r
        ? eP(t, n)
        : (0, a.jsxs)(a.Fragment, {
              children: [eP(r[1], n), (0, a.jsxs)("span", { className: ep.qZ, children: [" ", r[2]] })],
          });
}
var eL = n(229775);
function eO(e) {
    let { projectId: t, node: n, presentation: l = "row", active: s = !1 } = e,
        [o, c] = i.useState(!1),
        u = i.useId(),
        d = i.useCallback(() => c((e) => !e), []),
        h = ec(n),
        m = n.detail,
        f = "failed" === n.status ? "text-feedback-critical" : "detail" === l ? "text-muted" : "text-default",
        p = "text-muted" === f,
        g = s && p ? "none" : o && p ? "currentColor" : f,
        x = r()(ep.iq, { [eL.Hz]: s && p }),
        v = "detail" === l ? "text-md/normal" : "text-sm/normal",
        j = "detail" === l ? "text-sm/normal" : "text-xs/normal",
        y = null != t ? n.screenshots : [];
    if (0 === m.length && 0 === y.length)
        return (0, a.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: ep.Dx,
            children: (0, a.jsx)(b.E, {
                tag: "div",
                variant: v,
                color: g,
                selectable: !0,
                className: x,
                children: (0, a.jsx)(eM, { text: h, variant: v }),
            }),
        });
    let k = o ? ex.a : ev._;
    return (0, a.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: ep.Dx,
        children: [
            (0, a.jsxs)(eb.D, {
                tag: "div",
                className: ep.kG,
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
                        children: (0, a.jsx)(eM, { text: h, variant: v }),
                    }),
                    (0, a.jsx)(k, { size: "xs", color: "currentColor", className: ep.Ue }),
                ],
            }),
            (0, a.jsxs)("div", {
                id: u,
                hidden: !o,
                className: ep.yJ,
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
                                children: (0, a.jsx)(eM, { text: e, variant: j }),
                            },
                            t,
                        ),
                    ),
                    null != t && y.length > 0
                        ? (0, a.jsx)("div", {
                              className: ep.y8,
                              children: y.map((e) => (0, a.jsx)(eD, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function eF() {}
function eD(e) {
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
                (0, ek.R)({
                    items: [{ type: "IMAGE", url: e, alt: c }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, eF);
        }, [t, n, c]);
    return r ? null : (0, a.jsx)(eC, { name: c, thumbSrc: l, ariaLabel: c, onClick: u, onThumbError: () => o(!0) });
}
function eq(e) {
    let { projectId: t, steps: n, fallbackLabel: l, live: i, durationMs: s, connectsDown: r = !1 } = e,
        o = ed(n),
        c = i ? void 0 : s,
        u =
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
                : null != o
                  ? ec(o)
                  : (l ?? P.intl.string(R.default.nv6pUM)),
        d = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0);
    return (0, a.jsx)(ey, {
        glyph: (0, a.jsx)(eg, {}),
        line: u,
        anchor: !0,
        live: i,
        settled: null != c,
        connectsDown: r,
        detail: d
            ? (0, a.jsx)("ol", {
                  className: ep.dO,
                  children: n.map((e) =>
                      (0, a.jsx)(eO, { projectId: t, node: e, presentation: "detail", active: i && e === o }, e.id),
                  ),
              })
            : void 0,
    });
}
n(134528), n(947204);
var eU = n(29080),
    e$ = n(46054),
    eG = n(478016),
    eB = n(34136);
function eH(e) {
    let { title: t, trailing: n, children: l, className: i, headerClassName: s, ...o } = e;
    return (0, a.jsxs)("section", {
        className: r()(eB.Nr, i),
        ...o,
        children: [
            (0, a.jsxs)("header", {
                className: r()(eB.wx, null != n && eB.o5, s),
                children: [
                    (0, a.jsx)(b.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var eV = n(113757);
function ez(e) {
    let { idea: t, selected: n, onPick: l } = e,
        s = i.useId(),
        o = null == l;
    return (0, a.jsxs)(eb.D, {
        className: r()(eV.nM, { [eV.f1]: o, [eV.CZ]: n }),
        onClick: o ? void 0 : () => l(t),
        "aria-label": P.intl.formatToPlainString(R.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: eV.jo,
                children: [
                    n
                        ? (0, a.jsx)(eG.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: eV.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(b.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: eV.G9,
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
function eW(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [s, r] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                r((t) => new Set(t).add(e.id)), l?.(e);
            },
            [l],
        );
    return (0, a.jsx)(eH, {
        title: P.intl.string(R.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                ez,
                { idea: e, selected: s.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var eY = n(673724),
    eK = n(375068);
function eX(e) {
    let { projectId: t, attachments: n } = e,
        l = n.filter(eZ),
        [s, r] = i.useState(() => new Set()),
        o = i.useCallback((e) => {
            r((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, a.jsx)("div", {
        className: eK.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(eQ, { name: e.name }, n)
                : eZ(e)
                  ? (0, a.jsx)(
                        e0,
                        {
                            projectId: t,
                            viewableImages: l,
                            viewerIndex: l.indexOf(e),
                            unavailableIds: s,
                            markUnavailable: o,
                        },
                        n,
                    )
                  : (0, a.jsx)(eJ, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function eZ(e) {
    return null != e.id && eY.Wb.has(e.content_type);
}
function eQ(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? P.intl.formatToPlainString(R.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)(eE, { name: l, compact: !0 });
}
function eJ(e) {
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
        ? (0, a.jsx)(eQ, { name: l, unavailable: !0 })
        : (0, a.jsx)(eC, {
              name: l,
              thumbSrc: null,
              ariaLabel: P.intl.formatToPlainString(R.default.gV5YcR, { name: l }),
              onClick: o,
          });
}
function e0(e) {
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
                    (0, ek.R)({
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
        ? (0, a.jsx)(eQ, { name: c, unavailable: !0 })
        : (0, a.jsx)(eC, {
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
var e1 = n(430392),
    e2 = n(824757);
function e6(e) {
    let { label: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: e2.uW,
        children: [(0, a.jsx)(b.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }), n],
    });
}
function e3(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(e6, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: e2.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: e2.jw,
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
function e5(e) {
    let { isActivity: t } = e,
        n = t ? U.k : e1.RobotIcon;
    return (0, a.jsxs)("span", {
        className: e2.L6,
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
function e7(e) {
    let { proposal: t } = e;
    return (0, a.jsx)(eH, {
        title: P.intl.string(R.default["60htw+"]),
        trailing: (0, a.jsx)(e5, { isActivity: !0 === t.is_activity }),
        "data-vibegrations-plan-card": !0,
        children: (0, a.jsxs)("div", {
            className: e2.rf,
            children: [
                (0, a.jsx)(b.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: t.summary,
                }),
                t.changes.length > 0
                    ? (0, a.jsx)(e6, {
                          label: P.intl.string(R.default.KLyB8Y),
                          children: (0, a.jsx)("ul", {
                              className: e2.p_,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsx)(
                                      "li",
                                      {
                                          className: e2.Aw,
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
                    ? (0, a.jsx)(e6, {
                          label: P.intl.string(P.t["0hKkS+"]),
                          children: (0, a.jsx)("ul", {
                              className: e2.p_,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: e2.uX,
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
                (0, a.jsx)(e3, { label: P.intl.string(R.default.ieqTtP), names: t.bot_permissions ?? [] }),
                (0, a.jsx)(e3, { label: P.intl.string(R.default.Cn9qix), names: t.privileged_intents ?? [] }),
            ],
        }),
    });
}
var e4 = n(192308),
    e8 = n(479191);
function e9(e) {
    let { projectId: t, request: l } = e,
        s = i.useCallback(() => {
            (0, e4.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("338013"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: l });
            });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: e8.Lo,
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
                className: e8.cS,
                children: l.fields.map((e) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: e8.$H,
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
                className: e8.sq,
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
var te = n(976814),
    tt = n(973e3);
function tn(e) {
    let { projectId: t, request: n } = e,
        l = (0, w.bG)([h.Ay], () => h.Ay.getSettings(t)),
        s = (n.keys ?? []).map((e) => l?.schema.find((t) => t.key === e)).filter((e) => null != e),
        r = i.useCallback(() => {
            (0, te.A)(t, { scopeKeys: n.keys, note: n.note, notifyAgent: !0 });
        }, [t, n]);
    return (0, a.jsxs)("article", {
        className: tt.Mk,
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
                      className: tt.R6,
                      children: s.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: tt.K4,
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
                className: tt.p0,
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
function tl(e) {
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
function ta(e) {
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
function ti(e) {
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
function ts(e) {
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
function tr(e) {
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
function to(e) {
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
function tc(e) {
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
function tu(e) {
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
function td(e) {
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
function th(e) {
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
function tm(e) {
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
function tf() {
    return [
        { key: "snail", Illocon: tl, tint: "var(--illo-yellow-40)", name: tg(R.default["2l3AEQ"]) },
        { key: "goat", Illocon: ta, tint: "var(--illo-orange-40)", name: tg(R.default["+FPL+I"]) },
        { key: "frog", Illocon: ti, tint: "var(--illo-green-40)", name: tg(R.default.w4GOfR) },
        { key: "bunny", Illocon: ts, tint: "var(--illo-pink-40)", name: tg(R.default.XmZT9M) },
        { key: "cat", Illocon: tr, tint: "var(--illo-pink-40)", name: tg(R.default.NnydwQ) },
        { key: "caterpillar", Illocon: to, tint: "var(--illo-green-40)", name: tg(R.default["4iXcNT"]) },
        { key: "butterfly", Illocon: tc, tint: "var(--illo-purple-40)", name: tg(R.default.DoTGt5) },
        { key: "dog", Illocon: tu, tint: "var(--illo-yellow-40)", name: tg(R.default["9zxqmP"]) },
        { key: "spider", Illocon: td, tint: "var(--illo-orange-40)", name: tg(R.default.HF0T3L) },
        { key: "bee", Illocon: th, tint: "var(--illo-yellow-40)", name: tg(R.default.XTzDga) },
        { key: "bot", Illocon: tm, tint: "var(--illo-purple-40)", name: tg(R.default.abtC2b) },
    ];
}
function tp(e) {
    return tf().find((t) => t.key === e);
}
function tg(e) {
    return P.intl.string(e);
}
function tx(e) {
    let t = tf(),
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
var tv = n(683063);
function tb(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : P.intl.string(R.default.MdXWEK);
}
function tj(e) {
    let { lane: t, Illocon: n, tint: l, name: i, connectsDown: s } = e,
        r = t.task,
        o = "running" === r.status,
        c = ed(t.steps),
        u = o
            ? null != c
                ? ec(c)
                : tb(r)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(tb(e));
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
                                    className: ep.dO,
                                    children: t.steps.map((e) =>
                                        (0, a.jsx)(eO, { node: e, presentation: "detail", active: o && e === c }, e.id),
                                    ),
                                })
                              : null,
                          r.detail.map((e, t) => (0, a.jsx)("div", { className: ep.iq, children: e }, t)),
                      ],
                  });
    return (0, a.jsx)(ey, {
        glyph: (0, a.jsx)(tv.u, {
            asset: (0, a.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: tb(r),
            position: "left",
            children: (0, a.jsx)("span", {
                className: ep.nC,
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
var ty = n(140735),
    tk = n(329456);
let tA = [];
function tw(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: tk.xL,
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
            className: tk.L5,
            viewBox: "0 0 10.1668 10.1668",
            "aria-hidden": !0,
            focusable: "false",
            children: (0, a.jsx)("path", { d: "M1 5.52L3.92 9.17L9.17 1" }),
        }),
    });
}
function tN(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : tA), [n, t]),
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
        className: tk.X6,
        "data-shown": n && h ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l } = e,
                    { Illocon: i } = n;
                return (0, a.jsx)(
                    "span",
                    {
                        className: tk.MA,
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
                      className: tk.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function tS(e) {
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
        className: tk.p_,
        children: [
            t.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: tk.AS,
                        "data-status": e.status,
                        "data-arriving": s.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(tw, { status: e.status }),
                            (0, a.jsx)(b.E, {
                                variant: "experimental/body-sm/medium",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: tk.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", { className: tk.Qq, children: e.text }),
                            }),
                            null != l && l.length > 0
                                ? (0, a.jsx)(tN, { agents: l, active: "in_progress" === e.status })
                                : null,
                        ],
                    },
                    e.id,
                ),
            ),
            null != n
                ? (0, a.jsxs)("li", {
                      className: tk.AS,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(tw, { status: "pending" }),
                          (0, a.jsx)(b.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: tk.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: tk.Qq, children: n }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tE(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: i = !0 } = e,
        { completed: s, total: r } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === r
        ? null
        : (0, a.jsxs)(eH, {
              title: P.intl.string(R.default.qCRC6c),
              trailing: (0, a.jsx)(b.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: P.intl.formatToPlainString(R.default.bQvqly, { completed: s, total: r }),
              }),
              className: tk.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  i
                      ? (0, a.jsx)(ty.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: P.intl.formatToPlainString(R.default["QG/EiF"], { completed: s, total: r }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: tk.rf,
                      children: (0, a.jsx)(tS, { todos: t, provisional: n, agents: l }),
                  }),
              ],
          });
}
var tC = n(165648);
function tI(e) {
    let t = tx(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? tp(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [{ key: e.taskId, mark: l, name: null != n && null != e.task.helperName ? e.task.helperName : l.name }];
    });
}
function tT(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            durationMs: s,
            interrupted: r = !1,
            todos: o,
            provisionalTodo: c,
        } = e,
        u = i.useMemo(() => eu(n, { turnActive: l }), [n, l]);
    if (r)
        return (0, a.jsx)("ol", {
            className: ep.pj,
            "data-live": !1,
            children: (0, a.jsx)(ey, {
                glyph: (0, a.jsx)(eU.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: P.intl.string(R.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let d = l ? void 0 : (u.turn?.durationMs ?? s),
        h = em(n) ?? o ?? null,
        m = null != h && h.length > 0;
    if (0 === u.steps.length && 0 === u.tasks.length && !m) return null;
    let f = u.tasks,
        p = tx(f.map((e) => e.taskId)),
        g = l || f.some((e) => "running" === e.task.status),
        x = tI(f);
    return (0, a.jsx)(ej.Provider, {
        value: f.length,
        children: (0, a.jsxs)("ol", {
            className: ep.pj,
            "data-live": g,
            children: [
                (0, a.jsx)(eq, {
                    projectId: t,
                    steps: u.steps,
                    fallbackLabel: f.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: l,
                    durationMs: d,
                    connectsDown: f.length > 0,
                }),
                f.map((e, t) => {
                    let n = null != e.task.helperMark ? tp(e.task.helperMark) : void 0,
                        l = n ?? p.get(e.taskId);
                    return null == l
                        ? null
                        : (0, a.jsx)(
                              tj,
                              {
                                  lane: e,
                                  Illocon: l.Illocon,
                                  tint: l.tint,
                                  name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                                  connectsDown: t < f.length - 1,
                              },
                              e.taskId,
                          );
                }),
                m
                    ? (0, a.jsx)("li", {
                          className: ep.YO,
                          children: (0, a.jsx)(tE, { todos: h, provisional: c, agents: x }),
                      })
                    : null,
            ],
        }),
    });
}
function t_(e) {
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
        } = e,
        p = i.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        n = null,
                        l = null;
                    for (let [i, s] of e.entries()) {
                        var a;
                        if (
                            "thinking" === s.kind ||
                            ((null == (a = s).task_id || "" === a.task_id) &&
                                ("error" === a.kind ||
                                    "terminal_error" === a.kind ||
                                    ("node" === a.kind && null != a.node && !eh(a))))
                        ) {
                            n = null;
                            continue;
                        }
                        if ("todos" === s.kind) {
                            if (null != s.task_id && "" !== s.task_id) continue;
                            let e = s.items ?? [];
                            if (0 === e.length) continue;
                            null != l
                                ? (l.todos = e)
                                : ((l = { type: "todos", key: `todos-${i}`, todos: e }), t.push(l));
                            continue;
                        }
                        if ("assistant_delta" !== s.kind || (null != s.task_id && "" !== s.task_id)) continue;
                        let e = s.message ?? "";
                        "" !== e &&
                            (null == n
                                ? ((n = { type: "message", key: `message-${i}`, content: e }), t.push(n))
                                : (n.content = e)),
                            !0 === s.message_finished && (n = null);
                    }
                    return t;
                })(n),
            [n],
        ),
        g = p.filter((e) => "message" === e.type).at(-1),
        x = (function (e) {
            for (let t = e.length - 1; t >= 0; t--) {
                let n = e[t];
                if (null != n) {
                    if ("assistant_delta" === n.kind && null != n.message && "" !== n.message) return !0;
                    if (!eh(n) && ("node" === n.kind || "error" === n.kind || "terminal_error" === n.kind)) break;
                }
            }
            return !1;
        })(n),
        v = x && null != g && g.content.trim() === l.trim(),
        j = null == s && "" !== l && !v,
        y = (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: null != c && c.length > 0, showsClosingMessage: j, endsOnStreamedMessage: x }),
        k = null == c ? null : (0, a.jsx)(eX, { projectId: t, attachments: c }),
        A = null == k ? null : (0, a.jsx)("div", { className: ep.MT, children: k }),
        w = f
            ? (0, a.jsx)(b.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: P.intl.string(R.default.OAjkIT),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: ep.ue,
        children: [
            p.length > 0
                ? (0, a.jsx)("ol", {
                      className: ep.dO,
                      children: p
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: ep.DV,
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: tC.PT,
                                              children: e$.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === y && e === g ? A : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != s
                ? (0, a.jsx)(e7, { proposal: s })
                : j
                  ? (0, a.jsxs)("div", {
                        className: r()(ep.ky, eL.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: r()(tC.PT, ep.cW),
                                children: e$.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === y ? A : null,
                            w,
                        ],
                    })
                  : null,
            null != u
                ? (0, a.jsx)("div", {
                      className: r()(ep.ky, eL.XR),
                      children: (0, a.jsx)(e9, { projectId: t, request: u }),
                  })
                : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: r()(ep.ky, eL.XR),
                      children: (0, a.jsx)(tn, { projectId: t, request: d }),
                  })
                : null,
            "standalone" === y ? k : null,
            null != o && o.length > 0 ? (0, a.jsx)(eW, { ideas: o, pickedIdeaIds: m, onPick: h }) : null,
            j ? null : w,
        ],
    });
}
n(323874), n(14289), n(35956);
var tR = n(475358),
    tP = n(922016),
    tM = n(980707),
    tL = n(477782),
    tO = n(81369),
    tF = n(717400),
    tD = n(663341),
    tq = n(826745),
    tU = n(866665),
    t$ = n(428610),
    tG = n(783977),
    tB = n(559647),
    tH = n(285796),
    tV = n(775602),
    tz = n(311656),
    tW = n(789438);
let tY = eY.Is;
function tK(e) {
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
    let u = "exit" === s ? tW.t0 : "enterStart" === s ? tW.Rj : "";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { className: `${tW.xM} ${tW.nT} ${u}`, children: n }),
            (0, a.jsx)(tR.e, { shortcut: "tab", className: `${tW.xT} ${tW.nT} ${u}`, keyClassName: tW.IS }),
        ],
    });
}
let tX = 0;
function tZ(e) {
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
        [b, j] = i.useState(""),
        y = (0, w.bG)([tV.Ay], () => tV.Ay.isSubmitButtonEnabled),
        [k, A] = i.useState([]),
        [N, S] = i.useState(!1),
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
    let F = i.useCallback((e) => {
            (M.current = e), A(e);
        }, []),
        D = i.useCallback((e) => {
            O.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    i.useEffect(() => {
        let e = L.current;
        return () => {
            for (let t of M.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && D(t.ref);
        };
    }, [D]);
    let q = i.useCallback(
            (e, t) => {
                if (L.current.has(e)) return;
                let n = M.current;
                n.some((t) => t.localId === e) && F(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [F],
        ),
        U = i.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...M.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++tX,
                        i = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= tY) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.DlX57a, { count: tY }),
                        });
                        continue;
                    }
                    if (!(0, eY.x5)(l.size, e)) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.cI7t94, {
                                size: (0, eY.ZJ)((0, eY.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let s = eY.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...i, previewUrl: s }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: l } of (F(t), n))
                    c(e).then(
                        (e) => {
                            L.current.has(l) ? D(e) : q(l, { status: "ready", ref: e });
                        },
                        (e) => {
                            L.current.has(l) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                q(l, { status: "error", errorText: P.intl.string(R.default.GwEHvn) }));
                        },
                    );
            },
            [D, c, q, F],
        ),
        $ = i.useCallback(async () => {
            if (null != h && !E) {
                C(!0);
                try {
                    let e = await h();
                    null != e && U([e]);
                } catch (e) {
                    console.error("[vibegrations] region capture failed", e),
                        F([
                            ...M.current,
                            {
                                localId: ++tX,
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
        }, [h, E, U, F]),
        G = i.useCallback(
            (e) => {
                let t = M.current,
                    n = t.find((t) => t.localId === e);
                L.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && D(n.ref),
                    F(t.filter((t) => t.localId !== e));
            },
            [D, F],
        ),
        B = k.every((e) => "ready" === e.status),
        H = "" !== b.trim() || k.length > 0,
        V = t && H && B,
        z = i.useCallback(() => {
            if (!V) return;
            let e = M.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (r(b, e.length > 0 ? e : void 0), M.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            j(""), F([]);
        }, [V, b, r, F]),
        W = i.useCallback(
            (e) => {
                e.preventDefault(), z();
            },
            [z],
        ),
        Y = i.useCallback(() => {
            null == o || I || (T(!0), o());
        }, [o, I]),
        K = i.useCallback(
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
        X = i.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), U(n));
            },
            [t, U],
        ),
        Z = i.useCallback(
            (e) => {
                e.preventDefault(), S(!1), t && U(Array.from(e.dataTransfer.files));
            },
            [t, U],
        ),
        Q = i.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), S(!0));
        }, []),
        J = i.useCallback(
            (e) => {
                U(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [U],
        ),
        ee = i.useRef(null),
        et = i.useRef(null),
        [en, el] = i.useState(0),
        [ea, ei] = i.useState(!1);
    i.useEffect(() => {
        if (0 === b.length) return void ei(!1);
        let e = ee.current?.querySelector("textarea");
        if (null != e) {
            let t = t0(e);
            null != t && el(t);
        }
        ei(!0);
        let t = setTimeout(() => ei(!1), tQ);
        return () => clearTimeout(t);
    }, [b]);
    let es = i.useMemo(() => ({ "--custom-glow-x": `${en}px` }), [en]),
        er = ea ? ` ${tW.EB}` : "",
        eo = t && !s && null != p && "" === b;
    return (0, a.jsxs)("form", {
        onSubmit: W,
        onDrop: Z,
        onDragOver: Q,
        onDragLeave: () => S(!1),
        className: N ? `${tW.DA} ${tW.pV}` : tW.DA,
        children: [
            k.length > 0
                ? (0, a.jsx)("div", {
                      className: tW.lN,
                      children: k.map((e) => (0, a.jsx)(t1, { draft: e, onRemove: G }, e.localId)),
                  })
                : null,
            (0, a.jsx)("span", { className: `${tW.wg} ${tW.LP}${er}`, style: es, "aria-hidden": !0 }),
            (0, a.jsx)("span", { className: `${tW.wg} ${tW.L3}${er}`, style: es, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: tW.VA,
                ref: ee,
                children: [
                    (0, a.jsx)("input", {
                        ref: _,
                        type: "file",
                        multiple: !0,
                        onChange: J,
                        className: tW.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(tP.Y, {
                        targetElementRef: et,
                        position: "top",
                        align: "left",
                        animation: tP.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, a.jsx)(tM.W, {
                                "data-menu-migrated": !0,
                                navId: "vibegrations-composer-attach",
                                "aria-label": P.intl.string(P.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, a.jsxs)(tL.rX, {
                                    children: [
                                        (0, a.jsx)(tL.Dr, {
                                            id: "upload-file",
                                            label: P.intl.string(P.t["d3+iYs"]),
                                            iconLeft: tO.H,
                                            leadingAccessory: { type: "icon", icon: tO.H },
                                            action: () => _.current?.click(),
                                        }),
                                        null != f
                                            ? (0, a.jsx)(tL.Dr, {
                                                  id: "import-project",
                                                  label: P.intl.string(R.default.edKajy),
                                                  iconLeft: tF.q,
                                                  leadingAccessory: { type: "icon", icon: tF.q },
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
                                className: `${tW.Y0} ${tW.nu}`,
                                disabled: !t,
                                "aria-label": P.intl.string(P.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": l,
                                children: (0, a.jsx)(tD.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: tW.Qu,
                                }),
                            });
                        },
                    }),
                    eo
                        ? (0, a.jsx)("div", {
                              className: tW.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(tK, { text: p }),
                          })
                        : null,
                    (0, a.jsx)(tq.y, {
                        value: b,
                        onChange: (e) => j(e.currentTarget.value),
                        onKeyDown: K,
                        onPaste: X,
                        placeholder: s
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
                        className: tW.jp,
                    }),
                    (0, a.jsxs)("div", {
                        className: tW.Sz,
                        children: [
                            (0, a.jsx)(tU.m, {
                                text: P.intl.string(R.default.B5gWPk),
                                ariaHidden: !0,
                                children: (0, a.jsx)("button", {
                                    type: "button",
                                    className: tW.Y0,
                                    disabled: null == h || !t || E,
                                    onClick: $,
                                    "aria-label": P.intl.string(R.default.B5gWPk),
                                    children: E
                                        ? (0, a.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: tW.Rk })
                                        : (0, a.jsx)(t$.K, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                }),
                            }),
                            l && null != o
                                ? (0, a.jsx)(tU.m, {
                                      text: P.intl.string(R.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: tW.AW,
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
                                  ? (0, a.jsx)(tz.A, {
                                        settings: x.settings,
                                        choices: x.choices,
                                        disabled: !t,
                                        onChange: v,
                                        className: `${tW.Y0} ${tW.Il}`,
                                        icon: (0, a.jsx)(tG.R, {
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
                              className: tW.fF,
                              children: [
                                  (0, a.jsx)("div", { className: tW.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: tW.rt,
                                      disabled: !V,
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
let tQ = 1500,
    tJ = [
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
function t0(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = t0.mirror;
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
                (t0.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of tJ) t.style.setProperty(e, n.getPropertyValue(e));
    (t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length));
    let l = document.createElement("span");
    (l.textContent = "\u200B"), t.appendChild(l);
    let a = l.offsetLeft;
    return (t.textContent = ""), e.offsetLeft + a - e.scrollLeft;
}
function t1(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(eE, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(b.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: tW.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: tW.o1,
                onClick: () => n(t.localId),
                "aria-label": P.intl.string(R.default["3HWvgk"]),
                children: (0, a.jsx)(tH.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
t0.mirror = null;
var t2 = n(287809),
    t6 = n(320095),
    t3 = n(963852),
    t5 = n(521981),
    t7 = n(763754),
    t4 = n(491182),
    t8 = n(622868),
    t9 = n(308334),
    ne = n(837528),
    nt = n(375199),
    nn = n(715628),
    nl = n(752636),
    na = n(9842),
    ni = n(589022),
    ns = n(95701),
    nr = n(994500),
    no = n(967198),
    nc = n(441136);
let nu = (0, ns.createChannelRecord)({ id: "vibegrations-builder", type: C.rbe.DM }),
    nd = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function nh(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: r()(nc.Yq, { [nc.x1]: t }), children: e });
}
function nm(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function nf(e, t) {
    let { content: n } = (0, nt.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        l = i.useMemo(() => ({ message: e, channel: nu, compact: !1, groupId: e.id }), [e]);
    return "" !== t ? (0, nn.A)(l, n) : null;
}
function np(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        s = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        r = (0, ne.m)(e, nu, t.usernameProfile, l),
        o = (0, ne.Jo)(t.avatarProfile, l),
        c = (0, w.bG)([no.A], () => no.A.getGuildId()),
        u = (0, w.bG)([t2.default], () => t2.default.getCurrentUser()),
        d = i.useCallback(
            (t) => {
                let n = t2.default.getUser(e.author.id) ?? e.author;
                return null == u ? null : (0, a.jsx)(ni.A, { ...t, user: n, currentUser: u, guildId: c ?? void 0 });
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
function ng(e) {
    let { baseMessage: t, referenced: n, onJumpToReplied: l } = e,
        s = i.useMemo(
            () => ("" !== n.content ? (0, t5.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null),
            [n],
        ),
        { isReplyAuthorBlocked: r, isReplyAuthorIgnored: o } = (0, w.cf)(
            [nr.A],
            () => ({
                isReplyAuthorBlocked: nr.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: nr.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        c = (0, t7.X4)(n),
        u = (0, t7.X4)(t),
        d = np(n);
    return (0, a.jsx)(t9.A, {
        repliedAuthor: c,
        baseAuthor: u,
        baseMessage: t,
        channel: nu,
        referencedMessage: { state: na.a.LOADED, message: n },
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
function nx(e) {
    let { message: t, author: n } = e,
        l = np(t);
    return (0, a.jsx)(t8.Ay, {
        message: t,
        channel: nu,
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
function nv(e) {
    let { content: t, createdAt: n, userId: l, accessories: s } = e,
        r = (0, w.bG)([t2.default], () => (null != l ? t2.default.getUser(l) : null) ?? t2.default.getCurrentUser(), [
            l,
        ]),
        o = i.useMemo(() => (0, t7.FT)(r, null), [r]),
        c = i.useMemo(() => {
            if (null == r) return null;
            let e = (0, t3.Ay)({ channelId: nu.id, content: t, author: r });
            return (0, t6.rh)({ ...e, timestamp: nm(n, e.timestamp), state: C.cmJ.SENT });
        }, [t, r, n]);
    return null == c ? null : (0, a.jsx)(nb, { message: c, author: o, content: t, accessories: s });
}
function nb(e) {
    let { message: t, author: n, content: l, accessories: i } = e,
        s = nf(t, l);
    return (0, a.jsx)(t4.A, {
        className: nc.yE,
        author: n,
        childrenHeader: (0, a.jsx)(nx, { message: t, author: n }),
        childrenMessageContent: s,
        childrenAccessories: nh(i, "" !== l),
        disableInteraction: !0,
    });
}
function nj(e) {
    let { content: t, createdAt: n, accessories: l, replyTo: s, onJumpToReplied: r } = e,
        o = i.useMemo(() => (0, t7.FT)(null, null), []),
        c = i.useMemo(() => ({ ...o, nick: "Conjure", colorString: "var(--text-brand)" }), [o]),
        u = s?.userId,
        d = (0, w.bG)([t2.default], () => (null != u ? t2.default.getUser(u) : null) ?? t2.default.getCurrentUser(), [
            u,
        ]),
        h = i.useMemo(() => {
            if (null == s || null == d) return null;
            let e = (0, t3.Ay)({ channelId: nu.id, content: s.content, author: d });
            return (0, t6.rh)({ ...e, id: s.id, timestamp: nm(s.createdAt, e.timestamp), state: C.cmJ.SENT });
        }, [s, d]),
        m = i.useMemo(() => (null == s ? void 0 : { channel_id: nu.id, message_id: s.id }), [s]),
        f = i.useMemo(() => {
            let e = (0, t3.Ay)({ channelId: nu.id, content: t, author: nd });
            return (0, t6.rh)({
                ...e,
                timestamp: nm(n, e.timestamp),
                state: C.cmJ.SENT,
                ...(null != m ? { type: C.lAJ.REPLY, message_reference: m } : {}),
            });
        }, [t, n, m]),
        p = nf(f, t);
    return (0, a.jsxs)("div", {
        className: nc.$4,
        "data-replying": null != h ? "true" : void 0,
        children: [
            (0, a.jsx)(t4.A, {
                className: nc.yE,
                author: c,
                childrenRepliedMessage:
                    null == h ? null : (0, a.jsx)(ng, { baseMessage: f, referenced: h, onJumpToReplied: r }),
                childrenHeader: (0, nl.A)({ message: f, channel: nu, author: c, guildId: void 0, isGroupStart: !0 }),
                childrenMessageContent: p,
                childrenAccessories: nh(l, "" !== t),
                disableInteraction: !0,
            }),
            (0, a.jsx)("span", {
                className: nc.st,
                "aria-hidden": "true",
                children: (0, a.jsx)(U.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
            }),
        ],
    });
}
function ny(e) {
    let { projectId: t, messages: n, ref: l, onPickIdea: s } = e,
        r = (0, w.bG)([t2.default], () => t2.default.getCurrentUser()),
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
    }, []);
    return 0 === n.length
        ? (0, a.jsx)("ol", {
              ref: l,
              className: eK.x7,
              children: (0, a.jsx)(nk, {
                  role: "assistant",
                  children: (0, a.jsx)(nj, { content: P.intl.string(R.default.khZEUv) }),
              }),
          })
        : (0, a.jsx)("ol", {
              ref: c,
              className: eK.x7,
              children: n.map((e, l) => {
                  if ("user" === e.role) {
                      let n = null != e.attachments && e.attachments.length > 0 ? e.attachments : null;
                      return (0, a.jsx)(
                          nk,
                          {
                              role: "user",
                              anchorId: e.id,
                              highlighted: u === e.id,
                              children: (0, a.jsx)(nv, {
                                  content: e.content,
                                  createdAt: e.created_at,
                                  userId: e.user_id ?? r?.id,
                                  accessories: null != n ? (0, a.jsx)(eX, { projectId: t, attachments: n }) : void 0,
                              }),
                          },
                          e.render_id,
                      );
                  }
                  let o = e.steps.some(
                          (e) =>
                              "error" === e.kind ||
                              "terminal_error" === e.kind ||
                              ("node" === e.kind && null != e.node && !eh(e)),
                      ),
                      c = e.steps.some((e) => "assistant_delta" === e.kind && null != e.message && "" !== e.message),
                      d =
                          e.steps.some(
                              (e) =>
                                  "todos" === e.kind &&
                                  (null == e.task_id || "" === e.task_id) &&
                                  (e.items?.length ?? 0) > 0,
                          ) || (e.todos?.length ?? 0) > 0,
                      h =
                          "" !== e.content ||
                          null != e.proposal ||
                          null != e.ideas ||
                          null != e.clarification ||
                          null != e.secretRequest ||
                          c ||
                          (e.attachments?.length ?? 0) > 0,
                      f = !0 === e.interrupted;
                  return o || h || f || d
                      ? (0, a.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    o || f || d
                                        ? (0, a.jsx)(nk, {
                                              role: "assistant",
                                              children: (0, a.jsx)(tT, {
                                                  projectId: t,
                                                  interrupted: f,
                                                  steps: e.steps,
                                                  active: !(0, ef.BL)(e),
                                                  durationMs:
                                                      null != e.finished_at ? e.finished_at - e.created_at : void 0,
                                                  todos: e.todos,
                                                  provisionalTodo: e.provisionalTodo,
                                              }),
                                          })
                                        : null,
                                    h
                                        ? (0, a.jsx)(nk, {
                                              role: "assistant",
                                              children: (0, a.jsx)(nj, {
                                                  content: e.content,
                                                  createdAt: e.created_at,
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
                                                  })(n, e.in_reply_to),
                                                  onJumpToReplied:
                                                      null != e.in_reply_to ? () => m(e.in_reply_to) : void 0,
                                                  accessories: (0, a.jsx)(t_, {
                                                      projectId: t,
                                                      steps: e.steps,
                                                      announcement: e.announcement,
                                                      content: "",
                                                      proposal: e.proposal,
                                                      interrupted: !0 === e.interrupted,
                                                      active: !(0, ef.BL)(e),
                                                      ideas: e.ideas,
                                                      pickedIdeaIds:
                                                          null == e.ideas
                                                              ? void 0
                                                              : (function (e, t, n) {
                                                                    let l = new Set();
                                                                    for (let a = t + 1; a < e.length; a++) {
                                                                        let t = e[a];
                                                                        if ("user" === t.role)
                                                                            for (let e of n)
                                                                                e.implementation_prompt.trim() ===
                                                                                    t.content.trim() && l.add(e.id);
                                                                    }
                                                                    return l;
                                                                })(n, l, e.ideas),
                                                      attachments: e.attachments,
                                                      secretRequest: e.secretRequest,
                                                      settingsRequest: e.settingsRequest,
                                                      onPickIdea: s,
                                                  }),
                                              }),
                                          })
                                        : null,
                                ],
                            },
                            e.render_id,
                        )
                      : null;
              }),
          });
}
function nk(e) {
    let { role: t, children: n, anchorId: l, highlighted: i = !1 } = e;
    return (0, a.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": l,
        className: r()(eK.xk, { [eK.Qo]: i }),
        children: n,
    });
}
var nA = n(625903),
    nw = n(964675);
function nN(e) {
    let { projectId: t } = e,
        n = (0, w.bG)([h.Ay], () => null != h.Ay.getSettings(t), [t]),
        l = i.useCallback(() => {
            (0, te.A)(t);
        }, [t]);
    return n
        ? (0, a.jsx)(eb.D, {
              className: nw.h,
              "aria-label": P.intl.string(R.default.gTMvzD),
              onClick: l,
              children: (0, a.jsx)(nA.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var nS = n(863610),
    nE = n(495557);
function nC(e) {
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
            className: nE.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(er.Ch, {
                ref: s,
                className: nE.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: r()(tC.PT, nE.bb),
                    children: e$.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var nI = n(921461);
function nT(e) {
    let { activity: t, compacting: n = !1, restoring: l = !1 } = e,
        s = i.useRef(null),
        o = i.useId(),
        [c, u] = i.useState(null),
        d = null != t && "end" !== t.phase,
        h = l ? R.default.aFffp2 : n ? R.default["0vH/5G"] : d ? R.default.Ly7F7x : R.default.QDGuNS,
        m = null != t && "" !== t.text,
        f = t?.session ?? null,
        p = m && null != f && c === f,
        g = i.useCallback(() => {
            m && null != f && u((e) => (e === f ? null : f));
        }, [m, f]),
        x = i.useCallback(() => u(null), []);
    return (0, a.jsx)(tP.Y, {
        targetElementRef: s,
        position: "top",
        align: "left",
        shouldShow: p,
        onRequestClose: x,
        renderPopout: () => (0, a.jsx)(nC, { id: o, activity: t }),
        children: () =>
            (0, a.jsxs)(eb.D, {
                innerRef: s,
                className: r()(nI.hF, m && nI.Xd),
                "aria-label": P.intl.string(l ? R.default.pGFXZ0 : R.default.SzdX35),
                "aria-expanded": p,
                "aria-describedby": p ? o : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: g,
                children: [
                    (0, a.jsx)("span", {
                        className: nI.bl,
                        children: (0, a.jsx)(nS.n, { dotRadius: 3.5, themed: !0 }),
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
var n_ = n(885574),
    nR = n(280894);
function nP(e) {
    return e.toLocaleString();
}
function nM(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: nR.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: nR.mf,
                children: [
                    (0, a.jsx)(b.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [nP((0, eY.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(b.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    nP(n.input_tokens),
                    " in \xb7 ",
                    nP(n.output_tokens),
                    " out \xb7 ",
                    nP(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    nP(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function nL(e) {
    let { project: t } = e,
        n = (0, eY.wV)(t.orchestrator, t.codegen);
    return (0, a.jsxs)("div", {
        className: nR.si,
        role: "dialog",
        "aria-label": P.intl.string(R.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: nR.Q$,
                children: (0, a.jsxs)("div", {
                    className: nR.mf,
                    children: [
                        (0, a.jsxs)(b.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [nP((0, eY.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(b.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(nM, { label: P.intl.string(R.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(nM, { label: P.intl.string(R.default.R9aduM), usage: t.codegen }),
            (0, a.jsxs)("div", {
                className: nR.mf,
                children: [
                    (0, a.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(R.default["kILb+R"]),
                    }),
                    (0, a.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, eY.sj)(n) ? "\u2014" : `${Math.round(100 * (0, eY.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function nO(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(tP.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(nL, { project: t }),
        children: (e) =>
            (0, a.jsx)(eb.D, {
                innerRef: n,
                className: nR.Y$,
                "aria-label": P.intl.string(R.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(n_.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var nF = n(258216);
function nD(e) {
    switch (e) {
        case "connecting":
            return P.intl.string(R.default.W7oyuf);
        case "failed":
            return P.intl.string(R.default.eE60xI);
        case "closed":
            return P.intl.string(R.default["yBmS+I"]);
    }
}
function nq(e) {
    let {
        projectId: t,
        thinking: n,
        restoring: l = !1,
        thinkingActivity: i,
        compacting: s,
        projectUsage: r,
        connState: o,
    } = e;
    return (0, a.jsxs)("div", {
        className: nF.jf,
        children: [
            (0, a.jsx)("div", {
                className: nF.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: n || l ? (0, a.jsx)(nT, { activity: i, compacting: s, restoring: l }) : null,
            }),
            (0, a.jsx)(nN, { projectId: t }),
            null == r
                ? null
                : (0, a.jsxs)("span", {
                      className: nF.BP,
                      children: [
                          (0, a.jsx)(b.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": P.intl.formatToPlainString(R.default["7SZZvj"], {
                                  runes: (0, eY.a7)(r.cost_usd),
                                  turns: r.turns,
                              }),
                              children: P.intl.formatToPlainString(R.default["4PFO2p"], {
                                  runes: (0, eY.a7)(r.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(nO, { project: r }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, a.jsx)(b.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": P.intl.formatToPlainString(R.default.eDDdhB, { status: nD(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: nF.XF,
                      children: nD(o),
                  }),
        ],
    });
}
var nU = n(22231),
    n$ = n(477155),
    nG = n(935286),
    nB = n(424110);
function nH(e) {
    let { option: t, position: n, disabled: l, onPick: s } = e,
        o = i.useId(),
        c = !0 === t.recommended,
        u = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eb.D, {
        className: r()(nB.uK, { [nB.ue]: l }),
        onClick: l ? void 0 : () => s(t),
        "aria-label": P.intl.formatToPlainString(c ? R.default.aL1BKQ : R.default.k7lEgj, { answer: t.label }),
        "aria-describedby": u ? o : void 0,
        "aria-disabled": l,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            (0, a.jsx)("span", { className: nB.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: nB.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: nB.l8,
                        children: (0, a.jsx)(b.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: nB.ed,
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
                      className: nB.rM,
                      children: P.intl.string(R.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function nV(e) {
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
        A = u[x.id] ?? "",
        w = i.useCallback(() => {
            let e = A.trim();
            "" !== e && j({ kind: "custom", text: e });
        }, [A, j]),
        [N, S] = i.useState(!1),
        [E, C] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => S(!0));
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
        className: r()(nB.$O, { [nB.fI]: N && !E, [nB.Oh]: E }),
        role: "dialog",
        "aria-label": x.question,
        "data-vibegrations-clarification": t.id,
        "data-state": f ? "inert" : "open",
        "data-step": g,
        children: [
            (0, a.jsxs)("div", {
                className: nB.wx,
                children: [
                    (0, a.jsx)(b.E, {
                        tag: "span",
                        id: `${x.id}-label`,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        selectable: !0,
                        className: nB.TK,
                        children: x.question,
                    }),
                    null == l
                        ? null
                        : (0, a.jsx)(eb.D, {
                              className: r()(nB.gb, nB.Q7),
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
                className: nB.Ge,
                role: "group",
                "aria-labelledby": `${x.id}-label`,
                children: [
                    x.options.map((e, t) =>
                        (0, a.jsx)(
                            nH,
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
                        className: nB.Xy,
                        children: [
                            (0, a.jsx)("span", {
                                className: nB.Gy,
                                "aria-hidden": !0,
                                children: (0, a.jsx)(nU.PencilIcon, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: "currentColor",
                                }),
                            }),
                            (0, a.jsx)(tq.y, {
                                value: A,
                                onChange: (e) => {
                                    let { value: t } = e.currentTarget;
                                    d((e) => ({ ...e, [x.id]: t }));
                                },
                                onKeyDown: (e) => {
                                    "Enter" !== e.key ||
                                        e.shiftKey ||
                                        e.nativeEvent.isComposing ||
                                        (e.preventDefault(), w());
                                },
                                placeholder: P.intl.string(R.default.qifsdL),
                                "aria-label": P.intl.formatToPlainString(R.default.XHESTL, { question: x.question }),
                                disabled: f,
                                rows: 1,
                                className: nB.Pu,
                                "data-vibegrations-clarification-other": x.id,
                            }),
                        ],
                    }),
                ],
            }),
            p > 1
                ? (0, a.jsxs)("div", {
                      className: nB.qr,
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
                              className: nB.Np,
                              children: [
                                  (0, a.jsx)(eb.D, {
                                      className: r()(nB.gb, { [nB.yI]: !k }),
                                      onClick: k ? y : void 0,
                                      tabIndex: k ? 0 : -1,
                                      "aria-hidden": !k,
                                      "aria-disabled": f,
                                      "aria-label": P.intl.string(R.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": k ? void 0 : "true",
                                      children: (0, a.jsx)(n$.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, a.jsx)(eb.D, {
                                      className: r()(nB.gb, { [nB.yI]: !_ }),
                                      onClick: _ ? T : void 0,
                                      tabIndex: _ ? 0 : -1,
                                      "aria-hidden": !_,
                                      "aria-disabled": f,
                                      "aria-label": P.intl.string(R.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": _ ? void 0 : "true",
                                      children: (0, a.jsx)(nG.E, {
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
var nz = n(643278),
    nW = n(405189);
function nY(e) {
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
        [k, A] = i.useState(!1),
        [w, N] = i.useState(g);
    w !== g && (N(g), g ? y(!0) : A(!1)),
        i.useEffect(() => {
            if (g || !j) return;
            let e = setTimeout(() => y(!1), 150);
            return () => clearTimeout(e);
        }, [g, j]),
        i.useEffect(() => {
            if (!j || !g) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => A(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [j, g]);
    let S = null != l && l.length > 0,
        E = i.useCallback(() => x((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: nW.qd,
              "data-placement": u,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: r()(nW.vK, { [nW.ho]: f && c, [nW.ET]: !c }),
                      children: [
                          (0, a.jsx)("ol", {
                              className: r()(nW.Rk, ep.pj),
                              "data-live": "true",
                              children: (0, a.jsx)(ey, { glyph: (0, a.jsx)(eg, {}), line: t, live: !0, settled: !1 }),
                          }),
                          S
                              ? (0, a.jsx)(tU.m, {
                                    text: P.intl.string(R.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(eb.D, {
                                        className: nW.BO,
                                        onClick: E,
                                        "aria-expanded": g,
                                        "aria-label": P.intl.string(R.default.qCRC6c),
                                        children: (0, a.jsx)(nz.ClipboardListIcon, {
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
                  j && S
                      ? (0, a.jsx)("div", {
                            className: r()(nW.vB, { [nW.pg]: g && k, [nW.ui]: !g }),
                            children: (0, a.jsx)(tE, { todos: l, provisional: s, agents: o, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var nK = n(366010),
    nX = n(825484),
    nZ = n(859703),
    nQ = n(24001),
    nJ = n(291749),
    n0 = n(971276),
    n1 = n(590202),
    n2 = n(710969),
    n6 = n(792620),
    n3 = n(201805),
    n5 = n(617986),
    n7 = n(363195),
    n4 = n(749414);
let n8 = !1;
function n9(e) {
    let t,
        n,
        l,
        { open: s } = e,
        r =
            ((t = (0, n3.dN)()),
            (n = (0, w.bG)([nZ.A], () => nZ.A.isQuestAccessSuspended || null != nZ.A.questEnrollmentBlockedUntil, [])),
            (l = (0, w.bG)([nZ.A], () => null != nZ.A.getQuestPreviewOverride(nQ.uF.QUEST_BAR_V2), [])),
            null != t && (0, n6.vv)(t)
                ? l
                    ? t.userStatus?.claimedAt != null
                        ? null
                        : t
                    : !(0, n0.s)() || n || (0, n2.Ic)(t) || t.userStatus?.completedAt != null
                      ? null
                      : t
                : null),
        [o, c] = i.useState(() => n8),
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
        g = (0, w.bG)([n7.A], () => n7.A.getState().theme),
        x = (0, nK.M)(g) ? C.NJ8.DARK : C.NJ8.LIGHT,
        v = null != p ? (0, nJ.tW)(p, nJ.fY.GAME_TILE, x).url : null,
        j = null != v && "" !== v ? v : null,
        y = i.useCallback(async () => {
            if (null == r) return;
            let e = {
                questContent: nQ.uF.QUEST_BAR_V2,
                sourceQuestContent: nQ.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: n1.Cy.WATCH_VIDEO,
            };
            r.userStatus?.enrolledAt != null
                ? (0, n5.d5)({ quest: r, ...e })
                : await (0, n5.e0)(r, { ...e, questContentCTA: n1.Cy.ACCEPT_QUEST });
        }, [r]),
        k = i.useCallback(() => {
            (n8 = !0), c(!0);
        }, []);
    return u && null != p
        ? (0, a.jsxs)("aside", {
              className: n4.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": d ? "closing" : "open",
              "aria-hidden": d,
              children: [
                  null != j
                      ? (0, a.jsxs)("div", {
                            className: n4.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, a.jsx)("img", { className: n4.Rx, src: j, alt: "" }),
                                (0, a.jsx)("div", { className: n4._e }),
                            ],
                        })
                      : null,
                  (0, a.jsxs)("div", {
                      className: n4.iB,
                      children: [
                          null != j ? (0, a.jsx)("img", { className: n4.w1, src: j, alt: "" }) : null,
                          (0, a.jsxs)("div", {
                              className: n4.Ug,
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
                  (0, a.jsxs)(nX.e, {
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
var le = n(506774),
    lt = n(651649),
    ln = n(670455);
let ll = "shownVibegrationsFeedbackProjectIds";
var la = n(348800);
let li = [P.intl.string(R.default["E+Q26x"]), P.intl.string(R.default["06/jqP"]), P.intl.string(R.default["7MCiK9"])];
function ls(e) {
    let { projectId: t, onRegionCapture: l, restoreState: s } = e,
        r = (0, w.bG)([ef.Ay], () => ef.Ay.getMessages(t), [t]),
        o = (0, w.bG)([h.Ay], () => h.Ay.getConnState(t), [t]),
        c = (0, w.bG)([h.Ay], () => h.Ay.isChatStopped(t), [t]),
        u = (0, w.bG)([ef.Ay], () => ef.Ay.getProjectUsage(t), [t]),
        d = (0, w.bG)([ef.Ay], () => ef.Ay.getThinkingActivity(t), [t]),
        m = (0, w.bG)([ef.Ay], () => ef.Ay.isCompacting(t), [t]),
        f = (0, w.bG)([h.Ay], () => h.Ay.getModelSettings(t), [t]),
        p = i.useRef(null),
        g = i.useRef(null),
        x = i.useRef(null),
        v = i.useRef(!0),
        [b, j] = i.useState(!0);
    i.useEffect(() => {
        v.current && g.current?.scrollToBottom();
    }, [r]);
    let y = i.useCallback(() => {
        let e = g.current;
        if (null == e) return;
        let t = e.getDistanceFromBottom();
        v.current = t < 32;
        let n = t > 1;
        j((e) => (!n === e ? e : !n));
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
                    let t = ef.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, ef.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((le.w.get(ll) ?? []).includes(e) ||
                            lt.A.possiblyShowFeedbackModal(ln.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = le.w.get(ll) ?? []).includes(e) || le.w.set(ll, [...l, e]),
                                    (0, e4.openModalLazy)(async () => {
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
        A = i.useCallback(() => (0, h.fu)(t), [t]),
        N = i.useCallback((e) => k(e.implementation_prompt), [k]),
        S = i.useCallback((e) => k(e), [k]),
        E = i.useCallback((e) => (0, h.XZ)(t, e), [t]),
        C = i.useCallback((e) => (0, h.vX)(t, e), [t]),
        I = i.useCallback((e) => (0, h.Vm)(t, e), [t]),
        T = i.useCallback(() => k(P.intl.string(R.default.Jj8Ftb)), [k]),
        _ = s?.status === "restoring",
        M = "open" === o && !c && !_,
        L = r[r.length - 1],
        O = null != L && "assistant" === L.role && null != L.proposal,
        [F, D] = i.useState(null),
        q = L?.clarification != null && L.clarification.id !== F ? L.clarification : null,
        U = i.useCallback(() => {
            null != q && D(q.id);
        }, [q]),
        $ = (0, w.bG)([ef.Ay], () => ef.Ay.hasLoadedHistory(t), [t]),
        G = i.useMemo(() => {
            let e = 0;
            for (let n = 0; n < t.length; n++) e = (31 * e + t.charCodeAt(n)) % 0x7fffffff;
            return li[e % li.length];
        }, [t]),
        B = O
            ? P.intl.string(R.default.Jj8Ftb)
            : L?.kind === "plan_implemented"
              ? P.intl.string(R.default["3sTTBu"])
              : $ && 0 === r.length
                ? G
                : null,
        H = i.useMemo(() => {
            for (let e = r.length - 1; e >= 0; e--) {
                let t = r[e];
                if ("assistant" === t.role && !(0, ef.BL)(t)) return t;
            }
        }, [r]),
        V = null != H,
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
        }, [V, H?.steps]);
    let Z = i.useMemo(() => {
            let e, t;
            return null != H
                ? null != (t = ed((e = eu(H.steps, { turnActive: !0 })).steps))
                    ? ec(t)
                    : (e.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ??
                      P.intl.string(R.default.nv6pUM))
                : "";
        }, [H]),
        Q = i.useMemo(() => (null != H ? (em(H.steps) ?? H.todos) : void 0), [H]),
        J = H?.provisionalTodo,
        ee = i.useMemo(() => (null != H ? tI(eu(H.steps, { turnActive: !0 }).tasks) : void 0), [H]);
    return (0, a.jsxs)("section", {
        ref: p,
        "data-vibegrations-chat": !0,
        className: la.TE,
        children: [
            (0, a.jsx)(n9, { open: null != H }),
            (0, a.jsx)(nY, {
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
                className: b ? la.N$ : `${la.N$} ${la.hB}`,
                children: (0, a.jsx)(ny, { ref: x, projectId: t, messages: r, onPickIdea: M ? N : void 0 }),
            }),
            (0, a.jsxs)("div", {
                className: la.im,
                children: [
                    (0, a.jsx)(nq, {
                        projectId: t,
                        thinking: V,
                        restoring: _,
                        thinkingActivity: d,
                        compacting: m,
                        projectUsage: u,
                        connState: o,
                    }),
                    (0, a.jsxs)("div", {
                        className: la.Jx,
                        children: [
                            (0, a.jsx)(nY, {
                                line: Z,
                                placement: V && "bottom" === W ? "bottom" : null,
                                todos: Q,
                                provisionalTodo: J,
                                agents: ee,
                            }),
                            null == q
                                ? null
                                : (0, a.jsx)("div", {
                                      className: la.B5,
                                      children: (0, a.jsx)(
                                          nV,
                                          { clarification: q, onSubmit: M ? S : void 0, onDismiss: U },
                                          q.id,
                                      ),
                                  }),
                            (0, a.jsx)(tZ, {
                                canSend: M,
                                stopped: c,
                                running: V,
                                restoring: _,
                                onSend: k,
                                onInterrupt: M ? A : void 0,
                                onUploadFile: C,
                                onDeleteFile: I,
                                onApprove: z,
                                onRegionCapture: l,
                                suggestion: B,
                                questionOpen: null != q,
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
var lr = n(435558),
    lo = n(661531),
    lc = n(602853),
    lu = n(517461),
    ld = n(761929),
    lh = n(927506);
function lm(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: s } = e,
        r = (0, lc.r)(lo.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [c, u] = (0, lu.V)("VibegrationsChatSidebarWidth", 460),
        [d, h] = i.useState(c ?? 460),
        m = (0, lr.clamp)(d, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + r : 0);
    }, [m, t, r, l]);
    let f = (0, ld.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: u,
            orientation: ld.R.HORIZONTAL_LEFT,
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
        className: lh.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: lh.Di, onPointerDown: p }),
            (0, a.jsx)("div", { ref: o, className: lh.kL, style: { width: m }, children: s }),
        ],
    });
}
var lf = n(145615);
let lp = [6, 8, 10, 12],
    lg = {
        home: { blob: 1, twink: 1, alpha: 0.7 },
        conversation: { blob: 1, twink: 1, alpha: 0.7 },
        thinking: { blob: 3, twink: 2.4, alpha: 0.7 },
    };
function lx(e, t, n) {
    let l = (0x165667b1 * e) ^ (0x27d4eb2f * t) ^ (0x7fffffff * n);
    return (l = Math.imul(l ^ (l >>> 13), 0x4bf19f61)), (((l ^= l >>> 16) >>> 0) % 1e6) / 1e6;
}
let lv = i.memo(function (e) {
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
                h = lg.home.blob,
                m = lg.home.twink,
                f = lg.home.alpha,
                p = 0,
                g = lp[0],
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
            let A = new MutationObserver(y);
            A.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] });
            let w = -1;
            function N() {
                let e = Math.max(r, u);
                (e === u && w === g && c.length > 0) ||
                    ((u = e),
                    (w = g),
                    (c = (function (e, t) {
                        let n = [],
                            l = Math.ceil(e / t) + 1,
                            a = Math.ceil(600 / t) + 1;
                        for (let e = 0; e < a; e++)
                            for (let t = 0; t < l; t++)
                                n.push({
                                    i: t,
                                    j: e,
                                    threshold: 0.05 + 0.95 * lx(t, e, 1),
                                    phase: lx(t, e, 2) * Math.PI * 2,
                                    freq: 0.25 + 1.5 * lx(t, e, 3),
                                });
                        return n;
                    })(e, g)));
            }
            function S() {
                let t = e.getBoundingClientRect(),
                    n = t.width,
                    l = t.height;
                (0.5 > Math.abs(n - r) && 0.5 > Math.abs(l - o)) ||
                    ((r = n),
                    (o = l),
                    (e.width = Math.max(1, Math.floor(r * i))),
                    (e.height = Math.max(1, Math.floor(o * i))),
                    null != a && (a.setTransform(i, 0, 0, i, 0, 0), (a.imageSmoothingEnabled = !1)),
                    N(),
                    T(0.001 * performance.now()));
            }
            S();
            let E = new ResizeObserver(S);
            E.observe(t), window.addEventListener("resize", S);
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
                                    x.length < 60 || b < 180 || p >= lp.length - 1))
                            )
                                return;
                            let t = 0;
                            for (let e = 0; e < x.length; e++) t += x[e];
                            let n = t / x.length;
                            n <= 22 ||
                                ((g = lp[++p]),
                                (b = 0),
                                (w = -1),
                                N(),
                                console.log(
                                    "[Vibegrations/glow-dither] perf degrade \u2192 spacing",
                                    g,
                                    "avg",
                                    n.toFixed(2),
                                    "ms",
                                ));
                        })(n);
                    let a = lg[s.current] ?? lg.home,
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
                    cancelAnimationFrame(I), E.disconnect(), A.disconnect(), window.removeEventListener("resize", S);
                }
            );
        }, []);
    let r = lf.P5;
    return (
        (r = "conversation" === t ? `${r} ${lf.wY}` : "home" === t ? `${r} ${lf.Qy}` : `${r} ${lf.fR}`),
        (0, a.jsx)("div", {
            ref: n,
            className: r,
            "aria-hidden": "true",
            children: (0, a.jsx)("canvas", { ref: l, className: lf.DX }),
        })
    );
});
var lb = n(408694);
function lj(e) {
    let { projectId: t } = e,
        n = (0, w.bG)([ef.Ay], () => (ef.Ay.isThinking(t) ? "thinking" : "conversation"), [t]);
    return (0, a.jsxs)("div", {
        className: lb.D1,
        "aria-hidden": !0,
        children: [
            (0, a.jsxs)("div", {
                className: lb.ys,
                "data-state": n,
                children: [(0, a.jsx)("div", { className: lb.Fc }), (0, a.jsx)("div", { className: lb.dW })],
            }),
            (0, a.jsx)(lv, { state: n }),
        ],
    });
}
var ly = n(333007),
    lk = n(439108);
function lA(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function lw(e) {
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
                    a = lA({ ...s, x: t.x, y: t.y });
                r(null), a.width < 8 && a.height < 8 ? l() : n(a);
            },
            [s, o, n, l],
        ),
        h = null == s ? null : lA(s);
    return (0, ly.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: lk.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: lk.aC,
                    style: { left: t.left, top: t.top, width: t.width, height: t.height },
                    role: "application",
                    "aria-label": P.intl.string(R.default["9MOgRI"]),
                    onPointerDown: c,
                    onPointerMove: u,
                    onPointerUp: d,
                    onPointerCancel: l,
                    children:
                        null == h
                            ? (0, a.jsx)("div", {
                                  className: lk.F7,
                                  children: (0, a.jsx)("div", {
                                      className: lk.aK,
                                      children: (0, a.jsx)(b.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: P.intl.string(R.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: lk.r1,
                                  style: { left: h.x, top: h.y, width: h.width, height: h.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
var lN = n(314116),
    lS = n(364522),
    lE = n(406810),
    lC = n(381849),
    lI = n(977628);
function lT(e) {
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
                ? (0, a.jsx)("div", { className: lI.E8, children: (0, a.jsx)(m.y, {}) })
                : "failed" === r.status
                  ? (0, a.jsx)("div", {
                        className: lI.E8,
                        role: "alert",
                        children: (0, a.jsx)(b.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: P.intl.string(R.default["mSJn+K"]),
                        }),
                    })
                  : 0 === r.entries.length
                    ? (0, a.jsx)("div", {
                          className: lI.E8,
                          children: (0, a.jsx)(b.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: P.intl.string(R.default.TOmYPT),
                          }),
                      })
                    : (0, a.jsx)(lS.Ip, {
                          className: lI.p_,
                          children: (0, a.jsx)("div", {
                              className: lI.jO,
                              children: r.entries.map((e) => {
                                  let t,
                                      n = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, lC.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: lC._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, a.jsxs)(
                                      "button",
                                      {
                                          className: lI.f_,
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
                                                  className: lI.bc,
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
            className: lI.nd,
            "aria-label": P.intl.string(R.default.jAWwzi),
            children: [
                (0, a.jsxs)(u.Ay, {
                    "aria-label": P.intl.string(R.default.jAWwzi),
                    toolbar: (0, a.jsx)(u.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l }),
                    children: [
                        (0, a.jsx)(u.Ay.ChannelIcon, { icon: lE.ClockIcon, "aria-hidden": !0 }),
                        (0, a.jsx)(u.Ay.Title, { children: P.intl.string(R.default.jAWwzi) }),
                    ],
                }),
                (0, a.jsx)("div", { className: lI.rf, children: t }),
            ],
        })
    );
}
var l_ = n(120426),
    lR = n(873727),
    lP = n(147248),
    lM = n(418842),
    lL = n(885386),
    lO = n(940107),
    lF = n(171936);
function lD(e) {
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
        let n = (0, w.bG)([n7.A], () => (0, lR.x4)(n7.A.theme)),
            l = (0, w.bG)([lP.A], () => lP.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: s,
                highContrast: r,
                forcedColors: o,
                underlineLinks: c,
            } = (0, w.cf)([tV.Ay], () => ({
                reducedMotion: tV.Ay.useReducedMotion,
                fontScale: (0, lR.U0)(),
                highContrast: tV.Ay.isHighContrastModeEnabled,
                forcedColors: tV.Ay.useForcedColors,
                underlineLinks: tV.Ay.alwaysShowLinkDecorations,
            })),
            u = lL.hH.useSetting(),
            d = (0, lM.C)(),
            h = i.useRef(!1),
            m = i.useRef(!1),
            f = i.useRef(0),
            p = i.useRef(null),
            g = i.useCallback(() => {
                let l = (0, l_.F1)(e, t);
                if (null == l) return;
                p.current = l;
                let i = {
                    revision: ++f.current,
                    baseTheme: n,
                    customTheme: (0, lR.Lq)(),
                    uiDensity: d,
                    messageDisplayCompact: u,
                    fontScale: s,
                    reducedMotion: a,
                    highContrast: r,
                    forcedColors: o,
                    underlineLinks: c,
                };
                (0, lO.W)(l, "set-env", i, {
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
                let n = (0, l_.F1)(e, t);
                null != n && n !== p.current && v();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, l_.F1)(e, t) && ((p.current = null), v());
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
        if (null != t) return (0, lF.mn)(t, () => (0, l_.F1)(m, g));
    }, [t, m, g]);
    let b = i.useCallback(() => {
            let e = (0, l_.F1)(m, g),
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
        j = i.useCallback(
            (e) => {
                v(null), null != x && (0, l_.su)(x.iframe, e).then(x.resolve, x.reject);
            },
            [x],
        ),
        y = i.useCallback(() => {
            v(null), x?.resolve(null);
        }, [x]),
        k = s && null != n && l.type === E.U4.MAIN;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: r()(ei.Mh, u),
                children: [o, (0, a.jsx)("div", { ref: f, className: ei.fm, children: d })],
            }),
            h(k ? b : void 0),
            null != x ? (0, a.jsx)(lw, { targetRect: x.targetRect, onSelect: j, onCancel: y }) : null,
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
        A = i.useRef(null),
        [w, N] = i.useState(0);
    i.useLayoutEffect(() => {
        if (s.type === E.U4.MAIN) return (0, d.HV)(n), () => (0, d.HV)(null);
    }, [n, s.type]),
        i.useEffect(() => {
            null != t && (0, h.Hc)(t);
        }, [t]),
        i.useLayoutEffect(() => {
            let e = A.current;
            if (null == e) return;
            function t() {
                null != e && N(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        i.useEffect(() => () => (0, d.Zq)(0), []);
    let S = Math.max(360, w - 320),
        C = null != k ? k.open : m,
        I = m || s.type === E.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: A,
        className: ei.LB,
        children: (0, a.jsx)(lD, {
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
                previewGate: j,
                previewMode: y,
            }),
            sidebar: (e) =>
                null != k
                    ? (0, a.jsx)(lm, {
                          open: k.open,
                          maxWidth: S,
                          onWidthChange: d.Zq,
                          children: k.open
                              ? (0, a.jsx)(es, { channel: k.channel, guild: k.guild, onClose: k.onClose })
                              : null,
                      })
                    : null != t && I
                      ? (0, a.jsx)(lm, {
                            open: m,
                            maxWidth: S,
                            onWidthChange: d.Zq,
                            children: (0, a.jsx)("div", {
                                className: ei.cO,
                                children: p
                                    ? (0, a.jsx)(
                                          lT,
                                          { projectId: t, onClose: g ?? (() => {}), onRestore: x ?? (() => {}) },
                                          t,
                                      )
                                    : (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(lj, { projectId: t }),
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
                                                  children: (0, a.jsx)(
                                                      ls,
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
