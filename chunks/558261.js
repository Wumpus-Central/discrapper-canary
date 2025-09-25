n.d(t, { Z: () => M }), n(388685);
var r = n(951288);
n(647438);
var l = n(311570),
    i = n(399606),
    a = n(481060),
    s = n(100527),
    o = n(906732),
    c = n(333867),
    u = n(767714),
    d = n(960919),
    g = n(275388),
    p = n(594174),
    f = n(74538),
    h = n(335131),
    C = n(381585),
    _ = n(1870),
    m = n(994587),
    b = n(884697),
    E = n(635552),
    S = n(290175),
    v = n(724994),
    x = n(786040),
    O = n(67409),
    T = n(445794),
    y = n(956472),
    L = n(832149),
    j = n(215023),
    k = n(474936),
    I = n(388032),
    P = n(192676);
let N = (e) => {
        let {
                product: t,
                cardRef: n,
                analyticsLocations: i,
                selectedVariantIndex: s,
                hasDiscountOffer: o,
                discountOfferAmount: u,
            } = e,
            d = (0, b.XM)(t, !1, !1),
            g = o
                ? I.intl.formatToPlainString(I.t["5U5RBw"], { discountOfferAmount: u })
                : I.intl.formatToPlainString(I.t["cNSL/v"], { price: d });
        return (0, r.jsx)(a.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    (0, c.Z)({
                        skuId: (0, O.S)({
                            product: t,
                            selectedVariantIndex: s,
                        }),
                        returnRef: n,
                        analyticsLocations: i,
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
                textOptions: { textOverride: I.intl.string(I.t.sEAnVF) },
                subscriptionTier: k.Si.TIER_2,
            }),
        });
    },
    B = (e) => {
        let { handlePreviewButtonClick: t } = e;
        return (0, r.jsx)(a.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: I.intl.string(I.t.FdGl5O),
            fullWidth: !0,
        });
    },
    R = (e) => {
        let { handleUseNow: t, isApplying: n } = e;
        return (0, r.jsx)(a.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t();
            },
            loading: n,
            text: I.intl.string(I.t.MAS7uL),
            fullWidth: !0,
        });
    },
    Z = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: n,
                isClaiming: l,
                tab: i,
                analyticsLocations: s,
                analyticsContext: o,
            } = e,
            c = async () => {
                (0, x.oc)(t, i, o, "claim premium product button"),
                    await (0, h.fK)(t.skuId),
                    (0, L.Z)({
                        product: t,
                        analyticsLocations: s,
                        purchaseType: j.o8.PREMIUM_PURCHASE,
                    });
            };
        return (0, r.jsx)(a.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: n,
            loading: l,
            loadingStartedLabel: I.intl.string(I.t["TYw+9v"]),
            loadingFinishedLabel: I.intl.string(I.t.Pg1UPz),
            text: I.intl.string(I.t.zp6caG),
            fullWidth: !0,
        });
    },
    w = (e) => {
        let {
            product: t,
            tab: n,
            checkoutEligiblePrices: i,
            analyticsLocations: s,
            analyticsContext: o,
            selectedVariantIndex: c,
        } = e;
        return (0, r.jsx)(a.zxk, {
            variant: "primary",
            text: I.intl.format(I.t.kAgx5O, {
                orbPrice: i[0].amount,
                orbIconHook: () => (0, r.jsx)(d.Z, { className: P.orbIconAligned }),
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
                            (0, h.qg)({ variantsReturnStyle: l.v.VARIANTS_GROUP }),
                                (0, L.Z)({
                                    product: t,
                                    analyticsLocations: s,
                                    itemConsumed: null == (n = r[0]) ? void 0 : n.consumed,
                                    purchaseType: j.o8.ORB,
                                });
                        },
                        analyticsLocations: s,
                    });
            },
            "aria-label": I.intl.formatToPlainString(I.t["fNG/09"], { orbPrice: i[0].amount }),
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
            text: I.intl.string(I.t.GpnHfH),
            fullWidth: !0,
        });
    },
    M = (e) => {
        let { product: t, cardRef: n, selectedVariantIndex: l } = e,
            a = (0, m.Nd)(),
            c = null == a ? void 0 : a.tab,
            u = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
            d = f.ZP.canUseCollectibles(u),
            { isPurchased: g, isPartiallyOwnedBundle: h } = (0, v.L)(t),
            O = (0, b.G1)(t),
            L = (0, b.rN)(t),
            { isDisabled: k } = (0, S.G)(t.skuId),
            I = (0, b.ne)({
                product: t,
                isPartiallyOwnedBundle: h,
                isPurchased: g,
            }),
            P = (0, T.Iw)(t),
            M = null != P,
            {
                shouldCheckoutWithOrbs: H,
                hasSufficientOrbs: D,
                checkoutEligiblePrices: W,
            } = (0, y.Ip)({
                product: t,
                isPremiumUser: d,
                tab: c,
                hasDiscountOffer: M,
            }),
            U = (0, C.sp)(),
            { analyticsLocations: V } = (0, o.ZP)(s.Z.COLLECTIBLES_SHOP_CARD),
            z = (0, x.J7)(t, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
            [G, q] = (0, i.Wu)([_.Z], () => [
                _.Z.isClaiming === t.skuId,
                null != _.Z.isClaiming && _.Z.isClaiming !== t.skuId,
            ]),
            { handleUseNow: K, isApplying: Y } = (0, E.W)({ product: t });
        return !O || d || L
            ? !I || k
                ? (0, r.jsx)(B, { handlePreviewButtonClick: z })
                : g
                  ? (0, r.jsx)(R, {
                        handleUseNow: K,
                        isApplying: Y,
                    })
                  : O
                    ? (0, r.jsx)(Z, {
                          product: t,
                          isClaimPremiumProductDisabled: q,
                          isClaiming: G,
                          tab: c,
                          analyticsLocations: V,
                          analyticsContext: U,
                      })
                    : H && D
                      ? (0, r.jsx)(w, {
                            product: t,
                            tab: c,
                            checkoutEligiblePrices: W,
                            analyticsLocations: V,
                            analyticsContext: U,
                            selectedVariantIndex: l,
                        })
                      : H && !D
                        ? (0, r.jsx)(B, { handlePreviewButtonClick: z })
                        : c === j.AW.ORBS
                          ? (0, r.jsx)(F, { handlePreviewButtonClick: z })
                          : (0, r.jsx)(N, {
                                product: t,
                                cardRef: n,
                                analyticsLocations: V,
                                selectedVariantIndex: l,
                                hasDiscountOffer: M,
                                discountOfferAmount: P,
                            })
            : (0, r.jsx)(A, { isClaimPremiumProductDisabled: q });
    };
