n.d(t, { q: () => u });
var r = n(627968),
    a = n(503698),
    s = n.n(a),
    l = n(457287),
    i = n(985018),
    c = n(97803);
let u = (e) => {
    let { className: t, currencies: n, onChange: a, selectedCurrency: u, ...o } = e;
    return (0, r.jsx)(l.f, {
        currencies: n,
        className: s()(c.p, t),
        children: (0, r.jsx)(l.A, {
            label: i.intl.string(i.t["/AAR02"]),
            selectedCurrency: u,
            currencies: n,
            onChange: a,
            ...o,
        }),
    });
};
