"use strict";
n.d(t, { A: () => l });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(826419);
function l(e) {
    let { className: t, color: n = "none", outlined: i, ...l } = e;
    return (0, r.jsx)(a.EYj, {
        color: n,
        className: s()(t, o.Qq, { [o.Vt]: i && "always-white" !== n, [o.oD]: i && "always-white" === n }),
        ...l,
    });
}
