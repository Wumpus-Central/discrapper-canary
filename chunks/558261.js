n.d(t, { Z: () => z }), n(388685);
var a = n(54381);
n(473749);
var l = n(311570),
    r = n(399606),
    i = n(481060),
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
    N = n(956472),
    T = n(832149),
    P = n(215023),
    I = n(474936),
    w = n(388032),
    k = n(192676);
let R = (e) => {
        let {
                product: t,
                cardRef: n,
                isPremiumUser: r,
                analyticsLocations: s,
                selectedVariantIndex: o,
                hasDiscountOffer: d,
                discountOfferAmount: u,
                text: m,
            } = e,
            p = (0, v.XM)(t, r, !1),
            h = d
                ? w.intl.formatToPlainString(w.t["5U5RB5"], { discountOfferAmount: u })
                : w.intl.formatToPlainString(w.t["cNSL/j"], { price: p });
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
                        variantsReturnStyle: l.v.VARIANTS_GROUP,
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
            textOptions: { textOverride: null != n ? n : w.intl.string(w.t.sEAnVH) },
            subscriptionTier: I.Si.TIER_2,
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
            text: null != n ? n : w.intl.string(w.t.FdGl5A),
            fullWidth: !0,
        });
    },
    D = (e) => {
        let { handleUseNow: t, isApplying: n, text: l } = e;
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t();
            },
            loading: n,
            text: null != l ? l : w.intl.string(w.t.MAS7uK),
            fullWidth: !0,
        });
    },
    L = (e) => {
        let { skuId: t, onClick: n, text: l } = e;
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), n(t);
            },
            text: null != l ? l : w.intl.string(w.t.FdGl5A),
            fullWidth: !0,
        });
    },
    M = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: n,
                isClaiming: l,
                analyticsLocations: r,
                text: s,
                onClickAnalytics: o,
            } = e,
            c = async () => {
                null == o || o("claim premium product button"),
                    await (0, f.fK)(t.skuId),
                    (0, T.Z)({
                        product: t,
                        analyticsLocations: r,
                        purchaseType: P.o8.PREMIUM_PURCHASE,
                    });
            };
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: n,
            loading: l,
            loadingStartedLabel: w.intl.string(w.t["TYw+9s"]),
            loadingFinishedLabel: w.intl.string(w.t.Pg1UP5),
            text: null != s ? s : w.intl.string(w.t.zp6caO),
            fullWidth: !0,
        });
    },
    U = (e) => {
        let { product: t, analyticsLocations: n, onClickAnalytics: s } = e,
            o = (0, C.jB)(),
            c = (0, r.e7)([u.default], () => u.default.locale);
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            text: w.intl.format(w.t["4NKuqc"], {
                orbPrice: P.As,
                orbIconHook: () => (0, a.jsx)(m.Z, { className: k.orbIconAligned }),
            }),
            onClick: (e) => {
                e.stopPropagation(),
                    null == s || s("rental claim with orbs button"),
                    (0, p.qA)({
                        skuId: (0, S.S)({ product: t }),
                        onCheckoutSuccess: (e) => {
                            var a, r;
                            let { entitlements: i } = e;
                            (0, f.qg)({ variantsReturnStyle: l.v.VARIANTS_GROUP });
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
                            (0, T.Z)({
                                product: t,
                                analyticsLocations: n,
                                itemConsumed: null == (r = i[0]) ? void 0 : r.consumed,
                                purchaseType: P.o8.ORB,
                                rentalDuration: o,
                                rentalExpiresAt: s,
                            });
                        },
                        rentalDuration: o,
                    });
            },
            "aria-label": w.intl.formatToPlainString(w.t.DlNs2T, { orbPrice: P.As }),
            fullWidth: !0,
        });
    },
    F = (e) => {
        let {
            product: t,
            checkoutEligiblePrices: n,
            analyticsLocations: r,
            selectedVariantIndex: s,
            text: o,
            onClickAnalytics: c,
        } = e;
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            text:
                null != o
                    ? o
                    : w.intl.format(w.t.kAgx5L, {
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
                            (0, f.qg)({ variantsReturnStyle: l.v.VARIANTS_GROUP }),
                                (0, T.Z)({
                                    product: t,
                                    analyticsLocations: r,
                                    itemConsumed: null == (n = a[0]) ? void 0 : n.consumed,
                                    purchaseType: P.o8.ORB,
                                });
                        },
                        analyticsLocations: r,
                    });
            },
            "aria-label": w.intl.formatToPlainString(w.t["fNG/05"], { orbPrice: n[0].amount }),
            fullWidth: !0,
        });
    },
    B = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: null != n ? n : w.intl.string(w.t.GpnHfH),
            fullWidth: !0,
        });
    },
    G = (e) => {
        let {
                product: t,
                cardRef: n,
                selectedVariantIndex: l,
                onClick: i,
                text: c,
                prioritizedCurrency: d,
                onClickAnalytics: u,
            } = e,
            m = (0, r.e7)([h.default], () => h.default.getCurrentUser()),
            p = x.ZP.canUseCollectibles(m),
            f = (0, C.jB)(),
            { isPurchased: b, isPartiallyOwnedBundle: S } = (0, y.L)(t),
            E = (0, v.G1)(t),
            T = (0, v.rN)(t),
            { isDisabled: P } = (0, _.G)(t.skuId),
            I = (0, v.ne)({
                product: t,
                isPartiallyOwnedBundle: S,
                isPurchased: b,
            }),
            w = (0, O.Iw)(t),
            k = null != w,
            {
                shouldCheckoutWithOrbs: G,
                hasSufficientOrbs: z,
                checkoutEligiblePrices: V,
            } = (0, N.Ip)({
                product: t,
                isPremiumUser: p,
                prioritizedCurrency: d,
                hasDiscountOffer: k,
                isRental: null != f,
            }),
            { analyticsLocations: H } = (0, o.ZP)(s.Z.COLLECTIBLES_SHOP_CARD),
            W = (0, C.J7)(t, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u),
            [K, q] = (0, r.Wu)([g.Z], () => [
                g.Z.isClaiming === t.skuId,
                null != g.Z.isClaiming && g.Z.isClaiming !== t.skuId,
            ]),
            { handleUseNow: Y, isApplying: J } = (0, j.W)({ product: t });
        if (null != i)
            return (0, a.jsx)(L, {
                onClick: i,
                skuId: t.skuId,
                text: c,
            });
        if (E && !p && !T)
            return (0, a.jsx)(A, {
                isClaimPremiumProductDisabled: q,
                text: c,
            });
        if (!I || P)
            return (0, a.jsx)(Z, {
                handlePreviewButtonClick: W,
                text: c,
            });
        if (b)
            return (0, a.jsx)(D, {
                handleUseNow: Y,
                isApplying: J,
                text: c,
            });
        if (E)
            return (0, a.jsx)(M, {
                product: t,
                isClaimPremiumProductDisabled: q,
                isClaiming: K,
                analyticsLocations: H,
                text: c,
                onClickAnalytics: u,
            });
        if (G && z)
            return null != f
                ? (0, a.jsx)(U, {
                      product: t,
                      analyticsLocations: H,
                      onClickAnalytics: u,
                  })
                : (0, a.jsx)(F, {
                      product: t,
                      checkoutEligiblePrices: V,
                      analyticsLocations: H,
                      selectedVariantIndex: l,
                      text: c,
                      onClickAnalytics: u,
                  });
        if (G && !z)
            if (V.length > 1)
                return (0, a.jsx)(B, {
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
            analyticsLocations: H,
            selectedVariantIndex: l,
            hasDiscountOffer: k,
            discountOfferAmount: w,
            text: c,
        });
    },
    z = (e) => {
        let { skuId: t, cardRef: n, onClick: l, text: r, prioritizedCurrency: i, onClickAnalytics: s } = e,
            o = (0, C.LJ)(t),
            c = (0, b.o)(o);
        if (null == o) return null;
        let d = (0, E.W)(o, c);
        return (0, a.jsx)(G, {
            product: d,
            cardRef: n,
            selectedVariantIndex: c,
            onClick: l,
            text: r,
            prioritizedCurrency: i,
            onClickAnalytics: s,
        });
    };
