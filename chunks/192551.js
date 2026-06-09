"use strict";
n.d(t, { A: () => et });
var i = n(627968),
    r = n(821609),
    s = n(801365),
    a = n(662940),
    o = n(371912),
    l = n(79545),
    u = n(412703),
    c = n(31587),
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
            N = S
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
            ? (0, i.jsx)(r.$, { size: u, variant: "secondary", disabled: !0, text: N, fullWidth: !0 })
            : (0, i.jsx)(r.$, { size: u, variant: "primary", onClick: T, text: N, icon: y, fullWidth: !0 });
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
        return (0, i.jsx)(r.$, { variant: "primary", fullWidth: !0, size: h, onClick: p ? S : I, text: p ? T : E });
    };
var S = n(17928),
    y = n(859703),
    N = n(795965);
let v = function (e) {
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
        f = (0, N.D)({
            quest: t,
            questContent: n,
            sourceQuestContent: s,
            questContentPosition: a,
            questContentRowIndex: o,
            experimentLocation: h,
        });
    return (0, i.jsx)(r.$, {
        variant: "primary",
        fullWidth: !0,
        size: u,
        loading: _,
        onClick: f,
        text: m.intl.string(m.t.cfY4PE),
    });
};
var C = n(64700),
    R = n(141628),
    O = n(862482),
    b = n(775602),
    D = n(178540),
    L = n(507107),
    w = n(18437),
    M = n(971649),
    P = n(651892),
    x = n(901406),
    k = n(862611),
    U = n(284846),
    G = n(263752);
function F(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: s,
            analyticsCtxQuestContentRowIndex: a,
        } = e,
        l = (0, w.Ut)(),
        u = (0, S.bG)([b.A], () => b.A.useReducedMotion),
        _ = (0, o.Xf)({ useReducedMotion: u }),
        h = (0, D.O)((e) => e.setErrorHints),
        { startingConsoleQuest: f, startConsoleQuest: p } = (0, c.Wj)({
            questId: t.id,
            beforeRequest: () => {
                _.startAnimation(),
                    l({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: d.Cy.DEFIBRILLATOR,
                        questContentPosition: s,
                        questContentRowIndex: a,
                        sourceQuestContent: r,
                    });
            },
            afterRequest: (e) => {
                _.stopAnimation(), h(t.id, e);
            },
        });
    return (0, i.jsx)(O.$n, {
        "data-migration-pending": !0,
        color: O.XD.PRIMARY,
        onClick: p,
        disabled: f,
        className: G.x,
        children: (0, i.jsxs)("div", { className: G.t, children: [_.render(), m.intl.string(m.t.nPThNb)] }),
    });
}
function V(e) {
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
        f = (0, M.vU)()?.getId(),
        p = (0, c.Vn)(t),
        E = (0, c.fc)(t),
        [g, A, I] = (0, c.Qo)(t, E);
    return p || g === L.X0.DESKTOP
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
                    (0, x.se)(
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
          : (0, i.jsx)(F, {
                quest: t,
                analyticsCtxQuestContent: s,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: o,
                analyticsCtxQuestContentRowIndex: u,
            });
}
function B(e) {
    let {
            quest: t,
            surface: n,
            analyticsCtxQuestContent: s,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: u,
            size: c,
        } = e,
        { hasAlreadyLinked: _ } = (0, U.U)(t),
        h = (0, M.go)(),
        f = (0, w.Ut)();
    if (!0 === _)
        return n === l.V3.QUEST_BAR_FOOTER
            ? (0, i.jsx)(r.$, {
                  size: c,
                  fullWidth: !0,
                  variant: "secondary",
                  text: (0, P.wr)(t),
                  onClick: () =>
                      (0, x.pu)(t, {
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
                  variant: "primary",
                  text: m.intl.string(m.t.SHZo2x),
                  onClick: () => (0, p._x)({ quest: t, sourceQuestContent: a }),
              });
    let E = n === l.V3.QUEST_HOME_TILE_V2_FOOTER;
    return (0, i.jsx)(r.$, {
        size: c,
        fullWidth: !0,
        variant: "primary",
        icon: E ? void 0 : R.A,
        text: E ? m.intl.string(m.t.SHZo2x) : m.intl.string(m.t.sbdnpw),
        onClick: () => {
            f({
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
function H(e) {
    let { quest: t, analyticsCtxSourceQuestContent: n, size: s, parentContainerRef: a } = e,
        { applications: o } = (0, c.fc)(t);
    return (0, i.jsx)(k.A, {
        quest: t,
        sourceQuestContent: n,
        applications: o ?? [],
        targetElementRef: a,
        children: (e) =>
            (0, i.jsx)(r.$, { variant: "secondary", fullWidth: !0, size: s, text: m.intl.string(m.t["93PTEs"]), ...e }),
    });
}
function j(e) {
    let { quest: t, analyticsCtxSourceQuestContent: n, size: s } = e;
    return (0, i.jsx)(r.$, {
        size: s,
        fullWidth: !0,
        variant: "primary",
        text: m.intl.string(m.t.SHZo2x),
        onClick: () => (0, p.ii)({ quest: t, sourceQuestContent: n }),
    });
}
let Y = function (e) {
        let {
                quest: t,
                surface: n,
                analyticsCtxQuestContent: s,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: o,
                analyticsCtxQuestContentRowIndex: u,
                size: c,
            } = e,
            d = C.useRef(null);
        return (0, _.I6)(t)
            ? (0, i.jsx)(B, {
                  quest: t,
                  surface: n,
                  analyticsCtxQuestContent: s,
                  analyticsCtxSourceQuestContent: a,
                  analyticsCtxQuestContentPosition: o,
                  analyticsCtxQuestContentRowIndex: u,
                  size: c,
              })
            : (0, _.g5)(t) && n === l.V3.QUEST_HOME_TILE_FOOTER
              ? (0, i.jsx)(V, {
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
                      children: (0, i.jsx)(H, {
                          quest: t,
                          analyticsCtxSourceQuestContent: a,
                          size: c,
                          parentContainerRef: d,
                      }),
                  })
                : n === l.V3.QUEST_HOME_TILE_V2_FOOTER
                  ? (0, i.jsx)(j, { quest: t, analyticsCtxSourceQuestContent: a, size: c })
                  : (0, i.jsx)(r.$, {
                        size: c,
                        variant: "secondary",
                        disabled: !0,
                        text: m.intl.string(m.t["9KoPyB"]),
                        fullWidth: !0,
                    });
    },
    W = function (e) {
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
            ? (0, i.jsx)(Y, {
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
    K = function (e) {
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
    $ = function (e) {
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
            : (0, i.jsx)(W, {
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
var z = n(340124);
function q(e) {
    switch (e) {
        case u.n.ACHIEVEMENT_IN_ACTIVITY:
        case u.n.PLAY_ACTIVITY:
        case u.n.WATCH_VIDEO:
            return d.Cy.START_QUEST;
        default:
            return d.Cy.ACCEPT_QUEST;
    }
}
function X(e) {
    var t;
    let {
            quest: n,
            taskType: s,
            size: o = "sm",
            surface: d,
            variant: h,
            preClickCallback: g,
            analyticsCtxQuestContent: A,
            analyticsCtxSourceQuestContent: I,
            analyticsCtxQuestContentPosition: T,
            analyticsCtxQuestContentRowIndex: N,
        } = e,
        v = {
            questContent: A,
            questContentCTA: q(s),
            sourceQuestContent: I,
            questContentPosition: T,
            questContentRowIndex: N,
        },
        C = n.id,
        { isEnrolling: R } = (0, S.cf)([y.A], () => ({ isEnrolling: y.A.isEnrolling(C) }), [C]),
        O = d === l.V3.QUEST_HOME_TILE_V2_FOOTER,
        b = O ? (0, p.Q_)(n) : (0, p.Oz)(n),
        D = (function (e, t, n) {
            let { launchInGameActivity: i } = (0, c.zW)(t);
            if ((0, _.K$)(t))
                return () => {
                    (0, p.Fy)(t);
                };
            switch (e) {
                case u.n.ACHIEVEMENT_IN_ACTIVITY:
                case u.n.PLAY_ACTIVITY:
                    return () => {
                        i();
                    };
                case u.n.ACHIEVEMENT_IN_GAME:
                    return () => {
                        (0, p._x)({ quest: t, sourceQuestContent: n });
                    };
                case u.n.PLAY_ON_XBOX:
                case u.n.PLAY_ON_PLAYSTATION:
                case u.n.PLAY_ON_DESKTOP:
                    return () => {
                        (0, p.ii)({ quest: t, sourceQuestContent: n });
                    };
                default:
                    return null;
            }
        })(s, n, I),
        L = O
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
        w =
            ((t = D ?? void 0),
            s === u.n.WATCH_VIDEO
                ? async () => {
                      await (0, p.e0)(n, {
                          questContent: v.questContent,
                          questContentCTA: v.questContentCTA,
                          sourceQuestContent: v.sourceQuestContent,
                          sourceQuestContentCTA: q(s),
                          questContentPosition: v.questContentPosition,
                          questContentRowIndex: v.questContentRowIndex,
                      });
                  }
                : async () => {
                      await (0, z.Oy)(n.id, {
                          questContent: v.questContent,
                          questContentCTA: v.questContentCTA,
                          sourceQuestContent: v.sourceQuestContent,
                          questContentPosition: v.questContentPosition,
                          questContentRowIndex: v.questContentRowIndex,
                      }),
                          t?.();
                  });
    return (0, i.jsx)(r.$, {
        size: o,
        loading: R,
        variant: h,
        onClick: () => {
            g?.(), w();
        },
        text: L,
        icon: b,
        fullWidth: !0,
    });
}
let Z = function (e) {
    return (0, i.jsx)(X, { ...e, variant: "primary" });
};
var Q = n(19238);
let J = function (e) {
        let { buttonVariant: t } = (0, Q.A)(!0);
        return (0, i.jsx)(X, { ...e, surface: l.V3.QUEST_BAR_FOOTER, variant: t });
    },
    ee = function (e) {
        let { surface: t, ...n } = e;
        return t === l.V3.QUEST_BAR_FOOTER ? (0, i.jsx)(J, { ...n }) : (0, i.jsx)(Z, { ...n, surface: t });
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
                return (0, i.jsx)(W, {
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
                return (0, i.jsx)($, {
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
                return (0, i.jsx)(v, {
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
                return (0, i.jsx)(K, {
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
