n.d(t, { Z: () => S });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(97028),
    l = n(481060),
    c = n(686546),
    u = n(810568),
    d = n(168524),
    f = n(214288),
    _ = n(562558),
    p = n(1376);
function h(e, t, n) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = 10,
    y = 2;
function v(e) {
    let { game: t, activityLevel: n, hideTooltip: i } = e,
        a = t.getIconURL(24),
        o = (0, f.B)(),
        _ = (0, d.Z)({
            location: 'GuildProfile',
            source: u.m1.GuildProfile,
            trackEntryPointImpression: !0,
            applicationId: t.id
        });
    if (null == a) return null;
    let h = !i,
        g = (null == n ? void 0 : n.level) === s.m.HIGH,
        v = (0, r.jsx)(l.Text, {
            variant: 'text-sm/medium',
            color: 'interactive-active',
            children: t.name
        }),
        O = (0, r.jsx)(l.ua7, {
            text: v,
            position: 'bottom',
            'aria-label': t.name,
            shouldShow: h,
            children: (e) =>
                (0, r.jsxs)(
                    'div',
                    E(m({}, e), {
                        className: p.gameIcon,
                        children: [
                            (0, r.jsx)('img', {
                                className: p.gameIconImage,
                                src: a,
                                alt: t.name
                            }),
                            g &&
                                (0, r.jsx)(c.ZP, {
                                    mask: c.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
                                    width: b + 2 * y,
                                    height: b + 2 * y,
                                    className: p.gameActivityLevel,
                                    children: (0, r.jsx)('div', {
                                        className: p.gameActivityLevelInner,
                                        children: (0, r.jsx)(l.YqE, {
                                            color: l.TVs.unsafe_rawColors.ORANGE_330.css,
                                            width: b,
                                            height: b,
                                            size: 'custom'
                                        })
                                    })
                                })
                        ]
                    })
                )
        });
    return o
        ? (0, r.jsx)(l.P3F, {
              onClick: _,
              className: p.gameIconWrapper,
              children: O
          })
        : O;
}
function O(e) {
    let { games: t, activity: n } = e;
    return (0, r.jsx)('div', {
        className: p.extraGamesContainer,
        children: t.map((e) =>
            (0, r.jsxs)(
                'div',
                {
                    className: p.extraGameRow,
                    children: [
                        (0, r.jsx)(v, {
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
function I(e) {
    let { game: t, activityLevel: n } = e;
    return (0, r.jsxs)('div', {
        className: p.favoriteGameContainer,
        children: [
            (0, r.jsx)(v, {
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
function S(e) {
    let { profile: t } = e,
        n = t.gameActivity,
        { gamesToDisplay: a, lastGameToDisplay: s, remainingGames: c } = (0, _.Z)(t),
        u = i.useMemo(() => {
            if (null == s) return null;
            let e = s.getIconURL(24);
            if (null == e) return null;
            if (0 === c.length)
                return (0, r.jsx)(v, {
                    game: s,
                    activityLevel: n[s.id]
                });
            let t = c;
            return (0, r.jsx)(l.ua7, {
                'aria-label': '',
                position: 'bottom',
                text: (0, r.jsx)(O, {
                    games: t,
                    activity: n
                }),
                children: (n) =>
                    (0, r.jsxs)(
                        'div',
                        E(m({}, n), {
                            className: o()(p.gameIcon, p.extraGameItem),
                            children: [
                                (0, r.jsx)('img', {
                                    className: o()(p.gameIconImage, p.extraGameIconImage),
                                    src: e,
                                    alt: s.name
                                }),
                                (0, r.jsx)('div', { className: p.extraGameOverlay }),
                                (0, r.jsx)('div', {
                                    className: p.extraGameText,
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
    return null == a || 0 === a.length
        ? null
        : 1 === a.length
          ? (0, r.jsx)('div', {
                className: p.container,
                children: (0, r.jsx)(I, {
                    game: a[0],
                    activityLevel: n[a[0].id]
                })
            })
          : (0, r.jsxs)('div', {
                className: p.container,
                children: [
                    a.map((e) =>
                        (0, r.jsx)(
                            v,
                            {
                                game: e,
                                activityLevel: n[e.id]
                            },
                            e.id
                        )
                    ),
                    u
                ]
            });
}
