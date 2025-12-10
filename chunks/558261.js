n.d(t, { Z: () => V }), n(388685);
var a = n(54381);
n(473749);
var r = n(311570),
    i = n(399606),
    l = n(481060),
    s = n(100527),
    o = n(906732),
    c = n(333867),
    d = n(767714),
    u = n(706454),
    m = n(960919),
    p = n(275388),
    h = n(594174),
    x = n(74538),
    f = n(335131),
    g = n(1870),
    b = n(429368),
    v = n(884697),
    j = n(635552),
    _ = n(290175),
    y = n(724994),
    C = n(786040),
    S = n(67409),
    E = n(58201),
    O = n(445794),
    T = n(956472),
    N = n(832149),
    P = n(215023),
    w = n(474936),
    I = n(388032),
    k = n(192676);
let R = (e) => {
        let {
                product: t,
                cardRef: n,
                isPremiumUser: i,
                analyticsLocations: s,
                selectedVariantIndex: o,
                hasDiscountOffer: d,
                discountOfferAmount: u,
                text: m,
            } = e,
            p = (0, v.XM)(t, i, !1),
            h = d
                ? I.intl.formatToPlainString(I.t["5U5RB5"], { discountOfferAmount: u })
                : I.intl.formatToPlainString(I.t["cNSL/j"], { price: p });
        return (0, a.jsx)(l.Button, {
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
            subscriptionTier: w.Si.TIER_2,
            showGradient: !0,
        });
    },
    D = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, a.jsx)(l.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: null != n ? n : I.intl.string(I.t.FdGl5A),
            fullWidth: !0,
        });
    },
    Z = (e) => {
        let { handleUseNow: t, isApplying: n, text: r } = e;
        return (0, a.jsx)(l.Button, {
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
        return (0, a.jsx)(l.Button, {
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
                analyticsLocations: i,
                text: s,
                onClickAnalytics: o,
            } = e,
            c = async () => {
                null == o || o("claim premium product button"),
                    await (0, f.fK)(t.skuId),
                    (0, N.Z)({
                        product: t,
                        analyticsLocations: i,
                        purchaseType: P.o8.PREMIUM_PURCHASE,
                    });
            };
        return (0, a.jsx)(l.Button, {
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
            o = (0, C.jB)(),
            c = (0, i.e7)([u.default], () => u.default.locale);
        return (0, a.jsx)(l.Button, {
            variant: "primary",
            text: I.intl.format(I.t["4NKuqc"], {
                orbPrice: P.As,
                orbIconHook: () => (0, a.jsx)(m.Z, { className: k.orbIconAligned }),
            }),
            onClick: (e) => {
                e.stopPropagation(),
                    null == s || s("rental claim with orbs button"),
                    (0, p.qA)({
                        skuId: (0, S.S)({ product: t }),
                        onCheckoutSuccess: (e) => {
                            var a, i;
                            let { entitlements: l } = e;
                            (0, f.qg)({ variantsReturnStyle: r.v.VARIANTS_GROUP });
                            let s =
                                (null == (a = l[0]) ? void 0 : a.ends_at) != null
                                    ? new Date(l[0].ends_at).toLocaleDateString(c, {
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
                                itemConsumed: null == (i = l[0]) ? void 0 : i.consumed,
                                purchaseType: P.o8.ORB,
                                rentalDuration: o,
                                rentalExpiresAt: s,
                            });
                        },
                        rentalDuration: o,
                    });
            },
            "aria-label": I.intl.formatToPlainString(I.t.DlNs2T, { orbPrice: P.As }),
            fullWidth: !0,
        });
    },
    B = (e) => {
        let {
            product: t,
            checkoutEligiblePrices: n,
            analyticsLocations: i,
            selectedVariantIndex: s,
            text: o,
            onClickAnalytics: c,
        } = e;
        return (0, a.jsx)(l.Button, {
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
                            (0, f.qg)({ variantsReturnStyle: r.v.VARIANTS_GROUP }),
                                (0, N.Z)({
                                    product: t,
                                    analyticsLocations: i,
                                    itemConsumed: null == (n = a[0]) ? void 0 : n.consumed,
                                    purchaseType: P.o8.ORB,
                                });
                        },
                        analyticsLocations: i,
                    });
            },
            "aria-label": I.intl.formatToPlainString(I.t["fNG/05"], { orbPrice: n[0].amount }),
            fullWidth: !0,
        });
    },
    F = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, a.jsx)(l.Button, {
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
                onClick: l,
                text: c,
                prioritizedCurrency: d,
                onClickAnalytics: u,
            } = e,
            m = (0, i.e7)([h.default], () => h.default.getCurrentUser()),
            p = x.ZP.canUseCollectibles(m),
            f = (0, C.jB)(),
            { isPurchased: b, isPartiallyOwnedBundle: S } = (0, y.L)(t),
            E = (0, v.G1)(t),
            N = (0, v.rN)(t),
            { isDisabled: P } = (0, _.G)(t.skuId),
            w = (0, v.ne)({
                product: t,
                isPartiallyOwnedBundle: S,
                isPurchased: b,
            }),
            I = (0, O.Iw)(t),
            k = null != I,
            {
                shouldCheckoutWithOrbs: G,
                hasSufficientOrbs: V,
                checkoutEligiblePrices: H,
            } = (0, T.Ip)({
                product: t,
                isPremiumUser: p,
                prioritizedCurrency: d,
                hasDiscountOffer: k,
                isRental: null != f,
            }),
            { analyticsLocations: W } = (0, o.ZP)(s.Z.COLLECTIBLES_SHOP_CARD),
            z = (0, C.J7)(t, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u),
            [q, K] = (0, i.Wu)([g.Z], () => [
                g.Z.isClaiming === t.skuId,
                null != g.Z.isClaiming && g.Z.isClaiming !== t.skuId,
            ]),
            { handleUseNow: Q, isApplying: Y } = (0, j.W)({ product: t });
        if (null != l)
            return (0, a.jsx)(L, {
                onClick: l,
                skuId: t.skuId,
                text: c,
            });
        if (E && !p && !N)
            return (0, a.jsx)(A, {
                isClaimPremiumProductDisabled: K,
                text: c,
            });
        if (!w || P)
            return (0, a.jsx)(D, {
                handlePreviewButtonClick: z,
                text: c,
            });
        if (b)
            return (0, a.jsx)(Z, {
                handleUseNow: Q,
                isApplying: Y,
                text: c,
            });
        if (E)
            return (0, a.jsx)(M, {
                product: t,
                isClaimPremiumProductDisabled: K,
                isClaiming: q,
                analyticsLocations: W,
                text: c,
                onClickAnalytics: u,
            });
        if (G && V)
            return null != f
                ? (0, a.jsx)(U, {
                      product: t,
                      analyticsLocations: W,
                      onClickAnalytics: u,
                  })
                : (0, a.jsx)(B, {
                      product: t,
                      checkoutEligiblePrices: H,
                      analyticsLocations: W,
                      selectedVariantIndex: r,
                      text: c,
                      onClickAnalytics: u,
                  });
        if (G && !V)
            if (H.length > 1)
                return (0, a.jsx)(F, {
                    handlePreviewButtonClick: z,
                    text: c,
                });
            else
                return (0, a.jsx)(D, {
                    handlePreviewButtonClick: z,
                    text: c,
                });
        return (0, a.jsx)(R, {
            product: t,
            cardRef: n,
            isPremiumUser: p,
            analyticsLocations: W,
            selectedVariantIndex: r,
            hasDiscountOffer: k,
            discountOfferAmount: I,
            text: c,
        });
    },
    V = (e) => {
        let { skuId: t, cardRef: n, onClick: r, text: i, prioritizedCurrency: l, onClickAnalytics: s } = e,
            o = (0, C.LJ)(t),
            c = (0, b.o)(o);
        if (null == o) return null;
        let d = (0, E.W)(o, c);
        return (0, a.jsx)(G, {
            product: d,
            cardRef: n,
            selectedVariantIndex: c,
            onClick: r,
            text: i,
            prioritizedCurrency: l,
            onClickAnalytics: s,
        });
    };
