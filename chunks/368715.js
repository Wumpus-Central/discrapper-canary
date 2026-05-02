n.d(e, { A: () => Q });
var s = n(627968),
    i = n(821609),
    a = n(801365),
    l = n(371912),
    o = n(375708);
let r = function (t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: u,
            analyticsCtxQuestContentRowIndex: c,
            size: C,
        } = t,
        d = (0, l.ix)({
            quest: e,
            questContent: n,
            questContentPosition: u,
            questContentRowIndex: c,
            sourceQuestContent: r,
        }),
        E = (0, a.r7)(e.config) ? o.intl.string(o.t.bAGFz3) : o.intl.string(o.t.vTgCWx);
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
        T = (0, l.ix)({
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
        text: o.intl.string(o.t.cfY4PE),
    });
};
var E = n(792620),
    A = n(412703),
    T = n(31587),
    x = n(590202),
    I = n(814793),
    g = n(753386),
    h = n(617986),
    f = n(190107);
let _ = function (t) {
    let { quest: e, taskType: n, analyticsCtxQuestContent: a, analyticsCtxSourceQuestContent: l, size: r } = t,
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
        })(e, a, l, A.o.VIDEO.has(n) ? x.Cy.WATCH_VIDEO : (0, I.vA)(e) ? x.Cy.START_QUEST : x.Cy.ACCEPT_QUEST),
        C = (0, h.Oz)(e),
        d = (function (t, e) {
            if ((0, E.K$)(t)) return o.intl.string(o.t.IsH2Sp);
            if ((0, E.IO)(t)) return (0, g.WM)(e);
            if ((0, I.vA)(t))
                return (0, E.Ov)(t)
                    ? o.intl.string(o.t.CkUzLd)
                    : (0, E.vl)(t)
                      ? t.config.features.includes(f.Li.CLOUD_GAMING_ACTIVITY)
                          ? o.intl.string(o.t["+qoymD"])
                          : o.intl.string(o.t.E4kW5O)
                      : o.intl.string(o.t.l7E81v);
            return o.intl.string(o.t["9KoPyB"]);
        })(e, u);
    return null == c
        ? (0, s.jsx)(i.$, { size: r, variant: "secondary", disabled: !0, text: d, fullWidth: !0 })
        : (0, s.jsx)(i.$, { size: r, variant: "primary", onClick: c, text: d, icon: C, fullWidth: !0 });
};
var N = n(862482),
    L = n(775602),
    m = n(178540),
    p = n(507107),
    O = n(18437),
    y = n(971649),
    v = n(901406),
    R = n(263752);
function D(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: i,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: r,
        } = t,
        u = (0, O.Ut)(),
        C = (0, c.bG)([L.A], () => L.A.useReducedMotion),
        d = (0, l.Xf)({ useReducedMotion: C }),
        E = (0, m.O)((t) => t.setErrorHints),
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
    return (0, s.jsx)(N.$n, {
        "data-migration-pending": !0,
        color: N.XD.PRIMARY,
        onClick: I,
        disabled: A,
        className: R.x,
        children: (0, s.jsxs)("div", { className: R.t, children: [d.render(), o.intl.string(o.t.nPThNb)] }),
    });
}
function q(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: c,
            size: C,
        } = t,
        d = (0, T.RR)({ quest: e }),
        E = (0, y.vU)()?.getId(),
        A = (0, T.Vn)(e),
        I = (0, T.fc)(e),
        [g, h, f] = (0, T.Qo)(e, I);
    return A || g === p.X0.DESKTOP
        ? (0, s.jsx)(i.$, {
              variant: "secondary",
              size: C,
              disabled: !0,
              text: o.intl.string(o.t["9KoPyB"]),
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
                            sourceQuestContent: l,
                        },
                    );
                },
                text: o.intl.string(o.t.Cfye4v),
                fullWidth: !0,
            })
          : (0, s.jsx)(D, {
                quest: e,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: c,
            });
}
let M = function (t) {
        let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: c,
            size: C,
        } = t;
        if ((0, E.g5)(e) && n === u.V3.QUEST_HOME_TILE_FOOTER)
            return (0, s.jsx)(q, {
                quest: e,
                surface: n,
                size: C,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: l,
                analyticsCtxQuestContentPosition: r,
                analyticsCtxQuestContentRowIndex: c,
            });
        let d = o.intl.string(o.t["9KoPyB"]);
        return (0, s.jsx)(i.$, { size: C, variant: "secondary", disabled: !0, text: d, fullWidth: !0 });
    },
    P = function (t) {
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
        return (0, E.t)({ quest: e }) || (0, E.g5)(e)
            ? (0, s.jsx)(M, {
                  quest: e,
                  surface: i,
                  size: u,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: l,
                  analyticsCtxQuestContentPosition: o,
                  analyticsCtxQuestContentRowIndex: r,
              })
            : (0, s.jsx)(_, {
                  quest: e,
                  taskType: n,
                  size: u,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: l,
              });
    },
    U = function (t) {
        let { quest: e, size: n } = t,
            a = (0, T.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" });
        return (0, s.jsx)(i.$, {
            variant: "secondary",
            disabled: !0,
            fullWidth: !0,
            size: n,
            text: o.intl.format(o.t["6p8BZx"], { expiryDate: a }),
        });
    };
var j = n(340124);
function w(t) {
    switch (t) {
        case A.n.ACHIEVEMENT_IN_ACTIVITY:
        case A.n.PLAY_ACTIVITY:
        case A.n.WATCH_VIDEO:
            return x.Cy.START_QUEST;
        default:
            return x.Cy.ACCEPT_QUEST;
    }
}
let S = function (t) {
        var e;
        let {
                quest: n,
                taskType: a,
                size: l = "sm",
                preClickCallback: r,
                analyticsCtxQuestContent: u,
                analyticsCtxSourceQuestContent: d,
                analyticsCtxQuestContentPosition: x,
                analyticsCtxQuestContentRowIndex: I,
            } = t,
            g = {
                questContent: u,
                questContentCTA: w(a),
                sourceQuestContent: d,
                questContentPosition: x,
                questContentRowIndex: I,
            },
            _ = n.id,
            { isEnrolling: N } = (0, c.cf)([C.A], () => ({ isEnrolling: C.A.isEnrolling(_) }), [_]),
            L = (0, h.Oz)(n),
            m = (function (t, e) {
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
            p = (function (t, e) {
                let { features: n } = e.config;
                switch (t) {
                    case A.n.WATCH_VIDEO:
                        return o.intl.formatToPlainString(o.t.GNsKiW, { remainTime: (0, E.xm)((0, E.Yh)(e)) });
                    case A.n.ACHIEVEMENT_IN_ACTIVITY:
                        return o.intl.string(o.t.CkUzLd);
                    case A.n.PLAY_ACTIVITY:
                        if (n.includes(f.Li.CLOUD_GAMING_ACTIVITY)) return o.intl.string(o.t["+qoymD"]);
                        return o.intl.string(o.t.E4kW5O);
                    default:
                        return o.intl.string(o.t.kUQLMJ);
                }
            })(a, n),
            O =
                ((e = m ?? void 0),
                a === A.n.WATCH_VIDEO
                    ? async () => {
                          await (0, h.e0)(n, {
                              questContent: g.questContent,
                              questContentCTA: g.questContentCTA,
                              sourceQuestContent: g.sourceQuestContent,
                              sourceQuestContentCTA: w(a),
                              questContentPosition: g.questContentPosition,
                              questContentRowIndex: g.questContentRowIndex,
                          });
                      }
                    : async () => {
                          await (0, j.Oy)(n.id, {
                              questContent: g.questContent,
                              questContentCTA: g.questContentCTA,
                              sourceQuestContent: g.sourceQuestContent,
                              questContentPosition: g.questContentPosition,
                              questContentRowIndex: g.questContentRowIndex,
                          }),
                              e?.();
                      });
        return (0, s.jsx)(i.$, {
            size: l,
            loading: N,
            variant: "primary",
            onClick: () => {
                r?.(), O();
            },
            text: p,
            icon: L,
            fullWidth: !0,
        });
    },
    Q = function (t) {
        let {
                quest: e,
                surface: n,
                preClickCallback: a,
                analyticsCtxQuestContent: l,
                analyticsCtxSourceQuestContent: c,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: E,
                size: A = "md",
            } = t,
            T = (0, u.Pd)(e);
        if (0 === Object.keys(e.config.taskConfigV2.tasks).length)
            return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: "sm", text: o.intl.string(o.t.P84bAD) });
        let x = Object.values(e.config.taskConfigV2.tasks)[0];
        switch (T) {
            case u.UA.UNENROLLED:
                return (0, s.jsx)(S, {
                    quest: e,
                    taskType: x.type,
                    size: A,
                    preClickCallback: a,
                    analyticsCtxQuestContent: l,
                    analyticsCtxSourceQuestContent: c,
                    analyticsCtxQuestContentPosition: C,
                    analyticsCtxQuestContentRowIndex: E,
                });
            case u.UA.ENROLLED:
            case u.UA.INCOMPLETE:
                return (0, s.jsx)(P, {
                    quest: e,
                    taskType: x.type,
                    size: A,
                    analyticsCtxQuestContent: l,
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
                    analyticsCtxQuestContent: l,
                    analyticsCtxSourceQuestContent: c,
                    analyticsCtxQuestContentPosition: C,
                    analyticsCtxQuestContentRowIndex: E,
                });
            case u.UA.CLAIMED:
                return (0, s.jsx)(r, {
                    quest: e,
                    size: A,
                    analyticsCtxQuestContent: l,
                    analyticsCtxSourceQuestContent: c,
                    analyticsCtxQuestContentPosition: C,
                    analyticsCtxQuestContentRowIndex: E,
                });
            case u.UA.EXPIRED:
                return (0, s.jsx)(U, { quest: e, size: A });
            default:
                return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: A, text: o.intl.string(o.t.P84bAD) });
        }
    };
