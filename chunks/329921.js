r.d(i, { N: () => s });
var d = r(477900);
r(582128);
var e = r(503698),
    l = r.n(e),
    n = r(232228);
function s(a) {
    let { variant: i = "primary", size: r = "md", cutout: e, className: s, ref: t, "aria-label": u } = a,
        c = null != u;
    return (0, d.jsx)("span", {
        ref: t,
        className: l()(s, n.indicatorDot, n[i], n[r], null != e && n[`cutout-${e}`]),
        role: c ? "img" : void 0,
        "aria-label": u,
        "aria-hidden": !c || void 0,
    });
}
