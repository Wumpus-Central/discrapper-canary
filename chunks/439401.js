"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(397927),
    u = n(497685),
    c = n(996566),
    d = n(203982),
    _ = n(652215),
    f = n(985018),
    p = n(623665);
let h = i.memo(function (e) {
    let { width: t, height: n, src: a, gifSrc: h, url: m, format: g, className: E } = e,
        [A, I] = i.useState(!1),
        T = (0, c.km)((0, u.xo)(m)),
        y = T ? f.intl.string(f.t["5/NS74"]) : f.intl.string(f.t.nIH0v8),
        S = T ? l.Gg5 : l.yA2;
    i.useEffect(() => {
        if (!A) return;
        let e = setTimeout(() => {
            I(!1);
        }, 500);
        return () => clearTimeout(e);
    }, [A]);
    let v = (e) => {
        e.preventDefault(),
            e.stopPropagation(),
            I(!0),
            T
                ? (0, u.Tr)(m)
                : ((0, u.wg)({ url: m, src: a, gifSrc: h, width: t, height: n, format: g }),
                  d._.dispatch(_.jej.FAVORITE_GIF));
    };
    return (0, r.jsx)(o.m, {
        text: y,
        children: (0, r.jsx)(l.sqX, {
            "aria-label": y,
            className: s()(E, p.jj, { [p.wH]: T, [p.TV]: A }),
            onMouseDown: (e) => e.preventDefault(),
            onClick: v,
            onDoubleClick: (e) => e.preventDefault(),
            children: (0, r.jsx)(S, { color: "currentColor", className: p.Kk, size: "custom", width: 20, height: 20 }),
        }),
    });
});
