i.d(e, { g: () => A, l: () => f });
var r = i(627968),
    s = i(64700),
    n = i(311907),
    l = i(554146),
    a = i(139146),
    o = i(895360),
    u = i(574499),
    d = i(771781),
    c = i(909536),
    p = i(594832),
    S = i(961350),
    h = i(274681),
    I = i(788868),
    _ = i(985018);
let A = { type: "image", src: i(201682).A },
    f = s.forwardRef(function (t, e) {
        let { className: i, disabled: s, size: f, variant: E, location: m, forceDarkTheme: T } = t,
            y = I.pe.TIER_2,
            R = _.intl.string(_.t.lG6a5x),
            g = (0, c.Gh)("premium-wishlist-button-nux"),
            k = (0, n.bG)([S.default], () => S.default.getId());
        (0, p.pE)();
        let {
                isWishlisted: C,
                isBusy: w,
                isFirstTimeWishlister: L,
                handleToggle: v,
            } = (0, u.c)({
                userId: k,
                location: m,
                skuId: y,
                nuxGraphic: g ? A : void 0,
                onNuxShow: g ? o.D : void 0,
                onAddSuccess: h.w,
            }),
            F = (0, d.mB)(l.M.PREMIUM_WISHLIST_COACHMARK);
        return (0, r.jsx)("div", {
            ref: e,
            className: T ? "theme-dark" : void 0,
            children: (0, r.jsx)(a._, {
                skuId: y,
                productName: R,
                className: i,
                disabled: s,
                size: f,
                variant: E,
                isWishlisted: C,
                isBusy: w,
                isFirstTimeWishlister: L,
                onClick: v,
                shouldShowTooltip: !F,
                tooltipConfig: { add: _.intl.string(_.t.cjmnm6) },
            }),
        });
    });
