"use strict";
n.d(t, { A: () => d, V: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(486020),
    o = n(371794),
    l = n(512038),
    u = (function (e) {
        return (e[(e.SMALL = 40)] = "SMALL"), (e[(e.MEDIUM = 66)] = "MEDIUM"), (e[(e.LARGE = 128)] = "LARGE"), e;
    })({});
let c = { 40: l.EX, 66: l.Y, 128: l.as },
    d = (e) => {
        let t,
            { application: n, size: i, asset: u, className: d } = e;
        return (
            (t = null != u ? (0, o.YE)(n.id, u, i) : a.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, size: i })),
            (0, r.jsx)("img", { alt: "", src: t, className: s()(l.Kk, c[i], d) })
        );
    };
