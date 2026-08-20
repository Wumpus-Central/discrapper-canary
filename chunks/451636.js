n.d(t, { q: () => c });
var s = n(477900);
n(582128);
var r = n(503698),
    i = n.n(r),
    a = n(457287),
    l = n(375708),
    u = n(640956);
function c(e) {
    let { className: t, currencies: n, onChange: r, selectedCurrency: c, ...o } = e;
    return (0, s.jsx)(a.f, {
        currencies: n,
        className: i()(u.p, t),
        children: (0, s.jsx)(a.A, {
            label: l.intl.string(l.t["/AAR02"]),
            selectedCurrency: c,
            currencies: n,
            onChange: r,
            ...o,
        }),
    });
}
