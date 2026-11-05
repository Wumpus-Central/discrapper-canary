var r = n(477900);
n(582128);
var i = n(355522),
    a = n(352224),
    l = n(834730),
    s = n(866665),
    u = n(812745),
    o = n(113072);
n.d(
    t,
    {},
    {
        S: function (e) {
            let { label: t, icon: n, tooltipText: c } = e,
                d =
                    null != n
                        ? n === u.Be.BANK
                            ? (0, r.jsx)(i.BankIcon, { className: o.s7 })
                            : n === u.Be.IDEAL
                              ? (0, r.jsx)(a.PaymentTypeIDealWeroIcon, { className: o.s7 })
                              : (0, r.jsx)("img", { src: (0, u.Nj)(n), alt: "", className: o.s7 })
                        : void 0,
                m = (0, r.jsxs)("div", {
                    className: o.kL,
                    children: [d, (0, r.jsx)(l.E, { variant: "body-md/normal", className: o.Pf, children: t })],
                });
            return null != c ? (0, r.jsx)(s.m, { text: c, asContainer: !0, children: m }) : m;
        },
    },
);
