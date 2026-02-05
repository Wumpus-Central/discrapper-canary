"use strict";
n.d(t, { P: () => s, sM: () => o });
var r = n(627968),
    i = n(862019);
let a = "popover-portal";
function s() {
    return (0, r.jsx)("div", { id: a });
}
function o(e) {
    let { ownerDocument: t = document, ...n } = e,
        s = t.getElementById(a);
    return (0, r.jsx)(i.XF, { ...n, root: s });
}
