n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(937615),
    s = n(474936),
    l = n(388032),
    c = n(926501);
function u(e) {
    let { price: t, currency: n, intervalType: i, className: u, intervalCount: d = 1, isPrepaidPaymentSource: f = !1 } = e,
        p = (0, a.T4)(t, n),
        _ = null;
    return (
        i === s.rV.YEAR
            ? (_ = l.NW.format(l.t['3U719v'], { price: p }))
            : i === s.rV.MONTH && 1 === d
              ? (_ = l.NW.format(l.t.NkR7BQ, { price: p }))
              : i === s.rV.MONTH &&
                d > 1 &&
                (_ = l.NW.format(l.t.CNAGg4, {
                    price: p,
                    intervalCount: d
                })),
        (0, r.jsx)('div', {
            className: o()(c.pricePerInterval, u),
            'data-testid': 'PricePerInterval-'.concat(n),
            children: null == i || f ? (0, r.jsx)('strong', { children: p }) : _
        })
    );
}
