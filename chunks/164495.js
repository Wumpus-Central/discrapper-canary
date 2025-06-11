n.d(t, {
    i0: () => E,
    yD: () => T
});
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(481060),
    l = n(100527),
    c = n(335131),
    d = n(617136),
    u = n(915750),
    p = n(113434),
    m = n(497505),
    f = n(918701),
    g = n(373370),
    x = n(667105),
    h = n(341907),
    b = n(46140),
    j = n(215023),
    v = n(388032),
    y = n(895518);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function C(e) {
    let { quest: t, taskDetails: n } = e;
    return (0, r.jsx)(i.zxk, {
        className: y.cta,
        color: i.zxk.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, h.openVideoQuestModal)(t);
        },
        size: i.zxk.Sizes.SMALL,
        children: (0, f.F9)(n)
    });
}
let O = (e) => {
        let { quest: t } = e,
            n = (0, u.aM)();
        return (0, r.jsx)(i.zxk, {
            className: y.cta,
            size: i.zxk.Sizes.SMALL,
            onClick: () =>
                (0, f.nc)(t, {
                    content: m.jn.QUEST_BAR_V2,
                    ctaContent: d.jZ.OPEN_GAME_LINK,
                    impressionId: n
                }),
            children: (0, f.pO)(t) ? v.intl.string(v.t.hvVgAQ) : v.intl.string(v.t.lwQdjI)
        });
    },
    w = (e) => {
        var t;
        let { quest: n } = e,
            o = null == (t = (0, u.WD)()) ? void 0 : t.getId();
        return (0, r.jsx)(i.zxk, {
            fullWidth: !0,
            className: y.cta,
            onClick: () =>
                (0, f.gI)(
                    { quest: n },
                    {
                        content: m.jn.QUEST_BAR_V2,
                        ctaContent: d.jZ.CONNECT_CONSOLE,
                        impressionId: o
                    }
                ),
            size: i.zxk.Sizes.SMALL,
            children: v.intl.string(v.t.csptqa)
        });
    },
    S = (e) => {
        let { quest: t } = e,
            n = (0, f.Vl)(t),
            o = t.config.features.includes(b.S7.START_QUEST_CTA),
            s = (0, g.CR)({
                quest: t,
                location: b.dr.QUESTS_BAR
            }),
            { launchInGameActivity: a } = (0, p.zB)(t);
        return n && o
            ? (0, r.jsx)(i.zxk, {
                  className: y.cta,
                  color: i.zxk.Colors.BRAND,
                  fullWidth: !0,
                  onClick: a,
                  size: i.zxk.Sizes.SMALL,
                  children: s
              })
            : null;
    },
    E = (e) => {
        var t,
            n,
            s,
            { quest: d, useReducedMotion: u, isExpanded: p, className: h, ctaLabel: v, onClick: C } = e,
            O = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            o = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                        return o;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                }
                return o;
            })(e, ['quest', 'useReducedMotion', 'isExpanded', 'className', 'ctaLabel', 'onClick']);
        let w = (0, x.hf)({
                quest: d,
                location: m.jn.QUEST_BAR_V2
            }),
            S = (0, g.up)(b.dr.QUESTS_BAR),
            E = o.useCallback(
                (e) => {
                    var t;
                    null == C || C(e),
                        (0, f.xN)(d.config) && (null == (t = d.userStatus) ? void 0 : t.claimedAt) != null
                            ? (0, c.mK)({
                                  openInLayer: !1,
                                  tab: j.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: l.Z.QUEST_HOME_PAGE
                              })
                            : w();
                },
                [C, d.config, null == (s = d.userStatus) ? void 0 : s.claimedAt, w]
            );
        return (0, r.jsx)(
            i.gtL,
            ((t = _(
                {
                    fullWidth: !0,
                    size: i.zxk.Sizes.SMALL,
                    onClick: E,
                    pauseAnimation: u || !p,
                    className: a()(y.cta, h),
                    buttonShineClassName: y.shine
                },
                O
            )),
            (n = n = { children: null != v ? v : S }),
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
        let { quest: n, useReducedMotion: o, isExpanded: s, awaitingConsoleConnections: a, hasMadeProgress: i, isProgressing: l, activeScreen: c, taskDetails: d } = e,
            u = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
            p = (0, f.q8)(n),
            g = (0, f.Vl)(n);
        if (u)
            return (0, r.jsx)(E, {
                quest: n,
                useReducedMotion: o,
                isExpanded: s
            });
        if (p)
            return (0, r.jsx)(C, {
                quest: n,
                taskDetails: d
            });
        if (g) return (0, r.jsx)(S, { quest: n });
        if (c === m.LI.CONSOLE && a) return (0, r.jsx)(w, { quest: n });
        if (c !== m.LI.SELECT && !i && !l) return (0, r.jsx)(O, { quest: n });
        return null;
    };
function T(e) {
    return (0, r.jsxs)('div', {
        className: y.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(i.zxk, {
                    className: y.backButton,
                    innerClassName: y.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, r.jsx)(i.V7D, { className: y.backIcon })
                }),
            (0, r.jsx)(P, _({}, e))
        ]
    });
}
