"use strict";
n.d(t, { A: () => _, V: () => c });
var r,
    i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    o = n(486020),
    l = n(371794),
    u = n(512038),
    c = (((r = {})[(r.SMALL = 40)] = "SMALL"), (r[(r.MEDIUM = 66)] = "MEDIUM"), (r[(r.LARGE = 128)] = "LARGE"), r);
let d = { 40: u.EX, 66: u.Y, 128: u.as },
    _ = (e) => {
        let t,
            { application: n, size: r, asset: s, className: c } = e;
        return (
            (t = null != s ? (0, l.YE)(n.id, s, r) : o.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, size: r })),
            (0, i.jsx)("img", { alt: "", src: t, className: a()(u.Kk, d[r], c) })
        );
    };
