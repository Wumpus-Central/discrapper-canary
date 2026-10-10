(i.r(t), i.d(t, { default: () => ey }));
var l = i(477900),
    n = i(582128),
    s = i(503698),
    a = i.n(s),
    r = i(17928),
    c = i(152367),
    d = i(189252),
    o = i(245179);
let u = (0, i(945810).mj)({
    name: "2026-10-desktop-conjure-title-bar",
    kind: "user",
    defaultConfig: { leftEntrypoint: !1, workingAnimation: !1 },
    variations: {
        0: { leftEntrypoint: !1, workingAnimation: !1 },
        1: { leftEntrypoint: !0, workingAnimation: !1 },
        2: { leftEntrypoint: !0, workingAnimation: !0 },
    },
});
var j = i(707554),
    x = i(297264),
    m = i(922016),
    h = i(305866),
    g = i(73153),
    f = i(964486),
    p = i(371169),
    v = i(16619),
    N = i(866665),
    b = i(408278),
    y = i(663341),
    A = i(980707),
    k = i(477782),
    E = i(950305),
    I = i(941985),
    C = i(248675),
    G = i(660183),
    S = i(749472);
function D(e) {
    let { guilds: t, forMeGuildId: i, onNavigate: s } = e,
        a = n.useRef(null),
        r = G.intl.string(C.default.sFiGNz);
    return (0, l.jsx)(m.Y, {
        targetElementRef: a,
        align: "right",
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, l.jsx)(L, { guilds: t, forMeGuildId: i, onNavigate: s, onClose: n });
        },
        children: (e) => {
            let { onClick: t } = e;
            return (0, l.jsx)("div", {
                ref: a,
                className: S.h,
                children: (0, l.jsx)(N.m, {
                    position: "bottom",
                    text: r,
                    asContainer: !0,
                    children: (0, l.jsx)(b.K, {
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
function L(e) {
    let { guilds: t, forMeGuildId: i, onNavigate: n, onClose: s } = e,
        a = G.intl.string(C.default.sFiGNz);
    return (0, l.jsxs)(A.W, {
        "data-menu-migrated": !0,
        navId: "conjure-create",
        "aria-label": a,
        onClose: s,
        onSelect: s,
        children: [
            (0, l.jsx)(k.rX, {
                label: a,
                children: (0, l.jsx)(k.Dr, {
                    id: "conjure-create-user",
                    label: G.intl.string(C.default.UPLaGM),
                    icon: E.UserIcon,
                    disabled: null == i,
                    action: () => {
                        null != i && ((0, I.YN)(i), n());
                    },
                }),
            }),
            (0, l.jsx)(k.rX, {
                children:
                    0 === t.length
                        ? (0, l.jsx)(k.Dr, {
                              id: "conjure-create-empty",
                              disabled: !0,
                              label: G.intl.string(C.default["6aLvW5"]),
                          })
                        : t.map((e) =>
                              (0, l.jsx)(
                                  k.Dr,
                                  {
                                      id: `conjure-create-${e.id}`,
                                      label: e.name,
                                      action: () => {
                                          ((0, I.g7)(e.id), n());
                                      },
                                  },
                                  e.id,
                              ),
                          ),
            }),
        ],
    });
}
var w = i(823376),
    M = i(834730),
    T = i(939249),
    P = i(289873),
    R = i(821609),
    _ = i(364522),
    z = i(548118),
    F = i(145497),
    O = i(967198),
    B = i(85428),
    J = i(855793),
    X = i(42766),
    $ = i(497183),
    Y = i(217846),
    U = i(731084),
    q = i(104317),
    W = i(874421);
function Q(e, t) {
    return e?.activityLine === t?.activityLine && e?.startedAt === t?.startedAt;
}
var V = i(807994);
function K(e) {
    let { projectId: t } = e,
        i = (0, r.bG)(
            [o.Ay],
            () => {
                let e = (0, o.Ji)(o.Ay.getMessages(t));
                return null == e
                    ? null
                    : {
                          activityLine:
                              (0, q.w)(e.steps) ??
                              (0, U.Dy)({
                                  activity: o.Ay.getThinkingActivity(t),
                                  compacting: o.Ay.isCompacting(t),
                                  saving: o.Ay.isSaving(t),
                              }),
                          startedAt: (0, W.S)(e),
                      };
            },
            [t],
            Q,
        );
    return null == i
        ? null
        : (0, l.jsxs)("div", {
              className: V.Bs,
              children: [
                  (0, l.jsx)(w.i, { size: 10, color: "currentColor" }),
                  (0, l.jsx)(M.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-subtle",
                      className: V.S$,
                      children: i.activityLine,
                  }),
                  (0, l.jsx)(B.A, { startedAt: i.startedAt }),
              ],
          });
}
function H(e) {
    let { entry: t, fallbackGuildId: i, onNavigate: n } = e,
        s = "building" === t.activity,
        a = t.guildId ?? i,
        { serverName: r, label: c } = (0, v.nM)(t);
    return (0, l.jsxs)("li", {
        className: V.dc,
        children: [
            (0, l.jsx)(J.Ay, { projectId: t.projectId }),
            (0, l.jsx)(Y.a, { projectId: t.projectId }),
            (0, l.jsxs)(T.D, {
                className: V.nM,
                "aria-label": c,
                "aria-disabled": null == a,
                "data-project-id": t.projectId,
                onClick: () => {
                    null != a && ((0, I.g7)(a, t.projectId), n());
                },
                children: [
                    (0, l.jsx)($.A, { project: t.project, size: "list", className: V.aL }),
                    (0, l.jsxs)("div", {
                        className: V.fw,
                        children: [
                            (0, l.jsxs)("div", {
                                className: V.G9,
                                children: [
                                    (0, l.jsx)(M.E, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        className: V.j1,
                                        children: t.name,
                                    }),
                                    (0, l.jsx)(Y.n, { projectId: t.projectId }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: V.lk,
                                children: [
                                    null == t.guild || t.notInServer
                                        ? null
                                        : (0, l.jsx)(z.Ay, {
                                              guild: t.guild,
                                              size: z.Ay.Sizes.SMOL,
                                              "aria-hidden": !0,
                                          }),
                                    (0, l.jsx)(M.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: V.L5,
                                        children: r,
                                    }),
                                ],
                            }),
                            s ? (0, l.jsx)(K, { projectId: t.projectId }) : null,
                        ],
                    }),
                ],
            }),
        ],
    });
}
function Z(e) {
    let { id: t, heading: i, entries: n, fallbackGuildId: s, onNavigate: a } = e;
    if (0 === n.length) return null;
    let r = `conjure-section-${t}`;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(x.D, { variant: "text-sm/medium", color: "text-subtle", id: r, className: V.SF, children: i }),
            (0, l.jsx)("ul", {
                className: V.p_,
                "aria-labelledby": r,
                children: n.map((e) => (0, l.jsx)(H, { entry: e, fallbackGuildId: s, onNavigate: a }, e.projectId)),
            }),
        ],
    });
}
function ee(e) {
    let { guilds: t, forMeGuildId: i, onNavigate: n } = e,
        s = G.intl.string(C.default.UPLaGM);
    return (0, l.jsxs)("div", {
        className: V.p$,
        children: [
            (0, l.jsx)(M.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: G.intl.string(C.default.snY8uu),
            }),
            (0, l.jsx)(M.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children:
                    0 === t.length
                        ? G.intl.string(C.default.f5o5pk)
                        : G.intl.formatToPlainString(C.default.NiXcSi, { count: t.length }),
            }),
            (0, l.jsxs)("ul", {
                className: V.gc,
                children: [
                    null != i
                        ? (0, l.jsx)("li", {
                              children: (0, l.jsxs)(T.D, {
                                  className: V.b6,
                                  "aria-label": s,
                                  onClick: () => {
                                      ((0, I.YN)(i), n());
                                  },
                                  children: [
                                      (0, l.jsx)("span", {
                                          className: V.db,
                                          children: (0, l.jsx)(E.UserIcon, { size: "sm", color: "currentColor" }),
                                      }),
                                      (0, l.jsx)(M.E, {
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          className: V.qL,
                                          children: s,
                                      }),
                                  ],
                              }),
                          })
                        : null,
                    t.map((e) =>
                        (0, l.jsx)(
                            "li",
                            {
                                children: (0, l.jsxs)(T.D, {
                                    className: V.b6,
                                    "aria-label": e.name,
                                    onClick: () => {
                                        ((0, I.g7)(e.id), n());
                                    },
                                    children: [
                                        (0, l.jsx)(F.Ay, { guild: e, iconSize: 32, className: V.$f }),
                                        (0, l.jsx)(M.E, {
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
    let { eligibleGuilds: t, forMeGuildId: i, onNavigate: n } = e,
        s = (0, v.qh)("VibegrationsProjectList"),
        a = (0, r.bG)([X.Ay], () => X.Ay.getProjectsFetchState()),
        c = (0, r.bG)([O.A], () => O.A.getGuildId()),
        d = t.find((e) => e.id === c)?.id ?? t[0]?.id ?? null,
        o = s.filter((e) => "idle" !== e.activity),
        u = s.filter((e) => "idle" === e.activity);
    return 0 === s.length
        ? null == a || "loading" === a.type
            ? (0, l.jsxs)("div", {
                  className: V.wk,
                  children: [
                      (0, l.jsx)(P.y, {}),
                      (0, l.jsx)(M.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: G.intl.string(C.default["XE+JXX"]),
                      }),
                  ],
              })
            : "error" === a.type
              ? (0, l.jsxs)("div", {
                    className: V.wk,
                    children: [
                        (0, l.jsx)(M.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: G.intl.string(C.default.DJAPMO),
                        }),
                        (0, l.jsx)(R.$, {
                            variant: "secondary",
                            size: "sm",
                            text: G.intl.string(C.default["WFJ/vb"]),
                            onClick: () => (0, p.hF)(),
                        }),
                    ],
                })
              : (0, l.jsx)(ee, { guilds: t, forMeGuildId: i, onNavigate: n })
        : (0, l.jsxs)(_.Ip, {
              fade: !0,
              className: V.XG,
              children: [
                  (0, l.jsx)(Z, {
                      id: "active",
                      heading: G.intl.string(C.default.DnsyEc),
                      entries: o,
                      fallbackGuildId: d,
                      onNavigate: n,
                  }),
                  (0, l.jsx)(Z, {
                      id: "idle",
                      heading: G.intl.string(C.default.p8lFfK),
                      entries: u,
                      fallbackGuildId: d,
                      onNavigate: n,
                  }),
              ],
          });
}
var ei = i(606128),
    el = i(559962);
let en = "VibegrationsPopout";
function es(e) {
    let { onNavigate: t } = e,
        i = G.intl.string(C.default.uk6jhJ),
        n = (0, v.z9)(en),
        s = (0, v.rX)(en);
    return (0, l.jsxs)("div", {
        className: a()(el.kL, ei.T),
        children: [
            (0, l.jsx)("div", { className: el._Q, children: (0, l.jsx)("span", { className: el.Tp }) }),
            (0, l.jsx)("div", {
                className: el.Qs,
                children: (0, l.jsx)(j.F, {
                    forceLevel: 1,
                    component: (0, l.jsxs)("header", {
                        className: el.wx,
                        children: [
                            (0, l.jsx)(x.D, {
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                className: el.DD,
                                children: i,
                            }),
                            (0, l.jsx)("div", {
                                className: el.$s,
                                children: (0, l.jsx)(D, { guilds: n, forMeGuildId: s, onNavigate: t }),
                            }),
                        ],
                    }),
                    children: (0, l.jsx)(et, { eligibleGuilds: n, forMeGuildId: s, onNavigate: t }),
                }),
            }),
        ],
    });
}
function ea(e) {
    let { children: t, targetElementRef: i, align: s = "right" } = e,
        [a, r] = n.useState(!1),
        c = n.useCallback(() => r(!1), []),
        d = n.useCallback(() => {
            r((e) => (e || (0, p.hF)(), !e));
        }, []);
    return (
        (0, f.Ay)(
            () => (g.h.subscribe("USER_SETTINGS_MODAL_OPEN", c), () => g.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", c)),
        ),
        (0, l.jsx)(m.Y, {
            targetElementRef: i,
            shouldShow: a,
            position: "bottom",
            align: s,
            spacing: 2,
            animation: m.Y.Animation.NONE,
            onRequestClose: c,
            renderPopout: () =>
                (0, l.jsx)(h.l, {
                    "aria-label": G.intl.string(C.default.uk6jhJ),
                    children: (0, l.jsx)(es, { onNavigate: c }),
                }),
            children: (e, i) => {
                let { isShown: l } = i;
                return t(d, l, e);
            },
        })
    );
}
var er = i(319354),
    ec = i(812993),
    ed = i(85463),
    eo = i(573435),
    eu = i(404373),
    ej = i(308665),
    ex = i(274158);
function em() {
    return (0, l.jsxs)("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        focusable: !1,
        children: [
            (0, l.jsx)("path", { fill: "currentColor", d: ej.fy }),
            (0, l.jsx)("path", { fill: "currentColor", d: ej.tE, className: a()(ex.dQ, ex.ui) }),
            (0, l.jsx)("path", { fill: "currentColor", d: ej.tW, className: a()(ex.dQ, ex.Mb) }),
        ],
    });
}
function eh(e) {
    let { working: t } = e;
    return (0, l.jsxs)("span", {
        className: a()(ex.RB, ei.T, { [ex.Cc]: t }),
        "aria-hidden": !0,
        children: [(0, l.jsx)(em, {}), (0, l.jsx)("span", { className: ex.q2, children: (0, l.jsx)(em, {}) })],
    });
}
var eg = i(346994);
function ef(e) {
    let { count: t } = e,
        i = Math.min(t, 25),
        n = t > i;
    return (0, l.jsx)(ec.hV, {
        count: i,
        renderBadgeCount: (e) => (n ? `${e}+` : e),
        className: a()(ex.WK, { [ex.uP]: n }),
    });
}
function ep(e) {
    let { count: t } = e;
    return (0, l.jsx)(M.E, { variant: (0, ed.N)(), children: (0, ec.Gu)(t) });
}
function ev(e) {
    let { animated: t } = e,
        i = n.useRef(null),
        s = (0, r.bG)([o.Ay], () => o.Ay.isAnyThinking()),
        { unreadCount: c, badgeCount: d } = (0, eu.NC)(),
        u = 0 === d && c > 0,
        j = G.intl.string(C.default.uk6jhJ),
        x = [j, d > 0 ? G.intl.string(C.default.hfIuc7) : null, s ? G.intl.string(C.default["Y8pS+n"]) : null]
            .filter(Boolean)
            .join(", "),
        m = (0, l.jsx)(eh, { working: t && s });
    return (0, l.jsx)("div", {
        className: ex.NI,
        children: (0, l.jsx)(ea, {
            targetElementRef: i,
            align: "left",
            children: (e, t) =>
                (0, l.jsx)(N.m, {
                    asContainer: !0,
                    shouldShow: !t,
                    text: j,
                    children: (0, l.jsxs)(T.D, {
                        innerRef: i,
                        className: a()(eg.OV, ex.f_, { [ex.ho]: t }),
                        "aria-label": x,
                        "aria-haspopup": "dialog",
                        "aria-expanded": t,
                        onClick: e,
                        children: [
                            (0, l.jsx)("div", {
                                className: eg.P0,
                                children: u
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(eo.Ay, {
                                                  width: er.E.sm,
                                                  height: er.E.sm,
                                                  mask: eo.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                  children: m,
                                              }),
                                              (0, l.jsx)("div", { className: eg.Zm }),
                                          ],
                                      })
                                    : m,
                            }),
                            d > 0 ? (0, l.jsx)(ef, { count: d }) : null,
                            u ? (0, l.jsx)(ep, { count: c }) : null,
                        ],
                    }),
                }),
        }),
    });
}
var eN = i(50172);
function eb() {
    let e = n.useRef(null),
        t = (0, r.bG)([o.Ay], () => o.Ay.isAnyThinking()),
        i = G.intl.string(C.default.uk6jhJ);
    return (0, l.jsx)(ea, {
        targetElementRef: e,
        children: (n, s) =>
            (0, l.jsx)(d.A, {
                ref: e,
                icon: c.D,
                tooltip: i,
                "aria-haspopup": "dialog",
                "aria-expanded": s,
                selected: s,
                onClick: n,
                overlay: t
                    ? (0, l.jsx)(c.D, {
                          className: a()(eN.bI, ei.T, { [eN.lL]: s }),
                          color: "currentColor",
                          size: "sm",
                          "aria-hidden": !0,
                      })
                    : null,
            }),
    });
}
function ey(e) {
    let { placement: t = "trailing" } = e,
        { leftEntrypoint: i, workingAnimation: n } = u.useConfig({ location: "AppTitleBar" });
    return i
        ? "leading" === t
            ? (0, l.jsx)(ev, { animated: n })
            : null
        : "trailing" === t
          ? (0, l.jsx)(eb, {})
          : null;
}
