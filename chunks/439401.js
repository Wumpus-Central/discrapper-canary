r.d(t, { A: () => _ });
var s = r(627968),
    l = r(64700),
    n = r(503698),
    i = r.n(n),
    o = r(990078),
    a = r(27232),
    c = r(505930),
    u = r(939249),
    d = r(497685),
    h = r(996566),
    m = r(203982),
    f = r(652215),
    p = r(650583),
    g = r(985018),
    E = r(280312);
let _ = l.memo(function (e) {
    let { width: t, height: r, src: n, gifSrc: _, url: R, format: I, className: A } = e,
        [C, v] = l.useState(!1),
        w = (0, h.km)((0, d.xo)(R)),
        S = w ? g.intl.string(g.t["5/NS74"]) : g.intl.string(g.t.nIH0v8),
        y = w ? a.G : c.y;
    l.useEffect(() => {
        if (!C) return;
        let e = setTimeout(() => {
            v(!1);
        }, 500);
        return () => clearTimeout(e);
    }, [C]);
    let x = (e) => {
        e.preventDefault(),
            e.stopPropagation(),
            v(!0),
            w
                ? (0, d.Tr)(R)
                : ((0, d.wg)({ url: R, src: n, gifSrc: _, width: t, height: r, format: I }),
                  m._.dispatch(f.jej.FAVORITE_GIF));
    };
    return (0, s.jsx)(o.m, {
        text: S,
        children: (0, s.jsx)(u.D, {
            "aria-label": S,
            ignoreKeyPress: !0,
            className: i()(A, E.jj, { [E.wH]: w, [E.TV]: C }),
            onMouseDown: (e) => e.preventDefault(),
            onClick: x,
            onKeyDown: (e) => {
                (e.key === p.dh.ENTER || e.key === p.dh.SPACE) && x(e);
            },
            onDoubleClick: (e) => e.preventDefault(),
            children: (0, s.jsx)(y, { color: "currentColor", className: E.Kk, size: "custom", width: 20, height: 20 }),
        }),
    });
});
