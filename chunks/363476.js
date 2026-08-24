n.d(t, { A: () => c });
var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    a = n(580630),
    s = n(202541),
    o = n(375708),
    u = n(428212);
function c(e) {
    let {
            price: t,
            currency: n,
            intervalType: i,
            className: c,
            intervalCount: d = 1,
            isPrepaidPaymentSource: m = !1,
        } = e,
        p = (0, a.$g)(t, n),
        C = null;
    return (
        i === s.WT.YEAR
            ? (C = o.intl.format(o.t["3U719t"], { price: p }))
            : i === s.WT.MONTH && 1 === d
              ? (C = o.intl.format(o.t.NkR7BU, { price: p }))
              : i === s.WT.MONTH && d > 1 && (C = o.intl.format(o.t.CNAGg4, { price: p, intervalCount: d })),
        (0, l.jsx)("div", {
            className: r()(u.zz, c),
            "data-testid": `PricePerInterval-${n}`,
            children: null == i || m ? (0, l.jsx)("strong", { children: p }) : C,
        })
    );
}
