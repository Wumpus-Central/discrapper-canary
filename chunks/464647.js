n.d(t, { Z: () => j });
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(97028),
    o = n(481060),
    c = n(686546),
    u = n(562558),
    m = n(894661);
function d(e) {
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
function x(e, t) {
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
function v(e) {
    let { game: t, activityLevel: n, hideTooltip: a } = e,
        i = t.getIconURL(24);
    if (null == i) return null;
    let l = (null == n ? void 0 : n.level) === s.m.HIGH,
        u = (0, r.jsx)(o.Text, {
            variant: 'text-sm/medium',
            color: 'interactive-active',
            children: t.name
        });
    return (0, r.jsx)(o.ua7, {
        text: u,
        position: 'bottom',
        'aria-label': t.name,
        shouldShow: !a,
        children: (e) =>
            (0, r.jsxs)(
                'div',
                x(d({}, e), {
                    className: m.gameIcon,
                    children: [
                        (0, r.jsx)('img', {
                            className: m.gameIconImage,
                            src: i,
                            alt: t.name
                        }),
                        l &&
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
function h(e) {
    let { games: t, activity: n } = e;
    return (0, r.jsx)('div', {
        className: m.extraGamesContainer,
        children: t.map((e) =>
            (0, r.jsxs)(
                'div',
                {
                    className: m.extraGameRow,
                    children: [
                        (0, r.jsx)(v, {
                            game: e,
                            activityLevel: n[e.id]
                        }),
                        (0, r.jsx)(o.Text, {
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
function f(e) {
    let { game: t, activityLevel: n } = e;
    return (0, r.jsxs)('div', {
        className: m.favoriteGameContainer,
        children: [
            (0, r.jsx)(v, {
                game: t,
                activityLevel: n,
                hideTooltip: !0
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                children: t.name
            })
        ]
    });
}
function j(e) {
    let { profile: t } = e,
        n = t.gameActivity,
        { gamesToDisplay: i, lastGameToDisplay: s, remainingGames: c } = (0, u.Z)(t),
        j = a.useMemo(() => {
            if (null == s) return null;
            let e = s.getIconURL(24);
            return null == e
                ? null
                : 0 === c.length
                  ? (0, r.jsx)(v, {
                        game: s,
                        activityLevel: n[s.id]
                    })
                  : (0, r.jsx)(o.ua7, {
                        'aria-label': '',
                        position: 'bottom',
                        text: (0, r.jsx)(h, {
                            games: c,
                            activity: n
                        }),
                        children: (t) =>
                            (0, r.jsxs)(
                                'div',
                                x(d({}, t), {
                                    className: l()(m.gameIcon, m.extraGameItem),
                                    children: [
                                        (0, r.jsx)('img', {
                                            className: l()(m.gameIconImage, m.extraGameIconImage),
                                            src: e,
                                            alt: s.name
                                        }),
                                        (0, r.jsx)('div', { className: m.extraGameOverlay }),
                                        (0, r.jsx)('div', {
                                            className: m.extraGameText,
                                            children: (0, r.jsx)(o.Text, {
                                                variant: 'text-xs/normal',
                                                children: '+'.concat(c.length)
                                            })
                                        })
                                    ]
                                })
                            )
                    });
        }, [s, c, n]);
    return null == i || 0 === i.length
        ? null
        : 1 === i.length
          ? (0, r.jsx)('div', {
                className: m.container,
                children: (0, r.jsx)(f, {
                    game: i[0],
                    activityLevel: n[i[0].id]
                })
            })
          : (0, r.jsxs)('div', {
                className: m.container,
                children: [
                    i.map((e) =>
                        (0, r.jsx)(
                            v,
                            {
                                game: e,
                                activityLevel: n[e.id]
                            },
                            e.id
                        )
                    ),
                    j
                ]
            });
}
