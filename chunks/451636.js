n.d(t, { q: () => o });
var r = n(627968),
    a = n(503698),
    s = n.n(a),
    i = n(457287),
    l = n(375708),
    u = n(398859);
function o(e) {
    let { className: t, currencies: n, onChange: a, selectedCurrency: o, ...c } = e;
    return (0, r.jsx)(i.f, {
        currencies: n,
        className: s()(u.p, t),
        children: (0, r.jsx)(i.A, {
            label: l.intl.string(l.t["/AAR02"]),
            selectedCurrency: o,
            currencies: n,
            onChange: a,
            ...c,
        }),
    });
}
