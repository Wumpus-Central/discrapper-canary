n.d(t, {
    k: function () {
        return u;
    }
});
var a = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(481060),
    i = n(219929),
    o = n(388032),
    c = n(100882);
let u = (e) => {
    let { className: t, submitting: n, stripePaymentMethod: r } = e,
        { card: u } = null != r ? r : {},
        d = null != u ? i.ZP.getType(u.brand) : i.ZP.Types.UNKNOWN;
    return (0, a.jsx)(s.FormSection, {
        className: t,
        title: o.intl.string(o.t.mmDvV1),
        children: (0, a.jsxs)('div', {
            className: c.cardNumberWrapper,
            children: [
                (0, a.jsx)(i.ZP, {
                    className: l()(c.cardIcon, { [c.submitting]: n }),
                    type: d
                }),
                (0, a.jsx)(s.TextInput, {
                    value: n && null != u ? o.intl.formatToPlainString(o.t.bCynoK, u) : void 0,
                    editable: !1,
                    readOnly: !0,
                    placeholder: o.intl.string(o.t['bWMH7+']),
                    inputClassName: c.cardNumberInput
                })
            ]
        })
    });
};
