n.d(t, { Z: () => F }), n(388685);
var r = n(951288);
n(647438);
var l = n(311570),
    a = n(399606),
    i = n(481060),
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
    m = n(884697),
    b = n(635552),
    E = n(290175),
    S = n(724994),
    x = n(786040),
    v = n(67409),
    O = n(445794),
    T = n(956472),
    y = n(832149),
    L = n(215023),
    j = n(474936),
    k = n(388032),
    I = n(192676);
let P = (e) => {
        let {
                product: t,
                cardRef: n,
                analyticsLocations: a,
                selectedVariantIndex: s,
                hasDiscountOffer: o,
                discountOfferAmount: u,
            } = e,
            d = (0, m.XM)(t, !1, !1),
            g = o
                ? k.intl.formatToPlainString(k.t["5U5RBw"], { discountOfferAmount: u })
                : k.intl.formatToPlainString(k.t["cNSL/v"], { price: d });
        return (0, r.jsx)(i.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    (0, c.Z)({
                        skuId: (0, v.S)({
                            product: t,
                            selectedVariantIndex: s,
                        }),
                        returnRef: n,
                        analyticsLocations: a,
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
                textOptions: { textOverride: k.intl.string(k.t.sEAnVF) },
                subscriptionTier: j.Si.TIER_2,
            }),
        });
    },
    B = (e) => {
        let { handlePreviewButtonClick: t } = e;
        return (0, r.jsx)(i.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: k.intl.string(k.t.FdGl5O),
            fullWidth: !0,
        });
    },
    N = (e) => {
        let { handleUseNow: t, isApplying: n } = e;
        return (0, r.jsx)(i.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t();
            },
            loading: n,
            text: k.intl.string(k.t.MAS7uL),
            fullWidth: !0,
        });
    },
    R = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: n,
                isClaiming: l,
                tab: a,
                analyticsLocations: s,
                analyticsContext: o,
            } = e,
            c = async () => {
                (0, x.oc)(t, a, o, "claim premium product button"),
                    await (0, h.fK)(t.skuId),
                    (0, y.Z)({
                        product: t,
                        analyticsLocations: s,
                        purchaseType: L.o8.PREMIUM_PURCHASE,
                    });
            };
        return (0, r.jsx)(i.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: n,
            loading: l,
            loadingStartedLabel: k.intl.string(k.t["TYw+9v"]),
            loadingFinishedLabel: k.intl.string(k.t.Pg1UPz),
            text: k.intl.string(k.t.zp6caG),
            fullWidth: !0,
        });
    },
    Z = (e) => {
        let {
            product: t,
            tab: n,
            checkoutEligiblePrices: a,
            analyticsLocations: s,
            analyticsContext: o,
            selectedVariantIndex: c,
        } = e;
        return (0, r.jsx)(i.zxk, {
            variant: "primary",
            text: k.intl.format(k.t.kAgx5O, {
                orbPrice: a[0].amount,
                orbIconHook: () => (0, r.jsx)(d.Z, { className: I.orbIconAligned }),
            }),
            onClick: (e) => {
                e.stopPropagation(),
                    (0, x.oc)(t, n, o, "claim with orbs button"),
                    (0, g.qA)({
                        skuId: (0, v.S)({
                            product: t,
                            selectedVariantIndex: c,
                        }),
                        onCheckoutSuccess: (e) => {
                            var n;
                            let { entitlements: r } = e;
                            (0, h.qg)({ variantsReturnStyle: l.v.VARIANTS_GROUP }),
                                (0, y.Z)({
                                    product: t,
                                    analyticsLocations: s,
                                    itemConsumed: null == (n = r[0]) ? void 0 : n.consumed,
                                    purchaseType: L.o8.ORB,
                                });
                        },
                        analyticsLocations: s,
                    });
            },
            "aria-label": k.intl.formatToPlainString(k.t["fNG/09"], { orbPrice: a[0].amount }),
            fullWidth: !0,
        });
    },
    w = (e) => {
        let { handlePreviewButtonClick: t } = e;
        return (0, r.jsx)(i.zxk, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: k.intl.string(k.t.GpnHfH),
            fullWidth: !0,
        });
    },
    F = (e) => {
        let { product: t, cardRef: n, config: l, selectedVariantIndex: i } = e,
            c = (0, a.e7)([p.default], () => p.default.getCurrentUser()),
            u = f.ZP.canUseCollectibles(c),
            { isPurchased: d, isPartiallyOwnedBundle: g } = (0, S.L)(t),
            h = (0, m.G1)(t),
            v = (0, m.rN)(t),
            { isDisabled: y } = (0, E.G)(t.skuId),
            j = (0, m.ne)({
                product: t,
                isPartiallyOwnedBundle: g,
                isPurchased: d,
            }),
            k = (0, O.Iw)(t),
            I = null != k,
            {
                shouldCheckoutWithOrbs: F,
                hasSufficientOrbs: H,
                checkoutEligiblePrices: M,
            } = (0, T.Ip)({
                product: t,
                isPremiumUser: u,
                tab: l.tab,
                hasDiscountOffer: I,
            }),
            D = (0, C.sp)(),
            { analyticsLocations: W } = (0, o.ZP)(s.Z.COLLECTIBLES_SHOP_CARD),
            U = (0, x.J7)(t, l, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
            [V, z] = (0, a.Wu)([_.Z], () => [
                _.Z.isClaiming === t.skuId,
                null != _.Z.isClaiming && _.Z.isClaiming !== t.skuId,
            ]),
            { handleUseNow: G, isApplying: q } = (0, b.W)({ product: t });
        return !h || u || v
            ? !j || y
                ? (0, r.jsx)(B, { handlePreviewButtonClick: U })
                : d
                  ? (0, r.jsx)(N, {
                        handleUseNow: G,
                        isApplying: q,
                    })
                  : h
                    ? (0, r.jsx)(R, {
                          product: t,
                          isClaimPremiumProductDisabled: z,
                          isClaiming: V,
                          tab: l.tab,
                          analyticsLocations: W,
                          analyticsContext: D,
                      })
                    : F && H
                      ? (0, r.jsx)(Z, {
                            product: t,
                            tab: l.tab,
                            checkoutEligiblePrices: M,
                            analyticsLocations: W,
                            analyticsContext: D,
                            selectedVariantIndex: i,
                        })
                      : F && !H
                        ? (0, r.jsx)(B, { handlePreviewButtonClick: U })
                        : l.tab === L.AW.ORBS
                          ? (0, r.jsx)(w, { handlePreviewButtonClick: U })
                          : (0, r.jsx)(P, {
                                product: t,
                                cardRef: n,
                                analyticsLocations: W,
                                selectedVariantIndex: i,
                                hasDiscountOffer: I,
                                discountOfferAmount: k,
                            })
            : (0, r.jsx)(A, { isClaimPremiumProductDisabled: z });
    };
