r.d(n, {
    k: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(219929),
    u = r(388032),
    c = r(100882);
let d = (e) => {
    let { className: n, submitting: r, stripePaymentMethod: a } = e,
        { card: d } = null != a ? a : {},
        f = null != d ? l.ZP.getType(d.brand) : l.ZP.Types.UNKNOWN;
    return (0, i.jsx)(s.FormSection, {
        className: n,
        title: u.intl.string(u.t.mmDvV1),
        children: (0, i.jsxs)('div', {
            className: c.cardNumberWrapper,
            children: [
                (0, i.jsx)(l.ZP, {
                    className: o()(c.cardIcon, { [c.submitting]: r }),
                    type: f
                }),
                (0, i.jsx)(s.TextInput, {
                    value: r && null != d ? u.intl.formatToPlainString(u.t.bCynoK, d) : void 0,
                    editable: !1,
                    readOnly: !0,
                    placeholder: u.intl.string(u.t['bWMH7+']),
                    inputClassName: c.cardNumberInput
                })
            ]
        })
    });
};
