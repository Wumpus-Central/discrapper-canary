n.d(t, { A: () => g }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(451988),
    c = n(397927),
    o = n(147925),
    d = n(863913),
    u = n(985018),
    f = n(209248);
let g = function (e) {
    let {
            items: t,
            carouselClassName: n,
            paginationCaretClassName: l,
            intervalBetweenAutomaticItemRotations: g,
            renderItem: b,
        } = e,
        m = i.useMemo(() => new a.IX(), []),
        [p, x] = i.useState(d.f.LEFT),
        [h, j] = i.useState(0),
        [O, y] = i.useState(!1),
        [v, A] = i.useState(!1),
        E = i.useCallback(
            (e, t) => {
                j((n) => {
                    let r = n + t;
                    return r < 0 ? (r = e.length - 1) : r > e.length - 1 && (r = 0), r;
                });
            },
            [j],
        ),
        N = i.useCallback(() => {
            v || E(t, 1);
        }, [E, t, v]),
        _ = i.useCallback(() => {
            v || E(t, -1);
        }, [E, t, v]);
    return (
        i.useEffect(() => {
            null != g && (O ? O && m.stop() : m.start(g, N));
        }, [O, m, g, N]),
        (0, r.jsxs)("div", {
            className: f.zr,
            onMouseEnter: () => y(!0),
            onMouseLeave: () => y(!1),
            children: [
                (0, r.jsx)(c.DUT, {
                    className: s()(f.Sx, l),
                    onClick: _,
                    onMouseEnter: () => x(d.f.RIGHT),
                    ignoreKeyPress: v,
                    children: (0, r.jsx)(o.A, {
                        direction: o.A.Directions.LEFT,
                        height: 48,
                        width: 48,
                        "aria-label": u.intl.string(u.t.FAmEgm),
                    }),
                }),
                (0, r.jsx)(d.A, {
                    step: h,
                    direction: p,
                    onAnimationStart: () => A(!0),
                    onAnimationEnd: () => A(!1),
                    className: s()(f.Dk, n),
                    children: b(t[h]),
                }),
                (0, r.jsx)(c.DUT, {
                    className: s()(f.Sx, l),
                    onClick: N,
                    onMouseEnter: () => x(d.f.LEFT),
                    ignoreKeyPress: v,
                    children: (0, r.jsx)(o.A, {
                        direction: o.A.Directions.RIGHT,
                        height: 48,
                        width: 48,
                        "aria-label": u.intl.string(u.t.Fa8W1W),
                    }),
                }),
            ],
        })
    );
};
