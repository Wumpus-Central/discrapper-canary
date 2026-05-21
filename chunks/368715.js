n.d(e, { A: () => H });
var s = n(627968),
    i = n(821609),
    a = n(801365),
    o = n(371912),
    l = n(375708);
let r = function (t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: u,
            analyticsCtxQuestContentRowIndex: c,
            size: C,
        } = t,
        d = (0, o.ix)({
            quest: e,
            questContent: n,
            questContentPosition: u,
            questContentRowIndex: c,
            sourceQuestContent: r,
        }),
        E = (0, a.r7)(e.config) ? l.intl.string(l.t.bAGFz3) : l.intl.string(l.t.vTgCWx);
    return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: C, onClick: d, text: E });
};
var u = n(79545),
    c = n(17928),
    C = n(859703);
let d = function (t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: u,
            size: d,
        } = t,
        E = e.id,
        { isClaiming: A } = (0, c.cf)(
            [C.A],
            () => ({ isClaiming: C.A.isClaimingReward(E) || C.A.isFetchingRewardCode(E) }),
            [E],
        ),
        T = (0, o.ix)({
            quest: e,
            questContent: n,
            questContentPosition: r,
            questContentRowIndex: u,
            sourceQuestContent: a,
        });
    return (0, s.jsx)(i.$, {
        variant: "primary",
        fullWidth: !0,
        size: d,
        loading: A,
        onClick: T,
        text: l.intl.string(l.t.cfY4PE),
    });
};
var E = n(792620),
    A = n(412703),
    T = n(31587),
    x = n(590202),
    I = n(814793),
    _ = n(753386),
    h = n(617986),
    g = n(190107);
let N = function (t) {
    let { quest: e, taskType: n, analyticsCtxQuestContent: a, analyticsCtxSourceQuestContent: o, size: r } = t,
        u = (0, T.fc)(e),
        c = (function (t, e, n, s) {
            let { launchInGameActivity: i } = (0, T.zW)(t);
            return (0, E.K$)(t)
                ? () => {
                      (0, h.Fy)(t);
                  }
                : (0, E.IO)(t)
                  ? () => {
                        (0, h.d5)({ quest: t, questContent: e, sourceQuestContent: n, sourceQuestContentCTA: s });
                    }
                  : (0, I.vA)(t)
                    ? () => {
                          i();
                      }
                    : null;
        })(e, a, o, A.o.VIDEO.has(n) ? x.Cy.WATCH_VIDEO : (0, I.vA)(e) ? x.Cy.START_QUEST : x.Cy.ACCEPT_QUEST),
        C = (0, h.Oz)(e),
        d = (function (t, e) {
            if ((0, E.K$)(t)) return l.intl.string(l.t["/cXIc6"]);
            if ((0, E.IO)(t)) return (0, _.WM)(e);
            if ((0, I.vA)(t))
                return (0, E.Ov)(t)
                    ? l.intl.string(l.t.CkUzLd)
                    : (0, E.vl)(t)
                      ? t.config.features.includes(g.Li.CLOUD_GAMING_ACTIVITY)
                          ? l.intl.string(l.t["+qoymD"])
                          : l.intl.string(l.t.E4kW5O)
                      : l.intl.string(l.t.l7E81v);
            return l.intl.string(l.t["9KoPyB"]);
        })(e, u);
    return null == c
        ? (0, s.jsx)(i.$, { size: r, variant: "secondary", disabled: !0, text: d, fullWidth: !0 })
        : (0, s.jsx)(i.$, { size: r, variant: "primary", onClick: c, text: d, icon: C, fullWidth: !0 });
};
var L = n(64700),
    f = n(862482),
    y = n(775602),
    R = n(178540),
    O = n(507107),
    m = n(18437),
    p = n(971649),
    v = n(901406),
    S = n(862611),
    D = n(263752);
function P(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: i,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: r,
        } = t,
        u = (0, m.Ut)(),
        C = (0, c.bG)([y.A], () => y.A.useReducedMotion),
        d = (0, o.Xf)({ useReducedMotion: C }),
        E = (0, R.O)((t) => t.setErrorHints),
        { startingConsoleQuest: A, startConsoleQuest: I } = (0, T.Wj)({
            questId: e.id,
            beforeRequest: () => {
                d.startAnimation(),
                    u({
                        questId: e.id,
                        questContent: n,
                        questContentCTA: x.Cy.DEFIBRILLATOR,
                        questContentPosition: a,
                        questContentRowIndex: r,
                        sourceQuestContent: i,
                    });
            },
            afterRequest: (t) => {
                d.stopAnimation(), E(e.id, t);
            },
        });
    return (0, s.jsx)(f.$n, {
        "data-migration-pending": !0,
        color: f.XD.PRIMARY,
        onClick: I,
        disabled: A,
        className: D.x,
        children: (0, s.jsxs)("div", { className: D.t, children: [d.render(), l.intl.string(l.t.nPThNb)] }),
    });
}
function q(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: c,
            size: C,
        } = t,
        d = (0, T.RR)({ quest: e }),
        E = (0, p.vU)()?.getId(),
        A = (0, T.Vn)(e),
        I = (0, T.fc)(e),
        [_, h, g] = (0, T.Qo)(e, I);
    return A || _ === O.X0.DESKTOP
        ? (0, s.jsx)(i.$, {
              variant: "secondary",
              size: C,
              disabled: !0,
              text: l.intl.string(l.t["9KoPyB"]),
              fullWidth: !0,
          })
        : d && n === u.V3.QUEST_HOME_TILE_FOOTER
          ? (0, s.jsx)(i.$, {
                size: C,
                variant: "secondary",
                onClick: () => {
                    (0, v.se)(
                        { quest: e },
                        {
                            content: a,
                            ctaContent: x.Cy.CONNECT_CONSOLE,
                            position: r,
                            rowIndex: c,
                            impressionId: E,
                            sourceQuestContent: o,
                        },
                    );
                },
                text: l.intl.string(l.t.Cfye4v),
                fullWidth: !0,
            })
          : (0, s.jsx)(P, {
                quest: e,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: o,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: c,
            });
}
function w(t) {
    let { quest: e, analyticsCtxSourceQuestContent: n, size: a, parentContainerRef: o } = t,
        { applications: r } = (0, T.fc)(e);
    return (0, s.jsx)(S.A, {
        quest: e,
        sourceQuestContent: n,
        applications: r ?? [],
        targetElementRef: o,
        children: (t) =>
            (0, s.jsx)(i.$, { variant: "secondary", fullWidth: !0, size: a, text: l.intl.string(l.t["93PTEs"]), ...t }),
    });
}
let U = function (t) {
        let {
                quest: e,
                surface: n,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: o,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: c,
                size: C,
            } = t,
            d = L.useRef(null);
        if ((0, E.g5)(e) && n === u.V3.QUEST_HOME_TILE_FOOTER)
            return (0, s.jsx)(q, {
                quest: e,
                surface: n,
                size: C,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: o,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: c,
            });
        if ((0, I.ui)(e) && n === u.V3.QUEST_BAR_FOOTER)
            return (0, s.jsx)("div", {
                ref: d,
                children: (0, s.jsx)(w, {
                    quest: e,
                    analyticsCtxSourceQuestContent: o,
                    size: C,
                    parentContainerRef: d,
                }),
            });
        let A = l.intl.string(l.t["9KoPyB"]);
        return (0, s.jsx)(i.$, { size: C, variant: "secondary", disabled: !0, text: A, fullWidth: !0 });
    },
    M = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: i,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: r,
            size: u,
        } = t;
        return (0, E.t)({ quest: e }) || (0, E.g5)(e)
            ? (0, s.jsx)(U, {
                  quest: e,
                  surface: i,
                  size: u,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: o,
                  analyticsCtxQuestContentPosition: l,
                  analyticsCtxQuestContentRowIndex: r,
              })
            : (0, s.jsx)(N, {
                  quest: e,
                  taskType: n,
                  size: u,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: o,
              });
    },
    Q = function (t) {
        let {
                quest: e,
                surface: n,
                size: a,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: c,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: d,
            } = t,
            E = (0, T.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" }),
            A = e.userStatus?.claimedAt != null;
        return n === u.V3.QUEST_HOME_TILE_FOOTER && A
            ? (0, s.jsx)(r, {
                  quest: e,
                  size: a,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: c,
                  analyticsCtxQuestContentPosition: C,
                  analyticsCtxQuestContentRowIndex: d,
              })
            : (0, s.jsx)(i.$, {
                  variant: "secondary",
                  disabled: !0,
                  fullWidth: !0,
                  size: a,
                  text: l.intl.format(l.t["6p8BZx"], { expiryDate: E }),
              });
    },
    j = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: a,
            analyticsCtxQuestContent: o,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: c,
            analyticsCtxQuestContentRowIndex: C,
            size: d,
        } = t;
        return ((0, E.t)({ quest: e }) || (0, E.g5)(e)) && a === u.V3.QUEST_BAR_FOOTER && (0, I.ui)(e)
            ? (0, s.jsx)(i.$, {
                  size: d,
                  variant: "secondary",
                  disabled: !0,
                  text: l.intl.string(l.t["9KoPyB"]),
                  fullWidth: !0,
              })
            : (0, s.jsx)(M, {
                  quest: e,
                  taskType: n,
                  surface: a,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: c,
                  analyticsCtxQuestContentRowIndex: C,
                  size: d,
              });
    };
var b = n(340124);
function F(t) {
    switch (t) {
        case A.n.ACHIEVEMENT_IN_ACTIVITY:
        case A.n.PLAY_ACTIVITY:
        case A.n.WATCH_VIDEO:
            return x.Cy.START_QUEST;
        default:
            return x.Cy.ACCEPT_QUEST;
    }
}
let V = function (t) {
        var e;
        let {
                quest: n,
                taskType: a,
                size: o = "sm",
                preClickCallback: r,
                analyticsCtxQuestContent: u,
                analyticsCtxSourceQuestContent: d,
                analyticsCtxQuestContentPosition: x,
                analyticsCtxQuestContentRowIndex: I,
            } = t,
            _ = {
                questContent: u,
                questContentCTA: F(a),
                sourceQuestContent: d,
                questContentPosition: x,
                questContentRowIndex: I,
            },
            N = n.id,
            { isEnrolling: L } = (0, c.cf)([C.A], () => ({ isEnrolling: C.A.isEnrolling(N) }), [N]),
            f = (0, h.Oz)(n),
            y = (function (t, e) {
                let { launchInGameActivity: n } = (0, T.zW)(e);
                if ((0, E.K$)(e))
                    return () => {
                        (0, h.Fy)(e);
                    };
                switch (t) {
                    case A.n.ACHIEVEMENT_IN_ACTIVITY:
                    case A.n.PLAY_ACTIVITY:
                        return () => {
                            n();
                        };
                    default:
                        return null;
                }
            })(a, n),
            R = (function (t, e) {
                let { features: n } = e.config;
                switch (t) {
                    case A.n.WATCH_VIDEO:
                        return l.intl.formatToPlainString(l.t.GNsKiW, { remainTime: (0, E.xm)((0, E.Yh)(e)) });
                    case A.n.ACHIEVEMENT_IN_ACTIVITY:
                        return l.intl.string(l.t.CkUzLd);
                    case A.n.PLAY_ACTIVITY:
                        if (n.includes(g.Li.CLOUD_GAMING_ACTIVITY)) return l.intl.string(l.t["+qoymD"]);
                        return l.intl.string(l.t.E4kW5O);
                    default:
                        return l.intl.string(l.t.kUQLMJ);
                }
            })(a, n),
            O =
                ((e = y ?? void 0),
                a === A.n.WATCH_VIDEO
                    ? async () => {
                          await (0, h.e0)(n, {
                              questContent: _.questContent,
                              questContentCTA: _.questContentCTA,
                              sourceQuestContent: _.sourceQuestContent,
                              sourceQuestContentCTA: F(a),
                              questContentPosition: _.questContentPosition,
                              questContentRowIndex: _.questContentRowIndex,
                          });
                      }
                    : async () => {
                          await (0, b.Oy)(n.id, {
                              questContent: _.questContent,
                              questContentCTA: _.questContentCTA,
                              sourceQuestContent: _.sourceQuestContent,
                              questContentPosition: _.questContentPosition,
                              questContentRowIndex: _.questContentRowIndex,
                          }),
                              e?.();
                      });
        return (0, s.jsx)(i.$, {
            size: o,
            loading: L,
            variant: "primary",
            onClick: () => {
                r?.(), O();
            },
            text: R,
            icon: f,
            fullWidth: !0,
        });
    },
    H = function (t) {
        let {
                quest: e,
                surface: n,
                preClickCallback: a,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: c,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: E,
                size: A = "md",
            } = t,
            T = (0, u.Pd)(e);
        if (0 === Object.keys(e.config.taskConfigV2.tasks).length)
            return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: "sm", text: l.intl.string(l.t.P84bAD) });
        let x = Object.values(e.config.taskConfigV2.tasks)[0];
        switch (T) {
            case u.UA.UNENROLLED:
                return (0, s.jsx)(V, {
                    quest: e,
                    taskType: x.type,
                    size: A,
                    preClickCallback: a,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: c,
                    analyticsCtxQuestContentPosition: C,
                    analyticsCtxQuestContentRowIndex: E,
                });
            case u.UA.ENROLLED:
                return (0, s.jsx)(M, {
                    quest: e,
                    taskType: x.type,
                    size: A,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: c,
                    analyticsCtxQuestContentPosition: C,
                    analyticsCtxQuestContentRowIndex: E,
                    surface: n,
                });
            case u.UA.INCOMPLETE:
                return (0, s.jsx)(j, {
                    quest: e,
                    taskType: x.type,
                    size: A,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: c,
                    analyticsCtxQuestContentPosition: C,
                    analyticsCtxQuestContentRowIndex: E,
                    surface: n,
                });
            case u.UA.EXPIRED_CLAIMABLE:
            case u.UA.COMPLETED:
                return (0, s.jsx)(d, {
                    quest: e,
                    size: A,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: c,
                    analyticsCtxQuestContentPosition: C,
                    analyticsCtxQuestContentRowIndex: E,
                });
            case u.UA.CLAIMED:
                return (0, s.jsx)(r, {
                    quest: e,
                    size: A,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: c,
                    analyticsCtxQuestContentPosition: C,
                    analyticsCtxQuestContentRowIndex: E,
                });
            case u.UA.EXPIRED:
                return (0, s.jsx)(Q, {
                    quest: e,
                    surface: n,
                    size: A,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: c,
                    analyticsCtxQuestContentPosition: C,
                    analyticsCtxQuestContentRowIndex: E,
                });
            default:
                return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: A, text: l.intl.string(l.t.P84bAD) });
        }
    };
