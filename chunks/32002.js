(n.r(t), n.d(t, { default: () => eL }));
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    c = n(152367),
    d = n(189252),
    o = n(245179);
let u = (0, n(945810).mj)({
    name: "2026-10-desktop-conjure-title-bar",
    kind: "user",
    defaultConfig: { leftEntrypoint: !1, workingAnimation: !1 },
    variations: {
        0: { leftEntrypoint: !1, workingAnimation: !1 },
        1: { leftEntrypoint: !0, workingAnimation: !1 },
        2: { leftEntrypoint: !0, workingAnimation: !0 },
    },
});
var x = n(707554),
    j = n(297264),
    h = n(922016),
    m = n(305866),
    g = n(73153),
    f = n(964486),
    p = n(371169),
    v = n(16619),
    N = n(866665),
    b = n(408278),
    y = n(663341),
    k = n(980707),
    A = n(477782),
    I = n(950305),
    E = n(941985),
    C = n(248675),
    w = n(660183),
    G = n(749472);
function S(e) {
    let { guilds: t, forMeGuildId: n, onNavigate: s } = e,
        a = l.useRef(null),
        r = w.intl.string(C.default.sFiGNz);
    return (0, i.jsx)(h.Y, {
        targetElementRef: a,
        align: "right",
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(D, { guilds: t, forMeGuildId: n, onNavigate: s, onClose: l });
        },
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)("div", {
                ref: a,
                className: G.h,
                children: (0, i.jsx)(N.m, {
                    position: "bottom",
                    text: r,
                    asContainer: !0,
                    children: (0, i.jsx)(b.K, {
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
    let { guilds: t, forMeGuildId: n, onNavigate: l, onClose: s } = e,
        a = w.intl.string(C.default.sFiGNz);
    return (0, i.jsxs)(k.W, {
        "data-menu-migrated": !0,
        navId: "conjure-create",
        "aria-label": a,
        onClose: s,
        onSelect: s,
        children: [
            (0, i.jsx)(A.rX, {
                label: a,
                children: (0, i.jsx)(A.Dr, {
                    id: "conjure-create-user",
                    label: w.intl.string(C.default.UPLaGM),
                    icon: I.UserIcon,
                    disabled: null == n,
                    action: () => {
                        null != n && ((0, E.YN)(n), l());
                    },
                }),
            }),
            (0, i.jsx)(A.rX, {
                children:
                    0 === t.length
                        ? (0, i.jsx)(A.Dr, {
                              id: "conjure-create-empty",
                              disabled: !0,
                              label: w.intl.string(C.default["6aLvW5"]),
                          })
                        : t.map((e) =>
                              (0, i.jsx)(
                                  A.Dr,
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
var L = n(834730),
    M = n(683063),
    R = n(864970),
    z = n(939249),
    T = n(289873),
    _ = n(821609),
    P = n(364522),
    F = n(145497),
    B = n(967198),
    O = n(85428),
    $ = n(855793),
    J = n(260498),
    U = n(497183),
    X = n(217846),
    W = n(733123),
    Y = n(573435),
    Q = n(548118),
    q = n(807994);
function V(e) {
    let { project: t, guild: n } = e,
        s = l.useId();
    return (0, i.jsxs)("svg", {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        className: q.rv,
        "aria-hidden": !0,
        children: [
            (0, i.jsxs)("mask", {
                id: s,
                children: [
                    (0, i.jsx)("rect", { x: 0, y: 0, width: 44, height: 44, fill: "white" }),
                    (0, i.jsx)("rect", {
                        mask: `url(#${Y.hW.SQUIRCLE})`,
                        x: 26,
                        y: 26,
                        width: 24,
                        height: 24,
                        fill: "black",
                    }),
                ],
            }),
            (0, i.jsx)("foreignObject", {
                x: 0,
                y: 0,
                width: 44,
                height: 44,
                mask: `url(#${s})`,
                children: (0, i.jsx)(U.A, { project: t, size: "list" }),
            }),
            (0, i.jsx)("foreignObject", {
                x: 28,
                y: 28,
                width: 20,
                height: 20,
                mask: `url(#${Y.hW.SQUIRCLE})`,
                children: (0, i.jsx)(Q.Ay, { guild: n, size: Q.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 }),
            }),
        ],
    });
}
var K = n(731084),
    H = n(115982),
    Z = n(104317),
    ee = n(651438),
    et = n(874421),
    en = n(886540);
function ei(e, t) {
    var n, i;
    return null == e || null == t
        ? e === t
        : e.activityLine === t.activityLine &&
              e.startedAt === t.startedAt &&
              ((n = e.helpers),
              (i = t.helpers),
              n.length === i.length &&
                  n.every((e, t) => {
                      let n = i[t];
                      return (
                          e.key === n.key && e.name === n.name && e.line === n.line && e.mark.Illocon === n.mark.Illocon
                      );
                  }));
}
function el(e) {
    let { entry: t, trailing: n } = e;
    return (0, i.jsxs)("div", {
        className: q.G9,
        children: [
            (0, i.jsx)(L.E, { variant: "text-md/semibold", color: "text-strong", className: q.j1, children: t.name }),
            (0, i.jsx)(X.n, { projectId: t.projectId }),
            n,
        ],
    });
}
function es(e) {
    let { helpers: t } = e;
    return 0 === t.length
        ? null
        : (0, i.jsx)("span", {
              className: q._$,
              children: t.map((e) => {
                  let {
                      key: t,
                      mark: { Illocon: n },
                      name: l,
                      line: s,
                  } = e;
                  return (0, i.jsx)(
                      M.u,
                      {
                          asset: (0, i.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
                          assetSize: 32,
                          title: l,
                          body: s,
                          position: "bottom",
                          children: (0, i.jsx)("span", {
                              className: q.dw,
                              children: (0, i.jsx)(n, { size: 16, alt: l }),
                          }),
                      },
                      t,
                  );
              }),
          });
}
function ea(e) {
    var t;
    let { entry: n } = e,
        l =
            ((t = n.projectId),
            (0, r.bG)(
                [o.A],
                () => {
                    let e = (0, en.Ji)(o.A.getMessages(t));
                    return null == e
                        ? null
                        : {
                              activityLine:
                                  (0, Z.w)(e.steps) ??
                                  (0, K.Dy)({
                                      activity: o.A.getThinkingActivity(t),
                                      compacting: o.A.isCompacting(t),
                                      saving: o.A.isSaving(t),
                                  }),
                              startedAt: (0, et.S)(e),
                              helpers: (0, ee.k)((0, H.Jf)(e.steps, !0).tasks),
                          };
                },
                [t],
                ei,
            ));
    return null == l
        ? (0, i.jsx)(el, { entry: n })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(el, {
                      entry: n,
                      trailing: (0, i.jsxs)("span", {
                          className: q.j2,
                          children: [
                              (0, i.jsx)(es, { helpers: l.helpers }),
                              (0, i.jsx)(O.A, { startedAt: l.startedAt, variant: "text-xs/normal" }),
                          ],
                      }),
                  }),
                  (0, i.jsx)(R.o, {
                      text: l.activityLine,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      className: q.Bs,
                  }),
              ],
          });
}
function er(e) {
    let { entry: t } = e,
        n = (0, W.A)(t.project);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(el, { entry: t }),
            null == n
                ? null
                : (0, i.jsx)(L.E, { variant: "text-sm/normal", color: "text-subtle", className: q.Bs, children: n }),
        ],
    });
}
function ec(e) {
    let { entry: t } = e;
    switch (t.activity) {
        case "building":
            return (0, i.jsx)(ea, { entry: t });
        case "idle":
            return (0, i.jsx)(er, { entry: t });
        default:
            return (0, i.jsx)(el, { entry: t });
    }
}
function ed(e) {
    let { entry: t, fallbackGuildId: n, onNavigate: l } = e,
        s = t.guildId ?? n,
        { label: a } = (0, v.nM)(t);
    return (0, i.jsxs)("li", {
        className: q.dc,
        children: [
            (0, i.jsx)($.Ay, { projectId: t.projectId }),
            (0, i.jsx)(X.a, { projectId: t.projectId }),
            (0, i.jsxs)(z.D, {
                className: q.nM,
                "aria-label": a,
                "aria-disabled": null == s,
                "data-project-id": t.projectId,
                onClick: () => {
                    null != s && ((0, E.g7)(s, t.projectId), l());
                },
                children: [
                    null == t.guild || t.notInServer
                        ? (0, i.jsx)(U.A, { project: t.project, size: "list" })
                        : (0, i.jsx)(V, { project: t.project, guild: t.guild }),
                    (0, i.jsx)("div", { className: q.fw, children: (0, i.jsx)(ec, { entry: t }) }),
                ],
            }),
        ],
    });
}
function eo(e) {
    let { id: t, heading: n, entries: l, fallbackGuildId: s, onNavigate: a } = e;
    if (0 === l.length) return null;
    let r = `conjure-section-${t}`;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(j.D, { variant: "text-sm/medium", color: "text-subtle", id: r, className: q.SF, children: n }),
            (0, i.jsx)("ul", {
                className: q.p_,
                "aria-labelledby": r,
                children: l.map((e) => (0, i.jsx)(ed, { entry: e, fallbackGuildId: s, onNavigate: a }, e.projectId)),
            }),
        ],
    });
}
function eu(e) {
    let { guilds: t, forMeGuildId: n, onNavigate: l } = e,
        s = w.intl.string(C.default.UPLaGM);
    return (0, i.jsxs)("div", {
        className: q.p$,
        children: [
            (0, i.jsx)(L.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: w.intl.string(C.default.snY8uu),
            }),
            (0, i.jsx)(L.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children:
                    0 === t.length
                        ? w.intl.string(C.default.f5o5pk)
                        : w.intl.formatToPlainString(C.default.NiXcSi, { count: t.length }),
            }),
            (0, i.jsxs)("ul", {
                className: q.gc,
                children: [
                    null != n
                        ? (0, i.jsx)("li", {
                              children: (0, i.jsxs)(z.D, {
                                  className: q.b6,
                                  "aria-label": s,
                                  onClick: () => {
                                      ((0, E.YN)(n), l());
                                  },
                                  children: [
                                      (0, i.jsx)("span", {
                                          className: q.db,
                                          children: (0, i.jsx)(I.UserIcon, { size: "sm", color: "currentColor" }),
                                      }),
                                      (0, i.jsx)(L.E, {
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          className: q.qL,
                                          children: s,
                                      }),
                                  ],
                              }),
                          })
                        : null,
                    t.map((e) =>
                        (0, i.jsx)(
                            "li",
                            {
                                children: (0, i.jsxs)(z.D, {
                                    className: q.b6,
                                    "aria-label": e.name,
                                    onClick: () => {
                                        ((0, E.g7)(e.id), l());
                                    },
                                    children: [
                                        (0, i.jsx)(F.Ay, { guild: e, iconSize: 32, className: q.$f }),
                                        (0, i.jsx)(L.E, {
                                            variant: "text-sm/medium",
                                            color: "text-strong",
                                            className: q.qL,
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
function ex(e) {
    let { eligibleGuilds: t, forMeGuildId: n, onNavigate: l } = e,
        s = (0, v.qh)("VibegrationsProjectList"),
        a = (0, r.bG)([J.Ay], () => J.Ay.getProjectsFetchState()),
        c = (0, r.bG)([B.A], () => B.A.getGuildId()),
        d = t.find((e) => e.id === c)?.id ?? t[0]?.id ?? null,
        o = s.filter((e) => "idle" !== e.activity),
        u = s.filter((e) => "idle" === e.activity);
    return 0 === s.length
        ? null == a || "loading" === a.type
            ? (0, i.jsxs)("div", {
                  className: q.wk,
                  children: [
                      (0, i.jsx)(T.y, {}),
                      (0, i.jsx)(L.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: w.intl.string(C.default["XE+JXX"]),
                      }),
                  ],
              })
            : "error" === a.type
              ? (0, i.jsxs)("div", {
                    className: q.wk,
                    children: [
                        (0, i.jsx)(L.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: w.intl.string(C.default.DJAPMO),
                        }),
                        (0, i.jsx)(_.$, {
                            variant: "secondary",
                            size: "sm",
                            text: w.intl.string(C.default["WFJ/vb"]),
                            onClick: () => (0, p.hF)(),
                        }),
                    ],
                })
              : (0, i.jsx)(eu, { guilds: t, forMeGuildId: n, onNavigate: l })
        : (0, i.jsxs)(P.Ip, {
              fade: !0,
              className: q.XG,
              children: [
                  (0, i.jsx)(eo, {
                      id: "active",
                      heading: w.intl.string(C.default.DnsyEc),
                      entries: o,
                      fallbackGuildId: d,
                      onNavigate: l,
                  }),
                  (0, i.jsx)(eo, {
                      id: "idle",
                      heading: w.intl.string(C.default.p8lFfK),
                      entries: u,
                      fallbackGuildId: d,
                      onNavigate: l,
                  }),
              ],
          });
}
var ej = n(606128),
    eh = n(559962);
let em = "VibegrationsPopout";
function eg(e) {
    let { onNavigate: t } = e,
        n = w.intl.string(C.default.uk6jhJ),
        l = (0, v.z9)(em),
        s = (0, v.rX)(em);
    return (0, i.jsxs)("div", {
        className: a()(eh.kL, ej.T),
        children: [
            (0, i.jsx)("div", { className: eh._Q, children: (0, i.jsx)("span", { className: eh.Tp }) }),
            (0, i.jsx)("div", {
                className: eh.Qs,
                children: (0, i.jsx)(x.F, {
                    forceLevel: 1,
                    component: (0, i.jsxs)("header", {
                        className: eh.wx,
                        children: [
                            (0, i.jsx)(j.D, {
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                className: eh.DD,
                                children: n,
                            }),
                            (0, i.jsx)("div", {
                                className: eh.$s,
                                children: (0, i.jsx)(S, { guilds: l, forMeGuildId: s, onNavigate: t }),
                            }),
                        ],
                    }),
                    children: (0, i.jsx)(ex, { eligibleGuilds: l, forMeGuildId: s, onNavigate: t }),
                }),
            }),
        ],
    });
}
function ef(e) {
    let { children: t, targetElementRef: n, align: s = "right" } = e,
        [a, r] = l.useState(!1),
        c = l.useCallback(() => r(!1), []),
        d = l.useCallback(() => {
            r((e) => (e || (0, p.hF)(), !e));
        }, []);
    return (
        (0, f.Ay)(
            () => (g.h.subscribe("USER_SETTINGS_MODAL_OPEN", c), () => g.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", c)),
        ),
        (0, i.jsx)(h.Y, {
            targetElementRef: n,
            shouldShow: a,
            position: "bottom",
            align: s,
            spacing: 2,
            animation: h.Y.Animation.NONE,
            onRequestClose: c,
            renderPopout: () =>
                (0, i.jsx)(m.l, {
                    "aria-label": w.intl.string(C.default.uk6jhJ),
                    children: (0, i.jsx)(eg, { onNavigate: c }),
                }),
            children: (e, n) => {
                let { isShown: i } = n;
                return t(d, i, e);
            },
        })
    );
}
var ep = n(319354),
    ev = n(812993),
    eN = n(85463),
    eb = n(404373),
    ey = n(308665),
    ek = n(274158);
function eA() {
    return (0, i.jsxs)("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        focusable: !1,
        children: [
            (0, i.jsx)("path", { fill: "currentColor", d: ey.fy }),
            (0, i.jsx)("path", { fill: "currentColor", d: ey.tE, className: a()(ek.dQ, ek.ui) }),
            (0, i.jsx)("path", { fill: "currentColor", d: ey.tW, className: a()(ek.dQ, ek.Mb) }),
        ],
    });
}
function eI(e) {
    let { working: t } = e;
    return (0, i.jsxs)("span", {
        className: a()(ek.RB, ej.T, { [ek.Cc]: t }),
        "aria-hidden": !0,
        children: [(0, i.jsx)(eA, {}), (0, i.jsx)("span", { className: ek.q2, children: (0, i.jsx)(eA, {}) })],
    });
}
var eE = n(346994);
function eC(e) {
    let { count: t } = e,
        n = Math.min(t, 25),
        l = t > n;
    return (0, i.jsx)(ev.hV, {
        count: n,
        renderBadgeCount: (e) => (l ? `${e}+` : e),
        className: a()(ek.WK, { [ek.uP]: l }),
    });
}
function ew(e) {
    let { count: t } = e;
    return (0, i.jsx)(L.E, { variant: (0, eN.N)(), children: (0, ev.Gu)(t) });
}
function eG(e) {
    let { animated: t } = e,
        n = l.useRef(null),
        s = (0, r.bG)([o.A], () => o.A.isAnyThinking()),
        { unreadCount: c, badgeCount: d } = (0, eb.NC)(),
        u = 0 === d && c > 0,
        x = w.intl.string(C.default.uk6jhJ),
        j = [x, d > 0 ? w.intl.string(C.default.hfIuc7) : null, s ? w.intl.string(C.default["Y8pS+n"]) : null]
            .filter(Boolean)
            .join(", "),
        h = (0, i.jsx)(eI, { working: t && s });
    return (0, i.jsx)("div", {
        className: ek.NI,
        children: (0, i.jsx)(ef, {
            targetElementRef: n,
            align: "left",
            children: (e, t) =>
                (0, i.jsx)(N.m, {
                    asContainer: !0,
                    shouldShow: !t,
                    text: x,
                    children: (0, i.jsxs)(z.D, {
                        innerRef: n,
                        className: a()(eE.OV, ek.f_, { [ek.ho]: t }),
                        "aria-label": j,
                        "aria-haspopup": "dialog",
                        "aria-expanded": t,
                        onClick: e,
                        children: [
                            (0, i.jsx)("div", {
                                className: eE.P0,
                                children: u
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(Y.Ay, {
                                                  width: ep.E.sm,
                                                  height: ep.E.sm,
                                                  mask: Y.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                  children: h,
                                              }),
                                              (0, i.jsx)("div", { className: eE.Zm }),
                                          ],
                                      })
                                    : h,
                            }),
                            d > 0 ? (0, i.jsx)(eC, { count: d }) : null,
                            u ? (0, i.jsx)(ew, { count: c }) : null,
                        ],
                    }),
                }),
        }),
    });
}
var eS = n(50172);
function eD() {
    let e = l.useRef(null),
        t = (0, r.bG)([o.A], () => o.A.isAnyThinking()),
        n = w.intl.string(C.default.uk6jhJ);
    return (0, i.jsx)(ef, {
        targetElementRef: e,
        children: (l, s) =>
            (0, i.jsx)(d.A, {
                ref: e,
                icon: c.D,
                tooltip: n,
                "aria-haspopup": "dialog",
                "aria-expanded": s,
                selected: s,
                onClick: l,
                overlay: t
                    ? (0, i.jsx)(c.D, {
                          className: a()(eS.bI, ej.T, { [eS.lL]: s }),
                          color: "currentColor",
                          size: "sm",
                          "aria-hidden": !0,
                      })
                    : null,
            }),
    });
}
function eL(e) {
    let { placement: t = "trailing" } = e,
        { leftEntrypoint: n, workingAnimation: l } = u.useConfig({ location: "AppTitleBar" });
    return n
        ? "leading" === t
            ? (0, i.jsx)(eG, { animated: l })
            : null
        : "trailing" === t
          ? (0, i.jsx)(eD, {})
          : null;
}
