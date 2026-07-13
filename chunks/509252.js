n.d(e, { A: () => tn });
var s = n(627968),
    i = n(821609),
    o = n(801365),
    u = n(662940),
    r = n(371912),
    a = n(79545),
    l = n(412703),
    C = n(347135),
    c = n(590202),
    d = n(792620),
    E = n(814793),
    A = n(753386),
    x = n(617986),
    T = n(190107),
    _ = n(375708);
function I(t, e) {
    return l.o.VIDEO.has(t) ? c.Cy.WATCH_VIDEO : (0, E.vA)(e) ? c.Cy.START_QUEST : c.Cy.ACCEPT_QUEST;
}
function y(t, e, n, s) {
    let { launchInGameActivity: i } = (0, C.zW)(t);
    return (0, d.K$)(t)
        ? () => {
              (0, x.Fy)(t);
          }
        : (0, d.IO)(t)
          ? () => {
                (0, x.d5)({ quest: t, questContent: e, sourceQuestContent: n, sourceQuestContentCTA: s });
            }
          : (0, E.vA)(t)
            ? () => {
                  i();
              }
            : null;
}
let q = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: r,
                size: l,
                surface: c,
            } = t,
            q = (0, C.fc)(e),
            L = y(e, o, r, I(n, e)),
            N = c === a.V3.QUEST_HOME_TILE_V2_FOOTER,
            O = N ? (0, x.Q_)(e) : (0, x.Oz)(e),
            Q = N
                ? (0, u.C0)(e)
                : (function (t, e) {
                      if ((0, d.K$)(t)) return _.intl.string(_.t["/cXIc6"]);
                      if ((0, d.IO)(t)) return (0, A.WM)(e);
                      if ((0, E.vA)(t))
                          return (0, d.Ov)(t)
                              ? _.intl.string(_.t.CkUzLd)
                              : (0, d.vl)(t)
                                ? t.config.features.includes(T.Li.CLOUD_GAMING_ACTIVITY)
                                    ? _.intl.string(_.t["+qoymD"])
                                    : _.intl.string(_.t.E4kW5O)
                                : _.intl.string(_.t.l7E81v);
                      return _.intl.string(_.t["9KoPyB"]);
                  })(e, q);
        return null == L
            ? (0, s.jsx)(i.$, { size: l, variant: "secondary", disabled: !0, text: Q, fullWidth: !0 })
            : (0, s.jsx)(i.$, { size: l, variant: (0, a.wX)(c), onClick: L, text: Q, icon: O, fullWidth: !0 });
    },
    L = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: l,
                analyticsCtxSourceQuestContent: C,
                analyticsCtxQuestContentPosition: c,
                analyticsCtxQuestContentRowIndex: d,
                size: E,
                surface: A,
            } = t,
            x = A === a.V3.QUEST_HOME_TILE_V2_FOOTER,
            T = (0, o.r7)(e.config) ? _.intl.string(_.t.bAGFz3) : _.intl.string(_.t.vTgCWx),
            q = (0, r.ix)({
                quest: e,
                questContent: l,
                questContentPosition: c,
                questContentRowIndex: d,
                sourceQuestContent: C,
            }),
            L = (0, u.vj)(e),
            N = y(e, l, C, I(n, e));
        return (0, s.jsx)(i.$, { variant: (0, a.wX)(A), fullWidth: !0, size: E, onClick: x ? N : q, text: x ? L : T });
    };
var N = n(17928),
    O = n(859703),
    Q = n(630037);
let f = function (t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: u,
            analyticsCtxQuestContentRowIndex: r,
            size: l,
            surface: C,
        } = t,
        c = e.id,
        { isClaiming: d } = (0, N.cf)(
            [O.A],
            () => ({ isClaiming: O.A.isClaimingReward(c) || O.A.isFetchingRewardCode(c) }),
            [c],
        ),
        E = null != C && (0, a.P0)(C),
        A = (0, Q.D)({
            quest: e,
            questContent: n,
            sourceQuestContent: o,
            questContentPosition: u,
            questContentRowIndex: r,
            shouldRedirectToQuestHome: E,
        });
    return (0, s.jsx)(i.$, {
        variant: (0, a.wX)(C),
        fullWidth: !0,
        size: l,
        loading: d,
        onClick: A,
        text: _.intl.string(_.t.cfY4PE),
    });
};
var R = n(64700),
    P = n(323889),
    U = n(141628),
    g = n(274670),
    S = n(144779),
    D = n(24001),
    p = n(104886),
    v = n(18437),
    h = n(971649),
    j = n(651892),
    M = n(901406),
    w = n(862611),
    b = n(284846),
    m = n(862482),
    k = n(663417),
    V = n(775602),
    W = n(178540),
    z = n(411060);
function X(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: u,
            analyticsCtxQuestContentRowIndex: a,
            animateRefreshIcon: l = !0,
        } = t,
        d = (0, v.Ut)(),
        E = (0, h.wW)(),
        A = (0, N.bG)([V.Ay], () => V.Ay.useReducedMotion),
        x = (0, r.Xf)({ useReducedMotion: A }),
        T = (0, W.O)((t) => t.setErrorHints),
        [I, y] = R.useState(!1),
        { startingConsoleQuest: q, startConsoleQuest: L } = (0, C.Wj)({
            questId: e.id,
            beforeRequest: () => {
                l ? x.startAnimation() : y(!0),
                    (0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                        ? (0, g.r)({
                              type: S.F.CLICK_INTERNAL,
                              adCreativeType: P.p.QUEST,
                              adCreativeId: e.id,
                              questContentCTA: c.Cy.DEFIBRILLATOR,
                              surfaceId: n,
                              sourceQuestContent: o,
                              impressionId: E(),
                              questContentPosition: u,
                              questContentRowIndex: a,
                          })
                        : d({
                              questId: e.id,
                              questContent: n,
                              questContentCTA: c.Cy.DEFIBRILLATOR,
                              questContentPosition: u,
                              questContentRowIndex: a,
                              sourceQuestContent: o,
                          });
            },
            afterRequest: (t) => {
                l ? x.stopAnimation() : y(!1), T(e.id, t);
            },
        });
    return l
        ? (0, s.jsx)(m.$n, {
              "data-migration-pending": !0,
              color: m.XD.PRIMARY,
              onClick: L,
              disabled: q,
              className: z.x,
              children: (0, s.jsxs)("div", { className: z.t, children: [x?.render(), _.intl.string(_.t.nPThNb)] }),
          })
        : (0, s.jsx)(i.$, {
              variant: "secondary",
              onClick: L,
              disabled: q,
              loading: I,
              fullWidth: !0,
              text: _.intl.string(_.t.cdd1iy),
              icon: k.f,
              iconPosition: "start",
          });
}
function F(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: o,
            analyticsCtxSourceQuestContent: u,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: l,
            size: d,
        } = t,
        E = (0, C.RR)({ quest: e }),
        A = (0, h.wW)(),
        x = (0, C.Vn)(e),
        T = (0, C.fc)(e),
        [I, y, q] = (0, C.Qo)(e, T);
    return x || I === D.X0.DESKTOP
        ? (0, s.jsx)(i.$, {
              variant: "secondary",
              size: d,
              disabled: !0,
              text: _.intl.string(_.t["9KoPyB"]),
              fullWidth: !0,
          })
        : E && n === a.V3.QUEST_HOME_TILE_FOOTER
          ? (0, s.jsx)(i.$, {
                size: d,
                variant: "secondary",
                onClick: () => {
                    (0, M.se)(
                        { quest: e },
                        {
                            content: o,
                            ctaContent: c.Cy.CONNECT_CONSOLE,
                            position: r,
                            rowIndex: l,
                            impressionId: A(),
                            sourceQuestContent: u,
                        },
                    );
                },
                text: _.intl.string(_.t.Cfye4v),
                fullWidth: !0,
            })
          : (0, s.jsx)(X, {
                quest: e,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: u,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: l,
            });
}
function K(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: o,
            analyticsCtxSourceQuestContent: u,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: l,
            size: C,
        } = t,
        { hasAlreadyLinked: d } = (0, b.U)(e),
        E = (0, h.wW)(),
        A = (0, v.Ut)();
    if (!0 === d)
        return n === a.V3.QUEST_BAR_FOOTER
            ? (0, s.jsx)(i.$, {
                  size: C,
                  fullWidth: !0,
                  variant: "secondary",
                  text: (0, j.wr)(e),
                  onClick: () =>
                      (0, M.pu)(e, {
                          content: o,
                          ctaContent: c.Cy.OPEN_GAME_LINK,
                          position: r,
                          impressionId: E(),
                          sourceQuestContent: u,
                      }),
              })
            : (0, s.jsx)(i.$, {
                  size: C,
                  fullWidth: !0,
                  variant: (0, a.wX)(n),
                  text: _.intl.string(_.t.SHZo2x),
                  onClick: () => (0, x._x)({ quest: e, sourceQuestContent: u }),
              });
    let T = n === a.V3.QUEST_HOME_TILE_V2_FOOTER;
    return (0, s.jsx)(i.$, {
        size: C,
        fullWidth: !0,
        variant: (0, a.wX)(n),
        icon: T ? void 0 : U.A,
        text: T ? _.intl.string(_.t.SHZo2x) : _.intl.string(_.t.sbdnpw),
        onClick: () => {
            (0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                ? (0, g.r)({
                      type: S.F.CLICK_INTERNAL,
                      adCreativeType: P.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: c.Cy.OPEN_ACCOUNT_LINK_MODAL,
                      surfaceId: o,
                      sourceQuestContent: u,
                      impressionId: E(),
                      questContentPosition: r,
                      questContentRowIndex: l,
                  })
                : A({
                      questId: e.id,
                      questContent: o,
                      questContentCTA: c.Cy.OPEN_ACCOUNT_LINK_MODAL,
                      questContentPosition: r,
                      questContentRowIndex: l,
                      sourceQuestContent: u,
                  }),
                (0, x._x)({ quest: e, sourceQuestContent: u });
        },
    });
}
function Y(t) {
    let { quest: e, analyticsCtxSourceQuestContent: n, size: o, parentContainerRef: u } = t,
        { applications: r } = (0, C.fc)(e);
    return (0, s.jsx)(w.A, {
        quest: e,
        sourceQuestContent: n,
        applications: r ?? [],
        targetElementRef: u,
        children: (t) =>
            (0, s.jsx)(i.$, { variant: "secondary", fullWidth: !0, size: o, text: _.intl.string(_.t["93PTEs"]), ...t }),
    });
}
function B(t) {
    let { quest: e, surface: n, analyticsCtxSourceQuestContent: o, size: u } = t;
    return (0, s.jsx)(i.$, {
        size: u,
        fullWidth: !0,
        variant: (0, a.wX)(n, "primary"),
        text: _.intl.string(_.t.SHZo2x),
        onClick: () => (0, x.ii)({ quest: e, sourceQuestContent: o }),
    });
}
let G = function (t) {
        let {
                quest: e,
                surface: n,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: u,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: l,
                size: C,
            } = t,
            c = R.useRef(null);
        return (0, d.I6)(e)
            ? (0, s.jsx)(K, {
                  quest: e,
                  surface: n,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: u,
                  analyticsCtxQuestContentPosition: r,
                  analyticsCtxQuestContentRowIndex: l,
                  size: C,
              })
            : (0, d.g5)(e) && n === a.V3.QUEST_HOME_TILE_FOOTER
              ? (0, s.jsx)(F, {
                    quest: e,
                    surface: n,
                    size: C,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: u,
                    analyticsCtxQuestContentPosition: r,
                    analyticsCtxQuestContentRowIndex: l,
                })
              : (0, E.ui)(e) && n === a.V3.QUEST_BAR_FOOTER
                ? (0, s.jsx)("div", {
                      ref: c,
                      children: (0, s.jsx)(Y, {
                          quest: e,
                          analyticsCtxSourceQuestContent: u,
                          size: C,
                          parentContainerRef: c,
                      }),
                  })
                : n === a.V3.QUEST_HOME_TILE_V2_FOOTER
                  ? (0, s.jsx)(B, { quest: e, surface: n, analyticsCtxSourceQuestContent: u, size: C })
                  : (0, s.jsx)(i.$, {
                        size: C,
                        variant: "secondary",
                        disabled: !0,
                        text: _.intl.string(_.t["9KoPyB"]),
                        fullWidth: !0,
                    });
    },
    H = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: i,
            analyticsCtxQuestContent: o,
            analyticsCtxSourceQuestContent: u,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: a,
            size: l,
        } = t;
        return (0, d.GL)(e)
            ? (0, s.jsx)(G, {
                  quest: e,
                  surface: i,
                  size: l,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: u,
                  analyticsCtxQuestContentPosition: r,
                  analyticsCtxQuestContentRowIndex: a,
              })
            : (0, s.jsx)(q, {
                  quest: e,
                  taskType: n,
                  size: l,
                  surface: i,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: u,
              });
    },
    $ = function (t) {
        let {
                quest: e,
                taskType: n,
                surface: o,
                size: u,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: c,
                analyticsCtxQuestContentRowIndex: d,
            } = t,
            E = (0, C.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" }),
            A = e.userStatus?.claimedAt != null;
        return o === a.V3.QUEST_HOME_TILE_FOOTER && A
            ? (0, s.jsx)(L, {
                  quest: e,
                  taskType: n,
                  size: u,
                  analyticsCtxQuestContent: r,
                  analyticsCtxSourceQuestContent: l,
                  analyticsCtxQuestContentPosition: c,
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
    Z = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: o,
            analyticsCtxQuestContent: u,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: C,
            size: c,
        } = t;
        return ((0, d.t)({ quest: e }) || (0, d.g5)(e)) && o === a.V3.QUEST_BAR_FOOTER && (0, E.ui)(e)
            ? (0, s.jsx)(i.$, {
                  size: c,
                  variant: "secondary",
                  disabled: !0,
                  text: _.intl.string(_.t["9KoPyB"]),
                  fullWidth: !0,
              })
            : (0, s.jsx)(H, {
                  quest: e,
                  taskType: n,
                  surface: o,
                  analyticsCtxQuestContent: u,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: l,
                  analyticsCtxQuestContentRowIndex: C,
                  size: c,
              });
    };
var J = n(340124);
function tt(t) {
    switch (t) {
        case l.n.ACHIEVEMENT_IN_ACTIVITY:
        case l.n.PLAY_ACTIVITY:
        case l.n.WATCH_VIDEO:
            return c.Cy.START_QUEST;
        default:
            return c.Cy.ACCEPT_QUEST;
    }
}
let te = function (t) {
        var e;
        let {
                quest: n,
                taskType: o,
                size: r = "sm",
                surface: c,
                showPlayInstantlyLabel: E = !1,
                preClickCallback: I,
                analyticsCtxQuestContent: y,
                analyticsCtxSourceQuestContent: q,
                analyticsCtxQuestContentPosition: L,
                analyticsCtxQuestContentRowIndex: Q,
            } = t,
            f = {
                questContent: y,
                questContentCTA: tt(o),
                sourceQuestContent: q,
                questContentPosition: L,
                questContentRowIndex: Q,
            },
            R = n.id,
            P = c === a.V3.QUEST_HOME_TILE_V2_FOOTER,
            { isEnrolling: U } = (0, N.cf)([O.A], () => ({ isEnrolling: O.A.isEnrolling(R) }), [R]),
            g = P ? (0, x.Q_)(n) : (0, x.Oz)(n, E),
            S = (function (t, e, n, s) {
                let { launchInGameActivity: i } = (0, C.zW)(e),
                    o = s === a.V3.QUEST_HOME_TILE_V2_FOOTER;
                if ((0, d.K$)(e))
                    return () => {
                        (0, x.Fy)(e);
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
                                  (0, x._x)({ quest: e, sourceQuestContent: n });
                              }
                            : null;
                    case l.n.PLAY_ON_XBOX:
                    case l.n.PLAY_ON_PLAYSTATION:
                    case l.n.PLAY_ON_DESKTOP:
                        return o
                            ? () => {
                                  (0, x.ii)({ quest: e, sourceQuestContent: n });
                              }
                            : null;
                    default:
                        return null;
                }
            })(o, n, q, c),
            D = P
                ? (0, u.C0)(n)
                : (function (t, e) {
                      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                          { features: s } = e.config;
                      switch (t) {
                          case l.n.WATCH_VIDEO:
                              return (0, A.WM)((0, d.Yh)(e));
                          case l.n.ACHIEVEMENT_IN_ACTIVITY:
                              return _.intl.string(_.t.CkUzLd);
                          case l.n.PLAY_ACTIVITY:
                              if (s.includes(T.Li.CLOUD_GAMING_ACTIVITY))
                                  return _.intl.string(n ? _.t.V5Qt9D : _.t["+qoymD"]);
                              return _.intl.string(_.t.E4kW5O);
                          default:
                              return _.intl.string(_.t.kUQLMJ);
                      }
                  })(o, n, E),
            p =
                ((e = S ?? void 0),
                o === l.n.WATCH_VIDEO
                    ? async () => {
                          await (0, x.e0)(n, {
                              questContent: f.questContent,
                              questContentCTA: f.questContentCTA,
                              sourceQuestContent: f.sourceQuestContent,
                              sourceQuestContentCTA: tt(o),
                              questContentPosition: f.questContentPosition,
                              questContentRowIndex: f.questContentRowIndex,
                          });
                      }
                    : async () => {
                          await (0, J.Oy)(n.id, {
                              questContent: f.questContent,
                              questContentCTA: f.questContentCTA,
                              sourceQuestContent: f.sourceQuestContent,
                              questContentPosition: f.questContentPosition,
                              questContentRowIndex: f.questContentRowIndex,
                          }),
                              e?.();
                      });
        return (0, s.jsx)(i.$, {
            size: r,
            loading: U,
            variant: (0, a.wX)(c, "primary"),
            onClick: () => {
                I?.(), p();
            },
            text: D,
            icon: g,
            fullWidth: !0,
        });
    },
    tn = function (t) {
        let {
                quest: e,
                surface: n,
                preClickCallback: o,
                analyticsCtxQuestContent: u,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: l,
                analyticsCtxQuestContentRowIndex: C,
                size: c = "md",
                showPlayInstantlyLabel: d,
            } = t,
            E = (0, a.Pd)(e);
        if (0 === Object.keys(e.config.taskConfigV2.tasks).length)
            return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: "sm", text: _.intl.string(_.t.P84bAD) });
        let A = Object.values(e.config.taskConfigV2.tasks)[0];
        switch (E) {
            case a.UA.UNENROLLED:
                return (0, s.jsx)(te, {
                    quest: e,
                    taskType: A.type,
                    size: c,
                    surface: n,
                    showPlayInstantlyLabel: d,
                    preClickCallback: o,
                    analyticsCtxQuestContent: u,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: C,
                });
            case a.UA.ENROLLED:
                return (0, s.jsx)(H, {
                    quest: e,
                    taskType: A.type,
                    size: c,
                    analyticsCtxQuestContent: u,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: C,
                    surface: n,
                });
            case a.UA.INCOMPLETE:
                return (0, s.jsx)(Z, {
                    quest: e,
                    taskType: A.type,
                    size: c,
                    analyticsCtxQuestContent: u,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: C,
                    surface: n,
                });
            case a.UA.EXPIRED_CLAIMABLE:
            case a.UA.COMPLETED:
                return (0, s.jsx)(f, {
                    quest: e,
                    size: c,
                    surface: n,
                    analyticsCtxQuestContent: u,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: C,
                });
            case a.UA.CLAIMED:
                return (0, s.jsx)(L, {
                    quest: e,
                    taskType: A.type,
                    size: c,
                    surface: n,
                    analyticsCtxQuestContent: u,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: C,
                });
            case a.UA.EXPIRED:
                return (0, s.jsx)($, {
                    quest: e,
                    taskType: A.type,
                    surface: n,
                    size: c,
                    analyticsCtxQuestContent: u,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: C,
                });
            default:
                return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: c, text: _.intl.string(_.t.P84bAD) });
        }
    };
