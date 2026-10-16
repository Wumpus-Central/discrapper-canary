n.d(e, { A: () => p, b: () => u });
var r = n(477900);
n(582128);
var i = n(866665),
    s = n(812993),
    a = n(278416),
    o = n(62010),
    c = n(105292);
function l(t) {
    let { promotion: e, children: n } = t;
    return (0, r.jsx)(i.m, {
        position: "top",
        asContainer: !0,
        text: c.intl.formatToPlainString(c.t.cNtuKF, { offerName: e.displayName }),
        children: n,
    });
}
function u(t) {
    let { promotion: e, className: n } = t;
    return (0, r.jsx)(l, {
        promotion: e,
        children: (0, r.jsx)(s.Lp, {
            disableColor: !0,
            className: n,
            text: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(a.TagIcon, { size: "xxs", color: "currentColor" }), c.intl.string(c.t["nb5PC/"])],
            }),
        }),
    });
}
let p = (t) => {
    let { promotion: e } = t;
    return (0, r.jsx)(l, {
        promotion: e,
        children: (0, r.jsx)(o.E, {
            type: { text: c.intl.string(c.t["nb5PC/"]) },
            variant: "expressive",
            icon: a.TagIcon,
        }),
    });
};
