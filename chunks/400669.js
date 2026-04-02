"use strict";
n.d(t, { g: () => m, l: () => E });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(554146),
    o = n(139146),
    l = n(895360),
    u = n(574499),
    c = n(771781),
    d = n(909536),
    _ = n(594832),
    f = n(961350),
    p = n(788868),
    h = n(985018);
let m = { type: "image", src: n(201682).A },
    E = i.forwardRef(function (e, t) {
        let { className: n, disabled: i, size: E } = e,
            g = p.pe.TIER_2,
            A = h.intl.string(h.t.lG6a5x),
            I = (0, d.Gh)("premium-wishlist-button-nux"),
            T = (0, s.bG)([f.default], () => f.default.getId());
        (0, _.pE)();
        let {
                isWishlisted: S,
                isBusy: y,
                isFirstTimeWishlister: v,
                handleToggle: N,
            } = (0, u.c)({ userId: T, skuId: g, nuxGraphic: I ? m : void 0, onNuxShow: I ? l.D : void 0 }),
            C = (0, c.mB)(a.M.PREMIUM_WISHLIST_COACHMARK);
        return (0, r.jsx)("div", {
            ref: t,
            children: (0, r.jsx)(o._, {
                skuId: g,
                productName: A,
                className: n,
                disabled: i,
                size: E,
                isWishlisted: S,
                isBusy: y,
                isFirstTimeWishlister: v,
                onClick: N,
                shouldShowTooltip: !C,
                tooltipConfig: { add: h.intl.string(h.t.cjmnm6) },
            }),
        });
    });
