(t.r(l), t.d(l, { default: () => ec }));
var n = t(477900),
    i = t(582128),
    a = t(503698),
    s = t.n(a),
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
    E = t(950305),
    G = t(941985),
    k = t(248675),
    A = t(375708),
    C = t(749472);
function S(e) {
    let { guilds: l, forMeGuildId: t, onNavigate: a } = e,
        s = i.useRef(null),
        r = A.intl.string(k.default.sFiGNz);
    return (0, n.jsx)(x.Y, {
        targetElementRef: s,
        align: "right",
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, n.jsx)(P, { guilds: l, forMeGuildId: t, onNavigate: a, onClose: i });
        },
        children: (e) => {
            let { onClick: l } = e;
            return (0, n.jsx)("div", {
                ref: s,
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
function P(e) {
    let { guilds: l, forMeGuildId: t, onNavigate: i, onClose: a } = e,
        s = A.intl.string(k.default.sFiGNz);
    return (0, n.jsxs)(I.W, {
        "data-menu-migrated": !0,
        navId: "conjure-create",
        "aria-label": s,
        onClose: a,
        onSelect: a,
        children: [
            (0, n.jsx)(y.rX, {
                label: s,
                children: (0, n.jsx)(y.Dr, {
                    id: "conjure-create-user",
                    label: A.intl.string(k.default.UPLaGM),
                    icon: E.UserIcon,
                    disabled: null == t,
                    action: () => {
                        null != t && ((0, G.YN)(t), i());
                    },
                }),
            }),
            (0, n.jsx)(y.rX, {
                children:
                    0 === l.length
                        ? (0, n.jsx)(y.Dr, {
                              id: "conjure-create-empty",
                              disabled: !0,
                              label: A.intl.string(k.default["6aLvW5"]),
                          })
                        : l.map((e) =>
                              (0, n.jsx)(
                                  y.Dr,
                                  {
                                      id: `conjure-create-${e.id}`,
                                      label: e.name,
                                      action: () => {
                                          ((0, G.g7)(e.id), i());
                                      },
                                  },
                                  e.id,
                              ),
                          ),
            }),
        ],
    });
}
var D = t(834730),
    L = t(939249),
    F = t(289873),
    M = t(821609),
    _ = t(364522),
    T = t(145497),
    z = t(967198),
    w = t(855793),
    R = t(260498),
    X = t(845079),
    $ = t(344587),
    O = t(59678),
    Y = t(224722);
function q(e) {
    let { line: l } = e,
        { text: t, phase: i } = (0, $.Q)(l),
        a = (0, n.jsx)(D.E, {
            tag: "span",
            variant: "text-sm/normal",
            color: "currentColor",
            className: s()(O.qo, Y.Pf, { [O._q]: "exit" === i, [O.GD]: "enter" === i }),
            children: t,
        });
    return (0, n.jsx)("ol", {
        className: s()(Y.Hc, O.pj),
        "data-live": "true",
        children: (0, n.jsx)("li", {
            className: s()(O.K1, Y.AS),
            "data-live": "true",
            children: (0, n.jsxs)("div", {
                className: s()(O.ep, Y.nM),
                children: [
                    (0, n.jsx)("span", { className: s()(O.$m, Y.m0), children: a }),
                    (0, n.jsx)("span", { className: s()(O.$m, O.pw, Y.m0), "aria-hidden": !0, children: a }),
                ],
            }),
        }),
    });
}
var J = t(115982),
    U = t(104317);
let Q = { activityLine: null, todos: [], completed: 0, total: 0, focus: null };
function H(e, l) {
    return (
        e.activityLine === l.activityLine &&
        e.completed === l.completed &&
        e.total === l.total &&
        e.focus?.id === l.focus?.id &&
        e.focus?.status === l.focus?.status
    );
}
function W(e) {
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
            let t = (0, J.lt)(l.steps) ?? l.todos ?? [],
                n = 0,
                i = null,
                a = null;
            for (let e of t)
                "completed" === e.status
                    ? n++
                    : "in_progress" === e.status && null == i
                      ? (i = e)
                      : "pending" === e.status && null == a && (a = e);
            return { activityLine: (0, U.b)(l.steps), todos: t, completed: n, total: t.length, focus: i ?? a };
        },
        [e],
        H,
    );
}
var K = t(807994);
function B(e) {
    let { projectId: l } = e,
        { completed: t, total: i } = W(l);
    return 0 === i
        ? null
        : (0, n.jsx)(D.E, {
              tag: "span",
              variant: "text-xs/medium",
              color: "text-default",
              className: K.IW,
              "aria-label": A.intl.formatToPlainString(k.default.tuoa5I, { completed: t, total: i }),
              children: A.intl.formatToPlainString(k.default.baQ62I, { completed: t, total: i }),
          });
}
function V(e) {
    let { projectId: l } = e,
        { activityLine: t } = W(l);
    return null == t ? null : (0, n.jsx)("div", { className: K.Bs, children: (0, n.jsx)(q, { line: t }) });
}
function Z(e) {
    let { entry: l, fallbackGuildId: t, onNavigate: i } = e,
        a = "building" === l.activity,
        s = l.guildId ?? t,
        r = l.guildName ?? A.intl.string(k.default["3QFps8"]),
        c =
            null == l.guildName
                ? A.intl.formatToPlainString(k.default["2sBOnp"], { name: l.name })
                : A.intl.formatToPlainString(k.default["hd+GF1"], { name: l.name, server: l.guildName });
    return (0, n.jsxs)("li", {
        className: K.dc,
        children: [
            (0, n.jsx)(w.Ay, { projectId: l.projectId }),
            (0, n.jsxs)(L.D, {
                className: K.nM,
                "aria-label": c,
                "aria-disabled": null == s,
                "data-project-id": l.projectId,
                onClick: () => {
                    null != s && ((0, G.g7)(s, l.projectId), i());
                },
                children: [
                    (0, n.jsx)(X.A, { project: l.project, size: "lg", placeholderClassName: K.Pz }),
                    (0, n.jsxs)("div", {
                        className: K.fw,
                        children: [
                            (0, n.jsx)(D.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: K.j1,
                                children: l.name,
                            }),
                            (0, n.jsxs)("div", {
                                className: K.lk,
                                children: [
                                    (0, n.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: K.L5,
                                        children: r,
                                    }),
                                    a
                                        ? (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)("span", {
                                                      className: K.Yy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, n.jsx)(V, { projectId: l.projectId }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", { className: K.en, children: a && (0, n.jsx)(B, { projectId: l.projectId }) }),
                ],
            }),
        ],
    });
}
function ee(e) {
    let { id: l, heading: t, entries: i, fallbackGuildId: a, onNavigate: s } = e;
    if (0 === i.length) return null;
    let r = `conjure-section-${l}`;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(m.D, { variant: "text-sm/medium", color: "text-subtle", id: r, className: K.SF, children: t }),
            (0, n.jsx)("ul", {
                className: K.p_,
                "aria-labelledby": r,
                children: i.map((e) => (0, n.jsx)(Z, { entry: e, fallbackGuildId: a, onNavigate: s }, e.projectId)),
            }),
        ],
    });
}
function el(e) {
    let { guilds: l, forMeGuildId: t, onNavigate: i } = e,
        a = A.intl.string(k.default.UPLaGM);
    return (0, n.jsxs)("div", {
        className: K.p$,
        children: [
            (0, n.jsx)(D.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: A.intl.string(k.default.snY8uu),
            }),
            (0, n.jsx)(D.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children:
                    0 === l.length
                        ? A.intl.string(k.default.f5o5pk)
                        : A.intl.formatToPlainString(k.default.NiXcSi, { count: l.length }),
            }),
            (0, n.jsxs)("ul", {
                className: K.gc,
                children: [
                    null != t
                        ? (0, n.jsx)("li", {
                              children: (0, n.jsxs)(L.D, {
                                  className: K.b6,
                                  "aria-label": a,
                                  onClick: () => {
                                      ((0, G.YN)(t), i());
                                  },
                                  children: [
                                      (0, n.jsx)("span", {
                                          className: K.db,
                                          children: (0, n.jsx)(E.UserIcon, { size: "sm", color: "currentColor" }),
                                      }),
                                      (0, n.jsx)(D.E, {
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          className: K.qL,
                                          children: a,
                                      }),
                                  ],
                              }),
                          })
                        : null,
                    l.map((e) =>
                        (0, n.jsx)(
                            "li",
                            {
                                children: (0, n.jsxs)(L.D, {
                                    className: K.b6,
                                    "aria-label": e.name,
                                    onClick: () => {
                                        ((0, G.g7)(e.id), i());
                                    },
                                    children: [
                                        (0, n.jsx)(T.Ay, { guild: e, iconSize: 32, className: K.$f }),
                                        (0, n.jsx)(D.E, {
                                            variant: "text-sm/medium",
                                            color: "text-strong",
                                            className: K.qL,
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
    let { eligibleGuilds: l, forMeGuildId: t, onNavigate: i } = e,
        a = (0, p.qh)("VibegrationsProjectList"),
        s = (0, r.bG)([R.Ay], () => R.Ay.getProjectsFetchState()),
        c = (0, r.bG)([z.A], () => z.A.getGuildId()),
        d = l.find((e) => e.id === c)?.id ?? l[0]?.id ?? null,
        o = a.filter((e) => "idle" !== e.activity),
        u = a.filter((e) => "idle" === e.activity);
    return 0 === a.length
        ? null == s || "loading" === s.type
            ? (0, n.jsxs)("div", {
                  className: K.wk,
                  children: [
                      (0, n.jsx)(F.y, {}),
                      (0, n.jsx)(D.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: A.intl.string(k.default["XE+JXX"]),
                      }),
                  ],
              })
            : "error" === s.type
              ? (0, n.jsxs)("div", {
                    className: K.wk,
                    children: [
                        (0, n.jsx)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: A.intl.string(k.default.DJAPMO),
                        }),
                        (0, n.jsx)(M.$, {
                            variant: "secondary",
                            size: "sm",
                            text: A.intl.string(k.default["WFJ/vb"]),
                            onClick: () => (0, f.hF)(),
                        }),
                    ],
                })
              : (0, n.jsx)(el, { guilds: l, forMeGuildId: t, onNavigate: i })
        : (0, n.jsxs)(_.Ip, {
              fade: !0,
              className: K.XG,
              children: [
                  (0, n.jsx)(ee, {
                      id: "active",
                      heading: A.intl.string(k.default.DnsyEc),
                      entries: o,
                      fallbackGuildId: d,
                      onNavigate: i,
                  }),
                  (0, n.jsx)(ee, {
                      id: "idle",
                      heading: A.intl.string(k.default.p8lFfK),
                      entries: u,
                      fallbackGuildId: d,
                      onNavigate: i,
                  }),
              ],
          });
}
var en = t(559962);
let ei = "VibegrationsPopout";
function ea(e) {
    let { onNavigate: l } = e,
        t = A.intl.string(k.default.bHcJoe),
        i = (0, p.z9)(ei),
        a = (0, p.rX)(ei);
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
                                children: (0, n.jsx)(S, { guilds: i, forMeGuildId: a, onNavigate: l }),
                            }),
                        ],
                    }),
                    children: (0, n.jsx)(et, { eligibleGuilds: i, forMeGuildId: a, onNavigate: l }),
                }),
            }),
        ],
    });
}
function es(e) {
    let { children: l, targetElementRef: t } = e,
        [a, s] = i.useState(!1),
        r = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => {
            s((e) => (e || (0, f.hF)(), !e));
        }, []);
    return (
        (0, g.Ay)(
            () => (h.h.subscribe("USER_SETTINGS_MODAL_OPEN", r), () => h.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", r)),
        ),
        (0, n.jsx)(x.Y, {
            targetElementRef: t,
            shouldShow: a,
            position: "bottom",
            align: "right",
            spacing: 2,
            animation: x.Y.Animation.NONE,
            onRequestClose: r,
            renderPopout: () =>
                (0, n.jsx)(j.l, {
                    "aria-label": A.intl.string(k.default.bHcJoe),
                    children: (0, n.jsx)(ea, { onNavigate: r }),
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
    let e = i.useRef(null),
        l = (0, r.bG)([o.Ay], () => o.Ay.isAnyThinking()),
        t = A.intl.string(k.default.bHcJoe);
    return (0, n.jsx)(es, {
        targetElementRef: e,
        children: (i, a) =>
            (0, n.jsx)(d.A, {
                ref: e,
                icon: c.D,
                tooltip: t,
                "aria-haspopup": "dialog",
                "aria-expanded": a,
                selected: a,
                onClick: i,
                overlay: l
                    ? (0, n.jsx)(c.D, {
                          className: s()(er.bI, { [er.lL]: a }),
                          color: "currentColor",
                          size: "sm",
                          "aria-hidden": !0,
                      })
                    : null,
            }),
    });
}
