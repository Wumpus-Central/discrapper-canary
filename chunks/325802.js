var n = e(477900);
e(582128);
var i = e(866665),
    a = e(805251),
    o = e(278416),
    c = e(792996);
function s(t) {
    let { promotion: r, children: e } = t;
    return (0, n.jsx)(i.m, {
        position: "top",
        asContainer: !0,
        text: c.intl.formatToPlainString(c.t.cNtuKF, { offerName: r.displayName }),
        children: e,
    });
}
e.d(
    r,
    {},
    {
        A: (t) => {
            let { promotion: r } = t;
            return (0, n.jsx)(s, {
                promotion: r,
                children: (0, n.jsx)(a.E, {
                    type: { text: c.intl.string(c.t["nb5PC/"]) },
                    variant: "expressive",
                    icon: o.TagIcon,
                }),
            });
        },
        b: function (t) {
            let { promotion: r } = t;
            return (0, n.jsx)(s, {
                promotion: r,
                children: (0, n.jsx)(a.E, {
                    type: { text: c.intl.string(c.t["nb5PC/"]) },
                    variant: "inverted",
                    icon: o.TagIcon,
                }),
            });
        },
    },
);
