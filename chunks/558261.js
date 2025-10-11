n.d(t, { Z: () => W }), n(388685);
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
    h = n(381585),
    _ = n(1870),
    m = n(994587),
    b = n(884697),
    E = n(635552),
    v = n(290175),
    S = n(724994),
    O = n(786040),
    x = n(67409),
    y = n(58201),
    j = n(445794),
    T = n(956472),
    L = n(832149),
    k = n(215023),
    I = n(474936),
    B = n(388032),
    N = n(192676);
let P = (e) => {
        let {
                product: t,
                cardRef: n,
                analyticsLocations: i,
                selectedVariantIndex: o,
                hasDiscountOffer: a,
                discountOfferAmount: u,
                text: d,
            } = e,
            g = (0, b.XM)(t, !1, !1),
            f = a
                ? B.intl.formatToPlainString(B.t["5U5RBw"], { discountOfferAmount: u })
                : B.intl.formatToPlainString(B.t["cNSL/v"], { price: g });
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    (0, c.Z)({
                        skuId: (0, x.S)({
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
            textOptions: { textOverride: null != n ? n : B.intl.string(B.t.sEAnVF) },
            subscriptionTier: I.Si.TIER_2,
            showGradient: !0,
        });
    },
    R = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: null != n ? n : B.intl.string(B.t.FdGl5O),
            fullWidth: !0,
        });
    },
    Z = (e) => {
        let { handleUseNow: t, isApplying: n, text: l } = e;
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t();
            },
            loading: n,
            text: null != l ? l : B.intl.string(B.t.MAS7uL),
            fullWidth: !0,
        });
    },
    w = (e) => {
        let { skuId: t, onClick: n, text: l } = e;
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), n(t);
            },
            text: null != l ? l : B.intl.string(B.t.FdGl5O),
            fullWidth: !0,
        });
    },
    H = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: n,
                isClaiming: l,
                tab: i,
                analyticsLocations: o,
                analyticsContext: a,
                text: c,
            } = e,
            u = async () => {
                (0, O.oc)(t, i, a, "claim premium product button"),
                    await (0, C.fK)(t.skuId),
                    (0, L.Z)({
                        product: t,
                        analyticsLocations: o,
                        purchaseType: k.o8.PREMIUM_PURCHASE,
                    });
            };
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), u();
            },
            disabled: n,
            loading: l,
            loadingStartedLabel: B.intl.string(B.t["TYw+9v"]),
            loadingFinishedLabel: B.intl.string(B.t.Pg1UPz),
            text: null != c ? c : B.intl.string(B.t.zp6caG),
            fullWidth: !0,
        });
    },
    F = (e) => {
        let {
            product: t,
            tab: n,
            checkoutEligiblePrices: i,
            analyticsLocations: o,
            analyticsContext: a,
            selectedVariantIndex: c,
            text: u,
        } = e;
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            text:
                null != u
                    ? u
                    : B.intl.format(B.t.kAgx5O, {
                          orbPrice: i[0].amount,
                          orbIconHook: () => (0, r.jsx)(d.Z, { className: N.orbIconAligned }),
                      }),
            onClick: (e) => {
                e.stopPropagation(),
                    (0, O.oc)(t, n, a, "claim with orbs button"),
                    (0, g.qA)({
                        skuId: (0, x.S)({
                            product: t,
                            selectedVariantIndex: c,
                        }),
                        onCheckoutSuccess: (e) => {
                            var n;
                            let { entitlements: r } = e;
                            (0, C.qg)({ variantsReturnStyle: l.v.VARIANTS_GROUP }),
                                (0, L.Z)({
                                    product: t,
                                    analyticsLocations: o,
                                    itemConsumed: null == (n = r[0]) ? void 0 : n.consumed,
                                    purchaseType: k.o8.ORB,
                                });
                        },
                        analyticsLocations: o,
                    });
            },
            "aria-label": B.intl.formatToPlainString(B.t["fNG/09"], { orbPrice: i[0].amount }),
            fullWidth: !0,
        });
    },
    D = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: null != n ? n : B.intl.string(B.t.GpnHfH),
            fullWidth: !0,
        });
    },
    M = (e) => {
        let { product: t, cardRef: n, selectedVariantIndex: l, onClick: s, text: c, prioritizedCurrency: u } = e,
            d = (0, m.Nd)(),
            g = null == d ? void 0 : d.tab,
            C = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
            x = p.ZP.canUseCollectibles(C),
            { isPurchased: y, isPartiallyOwnedBundle: L } = (0, S.L)(t),
            k = (0, b.G1)(t),
            I = (0, b.rN)(t),
            { isDisabled: B } = (0, v.G)(t.skuId),
            N = (0, b.ne)({
                product: t,
                isPartiallyOwnedBundle: L,
                isPurchased: y,
            }),
            M = (0, j.Iw)(t),
            W = null != M,
            {
                shouldCheckoutWithOrbs: U,
                hasSufficientOrbs: V,
                checkoutEligiblePrices: z,
            } = (0, T.Ip)({
                product: t,
                isPremiumUser: x,
                prioritizedCurrency: u,
                hasDiscountOffer: W,
            }),
            G = (0, h.sp)(),
            { analyticsLocations: K } = (0, a.ZP)(o.Z.COLLECTIBLES_SHOP_CARD),
            Y = (0, O.J7)(t, o.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
            [q, Q] = (0, i.Wu)([_.Z], () => [
                _.Z.isClaiming === t.skuId,
                null != _.Z.isClaiming && _.Z.isClaiming !== t.skuId,
            ]),
            { handleUseNow: J, isApplying: X } = (0, E.W)({ product: t });
        return null != s
            ? (0, r.jsx)(w, {
                  onClick: s,
                  skuId: t.skuId,
                  text: c,
              })
            : !k || x || I
              ? !N || B
                  ? (0, r.jsx)(R, {
                        handlePreviewButtonClick: Y,
                        text: c,
                    })
                  : y
                    ? (0, r.jsx)(Z, {
                          handleUseNow: J,
                          isApplying: X,
                          text: c,
                      })
                    : k
                      ? (0, r.jsx)(H, {
                            product: t,
                            isClaimPremiumProductDisabled: Q,
                            isClaiming: q,
                            tab: g,
                            analyticsLocations: K,
                            analyticsContext: G,
                            text: c,
                        })
                      : U && V
                        ? (0, r.jsx)(F, {
                              product: t,
                              tab: g,
                              checkoutEligiblePrices: z,
                              analyticsLocations: K,
                              analyticsContext: G,
                              selectedVariantIndex: l,
                              text: c,
                          })
                        : U && !V
                          ? (0, r.jsx)(R, {
                                handlePreviewButtonClick: Y,
                                text: c,
                            })
                          : u === O.tA.ORBS
                            ? (0, r.jsx)(D, {
                                  handlePreviewButtonClick: Y,
                                  text: c,
                              })
                            : (0, r.jsx)(P, {
                                  product: t,
                                  cardRef: n,
                                  analyticsLocations: K,
                                  selectedVariantIndex: l,
                                  hasDiscountOffer: W,
                                  discountOfferAmount: M,
                                  text: c,
                              })
              : (0, r.jsx)(A, {
                    isClaimPremiumProductDisabled: Q,
                    text: c,
                });
    },
    W = (e) => {
        let { skuId: t, cardRef: n, selectedVariantIndex: l, onClick: i, text: s, prioritizedCurrency: o } = e,
            a = (0, O.LJ)(t);
        if (null == a) return null;
        let c = (0, y.W)(a, l);
        return (0, r.jsx)(M, {
            product: c,
            cardRef: n,
            selectedVariantIndex: l,
            onClick: i,
            text: s,
            prioritizedCurrency: o,
        });
    };
