r.d(t, { A: () => E });
var s = r(627968),
    n = r(64700),
    l = r(503698),
    i = r.n(l),
    a = r(990078),
    o = r(27232),
    u = r(505930),
    c = r(939249),
    d = r(497685),
    h = r(996566),
    m = r(625494),
    p = r(652215),
    g = r(650583),
    f = r(375708),
    I = r(280312);
let E = n.memo(function (e) {
    let { width: t, height: r, src: l, gifSrc: E, url: R, format: _, className: y } = e,
        [S, v] = n.useState(!1),
        C = (0, h.km)((0, d.xo)(R)),
        A = C ? f.intl.string(f.t["5/NS74"]) : f.intl.string(f.t.nIH0v8),
        w = C ? o.G : u.y;
    n.useEffect(() => {
        if (!S) return;
        let e = setTimeout(() => {
            v(!1);
        }, 500);
        return () => clearTimeout(e);
    }, [S]);
    let F = (e) => {
        e.preventDefault(),
            e.stopPropagation(),
            v(!0),
            C
                ? (0, d.Tr)(R)
                : ((0, d.wg)({ url: R, src: l, gifSrc: E, width: t, height: r, format: _ }),
                  m._.dispatch(p.jej.FAVORITE_GIF));
    };
    return (0, s.jsx)(a.m, {
        text: A,
        children: (0, s.jsx)(c.D, {
            "aria-label": A,
            ignoreKeyPress: !0,
            className: i()(y, I.jj, { [I.wH]: C, [I.TV]: S }),
            onMouseDown: (e) => e.preventDefault(),
            onClick: F,
            onKeyDown: (e) => {
                (e.key === g.dh.ENTER || e.key === g.dh.SPACE) && F(e);
            },
            onDoubleClick: (e) => e.preventDefault(),
            children: (0, s.jsx)(w, { color: "currentColor", className: I.Kk, size: "custom", width: 20, height: 20 }),
        }),
    });
});
