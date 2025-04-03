t.d(n, {
    i0: () => h,
    yD: () => O
});
var r = t(200651),
    o = t(192379),
    a = t(120356),
    i = t.n(a),
    d = t(481060),
    s = t(100527),
    c = t(335131),
    l = t(617136),
    f = t(915750),
    u = t(497505),
    p = t(918701),
    _ = t(796111),
    C = t(667105),
    g = t(341907),
    b = t(46140),
    m = t(215023),
    v = t(388032),
    x = t(895518);
function S(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function y(e) {
    let { quest: n, taskDetails: t } = e;
    return (0, r.jsx)(d.zxk, {
        className: x.cta,
        color: d.zxk.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, g.openVideoQuestModal)(n);
        },
        size: d.zxk.Sizes.SMALL,
        children: (0, p.F9)(t)
    });
}
let B = (e) => {
        let { quest: n } = e,
            t = (0, f.aM)();
        return (0, r.jsx)(d.zxk, {
            className: x.cta,
            size: d.zxk.Sizes.SMALL,
            onClick: () =>
                (0, p.FE)(n, {
                    content: u.jn.QUEST_BAR_V2,
                    ctaContent: l.jZ.OPEN_GAME_LINK,
                    impressionId: t
                }),
            children: (0, p.pO)(n) ? v.NW.string(v.t.hvVgAQ) : v.NW.string(v.t.lwQdjI)
        });
    },
    k = (e) => {
        var n;
        let { quest: t } = e,
            o = null == (n = (0, f.WD)()) ? void 0 : n.getId();
        return (0, r.jsx)(d.zxk, {
            fullWidth: !0,
            className: x.cta,
            onClick: () =>
                (0, p.gI)(
                    { quest: t },
                    {
                        content: u.jn.QUEST_BAR_V2,
                        ctaContent: l.jZ.CONNECT_CONSOLE,
                        impressionId: o
                    }
                ),
            size: d.zxk.Sizes.SMALL,
            children: v.NW.string(v.t.csptqa)
        });
    },
    h = (e) => {
        var n,
            t,
            a,
            { quest: l, useReducedMotion: f, isExpanded: _, className: g, ctaLabel: b, onClick: y } = e,
            B = (function (e, n) {
                if (null == e) return {};
                var t,
                    r,
                    o = (function (e, n) {
                        if (null == e) return {};
                        var t,
                            r,
                            o = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                        return o;
                    })(e, n);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) (t = a[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
                }
                return o;
            })(e, ['quest', 'useReducedMotion', 'isExpanded', 'className', 'ctaLabel', 'onClick']);
        let k = (0, C.hf)({
                quest: l,
                location: u.jn.QUEST_BAR_V2
            }),
            h = o.useCallback(
                (e) => {
                    var n;
                    null == y || y(e),
                        (0, p.xN)(l.config) && (null == (n = l.userStatus) ? void 0 : n.claimedAt) != null
                            ? (0, c.mK)({
                                  openInLayer: !1,
                                  tab: m.AW.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: s.Z.QUEST_HOME_PAGE
                              })
                            : k();
                },
                [y, l.config, null == (a = l.userStatus) ? void 0 : a.claimedAt, k]
            );
        return (0, r.jsx)(
            d.gtL,
            ((n = S(
                {
                    fullWidth: !0,
                    size: d.zxk.Sizes.SMALL,
                    onClick: h,
                    pauseAnimation: f || !_,
                    className: i()(x.cta, g),
                    buttonShineClassName: x.shine
                },
                B
            )),
            (t = t = { children: null != b ? b : v.NW.string(v.t.cfY4PD) }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, r);
                      }
                      return t;
                  })(Object(t)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                  }),
            n)
        );
    },
    j = (e) => {
        var n;
        let { quest: t, useReducedMotion: o, isExpanded: a, awaitingConsoleConnections: i, hasMadeProgress: d, isProgressing: s, activeScreen: c, taskDetails: l } = e,
            f = (null == (n = t.userStatus) ? void 0 : n.completedAt) != null,
            C = (0, _.P)({ location: b.dr.QUESTS_BAR }),
            g = (0, p.q8)(t),
            m = (0, p.Vl)(t);
        if (f)
            return (0, r.jsx)(h, {
                quest: t,
                useReducedMotion: o,
                isExpanded: a
            });
        if (g)
            return (0, r.jsx)(y, {
                quest: t,
                taskDetails: l
            });
        if (m);
        else if (c === u.LI.CONSOLE && i && !C) return (0, r.jsx)(k, { quest: t });
        else if (c !== u.LI.SELECT && !d && !s) return (0, r.jsx)(B, { quest: t });
        return null;
    };
function O(e) {
    return (0, r.jsxs)('div', {
        className: x.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(d.zxk, {
                    className: x.backButton,
                    innerClassName: x.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, r.jsx)(d.V7D, { className: x.backIcon })
                }),
            (0, r.jsx)(j, S({}, e))
        ]
    });
}
