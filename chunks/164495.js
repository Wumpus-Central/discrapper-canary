n.d(t, {
    i: () => P,
    y: () => N
});
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(755721),
    l = n(481060),
    c = n(100527),
    u = n(335131),
    d = n(617136),
    p = n(915750),
    m = n(113434),
    f = n(497505),
    g = n(918701),
    x = n(373370),
    h = n(667105),
    b = n(341907),
    j = n(46140),
    _ = n(215023),
    v = n(388032),
    y = n(895518);
function C(e) {
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
function O(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: s } = e;
    return (0, r.jsx)(i.zx, {
        className: y.cta,
        color: i.zx.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, b.openVideoQuestModal)({
                quest: t,
                sourceQuestContent: n
            });
        },
        size: i.zx.Sizes.SMALL,
        children: (0, g.F9)(s)
    });
}
let E = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            s = (0, p.aM)();
        return (0, r.jsx)(i.zx, {
            className: y.cta,
            size: i.zx.Sizes.SMALL,
            onClick: () =>
                (0, g.nc)(t, {
                    content: f.jn.QUEST_BAR_V2,
                    ctaContent: d.jZ.OPEN_GAME_LINK,
                    impressionId: s,
                    sourceQuestContent: n
                }),
            children: (0, g.pO)(t) ? v.intl.string(v.t.hvVgAQ) : v.intl.string(v.t.lwQdjI)
        });
    },
    S = (e) => {
        var t;
        let { quest: n, sourceQuestContent: s } = e,
            o = null == (t = (0, p.WD)()) ? void 0 : t.getId();
        return (0, r.jsx)(i.zx, {
            fullWidth: !0,
            className: y.cta,
            onClick: () =>
                (0, g.gI)(
                    { quest: n },
                    {
                        content: f.jn.QUEST_BAR_V2,
                        ctaContent: d.jZ.CONNECT_CONSOLE,
                        impressionId: o,
                        sourceQuestContent: s
                    }
                ),
            size: i.zx.Sizes.SMALL,
            children: v.intl.string(v.t.csptqa)
        });
    },
    w = (e) => {
        let { quest: t } = e,
            n = (0, g.Vl)(t),
            s = t.config.features.includes(j.S7.START_QUEST_CTA),
            o = (0, x.CR)({ quest: t }),
            { launchInGameActivity: a } = (0, m.zB)(t);
        return n && s
            ? (0, r.jsx)(i.zx, {
                  className: y.cta,
                  color: i.zx.Colors.BRAND,
                  fullWidth: !0,
                  onClick: a,
                  size: i.zx.Sizes.SMALL,
                  children: o
              })
            : null;
    },
    P = (e) => {
        var t,
            n,
            o,
            { quest: d, useReducedMotion: p, isExpanded: m, className: x, ctaLabel: b, onClick: j, questContent: O = f.jn.QUEST_BAR_V2, sourceQuestContent: E } = e,
            S = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            s = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]));
                }
                return s;
            })(e, ['quest', 'useReducedMotion', 'isExpanded', 'className', 'ctaLabel', 'onClick', 'questContent', 'sourceQuestContent']);
        let w = (0, h.hf)({
                quest: d,
                questContent: O,
                sourceQuestContent: E
            }),
            P = s.useCallback(
                (e) => {
                    var t;
                    (null == j || j(e),
                        (0, g.xN)(d.config) && (null == (t = d.userStatus) ? void 0 : t.claimedAt) != null
                            ? (0, u.mK)({
                                  openInLayer: !1,
                                  tab: _.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: c.Z.QUEST_HOME_PAGE
                              })
                            : w());
                },
                [j, d.config, null == (o = d.userStatus) ? void 0 : o.claimedAt, w]
            );
        return (0, r.jsx)(
            l.gtL,
            ((t = C(
                {
                    fullWidth: !0,
                    size: i.zx.Sizes.SMALL,
                    onClick: P,
                    pauseAnimation: p || !m,
                    className: a()(y.cta, x),
                    buttonShineClassName: y.shine
                },
                S
            )),
            (n = n = { children: null != b ? b : v.intl.string(v.t.cfY4PD) }),
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
    T = (e) => {
        var t;
        let { quest: n, sourceQuestContent: s, useReducedMotion: o, isExpanded: a, awaitingConsoleConnections: i, hasMadeProgress: l, isProgressing: c, activeScreen: u, taskDetails: d } = e,
            p = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
            m = (0, g.q8)(n),
            x = (0, g.Vl)(n);
        if (p)
            return (0, r.jsx)(P, {
                quest: n,
                sourceQuestContent: s,
                useReducedMotion: o,
                isExpanded: a
            });
        if (m)
            return (0, r.jsx)(O, {
                quest: n,
                sourceQuestContent: s,
                taskDetails: d
            });
        if (x) return (0, r.jsx)(w, { quest: n });
        if (u === f.LI.CONSOLE && i)
            return (0, r.jsx)(S, {
                quest: n,
                sourceQuestContent: s
            });
        if (u !== f.LI.SELECT && !l && !c)
            return (0, r.jsx)(E, {
                quest: n,
                sourceQuestContent: s
            });
        return null;
    };
function N(e) {
    return (0, r.jsxs)('div', {
        className: y.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(i.zx, {
                    className: y.backButton,
                    innerClassName: y.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, r.jsx)(l.V7D, { className: y.backIcon })
                }),
            (0, r.jsx)(T, C({}, e))
        ]
    });
}
