n.d(e, { A: () => te });
var s = n(627968),
    i = n(821609),
    a = n(801365),
    l = n(662940),
    o = n(371912),
    r = n(79545),
    u = n(412703),
    c = n(347135),
    C = n(590202),
    E = n(792620),
    d = n(814793),
    A = n(753386),
    T = n(617986),
    _ = n(190107),
    x = n(375708);
function I(t, e) {
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
let O = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: o,
                size: u,
                surface: C,
            } = t,
            O = (0, c.fc)(e),
            g = L(e, a, o, I(n, e)),
            f = C === r.V3.QUEST_HOME_TILE_V2_FOOTER,
            h = f ? (0, T.Q_)(e) : (0, T.Oz)(e),
            N = f
                ? (0, l.C0)(e)
                : (function (t, e) {
                      if ((0, E.K$)(t)) return x.intl.string(x.t["/cXIc6"]);
                      if ((0, E.IO)(t)) return (0, A.WM)(e);
                      if ((0, d.vA)(t))
                          return (0, E.Ov)(t)
                              ? x.intl.string(x.t.CkUzLd)
                              : (0, E.vl)(t)
                                ? t.config.features.includes(_.Li.CLOUD_GAMING_ACTIVITY)
                                    ? x.intl.string(x.t["+qoymD"])
                                    : x.intl.string(x.t.E4kW5O)
                                : x.intl.string(x.t.l7E81v);
                      return x.intl.string(x.t["9KoPyB"]);
                  })(e, O);
        return null == g
            ? (0, s.jsx)(i.$, { size: u, variant: "secondary", disabled: !0, text: N, fullWidth: !0 })
            : (0, s.jsx)(i.$, { size: u, variant: (0, r.wX)(C), onClick: g, text: N, icon: h, fullWidth: !0 });
    },
    g = function (t) {
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
            T = A === r.V3.QUEST_HOME_TILE_V2_FOOTER,
            _ = (0, a.r7)(e.config) ? x.intl.string(x.t.bAGFz3) : x.intl.string(x.t.vTgCWx),
            O = (0, o.ix)({
                quest: e,
                questContent: u,
                questContentPosition: C,
                questContentRowIndex: E,
                sourceQuestContent: c,
            }),
            g = (0, l.vj)(e),
            f = L(e, u, c, I(n, e));
        return (0, s.jsx)(i.$, { variant: (0, r.wX)(A), fullWidth: !0, size: d, onClick: T ? f : O, text: T ? g : _ });
    };
var f = n(17928),
    h = n(859703),
    N = n(795965);
let R = function (t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: o,
            size: u,
            surface: c,
        } = t,
        C = e.id,
        { isClaiming: E } = (0, f.cf)(
            [h.A],
            () => ({ isClaiming: h.A.isClaimingReward(C) || h.A.isFetchingRewardCode(C) }),
            [C],
        ),
        d = null != c ? (0, r.Ut)(c) : null,
        A = (0, N.D)({
            quest: e,
            questContent: n,
            sourceQuestContent: a,
            questContentPosition: l,
            questContentRowIndex: o,
            experimentLocation: d,
        });
    return (0, s.jsx)(i.$, {
        variant: (0, r.wX)(c),
        fullWidth: !0,
        size: u,
        loading: E,
        onClick: A,
        text: x.intl.string(x.t.cfY4PE),
    });
};
var y = n(64700),
    S = n(141628),
    p = n(862482),
    P = n(775602),
    v = n(178540),
    D = n(507107),
    U = n(18437),
    m = n(971649),
    M = n(651892),
    Q = n(901406),
    w = n(862611),
    q = n(284846),
    j = n(263752);
function b(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: i,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: l,
        } = t,
        r = (0, U.Ut)(),
        u = (0, f.bG)([P.Ay], () => P.Ay.useReducedMotion),
        E = (0, o.Xf)({ useReducedMotion: u }),
        d = (0, v.O)((t) => t.setErrorHints),
        { startingConsoleQuest: A, startConsoleQuest: T } = (0, c.Wj)({
            questId: e.id,
            beforeRequest: () => {
                E.startAnimation(),
                    r({
                        questId: e.id,
                        questContent: n,
                        questContentCTA: C.Cy.DEFIBRILLATOR,
                        questContentPosition: a,
                        questContentRowIndex: l,
                        sourceQuestContent: i,
                    });
            },
            afterRequest: (t) => {
                E.stopAnimation(), d(e.id, t);
            },
        });
    return (0, s.jsx)(p.$n, {
        "data-migration-pending": !0,
        color: p.XD.PRIMARY,
        onClick: T,
        disabled: A,
        className: j.x,
        children: (0, s.jsxs)("div", { className: j.t, children: [E.render(), x.intl.string(x.t.nPThNb)] }),
    });
}
function V(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: u,
            size: E,
        } = t,
        d = (0, c.RR)({ quest: e }),
        A = (0, m.vU)()?.getId(),
        T = (0, c.Vn)(e),
        _ = (0, c.fc)(e),
        [I, L, O] = (0, c.Qo)(e, _);
    return T || I === D.X0.DESKTOP
        ? (0, s.jsx)(i.$, {
              variant: "secondary",
              size: E,
              disabled: !0,
              text: x.intl.string(x.t["9KoPyB"]),
              fullWidth: !0,
          })
        : d && n === r.V3.QUEST_HOME_TILE_FOOTER
          ? (0, s.jsx)(i.$, {
                size: E,
                variant: "secondary",
                onClick: () => {
                    (0, Q.se)(
                        { quest: e },
                        {
                            content: a,
                            ctaContent: C.Cy.CONNECT_CONSOLE,
                            position: o,
                            rowIndex: u,
                            impressionId: A,
                            sourceQuestContent: l,
                        },
                    );
                },
                text: x.intl.string(x.t.Cfye4v),
                fullWidth: !0,
            })
          : (0, s.jsx)(b, {
                quest: e,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: o,
                analyticsCtxQuestContentRowIndex: u,
            });
}
function F(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: u,
            size: c,
        } = t,
        { hasAlreadyLinked: E } = (0, q.U)(e),
        d = (0, m.go)(),
        A = (0, U.Ut)();
    if (!0 === E)
        return n === r.V3.QUEST_BAR_FOOTER
            ? (0, s.jsx)(i.$, {
                  size: c,
                  fullWidth: !0,
                  variant: "secondary",
                  text: (0, M.wr)(e),
                  onClick: () =>
                      (0, Q.pu)(e, {
                          content: a,
                          ctaContent: C.Cy.OPEN_GAME_LINK,
                          position: o,
                          impressionId: d,
                          sourceQuestContent: l,
                      }),
              })
            : (0, s.jsx)(i.$, {
                  size: c,
                  fullWidth: !0,
                  variant: (0, r.wX)(n),
                  text: x.intl.string(x.t.SHZo2x),
                  onClick: () => (0, T._x)({ quest: e, sourceQuestContent: l }),
              });
    let _ = n === r.V3.QUEST_HOME_TILE_V2_FOOTER;
    return (0, s.jsx)(i.$, {
        size: c,
        fullWidth: !0,
        variant: (0, r.wX)(n),
        icon: _ ? void 0 : S.A,
        text: _ ? x.intl.string(x.t.SHZo2x) : x.intl.string(x.t.sbdnpw),
        onClick: () => {
            A({
                questId: e.id,
                questContent: a,
                questContentCTA: C.Cy.OPEN_ACCOUNT_LINK_MODAL,
                questContentPosition: o,
                questContentRowIndex: u,
                sourceQuestContent: l,
            }),
                (0, T._x)({ quest: e, sourceQuestContent: l });
        },
    });
}
function H(t) {
    let { quest: e, analyticsCtxSourceQuestContent: n, size: a, parentContainerRef: l } = t,
        { applications: o } = (0, c.fc)(e);
    return (0, s.jsx)(w.A, {
        quest: e,
        sourceQuestContent: n,
        applications: o ?? [],
        targetElementRef: l,
        children: (t) =>
            (0, s.jsx)(i.$, { variant: "secondary", fullWidth: !0, size: a, text: x.intl.string(x.t["93PTEs"]), ...t }),
    });
}
function k(t) {
    let { quest: e, surface: n, analyticsCtxSourceQuestContent: a, size: l } = t;
    return (0, s.jsx)(i.$, {
        size: l,
        fullWidth: !0,
        variant: (0, r.wX)(n, "primary"),
        text: x.intl.string(x.t.SHZo2x),
        onClick: () => (0, T.ii)({ quest: e, sourceQuestContent: a }),
    });
}
let B = function (t) {
        let {
                quest: e,
                surface: n,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: o,
                analyticsCtxQuestContentRowIndex: u,
                size: c,
            } = t,
            C = y.useRef(null);
        return (0, E.I6)(e)
            ? (0, s.jsx)(F, {
                  quest: e,
                  surface: n,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: l,
                  analyticsCtxQuestContentPosition: o,
                  analyticsCtxQuestContentRowIndex: u,
                  size: c,
              })
            : (0, E.g5)(e) && n === r.V3.QUEST_HOME_TILE_FOOTER
              ? (0, s.jsx)(V, {
                    quest: e,
                    surface: n,
                    size: c,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: l,
                    analyticsCtxQuestContentPosition: o,
                    analyticsCtxQuestContentRowIndex: u,
                })
              : (0, d.ui)(e) && n === r.V3.QUEST_BAR_FOOTER
                ? (0, s.jsx)("div", {
                      ref: C,
                      children: (0, s.jsx)(H, {
                          quest: e,
                          analyticsCtxSourceQuestContent: l,
                          size: c,
                          parentContainerRef: C,
                      }),
                  })
                : n === r.V3.QUEST_HOME_TILE_V2_FOOTER
                  ? (0, s.jsx)(k, { quest: e, surface: n, analyticsCtxSourceQuestContent: l, size: c })
                  : (0, s.jsx)(i.$, {
                        size: c,
                        variant: "secondary",
                        disabled: !0,
                        text: x.intl.string(x.t["9KoPyB"]),
                        fullWidth: !0,
                    });
    },
    W = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: i,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: r,
            size: u,
        } = t;
        return (0, E.GL)(e)
            ? (0, s.jsx)(B, {
                  quest: e,
                  surface: i,
                  size: u,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: l,
                  analyticsCtxQuestContentPosition: o,
                  analyticsCtxQuestContentRowIndex: r,
              })
            : (0, s.jsx)(O, {
                  quest: e,
                  taskType: n,
                  size: u,
                  surface: i,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: l,
              });
    },
    z = function (t) {
        let {
                quest: e,
                taskType: n,
                surface: a,
                size: l,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: u,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: E,
            } = t,
            d = (0, c.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" }),
            A = e.userStatus?.claimedAt != null;
        return a === r.V3.QUEST_HOME_TILE_FOOTER && A
            ? (0, s.jsx)(g, {
                  quest: e,
                  taskType: n,
                  size: l,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: u,
                  analyticsCtxQuestContentPosition: C,
                  analyticsCtxQuestContentRowIndex: E,
              })
            : (0, s.jsx)(i.$, {
                  variant: "secondary",
                  disabled: !0,
                  fullWidth: !0,
                  size: l,
                  text: x.intl.format(x.t["6p8BZx"], { expiryDate: d }),
              });
    },
    G = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: a,
            analyticsCtxQuestContent: l,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: u,
            analyticsCtxQuestContentRowIndex: c,
            size: C,
        } = t;
        return ((0, E.t)({ quest: e }) || (0, E.g5)(e)) && a === r.V3.QUEST_BAR_FOOTER && (0, d.ui)(e)
            ? (0, s.jsx)(i.$, {
                  size: C,
                  variant: "secondary",
                  disabled: !0,
                  text: x.intl.string(x.t["9KoPyB"]),
                  fullWidth: !0,
              })
            : (0, s.jsx)(W, {
                  quest: e,
                  taskType: n,
                  surface: a,
                  analyticsCtxQuestContent: l,
                  analyticsCtxSourceQuestContent: o,
                  analyticsCtxQuestContentPosition: u,
                  analyticsCtxQuestContentRowIndex: c,
                  size: C,
              });
    };
var X = n(340124);
function Y(t) {
    switch (t) {
        case u.n.ACHIEVEMENT_IN_ACTIVITY:
        case u.n.PLAY_ACTIVITY:
        case u.n.WATCH_VIDEO:
            return C.Cy.START_QUEST;
        default:
            return C.Cy.ACCEPT_QUEST;
    }
}
function K(t) {
    var e;
    let {
            quest: n,
            taskType: a,
            size: o = "sm",
            surface: C,
            variant: d,
            preClickCallback: I,
            analyticsCtxQuestContent: L,
            analyticsCtxSourceQuestContent: O,
            analyticsCtxQuestContentPosition: g,
            analyticsCtxQuestContentRowIndex: N,
        } = t,
        R = {
            questContent: L,
            questContentCTA: Y(a),
            sourceQuestContent: O,
            questContentPosition: g,
            questContentRowIndex: N,
        },
        y = n.id,
        { isEnrolling: S } = (0, f.cf)([h.A], () => ({ isEnrolling: h.A.isEnrolling(y) }), [y]),
        p = C === r.V3.QUEST_HOME_TILE_V2_FOOTER,
        P = p ? (0, T.Q_)(n) : (0, T.Oz)(n),
        v = (function (t, e, n, s) {
            let { launchInGameActivity: i } = (0, c.zW)(e),
                a = s === r.V3.QUEST_HOME_TILE_V2_FOOTER;
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
        })(a, n, O, C),
        D = p
            ? (0, l.C0)(n)
            : (function (t, e) {
                  let { features: n } = e.config;
                  switch (t) {
                      case u.n.WATCH_VIDEO:
                          return (0, A.WM)((0, E.Yh)(e));
                      case u.n.ACHIEVEMENT_IN_ACTIVITY:
                          return x.intl.string(x.t.CkUzLd);
                      case u.n.PLAY_ACTIVITY:
                          if (n.includes(_.Li.CLOUD_GAMING_ACTIVITY)) return x.intl.string(x.t["+qoymD"]);
                          return x.intl.string(x.t.E4kW5O);
                      default:
                          return x.intl.string(x.t.kUQLMJ);
                  }
              })(a, n),
        U =
            ((e = v ?? void 0),
            a === u.n.WATCH_VIDEO
                ? async () => {
                      await (0, T.e0)(n, {
                          questContent: R.questContent,
                          questContentCTA: R.questContentCTA,
                          sourceQuestContent: R.sourceQuestContent,
                          sourceQuestContentCTA: Y(a),
                          questContentPosition: R.questContentPosition,
                          questContentRowIndex: R.questContentRowIndex,
                      });
                  }
                : async () => {
                      await (0, X.Oy)(n.id, {
                          questContent: R.questContent,
                          questContentCTA: R.questContentCTA,
                          sourceQuestContent: R.sourceQuestContent,
                          questContentPosition: R.questContentPosition,
                          questContentRowIndex: R.questContentRowIndex,
                      }),
                          e?.();
                  });
    return (0, s.jsx)(i.$, {
        size: o,
        loading: S,
        variant: d,
        onClick: () => {
            I?.(), U();
        },
        text: D,
        icon: P,
        fullWidth: !0,
    });
}
let Z = function (t) {
    return (0, s.jsx)(K, { ...t, variant: (0, r.wX)(t.surface, "primary") });
};
var $ = n(19238);
let J = function (t) {
        let { buttonVariant: e } = (0, $.A)(!0);
        return (0, s.jsx)(K, { ...t, surface: r.V3.QUEST_BAR_FOOTER, variant: e });
    },
    tt = function (t) {
        let { surface: e, ...n } = t;
        return e === r.V3.QUEST_BAR_FOOTER ? (0, s.jsx)(J, { ...n }) : (0, s.jsx)(Z, { ...n, surface: e });
    },
    te = function (t) {
        let {
                quest: e,
                surface: n,
                preClickCallback: a,
                analyticsCtxQuestContent: l,
                analyticsCtxSourceQuestContent: o,
                analyticsCtxQuestContentPosition: u,
                analyticsCtxQuestContentRowIndex: c,
                size: C = "md",
            } = t,
            E = (0, r.Pd)(e);
        if (0 === Object.keys(e.config.taskConfigV2.tasks).length)
            return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: "sm", text: x.intl.string(x.t.P84bAD) });
        let d = Object.values(e.config.taskConfigV2.tasks)[0];
        switch (E) {
            case r.UA.UNENROLLED:
                return (0, s.jsx)(tt, {
                    quest: e,
                    taskType: d.type,
                    size: C,
                    surface: n,
                    preClickCallback: a,
                    analyticsCtxQuestContent: l,
                    analyticsCtxSourceQuestContent: o,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case r.UA.ENROLLED:
                return (0, s.jsx)(W, {
                    quest: e,
                    taskType: d.type,
                    size: C,
                    analyticsCtxQuestContent: l,
                    analyticsCtxSourceQuestContent: o,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                    surface: n,
                });
            case r.UA.INCOMPLETE:
                return (0, s.jsx)(G, {
                    quest: e,
                    taskType: d.type,
                    size: C,
                    analyticsCtxQuestContent: l,
                    analyticsCtxSourceQuestContent: o,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                    surface: n,
                });
            case r.UA.EXPIRED_CLAIMABLE:
            case r.UA.COMPLETED:
                return (0, s.jsx)(R, {
                    quest: e,
                    size: C,
                    surface: n,
                    analyticsCtxQuestContent: l,
                    analyticsCtxSourceQuestContent: o,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case r.UA.CLAIMED:
                return (0, s.jsx)(g, {
                    quest: e,
                    taskType: d.type,
                    size: C,
                    surface: n,
                    analyticsCtxQuestContent: l,
                    analyticsCtxSourceQuestContent: o,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case r.UA.EXPIRED:
                return (0, s.jsx)(z, {
                    quest: e,
                    taskType: d.type,
                    surface: n,
                    size: C,
                    analyticsCtxQuestContent: l,
                    analyticsCtxSourceQuestContent: o,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            default:
                return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: C, text: x.intl.string(x.t.P84bAD) });
        }
    };
