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
        let { className: n, disabled: i, size: E, location: g, forceDarkTheme: A } = e,
            I = p.pe.TIER_2,
            T = h.intl.string(h.t.lG6a5x),
            S = (0, d.Gh)("premium-wishlist-button-nux"),
            y = (0, s.bG)([f.default], () => f.default.getId());
        (0, _.pE)();
        let {
                isWishlisted: v,
                isBusy: N,
                isFirstTimeWishlister: C,
                handleToggle: R,
            } = (0, u.c)({ userId: y, location: g, skuId: I, nuxGraphic: S ? m : void 0, onNuxShow: S ? l.D : void 0 }),
            O = (0, c.mB)(a.M.PREMIUM_WISHLIST_COACHMARK);
        return (0, r.jsx)("div", {
            ref: t,
            className: A ? "theme-dark" : void 0,
            children: (0, r.jsx)(o._, {
                skuId: I,
                productName: T,
                className: n,
                disabled: i,
                size: E,
                isWishlisted: v,
                isBusy: N,
                isFirstTimeWishlister: C,
                onClick: R,
                shouldShowTooltip: !O,
                tooltipConfig: { add: h.intl.string(h.t.cjmnm6) },
            }),
        });
    });
