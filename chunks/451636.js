n.d(t, { q: () => o });
var r = n(477900);
n(582128);
var i = n(503698),
    a = n.n(i),
    l = n(457287),
    s = n(105292),
    u = n(640956);
function o(e) {
    let { className: t, currencies: n, onChange: i, selectedCurrency: o, ...c } = e;
    return (0, r.jsx)(l.f, {
        currencies: n,
        className: a()(u.p, t),
        children: (0, r.jsx)(l.A, {
            label: s.intl.string(s.t["/AAR02"]),
            selectedCurrency: o,
            currencies: n,
            onChange: i,
            ...c,
        }),
    });
}
