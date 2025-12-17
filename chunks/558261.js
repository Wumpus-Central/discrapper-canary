n.d(t, { Z: () => V }), n(388685);
var a = n(54381);
n(473749);
var r = n(311570),
    l = n(399606),
    i = n(481060),
    s = n(100527),
    o = n(906732),
    c = n(333867),
    d = n(767714),
    u = n(706454),
    m = n(960919),
    p = n(275388),
    h = n(594174),
    f = n(74538),
    x = n(335131),
    b = n(1870),
    g = n(429368),
    v = n(884697),
    j = n(635552),
    y = n(290175),
    C = n(724994),
    _ = n(786040),
    S = n(67409),
    E = n(58201),
    T = n(445794),
    O = n(956472),
    N = n(832149),
    w = n(215023),
    P = n(474936),
    I = n(388032),
    k = n(113263);
let R = (e) => {
        let {
                product: t,
                cardRef: n,
                isPremiumUser: l,
                analyticsLocations: s,
                selectedVariantIndex: o,
                hasDiscountOffer: d,
                discountOfferAmount: u,
                text: m,
            } = e,
            p = (0, v.XM)(t, l, !1),
            h = d
                ? I.intl.formatToPlainString(I.t["5U5RB5"], { discountOfferAmount: u })
                : I.intl.formatToPlainString(I.t["cNSL/j"], { price: p });
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    (0, c.Z)({
                        skuId: (0, S.S)({
                            product: t,
                            selectedVariantIndex: o,
                        }),
                        returnRef: n,
                        analyticsLocations: s,
                        variantsReturnStyle: r.v.VARIANTS_GROUP,
                    });
            },
            text: null != m ? m : h,
            fullWidth: !0,
        });
    },
    A = (e) => {
        let { isClaimPremiumProductDisabled: t, text: n } = e;
        return (0, a.jsx)(d.Z, {
            fullWidth: !0,
            disabled: t,
            onClick: (e) => e.stopPropagation(),
            textOptions: { textOverride: null != n ? n : I.intl.string(I.t.sEAnVH) },
            subscriptionTier: P.Si.TIER_2,
            showGradient: !0,
        });
    },
    Z = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: null != n ? n : I.intl.string(I.t.FdGl5A),
            fullWidth: !0,
        });
    },
    D = (e) => {
        let { handleUseNow: t, isApplying: n, text: r } = e;
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t();
            },
            loading: n,
            text: null != r ? r : I.intl.string(I.t.MAS7uK),
            fullWidth: !0,
        });
    },
    L = (e) => {
        let { skuId: t, onClick: n, text: r } = e;
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), n(t);
            },
            text: null != r ? r : I.intl.string(I.t.FdGl5A),
            fullWidth: !0,
        });
    },
    M = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: n,
                isClaiming: r,
                analyticsLocations: l,
                text: s,
                onClickAnalytics: o,
            } = e,
            c = async () => {
                null == o || o("claim premium product button"),
                    await (0, x.fK)(t.skuId),
                    (0, N.Z)({
                        product: t,
                        analyticsLocations: l,
                        purchaseType: w.o8.PREMIUM_PURCHASE,
                    });
            };
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: n,
            loading: r,
            loadingStartedLabel: I.intl.string(I.t["TYw+9s"]),
            loadingFinishedLabel: I.intl.string(I.t.Pg1UP5),
            text: null != s ? s : I.intl.string(I.t.zp6caO),
            fullWidth: !0,
        });
    },
    U = (e) => {
        let { product: t, analyticsLocations: n, onClickAnalytics: s } = e,
            o = (0, _.jB)(),
            c = (0, l.e7)([u.default], () => u.default.locale);
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            text: I.intl.format(I.t["4NKuqc"], {
                orbPrice: w.As,
                orbIconHook: () => (0, a.jsx)(m.Z, { className: k.orbIconAligned }),
            }),
            onClick: (e) => {
                e.stopPropagation(),
                    null == s || s("rental claim with orbs button"),
                    (0, p.qA)({
                        skuId: (0, S.S)({ product: t }),
                        onCheckoutSuccess: (e) => {
                            var a, l;
                            let { entitlements: i } = e;
                            (0, x.qg)({ variantsReturnStyle: r.v.VARIANTS_GROUP });
                            let s =
                                (null == (a = i[0]) ? void 0 : a.ends_at) != null
                                    ? new Date(i[0].ends_at).toLocaleDateString(c, {
                                          minute: "numeric",
                                          hour: "numeric",
                                          day: "numeric",
                                          month: "long",
                                          year: "numeric",
                                      })
                                    : void 0;
                            (0, N.Z)({
                                product: t,
                                analyticsLocations: n,
                                itemConsumed: null == (l = i[0]) ? void 0 : l.consumed,
                                purchaseType: w.o8.ORB,
                                rentalDuration: o,
                                rentalExpiresAt: s,
                            });
                        },
                        rentalDuration: o,
                    });
            },
            "aria-label": I.intl.formatToPlainString(I.t.DlNs2T, { orbPrice: w.As }),
            fullWidth: !0,
        });
    },
    B = (e) => {
        let {
            product: t,
            checkoutEligiblePrices: n,
            analyticsLocations: l,
            selectedVariantIndex: s,
            text: o,
            onClickAnalytics: c,
        } = e;
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            text:
                null != o
                    ? o
                    : I.intl.format(I.t.kAgx5L, {
                          orbPrice: n[0].amount,
                          orbIconHook: () => (0, a.jsx)(m.Z, { className: k.orbIconAligned }),
                      }),
            onClick: (e) => {
                e.stopPropagation(),
                    null == c || c("claim with orbs button"),
                    (0, p.qA)({
                        skuId: (0, S.S)({
                            product: t,
                            selectedVariantIndex: s,
                        }),
                        onCheckoutSuccess: (e) => {
                            var n;
                            let { entitlements: a } = e;
                            (0, x.qg)({ variantsReturnStyle: r.v.VARIANTS_GROUP }),
                                (0, N.Z)({
                                    product: t,
                                    analyticsLocations: l,
                                    itemConsumed: null == (n = a[0]) ? void 0 : n.consumed,
                                    purchaseType: w.o8.ORB,
                                });
                        },
                        analyticsLocations: l,
                    });
            },
            "aria-label": I.intl.formatToPlainString(I.t["fNG/05"], { orbPrice: n[0].amount }),
            fullWidth: !0,
        });
    },
    F = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: null != n ? n : I.intl.string(I.t.GpnHfH),
            fullWidth: !0,
        });
    },
    G = (e) => {
        let {
                product: t,
                cardRef: n,
                selectedVariantIndex: r,
                onClick: i,
                text: c,
                prioritizedCurrency: d,
                onClickAnalytics: u,
            } = e,
            m = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
            p = f.ZP.canUseCollectibles(m),
            x = (0, _.jB)(),
            { isPurchased: g, isPartiallyOwnedBundle: S } = (0, C.L)(t),
            E = (0, v.G1)(t),
            N = (0, v.rN)(t),
            { isDisabled: w } = (0, y.G)(t.skuId),
            P = (0, v.ne)({
                product: t,
                isPartiallyOwnedBundle: S,
                isPurchased: g,
            }),
            I = (0, T.Iw)(t),
            k = null != I,
            {
                shouldCheckoutWithOrbs: G,
                hasSufficientOrbs: V,
                checkoutEligiblePrices: H,
            } = (0, O.Ip)({
                product: t,
                isPremiumUser: p,
                prioritizedCurrency: d,
                hasDiscountOffer: k,
                isRental: null != x,
            }),
            { analyticsLocations: z } = (0, o.ZP)(s.Z.COLLECTIBLES_SHOP_CARD),
            W = (0, _.J7)(t, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u),
            [K, q] = (0, l.Wu)([b.Z], () => [
                b.Z.isClaiming === t.skuId,
                null != b.Z.isClaiming && b.Z.isClaiming !== t.skuId,
            ]),
            { handleUseNow: Y, isApplying: Q } = (0, j.W)({ product: t });
        if (null != i)
            return (0, a.jsx)(L, {
                onClick: i,
                skuId: t.skuId,
                text: c,
            });
        if (E && !p && !N)
            return (0, a.jsx)(A, {
                isClaimPremiumProductDisabled: q,
                text: c,
            });
        if (!P || w)
            return (0, a.jsx)(Z, {
                handlePreviewButtonClick: W,
                text: c,
            });
        if (g)
            return (0, a.jsx)(D, {
                handleUseNow: Y,
                isApplying: Q,
                text: c,
            });
        if (E)
            return (0, a.jsx)(M, {
                product: t,
                isClaimPremiumProductDisabled: q,
                isClaiming: K,
                analyticsLocations: z,
                text: c,
                onClickAnalytics: u,
            });
        if (G && V)
            return null != x
                ? (0, a.jsx)(U, {
                      product: t,
                      analyticsLocations: z,
                      onClickAnalytics: u,
                  })
                : (0, a.jsx)(B, {
                      product: t,
                      checkoutEligiblePrices: H,
                      analyticsLocations: z,
                      selectedVariantIndex: r,
                      text: c,
                      onClickAnalytics: u,
                  });
        if (G && !V)
            if (H.length > 1)
                return (0, a.jsx)(F, {
                    handlePreviewButtonClick: W,
                    text: c,
                });
            else
                return (0, a.jsx)(Z, {
                    handlePreviewButtonClick: W,
                    text: c,
                });
        return (0, a.jsx)(R, {
            product: t,
            cardRef: n,
            isPremiumUser: p,
            analyticsLocations: z,
            selectedVariantIndex: r,
            hasDiscountOffer: k,
            discountOfferAmount: I,
            text: c,
        });
    },
    V = (e) => {
        let { skuId: t, cardRef: n, onClick: r, text: l, prioritizedCurrency: i, onClickAnalytics: s } = e,
            o = (0, _.LJ)(t),
            c = (0, g.o)(o);
        if (null == o) return null;
        let d = (0, E.W)(o, c);
        return (0, a.jsx)(G, {
            product: d,
            cardRef: n,
            selectedVariantIndex: c,
            onClick: r,
            text: l,
            prioritizedCurrency: i,
            onClickAnalytics: s,
        });
    };
