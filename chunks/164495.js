t.d(n, {
    i0: () => k,
    yD: () => j
});
var r = t(200651),
    o = t(192379),
    a = t(120356),
    i = t.n(a),
    d = t(481060),
    s = t(617136),
    c = t(915750),
    l = t(497505),
    f = t(918701),
    u = t(796111),
    p = t(880199),
    _ = t(667105),
    C = t(341907),
    b = t(604162),
    g = t(46140),
    v = t(388032),
    m = t(133883);
function x(e) {
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
function S(e) {
    let { quest: n, taskDetails: t } = e;
    return (0, r.jsx)(d.zxk, {
        className: m.cta,
        color: d.zxk.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, C.openVideoQuestModal)(n);
        },
        size: d.zxk.Sizes.SMALL,
        children: (0, b.F9)(t)
    });
}
let y = (e) => {
        let { quest: n } = e,
            t = (0, c.aM)();
        return (0, r.jsx)(d.zxk, {
            className: m.cta,
            size: d.zxk.Sizes.SMALL,
            onClick: () =>
                (0, f.FE)(n, {
                    content: l.jn.QUEST_BAR_V2,
                    ctaContent: s.jZ.OPEN_GAME_LINK,
                    impressionId: t
                }),
            children: (0, f.pO)(n) ? v.NW.string(v.t.hvVgAQ) : v.NW.string(v.t.lwQdjI)
        });
    },
    B = (e) => {
        var n;
        let { quest: t } = e,
            o = null === (n = (0, c.WD)()) || void 0 === n ? void 0 : n.getId();
        return (0, r.jsx)(d.zxk, {
            fullWidth: !0,
            className: m.cta,
            onClick: () =>
                (0, f.gI)(
                    { quest: t },
                    {
                        content: l.jn.QUEST_BAR_V2,
                        ctaContent: s.jZ.CONNECT_CONSOLE,
                        impressionId: o
                    }
                ),
            size: d.zxk.Sizes.SMALL,
            children: v.NW.string(v.t.csptqa)
        });
    },
    k = (e) => {
        var n,
            t,
            { quest: a, useReducedMotion: s, isExpanded: c, className: f, ctaLabel: u, onClick: p } = e,
            C = (function (e, n) {
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
        let b = (0, _.hf)({
                quest: a,
                location: l.jn.QUEST_BAR_V2
            }),
            g = o.useCallback(
                (e) => {
                    null == p || p(e), b();
                },
                [p, b]
            );
        return (0, r.jsx)(
            d.gtL,
            ((n = x(
                {
                    fullWidth: !0,
                    size: d.zxk.Sizes.SMALL,
                    onClick: g,
                    pauseAnimation: s || !c,
                    className: i()(m.cta, f),
                    buttonShineClassName: m.shine
                },
                C
            )),
            (t = t = { children: null != u ? u : v.NW.string(v.t.cfY4PD) }),
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
    h = (e) => {
        var n;
        let { quest: t, useReducedMotion: o, isExpanded: a, awaitingConsoleConnections: i, hasMadeProgress: d, isProgressing: s, activeScreen: c, taskDetails: _ } = e,
            C = (null === (n = t.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
            b = (0, u.P)({ location: g.dr.QUESTS_BAR }),
            v = (0, f.q8)(t),
            m = (0, f.xN)(t.config);
        if (C && m) {
            let e = (0, f.LM)(t.config);
            return (0, r.jsx)(k, {
                quest: t,
                useReducedMotion: o,
                isExpanded: a,
                ctaLabel: (0, r.jsx)(p.Z, { orbQuantity: e })
            });
        }
        if (C)
            return (0, r.jsx)(k, {
                quest: t,
                useReducedMotion: o,
                isExpanded: a
            });
        if (v)
            return (0, r.jsx)(S, {
                quest: t,
                taskDetails: _
            });
        if (c === l.LI.CONSOLE && i && !b) return (0, r.jsx)(B, { quest: t });
        if (c !== l.LI.SELECT && !d && !s) return (0, r.jsx)(y, { quest: t });
        return null;
    };
function j(e) {
    return (0, r.jsxs)('div', {
        className: m.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(d.zxk, {
                    className: m.backButton,
                    innerClassName: m.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, r.jsx)(d.V7D, { className: m.backIcon })
                }),
            (0, r.jsx)(h, x({}, e))
        ]
    });
}
