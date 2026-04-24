n.d(t, { q: () => c });
var a = n(627968),
    r = n(503698),
    l = n.n(r),
    i = n(457287),
    s = n(985018),
    o = n(97803);
let c = (e) => {
    let { className: t, currencies: n, onChange: r, selectedCurrency: c, ...d } = e;
    return (0, a.jsx)(i.f, {
        currencies: n,
        className: l()(o.p, t),
        children: (0, a.jsx)(i.A, {
            label: s.intl.string(s.t["/AAR02"]),
            selectedCurrency: c,
            currencies: n,
            onChange: r,
            ...d,
        }),
    });
};
