n.d(t, { Z: () => g }), n(308318), n(230036);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(97028),
    o = n(481060),
    c = n(835473),
    u = n(686546),
    m = n(823379),
    d = n(894661);
function x(e) {
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
function h(e) {
    let { game: t, activityLevel: n, hideTooltip: a } = e,
        i = t.getIconURL(24);
    if (null == i) return null;
    let l = (null == n ? void 0 : n.level) === s.m.HIGH,
        c = (0, r.jsx)(o.Text, {
            variant: 'text-sm/medium',
            color: 'interactive-active',
            children: t.name
        });
    return (0, r.jsx)(o.ua7, {
        text: c,
        position: 'bottom',
        'aria-label': t.name,
        shouldShow: !a,
        children: (e) =>
            (0, r.jsxs)(
                'div',
                v(x({}, e), {
                    className: d.gameIcon,
                    children: [
                        (0, r.jsx)('img', {
                            className: d.gameIconImage,
                            src: i,
                            alt: t.name
                        }),
                        l &&
                            (0, r.jsx)(u.ZP, {
                                mask: u.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
                                width: 14,
                                height: 14,
                                className: d.gameActivityLevel,
                                children: (0, r.jsx)('div', {
                                    className: d.gameActivityLevelInner,
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
function j(e) {
    let { games: t, activity: n } = e;
    return (0, r.jsx)('div', {
        className: d.extraGamesContainer,
        children: t.map((e) =>
            (0, r.jsxs)(
                'div',
                {
                    className: d.extraGameRow,
                    children: [
                        (0, r.jsx)(h, {
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
        className: d.favoriteGameContainer,
        children: [
            (0, r.jsx)(h, {
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
function g(e) {
    let { profile: t } = e,
        n = t.gameActivity,
        i = (0, c.Z)(t.gameApplicationIds),
        s = a.useMemo(
            () =>
                i.filter(m.lm).toSorted((e, t) => {
                    var r, a, i, l;
                    let s = null !== (i = null === (r = n[e.id]) || void 0 === r ? void 0 : r.score) && void 0 !== i ? i : 0,
                        o = null !== (l = null === (a = n[t.id]) || void 0 === a ? void 0 : a.score) && void 0 !== l ? l : 0;
                    return s !== o ? o - s : 0;
                }),
            [i, n]
        ),
        u = s.slice(0, 4),
        g = a.useMemo(() => {
            let e = s[4];
            if (null == e) return null;
            let t = e.getIconURL(24);
            if (null == t) return null;
            if (s.length <= 5)
                return (0, r.jsx)(h, {
                    game: e,
                    activityLevel: n[e.id]
                });
            let a = s.slice(4);
            return (0, r.jsx)(o.ua7, {
                'aria-label': '',
                position: 'bottom',
                text: (0, r.jsx)(j, {
                    games: a,
                    activity: n
                }),
                children: (n) =>
                    (0, r.jsxs)(
                        'div',
                        v(x({}, n), {
                            className: l()(d.gameIcon, d.extraGameItem),
                            children: [
                                (0, r.jsx)('img', {
                                    className: l()(d.gameIconImage, d.extraGameIconImage),
                                    src: t,
                                    alt: e.name
                                }),
                                (0, r.jsx)('div', { className: d.extraGameOverlay }),
                                (0, r.jsx)('div', {
                                    className: d.extraGameText,
                                    children: (0, r.jsx)(o.Text, {
                                        variant: 'text-xs/normal',
                                        children: '+'.concat(a.length)
                                    })
                                })
                            ]
                        })
                    )
            });
        }, [s, n]);
    return null == s || 0 === s.length
        ? null
        : 1 === u.length
          ? (0, r.jsx)('div', {
                className: d.container,
                children: (0, r.jsx)(f, {
                    game: u[0],
                    activityLevel: n[u[0].id]
                })
            })
          : (0, r.jsxs)('div', {
                className: d.container,
                children: [
                    u.map((e) =>
                        (0, r.jsx)(
                            h,
                            {
                                game: e,
                                activityLevel: n[e.id]
                            },
                            e.id
                        )
                    ),
                    g
                ]
            });
}
