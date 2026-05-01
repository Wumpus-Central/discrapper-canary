"use strict";
n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(834730),
    r = n(235686);
function o(e) {
    let { width: t, variant: n, className: i } = e;
    return (0, l.jsx)(a.E, {
        variant: n ?? "text-md/normal",
        children: (0, l.jsx)("div", {
            className: s()(r.z, i),
            style: null != t ? { "--skeleton-text-width": t } : void 0,
            children: (0, l.jsx)("div", { className: r.v }),
        }),
    });
}
