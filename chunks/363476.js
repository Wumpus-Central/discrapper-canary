n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    a = n(580630),
    s = n(202541),
    o = n(375708),
    u = n(497001);
function c(e) {
    let {
            price: t,
            currency: n,
            intervalType: i,
            className: c,
            intervalCount: d = 1,
            isPrepaidPaymentSource: p = !1,
        } = e,
        m = (0, a.$g)(t, n),
        h = null;
    return (
        i === s.WT.YEAR
            ? (h = o.intl.format(o.t["3U719t"], { price: m }))
            : i === s.WT.MONTH && 1 === d
              ? (h = o.intl.format(o.t.NkR7BU, { price: m }))
              : i === s.WT.MONTH && d > 1 && (h = o.intl.format(o.t.CNAGg4, { price: m, intervalCount: d })),
        (0, l.jsx)("div", {
            className: r()(u.S, c),
            "data-testid": `PricePerInterval-${n}`,
            children: null == i || p ? (0, l.jsx)("strong", { children: m }) : h,
        })
    );
}
