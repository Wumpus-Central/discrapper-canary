s.d(t, { q: () => u });
var n = s(477900);
s(582128);
var r = s(503698),
    a = s.n(r),
    i = s(457287),
    l = s(375708),
    c = s(640956);
function u(e) {
    let { className: t, currencies: s, onChange: r, selectedCurrency: u, ...o } = e;
    return (0, n.jsx)(i.f, {
        currencies: s,
        className: a()(c.p, t),
        children: (0, n.jsx)(i.A, {
            label: l.intl.string(l.t["/AAR02"]),
            selectedCurrency: u,
            currencies: s,
            onChange: r,
            ...o,
        }),
    });
}
