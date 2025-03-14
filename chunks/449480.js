n.d(t, { Z: () => I }), n(47120), n(230036);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(97028),
    l = n(481060),
    c = n(686546),
    u = n(353093),
    d = n(388032),
    f = n(304722);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = 4,
    E = 10,
    v = 2;
function b(e) {
    let { games: t, gameActivity: n } = e;
    return (0, r.jsx)('div', {
        className: f.tooltipGames,
        children: t.map((e) => {
            let t = e.getIconURL(24);
            if (null == t) return null;
            let i = null == n ? void 0 : n[e.id],
                o = (null == i ? void 0 : i.level) === s.m.HIGH,
                a = (0, r.jsxs)(l.Text, {
                    variant: 'text-xs/semibold',
                    color: 'interactive-active',
                    className: f.tooltipGameName,
                    children: [
                        e.name,
                        o &&
                            (0, r.jsx)(l.Text, {
                                tag: 'div',
                                variant: 'text-xxs/normal',
                                color: 'text-muted',
                                children: d.NW.string(d.t.gTQrTU)
                            })
                    ]
                });
            return (0, r.jsxs)(
                'div',
                {
                    className: f.tooltipGame,
                    children: [
                        (0, r.jsx)('div', {
                            className: f.tooltipGameImageContainer,
                            children: (0, r.jsx)('img', {
                                src: t,
                                alt: e.name,
                                className: f.tooltipGameImage
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
function y(e) {
    var t;
    let { game: n, gameActivity: i, highlighted: o = !1 } = e,
        u = n.getIconURL(24);
    if (null == u) return null;
    let _ = (null == i ? void 0 : null === (t = i[n.id]) || void 0 === t ? void 0 : t.level) === s.m.HIGH,
        h = (0, r.jsxs)(l.Text, {
            variant: 'text-sm/semibold',
            color: 'interactive-active',
            className: f.tooltipText,
            children: [
                n.name,
                _ &&
                    (0, r.jsx)(l.Text, {
                        tag: 'div',
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        children: d.NW.string(d.t.gTQrTU)
                    })
            ]
        });
    return (0, r.jsx)(l.ua7, {
        text: h,
        position: 'bottom',
        'aria-label': n.name,
        children: (e) =>
            (0, r.jsxs)(
                'div',
                m(p({}, e), {
                    className: a()(f.gameImageContainer, o && f.highlighted),
                    children: [
                        (0, r.jsx)('img', {
                            src: u,
                            alt: n.name,
                            className: f.gameImage
                        }),
                        _ &&
                            (0, r.jsx)(c.ZP, {
                                mask: c.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
                                width: E + 2 * v,
                                height: E + 2 * v,
                                className: f.gameActivityLevel,
                                children: (0, r.jsx)('div', {
                                    className: f.gameActivityLevelInner,
                                    children: (0, r.jsx)(l.YqE, {
                                        color: l.TVs.unsafe_rawColors.ORANGE_330.css,
                                        width: E,
                                        height: E,
                                        size: 'custom'
                                    })
                                })
                            })
                    ]
                })
            )
    });
}
let O = (e) => (t, n) => {
        var r, i, o, a;
        let s = null !== (o = null == e ? void 0 : null === (r = e[t.id]) || void 0 === r ? void 0 : r.score) && void 0 !== o ? o : 0,
            l = null !== (a = null == e ? void 0 : null === (i = e[n.id]) || void 0 === i ? void 0 : i.score) && void 0 !== a ? a : 0;
        return s !== l ? l - s : 0;
    },
    I = i.memo(function (e) {
        let { games: t, prioritizedGameIds: n = new Set(), gameActivity: o = {}, onInteraction: a } = e,
            s = i.useMemo(() => {
                let e = t.filter((e) => null != e && null != e.icon),
                    r = e.filter((e) => !n.has(e.id)).sort(O(o));
                return [...e.filter((e) => n.has(e.id)).sort(O(o)), ...r];
            }, [o, t, n]),
            c = s.slice(0, g - 1),
            d = i.useMemo(() => {
                var e;
                let t = s[g - 1];
                if (null == t) return null;
                let n = t.getIconURL(24);
                if (null == n) return null;
                if (s.length <= g)
                    return (0, r.jsx)(y, {
                        game: t,
                        gameActivity: o
                    });
                let i = s.slice(g - 1);
                return (0, r.jsx)(l.ua7, {
                    'aria-label': null !== (e = (0, u.f6)(i.map((e) => e.name))) && void 0 !== e ? e : '',
                    onTooltipShow: () => (null == a ? void 0 : a()),
                    text: (0, r.jsx)(b, {
                        games: i,
                        gameActivity: o
                    }),
                    position: 'bottom',
                    children: (e) =>
                        (0, r.jsxs)(
                            'div',
                            m(p({}, e), {
                                className: f.gameImageContainer,
                                children: [
                                    (0, r.jsx)('img', {
                                        src: n,
                                        alt: t.name,
                                        className: f.gameImage
                                    }),
                                    (0, r.jsx)('div', {
                                        className: f.extraGameCount,
                                        children: (0, r.jsx)(l.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'always-white',
                                            children: '+'.concat(i.length)
                                        })
                                    })
                                ]
                            })
                        )
                });
            }, [o, s, a]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                c.map((e) =>
                    (0, r.jsx)(
                        y,
                        {
                            game: e,
                            gameActivity: o,
                            highlighted: n.has(e.id)
                        },
                        e.id
                    )
                ),
                d
            ]
        });
    });
