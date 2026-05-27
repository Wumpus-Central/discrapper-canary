n.d(e, { A: () => X });
var s = n(627968),
    i = n(821609),
    a = n(801365),
    l = n(662940),
    r = n(371912),
    o = n(79545),
    u = n(412703),
    c = n(31587),
    C = n(590202),
    d = n(792620),
    E = n(814793),
    A = n(753386),
    T = n(617986),
    x = n(190107),
    I = n(375708);
function _(t, e) {
    return u.o.VIDEO.has(t) ? C.Cy.WATCH_VIDEO : (0, E.vA)(e) ? C.Cy.START_QUEST : C.Cy.ACCEPT_QUEST;
}
function g(t, e, n, s) {
    let { launchInGameActivity: i } = (0, c.zW)(t);
    return (0, d.K$)(t)
        ? () => {
              (0, T.Fy)(t);
          }
        : (0, d.IO)(t)
          ? () => {
                (0, T.d5)({ quest: t, questContent: e, sourceQuestContent: n, sourceQuestContentCTA: s });
            }
          : (0, E.vA)(t)
            ? () => {
                  i();
              }
            : null;
}
let L = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: r,
                size: u,
                surface: C,
            } = t,
            L = (0, c.fc)(e),
            f = g(e, a, r, _(n, e)),
            h = C === o.V3.QUEST_HOME_TILE_V2_FOOTER,
            O = h ? void 0 : (0, T.Oz)(e),
            N = h
                ? (0, l.C0)(e)
                : (function (t, e) {
                      if ((0, d.K$)(t)) return I.intl.string(I.t["/cXIc6"]);
                      if ((0, d.IO)(t)) return (0, A.WM)(e);
                      if ((0, E.vA)(t))
                          return (0, d.Ov)(t)
                              ? I.intl.string(I.t.CkUzLd)
                              : (0, d.vl)(t)
                                ? t.config.features.includes(x.Li.CLOUD_GAMING_ACTIVITY)
                                    ? I.intl.string(I.t["+qoymD"])
                                    : I.intl.string(I.t.E4kW5O)
                                : I.intl.string(I.t.l7E81v);
                      return I.intl.string(I.t["9KoPyB"]);
                  })(e, L);
        return null == f
            ? (0, s.jsx)(i.$, { size: u, variant: (0, o.AJ)(C, "secondary"), disabled: !0, text: N, fullWidth: !0 })
            : (0, s.jsx)(i.$, {
                  size: u,
                  variant: (0, o.AJ)(C, "primary"),
                  onClick: f,
                  text: N,
                  icon: O,
                  fullWidth: !0,
              });
    },
    f = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: u,
                analyticsCtxSourceQuestContent: c,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: d,
                size: E,
                surface: A,
            } = t,
            T = A === o.V3.QUEST_HOME_TILE_V2_FOOTER,
            x = (0, a.r7)(e.config) ? I.intl.string(I.t.bAGFz3) : I.intl.string(I.t.vTgCWx),
            L = (0, r.ix)({
                quest: e,
                questContent: u,
                questContentPosition: C,
                questContentRowIndex: d,
                sourceQuestContent: c,
            }),
            f = (0, l.vj)(e),
            h = g(e, u, c, _(n, e));
        return (0, s.jsx)(i.$, {
            variant: (0, o.AJ)(A, "primary"),
            fullWidth: !0,
            size: E,
            onClick: T ? h : L,
            text: T ? f : x,
        });
    };
var h = n(17928),
    O = n(859703);
let N = function (t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: u,
            size: c,
            surface: C,
        } = t,
        d = e.id,
        { isClaiming: E } = (0, h.cf)(
            [O.A],
            () => ({ isClaiming: O.A.isClaimingReward(d) || O.A.isFetchingRewardCode(d) }),
            [d],
        ),
        A = (0, r.ix)({
            quest: e,
            questContent: n,
            questContentPosition: l,
            questContentRowIndex: u,
            sourceQuestContent: a,
        });
    return (0, s.jsx)(i.$, {
        variant: (0, o.AJ)(C, "primary"),
        fullWidth: !0,
        size: c,
        loading: E,
        onClick: A,
        text: I.intl.string(I.t.cfY4PE),
    });
};
var R = n(64700),
    y = n(862482),
    p = n(775602),
    m = n(178540),
    v = n(507107),
    D = n(18437),
    S = n(971649),
    U = n(901406),
    P = n(862611),
    M = n(263752);
function q(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: i,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: l,
        } = t,
        o = (0, D.Ut)(),
        u = (0, h.bG)([p.A], () => p.A.useReducedMotion),
        d = (0, r.Xf)({ useReducedMotion: u }),
        E = (0, m.O)((t) => t.setErrorHints),
        { startingConsoleQuest: A, startConsoleQuest: T } = (0, c.Wj)({
            questId: e.id,
            beforeRequest: () => {
                d.startAnimation(),
                    o({
                        questId: e.id,
                        questContent: n,
                        questContentCTA: C.Cy.DEFIBRILLATOR,
                        questContentPosition: a,
                        questContentRowIndex: l,
                        sourceQuestContent: i,
                    });
            },
            afterRequest: (t) => {
                d.stopAnimation(), E(e.id, t);
            },
        });
    return (0, s.jsx)(y.$n, {
        "data-migration-pending": !0,
        color: y.XD.PRIMARY,
        onClick: T,
        disabled: A,
        className: M.x,
        children: (0, s.jsxs)("div", { className: M.t, children: [d.render(), I.intl.string(I.t.nPThNb)] }),
    });
}
function w(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: u,
            size: d,
        } = t,
        E = (0, c.RR)({ quest: e }),
        A = (0, S.vU)()?.getId(),
        T = (0, c.Vn)(e),
        x = (0, c.fc)(e),
        [_, g, L] = (0, c.Qo)(e, x);
    return T || _ === v.X0.DESKTOP
        ? (0, s.jsx)(i.$, {
              variant: (0, o.AJ)(n, "secondary"),
              size: d,
              disabled: !0,
              text: I.intl.string(I.t["9KoPyB"]),
              fullWidth: !0,
          })
        : E && n === o.V3.QUEST_HOME_TILE_FOOTER
          ? (0, s.jsx)(i.$, {
                size: d,
                variant: (0, o.AJ)(n, "secondary"),
                onClick: () => {
                    (0, U.se)(
                        { quest: e },
                        {
                            content: a,
                            ctaContent: C.Cy.CONNECT_CONSOLE,
                            position: r,
                            rowIndex: u,
                            impressionId: A,
                            sourceQuestContent: l,
                        },
                    );
                },
                text: I.intl.string(I.t.Cfye4v),
                fullWidth: !0,
            })
          : (0, s.jsx)(q, {
                quest: e,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: u,
            });
}
function Q(t) {
    let { quest: e, analyticsCtxSourceQuestContent: n, size: a, parentContainerRef: l } = t,
        { applications: r } = (0, c.fc)(e);
    return (0, s.jsx)(P.A, {
        quest: e,
        sourceQuestContent: n,
        applications: r ?? [],
        targetElementRef: l,
        children: (t) =>
            (0, s.jsx)(i.$, { variant: "secondary", fullWidth: !0, size: a, text: I.intl.string(I.t["93PTEs"]), ...t }),
    });
}
let j = function (t) {
        let {
                quest: e,
                surface: n,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: u,
                size: c,
            } = t,
            C = R.useRef(null);
        if ((0, d.g5)(e) && n === o.V3.QUEST_HOME_TILE_FOOTER)
            return (0, s.jsx)(w, {
                quest: e,
                surface: n,
                size: c,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: u,
            });
        if ((0, E.ui)(e) && n === o.V3.QUEST_BAR_FOOTER)
            return (0, s.jsx)("div", {
                ref: C,
                children: (0, s.jsx)(Q, {
                    quest: e,
                    analyticsCtxSourceQuestContent: l,
                    size: c,
                    parentContainerRef: C,
                }),
            });
        let A = n === o.V3.QUEST_HOME_TILE_V2_FOOTER ? I.intl.string(I.t.SHZo2x) : I.intl.string(I.t["9KoPyB"]);
        return (0, s.jsx)(i.$, { size: c, variant: (0, o.AJ)(n, "secondary"), disabled: !0, text: A, fullWidth: !0 });
    },
    b = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: i,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: o,
            size: u,
        } = t;
        return (0, d.GL)(e)
            ? (0, s.jsx)(j, {
                  quest: e,
                  surface: i,
                  size: u,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: l,
                  analyticsCtxQuestContentPosition: r,
                  analyticsCtxQuestContentRowIndex: o,
              })
            : (0, s.jsx)(L, {
                  quest: e,
                  taskType: n,
                  size: u,
                  surface: i,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: l,
              });
    },
    V = function (t) {
        let {
                quest: e,
                taskType: n,
                surface: a,
                size: l,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: u,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: d,
            } = t,
            E = (0, c.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" }),
            A = e.userStatus?.claimedAt != null;
        return a === o.V3.QUEST_HOME_TILE_FOOTER && A
            ? (0, s.jsx)(f, {
                  quest: e,
                  taskType: n,
                  size: l,
                  analyticsCtxQuestContent: r,
                  analyticsCtxSourceQuestContent: u,
                  analyticsCtxQuestContentPosition: C,
                  analyticsCtxQuestContentRowIndex: d,
              })
            : (0, s.jsx)(i.$, {
                  variant: (0, o.AJ)(a, "secondary"),
                  disabled: !0,
                  fullWidth: !0,
                  size: l,
                  text: I.intl.format(I.t["6p8BZx"], { expiryDate: E }),
              });
    },
    F = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: a,
            analyticsCtxQuestContent: l,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: u,
            analyticsCtxQuestContentRowIndex: c,
            size: C,
        } = t;
        return ((0, d.t)({ quest: e }) || (0, d.g5)(e)) && a === o.V3.QUEST_BAR_FOOTER && (0, E.ui)(e)
            ? (0, s.jsx)(i.$, {
                  size: C,
                  variant: (0, o.AJ)(a, "secondary"),
                  disabled: !0,
                  text: I.intl.string(I.t["9KoPyB"]),
                  fullWidth: !0,
              })
            : (0, s.jsx)(b, {
                  quest: e,
                  taskType: n,
                  surface: a,
                  analyticsCtxQuestContent: l,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: u,
                  analyticsCtxQuestContentRowIndex: c,
                  size: C,
              });
    };
var H = n(340124);
function k(t) {
    switch (t) {
        case u.n.ACHIEVEMENT_IN_ACTIVITY:
        case u.n.PLAY_ACTIVITY:
        case u.n.WATCH_VIDEO:
            return C.Cy.START_QUEST;
        default:
            return C.Cy.ACCEPT_QUEST;
    }
}
function B(t) {
    var e;
    let {
            quest: n,
            taskType: a,
            size: r = "sm",
            surface: C,
            variant: E,
            preClickCallback: _,
            analyticsCtxQuestContent: g,
            analyticsCtxSourceQuestContent: L,
            analyticsCtxQuestContentPosition: f,
            analyticsCtxQuestContentRowIndex: N,
        } = t,
        R = {
            questContent: g,
            questContentCTA: k(a),
            sourceQuestContent: L,
            questContentPosition: f,
            questContentRowIndex: N,
        },
        y = n.id,
        { isEnrolling: p } = (0, h.cf)([O.A], () => ({ isEnrolling: O.A.isEnrolling(y) }), [y]),
        m = C === o.V3.QUEST_HOME_TILE_V2_FOOTER,
        v = m ? void 0 : (0, T.Oz)(n),
        D = (function (t, e) {
            let { launchInGameActivity: n } = (0, c.zW)(e);
            if ((0, d.K$)(e))
                return () => {
                    (0, T.Fy)(e);
                };
            switch (t) {
                case u.n.ACHIEVEMENT_IN_ACTIVITY:
                case u.n.PLAY_ACTIVITY:
                    return () => {
                        n();
                    };
                default:
                    return null;
            }
        })(a, n),
        S = m
            ? (0, l.C0)(n)
            : (function (t, e) {
                  let { features: n } = e.config;
                  switch (t) {
                      case u.n.WATCH_VIDEO:
                          return (0, A.WM)((0, d.Yh)(e));
                      case u.n.ACHIEVEMENT_IN_ACTIVITY:
                          return I.intl.string(I.t.CkUzLd);
                      case u.n.PLAY_ACTIVITY:
                          if (n.includes(x.Li.CLOUD_GAMING_ACTIVITY)) return I.intl.string(I.t["+qoymD"]);
                          return I.intl.string(I.t.E4kW5O);
                      default:
                          return I.intl.string(I.t.kUQLMJ);
                  }
              })(a, n),
        U =
            ((e = D ?? void 0),
            a === u.n.WATCH_VIDEO
                ? async () => {
                      await (0, T.e0)(n, {
                          questContent: R.questContent,
                          questContentCTA: R.questContentCTA,
                          sourceQuestContent: R.sourceQuestContent,
                          sourceQuestContentCTA: k(a),
                          questContentPosition: R.questContentPosition,
                          questContentRowIndex: R.questContentRowIndex,
                      });
                  }
                : async () => {
                      await (0, H.Oy)(n.id, {
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
        variant: (0, o.AJ)(C, E),
        onClick: () => {
            _?.(), U();
        },
        text: S,
        icon: v,
        fullWidth: !0,
    });
}
let G = function (t) {
    return (0, s.jsx)(B, { ...t, variant: "primary" });
};
var W = n(19238);
let z = function (t) {
        let { buttonVariant: e } = (0, W.A)(!0);
        return (0, s.jsx)(B, { ...t, surface: o.V3.QUEST_BAR_FOOTER, variant: e });
    },
    Y = function (t) {
        let { surface: e, ...n } = t;
        return e === o.V3.QUEST_BAR_FOOTER ? (0, s.jsx)(z, { ...n }) : (0, s.jsx)(G, { ...n, surface: e });
    },
    X = function (t) {
        let {
                quest: e,
                surface: n,
                preClickCallback: a,
                analyticsCtxQuestContent: l,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: u,
                analyticsCtxQuestContentRowIndex: c,
                size: C = "md",
            } = t,
            d = (0, o.Pd)(e);
        if (0 === Object.keys(e.config.taskConfigV2.tasks).length)
            return (0, s.jsx)(i.$, {
                variant: (0, o.AJ)(n, "primary"),
                fullWidth: !0,
                size: "sm",
                text: I.intl.string(I.t.P84bAD),
            });
        let E = Object.values(e.config.taskConfigV2.tasks)[0];
        switch (d) {
            case o.UA.UNENROLLED:
                return (0, s.jsx)(Y, {
                    quest: e,
                    taskType: E.type,
                    size: C,
                    surface: n,
                    preClickCallback: a,
                    analyticsCtxQuestContent: l,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case o.UA.ENROLLED:
                return (0, s.jsx)(b, {
                    quest: e,
                    taskType: E.type,
                    size: C,
                    analyticsCtxQuestContent: l,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                    surface: n,
                });
            case o.UA.INCOMPLETE:
                return (0, s.jsx)(F, {
                    quest: e,
                    taskType: E.type,
                    size: C,
                    analyticsCtxQuestContent: l,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                    surface: n,
                });
            case o.UA.EXPIRED_CLAIMABLE:
            case o.UA.COMPLETED:
                return (0, s.jsx)(N, {
                    quest: e,
                    size: C,
                    surface: n,
                    analyticsCtxQuestContent: l,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case o.UA.CLAIMED:
                return (0, s.jsx)(f, {
                    quest: e,
                    taskType: E.type,
                    size: C,
                    surface: n,
                    analyticsCtxQuestContent: l,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            case o.UA.EXPIRED:
                return (0, s.jsx)(V, {
                    quest: e,
                    taskType: E.type,
                    surface: n,
                    size: C,
                    analyticsCtxQuestContent: l,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: u,
                    analyticsCtxQuestContentRowIndex: c,
                });
            default:
                return (0, s.jsx)(i.$, {
                    variant: (0, o.AJ)(n, "primary"),
                    fullWidth: !0,
                    size: C,
                    text: I.intl.string(I.t.P84bAD),
                });
        }
    };
