r.d(e, { g: () => A, l: () => f });
var i = r(477900),
    n = r(582128),
    s = r(17928),
    l = r(554146),
    a = r(139146),
    u = r(895360),
    o = r(152472),
    c = r(558845),
    d = r(909536),
    S = r(594832),
    I = r(280450),
    p = r(274681),
    h = r(202541),
    _ = r(375708);
let A = { type: "image", src: r(201682).A },
    f = n.forwardRef(function (t, e) {
        let { className: r, disabled: n, size: f, variant: E, location: m, forceDarkTheme: y } = t,
            T = h.pe.TIER_2,
            R = _.intl.string(_.t.lG6a5x),
            L = (0, d.Gh)("premium-wishlist-button-nux"),
            k = (0, s.bG)([I.default], () => I.default.getId());
        (0, S.pE)();
        let {
                isWishlisted: g,
                isBusy: v,
                isFirstTimeWishlister: w,
                handleToggle: C,
            } = (0, o.c)({
                userId: k,
                location: m,
                skuId: T,
                nuxGraphic: L ? A : void 0,
                onNuxShow: L ? u.D : void 0,
                onAddSuccess: p.w,
            }),
            U = (0, c.mB)(l.M.PREMIUM_WISHLIST_COACHMARK);
        return (0, i.jsx)("div", {
            ref: e,
            className: y ? "theme-dark" : void 0,
            children: (0, i.jsx)(a._, {
                skuId: T,
                productName: R,
                className: r,
                disabled: n,
                size: f,
                variant: E,
                isWishlisted: g,
                isBusy: v,
                isFirstTimeWishlister: w,
                onClick: C,
                shouldShowTooltip: !U,
                tooltipConfig: { add: _.intl.string(_.t.cjmnm6) },
            }),
        });
    });
