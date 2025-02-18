n.d(t, { Z: () => j }), n(308318);
var a = n(200651),
    i = n(192379),
    l = n(120356),
    r = n.n(l),
    s = n(97028),
    o = n(481060),
    c = n(835473),
    d = n(686546),
    m = n(823379),
    u = n(547083);
function x(e) {
    let { game: t, activityLevel: n, hideTooltip: i } = e,
        l = t.getIconURL(24);
    if (null == l) return null;
    let r = (null == n ? void 0 : n.level) === s.m.HIGH,
        c = (0, a.jsx)(o.Text, {
            variant: 'text-sm/medium',
            color: 'interactive-active',
            children: t.name
        });
    return (0, a.jsx)(o.ua7, {
        text: c,
        position: 'bottom',
        'aria-label': t.name,
        shouldShow: !i,
        children: (e) =>
            (0, a.jsxs)('div', {
                ...e,
                className: u.gameIcon,
                children: [
                    (0, a.jsx)('img', {
                        className: u.gameIconImage,
                        src: l,
                        alt: t.name
                    }),
                    r &&
                        (0, a.jsx)(d.ZP, {
                            mask: d.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
                            width: 14,
                            height: 14,
                            className: u.gameActivityLevel,
                            children: (0, a.jsx)('div', {
                                className: u.gameActivityLevelInner,
                                children: (0, a.jsx)(o.YqE, {
                                    color: o.TVs.unsafe_rawColors.ORANGE_330.css,
                                    width: 10,
                                    height: 10,
                                    size: 'custom'
                                })
                            })
                        })
                ]
            })
    });
}
function h(e) {
    let { games: t, activity: n } = e;
    return (0, a.jsx)('div', {
        className: u.extraGamesContainer,
        children: t.map((e) =>
            (0, a.jsxs)(
                'div',
                {
                    className: u.extraGameRow,
                    children: [
                        (0, a.jsx)(x, {
                            game: e,
                            activityLevel: n[e.id]
                        }),
                        (0, a.jsx)(o.Text, {
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
    return (0, a.jsxs)('div', {
        className: u.favoriteGameContainer,
        children: [
            (0, a.jsx)(x, {
                game: t,
                activityLevel: n,
                hideTooltip: !0
            }),
            (0, a.jsx)(o.Text, {
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
        l = (0, c.Z)(t.gameApplicationIds),
        s = i.useMemo(
            () =>
                l.filter(m.lm).toSorted((e, t) => {
                    var a, i, l, r;
                    let s = null !== (l = null === (a = n[e.id]) || void 0 === a ? void 0 : a.score) && void 0 !== l ? l : 0,
                        o = null !== (r = null === (i = n[t.id]) || void 0 === i ? void 0 : i.score) && void 0 !== r ? r : 0;
                    return s !== o ? o - s : 0;
                }),
            [l, n]
        ),
        d = s.slice(0, 4),
        j = i.useMemo(() => {
            let e = s[4];
            if (null == e) return null;
            let t = e.getIconURL(24);
            if (null == t) return null;
            if (s.length <= 5)
                return (0, a.jsx)(x, {
                    game: e,
                    activityLevel: n[e.id]
                });
            let i = s.slice(4);
            return (0, a.jsx)(o.ua7, {
                'aria-label': '',
                position: 'bottom',
                text: (0, a.jsx)(h, {
                    games: i,
                    activity: n
                }),
                children: (n) =>
                    (0, a.jsxs)('div', {
                        ...n,
                        className: r()(u.gameIcon, u.extraGameItem),
                        children: [
                            (0, a.jsx)('img', {
                                className: r()(u.gameIconImage, u.extraGameIconImage),
                                src: t,
                                alt: e.name
                            }),
                            (0, a.jsx)('div', { className: u.extraGameOverlay }),
                            (0, a.jsx)('div', {
                                className: u.extraGameText,
                                children: (0, a.jsx)(o.Text, {
                                    variant: 'text-xs/normal',
                                    children: '+'.concat(i.length)
                                })
                            })
                        ]
                    })
            });
        }, [s, n]);
    return null == s || 0 === s.length
        ? null
        : 1 === d.length
          ? (0, a.jsx)('div', {
                className: u.container,
                children: (0, a.jsx)(v, {
                    game: d[0],
                    activityLevel: n[d[0].id]
                })
            })
          : (0, a.jsxs)('div', {
                className: u.container,
                children: [
                    d.map((e) =>
                        (0, a.jsx)(
                            x,
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
