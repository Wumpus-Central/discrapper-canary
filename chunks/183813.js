n.d(t, { S: () => _ }), n(388685), n(361932), n(187205);
var r = n(54381),
    l = n(473749),
    a = n(512722),
    i = n.n(a),
    o = n(442837),
    s = n(481060),
    d = n(14476),
    c = n(600164),
    u = n(347896),
    p = n(699758),
    m = n(858026),
    h = n(831895),
    f = n(314404),
    b = n(594174),
    g = n(626135),
    v = n(987209),
    x = n(563132),
    y = n(409813),
    P = n(614277),
    S = n(981631),
    j = n(950174);
function _(e) {
    var t, n, a, _, w, O;
    let { handleStepChange: C, handleClose: k } = e,
        { selectedPlan: E, selectedSkuId: I, step: T } = (0, x.JL)(),
        {
            setSelectedGiftingPromotionReward: N,
            selectedGiftingPromotionReward: R,
            claimableRewards: M,
            claimableVariants: A,
        } = (0, v.wD)(),
        Z = (0, u.Z)(),
        L = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        B = (0, p.ZP)(M, A, R),
        [D, F] = l.useState(null == B || null == (t = B.defaultHighlightedReward) ? void 0 : t.skuId),
        [H, G] = l.useState(!1),
        U = (0, m.Z)({
            claimableVariants: A,
            claimableRewards: M,
            defaultSelection: B,
            selectedGiftingPromotionReward: R,
            setSelectedGiftingPromotionReward: N,
            hasUserMadeSelection: H,
        }),
        z = l.useMemo(() => {
            var e, t;
            if (null == A || 0 === A.length) return null != (e = null == Z ? void 0 : Z.rewards) ? e : [];
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
        }, [A, null == Z ? void 0 : Z.rewards, null == U ? void 0 : U.selectedCategory]);
    l.useEffect(() => {
        let e = null == B ? void 0 : B.defaultHighlightedReward;
        !H && null == R && null != e && null != e && z.some((t) => t.skuId === e.skuId) && (N(e), F(e.skuId));
    }, [B, H, R, z, N]),
        i()(null != E, "Expected plan to selected"),
        i()(null != I, "Expected selectedSkuId"),
        i()(null != T, "Step should be set");
    let K = l.useMemo(() => null != D && (null != M ? M : []).some((e) => e.skuId === D), [D, M]),
        W = l.useMemo(() => null != R && z.some((e) => e.skuId === R.skuId), [z, R]),
        Y = l.useMemo(() => 0 === z.length || null == D || !W || !K, [z, D, K, W]);
    l.useEffect(() => {
        if (0 === z.length) {
            F(void 0), N(void 0);
            return;
        }
        (K && z.some((e) => e.skuId === D)) || null == D || (F(void 0), N(void 0));
    }, [z, K, D, N]);
    let V = (e) => {
            N(z.find((t) => t.skuId === e)), F(e), G(!0);
        },
        q = z.map((e) => {
            var t, n;
            return (0, r.jsx)(
                d.c,
                {
                    skuId: e.skuId,
                    assetId: e.assetId,
                    productName: null == (t = e.name) ? void 0 : t.call(e),
                    a11yLabel: null == (n = e.a11yLabel) ? void 0 : n.call(e),
                    claimed: null != M && M.every((t) => t.skuId !== e.skuId),
                    user: L,
                    onSelect: V,
                    selectedSkuId: D,
                    category: null == U ? void 0 : U.selectedCategory,
                    type: e.type,
                    palette: e.palette,
                },
                e.skuId,
            );
        }),
        J = (0, r.jsx)(P.O3, {
            children: (0, r.jsx)(s.mzw, {
                "data-migration-pending": !0,
                className: j.modalFooter,
                children: (0, r.jsx)(f.y, {
                    onStepChange: (e) => {
                        null != L &&
                            null != R &&
                            g.default.track(S.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: L.id,
                                reward_sku_id: R.skuId,
                            }),
                            C(e);
                    },
                    onBackClick: () => C(y.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [E.id],
                    selectedPlanId: E.id,
                    isNextDisabled: Y,
                }),
            }),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.xBx, {
                "data-migration-pending": !0,
                className: j.modalHeader,
                direction: c.Z.Direction.VERTICAL,
                align: c.Z.Align.START,
                separator: !1,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        children: null == Z || null == (n = Z.rewardSelection) ? void 0 : n.heading(),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "text-secondary",
                        className: j.headerSubtitle,
                        children: null == Z || null == (a = Z.rewardSelection) ? void 0 : a.primarySubtitle(),
                    }),
                    (null == Z || null == (w = Z.rewardSelection) || null == (_ = w.secondarySubtitle)
                        ? void 0
                        : _.call(w)) != null &&
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "text-secondary",
                            children: null == Z || null == (O = Z.rewardSelection) ? void 0 : O.secondarySubtitle(),
                        }),
                    (0, r.jsx)(s.olH, {
                        "data-migration-pending": !0,
                        className: j.closeButton,
                        onClick: k,
                    }),
                ],
            }),
            (0, r.jsx)(s.hzk, {
                "data-migration-pending": !0,
                children: (0, r.jsxs)(s.Kqy, {
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
                            className: j.giftRewardShopCardsGrid,
                            children: q,
                        }),
                    ],
                }),
            }),
            J,
        ],
    });
}
