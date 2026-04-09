"use strict";
n.d(t, { A: () => a });
var r = n(627968),
    i = n(769015),
    s = n(51151);
function a(e) {
    let { application: t, useComma: n = !1 } = e;
    return (0, r.jsxs)("div", {
        className: s.z,
        children: [
            (0, r.jsx)(i.A, { className: s.I, game: t, size: i.M.XSMALL }),
            (0, r.jsx)("strong", { children: `${t.name}${n ? ", " : ""}` }),
        ],
    });
}
