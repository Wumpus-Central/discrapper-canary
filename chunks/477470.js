n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(451988),
    o = n(939249),
    d = n(147925),
    c = n(863913),
    u = n(985018),
    m = n(666843);
let g = function (e) {
    let {
            items: t,
            carouselClassName: n,
            paginationCaretClassName: s,
            intervalBetweenAutomaticItemRotations: g,
            renderItem: h,
        } = e,
        x = l.useMemo(() => new a.IX(), []),
        [_, p] = l.useState(c.f.LEFT),
        [A, E] = l.useState(0),
        [f, j] = l.useState(!1),
        [N, I] = l.useState(!1),
        C = l.useCallback(
            (e, t) => {
                E((n) => {
                    let i = n + t;
                    return i < 0 ? (i = e.length - 1) : i > e.length - 1 && (i = 0), i;
                });
            },
            [E],
        ),
        b = l.useCallback(() => {
            N || C(t, 1);
        }, [C, t, N]),
        v = l.useCallback(() => {
            N || C(t, -1);
        }, [C, t, N]);
    return (
        l.useEffect(() => {
            null != g && (f ? x.stop() : x.start(g, b));
        }, [f, x, g, b]),
        (0, i.jsxs)("div", {
            className: m.zr,
            onMouseEnter: () => j(!0),
            onMouseLeave: () => j(!1),
            children: [
                (0, i.jsx)(o.D, {
                    className: r()(m.Sx, s),
                    onClick: v,
                    onMouseEnter: () => p(c.f.RIGHT),
                    ignoreKeyPress: N,
                    children: (0, i.jsx)(d.A, {
                        direction: d.A.Directions.LEFT,
                        height: 48,
                        width: 48,
                        "aria-label": u.intl.string(u.t.FAmEgm),
                    }),
                }),
                (0, i.jsx)(c.A, {
                    step: A,
                    direction: _,
                    onAnimationStart: () => I(!0),
                    onAnimationEnd: () => I(!1),
                    className: r()(m.Dk, n),
                    children: h(t[A]),
                }),
                (0, i.jsx)(o.D, {
                    className: r()(m.Sx, s),
                    onClick: b,
                    onMouseEnter: () => p(c.f.LEFT),
                    ignoreKeyPress: N,
                    children: (0, i.jsx)(d.A, {
                        direction: d.A.Directions.RIGHT,
                        height: 48,
                        width: 48,
                        "aria-label": u.intl.string(u.t.Fa8W1W),
                    }),
                }),
            ],
        })
    );
};
