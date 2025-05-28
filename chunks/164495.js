n.d(t, {
    i0: () => P,
    yD: () => T
});
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
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
function O(e) {
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
let C = (e) => {
        let { quest: t } = e,
            n = (0, d.aM)();
        return (0, r.jsx)(i.zxk, {
            className: y.cta,
            size: i.zxk.Sizes.SMALL,
            onClick: () =>
                (0, f.FE)(t, {
                    content: m.jn.QUEST_BAR_V2,
                    ctaContent: u.jZ.OPEN_GAME_LINK,
                    impressionId: n
                }),
            children: (0, f.pO)(t) ? v.intl.string(v.t.hvVgAQ) : v.intl.string(v.t.lwQdjI)
        });
    },
    w = (e) => {
        var t;
        let { quest: n } = e,
            s = null == (t = (0, d.WD)()) ? void 0 : t.getId();
        return (0, r.jsx)(i.zxk, {
            fullWidth: !0,
            className: y.cta,
            onClick: () =>
                (0, f.gI)(
                    { quest: n },
                    {
                        content: m.jn.QUEST_BAR_V2,
                        ctaContent: u.jZ.CONNECT_CONSOLE,
                        impressionId: s
                    }
                ),
            size: i.zxk.Sizes.SMALL,
            children: v.intl.string(v.t.csptqa)
        });
    },
    S = (e) => {
        let { quest: t } = e,
            n = (0, f.Vl)(t),
            s = t.config.features.includes(b.S7.START_QUEST_CTA),
            o = (0, g.CR)({
                quest: t,
                location: b.dr.QUESTS_BAR
            }),
            { launchInGameActivity: a } = (0, p.zB)(t);
        return n && s
            ? (0, r.jsx)(i.zxk, {
                  className: y.cta,
                  color: i.zxk.Colors.BRAND,
                  fullWidth: !0,
                  onClick: a,
                  size: i.zxk.Sizes.SMALL,
                  children: o
              })
            : null;
    },
    P = (e) => {
        var t,
            n,
            o,
            { quest: u, useReducedMotion: d, isExpanded: p, className: h, ctaLabel: v, onClick: O } = e,
            C = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            s = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                        return s;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                }
                return s;
            })(e, ['quest', 'useReducedMotion', 'isExpanded', 'className', 'ctaLabel', 'onClick']);
        let w = (0, x.hf)({
                quest: u,
                location: m.jn.QUEST_BAR_V2
            }),
            S = (0, g.up)(b.dr.QUESTS_BAR),
            P = s.useCallback(
                (e) => {
                    var t;
                    null == O || O(e),
                        (0, f.xN)(u.config) && (null == (t = u.userStatus) ? void 0 : t.claimedAt) != null
                            ? (0, c.mK)({
                                  openInLayer: !1,
                                  tab: j.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: l.Z.QUEST_HOME_PAGE
                              })
                            : w();
                },
                [O, u.config, null == (o = u.userStatus) ? void 0 : o.claimedAt, w]
            );
        return (0, r.jsx)(
            i.gtL,
            ((t = _(
                {
                    fullWidth: !0,
                    size: i.zxk.Sizes.SMALL,
                    onClick: P,
                    pauseAnimation: d || !p,
                    className: a()(y.cta, h),
                    buttonShineClassName: y.shine
                },
                C
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
    E = (e) => {
        var t;
        let { quest: n, useReducedMotion: s, isExpanded: o, awaitingConsoleConnections: a, hasMadeProgress: i, isProgressing: l, activeScreen: c, taskDetails: u } = e,
            d = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
            p = (0, f.q8)(n),
            g = (0, f.Vl)(n);
        if (d)
            return (0, r.jsx)(P, {
                quest: n,
                useReducedMotion: s,
                isExpanded: o
            });
        if (p)
            return (0, r.jsx)(O, {
                quest: n,
                taskDetails: u
            });
        if (g) return (0, r.jsx)(S, { quest: n });
        if (c === m.LI.CONSOLE && a) return (0, r.jsx)(w, { quest: n });
        if (c !== m.LI.SELECT && !i && !l) return (0, r.jsx)(C, { quest: n });
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
            (0, r.jsx)(E, _({}, e))
        ]
    });
}
