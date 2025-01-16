t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var r = t(120356),
    a = t.n(r),
    l = t(937615),
    s = t(474936),
    o = t(388032),
    c = t(662131);
function u(e) {
    let { price: n, currency: t, intervalType: r, className: u, intervalCount: d = 1, isPrepaidPaymentSource: p = !1 } = e,
        f = (0, l.T4)(n, t),
        m = null;
    return (
        r === s.rV.YEAR
            ? (m = o.intl.format(o.t['3U719v'], { price: f }))
            : r === s.rV.MONTH && 1 === d
              ? (m = o.intl.format(o.t.NkR7BQ, { price: f }))
              : r === s.rV.MONTH &&
                d > 1 &&
                (m = o.intl.format(o.t.CNAGg4, {
                    price: f,
                    intervalCount: d
                })),
        (0, i.jsx)('div', {
            className: a()(c.pricePerInterval, u),
            'data-testid': 'PricePerInterval-'.concat(t),
            children: null == r || p ? (0, i.jsx)('strong', { children: f }) : m
        })
    );
}
