n.d(e, { A: () => tO });
var s = n(627968),
    i = n(821609),
    o = n(801365),
    r = n(662940),
    a = n(764336),
    u = n(79545),
    l = n(412703),
    c = n(574677),
    C = n(590202),
    d = n(792620),
    E = n(814793),
    x = n(753386),
    T = n(617986),
    A = n(190107),
    I = n(375708);
function _(t, e) {
    return l.o.VIDEO.has(t) ? C.Cy.WATCH_VIDEO : (0, E.vA)(e) ? C.Cy.START_QUEST : C.Cy.ACCEPT_QUEST;
}
function f(t, e, n, s) {
    let { launchInGameActivity: i } = (0, c.zW)(t);
    return (0, d.K$)(t)
        ? () => {
              (0, T.Fy)(t);
          }
        : (0, d.IO)(t)
          ? () => {
                (0, T.d5)({ quest: t, questContent: e, sourceQuestContent: n, sourceQuestContentCTA: s });
            }
          : (0, E.vA)(t)
            ? () => {
                  i();
              }
            : null;
}
let O = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: a,
                size: l,
                surface: C,
            } = t,
            O = (0, c.fc)(e),
            N = f(e, o, a, _(n, e)),
            y = C === u.V3.QUEST_HOME_TILE_V2_FOOTER,
            L = y ? (0, T.Q_)(e) : (0, T.Oz)(e),
            q = y
                ? (0, r.C0)(e)
                : (function (t, e) {
                      if ((0, d.K$)(t)) return I.intl.string(I.t["/cXIc6"]);
                      if ((0, d.IO)(t)) return (0, x.WM)(e);
                      if ((0, E.vA)(t))
                          return (0, d.Ov)(t)
                              ? I.intl.string(I.t.CkUzLd)
                              : (0, d.vl)(t)
                                ? t.config.features.includes(A.Li.CLOUD_GAMING_ACTIVITY)
                                    ? I.intl.string(I.t["+qoymD"])
                                    : I.intl.string(I.t.E4kW5O)
                                : I.intl.string(I.t.l7E81v);
                      return I.intl.string(I.t["9KoPyB"]);
                  })(e, O);
        return null == N
            ? (0, s.jsx)(i.$, { size: l, variant: "secondary", disabled: !0, text: q, fullWidth: !0 })
            : (0, s.jsx)(i.$, { size: l, variant: (0, u.wX)(C), onClick: N, text: q, icon: L, fullWidth: !0 });
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
            T = x === u.V3.QUEST_HOME_TILE_V2_FOOTER,
            A = (0, o.r7)(e.config) ? I.intl.string(I.t.bAGFz3) : I.intl.string(I.t.vTgCWx),
            O = (0, a.ix)({
                quest: e,
                questContent: l,
                questContentPosition: C,
                questContentRowIndex: d,
                sourceQuestContent: c,
            }),
            N = (0, r.vj)(e),
            y = f(e, l, c, _(n, e));
        return (0, s.jsx)(i.$, { variant: (0, u.wX)(x), fullWidth: !0, size: E, onClick: T ? y : O, text: T ? N : A });
    };
var y = n(17928),
    L = n(859703),
    q = n(630037);
let g = function (t) {
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
        x = (0, q.D)({
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
    R = n(323889),
    Q = n(141628),
    S = n(274670),
    P = n(144779),
    h = n(24001),
    v = n(104886),
    D = n(18437),
    j = n(971649),
    p = n(651892),
    U = n(901406),
    b = n(862611),
    M = n(284846),
    w = n(862482),
    k = n(663417),
    V = n(775602),
    X = n(178540),
    z = n(411060);
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
        E = (0, j.wW)(),
        x = (0, y.bG)([V.Ay], () => V.Ay.useReducedMotion),
        T = (0, a.Xf)({ useReducedMotion: x }),
        A = (0, X.O)((t) => t.setErrorHints),
        [_, f] = m.useState(!1),
        { startingConsoleQuest: O, startConsoleQuest: N } = (0, c.Wj)({
            questId: e.id,
            beforeRequest: () => {
                l ? T.startAnimation() : f(!0),
                    (0, v.E5)(v.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                        ? (0, S.r)({
                              type: P.F.CLICK_INTERNAL,
                              adCreativeType: R.p.QUEST,
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
            afterRequest: (t) => {
                l ? T.stopAnimation() : f(!1), A(e.id, t);
            },
        });
    return l
        ? (0, s.jsx)(w.$n, {
              "data-migration-pending": !0,
              color: w.XD.PRIMARY,
              onClick: N,
              disabled: O,
              className: z.x,
              children: (0, s.jsxs)("div", { className: z.t, children: [T?.render(), I.intl.string(I.t.nPThNb)] }),
          })
        : (0, s.jsx)(i.$, {
              variant: "secondary",
              onClick: N,
              disabled: O,
              loading: _,
              fullWidth: !0,
              text: I.intl.string(I.t.cdd1iy),
              icon: k.f,
              iconPosition: "start",
          });
}
var F = n(922016),
    K = n(980707),
    B = n(477782),
    Y = n(834730),
    G = n(820081),
    H = n(900797),
    $ = n(847374),
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
        { xboxAccounts: x, playstationAccounts: T } = (0, c.Du)(),
        _ = m.useMemo(() => {
            let t = new Set();
            return x.length > 0 && t.add(ta.fg2.XBOX), T.length > 0 && t.add(ta.fg2.PLAYSTATION), t;
        }, [x.length, T.length]),
        f = m.useContext(Z.J),
        [O, N] = (0, c.tZ)(e.id),
        [y, L] = m.useState(null),
        [q, g] = m.useState(!1),
        R = m.useRef(null),
        Q = (0, j.go)(),
        S = (0, X.O)((t) => t.errorHintsByQuestId.get(e.id)),
        P = m.useMemo(() => (null == y ? [] : (S ?? []).filter((t) => (0, U.$J)(t) === y)), [S, y]),
        h = m.useCallback(
            (t) => {
                if (O === A.fO.CONSOLE && y === t && _.has(t))
                    return S?.some((t) => (0, U.$J)(t) === y) ? "error" : "connected";
            },
            [O, y, S, _],
        ),
        v = m.useCallback(
            (t) => {
                if (t === A.fO.DESKTOP) {
                    L(null), N(A.fO.DESKTOP);
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
                            impressionId: Q,
                            sourceQuestContent: l,
                        },
                        t,
                    ),
                    L(t),
                    N(A.fO.CONSOLE);
            },
            [_, N, e, a, d, E, l, Q],
        ),
        D = m.useCallback(
            (t) => (t === A.fO.DESKTOP ? O === A.fO.DESKTOP : O === A.fO.CONSOLE && y === t && _.has(t)),
            [O, y, _],
        ),
        p = [
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
                value: A.fO.DESKTOP,
                get label() {
                    return I.intl.formatToPlainString(I.t.LEgD7t, { platform: I.intl.string(I.t.g6Dr44) });
                },
            },
        ];
    return (0, s.jsx)(F.Y, {
        targetElementRef: R,
        position: "bottom",
        onRequestOpen: () => {
            f?.onMenuOpen(), g(!0);
        },
        onRequestClose: () => {
            f?.onMenuClose(), g(!1);
        },
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, s.jsx)("div", {
                style: { minWidth: R.current?.offsetWidth },
                children: (0, s.jsxs)(K.W, {
                    "data-menu-migrated": !0,
                    navId: `play-quest-platform-select-${e.id}`,
                    "aria-label": I.intl.string(I.t["TWSB/5"]),
                    onClose: n,
                    onSelect: void 0,
                    children: [
                        (0, s.jsx)(B.rX, {
                            children: p.map((t) => {
                                let e = D(t.value),
                                    n = (function (t, e) {
                                        if ("connected" === e)
                                            return { icon: te.Q, color: tt.A.colors.ICON_FEEDBACK_POSITIVE.css };
                                        if ("error" === e)
                                            return { icon: tn.e, color: tt.A.colors.ICON_FEEDBACK_CRITICAL.css };
                                        switch (t) {
                                            case A.fO.DESKTOP:
                                                return { icon: ts.I, color: "currentColor" };
                                            case ta.fg2.XBOX:
                                                return { icon: ti.Y, color: "currentColor" };
                                            case ta.fg2.PLAYSTATION:
                                                return { icon: to.X, color: "currentColor" };
                                            default:
                                                return (0, tr.xb)(t);
                                        }
                                    })(t.value, h(t.value)),
                                    i = (function (t) {
                                        switch (t) {
                                            case A.fO.DESKTOP:
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
                                    B.Dr,
                                    {
                                        id: i,
                                        void_label: (0, s.jsx)(Y.E, { variant: "text-md/normal", children: t.label }),
                                        action: () => v(t.value),
                                        leadingAccessory: { type: "icon", icon: n.icon, color: n.color },
                                        trailingIndicator: e
                                            ? { type: "icon", icon: G.B, size: "refresh_sm", color: "currentColor" }
                                            : void 0,
                                    },
                                    i,
                                );
                            }),
                        }),
                        O === A.fO.CONSOLE &&
                            null != y &&
                            _.has(y) &&
                            (0, s.jsx)(B.rX, {
                                children: (0, s.jsx)(B.Dr, {
                                    id: "play-quest-platform-select-check-connection",
                                    void_label: (0, s.jsx)(Y.E, {
                                        variant: "text-md/normal",
                                        children: I.intl.string(I.t.cdd1iy),
                                    }),
                                    action: () => {
                                        (0, J.i)({ quest: e, errorHints: P, sourceQuestContent: l, refreshOnOpen: !0 });
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
                buttonRef: R,
                ...t,
                size: r,
                fullWidth: !0,
                variant: (0, u.wX)(o, "primary"),
                text: I.intl.string(I.t.U7cCLU),
                icon: q ? H.t : $.a,
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
        x = (0, j.wW)(),
        T = (0, c.Vn)(e),
        A = (0, c.fc)(e),
        [_, f, O] = (0, c.Qo)(e, A);
    return T || _ === h.X0.DESKTOP
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
        E = (0, j.wW)(),
        x = (0, D.Ut)();
    if (!0 === d)
        return n === u.V3.QUEST_BAR_FOOTER
            ? (0, s.jsx)(i.$, {
                  size: c,
                  fullWidth: !0,
                  variant: "secondary",
                  text: (0, p.wr)(e),
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
                  onClick: () => (0, T._x)({ quest: e, sourceQuestContent: r }),
              });
    let A = n === u.V3.QUEST_HOME_TILE_V2_FOOTER;
    return (0, s.jsx)(i.$, {
        size: c,
        fullWidth: !0,
        variant: (0, u.wX)(n),
        icon: A ? void 0 : Q.A,
        text: A ? I.intl.string(I.t.SHZo2x) : I.intl.string(I.t.sbdnpw),
        onClick: () => {
            (0, v.E5)(v.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                ? (0, S.r)({
                      type: P.F.CLICK_INTERNAL,
                      adCreativeType: R.p.QUEST,
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
                (0, T._x)({ quest: e, sourceQuestContent: r });
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
        C = (0, U.bg)(e);
    return 0 === C.length
        ? (0, s.jsx)(i.$, { size: o, fullWidth: !0, variant: (0, u.wX)(n, "primary"), text: I.intl.string(I.t.U7cCLU) })
        : (0, s.jsx)(tu, {
              quest: e,
              supportedQuestConsoles: C,
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
            : (0, s.jsx)(O, {
                  quest: e,
                  taskType: n,
                  size: l,
                  surface: i,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
              });
    },
    tT = function (t) {
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
    tA = function (t) {
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
var tI = n(340124);
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
let tf = function (t) {
        var e;
        let {
                quest: n,
                taskType: o,
                size: a = "sm",
                surface: C,
                showPlayInstantlyLabel: E = !1,
                preClickCallback: _,
                analyticsCtxQuestContent: f,
                analyticsCtxSourceQuestContent: O,
                analyticsCtxQuestContentPosition: N,
                analyticsCtxQuestContentRowIndex: q,
            } = t,
            g = {
                questContent: f,
                questContentCTA: t_(o),
                sourceQuestContent: O,
                questContentPosition: N,
                questContentRowIndex: q,
            },
            m = n.id,
            R = C === u.V3.QUEST_HOME_TILE_V2_FOOTER,
            { isEnrolling: Q } = (0, y.cf)([L.A], () => ({ isEnrolling: L.A.isEnrolling(m) }), [m]),
            S = R ? (0, T.Q_)(n) : (0, T.Oz)(n, E),
            P = (function (t, e, n, s) {
                let { launchInGameActivity: i } = (0, c.zW)(e),
                    o = s === u.V3.QUEST_HOME_TILE_V2_FOOTER;
                if ((0, d.K$)(e))
                    return () => {
                        (0, T.Fy)(e);
                    };
                switch (t) {
                    case l.n.ACHIEVEMENT_IN_ACTIVITY:
                    case l.n.PLAY_ACTIVITY:
                        return () => {
                            i();
                        };
                    case l.n.ACHIEVEMENT_IN_GAME:
                        return o
                            ? () => {
                                  (0, T._x)({ quest: e, sourceQuestContent: n });
                              }
                            : null;
                    case l.n.PLAY_ON_XBOX:
                    case l.n.PLAY_ON_PLAYSTATION:
                    case l.n.PLAY_ON_DESKTOP:
                    default:
                        return null;
                }
            })(o, n, O, C),
            h = R
                ? (0, r.C0)(n)
                : (function (t, e) {
                      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                          { features: s } = e.config;
                      switch (t) {
                          case l.n.WATCH_VIDEO:
                              return (0, x.WM)((0, d.Yh)(e));
                          case l.n.ACHIEVEMENT_IN_ACTIVITY:
                              return I.intl.string(I.t.CkUzLd);
                          case l.n.PLAY_ACTIVITY:
                              if (s.includes(A.Li.CLOUD_GAMING_ACTIVITY))
                                  return I.intl.string(n ? I.t.V5Qt9D : I.t["+qoymD"]);
                              return I.intl.string(I.t.E4kW5O);
                          default:
                              return I.intl.string(I.t.kUQLMJ);
                      }
                  })(o, n, E),
            v =
                ((e = P ?? void 0),
                o === l.n.WATCH_VIDEO
                    ? async () => {
                          await (0, T.e0)(n, {
                              questContent: g.questContent,
                              questContentCTA: g.questContentCTA,
                              sourceQuestContent: g.sourceQuestContent,
                              sourceQuestContentCTA: t_(o),
                              questContentPosition: g.questContentPosition,
                              questContentRowIndex: g.questContentRowIndex,
                          });
                      }
                    : async () => {
                          await (0, tI.Oy)(n.id, {
                              questContent: g.questContent,
                              questContentCTA: g.questContentCTA,
                              sourceQuestContent: g.sourceQuestContent,
                              questContentPosition: g.questContentPosition,
                              questContentRowIndex: g.questContentRowIndex,
                          }),
                              e?.();
                      });
        return (0, s.jsx)(i.$, {
            size: a,
            loading: Q,
            variant: (0, u.wX)(C, "primary"),
            onClick: () => {
                _?.(), v();
            },
            text: h,
            icon: S,
            fullWidth: !0,
        });
    },
    tO = function (t) {
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
                return (0, s.jsx)(tf, {
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
                return (0, s.jsx)(tA, {
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
                return (0, s.jsx)(g, {
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
                return (0, s.jsx)(tT, {
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
