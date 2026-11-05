n.d(e, { A: () => tm });
var s = n(477900),
    i = n(821609),
    o = n(61387),
    r = n(608935),
    a = n(417404),
    l = n(662940),
    c = n(201805),
    u = n(79545),
    C = n(412703),
    d = n(590202),
    E = n(792620),
    x = n(814793),
    A = n(753386),
    I = n(321538),
    f = n(221596),
    T = n(792996);
function O(t, e) {
    return C.o.VIDEO.has(t) ? d.Cy.WATCH_VIDEO : (0, x.vA)(e) ? d.Cy.START_QUEST : d.Cy.ACCEPT_QUEST;
}
function L(t, e, n, s) {
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
let y = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: a,
                size: c,
                surface: C,
                isQuestAccessSuspended: d = !1,
            } = t,
            y = (0, o.fc)(e),
            g = L(e, r, a, O(n, e)),
            m = C === u.V3.QUEST_HOME_TILE_V2_FOOTER,
            N = m ? (0, I.Q_)(e).icon : (0, I.Oz)(e),
            S = m
                ? (0, l.C0)(e)
                : (function (t, e) {
                      if ((0, E.K$)(t)) return T.intl.string(T.t["/cXIc6"]);
                      if ((0, E.IO)(t)) return (0, A.WM)(e);
                      if ((0, x.vA)(t))
                          return (0, E.Ov)(t)
                              ? T.intl.string(T.t.CkUzLd)
                              : (0, E.vl)(t)
                                ? t.config.features.includes(f.Li.CLOUD_GAMING_ACTIVITY)
                                    ? T.intl.string(T.t["+qoymD"])
                                    : T.intl.string(T.t.E4kW5O)
                                : T.intl.string(T.t.l7E81v);
                      return T.intl.string(T.t["9KoPyB"]);
                  })(e, y);
        return null == g
            ? (0, s.jsx)(i.$, { size: c, variant: "secondary", disabled: !0, text: S, fullWidth: !0 })
            : (0, s.jsx)(i.$, {
                  size: c,
                  variant: (0, u.wX)(C),
                  onClick: d ? I.FS : g,
                  text: S,
                  icon: N,
                  fullWidth: !0,
                  "aria-disabled": d || void 0,
              });
    },
    g = function (t) {
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
            I = (0, a.r7)(e.config) ? T.intl.string(T.t.bAGFz3) : T.intl.string(T.t.vTgCWx),
            f = (0, c.ix)({
                quest: e,
                questContent: o,
                questContentPosition: C,
                questContentRowIndex: d,
                sourceQuestContent: r,
            }),
            y = (0, l.vj)(e),
            g = L(e, o, r, O(n, e));
        return (0, s.jsx)(i.$, { variant: (0, u.wX)(x), fullWidth: !0, size: E, onClick: A ? g : f, text: A ? y : I });
    };
var m = n(855986),
    N = n(859703),
    S = n(630037);
let _ = function (t) {
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
        { isClaiming: E } = (0, m.cf)(
            [N.A],
            () => ({ isClaiming: N.A.isClaimingReward(d) || N.A.isFetchingRewardCode(d) }),
            [d],
        ),
        x = null != c && (0, u.P0)(c),
        A = (0, S.D)({
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
        onClick: C ? I.FS : A,
        text: T.intl.string(T.t.cfY4PE),
        "aria-disabled": C || void 0,
    });
};
var Q = n(582128),
    R = n(323889),
    h = n(141628),
    v = n(509434),
    P = n(438457),
    D = n(144779),
    p = n(506988),
    U = n(971649),
    j = n(651892),
    M = n(574112),
    b = n(194267),
    w = n(284846),
    q = n(862482),
    k = n(663417),
    W = n(775602),
    X = n(248489);
function z(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: l,
            animateRefreshIcon: u = !0,
            isQuestAccessSuspended: C = !1,
        } = t,
        E = (0, U.wW)(),
        x = (0, m.bG)([W.Ay], () => W.Ay.useReducedMotion),
        A = (0, c.Xf)({ useReducedMotion: x }),
        [f, O] = Q.useState(!1),
        { startingConsoleQuest: L, startConsoleQuest: y } = (0, o.Wj)({
            questId: e.id,
            beforeRequest: () => {
                (u ? A.startAnimation() : O(!0),
                    (0, P.r)({
                        type: D.F.CLICK_INTERNAL,
                        adCreativeType: R.p.QUEST,
                        adCreativeId: e.id,
                        questContentCTA: d.Cy.DEFIBRILLATOR,
                        surfaceId: n,
                        sourceQuestContent: r,
                        impressionId: E(),
                        questContentPosition: a,
                        questContentRowIndex: l,
                    }));
            },
            afterRequest: () => {
                u ? A.stopAnimation() : O(!1);
            },
        }),
        g = C ? I.FS : y;
    return u
        ? (0, s.jsx)(q.$n, {
              "data-migration-pending": !0,
              color: q.XD.PRIMARY,
              onClick: g,
              disabled: L,
              "aria-disabled": C || void 0,
              className: X.x,
              children: (0, s.jsxs)("div", { className: X.t, children: [A?.render(), T.intl.string(T.t.nPThNb)] }),
          })
        : (0, s.jsx)(i.$, {
              variant: "secondary",
              onClick: g,
              disabled: L,
              "aria-disabled": C || void 0,
              loading: f,
              fullWidth: !0,
              text: T.intl.string(T.t.cdd1iy),
              icon: k.RefreshIcon,
              iconPosition: "start",
          });
}
var V = n(935399),
    F = n(847374),
    K = n(265872),
    B = n(165862),
    Y = n(477782),
    G = n(834730),
    $ = n(820081),
    H = n(900797),
    J = n(178540),
    Z = n(988436),
    tt = n(614972),
    te = n(646514),
    tn = n(200192),
    ts = n(653766),
    ti = n(928264),
    to = n(802516),
    tr = n(22363),
    ta = n(403362),
    tl = n(652215);
function tc(t) {
    let {
            quest: e,
            supportedQuestConsoles: n,
            surface: r,
            size: a,
            analyticsCtxQuestContent: l,
            analyticsCtxSourceQuestContent: c,
            analyticsCtxQuestContentPosition: C,
            analyticsCtxQuestContentRowIndex: E,
            isQuestAccessSuspended: x = !1,
        } = t,
        { xboxAccounts: A, playstationAccounts: O } = (0, o.Du)(),
        L = Q.useMemo(() => {
            let t = new Set();
            return (A.length > 0 && t.add(tl.fg2.XBOX), O.length > 0 && t.add(tl.fg2.PLAYSTATION), t);
        }, [A.length, O.length]),
        y = Q.useContext(tt.q),
        [g, m] = (0, o.tZ)(e.id),
        [N, S] = Q.useState(null),
        [_, R] = Q.useState(y?.getAutoOpen() ?? !1),
        [h, P] = Q.useState(null),
        D = Q.useRef(null),
        p = (0, U.go)(),
        j = (0, J.O)((t) => t.errorHintsByQuestId.get(e.id));
    (0, V.u5)(() => {
        _ && y?.onMenuOpen();
    });
    let b = Q.useCallback(
            (t) => {
                if (g === f.fO.CONSOLE && N === t && L.has(t))
                    return j?.some((t) => (0, M.$J)(t) === N) ? "error" : "connected";
            },
            [g, N, j, L],
        ),
        w = Q.useCallback(
            (t) => {
                if (t === f.fO.DESKTOP) {
                    (S(null),
                        m(f.fO.DESKTOP),
                        (0, M.pu)(e, {
                            content: l,
                            ctaContent: d.Cy.OPEN_GAME_LINK,
                            impressionId: p,
                            sourceQuestContent: c,
                        }));
                    return;
                }
                (L.has(t) ||
                    (0, M.Ps)(
                        { quest: e },
                        {
                            content: l,
                            ctaContent: d.Cy.CONNECT_CONSOLE,
                            position: C,
                            rowIndex: E,
                            impressionId: p,
                            sourceQuestContent: c,
                        },
                        t,
                    ),
                    S(t),
                    m(f.fO.CONSOLE));
            },
            [L, m, e, l, C, E, c, p],
        ),
        q = Q.useCallback(
            (t) => (t === f.fO.DESKTOP ? g === f.fO.DESKTOP : g === f.fO.CONSOLE && N === t && L.has(t)),
            [g, N, L],
        ),
        W = [
            ...n.map((t) => ({
                value: t,
                get label() {
                    return L.has(t)
                        ? T.intl.formatToPlainString(T.t.LEgD7t, {
                              platform: T.intl.string(t === tl.fg2.XBOX ? T.t.CoT7ML : T.t.fFl4jo),
                          })
                        : T.intl.formatToPlainString(T.t.XWSHTb, {
                              platform: T.intl.string(t === tl.fg2.XBOX ? T.t.CoT7ML : T.t.ikuLkv),
                          });
                },
            })),
            {
                value: f.fO.DESKTOP,
                get label() {
                    return T.intl.formatToPlainString(T.t.LEgD7t, { platform: T.intl.string(T.t.g6Dr44) });
                },
            },
        ],
        X = {
            buttonRef: D,
            size: a,
            fullWidth: !0,
            variant: (0, u.wX)(r, "primary"),
            text: T.intl.string(T.t.U7cCLU),
            iconPosition: "end",
        };
    return x
        ? (0, s.jsx)(i.$, { ...X, icon: F.ChevronSmallDownIcon, onClick: I.FS, "aria-disabled": !0 })
        : (0, s.jsx)(K.Y, {
              targetElementRef: D,
              position: "bottom",
              shouldShow: _,
              onRequestOpen: () => {
                  (y?.onMenuOpen(), R(!0));
              },
              onRequestClose: () => {
                  (y?.onMenuClose(), R(!1), P(null));
              },
              renderPopout: (t) => {
                  let { closePopout: n } = t;
                  return (0, s.jsx)("div", {
                      style: { minWidth: D.current?.offsetWidth },
                      onMouseLeave: () => P(null),
                      children: (0, s.jsxs)(B.W, {
                          "data-menu-migrated": !0,
                          navId: `play-quest-platform-select-${e.id}`,
                          "aria-label": T.intl.string(T.t["TWSB/5"]),
                          onClose: n,
                          onSelect: void 0,
                          children: [
                              (0, s.jsx)(Y.rX, {
                                  children: W.map((t) => {
                                      let e = q(t.value),
                                          n = t.value === f.fO.DESKTOP && h === t.value,
                                          i = (function (t, e) {
                                              if ("connected" === e)
                                                  return {
                                                      icon: tn.ConnectionFineIcon,
                                                      color: te.A.colors.ICON_FEEDBACK_POSITIVE.css,
                                                  };
                                              if ("error" === e)
                                                  return {
                                                      icon: ts.ConnectionUnknownIcon,
                                                      color: te.A.colors.ICON_FEEDBACK_CRITICAL.css,
                                                  };
                                              switch (t) {
                                                  case f.fO.DESKTOP:
                                                      return { icon: ti.BrowserLinkIcon, color: "currentColor" };
                                                  case tl.fg2.XBOX:
                                                      return { icon: to.XboxNeutralIcon, color: "currentColor" };
                                                  case tl.fg2.PLAYSTATION:
                                                      return { icon: tr.PlaystationNeutralIcon, color: "currentColor" };
                                                  default:
                                                      return (0, ta.xb)(t);
                                              }
                                          })(t.value, b(t.value)),
                                          o = (function (t) {
                                              switch (t) {
                                                  case f.fO.DESKTOP:
                                                      return T.intl.string(T.t["QXc01+"]);
                                                  case tl.fg2.XBOX:
                                                      return T.intl.string(T.t.CoT7ML);
                                                  case tl.fg2.PLAYSTATION:
                                                      return T.intl.string(T.t.fFl4jo);
                                                  default:
                                                      return (0, ta.xb)(t);
                                              }
                                          })(t.value);
                                      return (0, s.jsx)(
                                          Y.Dr,
                                          {
                                              id: o,
                                              void_label: (0, s.jsx)(G.E, {
                                                  variant: "body-md/normal",
                                                  children: t.label,
                                              }),
                                              action: () => w(t.value),
                                              onFocus: () => P(t.value),
                                              leadingAccessory: { type: "icon", icon: i.icon, color: i.color },
                                              trailingIndicator: n
                                                  ? {
                                                        type: "icon",
                                                        icon: v.LinkExternalSmallIcon,
                                                        size: "refresh_sm",
                                                        color: "currentColor",
                                                    }
                                                  : e
                                                    ? {
                                                          type: "icon",
                                                          icon: $.CheckmarkSmallBoldIcon,
                                                          size: "refresh_sm",
                                                          color: "currentColor",
                                                      }
                                                    : void 0,
                                          },
                                          o,
                                      );
                                  }),
                              }),
                              g === f.fO.CONSOLE &&
                                  null != N &&
                                  L.has(N) &&
                                  (0, s.jsx)(Y.rX, {
                                      children: (0, s.jsx)(Y.Dr, {
                                          id: "play-quest-platform-select-check-connection",
                                          void_label: (0, s.jsx)(G.E, {
                                              variant: "body-md/normal",
                                              children: T.intl.string(T.t.cdd1iy),
                                          }),
                                          onFocus: () => P(null),
                                          action: () => {
                                              (0, Z.i)({ quest: e, sourceQuestContent: c, refreshOnOpen: !0 });
                                          },
                                          leadingAccessory: {
                                              type: "icon",
                                              icon: k.RefreshIcon,
                                              color: "currentColor",
                                          },
                                      }),
                                  }),
                          ],
                      }),
                  });
              },
              children: (t) => (0, s.jsx)(i.$, { ...X, ...t, icon: _ ? H.ChevronSmallUpIcon : F.ChevronSmallDownIcon }),
          });
}
function tu(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: c,
            size: C,
            isQuestAccessSuspended: E,
        } = t,
        x = (0, o.RR)({ quest: e }),
        A = (0, U.wW)(),
        f = (0, o.Vn)(e),
        O = (0, o.fc)(e),
        [L, y, g] = (0, o.Qo)(e, O);
    return f || L === p.X0.DESKTOP
        ? (0, s.jsx)(i.$, {
              variant: "secondary",
              size: C,
              disabled: !0,
              text: T.intl.string(T.t["9KoPyB"]),
              fullWidth: !0,
          })
        : x && n === u.V3.QUEST_HOME_TILE_FOOTER
          ? (0, s.jsx)(i.$, {
                size: C,
                variant: "secondary",
                onClick: () => {
                    E
                        ? (0, I.FS)()
                        : (0, M.se)(
                              { quest: e },
                              {
                                  content: r,
                                  ctaContent: d.Cy.CONNECT_CONSOLE,
                                  position: l,
                                  rowIndex: c,
                                  impressionId: A(),
                                  sourceQuestContent: a,
                              },
                          );
                },
                text: T.intl.string(T.t.Cfye4v),
                fullWidth: !0,
                "aria-disabled": E || void 0,
            })
          : (0, s.jsx)(z, {
                quest: e,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: l,
                analyticsCtxQuestContentRowIndex: c,
                isQuestAccessSuspended: E,
            });
}
function tC(t) {
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
        { hasAlreadyLinked: E } = (0, w.U)(e),
        x = (0, U.wW)();
    if (!0 === E)
        return n === u.V3.QUEST_BAR_FOOTER
            ? (0, s.jsx)(i.$, {
                  size: c,
                  fullWidth: !0,
                  variant: "secondary",
                  text: (0, j.wr)(e),
                  onClick: () => {
                      C
                          ? (0, I.FS)()
                          : (0, M.pu)(e, {
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
                  size: c,
                  fullWidth: !0,
                  variant: (0, u.wX)(n),
                  text: T.intl.string(T.t.SHZo2x),
                  onClick: () => {
                      C ? (0, I.FS)() : (0, I._x)({ quest: e, sourceQuestContent: r });
                  },
                  "aria-disabled": C || void 0,
              });
    let A = n === u.V3.QUEST_HOME_TILE_V2_FOOTER;
    return (0, s.jsx)(i.$, {
        size: c,
        fullWidth: !0,
        variant: (0, u.wX)(n),
        icon: A ? void 0 : h.ExperimentalGameControllerLinkIcon,
        text: A ? T.intl.string(T.t.SHZo2x) : T.intl.string(T.t.sbdnpw),
        "aria-disabled": C || void 0,
        onClick: () => {
            C
                ? (0, I.FS)()
                : ((0, P.r)({
                      type: D.F.CLICK_INTERNAL,
                      adCreativeType: R.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: d.Cy.OPEN_ACCOUNT_LINK_MODAL,
                      surfaceId: o,
                      sourceQuestContent: r,
                      impressionId: x(),
                      questContentPosition: a,
                      questContentRowIndex: l,
                  }),
                  (0, I._x)({ quest: e, sourceQuestContent: r }));
        },
    });
}
function td(t) {
    let { quest: e, analyticsCtxSourceQuestContent: n, size: r, parentContainerRef: a, isQuestAccessSuspended: l } = t,
        { applications: c } = (0, o.fc)(e),
        u = { variant: "secondary", fullWidth: !0, size: r, text: T.intl.string(T.t["93PTEs"]) };
    return l
        ? (0, s.jsx)(i.$, { ...u, onClick: I.FS, "aria-disabled": !0 })
        : (0, s.jsx)(b.A, {
              quest: e,
              sourceQuestContent: n,
              applications: c ?? [],
              targetElementRef: a,
              children: (t) => (0, s.jsx)(i.$, { ...u, ...t }),
          });
}
function tE(t) {
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
        E = (0, M.bg)(e),
        x = (0, U.wW)();
    return 0 === E.length
        ? (0, s.jsx)(i.$, {
              size: o,
              fullWidth: !0,
              variant: (0, u.wX)(n, "primary"),
              text: T.intl.string(T.t.U7cCLU),
              icon: v.LinkExternalSmallIcon,
              iconPosition: "end",
              onClick: () => {
                  C
                      ? (0, I.FS)()
                      : (0, M.pu)(e, {
                            content: r,
                            ctaContent: d.Cy.OPEN_GAME_LINK,
                            position: l,
                            impressionId: x(),
                            sourceQuestContent: a,
                        });
              },
              "aria-disabled": C || void 0,
          })
        : (0, s.jsx)(tc, {
              quest: e,
              supportedQuestConsoles: E,
              surface: n,
              size: o,
              analyticsCtxQuestContent: r,
              analyticsCtxSourceQuestContent: a,
              analyticsCtxQuestContentPosition: l,
              analyticsCtxQuestContentRowIndex: c,
              isQuestAccessSuspended: C,
          });
}
let tx = function (t) {
        let {
                quest: e,
                surface: n,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: a,
                analyticsCtxQuestContentRowIndex: l,
                size: c,
                isQuestAccessSuspended: C = !1,
            } = t,
            d = Q.useRef(null);
        return (0, E.I6)(e)
            ? (0, s.jsx)(tC, {
                  quest: e,
                  surface: n,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: a,
                  analyticsCtxQuestContentRowIndex: l,
                  size: c,
                  isQuestAccessSuspended: C,
              })
            : (0, E.g5)(e) && n === u.V3.QUEST_HOME_TILE_FOOTER
              ? (0, s.jsx)(tu, {
                    quest: e,
                    surface: n,
                    size: c,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: a,
                    analyticsCtxQuestContentRowIndex: l,
                    isQuestAccessSuspended: C,
                })
              : (0, x.ui)(e) && n === u.V3.QUEST_BAR_FOOTER
                ? (0, s.jsx)("div", {
                      ref: d,
                      children: (0, s.jsx)(td, {
                          quest: e,
                          analyticsCtxSourceQuestContent: r,
                          size: c,
                          parentContainerRef: d,
                          isQuestAccessSuspended: C,
                      }),
                  })
                : n === u.V3.QUEST_HOME_TILE_V2_FOOTER
                  ? (0, s.jsx)(tE, {
                        quest: e,
                        surface: n,
                        size: c,
                        analyticsCtxQuestContent: o,
                        analyticsCtxSourceQuestContent: r,
                        analyticsCtxQuestContentPosition: a,
                        analyticsCtxQuestContentRowIndex: l,
                        isQuestAccessSuspended: C,
                    })
                  : (0, s.jsx)(i.$, {
                        size: c,
                        variant: "secondary",
                        disabled: !0,
                        text: T.intl.string(T.t["9KoPyB"]),
                        fullWidth: !0,
                    });
    },
    tA = function (t) {
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
        return (0, E.GL)(e)
            ? (0, s.jsx)(tx, {
                  quest: e,
                  surface: i,
                  size: c,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: a,
                  analyticsCtxQuestContentRowIndex: l,
                  isQuestAccessSuspended: u,
              })
            : (0, s.jsx)(y, {
                  quest: e,
                  taskType: n,
                  size: c,
                  surface: i,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  isQuestAccessSuspended: u,
              });
    },
    tI = function (t) {
        let { quest: e, size: n } = t,
            r = (0, o.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" });
        return (0, s.jsx)(i.$, {
            variant: "secondary",
            disabled: !0,
            fullWidth: !0,
            size: n,
            text: T.intl.format(T.t["6p8BZx"], { expiryDate: r }),
        });
    },
    tf = function (t) {
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
            ? (0, s.jsx)(g, {
                  quest: e,
                  taskType: n,
                  size: l,
                  surface: c,
                  analyticsCtxQuestContent: i,
                  analyticsCtxSourceQuestContent: o,
                  analyticsCtxQuestContentPosition: r,
                  analyticsCtxQuestContentRowIndex: a,
              })
            : (0, s.jsx)(tI, { quest: e, size: l });
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
            isQuestAccessSuspended: d = !1,
        } = t;
        return ((0, E.t)({ quest: e }) || (0, E.g5)(e)) && o === u.V3.QUEST_BAR_FOOTER && (0, x.ui)(e)
            ? (0, s.jsx)(i.$, {
                  size: C,
                  variant: "secondary",
                  disabled: !0,
                  text: T.intl.string(T.t["9KoPyB"]),
                  fullWidth: !0,
              })
            : (0, s.jsx)(tA, {
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
var tO = n(343559),
    tL = n(18437);
function ty(t) {
    switch (t) {
        case C.n.ACHIEVEMENT_IN_ACTIVITY:
        case C.n.PLAY_ACTIVITY:
        case C.n.WATCH_VIDEO:
            return d.Cy.START_QUEST;
        default:
            return d.Cy.ACCEPT_QUEST;
    }
}
let tg = function (t) {
        var e;
        let {
                quest: n,
                taskType: r,
                size: a = "sm",
                surface: c,
                preClickCallback: x,
                isQuestAccessSuspended: O = !1,
                analyticsCtxQuestContent: L,
                analyticsCtxSourceQuestContent: y,
                analyticsCtxQuestContentPosition: g,
                analyticsCtxQuestContentRowIndex: S,
            } = t,
            _ = {
                questContent: L,
                questContentCTA: ty(r),
                sourceQuestContent: y,
                questContentPosition: g,
                questContentRowIndex: S,
            },
            R = n.id,
            h = c === u.V3.QUEST_HOME_TILE_V2_FOOTER,
            { isEnrolling: v } = (0, m.cf)([N.A], () => ({ isEnrolling: N.A.isEnrolling(R) }), [R]),
            { icon: P, iconPosition: D } = h ? (0, I.Q_)(n) : { icon: (0, I.Oz)(n) },
            p = (0, tL.Ut)(),
            j = (function (t, e, n, s, i) {
                let { launchInGameActivity: r } = (0, o.zW)(e),
                    a = (0, U.wW)(),
                    l = Q.useContext(tt.q),
                    c = i === u.V3.QUEST_HOME_TILE_V2_FOOTER;
                if ((0, E.K$)(e))
                    return () => {
                        (0, I.Fy)(e);
                    };
                if (c && !(0, E.I6)(e) && (0, M.bg)(e).length > 0)
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
                        return c
                            ? () => {
                                  (0, I._x)({ quest: e, sourceQuestContent: s });
                              }
                            : null;
                    case C.n.PLAY_ON_DESKTOP:
                        return c && (0, E.no)(e)
                            ? () => {
                                  (0, M.pu)(e, {
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
            })(r, n, L, y, c),
            b = h
                ? (0, l.C0)(n)
                : (function (t, e) {
                      let { features: n } = e.config;
                      switch (t) {
                          case C.n.WATCH_VIDEO:
                          case C.n.WATCH_VIDEO_ON_MOBILE:
                              return (0, A.WM)((0, E.Yh)(e));
                          case C.n.ACHIEVEMENT_IN_ACTIVITY:
                              return T.intl.string(T.t.CkUzLd);
                          case C.n.PLAY_ACTIVITY:
                              if (n.includes(f.Li.CLOUD_GAMING_ACTIVITY)) return T.intl.string(T.t["+qoymD"]);
                              return T.intl.string(T.t.E4kW5O);
                          default:
                              return T.intl.string(T.t.kUQLMJ);
                      }
                  })(r, n),
            w =
                ((e = j ?? void 0),
                r === C.n.WATCH_VIDEO
                    ? async () => {
                          await (0, I.e0)(n, {
                              questContent: _.questContent,
                              questContentCTA: _.questContentCTA,
                              sourceQuestContent: _.sourceQuestContent,
                              sourceQuestContentCTA: ty(r),
                              questContentPosition: _.questContentPosition,
                              questContentRowIndex: _.questContentRowIndex,
                          });
                      }
                    : async () => {
                          (
                              await (0, tO.Oy)(n.id, {
                                  questContent: _.questContent,
                                  questContentCTA: _.questContentCTA,
                                  sourceQuestContent: _.sourceQuestContent,
                                  questContentPosition: _.questContentPosition,
                                  questContentRowIndex: _.questContentRowIndex,
                              })
                          ).type === tO.WM.SUCCESS && e?.();
                      });
        return (0, s.jsx)(i.$, {
            size: a,
            loading: v,
            variant: (0, u.wX)(c, "primary"),
            onClick: () => {
                if (O) {
                    (p({
                        questId: R,
                        questContent: L,
                        questContentCTA: d.Cy.QUEST_ACCESS_SUSPENDED,
                        questContentPosition: g,
                        questContentRowIndex: S,
                        sourceQuestContent: y,
                    }),
                        (0, I.FS)());
                    return;
                }
                (x?.(), w());
            },
            text: b,
            icon: P,
            iconPosition: D,
            fullWidth: !0,
            "aria-disabled": O || void 0,
        });
    },
    tm = function (t) {
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
            return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: "sm", text: T.intl.string(T.t.P84bAD) });
        let I = (0, u.cc)(e),
            f = (function () {
                switch (x) {
                    case u.UA.UNENROLLED:
                        return (0, s.jsx)(tg, {
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
                        return (0, s.jsx)(tA, {
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
                        return (0, s.jsx)(tT, {
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
                        return (0, s.jsx)(_, {
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
                        return (0, s.jsx)(tf, {
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
                        return (0, s.jsx)(g, {
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
                        return (0, s.jsx)(tI, { quest: e, size: E });
                    default:
                        return (0, s.jsx)(i.$, {
                            variant: "primary",
                            fullWidth: !0,
                            size: E,
                            text: T.intl.string(T.t.P84bAD),
                        });
                }
            })();
        return A && x !== u.UA.CLAIMED && x !== u.UA.EXPIRED && x !== u.UA.EXPIRED_CLAIMED
            ? (0, s.jsx)(r.A, { children: f })
            : f;
    };
