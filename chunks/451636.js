n.d(t, { q: () => o });
var l = n(627968),
    a = n(503698),
    r = n.n(a),
    i = n(457287),
    s = n(375708),
    u = n(97803);
let o = (e) => {
    let { className: t, currencies: n, onChange: a, selectedCurrency: o, ...c } = e;
    return (0, l.jsx)(i.f, {
        currencies: n,
        className: r()(u.p, t),
        children: (0, l.jsx)(i.A, {
            label: s.intl.string(s.t["/AAR02"]),
            selectedCurrency: o,
            currencies: n,
            onChange: a,
            ...c,
        }),
    });
};
