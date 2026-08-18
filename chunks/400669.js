"use strict";
n.d(t, { g: () => x, l: () => A });
var l = n(477900),
    i = n(582128),
    s = n(17928),
    r = n(554146),
    a = n(139146),
    o = n(895360),
    u = n(152472),
    c = n(558845),
    d = n(909536),
    h = n(561794),
    m = n(280450),
    f = n(274681),
    p = n(202541),
    g = n(375708);
let x = { type: "image", src: n(201682).A },
    A = i.forwardRef(function (e, t) {
        let { className: n, disabled: i, size: A, variant: E, location: C, forceDarkTheme: I } = e,
            y = p.pe.TIER_2,
            S = g.intl.string(g.t.lG6a5x),
            v = (0, d.Gh)("premium-wishlist-button-nux"),
            _ = (0, s.bG)([m.default], () => m.default.getId());
        (0, h.pE)();
        let {
                isWishlisted: N,
                isBusy: T,
                isFirstTimeWishlister: j,
                handleToggle: b,
            } = (0, u.c)({
                userId: _,
                location: C,
                skuId: y,
                nuxGraphic: v ? x : void 0,
                onNuxShow: v ? o.D : void 0,
                onAddSuccess: f.w,
            }),
            R = (0, c.mB)(r.M.PREMIUM_WISHLIST_COACHMARK);
        return (0, l.jsx)("div", {
            ref: t,
            className: I ? "theme-dark" : void 0,
            children: (0, l.jsx)(a._, {
                skuId: y,
                productName: S,
                className: n,
                disabled: i,
                size: A,
                variant: E,
                isWishlisted: N,
                isBusy: T,
                isFirstTimeWishlister: j,
                onClick: b,
                shouldShowTooltip: !R,
                tooltipConfig: { add: g.intl.string(g.t.cjmnm6) },
            }),
        });
    });
