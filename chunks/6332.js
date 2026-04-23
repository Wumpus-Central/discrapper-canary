"use strict";
n.d(t, { A: () => l });
var r = n(627968),
    i = n(64700),
    s = n(292666),
    a = n(985018),
    o = n(384365);
let l = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        l = i.useRef(null);
    return (0, r.jsx)("div", {
        className: o.r,
        children: (0, r.jsx)(s.k, {
            label: a.intl.string(a.t.sN3wrd),
            inputRef: l,
            name: a.intl.string(a.t.sN3wrd),
            placeholder: a.intl.string(a.t.sN3wrd),
            onChange: (e) => t(e),
            value: n.name,
        }),
    });
};
