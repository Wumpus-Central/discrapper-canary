n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(846519),
    o = n(481060),
    c = n(259580),
    d = n(81543),
    u = n(388032),
    m = n(470650);
t.Z = function (e) {
    let { items: t, carouselClassName: n, paginationCaretClassName: l, intervalBetweenAutomaticItemRotations: h, renderItem: g } = e,
        x = r.useMemo(() => new a.Xp(), []),
        [p, f] = r.useState(d.n.LEFT),
        [C, v] = r.useState(0),
        [N, _] = r.useState(!1),
        [I, T] = r.useState(!1),
        j = r.useCallback(
            (e, t) => {
                v((n) => {
                    let i = n + t;
                    return i < 0 ? (i = e.length - 1) : i > e.length - 1 && (i = 0), i;
                });
            },
            [v]
        ),
        b = r.useCallback(() => {
            if (!I) j(t, 1);
        }, [j, t, I]),
        E = r.useCallback(() => {
            if (!I) j(t, -1);
        }, [j, t, I]);
    return (
        r.useEffect(() => {
            null != h && (N ? N && x.stop() : x.start(h, b));
        }, [N, x, h, b]),
        (0, i.jsxs)('div', {
            className: m.root,
            onMouseEnter: () => _(!0),
            onMouseLeave: () => _(!1),
            children: [
                (0, i.jsx)(o.Clickable, {
                    className: s()(m.carouselCaret, l),
                    onClick: E,
                    onMouseEnter: () => f(d.n.RIGHT),
                    ignoreKeyPress: I,
                    children: (0, i.jsx)(c.Z, {
                        direction: c.Z.Directions.LEFT,
                        height: 48,
                        width: 48,
                        'aria-label': u.intl.string(u.t.FAmEgo)
                    })
                }),
                (0, i.jsx)(d.Z, {
                    step: C,
                    direction: p,
                    onAnimationStart: () => T(!0),
                    onAnimationEnd: () => T(!1),
                    className: s()(m.carousel, n),
                    children: g(t[C])
                }),
                (0, i.jsx)(o.Clickable, {
                    className: s()(m.carouselCaret, l),
                    onClick: b,
                    onMouseEnter: () => f(d.n.LEFT),
                    ignoreKeyPress: I,
                    children: (0, i.jsx)(c.Z, {
                        direction: c.Z.Directions.RIGHT,
                        height: 48,
                        width: 48,
                        'aria-label': u.intl.string(u.t.Fa8W1d)
                    })
                })
            ]
        })
    );
};
