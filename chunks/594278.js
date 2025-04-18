n.d(t, { Z: () => g }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(846519),
    o = n(481060),
    c = n(259580),
    d = n(81543),
    u = n(388032),
    m = n(63014);
let g = function (e) {
    let { items: t, carouselClassName: n, paginationCaretClassName: s, intervalBetweenAutomaticItemRotations: g, renderItem: p } = e,
        h = i.useMemo(() => new a.Xp(), []),
        [f, x] = i.useState(d.n.LEFT),
        [b, j] = i.useState(0),
        [N, _] = i.useState(!1),
        [v, O] = i.useState(!1),
        C = i.useCallback(
            (e, t) => {
                j((n) => {
                    let r = n + t;
                    return r < 0 ? (r = e.length - 1) : r > e.length - 1 && (r = 0), r;
                });
            },
            [j]
        ),
        y = i.useCallback(() => {
            v || C(t, 1);
        }, [C, t, v]),
        I = i.useCallback(() => {
            v || C(t, -1);
        }, [C, t, v]);
    return (
        i.useEffect(() => {
            null != g && (N ? N && h.stop() : h.start(g, y));
        }, [N, h, g, y]),
        (0, r.jsxs)('div', {
            className: m.root,
            onMouseEnter: () => _(!0),
            onMouseLeave: () => _(!1),
            children: [
                (0, r.jsx)(o.P3F, {
                    className: l()(m.carouselCaret, s),
                    onClick: I,
                    onMouseEnter: () => x(d.n.RIGHT),
                    ignoreKeyPress: v,
                    children: (0, r.jsx)(c.Z, {
                        direction: c.Z.Directions.LEFT,
                        height: 48,
                        width: 48,
                        'aria-label': u.NW.string(u.t.FAmEgo)
                    })
                }),
                (0, r.jsx)(d.Z, {
                    step: b,
                    direction: f,
                    onAnimationStart: () => O(!0),
                    onAnimationEnd: () => O(!1),
                    className: l()(m.carousel, n),
                    children: p(t[b])
                }),
                (0, r.jsx)(o.P3F, {
                    className: l()(m.carouselCaret, s),
                    onClick: y,
                    onMouseEnter: () => x(d.n.LEFT),
                    ignoreKeyPress: v,
                    children: (0, r.jsx)(c.Z, {
                        direction: c.Z.Directions.RIGHT,
                        height: 48,
                        width: 48,
                        'aria-label': u.NW.string(u.t.Fa8W1d)
                    })
                })
            ]
        })
    );
};
