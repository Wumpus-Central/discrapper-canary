"use strict";
n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(834902);
function l(e) {
    let { width: t, variant: n, className: i } = e;
    return (0, r.jsx)(a.EYj, {
        variant: n ?? "text-md/normal",
        children: (0, r.jsx)("div", {
            className: s()(o.z, i),
            style: null != t ? { "--skeleton-text-width": t } : void 0,
            children: (0, r.jsx)("div", { className: o.v }),
        }),
    });
}
