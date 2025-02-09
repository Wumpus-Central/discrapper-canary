n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(846519),
    o = n(481060),
    c = n(259580),
    d = n(81543),
    u = n(388032),
    m = n(565965);
let h = function (e) {
    let { items: t, carouselClassName: n, paginationCaretClassName: l, intervalBetweenAutomaticItemRotations: h, renderItem: g } = e,
        x = r.useMemo(() => new a.Xp(), []),
        [p, _] = r.useState(d.n.LEFT),
        [C, f] = r.useState(0),
        [v, N] = r.useState(!1),
        [j, I] = r.useState(!1),
        E = r.useCallback(
            (e, t) => {
                f((n) => {
                    let i = n + t;
                    return i < 0 ? (i = e.length - 1) : i > e.length - 1 && (i = 0), i;
                });
            },
            [f]
        ),
        b = r.useCallback(() => {
            !j && E(t, 1);
        }, [E, t, j]),
        T = r.useCallback(() => {
            !j && E(t, -1);
        }, [E, t, j]);
    return (
        r.useEffect(() => {
            null != h && (v ? v && x.stop() : x.start(h, b));
        }, [v, x, h, b]),
        (0, i.jsxs)('div', {
            className: m.root,
            onMouseEnter: () => N(!0),
            onMouseLeave: () => N(!1),
            children: [
                (0, i.jsx)(o.P3F, {
                    className: s()(m.carouselCaret, l),
                    onClick: T,
                    onMouseEnter: () => _(d.n.RIGHT),
                    ignoreKeyPress: j,
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
                    onAnimationStart: () => I(!0),
                    onAnimationEnd: () => I(!1),
                    className: s()(m.carousel, n),
                    children: g(t[C])
                }),
                (0, i.jsx)(o.P3F, {
                    className: s()(m.carouselCaret, l),
                    onClick: b,
                    onMouseEnter: () => _(d.n.LEFT),
                    ignoreKeyPress: j,
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
