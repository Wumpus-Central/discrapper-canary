e.d(r, { A: () => d, b: () => u });
var n = e(477900);
e(582128);
var a = e(866665),
    i = e(812993),
    o = e(278416),
    s = e(62010),
    c = e(105292);
function l(t) {
    let { promotion: r, children: e } = t;
    return (0, n.jsx)(a.m, {
        position: "top",
        asContainer: !0,
        text: c.intl.formatToPlainString(c.t.cNtuKF, { offerName: r.displayName }),
        children: e,
    });
}
function u(t) {
    let { promotion: r, className: e } = t;
    return (0, n.jsx)(l, {
        promotion: r,
        children: (0, n.jsx)(i.Lp, {
            disableColor: !0,
            className: e,
            text: (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(o.TagIcon, { size: "xxs", color: "currentColor" }), c.intl.string(c.t["nb5PC/"])],
            }),
        }),
    });
}
let d = (t) => {
    let { promotion: r } = t;
    return (0, n.jsx)(l, {
        promotion: r,
        children: (0, n.jsx)(s.E, {
            type: { text: c.intl.string(c.t["nb5PC/"]) },
            variant: "expressive",
            icon: o.TagIcon,
        }),
    });
};
