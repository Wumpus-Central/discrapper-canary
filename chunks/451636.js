s.d(t, { q: () => u });
var r = s(477900);
s(582128);
var n = s(503698),
    a = s.n(n),
    l = s(457287),
    i = s(375708),
    c = s(640956);
function u(e) {
    let { className: t, currencies: s, onChange: n, selectedCurrency: u, ...o } = e;
    return (0, r.jsx)(l.f, {
        currencies: s,
        className: a()(c.p, t),
        children: (0, r.jsx)(l.A, {
            label: i.intl.string(i.t["/AAR02"]),
            selectedCurrency: u,
            currencies: s,
            onChange: n,
            ...o,
        }),
    });
}
