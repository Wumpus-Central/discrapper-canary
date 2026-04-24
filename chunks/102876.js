"use strict";
n.d(t, { A: () => a });
var i = n(627968),
    r = n(137177),
    l = n(199199);
function a(e) {
    let { application: t, useComma: n = !1 } = e;
    return (0, i.jsxs)("div", {
        className: l.z,
        children: [
            (0, i.jsx)(r.A, { className: l.I, game: t, size: r.M.XSMALL }),
            (0, i.jsx)("strong", { children: `${t.name}${n ? ", " : ""}` }),
        ],
    });
}
