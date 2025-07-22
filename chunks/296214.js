n.d(t, { k: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(219929),
    c = n(388032),
    u = n(137362);
let d = (e) => {
    let { className: t, submitting: n, stripePaymentMethod: i } = e,
        { card: d } = null != i ? i : {},
        f = null != d ? l.ZP.getType(d.brand) : l.ZP.Types.UNKNOWN;
    return (0, r.jsx)(s.hjN, {
        className: t,
        title: c.intl.string(c.t.mmDvV1),
        children: (0, r.jsxs)('div', {
            className: u.cardNumberWrapper,
            children: [
                (0, r.jsx)(l.ZP, {
                    className: a()(u.cardIcon, { [u.submitting]: n }),
                    type: f
                }),
                (0, r.jsx)(o.Is, {
                    value: n && null != d ? c.intl.formatToPlainString(c.t.bCynoK, d) : void 0,
                    editable: !1,
                    readOnly: !0,
                    placeholder: c.intl.string(c.t['bWMH7+']),
                    inputClassName: u.cardNumberInput
                })
            ]
        })
    });
};
