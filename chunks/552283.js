"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(834730),
    a = n(235686);
function o(e) {
    let { width: t, variant: n, className: l } = e;
    return (0, i.jsx)(r.E, {
        variant: n ?? "text-md/normal",
        children: (0, i.jsx)("div", {
            className: s()(a.z, l),
            style: null != t ? { "--skeleton-text-width": t } : void 0,
            children: (0, i.jsx)("div", { className: a.v }),
        }),
    });
}
