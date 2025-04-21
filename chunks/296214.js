n.d(t, { k: () => u });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(219929),
    l = n(388032),
    c = n(137362);
let u = (e) => {
    let { className: t, submitting: n, stripePaymentMethod: i } = e,
        { card: u } = null != i ? i : {},
        d = null != u ? s.ZP.getType(u.brand) : s.ZP.Types.UNKNOWN;
    return (0, r.jsx)(o.hjN, {
        className: t,
        title: l.intl.string(l.t.mmDvV1),
        children: (0, r.jsxs)('div', {
            className: c.cardNumberWrapper,
            children: [
                (0, r.jsx)(s.ZP, {
                    className: a()(c.cardIcon, { [c.submitting]: n }),
                    type: d
                }),
                (0, r.jsx)(o.oil, {
                    value: n && null != u ? l.intl.formatToPlainString(l.t.bCynoK, u) : void 0,
                    editable: !1,
                    readOnly: !0,
                    placeholder: l.intl.string(l.t['bWMH7+']),
                    inputClassName: c.cardNumberInput
                })
            ]
        })
    });
};
