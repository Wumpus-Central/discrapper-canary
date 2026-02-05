"use strict";
n.d(t, { a: () => d, t: () => l });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(459127);
let l = { DEFAULT: "default", DESCRIPTION: "description" },
    u = "modeDefault",
    c = "modeDisabled";
function d(e) {
    let { type: t = l.DEFAULT, className: n, disabled: i, children: d, style: _, ...f } = e,
        p = u;
    return (
        i && (p = c),
        (0, r.jsx)(s.Text, { variant: "text-sm/normal", className: a()(o[t], n, o[p]), style: _, ...f, children: d })
    );
}
d.Types = l;
