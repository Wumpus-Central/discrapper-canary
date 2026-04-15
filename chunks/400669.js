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
        let { className: n, disabled: i, size: E, variant: g, location: A, forceDarkTheme: I } = e,
            T = p.pe.TIER_2,
            S = h.intl.string(h.t.lG6a5x),
            y = (0, d.Gh)("premium-wishlist-button-nux"),
            v = (0, s.bG)([f.default], () => f.default.getId());
        (0, _.pE)();
        let {
                isWishlisted: N,
                isBusy: C,
                isFirstTimeWishlister: R,
                handleToggle: O,
            } = (0, u.c)({ userId: v, location: A, skuId: T, nuxGraphic: y ? m : void 0, onNuxShow: y ? l.D : void 0 }),
            b = (0, c.mB)(a.M.PREMIUM_WISHLIST_COACHMARK);
        return (0, r.jsx)("div", {
            ref: t,
            className: I ? "theme-dark" : void 0,
            children: (0, r.jsx)(o._, {
                skuId: T,
                productName: S,
                className: n,
                disabled: i,
                size: E,
                variant: g,
                isWishlisted: N,
                isBusy: C,
                isFirstTimeWishlister: R,
                onClick: O,
                shouldShowTooltip: !b,
                tooltipConfig: { add: h.intl.string(h.t.cjmnm6) },
            }),
        });
    });
