"use strict";
n.d(t, { g: () => f, l: () => p });
var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(554146),
    l = n(139146),
    o = n(895360),
    d = n(152472),
    c = n(558845),
    u = n(909536),
    _ = n(561794),
    E = n(280450),
    A = n(274681),
    h = n(202541),
    I = n(375708);
let f = { type: "image", src: n(201682).A },
    p = r.forwardRef(function (e, t) {
        let { className: n, disabled: r, size: p, variant: T, location: m, forceDarkTheme: g } = e,
            S = h.pe.TIER_2,
            N = I.intl.string(I.t.lG6a5x),
            C = (0, u.Gh)("premium-wishlist-button-nux"),
            O = (0, a.bG)([E.default], () => E.default.getId());
        (0, _.pE)();
        let {
                isWishlisted: R,
                isBusy: L,
                isFirstTimeWishlister: y,
                handleToggle: D,
            } = (0, d.c)({
                userId: O,
                location: m,
                skuId: S,
                nuxGraphic: C ? f : void 0,
                onNuxShow: C ? o.D : void 0,
                onAddSuccess: A.w,
            }),
            v = (0, c.mB)(s.M.PREMIUM_WISHLIST_COACHMARK);
        return (0, i.jsx)("div", {
            ref: t,
            className: g ? "theme-dark" : void 0,
            children: (0, i.jsx)(l._, {
                skuId: S,
                productName: N,
                className: n,
                disabled: r,
                size: p,
                variant: T,
                isWishlisted: R,
                isBusy: L,
                isFirstTimeWishlister: y,
                onClick: D,
                shouldShowTooltip: !v,
                tooltipConfig: { add: I.intl.string(I.t.cjmnm6) },
            }),
        });
    });
