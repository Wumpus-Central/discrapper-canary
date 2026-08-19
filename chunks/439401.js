r.d(t, { A: () => E });
var n = r(477900),
    s = r(582128),
    l = r(503698),
    i = r.n(l),
    a = r(27232),
    o = r(505930),
    u = r(866665),
    c = r(939249),
    d = r(497685),
    h = r(996566),
    m = r(625494),
    p = r(652215),
    g = r(650583),
    f = r(375708),
    I = r(47299);
let E = s.memo(function (e) {
    let { width: t, height: r, src: l, gifSrc: E, url: R, format: _, className: y } = e,
        [S, v] = s.useState(!1),
        C = (0, h.km)((0, d.xo)(R)),
        A = C ? f.intl.string(f.t["5/NS74"]) : f.intl.string(f.t.nIH0v8),
        w = C ? a.StarIcon : o.y;
    function x(e) {
        e.preventDefault(),
            e.stopPropagation(),
            v(!0),
            C
                ? (0, d.Tr)(R)
                : ((0, d.wg)({ url: R, src: l, gifSrc: E, width: t, height: r, format: _ }),
                  m._.dispatch(p.jej.FAVORITE_GIF));
    }
    return (
        s.useEffect(() => {
            if (!S) return;
            let e = setTimeout(() => {
                v(!1);
            }, 500);
            return () => clearTimeout(e);
        }, [S]),
        (0, n.jsx)(u.m, {
            text: A,
            children: (0, n.jsx)(c.D, {
                "aria-label": A,
                ignoreKeyPress: !0,
                className: i()(y, I.jj, { [I.wH]: C, [I.TV]: S }),
                onMouseDown: (e) => e.preventDefault(),
                onClick: x,
                onKeyDown: function (e) {
                    (e.key === g.dh.ENTER || e.key === g.dh.SPACE) && x(e);
                },
                onDoubleClick: (e) => e.preventDefault(),
                children: (0, n.jsx)(w, {
                    color: "currentColor",
                    className: I.Kk,
                    size: "custom",
                    width: 20,
                    height: 20,
                }),
            }),
        })
    );
});
