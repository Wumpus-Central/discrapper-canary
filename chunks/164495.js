n.d(t, {
    i0: () => C,
    yD: () => w
});
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(481060),
    l = n(617136),
    c = n(915750),
    d = n(497505),
    u = n(918701),
    p = n(796111),
    m = n(880199),
    f = n(667105),
    g = n(341907),
    x = n(46140),
    h = n(388032),
    b = n(216556);
function j(e) {
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
function v(e) {
    let { quest: t, taskDetails: n } = e;
    return (0, r.jsx)(i.zxk, {
        className: b.cta,
        color: i.zxk.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, g.openVideoQuestModal)(t);
        },
        size: i.zxk.Sizes.SMALL,
        children: (0, u.F9)(n)
    });
}
let y = (e) => {
        let { quest: t } = e,
            n = (0, c.aM)();
        return (0, r.jsx)(i.zxk, {
            className: b.cta,
            size: i.zxk.Sizes.SMALL,
            onClick: () =>
                (0, u.FE)(t, {
                    content: d.jn.QUEST_BAR_V2,
                    ctaContent: l.jZ.OPEN_GAME_LINK,
                    impressionId: n
                }),
            children: (0, u.pO)(t) ? h.NW.string(h.t.hvVgAQ) : h.NW.string(h.t.lwQdjI)
        });
    },
    _ = (e) => {
        var t;
        let { quest: n } = e,
            o = null === (t = (0, c.WD)()) || void 0 === t ? void 0 : t.getId();
        return (0, r.jsx)(i.zxk, {
            fullWidth: !0,
            className: b.cta,
            onClick: () =>
                (0, u.gI)(
                    { quest: n },
                    {
                        content: d.jn.QUEST_BAR_V2,
                        ctaContent: l.jZ.CONNECT_CONSOLE,
                        impressionId: o
                    }
                ),
            size: i.zxk.Sizes.SMALL,
            children: h.NW.string(h.t.csptqa)
        });
    },
    C = (e) => {
        var t,
            n,
            { quest: s, useReducedMotion: l, isExpanded: c, className: u, ctaLabel: p, onClick: m } = e,
            g = (function (e, t) {
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
        let x = (0, f.hf)({
                quest: s,
                location: d.jn.QUEST_BAR_V2
            }),
            v = o.useCallback(
                (e) => {
                    null == m || m(e), x();
                },
                [m, x]
            );
        return (0, r.jsx)(
            i.gtL,
            ((t = j(
                {
                    fullWidth: !0,
                    size: i.zxk.Sizes.SMALL,
                    onClick: v,
                    pauseAnimation: l || !c,
                    className: a()(b.cta, u),
                    buttonShineClassName: b.shine
                },
                g
            )),
            (n = n = { children: null != p ? p : h.NW.string(h.t.cfY4PD) }),
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
    O = (e) => {
        var t;
        let { quest: n, useReducedMotion: o, isExpanded: s, awaitingConsoleConnections: a, hasMadeProgress: i, isProgressing: l, activeScreen: c, taskDetails: f } = e,
            g = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            h = (0, p.P)({ location: x.dr.QUESTS_BAR }),
            b = (0, u.q8)(n),
            j = (0, u.xN)(n.config);
        if (g && j) {
            let e = (0, u.LM)(n.config);
            return (0, r.jsx)(C, {
                quest: n,
                useReducedMotion: o,
                isExpanded: s,
                ctaLabel: (0, r.jsx)(m.Z, { orbQuantity: e })
            });
        }
        if (g)
            return (0, r.jsx)(C, {
                quest: n,
                useReducedMotion: o,
                isExpanded: s
            });
        if (b)
            return (0, r.jsx)(v, {
                quest: n,
                taskDetails: f
            });
        if (c === d.LI.CONSOLE && a && !h) return (0, r.jsx)(_, { quest: n });
        if (c !== d.LI.SELECT && !i && !l) return (0, r.jsx)(y, { quest: n });
        return null;
    };
function w(e) {
    return (0, r.jsxs)('div', {
        className: b.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(i.zxk, {
                    className: b.backButton,
                    innerClassName: b.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, r.jsx)(i.V7D, { className: b.backIcon })
                }),
            (0, r.jsx)(O, j({}, e))
        ]
    });
}
