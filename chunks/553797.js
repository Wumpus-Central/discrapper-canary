n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(937615),
    s = n(474936),
    l = n(388032),
    c = n(467157);
function u(e) {
    let {
            price: t,
            currency: n,
            intervalType: i,
            className: u,
            intervalCount: d = 1,
            isPrepaidPaymentSource: f = !1,
        } = e,
        p = (0, o.T4)(t, n),
        _ = null;
    return (
        i === s.rV.YEAR
            ? (_ = l.intl.format(l.t["3U719t"], { price: p }))
            : i === s.rV.MONTH && 1 === d
              ? (_ = l.intl.format(l.t.NkR7BU, { price: p }))
              : i === s.rV.MONTH &&
                d > 1 &&
                (_ = l.intl.format(l.t.CNAGg4, {
                    price: p,
                    intervalCount: d,
                })),
        (0, r.jsx)("div", {
            className: a()(c.pricePerInterval, u),
            "data-testid": "PricePerInterval-".concat(n),
            children: null == i || f ? (0, r.jsx)("strong", { children: p }) : _,
        })
    );
}
