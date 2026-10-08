(t.r(l), t.d(l, { default: () => ec }));
var n = t(477900),
    s = t(582128),
    i = t(503698),
    a = t.n(i),
    r = t(17928),
    c = t(152367),
    d = t(189252),
    o = t(245179),
    u = t(707554),
    m = t(297264),
    x = t(922016),
    j = t(305866),
    h = t(73153),
    g = t(964486),
    f = t(371169),
    p = t(16619),
    N = t(866665),
    v = t(408278),
    b = t(663341),
    I = t(980707),
    y = t(477782),
    k = t(950305),
    E = t(941985),
    G = t(261425),
    A = t(660183),
    C = t(749472);
function D(e) {
    let { guilds: l, forMeGuildId: t, onNavigate: i } = e,
        a = s.useRef(null),
        r = A.intl.string(G.default.sFiGNz);
    return (0, n.jsx)(x.Y, {
        targetElementRef: a,
        align: "right",
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, n.jsx)(L, { guilds: l, forMeGuildId: t, onNavigate: i, onClose: s });
        },
        children: (e) => {
            let { onClick: l } = e;
            return (0, n.jsx)("div", {
                ref: a,
                className: C.h,
                children: (0, n.jsx)(N.m, {
                    position: "bottom",
                    text: r,
                    asContainer: !0,
                    children: (0, n.jsx)(v.K, {
                        "aria-label": r,
                        icon: b.PlusLargeIcon,
                        variant: "icon-only",
                        size: "sm",
                        onClick: l,
                    }),
                }),
            });
        },
    });
}
function L(e) {
    let { guilds: l, forMeGuildId: t, onNavigate: s, onClose: i } = e,
        a = A.intl.string(G.default.sFiGNz);
    return (0, n.jsxs)(I.W, {
        "data-menu-migrated": !0,
        navId: "conjure-create",
        "aria-label": a,
        onClose: i,
        onSelect: i,
        children: [
            (0, n.jsx)(y.rX, {
                label: a,
                children: (0, n.jsx)(y.Dr, {
                    id: "conjure-create-user",
                    label: A.intl.string(G.default.UPLaGM),
                    icon: k.UserIcon,
                    disabled: null == t,
                    action: () => {
                        null != t && ((0, E.YN)(t), s());
                    },
                }),
            }),
            (0, n.jsx)(y.rX, {
                children:
                    0 === l.length
                        ? (0, n.jsx)(y.Dr, {
                              id: "conjure-create-empty",
                              disabled: !0,
                              label: A.intl.string(G.default["6aLvW5"]),
                          })
                        : l.map((e) =>
                              (0, n.jsx)(
                                  y.Dr,
                                  {
                                      id: `conjure-create-${e.id}`,
                                      label: e.name,
                                      action: () => {
                                          ((0, E.g7)(e.id), s());
                                      },
                                  },
                                  e.id,
                              ),
                          ),
            }),
        ],
    });
}
var S = t(834730),
    P = t(939249),
    M = t(289873),
    _ = t(821609),
    F = t(364522),
    z = t(145497),
    T = t(967198),
    w = t(855793),
    R = t(260498),
    X = t(845079),
    $ = t(344587),
    Y = t(59678),
    q = t(224722);
function J(e) {
    let { line: l } = e,
        { text: t, phase: s } = (0, $.Q)(l),
        i = (0, n.jsx)(S.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "currentColor",
            className: a()(Y.qo, q.Pf, { [Y._q]: "exit" === s, [Y.GD]: "enter" === s }),
            children: t,
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
                    (0, n.jsx)("span", { className: a()(Y.$m, q.m0), children: i }),
                    (0, n.jsx)("span", { className: a()(Y.$m, Y.pw, q.m0), "aria-hidden": !0, children: i }),
                ],
            }),
        }),
    });
}
var O = t(115982),
    U = t(104317);
let Q = { activityLine: null, todos: [], completed: 0, total: 0, focus: null };
function W(e, l) {
    return (
        e.activityLine === l.activityLine &&
        e.completed === l.completed &&
        e.total === l.total &&
        e.focus?.id === l.focus?.id &&
        e.focus?.status === l.focus?.status
    );
}
function K(e) {
    return (0, r.bG)(
        [o.Ay],
        () => {
            let l = (function (e) {
                let l = o.Ay.getMessages(e);
                for (let e = l.length - 1; e >= 0; e--) {
                    let t = l[e];
                    if (t?.role === "assistant") return t;
                }
                return null;
            })(e);
            if (null == l) return Q;
            let t = (0, O.lt)(l.steps) ?? l.todos ?? [],
                n = 0,
                s = null,
                i = null;
            for (let e of t)
                "completed" === e.status
                    ? n++
                    : "in_progress" === e.status && null == s
                      ? (s = e)
                      : "pending" === e.status && null == i && (i = e);
            return { activityLine: (0, U.b)(l.steps), todos: t, completed: n, total: t.length, focus: s ?? i };
        },
        [e],
        W,
    );
}
var V = t(807994);
function B(e) {
    let { projectId: l } = e,
        { completed: t, total: s } = K(l);
    return 0 === s
        ? null
        : (0, n.jsx)(S.E, {
              tag: "span",
              variant: "text-xs/medium",
              color: "text-default",
              className: V.IW,
              "aria-label": A.intl.formatToPlainString(G.default.tuoa5I, { completed: t, total: s }),
              children: A.intl.formatToPlainString(G.default.baQ62I, { completed: t, total: s }),
          });
}
function H(e) {
    let { projectId: l } = e,
        { activityLine: t } = K(l);
    return null == t ? null : (0, n.jsx)("div", { className: V.Bs, children: (0, n.jsx)(J, { line: t }) });
}
function Z(e) {
    let { entry: l, fallbackGuildId: t, onNavigate: s } = e,
        i = "building" === l.activity,
        a = l.guildId ?? t,
        { serverName: r, label: c } = (0, p.nM)(l);
    return (0, n.jsxs)("li", {
        className: V.dc,
        children: [
            (0, n.jsx)(w.Ay, { projectId: l.projectId }),
            (0, n.jsxs)(P.D, {
                className: V.nM,
                "aria-label": c,
                "aria-disabled": null == a,
                "data-project-id": l.projectId,
                onClick: () => {
                    null != a && ((0, E.g7)(a, l.projectId), s());
                },
                children: [
                    (0, n.jsx)(X.A, { project: l.project, size: "lg", placeholderClassName: V.Pz }),
                    (0, n.jsxs)("div", {
                        className: V.fw,
                        children: [
                            (0, n.jsx)(S.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: V.j1,
                                children: l.name,
                            }),
                            (0, n.jsxs)("div", {
                                className: V.lk,
                                children: [
                                    (0, n.jsx)(S.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: V.L5,
                                        children: r,
                                    }),
                                    i
                                        ? (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)("span", {
                                                      className: V.Yy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, n.jsx)(H, { projectId: l.projectId }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", { className: V.en, children: i && (0, n.jsx)(B, { projectId: l.projectId }) }),
                ],
            }),
        ],
    });
}
function ee(e) {
    let { id: l, heading: t, entries: s, fallbackGuildId: i, onNavigate: a } = e;
    if (0 === s.length) return null;
    let r = `conjure-section-${l}`;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(m.D, { variant: "text-sm/medium", color: "text-subtle", id: r, className: V.SF, children: t }),
            (0, n.jsx)("ul", {
                className: V.p_,
                "aria-labelledby": r,
                children: s.map((e) => (0, n.jsx)(Z, { entry: e, fallbackGuildId: i, onNavigate: a }, e.projectId)),
            }),
        ],
    });
}
function el(e) {
    let { guilds: l, forMeGuildId: t, onNavigate: s } = e,
        i = A.intl.string(G.default.UPLaGM);
    return (0, n.jsxs)("div", {
        className: V.p$,
        children: [
            (0, n.jsx)(S.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: A.intl.string(G.default.snY8uu),
            }),
            (0, n.jsx)(S.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children:
                    0 === l.length
                        ? A.intl.string(G.default.f5o5pk)
                        : A.intl.formatToPlainString(G.default.NiXcSi, { count: l.length }),
            }),
            (0, n.jsxs)("ul", {
                className: V.gc,
                children: [
                    null != t
                        ? (0, n.jsx)("li", {
                              children: (0, n.jsxs)(P.D, {
                                  className: V.b6,
                                  "aria-label": i,
                                  onClick: () => {
                                      ((0, E.YN)(t), s());
                                  },
                                  children: [
                                      (0, n.jsx)("span", {
                                          className: V.db,
                                          children: (0, n.jsx)(k.UserIcon, { size: "sm", color: "currentColor" }),
                                      }),
                                      (0, n.jsx)(S.E, {
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          className: V.qL,
                                          children: i,
                                      }),
                                  ],
                              }),
                          })
                        : null,
                    l.map((e) =>
                        (0, n.jsx)(
                            "li",
                            {
                                children: (0, n.jsxs)(P.D, {
                                    className: V.b6,
                                    "aria-label": e.name,
                                    onClick: () => {
                                        ((0, E.g7)(e.id), s());
                                    },
                                    children: [
                                        (0, n.jsx)(z.Ay, { guild: e, iconSize: 32, className: V.$f }),
                                        (0, n.jsx)(S.E, {
                                            variant: "text-sm/medium",
                                            color: "text-strong",
                                            className: V.qL,
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
function et(e) {
    let { eligibleGuilds: l, forMeGuildId: t, onNavigate: s } = e,
        i = (0, p.qh)("VibegrationsProjectList"),
        a = (0, r.bG)([R.Ay], () => R.Ay.getProjectsFetchState()),
        c = (0, r.bG)([T.A], () => T.A.getGuildId()),
        d = l.find((e) => e.id === c)?.id ?? l[0]?.id ?? null,
        o = i.filter((e) => "idle" !== e.activity),
        u = i.filter((e) => "idle" === e.activity);
    return 0 === i.length
        ? null == a || "loading" === a.type
            ? (0, n.jsxs)("div", {
                  className: V.wk,
                  children: [
                      (0, n.jsx)(M.y, {}),
                      (0, n.jsx)(S.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: A.intl.string(G.default["XE+JXX"]),
                      }),
                  ],
              })
            : "error" === a.type
              ? (0, n.jsxs)("div", {
                    className: V.wk,
                    children: [
                        (0, n.jsx)(S.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: A.intl.string(G.default.DJAPMO),
                        }),
                        (0, n.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: A.intl.string(G.default["WFJ/vb"]),
                            onClick: () => (0, f.hF)(),
                        }),
                    ],
                })
              : (0, n.jsx)(el, { guilds: l, forMeGuildId: t, onNavigate: s })
        : (0, n.jsxs)(F.Ip, {
              fade: !0,
              className: V.XG,
              children: [
                  (0, n.jsx)(ee, {
                      id: "active",
                      heading: A.intl.string(G.default.DnsyEc),
                      entries: o,
                      fallbackGuildId: d,
                      onNavigate: s,
                  }),
                  (0, n.jsx)(ee, {
                      id: "idle",
                      heading: A.intl.string(G.default.p8lFfK),
                      entries: u,
                      fallbackGuildId: d,
                      onNavigate: s,
                  }),
              ],
          });
}
var en = t(559962);
let es = "VibegrationsPopout";
function ei(e) {
    let { onNavigate: l } = e,
        t = A.intl.string(G.default.uk6jhJ),
        s = (0, p.z9)(es),
        i = (0, p.rX)(es);
    return (0, n.jsxs)("div", {
        className: en.kL,
        children: [
            (0, n.jsx)("div", { className: en._Q, children: (0, n.jsx)("span", { className: en.Tp }) }),
            (0, n.jsx)("div", {
                className: en.Qs,
                children: (0, n.jsx)(u.F, {
                    forceLevel: 1,
                    component: (0, n.jsxs)("header", {
                        className: en.wx,
                        children: [
                            (0, n.jsx)(m.D, {
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                className: en.DD,
                                children: t,
                            }),
                            (0, n.jsx)("div", {
                                className: en.$s,
                                children: (0, n.jsx)(D, { guilds: s, forMeGuildId: i, onNavigate: l }),
                            }),
                        ],
                    }),
                    children: (0, n.jsx)(et, { eligibleGuilds: s, forMeGuildId: i, onNavigate: l }),
                }),
            }),
        ],
    });
}
function ea(e) {
    let { children: l, targetElementRef: t } = e,
        [i, a] = s.useState(!1),
        r = s.useCallback(() => a(!1), []),
        c = s.useCallback(() => {
            a((e) => (e || (0, f.hF)(), !e));
        }, []);
    return (
        (0, g.Ay)(
            () => (h.h.subscribe("USER_SETTINGS_MODAL_OPEN", r), () => h.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", r)),
        ),
        (0, n.jsx)(x.Y, {
            targetElementRef: t,
            shouldShow: i,
            position: "bottom",
            align: "right",
            spacing: 2,
            animation: x.Y.Animation.NONE,
            onRequestClose: r,
            renderPopout: () =>
                (0, n.jsx)(j.l, {
                    "aria-label": A.intl.string(G.default.uk6jhJ),
                    children: (0, n.jsx)(ei, { onNavigate: r }),
                }),
            children: (e, t) => {
                let { isShown: n } = t;
                return l(c, n, e);
            },
        })
    );
}
var er = t(50172);
function ec() {
    let e = s.useRef(null),
        l = (0, r.bG)([o.Ay], () => o.Ay.isAnyThinking()),
        t = A.intl.string(G.default.uk6jhJ);
    return (0, n.jsx)(ea, {
        targetElementRef: e,
        children: (s, i) =>
            (0, n.jsx)(d.A, {
                ref: e,
                icon: c.D,
                tooltip: t,
                "aria-haspopup": "dialog",
                "aria-expanded": i,
                selected: i,
                onClick: s,
                overlay: l
                    ? (0, n.jsx)(c.D, {
                          className: a()(er.bI, { [er.lL]: i }),
                          color: "currentColor",
                          size: "sm",
                          "aria-hidden": !0,
                      })
                    : null,
            }),
    });
}
