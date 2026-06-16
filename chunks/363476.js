"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(580630),
    o = n(788868),
    l = n(375708),
    u = n(497001);
function c(e) {
    let {
            price: t,
            currency: n,
            intervalType: r,
            className: c,
            intervalCount: d = 1,
            isPrepaidPaymentSource: _ = !1,
        } = e,
        h = (0, a.$g)(t, n),
        f = null;
    return (
        r === o.WT.YEAR
            ? (f = l.intl.format(l.t["3U719t"], { price: h }))
            : r === o.WT.MONTH && 1 === d
              ? (f = l.intl.format(l.t.NkR7BU, { price: h }))
              : r === o.WT.MONTH && d > 1 && (f = l.intl.format(l.t.CNAGg4, { price: h, intervalCount: d })),
        (0, i.jsx)("div", {
            className: s()(u.S, c),
            "data-testid": `PricePerInterval-${n}`,
            children: null == r || _ ? (0, i.jsx)("strong", { children: h }) : f,
        })
    );
}
