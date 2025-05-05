n.d(t, { Z: () => l });
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(388032),
    s = n(581278);
let l = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        l = i.useRef(null);
    return (0, r.jsx)('div', {
        className: s.body,
        children: (0, r.jsx)(o.hjN, {
            title: a.intl.string(a.t.sN3wra),
            children: (0, r.jsx)(o.oil, {
                inputRef: l,
                name: a.intl.string(a.t.sN3wra),
                placeholder: a.intl.string(a.t.sN3wra),
                onChange: (e) => t(e),
                value: n.name
            })
        })
    });
};
