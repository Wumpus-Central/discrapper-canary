n.d(t, {
    i0: () => _,
    yD: () => O
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
    m = n(667105),
    f = n(341907),
    g = n(46140),
    x = n(388032),
    h = n(216556);
function b(e) {
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
function j(e) {
    let { quest: t, taskDetails: n } = e;
    return (0, r.jsx)(i.zxk, {
        className: h.cta,
        color: i.zxk.Colors.BRAND,
        fullWidth: !0,
        onClick: () => {
            (0, f.openVideoQuestModal)(t);
        },
        size: i.zxk.Sizes.SMALL,
        children: (0, u.F9)(n)
    });
}
let v = (e) => {
        let { quest: t } = e,
            n = (0, c.aM)();
        return (0, r.jsx)(i.zxk, {
            className: h.cta,
            size: i.zxk.Sizes.SMALL,
            onClick: () =>
                (0, u.FE)(t, {
                    content: d.jn.QUEST_BAR_V2,
                    ctaContent: l.jZ.OPEN_GAME_LINK,
                    impressionId: n
                }),
            children: (0, u.pO)(t) ? x.NW.string(x.t.hvVgAQ) : x.NW.string(x.t.lwQdjI)
        });
    },
    y = (e) => {
        var t;
        let { quest: n } = e,
            o = null === (t = (0, c.WD)()) || void 0 === t ? void 0 : t.getId();
        return (0, r.jsx)(i.zxk, {
            fullWidth: !0,
            className: h.cta,
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
            children: x.NW.string(x.t.csptqa)
        });
    },
    _ = (e) => {
        var t,
            n,
            { quest: s, useReducedMotion: l, isExpanded: c, className: u, ctaLabel: p, onClick: f } = e,
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
        let j = (0, m.hf)({
                quest: s,
                location: d.jn.QUEST_BAR_V2
            }),
            v = o.useCallback(
                (e) => {
                    null == f || f(e), j();
                },
                [f, j]
            );
        return (0, r.jsx)(
            i.gtL,
            ((t = b(
                {
                    fullWidth: !0,
                    size: i.zxk.Sizes.SMALL,
                    onClick: v,
                    pauseAnimation: l || !c,
                    className: a()(h.cta, u),
                    buttonShineClassName: h.shine
                },
                g
            )),
            (n = n = { children: null != p ? p : x.NW.string(x.t.cfY4PD) }),
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
    C = (e) => {
        var t;
        let { quest: n, useReducedMotion: o, isExpanded: s, awaitingConsoleConnections: a, hasMadeProgress: i, isProgressing: l, activeScreen: c, taskDetails: m } = e,
            f = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            x = (0, p.P)({ location: g.dr.QUESTS_BAR }),
            h = (0, u.q8)(n);
        return f
            ? (0, r.jsx)(_, {
                  quest: n,
                  useReducedMotion: o,
                  isExpanded: s
              })
            : h
              ? (0, r.jsx)(j, {
                    quest: n,
                    taskDetails: m
                })
              : c === d.LI.CONSOLE && a && !x
                ? (0, r.jsx)(y, { quest: n })
                : c === d.LI.SELECT || i || l
                  ? null
                  : (0, r.jsx)(v, { quest: n });
    };
function O(e) {
    return (0, r.jsxs)('div', {
        className: h.ctaButtons,
        children: [
            e.showBackButton &&
                (0, r.jsx)(i.zxk, {
                    className: h.backButton,
                    innerClassName: h.backButtonInner,
                    look: 'blank',
                    grow: !1,
                    fullWidth: !1,
                    size: 'none',
                    onClick: e.onBack,
                    children: (0, r.jsx)(i.V7D, { className: h.backIcon })
                }),
            (0, r.jsx)(C, b({}, e))
        ]
    });
}
