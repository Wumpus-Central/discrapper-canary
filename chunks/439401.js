r.d(t, { A: () => E });
var s = r(627968),
    n = r(64700),
    l = r(503698),
    i = r.n(l),
    a = r(990078),
    o = r(27232),
    u = r(505930),
    d = r(939249),
    c = r(497685),
    h = r(996566),
    m = r(625494),
    p = r(652215),
    f = r(650583),
    g = r(985018),
    I = r(280312);
let E = n.memo(function (e) {
    let { width: t, height: r, src: l, gifSrc: E, url: R, format: _, className: y } = e,
        [S, C] = n.useState(!1),
        A = (0, h.km)((0, c.xo)(R)),
        v = A ? g.intl.string(g.t["5/NS74"]) : g.intl.string(g.t.nIH0v8),
        F = A ? o.G : u.y;
    n.useEffect(() => {
        if (!S) return;
        let e = setTimeout(() => {
            C(!1);
        }, 500);
        return () => clearTimeout(e);
    }, [S]);
    let w = (e) => {
        e.preventDefault(),
            e.stopPropagation(),
            C(!0),
            A
                ? (0, c.Tr)(R)
                : ((0, c.wg)({ url: R, src: l, gifSrc: E, width: t, height: r, format: _ }),
                  m._.dispatch(p.jej.FAVORITE_GIF));
    };
    return (0, s.jsx)(a.m, {
        text: v,
        children: (0, s.jsx)(d.D, {
            "aria-label": v,
            ignoreKeyPress: !0,
            className: i()(y, I.jj, { [I.wH]: A, [I.TV]: S }),
            onMouseDown: (e) => e.preventDefault(),
            onClick: w,
            onKeyDown: (e) => {
                (e.key === f.dh.ENTER || e.key === f.dh.SPACE) && w(e);
            },
            onDoubleClick: (e) => e.preventDefault(),
            children: (0, s.jsx)(F, { color: "currentColor", className: I.Kk, size: "custom", width: 20, height: 20 }),
        }),
    });
});
