n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(580630),
    o = n(788868),
    l = n(985018),
    c = n(709246);
function u(e) {
    let {
            price: t,
            currency: n,
            intervalType: i,
            className: u,
            intervalCount: d = 1,
            isPrepaidPaymentSource: f = !1,
        } = e,
        p = (0, s.$g)(t, n),
        _ = null;
    return (
        i === o.WT.YEAR
            ? (_ = l.intl.format(l.t["3U719t"], { price: p }))
            : i === o.WT.MONTH && 1 === d
              ? (_ = l.intl.format(l.t.NkR7BU, { price: p }))
              : i === o.WT.MONTH &&
                d > 1 &&
                (_ = l.intl.format(l.t.CNAGg4, {
                    price: p,
                    intervalCount: d,
                })),
        (0, r.jsx)("div", {
            className: a()(c.S, u),
            "data-testid": "PricePerInterval-".concat(n),
            children: null == i || f ? (0, r.jsx)("strong", { children: p }) : _,
        })
    );
}
