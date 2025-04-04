n.d(t, { Z: () => l });
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(388032),
    s = n(581278);
let l = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        l = i.useRef(null);
    return (0, r.jsx)('div', {
        className: s.body,
        children: (0, r.jsx)(o.hjN, {
            title: a.NW.string(a.t.sN3wra),
            children: (0, r.jsx)(o.oil, {
                inputRef: l,
                name: a.NW.string(a.t.sN3wra),
                placeholder: a.NW.string(a.t.sN3wra),
                onChange: (e) => t(e),
                value: n.name
            })
        })
    });
};
