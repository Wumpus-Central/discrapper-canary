n.d(t, { S: () => x }), n(388685), n(361932), n(187205);
var r = n(54381),
    l = n(473749),
    i = n(512722),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    u = n(14476),
    c = n(600164),
    d = n(347896),
    p = n(699758),
    m = n(858026),
    h = n(831895),
    f = n(314404),
    g = n(594174),
    j = n(626135),
    y = n(987209),
    v = n(563132),
    b = n(409813),
    O = n(614277),
    P = n(981631),
    S = n(182133);
function x(e) {
    var t, n, i, x, E, w;
    let { handleStepChange: I, handleClose: T } = e,
        { selectedPlan: k, selectedSkuId: C, step: N } = (0, v.JL)(),
        {
            setSelectedGiftingPromotionReward: M,
            selectedGiftingPromotionReward: R,
            claimableRewards: _,
            claimableVariants: A,
        } = (0, y.wD)(),
        L = (0, d.Z)(),
        Z = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        D = (0, p.ZP)(_, A, R),
        [F, G] = l.useState(null == D || null == (t = D.defaultHighlightedReward) ? void 0 : t.skuId),
        [B, H] = l.useState(!1),
        U = (0, m.Z)({
            claimableVariants: A,
            claimableRewards: _,
            defaultSelection: D,
            selectedGiftingPromotionReward: R,
            setSelectedGiftingPromotionReward: M,
            hasUserMadeSelection: B,
        }),
        z = l.useMemo(() => {
            var e, t;
            if (null == A || 0 === A.length) return null != (e = null == L ? void 0 : L.rewards) ? e : [];
            let n = null != (t = null == U ? void 0 : U.selectedCategory) ? t : p.KN.Trick;
            return A.flatMap((e) => {
                var t, r;
                return e.variants.length < p.mo
                    ? []
                    : ((t = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = r);
                                  });
                          }
                          return e;
                      })({}, e.variants[n])),
                      (r = r = { name: e.name }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            }),
                      t);
            });
        }, [A, null == L ? void 0 : L.rewards, null == U ? void 0 : U.selectedCategory]);
    l.useEffect(() => {
        let e = null == D ? void 0 : D.defaultHighlightedReward;
        !B && null == R && null != e && null != e && z.some((t) => t.skuId === e.skuId) && (M(e), G(e.skuId));
    }, [D, B, R, z, M]),
        a()(null != k, "Expected plan to selected"),
        a()(null != C, "Expected selectedSkuId"),
        a()(null != N, "Step should be set");
    let K = l.useMemo(() => null != F && (null != _ ? _ : []).some((e) => e.skuId === F), [F, _]),
        W = l.useMemo(() => null != R && z.some((e) => e.skuId === R.skuId), [z, R]),
        V = l.useMemo(() => 0 === z.length || null == F || !W || !K, [z, F, K, W]);
    l.useEffect(() => {
        if (0 === z.length) {
            G(void 0), M(void 0);
            return;
        }
        (K && z.some((e) => e.skuId === F)) || null == F || (G(void 0), M(void 0));
    }, [z, K, F, M]);
    let Y = (e) => {
            M(z.find((t) => t.skuId === e)), G(e), H(!0);
        },
        q = z.map((e) => {
            var t, n;
            return (0, r.jsx)(
                u.c,
                {
                    skuId: e.skuId,
                    assetId: e.assetId,
                    productName: null == (t = e.name) ? void 0 : t.call(e),
                    a11yLabel: null == (n = e.a11yLabel) ? void 0 : n.call(e),
                    claimed: null != _ && _.every((t) => t.skuId !== e.skuId),
                    user: Z,
                    onSelect: Y,
                    selectedSkuId: F,
                    category: null == U ? void 0 : U.selectedCategory,
                    type: e.type,
                    palette: e.palette,
                },
                e.skuId,
            );
        }),
        J = (0, r.jsx)(O.O3, {
            children: (0, r.jsx)(o.mzw, {
                "data-migration-pending": !0,
                className: S.modalFooter,
                children: (0, r.jsx)(f.y, {
                    onStepChange: (e) => {
                        null != Z &&
                            null != R &&
                            j.default.track(P.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: Z.id,
                                reward_sku_id: R.skuId,
                            }),
                            I(e);
                    },
                    onBackClick: () => I(b.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [k.id],
                    selectedPlanId: k.id,
                    isNextDisabled: V,
                }),
            }),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.xBx, {
                "data-migration-pending": !0,
                className: S.modalHeader,
                direction: c.Z.Direction.VERTICAL,
                align: c.Z.Align.START,
                separator: !1,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: null == L || null == (n = L.rewardSelection) ? void 0 : n.heading(),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: S.headerSubtitle,
                        children: null == L || null == (i = L.rewardSelection) ? void 0 : i.primarySubtitle(),
                    }),
                    (null == L || null == (E = L.rewardSelection) || null == (x = E.secondarySubtitle)
                        ? void 0
                        : x.call(E)) != null &&
                        (0, r.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "text-subtle",
                            children: null == L || null == (w = L.rewardSelection) ? void 0 : w.secondarySubtitle(),
                        }),
                    (0, r.jsx)(o.olH, {
                        "data-migration-pending": !0,
                        className: S.closeButton,
                        onClick: T,
                    }),
                ],
            }),
            (0, r.jsx)(o.hzk, {
                "data-migration-pending": !0,
                children: (0, r.jsxs)(o.Kqy, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: [
                        (null == U ? void 0 : U.shouldRenderCategoryControl) &&
                            (0, r.jsx)(h.Z, {
                                defaultCategory: U.selectedCategory,
                                onCategoryChange: U.setSelectedCategory,
                            }),
                        (0, r.jsx)("div", {
                            className: S.giftRewardShopCardsGrid,
                            children: q,
                        }),
                    ],
                }),
            }),
            J,
        ],
    });
}
