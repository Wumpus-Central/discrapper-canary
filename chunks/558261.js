n.d(t, { Z: () => F }), n(388685);
var r = n(951288);
n(647438);
var l = n(311570),
    i = n(399606),
    o = n(481060),
    s = n(100527),
    a = n(906732),
    c = n(333867),
    u = n(767714),
    d = n(960919),
    g = n(275388),
    f = n(594174),
    p = n(74538),
    C = n(335131),
    h = n(1870),
    _ = n(429368),
    m = n(884697),
    b = n(635552),
    E = n(290175),
    v = n(724994),
    x = n(786040),
    O = n(67409),
    S = n(58201),
    y = n(445794),
    k = n(956472),
    T = n(832149),
    j = n(215023),
    L = n(474936),
    I = n(388032),
    B = n(192676);
let A = (e) => {
        let {
                product: t,
                cardRef: n,
                analyticsLocations: i,
                selectedVariantIndex: s,
                hasDiscountOffer: a,
                discountOfferAmount: u,
                text: d,
            } = e,
            g = (0, m.XM)(t, !1, !1),
            f = a
                ? I.intl.formatToPlainString(I.t["5U5RBw"], { discountOfferAmount: u })
                : I.intl.formatToPlainString(I.t["cNSL/v"], { price: g });
        return (0, r.jsx)(o.Button, {
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
            text: null != d ? d : f,
            fullWidth: !0,
        });
    },
    N = (e) => {
        let { isClaimPremiumProductDisabled: t, text: n } = e;
        return (0, r.jsx)(u.Z, {
            fullWidth: !0,
            disabled: t,
            onClick: (e) => e.stopPropagation(),
            textOptions: { textOverride: null != n ? n : I.intl.string(I.t.sEAnVF) },
            subscriptionTier: L.Si.TIER_2,
            showGradient: !0,
        });
    },
    P = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, r.jsx)(o.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: null != n ? n : I.intl.string(I.t.FdGl5O),
            fullWidth: !0,
        });
    },
    R = (e) => {
        let { handleUseNow: t, isApplying: n, text: l } = e;
        return (0, r.jsx)(o.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t();
            },
            loading: n,
            text: null != l ? l : I.intl.string(I.t.MAS7uL),
            fullWidth: !0,
        });
    },
    Z = (e) => {
        let { skuId: t, onClick: n, text: l } = e;
        return (0, r.jsx)(o.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), n(t);
            },
            text: null != l ? l : I.intl.string(I.t.FdGl5O),
            fullWidth: !0,
        });
    },
    w = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: n,
                isClaiming: l,
                analyticsLocations: i,
                text: s,
                onClickAnalytics: a,
            } = e,
            c = async () => {
                null == a || a("claim premium product button"),
                    await (0, C.fK)(t.skuId),
                    (0, T.Z)({
                        product: t,
                        analyticsLocations: i,
                        purchaseType: j.o8.PREMIUM_PURCHASE,
                    });
            };
        return (0, r.jsx)(o.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: n,
            loading: l,
            loadingStartedLabel: I.intl.string(I.t["TYw+9v"]),
            loadingFinishedLabel: I.intl.string(I.t.Pg1UPz),
            text: null != s ? s : I.intl.string(I.t.zp6caG),
            fullWidth: !0,
        });
    },
    H = (e) => {
        let {
            product: t,
            checkoutEligiblePrices: n,
            analyticsLocations: i,
            selectedVariantIndex: s,
            text: a,
            onClickAnalytics: c,
        } = e;
        return (0, r.jsx)(o.Button, {
            variant: "primary",
            text:
                null != a
                    ? a
                    : I.intl.format(I.t.kAgx5O, {
                          orbPrice: n[0].amount,
                          orbIconHook: () => (0, r.jsx)(d.Z, { className: B.orbIconAligned }),
                      }),
            onClick: (e) => {
                e.stopPropagation(),
                    null == c || c("claim with orbs button"),
                    (0, g.qA)({
                        skuId: (0, O.S)({
                            product: t,
                            selectedVariantIndex: s,
                        }),
                        onCheckoutSuccess: (e) => {
                            var n;
                            let { entitlements: r } = e;
                            (0, C.qg)({ variantsReturnStyle: l.v.VARIANTS_GROUP }),
                                (0, T.Z)({
                                    product: t,
                                    analyticsLocations: i,
                                    itemConsumed: null == (n = r[0]) ? void 0 : n.consumed,
                                    purchaseType: j.o8.ORB,
                                });
                        },
                        analyticsLocations: i,
                    });
            },
            "aria-label": I.intl.formatToPlainString(I.t["fNG/09"], { orbPrice: n[0].amount }),
            fullWidth: !0,
        });
    },
    M = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, r.jsx)(o.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: null != n ? n : I.intl.string(I.t.GpnHfH),
            fullWidth: !0,
        });
    },
    D = (e) => {
        let {
                product: t,
                cardRef: n,
                selectedVariantIndex: l,
                onClick: o,
                text: c,
                prioritizedCurrency: u,
                onClickAnalytics: d,
            } = e,
            g = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
            C = p.ZP.canUseCollectibles(g),
            { isPurchased: _, isPartiallyOwnedBundle: O } = (0, v.L)(t),
            S = (0, m.G1)(t),
            T = (0, m.rN)(t),
            { isDisabled: j } = (0, E.G)(t.skuId),
            L = (0, m.ne)({
                product: t,
                isPartiallyOwnedBundle: O,
                isPurchased: _,
            }),
            I = (0, y.Iw)(t),
            B = null != I,
            {
                shouldCheckoutWithOrbs: D,
                hasSufficientOrbs: F,
                checkoutEligiblePrices: W,
            } = (0, k.Ip)({
                product: t,
                isPremiumUser: C,
                prioritizedCurrency: u,
                hasDiscountOffer: B,
            }),
            { analyticsLocations: U } = (0, a.ZP)(s.Z.COLLECTIBLES_SHOP_CARD),
            V = (0, x.J7)(t, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d),
            [z, G] = (0, i.Wu)([h.Z], () => [
                h.Z.isClaiming === t.skuId,
                null != h.Z.isClaiming && h.Z.isClaiming !== t.skuId,
            ]),
            { handleUseNow: K, isApplying: Y } = (0, b.W)({ product: t });
        return null != o
            ? (0, r.jsx)(Z, {
                  onClick: o,
                  skuId: t.skuId,
                  text: c,
              })
            : !S || C || T
              ? !L || j
                  ? (0, r.jsx)(P, {
                        handlePreviewButtonClick: V,
                        text: c,
                    })
                  : _
                    ? (0, r.jsx)(R, {
                          handleUseNow: K,
                          isApplying: Y,
                          text: c,
                      })
                    : S
                      ? (0, r.jsx)(w, {
                            product: t,
                            isClaimPremiumProductDisabled: G,
                            isClaiming: z,
                            analyticsLocations: U,
                            text: c,
                            onClickAnalytics: d,
                        })
                      : D && F
                        ? (0, r.jsx)(H, {
                              product: t,
                              checkoutEligiblePrices: W,
                              analyticsLocations: U,
                              selectedVariantIndex: l,
                              text: c,
                              onClickAnalytics: d,
                          })
                        : D && !F
                          ? (0, r.jsx)(P, {
                                handlePreviewButtonClick: V,
                                text: c,
                            })
                          : u === x.tA.ORBS
                            ? (0, r.jsx)(M, {
                                  handlePreviewButtonClick: V,
                                  text: c,
                              })
                            : (0, r.jsx)(A, {
                                  product: t,
                                  cardRef: n,
                                  analyticsLocations: U,
                                  selectedVariantIndex: l,
                                  hasDiscountOffer: B,
                                  discountOfferAmount: I,
                                  text: c,
                              })
              : (0, r.jsx)(N, {
                    isClaimPremiumProductDisabled: G,
                    text: c,
                });
    },
    F = (e) => {
        let { skuId: t, cardRef: n, onClick: l, text: i, prioritizedCurrency: o, onClickAnalytics: s } = e,
            a = (0, x.LJ)(t),
            c = (0, _.o)(a);
        if (null == a) return null;
        let u = (0, S.W)(a, c);
        return (0, r.jsx)(D, {
            product: u,
            cardRef: n,
            selectedVariantIndex: c,
            onClick: l,
            text: i,
            prioritizedCurrency: o,
            onClickAnalytics: s,
        });
    };
