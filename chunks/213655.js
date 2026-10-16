(n.r(t), n.d(t, { default: () => eT }));
var l = n(477900),
    s = n(582128),
    i = n(503698),
    r = n.n(i),
    a = n(17928),
    c = n(319354),
    d = n(812993),
    u = n(834730),
    o = n(85463),
    j = n(866665),
    x = n(939249),
    h = n(573435),
    m = n(245179),
    g = n(404373),
    f = n(621466),
    p = n(305866),
    v = n(623646),
    N = n(707554),
    b = n(297264),
    y = n(922016),
    I = n(73153),
    k = n(964486),
    A = n(371169),
    E = n(16619),
    C = n(821609),
    w = n(980707),
    G = n(477782),
    S = n(950305),
    L = n(941985),
    D = n(248675),
    M = n(105292),
    z = n(749472);
function T(e) {
    let { guilds: t, forMeGuildId: n, onNavigate: i } = e,
        r = s.useRef(null),
        a = M.intl.string(D.default.sFiGNz);
    return (0, l.jsx)(y.Y, {
        targetElementRef: r,
        align: "right",
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, l.jsx)(R, { guilds: t, forMeGuildId: n, onNavigate: i, onClose: s });
        },
        children: (e) => {
            let { onClick: t } = e;
            return (0, l.jsx)("div", {
                ref: r,
                className: z.h,
                children: (0, l.jsx)(C.$, { variant: "secondary", size: "sm", text: a, onClick: t }),
            });
        },
    });
}
function R(e) {
    let { guilds: t, forMeGuildId: n, onNavigate: s, onClose: i } = e,
        r = M.intl.string(D.default.sFiGNz);
    return (0, l.jsxs)(w.W, {
        "data-menu-migrated": !0,
        navId: "conjure-create",
        "aria-label": r,
        onClose: i,
        onSelect: i,
        children: [
            (0, l.jsx)(G.rX, {
                label: r,
                children: (0, l.jsx)(G.Dr, {
                    id: "conjure-create-user",
                    label: M.intl.string(D.default.UPLaGM),
                    icon: S.UserIcon,
                    disabled: null == n,
                    action: () => {
                        null != n && ((0, L.YN)(n), s());
                    },
                }),
            }),
            (0, l.jsx)(G.rX, {
                children:
                    0 === t.length
                        ? (0, l.jsx)(G.Dr, {
                              id: "conjure-create-empty",
                              disabled: !0,
                              label: M.intl.string(D.default["6aLvW5"]),
                          })
                        : t.map((e) =>
                              (0, l.jsx)(
                                  G.Dr,
                                  {
                                      id: `conjure-create-${e.id}`,
                                      label: e.name,
                                      action: () => {
                                          ((0, L.g7)(e.id), s());
                                      },
                                  },
                                  e.id,
                              ),
                          ),
            }),
        ],
    });
}
n(321073);
var F = n(683063),
    U = n(864970),
    _ = n(289873),
    P = n(683438),
    O = n(364522),
    $ = n(104171),
    B = n(145497),
    X = n(995273),
    W = n(967198),
    J = n(287809),
    Y = n(427262),
    q = n(85428),
    Q = n(886540),
    H = n(855793),
    Z = n(260498),
    K = n(497183),
    V = n(217846),
    ee = n(548118),
    et = n(807994);
function en(e) {
    let { project: t, guild: n } = e,
        i = s.useId();
    return (0, l.jsxs)("svg", {
        width: 44,
        height: 44,
        viewBox: "0 0 44 44",
        className: et.rv,
        "aria-hidden": !0,
        children: [
            (0, l.jsxs)("mask", {
                id: i,
                children: [
                    (0, l.jsx)("rect", { x: 0, y: 0, width: 44, height: 44, fill: "white" }),
                    (0, l.jsx)("rect", {
                        mask: `url(#${h.hW.SQUIRCLE})`,
                        x: 26,
                        y: 26,
                        width: 24,
                        height: 24,
                        fill: "black",
                    }),
                ],
            }),
            (0, l.jsx)("foreignObject", {
                x: 0,
                y: 0,
                width: 44,
                height: 44,
                mask: `url(#${i})`,
                children: (0, l.jsx)(K.A, { project: t, size: "list", className: et.o }),
            }),
            (0, l.jsx)("foreignObject", {
                x: 28,
                y: 28,
                width: 20,
                height: 20,
                mask: `url(#${h.hW.SQUIRCLE})`,
                children: (0, l.jsx)(ee.Ay, { guild: n, size: ee.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 }),
            }),
        ],
    });
}
var el = n(731084),
    es = n(115982),
    ei = n(104317),
    er = n(651438),
    ea = n(874421);
function ec(e, t) {
    var n, l;
    return null == e || null == t
        ? e === t
        : e.activityLine === t.activityLine &&
              e.startedAt === t.startedAt &&
              ((n = e.helpers),
              (l = t.helpers),
              n.length === l.length &&
                  n.every((e, t) => {
                      let n = l[t];
                      return (
                          e.key === n.key && e.name === n.name && e.line === n.line && e.mark.Illocon === n.mark.Illocon
                      );
                  }));
}
function ed(e) {
    let { entry: t, trailing: n } = e;
    return (0, l.jsxs)("div", {
        className: et.G9,
        children: [
            (0, l.jsx)(u.E, { variant: "text-md/semibold", color: "text-strong", className: et.j1, children: t.name }),
            (0, l.jsx)(V.n, { projectId: t.projectId }),
            n,
        ],
    });
}
function eu(e) {
    let { helpers: t } = e;
    return 0 === t.length
        ? null
        : (0, l.jsx)("span", {
              className: et._$,
              children: t.map((e) => {
                  let {
                      key: t,
                      mark: { Illocon: n },
                      name: s,
                      line: i,
                  } = e;
                  return (0, l.jsx)(
                      F.u,
                      {
                          asset: (0, l.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
                          assetSize: 32,
                          title: s,
                          body: i,
                          position: "bottom",
                          children: (0, l.jsx)("span", {
                              className: et.dw,
                              children: (0, l.jsx)(n, { size: 16, alt: s }),
                          }),
                      },
                      t,
                  );
              }),
          });
}
function eo(e) {
    let { user: t } = e;
    return null == t
        ? null
        : (0, l.jsx)("span", {
              className: et.lX,
              "aria-hidden": !0,
              children: (0, l.jsx)($.Ay, { users: [t], max: 1, size: $.DN.SIZE_16 }),
          });
}
function ej(e) {
    let { time: t } = e;
    return t <= 0
        ? null
        : (0, l.jsx)("time", {
              dateTime: new Date(t).toISOString(),
              className: et.FG,
              children: (0, l.jsx)(u.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  tag: "span",
                  children: (0, X.jb)(t),
              }),
          });
}
function ex(e) {
    let { entry: t, conjuringUser: n } = e,
        { serverName: s } = (0, E.nM)(t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ed, { entry: t, trailing: (0, l.jsx)(eo, { user: n }) }),
            (0, l.jsxs)("div", {
                className: et.en,
                children: [
                    (0, l.jsx)(u.E, { variant: "text-sm/normal", color: "text-subtle", className: et.Bs, children: s }),
                    (0, l.jsx)(ej, { time: t.sortTime }),
                ],
            }),
        ],
    });
}
function eh(e) {
    var t;
    let { entry: n, conjuringUser: s } = e,
        i =
            ((t = n.projectId),
            (0, a.bG)(
                [m.A],
                () => {
                    let e = (0, Q.Ji)(m.A.getMessages(t));
                    return null == e
                        ? null
                        : {
                              activityLine:
                                  (0, ei.w)(e.steps) ??
                                  (0, el.Dy)({
                                      activity: m.A.getThinkingActivity(t),
                                      compacting: m.A.isCompacting(t),
                                      saving: m.A.isSaving(t),
                                  }),
                              startedAt: (0, ea.S)(e),
                              helpers: (0, er.k)((0, es.Jf)(e.steps, !0).tasks),
                          };
                },
                [t],
                ec,
            ));
    return null == i
        ? (0, l.jsx)(ex, { entry: n, conjuringUser: s })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(ed, {
                      entry: n,
                      trailing: (0, l.jsxs)("span", {
                          className: et.j2,
                          children: [
                              (0, l.jsx)(eo, { user: s }),
                              (0, l.jsx)(eu, { helpers: i.helpers }),
                              (0, l.jsx)(q.A, { startedAt: i.startedAt, variant: "text-xs/normal" }),
                          ],
                      }),
                  }),
                  (0, l.jsx)(U.o, {
                      text: i.activityLine,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      className: et.Bs,
                  }),
              ],
          });
}
function em(e) {
    let { entry: t, conjuringUser: n } = e;
    return "building" === t.activity
        ? (0, l.jsx)(eh, { entry: t, conjuringUser: n })
        : (0, l.jsx)(ex, { entry: t, conjuringUser: n });
}
function eg(e, t, n) {
    let l = e.guildId ?? t;
    null != l && ((0, L.g7)(l, e.projectId), n());
}
function ef(e) {
    let { entry: t, fallbackGuildId: n, showConjuringUser: s, onNavigate: i } = e,
        r = (0, a.bG)(
            [m.A, J.default],
            () => {
                if (!s) return null;
                let e = (0, Q.DZ)(m.A.getMessages(t.projectId));
                return null == e ? null : (J.default.getUser(e) ?? null);
            },
            [s, t.projectId],
        ),
        { label: c } = (0, E.nM)(t),
        d = null == r ? c : M.intl.formatToPlainString(D.default.mwlo1D, { label: c, name: (0, Y.mG)(r) });
    return (0, l.jsxs)("li", {
        className: et.dc,
        children: [
            (0, l.jsx)(H.Ay, { projectId: t.projectId }),
            (0, l.jsx)(V.a, { projectId: t.projectId }),
            (0, l.jsxs)(x.D, {
                className: et.nM,
                "aria-label": d,
                "aria-disabled": (t.guildId ?? n) == null,
                "data-project-id": t.projectId,
                onClick: () => eg(t, n, i),
                children: [
                    null == t.guild || t.notInServer
                        ? (0, l.jsx)(K.A, { project: t.project, size: "list" })
                        : (0, l.jsx)(en, { project: t.project, guild: t.guild }),
                    (0, l.jsx)("div", { className: et.fw, children: (0, l.jsx)(em, { entry: t, conjuringUser: r }) }),
                ],
            }),
        ],
    });
}
function ep(e) {
    let { id: t, heading: n, entries: s, fallbackGuildId: i, showConjuringUser: r = !1, onNavigate: a } = e;
    if (0 === s.length) return null;
    let c = `conjure-section-${t}`;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(b.D, { variant: "text-sm/medium", color: "text-subtle", id: c, className: et.SF, children: n }),
            (0, l.jsx)("ul", {
                className: et.p_,
                "aria-labelledby": c,
                children: s.map((e) =>
                    (0, l.jsx)(ef, { entry: e, fallbackGuildId: i, showConjuringUser: r, onNavigate: a }, e.projectId),
                ),
            }),
        ],
    });
}
function ev(e) {
    let { guilds: t, forMeGuildId: n, onNavigate: s } = e,
        i = M.intl.string(D.default.UPLaGM);
    return (0, l.jsxs)("div", {
        className: et.p$,
        children: [
            (0, l.jsx)(u.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: M.intl.string(D.default.snY8uu),
            }),
            (0, l.jsx)(u.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children:
                    0 === t.length
                        ? M.intl.string(D.default.f5o5pk)
                        : M.intl.formatToPlainString(D.default.NiXcSi, { count: t.length }),
            }),
            (0, l.jsxs)("ul", {
                className: et.gc,
                children: [
                    null != n
                        ? (0, l.jsx)("li", {
                              children: (0, l.jsxs)(x.D, {
                                  className: et.b6,
                                  "aria-label": i,
                                  onClick: () => {
                                      ((0, L.YN)(n), s());
                                  },
                                  children: [
                                      (0, l.jsx)("span", {
                                          className: et.db,
                                          children: (0, l.jsx)(S.UserIcon, { size: "sm", color: "currentColor" }),
                                      }),
                                      (0, l.jsx)(u.E, {
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          className: et.qL,
                                          children: i,
                                      }),
                                  ],
                              }),
                          })
                        : null,
                    t.map((e) =>
                        (0, l.jsx)(
                            "li",
                            {
                                children: (0, l.jsxs)(x.D, {
                                    className: et.b6,
                                    "aria-label": e.name,
                                    onClick: () => {
                                        ((0, L.g7)(e.id), s());
                                    },
                                    children: [
                                        (0, l.jsx)(B.Ay, { guild: e, iconSize: 32, className: et.$f }),
                                        (0, l.jsx)(u.E, {
                                            variant: "text-sm/medium",
                                            color: "text-strong",
                                            className: et.qL,
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
function eN(e) {
    let { results: t, fallbackGuildId: n, onNavigate: s } = e;
    return 0 === t.length
        ? (0, l.jsx)(u.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: et.kc,
              children: M.intl.string(D.default.X37fkR),
          })
        : (0, l.jsx)(ep, {
              id: "results",
              heading: M.intl.string(D.default.NH6fYn),
              entries: t,
              fallbackGuildId: n,
              onNavigate: s,
          });
}
function eb(e) {
    let t,
        n,
        { eligibleGuilds: i, forMeGuildId: r, onNavigate: c } = e,
        d = (0, E.qh)("ConjureProjectList"),
        o =
            ((t = (0, g.W5)()),
            (n = (0, a.yK)(
                [m.A, J.default],
                () => {
                    let e = J.default.getCurrentUser()?.id;
                    return d
                        .filter((t) => {
                            if (t.owned || "building" !== t.activity) return !1;
                            let n = (0, Q.DZ)(m.A.getMessages(t.projectId));
                            return null != n && n !== e;
                        })
                        .map((e) => e.projectId);
                },
                [d],
            )),
            s.useMemo(() => {
                let e = new Set(t),
                    l = new Set(n),
                    s = { unread: [], othersActive: [], yours: [] };
                for (let t of d)
                    e.has(t.projectId)
                        ? s.unread.push(t)
                        : t.owned
                          ? s.yours.push(t)
                          : s.othersActive.length < 3 && l.has(t.projectId) && s.othersActive.push(t);
                return s;
            }, [d, t, n])),
        j = (0, a.bG)([Z.Ay], () => Z.Ay.getProjectsFetchState()),
        x = (0, a.bG)([W.A], () => W.A.getGuildId()),
        [h, f] = s.useState(""),
        p = i.find((e) => e.id === x)?.id ?? i[0]?.id ?? null,
        v = h.trim().toLocaleLowerCase(),
        N = s.useMemo(
            () =>
                "" === v
                    ? null
                    : d.filter(
                          (e) =>
                              e.name.toLocaleLowerCase().includes(v) ||
                              (e.guildName?.toLocaleLowerCase().includes(v) ?? !1),
                      ),
            [d, v],
        );
    if (0 === d.length)
        return null == j || "loading" === j.type
            ? (0, l.jsxs)("div", {
                  className: et.wk,
                  children: [
                      (0, l.jsx)(_.y, {}),
                      (0, l.jsx)(u.E, {
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: M.intl.string(D.default["XE+JXX"]),
                      }),
                  ],
              })
            : "error" === j.type
              ? (0, l.jsxs)("div", {
                    className: et.wk,
                    children: [
                        (0, l.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: M.intl.string(D.default.DJAPMO),
                        }),
                        (0, l.jsx)(C.$, {
                            variant: "secondary",
                            size: "sm",
                            text: M.intl.string(D.default["WFJ/vb"]),
                            onClick: () => (0, A.hF)(),
                        }),
                    ],
                })
              : (0, l.jsx)(ev, { guilds: i, forMeGuildId: r, onNavigate: c });
    let b = M.intl.string(D.default.u0kEN9);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: et.$P,
                children: (0, l.jsx)(P.I, {
                    query: h,
                    onChange: f,
                    onClear: () => f(""),
                    size: "sm",
                    autoFocus: !0,
                    placeholder: b,
                    "aria-label": b,
                    onKeyDown: (e) => {
                        let t = N?.[0];
                        "Enter" === e.key && null != t && (e.preventDefault(), eg(t, p, c));
                    },
                }),
            }),
            (0, l.jsx)(O.Ip, {
                fade: !0,
                className: et.XG,
                children:
                    null != N
                        ? (0, l.jsx)(eN, { results: N, fallbackGuildId: p, onNavigate: c })
                        : (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(ep, {
                                      id: "needs-attention",
                                      heading: M.intl.string(D.default.kG5Ayb),
                                      entries: o.unread,
                                      fallbackGuildId: p,
                                      onNavigate: c,
                                  }),
                                  (0, l.jsx)(ep, {
                                      id: "others-active",
                                      heading: M.intl.string(D.default.NzzWuT),
                                      entries: o.othersActive,
                                      fallbackGuildId: p,
                                      showConjuringUser: !0,
                                      onNavigate: c,
                                  }),
                                  (0, l.jsx)(ep, {
                                      id: "yours",
                                      heading: M.intl.string(D.default.uj4icO),
                                      entries: o.yours,
                                      fallbackGuildId: p,
                                      onNavigate: c,
                                  }),
                              ],
                          }),
            }),
        ],
    });
}
var ey = n(606128),
    eI = n(559962);
let ek = "ConjurePopout";
function eA(e) {
    let { onNavigate: t } = e,
        n = M.intl.string(D.default.uk6jhJ),
        i = (0, E.z9)(ek),
        a = (0, E.rX)(ek),
        c = s.useRef(null);
    return (
        !(function (e) {
            let { setFocusLockDisabled: t } = s.useContext(p.M),
                n = s.useRef(t);
            (s.useEffect(() => {
                n.current = t;
            }, [t]),
                s.useEffect(() => {
                    let t,
                        l = !1;
                    function s(t) {
                        let s = e.current;
                        null == s ||
                            !(0, f.vq)(t.target, Element) ||
                            (0, v.H)(s, t.target) ||
                            ((l = !0), n.current?.(!0));
                    }
                    function i() {
                        l &&
                            (t = setTimeout(() => {
                                ((l = !1), n.current?.(!1));
                            }));
                    }
                    return (
                        document.addEventListener("pointerdown", s, !0),
                        document.addEventListener("pointerup", i, !0),
                        () => {
                            (clearTimeout(t),
                                document.removeEventListener("pointerdown", s, !0),
                                document.removeEventListener("pointerup", i, !0));
                        }
                    );
                }, [e]));
        })(c),
        (0, l.jsxs)("div", {
            ref: c,
            className: r()(eI.kL, ey.T),
            children: [
                (0, l.jsx)("div", { className: eI._Q, children: (0, l.jsx)("span", { className: eI.Tp }) }),
                (0, l.jsx)("div", {
                    className: eI.Qs,
                    children: (0, l.jsx)(N.F, {
                        forceLevel: 1,
                        component: (0, l.jsxs)("header", {
                            className: eI.wx,
                            children: [
                                (0, l.jsx)(b.D, {
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    className: eI.DD,
                                    children: n,
                                }),
                                (0, l.jsx)("div", {
                                    className: eI.$s,
                                    children: (0, l.jsx)(T, { guilds: i, forMeGuildId: a, onNavigate: t }),
                                }),
                            ],
                        }),
                        children: (0, l.jsx)(eb, { eligibleGuilds: i, forMeGuildId: a, onNavigate: t }),
                    }),
                }),
            ],
        })
    );
}
function eE(e) {
    let { children: t, targetElementRef: n, align: i = "right" } = e,
        [r, a] = s.useState(!1),
        c = s.useCallback(() => a(!1), []),
        d = s.useCallback(() => {
            a((e) => (e || (0, A.hF)(), !e));
        }, []);
    return (
        (0, k.Ay)(
            () => (I.h.subscribe("USER_SETTINGS_MODAL_OPEN", c), () => I.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", c)),
        ),
        (0, l.jsx)(y.Y, {
            targetElementRef: n,
            shouldShow: r,
            position: "bottom",
            align: i,
            spacing: 2,
            animation: y.Y.Animation.NONE,
            onRequestClose: c,
            renderPopout: () =>
                (0, l.jsx)(p.l, {
                    "aria-label": M.intl.string(D.default.uk6jhJ),
                    children: (0, l.jsx)(eA, { onNavigate: c }),
                }),
            children: (e, n) => {
                let { isShown: l } = n;
                return t(d, l, e);
            },
        })
    );
}
var eC = n(308665),
    ew = n(274158);
function eG() {
    return (0, l.jsxs)("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        focusable: !1,
        children: [
            (0, l.jsx)("path", { fill: "currentColor", d: eC.fy }),
            (0, l.jsx)("path", { fill: "currentColor", d: eC.tE, className: r()(ew.dQ, ew.ui) }),
            (0, l.jsx)("path", { fill: "currentColor", d: eC.tW, className: r()(ew.dQ, ew.Mb) }),
        ],
    });
}
function eS(e) {
    let { working: t } = e;
    return (0, l.jsxs)("span", {
        className: r()(ew.RB, ey.T, { [ew.Cc]: t }),
        "aria-hidden": !0,
        children: [(0, l.jsx)(eG, {}), (0, l.jsx)("span", { className: ew.q2, children: (0, l.jsx)(eG, {}) })],
    });
}
n(445368);
var eL = n(346994);
function eD(e) {
    let { count: t } = e,
        n = Math.min(t, 25),
        s = t > n;
    return (0, l.jsx)(d.hV, {
        count: n,
        renderBadgeCount: (e) => (s ? `${e}+` : e),
        className: r()(ew.WK, { [ew.uP]: s }),
    });
}
function eM(e) {
    let { count: t } = e;
    return (0, l.jsx)(u.E, { variant: (0, o.N)(), children: (0, d.Gu)(t) });
}
function ez() {
    let e = s.useRef(null),
        t = (0, a.bG)([m.A], () => m.A.isAnyThinking()),
        { unreadCount: n, badgeCount: i } = (0, g.NC)(),
        d = 0 === i && n > 0,
        u = M.intl.string(D.default.uk6jhJ),
        o = [u, i > 0 ? M.intl.string(D.default.hfIuc7) : null, t ? M.intl.string(D.default["Y8pS+n"]) : null]
            .filter(Boolean)
            .join(", "),
        f = (0, l.jsx)(eS, { working: t });
    return (0, l.jsx)("div", {
        className: ew.NI,
        children: (0, l.jsx)(eE, {
            targetElementRef: e,
            align: "left",
            children: (t, s) =>
                (0, l.jsx)(j.m, {
                    asContainer: !0,
                    shouldShow: !s,
                    text: u,
                    children: (0, l.jsxs)(x.D, {
                        innerRef: e,
                        className: r()(eL.OV, ew.f_, { [ew.ho]: s }),
                        "aria-label": o,
                        "aria-haspopup": "dialog",
                        "aria-expanded": s,
                        onClick: t,
                        children: [
                            (0, l.jsx)("div", {
                                className: eL.P0,
                                children: d
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(h.Ay, {
                                                  width: c.E.sm,
                                                  height: c.E.sm,
                                                  mask: h.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                  children: f,
                                              }),
                                              (0, l.jsx)("div", { className: eL.Zm }),
                                          ],
                                      })
                                    : f,
                            }),
                            i > 0 ? (0, l.jsx)(eD, { count: i }) : null,
                            d ? (0, l.jsx)(eM, { count: n }) : null,
                        ],
                    }),
                }),
        }),
    });
}
function eT(e) {
    let { placement: t } = e;
    return "leading" === t ? (0, l.jsx)(ez, {}) : null;
}
