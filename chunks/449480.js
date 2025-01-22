var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(97028),
    c = r(481060),
    d = r(686546),
    f = r(353093),
    p = r(388032),
    h = r(894979);
let _ = 4,
    m = 10,
    g = 2;
function E(e) {
    let { games: n, gameActivity: r } = e;
    return (0, a.jsx)('div', {
        className: h.tooltipGames,
        children: n.map((e) => {
            let n = e.getIconURL(24);
            if (null == n) return null;
            let i = null == r ? void 0 : r[e.id],
                o = (null == i ? void 0 : i.level) === u.m.HIGH,
                s = (0, a.jsxs)(c.Text, {
                    variant: 'text-xs/semibold',
                    color: 'interactive-active',
                    className: h.tooltipGameName,
                    children: [
                        e.name,
                        o &&
                            (0, a.jsx)(c.Text, {
                                tag: 'div',
                                variant: 'text-xxs/normal',
                                color: 'text-muted',
                                children: p.intl.string(p.t.gTQrTU)
                            })
                    ]
                });
            return (0, a.jsxs)(
                'div',
                {
                    className: h.tooltipGame,
                    children: [
                        (0, a.jsx)('div', {
                            className: h.tooltipGameImageContainer,
                            children: (0, a.jsx)('img', {
                                src: n,
                                alt: e.name,
                                className: h.tooltipGameImage
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
function v(e) {
    var n;
    let { game: r, gameActivity: i, highlighted: o = !1 } = e,
        s = r.getIconURL(24);
    if (null == s) return null;
    let f = (null == i ? void 0 : null === (n = i[r.id]) || void 0 === n ? void 0 : n.level) === u.m.HIGH,
        _ = (0, a.jsxs)(c.Text, {
            variant: 'text-sm/semibold',
            color: 'interactive-active',
            className: h.tooltipText,
            children: [
                r.name,
                f &&
                    (0, a.jsx)(c.Text, {
                        tag: 'div',
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        children: p.intl.string(p.t.gTQrTU)
                    })
            ]
        });
    return (0, a.jsx)(c.Tooltip, {
        text: _,
        position: 'bottom',
        'aria-label': r.name,
        children: (e) =>
            (0, a.jsxs)('div', {
                ...e,
                className: l()(h.gameImageContainer, o && h.highlighted),
                children: [
                    (0, a.jsx)('img', {
                        src: s,
                        alt: r.name,
                        className: h.gameImage
                    }),
                    f &&
                        (0, a.jsx)(d.ZP, {
                            mask: d.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
                            width: m + 2 * g,
                            height: m + 2 * g,
                            className: h.gameActivityLevel,
                            children: (0, a.jsx)('div', {
                                className: h.gameActivityLevelInner,
                                children: (0, a.jsx)(c.FireIcon, {
                                    color: c.tokens.unsafe_rawColors.ORANGE_330.css,
                                    width: m,
                                    height: m,
                                    size: 'custom'
                                })
                            })
                        })
                ]
            })
    });
}
let y = (e) => (n, r) => {
    var i, a, o, s;
    let l = null !== (o = null == e ? void 0 : null === (i = e[n.id]) || void 0 === i ? void 0 : i.score) && void 0 !== o ? o : 0,
        u = null !== (s = null == e ? void 0 : null === (a = e[r.id]) || void 0 === a ? void 0 : a.score) && void 0 !== s ? s : 0;
    return l !== u ? u - l : 0;
};
n.Z = o.memo(function (e) {
    let { games: n, prioritizedGameIds: r = new Set(), gameActivity: i = {}, onInteraction: s } = e,
        l = o.useMemo(() => {
            let e = n.filter((e) => null != e && null != e.icon),
                a = e.filter((e) => !r.has(e.id)).sort(y(i));
            return [...e.filter((e) => r.has(e.id)).sort(y(i)), ...a];
        }, [i, n, r]),
        u = l.slice(0, _ - 1),
        d = o.useMemo(() => {
            var e;
            let n = l[_ - 1];
            if (null == n) return null;
            let r = n.getIconURL(24);
            if (null == r) return null;
            if (l.length <= _)
                return (0, a.jsx)(v, {
                    game: n,
                    gameActivity: i
                });
            let o = l.slice(_ - 1);
            return (0, a.jsx)(c.Tooltip, {
                'aria-label': null !== (e = (0, f.f6)(o.map((e) => e.name))) && void 0 !== e ? e : '',
                onTooltipShow: () => (null == s ? void 0 : s()),
                text: (0, a.jsx)(E, {
                    games: o,
                    gameActivity: i
                }),
                position: 'bottom',
                children: (e) =>
                    (0, a.jsxs)('div', {
                        ...e,
                        className: h.gameImageContainer,
                        children: [
                            (0, a.jsx)('img', {
                                src: r,
                                alt: n.name,
                                className: h.gameImage
                            }),
                            (0, a.jsx)('div', {
                                className: h.extraGameCount,
                                children: (0, a.jsx)(c.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'always-white',
                                    children: '+'.concat(o.length)
                                })
                            })
                        ]
                    })
            });
        }, [i, l, s]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            u.map((e) =>
                (0, a.jsx)(
                    v,
                    {
                        game: e,
                        gameActivity: i,
                        highlighted: r.has(e.id)
                    },
                    e.id
                )
            ),
            d
        ]
    });
});
