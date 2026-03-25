"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(397927),
    u = n(497685),
    c = n(996566),
    d = n(203982),
    _ = n(652215),
    f = n(650583),
    p = n(985018),
    h = n(623665);
let m = i.memo(function (e) {
    let { width: t, height: n, src: s, gifSrc: m, url: E, format: g, className: A } = e,
        [I, T] = i.useState(!1),
        S = (0, c.km)((0, u.xo)(E)),
        y = S ? p.intl.string(p.t["5/NS74"]) : p.intl.string(p.t.nIH0v8),
        v = S ? l.Gg5 : l.yA2;
    i.useEffect(() => {
        if (!I) return;
        let e = setTimeout(() => {
            T(!1);
        }, 500);
        return () => clearTimeout(e);
    }, [I]);
    let N = (e) => {
            e.preventDefault(),
                e.stopPropagation(),
                T(!0),
                S
                    ? (0, u.Tr)(E)
                    : ((0, u.wg)({ url: E, src: s, gifSrc: m, width: t, height: n, format: g }),
                      d._.dispatch(_.jej.FAVORITE_GIF));
        },
        C = (e) => {
            (e.key === f.dh.ENTER || e.key === f.dh.SPACE) && N(e);
        };
    return (0, r.jsx)(o.m, {
        text: y,
        children: (0, r.jsx)(l.DUT, {
            "aria-label": y,
            ignoreKeyPress: !0,
            className: a()(A, h.jj, { [h.wH]: S, [h.TV]: I }),
            onMouseDown: (e) => e.preventDefault(),
            onClick: N,
            onKeyDown: C,
            onDoubleClick: (e) => e.preventDefault(),
            children: (0, r.jsx)(v, { color: "currentColor", className: h.Kk, size: "custom", width: 20, height: 20 }),
        }),
    });
});
