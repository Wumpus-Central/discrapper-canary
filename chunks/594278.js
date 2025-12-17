n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(846519),
    o = n(481060),
    c = n(259580),
    d = n(81543),
    u = n(388032),
    g = n(248803);
let f = function (e) {
    let {
            items: t,
            carouselClassName: n,
            paginationCaretClassName: l,
            intervalBetweenAutomaticItemRotations: f,
            renderItem: m,
        } = e,
        b = i.useMemo(() => new s.Xp(), []),
        [p, h] = i.useState(d.n.LEFT),
        [x, j] = i.useState(0),
        [v, O] = i.useState(!1),
        [C, y] = i.useState(!1),
        N = i.useCallback(
            (e, t) => {
                j((n) => {
                    let r = n + t;
                    return r < 0 ? (r = e.length - 1) : r > e.length - 1 && (r = 0), r;
                });
            },
            [j],
        ),
        E = i.useCallback(() => {
            C || N(t, 1);
        }, [N, t, C]),
        I = i.useCallback(() => {
            C || N(t, -1);
        }, [N, t, C]);
    return (
        i.useEffect(() => {
            null != f && (v ? v && b.stop() : b.start(f, E));
        }, [v, b, f, E]),
        (0, r.jsxs)("div", {
            className: g.root,
            onMouseEnter: () => O(!0),
            onMouseLeave: () => O(!1),
            children: [
                (0, r.jsx)(o.P3F, {
                    className: a()(g.carouselCaret, l),
                    onClick: I,
                    onMouseEnter: () => h(d.n.RIGHT),
                    ignoreKeyPress: C,
                    children: (0, r.jsx)(c.Z, {
                        direction: c.Z.Directions.LEFT,
                        height: 48,
                        width: 48,
                        "aria-label": u.intl.string(u.t.FAmEgm),
                    }),
                }),
                (0, r.jsx)(d.Z, {
                    step: x,
                    direction: p,
                    onAnimationStart: () => y(!0),
                    onAnimationEnd: () => y(!1),
                    className: a()(g.carousel, n),
                    children: m(t[x]),
                }),
                (0, r.jsx)(o.P3F, {
                    className: a()(g.carouselCaret, l),
                    onClick: E,
                    onMouseEnter: () => h(d.n.LEFT),
                    ignoreKeyPress: C,
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
