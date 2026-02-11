"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(40672);
function o(e) {
    let { attributes: t, children: n, leaf: i, text: o } = e;
    if (i.commandName) {
        let e = a()(s.p6, { [s.BI]: "" === o.text });
        return (0, r.jsx)("span", { ...t, className: e, spellCheck: !1, children: n });
    }
    return null;
}
