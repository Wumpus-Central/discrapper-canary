r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(937615),
    l = r(474936),
    u = r(388032),
    c = r(662131);
function d(e) {
    let { price: n, currency: r, intervalType: a, className: d, intervalCount: f = 1, isPrepaidPaymentSource: p = !1 } = e,
        h = (0, s.T4)(n, r),
        _ = null;
    return (
        a === l.rV.YEAR
            ? (_ = u.intl.format(u.t['3U719v'], { price: h }))
            : a === l.rV.MONTH && 1 === f
              ? (_ = u.intl.format(u.t.NkR7BQ, { price: h }))
              : a === l.rV.MONTH &&
                f > 1 &&
                (_ = u.intl.format(u.t.CNAGg4, {
                    price: h,
                    intervalCount: f
                })),
        (0, i.jsx)('div', {
            className: o()(c.pricePerInterval, d),
            'data-testid': 'PricePerInterval-'.concat(r),
            children: null == a || p ? (0, i.jsx)('strong', { children: h }) : _
        })
    );
}
