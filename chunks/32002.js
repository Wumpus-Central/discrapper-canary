(i.r(t), i.d(t, { default: () => ew }));
var n = i(477900),
    l = i(582128),
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
var x = i(707554),
    j = i(297264),
    h = i(922016),
    m = i(305866),
    g = i(73153),
    f = i(964486),
    p = i(371169),
    v = i(16619),
    N = i(866665),
    b = i(408278),
    y = i(663341),
    A = i(980707),
    k = i(477782),
    I = i(950305),
    E = i(941985),
    C = i(248675),
    w = i(660183),
    G = i(749472);
function S(e) {
    let { guilds: t, forMeGuildId: i, onNavigate: s } = e,
        a = l.useRef(null),
        r = w.intl.string(C.default.sFiGNz);
    return (0, n.jsx)(h.Y, {
        targetElementRef: a,
        align: "right",
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(D, { guilds: t, forMeGuildId: i, onNavigate: s, onClose: l });
        },
        children: (e) => {
            let { onClick: t } = e;
            return (0, n.jsx)("div", {
                ref: a,
                className: G.h,
                children: (0, n.jsx)(N.m, {
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
function D(e) {
    let { guilds: t, forMeGuildId: i, onNavigate: l, onClose: s } = e,
        a = w.intl.string(C.default.sFiGNz);
    return (0, n.jsxs)(A.W, {
        "data-menu-migrated": !0,
        navId: "conjure-create",
        "aria-label": a,
        onClose: s,
        onSelect: s,
        children: [
            (0, n.jsx)(k.rX, {
                label: a,
                children: (0, n.jsx)(k.Dr, {
                    id: "conjure-create-user",
                    label: w.intl.string(C.default.UPLaGM),
                    icon: I.UserIcon,
                    disabled: null == i,
                    action: () => {
                        null != i && ((0, E.YN)(i), l());
                    },
                }),
            }),
            (0, n.jsx)(k.rX, {
                children:
                    0 === t.length
                        ? (0, n.jsx)(k.Dr, {
                              id: "conjure-create-empty",
                              disabled: !0,
                              label: w.intl.string(C.default["6aLvW5"]),
                          })
                        : t.map((e) =>
                              (0, n.jsx)(
                                  k.Dr,
                                  {
                                      id: `conjure-create-${e.id}`,
                                      label: e.name,
                                      action: () => {
                                          ((0, E.g7)(e.id), l());
                                      },
                                  },
                                  e.id,
                              ),
                          ),
            }),
        ],
    });
}
var L = i(834730),
    M = i(864970),
    R = i(939249),
    T = i(289873),
    P = i(821609),
    _ = i(364522),
    F = i(145497),
    z = i(967198),
    B = i(85428),
    O = i(855793),
    $ = i(260498),
    J = i(497183),
    U = i(217846),
    X = i(733123),
    W = i(573435),
    Y = i(548118),
    Q = i(807994);
function q(e) {
    let { project: t, guild: i } = e,
        s = l.useId();
    return (0, n.jsxs)("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        className: Q.rv,
        "aria-hidden": !0,
        children: [
            (0, n.jsxs)("mask", {
                id: s,
                children: [
                    (0, n.jsx)("rect", { x: 0, y: 0, width: 44, height: 44, fill: "white" }),
                    (0, n.jsx)("rect", {
                        mask: `url(#${W.hW.SQUIRCLE})`,
                        x: 26,
                        y: 26,
                        width: 24,
                        height: 24,
                        fill: "black",
                    }),
                ],
            }),
            (0, n.jsx)("foreignObject", {
                x: 0,
                y: 0,
                width: 44,
                height: 44,
                mask: `url(#${s})`,
                children: (0, n.jsx)(J.A, { project: t, size: "list" }),
            }),
            (0, n.jsx)("foreignObject", {
                x: 28,
                y: 28,
                width: 20,
                height: 20,
                mask: `url(#${W.hW.SQUIRCLE})`,
                children: (0, n.jsx)(Y.Ay, { guild: i, size: Y.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 }),
            }),
        ],
    });
}
var V = i(731084),
    K = i(104317),
    H = i(874421),
    Z = i(886540);
function ee(e, t) {
    return e?.activityLine === t?.activityLine && e?.startedAt === t?.startedAt;
}
function et(e) {
    let { entry: t, timer: i } = e;
    return (0, n.jsxs)("div", {
        className: Q.G9,
        children: [
            (0, n.jsx)(L.E, { variant: "text-md/semibold", color: "text-strong", className: Q.j1, children: t.name }),
            (0, n.jsx)(U.n, { projectId: t.projectId }),
            i,
        ],
    });
}
function ei(e) {
    var t;
    let { entry: i } = e,
        l =
            ((t = i.projectId),
            (0, r.bG)(
                [o.A],
                () => {
                    let e = (0, Z.Ji)(o.A.getMessages(t));
                    return null == e
                        ? null
                        : {
                              activityLine:
                                  (0, K.w)(e.steps) ??
                                  (0, V.Dy)({
                                      activity: o.A.getThinkingActivity(t),
                                      compacting: o.A.isCompacting(t),
                                      saving: o.A.isSaving(t),
                                  }),
                              startedAt: (0, H.S)(e),
                          };
                },
                [t],
                ee,
            ));
    return null == l
        ? (0, n.jsx)(et, { entry: i })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(et, {
                      entry: i,
                      timer: (0, n.jsx)(B.A, { startedAt: l.startedAt, variant: "text-xs/normal" }),
                  }),
                  (0, n.jsx)(M.o, {
                      text: l.activityLine,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      className: Q.Bs,
                  }),
              ],
          });
}
function en(e) {
    let { entry: t } = e,
        i = (0, X.A)(t.project);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(et, { entry: t }),
            null == i
                ? null
                : (0, n.jsx)(L.E, { variant: "text-sm/normal", color: "text-subtle", className: Q.Bs, children: i }),
        ],
    });
}
function el(e) {
    let { entry: t } = e;
    switch (t.activity) {
        case "building":
            return (0, n.jsx)(ei, { entry: t });
        case "idle":
            return (0, n.jsx)(en, { entry: t });
        default:
            return (0, n.jsx)(et, { entry: t });
    }
}
function es(e) {
    let { entry: t, fallbackGuildId: i, onNavigate: l } = e,
        s = t.guildId ?? i,
        { label: a } = (0, v.nM)(t);
    return (0, n.jsxs)("li", {
        className: Q.dc,
        children: [
            (0, n.jsx)(O.Ay, { projectId: t.projectId }),
            (0, n.jsx)(U.a, { projectId: t.projectId }),
            (0, n.jsxs)(R.D, {
                className: Q.nM,
                "aria-label": a,
                "aria-disabled": null == s,
                "data-project-id": t.projectId,
                onClick: () => {
                    null != s && ((0, E.g7)(s, t.projectId), l());
                },
                children: [
                    null == t.guild || t.notInServer
                        ? (0, n.jsx)(J.A, { project: t.project, size: "list" })
                        : (0, n.jsx)(q, { project: t.project, guild: t.guild }),
                    (0, n.jsx)("div", { className: Q.fw, children: (0, n.jsx)(el, { entry: t }) }),
                ],
            }),
        ],
    });
}
function ea(e) {
    let { id: t, heading: i, entries: l, fallbackGuildId: s, onNavigate: a } = e;
    if (0 === l.length) return null;
    let r = `conjure-section-${t}`;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(j.D, { variant: "text-sm/medium", color: "text-subtle", id: r, className: Q.SF, children: i }),
            (0, n.jsx)("ul", {
                className: Q.p_,
                "aria-labelledby": r,
                children: l.map((e) => (0, n.jsx)(es, { entry: e, fallbackGuildId: s, onNavigate: a }, e.projectId)),
            }),
        ],
    });
}
function er(e) {
    let { guilds: t, forMeGuildId: i, onNavigate: l } = e,
        s = w.intl.string(C.default.UPLaGM);
    return (0, n.jsxs)("div", {
        className: Q.p$,
        children: [
            (0, n.jsx)(L.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: w.intl.string(C.default.snY8uu),
            }),
            (0, n.jsx)(L.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children:
                    0 === t.length
                        ? w.intl.string(C.default.f5o5pk)
                        : w.intl.formatToPlainString(C.default.NiXcSi, { count: t.length }),
            }),
            (0, n.jsxs)("ul", {
                className: Q.gc,
                children: [
                    null != i
                        ? (0, n.jsx)("li", {
                              children: (0, n.jsxs)(R.D, {
                                  className: Q.b6,
                                  "aria-label": s,
                                  onClick: () => {
                                      ((0, E.YN)(i), l());
                                  },
                                  children: [
                                      (0, n.jsx)("span", {
                                          className: Q.db,
                                          children: (0, n.jsx)(I.UserIcon, { size: "sm", color: "currentColor" }),
                                      }),
                                      (0, n.jsx)(L.E, {
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          className: Q.qL,
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
                                children: (0, n.jsxs)(R.D, {
                                    className: Q.b6,
                                    "aria-label": e.name,
                                    onClick: () => {
                                        ((0, E.g7)(e.id), l());
                                    },
                                    children: [
                                        (0, n.jsx)(F.Ay, { guild: e, iconSize: 32, className: Q.$f }),
                                        (0, n.jsx)(L.E, {
                                            variant: "text-sm/medium",
                                            color: "text-strong",
                                            className: Q.qL,
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
function ec(e) {
    let { eligibleGuilds: t, forMeGuildId: i, onNavigate: l } = e,
        s = (0, v.qh)("VibegrationsProjectList"),
        a = (0, r.bG)([$.Ay], () => $.Ay.getProjectsFetchState()),
        c = (0, r.bG)([z.A], () => z.A.getGuildId()),
        d = t.find((e) => e.id === c)?.id ?? t[0]?.id ?? null,
        o = s.filter((e) => "idle" !== e.activity),
        u = s.filter((e) => "idle" === e.activity);
    return 0 === s.length
        ? null == a || "loading" === a.type
            ? (0, n.jsxs)("div", {
                  className: Q.wk,
                  children: [
                      (0, n.jsx)(T.y, {}),
                      (0, n.jsx)(L.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: w.intl.string(C.default["XE+JXX"]),
                      }),
                  ],
              })
            : "error" === a.type
              ? (0, n.jsxs)("div", {
                    className: Q.wk,
                    children: [
                        (0, n.jsx)(L.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: w.intl.string(C.default.DJAPMO),
                        }),
                        (0, n.jsx)(P.$, {
                            variant: "secondary",
                            size: "sm",
                            text: w.intl.string(C.default["WFJ/vb"]),
                            onClick: () => (0, p.hF)(),
                        }),
                    ],
                })
              : (0, n.jsx)(er, { guilds: t, forMeGuildId: i, onNavigate: l })
        : (0, n.jsxs)(_.Ip, {
              fade: !0,
              className: Q.XG,
              children: [
                  (0, n.jsx)(ea, {
                      id: "active",
                      heading: w.intl.string(C.default.DnsyEc),
                      entries: o,
                      fallbackGuildId: d,
                      onNavigate: l,
                  }),
                  (0, n.jsx)(ea, {
                      id: "idle",
                      heading: w.intl.string(C.default.p8lFfK),
                      entries: u,
                      fallbackGuildId: d,
                      onNavigate: l,
                  }),
              ],
          });
}
var ed = i(606128),
    eo = i(559962);
let eu = "VibegrationsPopout";
function ex(e) {
    let { onNavigate: t } = e,
        i = w.intl.string(C.default.uk6jhJ),
        l = (0, v.z9)(eu),
        s = (0, v.rX)(eu);
    return (0, n.jsxs)("div", {
        className: a()(eo.kL, ed.T),
        children: [
            (0, n.jsx)("div", { className: eo._Q, children: (0, n.jsx)("span", { className: eo.Tp }) }),
            (0, n.jsx)("div", {
                className: eo.Qs,
                children: (0, n.jsx)(x.F, {
                    forceLevel: 1,
                    component: (0, n.jsxs)("header", {
                        className: eo.wx,
                        children: [
                            (0, n.jsx)(j.D, {
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                className: eo.DD,
                                children: i,
                            }),
                            (0, n.jsx)("div", {
                                className: eo.$s,
                                children: (0, n.jsx)(S, { guilds: l, forMeGuildId: s, onNavigate: t }),
                            }),
                        ],
                    }),
                    children: (0, n.jsx)(ec, { eligibleGuilds: l, forMeGuildId: s, onNavigate: t }),
                }),
            }),
        ],
    });
}
function ej(e) {
    let { children: t, targetElementRef: i, align: s = "right" } = e,
        [a, r] = l.useState(!1),
        c = l.useCallback(() => r(!1), []),
        d = l.useCallback(() => {
            r((e) => (e || (0, p.hF)(), !e));
        }, []);
    return (
        (0, f.Ay)(
            () => (g.h.subscribe("USER_SETTINGS_MODAL_OPEN", c), () => g.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", c)),
        ),
        (0, n.jsx)(h.Y, {
            targetElementRef: i,
            shouldShow: a,
            position: "bottom",
            align: s,
            spacing: 2,
            animation: h.Y.Animation.NONE,
            onRequestClose: c,
            renderPopout: () =>
                (0, n.jsx)(m.l, {
                    "aria-label": w.intl.string(C.default.uk6jhJ),
                    children: (0, n.jsx)(ex, { onNavigate: c }),
                }),
            children: (e, i) => {
                let { isShown: n } = i;
                return t(d, n, e);
            },
        })
    );
}
var eh = i(319354),
    em = i(812993),
    eg = i(85463),
    ef = i(404373),
    ep = i(308665),
    ev = i(274158);
function eN() {
    return (0, n.jsxs)("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        focusable: !1,
        children: [
            (0, n.jsx)("path", { fill: "currentColor", d: ep.fy }),
            (0, n.jsx)("path", { fill: "currentColor", d: ep.tE, className: a()(ev.dQ, ev.ui) }),
            (0, n.jsx)("path", { fill: "currentColor", d: ep.tW, className: a()(ev.dQ, ev.Mb) }),
        ],
    });
}
function eb(e) {
    let { working: t } = e;
    return (0, n.jsxs)("span", {
        className: a()(ev.RB, ed.T, { [ev.Cc]: t }),
        "aria-hidden": !0,
        children: [(0, n.jsx)(eN, {}), (0, n.jsx)("span", { className: ev.q2, children: (0, n.jsx)(eN, {}) })],
    });
}
var ey = i(346994);
function eA(e) {
    let { count: t } = e,
        i = Math.min(t, 25),
        l = t > i;
    return (0, n.jsx)(em.hV, {
        count: i,
        renderBadgeCount: (e) => (l ? `${e}+` : e),
        className: a()(ev.WK, { [ev.uP]: l }),
    });
}
function ek(e) {
    let { count: t } = e;
    return (0, n.jsx)(L.E, { variant: (0, eg.N)(), children: (0, em.Gu)(t) });
}
function eI(e) {
    let { animated: t } = e,
        i = l.useRef(null),
        s = (0, r.bG)([o.A], () => o.A.isAnyThinking()),
        { unreadCount: c, badgeCount: d } = (0, ef.NC)(),
        u = 0 === d && c > 0,
        x = w.intl.string(C.default.uk6jhJ),
        j = [x, d > 0 ? w.intl.string(C.default.hfIuc7) : null, s ? w.intl.string(C.default["Y8pS+n"]) : null]
            .filter(Boolean)
            .join(", "),
        h = (0, n.jsx)(eb, { working: t && s });
    return (0, n.jsx)("div", {
        className: ev.NI,
        children: (0, n.jsx)(ej, {
            targetElementRef: i,
            align: "left",
            children: (e, t) =>
                (0, n.jsx)(N.m, {
                    asContainer: !0,
                    shouldShow: !t,
                    text: x,
                    children: (0, n.jsxs)(R.D, {
                        innerRef: i,
                        className: a()(ey.OV, ev.f_, { [ev.ho]: t }),
                        "aria-label": j,
                        "aria-haspopup": "dialog",
                        "aria-expanded": t,
                        onClick: e,
                        children: [
                            (0, n.jsx)("div", {
                                className: ey.P0,
                                children: u
                                    ? (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)(W.Ay, {
                                                  width: eh.E.sm,
                                                  height: eh.E.sm,
                                                  mask: W.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                  children: h,
                                              }),
                                              (0, n.jsx)("div", { className: ey.Zm }),
                                          ],
                                      })
                                    : h,
                            }),
                            d > 0 ? (0, n.jsx)(eA, { count: d }) : null,
                            u ? (0, n.jsx)(ek, { count: c }) : null,
                        ],
                    }),
                }),
        }),
    });
}
var eE = i(50172);
function eC() {
    let e = l.useRef(null),
        t = (0, r.bG)([o.A], () => o.A.isAnyThinking()),
        i = w.intl.string(C.default.uk6jhJ);
    return (0, n.jsx)(ej, {
        targetElementRef: e,
        children: (l, s) =>
            (0, n.jsx)(d.A, {
                ref: e,
                icon: c.D,
                tooltip: i,
                "aria-haspopup": "dialog",
                "aria-expanded": s,
                selected: s,
                onClick: l,
                overlay: t
                    ? (0, n.jsx)(c.D, {
                          className: a()(eE.bI, ed.T, { [eE.lL]: s }),
                          color: "currentColor",
                          size: "sm",
                          "aria-hidden": !0,
                      })
                    : null,
            }),
    });
}
function ew(e) {
    let { placement: t = "trailing" } = e,
        { leftEntrypoint: i, workingAnimation: l } = u.useConfig({ location: "AppTitleBar" });
    return i
        ? "leading" === t
            ? (0, n.jsx)(eI, { animated: l })
            : null
        : "trailing" === t
          ? (0, n.jsx)(eC, {})
          : null;
}
