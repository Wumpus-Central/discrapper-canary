"use strict";
n.d(t, { g: () => g, l: () => p });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(554146),
    o = n(139146),
    l = n(895360),
    d = n(152472),
    _ = n(771781),
    u = n(909536),
    c = n(594832),
    E = n(495544),
    h = n(274681),
    m = n(788868),
    f = n(985018);
let g = { type: "image", src: n(201682).A },
    p = r.forwardRef(function (e, t) {
        let { className: n, disabled: r, size: p, variant: A, location: I, forceDarkTheme: T } = e,
            S = m.pe.TIER_2,
            N = f.intl.string(f.t.lG6a5x),
            C = (0, u.Gh)("premium-wishlist-button-nux"),
            R = (0, s.bG)([E.default], () => E.default.getId());
        (0, c.pE)();
        let {
                isWishlisted: O,
                isBusy: y,
                isFirstTimeWishlister: v,
                handleToggle: D,
            } = (0, d.c)({
                userId: R,
                location: I,
                skuId: S,
                nuxGraphic: C ? g : void 0,
                onNuxShow: C ? l.D : void 0,
                onAddSuccess: h.w,
            }),
            L = (0, _.mB)(a.M.PREMIUM_WISHLIST_COACHMARK);
        return (0, i.jsx)("div", {
            ref: t,
            className: T ? "theme-dark" : void 0,
            children: (0, i.jsx)(o._, {
                skuId: S,
                productName: N,
                className: n,
                disabled: r,
                size: p,
                variant: A,
                isWishlisted: O,
                isBusy: y,
                isFirstTimeWishlister: v,
                onClick: D,
                shouldShowTooltip: !L,
                tooltipConfig: { add: f.intl.string(f.t.cjmnm6) },
            }),
        });
    });
