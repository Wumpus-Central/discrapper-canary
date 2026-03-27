"use strict";
n.d(t, { l: () => f });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(554146),
    o = n(139146),
    l = n(574499),
    u = n(771781),
    c = n(961350),
    d = n(788868),
    _ = n(985018);
let f = i.forwardRef(function (e, t) {
    let { className: n, disabled: i, size: f } = e,
        p = d.pe.TIER_2,
        h = _.intl.string(_.t.lG6a5x),
        m = (0, s.bG)([c.default], () => c.default.getId()),
        { isWishlisted: E, isBusy: g, isFirstTimeWishlister: A, handleToggle: I } = (0, l.c)({ userId: m, skuId: p }),
        T = (0, u.mB)(a.M.PREMIUM_WISHLIST_COACHMARK);
    return (0, r.jsx)("div", {
        ref: t,
        children: (0, r.jsx)(o._, {
            skuId: p,
            productName: h,
            className: n,
            disabled: i,
            size: f,
            isWishlisted: E,
            isBusy: g,
            isFirstTimeWishlister: A,
            onClick: I,
            shouldShowTooltip: !T,
            tooltipConfig: { add: _.intl.string(_.t.cjmnm6) },
        }),
    });
});
