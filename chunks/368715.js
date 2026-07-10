n.d(e, { A: () => te });
var s = n(627968),
    i = n(821609),
    o = n(801365),
    u = n(662940),
    r = n(371912),
    a = n(79545),
    l = n(412703),
    C = n(347135),
    c = n(590202),
    E = n(792620),
    d = n(814793),
    A = n(753386),
    x = n(617986),
    T = n(190107),
    _ = n(375708);
function I(t, e) {
    return l.o.VIDEO.has(t) ? c.Cy.WATCH_VIDEO : (0, d.vA)(e) ? c.Cy.START_QUEST : c.Cy.ACCEPT_QUEST;
}
function q(t, e, n, s) {
    let { launchInGameActivity: i } = (0, C.zW)(t);
    return (0, E.K$)(t)
        ? () => {
              (0, x.Fy)(t);
          }
        : (0, E.IO)(t)
          ? () => {
                (0, x.d5)({ quest: t, questContent: e, sourceQuestContent: n, sourceQuestContentCTA: s });
            }
          : (0, d.vA)(t)
            ? () => {
                  i();
              }
            : null;
}
let y = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: r,
                size: l,
                surface: c,
            } = t,
            y = (0, C.fc)(e),
            L = q(e, o, r, I(n, e)),
            N = c === a.V3.QUEST_HOME_TILE_V2_FOOTER,
            O = N ? (0, x.Q_)(e) : (0, x.Oz)(e),
            Q = N
                ? (0, u.C0)(e)
                : (function (t, e) {
                      if ((0, E.K$)(t)) return _.intl.string(_.t["/cXIc6"]);
                      if ((0, E.IO)(t)) return (0, A.WM)(e);
                      if ((0, d.vA)(t))
                          return (0, E.Ov)(t)
                              ? _.intl.string(_.t.CkUzLd)
                              : (0, E.vl)(t)
                                ? t.config.features.includes(T.Li.CLOUD_GAMING_ACTIVITY)
                                    ? _.intl.string(_.t["+qoymD"])
                                    : _.intl.string(_.t.E4kW5O)
                                : _.intl.string(_.t.l7E81v);
                      return _.intl.string(_.t["9KoPyB"]);
                  })(e, y);
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
                analyticsCtxQuestContentRowIndex: E,
                size: d,
                surface: A,
            } = t,
            x = A === a.V3.QUEST_HOME_TILE_V2_FOOTER,
            T = (0, o.r7)(e.config) ? _.intl.string(_.t.bAGFz3) : _.intl.string(_.t.vTgCWx),
            y = (0, r.ix)({
                quest: e,
                questContent: l,
                questContentPosition: c,
                questContentRowIndex: E,
                sourceQuestContent: C,
            }),
            L = (0, u.vj)(e),
            N = q(e, l, C, I(n, e));
        return (0, s.jsx)(i.$, { variant: (0, a.wX)(A), fullWidth: !0, size: d, onClick: x ? N : y, text: x ? L : T });
    };
var N = n(17928),
    O = n(859703),
    Q = n(630037);
let R = function (t) {
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
        { isClaiming: E } = (0, N.cf)(
            [O.A],
            () => ({ isClaiming: O.A.isClaimingReward(c) || O.A.isFetchingRewardCode(c) }),
            [c],
        ),
        d = null != C && (0, a.P0)(C),
        A = (0, Q.D)({
            quest: e,
            questContent: n,
            sourceQuestContent: o,
            questContentPosition: u,
            questContentRowIndex: r,
            shouldRedirectToQuestHome: d,
        });
    return (0, s.jsx)(i.$, {
        variant: (0, a.wX)(C),
        fullWidth: !0,
        size: l,
        loading: E,
        onClick: A,
        text: _.intl.string(_.t.cfY4PE),
    });
};
var f = n(64700),
    P = n(323889),
    U = n(141628),
    S = n(862482),
    g = n(775602),
    D = n(274670),
    p = n(144779),
    v = n(178540),
    h = n(24001),
    j = n(104886),
    M = n(18437),
    w = n(971649),
    m = n(651892),
    b = n(901406),
    k = n(862611),
    V = n(284846),
    W = n(263752);
function z(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: i,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: u,
        } = t,
        a = (0, M.Ut)(),
        l = (0, w.wW)(),
        E = (0, N.bG)([g.Ay], () => g.Ay.useReducedMotion),
        d = (0, r.Xf)({ useReducedMotion: E }),
        A = (0, v.O)((t) => t.setErrorHints),
        { startingConsoleQuest: x, startConsoleQuest: T } = (0, C.Wj)({
            questId: e.id,
            beforeRequest: () => {
                d.startAnimation(),
                    (0, j.E5)(j.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                        ? (0, D.r)({
                              type: p.F.CLICK_INTERNAL,
                              adCreativeType: P.p.QUEST,
                              adCreativeId: e.id,
                              questContentCTA: c.Cy.DEFIBRILLATOR,
                              surfaceId: n,
                              sourceQuestContent: i,
                              impressionId: l(),
                              questContentPosition: o,
                              questContentRowIndex: u,
                          })
                        : a({
                              questId: e.id,
                              questContent: n,
                              questContentCTA: c.Cy.DEFIBRILLATOR,
                              questContentPosition: o,
                              questContentRowIndex: u,
                              sourceQuestContent: i,
                          });
            },
            afterRequest: (t) => {
                d.stopAnimation(), A(e.id, t);
            },
        });
    return (0, s.jsx)(S.$n, {
        "data-migration-pending": !0,
        color: S.XD.PRIMARY,
        onClick: T,
        disabled: x,
        className: W.x,
        children: (0, s.jsxs)("div", { className: W.t, children: [d.render(), _.intl.string(_.t.nPThNb)] }),
    });
}
function X(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: o,
            analyticsCtxSourceQuestContent: u,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: l,
            size: E,
        } = t,
        d = (0, C.RR)({ quest: e }),
        A = (0, w.wW)(),
        x = (0, C.Vn)(e),
        T = (0, C.fc)(e),
        [I, q, y] = (0, C.Qo)(e, T);
    return x || I === h.X0.DESKTOP
        ? (0, s.jsx)(i.$, {
              variant: "secondary",
              size: E,
              disabled: !0,
              text: _.intl.string(_.t["9KoPyB"]),
              fullWidth: !0,
          })
        : d && n === a.V3.QUEST_HOME_TILE_FOOTER
          ? (0, s.jsx)(i.$, {
                size: E,
                variant: "secondary",
                onClick: () => {
                    (0, b.se)(
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
          : (0, s.jsx)(z, {
                quest: e,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: u,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: l,
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
            size: C,
        } = t,
        { hasAlreadyLinked: E } = (0, V.U)(e),
        d = (0, w.wW)(),
        A = (0, M.Ut)();
    if (!0 === E)
        return n === a.V3.QUEST_BAR_FOOTER
            ? (0, s.jsx)(i.$, {
                  size: C,
                  fullWidth: !0,
                  variant: "secondary",
                  text: (0, m.wr)(e),
                  onClick: () =>
                      (0, b.pu)(e, {
                          content: o,
                          ctaContent: c.Cy.OPEN_GAME_LINK,
                          position: r,
                          impressionId: d(),
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
            (0, j.E5)(j.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                ? (0, D.r)({
                      type: p.F.CLICK_INTERNAL,
                      adCreativeType: P.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: c.Cy.OPEN_ACCOUNT_LINK_MODAL,
                      surfaceId: o,
                      sourceQuestContent: u,
                      impressionId: d(),
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
function K(t) {
    let { quest: e, analyticsCtxSourceQuestContent: n, size: o, parentContainerRef: u } = t,
        { applications: r } = (0, C.fc)(e);
    return (0, s.jsx)(k.A, {
        quest: e,
        sourceQuestContent: n,
        applications: r ?? [],
        targetElementRef: u,
        children: (t) =>
            (0, s.jsx)(i.$, { variant: "secondary", fullWidth: !0, size: o, text: _.intl.string(_.t["93PTEs"]), ...t }),
    });
}
function Y(t) {
    let { quest: e, surface: n, analyticsCtxSourceQuestContent: o, size: u } = t;
    return (0, s.jsx)(i.$, {
        size: u,
        fullWidth: !0,
        variant: (0, a.wX)(n, "primary"),
        text: _.intl.string(_.t.SHZo2x),
        onClick: () => (0, x.ii)({ quest: e, sourceQuestContent: o }),
    });
}
let B = function (t) {
        let {
                quest: e,
                surface: n,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: u,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: l,
                size: C,
            } = t,
            c = f.useRef(null);
        return (0, E.I6)(e)
            ? (0, s.jsx)(F, {
                  quest: e,
                  surface: n,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: u,
                  analyticsCtxQuestContentPosition: r,
                  analyticsCtxQuestContentRowIndex: l,
                  size: C,
              })
            : (0, E.g5)(e) && n === a.V3.QUEST_HOME_TILE_FOOTER
              ? (0, s.jsx)(X, {
                    quest: e,
                    surface: n,
                    size: C,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: u,
                    analyticsCtxQuestContentPosition: r,
                    analyticsCtxQuestContentRowIndex: l,
                })
              : (0, d.ui)(e) && n === a.V3.QUEST_BAR_FOOTER
                ? (0, s.jsx)("div", {
                      ref: c,
                      children: (0, s.jsx)(K, {
                          quest: e,
                          analyticsCtxSourceQuestContent: u,
                          size: C,
                          parentContainerRef: c,
                      }),
                  })
                : n === a.V3.QUEST_HOME_TILE_V2_FOOTER
                  ? (0, s.jsx)(Y, { quest: e, surface: n, analyticsCtxSourceQuestContent: u, size: C })
                  : (0, s.jsx)(i.$, {
                        size: C,
                        variant: "secondary",
                        disabled: !0,
                        text: _.intl.string(_.t["9KoPyB"]),
                        fullWidth: !0,
                    });
    },
    G = function (t) {
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
        return (0, E.GL)(e)
            ? (0, s.jsx)(B, {
                  quest: e,
                  surface: i,
                  size: l,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: u,
                  analyticsCtxQuestContentPosition: r,
                  analyticsCtxQuestContentRowIndex: a,
              })
            : (0, s.jsx)(y, {
                  quest: e,
                  taskType: n,
                  size: l,
                  surface: i,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: u,
              });
    },
    H = function (t) {
        let {
                quest: e,
                taskType: n,
                surface: o,
                size: u,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: c,
                analyticsCtxQuestContentRowIndex: E,
            } = t,
            d = (0, C.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" }),
            A = e.userStatus?.claimedAt != null;
        return o === a.V3.QUEST_HOME_TILE_FOOTER && A
            ? (0, s.jsx)(L, {
                  quest: e,
                  taskType: n,
                  size: u,
                  analyticsCtxQuestContent: r,
                  analyticsCtxSourceQuestContent: l,
                  analyticsCtxQuestContentPosition: c,
                  analyticsCtxQuestContentRowIndex: E,
              })
            : (0, s.jsx)(i.$, {
                  variant: "secondary",
                  disabled: !0,
                  fullWidth: !0,
                  size: u,
                  text: _.intl.format(_.t["6p8BZx"], { expiryDate: d }),
              });
    },
    $ = function (t) {
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
        return ((0, E.t)({ quest: e }) || (0, E.g5)(e)) && o === a.V3.QUEST_BAR_FOOTER && (0, d.ui)(e)
            ? (0, s.jsx)(i.$, {
                  size: c,
                  variant: "secondary",
                  disabled: !0,
                  text: _.intl.string(_.t["9KoPyB"]),
                  fullWidth: !0,
              })
            : (0, s.jsx)(G, {
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
var Z = n(340124);
function J(t) {
    switch (t) {
        case l.n.ACHIEVEMENT_IN_ACTIVITY:
        case l.n.PLAY_ACTIVITY:
        case l.n.WATCH_VIDEO:
            return c.Cy.START_QUEST;
        default:
            return c.Cy.ACCEPT_QUEST;
    }
}
let tt = function (t) {
        var e;
        let {
                quest: n,
                taskType: o,
                size: r = "sm",
                surface: c,
                preClickCallback: d,
                analyticsCtxQuestContent: I,
                analyticsCtxSourceQuestContent: q,
                analyticsCtxQuestContentPosition: y,
                analyticsCtxQuestContentRowIndex: L,
            } = t,
            Q = {
                questContent: I,
                questContentCTA: J(o),
                sourceQuestContent: q,
                questContentPosition: y,
                questContentRowIndex: L,
            },
            R = n.id,
            f = c === a.V3.QUEST_HOME_TILE_V2_FOOTER,
            { isEnrolling: P } = (0, N.cf)([O.A], () => ({ isEnrolling: O.A.isEnrolling(R) }), [R]),
            U = f ? (0, x.Q_)(n) : (0, x.Oz)(n),
            S = (function (t, e, n, s) {
                let { launchInGameActivity: i } = (0, C.zW)(e),
                    o = s === a.V3.QUEST_HOME_TILE_V2_FOOTER;
                if ((0, E.K$)(e))
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
            g = f
                ? (0, u.C0)(n)
                : (function (t, e) {
                      let { features: n } = e.config;
                      switch (t) {
                          case l.n.WATCH_VIDEO:
                              return (0, A.WM)((0, E.Yh)(e));
                          case l.n.ACHIEVEMENT_IN_ACTIVITY:
                              return _.intl.string(_.t.CkUzLd);
                          case l.n.PLAY_ACTIVITY:
                              if (n.includes(T.Li.CLOUD_GAMING_ACTIVITY)) return _.intl.string(_.t["+qoymD"]);
                              return _.intl.string(_.t.E4kW5O);
                          default:
                              return _.intl.string(_.t.kUQLMJ);
                      }
                  })(o, n),
            D =
                ((e = S ?? void 0),
                o === l.n.WATCH_VIDEO
                    ? async () => {
                          await (0, x.e0)(n, {
                              questContent: Q.questContent,
                              questContentCTA: Q.questContentCTA,
                              sourceQuestContent: Q.sourceQuestContent,
                              sourceQuestContentCTA: J(o),
                              questContentPosition: Q.questContentPosition,
                              questContentRowIndex: Q.questContentRowIndex,
                          });
                      }
                    : async () => {
                          await (0, Z.Oy)(n.id, {
                              questContent: Q.questContent,
                              questContentCTA: Q.questContentCTA,
                              sourceQuestContent: Q.sourceQuestContent,
                              questContentPosition: Q.questContentPosition,
                              questContentRowIndex: Q.questContentRowIndex,
                          }),
                              e?.();
                      });
        return (0, s.jsx)(i.$, {
            size: r,
            loading: P,
            variant: (0, a.wX)(c, "primary"),
            onClick: () => {
                d?.(), D();
            },
            text: g,
            icon: U,
            fullWidth: !0,
        });
    },
    te = function (t) {
        let {
                quest: e,
                surface: n,
                preClickCallback: o,
                analyticsCtxQuestContent: u,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: l,
                analyticsCtxQuestContentRowIndex: C,
                size: c = "md",
            } = t,
            E = (0, a.Pd)(e);
        if (0 === Object.keys(e.config.taskConfigV2.tasks).length)
            return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: "sm", text: _.intl.string(_.t.P84bAD) });
        let d = Object.values(e.config.taskConfigV2.tasks)[0];
        switch (E) {
            case a.UA.UNENROLLED:
                return (0, s.jsx)(tt, {
                    quest: e,
                    taskType: d.type,
                    size: c,
                    surface: n,
                    preClickCallback: o,
                    analyticsCtxQuestContent: u,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: C,
                });
            case a.UA.ENROLLED:
                return (0, s.jsx)(G, {
                    quest: e,
                    taskType: d.type,
                    size: c,
                    analyticsCtxQuestContent: u,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: C,
                    surface: n,
                });
            case a.UA.INCOMPLETE:
                return (0, s.jsx)($, {
                    quest: e,
                    taskType: d.type,
                    size: c,
                    analyticsCtxQuestContent: u,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: C,
                    surface: n,
                });
            case a.UA.EXPIRED_CLAIMABLE:
            case a.UA.COMPLETED:
                return (0, s.jsx)(R, {
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
                    taskType: d.type,
                    size: c,
                    surface: n,
                    analyticsCtxQuestContent: u,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: l,
                    analyticsCtxQuestContentRowIndex: C,
                });
            case a.UA.EXPIRED:
                return (0, s.jsx)(H, {
                    quest: e,
                    taskType: d.type,
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
