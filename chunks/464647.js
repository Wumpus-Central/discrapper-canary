n.d(t, { Z: () => I });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(97028),
    l = n(481060),
    c = n(686546),
    u = n(810568),
    d = n(168524),
    f = n(214288),
    _ = n(1376);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = 10,
    b = 2;
function y(e) {
    let { game: t, activityLevel: n, hideTooltip: i } = e,
        o = t.getIconURL(24),
        a = (0, f.B)(),
        p = (0, d.Z)({
            location: 'GuildProfile',
            source: u.m1.GuildProfile,
            trackEntryPointImpression: !0,
            applicationId: t.id
        });
    if (null == o) return null;
    let m = !i,
        y = (null == n ? void 0 : n.level) === s.m.HIGH,
        O = (0, r.jsx)(l.Text, {
            variant: 'text-sm/medium',
            color: 'interactive-active',
            children: t.name
        }),
        v = (0, r.jsx)(l.ua7, {
            text: O,
            position: 'bottom',
            'aria-label': t.name,
            shouldShow: m,
            children: (e) =>
                (0, r.jsxs)(
                    'div',
                    g(h({}, e), {
                        className: _.gameIcon,
                        children: [
                            (0, r.jsx)('img', {
                                className: _.gameIconImage,
                                src: o,
                                alt: t.name
                            }),
                            y &&
                                (0, r.jsx)(c.ZP, {
                                    mask: c.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
                                    width: E + 2 * b,
                                    height: E + 2 * b,
                                    className: _.gameActivityLevel,
                                    children: (0, r.jsx)('div', {
                                        className: _.gameActivityLevelInner,
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
    return a
        ? (0, r.jsx)(l.P3F, {
              onClick: p,
              className: _.gameIconWrapper,
              children: v
          })
        : v;
}
function O(e) {
    let { games: t, activity: n } = e;
    return (0, r.jsx)('div', {
        className: _.extraGamesContainer,
        children: t.map((e) =>
            (0, r.jsxs)(
                'div',
                {
                    className: _.extraGameRow,
                    children: [
                        (0, r.jsx)(y, {
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
function v(e) {
    let { game: t, activityLevel: n } = e;
    return (0, r.jsxs)('div', {
        className: _.favoriteGameContainer,
        children: [
            (0, r.jsx)(y, {
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
function I(e) {
    let { gamesToDisplay: t, lastGameToDisplay: n, remainingGames: o, activity: s } = e,
        c = i.useMemo(() => {
            if (null == n) return null;
            let e = n.getIconURL(24);
            if (null == e) return null;
            if (0 === o.length)
                return (0, r.jsx)(y, {
                    game: n,
                    activityLevel: s[n.id]
                });
            let t = o;
            return (0, r.jsx)(l.ua7, {
                'aria-label': '',
                position: 'bottom',
                text: (0, r.jsx)(O, {
                    games: t,
                    activity: s
                }),
                children: (i) =>
                    (0, r.jsxs)(
                        'div',
                        g(h({}, i), {
                            className: a()(_.gameIcon, _.extraGameItem),
                            children: [
                                (0, r.jsx)('img', {
                                    className: a()(_.gameIconImage, _.extraGameIconImage),
                                    src: e,
                                    alt: n.name
                                }),
                                (0, r.jsx)('div', { className: _.extraGameOverlay }),
                                (0, r.jsx)('div', {
                                    className: _.extraGameText,
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
        }, [n, o, s]);
    return null == t || 0 === t.length
        ? null
        : 1 === t.length
          ? (0, r.jsx)('div', {
                className: _.container,
                children: (0, r.jsx)(v, {
                    game: t[0],
                    activityLevel: s[t[0].id]
                })
            })
          : (0, r.jsxs)('div', {
                className: _.container,
                children: [
                    t.map((e) =>
                        (0, r.jsx)(
                            y,
                            {
                                game: e,
                                activityLevel: s[e.id]
                            },
                            e.id
                        )
                    ),
                    c
                ]
            });
}
