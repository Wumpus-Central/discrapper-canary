r.d(e, { A: () => u, b: () => l });
var n = r(477900);
r(582128);
var i = r(866665),
    a = r(62010),
    o = r(278416),
    c = r(105292);
function s(t) {
    let { promotion: e, children: r } = t;
    return (0, n.jsx)(i.m, {
        position: "top",
        asContainer: !0,
        text: c.intl.formatToPlainString(c.t.cNtuKF, { offerName: e.displayName }),
        children: r,
    });
}
function l(t) {
    let { promotion: e } = t;
    return (0, n.jsx)(s, {
        promotion: e,
        children: (0, n.jsx)(a.E, {
            type: { text: c.intl.string(c.t["nb5PC/"]) },
            variant: "inverted",
            icon: o.TagIcon,
        }),
    });
}
let u = (t) => {
    let { promotion: e } = t;
    return (0, n.jsx)(s, {
        promotion: e,
        children: (0, n.jsx)(a.E, {
            type: { text: c.intl.string(c.t["nb5PC/"]) },
            variant: "expressive",
            icon: o.TagIcon,
        }),
    });
};
