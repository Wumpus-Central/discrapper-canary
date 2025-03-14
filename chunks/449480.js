i.d(t, { Z: () => E }), i(47120), i(230036);
var n = i(200651),
    r = i(192379),
    l = i(120356),
    a = i.n(l),
    s = i(97028),
    o = i(481060),
    c = i(686546),
    u = i(353093),
    d = i(388032),
    m = i(304722);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = i[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
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
                  var i = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      i.push.apply(i, n);
                  }
                  return i;
              })(Object(t)).forEach(function (i) {
                  Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
              }),
        e
    );
}
function h(e) {
    let { games: t, gameActivity: i } = e;
    return (0, n.jsx)('div', {
        className: m.tooltipGames,
        children: t.map((e) => {
            let t = e.getIconURL(24);
            if (null == t) return null;
            let r = null == i ? void 0 : i[e.id],
                l = (null == r ? void 0 : r.level) === s.m.HIGH,
                a = (0, n.jsxs)(o.Text, {
                    variant: 'text-xs/semibold',
                    color: 'interactive-active',
                    className: m.tooltipGameName,
                    children: [
                        e.name,
                        l &&
                            (0, n.jsx)(o.Text, {
                                tag: 'div',
                                variant: 'text-xxs/normal',
                                color: 'text-muted',
                                children: d.NW.string(d.t.gTQrTU)
                            })
                    ]
                });
            return (0, n.jsxs)(
                'div',
                {
                    className: m.tooltipGame,
                    children: [
                        (0, n.jsx)('div', {
                            className: m.tooltipGameImageContainer,
                            children: (0, n.jsx)('img', {
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
    let { game: i, gameActivity: r, highlighted: l = !1 } = e,
        u = i.getIconURL(24);
    if (null == u) return null;
    let h = (null == r ? void 0 : null === (t = r[i.id]) || void 0 === t ? void 0 : t.level) === s.m.HIGH,
        x = (0, n.jsxs)(o.Text, {
            variant: 'text-sm/semibold',
            color: 'interactive-active',
            className: m.tooltipText,
            children: [
                i.name,
                h &&
                    (0, n.jsx)(o.Text, {
                        tag: 'div',
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        children: d.NW.string(d.t.gTQrTU)
                    })
            ]
        });
    return (0, n.jsx)(o.ua7, {
        text: x,
        position: 'bottom',
        'aria-label': i.name,
        children: (e) =>
            (0, n.jsxs)(
                'div',
                g(f({}, e), {
                    className: a()(m.gameImageContainer, l && m.highlighted),
                    children: [
                        (0, n.jsx)('img', {
                            src: u,
                            alt: i.name,
                            className: m.gameImage
                        }),
                        h &&
                            (0, n.jsx)(c.ZP, {
                                mask: c.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
                                width: 14,
                                height: 14,
                                className: m.gameActivityLevel,
                                children: (0, n.jsx)('div', {
                                    className: m.gameActivityLevelInner,
                                    children: (0, n.jsx)(o.YqE, {
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
let v = (e) => (t, i) => {
        var n, r, l, a;
        let s = null !== (l = null == e ? void 0 : null === (n = e[t.id]) || void 0 === n ? void 0 : n.score) && void 0 !== l ? l : 0,
            o = null !== (a = null == e ? void 0 : null === (r = e[i.id]) || void 0 === r ? void 0 : r.score) && void 0 !== a ? a : 0;
        return s !== o ? o - s : 0;
    },
    E = r.memo(function (e) {
        let { games: t, prioritizedGameIds: i = new Set(), gameActivity: l = {}, onInteraction: a } = e,
            s = r.useMemo(() => {
                let e = t.filter((e) => null != e && null != e.icon),
                    n = e.filter((e) => !i.has(e.id)).sort(v(l));
                return [...e.filter((e) => i.has(e.id)).sort(v(l)), ...n];
            }, [l, t, i]),
            c = s.slice(0, 3),
            d = r.useMemo(() => {
                var e;
                let t = s[3];
                if (null == t) return null;
                let i = t.getIconURL(24);
                if (null == i) return null;
                if (s.length <= 4)
                    return (0, n.jsx)(x, {
                        game: t,
                        gameActivity: l
                    });
                let r = s.slice(3);
                return (0, n.jsx)(o.ua7, {
                    'aria-label': null !== (e = (0, u.f6)(r.map((e) => e.name))) && void 0 !== e ? e : '',
                    onTooltipShow: () => (null == a ? void 0 : a()),
                    text: (0, n.jsx)(h, {
                        games: r,
                        gameActivity: l
                    }),
                    position: 'bottom',
                    children: (e) =>
                        (0, n.jsxs)(
                            'div',
                            g(f({}, e), {
                                className: m.gameImageContainer,
                                children: [
                                    (0, n.jsx)('img', {
                                        src: i,
                                        alt: t.name,
                                        className: m.gameImage
                                    }),
                                    (0, n.jsx)('div', {
                                        className: m.extraGameCount,
                                        children: (0, n.jsx)(o.Text, {
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
        return (0, n.jsxs)(n.Fragment, {
            children: [
                c.map((e) =>
                    (0, n.jsx)(
                        x,
                        {
                            game: e,
                            gameActivity: l,
                            highlighted: i.has(e.id)
                        },
                        e.id
                    )
                ),
                d
            ]
        });
    });
