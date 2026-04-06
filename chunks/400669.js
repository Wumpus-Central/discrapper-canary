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
        let { className: n, disabled: i, size: E, location: g } = e,
            A = p.pe.TIER_2,
            I = h.intl.string(h.t.lG6a5x),
            T = (0, d.Gh)("premium-wishlist-button-nux"),
            S = (0, s.bG)([f.default], () => f.default.getId());
        (0, _.pE)();
        let {
                isWishlisted: y,
                isBusy: v,
                isFirstTimeWishlister: N,
                handleToggle: C,
            } = (0, u.c)({ userId: S, location: g, skuId: A, nuxGraphic: T ? m : void 0, onNuxShow: T ? l.D : void 0 }),
            R = (0, c.mB)(a.M.PREMIUM_WISHLIST_COACHMARK);
        return (0, r.jsx)("div", {
            ref: t,
            children: (0, r.jsx)(o._, {
                skuId: A,
                productName: I,
                className: n,
                disabled: i,
                size: E,
                isWishlisted: y,
                isBusy: v,
                isFirstTimeWishlister: N,
                onClick: C,
                shouldShowTooltip: !R,
                tooltipConfig: { add: h.intl.string(h.t.cjmnm6) },
            }),
        });
    });
