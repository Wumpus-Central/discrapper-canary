var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(97028),
    c = r(481060),
    d = r(686546),
    f = r(353093),
    _ = r(388032),
    h = r(894979);
let p = 4,
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
                s = (null == i ? void 0 : i.level) === u.m.HIGH,
                o = (0, a.jsxs)(c.Text, {
                    variant: 'text-xs/semibold',
                    color: 'interactive-active',
                    className: h.tooltipGameName,
                    children: [
                        e.name,
                        s &&
                            (0, a.jsx)(c.Text, {
                                tag: 'div',
                                variant: 'text-xxs/normal',
                                color: 'text-muted',
                                children: _.intl.string(_.t.gTQrTU)
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
                        o
                    ]
                },
                e.id
            );
        })
    });
}
function v(e) {
    var n;
    let { game: r, gameActivity: i, highlighted: s = !1 } = e,
        o = r.getIconURL(24);
    if (null == o) return null;
    let f = (null == i ? void 0 : null === (n = i[r.id]) || void 0 === n ? void 0 : n.level) === u.m.HIGH,
        p = (0, a.jsxs)(c.Text, {
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
                        children: _.intl.string(_.t.gTQrTU)
                    })
            ]
        });
    return (0, a.jsx)(c.Tooltip, {
        text: p,
        position: 'bottom',
        'aria-label': r.name,
        children: (e) =>
            (0, a.jsxs)('div', {
                ...e,
                className: l()(h.gameImageContainer, s && h.highlighted),
                children: [
                    (0, a.jsx)('img', {
                        src: o,
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
let I = (e) => (n, r) => {
    var i, a, s, o;
    let l = null !== (s = null == e ? void 0 : null === (i = e[n.id]) || void 0 === i ? void 0 : i.score) && void 0 !== s ? s : 0,
        u = null !== (o = null == e ? void 0 : null === (a = e[r.id]) || void 0 === a ? void 0 : a.score) && void 0 !== o ? o : 0;
    return l !== u ? u - l : 0;
};
n.Z = s.memo(function (e) {
    let { games: n, prioritizedGameIds: r = new Set(), gameActivity: i = {}, onInteraction: o } = e,
        l = s.useMemo(() => {
            let e = n.filter((e) => null != e && null != e.icon),
                a = e.filter((e) => !r.has(e.id)).sort(I(i));
            return [...e.filter((e) => r.has(e.id)).sort(I(i)), ...a];
        }, [i, n, r]),
        u = l.slice(0, p - 1),
        d = s.useMemo(() => {
            var e;
            let n = l[p - 1];
            if (null == n) return null;
            let r = n.getIconURL(24);
            if (null == r) return null;
            if (l.length <= p)
                return (0, a.jsx)(v, {
                    game: n,
                    gameActivity: i
                });
            let s = l.slice(p - 1);
            return (0, a.jsx)(c.Tooltip, {
                'aria-label': null !== (e = (0, f.f6)(s.map((e) => e.name))) && void 0 !== e ? e : '',
                onTooltipShow: () => (null == o ? void 0 : o()),
                text: (0, a.jsx)(E, {
                    games: s,
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
                                    children: '+'.concat(s.length)
                                })
                            })
                        ]
                    })
            });
        }, [i, l, o]);
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
