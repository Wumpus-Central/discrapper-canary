n.d(t, { Z: () => V }), n(388685);
var r = n(54381);
n(473749);
var l = n(311570),
    i = n(399606),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    c = n(333867),
    u = n(767714),
    d = n(706454),
    f = n(960919),
    g = n(275388),
    p = n(594174),
    m = n(74538),
    h = n(335131),
    C = n(1870),
    _ = n(429368),
    b = n(884697),
    v = n(635552),
    x = n(290175),
    E = n(724994),
    O = n(786040),
    S = n(67409),
    y = n(58201),
    j = n(445794),
    k = n(956472),
    I = n(832149),
    T = n(215023),
    L = n(474936),
    P = n(388032),
    B = n(192676);
let N = (e) => {
        let {
                product: t,
                cardRef: n,
                isPremiumUser: i,
                analyticsLocations: o,
                selectedVariantIndex: s,
                hasDiscountOffer: u,
                discountOfferAmount: d,
                text: f,
            } = e,
            g = (0, b.XM)(t, i, !1),
            p = u
                ? P.intl.formatToPlainString(P.t["5U5RB5"], { discountOfferAmount: d })
                : P.intl.formatToPlainString(P.t["cNSL/j"], { price: g });
        return (0, r.jsx)(a.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    (0, c.Z)({
                        skuId: (0, S.S)({
                            product: t,
                            selectedVariantIndex: s,
                        }),
                        returnRef: n,
                        analyticsLocations: o,
                        variantsReturnStyle: l.v.VARIANTS_GROUP,
                    });
            },
            text: null != f ? f : p,
            fullWidth: !0,
        });
    },
    A = (e) => {
        let { isClaimPremiumProductDisabled: t, text: n } = e;
        return (0, r.jsx)(u.Z, {
            fullWidth: !0,
            disabled: t,
            onClick: (e) => e.stopPropagation(),
            textOptions: { textOverride: null != n ? n : P.intl.string(P.t.sEAnVH) },
            subscriptionTier: L.Si.TIER_2,
            showGradient: !0,
        });
    },
    R = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, r.jsx)(a.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: null != n ? n : P.intl.string(P.t.FdGl5A),
            fullWidth: !0,
        });
    },
    Z = (e) => {
        let { handleUseNow: t, isApplying: n, text: l } = e;
        return (0, r.jsx)(a.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t();
            },
            loading: n,
            text: null != l ? l : P.intl.string(P.t.MAS7uK),
            fullWidth: !0,
        });
    },
    w = (e) => {
        let { skuId: t, onClick: n, text: l } = e;
        return (0, r.jsx)(a.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), n(t);
            },
            text: null != l ? l : P.intl.string(P.t.FdGl5A),
            fullWidth: !0,
        });
    },
    D = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: n,
                isClaiming: l,
                analyticsLocations: i,
                text: o,
                onClickAnalytics: s,
            } = e,
            c = async () => {
                null == s || s("claim premium product button"),
                    await (0, h.fK)(t.skuId),
                    (0, I.Z)({
                        product: t,
                        analyticsLocations: i,
                        purchaseType: T.o8.PREMIUM_PURCHASE,
                    });
            };
        return (0, r.jsx)(a.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: n,
            loading: l,
            loadingStartedLabel: P.intl.string(P.t["TYw+9s"]),
            loadingFinishedLabel: P.intl.string(P.t.Pg1UP5),
            text: null != o ? o : P.intl.string(P.t.zp6caO),
            fullWidth: !0,
        });
    },
    H = (e) => {
        let { product: t, analyticsLocations: n, onClickAnalytics: o } = e,
            s = (0, O.jB)(),
            c = (0, i.e7)([d.default], () => d.default.locale);
        return (0, r.jsx)(a.Button, {
            variant: "primary",
            text: P.intl.format(P.t["4NKuqc"], {
                orbPrice: T.As,
                orbIconHook: () => (0, r.jsx)(f.Z, { className: B.orbIconAligned }),
            }),
            onClick: (e) => {
                e.stopPropagation(),
                    null == o || o("rental claim with orbs button"),
                    (0, g.qA)({
                        skuId: (0, S.S)({ product: t }),
                        onCheckoutSuccess: (e) => {
                            var r, i;
                            let { entitlements: a } = e;
                            (0, h.qg)({ variantsReturnStyle: l.v.VARIANTS_GROUP });
                            let o =
                                (null == (r = a[0]) ? void 0 : r.ends_at) != null
                                    ? new Date(a[0].ends_at).toLocaleDateString(c, {
                                          minute: "numeric",
                                          hour: "numeric",
                                          day: "numeric",
                                          month: "long",
                                          year: "numeric",
                                      })
                                    : void 0;
                            (0, I.Z)({
                                product: t,
                                analyticsLocations: n,
                                itemConsumed: null == (i = a[0]) ? void 0 : i.consumed,
                                purchaseType: T.o8.ORB,
                                rentalDuration: s,
                                rentalExpiresAt: o,
                            });
                        },
                        isRental: !0,
                    });
            },
            "aria-label": P.intl.formatToPlainString(P.t.DlNs2T, { orbPrice: T.As }),
            fullWidth: !0,
        });
    },
    M = (e) => {
        let {
            product: t,
            checkoutEligiblePrices: n,
            analyticsLocations: i,
            selectedVariantIndex: o,
            text: s,
            onClickAnalytics: c,
        } = e;
        return (0, r.jsx)(a.Button, {
            variant: "primary",
            text:
                null != s
                    ? s
                    : P.intl.format(P.t.kAgx5L, {
                          orbPrice: n[0].amount,
                          orbIconHook: () => (0, r.jsx)(f.Z, { className: B.orbIconAligned }),
                      }),
            onClick: (e) => {
                e.stopPropagation(),
                    null == c || c("claim with orbs button"),
                    (0, g.qA)({
                        skuId: (0, S.S)({
                            product: t,
                            selectedVariantIndex: o,
                        }),
                        onCheckoutSuccess: (e) => {
                            var n;
                            let { entitlements: r } = e;
                            (0, h.qg)({ variantsReturnStyle: l.v.VARIANTS_GROUP }),
                                (0, I.Z)({
                                    product: t,
                                    analyticsLocations: i,
                                    itemConsumed: null == (n = r[0]) ? void 0 : n.consumed,
                                    purchaseType: T.o8.ORB,
                                });
                        },
                        analyticsLocations: i,
                    });
            },
            "aria-label": P.intl.formatToPlainString(P.t["fNG/05"], { orbPrice: n[0].amount }),
            fullWidth: !0,
        });
    },
    F = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, r.jsx)(a.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: null != n ? n : P.intl.string(P.t.GpnHfH),
            fullWidth: !0,
        });
    },
    W = (e) => {
        let {
                product: t,
                cardRef: n,
                selectedVariantIndex: l,
                onClick: a,
                text: c,
                prioritizedCurrency: u,
                onClickAnalytics: d,
            } = e,
            f = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
            g = m.ZP.canUseCollectibles(f),
            h = (0, O.jB)(),
            { isPurchased: _, isPartiallyOwnedBundle: S } = (0, E.L)(t),
            y = (0, b.G1)(t),
            I = (0, b.rN)(t),
            { isDisabled: T } = (0, x.G)(t.skuId),
            L = (0, b.ne)({
                product: t,
                isPartiallyOwnedBundle: S,
                isPurchased: _,
            }),
            P = (0, j.Iw)(t),
            B = null != P,
            {
                shouldCheckoutWithOrbs: W,
                hasSufficientOrbs: V,
                checkoutEligiblePrices: U,
            } = (0, k.Ip)({
                product: t,
                isPremiumUser: g,
                prioritizedCurrency: u,
                hasDiscountOffer: B,
                isRental: null != h,
            }),
            { analyticsLocations: z } = (0, s.ZP)(o.Z.COLLECTIBLES_SHOP_CARD),
            G = (0, O.J7)(t, o.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d),
            [K, Y] = (0, i.Wu)([C.Z], () => [
                C.Z.isClaiming === t.skuId,
                null != C.Z.isClaiming && C.Z.isClaiming !== t.skuId,
            ]),
            { handleUseNow: q, isApplying: J } = (0, v.W)({ product: t });
        if (null != a)
            return (0, r.jsx)(w, {
                onClick: a,
                skuId: t.skuId,
                text: c,
            });
        if (y && !g && !I)
            return (0, r.jsx)(A, {
                isClaimPremiumProductDisabled: Y,
                text: c,
            });
        if (!L || T)
            return (0, r.jsx)(R, {
                handlePreviewButtonClick: G,
                text: c,
            });
        if (_)
            return (0, r.jsx)(Z, {
                handleUseNow: q,
                isApplying: J,
                text: c,
            });
        if (y)
            return (0, r.jsx)(D, {
                product: t,
                isClaimPremiumProductDisabled: Y,
                isClaiming: K,
                analyticsLocations: z,
                text: c,
                onClickAnalytics: d,
            });
        if (W && V)
            return null != h
                ? (0, r.jsx)(H, {
                      product: t,
                      analyticsLocations: z,
                      onClickAnalytics: d,
                  })
                : (0, r.jsx)(M, {
                      product: t,
                      checkoutEligiblePrices: U,
                      analyticsLocations: z,
                      selectedVariantIndex: l,
                      text: c,
                      onClickAnalytics: d,
                  });
        if (W && !V)
            if (U.length > 1)
                return (0, r.jsx)(F, {
                    handlePreviewButtonClick: G,
                    text: c,
                });
            else
                return (0, r.jsx)(R, {
                    handlePreviewButtonClick: G,
                    text: c,
                });
        return (0, r.jsx)(N, {
            product: t,
            cardRef: n,
            isPremiumUser: g,
            analyticsLocations: z,
            selectedVariantIndex: l,
            hasDiscountOffer: B,
            discountOfferAmount: P,
            text: c,
        });
    },
    V = (e) => {
        let { skuId: t, cardRef: n, onClick: l, text: i, prioritizedCurrency: a, onClickAnalytics: o } = e,
            s = (0, O.LJ)(t),
            c = (0, _.o)(s);
        if (null == s) return null;
        let u = (0, y.W)(s, c);
        return (0, r.jsx)(W, {
            product: u,
            cardRef: n,
            selectedVariantIndex: c,
            onClick: l,
            text: i,
            prioritizedCurrency: a,
            onClickAnalytics: o,
        });
    };
