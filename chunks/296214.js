n.d(t, { k: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(219929),
    o = n(388032);
let s = (e) => {
    let { className: t, submitting: n, stripePaymentMethod: s } = e,
        { card: l } = null != s ? s : {},
        c = null != l ? a.ZP.getType(l.brand) : a.ZP.Types.UNKNOWN;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)(i.oil, {
            label: o.intl.string(o.t["mmDvV+"]),
            leading: {
                type: "image",
                src: (0, a.hx)(c),
            },
            value: n && null != l ? o.intl.formatToPlainString(o.t.bCynoK, l) : void 0,
            readOnly: !0,
            placeholder: o.intl.string(o.t.bWMH78),
        }),
    });
};
