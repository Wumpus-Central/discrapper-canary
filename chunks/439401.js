"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(27232),
    u = n(505930),
    c = n(939249),
    d = n(497685),
    _ = n(996566),
    f = n(203982),
    p = n(652215),
    h = n(650583),
    E = n(985018),
    m = n(280312);
let g = i.memo(function (e) {
    let { width: t, height: n, src: s, gifSrc: g, url: A, format: I, className: T } = e,
        [S, y] = i.useState(!1),
        N = (0, _.km)((0, d.xo)(A)),
        v = N ? E.intl.string(E.t["5/NS74"]) : E.intl.string(E.t.nIH0v8),
        C = N ? l.G : u.y;
    i.useEffect(() => {
        if (!S) return;
        let e = setTimeout(() => {
            y(!1);
        }, 500);
        return () => clearTimeout(e);
    }, [S]);
    let O = (e) => {
        e.preventDefault(),
            e.stopPropagation(),
            y(!0),
            N
                ? (0, d.Tr)(A)
                : ((0, d.wg)({ url: A, src: s, gifSrc: g, width: t, height: n, format: I }),
                  f._.dispatch(p.jej.FAVORITE_GIF));
    };
    return (0, r.jsx)(o.m, {
        text: v,
        children: (0, r.jsx)(c.D, {
            "aria-label": v,
            ignoreKeyPress: !0,
            className: a()(T, m.jj, { [m.wH]: N, [m.TV]: S }),
            onMouseDown: (e) => e.preventDefault(),
            onClick: O,
            onKeyDown: (e) => {
                (e.key === h.dh.ENTER || e.key === h.dh.SPACE) && O(e);
            },
            onDoubleClick: (e) => e.preventDefault(),
            children: (0, r.jsx)(C, { color: "currentColor", className: m.Kk, size: "custom", width: 20, height: 20 }),
        }),
    });
});
