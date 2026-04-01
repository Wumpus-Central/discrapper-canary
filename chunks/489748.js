"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(178090),
    o = n(809123);
let l = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
function u(e) {
    let { level: t, color: n } = e;
    return (0, r.jsx)(a.A, {
        className: s()(o.Rc, { [o.Ql]: "black" === n, [o.ON]: "white" === n }),
        variant: "text-md/normal",
        color: "black" === n ? "always-white" : void 0,
        children: l[t - 1],
    });
}
