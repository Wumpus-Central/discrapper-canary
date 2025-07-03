n.d(t, {
    i: () => w,
    y: () => T
});
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(481060),
    l = n(100527),
    c = n(335131),
    u = n(617136),
    d = n(915750),
    p = n(113434),
    m = n(497505),
    f = n(918701),
    g = n(373370),
    x = n(667105),
    h = n(341907),
    b = n(46140),
    j = n(215023),
    _ = n(388032),
    v = n(895518);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function C(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: o } = e;
    return (0, r.jsx)(i.zxk, {
        className: v.cta,
        color: i.zxk.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, h.openVideoQuestModal)({
                quest: t,
                sourceQuestContent: n
            });
        },
        size: i.zxk.Sizes.SMALL,
        children: (0, f.F9)(o)
    });
}
let O = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            o = (0, d.aM)();
        return (0, r.jsx)(i.zxk, {
            className: v.cta,
            size: i.zxk.Sizes.SMALL,
            onClick: () =>
                (0, f.nc)(t, {
                    content: m.jn.QUEST_BAR_V2,
                    ctaContent: u.jZ.OPEN_GAME_LINK,
                    impressionId: o,
                    sourceQuestContent: n
                }),
            children: (0, f.pO)(t) ? _.intl.string(_.t.hvVgAQ) : _.intl.string(_.t.lwQdjI)
        });
    },
    E = (e) => {
        var t;
        let { quest: n, sourceQuestContent: o } = e,
            s = null == (t = (0, d.WD)()) ? void 0 : t.getId();
        return (0, r.jsx)(i.zxk, {
            fullWidth: !0,
            className: v.cta,
            onClick: () =>
                (0, f.gI)(
                    { quest: n },
                    {
                        content: m.jn.QUEST_BAR_V2,
                        ctaContent: u.jZ.CONNECT_CONSOLE,
                        impressionId: s,
                        sourceQuestContent: o
                    }
                ),
            size: i.zxk.Sizes.SMALL,
            children: _.intl.string(_.t.csptqa)
        });
    },
    S = (e) => {
        let { quest: t } = e,
            n = (0, f.Vl)(t),
            o = t.config.features.includes(b.S7.START_QUEST_CTA),
            s = (0, g.CR)({ quest: t }),
            { launchInGameActivity: a } = (0, p.zB)(t);
        return n && o
            ? (0, r.jsx)(i.zxk, {
                  className: v.cta,
                  color: i.zxk.Colors.BRAND,
                  fullWidth: !0,
                  onClick: a,
                  size: i.zxk.Sizes.SMALL,
                  children: s
              })
            : null;
    },
    w = (e) => {
        var t,
            n,
            s,
            { quest: u, useReducedMotion: d, isExpanded: p, className: h, ctaLabel: _, onClick: C, questContent: O = m.jn.QUEST_BAR_V2, sourceQuestContent: E } = e,
            S = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) ((n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) ((n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                }
                return o;
            })(e, ['quest', 'useReducedMotion', 'isExpanded', 'className', 'ctaLabel', 'onClick', 'questContent', 'sourceQuestContent']);
        let w = (0, x.hf)({
                quest: u,
                questContent: O,
                sourceQuestContent: E
            }),
            P = (0, g.up)(b.dr.QUESTS_BAR),
            T = o.useCallback(
                (e) => {
                    var t;
                    (null == C || C(e),
                        (0, f.xN)(u.config) && (null == (t = u.userStatus) ? void 0 : t.claimedAt) != null
                            ? (0, c.mK)({
                                  openInLayer: !1,
                                  tab: j.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: l.Z.QUEST_HOME_PAGE
                              })
                            : w());
                },
                [C, u.config, null == (s = u.userStatus) ? void 0 : s.claimedAt, w]
            );
        return (0, r.jsx)(
            i.gtL,
            ((t = y(
                {
                    fullWidth: !0,
                    size: i.zxk.Sizes.SMALL,
                    onClick: T,
                    pauseAnimation: d || !p,
                    className: a()(v.cta, h),
                    buttonShineClassName: v.shine
                },
                S
            )),
            (n = n = { children: null != _ ? _ : P }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        );
    },
    P = (e) => {
        var t;
        let { quest: n, sourceQuestContent: o, useReducedMotion: s, isExpanded: a, awaitingConsoleConnections: i, hasMadeProgress: l, isProgressing: c, activeScreen: u, taskDetails: d } = e,
            p = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
            g = (0, f.q8)(n),
            x = (0, f.Vl)(n);
        if (p)
            return (0, r.jsx)(w, {
                quest: n,
                sourceQuestContent: o,
                useReducedMotion: s,
                isExpanded: a
            });
        if (g)
            return (0, r.jsx)(C, {
                quest: n,
                sourceQuestContent: o,
                taskDetails: d
            });
        if (x) return (0, r.jsx)(S, { quest: n });
        if (u === m.LI.CONSOLE && i)
            return (0, r.jsx)(E, {
                quest: n,
                sourceQuestContent: o
            });
        if (u !== m.LI.SELECT && !l && !c)
            return (0, r.jsx)(O, {
                quest: n,
                sourceQuestContent: o
            });
        return null;
    };
function T(e) {
    return (0, r.jsxs)('div', {
        className: v.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(i.zxk, {
                    className: v.backButton,
                    innerClassName: v.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, r.jsx)(i.V7D, { className: v.backIcon })
                }),
            (0, r.jsx)(P, y({}, e))
        ]
    });
}
