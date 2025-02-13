n.d(t, { k: () => c });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(219929),
    l = n(388032),
    u = n(977244);
let c = (e) => {
    let { className: t, submitting: n, stripePaymentMethod: r } = e,
        { card: c } = null != r ? r : {},
        d = null != c ? o.ZP.getType(c.brand) : o.ZP.Types.UNKNOWN;
    return (0, i.jsx)(s.hjN, {
        className: t,
        title: l.intl.string(l.t.mmDvV1),
        children: (0, i.jsxs)('div', {
            className: u.cardNumberWrapper,
            children: [
                (0, i.jsx)(o.ZP, {
                    className: a()(u.cardIcon, { [u.submitting]: n }),
                    type: d
                }),
                (0, i.jsx)(s.oil, {
                    value: n && null != c ? l.intl.formatToPlainString(l.t.bCynoK, c) : void 0,
                    editable: !1,
                    readOnly: !0,
                    placeholder: l.intl.string(l.t['bWMH7+']),
                    inputClassName: u.cardNumberInput
                })
            ]
        })
    });
};
