"use strict";
n.d(t, { g: () => h, l: () => m });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(554146),
    o = n(139146),
    l = n(895360),
    u = n(574499),
    c = n(771781),
    d = n(909536),
    _ = n(961350),
    f = n(788868),
    p = n(985018);
let h = { type: "image", src: n(201682).A },
    m = i.forwardRef(function (e, t) {
        let { className: n, disabled: i, size: m } = e,
            E = f.pe.TIER_2,
            g = p.intl.string(p.t.lG6a5x),
            A = (0, d.Gh)("premium-wishlist-button-nux"),
            I = (0, s.bG)([_.default], () => _.default.getId()),
            {
                isWishlisted: T,
                isBusy: S,
                isFirstTimeWishlister: y,
                handleToggle: v,
            } = (0, u.c)({ userId: I, skuId: E, nuxGraphic: A ? h : void 0, onNuxShow: A ? l.D : void 0 }),
            N = (0, c.mB)(a.M.PREMIUM_WISHLIST_COACHMARK);
        return (0, r.jsx)("div", {
            ref: t,
            children: (0, r.jsx)(o._, {
                skuId: E,
                productName: g,
                className: n,
                disabled: i,
                size: m,
                isWishlisted: T,
                isBusy: S,
                isFirstTimeWishlister: y,
                onClick: v,
                shouldShowTooltip: !N,
                tooltipConfig: { add: p.intl.string(p.t.cjmnm6) },
            }),
        });
    });
