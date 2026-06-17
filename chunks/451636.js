"use strict";
n.d(t, { q: () => u });
var i = n(627968),
    r = n(503698),
    s = n.n(r),
    a = n(457287),
    o = n(375708),
    l = n(398859);
let u = (e) => {
    let { className: t, currencies: n, onChange: r, selectedCurrency: u, ...c } = e;
    return (0, i.jsx)(a.f, {
        currencies: n,
        className: s()(l.p, t),
        children: (0, i.jsx)(a.A, {
            label: o.intl.string(o.t["/AAR02"]),
            selectedCurrency: u,
            currencies: n,
            onChange: r,
            ...c,
        }),
    });
};
