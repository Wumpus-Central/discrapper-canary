s.d(e, { g: () => A, l: () => E });
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
    p = s(495544),
    _ = s(274681),
    h = s(788868),
    I = s(985018);
let A = { type: "image", src: s(201682).A },
    E = i.forwardRef(function (t, e) {
        let { className: s, disabled: i, size: E, variant: f, location: T, forceDarkTheme: m } = t,
            R = h.pe.TIER_2,
            y = I.intl.string(I.t.lG6a5x),
            L = (0, c.Gh)("premium-wishlist-button-nux"),
            k = (0, n.bG)([p.default], () => p.default.getId());
        (0, S.pE)();
        let {
                isWishlisted: w,
                isBusy: C,
                isFirstTimeWishlister: g,
                handleToggle: v,
            } = (0, u.c)({
                userId: k,
                location: T,
                skuId: R,
                nuxGraphic: L ? A : void 0,
                onNuxShow: L ? o.D : void 0,
                onAddSuccess: _.w,
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
                size: E,
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
