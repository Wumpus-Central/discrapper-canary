(i.r(t), i.d(t, { default: () => eI }));
var n = i(477900),
    l = i(582128),
    s = i(503698),
    a = i.n(s),
    r = i(17928),
    d = i(152367),
    c = i(189252),
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
    z = i(145497),
    F = i(967198),
    O = i(85428),
    B = i(855793),
    $ = i(260498),
    J = i(497183),
    U = i(217846),
    X = i(573435),
    W = i(548118),
    Y = i(807994);
function Q(e) {
    let { project: t, guild: i } = e,
        s = l.useId();
    return (0, n.jsxs)("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        className: Y.rv,
        "aria-hidden": !0,
        children: [
            (0, n.jsxs)("mask", {
                id: s,
                children: [
                    (0, n.jsx)("rect", { x: 0, y: 0, width: 44, height: 44, fill: "white" }),
                    (0, n.jsx)("rect", {
                        mask: `url(#${X.hW.SQUIRCLE})`,
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
                mask: `url(#${X.hW.SQUIRCLE})`,
                children: (0, n.jsx)(W.Ay, { guild: i, size: W.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 }),
            }),
        ],
    });
}
var q = i(731084),
    V = i(104317),
    K = i(874421),
    H = i(886540);
function Z(e, t) {
    return e?.activityLine === t?.activityLine && e?.startedAt === t?.startedAt;
}
function ee(e) {
    let { entry: t, timer: i } = e;
    return (0, n.jsxs)("div", {
        className: Y.G9,
        children: [
            (0, n.jsx)(L.E, { variant: "text-md/semibold", color: "text-strong", className: Y.j1, children: t.name }),
            (0, n.jsx)(U.n, { projectId: t.projectId }),
            i,
        ],
    });
}
function et(e) {
    var t;
    let { entry: i } = e,
        l =
            ((t = i.projectId),
            (0, r.bG)(
                [o.A],
                () => {
                    let e = (0, H.Ji)(o.A.getMessages(t));
                    return null == e
                        ? null
                        : {
                              activityLine:
                                  (0, V.w)(e.steps) ??
                                  (0, q.Dy)({
                                      activity: o.A.getThinkingActivity(t),
                                      compacting: o.A.isCompacting(t),
                                      saving: o.A.isSaving(t),
                                  }),
                              startedAt: (0, K.S)(e),
                          };
                },
                [t],
                Z,
            ));
    return null == l
        ? (0, n.jsx)(ee, { entry: i })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(ee, {
                      entry: i,
                      timer: (0, n.jsx)(O.A, { startedAt: l.startedAt, variant: "text-xs/normal" }),
                  }),
                  (0, n.jsx)(M.o, {
                      text: l.activityLine,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      className: Y.Bs,
                  }),
              ],
          });
}
function ei(e) {
    let { entry: t, fallbackGuildId: i, onNavigate: l } = e,
        s = "building" === t.activity,
        a = t.guildId ?? i,
        { label: r } = (0, v.nM)(t);
    return (0, n.jsxs)("li", {
        className: Y.dc,
        children: [
            (0, n.jsx)(B.Ay, { projectId: t.projectId, intensity: "surface" }),
            (0, n.jsx)(U.a, { projectId: t.projectId }),
            (0, n.jsxs)(R.D, {
                className: Y.nM,
                "aria-label": r,
                "aria-disabled": null == a,
                "data-project-id": t.projectId,
                onClick: () => {
                    null != a && ((0, E.g7)(a, t.projectId), l());
                },
                children: [
                    null == t.guild || t.notInServer
                        ? (0, n.jsx)(J.A, { project: t.project, size: "list" })
                        : (0, n.jsx)(Q, { project: t.project, guild: t.guild }),
                    (0, n.jsx)("div", {
                        className: Y.fw,
                        children: s ? (0, n.jsx)(et, { entry: t }) : (0, n.jsx)(ee, { entry: t }),
                    }),
                ],
            }),
        ],
    });
}
function en(e) {
    let { id: t, heading: i, entries: l, fallbackGuildId: s, onNavigate: a } = e;
    if (0 === l.length) return null;
    let r = `conjure-section-${t}`;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(j.D, { variant: "text-sm/medium", color: "text-subtle", id: r, className: Y.SF, children: i }),
            (0, n.jsx)("ul", {
                className: Y.p_,
                "aria-labelledby": r,
                children: l.map((e) => (0, n.jsx)(ei, { entry: e, fallbackGuildId: s, onNavigate: a }, e.projectId)),
            }),
        ],
    });
}
function el(e) {
    let { guilds: t, forMeGuildId: i, onNavigate: l } = e,
        s = w.intl.string(C.default.UPLaGM);
    return (0, n.jsxs)("div", {
        className: Y.p$,
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
                className: Y.gc,
                children: [
                    null != i
                        ? (0, n.jsx)("li", {
                              children: (0, n.jsxs)(R.D, {
                                  className: Y.b6,
                                  "aria-label": s,
                                  onClick: () => {
                                      ((0, E.YN)(i), l());
                                  },
                                  children: [
                                      (0, n.jsx)("span", {
                                          className: Y.db,
                                          children: (0, n.jsx)(I.UserIcon, { size: "sm", color: "currentColor" }),
                                      }),
                                      (0, n.jsx)(L.E, {
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          className: Y.qL,
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
                                    className: Y.b6,
                                    "aria-label": e.name,
                                    onClick: () => {
                                        ((0, E.g7)(e.id), l());
                                    },
                                    children: [
                                        (0, n.jsx)(z.Ay, { guild: e, iconSize: 32, className: Y.$f }),
                                        (0, n.jsx)(L.E, {
                                            variant: "text-sm/medium",
                                            color: "text-strong",
                                            className: Y.qL,
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
function es(e) {
    let { eligibleGuilds: t, forMeGuildId: i, onNavigate: l } = e,
        s = (0, v.qh)("VibegrationsProjectList"),
        a = (0, r.bG)([$.Ay], () => $.Ay.getProjectsFetchState()),
        d = (0, r.bG)([F.A], () => F.A.getGuildId()),
        c = t.find((e) => e.id === d)?.id ?? t[0]?.id ?? null,
        o = s.filter((e) => "idle" !== e.activity),
        u = s.filter((e) => "idle" === e.activity);
    return 0 === s.length
        ? null == a || "loading" === a.type
            ? (0, n.jsxs)("div", {
                  className: Y.wk,
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
                    className: Y.wk,
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
              : (0, n.jsx)(el, { guilds: t, forMeGuildId: i, onNavigate: l })
        : (0, n.jsxs)(_.Ip, {
              fade: !0,
              className: Y.XG,
              children: [
                  (0, n.jsx)(en, {
                      id: "active",
                      heading: w.intl.string(C.default.DnsyEc),
                      entries: o,
                      fallbackGuildId: c,
                      onNavigate: l,
                  }),
                  (0, n.jsx)(en, {
                      id: "idle",
                      heading: w.intl.string(C.default.p8lFfK),
                      entries: u,
                      fallbackGuildId: c,
                      onNavigate: l,
                  }),
              ],
          });
}
var ea = i(606128),
    er = i(559962);
let ed = "VibegrationsPopout";
function ec(e) {
    let { onNavigate: t } = e,
        i = w.intl.string(C.default.uk6jhJ),
        l = (0, v.z9)(ed),
        s = (0, v.rX)(ed);
    return (0, n.jsxs)("div", {
        className: a()(er.kL, ea.T),
        children: [
            (0, n.jsx)("div", { className: er._Q, children: (0, n.jsx)("span", { className: er.Tp }) }),
            (0, n.jsx)("div", {
                className: er.Qs,
                children: (0, n.jsx)(x.F, {
                    forceLevel: 1,
                    component: (0, n.jsxs)("header", {
                        className: er.wx,
                        children: [
                            (0, n.jsx)(j.D, {
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                className: er.DD,
                                children: i,
                            }),
                            (0, n.jsx)("div", {
                                className: er.$s,
                                children: (0, n.jsx)(S, { guilds: l, forMeGuildId: s, onNavigate: t }),
                            }),
                        ],
                    }),
                    children: (0, n.jsx)(es, { eligibleGuilds: l, forMeGuildId: s, onNavigate: t }),
                }),
            }),
        ],
    });
}
function eo(e) {
    let { children: t, targetElementRef: i, align: s = "right" } = e,
        [a, r] = l.useState(!1),
        d = l.useCallback(() => r(!1), []),
        c = l.useCallback(() => {
            r((e) => (e || (0, p.hF)(), !e));
        }, []);
    return (
        (0, f.Ay)(
            () => (g.h.subscribe("USER_SETTINGS_MODAL_OPEN", d), () => g.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", d)),
        ),
        (0, n.jsx)(h.Y, {
            targetElementRef: i,
            shouldShow: a,
            position: "bottom",
            align: s,
            spacing: 2,
            animation: h.Y.Animation.NONE,
            onRequestClose: d,
            renderPopout: () =>
                (0, n.jsx)(m.l, {
                    "aria-label": w.intl.string(C.default.uk6jhJ),
                    children: (0, n.jsx)(ec, { onNavigate: d }),
                }),
            children: (e, i) => {
                let { isShown: n } = i;
                return t(c, n, e);
            },
        })
    );
}
var eu = i(319354),
    ex = i(812993),
    ej = i(85463),
    eh = i(404373),
    em = i(308665),
    eg = i(274158);
function ef() {
    return (0, n.jsxs)("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        focusable: !1,
        children: [
            (0, n.jsx)("path", { fill: "currentColor", d: em.fy }),
            (0, n.jsx)("path", { fill: "currentColor", d: em.tE, className: a()(eg.dQ, eg.ui) }),
            (0, n.jsx)("path", { fill: "currentColor", d: em.tW, className: a()(eg.dQ, eg.Mb) }),
        ],
    });
}
function ep(e) {
    let { working: t } = e;
    return (0, n.jsxs)("span", {
        className: a()(eg.RB, ea.T, { [eg.Cc]: t }),
        "aria-hidden": !0,
        children: [(0, n.jsx)(ef, {}), (0, n.jsx)("span", { className: eg.q2, children: (0, n.jsx)(ef, {}) })],
    });
}
var ev = i(346994);
function eN(e) {
    let { count: t } = e,
        i = Math.min(t, 25),
        l = t > i;
    return (0, n.jsx)(ex.hV, {
        count: i,
        renderBadgeCount: (e) => (l ? `${e}+` : e),
        className: a()(eg.WK, { [eg.uP]: l }),
    });
}
function eb(e) {
    let { count: t } = e;
    return (0, n.jsx)(L.E, { variant: (0, ej.N)(), children: (0, ex.Gu)(t) });
}
function ey(e) {
    let { animated: t } = e,
        i = l.useRef(null),
        s = (0, r.bG)([o.A], () => o.A.isAnyThinking()),
        { unreadCount: d, badgeCount: c } = (0, eh.NC)(),
        u = 0 === c && d > 0,
        x = w.intl.string(C.default.uk6jhJ),
        j = [x, c > 0 ? w.intl.string(C.default.hfIuc7) : null, s ? w.intl.string(C.default["Y8pS+n"]) : null]
            .filter(Boolean)
            .join(", "),
        h = (0, n.jsx)(ep, { working: t && s });
    return (0, n.jsx)("div", {
        className: eg.NI,
        children: (0, n.jsx)(eo, {
            targetElementRef: i,
            align: "left",
            children: (e, t) =>
                (0, n.jsx)(N.m, {
                    asContainer: !0,
                    shouldShow: !t,
                    text: x,
                    children: (0, n.jsxs)(R.D, {
                        innerRef: i,
                        className: a()(ev.OV, eg.f_, { [eg.ho]: t }),
                        "aria-label": j,
                        "aria-haspopup": "dialog",
                        "aria-expanded": t,
                        onClick: e,
                        children: [
                            (0, n.jsx)("div", {
                                className: ev.P0,
                                children: u
                                    ? (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)(X.Ay, {
                                                  width: eu.E.sm,
                                                  height: eu.E.sm,
                                                  mask: X.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                  children: h,
                                              }),
                                              (0, n.jsx)("div", { className: ev.Zm }),
                                          ],
                                      })
                                    : h,
                            }),
                            c > 0 ? (0, n.jsx)(eN, { count: c }) : null,
                            u ? (0, n.jsx)(eb, { count: d }) : null,
                        ],
                    }),
                }),
        }),
    });
}
var eA = i(50172);
function ek() {
    let e = l.useRef(null),
        t = (0, r.bG)([o.A], () => o.A.isAnyThinking()),
        i = w.intl.string(C.default.uk6jhJ);
    return (0, n.jsx)(eo, {
        targetElementRef: e,
        children: (l, s) =>
            (0, n.jsx)(c.A, {
                ref: e,
                icon: d.D,
                tooltip: i,
                "aria-haspopup": "dialog",
                "aria-expanded": s,
                selected: s,
                onClick: l,
                overlay: t
                    ? (0, n.jsx)(d.D, {
                          className: a()(eA.bI, ea.T, { [eA.lL]: s }),
                          color: "currentColor",
                          size: "sm",
                          "aria-hidden": !0,
                      })
                    : null,
            }),
    });
}
function eI(e) {
    let { placement: t = "trailing" } = e,
        { leftEntrypoint: i, workingAnimation: l } = u.useConfig({ location: "AppTitleBar" });
    return i
        ? "leading" === t
            ? (0, n.jsx)(ey, { animated: l })
            : null
        : "trailing" === t
          ? (0, n.jsx)(ek, {})
          : null;
}
