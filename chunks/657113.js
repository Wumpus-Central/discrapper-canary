n.d(e, { A: () => ty });
var s = n(627968),
    i = n(821609),
    o = n(801365),
    r = n(662940),
    u = n(764336),
    a = n(79545),
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
                analyticsCtxSourceQuestContent: u,
                size: l,
                surface: C,
            } = t,
            f = (0, c.fc)(e),
            N = O(e, o, u, _(n, e)),
            y = C === a.V3.QUEST_HOME_TILE_V2_FOOTER,
            L = y ? (0, A.Q_)(e).icon : (0, A.Oz)(e),
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
            : (0, s.jsx)(i.$, { size: l, variant: (0, a.wX)(C), onClick: N, text: g, icon: L, fullWidth: !0 });
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
            A = x === a.V3.QUEST_HOME_TILE_V2_FOOTER,
            T = (0, o.r7)(e.config) ? I.intl.string(I.t.bAGFz3) : I.intl.string(I.t.vTgCWx),
            f = (0, u.ix)({
                quest: e,
                questContent: l,
                questContentPosition: C,
                questContentRowIndex: d,
                sourceQuestContent: c,
            }),
            N = (0, r.vj)(e),
            y = O(e, l, c, _(n, e));
        return (0, s.jsx)(i.$, { variant: (0, a.wX)(x), fullWidth: !0, size: E, onClick: A ? y : f, text: A ? N : T });
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
            analyticsCtxQuestContentRowIndex: u,
            size: l,
            surface: c,
        } = t,
        C = e.id,
        { isClaiming: d } = (0, y.cf)(
            [L.A],
            () => ({ isClaiming: L.A.isClaimingReward(C) || L.A.isFetchingRewardCode(C) }),
            [C],
        ),
        E = null != c && (0, a.P0)(c),
        x = (0, g.D)({
            quest: e,
            questContent: n,
            sourceQuestContent: o,
            questContentPosition: r,
            questContentRowIndex: u,
            shouldRedirectToQuestHome: E,
        });
    return (0, s.jsx)(i.$, {
        variant: (0, a.wX)(c),
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
    S = n(509434),
    P = n(274670),
    h = n(144779),
    p = n(24001),
    v = n(104886),
    D = n(18437),
    j = n(971649),
    U = n(651892),
    b = n(901406),
    M = n(862611),
    w = n(284846),
    k = n(862482),
    V = n(663417),
    X = n(775602),
    W = n(85964);
function K(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: a,
            animateRefreshIcon: l = !0,
        } = t,
        d = (0, D.Ut)(),
        E = (0, j.wW)(),
        x = (0, y.bG)([X.Ay], () => X.Ay.useReducedMotion),
        A = (0, u.Xf)({ useReducedMotion: x }),
        [T, _] = m.useState(!1),
        { startingConsoleQuest: O, startConsoleQuest: f } = (0, c.Wj)({
            questId: e.id,
            beforeRequest: () => {
                l ? A.startAnimation() : _(!0),
                    (0, v.E5)(v.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                        ? (0, P.r)({
                              type: h.F.CLICK_INTERNAL,
                              adCreativeType: Q.p.QUEST,
                              adCreativeId: e.id,
                              questContentCTA: C.Cy.DEFIBRILLATOR,
                              surfaceId: n,
                              sourceQuestContent: o,
                              impressionId: E(),
                              questContentPosition: r,
                              questContentRowIndex: a,
                          })
                        : d({
                              questId: e.id,
                              questContent: n,
                              questContentCTA: C.Cy.DEFIBRILLATOR,
                              questContentPosition: r,
                              questContentRowIndex: a,
                              sourceQuestContent: o,
                          });
            },
            afterRequest: () => {
                l ? A.stopAnimation() : _(!1);
            },
        });
    return l
        ? (0, s.jsx)(k.$n, {
              "data-migration-pending": !0,
              color: k.XD.PRIMARY,
              onClick: f,
              disabled: O,
              className: W.x,
              children: (0, s.jsxs)("div", { className: W.t, children: [A?.render(), I.intl.string(I.t.nPThNb)] }),
          })
        : (0, s.jsx)(i.$, {
              variant: "secondary",
              onClick: f,
              disabled: O,
              loading: T,
              fullWidth: !0,
              text: I.intl.string(I.t.cdd1iy),
              icon: V.f,
              iconPosition: "start",
          });
}
var z = n(935399),
    F = n(922016),
    B = n(980707),
    Y = n(477782),
    G = n(834730),
    H = n(820081),
    $ = n(900797),
    Z = n(847374),
    J = n(178540),
    tt = n(988436),
    te = n(614972),
    tn = n(661531),
    ts = n(200192),
    ti = n(653766),
    to = n(928264),
    tr = n(802516),
    tu = n(22363),
    ta = n(403362),
    tl = n(652215);
function tc(t) {
    let {
            quest: e,
            supportedQuestConsoles: n,
            surface: o,
            size: r,
            analyticsCtxQuestContent: u,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: d,
            analyticsCtxQuestContentRowIndex: E,
        } = t,
        { xboxAccounts: x, playstationAccounts: A } = (0, c.Du)(),
        _ = m.useMemo(() => {
            let t = new Set();
            return x.length > 0 && t.add(tl.fg2.XBOX), A.length > 0 && t.add(tl.fg2.PLAYSTATION), t;
        }, [x.length, A.length]),
        O = m.useContext(te.q),
        [f, N] = (0, c.tZ)(e.id),
        [y, L] = m.useState(null),
        [g, q] = m.useState(O?.getAutoOpen() ?? !1),
        [Q, R] = m.useState(null),
        P = m.useRef(null),
        h = (0, j.go)(),
        p = (0, J.O)((t) => t.errorHintsByQuestId.get(e.id));
    (0, z.u5)(() => {
        g && O?.onMenuOpen();
    });
    let v = m.useCallback(
            (t) => {
                if (f === T.fO.CONSOLE && y === t && _.has(t))
                    return p?.some((t) => (0, b.$J)(t) === y) ? "error" : "connected";
            },
            [f, y, p, _],
        ),
        D = m.useCallback(
            (t) => {
                if (t === T.fO.DESKTOP) {
                    L(null),
                        N(T.fO.DESKTOP),
                        (0, b.pu)(e, {
                            content: u,
                            ctaContent: C.Cy.OPEN_GAME_LINK,
                            impressionId: h,
                            sourceQuestContent: l,
                        });
                    return;
                }
                _.has(t) ||
                    (0, b.Ps)(
                        { quest: e },
                        {
                            content: u,
                            ctaContent: C.Cy.CONNECT_CONSOLE,
                            position: d,
                            rowIndex: E,
                            impressionId: h,
                            sourceQuestContent: l,
                        },
                        t,
                    ),
                    L(t),
                    N(T.fO.CONSOLE);
            },
            [_, N, e, u, d, E, l, h],
        ),
        U = m.useCallback(
            (t) => (t === T.fO.DESKTOP ? f === T.fO.DESKTOP : f === T.fO.CONSOLE && y === t && _.has(t)),
            [f, y, _],
        ),
        M = [
            ...n.map((t) => ({
                value: t,
                get label() {
                    return _.has(t)
                        ? I.intl.formatToPlainString(I.t.LEgD7t, {
                              platform: I.intl.string(t === tl.fg2.XBOX ? I.t.CoT7ML : I.t.fFl4jo),
                          })
                        : I.intl.formatToPlainString(I.t.XWSHTb, {
                              platform: I.intl.string(t === tl.fg2.XBOX ? I.t.CoT7ML : I.t.ikuLkv),
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
    return (0, s.jsx)(F.Y, {
        targetElementRef: P,
        position: "bottom",
        shouldShow: g,
        onRequestOpen: () => {
            O?.onMenuOpen(), q(!0);
        },
        onRequestClose: () => {
            O?.onMenuClose(), q(!1), R(null);
        },
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, s.jsx)("div", {
                style: { minWidth: P.current?.offsetWidth },
                onMouseLeave: () => R(null),
                children: (0, s.jsxs)(B.W, {
                    "data-menu-migrated": !0,
                    navId: `play-quest-platform-select-${e.id}`,
                    "aria-label": I.intl.string(I.t["TWSB/5"]),
                    onClose: n,
                    onSelect: void 0,
                    children: [
                        (0, s.jsx)(Y.rX, {
                            children: M.map((t) => {
                                let e = U(t.value),
                                    n = t.value === T.fO.DESKTOP && Q === t.value,
                                    i = (function (t, e) {
                                        if ("connected" === e)
                                            return { icon: ts.Q, color: tn.A.colors.ICON_FEEDBACK_POSITIVE.css };
                                        if ("error" === e)
                                            return { icon: ti.e, color: tn.A.colors.ICON_FEEDBACK_CRITICAL.css };
                                        switch (t) {
                                            case T.fO.DESKTOP:
                                                return { icon: to.I, color: "currentColor" };
                                            case tl.fg2.XBOX:
                                                return { icon: tr.Y, color: "currentColor" };
                                            case tl.fg2.PLAYSTATION:
                                                return { icon: tu.X, color: "currentColor" };
                                            default:
                                                return (0, ta.xb)(t);
                                        }
                                    })(t.value, v(t.value)),
                                    o = (function (t) {
                                        switch (t) {
                                            case T.fO.DESKTOP:
                                                return I.intl.string(I.t["QXc01+"]);
                                            case tl.fg2.XBOX:
                                                return I.intl.string(I.t.CoT7ML);
                                            case tl.fg2.PLAYSTATION:
                                                return I.intl.string(I.t.fFl4jo);
                                            default:
                                                return (0, ta.xb)(t);
                                        }
                                    })(t.value);
                                return (0, s.jsx)(
                                    Y.Dr,
                                    {
                                        id: o,
                                        void_label: (0, s.jsx)(G.E, { variant: "text-md/normal", children: t.label }),
                                        action: () => D(t.value),
                                        onFocus: () => R(t.value),
                                        leadingAccessory: { type: "icon", icon: i.icon, color: i.color },
                                        trailingIndicator: n
                                            ? { type: "icon", icon: S.I, size: "refresh_sm", color: "currentColor" }
                                            : e
                                              ? { type: "icon", icon: H.B, size: "refresh_sm", color: "currentColor" }
                                              : void 0,
                                    },
                                    o,
                                );
                            }),
                        }),
                        f === T.fO.CONSOLE &&
                            null != y &&
                            _.has(y) &&
                            (0, s.jsx)(Y.rX, {
                                children: (0, s.jsx)(Y.Dr, {
                                    id: "play-quest-platform-select-check-connection",
                                    void_label: (0, s.jsx)(G.E, {
                                        variant: "text-md/normal",
                                        children: I.intl.string(I.t.cdd1iy),
                                    }),
                                    onFocus: () => R(null),
                                    action: () => {
                                        (0, tt.i)({ quest: e, sourceQuestContent: l, refreshOnOpen: !0 });
                                    },
                                    leadingAccessory: { type: "icon", icon: V.f, color: "currentColor" },
                                }),
                            }),
                    ],
                }),
            });
        },
        children: (t) =>
            (0, s.jsx)(i.$, {
                buttonRef: P,
                ...t,
                size: r,
                fullWidth: !0,
                variant: (0, a.wX)(o, "primary"),
                text: I.intl.string(I.t.U7cCLU),
                icon: g ? $.t : Z.a,
                iconPosition: "end",
            }),
    });
}
function tC(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: o,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: u,
            analyticsCtxQuestContentRowIndex: l,
            size: d,
        } = t,
        E = (0, c.RR)({ quest: e }),
        x = (0, j.wW)(),
        A = (0, c.Vn)(e),
        T = (0, c.fc)(e),
        [_, O, f] = (0, c.Qo)(e, T);
    return A || _ === p.X0.DESKTOP
        ? (0, s.jsx)(i.$, {
              variant: "secondary",
              size: d,
              disabled: !0,
              text: I.intl.string(I.t["9KoPyB"]),
              fullWidth: !0,
          })
        : E && n === a.V3.QUEST_HOME_TILE_FOOTER
          ? (0, s.jsx)(i.$, {
                size: d,
                variant: "secondary",
                onClick: () => {
                    (0, b.se)(
                        { quest: e },
                        {
                            content: o,
                            ctaContent: C.Cy.CONNECT_CONSOLE,
                            position: u,
                            rowIndex: l,
                            impressionId: x(),
                            sourceQuestContent: r,
                        },
                    );
                },
                text: I.intl.string(I.t.Cfye4v),
                fullWidth: !0,
            })
          : (0, s.jsx)(K, {
                quest: e,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: u,
                analyticsCtxQuestContentRowIndex: l,
            });
}
function td(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: o,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: u,
            analyticsCtxQuestContentRowIndex: l,
            size: c,
        } = t,
        { hasAlreadyLinked: d } = (0, w.U)(e),
        E = (0, j.wW)(),
        x = (0, D.Ut)();
    if (!0 === d)
        return n === a.V3.QUEST_BAR_FOOTER
            ? (0, s.jsx)(i.$, {
                  size: c,
                  fullWidth: !0,
                  variant: "secondary",
                  text: (0, U.wr)(e),
                  onClick: () =>
                      (0, b.pu)(e, {
                          content: o,
                          ctaContent: C.Cy.OPEN_GAME_LINK,
                          position: u,
                          impressionId: E(),
                          sourceQuestContent: r,
                      }),
              })
            : (0, s.jsx)(i.$, {
                  size: c,
                  fullWidth: !0,
                  variant: (0, a.wX)(n),
                  text: I.intl.string(I.t.SHZo2x),
                  onClick: () => (0, A._x)({ quest: e, sourceQuestContent: r }),
              });
    let T = n === a.V3.QUEST_HOME_TILE_V2_FOOTER;
    return (0, s.jsx)(i.$, {
        size: c,
        fullWidth: !0,
        variant: (0, a.wX)(n),
        icon: T ? void 0 : R.A,
        text: T ? I.intl.string(I.t.SHZo2x) : I.intl.string(I.t.sbdnpw),
        onClick: () => {
            (0, v.E5)(v.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                ? (0, P.r)({
                      type: h.F.CLICK_INTERNAL,
                      adCreativeType: Q.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: C.Cy.OPEN_ACCOUNT_LINK_MODAL,
                      surfaceId: o,
                      sourceQuestContent: r,
                      impressionId: E(),
                      questContentPosition: u,
                      questContentRowIndex: l,
                  })
                : x({
                      questId: e.id,
                      questContent: o,
                      questContentCTA: C.Cy.OPEN_ACCOUNT_LINK_MODAL,
                      questContentPosition: u,
                      questContentRowIndex: l,
                      sourceQuestContent: r,
                  }),
                (0, A._x)({ quest: e, sourceQuestContent: r });
        },
    });
}
function tE(t) {
    let { quest: e, analyticsCtxSourceQuestContent: n, size: o, parentContainerRef: r } = t,
        { applications: u } = (0, c.fc)(e);
    return (0, s.jsx)(M.A, {
        quest: e,
        sourceQuestContent: n,
        applications: u ?? [],
        targetElementRef: r,
        children: (t) =>
            (0, s.jsx)(i.$, { variant: "secondary", fullWidth: !0, size: o, text: I.intl.string(I.t["93PTEs"]), ...t }),
    });
}
function tx(t) {
    let {
            quest: e,
            surface: n,
            size: o,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: u,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: c,
        } = t,
        d = (0, b.bg)(e),
        E = (0, j.wW)();
    return 0 === d.length
        ? (0, s.jsx)(i.$, {
              size: o,
              fullWidth: !0,
              variant: (0, a.wX)(n, "primary"),
              text: I.intl.string(I.t.U7cCLU),
              icon: S.I,
              iconPosition: "end",
              onClick: () =>
                  (0, b.pu)(e, {
                      content: r,
                      ctaContent: C.Cy.OPEN_GAME_LINK,
                      position: l,
                      impressionId: E(),
                      sourceQuestContent: u,
                  }),
          })
        : (0, s.jsx)(tc, {
              quest: e,
              supportedQuestConsoles: d,
              surface: n,
              size: o,
              analyticsCtxQuestContent: r,
              analyticsCtxSourceQuestContent: u,
              analyticsCtxQuestContentPosition: l,
              analyticsCtxQuestContentRowIndex: c,
          });
}
let tA = function (t) {
        let {
                quest: e,
                surface: n,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: u,
                analyticsCtxQuestContentRowIndex: l,
                size: c,
            } = t,
            C = m.useRef(null);
        return (0, d.I6)(e)
            ? (0, s.jsx)(td, {
                  quest: e,
                  surface: n,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: u,
                  analyticsCtxQuestContentRowIndex: l,
                  size: c,
              })
            : (0, d.g5)(e) && n === a.V3.QUEST_HOME_TILE_FOOTER
              ? (0, s.jsx)(tC, {
                    quest: e,
                    surface: n,
                    size: c,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: l,
                })
              : (0, E.ui)(e) && n === a.V3.QUEST_BAR_FOOTER
                ? (0, s.jsx)("div", {
                      ref: C,
                      children: (0, s.jsx)(tE, {
                          quest: e,
                          analyticsCtxSourceQuestContent: r,
                          size: c,
                          parentContainerRef: C,
                      }),
                  })
                : n === a.V3.QUEST_HOME_TILE_V2_FOOTER
                  ? (0, s.jsx)(tx, {
                        quest: e,
                        surface: n,
                        size: c,
                        analyticsCtxQuestContent: o,
                        analyticsCtxSourceQuestContent: r,
                        analyticsCtxQuestContentPosition: u,
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
    tT = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: i,
            analyticsCtxQuestContent: o,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: u,
            analyticsCtxQuestContentRowIndex: a,
            size: l,
        } = t;
        return (0, d.GL)(e)
            ? (0, s.jsx)(tA, {
                  quest: e,
                  surface: i,
                  size: l,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: u,
                  analyticsCtxQuestContentRowIndex: a,
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
    tI = function (t) {
        let {
                quest: e,
                taskType: n,
                surface: o,
                size: r,
                analyticsCtxQuestContent: u,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: d,
            } = t,
            E = (0, c.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" }),
            x = e.userStatus?.claimedAt != null;
        return o === a.V3.QUEST_HOME_TILE_FOOTER && x
            ? (0, s.jsx)(N, {
                  quest: e,
                  taskType: n,
                  size: r,
                  analyticsCtxQuestContent: u,
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
    t_ = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: o,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: u,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: c,
            size: C,
        } = t;
        return ((0, d.t)({ quest: e }) || (0, d.g5)(e)) && o === a.V3.QUEST_BAR_FOOTER && (0, E.ui)(e)
            ? (0, s.jsx)(i.$, {
                  size: C,
                  variant: "secondary",
                  disabled: !0,
                  text: I.intl.string(I.t["9KoPyB"]),
                  fullWidth: !0,
              })
            : (0, s.jsx)(tT, {
                  quest: e,
                  taskType: n,
                  surface: o,
                  analyticsCtxQuestContent: r,
                  analyticsCtxSourceQuestContent: u,
                  analyticsCtxQuestContentPosition: l,
                  analyticsCtxQuestContentRowIndex: c,
                  size: C,
              });
    };
var tO = n(352774);
function tf(t) {
    switch (t) {
        case l.n.ACHIEVEMENT_IN_ACTIVITY:
        case l.n.PLAY_ACTIVITY:
        case l.n.WATCH_VIDEO:
            return C.Cy.START_QUEST;
        default:
            return C.Cy.ACCEPT_QUEST;
    }
}
let tN = function (t) {
        var e;
        let {
                quest: n,
                taskType: o,
                size: u = "sm",
                surface: E,
                showPlayInstantlyLabel: _ = !1,
                preClickCallback: O,
                analyticsCtxQuestContent: f,
                analyticsCtxSourceQuestContent: N,
                analyticsCtxQuestContentPosition: g,
                analyticsCtxQuestContentRowIndex: q,
            } = t,
            Q = {
                questContent: f,
                questContentCTA: tf(o),
                sourceQuestContent: N,
                questContentPosition: g,
                questContentRowIndex: q,
            },
            R = n.id,
            S = E === a.V3.QUEST_HOME_TILE_V2_FOOTER,
            { isEnrolling: P } = (0, y.cf)([L.A], () => ({ isEnrolling: L.A.isEnrolling(R) }), [R]),
            { icon: h, iconPosition: p } = S ? (0, A.Q_)(n) : { icon: (0, A.Oz)(n, _) },
            v = (function (t, e, n, s, i) {
                let { launchInGameActivity: o } = (0, c.zW)(e),
                    r = (0, j.wW)(),
                    u = m.useContext(te.q),
                    E = i === a.V3.QUEST_HOME_TILE_V2_FOOTER;
                if ((0, d.K$)(e))
                    return () => {
                        (0, A.Fy)(e);
                    };
                if (E && !(0, d.I6)(e) && (0, b.bg)(e).length > 0)
                    return () => {
                        u?.setAutoOpen(!0);
                    };
                switch (t) {
                    case l.n.ACHIEVEMENT_IN_ACTIVITY:
                    case l.n.PLAY_ACTIVITY:
                        return () => {
                            o();
                        };
                    case l.n.ACHIEVEMENT_IN_GAME:
                        return E
                            ? () => {
                                  (0, A._x)({ quest: e, sourceQuestContent: s });
                              }
                            : null;
                    case l.n.PLAY_ON_DESKTOP:
                        return E && (0, d.no)(e)
                            ? () => {
                                  (0, b.pu)(e, {
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
            D = S
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
            U =
                ((e = v ?? void 0),
                o === l.n.WATCH_VIDEO
                    ? async () => {
                          await (0, A.e0)(n, {
                              questContent: Q.questContent,
                              questContentCTA: Q.questContentCTA,
                              sourceQuestContent: Q.sourceQuestContent,
                              sourceQuestContentCTA: tf(o),
                              questContentPosition: Q.questContentPosition,
                              questContentRowIndex: Q.questContentRowIndex,
                          });
                      }
                    : async () => {
                          (
                              await (0, tO.Oy)(n.id, {
                                  questContent: Q.questContent,
                                  questContentCTA: Q.questContentCTA,
                                  sourceQuestContent: Q.sourceQuestContent,
                                  questContentPosition: Q.questContentPosition,
                                  questContentRowIndex: Q.questContentRowIndex,
                              })
                          ).type === tO.WM.SUCCESS && e?.();
                      });
        return (0, s.jsx)(i.$, {
            size: u,
            loading: P,
            variant: (0, a.wX)(E, "primary"),
            onClick: () => {
                O?.(), U();
            },
            text: D,
            icon: h,
            iconPosition: p,
            fullWidth: !0,
        });
    },
    ty = function (t) {
        let {
                quest: e,
                surface: n,
                preClickCallback: o,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: u,
                analyticsCtxQuestContentPosition: l,
                analyticsCtxQuestContentRowIndex: c,
                size: C = "md",
                showPlayInstantlyLabel: d,
            } = t,
            E = (0, a.Pd)(e);
        if (0 === Object.keys(e.config.taskConfigV2.tasks).length)
            return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: "sm", text: I.intl.string(I.t.P84bAD) });
        let x = Object.values(e.config.taskConfigV2.tasks)[0];
        switch (E) {
            case a.UA.UNENROLLED:
                return (0, s.jsx)(tN, {
                    quest: e,
                    taskType: x.type,
                    size: C,
                    surface: n,
                    showPlayInstantlyLabel: d,
                    preClickCallback: o,
                    analyticsCtxQuestContent: r,
                    analyticsCtxSourceQuestContent: u,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case a.UA.ENROLLED:
                return (0, s.jsx)(tT, {
                    quest: e,
                    taskType: x.type,
                    size: C,
                    analyticsCtxQuestContent: r,
                    analyticsCtxSourceQuestContent: u,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: c,
                    surface: n,
                });
            case a.UA.INCOMPLETE:
                return (0, s.jsx)(t_, {
                    quest: e,
                    taskType: x.type,
                    size: C,
                    analyticsCtxQuestContent: r,
                    analyticsCtxSourceQuestContent: u,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: c,
                    surface: n,
                });
            case a.UA.EXPIRED_CLAIMABLE:
            case a.UA.COMPLETED:
                return (0, s.jsx)(q, {
                    quest: e,
                    size: C,
                    surface: n,
                    analyticsCtxQuestContent: r,
                    analyticsCtxSourceQuestContent: u,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case a.UA.CLAIMED:
                return (0, s.jsx)(N, {
                    quest: e,
                    taskType: x.type,
                    size: C,
                    surface: n,
                    analyticsCtxQuestContent: r,
                    analyticsCtxSourceQuestContent: u,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case a.UA.EXPIRED:
                return (0, s.jsx)(tI, {
                    quest: e,
                    taskType: x.type,
                    surface: n,
                    size: C,
                    analyticsCtxQuestContent: r,
                    analyticsCtxSourceQuestContent: u,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: c,
                });
            default:
                return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: C, text: I.intl.string(I.t.P84bAD) });
        }
    };
