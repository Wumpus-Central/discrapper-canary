n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(846519),
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
        f = i.useMemo(() => new a.Xp(), []),
        [h, x] = i.useState(d.n.LEFT),
        [b, j] = i.useState(0),
        [_, v] = i.useState(!1),
        [C, O] = i.useState(!1),
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
            C || y(t, 1);
        }, [y, t, C]),
        E = i.useCallback(() => {
            C || y(t, -1);
        }, [y, t, C]);
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
                    className: s()(g.carouselCaret, l),
                    onClick: E,
                    onMouseEnter: () => x(d.n.RIGHT),
                    ignoreKeyPress: C,
                    children: (0, r.jsx)(c.Z, {
                        direction: c.Z.Directions.LEFT,
                        height: 48,
                        width: 48,
                        "aria-label": u.intl.string(u.t.FAmEgo),
                    }),
                }),
                (0, r.jsx)(d.Z, {
                    step: b,
                    direction: h,
                    onAnimationStart: () => O(!0),
                    onAnimationEnd: () => O(!1),
                    className: s()(g.carousel, n),
                    children: p(t[b]),
                }),
                (0, r.jsx)(o.P3F, {
                    className: s()(g.carouselCaret, l),
                    onClick: N,
                    onMouseEnter: () => x(d.n.LEFT),
                    ignoreKeyPress: C,
                    children: (0, r.jsx)(c.Z, {
                        direction: c.Z.Directions.RIGHT,
                        height: 48,
                        width: 48,
                        "aria-label": u.intl.string(u.t.Fa8W1d),
                    }),
                }),
            ],
        })
    );
};
