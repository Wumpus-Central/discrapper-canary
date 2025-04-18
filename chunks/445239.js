n.d(t, { Z: () => l });
var r = n(200651),
    i = n(192379),
    a = n(481060),
    o = n(388032),
    s = n(581278);
let l = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        l = i.useRef(null);
    return (0, r.jsx)('div', {
        className: s.body,
        children: (0, r.jsx)(a.hjN, {
            title: o.NW.string(o.t.sN3wra),
            children: (0, r.jsx)(a.oil, {
                inputRef: l,
                name: o.NW.string(o.t.sN3wra),
                placeholder: o.NW.string(o.t.sN3wra),
                onChange: (e) => t(e),
                value: n.name
            })
        })
    });
};
