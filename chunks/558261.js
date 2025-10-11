n.d(t, { Z: () => D }), n(388685);
var r = n(951288);
n(647438);
var l = n(311570),
    i = n(399606),
    s = n(481060),
    o = n(100527),
    a = n(906732),
    c = n(333867),
    u = n(767714),
    d = n(960919),
    g = n(275388),
    f = n(594174),
    p = n(74538),
    C = n(335131),
    h = n(1870),
    _ = n(884697),
    m = n(635552),
    b = n(290175),
    E = n(724994),
    v = n(786040),
    S = n(67409),
    O = n(58201),
    x = n(445794),
    y = n(956472),
    j = n(832149),
    k = n(215023),
    T = n(474936),
    L = n(388032),
    I = n(192676);
let B = (e) => {
        let {
                product: t,
                cardRef: n,
                analyticsLocations: i,
                selectedVariantIndex: o,
                hasDiscountOffer: a,
                discountOfferAmount: u,
                text: d,
            } = e,
            g = (0, _.XM)(t, !1, !1),
            f = a
                ? L.intl.formatToPlainString(L.t["5U5RBw"], { discountOfferAmount: u })
                : L.intl.formatToPlainString(L.t["cNSL/v"], { price: g });
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    (0, c.Z)({
                        skuId: (0, S.S)({
                            product: t,
                            selectedVariantIndex: o,
                        }),
                        returnRef: n,
                        analyticsLocations: i,
                        variantsReturnStyle: l.v.VARIANTS_GROUP,
                    });
            },
            text: null != d ? d : f,
            fullWidth: !0,
        });
    },
    A = (e) => {
        let { isClaimPremiumProductDisabled: t, text: n } = e;
        return (0, r.jsx)(u.Z, {
            fullWidth: !0,
            disabled: t,
            onClick: (e) => e.stopPropagation(),
            textOptions: { textOverride: null != n ? n : L.intl.string(L.t.sEAnVF) },
            subscriptionTier: T.Si.TIER_2,
            showGradient: !0,
        });
    },
    N = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: null != n ? n : L.intl.string(L.t.FdGl5O),
            fullWidth: !0,
        });
    },
    P = (e) => {
        let { handleUseNow: t, isApplying: n, text: l } = e;
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t();
            },
            loading: n,
            text: null != l ? l : L.intl.string(L.t.MAS7uL),
            fullWidth: !0,
        });
    },
    R = (e) => {
        let { skuId: t, onClick: n, text: l } = e;
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), n(t);
            },
            text: null != l ? l : L.intl.string(L.t.FdGl5O),
            fullWidth: !0,
        });
    },
    Z = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: n,
                isClaiming: l,
                analyticsLocations: i,
                text: o,
                onClickAnalytics: a,
            } = e,
            c = async () => {
                null == a || a("claim premium product button"),
                    await (0, C.fK)(t.skuId),
                    (0, j.Z)({
                        product: t,
                        analyticsLocations: i,
                        purchaseType: k.o8.PREMIUM_PURCHASE,
                    });
            };
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: n,
            loading: l,
            loadingStartedLabel: L.intl.string(L.t["TYw+9v"]),
            loadingFinishedLabel: L.intl.string(L.t.Pg1UPz),
            text: null != o ? o : L.intl.string(L.t.zp6caG),
            fullWidth: !0,
        });
    },
    w = (e) => {
        let {
            product: t,
            checkoutEligiblePrices: n,
            analyticsLocations: i,
            selectedVariantIndex: o,
            text: a,
            onClickAnalytics: c,
        } = e;
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            text:
                null != a
                    ? a
                    : L.intl.format(L.t.kAgx5O, {
                          orbPrice: n[0].amount,
                          orbIconHook: () => (0, r.jsx)(d.Z, { className: I.orbIconAligned }),
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
            "aria-label": L.intl.formatToPlainString(L.t["fNG/09"], { orbPrice: n[0].amount }),
            fullWidth: !0,
        });
    },
    H = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: null != n ? n : L.intl.string(L.t.GpnHfH),
            fullWidth: !0,
        });
    },
    F = (e) => {
        let {
                product: t,
                cardRef: n,
                selectedVariantIndex: l,
                onClick: s,
                text: c,
                prioritizedCurrency: u,
                onClickAnalytics: d,
            } = e,
            g = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
            C = p.ZP.canUseCollectibles(g),
            { isPurchased: S, isPartiallyOwnedBundle: O } = (0, E.L)(t),
            j = (0, _.G1)(t),
            k = (0, _.rN)(t),
            { isDisabled: T } = (0, b.G)(t.skuId),
            L = (0, _.ne)({
                product: t,
                isPartiallyOwnedBundle: O,
                isPurchased: S,
            }),
            I = (0, x.Iw)(t),
            F = null != I,
            {
                shouldCheckoutWithOrbs: D,
                hasSufficientOrbs: M,
                checkoutEligiblePrices: W,
            } = (0, y.Ip)({
                product: t,
                isPremiumUser: C,
                prioritizedCurrency: u,
                hasDiscountOffer: F,
            }),
            { analyticsLocations: U } = (0, a.ZP)(o.Z.COLLECTIBLES_SHOP_CARD),
            V = (0, v.J7)(t, o.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d),
            [z, G] = (0, i.Wu)([h.Z], () => [
                h.Z.isClaiming === t.skuId,
                null != h.Z.isClaiming && h.Z.isClaiming !== t.skuId,
            ]),
            { handleUseNow: K, isApplying: Y } = (0, m.W)({ product: t });
        return null != s
            ? (0, r.jsx)(R, {
                  onClick: s,
                  skuId: t.skuId,
                  text: c,
              })
            : !j || C || k
              ? !L || T
                  ? (0, r.jsx)(N, {
                        handlePreviewButtonClick: V,
                        text: c,
                    })
                  : S
                    ? (0, r.jsx)(P, {
                          handleUseNow: K,
                          isApplying: Y,
                          text: c,
                      })
                    : j
                      ? (0, r.jsx)(Z, {
                            product: t,
                            isClaimPremiumProductDisabled: G,
                            isClaiming: z,
                            analyticsLocations: U,
                            text: c,
                            onClickAnalytics: d,
                        })
                      : D && M
                        ? (0, r.jsx)(w, {
                              product: t,
                              checkoutEligiblePrices: W,
                              analyticsLocations: U,
                              selectedVariantIndex: l,
                              text: c,
                              onClickAnalytics: d,
                          })
                        : D && !M
                          ? (0, r.jsx)(N, {
                                handlePreviewButtonClick: V,
                                text: c,
                            })
                          : u === v.tA.ORBS
                            ? (0, r.jsx)(H, {
                                  handlePreviewButtonClick: V,
                                  text: c,
                              })
                            : (0, r.jsx)(B, {
                                  product: t,
                                  cardRef: n,
                                  analyticsLocations: U,
                                  selectedVariantIndex: l,
                                  hasDiscountOffer: F,
                                  discountOfferAmount: I,
                                  text: c,
                              })
              : (0, r.jsx)(A, {
                    isClaimPremiumProductDisabled: G,
                    text: c,
                });
    },
    D = (e) => {
        let {
                skuId: t,
                cardRef: n,
                selectedVariantIndex: l,
                onClick: i,
                text: s,
                prioritizedCurrency: o,
                onClickAnalytics: a,
            } = e,
            c = (0, v.LJ)(t);
        if (null == c) return null;
        let u = (0, O.W)(c, l);
        return (0, r.jsx)(F, {
            product: u,
            cardRef: n,
            selectedVariantIndex: l,
            onClick: i,
            text: s,
            prioritizedCurrency: o,
            onClickAnalytics: a,
        });
    };
