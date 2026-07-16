"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(27232),
    o = n(505930),
    d = n(866665),
    c = n(939249),
    u = n(497685),
    _ = n(996566),
    E = n(625494),
    A = n(652215),
    h = n(650583),
    I = n(375708),
    f = n(280312);
let p = r.memo(function (e) {
    let { width: t, height: n, src: a, gifSrc: p, url: T, format: m, className: g } = e,
        [S, N] = r.useState(!1),
        C = (0, _.km)((0, u.xo)(T)),
        R = C ? I.intl.string(I.t["5/NS74"]) : I.intl.string(I.t.nIH0v8),
        O = C ? l.G : o.y;
    function L(e) {
        e.preventDefault(),
            e.stopPropagation(),
            N(!0),
            C
                ? (0, u.Tr)(T)
                : ((0, u.wg)({ url: T, src: a, gifSrc: p, width: t, height: n, format: m }),
                  E._.dispatch(A.jej.FAVORITE_GIF));
    }
    return (
        r.useEffect(() => {
            if (!S) return;
            let e = setTimeout(() => {
                N(!1);
            }, 500);
            return () => clearTimeout(e);
        }, [S]),
        (0, i.jsx)(d.m, {
            text: R,
            children: (0, i.jsx)(c.D, {
                "aria-label": R,
                ignoreKeyPress: !0,
                className: s()(g, f.jj, { [f.wH]: C, [f.TV]: S }),
                onMouseDown: (e) => e.preventDefault(),
                onClick: L,
                onKeyDown: function (e) {
                    (e.key === h.dh.ENTER || e.key === h.dh.SPACE) && L(e);
                },
                onDoubleClick: (e) => e.preventDefault(),
                children: (0, i.jsx)(O, {
                    color: "currentColor",
                    className: f.Kk,
                    size: "custom",
                    width: 20,
                    height: 20,
                }),
            }),
        })
    );
});
