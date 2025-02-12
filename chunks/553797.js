n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(937615),
    o = n(474936),
    l = n(388032),
    u = n(502643);
function c(e) {
    let { price: t, currency: n, intervalType: r, className: c, intervalCount: d = 1, isPrepaidPaymentSource: f = !1 } = e,
        _ = (0, s.T4)(t, n),
        p = null;
    return (
        r === o.rV.YEAR
            ? (p = l.intl.format(l.t['3U719v'], { price: _ }))
            : r === o.rV.MONTH && 1 === d
              ? (p = l.intl.format(l.t.NkR7BQ, { price: _ }))
              : r === o.rV.MONTH &&
                d > 1 &&
                (p = l.intl.format(l.t.CNAGg4, {
                    price: _,
                    intervalCount: d
                })),
        (0, i.jsx)('div', {
            className: a()(u.pricePerInterval, c),
            'data-testid': 'PricePerInterval-'.concat(n),
            children: null == r || f ? (0, i.jsx)('strong', { children: _ }) : p
        })
    );
}
