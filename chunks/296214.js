n.d(t, { k: () => u });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(219929),
    l = n(388032),
    c = n(137362);
let u = (e) => {
    let { className: t, submitting: n, stripePaymentMethod: i } = e,
        { card: u } = null != i ? i : {},
        d = null != u ? s.ZP.getType(u.brand) : s.ZP.Types.UNKNOWN;
    return (0, r.jsx)(a.hjN, {
        className: t,
        title: l.NW.string(l.t.mmDvV1),
        children: (0, r.jsxs)('div', {
            className: c.cardNumberWrapper,
            children: [
                (0, r.jsx)(s.ZP, {
                    className: o()(c.cardIcon, { [c.submitting]: n }),
                    type: d
                }),
                (0, r.jsx)(a.oil, {
                    value: n && null != u ? l.NW.formatToPlainString(l.t.bCynoK, u) : void 0,
                    editable: !1,
                    readOnly: !0,
                    placeholder: l.NW.string(l.t['bWMH7+']),
                    inputClassName: c.cardNumberInput
                })
            ]
        })
    });
};
