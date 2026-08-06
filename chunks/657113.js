n.d(e, { A: () => tL });
var s = n(477900),
    i = n(821609),
    o = n(514547),
    r = n(608935),
    u = n(801365),
    a = n(662940),
    l = n(764336),
    c = n(79545),
    C = n(412703),
    d = n(590202),
    E = n(792620),
    x = n(814793),
    A = n(753386),
    T = n(617986),
    I = n(190107),
    _ = n(375708);
function O(t, e) {
    return C.o.VIDEO.has(t) ? d.Cy.WATCH_VIDEO : (0, x.vA)(e) ? d.Cy.START_QUEST : d.Cy.ACCEPT_QUEST;
}
function f(t, e, n, s) {
    let { launchInGameActivity: i } = (0, o.zW)(t);
    return (0, E.K$)(t)
        ? () => {
              (0, T.Fy)(t);
          }
        : (0, E.IO)(t)
          ? () => {
                (0, T.d5)({ quest: t, questContent: e, sourceQuestContent: n, sourceQuestContentCTA: s });
            }
          : (0, x.vA)(t)
            ? () => {
                  i();
              }
            : null;
}
let N = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: u,
                size: l,
                surface: C,
                isQuestAccessSuspended: d = !1,
            } = t,
            N = (0, o.fc)(e),
            y = f(e, r, u, O(n, e)),
            L = C === c.V3.QUEST_HOME_TILE_V2_FOOTER,
            g = L ? (0, T.Q_)(e).icon : (0, T.Oz)(e),
            S = L
                ? (0, a.C0)(e)
                : (function (t, e) {
                      if ((0, E.K$)(t)) return _.intl.string(_.t["/cXIc6"]);
                      if ((0, E.IO)(t)) return (0, A.WM)(e);
                      if ((0, x.vA)(t))
                          return (0, E.Ov)(t)
                              ? _.intl.string(_.t.CkUzLd)
                              : (0, E.vl)(t)
                                ? t.config.features.includes(I.Li.CLOUD_GAMING_ACTIVITY)
                                    ? _.intl.string(_.t["+qoymD"])
                                    : _.intl.string(_.t.E4kW5O)
                                : _.intl.string(_.t.l7E81v);
                      return _.intl.string(_.t["9KoPyB"]);
                  })(e, N);
        return null == y
            ? (0, s.jsx)(i.$, { size: l, variant: "secondary", disabled: !0, text: S, fullWidth: !0 })
            : (0, s.jsx)(i.$, {
                  size: l,
                  variant: (0, c.wX)(C),
                  onClick: d ? T.FS : y,
                  text: S,
                  icon: g,
                  fullWidth: !0,
                  "aria-disabled": d || void 0,
              });
    },
    y = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: d,
                size: E,
                surface: x,
            } = t,
            A = x === c.V3.QUEST_HOME_TILE_V2_FOOTER,
            T = (0, u.r7)(e.config) ? _.intl.string(_.t.bAGFz3) : _.intl.string(_.t.vTgCWx),
            I = (0, l.ix)({
                quest: e,
                questContent: o,
                questContentPosition: C,
                questContentRowIndex: d,
                sourceQuestContent: r,
            }),
            N = (0, a.vj)(e),
            y = f(e, o, r, O(n, e));
        return (0, s.jsx)(i.$, { variant: (0, c.wX)(x), fullWidth: !0, size: E, onClick: A ? y : I, text: A ? N : T });
    };
var L = n(17928),
    g = n(859703),
    S = n(630037);
let q = function (t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: u,
            size: a,
            surface: l,
            isQuestAccessSuspended: C = !1,
        } = t,
        d = e.id,
        { isClaiming: E } = (0, L.cf)(
            [g.A],
            () => ({ isClaiming: g.A.isClaimingReward(d) || g.A.isFetchingRewardCode(d) }),
            [d],
        ),
        x = null != l && (0, c.P0)(l),
        A = (0, S.D)({
            quest: e,
            questContent: n,
            sourceQuestContent: o,
            questContentPosition: r,
            questContentRowIndex: u,
            shouldRedirectToQuestHome: x,
        });
    return (0, s.jsx)(i.$, {
        variant: (0, c.wX)(l),
        fullWidth: !0,
        size: a,
        loading: E,
        onClick: C ? T.FS : A,
        text: _.intl.string(_.t.cfY4PE),
        "aria-disabled": C || void 0,
    });
};
var Q = n(582128),
    m = n(323889),
    R = n(141628),
    p = n(509434),
    v = n(274670),
    P = n(144779),
    h = n(24001),
    D = n(104886),
    j = n(18437),
    U = n(971649),
    b = n(651892),
    M = n(901406),
    w = n(862611),
    k = n(284846),
    F = n(862482),
    V = n(663417),
    X = n(775602),
    W = n(85964);
function K(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: u,
            analyticsCtxQuestContentRowIndex: a,
            animateRefreshIcon: c = !0,
            isQuestAccessSuspended: C = !1,
        } = t,
        E = (0, j.Ut)(),
        x = (0, U.wW)(),
        A = (0, L.bG)([X.Ay], () => X.Ay.useReducedMotion),
        I = (0, l.Xf)({ useReducedMotion: A }),
        [O, f] = Q.useState(!1),
        { startingConsoleQuest: N, startConsoleQuest: y } = (0, o.Wj)({
            questId: e.id,
            beforeRequest: () => {
                c ? I.startAnimation() : f(!0),
                    (0, D.E5)(D.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                        ? (0, v.r)({
                              type: P.F.CLICK_INTERNAL,
                              adCreativeType: m.p.QUEST,
                              adCreativeId: e.id,
                              questContentCTA: d.Cy.DEFIBRILLATOR,
                              surfaceId: n,
                              sourceQuestContent: r,
                              impressionId: x(),
                              questContentPosition: u,
                              questContentRowIndex: a,
                          })
                        : E({
                              questId: e.id,
                              questContent: n,
                              questContentCTA: d.Cy.DEFIBRILLATOR,
                              questContentPosition: u,
                              questContentRowIndex: a,
                              sourceQuestContent: r,
                          });
            },
            afterRequest: () => {
                c ? I.stopAnimation() : f(!1);
            },
        }),
        g = C ? T.FS : y;
    return c
        ? (0, s.jsx)(F.$n, {
              "data-migration-pending": !0,
              color: F.XD.PRIMARY,
              onClick: g,
              disabled: N,
              "aria-disabled": C || void 0,
              className: W.x,
              children: (0, s.jsxs)("div", { className: W.t, children: [I?.render(), _.intl.string(_.t.nPThNb)] }),
          })
        : (0, s.jsx)(i.$, {
              variant: "secondary",
              onClick: g,
              disabled: N,
              "aria-disabled": C || void 0,
              loading: O,
              fullWidth: !0,
              text: _.intl.string(_.t.cdd1iy),
              icon: V.f,
              iconPosition: "start",
          });
}
var z = n(935399),
    B = n(847374),
    Y = n(922016),
    G = n(980707),
    $ = n(477782),
    H = n(834730),
    Z = n(820081),
    J = n(900797),
    tt = n(178540),
    te = n(988436),
    tn = n(614972),
    ts = n(661531),
    ti = n(200192),
    to = n(653766),
    tr = n(928264),
    tu = n(802516),
    ta = n(22363),
    tl = n(403362),
    tc = n(652215);
function tC(t) {
    let {
            quest: e,
            supportedQuestConsoles: n,
            surface: r,
            size: u,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: C,
            analyticsCtxQuestContentRowIndex: E,
            isQuestAccessSuspended: x = !1,
        } = t,
        { xboxAccounts: A, playstationAccounts: O } = (0, o.Du)(),
        f = Q.useMemo(() => {
            let t = new Set();
            return A.length > 0 && t.add(tc.fg2.XBOX), O.length > 0 && t.add(tc.fg2.PLAYSTATION), t;
        }, [A.length, O.length]),
        N = Q.useContext(tn.q),
        [y, L] = (0, o.tZ)(e.id),
        [g, S] = Q.useState(null),
        [q, m] = Q.useState(N?.getAutoOpen() ?? !1),
        [R, v] = Q.useState(null),
        P = Q.useRef(null),
        h = (0, U.go)(),
        D = (0, tt.O)((t) => t.errorHintsByQuestId.get(e.id));
    (0, z.u5)(() => {
        q && N?.onMenuOpen();
    });
    let j = Q.useCallback(
            (t) => {
                if (y === I.fO.CONSOLE && g === t && f.has(t))
                    return D?.some((t) => (0, M.$J)(t) === g) ? "error" : "connected";
            },
            [y, g, D, f],
        ),
        b = Q.useCallback(
            (t) => {
                if (t === I.fO.DESKTOP) {
                    S(null),
                        L(I.fO.DESKTOP),
                        (0, M.pu)(e, {
                            content: a,
                            ctaContent: d.Cy.OPEN_GAME_LINK,
                            impressionId: h,
                            sourceQuestContent: l,
                        });
                    return;
                }
                f.has(t) ||
                    (0, M.Ps)(
                        { quest: e },
                        {
                            content: a,
                            ctaContent: d.Cy.CONNECT_CONSOLE,
                            position: C,
                            rowIndex: E,
                            impressionId: h,
                            sourceQuestContent: l,
                        },
                        t,
                    ),
                    S(t),
                    L(I.fO.CONSOLE);
            },
            [f, L, e, a, C, E, l, h],
        ),
        w = Q.useCallback(
            (t) => (t === I.fO.DESKTOP ? y === I.fO.DESKTOP : y === I.fO.CONSOLE && g === t && f.has(t)),
            [y, g, f],
        ),
        k = [
            ...n.map((t) => ({
                value: t,
                get label() {
                    return f.has(t)
                        ? _.intl.formatToPlainString(_.t.LEgD7t, {
                              platform: _.intl.string(t === tc.fg2.XBOX ? _.t.CoT7ML : _.t.fFl4jo),
                          })
                        : _.intl.formatToPlainString(_.t.XWSHTb, {
                              platform: _.intl.string(t === tc.fg2.XBOX ? _.t.CoT7ML : _.t.ikuLkv),
                          });
                },
            })),
            {
                value: I.fO.DESKTOP,
                get label() {
                    return _.intl.formatToPlainString(_.t.LEgD7t, { platform: _.intl.string(_.t.g6Dr44) });
                },
            },
        ],
        F = {
            buttonRef: P,
            size: u,
            fullWidth: !0,
            variant: (0, c.wX)(r, "primary"),
            text: _.intl.string(_.t.U7cCLU),
            iconPosition: "end",
        };
    return x
        ? (0, s.jsx)(i.$, { ...F, icon: B.a, onClick: T.FS, "aria-disabled": !0 })
        : (0, s.jsx)(Y.Y, {
              targetElementRef: P,
              position: "bottom",
              shouldShow: q,
              onRequestOpen: () => {
                  N?.onMenuOpen(), m(!0);
              },
              onRequestClose: () => {
                  N?.onMenuClose(), m(!1), v(null);
              },
              renderPopout: (t) => {
                  let { closePopout: n } = t;
                  return (0, s.jsx)("div", {
                      style: { minWidth: P.current?.offsetWidth },
                      onMouseLeave: () => v(null),
                      children: (0, s.jsxs)(G.W, {
                          "data-menu-migrated": !0,
                          navId: `play-quest-platform-select-${e.id}`,
                          "aria-label": _.intl.string(_.t["TWSB/5"]),
                          onClose: n,
                          onSelect: void 0,
                          children: [
                              (0, s.jsx)($.rX, {
                                  children: k.map((t) => {
                                      let e = w(t.value),
                                          n = t.value === I.fO.DESKTOP && R === t.value,
                                          i = (function (t, e) {
                                              if ("connected" === e)
                                                  return { icon: ti.Q, color: ts.A.colors.ICON_FEEDBACK_POSITIVE.css };
                                              if ("error" === e)
                                                  return { icon: to.e, color: ts.A.colors.ICON_FEEDBACK_CRITICAL.css };
                                              switch (t) {
                                                  case I.fO.DESKTOP:
                                                      return { icon: tr.I, color: "currentColor" };
                                                  case tc.fg2.XBOX:
                                                      return { icon: tu.Y, color: "currentColor" };
                                                  case tc.fg2.PLAYSTATION:
                                                      return { icon: ta.X, color: "currentColor" };
                                                  default:
                                                      return (0, tl.xb)(t);
                                              }
                                          })(t.value, j(t.value)),
                                          o = (function (t) {
                                              switch (t) {
                                                  case I.fO.DESKTOP:
                                                      return _.intl.string(_.t["QXc01+"]);
                                                  case tc.fg2.XBOX:
                                                      return _.intl.string(_.t.CoT7ML);
                                                  case tc.fg2.PLAYSTATION:
                                                      return _.intl.string(_.t.fFl4jo);
                                                  default:
                                                      return (0, tl.xb)(t);
                                              }
                                          })(t.value);
                                      return (0, s.jsx)(
                                          $.Dr,
                                          {
                                              id: o,
                                              void_label: (0, s.jsx)(H.E, {
                                                  variant: "text-md/normal",
                                                  children: t.label,
                                              }),
                                              action: () => b(t.value),
                                              onFocus: () => v(t.value),
                                              leadingAccessory: { type: "icon", icon: i.icon, color: i.color },
                                              trailingIndicator: n
                                                  ? {
                                                        type: "icon",
                                                        icon: p.I,
                                                        size: "refresh_sm",
                                                        color: "currentColor",
                                                    }
                                                  : e
                                                    ? {
                                                          type: "icon",
                                                          icon: Z.B,
                                                          size: "refresh_sm",
                                                          color: "currentColor",
                                                      }
                                                    : void 0,
                                          },
                                          o,
                                      );
                                  }),
                              }),
                              y === I.fO.CONSOLE &&
                                  null != g &&
                                  f.has(g) &&
                                  (0, s.jsx)($.rX, {
                                      children: (0, s.jsx)($.Dr, {
                                          id: "play-quest-platform-select-check-connection",
                                          void_label: (0, s.jsx)(H.E, {
                                              variant: "text-md/normal",
                                              children: _.intl.string(_.t.cdd1iy),
                                          }),
                                          onFocus: () => v(null),
                                          action: () => {
                                              (0, te.i)({ quest: e, sourceQuestContent: l, refreshOnOpen: !0 });
                                          },
                                          leadingAccessory: { type: "icon", icon: V.f, color: "currentColor" },
                                      }),
                                  }),
                          ],
                      }),
                  });
              },
              children: (t) => (0, s.jsx)(i.$, { ...F, ...t, icon: q ? J.t : B.a }),
          });
}
function td(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: u,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: l,
            size: C,
            isQuestAccessSuspended: E,
        } = t,
        x = (0, o.RR)({ quest: e }),
        A = (0, U.wW)(),
        I = (0, o.Vn)(e),
        O = (0, o.fc)(e),
        [f, N, y] = (0, o.Qo)(e, O);
    return I || f === h.X0.DESKTOP
        ? (0, s.jsx)(i.$, {
              variant: "secondary",
              size: C,
              disabled: !0,
              text: _.intl.string(_.t["9KoPyB"]),
              fullWidth: !0,
          })
        : x && n === c.V3.QUEST_HOME_TILE_FOOTER
          ? (0, s.jsx)(i.$, {
                size: C,
                variant: "secondary",
                onClick: () => {
                    E
                        ? (0, T.FS)()
                        : (0, M.se)(
                              { quest: e },
                              {
                                  content: r,
                                  ctaContent: d.Cy.CONNECT_CONSOLE,
                                  position: a,
                                  rowIndex: l,
                                  impressionId: A(),
                                  sourceQuestContent: u,
                              },
                          );
                },
                text: _.intl.string(_.t.Cfye4v),
                fullWidth: !0,
                "aria-disabled": E || void 0,
            })
          : (0, s.jsx)(K, {
                quest: e,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: u,
                analyticsCtxQuestContentPosition: a,
                analyticsCtxQuestContentRowIndex: l,
                isQuestAccessSuspended: E,
            });
}
function tE(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: o,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: u,
            analyticsCtxQuestContentRowIndex: a,
            size: l,
            isQuestAccessSuspended: C,
        } = t,
        { hasAlreadyLinked: E } = (0, k.U)(e),
        x = (0, U.wW)(),
        A = (0, j.Ut)();
    if (!0 === E)
        return n === c.V3.QUEST_BAR_FOOTER
            ? (0, s.jsx)(i.$, {
                  size: l,
                  fullWidth: !0,
                  variant: "secondary",
                  text: (0, b.wr)(e),
                  onClick: () => {
                      C
                          ? (0, T.FS)()
                          : (0, M.pu)(e, {
                                content: o,
                                ctaContent: d.Cy.OPEN_GAME_LINK,
                                position: u,
                                impressionId: x(),
                                sourceQuestContent: r,
                            });
                  },
                  "aria-disabled": C || void 0,
              })
            : (0, s.jsx)(i.$, {
                  size: l,
                  fullWidth: !0,
                  variant: (0, c.wX)(n),
                  text: _.intl.string(_.t.SHZo2x),
                  onClick: () => {
                      C ? (0, T.FS)() : (0, T._x)({ quest: e, sourceQuestContent: r });
                  },
                  "aria-disabled": C || void 0,
              });
    let I = n === c.V3.QUEST_HOME_TILE_V2_FOOTER;
    return (0, s.jsx)(i.$, {
        size: l,
        fullWidth: !0,
        variant: (0, c.wX)(n),
        icon: I ? void 0 : R.A,
        text: I ? _.intl.string(_.t.SHZo2x) : _.intl.string(_.t.sbdnpw),
        "aria-disabled": C || void 0,
        onClick: () => {
            C
                ? (0, T.FS)()
                : ((0, D.E5)(D.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                      ? (0, v.r)({
                            type: P.F.CLICK_INTERNAL,
                            adCreativeType: m.p.QUEST,
                            adCreativeId: e.id,
                            questContentCTA: d.Cy.OPEN_ACCOUNT_LINK_MODAL,
                            surfaceId: o,
                            sourceQuestContent: r,
                            impressionId: x(),
                            questContentPosition: u,
                            questContentRowIndex: a,
                        })
                      : A({
                            questId: e.id,
                            questContent: o,
                            questContentCTA: d.Cy.OPEN_ACCOUNT_LINK_MODAL,
                            questContentPosition: u,
                            questContentRowIndex: a,
                            sourceQuestContent: r,
                        }),
                  (0, T._x)({ quest: e, sourceQuestContent: r }));
        },
    });
}
function tx(t) {
    let { quest: e, analyticsCtxSourceQuestContent: n, size: r, parentContainerRef: u, isQuestAccessSuspended: a } = t,
        { applications: l } = (0, o.fc)(e),
        c = { variant: "secondary", fullWidth: !0, size: r, text: _.intl.string(_.t["93PTEs"]) };
    return a
        ? (0, s.jsx)(i.$, { ...c, onClick: T.FS, "aria-disabled": !0 })
        : (0, s.jsx)(w.A, {
              quest: e,
              sourceQuestContent: n,
              applications: l ?? [],
              targetElementRef: u,
              children: (t) => (0, s.jsx)(i.$, { ...c, ...t }),
          });
}
function tA(t) {
    let {
            quest: e,
            surface: n,
            size: o,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: u,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: l,
            isQuestAccessSuspended: C,
        } = t,
        E = (0, M.bg)(e),
        x = (0, U.wW)();
    return 0 === E.length
        ? (0, s.jsx)(i.$, {
              size: o,
              fullWidth: !0,
              variant: (0, c.wX)(n, "primary"),
              text: _.intl.string(_.t.U7cCLU),
              icon: p.I,
              iconPosition: "end",
              onClick: () => {
                  C
                      ? (0, T.FS)()
                      : (0, M.pu)(e, {
                            content: r,
                            ctaContent: d.Cy.OPEN_GAME_LINK,
                            position: a,
                            impressionId: x(),
                            sourceQuestContent: u,
                        });
              },
              "aria-disabled": C || void 0,
          })
        : (0, s.jsx)(tC, {
              quest: e,
              supportedQuestConsoles: E,
              surface: n,
              size: o,
              analyticsCtxQuestContent: r,
              analyticsCtxSourceQuestContent: u,
              analyticsCtxQuestContentPosition: a,
              analyticsCtxQuestContentRowIndex: l,
              isQuestAccessSuspended: C,
          });
}
let tT = function (t) {
        let {
                quest: e,
                surface: n,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: u,
                analyticsCtxQuestContentRowIndex: a,
                size: l,
                isQuestAccessSuspended: C = !1,
            } = t,
            d = Q.useRef(null);
        return (0, E.I6)(e)
            ? (0, s.jsx)(tE, {
                  quest: e,
                  surface: n,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: u,
                  analyticsCtxQuestContentRowIndex: a,
                  size: l,
                  isQuestAccessSuspended: C,
              })
            : (0, E.g5)(e) && n === c.V3.QUEST_HOME_TILE_FOOTER
              ? (0, s.jsx)(td, {
                    quest: e,
                    surface: n,
                    size: l,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: a,
                    isQuestAccessSuspended: C,
                })
              : (0, x.ui)(e) && n === c.V3.QUEST_BAR_FOOTER
                ? (0, s.jsx)("div", {
                      ref: d,
                      children: (0, s.jsx)(tx, {
                          quest: e,
                          analyticsCtxSourceQuestContent: r,
                          size: l,
                          parentContainerRef: d,
                          isQuestAccessSuspended: C,
                      }),
                  })
                : n === c.V3.QUEST_HOME_TILE_V2_FOOTER
                  ? (0, s.jsx)(tA, {
                        quest: e,
                        surface: n,
                        size: l,
                        analyticsCtxQuestContent: o,
                        analyticsCtxSourceQuestContent: r,
                        analyticsCtxQuestContentPosition: u,
                        analyticsCtxQuestContentRowIndex: a,
                        isQuestAccessSuspended: C,
                    })
                  : (0, s.jsx)(i.$, {
                        size: l,
                        variant: "secondary",
                        disabled: !0,
                        text: _.intl.string(_.t["9KoPyB"]),
                        fullWidth: !0,
                    });
    },
    tI = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: i,
            analyticsCtxQuestContent: o,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: u,
            analyticsCtxQuestContentRowIndex: a,
            size: l,
            isQuestAccessSuspended: c = !1,
        } = t;
        return (0, E.GL)(e)
            ? (0, s.jsx)(tT, {
                  quest: e,
                  surface: i,
                  size: l,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: u,
                  analyticsCtxQuestContentRowIndex: a,
                  isQuestAccessSuspended: c,
              })
            : (0, s.jsx)(N, {
                  quest: e,
                  taskType: n,
                  size: l,
                  surface: i,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  isQuestAccessSuspended: c,
              });
    },
    t_ = function (t) {
        let {
                quest: e,
                taskType: n,
                surface: r,
                size: u,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: d,
            } = t,
            E = (0, o.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" }),
            x = e.userStatus?.claimedAt != null;
        return r === c.V3.QUEST_HOME_TILE_FOOTER && x
            ? (0, s.jsx)(y, {
                  quest: e,
                  taskType: n,
                  size: u,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: l,
                  analyticsCtxQuestContentPosition: C,
                  analyticsCtxQuestContentRowIndex: d,
              })
            : (0, s.jsx)(i.$, {
                  variant: "secondary",
                  disabled: !0,
                  fullWidth: !0,
                  size: u,
                  text: _.intl.format(_.t["6p8BZx"], { expiryDate: E }),
              });
    },
    tO = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: o,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: u,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: l,
            size: C,
            isQuestAccessSuspended: d = !1,
        } = t;
        return ((0, E.t)({ quest: e }) || (0, E.g5)(e)) && o === c.V3.QUEST_BAR_FOOTER && (0, x.ui)(e)
            ? (0, s.jsx)(i.$, {
                  size: C,
                  variant: "secondary",
                  disabled: !0,
                  text: _.intl.string(_.t["9KoPyB"]),
                  fullWidth: !0,
              })
            : (0, s.jsx)(tI, {
                  quest: e,
                  taskType: n,
                  surface: o,
                  analyticsCtxQuestContent: r,
                  analyticsCtxSourceQuestContent: u,
                  analyticsCtxQuestContentPosition: a,
                  analyticsCtxQuestContentRowIndex: l,
                  size: C,
                  isQuestAccessSuspended: d,
              });
    };
var tf = n(352774);
function tN(t) {
    switch (t) {
        case C.n.ACHIEVEMENT_IN_ACTIVITY:
        case C.n.PLAY_ACTIVITY:
        case C.n.WATCH_VIDEO:
            return d.Cy.START_QUEST;
        default:
            return d.Cy.ACCEPT_QUEST;
    }
}
let ty = function (t) {
        var e;
        let {
                quest: n,
                taskType: r,
                size: u = "sm",
                surface: l,
                showPlayInstantlyLabel: x = !1,
                preClickCallback: O,
                isQuestAccessSuspended: f = !1,
                analyticsCtxQuestContent: N,
                analyticsCtxSourceQuestContent: y,
                analyticsCtxQuestContentPosition: S,
                analyticsCtxQuestContentRowIndex: q,
            } = t,
            m = {
                questContent: N,
                questContentCTA: tN(r),
                sourceQuestContent: y,
                questContentPosition: S,
                questContentRowIndex: q,
            },
            R = n.id,
            p = l === c.V3.QUEST_HOME_TILE_V2_FOOTER,
            { isEnrolling: v } = (0, L.cf)([g.A], () => ({ isEnrolling: g.A.isEnrolling(R) }), [R]),
            { icon: P, iconPosition: h } = p ? (0, T.Q_)(n) : { icon: (0, T.Oz)(n, x) },
            D = (function (t, e, n, s, i) {
                let { launchInGameActivity: r } = (0, o.zW)(e),
                    u = (0, U.wW)(),
                    a = Q.useContext(tn.q),
                    l = i === c.V3.QUEST_HOME_TILE_V2_FOOTER;
                if ((0, E.K$)(e))
                    return () => {
                        (0, T.Fy)(e);
                    };
                if (l && !(0, E.I6)(e) && (0, M.bg)(e).length > 0)
                    return () => {
                        a?.setAutoOpen(!0);
                    };
                switch (t) {
                    case C.n.ACHIEVEMENT_IN_ACTIVITY:
                    case C.n.PLAY_ACTIVITY:
                        return () => {
                            r();
                        };
                    case C.n.ACHIEVEMENT_IN_GAME:
                        return l
                            ? () => {
                                  (0, T._x)({ quest: e, sourceQuestContent: s });
                              }
                            : null;
                    case C.n.PLAY_ON_DESKTOP:
                        return l && (0, E.no)(e)
                            ? () => {
                                  (0, M.pu)(e, {
                                      content: n,
                                      ctaContent: d.Cy.OPEN_GAME_LINK,
                                      impressionId: u(),
                                      sourceQuestContent: s,
                                  });
                              }
                            : null;
                    case C.n.PLAY_ON_XBOX:
                    case C.n.PLAY_ON_PLAYSTATION:
                    default:
                        return null;
                }
            })(r, n, N, y, l),
            j = p
                ? (0, a.C0)(n)
                : (function (t, e) {
                      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                          { features: s } = e.config;
                      switch (t) {
                          case C.n.WATCH_VIDEO:
                          case C.n.WATCH_VIDEO_ON_MOBILE:
                              return (0, A.WM)((0, E.Yh)(e));
                          case C.n.ACHIEVEMENT_IN_ACTIVITY:
                              return _.intl.string(_.t.CkUzLd);
                          case C.n.PLAY_ACTIVITY:
                              if (s.includes(I.Li.CLOUD_GAMING_ACTIVITY))
                                  return _.intl.string(n ? _.t.V5Qt9D : _.t["+qoymD"]);
                              return _.intl.string(_.t.E4kW5O);
                          default:
                              return _.intl.string(_.t.kUQLMJ);
                      }
                  })(r, n, x),
            b =
                ((e = D ?? void 0),
                r === C.n.WATCH_VIDEO
                    ? async () => {
                          await (0, T.e0)(n, {
                              questContent: m.questContent,
                              questContentCTA: m.questContentCTA,
                              sourceQuestContent: m.sourceQuestContent,
                              sourceQuestContentCTA: tN(r),
                              questContentPosition: m.questContentPosition,
                              questContentRowIndex: m.questContentRowIndex,
                          });
                      }
                    : async () => {
                          (
                              await (0, tf.Oy)(n.id, {
                                  questContent: m.questContent,
                                  questContentCTA: m.questContentCTA,
                                  sourceQuestContent: m.sourceQuestContent,
                                  questContentPosition: m.questContentPosition,
                                  questContentRowIndex: m.questContentRowIndex,
                              })
                          ).type === tf.WM.SUCCESS && e?.();
                      });
        return (0, s.jsx)(i.$, {
            size: u,
            loading: v,
            variant: (0, c.wX)(l, "primary"),
            onClick: () => {
                f ? (0, T.FS)() : (O?.(), b());
            },
            text: j,
            icon: P,
            iconPosition: h,
            fullWidth: !0,
            "aria-disabled": f || void 0,
        });
    },
    tL = function (t) {
        let {
                quest: e,
                surface: n,
                preClickCallback: u,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: d,
                size: E = "md",
                showPlayInstantlyLabel: x,
            } = t,
            A = (0, c.Pd)(e),
            T = (0, o.Hv)();
        if (0 === Object.keys(e.config.taskConfigV2.tasks).length)
            return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: "sm", text: _.intl.string(_.t.P84bAD) });
        let I = Object.values(e.config.taskConfigV2.tasks)[0],
            O = (function () {
                switch (A) {
                    case c.UA.UNENROLLED:
                        return (0, s.jsx)(ty, {
                            quest: e,
                            taskType: I.type,
                            size: E,
                            surface: n,
                            showPlayInstantlyLabel: x,
                            preClickCallback: u,
                            isQuestAccessSuspended: T,
                            analyticsCtxQuestContent: a,
                            analyticsCtxSourceQuestContent: l,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                        });
                    case c.UA.ENROLLED:
                        return (0, s.jsx)(tI, {
                            quest: e,
                            taskType: I.type,
                            size: E,
                            isQuestAccessSuspended: T,
                            analyticsCtxQuestContent: a,
                            analyticsCtxSourceQuestContent: l,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                            surface: n,
                        });
                    case c.UA.INCOMPLETE:
                        return (0, s.jsx)(tO, {
                            quest: e,
                            taskType: I.type,
                            size: E,
                            isQuestAccessSuspended: T,
                            analyticsCtxQuestContent: a,
                            analyticsCtxSourceQuestContent: l,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                            surface: n,
                        });
                    case c.UA.EXPIRED_CLAIMABLE:
                    case c.UA.COMPLETED:
                        return (0, s.jsx)(q, {
                            quest: e,
                            size: E,
                            surface: n,
                            isQuestAccessSuspended: T,
                            analyticsCtxQuestContent: a,
                            analyticsCtxSourceQuestContent: l,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                        });
                    case c.UA.CLAIMED:
                        return (0, s.jsx)(y, {
                            quest: e,
                            taskType: I.type,
                            size: E,
                            surface: n,
                            analyticsCtxQuestContent: a,
                            analyticsCtxSourceQuestContent: l,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                        });
                    case c.UA.EXPIRED:
                        return (0, s.jsx)(t_, {
                            quest: e,
                            taskType: I.type,
                            surface: n,
                            size: E,
                            analyticsCtxQuestContent: a,
                            analyticsCtxSourceQuestContent: l,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                        });
                    default:
                        return (0, s.jsx)(i.$, {
                            variant: "primary",
                            fullWidth: !0,
                            size: E,
                            text: _.intl.string(_.t.P84bAD),
                        });
                }
            })();
        return T && A !== c.UA.CLAIMED && A !== c.UA.EXPIRED ? (0, s.jsx)(r.A, { children: O }) : O;
    };
