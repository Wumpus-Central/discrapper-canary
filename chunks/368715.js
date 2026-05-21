"use strict";
n.d(t, { A: () => H });
var i = n(627968),
    r = n(821609),
    s = n(801365),
    a = n(371912),
    o = n(375708);
let l = function (e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: u,
            analyticsCtxQuestContentRowIndex: c,
            size: d,
        } = e,
        _ = (0, a.ix)({
            quest: t,
            questContent: n,
            questContentPosition: u,
            questContentRowIndex: c,
            sourceQuestContent: l,
        }),
        f = (0, s.r7)(t.config) ? o.intl.string(o.t.bAGFz3) : o.intl.string(o.t.vTgCWx);
    return (0, i.jsx)(r.$, { variant: "primary", fullWidth: !0, size: d, onClick: _, text: f });
};
var u = n(79545),
    c = n(17928),
    d = n(859703);
let _ = function (e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: s,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: u,
            size: _,
        } = e,
        f = t.id,
        { isClaiming: h } = (0, c.cf)(
            [d.A],
            () => ({ isClaiming: d.A.isClaimingReward(f) || d.A.isFetchingRewardCode(f) }),
            [f],
        ),
        p = (0, a.ix)({
            quest: t,
            questContent: n,
            questContentPosition: l,
            questContentRowIndex: u,
            sourceQuestContent: s,
        });
    return (0, i.jsx)(r.$, {
        variant: "primary",
        fullWidth: !0,
        size: _,
        loading: h,
        onClick: p,
        text: o.intl.string(o.t.cfY4PE),
    });
};
var f = n(792620),
    h = n(412703),
    p = n(31587),
    E = n(590202),
    m = n(814793),
    g = n(753386),
    A = n(617986),
    I = n(190107);
let T = function (e) {
    let { quest: t, taskType: n, analyticsCtxQuestContent: s, analyticsCtxSourceQuestContent: a, size: l } = e,
        u = (0, p.fc)(t),
        c = (function (e, t, n, i) {
            let { launchInGameActivity: r } = (0, p.zW)(e);
            return (0, f.K$)(e)
                ? () => {
                      (0, A.Fy)(e);
                  }
                : (0, f.IO)(e)
                  ? () => {
                        (0, A.d5)({ quest: e, questContent: t, sourceQuestContent: n, sourceQuestContentCTA: i });
                    }
                  : (0, m.vA)(e)
                    ? () => {
                          r();
                      }
                    : null;
        })(t, s, a, h.o.VIDEO.has(n) ? E.Cy.WATCH_VIDEO : (0, m.vA)(t) ? E.Cy.START_QUEST : E.Cy.ACCEPT_QUEST),
        d = (0, A.Oz)(t),
        _ = (function (e, t) {
            if ((0, f.K$)(e)) return o.intl.string(o.t["/cXIc6"]);
            if ((0, f.IO)(e)) return (0, g.WM)(t);
            if ((0, m.vA)(e))
                return (0, f.Ov)(e)
                    ? o.intl.string(o.t.CkUzLd)
                    : (0, f.vl)(e)
                      ? e.config.features.includes(I.Li.CLOUD_GAMING_ACTIVITY)
                          ? o.intl.string(o.t["+qoymD"])
                          : o.intl.string(o.t.E4kW5O)
                      : o.intl.string(o.t.l7E81v);
            return o.intl.string(o.t["9KoPyB"]);
        })(t, u);
    return null == c
        ? (0, i.jsx)(r.$, { size: l, variant: "secondary", disabled: !0, text: _, fullWidth: !0 })
        : (0, i.jsx)(r.$, { size: l, variant: "primary", onClick: c, text: _, icon: d, fullWidth: !0 });
};
var S = n(64700),
    N = n(862482),
    y = n(775602),
    C = n(178540),
    v = n(507107),
    O = n(18437),
    R = n(971649),
    b = n(901406),
    D = n(862611),
    L = n(263752);
function w(e) {
    let {
            quest: t,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: s,
            analyticsCtxQuestContentRowIndex: l,
        } = e,
        u = (0, O.Ut)(),
        d = (0, c.bG)([y.A], () => y.A.useReducedMotion),
        _ = (0, a.Xf)({ useReducedMotion: d }),
        f = (0, C.O)((e) => e.setErrorHints),
        { startingConsoleQuest: h, startConsoleQuest: m } = (0, p.Wj)({
            questId: t.id,
            beforeRequest: () => {
                _.startAnimation(),
                    u({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: E.Cy.DEFIBRILLATOR,
                        questContentPosition: s,
                        questContentRowIndex: l,
                        sourceQuestContent: r,
                    });
            },
            afterRequest: (e) => {
                _.stopAnimation(), f(t.id, e);
            },
        });
    return (0, i.jsx)(N.$n, {
        "data-migration-pending": !0,
        color: N.XD.PRIMARY,
        onClick: m,
        disabled: h,
        className: L.x,
        children: (0, i.jsxs)("div", { className: L.t, children: [_.render(), o.intl.string(o.t.nPThNb)] }),
    });
}
function M(e) {
    let {
            quest: t,
            surface: n,
            analyticsCtxQuestContent: s,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: c,
            size: d,
        } = e,
        _ = (0, p.RR)({ quest: t }),
        f = (0, R.vU)()?.getId(),
        h = (0, p.Vn)(t),
        m = (0, p.fc)(t),
        [g, A, I] = (0, p.Qo)(t, m);
    return h || g === v.X0.DESKTOP
        ? (0, i.jsx)(r.$, {
              variant: "secondary",
              size: d,
              disabled: !0,
              text: o.intl.string(o.t["9KoPyB"]),
              fullWidth: !0,
          })
        : _ && n === u.V3.QUEST_HOME_TILE_FOOTER
          ? (0, i.jsx)(r.$, {
                size: d,
                variant: "secondary",
                onClick: () => {
                    (0, b.se)(
                        { quest: t },
                        {
                            content: s,
                            ctaContent: E.Cy.CONNECT_CONSOLE,
                            position: l,
                            rowIndex: c,
                            impressionId: f,
                            sourceQuestContent: a,
                        },
                    );
                },
                text: o.intl.string(o.t.Cfye4v),
                fullWidth: !0,
            })
          : (0, i.jsx)(w, {
                quest: t,
                analyticsCtxQuestContent: s,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: l,
                analyticsCtxQuestContentRowIndex: c,
            });
}
function P(e) {
    let { quest: t, analyticsCtxSourceQuestContent: n, size: s, parentContainerRef: a } = e,
        { applications: l } = (0, p.fc)(t);
    return (0, i.jsx)(D.A, {
        quest: t,
        sourceQuestContent: n,
        applications: l ?? [],
        targetElementRef: a,
        children: (e) =>
            (0, i.jsx)(r.$, { variant: "secondary", fullWidth: !0, size: s, text: o.intl.string(o.t["93PTEs"]), ...e }),
    });
}
let x = function (e) {
        let {
                quest: t,
                surface: n,
                analyticsCtxQuestContent: s,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: l,
                analyticsCtxQuestContentRowIndex: c,
                size: d,
            } = e,
            _ = S.useRef(null);
        if ((0, f.g5)(t) && n === u.V3.QUEST_HOME_TILE_FOOTER)
            return (0, i.jsx)(M, {
                quest: t,
                surface: n,
                size: d,
                analyticsCtxQuestContent: s,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: l,
                analyticsCtxQuestContentRowIndex: c,
            });
        if ((0, m.ui)(t) && n === u.V3.QUEST_BAR_FOOTER)
            return (0, i.jsx)("div", {
                ref: _,
                children: (0, i.jsx)(P, {
                    quest: t,
                    analyticsCtxSourceQuestContent: a,
                    size: d,
                    parentContainerRef: _,
                }),
            });
        let h = o.intl.string(o.t["9KoPyB"]);
        return (0, i.jsx)(r.$, { size: d, variant: "secondary", disabled: !0, text: h, fullWidth: !0 });
    },
    U = function (e) {
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
        return (0, f.t)({ quest: t }) || (0, f.g5)(t)
            ? (0, i.jsx)(x, {
                  quest: t,
                  surface: r,
                  size: u,
                  analyticsCtxQuestContent: s,
                  analyticsCtxSourceQuestContent: a,
                  analyticsCtxQuestContentPosition: o,
                  analyticsCtxQuestContentRowIndex: l,
              })
            : (0, i.jsx)(T, {
                  quest: t,
                  taskType: n,
                  size: u,
                  analyticsCtxQuestContent: s,
                  analyticsCtxSourceQuestContent: a,
              });
    },
    k = function (e) {
        let {
                quest: t,
                surface: n,
                size: s,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: c,
                analyticsCtxQuestContentPosition: d,
                analyticsCtxQuestContentRowIndex: _,
            } = e,
            f = (0, p.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
            h = t.userStatus?.claimedAt != null;
        return n === u.V3.QUEST_HOME_TILE_FOOTER && h
            ? (0, i.jsx)(l, {
                  quest: t,
                  size: s,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: c,
                  analyticsCtxQuestContentPosition: d,
                  analyticsCtxQuestContentRowIndex: _,
              })
            : (0, i.jsx)(r.$, {
                  variant: "secondary",
                  disabled: !0,
                  fullWidth: !0,
                  size: s,
                  text: o.intl.format(o.t["6p8BZx"], { expiryDate: f }),
              });
    },
    G = function (e) {
        let {
            quest: t,
            taskType: n,
            surface: s,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: l,
            analyticsCtxQuestContentPosition: c,
            analyticsCtxQuestContentRowIndex: d,
            size: _,
        } = e;
        return ((0, f.t)({ quest: t }) || (0, f.g5)(t)) && s === u.V3.QUEST_BAR_FOOTER && (0, m.ui)(t)
            ? (0, i.jsx)(r.$, {
                  size: _,
                  variant: "secondary",
                  disabled: !0,
                  text: o.intl.string(o.t["9KoPyB"]),
                  fullWidth: !0,
              })
            : (0, i.jsx)(U, {
                  quest: t,
                  taskType: n,
                  surface: s,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: l,
                  analyticsCtxQuestContentPosition: c,
                  analyticsCtxQuestContentRowIndex: d,
                  size: _,
              });
    };
var F = n(340124);
function V(e) {
    switch (e) {
        case h.n.ACHIEVEMENT_IN_ACTIVITY:
        case h.n.PLAY_ACTIVITY:
        case h.n.WATCH_VIDEO:
            return E.Cy.START_QUEST;
        default:
            return E.Cy.ACCEPT_QUEST;
    }
}
let B = function (e) {
        var t;
        let {
                quest: n,
                taskType: s,
                size: a = "sm",
                preClickCallback: l,
                analyticsCtxQuestContent: u,
                analyticsCtxSourceQuestContent: _,
                analyticsCtxQuestContentPosition: E,
                analyticsCtxQuestContentRowIndex: m,
            } = e,
            g = {
                questContent: u,
                questContentCTA: V(s),
                sourceQuestContent: _,
                questContentPosition: E,
                questContentRowIndex: m,
            },
            T = n.id,
            { isEnrolling: S } = (0, c.cf)([d.A], () => ({ isEnrolling: d.A.isEnrolling(T) }), [T]),
            N = (0, A.Oz)(n),
            y = (function (e, t) {
                let { launchInGameActivity: n } = (0, p.zW)(t);
                if ((0, f.K$)(t))
                    return () => {
                        (0, A.Fy)(t);
                    };
                switch (e) {
                    case h.n.ACHIEVEMENT_IN_ACTIVITY:
                    case h.n.PLAY_ACTIVITY:
                        return () => {
                            n();
                        };
                    default:
                        return null;
                }
            })(s, n),
            C = (function (e, t) {
                let { features: n } = t.config;
                switch (e) {
                    case h.n.WATCH_VIDEO:
                        return o.intl.formatToPlainString(o.t.GNsKiW, { remainTime: (0, f.xm)((0, f.Yh)(t)) });
                    case h.n.ACHIEVEMENT_IN_ACTIVITY:
                        return o.intl.string(o.t.CkUzLd);
                    case h.n.PLAY_ACTIVITY:
                        if (n.includes(I.Li.CLOUD_GAMING_ACTIVITY)) return o.intl.string(o.t["+qoymD"]);
                        return o.intl.string(o.t.E4kW5O);
                    default:
                        return o.intl.string(o.t.kUQLMJ);
                }
            })(s, n),
            v =
                ((t = y ?? void 0),
                s === h.n.WATCH_VIDEO
                    ? async () => {
                          await (0, A.e0)(n, {
                              questContent: g.questContent,
                              questContentCTA: g.questContentCTA,
                              sourceQuestContent: g.sourceQuestContent,
                              sourceQuestContentCTA: V(s),
                              questContentPosition: g.questContentPosition,
                              questContentRowIndex: g.questContentRowIndex,
                          });
                      }
                    : async () => {
                          await (0, F.Oy)(n.id, {
                              questContent: g.questContent,
                              questContentCTA: g.questContentCTA,
                              sourceQuestContent: g.sourceQuestContent,
                              questContentPosition: g.questContentPosition,
                              questContentRowIndex: g.questContentRowIndex,
                          }),
                              t?.();
                      });
        return (0, i.jsx)(r.$, {
            size: a,
            loading: S,
            variant: "primary",
            onClick: () => {
                l?.(), v();
            },
            text: C,
            icon: N,
            fullWidth: !0,
        });
    },
    H = function (e) {
        let {
                quest: t,
                surface: n,
                preClickCallback: s,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: c,
                analyticsCtxQuestContentPosition: d,
                analyticsCtxQuestContentRowIndex: f,
                size: h = "md",
            } = e,
            p = (0, u.Pd)(t);
        if (0 === Object.keys(t.config.taskConfigV2.tasks).length)
            return (0, i.jsx)(r.$, { variant: "primary", fullWidth: !0, size: "sm", text: o.intl.string(o.t.P84bAD) });
        let E = Object.values(t.config.taskConfigV2.tasks)[0];
        switch (p) {
            case u.UA.UNENROLLED:
                return (0, i.jsx)(B, {
                    quest: t,
                    taskType: E.type,
                    size: h,
                    preClickCallback: s,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: c,
                    analyticsCtxQuestContentPosition: d,
                    analyticsCtxQuestContentRowIndex: f,
                });
            case u.UA.ENROLLED:
                return (0, i.jsx)(U, {
                    quest: t,
                    taskType: E.type,
                    size: h,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: c,
                    analyticsCtxQuestContentPosition: d,
                    analyticsCtxQuestContentRowIndex: f,
                    surface: n,
                });
            case u.UA.INCOMPLETE:
                return (0, i.jsx)(G, {
                    quest: t,
                    taskType: E.type,
                    size: h,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: c,
                    analyticsCtxQuestContentPosition: d,
                    analyticsCtxQuestContentRowIndex: f,
                    surface: n,
                });
            case u.UA.EXPIRED_CLAIMABLE:
            case u.UA.COMPLETED:
                return (0, i.jsx)(_, {
                    quest: t,
                    size: h,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: c,
                    analyticsCtxQuestContentPosition: d,
                    analyticsCtxQuestContentRowIndex: f,
                });
            case u.UA.CLAIMED:
                return (0, i.jsx)(l, {
                    quest: t,
                    size: h,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: c,
                    analyticsCtxQuestContentPosition: d,
                    analyticsCtxQuestContentRowIndex: f,
                });
            case u.UA.EXPIRED:
                return (0, i.jsx)(k, {
                    quest: t,
                    surface: n,
                    size: h,
                    analyticsCtxQuestContent: a,
                    analyticsCtxSourceQuestContent: c,
                    analyticsCtxQuestContentPosition: d,
                    analyticsCtxQuestContentRowIndex: f,
                });
            default:
                return (0, i.jsx)(r.$, { variant: "primary", fullWidth: !0, size: h, text: o.intl.string(o.t.P84bAD) });
        }
    };
