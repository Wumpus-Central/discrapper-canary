n.d(e, { A: () => te });
var s = n(627968),
    i = n(821609),
    a = n(801365),
    o = n(662940),
    r = n(371912),
    l = n(79545),
    u = n(412703),
    c = n(347135),
    C = n(590202),
    E = n(792620),
    d = n(814793),
    A = n(753386),
    T = n(617986),
    _ = n(190107),
    I = n(375708);
function x(t, e) {
    return u.o.VIDEO.has(t) ? C.Cy.WATCH_VIDEO : (0, d.vA)(e) ? C.Cy.START_QUEST : C.Cy.ACCEPT_QUEST;
}
function L(t, e, n, s) {
    let { launchInGameActivity: i } = (0, c.zW)(t);
    return (0, E.K$)(t)
        ? () => {
              (0, T.Fy)(t);
          }
        : (0, E.IO)(t)
          ? () => {
                (0, T.d5)({ quest: t, questContent: e, sourceQuestContent: n, sourceQuestContentCTA: s });
            }
          : (0, d.vA)(t)
            ? () => {
                  i();
              }
            : null;
}
let N = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: r,
                size: u,
                surface: C,
            } = t,
            N = (0, c.fc)(e),
            O = L(e, a, r, x(n, e)),
            f = C === l.V3.QUEST_HOME_TILE_V2_FOOTER,
            g = f ? (0, T.Q_)(e) : (0, T.Oz)(e),
            R = f
                ? (0, o.C0)(e)
                : (function (t, e) {
                      if ((0, E.K$)(t)) return I.intl.string(I.t["/cXIc6"]);
                      if ((0, E.IO)(t)) return (0, A.WM)(e);
                      if ((0, d.vA)(t))
                          return (0, E.Ov)(t)
                              ? I.intl.string(I.t.CkUzLd)
                              : (0, E.vl)(t)
                                ? t.config.features.includes(_.Li.CLOUD_GAMING_ACTIVITY)
                                    ? I.intl.string(I.t["+qoymD"])
                                    : I.intl.string(I.t.E4kW5O)
                                : I.intl.string(I.t.l7E81v);
                      return I.intl.string(I.t["9KoPyB"]);
                  })(e, N);
        return null == O
            ? (0, s.jsx)(i.$, { size: u, variant: "secondary", disabled: !0, text: R, fullWidth: !0 })
            : (0, s.jsx)(i.$, { size: u, variant: (0, l.wX)(C), onClick: O, text: R, icon: g, fullWidth: !0 });
    },
    O = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: u,
                analyticsCtxSourceQuestContent: c,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: E,
                size: d,
                surface: A,
            } = t,
            T = A === l.V3.QUEST_HOME_TILE_V2_FOOTER,
            _ = (0, a.r7)(e.config) ? I.intl.string(I.t.bAGFz3) : I.intl.string(I.t.vTgCWx),
            N = (0, r.ix)({
                quest: e,
                questContent: u,
                questContentPosition: C,
                questContentRowIndex: E,
                sourceQuestContent: c,
            }),
            O = (0, o.vj)(e),
            f = L(e, u, c, x(n, e));
        return (0, s.jsx)(i.$, { variant: (0, l.wX)(A), fullWidth: !0, size: d, onClick: T ? f : N, text: T ? O : _ });
    };
var f = n(17928),
    g = n(859703),
    R = n(795965);
let y = function (t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: r,
            size: u,
            surface: c,
        } = t,
        C = e.id,
        { isClaiming: E } = (0, f.cf)(
            [g.A],
            () => ({ isClaiming: g.A.isClaimingReward(C) || g.A.isFetchingRewardCode(C) }),
            [C],
        ),
        d = null != c ? (0, l.Ut)(c) : null,
        A = (0, R.D)({
            quest: e,
            questContent: n,
            sourceQuestContent: a,
            questContentPosition: o,
            questContentRowIndex: r,
            experimentLocation: d,
        });
    return (0, s.jsx)(i.$, {
        variant: (0, l.wX)(c),
        fullWidth: !0,
        size: u,
        loading: E,
        onClick: A,
        text: I.intl.string(I.t.cfY4PE),
    });
};
var h = n(64700),
    p = n(323889),
    P = n(141628),
    S = n(862482),
    D = n(775602),
    U = n(274670),
    q = n(144779),
    v = n(178540),
    Q = n(24001),
    M = n(104886),
    m = n(18437),
    w = n(971649),
    j = n(651892),
    b = n(901406),
    V = n(862611),
    F = n(284846),
    H = n(263752);
function k(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: i,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: o,
        } = t,
        l = (0, m.Ut)(),
        u = (0, w.go)(),
        E = (0, f.bG)([D.Ay], () => D.Ay.useReducedMotion),
        d = (0, r.Xf)({ useReducedMotion: E }),
        A = (0, v.O)((t) => t.setErrorHints),
        { startingConsoleQuest: T, startConsoleQuest: _ } = (0, c.Wj)({
            questId: e.id,
            beforeRequest: () => {
                d.startAnimation(),
                    (0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                        ? (0, U.r)({
                              type: q.F.CLICK_INTERNAL,
                              adCreativeType: p.p.QUEST,
                              adCreativeId: e.id,
                              questContentCTA: C.Cy.DEFIBRILLATOR,
                              surfaceId: n,
                              sourceQuestContent: i,
                              impressionId: u,
                              questContentPosition: a,
                              questContentRowIndex: o,
                          })
                        : l({
                              questId: e.id,
                              questContent: n,
                              questContentCTA: C.Cy.DEFIBRILLATOR,
                              questContentPosition: a,
                              questContentRowIndex: o,
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
        onClick: _,
        disabled: T,
        className: H.x,
        children: (0, s.jsxs)("div", { className: H.t, children: [d.render(), I.intl.string(I.t.nPThNb)] }),
    });
}
function B(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: u,
            size: E,
        } = t,
        d = (0, c.RR)({ quest: e }),
        A = (0, w.vU)()?.getId(),
        T = (0, c.Vn)(e),
        _ = (0, c.fc)(e),
        [x, L, N] = (0, c.Qo)(e, _);
    return T || x === Q.X0.DESKTOP
        ? (0, s.jsx)(i.$, {
              variant: "secondary",
              size: E,
              disabled: !0,
              text: I.intl.string(I.t["9KoPyB"]),
              fullWidth: !0,
          })
        : d && n === l.V3.QUEST_HOME_TILE_FOOTER
          ? (0, s.jsx)(i.$, {
                size: E,
                variant: "secondary",
                onClick: () => {
                    (0, b.se)(
                        { quest: e },
                        {
                            content: a,
                            ctaContent: C.Cy.CONNECT_CONSOLE,
                            position: r,
                            rowIndex: u,
                            impressionId: A,
                            sourceQuestContent: o,
                        },
                    );
                },
                text: I.intl.string(I.t.Cfye4v),
                fullWidth: !0,
            })
          : (0, s.jsx)(k, {
                quest: e,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: o,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: u,
            });
}
function W(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: u,
            size: c,
        } = t,
        { hasAlreadyLinked: E } = (0, F.U)(e),
        d = (0, w.go)(),
        A = (0, m.Ut)();
    if (!0 === E)
        return n === l.V3.QUEST_BAR_FOOTER
            ? (0, s.jsx)(i.$, {
                  size: c,
                  fullWidth: !0,
                  variant: "secondary",
                  text: (0, j.wr)(e),
                  onClick: () =>
                      (0, b.pu)(e, {
                          content: a,
                          ctaContent: C.Cy.OPEN_GAME_LINK,
                          position: r,
                          impressionId: d,
                          sourceQuestContent: o,
                      }),
              })
            : (0, s.jsx)(i.$, {
                  size: c,
                  fullWidth: !0,
                  variant: (0, l.wX)(n),
                  text: I.intl.string(I.t.SHZo2x),
                  onClick: () => (0, T._x)({ quest: e, sourceQuestContent: o }),
              });
    let _ = n === l.V3.QUEST_HOME_TILE_V2_FOOTER;
    return (0, s.jsx)(i.$, {
        size: c,
        fullWidth: !0,
        variant: (0, l.wX)(n),
        icon: _ ? void 0 : P.A,
        text: _ ? I.intl.string(I.t.SHZo2x) : I.intl.string(I.t.sbdnpw),
        onClick: () => {
            (0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                ? (0, U.r)({
                      type: q.F.CLICK_INTERNAL,
                      adCreativeType: p.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: C.Cy.OPEN_ACCOUNT_LINK_MODAL,
                      surfaceId: a,
                      sourceQuestContent: o,
                      impressionId: d,
                      questContentPosition: r,
                      questContentRowIndex: u,
                  })
                : A({
                      questId: e.id,
                      questContent: a,
                      questContentCTA: C.Cy.OPEN_ACCOUNT_LINK_MODAL,
                      questContentPosition: r,
                      questContentRowIndex: u,
                      sourceQuestContent: o,
                  }),
                (0, T._x)({ quest: e, sourceQuestContent: o });
        },
    });
}
function z(t) {
    let { quest: e, analyticsCtxSourceQuestContent: n, size: a, parentContainerRef: o } = t,
        { applications: r } = (0, c.fc)(e);
    return (0, s.jsx)(V.A, {
        quest: e,
        sourceQuestContent: n,
        applications: r ?? [],
        targetElementRef: o,
        children: (t) =>
            (0, s.jsx)(i.$, { variant: "secondary", fullWidth: !0, size: a, text: I.intl.string(I.t["93PTEs"]), ...t }),
    });
}
function G(t) {
    let { quest: e, surface: n, analyticsCtxSourceQuestContent: a, size: o } = t;
    return (0, s.jsx)(i.$, {
        size: o,
        fullWidth: !0,
        variant: (0, l.wX)(n, "primary"),
        text: I.intl.string(I.t.SHZo2x),
        onClick: () => (0, T.ii)({ quest: e, sourceQuestContent: a }),
    });
}
let X = function (t) {
        let {
                quest: e,
                surface: n,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: o,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: u,
                size: c,
            } = t,
            C = h.useRef(null);
        return (0, E.I6)(e)
            ? (0, s.jsx)(W, {
                  quest: e,
                  surface: n,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: o,
                  analyticsCtxQuestContentPosition: r,
                  analyticsCtxQuestContentRowIndex: u,
                  size: c,
              })
            : (0, E.g5)(e) && n === l.V3.QUEST_HOME_TILE_FOOTER
              ? (0, s.jsx)(B, {
                    quest: e,
                    surface: n,
                    size: c,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: o,
                    analyticsCtxQuestContentPosition: r,
                    analyticsCtxQuestContentRowIndex: u,
                })
              : (0, d.ui)(e) && n === l.V3.QUEST_BAR_FOOTER
                ? (0, s.jsx)("div", {
                      ref: C,
                      children: (0, s.jsx)(z, {
                          quest: e,
                          analyticsCtxSourceQuestContent: o,
                          size: c,
                          parentContainerRef: C,
                      }),
                  })
                : n === l.V3.QUEST_HOME_TILE_V2_FOOTER
                  ? (0, s.jsx)(G, { quest: e, surface: n, analyticsCtxSourceQuestContent: o, size: c })
                  : (0, s.jsx)(i.$, {
                        size: c,
                        variant: "secondary",
                        disabled: !0,
                        text: I.intl.string(I.t["9KoPyB"]),
                        fullWidth: !0,
                    });
    },
    K = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: i,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: l,
            size: u,
        } = t;
        return (0, E.GL)(e)
            ? (0, s.jsx)(X, {
                  quest: e,
                  surface: i,
                  size: u,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: o,
                  analyticsCtxQuestContentPosition: r,
                  analyticsCtxQuestContentRowIndex: l,
              })
            : (0, s.jsx)(N, {
                  quest: e,
                  taskType: n,
                  size: u,
                  surface: i,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: o,
              });
    },
    Y = function (t) {
        let {
                quest: e,
                taskType: n,
                surface: a,
                size: o,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: u,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: E,
            } = t,
            d = (0, c.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" }),
            A = e.userStatus?.claimedAt != null;
        return a === l.V3.QUEST_HOME_TILE_FOOTER && A
            ? (0, s.jsx)(O, {
                  quest: e,
                  taskType: n,
                  size: o,
                  analyticsCtxQuestContent: r,
                  analyticsCtxSourceQuestContent: u,
                  analyticsCtxQuestContentPosition: C,
                  analyticsCtxQuestContentRowIndex: E,
              })
            : (0, s.jsx)(i.$, {
                  variant: "secondary",
                  disabled: !0,
                  fullWidth: !0,
                  size: o,
                  text: I.intl.format(I.t["6p8BZx"], { expiryDate: d }),
              });
    },
    Z = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: a,
            analyticsCtxQuestContent: o,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: u,
            analyticsCtxQuestContentRowIndex: c,
            size: C,
        } = t;
        return ((0, E.t)({ quest: e }) || (0, E.g5)(e)) && a === l.V3.QUEST_BAR_FOOTER && (0, d.ui)(e)
            ? (0, s.jsx)(i.$, {
                  size: C,
                  variant: "secondary",
                  disabled: !0,
                  text: I.intl.string(I.t["9KoPyB"]),
                  fullWidth: !0,
              })
            : (0, s.jsx)(K, {
                  quest: e,
                  taskType: n,
                  surface: a,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: u,
                  analyticsCtxQuestContentRowIndex: c,
                  size: C,
              });
    };
var $ = n(340124);
function J(t) {
    switch (t) {
        case u.n.ACHIEVEMENT_IN_ACTIVITY:
        case u.n.PLAY_ACTIVITY:
        case u.n.WATCH_VIDEO:
            return C.Cy.START_QUEST;
        default:
            return C.Cy.ACCEPT_QUEST;
    }
}
let tt = function (t) {
        var e;
        let {
                quest: n,
                taskType: a,
                size: r = "sm",
                surface: C,
                preClickCallback: d,
                analyticsCtxQuestContent: x,
                analyticsCtxSourceQuestContent: L,
                analyticsCtxQuestContentPosition: N,
                analyticsCtxQuestContentRowIndex: O,
            } = t,
            R = {
                questContent: x,
                questContentCTA: J(a),
                sourceQuestContent: L,
                questContentPosition: N,
                questContentRowIndex: O,
            },
            y = n.id,
            h = C === l.V3.QUEST_HOME_TILE_V2_FOOTER,
            { isEnrolling: p } = (0, f.cf)([g.A], () => ({ isEnrolling: g.A.isEnrolling(y) }), [y]),
            P = h ? (0, T.Q_)(n) : (0, T.Oz)(n),
            S = (function (t, e, n, s) {
                let { launchInGameActivity: i } = (0, c.zW)(e),
                    a = s === l.V3.QUEST_HOME_TILE_V2_FOOTER;
                if ((0, E.K$)(e))
                    return () => {
                        (0, T.Fy)(e);
                    };
                switch (t) {
                    case u.n.ACHIEVEMENT_IN_ACTIVITY:
                    case u.n.PLAY_ACTIVITY:
                        return () => {
                            i();
                        };
                    case u.n.ACHIEVEMENT_IN_GAME:
                        return a
                            ? () => {
                                  (0, T._x)({ quest: e, sourceQuestContent: n });
                              }
                            : null;
                    case u.n.PLAY_ON_XBOX:
                    case u.n.PLAY_ON_PLAYSTATION:
                    case u.n.PLAY_ON_DESKTOP:
                        return a
                            ? () => {
                                  (0, T.ii)({ quest: e, sourceQuestContent: n });
                              }
                            : null;
                    default:
                        return null;
                }
            })(a, n, L, C),
            D = h
                ? (0, o.C0)(n)
                : (function (t, e) {
                      let { features: n } = e.config;
                      switch (t) {
                          case u.n.WATCH_VIDEO:
                              return (0, A.WM)((0, E.Yh)(e));
                          case u.n.ACHIEVEMENT_IN_ACTIVITY:
                              return I.intl.string(I.t.CkUzLd);
                          case u.n.PLAY_ACTIVITY:
                              if (n.includes(_.Li.CLOUD_GAMING_ACTIVITY)) return I.intl.string(I.t["+qoymD"]);
                              return I.intl.string(I.t.E4kW5O);
                          default:
                              return I.intl.string(I.t.kUQLMJ);
                      }
                  })(a, n),
            U =
                ((e = S ?? void 0),
                a === u.n.WATCH_VIDEO
                    ? async () => {
                          await (0, T.e0)(n, {
                              questContent: R.questContent,
                              questContentCTA: R.questContentCTA,
                              sourceQuestContent: R.sourceQuestContent,
                              sourceQuestContentCTA: J(a),
                              questContentPosition: R.questContentPosition,
                              questContentRowIndex: R.questContentRowIndex,
                          });
                      }
                    : async () => {
                          await (0, $.Oy)(n.id, {
                              questContent: R.questContent,
                              questContentCTA: R.questContentCTA,
                              sourceQuestContent: R.sourceQuestContent,
                              questContentPosition: R.questContentPosition,
                              questContentRowIndex: R.questContentRowIndex,
                          }),
                              e?.();
                      });
        return (0, s.jsx)(i.$, {
            size: r,
            loading: p,
            variant: (0, l.wX)(C, "primary"),
            onClick: () => {
                d?.(), U();
            },
            text: D,
            icon: P,
            fullWidth: !0,
        });
    },
    te = function (t) {
        let {
                quest: e,
                surface: n,
                preClickCallback: a,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: u,
                analyticsCtxQuestContentRowIndex: c,
                size: C = "md",
            } = t,
            E = (0, l.Pd)(e);
        if (0 === Object.keys(e.config.taskConfigV2.tasks).length)
            return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: "sm", text: I.intl.string(I.t.P84bAD) });
        let d = Object.values(e.config.taskConfigV2.tasks)[0];
        switch (E) {
            case l.UA.UNENROLLED:
                return (0, s.jsx)(tt, {
                    quest: e,
                    taskType: d.type,
                    size: C,
                    surface: n,
                    preClickCallback: a,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case l.UA.ENROLLED:
                return (0, s.jsx)(K, {
                    quest: e,
                    taskType: d.type,
                    size: C,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                    surface: n,
                });
            case l.UA.INCOMPLETE:
                return (0, s.jsx)(Z, {
                    quest: e,
                    taskType: d.type,
                    size: C,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                    surface: n,
                });
            case l.UA.EXPIRED_CLAIMABLE:
            case l.UA.COMPLETED:
                return (0, s.jsx)(y, {
                    quest: e,
                    size: C,
                    surface: n,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case l.UA.CLAIMED:
                return (0, s.jsx)(O, {
                    quest: e,
                    taskType: d.type,
                    size: C,
                    surface: n,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case l.UA.EXPIRED:
                return (0, s.jsx)(Y, {
                    quest: e,
                    taskType: d.type,
                    surface: n,
                    size: C,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            default:
                return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: C, text: I.intl.string(I.t.P84bAD) });
        }
    };
