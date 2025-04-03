n.d(t, { Z: () => I }), n(47120), n(230036);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(97028),
    o = n(481060),
    c = n(686546),
    u = n(353093),
    d = n(388032),
    m = n(878290);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let { games: t, gameActivity: n } = e;
    return (0, i.jsx)('div', {
        className: m.tooltipGames,
        children: t.map((e) => {
            let t = e.getIconURL(24);
            if (null == t) return null;
            let r = null == n ? void 0 : n[e.id],
                l = (null == r ? void 0 : r.level) === s.m.HIGH,
                a = (0, i.jsxs)(o.Text, {
                    variant: 'text-xs/semibold',
                    color: 'interactive-active',
                    className: m.tooltipGameName,
                    children: [
                        e.name,
                        l &&
                            (0, i.jsx)(o.Text, {
                                tag: 'div',
                                variant: 'text-xxs/normal',
                                color: 'text-muted',
                                children: d.NW.string(d.t.gTQrTU)
                            })
                    ]
                });
            return (0, i.jsxs)(
                'div',
                {
                    className: m.tooltipGame,
                    children: [
                        (0, i.jsx)('div', {
                            className: m.tooltipGameImageContainer,
                            children: (0, i.jsx)('img', {
                                src: t,
                                alt: e.name,
                                className: m.tooltipGameImage
                            })
                        }),
                        a
                    ]
                },
                e.id
            );
        })
    });
}
function x(e) {
    var t;
    let { game: n, gameActivity: r, highlighted: l = !1 } = e,
        u = n.getIconURL(24);
    if (null == u) return null;
    let h = (null == r || null == (t = r[n.id]) ? void 0 : t.level) === s.m.HIGH,
        x = (0, i.jsxs)(o.Text, {
            variant: 'text-sm/semibold',
            color: 'interactive-active',
            className: m.tooltipText,
            children: [
                n.name,
                h &&
                    (0, i.jsx)(o.Text, {
                        tag: 'div',
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        children: d.NW.string(d.t.gTQrTU)
                    })
            ]
        });
    return (0, i.jsx)(o.ua7, {
        text: x,
        position: 'bottom',
        'aria-label': n.name,
        children: (e) =>
            (0, i.jsxs)(
                'div',
                g(f({}, e), {
                    className: a()(m.gameImageContainer, l && m.highlighted),
                    children: [
                        (0, i.jsx)('img', {
                            src: u,
                            alt: n.name,
                            className: m.gameImage
                        }),
                        h &&
                            (0, i.jsx)(c.ZP, {
                                mask: c.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
                                width: 14,
                                height: 14,
                                className: m.gameActivityLevel,
                                children: (0, i.jsx)('div', {
                                    className: m.gameActivityLevelInner,
                                    children: (0, i.jsx)(o.YqE, {
                                        color: o.TVs.unsafe_rawColors.ORANGE_330.css,
                                        width: 10,
                                        height: 10,
                                        size: 'custom'
                                    })
                                })
                            })
                    ]
                })
            )
    });
}
let E = (e) => (t, n) => {
        var i, r, l, a;
        let s = null != (l = null == e || null == (i = e[t.id]) ? void 0 : i.score) ? l : 0,
            o = null != (a = null == e || null == (r = e[n.id]) ? void 0 : r.score) ? a : 0;
        return s !== o ? o - s : 0;
    },
    I = r.memo(function (e) {
        let { games: t, prioritizedGameIds: n = new Set(), gameActivity: l = {}, onInteraction: a } = e,
            s = r.useMemo(() => {
                let e = t.filter((e) => null != e && null != e.icon),
                    i = e.filter((e) => !n.has(e.id)).sort(E(l));
                return [...e.filter((e) => n.has(e.id)).sort(E(l)), ...i];
            }, [l, t, n]),
            c = s.slice(0, 3),
            d = r.useMemo(() => {
                var e;
                let t = s[3];
                if (null == t) return null;
                let n = t.getIconURL(24);
                if (null == n) return null;
                if (s.length <= 4)
                    return (0, i.jsx)(x, {
                        game: t,
                        gameActivity: l
                    });
                let r = s.slice(3);
                return (0, i.jsx)(o.ua7, {
                    'aria-label': null != (e = (0, u.f6)(r.map((e) => e.name))) ? e : '',
                    onTooltipShow: () => (null == a ? void 0 : a()),
                    text: (0, i.jsx)(h, {
                        games: r,
                        gameActivity: l
                    }),
                    position: 'bottom',
                    children: (e) =>
                        (0, i.jsxs)(
                            'div',
                            g(f({}, e), {
                                className: m.gameImageContainer,
                                children: [
                                    (0, i.jsx)('img', {
                                        src: n,
                                        alt: t.name,
                                        className: m.gameImage
                                    }),
                                    (0, i.jsx)('div', {
                                        className: m.extraGameCount,
                                        children: (0, i.jsx)(o.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'always-white',
                                            children: '+'.concat(r.length)
                                        })
                                    })
                                ]
                            })
                        )
                });
            }, [l, s, a]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                c.map((e) =>
                    (0, i.jsx)(
                        x,
                        {
                            game: e,
                            gameActivity: l,
                            highlighted: n.has(e.id)
                        },
                        e.id
                    )
                ),
                d
            ]
        });
    });
