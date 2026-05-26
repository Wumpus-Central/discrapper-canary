"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(27232),
    u = n(505930),
    c = n(939249),
    d = n(497685),
    _ = n(996566),
    f = n(625494),
    h = n(652215),
    p = n(650583),
    E = n(375708),
    m = n(280312);
let g = r.memo(function (e) {
    let { width: t, height: n, src: s, gifSrc: g, url: A, format: I, className: T } = e,
        [S, N] = r.useState(!1),
        y = (0, _.km)((0, d.xo)(A)),
        C = y ? E.intl.string(E.t["5/NS74"]) : E.intl.string(E.t.nIH0v8),
        v = y ? l.G : u.y;
    r.useEffect(() => {
        if (!S) return;
        let e = setTimeout(() => {
            N(!1);
        }, 500);
        return () => clearTimeout(e);
    }, [S]);
    let O = (e) => {
        e.preventDefault(),
            e.stopPropagation(),
            N(!0),
            y
                ? (0, d.Tr)(A)
                : ((0, d.wg)({ url: A, src: s, gifSrc: g, width: t, height: n, format: I }),
                  f._.dispatch(h.jej.FAVORITE_GIF));
    };
    return (0, i.jsx)(o.m, {
        text: C,
        children: (0, i.jsx)(c.D, {
            "aria-label": C,
            ignoreKeyPress: !0,
            className: a()(T, m.jj, { [m.wH]: y, [m.TV]: S }),
            onMouseDown: (e) => e.preventDefault(),
            onClick: O,
            onKeyDown: (e) => {
                (e.key === p.dh.ENTER || e.key === p.dh.SPACE) && O(e);
            },
            onDoubleClick: (e) => e.preventDefault(),
            children: (0, i.jsx)(v, { color: "currentColor", className: m.Kk, size: "custom", width: 20, height: 20 }),
        }),
    });
});
