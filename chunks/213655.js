(l.r(t), l.d(t, { default: () => eM }));
var n = l(477900),
    s = l(582128),
    i = l(503698),
    r = l.n(i),
    a = l(17928),
    d = l(319354),
    c = l(812993),
    o = l(834730),
    u = l(85463),
    j = l(866665),
    x = l(939249),
    h = l(573435),
    m = l(245179),
    g = l(404373),
    f = l(707554),
    p = l(297264),
    v = l(922016),
    N = l(305866),
    b = l(73153),
    y = l(964486),
    I = l(371169),
    k = l(16619),
    A = l(821609),
    C = l(980707),
    w = l(477782),
    E = l(950305),
    G = l(941985),
    S = l(248675),
    D = l(660183),
    L = l(749472);
function M(e) {
    let { guilds: t, forMeGuildId: l, onNavigate: i } = e,
        r = s.useRef(null),
        a = D.intl.string(S.default.sFiGNz);
    return (0, n.jsx)(v.Y, {
        targetElementRef: r,
        align: "right",
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, n.jsx)(z, { guilds: t, forMeGuildId: l, onNavigate: i, onClose: s });
        },
        children: (e) => {
            let { onClick: t } = e;
            return (0, n.jsx)("div", {
                ref: r,
                className: L.h,
                children: (0, n.jsx)(A.$, { variant: "secondary", size: "sm", text: a, onClick: t }),
            });
        },
    });
}
function z(e) {
    let { guilds: t, forMeGuildId: l, onNavigate: s, onClose: i } = e,
        r = D.intl.string(S.default.sFiGNz);
    return (0, n.jsxs)(C.W, {
        "data-menu-migrated": !0,
        navId: "conjure-create",
        "aria-label": r,
        onClose: i,
        onSelect: i,
        children: [
            (0, n.jsx)(w.rX, {
                label: r,
                children: (0, n.jsx)(w.Dr, {
                    id: "conjure-create-user",
                    label: D.intl.string(S.default.UPLaGM),
                    icon: E.UserIcon,
                    disabled: null == l,
                    action: () => {
                        null != l && ((0, G.YN)(l), s());
                    },
                }),
            }),
            (0, n.jsx)(w.rX, {
                children:
                    0 === t.length
                        ? (0, n.jsx)(w.Dr, {
                              id: "conjure-create-empty",
                              disabled: !0,
                              label: D.intl.string(S.default["6aLvW5"]),
                          })
                        : t.map((e) =>
                              (0, n.jsx)(
                                  w.Dr,
                                  {
                                      id: `conjure-create-${e.id}`,
                                      label: e.name,
                                      action: () => {
                                          ((0, G.g7)(e.id), s());
                                      },
                                  },
                                  e.id,
                              ),
                          ),
            }),
        ],
    });
}
l(321073);
var F = l(683063),
    T = l(864970),
    U = l(289873),
    _ = l(683438),
    P = l(364522),
    R = l(104171),
    O = l(145497),
    $ = l(995273),
    B = l(967198),
    X = l(287809),
    W = l(427262),
    J = l(85428),
    Y = l(886540),
    q = l(855793),
    Q = l(260498),
    V = l(497183),
    Z = l(217846),
    H = l(548118),
    K = l(807994);
function ee(e) {
    let { project: t, guild: l } = e,
        i = s.useId();
    return (0, n.jsxs)("svg", {
        width: 44,
        height: 44,
        viewBox: "0 0 44 44",
        className: K.rv,
        "aria-hidden": !0,
        children: [
            (0, n.jsxs)("mask", {
                id: i,
                children: [
                    (0, n.jsx)("rect", { x: 0, y: 0, width: 44, height: 44, fill: "white" }),
                    (0, n.jsx)("rect", {
                        mask: `url(#${h.hW.SQUIRCLE})`,
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
                mask: `url(#${i})`,
                children: (0, n.jsx)(V.A, { project: t, size: "list", className: K.o }),
            }),
            (0, n.jsx)("foreignObject", {
                x: 28,
                y: 28,
                width: 20,
                height: 20,
                mask: `url(#${h.hW.SQUIRCLE})`,
                children: (0, n.jsx)(H.Ay, { guild: l, size: H.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 }),
            }),
        ],
    });
}
var et = l(731084),
    el = l(115982),
    en = l(104317),
    es = l(651438),
    ei = l(874421);
function er(e, t) {
    var l, n;
    return null == e || null == t
        ? e === t
        : e.activityLine === t.activityLine &&
              e.startedAt === t.startedAt &&
              ((l = e.helpers),
              (n = t.helpers),
              l.length === n.length &&
                  l.every((e, t) => {
                      let l = n[t];
                      return (
                          e.key === l.key && e.name === l.name && e.line === l.line && e.mark.Illocon === l.mark.Illocon
                      );
                  }));
}
function ea(e) {
    let { entry: t, trailing: l } = e;
    return (0, n.jsxs)("div", {
        className: K.G9,
        children: [
            (0, n.jsx)(o.E, { variant: "text-md/semibold", color: "text-strong", className: K.j1, children: t.name }),
            (0, n.jsx)(Z.n, { projectId: t.projectId }),
            l,
        ],
    });
}
function ed(e) {
    let { helpers: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsx)("span", {
              className: K._$,
              children: t.map((e) => {
                  let {
                      key: t,
                      mark: { Illocon: l },
                      name: s,
                      line: i,
                  } = e;
                  return (0, n.jsx)(
                      F.u,
                      {
                          asset: (0, n.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
                          assetSize: 32,
                          title: s,
                          body: i,
                          position: "bottom",
                          children: (0, n.jsx)("span", {
                              className: K.dw,
                              children: (0, n.jsx)(l, { size: 16, alt: s }),
                          }),
                      },
                      t,
                  );
              }),
          });
}
function ec(e) {
    let { user: t } = e;
    return null == t
        ? null
        : (0, n.jsx)("span", {
              className: K.lX,
              "aria-hidden": !0,
              children: (0, n.jsx)(R.Ay, { users: [t], max: 1, size: R.DN.SIZE_16 }),
          });
}
function eo(e) {
    let { time: t } = e;
    return t <= 0
        ? null
        : (0, n.jsx)("time", {
              dateTime: new Date(t).toISOString(),
              className: K.FG,
              children: (0, n.jsx)(o.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  tag: "span",
                  children: (0, $.jb)(t),
              }),
          });
}
function eu(e) {
    let { entry: t, conjuringUser: l } = e,
        { serverName: s } = (0, k.nM)(t);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ea, { entry: t, trailing: (0, n.jsx)(ec, { user: l }) }),
            (0, n.jsxs)("div", {
                className: K.en,
                children: [
                    (0, n.jsx)(o.E, { variant: "text-sm/normal", color: "text-subtle", className: K.Bs, children: s }),
                    (0, n.jsx)(eo, { time: t.sortTime }),
                ],
            }),
        ],
    });
}
function ej(e) {
    var t;
    let { entry: l, conjuringUser: s } = e,
        i =
            ((t = l.projectId),
            (0, a.bG)(
                [m.A],
                () => {
                    let e = (0, Y.Ji)(m.A.getMessages(t));
                    return null == e
                        ? null
                        : {
                              activityLine:
                                  (0, en.w)(e.steps) ??
                                  (0, et.Dy)({
                                      activity: m.A.getThinkingActivity(t),
                                      compacting: m.A.isCompacting(t),
                                      saving: m.A.isSaving(t),
                                  }),
                              startedAt: (0, ei.S)(e),
                              helpers: (0, es.k)((0, el.Jf)(e.steps, !0).tasks),
                          };
                },
                [t],
                er,
            ));
    return null == i
        ? (0, n.jsx)(eu, { entry: l, conjuringUser: s })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(ea, {
                      entry: l,
                      trailing: (0, n.jsxs)("span", {
                          className: K.j2,
                          children: [
                              (0, n.jsx)(ec, { user: s }),
                              (0, n.jsx)(ed, { helpers: i.helpers }),
                              (0, n.jsx)(J.A, { startedAt: i.startedAt, variant: "text-xs/normal" }),
                          ],
                      }),
                  }),
                  (0, n.jsx)(T.o, {
                      text: i.activityLine,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      className: K.Bs,
                  }),
              ],
          });
}
function ex(e) {
    let { entry: t, conjuringUser: l } = e;
    return "building" === t.activity
        ? (0, n.jsx)(ej, { entry: t, conjuringUser: l })
        : (0, n.jsx)(eu, { entry: t, conjuringUser: l });
}
function eh(e, t, l) {
    let n = e.guildId ?? t;
    null != n && ((0, G.g7)(n, e.projectId), l());
}
function em(e) {
    let { entry: t, fallbackGuildId: l, showConjuringUser: s, onNavigate: i } = e,
        r = (0, a.bG)(
            [m.A, X.default],
            () => {
                if (!s) return null;
                let e = (0, Y.DZ)(m.A.getMessages(t.projectId));
                return null == e ? null : (X.default.getUser(e) ?? null);
            },
            [s, t.projectId],
        ),
        { label: d } = (0, k.nM)(t),
        c = null == r ? d : D.intl.formatToPlainString(S.default.mwlo1D, { label: d, name: (0, W.mG)(r) });
    return (0, n.jsxs)("li", {
        className: K.dc,
        children: [
            (0, n.jsx)(q.Ay, { projectId: t.projectId }),
            (0, n.jsx)(Z.a, { projectId: t.projectId }),
            (0, n.jsxs)(x.D, {
                className: K.nM,
                "aria-label": c,
                "aria-disabled": (t.guildId ?? l) == null,
                "data-project-id": t.projectId,
                onClick: () => eh(t, l, i),
                children: [
                    null == t.guild || t.notInServer
                        ? (0, n.jsx)(V.A, { project: t.project, size: "list" })
                        : (0, n.jsx)(ee, { project: t.project, guild: t.guild }),
                    (0, n.jsx)("div", { className: K.fw, children: (0, n.jsx)(ex, { entry: t, conjuringUser: r }) }),
                ],
            }),
        ],
    });
}
function eg(e) {
    let { id: t, heading: l, entries: s, fallbackGuildId: i, showConjuringUser: r = !1, onNavigate: a } = e;
    if (0 === s.length) return null;
    let d = `conjure-section-${t}`;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(p.D, { variant: "text-sm/medium", color: "text-subtle", id: d, className: K.SF, children: l }),
            (0, n.jsx)("ul", {
                className: K.p_,
                "aria-labelledby": d,
                children: s.map((e) =>
                    (0, n.jsx)(em, { entry: e, fallbackGuildId: i, showConjuringUser: r, onNavigate: a }, e.projectId),
                ),
            }),
        ],
    });
}
function ef(e) {
    let { guilds: t, forMeGuildId: l, onNavigate: s } = e,
        i = D.intl.string(S.default.UPLaGM);
    return (0, n.jsxs)("div", {
        className: K.p$,
        children: [
            (0, n.jsx)(o.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: D.intl.string(S.default.snY8uu),
            }),
            (0, n.jsx)(o.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children:
                    0 === t.length
                        ? D.intl.string(S.default.f5o5pk)
                        : D.intl.formatToPlainString(S.default.NiXcSi, { count: t.length }),
            }),
            (0, n.jsxs)("ul", {
                className: K.gc,
                children: [
                    null != l
                        ? (0, n.jsx)("li", {
                              children: (0, n.jsxs)(x.D, {
                                  className: K.b6,
                                  "aria-label": i,
                                  onClick: () => {
                                      ((0, G.YN)(l), s());
                                  },
                                  children: [
                                      (0, n.jsx)("span", {
                                          className: K.db,
                                          children: (0, n.jsx)(E.UserIcon, { size: "sm", color: "currentColor" }),
                                      }),
                                      (0, n.jsx)(o.E, {
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          className: K.qL,
                                          children: i,
                                      }),
                                  ],
                              }),
                          })
                        : null,
                    t.map((e) =>
                        (0, n.jsx)(
                            "li",
                            {
                                children: (0, n.jsxs)(x.D, {
                                    className: K.b6,
                                    "aria-label": e.name,
                                    onClick: () => {
                                        ((0, G.g7)(e.id), s());
                                    },
                                    children: [
                                        (0, n.jsx)(O.Ay, { guild: e, iconSize: 32, className: K.$f }),
                                        (0, n.jsx)(o.E, {
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
function ep(e) {
    let { results: t, fallbackGuildId: l, onNavigate: s } = e;
    return 0 === t.length
        ? (0, n.jsx)(o.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: K.kc,
              children: D.intl.string(S.default.X37fkR),
          })
        : (0, n.jsx)(eg, {
              id: "results",
              heading: D.intl.string(S.default.NH6fYn),
              entries: t,
              fallbackGuildId: l,
              onNavigate: s,
          });
}
function ev(e) {
    let t,
        l,
        { eligibleGuilds: i, forMeGuildId: r, onNavigate: d } = e,
        c = (0, k.qh)("VibegrationsProjectList"),
        u =
            ((t = (0, g.W5)()),
            (l = (0, a.yK)(
                [m.A, X.default],
                () => {
                    let e = X.default.getCurrentUser()?.id;
                    return c
                        .filter((t) => {
                            if (t.owned || "building" !== t.activity) return !1;
                            let l = (0, Y.DZ)(m.A.getMessages(t.projectId));
                            return null != l && l !== e;
                        })
                        .map((e) => e.projectId);
                },
                [c],
            )),
            s.useMemo(() => {
                let e = new Set(t),
                    n = new Set(l),
                    s = { unread: [], othersActive: [], yours: [] };
                for (let t of c)
                    e.has(t.projectId)
                        ? s.unread.push(t)
                        : t.owned
                          ? s.yours.push(t)
                          : s.othersActive.length < 3 && n.has(t.projectId) && s.othersActive.push(t);
                return s;
            }, [c, t, l])),
        j = (0, a.bG)([Q.Ay], () => Q.Ay.getProjectsFetchState()),
        x = (0, a.bG)([B.A], () => B.A.getGuildId()),
        [h, f] = s.useState(""),
        p = i.find((e) => e.id === x)?.id ?? i[0]?.id ?? null,
        v = h.trim().toLocaleLowerCase(),
        N = s.useMemo(
            () =>
                "" === v
                    ? null
                    : c.filter(
                          (e) =>
                              e.name.toLocaleLowerCase().includes(v) ||
                              (e.guildName?.toLocaleLowerCase().includes(v) ?? !1),
                      ),
            [c, v],
        );
    if (0 === c.length)
        return null == j || "loading" === j.type
            ? (0, n.jsxs)("div", {
                  className: K.wk,
                  children: [
                      (0, n.jsx)(U.y, {}),
                      (0, n.jsx)(o.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: D.intl.string(S.default["XE+JXX"]),
                      }),
                  ],
              })
            : "error" === j.type
              ? (0, n.jsxs)("div", {
                    className: K.wk,
                    children: [
                        (0, n.jsx)(o.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: D.intl.string(S.default.DJAPMO),
                        }),
                        (0, n.jsx)(A.$, {
                            variant: "secondary",
                            size: "sm",
                            text: D.intl.string(S.default["WFJ/vb"]),
                            onClick: () => (0, I.hF)(),
                        }),
                    ],
                })
              : (0, n.jsx)(ef, { guilds: i, forMeGuildId: r, onNavigate: d });
    let b = D.intl.string(S.default.u0kEN9);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: K.$P,
                children: (0, n.jsx)(_.I, {
                    query: h,
                    onChange: f,
                    onClear: () => f(""),
                    size: "sm",
                    autoFocus: !0,
                    placeholder: b,
                    "aria-label": b,
                    onKeyDown: (e) => {
                        let t = N?.[0];
                        "Enter" === e.key && null != t && (e.preventDefault(), eh(t, p, d));
                    },
                }),
            }),
            (0, n.jsx)(P.Ip, {
                fade: !0,
                className: K.XG,
                children:
                    null != N
                        ? (0, n.jsx)(ep, { results: N, fallbackGuildId: p, onNavigate: d })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(eg, {
                                      id: "needs-attention",
                                      heading: D.intl.string(S.default.kG5Ayb),
                                      entries: u.unread,
                                      fallbackGuildId: p,
                                      onNavigate: d,
                                  }),
                                  (0, n.jsx)(eg, {
                                      id: "others-active",
                                      heading: D.intl.string(S.default.NzzWuT),
                                      entries: u.othersActive,
                                      fallbackGuildId: p,
                                      showConjuringUser: !0,
                                      onNavigate: d,
                                  }),
                                  (0, n.jsx)(eg, {
                                      id: "yours",
                                      heading: D.intl.string(S.default.uj4icO),
                                      entries: u.yours,
                                      fallbackGuildId: p,
                                      onNavigate: d,
                                  }),
                              ],
                          }),
            }),
        ],
    });
}
var eN = l(606128),
    eb = l(559962);
let ey = "VibegrationsPopout";
function eI(e) {
    let { onNavigate: t } = e,
        l = D.intl.string(S.default.uk6jhJ),
        s = (0, k.z9)(ey),
        i = (0, k.rX)(ey);
    return (0, n.jsxs)("div", {
        className: r()(eb.kL, eN.T),
        children: [
            (0, n.jsx)("div", { className: eb._Q, children: (0, n.jsx)("span", { className: eb.Tp }) }),
            (0, n.jsx)("div", {
                className: eb.Qs,
                children: (0, n.jsx)(f.F, {
                    forceLevel: 1,
                    component: (0, n.jsxs)("header", {
                        className: eb.wx,
                        children: [
                            (0, n.jsx)(p.D, {
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                className: eb.DD,
                                children: l,
                            }),
                            (0, n.jsx)("div", {
                                className: eb.$s,
                                children: (0, n.jsx)(M, { guilds: s, forMeGuildId: i, onNavigate: t }),
                            }),
                        ],
                    }),
                    children: (0, n.jsx)(ev, { eligibleGuilds: s, forMeGuildId: i, onNavigate: t }),
                }),
            }),
        ],
    });
}
function ek(e) {
    let { children: t, targetElementRef: l, align: i = "right" } = e,
        [r, a] = s.useState(!1),
        d = s.useCallback(() => a(!1), []),
        c = s.useCallback(() => {
            a((e) => (e || (0, I.hF)(), !e));
        }, []);
    return (
        (0, y.Ay)(
            () => (b.h.subscribe("USER_SETTINGS_MODAL_OPEN", d), () => b.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", d)),
        ),
        (0, n.jsx)(v.Y, {
            targetElementRef: l,
            shouldShow: r,
            position: "bottom",
            align: i,
            spacing: 2,
            animation: v.Y.Animation.NONE,
            onRequestClose: d,
            renderPopout: () =>
                (0, n.jsx)(N.l, {
                    "aria-label": D.intl.string(S.default.uk6jhJ),
                    children: (0, n.jsx)(eI, { onNavigate: d }),
                }),
            children: (e, l) => {
                let { isShown: n } = l;
                return t(c, n, e);
            },
        })
    );
}
var eA = l(308665),
    eC = l(274158);
function ew() {
    return (0, n.jsxs)("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        focusable: !1,
        children: [
            (0, n.jsx)("path", { fill: "currentColor", d: eA.fy }),
            (0, n.jsx)("path", { fill: "currentColor", d: eA.tE, className: r()(eC.dQ, eC.ui) }),
            (0, n.jsx)("path", { fill: "currentColor", d: eA.tW, className: r()(eC.dQ, eC.Mb) }),
        ],
    });
}
function eE(e) {
    let { working: t } = e;
    return (0, n.jsxs)("span", {
        className: r()(eC.RB, eN.T, { [eC.Cc]: t }),
        "aria-hidden": !0,
        children: [(0, n.jsx)(ew, {}), (0, n.jsx)("span", { className: eC.q2, children: (0, n.jsx)(ew, {}) })],
    });
}
var eG = l(346994);
function eS(e) {
    let { count: t } = e,
        l = Math.min(t, 25),
        s = t > l;
    return (0, n.jsx)(c.hV, {
        count: l,
        renderBadgeCount: (e) => (s ? `${e}+` : e),
        className: r()(eC.WK, { [eC.uP]: s }),
    });
}
function eD(e) {
    let { count: t } = e;
    return (0, n.jsx)(o.E, { variant: (0, u.N)(), children: (0, c.Gu)(t) });
}
function eL() {
    let e = s.useRef(null),
        t = (0, a.bG)([m.A], () => m.A.isAnyThinking()),
        { unreadCount: l, badgeCount: i } = (0, g.NC)(),
        c = 0 === i && l > 0,
        o = D.intl.string(S.default.uk6jhJ),
        u = [o, i > 0 ? D.intl.string(S.default.hfIuc7) : null, t ? D.intl.string(S.default["Y8pS+n"]) : null]
            .filter(Boolean)
            .join(", "),
        f = (0, n.jsx)(eE, { working: t });
    return (0, n.jsx)("div", {
        className: eC.NI,
        children: (0, n.jsx)(ek, {
            targetElementRef: e,
            align: "left",
            children: (t, s) =>
                (0, n.jsx)(j.m, {
                    asContainer: !0,
                    shouldShow: !s,
                    text: o,
                    children: (0, n.jsxs)(x.D, {
                        innerRef: e,
                        className: r()(eG.OV, eC.f_, { [eC.ho]: s }),
                        "aria-label": u,
                        "aria-haspopup": "dialog",
                        "aria-expanded": s,
                        onClick: t,
                        children: [
                            (0, n.jsx)("div", {
                                className: eG.P0,
                                children: c
                                    ? (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)(h.Ay, {
                                                  width: d.E.sm,
                                                  height: d.E.sm,
                                                  mask: h.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                  children: f,
                                              }),
                                              (0, n.jsx)("div", { className: eG.Zm }),
                                          ],
                                      })
                                    : f,
                            }),
                            i > 0 ? (0, n.jsx)(eS, { count: i }) : null,
                            c ? (0, n.jsx)(eD, { count: l }) : null,
                        ],
                    }),
                }),
        }),
    });
}
function eM(e) {
    let { placement: t } = e;
    return "leading" === t ? (0, n.jsx)(eL, {}) : null;
}
