"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(451988),
    o = n(397927),
    d = n(147925),
    c = n(863913),
    u = n(985018),
    m = n(209248);
let g = function (e) {
    let {
            items: t,
            carouselClassName: n,
            paginationCaretClassName: l,
            intervalBetweenAutomaticItemRotations: g,
            renderItem: x,
        } = e,
        h = s.useMemo(() => new a.IX(), []),
        [_, p] = s.useState(c.f.LEFT),
        [A, f] = s.useState(0),
        [j, N] = s.useState(!1),
        [E, b] = s.useState(!1),
        T = s.useCallback(
            (e, t) => {
                f((n) => {
                    let i = n + t;
                    return i < 0 ? (i = e.length - 1) : i > e.length - 1 && (i = 0), i;
                });
            },
            [f],
        ),
        C = s.useCallback(() => {
            E || T(t, 1);
        }, [T, t, E]),
        I = s.useCallback(() => {
            E || T(t, -1);
        }, [T, t, E]);
    return (
        s.useEffect(() => {
            null != g && (j ? j && h.stop() : h.start(g, C));
        }, [j, h, g, C]),
        (0, i.jsxs)("div", {
            className: m.zr,
            onMouseEnter: () => N(!0),
            onMouseLeave: () => N(!1),
            children: [
                (0, i.jsx)(o.DUT, {
                    className: r()(m.Sx, l),
                    onClick: I,
                    onMouseEnter: () => p(c.f.RIGHT),
                    ignoreKeyPress: E,
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
                    onAnimationStart: () => b(!0),
                    onAnimationEnd: () => b(!1),
                    className: r()(m.Dk, n),
                    children: x(t[A]),
                }),
                (0, i.jsx)(o.DUT, {
                    className: r()(m.Sx, l),
                    onClick: C,
                    onMouseEnter: () => p(c.f.LEFT),
                    ignoreKeyPress: E,
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
