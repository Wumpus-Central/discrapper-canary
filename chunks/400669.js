"use strict";
n.d(t, { l: () => d });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(139146),
    o = n(574499),
    l = n(961350),
    u = n(788868),
    c = n(985018);
let d = i.forwardRef(function (e, t) {
    let { className: n, disabled: i, size: d } = e,
        _ = u.pe.TIER_2,
        f = c.intl.string(c.t.lG6a5x),
        p = (0, s.bG)([l.default], () => l.default.getId()),
        { isWishlisted: h, isBusy: m, isFirstTimeWishlister: E, handleToggle: g } = (0, o.c)({ userId: p, skuId: _ });
    return (0, r.jsx)("div", {
        ref: t,
        children: (0, r.jsx)(a._, {
            skuId: _,
            productName: f,
            className: n,
            disabled: i,
            size: d,
            isWishlisted: h,
            isBusy: m,
            isFirstTimeWishlister: E,
            onClick: g,
        }),
    });
});
