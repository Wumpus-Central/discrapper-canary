n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(846519),
    o = n(481060),
    c = n(259580),
    d = n(81543),
    u = n(388032),
    g = n(858063);
let m = function (e) {
    let {
            items: t,
            carouselClassName: n,
            paginationCaretClassName: l,
            intervalBetweenAutomaticItemRotations: m,
            renderItem: p,
        } = e,
        f = i.useMemo(() => new s.Xp(), []),
        [h, b] = i.useState(d.n.LEFT),
        [x, j] = i.useState(0),
        [_, v] = i.useState(!1),
        [O, C] = i.useState(!1),
        y = i.useCallback(
            (e, t) => {
                j((n) => {
                    let r = n + t;
                    return r < 0 ? (r = e.length - 1) : r > e.length - 1 && (r = 0), r;
                });
            },
            [j],
        ),
        N = i.useCallback(() => {
            O || y(t, 1);
        }, [y, t, O]),
        E = i.useCallback(() => {
            O || y(t, -1);
        }, [y, t, O]);
    return (
        i.useEffect(() => {
            null != m && (_ ? _ && f.stop() : f.start(m, N));
        }, [_, f, m, N]),
        (0, r.jsxs)("div", {
            className: g.root,
            onMouseEnter: () => v(!0),
            onMouseLeave: () => v(!1),
            children: [
                (0, r.jsx)(o.P3F, {
                    className: a()(g.carouselCaret, l),
                    onClick: E,
                    onMouseEnter: () => b(d.n.RIGHT),
                    ignoreKeyPress: O,
                    children: (0, r.jsx)(c.Z, {
                        direction: c.Z.Directions.LEFT,
                        height: 48,
                        width: 48,
                        "aria-label": u.intl.string(u.t.FAmEgm),
                    }),
                }),
                (0, r.jsx)(d.Z, {
                    step: x,
                    direction: h,
                    onAnimationStart: () => C(!0),
                    onAnimationEnd: () => C(!1),
                    className: a()(g.carousel, n),
                    children: p(t[x]),
                }),
                (0, r.jsx)(o.P3F, {
                    className: a()(g.carouselCaret, l),
                    onClick: N,
                    onMouseEnter: () => b(d.n.LEFT),
                    ignoreKeyPress: O,
                    children: (0, r.jsx)(c.Z, {
                        direction: c.Z.Directions.RIGHT,
                        height: 48,
                        width: 48,
                        "aria-label": u.intl.string(u.t.Fa8W1W),
                    }),
                }),
            ],
        })
    );
};
