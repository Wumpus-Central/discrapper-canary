"use strict";
n.d(t, { q: () => u });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(821189),
    o = n(985018),
    l = n(97803);
let u = (e) => {
    let { className: t, currencies: n, onChange: i, selectedCurrency: u, ...c } = e;
    return (0, r.jsx)(a.f, {
        currencies: n,
        className: s()(l.p, t),
        children: (0, r.jsx)(a.A, {
            label: o.intl.string(o.t["/AAR02"]),
            selectedCurrency: u,
            currencies: n,
            onChange: i,
            ...c,
        }),
    });
};
