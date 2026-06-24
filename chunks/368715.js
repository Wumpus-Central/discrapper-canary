"use strict";
n.d(t, { A: () => et });
var i = n(627968),
    r = n(821609),
    s = n(801365),
    a = n(662940),
    o = n(371912),
    l = n(79545),
    u = n(412703),
    c = n(347135),
    d = n(590202),
    _ = n(792620),
    h = n(814793),
    f = n(753386),
    p = n(617986),
    E = n(190107),
    m = n(375708);
function g(e, t) {
    return u.o.VIDEO.has(e) ? d.Cy.WATCH_VIDEO : (0, h.vA)(t) ? d.Cy.START_QUEST : d.Cy.ACCEPT_QUEST;
}
function A(e, t, n, i) {
    let { launchInGameActivity: r } = (0, c.zW)(e);
    return (0, _.K$)(e)
        ? () => {
              (0, p.Fy)(e);
          }
        : (0, _.IO)(e)
          ? () => {
                (0, p.d5)({ quest: e, questContent: t, sourceQuestContent: n, sourceQuestContentCTA: i });
            }
          : (0, h.vA)(e)
            ? () => {
                  r();
              }
            : null;
}
let I = function (e) {
        let {
                quest: t,
                taskType: n,
                analyticsCtxQuestContent: s,
                analyticsCtxSourceQuestContent: o,
                size: u,
                surface: d,
            } = e,
            I = (0, c.fc)(t),
            T = A(t, s, o, g(n, t)),
            S = d === l.V3.QUEST_HOME_TILE_V2_FOOTER,
            y = S ? (0, p.Q_)(t) : (0, p.Oz)(t),
            C = S
                ? (0, a.C0)(t)
                : (function (e, t) {
                      if ((0, _.K$)(e)) return m.intl.string(m.t["/cXIc6"]);
                      if ((0, _.IO)(e)) return (0, f.WM)(t);
                      if ((0, h.vA)(e))
                          return (0, _.Ov)(e)
                              ? m.intl.string(m.t.CkUzLd)
                              : (0, _.vl)(e)
                                ? e.config.features.includes(E.Li.CLOUD_GAMING_ACTIVITY)
                                    ? m.intl.string(m.t["+qoymD"])
                                    : m.intl.string(m.t.E4kW5O)
                                : m.intl.string(m.t.l7E81v);
                      return m.intl.string(m.t["9KoPyB"]);
                  })(t, I);
        return null == T
            ? (0, i.jsx)(r.$, { size: u, variant: "secondary", disabled: !0, text: C, fullWidth: !0 })
            : (0, i.jsx)(r.$, { size: u, variant: (0, l.wX)(d), onClick: T, text: C, icon: y, fullWidth: !0 });
    },
    T = function (e) {
        let {
                quest: t,
                taskType: n,
                analyticsCtxQuestContent: u,
                analyticsCtxSourceQuestContent: c,
                analyticsCtxQuestContentPosition: d,
                analyticsCtxQuestContentRowIndex: _,
                size: h,
                surface: f,
            } = e,
            p = f === l.V3.QUEST_HOME_TILE_V2_FOOTER,
            E = (0, s.r7)(t.config) ? m.intl.string(m.t.bAGFz3) : m.intl.string(m.t.vTgCWx),
            I = (0, o.ix)({
                quest: t,
                questContent: u,
                questContentPosition: d,
                questContentRowIndex: _,
                sourceQuestContent: c,
            }),
            T = (0, a.vj)(t),
            S = A(t, u, c, g(n, t));
        return (0, i.jsx)(r.$, { variant: (0, l.wX)(f), fullWidth: !0, size: h, onClick: p ? S : I, text: p ? T : E });
    };
var S = n(17928),
    y = n(859703),
    C = n(795965);
let N = function (e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: s,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: o,
            size: u,
            surface: c,
        } = e,
        d = t.id,
        { isClaiming: _ } = (0, S.cf)(
            [y.A],
            () => ({ isClaiming: y.A.isClaimingReward(d) || y.A.isFetchingRewardCode(d) }),
            [d],
        ),
        h = null != c ? (0, l.Ut)(c) : null,
        f = (0, C.D)({
            quest: t,
            questContent: n,
            sourceQuestContent: s,
            questContentPosition: a,
            questContentRowIndex: o,
            experimentLocation: h,
        });
    return (0, i.jsx)(r.$, {
        variant: (0, l.wX)(c),
        fullWidth: !0,
        size: u,
        loading: _,
        onClick: f,
        text: m.intl.string(m.t.cfY4PE),
    });
};
var v = n(64700),
    R = n(323889),
    O = n(141628),
    b = n(862482),
    D = n(775602),
    L = n(274670),
    w = n(144779),
    M = n(178540),
    P = n(507107),
    x = n(104886),
    k = n(18437),
    U = n(971649),
    G = n(651892),
    F = n(901406),
    V = n(862611),
    B = n(284846),
    j = n(263752);
function H(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: s,
            analyticsCtxQuestContentRowIndex: a,
        } = e,
        l = (0, k.Ut)(),
        u = (0, U.go)(),
        _ = (0, S.bG)([D.Ay], () => D.Ay.useReducedMotion),
        h = (0, o.Xf)({ useReducedMotion: _ }),
        f = (0, M.O)((e) => e.setErrorHints),
        { startingConsoleQuest: p, startConsoleQuest: E } = (0, c.Wj)({
            questId: t.id,
            beforeRequest: () => {
                h.startAnimation(),
                    (0, x.E5)(x.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                        ? (0, L.r)({
                              type: w.F.CLICK_INTERNAL,
                              adCreativeType: R.p.QUEST,
                              adCreativeId: t.id,
                              questContentCTA: d.Cy.DEFIBRILLATOR,
                              surfaceId: n,
                              sourceQuestContent: r,
                              impressionId: u,
                              questContentPosition: s,
                              questContentRowIndex: a,
                          })
                        : l({
                              questId: t.id,
                              questContent: n,
                              questContentCTA: d.Cy.DEFIBRILLATOR,
                              questContentPosition: s,
                              questContentRowIndex: a,
                              sourceQuestContent: r,
                          });
            },
            afterRequest: (e) => {
                h.stopAnimation(), f(t.id, e);
            },
        });
    return (0, i.jsx)(b.$n, {
        "data-migration-pending": !0,
        color: b.XD.PRIMARY,
        onClick: E,
        disabled: p,
        className: j.x,
        children: (0, i.jsxs)("div", { className: j.t, children: [h.render(), m.intl.string(m.t.nPThNb)] }),
    });
}
function Y(e) {
    let {
            quest: t,
            surface: n,
            analyticsCtxQuestContent: s,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: u,
            size: _,
        } = e,
        h = (0, c.RR)({ quest: t }),
        f = (0, U.vU)()?.getId(),
        p = (0, c.Vn)(t),
        E = (0, c.fc)(t),
        [g, A, I] = (0, c.Qo)(t, E);
    return p || g === P.X0.DESKTOP
        ? (0, i.jsx)(r.$, {
              variant: "secondary",
              size: _,
              disabled: !0,
              text: m.intl.string(m.t["9KoPyB"]),
              fullWidth: !0,
          })
        : h && n === l.V3.QUEST_HOME_TILE_FOOTER
          ? (0, i.jsx)(r.$, {
                size: _,
                variant: "secondary",
                onClick: () => {
                    (0, F.se)(
                        { quest: t },
                        {
                            content: s,
                            ctaContent: d.Cy.CONNECT_CONSOLE,
                            position: o,
                            rowIndex: u,
                            impressionId: f,
                            sourceQuestContent: a,
                        },
                    );
                },
                text: m.intl.string(m.t.Cfye4v),
                fullWidth: !0,
            })
          : (0, i.jsx)(H, {
                quest: t,
                analyticsCtxQuestContent: s,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: o,
                analyticsCtxQuestContentRowIndex: u,
            });
}
function W(e) {
    let {
            quest: t,
            surface: n,
            analyticsCtxQuestContent: s,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: u,
            size: c,
        } = e,
        { hasAlreadyLinked: _ } = (0, B.U)(t),
        h = (0, U.go)(),
        f = (0, k.Ut)();
    if (!0 === _)
        return n === l.V3.QUEST_BAR_FOOTER
            ? (0, i.jsx)(r.$, {
                  size: c,
                  fullWidth: !0,
                  variant: "secondary",
                  text: (0, G.wr)(t),
                  onClick: () =>
                      (0, F.pu)(t, {
                          content: s,
                          ctaContent: d.Cy.OPEN_GAME_LINK,
                          position: o,
                          impressionId: h,
                          sourceQuestContent: a,
                      }),
              })
            : (0, i.jsx)(r.$, {
                  size: c,
                  fullWidth: !0,
                  variant: (0, l.wX)(n),
                  text: m.intl.string(m.t.SHZo2x),
                  onClick: () => (0, p._x)({ quest: t, sourceQuestContent: a }),
              });
    let E = n === l.V3.QUEST_HOME_TILE_V2_FOOTER;
    return (0, i.jsx)(r.$, {
        size: c,
        fullWidth: !0,
        variant: (0, l.wX)(n),
        icon: E ? void 0 : O.A,
        text: E ? m.intl.string(m.t.SHZo2x) : m.intl.string(m.t.sbdnpw),
        onClick: () => {
            (0, x.E5)(x.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                ? (0, L.r)({
                      type: w.F.CLICK_INTERNAL,
                      adCreativeType: R.p.QUEST,
                      adCreativeId: t.id,
                      questContentCTA: d.Cy.OPEN_ACCOUNT_LINK_MODAL,
                      surfaceId: s,
                      sourceQuestContent: a,
                      impressionId: h,
                      questContentPosition: o,
                      questContentRowIndex: u,
                  })
                : f({
                      questId: t.id,
                      questContent: s,
                      questContentCTA: d.Cy.OPEN_ACCOUNT_LINK_MODAL,
                      questContentPosition: o,
                      questContentRowIndex: u,
                      sourceQuestContent: a,
                  }),
                (0, p._x)({ quest: t, sourceQuestContent: a });
        },
    });
}
function K(e) {
    let { quest: t, analyticsCtxSourceQuestContent: n, size: s, parentContainerRef: a } = e,
        { applications: o } = (0, c.fc)(t);
    return (0, i.jsx)(V.A, {
        quest: t,
        sourceQuestContent: n,
        applications: o ?? [],
        targetElementRef: a,
        children: (e) =>
            (0, i.jsx)(r.$, { variant: "secondary", fullWidth: !0, size: s, text: m.intl.string(m.t["93PTEs"]), ...e }),
    });
}
function $(e) {
    let { quest: t, surface: n, analyticsCtxSourceQuestContent: s, size: a } = e;
    return (0, i.jsx)(r.$, {
        size: a,
        fullWidth: !0,
        variant: (0, l.wX)(n, "primary"),
        text: m.intl.string(m.t.SHZo2x),
        onClick: () => (0, p.ii)({ quest: t, sourceQuestContent: s }),
    });
}
let z = function (e) {
        let {
                quest: t,
                surface: n,
                analyticsCtxQuestContent: s,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: o,
                analyticsCtxQuestContentRowIndex: u,
                size: c,
            } = e,
            d = v.useRef(null);
        return (0, _.I6)(t)
            ? (0, i.jsx)(W, {
                  quest: t,
                  surface: n,
                  analyticsCtxQuestContent: s,
                  analyticsCtxSourceQuestContent: a,
                  analyticsCtxQuestContentPosition: o,
                  analyticsCtxQuestContentRowIndex: u,
                  size: c,
              })
            : (0, _.g5)(t) && n === l.V3.QUEST_HOME_TILE_FOOTER
              ? (0, i.jsx)(Y, {
                    quest: t,
                    surface: n,
                    size: c,
                    analyticsCtxQuestContent: s,
                    analyticsCtxSourceQuestContent: a,
                    analyticsCtxQuestContentPosition: o,
                    analyticsCtxQuestContentRowIndex: u,
                })
              : (0, h.ui)(t) && n === l.V3.QUEST_BAR_FOOTER
                ? (0, i.jsx)("div", {
                      ref: d,
                      children: (0, i.jsx)(K, {
                          quest: t,
                          analyticsCtxSourceQuestContent: a,
                          size: c,
                          parentContainerRef: d,
                      }),
                  })
                : n === l.V3.QUEST_HOME_TILE_V2_FOOTER
                  ? (0, i.jsx)($, { quest: t, surface: n, analyticsCtxSourceQuestContent: a, size: c })
                  : (0, i.jsx)(r.$, {
                        size: c,
                        variant: "secondary",
                        disabled: !0,
                        text: m.intl.string(m.t["9KoPyB"]),
                        fullWidth: !0,
                    });
    },
    q = function (e) {
        let {
            quest: t,
            taskType: n,
            surface: r,
            analyticsCtxQuestContent: s,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: l,
            size: u,
        } = e;
        return (0, _.GL)(t)
            ? (0, i.jsx)(z, {
                  quest: t,
                  surface: r,
                  size: u,
                  analyticsCtxQuestContent: s,
                  analyticsCtxSourceQuestContent: a,
                  analyticsCtxQuestContentPosition: o,
                  analyticsCtxQuestContentRowIndex: l,
              })
            : (0, i.jsx)(I, {
                  quest: t,
                  taskType: n,
                  size: u,
                  surface: r,
                  analyticsCtxQuestContent: s,
                  analyticsCtxSourceQuestContent: a,
              });
    },
    Z = function (e) {
        let {
                quest: t,
                taskType: n,
                surface: s,
                size: a,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: u,
                analyticsCtxQuestContentPosition: d,
                analyticsCtxQuestContentRowIndex: _,
            } = e,
            h = (0, c.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
            f = t.userStatus?.claimedAt != null;
        return s === l.V3.QUEST_HOME_TILE_FOOTER && f
            ? (0, i.jsx)(T, {
                  quest: t,
                  taskType: n,
                  size: a,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: u,
                  analyticsCtxQuestContentPosition: d,
                  analyticsCtxQuestContentRowIndex: _,
              })
            : (0, i.jsx)(r.$, {
                  variant: "secondary",
                  disabled: !0,
                  fullWidth: !0,
                  size: a,
                  text: m.intl.format(m.t["6p8BZx"], { expiryDate: h }),
              });
    },
    X = function (e) {
        let {
            quest: t,
            taskType: n,
            surface: s,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: u,
            analyticsCtxQuestContentRowIndex: c,
            size: d,
        } = e;
        return ((0, _.t)({ quest: t }) || (0, _.g5)(t)) && s === l.V3.QUEST_BAR_FOOTER && (0, h.ui)(t)
            ? (0, i.jsx)(r.$, {
                  size: d,
                  variant: "secondary",
                  disabled: !0,
                  text: m.intl.string(m.t["9KoPyB"]),
                  fullWidth: !0,
              })
            : (0, i.jsx)(q, {
                  quest: t,
                  taskType: n,
                  surface: s,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: o,
                  analyticsCtxQuestContentPosition: u,
                  analyticsCtxQuestContentRowIndex: c,
                  size: d,
              });
    };
var Q = n(340124);
function J(e) {
    switch (e) {
        case u.n.ACHIEVEMENT_IN_ACTIVITY:
        case u.n.PLAY_ACTIVITY:
        case u.n.WATCH_VIDEO:
            return d.Cy.START_QUEST;
        default:
            return d.Cy.ACCEPT_QUEST;
    }
}
let ee = function (e) {
        var t;
        let {
                quest: n,
                taskType: s,
                size: o = "sm",
                surface: d,
                preClickCallback: h,
                analyticsCtxQuestContent: g,
                analyticsCtxSourceQuestContent: A,
                analyticsCtxQuestContentPosition: I,
                analyticsCtxQuestContentRowIndex: T,
            } = e,
            C = {
                questContent: g,
                questContentCTA: J(s),
                sourceQuestContent: A,
                questContentPosition: I,
                questContentRowIndex: T,
            },
            N = n.id,
            v = d === l.V3.QUEST_HOME_TILE_V2_FOOTER,
            { isEnrolling: R } = (0, S.cf)([y.A], () => ({ isEnrolling: y.A.isEnrolling(N) }), [N]),
            O = v ? (0, p.Q_)(n) : (0, p.Oz)(n),
            b = (function (e, t, n, i) {
                let { launchInGameActivity: r } = (0, c.zW)(t),
                    s = i === l.V3.QUEST_HOME_TILE_V2_FOOTER;
                if ((0, _.K$)(t))
                    return () => {
                        (0, p.Fy)(t);
                    };
                switch (e) {
                    case u.n.ACHIEVEMENT_IN_ACTIVITY:
                    case u.n.PLAY_ACTIVITY:
                        return () => {
                            r();
                        };
                    case u.n.ACHIEVEMENT_IN_GAME:
                        return s
                            ? () => {
                                  (0, p._x)({ quest: t, sourceQuestContent: n });
                              }
                            : null;
                    case u.n.PLAY_ON_XBOX:
                    case u.n.PLAY_ON_PLAYSTATION:
                    case u.n.PLAY_ON_DESKTOP:
                        return s
                            ? () => {
                                  (0, p.ii)({ quest: t, sourceQuestContent: n });
                              }
                            : null;
                    default:
                        return null;
                }
            })(s, n, A, d),
            D = v
                ? (0, a.C0)(n)
                : (function (e, t) {
                      let { features: n } = t.config;
                      switch (e) {
                          case u.n.WATCH_VIDEO:
                              return (0, f.WM)((0, _.Yh)(t));
                          case u.n.ACHIEVEMENT_IN_ACTIVITY:
                              return m.intl.string(m.t.CkUzLd);
                          case u.n.PLAY_ACTIVITY:
                              if (n.includes(E.Li.CLOUD_GAMING_ACTIVITY)) return m.intl.string(m.t["+qoymD"]);
                              return m.intl.string(m.t.E4kW5O);
                          default:
                              return m.intl.string(m.t.kUQLMJ);
                      }
                  })(s, n),
            L =
                ((t = b ?? void 0),
                s === u.n.WATCH_VIDEO
                    ? async () => {
                          await (0, p.e0)(n, {
                              questContent: C.questContent,
                              questContentCTA: C.questContentCTA,
                              sourceQuestContent: C.sourceQuestContent,
                              sourceQuestContentCTA: J(s),
                              questContentPosition: C.questContentPosition,
                              questContentRowIndex: C.questContentRowIndex,
                          });
                      }
                    : async () => {
                          await (0, Q.Oy)(n.id, {
                              questContent: C.questContent,
                              questContentCTA: C.questContentCTA,
                              sourceQuestContent: C.sourceQuestContent,
                              questContentPosition: C.questContentPosition,
                              questContentRowIndex: C.questContentRowIndex,
                          }),
                              t?.();
                      });
        return (0, i.jsx)(r.$, {
            size: o,
            loading: R,
            variant: (0, l.wX)(d, "primary"),
            onClick: () => {
                h?.(), L();
            },
            text: D,
            icon: O,
            fullWidth: !0,
        });
    },
    et = function (e) {
        let {
                quest: t,
                surface: n,
                preClickCallback: s,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: o,
                analyticsCtxQuestContentPosition: u,
                analyticsCtxQuestContentRowIndex: c,
                size: d = "md",
            } = e,
            _ = (0, l.Pd)(t);
        if (0 === Object.keys(t.config.taskConfigV2.tasks).length)
            return (0, i.jsx)(r.$, { variant: "primary", fullWidth: !0, size: "sm", text: m.intl.string(m.t.P84bAD) });
        let h = Object.values(t.config.taskConfigV2.tasks)[0];
        switch (_) {
            case l.UA.UNENROLLED:
                return (0, i.jsx)(ee, {
                    quest: t,
                    taskType: h.type,
                    size: d,
                    surface: n,
                    preClickCallback: s,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: o,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case l.UA.ENROLLED:
                return (0, i.jsx)(q, {
                    quest: t,
                    taskType: h.type,
                    size: d,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: o,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                    surface: n,
                });
            case l.UA.INCOMPLETE:
                return (0, i.jsx)(X, {
                    quest: t,
                    taskType: h.type,
                    size: d,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: o,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                    surface: n,
                });
            case l.UA.EXPIRED_CLAIMABLE:
            case l.UA.COMPLETED:
                return (0, i.jsx)(N, {
                    quest: t,
                    size: d,
                    surface: n,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: o,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case l.UA.CLAIMED:
                return (0, i.jsx)(T, {
                    quest: t,
                    taskType: h.type,
                    size: d,
                    surface: n,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: o,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case l.UA.EXPIRED:
                return (0, i.jsx)(Z, {
                    quest: t,
                    taskType: h.type,
                    surface: n,
                    size: d,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: o,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            default:
                return (0, i.jsx)(r.$, { variant: "primary", fullWidth: !0, size: d, text: m.intl.string(m.t.P84bAD) });
        }
    };
