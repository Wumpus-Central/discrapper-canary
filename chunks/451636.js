n.d(t, { q: () => o });
var a = n(627968),
    r = n(503698),
    l = n.n(r),
    i = n(457287),
    s = n(375708),
    u = n(97803);
function o(e) {
    let { className: t, currencies: n, onChange: r, selectedCurrency: o, ...c } = e;
    return (0, a.jsx)(i.f, {
        currencies: n,
        className: l()(u.p, t),
        children: (0, a.jsx)(i.A, {
            label: s.intl.string(s.t["/AAR02"]),
            selectedCurrency: o,
            currencies: n,
            onChange: r,
            ...c,
        }),
    });
}
