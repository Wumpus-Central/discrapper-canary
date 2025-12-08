n.d(t, { S: () => O }), n(388685), n(361932), n(187205);
var l = n(54381),
    r = n(473749),
    i = n(512722),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    u = n(14476),
    c = n(600164),
    d = n(347896),
    m = n(699758),
    p = n(858026),
    h = n(831895),
    f = n(314404),
    g = n(594174),
    v = n(626135),
    j = n(987209),
    y = n(563132),
    b = n(409813),
    S = n(614277),
    x = n(981631),
    P = n(950174);
function O(e) {
    var t, n, i, O, E, I;
    let { handleStepChange: w, handleClose: T } = e,
        { selectedPlan: k, selectedSkuId: C, step: N } = (0, y.JL)(),
        {
            setSelectedGiftingPromotionReward: M,
            selectedGiftingPromotionReward: R,
            claimableRewards: _,
            claimableVariants: A,
        } = (0, j.wD)(),
        L = (0, d.Z)(),
        Z = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        D = (0, m.ZP)(_, A, R),
        [F, B] = r.useState(null == D || null == (t = D.defaultHighlightedReward) ? void 0 : t.skuId),
        [G, H] = r.useState(!1),
        U = (0, p.Z)({
            claimableVariants: A,
            claimableRewards: _,
            defaultSelection: D,
            selectedGiftingPromotionReward: R,
            setSelectedGiftingPromotionReward: M,
            hasUserMadeSelection: G,
        }),
        z = r.useMemo(() => {
            var e, t;
            if (null == A || 0 === A.length) return null != (e = null == L ? void 0 : L.rewards) ? e : [];
            let n = null != (t = null == U ? void 0 : U.selectedCategory) ? t : m.KN.Trick;
            return A.flatMap((e) => {
                var t, l;
                return e.variants.length < m.mo
                    ? []
                    : ((t = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  l = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (l = l.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  l.forEach(function (t) {
                                      var l;
                                      (l = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: l,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = l);
                                  });
                          }
                          return e;
                      })({}, e.variants[n])),
                      (l = l = { name: e.name }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, l);
                                }
                                return n;
                            })(Object(l)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                            }),
                      t);
            });
        }, [A, null == L ? void 0 : L.rewards, null == U ? void 0 : U.selectedCategory]);
    r.useEffect(() => {
        let e = null == D ? void 0 : D.defaultHighlightedReward;
        !G && null == R && null != e && null != e && z.some((t) => t.skuId === e.skuId) && (M(e), B(e.skuId));
    }, [D, G, R, z, M]),
        a()(null != k, "Expected plan to selected"),
        a()(null != C, "Expected selectedSkuId"),
        a()(null != N, "Step should be set");
    let K = r.useMemo(() => null != F && (null != _ ? _ : []).some((e) => e.skuId === F), [F, _]),
        W = r.useMemo(() => null != R && z.some((e) => e.skuId === R.skuId), [z, R]),
        V = r.useMemo(() => 0 === z.length || null == F || !W || !K, [z, F, K, W]);
    r.useEffect(() => {
        if (0 === z.length) {
            B(void 0), M(void 0);
            return;
        }
        (K && z.some((e) => e.skuId === F)) || null == F || (B(void 0), M(void 0));
    }, [z, K, F, M]);
    let Y = (e) => {
            M(z.find((t) => t.skuId === e)), B(e), H(!0);
        },
        q = z.map((e) => {
            var t, n;
            return (0, l.jsx)(
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
        J = (0, l.jsx)(S.O3, {
            children: (0, l.jsx)(o.mzw, {
                "data-migration-pending": !0,
                className: P.modalFooter,
                children: (0, l.jsx)(f.y, {
                    onStepChange: (e) => {
                        null != Z &&
                            null != R &&
                            v.default.track(x.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: Z.id,
                                reward_sku_id: R.skuId,
                            }),
                            w(e);
                    },
                    onBackClick: () => w(b.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [k.id],
                    selectedPlanId: k.id,
                    isNextDisabled: V,
                }),
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(o.xBx, {
                "data-migration-pending": !0,
                className: P.modalHeader,
                direction: c.Z.Direction.VERTICAL,
                align: c.Z.Align.START,
                separator: !1,
                children: [
                    (0, l.jsx)(o.Heading, {
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        children: null == L || null == (n = L.rewardSelection) ? void 0 : n.heading(),
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: P.headerSubtitle,
                        children: null == L || null == (i = L.rewardSelection) ? void 0 : i.primarySubtitle(),
                    }),
                    (null == L || null == (E = L.rewardSelection) || null == (O = E.secondarySubtitle)
                        ? void 0
                        : O.call(E)) != null &&
                        (0, l.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "text-subtle",
                            children: null == L || null == (I = L.rewardSelection) ? void 0 : I.secondarySubtitle(),
                        }),
                    (0, l.jsx)(o.olH, {
                        "data-migration-pending": !0,
                        className: P.closeButton,
                        onClick: T,
                    }),
                ],
            }),
            (0, l.jsx)(o.hzk, {
                "data-migration-pending": !0,
                children: (0, l.jsxs)(o.Kqy, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: [
                        (null == U ? void 0 : U.shouldRenderCategoryControl) &&
                            (0, l.jsx)(h.Z, {
                                defaultCategory: U.selectedCategory,
                                onCategoryChange: U.setSelectedCategory,
                            }),
                        (0, l.jsx)("div", {
                            className: P.giftRewardShopCardsGrid,
                            children: q,
                        }),
                    ],
                }),
            }),
            J,
        ],
    });
}
