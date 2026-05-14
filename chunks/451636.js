n.d(t, { q: () => o });
var r = n(627968),
    a = n(503698),
    l = n.n(a),
    i = n(457287),
    s = n(375708),
    u = n(97803);
let o = (e) => {
    let { className: t, currencies: n, onChange: a, selectedCurrency: o, ...c } = e;
    return (0, r.jsx)(i.f, {
        currencies: n,
        className: l()(u.p, t),
        children: (0, r.jsx)(i.A, {
            label: s.intl.string(s.t["/AAR02"]),
            selectedCurrency: o,
            currencies: n,
            onChange: a,
            ...c,
        }),
    });
};
