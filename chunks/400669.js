r.d(e, { g: () => f, l: () => A });
var i = r(477900),
    n = r(582128),
    s = r(17928),
    l = r(554146),
    a = r(139146),
    u = r(895360),
    o = r(152472),
    d = r(558845),
    c = r(909536),
    S = r(594832),
    I = r(280450),
    p = r(274681),
    h = r(202541),
    _ = r(375708);
let f = { type: "image", src: r(201682).A },
    A = n.forwardRef(function (t, e) {
        let { className: r, disabled: n, size: A, variant: E, location: m, forceDarkTheme: y } = t,
            R = h.pe.TIER_2,
            T = _.intl.string(_.t.lG6a5x),
            L = (0, c.Gh)("premium-wishlist-button-nux"),
            g = (0, s.bG)([I.default], () => I.default.getId());
        (0, S.pE)();
        let {
                isWishlisted: k,
                isBusy: v,
                isFirstTimeWishlister: w,
                handleToggle: C,
            } = (0, o.c)({
                userId: g,
                location: m,
                skuId: R,
                nuxGraphic: L ? f : void 0,
                onNuxShow: L ? u.D : void 0,
                onAddSuccess: p.w,
            }),
            b = (0, d.mB)(l.M.PREMIUM_WISHLIST_COACHMARK);
        return (0, i.jsx)("div", {
            ref: e,
            className: y ? "theme-dark" : void 0,
            children: (0, i.jsx)(a._, {
                skuId: R,
                productName: T,
                className: r,
                disabled: n,
                size: A,
                variant: E,
                isWishlisted: k,
                isBusy: v,
                isFirstTimeWishlister: w,
                onClick: C,
                shouldShowTooltip: !b,
                tooltipConfig: { add: _.intl.string(_.t.cjmnm6) },
            }),
        });
    });
