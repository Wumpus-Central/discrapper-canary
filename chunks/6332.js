n.d(t, { A: () => o });
var l = n(627968),
    i = n(64700),
    a = n(292666),
    r = n(985018),
    s = n(384365);
let o = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        o = i.useRef(null);
    return (0, l.jsx)("div", {
        className: s.r,
        children: (0, l.jsx)(a.k, {
            label: r.intl.string(r.t.sN3wrd),
            inputRef: o,
            name: r.intl.string(r.t.sN3wrd),
            placeholder: r.intl.string(r.t.sN3wrd),
            onChange: (e) => t(e),
            value: n.name,
        }),
    });
};
