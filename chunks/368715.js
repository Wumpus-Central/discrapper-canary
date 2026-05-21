"use strict";
n.d(t, { A: () => q });
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
    f = n(814793),
    h = n(753386),
    p = n(617986),
    E = n(190107),
    m = n(375708);
function g(e, t) {
    return u.o.VIDEO.has(e) ? d.Cy.WATCH_VIDEO : (0, f.vA)(t) ? d.Cy.START_QUEST : d.Cy.ACCEPT_QUEST;
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
          : (0, f.vA)(e)
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
            N = S ? void 0 : (0, p.Oz)(t),
            y = S
                ? (0, a.C0)(t)
                : (function (e, t) {
                      if ((0, _.K$)(e)) return m.intl.string(m.t["/cXIc6"]);
                      if ((0, _.IO)(e)) return (0, h.WM)(t);
                      if ((0, f.vA)(e))
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
            ? (0, i.jsx)(r.$, { size: u, variant: (0, l.AJ)(d, "secondary"), disabled: !0, text: y, fullWidth: !0 })
            : (0, i.jsx)(r.$, {
                  size: u,
                  variant: (0, l.AJ)(d, "primary"),
                  onClick: T,
                  text: y,
                  icon: N,
                  fullWidth: !0,
              });
    },
    T = function (e) {
        let {
                quest: t,
                taskType: n,
                analyticsCtxQuestContent: u,
                analyticsCtxSourceQuestContent: c,
                analyticsCtxQuestContentPosition: d,
                analyticsCtxQuestContentRowIndex: _,
                size: f,
                surface: h,
            } = e,
            p = h === l.V3.QUEST_HOME_TILE_V2_FOOTER,
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
        return (0, i.jsx)(r.$, {
            variant: (0, l.AJ)(h, "primary"),
            fullWidth: !0,
            size: f,
            onClick: p ? S : I,
            text: p ? T : E,
        });
    };
var S = n(17928),
    N = n(859703);
let y = function (e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: s,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: u,
            size: c,
            surface: d,
        } = e,
        _ = t.id,
        { isClaiming: f } = (0, S.cf)(
            [N.A],
            () => ({ isClaiming: N.A.isClaimingReward(_) || N.A.isFetchingRewardCode(_) }),
            [_],
        ),
        h = (0, o.ix)({
            quest: t,
            questContent: n,
            questContentPosition: a,
            questContentRowIndex: u,
            sourceQuestContent: s,
        });
    return (0, i.jsx)(r.$, {
        variant: (0, l.AJ)(d, "primary"),
        fullWidth: !0,
        size: c,
        loading: f,
        onClick: h,
        text: m.intl.string(m.t.cfY4PE),
    });
};
var C = n(64700),
    v = n(141628),
    O = n(862482),
    R = n(775602),
    b = n(178540),
    D = n(507107),
    L = n(946080),
    w = n(18437),
    M = n(971649),
    P = n(651892),
    x = n(901406),
    U = n(862611),
    k = n(263752);
function G(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: s,
            analyticsCtxQuestContentRowIndex: a,
        } = e,
        l = (0, w.Ut)(),
        u = (0, S.bG)([R.A], () => R.A.useReducedMotion),
        _ = (0, o.Xf)({ useReducedMotion: u }),
        f = (0, b.O)((e) => e.setErrorHints),
        { startingConsoleQuest: h, startConsoleQuest: p } = (0, c.Wj)({
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
                _.stopAnimation(), f(t.id, e);
            },
        });
    return (0, i.jsx)(O.$n, {
        "data-migration-pending": !0,
        color: O.XD.PRIMARY,
        onClick: p,
        disabled: h,
        className: k.x,
        children: (0, i.jsxs)("div", { className: k.t, children: [_.render(), m.intl.string(m.t.nPThNb)] }),
    });
}
function F(e) {
    let {
            quest: t,
            surface: n,
            analyticsCtxQuestContent: s,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: u,
            size: _,
        } = e,
        f = (0, c.RR)({ quest: t }),
        h = (0, M.vU)()?.getId(),
        p = (0, c.Vn)(t),
        E = (0, c.fc)(t),
        [g, A, I] = (0, c.Qo)(t, E);
    return p || g === D.X0.DESKTOP
        ? (0, i.jsx)(r.$, {
              variant: (0, l.AJ)(n, "secondary"),
              size: _,
              disabled: !0,
              text: m.intl.string(m.t["9KoPyB"]),
              fullWidth: !0,
          })
        : f && n === l.V3.QUEST_HOME_TILE_FOOTER
          ? (0, i.jsx)(r.$, {
                size: _,
                variant: (0, l.AJ)(n, "secondary"),
                onClick: () => {
                    (0, x.se)(
                        { quest: t },
                        {
                            content: s,
                            ctaContent: d.Cy.CONNECT_CONSOLE,
                            position: o,
                            rowIndex: u,
                            impressionId: h,
                            sourceQuestContent: a,
                        },
                    );
                },
                text: m.intl.string(m.t.Cfye4v),
                fullWidth: !0,
            })
          : (0, i.jsx)(G, {
                quest: t,
                analyticsCtxQuestContent: s,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: o,
                analyticsCtxQuestContentRowIndex: u,
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
            size: c,
        } = e,
        { hasAlreadyLinked: _ } = (0, L.U)(t),
        f = (0, M.go)(),
        h = (0, w.Ut)();
    return !0 === _
        ? n === l.V3.QUEST_BAR_FOOTER
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
                          impressionId: f,
                          sourceQuestContent: a,
                      }),
              })
            : (0, i.jsx)(r.$, {
                  size: c,
                  fullWidth: !0,
                  variant: "primary",
                  text: m.intl.string(m.t.QA20X3),
                  onClick: () => (0, p._x)({ quest: t, sourceQuestContent: a }),
              })
        : (0, i.jsx)(r.$, {
              size: c,
              fullWidth: !0,
              variant: "primary",
              icon: v.A,
              text: m.intl.string(m.t.sbdnpw),
              onClick: () => {
                  h({
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
function B(e) {
    let { quest: t, analyticsCtxSourceQuestContent: n, size: s, parentContainerRef: a } = e,
        { applications: o } = (0, c.fc)(t);
    return (0, i.jsx)(U.A, {
        quest: t,
        sourceQuestContent: n,
        applications: o ?? [],
        targetElementRef: a,
        children: (e) =>
            (0, i.jsx)(r.$, { variant: "secondary", fullWidth: !0, size: s, text: m.intl.string(m.t["93PTEs"]), ...e }),
    });
}
let H = function (e) {
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
        if ((0, _.I6)(t))
            return (0, i.jsx)(V, {
                quest: t,
                surface: n,
                analyticsCtxQuestContent: s,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: o,
                analyticsCtxQuestContentRowIndex: u,
                size: c,
            });
        if ((0, _.g5)(t) && n === l.V3.QUEST_HOME_TILE_FOOTER)
            return (0, i.jsx)(F, {
                quest: t,
                surface: n,
                size: c,
                analyticsCtxQuestContent: s,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: o,
                analyticsCtxQuestContentRowIndex: u,
            });
        if ((0, f.ui)(t) && n === l.V3.QUEST_BAR_FOOTER)
            return (0, i.jsx)("div", {
                ref: d,
                children: (0, i.jsx)(B, {
                    quest: t,
                    analyticsCtxSourceQuestContent: a,
                    size: c,
                    parentContainerRef: d,
                }),
            });
        let h = n === l.V3.QUEST_HOME_TILE_V2_FOOTER ? m.intl.string(m.t.SHZo2x) : m.intl.string(m.t["9KoPyB"]);
        return (0, i.jsx)(r.$, { size: c, variant: (0, l.AJ)(n, "secondary"), disabled: !0, text: h, fullWidth: !0 });
    },
    j = function (e) {
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
            ? (0, i.jsx)(H, {
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
    Y = function (e) {
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
            f = (0, c.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
            h = t.userStatus?.claimedAt != null;
        return s === l.V3.QUEST_HOME_TILE_FOOTER && h
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
                  variant: (0, l.AJ)(s, "secondary"),
                  disabled: !0,
                  fullWidth: !0,
                  size: a,
                  text: m.intl.format(m.t["6p8BZx"], { expiryDate: f }),
              });
    },
    W = function (e) {
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
        return ((0, _.t)({ quest: t }) || (0, _.g5)(t)) && s === l.V3.QUEST_BAR_FOOTER && (0, f.ui)(t)
            ? (0, i.jsx)(r.$, {
                  size: d,
                  variant: (0, l.AJ)(s, "secondary"),
                  disabled: !0,
                  text: m.intl.string(m.t["9KoPyB"]),
                  fullWidth: !0,
              })
            : (0, i.jsx)(j, {
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
var K = n(340124);
function z(e) {
    switch (e) {
        case u.n.ACHIEVEMENT_IN_ACTIVITY:
        case u.n.PLAY_ACTIVITY:
        case u.n.WATCH_VIDEO:
            return d.Cy.START_QUEST;
        default:
            return d.Cy.ACCEPT_QUEST;
    }
}
let $ = function (e) {
        var t;
        let {
                quest: n,
                taskType: s,
                size: o = "sm",
                surface: d,
                preClickCallback: f,
                analyticsCtxQuestContent: g,
                analyticsCtxSourceQuestContent: A,
                analyticsCtxQuestContentPosition: I,
                analyticsCtxQuestContentRowIndex: T,
            } = e,
            y = {
                questContent: g,
                questContentCTA: z(s),
                sourceQuestContent: A,
                questContentPosition: I,
                questContentRowIndex: T,
            },
            C = n.id,
            { isEnrolling: v } = (0, S.cf)([N.A], () => ({ isEnrolling: N.A.isEnrolling(C) }), [C]),
            O = d === l.V3.QUEST_HOME_TILE_V2_FOOTER,
            R = O ? void 0 : (0, p.Oz)(n),
            b = (function (e, t) {
                let { launchInGameActivity: n } = (0, c.zW)(t);
                if ((0, _.K$)(t))
                    return () => {
                        (0, p.Fy)(t);
                    };
                switch (e) {
                    case u.n.ACHIEVEMENT_IN_ACTIVITY:
                    case u.n.PLAY_ACTIVITY:
                        return () => {
                            n();
                        };
                    default:
                        return null;
                }
            })(s, n),
            D = O
                ? (0, a.C0)(n)
                : (function (e, t) {
                      let { features: n } = t.config;
                      switch (e) {
                          case u.n.WATCH_VIDEO:
                              return (0, h.WM)((0, _.Yh)(t));
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
                              questContent: y.questContent,
                              questContentCTA: y.questContentCTA,
                              sourceQuestContent: y.sourceQuestContent,
                              sourceQuestContentCTA: z(s),
                              questContentPosition: y.questContentPosition,
                              questContentRowIndex: y.questContentRowIndex,
                          });
                      }
                    : async () => {
                          await (0, K.Oy)(n.id, {
                              questContent: y.questContent,
                              questContentCTA: y.questContentCTA,
                              sourceQuestContent: y.sourceQuestContent,
                              questContentPosition: y.questContentPosition,
                              questContentRowIndex: y.questContentRowIndex,
                          }),
                              t?.();
                      });
        return (0, i.jsx)(r.$, {
            size: o,
            loading: v,
            variant: (0, l.AJ)(d, "primary"),
            onClick: () => {
                f?.(), L();
            },
            text: D,
            icon: R,
            fullWidth: !0,
        });
    },
    q = function (e) {
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
            return (0, i.jsx)(r.$, {
                variant: (0, l.AJ)(n, "primary"),
                fullWidth: !0,
                size: "sm",
                text: m.intl.string(m.t.P84bAD),
            });
        let f = Object.values(t.config.taskConfigV2.tasks)[0];
        switch (_) {
            case l.UA.UNENROLLED:
                return (0, i.jsx)($, {
                    quest: t,
                    taskType: f.type,
                    size: d,
                    surface: n,
                    preClickCallback: s,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: o,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case l.UA.ENROLLED:
                return (0, i.jsx)(j, {
                    quest: t,
                    taskType: f.type,
                    size: d,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: o,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                    surface: n,
                });
            case l.UA.INCOMPLETE:
                return (0, i.jsx)(W, {
                    quest: t,
                    taskType: f.type,
                    size: d,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: o,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                    surface: n,
                });
            case l.UA.EXPIRED_CLAIMABLE:
            case l.UA.COMPLETED:
                return (0, i.jsx)(y, {
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
                    taskType: f.type,
                    size: d,
                    surface: n,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: o,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case l.UA.EXPIRED:
                return (0, i.jsx)(Y, {
                    quest: t,
                    taskType: f.type,
                    surface: n,
                    size: d,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: o,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            default:
                return (0, i.jsx)(r.$, {
                    variant: (0, l.AJ)(n, "primary"),
                    fullWidth: !0,
                    size: d,
                    text: m.intl.string(m.t.P84bAD),
                });
        }
    };
