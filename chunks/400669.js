s.d(e, { g: () => E, l: () => A });
var r = s(627968),
    i = s(64700),
    n = s(17928),
    l = s(554146),
    a = s(139146),
    o = s(895360),
    u = s(152472),
    d = s(771781),
    c = s(909536),
    S = s(594832),
    h = s(495544),
    p = s(274681),
    _ = s(788868),
    I = s(985018);
let E = { type: "image", src: s(201682).A },
    A = i.forwardRef(function (t, e) {
        let { className: s, disabled: i, size: A, variant: f, location: T, forceDarkTheme: m } = t,
            R = _.pe.TIER_2,
            y = I.intl.string(I.t.lG6a5x),
            k = (0, c.Gh)("premium-wishlist-button-nux"),
            L = (0, n.bG)([h.default], () => h.default.getId());
        (0, S.pE)();
        let {
                isWishlisted: w,
                isBusy: C,
                isFirstTimeWishlister: g,
                handleToggle: v,
            } = (0, u.c)({
                userId: L,
                location: T,
                skuId: R,
                nuxGraphic: k ? E : void 0,
                onNuxShow: k ? o.D : void 0,
                onAddSuccess: p.w,
            }),
            U = (0, d.mB)(l.M.PREMIUM_WISHLIST_COACHMARK);
        return (0, r.jsx)("div", {
            ref: e,
            className: m ? "theme-dark" : void 0,
            children: (0, r.jsx)(a._, {
                skuId: R,
                productName: y,
                className: s,
                disabled: i,
                size: A,
                variant: f,
                isWishlisted: w,
                isBusy: C,
                isFirstTimeWishlister: g,
                onClick: v,
                shouldShowTooltip: !U,
                tooltipConfig: { add: I.intl.string(I.t.cjmnm6) },
            }),
        });
    });
