n.d(e, { A: () => tf });
var s = n(627968),
    i = n(821609),
    o = n(801365),
    r = n(662940),
    a = n(764336),
    u = n(79545),
    l = n(412703),
    c = n(201274),
    C = n(590202),
    d = n(792620),
    E = n(814793),
    x = n(753386),
    A = n(617986),
    T = n(190107),
    I = n(375708);
function _(t, e) {
    return l.o.VIDEO.has(t) ? C.Cy.WATCH_VIDEO : (0, E.vA)(e) ? C.Cy.START_QUEST : C.Cy.ACCEPT_QUEST;
}
function O(t, e, n, s) {
    let { launchInGameActivity: i } = (0, c.zW)(t);
    return (0, d.K$)(t)
        ? () => {
              (0, A.Fy)(t);
          }
        : (0, d.IO)(t)
          ? () => {
                (0, A.d5)({ quest: t, questContent: e, sourceQuestContent: n, sourceQuestContentCTA: s });
            }
          : (0, E.vA)(t)
            ? () => {
                  i();
              }
            : null;
}
let f = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: a,
                size: l,
                surface: C,
            } = t,
            f = (0, c.fc)(e),
            N = O(e, o, a, _(n, e)),
            y = C === u.V3.QUEST_HOME_TILE_V2_FOOTER,
            L = y ? (0, A.Q_)(e) : (0, A.Oz)(e),
            g = y
                ? (0, r.C0)(e)
                : (function (t, e) {
                      if ((0, d.K$)(t)) return I.intl.string(I.t["/cXIc6"]);
                      if ((0, d.IO)(t)) return (0, x.WM)(e);
                      if ((0, E.vA)(t))
                          return (0, d.Ov)(t)
                              ? I.intl.string(I.t.CkUzLd)
                              : (0, d.vl)(t)
                                ? t.config.features.includes(T.Li.CLOUD_GAMING_ACTIVITY)
                                    ? I.intl.string(I.t["+qoymD"])
                                    : I.intl.string(I.t.E4kW5O)
                                : I.intl.string(I.t.l7E81v);
                      return I.intl.string(I.t["9KoPyB"]);
                  })(e, f);
        return null == N
            ? (0, s.jsx)(i.$, { size: l, variant: "secondary", disabled: !0, text: g, fullWidth: !0 })
            : (0, s.jsx)(i.$, { size: l, variant: (0, u.wX)(C), onClick: N, text: g, icon: L, fullWidth: !0 });
    },
    N = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: l,
                analyticsCtxSourceQuestContent: c,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: d,
                size: E,
                surface: x,
            } = t,
            A = x === u.V3.QUEST_HOME_TILE_V2_FOOTER,
            T = (0, o.r7)(e.config) ? I.intl.string(I.t.bAGFz3) : I.intl.string(I.t.vTgCWx),
            f = (0, a.ix)({
                quest: e,
                questContent: l,
                questContentPosition: C,
                questContentRowIndex: d,
                sourceQuestContent: c,
            }),
            N = (0, r.vj)(e),
            y = O(e, l, c, _(n, e));
        return (0, s.jsx)(i.$, { variant: (0, u.wX)(x), fullWidth: !0, size: E, onClick: A ? y : f, text: A ? N : T });
    };
var y = n(17928),
    L = n(859703),
    g = n(630037);
let q = function (t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: a,
            size: l,
            surface: c,
        } = t,
        C = e.id,
        { isClaiming: d } = (0, y.cf)(
            [L.A],
            () => ({ isClaiming: L.A.isClaimingReward(C) || L.A.isFetchingRewardCode(C) }),
            [C],
        ),
        E = null != c && (0, u.P0)(c),
        x = (0, g.D)({
            quest: e,
            questContent: n,
            sourceQuestContent: o,
            questContentPosition: r,
            questContentRowIndex: a,
            shouldRedirectToQuestHome: E,
        });
    return (0, s.jsx)(i.$, {
        variant: (0, u.wX)(c),
        fullWidth: !0,
        size: l,
        loading: d,
        onClick: x,
        text: I.intl.string(I.t.cfY4PE),
    });
};
var m = n(64700),
    Q = n(323889),
    R = n(141628),
    S = n(274670),
    P = n(144779),
    h = n(24001),
    v = n(104886),
    D = n(18437),
    p = n(971649),
    j = n(651892),
    U = n(901406),
    b = n(862611),
    M = n(284846),
    w = n(862482),
    k = n(663417),
    V = n(775602),
    X = n(85964);
function W(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: u,
            animateRefreshIcon: l = !0,
        } = t,
        d = (0, D.Ut)(),
        E = (0, p.wW)(),
        x = (0, y.bG)([V.Ay], () => V.Ay.useReducedMotion),
        A = (0, a.Xf)({ useReducedMotion: x }),
        [T, _] = m.useState(!1),
        { startingConsoleQuest: O, startConsoleQuest: f } = (0, c.Wj)({
            questId: e.id,
            beforeRequest: () => {
                l ? A.startAnimation() : _(!0),
                    (0, v.E5)(v.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                        ? (0, S.r)({
                              type: P.F.CLICK_INTERNAL,
                              adCreativeType: Q.p.QUEST,
                              adCreativeId: e.id,
                              questContentCTA: C.Cy.DEFIBRILLATOR,
                              surfaceId: n,
                              sourceQuestContent: o,
                              impressionId: E(),
                              questContentPosition: r,
                              questContentRowIndex: u,
                          })
                        : d({
                              questId: e.id,
                              questContent: n,
                              questContentCTA: C.Cy.DEFIBRILLATOR,
                              questContentPosition: r,
                              questContentRowIndex: u,
                              sourceQuestContent: o,
                          });
            },
            afterRequest: () => {
                l ? A.stopAnimation() : _(!1);
            },
        });
    return l
        ? (0, s.jsx)(w.$n, {
              "data-migration-pending": !0,
              color: w.XD.PRIMARY,
              onClick: f,
              disabled: O,
              className: X.x,
              children: (0, s.jsxs)("div", { className: X.t, children: [A?.render(), I.intl.string(I.t.nPThNb)] }),
          })
        : (0, s.jsx)(i.$, {
              variant: "secondary",
              onClick: f,
              disabled: O,
              loading: T,
              fullWidth: !0,
              text: I.intl.string(I.t.cdd1iy),
              icon: k.f,
              iconPosition: "start",
          });
}
var K = n(922016),
    z = n(980707),
    F = n(477782),
    B = n(834730),
    Y = n(820081),
    G = n(900797),
    H = n(847374),
    $ = n(178540),
    J = n(988436),
    Z = n(909445),
    tt = n(661531),
    te = n(200192),
    tn = n(653766),
    ts = n(928264),
    ti = n(802516),
    to = n(22363),
    tr = n(403362),
    ta = n(652215);
function tu(t) {
    let {
            quest: e,
            supportedQuestConsoles: n,
            surface: o,
            size: r,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: d,
            analyticsCtxQuestContentRowIndex: E,
        } = t,
        { xboxAccounts: x, playstationAccounts: A } = (0, c.Du)(),
        _ = m.useMemo(() => {
            let t = new Set();
            return x.length > 0 && t.add(ta.fg2.XBOX), A.length > 0 && t.add(ta.fg2.PLAYSTATION), t;
        }, [x.length, A.length]),
        O = m.useContext(Z.J),
        [f, N] = (0, c.tZ)(e.id),
        [y, L] = m.useState(null),
        [g, q] = m.useState(!1),
        Q = m.useRef(null),
        R = (0, p.go)(),
        S = (0, $.O)((t) => t.errorHintsByQuestId.get(e.id)),
        P = m.useCallback(
            (t) => {
                if (f === T.fO.CONSOLE && y === t && _.has(t))
                    return S?.some((t) => (0, U.$J)(t) === y) ? "error" : "connected";
            },
            [f, y, S, _],
        ),
        h = m.useCallback(
            (t) => {
                if (t === T.fO.DESKTOP) {
                    L(null),
                        N(T.fO.DESKTOP),
                        (0, U.pu)(e, {
                            content: a,
                            ctaContent: C.Cy.OPEN_GAME_LINK,
                            impressionId: R,
                            sourceQuestContent: l,
                        });
                    return;
                }
                _.has(t) ||
                    (0, U.Ps)(
                        { quest: e },
                        {
                            content: a,
                            ctaContent: C.Cy.CONNECT_CONSOLE,
                            position: d,
                            rowIndex: E,
                            impressionId: R,
                            sourceQuestContent: l,
                        },
                        t,
                    ),
                    L(t),
                    N(T.fO.CONSOLE);
            },
            [_, N, e, a, d, E, l, R],
        ),
        v = m.useCallback(
            (t) => (t === T.fO.DESKTOP ? f === T.fO.DESKTOP : f === T.fO.CONSOLE && y === t && _.has(t)),
            [f, y, _],
        ),
        D = [
            ...n.map((t) => ({
                value: t,
                get label() {
                    return _.has(t)
                        ? I.intl.formatToPlainString(I.t.LEgD7t, {
                              platform: I.intl.string(t === ta.fg2.XBOX ? I.t.CoT7ML : I.t.fFl4jo),
                          })
                        : I.intl.formatToPlainString(I.t.XWSHTb, {
                              platform: I.intl.string(t === ta.fg2.XBOX ? I.t.CoT7ML : I.t.ikuLkv),
                          });
                },
            })),
            {
                value: T.fO.DESKTOP,
                get label() {
                    return I.intl.formatToPlainString(I.t.LEgD7t, { platform: I.intl.string(I.t.g6Dr44) });
                },
            },
        ];
    return (0, s.jsx)(K.Y, {
        targetElementRef: Q,
        position: "bottom",
        onRequestOpen: () => {
            O?.onMenuOpen(), q(!0);
        },
        onRequestClose: () => {
            O?.onMenuClose(), q(!1);
        },
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, s.jsx)("div", {
                style: { minWidth: Q.current?.offsetWidth },
                children: (0, s.jsxs)(z.W, {
                    "data-menu-migrated": !0,
                    navId: `play-quest-platform-select-${e.id}`,
                    "aria-label": I.intl.string(I.t["TWSB/5"]),
                    onClose: n,
                    onSelect: void 0,
                    children: [
                        (0, s.jsx)(F.rX, {
                            children: D.map((t) => {
                                let e = v(t.value),
                                    n = (function (t, e) {
                                        if ("connected" === e)
                                            return { icon: te.Q, color: tt.A.colors.ICON_FEEDBACK_POSITIVE.css };
                                        if ("error" === e)
                                            return { icon: tn.e, color: tt.A.colors.ICON_FEEDBACK_CRITICAL.css };
                                        switch (t) {
                                            case T.fO.DESKTOP:
                                                return { icon: ts.I, color: "currentColor" };
                                            case ta.fg2.XBOX:
                                                return { icon: ti.Y, color: "currentColor" };
                                            case ta.fg2.PLAYSTATION:
                                                return { icon: to.X, color: "currentColor" };
                                            default:
                                                return (0, tr.xb)(t);
                                        }
                                    })(t.value, P(t.value)),
                                    i = (function (t) {
                                        switch (t) {
                                            case T.fO.DESKTOP:
                                                return I.intl.string(I.t["QXc01+"]);
                                            case ta.fg2.XBOX:
                                                return I.intl.string(I.t.CoT7ML);
                                            case ta.fg2.PLAYSTATION:
                                                return I.intl.string(I.t.fFl4jo);
                                            default:
                                                return (0, tr.xb)(t);
                                        }
                                    })(t.value);
                                return (0, s.jsx)(
                                    F.Dr,
                                    {
                                        id: i,
                                        void_label: (0, s.jsx)(B.E, { variant: "text-md/normal", children: t.label }),
                                        action: () => h(t.value),
                                        leadingAccessory: { type: "icon", icon: n.icon, color: n.color },
                                        trailingIndicator: e
                                            ? { type: "icon", icon: Y.B, size: "refresh_sm", color: "currentColor" }
                                            : void 0,
                                    },
                                    i,
                                );
                            }),
                        }),
                        f === T.fO.CONSOLE &&
                            null != y &&
                            _.has(y) &&
                            (0, s.jsx)(F.rX, {
                                children: (0, s.jsx)(F.Dr, {
                                    id: "play-quest-platform-select-check-connection",
                                    void_label: (0, s.jsx)(B.E, {
                                        variant: "text-md/normal",
                                        children: I.intl.string(I.t.cdd1iy),
                                    }),
                                    action: () => {
                                        (0, J.i)({ quest: e, sourceQuestContent: l, refreshOnOpen: !0 });
                                    },
                                    leadingAccessory: { type: "icon", icon: k.f, color: "currentColor" },
                                }),
                            }),
                    ],
                }),
            });
        },
        children: (t) =>
            (0, s.jsx)(i.$, {
                buttonRef: Q,
                ...t,
                size: r,
                fullWidth: !0,
                variant: (0, u.wX)(o, "primary"),
                text: I.intl.string(I.t.U7cCLU),
                icon: g ? G.t : H.a,
                iconPosition: "end",
            }),
    });
}
function tl(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: o,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: l,
            size: d,
        } = t,
        E = (0, c.RR)({ quest: e }),
        x = (0, p.wW)(),
        A = (0, c.Vn)(e),
        T = (0, c.fc)(e),
        [_, O, f] = (0, c.Qo)(e, T);
    return A || _ === h.X0.DESKTOP
        ? (0, s.jsx)(i.$, {
              variant: "secondary",
              size: d,
              disabled: !0,
              text: I.intl.string(I.t["9KoPyB"]),
              fullWidth: !0,
          })
        : E && n === u.V3.QUEST_HOME_TILE_FOOTER
          ? (0, s.jsx)(i.$, {
                size: d,
                variant: "secondary",
                onClick: () => {
                    (0, U.se)(
                        { quest: e },
                        {
                            content: o,
                            ctaContent: C.Cy.CONNECT_CONSOLE,
                            position: a,
                            rowIndex: l,
                            impressionId: x(),
                            sourceQuestContent: r,
                        },
                    );
                },
                text: I.intl.string(I.t.Cfye4v),
                fullWidth: !0,
            })
          : (0, s.jsx)(W, {
                quest: e,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: a,
                analyticsCtxQuestContentRowIndex: l,
            });
}
function tc(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: o,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: l,
            size: c,
        } = t,
        { hasAlreadyLinked: d } = (0, M.U)(e),
        E = (0, p.wW)(),
        x = (0, D.Ut)();
    if (!0 === d)
        return n === u.V3.QUEST_BAR_FOOTER
            ? (0, s.jsx)(i.$, {
                  size: c,
                  fullWidth: !0,
                  variant: "secondary",
                  text: (0, j.wr)(e),
                  onClick: () =>
                      (0, U.pu)(e, {
                          content: o,
                          ctaContent: C.Cy.OPEN_GAME_LINK,
                          position: a,
                          impressionId: E(),
                          sourceQuestContent: r,
                      }),
              })
            : (0, s.jsx)(i.$, {
                  size: c,
                  fullWidth: !0,
                  variant: (0, u.wX)(n),
                  text: I.intl.string(I.t.SHZo2x),
                  onClick: () => (0, A._x)({ quest: e, sourceQuestContent: r }),
              });
    let T = n === u.V3.QUEST_HOME_TILE_V2_FOOTER;
    return (0, s.jsx)(i.$, {
        size: c,
        fullWidth: !0,
        variant: (0, u.wX)(n),
        icon: T ? void 0 : R.A,
        text: T ? I.intl.string(I.t.SHZo2x) : I.intl.string(I.t.sbdnpw),
        onClick: () => {
            (0, v.E5)(v.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                ? (0, S.r)({
                      type: P.F.CLICK_INTERNAL,
                      adCreativeType: Q.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: C.Cy.OPEN_ACCOUNT_LINK_MODAL,
                      surfaceId: o,
                      sourceQuestContent: r,
                      impressionId: E(),
                      questContentPosition: a,
                      questContentRowIndex: l,
                  })
                : x({
                      questId: e.id,
                      questContent: o,
                      questContentCTA: C.Cy.OPEN_ACCOUNT_LINK_MODAL,
                      questContentPosition: a,
                      questContentRowIndex: l,
                      sourceQuestContent: r,
                  }),
                (0, A._x)({ quest: e, sourceQuestContent: r });
        },
    });
}
function tC(t) {
    let { quest: e, analyticsCtxSourceQuestContent: n, size: o, parentContainerRef: r } = t,
        { applications: a } = (0, c.fc)(e);
    return (0, s.jsx)(b.A, {
        quest: e,
        sourceQuestContent: n,
        applications: a ?? [],
        targetElementRef: r,
        children: (t) =>
            (0, s.jsx)(i.$, { variant: "secondary", fullWidth: !0, size: o, text: I.intl.string(I.t["93PTEs"]), ...t }),
    });
}
function td(t) {
    let {
            quest: e,
            surface: n,
            size: o,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: c,
        } = t,
        d = (0, U.bg)(e),
        E = (0, p.wW)();
    return 0 === d.length
        ? (0, s.jsx)(i.$, {
              size: o,
              fullWidth: !0,
              variant: (0, u.wX)(n, "primary"),
              text: I.intl.string(I.t.U7cCLU),
              onClick: () =>
                  (0, U.pu)(e, {
                      content: r,
                      ctaContent: C.Cy.OPEN_GAME_LINK,
                      position: l,
                      impressionId: E(),
                      sourceQuestContent: a,
                  }),
          })
        : (0, s.jsx)(tu, {
              quest: e,
              supportedQuestConsoles: d,
              surface: n,
              size: o,
              analyticsCtxQuestContent: r,
              analyticsCtxSourceQuestContent: a,
              analyticsCtxQuestContentPosition: l,
              analyticsCtxQuestContentRowIndex: c,
          });
}
let tE = function (t) {
        let {
                quest: e,
                surface: n,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: a,
                analyticsCtxQuestContentRowIndex: l,
                size: c,
            } = t,
            C = m.useRef(null);
        return (0, d.I6)(e)
            ? (0, s.jsx)(tc, {
                  quest: e,
                  surface: n,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: a,
                  analyticsCtxQuestContentRowIndex: l,
                  size: c,
              })
            : (0, d.g5)(e) && n === u.V3.QUEST_HOME_TILE_FOOTER
              ? (0, s.jsx)(tl, {
                    quest: e,
                    surface: n,
                    size: c,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: a,
                    analyticsCtxQuestContentRowIndex: l,
                })
              : (0, E.ui)(e) && n === u.V3.QUEST_BAR_FOOTER
                ? (0, s.jsx)("div", {
                      ref: C,
                      children: (0, s.jsx)(tC, {
                          quest: e,
                          analyticsCtxSourceQuestContent: r,
                          size: c,
                          parentContainerRef: C,
                      }),
                  })
                : n === u.V3.QUEST_HOME_TILE_V2_FOOTER
                  ? (0, s.jsx)(td, {
                        quest: e,
                        surface: n,
                        size: c,
                        analyticsCtxQuestContent: o,
                        analyticsCtxSourceQuestContent: r,
                        analyticsCtxQuestContentPosition: a,
                        analyticsCtxQuestContentRowIndex: l,
                    })
                  : (0, s.jsx)(i.$, {
                        size: c,
                        variant: "secondary",
                        disabled: !0,
                        text: I.intl.string(I.t["9KoPyB"]),
                        fullWidth: !0,
                    });
    },
    tx = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: i,
            analyticsCtxQuestContent: o,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: u,
            size: l,
        } = t;
        return (0, d.GL)(e)
            ? (0, s.jsx)(tE, {
                  quest: e,
                  surface: i,
                  size: l,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: a,
                  analyticsCtxQuestContentRowIndex: u,
              })
            : (0, s.jsx)(f, {
                  quest: e,
                  taskType: n,
                  size: l,
                  surface: i,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
              });
    },
    tA = function (t) {
        let {
                quest: e,
                taskType: n,
                surface: o,
                size: r,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: d,
            } = t,
            E = (0, c.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" }),
            x = e.userStatus?.claimedAt != null;
        return o === u.V3.QUEST_HOME_TILE_FOOTER && x
            ? (0, s.jsx)(N, {
                  quest: e,
                  taskType: n,
                  size: r,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: l,
                  analyticsCtxQuestContentPosition: C,
                  analyticsCtxQuestContentRowIndex: d,
              })
            : (0, s.jsx)(i.$, {
                  variant: "secondary",
                  disabled: !0,
                  fullWidth: !0,
                  size: r,
                  text: I.intl.format(I.t["6p8BZx"], { expiryDate: E }),
              });
    },
    tT = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: o,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: c,
            size: C,
        } = t;
        return ((0, d.t)({ quest: e }) || (0, d.g5)(e)) && o === u.V3.QUEST_BAR_FOOTER && (0, E.ui)(e)
            ? (0, s.jsx)(i.$, {
                  size: C,
                  variant: "secondary",
                  disabled: !0,
                  text: I.intl.string(I.t["9KoPyB"]),
                  fullWidth: !0,
              })
            : (0, s.jsx)(tx, {
                  quest: e,
                  taskType: n,
                  surface: o,
                  analyticsCtxQuestContent: r,
                  analyticsCtxSourceQuestContent: a,
                  analyticsCtxQuestContentPosition: l,
                  analyticsCtxQuestContentRowIndex: c,
                  size: C,
              });
    };
var tI = n(352774);
function t_(t) {
    switch (t) {
        case l.n.ACHIEVEMENT_IN_ACTIVITY:
        case l.n.PLAY_ACTIVITY:
        case l.n.WATCH_VIDEO:
            return C.Cy.START_QUEST;
        default:
            return C.Cy.ACCEPT_QUEST;
    }
}
let tO = function (t) {
        var e;
        let {
                quest: n,
                taskType: o,
                size: a = "sm",
                surface: E,
                showPlayInstantlyLabel: _ = !1,
                preClickCallback: O,
                analyticsCtxQuestContent: f,
                analyticsCtxSourceQuestContent: N,
                analyticsCtxQuestContentPosition: g,
                analyticsCtxQuestContentRowIndex: q,
            } = t,
            m = {
                questContent: f,
                questContentCTA: t_(o),
                sourceQuestContent: N,
                questContentPosition: g,
                questContentRowIndex: q,
            },
            Q = n.id,
            R = E === u.V3.QUEST_HOME_TILE_V2_FOOTER,
            { isEnrolling: S } = (0, y.cf)([L.A], () => ({ isEnrolling: L.A.isEnrolling(Q) }), [Q]),
            P = R ? (0, A.Q_)(n) : (0, A.Oz)(n, _),
            h = (function (t, e, n, s, i) {
                let { launchInGameActivity: o } = (0, c.zW)(e),
                    r = (0, p.wW)(),
                    a = i === u.V3.QUEST_HOME_TILE_V2_FOOTER;
                if ((0, d.K$)(e))
                    return () => {
                        (0, A.Fy)(e);
                    };
                switch (t) {
                    case l.n.ACHIEVEMENT_IN_ACTIVITY:
                    case l.n.PLAY_ACTIVITY:
                        return () => {
                            o();
                        };
                    case l.n.ACHIEVEMENT_IN_GAME:
                        return a
                            ? () => {
                                  (0, A._x)({ quest: e, sourceQuestContent: s });
                              }
                            : null;
                    case l.n.PLAY_ON_DESKTOP:
                        return a && (0, d.no)(e)
                            ? () => {
                                  (0, U.pu)(e, {
                                      content: n,
                                      ctaContent: C.Cy.OPEN_GAME_LINK,
                                      impressionId: r(),
                                      sourceQuestContent: s,
                                  });
                              }
                            : null;
                    case l.n.PLAY_ON_XBOX:
                    case l.n.PLAY_ON_PLAYSTATION:
                    default:
                        return null;
                }
            })(o, n, f, N, E),
            v = R
                ? (0, r.C0)(n)
                : (function (t, e) {
                      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                          { features: s } = e.config;
                      switch (t) {
                          case l.n.WATCH_VIDEO:
                          case l.n.WATCH_VIDEO_ON_MOBILE:
                              return (0, x.WM)((0, d.Yh)(e));
                          case l.n.ACHIEVEMENT_IN_ACTIVITY:
                              return I.intl.string(I.t.CkUzLd);
                          case l.n.PLAY_ACTIVITY:
                              if (s.includes(T.Li.CLOUD_GAMING_ACTIVITY))
                                  return I.intl.string(n ? I.t.V5Qt9D : I.t["+qoymD"]);
                              return I.intl.string(I.t.E4kW5O);
                          default:
                              return I.intl.string(I.t.kUQLMJ);
                      }
                  })(o, n, _),
            D =
                ((e = h ?? void 0),
                o === l.n.WATCH_VIDEO
                    ? async () => {
                          await (0, A.e0)(n, {
                              questContent: m.questContent,
                              questContentCTA: m.questContentCTA,
                              sourceQuestContent: m.sourceQuestContent,
                              sourceQuestContentCTA: t_(o),
                              questContentPosition: m.questContentPosition,
                              questContentRowIndex: m.questContentRowIndex,
                          });
                      }
                    : async () => {
                          await (0, tI.Oy)(n.id, {
                              questContent: m.questContent,
                              questContentCTA: m.questContentCTA,
                              sourceQuestContent: m.sourceQuestContent,
                              questContentPosition: m.questContentPosition,
                              questContentRowIndex: m.questContentRowIndex,
                          }),
                              e?.();
                      });
        return (0, s.jsx)(i.$, {
            size: a,
            loading: S,
            variant: (0, u.wX)(E, "primary"),
            onClick: () => {
                O?.(), D();
            },
            text: v,
            icon: P,
            fullWidth: !0,
        });
    },
    tf = function (t) {
        let {
                quest: e,
                surface: n,
                preClickCallback: o,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: l,
                analyticsCtxQuestContentRowIndex: c,
                size: C = "md",
                showPlayInstantlyLabel: d,
            } = t,
            E = (0, u.Pd)(e);
        if (0 === Object.keys(e.config.taskConfigV2.tasks).length)
            return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: "sm", text: I.intl.string(I.t.P84bAD) });
        let x = Object.values(e.config.taskConfigV2.tasks)[0];
        switch (E) {
            case u.UA.UNENROLLED:
                return (0, s.jsx)(tO, {
                    quest: e,
                    taskType: x.type,
                    size: C,
                    surface: n,
                    showPlayInstantlyLabel: d,
                    preClickCallback: o,
                    analyticsCtxQuestContent: r,
                    analyticsCtxSourceQuestContent: a,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case u.UA.ENROLLED:
                return (0, s.jsx)(tx, {
                    quest: e,
                    taskType: x.type,
                    size: C,
                    analyticsCtxQuestContent: r,
                    analyticsCtxSourceQuestContent: a,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: c,
                    surface: n,
                });
            case u.UA.INCOMPLETE:
                return (0, s.jsx)(tT, {
                    quest: e,
                    taskType: x.type,
                    size: C,
                    analyticsCtxQuestContent: r,
                    analyticsCtxSourceQuestContent: a,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: c,
                    surface: n,
                });
            case u.UA.EXPIRED_CLAIMABLE:
            case u.UA.COMPLETED:
                return (0, s.jsx)(q, {
                    quest: e,
                    size: C,
                    surface: n,
                    analyticsCtxQuestContent: r,
                    analyticsCtxSourceQuestContent: a,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case u.UA.CLAIMED:
                return (0, s.jsx)(N, {
                    quest: e,
                    taskType: x.type,
                    size: C,
                    surface: n,
                    analyticsCtxQuestContent: r,
                    analyticsCtxSourceQuestContent: a,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case u.UA.EXPIRED:
                return (0, s.jsx)(tA, {
                    quest: e,
                    taskType: x.type,
                    surface: n,
                    size: C,
                    analyticsCtxQuestContent: r,
                    analyticsCtxSourceQuestContent: a,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: c,
                });
            default:
                return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: C, text: I.intl.string(I.t.P84bAD) });
        }
    };
