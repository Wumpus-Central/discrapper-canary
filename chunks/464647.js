n.d(t, { Z: () => h });
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(97028),
    c = n(481060),
    s = n(686546),
    u = n(562558),
    d = n(386962);
function m(e) {
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
function v(e, t) {
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
    let { game: t, activityLevel: n, hideTooltip: l } = e,
        i = t.getIconURL(24);
    if (null == i) return null;
    let a = (null == n ? void 0 : n.level) === o.m.HIGH,
        u = (0, r.jsx)(c.Text, {
            variant: 'text-sm/medium',
            color: 'interactive-active',
            children: t.name
        });
    return (0, r.jsx)(c.ua7, {
        text: u,
        position: 'bottom',
        'aria-label': t.name,
        shouldShow: !l,
        children: (e) =>
            (0, r.jsxs)(
                'div',
                v(m({}, e), {
                    className: d.gameIcon,
                    children: [
                        (0, r.jsx)('img', {
                            className: d.gameIconImage,
                            src: i,
                            alt: t.name
                        }),
                        a &&
                            (0, r.jsx)(s.ZP, {
                                mask: s.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
                                width: 14,
                                height: 14,
                                className: d.gameActivityLevel,
                                children: (0, r.jsx)('div', {
                                    className: d.gameActivityLevelInner,
                                    children: (0, r.jsx)(c.YqE, {
                                        color: c.TVs.unsafe_rawColors.ORANGE_330.css,
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
function I(e) {
    let { games: t, activity: n } = e;
    return (0, r.jsx)('div', {
        className: d.extraGamesContainer,
        children: t.map((e) =>
            (0, r.jsxs)(
                'div',
                {
                    className: d.extraGameRow,
                    children: [
                        (0, r.jsx)(f, {
                            game: e,
                            activityLevel: n[e.id]
                        }),
                        (0, r.jsx)(c.Text, {
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
function j(e) {
    let { game: t, activityLevel: n } = e;
    return (0, r.jsxs)('div', {
        className: d.favoriteGameContainer,
        children: [
            (0, r.jsx)(f, {
                game: t,
                activityLevel: n,
                hideTooltip: !0
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: t.name
            })
        ]
    });
}
function h(e) {
    let { profile: t } = e,
        n = t.gameActivity,
        { gamesToDisplay: i, lastGameToDisplay: o, remainingGames: s } = (0, u.Z)(t),
        h = l.useMemo(() => {
            if (null == o) return null;
            let e = o.getIconURL(24);
            return null == e
                ? null
                : 0 === s.length
                  ? (0, r.jsx)(f, {
                        game: o,
                        activityLevel: n[o.id]
                    })
                  : (0, r.jsx)(c.ua7, {
                        'aria-label': '',
                        position: 'bottom',
                        text: (0, r.jsx)(I, {
                            games: s,
                            activity: n
                        }),
                        children: (t) =>
                            (0, r.jsxs)(
                                'div',
                                v(m({}, t), {
                                    className: a()(d.gameIcon, d.extraGameItem),
                                    children: [
                                        (0, r.jsx)('img', {
                                            className: a()(d.gameIconImage, d.extraGameIconImage),
                                            src: e,
                                            alt: o.name
                                        }),
                                        (0, r.jsx)('div', { className: d.extraGameOverlay }),
                                        (0, r.jsx)('div', {
                                            className: d.extraGameText,
                                            children: (0, r.jsx)(c.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'always-white',
                                                children: '+'.concat(s.length)
                                            })
                                        })
                                    ]
                                })
                            )
                    });
        }, [o, s, n]);
    return null == i || 0 === i.length
        ? null
        : 1 === i.length
          ? (0, r.jsx)('div', {
                className: d.container,
                children: (0, r.jsx)(j, {
                    game: i[0],
                    activityLevel: n[i[0].id]
                })
            })
          : (0, r.jsxs)('div', {
                className: d.container,
                children: [
                    i.map((e) =>
                        (0, r.jsx)(
                            f,
                            {
                                game: e,
                                activityLevel: n[e.id]
                            },
                            e.id
                        )
                    ),
                    h
                ]
            });
}
