n.d(t, { Z: () => l });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(388032),
    s = n(138167);
let l = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        l = i.useRef(null);
    return (0, r.jsx)("div", {
        className: s.body,
        children: (0, r.jsx)(a.oil, {
            label: o.intl.string(o.t.sN3wra),
            inputRef: l,
            name: o.intl.string(o.t.sN3wra),
            placeholder: o.intl.string(o.t.sN3wra),
            onChange: (e) => t(e),
            value: n.name,
        }),
    });
};
