"use strict";
n.d(t, { g: () => m, l: () => g });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(554146),
    o = n(139146),
    l = n(895360),
    u = n(152472),
    c = n(558845),
    d = n(909536),
    _ = n(561794),
    f = n(495544),
    h = n(274681),
    p = n(788868),
    E = n(375708);
let m = { type: "image", src: n(201682).A },
    g = r.forwardRef(function (e, t) {
        let { className: n, disabled: r, size: g, variant: A, location: I, forceDarkTheme: T } = e,
            S = p.pe.TIER_2,
            N = E.intl.string(E.t.lG6a5x),
            y = (0, d.Gh)("premium-wishlist-button-nux"),
            C = (0, s.bG)([f.default], () => f.default.getId());
        (0, _.pE)();
        let {
                isWishlisted: v,
                isBusy: O,
                isFirstTimeWishlister: R,
                handleToggle: b,
            } = (0, u.c)({
                userId: C,
                location: I,
                skuId: S,
                nuxGraphic: y ? m : void 0,
                onNuxShow: y ? l.D : void 0,
                onAddSuccess: h.w,
            }),
            D = (0, c.mB)(a.M.PREMIUM_WISHLIST_COACHMARK);
        return (0, i.jsx)("div", {
            ref: t,
            className: T ? "theme-dark" : void 0,
            children: (0, i.jsx)(o._, {
                skuId: S,
                productName: N,
                className: n,
                disabled: r,
                size: g,
                variant: A,
                isWishlisted: v,
                isBusy: O,
                isFirstTimeWishlister: R,
                onClick: b,
                shouldShowTooltip: !D,
                tooltipConfig: { add: E.intl.string(E.t.cjmnm6) },
            }),
        });
    });
