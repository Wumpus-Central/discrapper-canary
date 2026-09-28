t.d(s, { q: () => u });
var n = t(477900);
t(582128);
var r = t(503698),
    a = t.n(r),
    i = t(457287),
    l = t(375708),
    c = t(640956);
function u(e) {
    let { className: s, currencies: t, onChange: r, selectedCurrency: u, ...o } = e;
    return (0, n.jsx)(i.f, {
        currencies: t,
        className: a()(c.p, s),
        children: (0, n.jsx)(i.A, {
            label: l.intl.string(l.t["/AAR02"]),
            selectedCurrency: u,
            currencies: t,
            onChange: r,
            ...o,
        }),
    });
}
