n.d(t, { Z: () => l });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(388032),
    s = n(138167);
let l = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        l = i.useRef(null);
    return (0, r.jsx)("div", {
        className: s.body,
        children: (0, r.jsx)(a.oil, {
            label: o.intl.string(o.t.sN3wrd),
            inputRef: l,
            name: o.intl.string(o.t.sN3wrd),
            placeholder: o.intl.string(o.t.sN3wrd),
            onChange: (e) => t(e),
            value: n.name,
        }),
    });
};
