"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(580630),
    o = n(788868),
    l = n(985018),
    u = n(497001);
function c(e) {
    let {
            price: t,
            currency: n,
            intervalType: i,
            className: c,
            intervalCount: d = 1,
            isPrepaidPaymentSource: _ = !1,
        } = e,
        f = (0, a.$g)(t, n),
        p = null;
    return (
        i === o.WT.YEAR
            ? (p = l.intl.format(l.t["3U719t"], { price: f }))
            : i === o.WT.MONTH && 1 === d
              ? (p = l.intl.format(l.t.NkR7BU, { price: f }))
              : i === o.WT.MONTH && d > 1 && (p = l.intl.format(l.t.CNAGg4, { price: f, intervalCount: d })),
        (0, r.jsx)("div", {
            className: s()(u.S, c),
            "data-testid": `PricePerInterval-${n}`,
            children: null == i || _ ? (0, r.jsx)("strong", { children: f }) : p,
        })
    );
}
