n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(97028),
    l = n(481060),
    u = n(686546),
    c = n(353093),
    d = n(388032),
    f = n(894979);
let _ = 4,
    p = 10,
    h = 2;
function m(e) {
    let { games: t, gameActivity: n } = e;
    return (0, i.jsx)('div', {
        className: f.tooltipGames,
        children: t.map((e) => {
            let t = e.getIconURL(24);
            if (null == t) return null;
            let r = null == n ? void 0 : n[e.id],
                a = (null == r ? void 0 : r.level) === o.m.HIGH,
                s = (0, i.jsxs)(l.Text, {
                    variant: 'text-xs/semibold',
                    color: 'interactive-active',
                    className: f.tooltipGameName,
                    children: [
                        e.name,
                        a &&
                            (0, i.jsx)(l.Text, {
                                tag: 'div',
                                variant: 'text-xxs/normal',
                                color: 'text-muted',
                                children: d.intl.string(d.t.gTQrTU)
                            })
                    ]
                });
            return (0, i.jsxs)(
                'div',
                {
                    className: f.tooltipGame,
                    children: [
                        (0, i.jsx)('div', {
                            className: f.tooltipGameImageContainer,
                            children: (0, i.jsx)('img', {
                                src: t,
                                alt: e.name,
                                className: f.tooltipGameImage
                            })
                        }),
                        s
                    ]
                },
                e.id
            );
        })
    });
}
function g(e) {
    var t;
    let { game: n, gameActivity: r, highlighted: a = !1 } = e,
        c = n.getIconURL(24);
    if (null == c) return null;
    let _ = (null == r ? void 0 : null === (t = r[n.id]) || void 0 === t ? void 0 : t.level) === o.m.HIGH,
        m = (0, i.jsxs)(l.Text, {
            variant: 'text-sm/semibold',
            color: 'interactive-active',
            className: f.tooltipText,
            children: [
                n.name,
                _ &&
                    (0, i.jsx)(l.Text, {
                        tag: 'div',
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        children: d.intl.string(d.t.gTQrTU)
                    })
            ]
        });
    return (0, i.jsx)(l.ua7, {
        text: m,
        position: 'bottom',
        'aria-label': n.name,
        children: (e) =>
            (0, i.jsxs)('div', {
                ...e,
                className: s()(f.gameImageContainer, a && f.highlighted),
                children: [
                    (0, i.jsx)('img', {
                        src: c,
                        alt: n.name,
                        className: f.gameImage
                    }),
                    _ &&
                        (0, i.jsx)(u.ZP, {
                            mask: u.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
                            width: p + 2 * h,
                            height: p + 2 * h,
                            className: f.gameActivityLevel,
                            children: (0, i.jsx)('div', {
                                className: f.gameActivityLevelInner,
                                children: (0, i.jsx)(l.YqE, {
                                    color: l.TVs.unsafe_rawColors.ORANGE_330.css,
                                    width: p,
                                    height: p,
                                    size: 'custom'
                                })
                            })
                        })
                ]
            })
    });
}
let E = (e) => (t, n) => {
        var i, r, a, s;
        let o = null !== (a = null == e ? void 0 : null === (i = e[t.id]) || void 0 === i ? void 0 : i.score) && void 0 !== a ? a : 0,
            l = null !== (s = null == e ? void 0 : null === (r = e[n.id]) || void 0 === r ? void 0 : r.score) && void 0 !== s ? s : 0;
        return o !== l ? l - o : 0;
    },
    v = r.memo(function (e) {
        let { games: t, prioritizedGameIds: n = new Set(), gameActivity: a = {}, onInteraction: s } = e,
            o = r.useMemo(() => {
                let e = t.filter((e) => null != e && null != e.icon),
                    i = e.filter((e) => !n.has(e.id)).sort(E(a));
                return [...e.filter((e) => n.has(e.id)).sort(E(a)), ...i];
            }, [a, t, n]),
            u = o.slice(0, _ - 1),
            d = r.useMemo(() => {
                var e;
                let t = o[_ - 1];
                if (null == t) return null;
                let n = t.getIconURL(24);
                if (null == n) return null;
                if (o.length <= _)
                    return (0, i.jsx)(g, {
                        game: t,
                        gameActivity: a
                    });
                let r = o.slice(_ - 1);
                return (0, i.jsx)(l.ua7, {
                    'aria-label': null !== (e = (0, c.f6)(r.map((e) => e.name))) && void 0 !== e ? e : '',
                    onTooltipShow: () => (null == s ? void 0 : s()),
                    text: (0, i.jsx)(m, {
                        games: r,
                        gameActivity: a
                    }),
                    position: 'bottom',
                    children: (e) =>
                        (0, i.jsxs)('div', {
                            ...e,
                            className: f.gameImageContainer,
                            children: [
                                (0, i.jsx)('img', {
                                    src: n,
                                    alt: t.name,
                                    className: f.gameImage
                                }),
                                (0, i.jsx)('div', {
                                    className: f.extraGameCount,
                                    children: (0, i.jsx)(l.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'always-white',
                                        children: '+'.concat(r.length)
                                    })
                                })
                            ]
                        })
                });
            }, [a, o, s]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                u.map((e) =>
                    (0, i.jsx)(
                        g,
                        {
                            game: e,
                            gameActivity: a,
                            highlighted: n.has(e.id)
                        },
                        e.id
                    )
                ),
                d
            ]
        });
    });
