n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(937615),
    s = n(474936),
    l = n(388032),
    c = n(879027);
function u(e) {
    let { price: t, currency: n, intervalType: i, className: u, intervalCount: d = 1, isPrepaidPaymentSource: _ = !1 } = e,
        f = (0, o.T4)(t, n),
        p = null;
    return (
        i === s.rV.YEAR
            ? (p = l.intl.format(l.t['3U719v'], { price: f }))
            : i === s.rV.MONTH && 1 === d
              ? (p = l.intl.format(l.t.NkR7BQ, { price: f }))
              : i === s.rV.MONTH &&
                d > 1 &&
                (p = l.intl.format(l.t.CNAGg4, {
                    price: f,
                    intervalCount: d
                })),
        (0, r.jsx)('div', {
            className: a()(c.pricePerInterval, u),
            'data-testid': 'PricePerInterval-'.concat(n),
            children: null == i || _ ? (0, r.jsx)('strong', { children: f }) : p
        })
    );
}
