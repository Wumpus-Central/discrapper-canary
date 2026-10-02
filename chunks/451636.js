s.d(t, { q: () => u });
var r = s(477900);
s(582128);
var n = s(503698),
    a = s.n(n),
    i = s(457287),
    l = s(375708),
    c = s(640956);
function u(e) {
    let { className: t, currencies: s, onChange: n, selectedCurrency: u, ...o } = e;
    return (0, r.jsx)(i.f, {
        currencies: s,
        className: a()(c.p, t),
        children: (0, r.jsx)(i.A, {
            label: l.intl.string(l.t["/AAR02"]),
            selectedCurrency: u,
            currencies: s,
            onChange: n,
            ...o,
        }),
    });
}
