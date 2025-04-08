n.d(t, { Z: () => g }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(846519),
    o = n(481060),
    c = n(259580),
    d = n(81543),
    u = n(388032),
    m = n(448533);
let g = function (e) {
    let { items: t, carouselClassName: n, paginationCaretClassName: s, intervalBetweenAutomaticItemRotations: g, renderItem: p } = e,
        h = i.useMemo(() => new l.Xp(), []),
        [f, b] = i.useState(d.n.LEFT),
        [x, j] = i.useState(0),
        [N, _] = i.useState(!1),
        [v, y] = i.useState(!1),
        C = i.useCallback(
            (e, t) => {
                j((n) => {
                    let r = n + t;
                    return r < 0 ? (r = e.length - 1) : r > e.length - 1 && (r = 0), r;
                });
            },
            [j]
        ),
        O = i.useCallback(() => {
            v || C(t, 1);
        }, [C, t, v]),
        I = i.useCallback(() => {
            v || C(t, -1);
        }, [C, t, v]);
    return (
        i.useEffect(() => {
            null != g && (N ? N && h.stop() : h.start(g, O));
        }, [N, h, g, O]),
        (0, r.jsxs)('div', {
            className: m.root,
            onMouseEnter: () => _(!0),
            onMouseLeave: () => _(!1),
            children: [
                (0, r.jsx)(o.P3F, {
                    className: a()(m.carouselCaret, s),
                    onClick: I,
                    onMouseEnter: () => b(d.n.RIGHT),
                    ignoreKeyPress: v,
                    children: (0, r.jsx)(c.Z, {
                        direction: c.Z.Directions.LEFT,
                        height: 48,
                        width: 48,
                        'aria-label': u.NW.string(u.t.FAmEgo)
                    })
                }),
                (0, r.jsx)(d.Z, {
                    step: x,
                    direction: f,
                    onAnimationStart: () => y(!0),
                    onAnimationEnd: () => y(!1),
                    className: a()(m.carousel, n),
                    children: p(t[x])
                }),
                (0, r.jsx)(o.P3F, {
                    className: a()(m.carouselCaret, s),
                    onClick: O,
                    onMouseEnter: () => b(d.n.LEFT),
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
