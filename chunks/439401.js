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
    h = n(625494),
    f = n(652215),
    p = n(650583),
    E = n(375708),
    m = n(280312);
let g = r.memo(function (e) {
    let { width: t, height: n, src: s, gifSrc: g, url: A, format: I, className: T } = e,
        [S, y] = r.useState(!1),
        C = (0, _.km)((0, d.xo)(A)),
        N = C ? E.intl.string(E.t["5/NS74"]) : E.intl.string(E.t.nIH0v8),
        v = C ? l.G : u.y;
    function R(e) {
        e.preventDefault(),
            e.stopPropagation(),
            y(!0),
            C
                ? (0, d.Tr)(A)
                : ((0, d.wg)({ url: A, src: s, gifSrc: g, width: t, height: n, format: I }),
                  h._.dispatch(f.jej.FAVORITE_GIF));
    }
    return (
        r.useEffect(() => {
            if (!S) return;
            let e = setTimeout(() => {
                y(!1);
            }, 500);
            return () => clearTimeout(e);
        }, [S]),
        (0, i.jsx)(o.m, {
            text: N,
            children: (0, i.jsx)(c.D, {
                "aria-label": N,
                ignoreKeyPress: !0,
                className: a()(T, m.jj, { [m.wH]: C, [m.TV]: S }),
                onMouseDown: (e) => e.preventDefault(),
                onClick: R,
                onKeyDown: function (e) {
                    (e.key === p.dh.ENTER || e.key === p.dh.SPACE) && R(e);
                },
                onDoubleClick: (e) => e.preventDefault(),
                children: (0, i.jsx)(v, {
                    color: "currentColor",
                    className: m.Kk,
                    size: "custom",
                    width: 20,
                    height: 20,
                }),
            }),
        })
    );
});
