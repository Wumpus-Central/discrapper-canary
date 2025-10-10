n.d(t, { Z: () => M }), n(388685);
var r = n(951288);
n(647438);
var l = n(311570),
    s = n(399606),
    a = n(481060),
    i = n(100527),
    o = n(906732),
    c = n(333867),
    u = n(767714),
    d = n(960919),
    g = n(275388),
    p = n(594174),
    f = n(74538),
    C = n(335131),
    h = n(381585),
    _ = n(1870),
    m = n(994587),
    b = n(884697),
    E = n(635552),
    S = n(290175),
    v = n(724994),
    x = n(786040),
    O = n(67409),
    y = n(58201),
    T = n(445794),
    L = n(956472),
    j = n(832149),
    k = n(215023),
    I = n(474936),
    P = n(388032),
    N = n(192676);
let B = (e) => {
        let {
                product: t,
                cardRef: n,
                analyticsLocations: s,
                selectedVariantIndex: i,
                hasDiscountOffer: o,
                discountOfferAmount: u,
            } = e,
            d = (0, b.XM)(t, !1, !1),
            g = o
                ? P.intl.formatToPlainString(P.t["5U5RBw"], { discountOfferAmount: u })
                : P.intl.formatToPlainString(P.t["cNSL/v"], { price: d });
        return (0, r.jsx)(a.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    (0, c.Z)({
                        skuId: (0, O.S)({
                            product: t,
                            selectedVariantIndex: i,
                        }),
                        returnRef: n,
                        analyticsLocations: s,
                        variantsReturnStyle: l.v.VARIANTS_GROUP,
                    });
            },
            text: g,
            fullWidth: !0,
        });
    },
    A = (e) => {
        let { isClaimPremiumProductDisabled: t } = e;
        return (0, r.jsx)("div", {
            children: (0, r.jsx)(u.Z, {
                fullWidth: !0,
                disabled: t,
                onClick: (e) => e.stopPropagation(),
                textOptions: { textOverride: P.intl.string(P.t.sEAnVF) },
                subscriptionTier: I.Si.TIER_2,
            }),
        });
    },
    R = (e) => {
        let { handlePreviewButtonClick: t } = e;
        return (0, r.jsx)(a.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: P.intl.string(P.t.FdGl5O),
            fullWidth: !0,
        });
    },
    Z = (e) => {
        let { handleUseNow: t, isApplying: n } = e;
        return (0, r.jsx)(a.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t();
            },
            loading: n,
            text: P.intl.string(P.t.MAS7uL),
            fullWidth: !0,
        });
    },
    w = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: n,
                isClaiming: l,
                tab: s,
                analyticsLocations: i,
                analyticsContext: o,
            } = e,
            c = async () => {
                (0, x.oc)(t, s, o, "claim premium product button"),
                    await (0, C.fK)(t.skuId),
                    (0, j.Z)({
                        product: t,
                        analyticsLocations: i,
                        purchaseType: k.o8.PREMIUM_PURCHASE,
                    });
            };
        return (0, r.jsx)(a.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: n,
            loading: l,
            loadingStartedLabel: P.intl.string(P.t["TYw+9v"]),
            loadingFinishedLabel: P.intl.string(P.t.Pg1UPz),
            text: P.intl.string(P.t.zp6caG),
            fullWidth: !0,
        });
    },
    H = (e) => {
        let {
            product: t,
            tab: n,
            checkoutEligiblePrices: s,
            analyticsLocations: i,
            analyticsContext: o,
            selectedVariantIndex: c,
        } = e;
        return (0, r.jsx)(a.zxk, {
            variant: "primary",
            text: P.intl.format(P.t.kAgx5O, {
                orbPrice: s[0].amount,
                orbIconHook: () => (0, r.jsx)(d.Z, { className: N.orbIconAligned }),
            }),
            onClick: (e) => {
                e.stopPropagation(),
                    (0, x.oc)(t, n, o, "claim with orbs button"),
                    (0, g.qA)({
                        skuId: (0, O.S)({
                            product: t,
                            selectedVariantIndex: c,
                        }),
                        onCheckoutSuccess: (e) => {
                            var n;
                            let { entitlements: r } = e;
                            (0, C.qg)({ variantsReturnStyle: l.v.VARIANTS_GROUP }),
                                (0, j.Z)({
                                    product: t,
                                    analyticsLocations: i,
                                    itemConsumed: null == (n = r[0]) ? void 0 : n.consumed,
                                    purchaseType: k.o8.ORB,
                                });
                        },
                        analyticsLocations: i,
                    });
            },
            "aria-label": P.intl.formatToPlainString(P.t["fNG/09"], { orbPrice: s[0].amount }),
            fullWidth: !0,
        });
    },
    F = (e) => {
        let { handlePreviewButtonClick: t } = e;
        return (0, r.jsx)(a.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: P.intl.string(P.t.GpnHfH),
            fullWidth: !0,
        });
    },
    D = (e) => {
        let { product: t, cardRef: n, selectedVariantIndex: l } = e,
            a = (0, m.Nd)(),
            c = null == a ? void 0 : a.tab,
            u = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
            d = f.ZP.canUseCollectibles(u),
            { isPurchased: g, isPartiallyOwnedBundle: C } = (0, v.L)(t),
            O = (0, b.G1)(t),
            y = (0, b.rN)(t),
            { isDisabled: j } = (0, S.G)(t.skuId),
            I = (0, b.ne)({
                product: t,
                isPartiallyOwnedBundle: C,
                isPurchased: g,
            }),
            P = (0, T.Iw)(t),
            N = null != P,
            {
                shouldCheckoutWithOrbs: D,
                hasSufficientOrbs: M,
                checkoutEligiblePrices: W,
            } = (0, L.Ip)({
                product: t,
                isPremiumUser: d,
                tab: c,
                hasDiscountOffer: N,
            }),
            U = (0, h.sp)(),
            { analyticsLocations: V } = (0, o.ZP)(i.Z.COLLECTIBLES_SHOP_CARD),
            z = (0, x.J7)(t, i.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
            [G, K] = (0, s.Wu)([_.Z], () => [
                _.Z.isClaiming === t.skuId,
                null != _.Z.isClaiming && _.Z.isClaiming !== t.skuId,
            ]),
            { handleUseNow: q, isApplying: Y } = (0, E.W)({ product: t });
        return !O || d || y
            ? !I || j
                ? (0, r.jsx)(R, { handlePreviewButtonClick: z })
                : g
                  ? (0, r.jsx)(Z, {
                        handleUseNow: q,
                        isApplying: Y,
                    })
                  : O
                    ? (0, r.jsx)(w, {
                          product: t,
                          isClaimPremiumProductDisabled: K,
                          isClaiming: G,
                          tab: c,
                          analyticsLocations: V,
                          analyticsContext: U,
                      })
                    : D && M
                      ? (0, r.jsx)(H, {
                            product: t,
                            tab: c,
                            checkoutEligiblePrices: W,
                            analyticsLocations: V,
                            analyticsContext: U,
                            selectedVariantIndex: l,
                        })
                      : D && !M
                        ? (0, r.jsx)(R, { handlePreviewButtonClick: z })
                        : c === k.AW.ORBS
                          ? (0, r.jsx)(F, { handlePreviewButtonClick: z })
                          : (0, r.jsx)(B, {
                                product: t,
                                cardRef: n,
                                analyticsLocations: V,
                                selectedVariantIndex: l,
                                hasDiscountOffer: N,
                                discountOfferAmount: P,
                            })
            : (0, r.jsx)(A, { isClaimPremiumProductDisabled: K });
    },
    M = (e) => {
        let { skuId: t, cardRef: n, selectedVariantIndex: l } = e,
            s = (0, x.LJ)(t);
        if (null == s) return null;
        let a = (0, y.W)(s, l);
        return (0, r.jsx)(D, {
            product: a,
            cardRef: n,
            selectedVariantIndex: l,
        });
    };
