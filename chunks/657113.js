n.d(e, { A: () => tN });
var s = n(477900),
    i = n(821609),
    o = n(309593),
    r = n(608935),
    a = n(801365),
    l = n(662940),
    u = n(201805),
    c = n(79545),
    C = n(412703),
    d = n(590202),
    E = n(792620),
    x = n(814793),
    A = n(753386),
    I = n(617986),
    T = n(190107),
    f = n(375708);
function O(t, e) {
    return C.o.VIDEO.has(t) ? d.Cy.WATCH_VIDEO : (0, x.vA)(e) ? d.Cy.START_QUEST : d.Cy.ACCEPT_QUEST;
}
function _(t, e, n, s) {
    let { launchInGameActivity: i } = (0, o.zW)(t);
    return (0, E.K$)(t)
        ? () => {
              (0, I.Fy)(t);
          }
        : (0, E.IO)(t)
          ? () => {
                (0, I.d5)({ quest: t, questContent: e, sourceQuestContent: n, sourceQuestContentCTA: s });
            }
          : (0, x.vA)(t)
            ? () => {
                  i();
              }
            : null;
}
let L = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: a,
                size: u,
                surface: C,
                isQuestAccessSuspended: d = !1,
            } = t,
            L = (0, o.fc)(e),
            y = _(e, r, a, O(n, e)),
            N = C === c.V3.QUEST_HOME_TILE_V2_FOOTER,
            g = N ? (0, I.Q_)(e).icon : (0, I.Oz)(e),
            S = N
                ? (0, l.C0)(e)
                : (function (t, e) {
                      if ((0, E.K$)(t)) return f.intl.string(f.t["/cXIc6"]);
                      if ((0, E.IO)(t)) return (0, A.WM)(e);
                      if ((0, x.vA)(t))
                          return (0, E.Ov)(t)
                              ? f.intl.string(f.t.CkUzLd)
                              : (0, E.vl)(t)
                                ? t.config.features.includes(T.Li.CLOUD_GAMING_ACTIVITY)
                                    ? f.intl.string(f.t["+qoymD"])
                                    : f.intl.string(f.t.E4kW5O)
                                : f.intl.string(f.t.l7E81v);
                      return f.intl.string(f.t["9KoPyB"]);
                  })(e, L);
        return null == y
            ? (0, s.jsx)(i.$, { size: u, variant: "secondary", disabled: !0, text: S, fullWidth: !0 })
            : (0, s.jsx)(i.$, {
                  size: u,
                  variant: (0, c.wX)(C),
                  onClick: d ? I.FS : y,
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
            I = (0, a.r7)(e.config) ? f.intl.string(f.t.bAGFz3) : f.intl.string(f.t.vTgCWx),
            T = (0, u.ix)({
                quest: e,
                questContent: o,
                questContentPosition: C,
                questContentRowIndex: d,
                sourceQuestContent: r,
            }),
            L = (0, l.vj)(e),
            y = _(e, o, r, O(n, e));
        return (0, s.jsx)(i.$, { variant: (0, c.wX)(x), fullWidth: !0, size: E, onClick: A ? y : T, text: A ? L : I });
    };
var N = n(17928),
    g = n(859703),
    S = n(630037);
let m = function (t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: a,
            size: l,
            surface: u,
            isQuestAccessSuspended: C = !1,
        } = t,
        d = e.id,
        { isClaiming: E } = (0, N.cf)(
            [g.A],
            () => ({ isClaiming: g.A.isClaimingReward(d) || g.A.isFetchingRewardCode(d) }),
            [d],
        ),
        x = null != u && (0, c.P0)(u),
        A = (0, S.D)({
            quest: e,
            questContent: n,
            sourceQuestContent: o,
            questContentPosition: r,
            questContentRowIndex: a,
            shouldRedirectToQuestHome: x,
        });
    return (0, s.jsx)(i.$, {
        variant: (0, c.wX)(u),
        fullWidth: !0,
        size: l,
        loading: E,
        onClick: C ? I.FS : A,
        text: f.intl.string(f.t.cfY4PE),
        "aria-disabled": C || void 0,
    });
};
var Q = n(582128),
    R = n(323889),
    p = n(141628),
    v = n(509434),
    P = n(274670),
    h = n(144779),
    D = n(24001),
    j = n(104886),
    U = n(18437),
    q = n(971649),
    M = n(651892),
    b = n(901406),
    w = n(862611),
    k = n(284846),
    W = n(862482),
    z = n(663417),
    V = n(775602),
    F = n(248489);
function X(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: l,
            animateRefreshIcon: c = !0,
            isQuestAccessSuspended: C = !1,
        } = t,
        E = (0, U.Ut)(),
        x = (0, q.wW)(),
        A = (0, N.bG)([V.Ay], () => V.Ay.useReducedMotion),
        T = (0, u.Xf)({ useReducedMotion: A }),
        [O, _] = Q.useState(!1),
        { startingConsoleQuest: L, startConsoleQuest: y } = (0, o.Wj)({
            questId: e.id,
            beforeRequest: () => {
                c ? T.startAnimation() : _(!0),
                    (0, j.E5)(j.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                        ? (0, P.r)({
                              type: h.F.CLICK_INTERNAL,
                              adCreativeType: R.p.QUEST,
                              adCreativeId: e.id,
                              questContentCTA: d.Cy.DEFIBRILLATOR,
                              surfaceId: n,
                              sourceQuestContent: r,
                              impressionId: x(),
                              questContentPosition: a,
                              questContentRowIndex: l,
                          })
                        : E({
                              questId: e.id,
                              questContent: n,
                              questContentCTA: d.Cy.DEFIBRILLATOR,
                              questContentPosition: a,
                              questContentRowIndex: l,
                              sourceQuestContent: r,
                          });
            },
            afterRequest: () => {
                c ? T.stopAnimation() : _(!1);
            },
        }),
        g = C ? I.FS : y;
    return c
        ? (0, s.jsx)(W.$n, {
              "data-migration-pending": !0,
              color: W.XD.PRIMARY,
              onClick: g,
              disabled: L,
              "aria-disabled": C || void 0,
              className: F.x,
              children: (0, s.jsxs)("div", { className: F.t, children: [T?.render(), f.intl.string(f.t.nPThNb)] }),
          })
        : (0, s.jsx)(i.$, {
              variant: "secondary",
              onClick: g,
              disabled: L,
              "aria-disabled": C || void 0,
              loading: O,
              fullWidth: !0,
              text: f.intl.string(f.t.cdd1iy),
              icon: z.RefreshIcon,
              iconPosition: "start",
          });
}
var K = n(935399),
    Y = n(847374),
    B = n(922016),
    G = n(980707),
    $ = n(477782),
    H = n(834730),
    J = n(820081),
    Z = n(900797),
    tt = n(178540),
    te = n(988436),
    tn = n(614972),
    ts = n(661531),
    ti = n(200192),
    to = n(653766),
    tr = n(928264),
    ta = n(802516),
    tl = n(22363),
    tu = n(403362),
    tc = n(652215);
function tC(t) {
    let {
            quest: e,
            supportedQuestConsoles: n,
            surface: r,
            size: a,
            analyticsCtxQuestContent: l,
            analyticsCtxSourceQuestContent: u,
            analyticsCtxQuestContentPosition: C,
            analyticsCtxQuestContentRowIndex: E,
            isQuestAccessSuspended: x = !1,
        } = t,
        { xboxAccounts: A, playstationAccounts: O } = (0, o.Du)(),
        _ = Q.useMemo(() => {
            let t = new Set();
            return A.length > 0 && t.add(tc.fg2.XBOX), O.length > 0 && t.add(tc.fg2.PLAYSTATION), t;
        }, [A.length, O.length]),
        L = Q.useContext(tn.q),
        [y, N] = (0, o.tZ)(e.id),
        [g, S] = Q.useState(null),
        [m, R] = Q.useState(L?.getAutoOpen() ?? !1),
        [p, P] = Q.useState(null),
        h = Q.useRef(null),
        D = (0, q.go)(),
        j = (0, tt.O)((t) => t.errorHintsByQuestId.get(e.id));
    (0, K.u5)(() => {
        m && L?.onMenuOpen();
    });
    let U = Q.useCallback(
            (t) => {
                if (y === T.fO.CONSOLE && g === t && _.has(t))
                    return j?.some((t) => (0, b.$J)(t) === g) ? "error" : "connected";
            },
            [y, g, j, _],
        ),
        M = Q.useCallback(
            (t) => {
                if (t === T.fO.DESKTOP) {
                    S(null),
                        N(T.fO.DESKTOP),
                        (0, b.pu)(e, {
                            content: l,
                            ctaContent: d.Cy.OPEN_GAME_LINK,
                            impressionId: D,
                            sourceQuestContent: u,
                        });
                    return;
                }
                _.has(t) ||
                    (0, b.Ps)(
                        { quest: e },
                        {
                            content: l,
                            ctaContent: d.Cy.CONNECT_CONSOLE,
                            position: C,
                            rowIndex: E,
                            impressionId: D,
                            sourceQuestContent: u,
                        },
                        t,
                    ),
                    S(t),
                    N(T.fO.CONSOLE);
            },
            [_, N, e, l, C, E, u, D],
        ),
        w = Q.useCallback(
            (t) => (t === T.fO.DESKTOP ? y === T.fO.DESKTOP : y === T.fO.CONSOLE && g === t && _.has(t)),
            [y, g, _],
        ),
        k = [
            ...n.map((t) => ({
                value: t,
                get label() {
                    return _.has(t)
                        ? f.intl.formatToPlainString(f.t.LEgD7t, {
                              platform: f.intl.string(t === tc.fg2.XBOX ? f.t.CoT7ML : f.t.fFl4jo),
                          })
                        : f.intl.formatToPlainString(f.t.XWSHTb, {
                              platform: f.intl.string(t === tc.fg2.XBOX ? f.t.CoT7ML : f.t.ikuLkv),
                          });
                },
            })),
            {
                value: T.fO.DESKTOP,
                get label() {
                    return f.intl.formatToPlainString(f.t.LEgD7t, { platform: f.intl.string(f.t.g6Dr44) });
                },
            },
        ],
        W = {
            buttonRef: h,
            size: a,
            fullWidth: !0,
            variant: (0, c.wX)(r, "primary"),
            text: f.intl.string(f.t.U7cCLU),
            iconPosition: "end",
        };
    return x
        ? (0, s.jsx)(i.$, { ...W, icon: Y.a, onClick: I.FS, "aria-disabled": !0 })
        : (0, s.jsx)(B.Y, {
              targetElementRef: h,
              position: "bottom",
              shouldShow: m,
              onRequestOpen: () => {
                  L?.onMenuOpen(), R(!0);
              },
              onRequestClose: () => {
                  L?.onMenuClose(), R(!1), P(null);
              },
              renderPopout: (t) => {
                  let { closePopout: n } = t;
                  return (0, s.jsx)("div", {
                      style: { minWidth: h.current?.offsetWidth },
                      onMouseLeave: () => P(null),
                      children: (0, s.jsxs)(G.W, {
                          "data-menu-migrated": !0,
                          navId: `play-quest-platform-select-${e.id}`,
                          "aria-label": f.intl.string(f.t["TWSB/5"]),
                          onClose: n,
                          onSelect: void 0,
                          children: [
                              (0, s.jsx)($.rX, {
                                  children: k.map((t) => {
                                      let e = w(t.value),
                                          n = t.value === T.fO.DESKTOP && p === t.value,
                                          i = (function (t, e) {
                                              if ("connected" === e)
                                                  return { icon: ti.Q, color: ts.A.colors.ICON_FEEDBACK_POSITIVE.css };
                                              if ("error" === e)
                                                  return { icon: to.e, color: ts.A.colors.ICON_FEEDBACK_CRITICAL.css };
                                              switch (t) {
                                                  case T.fO.DESKTOP:
                                                      return { icon: tr.I, color: "currentColor" };
                                                  case tc.fg2.XBOX:
                                                      return { icon: ta.Y, color: "currentColor" };
                                                  case tc.fg2.PLAYSTATION:
                                                      return { icon: tl.X, color: "currentColor" };
                                                  default:
                                                      return (0, tu.xb)(t);
                                              }
                                          })(t.value, U(t.value)),
                                          o = (function (t) {
                                              switch (t) {
                                                  case T.fO.DESKTOP:
                                                      return f.intl.string(f.t["QXc01+"]);
                                                  case tc.fg2.XBOX:
                                                      return f.intl.string(f.t.CoT7ML);
                                                  case tc.fg2.PLAYSTATION:
                                                      return f.intl.string(f.t.fFl4jo);
                                                  default:
                                                      return (0, tu.xb)(t);
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
                                              action: () => M(t.value),
                                              onFocus: () => P(t.value),
                                              leadingAccessory: { type: "icon", icon: i.icon, color: i.color },
                                              trailingIndicator: n
                                                  ? {
                                                        type: "icon",
                                                        icon: v.I,
                                                        size: "refresh_sm",
                                                        color: "currentColor",
                                                    }
                                                  : e
                                                    ? {
                                                          type: "icon",
                                                          icon: J.B,
                                                          size: "refresh_sm",
                                                          color: "currentColor",
                                                      }
                                                    : void 0,
                                          },
                                          o,
                                      );
                                  }),
                              }),
                              y === T.fO.CONSOLE &&
                                  null != g &&
                                  _.has(g) &&
                                  (0, s.jsx)($.rX, {
                                      children: (0, s.jsx)($.Dr, {
                                          id: "play-quest-platform-select-check-connection",
                                          void_label: (0, s.jsx)(H.E, {
                                              variant: "text-md/normal",
                                              children: f.intl.string(f.t.cdd1iy),
                                          }),
                                          onFocus: () => P(null),
                                          action: () => {
                                              (0, te.i)({ quest: e, sourceQuestContent: u, refreshOnOpen: !0 });
                                          },
                                          leadingAccessory: {
                                              type: "icon",
                                              icon: z.RefreshIcon,
                                              color: "currentColor",
                                          },
                                      }),
                                  }),
                          ],
                      }),
                  });
              },
              children: (t) => (0, s.jsx)(i.$, { ...W, ...t, icon: m ? Z.t : Y.a }),
          });
}
function td(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: u,
            size: C,
            isQuestAccessSuspended: E,
        } = t,
        x = (0, o.RR)({ quest: e }),
        A = (0, q.wW)(),
        T = (0, o.Vn)(e),
        O = (0, o.fc)(e),
        [_, L, y] = (0, o.Qo)(e, O);
    return T || _ === D.X0.DESKTOP
        ? (0, s.jsx)(i.$, {
              variant: "secondary",
              size: C,
              disabled: !0,
              text: f.intl.string(f.t["9KoPyB"]),
              fullWidth: !0,
          })
        : x && n === c.V3.QUEST_HOME_TILE_FOOTER
          ? (0, s.jsx)(i.$, {
                size: C,
                variant: "secondary",
                onClick: () => {
                    E
                        ? (0, I.FS)()
                        : (0, b.se)(
                              { quest: e },
                              {
                                  content: r,
                                  ctaContent: d.Cy.CONNECT_CONSOLE,
                                  position: l,
                                  rowIndex: u,
                                  impressionId: A(),
                                  sourceQuestContent: a,
                              },
                          );
                },
                text: f.intl.string(f.t.Cfye4v),
                fullWidth: !0,
                "aria-disabled": E || void 0,
            })
          : (0, s.jsx)(X, {
                quest: e,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: l,
                analyticsCtxQuestContentRowIndex: u,
                isQuestAccessSuspended: E,
            });
}
function tE(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: o,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: l,
            size: u,
            isQuestAccessSuspended: C,
        } = t,
        { hasAlreadyLinked: E } = (0, k.U)(e),
        x = (0, q.wW)(),
        A = (0, U.Ut)();
    if (!0 === E)
        return n === c.V3.QUEST_BAR_FOOTER
            ? (0, s.jsx)(i.$, {
                  size: u,
                  fullWidth: !0,
                  variant: "secondary",
                  text: (0, M.wr)(e),
                  onClick: () => {
                      C
                          ? (0, I.FS)()
                          : (0, b.pu)(e, {
                                content: o,
                                ctaContent: d.Cy.OPEN_GAME_LINK,
                                position: a,
                                impressionId: x(),
                                sourceQuestContent: r,
                            });
                  },
                  "aria-disabled": C || void 0,
              })
            : (0, s.jsx)(i.$, {
                  size: u,
                  fullWidth: !0,
                  variant: (0, c.wX)(n),
                  text: f.intl.string(f.t.SHZo2x),
                  onClick: () => {
                      C ? (0, I.FS)() : (0, I._x)({ quest: e, sourceQuestContent: r });
                  },
                  "aria-disabled": C || void 0,
              });
    let T = n === c.V3.QUEST_HOME_TILE_V2_FOOTER;
    return (0, s.jsx)(i.$, {
        size: u,
        fullWidth: !0,
        variant: (0, c.wX)(n),
        icon: T ? void 0 : p.A,
        text: T ? f.intl.string(f.t.SHZo2x) : f.intl.string(f.t.sbdnpw),
        "aria-disabled": C || void 0,
        onClick: () => {
            C
                ? (0, I.FS)()
                : ((0, j.E5)(j.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                      ? (0, P.r)({
                            type: h.F.CLICK_INTERNAL,
                            adCreativeType: R.p.QUEST,
                            adCreativeId: e.id,
                            questContentCTA: d.Cy.OPEN_ACCOUNT_LINK_MODAL,
                            surfaceId: o,
                            sourceQuestContent: r,
                            impressionId: x(),
                            questContentPosition: a,
                            questContentRowIndex: l,
                        })
                      : A({
                            questId: e.id,
                            questContent: o,
                            questContentCTA: d.Cy.OPEN_ACCOUNT_LINK_MODAL,
                            questContentPosition: a,
                            questContentRowIndex: l,
                            sourceQuestContent: r,
                        }),
                  (0, I._x)({ quest: e, sourceQuestContent: r }));
        },
    });
}
function tx(t) {
    let { quest: e, analyticsCtxSourceQuestContent: n, size: r, parentContainerRef: a, isQuestAccessSuspended: l } = t,
        { applications: u } = (0, o.fc)(e),
        c = { variant: "secondary", fullWidth: !0, size: r, text: f.intl.string(f.t["93PTEs"]) };
    return l
        ? (0, s.jsx)(i.$, { ...c, onClick: I.FS, "aria-disabled": !0 })
        : (0, s.jsx)(w.A, {
              quest: e,
              sourceQuestContent: n,
              applications: u ?? [],
              targetElementRef: a,
              children: (t) => (0, s.jsx)(i.$, { ...c, ...t }),
          });
}
function tA(t) {
    let {
            quest: e,
            surface: n,
            size: o,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: u,
            isQuestAccessSuspended: C,
        } = t,
        E = (0, b.bg)(e),
        x = (0, q.wW)();
    return 0 === E.length
        ? (0, s.jsx)(i.$, {
              size: o,
              fullWidth: !0,
              variant: (0, c.wX)(n, "primary"),
              text: f.intl.string(f.t.U7cCLU),
              icon: v.I,
              iconPosition: "end",
              onClick: () => {
                  C
                      ? (0, I.FS)()
                      : (0, b.pu)(e, {
                            content: r,
                            ctaContent: d.Cy.OPEN_GAME_LINK,
                            position: l,
                            impressionId: x(),
                            sourceQuestContent: a,
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
              analyticsCtxSourceQuestContent: a,
              analyticsCtxQuestContentPosition: l,
              analyticsCtxQuestContentRowIndex: u,
              isQuestAccessSuspended: C,
          });
}
let tI = function (t) {
        let {
                quest: e,
                surface: n,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: a,
                analyticsCtxQuestContentRowIndex: l,
                size: u,
                isQuestAccessSuspended: C = !1,
            } = t,
            d = Q.useRef(null);
        return (0, E.I6)(e)
            ? (0, s.jsx)(tE, {
                  quest: e,
                  surface: n,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: a,
                  analyticsCtxQuestContentRowIndex: l,
                  size: u,
                  isQuestAccessSuspended: C,
              })
            : (0, E.g5)(e) && n === c.V3.QUEST_HOME_TILE_FOOTER
              ? (0, s.jsx)(td, {
                    quest: e,
                    surface: n,
                    size: u,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: a,
                    analyticsCtxQuestContentRowIndex: l,
                    isQuestAccessSuspended: C,
                })
              : (0, x.ui)(e) && n === c.V3.QUEST_BAR_FOOTER
                ? (0, s.jsx)("div", {
                      ref: d,
                      children: (0, s.jsx)(tx, {
                          quest: e,
                          analyticsCtxSourceQuestContent: r,
                          size: u,
                          parentContainerRef: d,
                          isQuestAccessSuspended: C,
                      }),
                  })
                : n === c.V3.QUEST_HOME_TILE_V2_FOOTER
                  ? (0, s.jsx)(tA, {
                        quest: e,
                        surface: n,
                        size: u,
                        analyticsCtxQuestContent: o,
                        analyticsCtxSourceQuestContent: r,
                        analyticsCtxQuestContentPosition: a,
                        analyticsCtxQuestContentRowIndex: l,
                        isQuestAccessSuspended: C,
                    })
                  : (0, s.jsx)(i.$, {
                        size: u,
                        variant: "secondary",
                        disabled: !0,
                        text: f.intl.string(f.t["9KoPyB"]),
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
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: l,
            size: u,
            isQuestAccessSuspended: c = !1,
        } = t;
        return (0, E.GL)(e)
            ? (0, s.jsx)(tI, {
                  quest: e,
                  surface: i,
                  size: u,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: a,
                  analyticsCtxQuestContentRowIndex: l,
                  isQuestAccessSuspended: c,
              })
            : (0, s.jsx)(L, {
                  quest: e,
                  taskType: n,
                  size: u,
                  surface: i,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  isQuestAccessSuspended: c,
              });
    },
    tf = function (t) {
        let {
                quest: e,
                taskType: n,
                surface: r,
                size: a,
                analyticsCtxQuestContent: l,
                analyticsCtxSourceQuestContent: u,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: d,
            } = t,
            E = (0, o.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" }),
            x = e.userStatus?.claimedAt != null;
        return r === c.V3.QUEST_HOME_TILE_FOOTER && x
            ? (0, s.jsx)(y, {
                  quest: e,
                  taskType: n,
                  size: a,
                  analyticsCtxQuestContent: l,
                  analyticsCtxSourceQuestContent: u,
                  analyticsCtxQuestContentPosition: C,
                  analyticsCtxQuestContentRowIndex: d,
              })
            : (0, s.jsx)(i.$, {
                  variant: "secondary",
                  disabled: !0,
                  fullWidth: !0,
                  size: a,
                  text: f.intl.format(f.t["6p8BZx"], { expiryDate: E }),
              });
    },
    tO = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: o,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: u,
            size: C,
            isQuestAccessSuspended: d = !1,
        } = t;
        return ((0, E.t)({ quest: e }) || (0, E.g5)(e)) && o === c.V3.QUEST_BAR_FOOTER && (0, x.ui)(e)
            ? (0, s.jsx)(i.$, {
                  size: C,
                  variant: "secondary",
                  disabled: !0,
                  text: f.intl.string(f.t["9KoPyB"]),
                  fullWidth: !0,
              })
            : (0, s.jsx)(tT, {
                  quest: e,
                  taskType: n,
                  surface: o,
                  analyticsCtxQuestContent: r,
                  analyticsCtxSourceQuestContent: a,
                  analyticsCtxQuestContentPosition: l,
                  analyticsCtxQuestContentRowIndex: u,
                  size: C,
                  isQuestAccessSuspended: d,
              });
    };
var t_ = n(396813);
function tL(t) {
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
                size: a = "sm",
                surface: u,
                showPlayInstantlyLabel: x = !1,
                preClickCallback: O,
                isQuestAccessSuspended: _ = !1,
                analyticsCtxQuestContent: L,
                analyticsCtxSourceQuestContent: y,
                analyticsCtxQuestContentPosition: S,
                analyticsCtxQuestContentRowIndex: m,
            } = t,
            R = {
                questContent: L,
                questContentCTA: tL(r),
                sourceQuestContent: y,
                questContentPosition: S,
                questContentRowIndex: m,
            },
            p = n.id,
            v = u === c.V3.QUEST_HOME_TILE_V2_FOOTER,
            { isEnrolling: P } = (0, N.cf)([g.A], () => ({ isEnrolling: g.A.isEnrolling(p) }), [p]),
            { icon: h, iconPosition: D } = v ? (0, I.Q_)(n) : { icon: (0, I.Oz)(n, x) },
            j = (0, U.Ut)(),
            M = (function (t, e, n, s, i) {
                let { launchInGameActivity: r } = (0, o.zW)(e),
                    a = (0, q.wW)(),
                    l = Q.useContext(tn.q),
                    u = i === c.V3.QUEST_HOME_TILE_V2_FOOTER;
                if ((0, E.K$)(e))
                    return () => {
                        (0, I.Fy)(e);
                    };
                if (u && !(0, E.I6)(e) && (0, b.bg)(e).length > 0)
                    return () => {
                        l?.setAutoOpen(!0);
                    };
                switch (t) {
                    case C.n.ACHIEVEMENT_IN_ACTIVITY:
                    case C.n.PLAY_ACTIVITY:
                        return () => {
                            r();
                        };
                    case C.n.ACHIEVEMENT_IN_GAME:
                        return u
                            ? () => {
                                  (0, I._x)({ quest: e, sourceQuestContent: s });
                              }
                            : null;
                    case C.n.PLAY_ON_DESKTOP:
                        return u && (0, E.no)(e)
                            ? () => {
                                  (0, b.pu)(e, {
                                      content: n,
                                      ctaContent: d.Cy.OPEN_GAME_LINK,
                                      impressionId: a(),
                                      sourceQuestContent: s,
                                  });
                              }
                            : null;
                    case C.n.PLAY_ON_XBOX:
                    case C.n.PLAY_ON_PLAYSTATION:
                    default:
                        return null;
                }
            })(r, n, L, y, u),
            w = v
                ? (0, l.C0)(n)
                : (function (t, e) {
                      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                          { features: s } = e.config;
                      switch (t) {
                          case C.n.WATCH_VIDEO:
                          case C.n.WATCH_VIDEO_ON_MOBILE:
                              return (0, A.WM)((0, E.Yh)(e));
                          case C.n.ACHIEVEMENT_IN_ACTIVITY:
                              return f.intl.string(f.t.CkUzLd);
                          case C.n.PLAY_ACTIVITY:
                              if (s.includes(T.Li.CLOUD_GAMING_ACTIVITY))
                                  return f.intl.string(n ? f.t.V5Qt9D : f.t["+qoymD"]);
                              return f.intl.string(f.t.E4kW5O);
                          default:
                              return f.intl.string(f.t.kUQLMJ);
                      }
                  })(r, n, x),
            k =
                ((e = M ?? void 0),
                r === C.n.WATCH_VIDEO
                    ? async () => {
                          await (0, I.e0)(n, {
                              questContent: R.questContent,
                              questContentCTA: R.questContentCTA,
                              sourceQuestContent: R.sourceQuestContent,
                              sourceQuestContentCTA: tL(r),
                              questContentPosition: R.questContentPosition,
                              questContentRowIndex: R.questContentRowIndex,
                          });
                      }
                    : async () => {
                          (
                              await (0, t_.Oy)(n.id, {
                                  questContent: R.questContent,
                                  questContentCTA: R.questContentCTA,
                                  sourceQuestContent: R.sourceQuestContent,
                                  questContentPosition: R.questContentPosition,
                                  questContentRowIndex: R.questContentRowIndex,
                              })
                          ).type === t_.WM.SUCCESS && e?.();
                      });
        return (0, s.jsx)(i.$, {
            size: a,
            loading: P,
            variant: (0, c.wX)(u, "primary"),
            onClick: () => {
                if (_) {
                    j({
                        questId: p,
                        questContent: L,
                        questContentCTA: d.Cy.QUEST_ACCESS_SUSPENDED,
                        questContentPosition: S,
                        questContentRowIndex: m,
                        sourceQuestContent: y,
                    }),
                        (0, I.FS)();
                    return;
                }
                O?.(), k();
            },
            text: w,
            icon: h,
            iconPosition: D,
            fullWidth: !0,
            "aria-disabled": _ || void 0,
        });
    },
    tN = function (t) {
        let {
                quest: e,
                surface: n,
                preClickCallback: a,
                analyticsCtxQuestContent: l,
                analyticsCtxSourceQuestContent: u,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: d,
                size: E = "md",
                showPlayInstantlyLabel: x,
            } = t,
            A = (0, c.Pd)(e),
            I = (0, o.Hv)();
        if (0 === Object.keys(e.config.taskConfigV2.tasks).length)
            return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: "sm", text: f.intl.string(f.t.P84bAD) });
        let T = Object.values(e.config.taskConfigV2.tasks)[0],
            O = (function () {
                switch (A) {
                    case c.UA.UNENROLLED:
                        return (0, s.jsx)(ty, {
                            quest: e,
                            taskType: T.type,
                            size: E,
                            surface: n,
                            showPlayInstantlyLabel: x,
                            preClickCallback: a,
                            isQuestAccessSuspended: I,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: u,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                        });
                    case c.UA.ENROLLED:
                        return (0, s.jsx)(tT, {
                            quest: e,
                            taskType: T.type,
                            size: E,
                            isQuestAccessSuspended: I,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: u,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                            surface: n,
                        });
                    case c.UA.INCOMPLETE:
                        return (0, s.jsx)(tO, {
                            quest: e,
                            taskType: T.type,
                            size: E,
                            isQuestAccessSuspended: I,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: u,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                            surface: n,
                        });
                    case c.UA.EXPIRED_CLAIMABLE:
                    case c.UA.COMPLETED:
                        return (0, s.jsx)(m, {
                            quest: e,
                            size: E,
                            surface: n,
                            isQuestAccessSuspended: I,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: u,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                        });
                    case c.UA.CLAIMED:
                        return (0, s.jsx)(y, {
                            quest: e,
                            taskType: T.type,
                            size: E,
                            surface: n,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: u,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                        });
                    case c.UA.EXPIRED:
                        return (0, s.jsx)(tf, {
                            quest: e,
                            taskType: T.type,
                            surface: n,
                            size: E,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: u,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                        });
                    default:
                        return (0, s.jsx)(i.$, {
                            variant: "primary",
                            fullWidth: !0,
                            size: E,
                            text: f.intl.string(f.t.P84bAD),
                        });
                }
            })();
        return I && A !== c.UA.CLAIMED && A !== c.UA.EXPIRED ? (0, s.jsx)(r.A, { children: O }) : O;
    };
