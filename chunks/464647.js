n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(97028),
    l = n(481060),
    c = n(686546),
    u = n(562558),
    d = n(1376);
function f(e, t, n) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = 10,
    g = 2;
function E(e) {
    let { game: t, activityLevel: n, hideTooltip: i } = e,
        o = t.getIconURL(24);
    if (null == o) return null;
    let a = !i,
        u = (null == n ? void 0 : n.level) === s.m.HIGH,
        f = (0, r.jsx)(l.Text, {
            variant: 'text-sm/medium',
            color: 'interactive-active',
            children: t.name
        });
    return (0, r.jsx)(l.ua7, {
        text: f,
        position: 'bottom',
        'aria-label': t.name,
        shouldShow: a,
        children: (e) =>
            (0, r.jsxs)(
                'div',
                h(_({}, e), {
                    className: d.gameIcon,
                    children: [
                        (0, r.jsx)('img', {
                            className: d.gameIconImage,
                            src: o,
                            alt: t.name
                        }),
                        u &&
                            (0, r.jsx)(c.ZP, {
                                mask: c.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
                                width: m + 2 * g,
                                height: m + 2 * g,
                                className: d.gameActivityLevel,
                                children: (0, r.jsx)('div', {
                                    className: d.gameActivityLevelInner,
                                    children: (0, r.jsx)(l.YqE, {
                                        color: l.TVs.unsafe_rawColors.ORANGE_330.css,
                                        width: m,
                                        height: m,
                                        size: 'custom'
                                    })
                                })
                            })
                    ]
                })
            )
    });
}
function b(e) {
    let { games: t, activity: n } = e;
    return (0, r.jsx)('div', {
        className: d.extraGamesContainer,
        children: t.map((e) =>
            (0, r.jsxs)(
                'div',
                {
                    className: d.extraGameRow,
                    children: [
                        (0, r.jsx)(E, {
                            game: e,
                            activityLevel: n[e.id]
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-xs/medium',
                            color: 'interactive-active',
                            children: e.name
                        })
                    ]
                },
                e.id
            )
        )
    });
}
function y(e) {
    let { game: t, activityLevel: n } = e;
    return (0, r.jsxs)('div', {
        className: d.favoriteGameContainer,
        children: [
            (0, r.jsx)(E, {
                game: t,
                activityLevel: n,
                hideTooltip: !0
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: t.name
            })
        ]
    });
}
function v(e) {
    let { profile: t } = e,
        n = t.gameActivity,
        { gamesToDisplay: o, lastGameToDisplay: s, remainingGames: c } = (0, u.Z)(t),
        f = i.useMemo(() => {
            if (null == s) return null;
            let e = s.getIconURL(24);
            if (null == e) return null;
            if (0 === c.length)
                return (0, r.jsx)(E, {
                    game: s,
                    activityLevel: n[s.id]
                });
            let t = c;
            return (0, r.jsx)(l.ua7, {
                'aria-label': '',
                position: 'bottom',
                text: (0, r.jsx)(b, {
                    games: t,
                    activity: n
                }),
                children: (n) =>
                    (0, r.jsxs)(
                        'div',
                        h(_({}, n), {
                            className: a()(d.gameIcon, d.extraGameItem),
                            children: [
                                (0, r.jsx)('img', {
                                    className: a()(d.gameIconImage, d.extraGameIconImage),
                                    src: e,
                                    alt: s.name
                                }),
                                (0, r.jsx)('div', { className: d.extraGameOverlay }),
                                (0, r.jsx)('div', {
                                    className: d.extraGameText,
                                    children: (0, r.jsx)(l.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'always-white',
                                        children: '+'.concat(t.length)
                                    })
                                })
                            ]
                        })
                    )
            });
        }, [s, c, n]);
    return null == o || 0 === o.length
        ? null
        : 1 === o.length
          ? (0, r.jsx)('div', {
                className: d.container,
                children: (0, r.jsx)(y, {
                    game: o[0],
                    activityLevel: n[o[0].id]
                })
            })
          : (0, r.jsxs)('div', {
                className: d.container,
                children: [
                    o.map((e) =>
                        (0, r.jsx)(
                            E,
                            {
                                game: e,
                                activityLevel: n[e.id]
                            },
                            e.id
                        )
                    ),
                    f
                ]
            });
}
