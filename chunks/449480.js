n.d(t, { Z: () => x }), n(388685), n(642613);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(97028),
    o = n(481060),
    c = n(686546),
    d = n(353093),
    u = n(388032),
    m = n(878290);
function g(e) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    let { games: t, gameActivity: n } = e;
    return (0, r.jsx)('div', {
        className: m.tooltipGames,
        children: t.map((e) => {
            let t = e.getIconURL(24);
            if (null == t) return null;
            let i = null == n ? void 0 : n[e.id],
                s = (null == i ? void 0 : i.level) === l.m.HIGH,
                a = (0, r.jsxs)(o.Text, {
                    variant: 'text-xs/semibold',
                    color: 'interactive-active',
                    className: m.tooltipGameName,
                    children: [
                        e.name,
                        s &&
                            (0, r.jsx)(o.Text, {
                                tag: 'div',
                                variant: 'text-xxs/normal',
                                color: 'text-muted',
                                children: u.NW.string(u.t.gTQrTU)
                            })
                    ]
                });
            return (0, r.jsxs)(
                'div',
                {
                    className: m.tooltipGame,
                    children: [
                        (0, r.jsx)('div', {
                            className: m.tooltipGameImageContainer,
                            children: (0, r.jsx)('img', {
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
function h(e) {
    var t;
    let { game: n, gameActivity: i, highlighted: s = !1 } = e,
        d = n.getIconURL(24);
    if (null == d) return null;
    let f = (null == i || null == (t = i[n.id]) ? void 0 : t.level) === l.m.HIGH,
        h = (0, r.jsxs)(o.Text, {
            variant: 'text-sm/semibold',
            color: 'interactive-active',
            className: m.tooltipText,
            children: [
                n.name,
                f &&
                    (0, r.jsx)(o.Text, {
                        tag: 'div',
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        children: u.NW.string(u.t.gTQrTU)
                    })
            ]
        });
    return (0, r.jsx)(o.ua7, {
        text: h,
        position: 'bottom',
        'aria-label': n.name,
        children: (e) =>
            (0, r.jsxs)(
                'div',
                p(g({}, e), {
                    className: a()(m.gameImageContainer, s && m.highlighted),
                    children: [
                        (0, r.jsx)('img', {
                            src: d,
                            alt: n.name,
                            className: m.gameImage
                        }),
                        f &&
                            (0, r.jsx)(c.ZP, {
                                mask: c.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
                                width: 14,
                                height: 14,
                                className: m.gameActivityLevel,
                                children: (0, r.jsx)('div', {
                                    className: m.gameActivityLevelInner,
                                    children: (0, r.jsx)(o.YqE, {
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
let b = (e) => (t, n) => {
        var r, i, s, a;
        let l = null != (s = null == e || null == (r = e[t.id]) ? void 0 : r.score) ? s : 0,
            o = null != (a = null == e || null == (i = e[n.id]) ? void 0 : i.score) ? a : 0;
        return l !== o ? o - l : 0;
    },
    x = i.memo(function (e) {
        let { games: t, prioritizedGameIds: n = new Set(), gameActivity: s = {}, onInteraction: a } = e,
            l = i.useMemo(() => {
                let e = t.filter((e) => null != e && null != e.icon),
                    r = e.filter((e) => !n.has(e.id)).sort(b(s));
                return [...e.filter((e) => n.has(e.id)).sort(b(s)), ...r];
            }, [s, t, n]),
            c = l.slice(0, 3),
            u = i.useMemo(() => {
                var e;
                let t = l[3];
                if (null == t) return null;
                let n = t.getIconURL(24);
                if (null == n) return null;
                if (l.length <= 4)
                    return (0, r.jsx)(h, {
                        game: t,
                        gameActivity: s
                    });
                let i = l.slice(3);
                return (0, r.jsx)(o.ua7, {
                    'aria-label': null != (e = (0, d.f6)(i.map((e) => e.name))) ? e : '',
                    onTooltipShow: () => (null == a ? void 0 : a()),
                    text: (0, r.jsx)(f, {
                        games: i,
                        gameActivity: s
                    }),
                    position: 'bottom',
                    children: (e) =>
                        (0, r.jsxs)(
                            'div',
                            p(g({}, e), {
                                className: m.gameImageContainer,
                                children: [
                                    (0, r.jsx)('img', {
                                        src: n,
                                        alt: t.name,
                                        className: m.gameImage
                                    }),
                                    (0, r.jsx)('div', {
                                        className: m.extraGameCount,
                                        children: (0, r.jsx)(o.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'always-white',
                                            children: '+'.concat(i.length)
                                        })
                                    })
                                ]
                            })
                        )
                });
            }, [s, l, a]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                c.map((e) =>
                    (0, r.jsx)(
                        h,
                        {
                            game: e,
                            gameActivity: s,
                            highlighted: n.has(e.id)
                        },
                        e.id
                    )
                ),
                u
            ]
        });
    });
