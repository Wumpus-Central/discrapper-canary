"use strict";
n.d(t, { g: () => m, l: () => g });
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
    p = n(274681),
    h = n(788868),
    E = n(985018);
let m = { type: "image", src: n(201682).A },
    g = i.forwardRef(function (e, t) {
        let { className: n, disabled: i, size: g, variant: A, location: I, forceDarkTheme: T } = e,
            S = h.pe.TIER_2,
            y = E.intl.string(E.t.lG6a5x),
            N = (0, d.Gh)("premium-wishlist-button-nux"),
            v = (0, s.bG)([f.default], () => f.default.getId());
        (0, _.pE)();
        let {
                isWishlisted: C,
                isBusy: O,
                isFirstTimeWishlister: R,
                handleToggle: b,
            } = (0, u.c)({
                userId: v,
                location: I,
                skuId: S,
                nuxGraphic: N ? m : void 0,
                onNuxShow: N ? l.D : void 0,
                onAddSuccess: p.w,
            }),
            D = (0, c.mB)(a.M.PREMIUM_WISHLIST_COACHMARK);
        return (0, r.jsx)("div", {
            ref: t,
            className: T ? "theme-dark" : void 0,
            children: (0, r.jsx)(o._, {
                skuId: S,
                productName: y,
                className: n,
                disabled: i,
                size: g,
                variant: A,
                isWishlisted: C,
                isBusy: O,
                isFirstTimeWishlister: R,
                onClick: b,
                shouldShowTooltip: !D,
                tooltipConfig: { add: E.intl.string(E.t.cjmnm6) },
            }),
        });
    });
