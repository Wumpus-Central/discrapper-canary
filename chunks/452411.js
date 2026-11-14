n.d(e, { A: () => tN });
var s = n(477900),
    i = n(821609),
    o = n(61387),
    r = n(608935),
    a = n(417404),
    l = n(662940),
    c = n(201805),
    u = n(79545),
    C = n(582128),
    d = n(412703),
    E = n(590202),
    x = n(792620),
    A = n(814793),
    I = n(753386),
    f = n(947079),
    T = n(321538),
    O = n(221596),
    L = n(792996);
function y(t, e) {
    return d.o.VIDEO.has(t) ? E.Cy.WATCH_VIDEO : (0, A.vA)(e) ? E.Cy.START_QUEST : E.Cy.ACCEPT_QUEST;
}
function g(t, e, n, s) {
    let { launchInGameActivity: i } = (0, o.zW)(t);
    return (0, x.K$)(t)
        ? () => {
              (0, T.Fy)(t);
          }
        : (0, x.IO)(t)
          ? () => {
                (0, T.d5)({ quest: t, questContent: e, sourceQuestContent: n, sourceQuestContentCTA: s });
            }
          : (0, A.vA)(t)
            ? () => {
                  i();
              }
            : null;
}
let m = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: a,
                size: c,
                surface: d,
                isQuestAccessSuspended: E = !1,
            } = t,
            m = (0, o.fc)(e),
            N = g(e, r, a, y(n, e)),
            S = d === u.V3.QUEST_HOME_TILE_V2_FOOTER,
            _ = S ? (0, T.Q_)(e).icon : (0, T.Oz)(e),
            { badge: Q } = C.useContext(f.f),
            v = S
                ? (0, l.C0)(e)
                : (function (t, e, n) {
                      let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                      if ((0, x.K$)(e)) return L.intl.string(L.t["/cXIc6"]);
                      if ((0, x.IO)(e)) return (0, I.WM)(n, s);
                      if ((0, A.vA)(e))
                          return (0, x.Ov)(e)
                              ? L.intl.string(L.t.CkUzLd)
                              : (0, x.vl)(e)
                                ? e.config.features.includes(O.Li.CLOUD_GAMING_ACTIVITY)
                                    ? L.intl.string(L.t["+qoymD"])
                                    : L.intl.string(L.t.E4kW5O)
                                : L.intl.string(L.t.l7E81v);
                      return L.intl.string(L.t["9KoPyB"]);
                  })(n, e, m, Q.duration);
        return null == N
            ? (0, s.jsx)(i.$, { size: c, variant: "secondary", disabled: !0, text: v, fullWidth: !0 })
            : (0, s.jsx)(i.$, {
                  size: c,
                  variant: (0, u.wX)(d),
                  onClick: E ? T.FS : N,
                  text: v,
                  icon: _,
                  fullWidth: !0,
                  "aria-disabled": E || void 0,
              });
    },
    N = function (t) {
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
            A = x === u.V3.QUEST_HOME_TILE_V2_FOOTER,
            I = (0, a.r7)(e.config) ? L.intl.string(L.t.bAGFz3) : L.intl.string(L.t.vTgCWx),
            f = (0, c.ix)({
                quest: e,
                questContent: o,
                questContentPosition: C,
                questContentRowIndex: d,
                sourceQuestContent: r,
            }),
            T = (0, l.vj)(e),
            O = g(e, o, r, y(n, e));
        return (0, s.jsx)(i.$, { variant: (0, u.wX)(x), fullWidth: !0, size: E, onClick: A ? O : f, text: A ? T : I });
    };
var S = n(855986),
    _ = n(122760),
    Q = n(630037);
let v = function (t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: a,
            size: l,
            surface: c,
            isQuestAccessSuspended: C = !1,
        } = t,
        d = e.id,
        { isClaiming: E } = (0, S.cf)(
            [_.A],
            () => ({ isClaiming: _.A.isClaimingReward(d) || _.A.isFetchingRewardCode(d) }),
            [d],
        ),
        x = null != c && (0, u.P0)(c),
        A = (0, Q.D)({
            quest: e,
            questContent: n,
            sourceQuestContent: o,
            questContentPosition: r,
            questContentRowIndex: a,
            shouldRedirectToQuestHome: x,
        });
    return (0, s.jsx)(i.$, {
        variant: (0, u.wX)(c),
        fullWidth: !0,
        size: l,
        loading: E,
        onClick: C ? T.FS : A,
        text: L.intl.string(L.t.cfY4PE),
        "aria-disabled": C || void 0,
    });
};
var h = n(323889),
    R = n(141628),
    P = n(509434),
    D = n(438457),
    p = n(144779),
    U = n(506988),
    j = n(971649),
    M = n(651892),
    b = n(574112),
    w = n(73142),
    q = n(284846),
    k = n(862482),
    W = n(663417),
    X = n(775602),
    z = n(248489);
function V(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: l,
            animateRefreshIcon: u = !0,
            isQuestAccessSuspended: d = !1,
        } = t,
        x = (0, j.wW)(),
        A = (0, S.bG)([X.Ay], () => X.Ay.useReducedMotion),
        I = (0, c.Xf)({ useReducedMotion: A }),
        [f, O] = C.useState(!1),
        { startingConsoleQuest: y, startConsoleQuest: g } = (0, o.Wj)({
            questId: e.id,
            beforeRequest: () => {
                (u ? I.startAnimation() : O(!0),
                    (0, D.r)({
                        type: p.F.CLICK_INTERNAL,
                        adCreativeType: h.p.QUEST,
                        adCreativeId: e.id,
                        questContentCTA: E.Cy.DEFIBRILLATOR,
                        surfaceId: n,
                        sourceQuestContent: r,
                        impressionId: x(),
                        questContentPosition: a,
                        questContentRowIndex: l,
                    }));
            },
            afterRequest: () => {
                u ? I.stopAnimation() : O(!1);
            },
        }),
        m = d ? T.FS : g;
    return u
        ? (0, s.jsx)(k.$n, {
              "data-migration-pending": !0,
              color: k.XD.PRIMARY,
              onClick: m,
              disabled: y,
              "aria-disabled": d || void 0,
              className: z.x,
              children: (0, s.jsxs)("div", { className: z.t, children: [I?.render(), L.intl.string(L.t.nPThNb)] }),
          })
        : (0, s.jsx)(i.$, {
              variant: "secondary",
              onClick: m,
              disabled: y,
              "aria-disabled": d || void 0,
              loading: f,
              fullWidth: !0,
              text: L.intl.string(L.t.cdd1iy),
              icon: W.RefreshIcon,
              iconPosition: "start",
          });
}
var F = n(935399),
    K = n(847374),
    B = n(265872),
    Y = n(165862),
    G = n(477782),
    $ = n(834730),
    H = n(820081),
    J = n(900797),
    Z = n(178540),
    tt = n(988436),
    te = n(614972),
    tn = n(646514),
    ts = n(200192),
    ti = n(653766),
    to = n(928264),
    tr = n(802516),
    ta = n(22363),
    tl = n(403362),
    tc = n(652215);
function tu(t) {
    let {
            quest: e,
            supportedQuestConsoles: n,
            surface: r,
            size: a,
            analyticsCtxQuestContent: l,
            analyticsCtxSourceQuestContent: c,
            analyticsCtxQuestContentPosition: d,
            analyticsCtxQuestContentRowIndex: x,
            isQuestAccessSuspended: A = !1,
        } = t,
        { xboxAccounts: I, playstationAccounts: f } = (0, o.Du)(),
        y = C.useMemo(() => {
            let t = new Set();
            return (I.length > 0 && t.add(tc.fg2.XBOX), f.length > 0 && t.add(tc.fg2.PLAYSTATION), t);
        }, [I.length, f.length]),
        g = C.useContext(te.q),
        [m, N] = (0, o.tZ)(e.id),
        [S, _] = C.useState(null),
        [Q, v] = C.useState(g?.getAutoOpen() ?? !1),
        [h, R] = C.useState(null),
        D = C.useRef(null),
        p = (0, j.go)(),
        U = (0, Z.O)((t) => t.errorHintsByQuestId.get(e.id));
    (0, F.u5)(() => {
        Q && g?.onMenuOpen();
    });
    let M = C.useCallback(
            (t) => {
                if (m === O.fO.CONSOLE && S === t && y.has(t))
                    return U?.some((t) => (0, b.$J)(t) === S) ? "error" : "connected";
            },
            [m, S, U, y],
        ),
        w = C.useCallback(
            (t) => {
                if (t === O.fO.DESKTOP) {
                    (_(null),
                        N(O.fO.DESKTOP),
                        (0, b.pu)(e, {
                            content: l,
                            ctaContent: E.Cy.OPEN_GAME_LINK,
                            impressionId: p,
                            sourceQuestContent: c,
                        }));
                    return;
                }
                (y.has(t) ||
                    (0, b.Ps)(
                        { quest: e },
                        {
                            content: l,
                            ctaContent: E.Cy.CONNECT_CONSOLE,
                            position: d,
                            rowIndex: x,
                            impressionId: p,
                            sourceQuestContent: c,
                        },
                        t,
                    ),
                    _(t),
                    N(O.fO.CONSOLE));
            },
            [y, N, e, l, d, x, c, p],
        ),
        q = C.useCallback(
            (t) => (t === O.fO.DESKTOP ? m === O.fO.DESKTOP : m === O.fO.CONSOLE && S === t && y.has(t)),
            [m, S, y],
        ),
        k = [
            ...n.map((t) => ({
                value: t,
                get label() {
                    return y.has(t)
                        ? L.intl.formatToPlainString(L.t.LEgD7t, {
                              platform: L.intl.string(t === tc.fg2.XBOX ? L.t.CoT7ML : L.t.fFl4jo),
                          })
                        : L.intl.formatToPlainString(L.t.XWSHTb, {
                              platform: L.intl.string(t === tc.fg2.XBOX ? L.t.CoT7ML : L.t.ikuLkv),
                          });
                },
            })),
            {
                value: O.fO.DESKTOP,
                get label() {
                    return L.intl.formatToPlainString(L.t.LEgD7t, { platform: L.intl.string(L.t.g6Dr44) });
                },
            },
        ],
        X = {
            buttonRef: D,
            size: a,
            fullWidth: !0,
            variant: (0, u.wX)(r, "primary"),
            text: L.intl.string(L.t.U7cCLU),
            iconPosition: "end",
        };
    return A
        ? (0, s.jsx)(i.$, { ...X, icon: K.ChevronSmallDownIcon, onClick: T.FS, "aria-disabled": !0 })
        : (0, s.jsx)(B.Y, {
              targetElementRef: D,
              position: "bottom",
              shouldShow: Q,
              onRequestOpen: () => {
                  (g?.onMenuOpen(), v(!0));
              },
              onRequestClose: () => {
                  (g?.onMenuClose(), v(!1), R(null));
              },
              renderPopout: (t) => {
                  let { closePopout: n } = t;
                  return (0, s.jsx)("div", {
                      style: { minWidth: D.current?.offsetWidth },
                      onMouseLeave: () => R(null),
                      children: (0, s.jsxs)(Y.W, {
                          "data-menu-migrated": !0,
                          navId: `play-quest-platform-select-${e.id}`,
                          "aria-label": L.intl.string(L.t["TWSB/5"]),
                          onClose: n,
                          onSelect: void 0,
                          children: [
                              (0, s.jsx)(G.rX, {
                                  children: k.map((t) => {
                                      let e = q(t.value),
                                          n = t.value === O.fO.DESKTOP && h === t.value,
                                          i = (function (t, e) {
                                              if ("connected" === e)
                                                  return {
                                                      icon: ts.ConnectionFineIcon,
                                                      color: tn.A.colors.ICON_FEEDBACK_POSITIVE.css,
                                                  };
                                              if ("error" === e)
                                                  return {
                                                      icon: ti.ConnectionUnknownIcon,
                                                      color: tn.A.colors.ICON_FEEDBACK_CRITICAL.css,
                                                  };
                                              switch (t) {
                                                  case O.fO.DESKTOP:
                                                      return { icon: to.BrowserLinkIcon, color: "currentColor" };
                                                  case tc.fg2.XBOX:
                                                      return { icon: tr.XboxNeutralIcon, color: "currentColor" };
                                                  case tc.fg2.PLAYSTATION:
                                                      return { icon: ta.PlaystationNeutralIcon, color: "currentColor" };
                                                  default:
                                                      return (0, tl.xb)(t);
                                              }
                                          })(t.value, M(t.value)),
                                          o = (function (t) {
                                              switch (t) {
                                                  case O.fO.DESKTOP:
                                                      return L.intl.string(L.t["QXc01+"]);
                                                  case tc.fg2.XBOX:
                                                      return L.intl.string(L.t.CoT7ML);
                                                  case tc.fg2.PLAYSTATION:
                                                      return L.intl.string(L.t.fFl4jo);
                                                  default:
                                                      return (0, tl.xb)(t);
                                              }
                                          })(t.value);
                                      return (0, s.jsx)(
                                          G.Dr,
                                          {
                                              id: o,
                                              void_label: (0, s.jsx)($.E, {
                                                  variant: "body-md/normal",
                                                  children: t.label,
                                              }),
                                              action: () => w(t.value),
                                              onFocus: () => R(t.value),
                                              leadingAccessory: { type: "icon", icon: i.icon, color: i.color },
                                              trailingIndicator: n
                                                  ? {
                                                        type: "icon",
                                                        icon: P.LinkExternalSmallIcon,
                                                        size: "refresh_sm",
                                                        color: "currentColor",
                                                    }
                                                  : e
                                                    ? {
                                                          type: "icon",
                                                          icon: H.CheckmarkSmallBoldIcon,
                                                          size: "refresh_sm",
                                                          color: "currentColor",
                                                      }
                                                    : void 0,
                                          },
                                          o,
                                      );
                                  }),
                              }),
                              m === O.fO.CONSOLE &&
                                  null != S &&
                                  y.has(S) &&
                                  (0, s.jsx)(G.rX, {
                                      children: (0, s.jsx)(G.Dr, {
                                          id: "play-quest-platform-select-check-connection",
                                          void_label: (0, s.jsx)($.E, {
                                              variant: "body-md/normal",
                                              children: L.intl.string(L.t.cdd1iy),
                                          }),
                                          onFocus: () => R(null),
                                          action: () => {
                                              (0, tt.i)({ quest: e, sourceQuestContent: c, refreshOnOpen: !0 });
                                          },
                                          leadingAccessory: {
                                              type: "icon",
                                              icon: W.RefreshIcon,
                                              color: "currentColor",
                                          },
                                      }),
                                  }),
                          ],
                      }),
                  });
              },
              children: (t) => (0, s.jsx)(i.$, { ...X, ...t, icon: Q ? J.ChevronSmallUpIcon : K.ChevronSmallDownIcon }),
          });
}
function tC(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: c,
            size: C,
            isQuestAccessSuspended: d,
        } = t,
        x = (0, o.RR)({ quest: e }),
        A = (0, j.wW)(),
        I = (0, o.Vn)(e),
        f = (0, o.fc)(e),
        [O, y, g] = (0, o.Qo)(e, f);
    return I || O === U.X0.DESKTOP
        ? (0, s.jsx)(i.$, {
              variant: "secondary",
              size: C,
              disabled: !0,
              text: L.intl.string(L.t["9KoPyB"]),
              fullWidth: !0,
          })
        : x && n === u.V3.QUEST_HOME_TILE_FOOTER
          ? (0, s.jsx)(i.$, {
                size: C,
                variant: "secondary",
                onClick: () => {
                    d
                        ? (0, T.FS)()
                        : (0, b.se)(
                              { quest: e },
                              {
                                  content: r,
                                  ctaContent: E.Cy.CONNECT_CONSOLE,
                                  position: l,
                                  rowIndex: c,
                                  impressionId: A(),
                                  sourceQuestContent: a,
                              },
                          );
                },
                text: L.intl.string(L.t.Cfye4v),
                fullWidth: !0,
                "aria-disabled": d || void 0,
            })
          : (0, s.jsx)(V, {
                quest: e,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: l,
                analyticsCtxQuestContentRowIndex: c,
                isQuestAccessSuspended: d,
            });
}
function td(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: o,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: l,
            size: c,
            isQuestAccessSuspended: C,
        } = t,
        { hasAlreadyLinked: d } = (0, q.U)(e),
        x = (0, j.wW)();
    if (!0 === d)
        return n === u.V3.QUEST_BAR_FOOTER
            ? (0, s.jsx)(i.$, {
                  size: c,
                  fullWidth: !0,
                  variant: "secondary",
                  text: (0, M.wr)(e),
                  onClick: () => {
                      C
                          ? (0, T.FS)()
                          : (0, b.pu)(e, {
                                content: o,
                                ctaContent: E.Cy.OPEN_GAME_LINK,
                                position: a,
                                impressionId: x(),
                                sourceQuestContent: r,
                            });
                  },
                  "aria-disabled": C || void 0,
              })
            : (0, s.jsx)(i.$, {
                  size: c,
                  fullWidth: !0,
                  variant: (0, u.wX)(n),
                  text: L.intl.string(L.t.SHZo2x),
                  onClick: () => {
                      C ? (0, T.FS)() : (0, T._x)({ quest: e, sourceQuestContent: r });
                  },
                  "aria-disabled": C || void 0,
              });
    let A = n === u.V3.QUEST_HOME_TILE_V2_FOOTER;
    return (0, s.jsx)(i.$, {
        size: c,
        fullWidth: !0,
        variant: (0, u.wX)(n),
        icon: A ? void 0 : R.ExperimentalGameControllerLinkIcon,
        text: A ? L.intl.string(L.t.SHZo2x) : L.intl.string(L.t.sbdnpw),
        "aria-disabled": C || void 0,
        onClick: () => {
            C
                ? (0, T.FS)()
                : ((0, D.r)({
                      type: p.F.CLICK_INTERNAL,
                      adCreativeType: h.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: E.Cy.OPEN_ACCOUNT_LINK_MODAL,
                      surfaceId: o,
                      sourceQuestContent: r,
                      impressionId: x(),
                      questContentPosition: a,
                      questContentRowIndex: l,
                  }),
                  (0, T._x)({ quest: e, sourceQuestContent: r }));
        },
    });
}
function tE(t) {
    let { quest: e, analyticsCtxSourceQuestContent: n, size: r, parentContainerRef: a, isQuestAccessSuspended: l } = t,
        { applications: c } = (0, o.fc)(e),
        u = { variant: "secondary", fullWidth: !0, size: r, text: L.intl.string(L.t["93PTEs"]) };
    return l
        ? (0, s.jsx)(i.$, { ...u, onClick: T.FS, "aria-disabled": !0 })
        : (0, s.jsx)(w.A, {
              quest: e,
              sourceQuestContent: n,
              applications: c ?? [],
              targetElementRef: a,
              children: (t) => (0, s.jsx)(i.$, { ...u, ...t }),
          });
}
function tx(t) {
    let {
            quest: e,
            surface: n,
            size: o,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: c,
            isQuestAccessSuspended: C,
        } = t,
        d = (0, b.bg)(e),
        x = (0, j.wW)();
    return 0 === d.length
        ? (0, s.jsx)(i.$, {
              size: o,
              fullWidth: !0,
              variant: (0, u.wX)(n, "primary"),
              text: L.intl.string(L.t.U7cCLU),
              icon: P.LinkExternalSmallIcon,
              iconPosition: "end",
              onClick: () => {
                  C
                      ? (0, T.FS)()
                      : (0, b.pu)(e, {
                            content: r,
                            ctaContent: E.Cy.OPEN_GAME_LINK,
                            position: l,
                            impressionId: x(),
                            sourceQuestContent: a,
                        });
              },
              "aria-disabled": C || void 0,
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
              isQuestAccessSuspended: C,
          });
}
let tA = function (t) {
        let {
                quest: e,
                surface: n,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: a,
                analyticsCtxQuestContentRowIndex: l,
                size: c,
                isQuestAccessSuspended: d = !1,
            } = t,
            E = C.useRef(null);
        return (0, x.I6)(e)
            ? (0, s.jsx)(td, {
                  quest: e,
                  surface: n,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: a,
                  analyticsCtxQuestContentRowIndex: l,
                  size: c,
                  isQuestAccessSuspended: d,
              })
            : (0, x.g5)(e) && n === u.V3.QUEST_HOME_TILE_FOOTER
              ? (0, s.jsx)(tC, {
                    quest: e,
                    surface: n,
                    size: c,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: a,
                    analyticsCtxQuestContentRowIndex: l,
                    isQuestAccessSuspended: d,
                })
              : (0, A.ui)(e) && n === u.V3.QUEST_BAR_FOOTER
                ? (0, s.jsx)("div", {
                      ref: E,
                      children: (0, s.jsx)(tE, {
                          quest: e,
                          analyticsCtxSourceQuestContent: r,
                          size: c,
                          parentContainerRef: E,
                          isQuestAccessSuspended: d,
                      }),
                  })
                : n === u.V3.QUEST_HOME_TILE_V2_FOOTER
                  ? (0, s.jsx)(tx, {
                        quest: e,
                        surface: n,
                        size: c,
                        analyticsCtxQuestContent: o,
                        analyticsCtxSourceQuestContent: r,
                        analyticsCtxQuestContentPosition: a,
                        analyticsCtxQuestContentRowIndex: l,
                        isQuestAccessSuspended: d,
                    })
                  : (0, s.jsx)(i.$, {
                        size: c,
                        variant: "secondary",
                        disabled: !0,
                        text: L.intl.string(L.t["9KoPyB"]),
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
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: l,
            size: c,
            isQuestAccessSuspended: u = !1,
        } = t;
        return (0, x.GL)(e)
            ? (0, s.jsx)(tA, {
                  quest: e,
                  surface: i,
                  size: c,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: a,
                  analyticsCtxQuestContentRowIndex: l,
                  isQuestAccessSuspended: u,
              })
            : (0, s.jsx)(m, {
                  quest: e,
                  taskType: n,
                  size: c,
                  surface: i,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  isQuestAccessSuspended: u,
              });
    },
    tf = function (t) {
        let { quest: e, size: n } = t,
            r = (0, o.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" });
        return (0, s.jsx)(i.$, {
            variant: "secondary",
            disabled: !0,
            fullWidth: !0,
            size: n,
            text: L.intl.format(L.t["6p8BZx"], { expiryDate: r }),
        });
    },
    tT = function (t) {
        let {
            quest: e,
            taskType: n,
            analyticsCtxQuestContent: i,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: a,
            size: l,
            surface: c,
        } = t;
        return c === u.V3.QUEST_HOME_TILE_FOOTER
            ? (0, s.jsx)(N, {
                  quest: e,
                  taskType: n,
                  size: l,
                  surface: c,
                  analyticsCtxQuestContent: i,
                  analyticsCtxSourceQuestContent: o,
                  analyticsCtxQuestContentPosition: r,
                  analyticsCtxQuestContentRowIndex: a,
              })
            : (0, s.jsx)(tf, { quest: e, size: l });
    },
    tO = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: o,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: c,
            size: C,
            isQuestAccessSuspended: d = !1,
        } = t;
        return ((0, x.t)({ quest: e }) || (0, x.g5)(e)) && o === u.V3.QUEST_BAR_FOOTER && (0, A.ui)(e)
            ? (0, s.jsx)(i.$, {
                  size: C,
                  variant: "secondary",
                  disabled: !0,
                  text: L.intl.string(L.t["9KoPyB"]),
                  fullWidth: !0,
              })
            : (0, s.jsx)(tI, {
                  quest: e,
                  taskType: n,
                  surface: o,
                  analyticsCtxQuestContent: r,
                  analyticsCtxSourceQuestContent: a,
                  analyticsCtxQuestContentPosition: l,
                  analyticsCtxQuestContentRowIndex: c,
                  size: C,
                  isQuestAccessSuspended: d,
              });
    };
var tL = n(153229),
    ty = n(18437);
function tg(t) {
    switch (t) {
        case d.n.ACHIEVEMENT_IN_ACTIVITY:
        case d.n.PLAY_ACTIVITY:
        case d.n.WATCH_VIDEO:
            return E.Cy.START_QUEST;
        default:
            return E.Cy.ACCEPT_QUEST;
    }
}
let tm = function (t) {
        var e;
        let {
                quest: n,
                taskType: r,
                size: a = "sm",
                surface: c,
                preClickCallback: A,
                isQuestAccessSuspended: y = !1,
                analyticsCtxQuestContent: g,
                analyticsCtxSourceQuestContent: m,
                analyticsCtxQuestContentPosition: N,
                analyticsCtxQuestContentRowIndex: Q,
            } = t,
            v = {
                questContent: g,
                questContentCTA: tg(r),
                sourceQuestContent: m,
                questContentPosition: N,
                questContentRowIndex: Q,
            },
            h = n.id,
            R = c === u.V3.QUEST_HOME_TILE_V2_FOOTER,
            { isEnrolling: P } = (0, S.cf)([_.A], () => ({ isEnrolling: _.A.isEnrolling(h) }), [h]),
            { icon: D, iconPosition: p } = R ? (0, T.Q_)(n) : { icon: (0, T.Oz)(n) },
            U = (0, ty.Ut)(),
            M = (function (t, e, n, s, i) {
                let { launchInGameActivity: r } = (0, o.zW)(e),
                    a = (0, j.wW)(),
                    l = C.useContext(te.q),
                    c = i === u.V3.QUEST_HOME_TILE_V2_FOOTER;
                if ((0, x.K$)(e))
                    return () => {
                        (0, T.Fy)(e);
                    };
                if (c && !(0, x.I6)(e) && (0, b.bg)(e).length > 0)
                    return () => {
                        l?.setAutoOpen(!0);
                    };
                switch (t) {
                    case d.n.ACHIEVEMENT_IN_ACTIVITY:
                    case d.n.PLAY_ACTIVITY:
                        return () => {
                            r();
                        };
                    case d.n.ACHIEVEMENT_IN_GAME:
                        return c
                            ? () => {
                                  (0, T._x)({ quest: e, sourceQuestContent: s });
                              }
                            : null;
                    case d.n.PLAY_ON_DESKTOP:
                        return c && (0, x.no)(e)
                            ? () => {
                                  (0, b.pu)(e, {
                                      content: n,
                                      ctaContent: E.Cy.OPEN_GAME_LINK,
                                      impressionId: a(),
                                      sourceQuestContent: s,
                                  });
                              }
                            : null;
                    case d.n.PLAY_ON_XBOX:
                    case d.n.PLAY_ON_PLAYSTATION:
                    default:
                        return null;
                }
            })(r, n, g, m, c),
            { badge: w } = C.useContext(f.f),
            q = R
                ? (0, l.C0)(n)
                : (function (t, e) {
                      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                          { features: s } = e.config;
                      switch (t) {
                          case d.n.WATCH_VIDEO:
                          case d.n.WATCH_VIDEO_ON_MOBILE:
                              return (0, I.WM)((0, x.Yh)(e), n && !(0, x.K$)(e));
                          case d.n.ACHIEVEMENT_IN_ACTIVITY:
                              return L.intl.string(L.t.CkUzLd);
                          case d.n.PLAY_ACTIVITY:
                              if (s.includes(O.Li.CLOUD_GAMING_ACTIVITY)) return L.intl.string(L.t["+qoymD"]);
                              return L.intl.string(L.t.E4kW5O);
                          default:
                              return L.intl.string(L.t.kUQLMJ);
                      }
                  })(r, n, w.duration),
            k =
                ((e = M ?? void 0),
                r === d.n.WATCH_VIDEO
                    ? async () => {
                          await (0, T.e0)(n, {
                              questContent: v.questContent,
                              questContentCTA: v.questContentCTA,
                              sourceQuestContent: v.sourceQuestContent,
                              sourceQuestContentCTA: tg(r),
                              questContentPosition: v.questContentPosition,
                              questContentRowIndex: v.questContentRowIndex,
                          });
                      }
                    : async () => {
                          (
                              await (0, tL.Oy)(n.id, {
                                  questContent: v.questContent,
                                  questContentCTA: v.questContentCTA,
                                  sourceQuestContent: v.sourceQuestContent,
                                  questContentPosition: v.questContentPosition,
                                  questContentRowIndex: v.questContentRowIndex,
                              })
                          ).type === tL.WM.SUCCESS && e?.();
                      });
        return (0, s.jsx)(i.$, {
            size: a,
            loading: P,
            variant: (0, u.wX)(c, "primary"),
            onClick: () => {
                if (y) {
                    (U({
                        questId: h,
                        questContent: g,
                        questContentCTA: E.Cy.QUEST_ACCESS_SUSPENDED,
                        questContentPosition: N,
                        questContentRowIndex: Q,
                        sourceQuestContent: m,
                    }),
                        (0, T.FS)());
                    return;
                }
                (A?.(), k());
            },
            text: q,
            icon: D,
            iconPosition: p,
            fullWidth: !0,
            "aria-disabled": y || void 0,
        });
    },
    tN = function (t) {
        let {
                quest: e,
                surface: n,
                preClickCallback: a,
                analyticsCtxQuestContent: l,
                analyticsCtxSourceQuestContent: c,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: d,
                size: E = "md",
            } = t,
            x = (0, u.Pd)(e),
            A = (0, o.Hv)();
        if (0 === Object.keys(e.config.taskConfigV2.tasks).length)
            return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: "sm", text: L.intl.string(L.t.P84bAD) });
        let I = (0, u.cc)(e),
            f = (function () {
                switch (x) {
                    case u.UA.UNENROLLED:
                        return (0, s.jsx)(tm, {
                            quest: e,
                            taskType: I,
                            size: E,
                            surface: n,
                            preClickCallback: a,
                            isQuestAccessSuspended: A,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: c,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                        });
                    case u.UA.ENROLLED:
                        return (0, s.jsx)(tI, {
                            quest: e,
                            taskType: I,
                            size: E,
                            isQuestAccessSuspended: A,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: c,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                            surface: n,
                        });
                    case u.UA.INCOMPLETE:
                        return (0, s.jsx)(tO, {
                            quest: e,
                            taskType: I,
                            size: E,
                            isQuestAccessSuspended: A,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: c,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                            surface: n,
                        });
                    case u.UA.EXPIRED_CLAIMABLE:
                    case u.UA.COMPLETED:
                        return (0, s.jsx)(v, {
                            quest: e,
                            size: E,
                            surface: n,
                            isQuestAccessSuspended: A,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: c,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                        });
                    case u.UA.EXPIRED_CLAIMED:
                        return (0, s.jsx)(tT, {
                            quest: e,
                            taskType: I,
                            size: E,
                            surface: n,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: c,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                        });
                    case u.UA.CLAIMED:
                        return (0, s.jsx)(N, {
                            quest: e,
                            taskType: I,
                            size: E,
                            surface: n,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: c,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                        });
                    case u.UA.EXPIRED:
                        return (0, s.jsx)(tf, { quest: e, size: E });
                    default:
                        return (0, s.jsx)(i.$, {
                            variant: "primary",
                            fullWidth: !0,
                            size: E,
                            text: L.intl.string(L.t.P84bAD),
                        });
                }
            })();
        return A && x !== u.UA.CLAIMED && x !== u.UA.EXPIRED && x !== u.UA.EXPIRED_CLAIMED
            ? (0, s.jsx)(r.A, { children: f })
            : f;
    };
