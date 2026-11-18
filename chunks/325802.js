var r = n(477900);
n(582128);
var l = n(866665),
    i = n(805251),
    o = n(278416),
    a = n(792996);
function u(t) {
    let { promotion: e, children: n } = t;
    return (0, r.jsx)(l.m, {
        position: "top",
        asContainer: !0,
        text: a.intl.formatToPlainString(a.t.cNtuKF, { offerName: e.displayName }),
        children: n,
    });
}
n.d(
    e,
    {},
    {
        A: (t) => {
            let { promotion: e } = t;
            return (0, r.jsx)(u, {
                promotion: e,
                children: (0, r.jsx)(i.E, {
                    type: { text: a.intl.string(a.t["nb5PC/"]) },
                    variant: "expressive",
                    icon: o.TagIcon,
                }),
            });
        },
        b: function (t) {
            let { promotion: e } = t;
            return (0, r.jsx)(u, {
                promotion: e,
                children: (0, r.jsx)(i.E, {
                    type: { text: a.intl.string(a.t["nb5PC/"]) },
                    variant: "inverted",
                    icon: o.TagIcon,
                }),
            });
        },
    },
);
