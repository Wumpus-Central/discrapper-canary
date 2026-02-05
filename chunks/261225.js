"use strict";
n.d(t, { A: () => l, M: () => o });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(266341);
let o = 6,
    l = (e) => {
        let { columns: t = 3, children: n } = e,
            i = Math.max(1, Math.min(o, Math.floor(t)));
        return (0, r.jsx)("div", { className: a()(s.grid, s[`columns${i}`]), children: n });
    };
