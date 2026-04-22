n.d(t, { q: () => u });
var a = n(627968),
    r = n(503698),
    l = n.n(r),
    i = n(821189),
    s = n(985018),
    o = n(398859);
let u = (e) => {
    let { className: t, currencies: n, onChange: r, selectedCurrency: u, ...c } = e;
    return (0, a.jsx)(i.f, {
        currencies: n,
        className: l()(o.p, t),
        children: (0, a.jsx)(i.A, {
            label: s.intl.string(s.t["/AAR02"]),
            selectedCurrency: u,
            currencies: n,
            onChange: r,
            ...c,
        }),
    });
};
