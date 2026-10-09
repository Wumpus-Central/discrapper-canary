(l.r(t), l.d(t, { default: () => eE }));
var n = l(477900),
    i = l(582128),
    s = l(503698),
    a = l.n(s),
    r = l(17928),
    c = l(152367),
    d = l(189252),
    o = l(245179);
let u = (0, l(945810).mj)({
    name: "2026-10-desktop-conjure-title-bar",
    kind: "user",
    defaultConfig: { leftEntrypoint: !1, workingAnimation: !1 },
    variations: {
        0: { leftEntrypoint: !1, workingAnimation: !1 },
        1: { leftEntrypoint: !0, workingAnimation: !1 },
        2: { leftEntrypoint: !0, workingAnimation: !0 },
    },
});
var j = l(707554),
    x = l(297264),
    m = l(922016),
    h = l(305866),
    f = l(73153),
    g = l(964486),
    p = l(371169),
    N = l(16619),
    v = l(866665),
    b = l(408278),
    y = l(663341),
    k = l(980707),
    I = l(477782),
    E = l(950305),
    A = l(941985),
    C = l(248675),
    G = l(660183),
    D = l(749472);
function S(e) {
    let { guilds: t, forMeGuildId: l, onNavigate: s } = e,
        a = i.useRef(null),
        r = G.intl.string(C.default.sFiGNz);
    return (0, n.jsx)(m.Y, {
        targetElementRef: a,
        align: "right",
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, n.jsx)(w, { guilds: t, forMeGuildId: l, onNavigate: s, onClose: i });
        },
        children: (e) => {
            let { onClick: t } = e;
            return (0, n.jsx)("div", {
                ref: a,
                className: D.h,
                children: (0, n.jsx)(v.m, {
                    position: "bottom",
                    text: r,
                    asContainer: !0,
                    children: (0, n.jsx)(b.K, {
                        "aria-label": r,
                        icon: y.PlusLargeIcon,
                        variant: "icon-only",
                        size: "sm",
                        onClick: t,
                    }),
                }),
            });
        },
    });
}
function w(e) {
    let { guilds: t, forMeGuildId: l, onNavigate: i, onClose: s } = e,
        a = G.intl.string(C.default.sFiGNz);
    return (0, n.jsxs)(k.W, {
        "data-menu-migrated": !0,
        navId: "conjure-create",
        "aria-label": a,
        onClose: s,
        onSelect: s,
        children: [
            (0, n.jsx)(I.rX, {
                label: a,
                children: (0, n.jsx)(I.Dr, {
                    id: "conjure-create-user",
                    label: G.intl.string(C.default.UPLaGM),
                    icon: E.UserIcon,
                    disabled: null == l,
                    action: () => {
                        null != l && ((0, A.YN)(l), i());
                    },
                }),
            }),
            (0, n.jsx)(I.rX, {
                children:
                    0 === t.length
                        ? (0, n.jsx)(I.Dr, {
                              id: "conjure-create-empty",
                              disabled: !0,
                              label: G.intl.string(C.default["6aLvW5"]),
                          })
                        : t.map((e) =>
                              (0, n.jsx)(
                                  I.Dr,
                                  {
                                      id: `conjure-create-${e.id}`,
                                      label: e.name,
                                      action: () => {
                                          ((0, A.g7)(e.id), i());
                                      },
                                  },
                                  e.id,
                              ),
                          ),
            }),
        ],
    });
}
var L = l(834730),
    M = l(939249),
    P = l(289873),
    T = l(821609),
    _ = l(364522),
    R = l(145497),
    F = l(967198),
    z = l(855793),
    B = l(42766),
    O = l(497183),
    $ = l(217846),
    X = l(344587),
    Y = l(59678),
    q = l(224722);
function J(e) {
    let { line: t } = e,
        { text: l, phase: i } = (0, X.Q)(t),
        s = (0, n.jsx)(L.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "currentColor",
            className: a()(Y.qo, q.Pf, { [Y._q]: "exit" === i, [Y.GD]: "enter" === i }),
            children: l,
        });
    return (0, n.jsx)("ol", {
        className: a()(q.Hc, Y.pj),
        "data-live": "true",
        children: (0, n.jsx)("li", {
            className: a()(Y.K1, q.AS),
            "data-live": "true",
            children: (0, n.jsxs)("div", {
                className: a()(Y.ep, q.nM),
                children: [
                    (0, n.jsx)("span", { className: a()(Y.$m, q.m0), children: s }),
                    (0, n.jsx)("span", { className: a()(Y.$m, Y.pw, q.m0), "aria-hidden": !0, children: s }),
                ],
            }),
        }),
    });
}
var Q = l(115982),
    U = l(104317);
let W = { activityLine: null, todos: [], completed: 0, total: 0, focus: null };
function K(e, t) {
    return (
        e.activityLine === t.activityLine &&
        e.completed === t.completed &&
        e.total === t.total &&
        e.focus?.id === t.focus?.id &&
        e.focus?.status === t.focus?.status
    );
}
function V(e) {
    return (0, r.bG)(
        [o.Ay],
        () => {
            let t = (function (e) {
                let t = o.Ay.getMessages(e);
                for (let e = t.length - 1; e >= 0; e--) {
                    let l = t[e];
                    if (l?.role === "assistant") return l;
                }
                return null;
            })(e);
            if (null == t) return W;
            let l = (0, Q.lt)(t.steps) ?? t.todos ?? [],
                n = 0,
                i = null,
                s = null;
            for (let e of l)
                "completed" === e.status
                    ? n++
                    : "in_progress" === e.status && null == i
                      ? (i = e)
                      : "pending" === e.status && null == s && (s = e);
            return { activityLine: (0, U.b)(t.steps), todos: l, completed: n, total: l.length, focus: i ?? s };
        },
        [e],
        K,
    );
}
var H = l(807994);
function Z(e) {
    let { projectId: t } = e,
        { completed: l, total: i } = V(t);
    return 0 === i
        ? null
        : (0, n.jsx)(L.E, {
              tag: "span",
              variant: "text-xs/medium",
              color: "text-default",
              className: H.IW,
              "aria-label": G.intl.formatToPlainString(C.default.tuoa5I, { completed: l, total: i }),
              children: G.intl.formatToPlainString(C.default.baQ62I, { completed: l, total: i }),
          });
}
function ee(e) {
    let { projectId: t } = e,
        { activityLine: l } = V(t);
    return null == l ? null : (0, n.jsx)("div", { className: H.Bs, children: (0, n.jsx)(J, { line: l }) });
}
function et(e) {
    let { entry: t, fallbackGuildId: l, onNavigate: i } = e,
        s = "building" === t.activity,
        a = t.guildId ?? l,
        { serverName: r, label: c } = (0, N.nM)(t);
    return (0, n.jsxs)("li", {
        className: H.dc,
        children: [
            (0, n.jsx)(z.Ay, { projectId: t.projectId }),
            (0, n.jsx)($.a, { projectId: t.projectId }),
            (0, n.jsxs)(M.D, {
                className: H.nM,
                "aria-label": c,
                "aria-disabled": null == a,
                "data-project-id": t.projectId,
                onClick: () => {
                    null != a && ((0, A.g7)(a, t.projectId), i());
                },
                children: [
                    (0, n.jsx)(O.A, { project: t.project, size: "list" }),
                    (0, n.jsxs)("div", {
                        className: H.fw,
                        children: [
                            (0, n.jsxs)("div", {
                                className: H.G9,
                                children: [
                                    (0, n.jsx)(L.E, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        className: H.j1,
                                        children: t.name,
                                    }),
                                    (0, n.jsx)($.n, { projectId: t.projectId }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: H.lk,
                                children: [
                                    (0, n.jsx)(L.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: H.L5,
                                        children: r,
                                    }),
                                    s
                                        ? (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)("span", {
                                                      className: H.Yy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, n.jsx)(ee, { projectId: t.projectId }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", { className: H.en, children: s && (0, n.jsx)(Z, { projectId: t.projectId }) }),
                ],
            }),
        ],
    });
}
function el(e) {
    let { id: t, heading: l, entries: i, fallbackGuildId: s, onNavigate: a } = e;
    if (0 === i.length) return null;
    let r = `conjure-section-${t}`;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(x.D, { variant: "text-sm/medium", color: "text-subtle", id: r, className: H.SF, children: l }),
            (0, n.jsx)("ul", {
                className: H.p_,
                "aria-labelledby": r,
                children: i.map((e) => (0, n.jsx)(et, { entry: e, fallbackGuildId: s, onNavigate: a }, e.projectId)),
            }),
        ],
    });
}
function en(e) {
    let { guilds: t, forMeGuildId: l, onNavigate: i } = e,
        s = G.intl.string(C.default.UPLaGM);
    return (0, n.jsxs)("div", {
        className: H.p$,
        children: [
            (0, n.jsx)(L.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: G.intl.string(C.default.snY8uu),
            }),
            (0, n.jsx)(L.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children:
                    0 === t.length
                        ? G.intl.string(C.default.f5o5pk)
                        : G.intl.formatToPlainString(C.default.NiXcSi, { count: t.length }),
            }),
            (0, n.jsxs)("ul", {
                className: H.gc,
                children: [
                    null != l
                        ? (0, n.jsx)("li", {
                              children: (0, n.jsxs)(M.D, {
                                  className: H.b6,
                                  "aria-label": s,
                                  onClick: () => {
                                      ((0, A.YN)(l), i());
                                  },
                                  children: [
                                      (0, n.jsx)("span", {
                                          className: H.db,
                                          children: (0, n.jsx)(E.UserIcon, { size: "sm", color: "currentColor" }),
                                      }),
                                      (0, n.jsx)(L.E, {
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          className: H.qL,
                                          children: s,
                                      }),
                                  ],
                              }),
                          })
                        : null,
                    t.map((e) =>
                        (0, n.jsx)(
                            "li",
                            {
                                children: (0, n.jsxs)(M.D, {
                                    className: H.b6,
                                    "aria-label": e.name,
                                    onClick: () => {
                                        ((0, A.g7)(e.id), i());
                                    },
                                    children: [
                                        (0, n.jsx)(R.Ay, { guild: e, iconSize: 32, className: H.$f }),
                                        (0, n.jsx)(L.E, {
                                            variant: "text-sm/medium",
                                            color: "text-strong",
                                            className: H.qL,
                                            children: e.name,
                                        }),
                                    ],
                                }),
                            },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
}
function ei(e) {
    let { eligibleGuilds: t, forMeGuildId: l, onNavigate: i } = e,
        s = (0, N.qh)("VibegrationsProjectList"),
        a = (0, r.bG)([B.Ay], () => B.Ay.getProjectsFetchState()),
        c = (0, r.bG)([F.A], () => F.A.getGuildId()),
        d = t.find((e) => e.id === c)?.id ?? t[0]?.id ?? null,
        o = s.filter((e) => "idle" !== e.activity),
        u = s.filter((e) => "idle" === e.activity);
    return 0 === s.length
        ? null == a || "loading" === a.type
            ? (0, n.jsxs)("div", {
                  className: H.wk,
                  children: [
                      (0, n.jsx)(P.y, {}),
                      (0, n.jsx)(L.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: G.intl.string(C.default["XE+JXX"]),
                      }),
                  ],
              })
            : "error" === a.type
              ? (0, n.jsxs)("div", {
                    className: H.wk,
                    children: [
                        (0, n.jsx)(L.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: G.intl.string(C.default.DJAPMO),
                        }),
                        (0, n.jsx)(T.$, {
                            variant: "secondary",
                            size: "sm",
                            text: G.intl.string(C.default["WFJ/vb"]),
                            onClick: () => (0, p.hF)(),
                        }),
                    ],
                })
              : (0, n.jsx)(en, { guilds: t, forMeGuildId: l, onNavigate: i })
        : (0, n.jsxs)(_.Ip, {
              fade: !0,
              className: H.XG,
              children: [
                  (0, n.jsx)(el, {
                      id: "active",
                      heading: G.intl.string(C.default.DnsyEc),
                      entries: o,
                      fallbackGuildId: d,
                      onNavigate: i,
                  }),
                  (0, n.jsx)(el, {
                      id: "idle",
                      heading: G.intl.string(C.default.p8lFfK),
                      entries: u,
                      fallbackGuildId: d,
                      onNavigate: i,
                  }),
              ],
          });
}
var es = l(606128),
    ea = l(559962);
let er = "VibegrationsPopout";
function ec(e) {
    let { onNavigate: t } = e,
        l = G.intl.string(C.default.uk6jhJ),
        i = (0, N.z9)(er),
        s = (0, N.rX)(er);
    return (0, n.jsxs)("div", {
        className: a()(ea.kL, es.T),
        children: [
            (0, n.jsx)("div", { className: ea._Q, children: (0, n.jsx)("span", { className: ea.Tp }) }),
            (0, n.jsx)("div", {
                className: ea.Qs,
                children: (0, n.jsx)(j.F, {
                    forceLevel: 1,
                    component: (0, n.jsxs)("header", {
                        className: ea.wx,
                        children: [
                            (0, n.jsx)(x.D, {
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                className: ea.DD,
                                children: l,
                            }),
                            (0, n.jsx)("div", {
                                className: ea.$s,
                                children: (0, n.jsx)(S, { guilds: i, forMeGuildId: s, onNavigate: t }),
                            }),
                        ],
                    }),
                    children: (0, n.jsx)(ei, { eligibleGuilds: i, forMeGuildId: s, onNavigate: t }),
                }),
            }),
        ],
    });
}
function ed(e) {
    let { children: t, targetElementRef: l, align: s = "right" } = e,
        [a, r] = i.useState(!1),
        c = i.useCallback(() => r(!1), []),
        d = i.useCallback(() => {
            r((e) => (e || (0, p.hF)(), !e));
        }, []);
    return (
        (0, g.Ay)(
            () => (f.h.subscribe("USER_SETTINGS_MODAL_OPEN", c), () => f.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", c)),
        ),
        (0, n.jsx)(m.Y, {
            targetElementRef: l,
            shouldShow: a,
            position: "bottom",
            align: s,
            spacing: 2,
            animation: m.Y.Animation.NONE,
            onRequestClose: c,
            renderPopout: () =>
                (0, n.jsx)(h.l, {
                    "aria-label": G.intl.string(C.default.uk6jhJ),
                    children: (0, n.jsx)(ec, { onNavigate: c }),
                }),
            children: (e, l) => {
                let { isShown: n } = l;
                return t(d, n, e);
            },
        })
    );
}
var eo = l(319354),
    eu = l(812993),
    ej = l(85463),
    ex = l(573435),
    em = l(404373),
    eh = l(308665),
    ef = l(274158);
function eg() {
    return (0, n.jsxs)("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        focusable: !1,
        children: [
            (0, n.jsx)("path", { fill: "currentColor", d: eh.fy }),
            (0, n.jsx)("path", { fill: "currentColor", d: eh.tE, className: a()(ef.dQ, ef.ui) }),
            (0, n.jsx)("path", { fill: "currentColor", d: eh.tW, className: a()(ef.dQ, ef.Mb) }),
        ],
    });
}
function ep(e) {
    let { working: t } = e;
    return (0, n.jsxs)("span", {
        className: a()(ef.RB, es.T, { [ef.Cc]: t }),
        "aria-hidden": !0,
        children: [(0, n.jsx)(eg, {}), (0, n.jsx)("span", { className: ef.q2, children: (0, n.jsx)(eg, {}) })],
    });
}
var eN = l(346994);
function ev(e) {
    let { count: t } = e,
        l = Math.min(t, 25),
        i = t > l;
    return (0, n.jsx)(eu.hV, {
        count: l,
        renderBadgeCount: (e) => (i ? `${e}+` : e),
        className: a()(ef.WK, { [ef.uP]: i }),
    });
}
function eb(e) {
    let { count: t } = e;
    return (0, n.jsx)(L.E, { variant: (0, ej.N)(), children: (0, eu.Gu)(t) });
}
function ey(e) {
    let { animated: t } = e,
        l = i.useRef(null),
        s = (0, r.bG)([o.Ay], () => o.Ay.isAnyThinking()),
        { unreadCount: c, badgeCount: d } = (0, em.NC)(),
        u = 0 === d && c > 0,
        j = G.intl.string(C.default.uk6jhJ),
        x = [j, d > 0 ? G.intl.string(C.default.hfIuc7) : null, s ? G.intl.string(C.default["Y8pS+n"]) : null]
            .filter(Boolean)
            .join(", "),
        m = (0, n.jsx)(ep, { working: t && s });
    return (0, n.jsx)("div", {
        className: ef.NI,
        children: (0, n.jsx)(ed, {
            targetElementRef: l,
            align: "left",
            children: (e, t) =>
                (0, n.jsx)(v.m, {
                    asContainer: !0,
                    shouldShow: !t,
                    text: j,
                    children: (0, n.jsxs)(M.D, {
                        innerRef: l,
                        className: a()(eN.OV, ef.f_, { [ef.ho]: t }),
                        "aria-label": x,
                        "aria-haspopup": "dialog",
                        "aria-expanded": t,
                        onClick: e,
                        children: [
                            (0, n.jsx)("div", {
                                className: eN.P0,
                                children: u
                                    ? (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)(ex.Ay, {
                                                  width: eo.E.sm,
                                                  height: eo.E.sm,
                                                  mask: ex.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                  children: m,
                                              }),
                                              (0, n.jsx)("div", { className: eN.Zm }),
                                          ],
                                      })
                                    : m,
                            }),
                            d > 0 ? (0, n.jsx)(ev, { count: d }) : null,
                            u ? (0, n.jsx)(eb, { count: c }) : null,
                        ],
                    }),
                }),
        }),
    });
}
var ek = l(50172);
function eI() {
    let e = i.useRef(null),
        t = (0, r.bG)([o.Ay], () => o.Ay.isAnyThinking()),
        l = G.intl.string(C.default.uk6jhJ);
    return (0, n.jsx)(ed, {
        targetElementRef: e,
        children: (i, s) =>
            (0, n.jsx)(d.A, {
                ref: e,
                icon: c.D,
                tooltip: l,
                "aria-haspopup": "dialog",
                "aria-expanded": s,
                selected: s,
                onClick: i,
                overlay: t
                    ? (0, n.jsx)(c.D, {
                          className: a()(ek.bI, es.T, { [ek.lL]: s }),
                          color: "currentColor",
                          size: "sm",
                          "aria-hidden": !0,
                      })
                    : null,
            }),
    });
}
function eE(e) {
    let { placement: t = "trailing" } = e,
        { leftEntrypoint: l, workingAnimation: i } = u.useConfig({ location: "AppTitleBar" });
    return l
        ? "leading" === t
            ? (0, n.jsx)(ey, { animated: i })
            : null
        : "trailing" === t
          ? (0, n.jsx)(eI, {})
          : null;
}
