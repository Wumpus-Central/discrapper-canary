n.d(t, { Z: () => g }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(846519),
    o = n(481060),
    c = n(259580),
    u = n(81543),
    d = n(388032),
    m = n(448533);
let g = function (e) {
    let { items: t, carouselClassName: n, paginationCaretClassName: l, intervalBetweenAutomaticItemRotations: g, renderItem: p } = e,
        h = i.useMemo(() => new a.Xp(), []),
        [f, x] = i.useState(u.n.LEFT),
        [b, j] = i.useState(0),
        [_, v] = i.useState(!1),
        [O, C] = i.useState(!1),
        y = i.useCallback(
            (e, t) => {
                j((n) => {
                    let r = n + t;
                    return r < 0 ? (r = e.length - 1) : r > e.length - 1 && (r = 0), r;
                });
            },
            [j]
        ),
        N = i.useCallback(() => {
            O || y(t, 1);
        }, [y, t, O]),
        I = i.useCallback(() => {
            O || y(t, -1);
        }, [y, t, O]);
    return (
        i.useEffect(() => {
            null != g && (_ ? _ && h.stop() : h.start(g, N));
        }, [_, h, g, N]),
        (0, r.jsxs)('div', {
            className: m.root,
            onMouseEnter: () => v(!0),
            onMouseLeave: () => v(!1),
            children: [
                (0, r.jsx)(o.P3F, {
                    className: s()(m.carouselCaret, l),
                    onClick: I,
                    onMouseEnter: () => x(u.n.RIGHT),
                    ignoreKeyPress: O,
                    children: (0, r.jsx)(c.Z, {
                        direction: c.Z.Directions.LEFT,
                        height: 48,
                        width: 48,
                        'aria-label': d.intl.string(d.t.FAmEgo)
                    })
                }),
                (0, r.jsx)(u.Z, {
                    step: b,
                    direction: f,
                    onAnimationStart: () => C(!0),
                    onAnimationEnd: () => C(!1),
                    className: s()(m.carousel, n),
                    children: p(t[b])
                }),
                (0, r.jsx)(o.P3F, {
                    className: s()(m.carouselCaret, l),
                    onClick: N,
                    onMouseEnter: () => x(u.n.LEFT),
                    ignoreKeyPress: O,
                    children: (0, r.jsx)(c.Z, {
                        direction: c.Z.Directions.RIGHT,
                        height: 48,
                        width: 48,
                        'aria-label': d.intl.string(d.t.Fa8W1d)
                    })
                })
            ]
        })
    );
};
