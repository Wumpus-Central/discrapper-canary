n.d(t, { l: () => u });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(139146),
    r = n(574499),
    o = n(961350),
    d = n(788868),
    c = n(985018);
let u = s.forwardRef(function (e, t) {
    let { className: n, disabled: s, size: u } = e,
        m = d.pe.TIER_2,
        _ = c.intl.string(c.t.lG6a5x),
        g = (0, l.bG)([o.default], () => o.default.getId()),
        { isWishlisted: A, isBusy: x, isFirstTimeWishlister: p, handleToggle: h } = (0, r.c)({ userId: g, skuId: m });
    return (0, i.jsx)("div", {
        ref: t,
        children: (0, i.jsx)(a._, {
            skuId: m,
            productName: _,
            className: n,
            disabled: s,
            size: u,
            isWishlisted: A,
            isBusy: x,
            isFirstTimeWishlister: p,
            onClick: h,
        }),
    });
});
