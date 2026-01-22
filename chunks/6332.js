n.d(t, {
    A: () => l,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(985018),
    o = n(893330);
let l = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        l = i.useRef(null);
    return (0, r.jsx)("div", {
        className: o.r,
        children: (0, r.jsx)(a.ksK, {
            label: s.intl.string(s.t.sN3wrd),
            inputRef: l,
            name: s.intl.string(s.t.sN3wrd),
            placeholder: s.intl.string(s.t.sN3wrd),
            onChange: (e) => t(e),
            value: n.name,
        }),
    });
};
