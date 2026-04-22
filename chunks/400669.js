i.d(e, { g: () => _, l: () => f });
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
    h = i(788868),
    I = i(985018);
let _ = { type: "image", src: i(201682).A },
    f = s.forwardRef(function (t, e) {
        let { className: i, disabled: s, size: f, variant: A, location: E, forceDarkTheme: m } = t,
            T = h.pe.TIER_2,
            y = I.intl.string(I.t.lG6a5x),
            R = (0, c.Gh)("premium-wishlist-button-nux"),
            g = (0, n.bG)([S.default], () => S.default.getId());
        (0, p.pE)();
        let {
                isWishlisted: k,
                isBusy: C,
                isFirstTimeWishlister: w,
                handleToggle: L,
            } = (0, u.c)({ userId: g, location: E, skuId: T, nuxGraphic: R ? _ : void 0, onNuxShow: R ? o.D : void 0 }),
            v = (0, d.mB)(l.M.PREMIUM_WISHLIST_COACHMARK);
        return (0, r.jsx)("div", {
            ref: e,
            className: m ? "theme-dark" : void 0,
            children: (0, r.jsx)(a._, {
                skuId: T,
                productName: y,
                className: i,
                disabled: s,
                size: f,
                variant: A,
                isWishlisted: k,
                isBusy: C,
                isFirstTimeWishlister: w,
                onClick: L,
                shouldShowTooltip: !v,
                tooltipConfig: { add: I.intl.string(I.t.cjmnm6) },
            }),
        });
    });
