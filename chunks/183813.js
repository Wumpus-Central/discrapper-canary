n.d(t, { S: () => O }), n(388685), n(361932), n(187205);
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
    P = n(563132),
    x = n(409813),
    y = n(614277),
    j = n(981631),
    S = n(388032),
    _ = n(739621);
function O(e) {
    var t;
    let { handleStepChange: n, handleClose: a } = e,
        { selectedPlan: O, selectedSkuId: w, step: C } = (0, P.JL)(),
        {
            setSelectedGiftingPromotionReward: k,
            selectedGiftingPromotionReward: E,
            claimableRewards: I,
            claimableVariants: T,
        } = (0, v.wD)(),
        N = (0, u.Z)(),
        R = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        M = (0, p.ZP)(I, T, E),
        [A, Z] = l.useState(null == M || null == (t = M.defaultHighlightedReward) ? void 0 : t.skuId),
        [L, B] = l.useState(!1),
        D = (0, m.Z)({
            claimableVariants: T,
            claimableRewards: I,
            defaultSelection: M,
            selectedGiftingPromotionReward: E,
            setSelectedGiftingPromotionReward: k,
            hasUserMadeSelection: L,
        }),
        F = l.useMemo(() => {
            var e, t;
            if (null == T || 0 === T.length) return null != (e = null == N ? void 0 : N.rewards) ? e : [];
            let n = null != (t = null == D ? void 0 : D.selectedCategory) ? t : p.KN.Trick;
            return T.flatMap((e) => {
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
        }, [T, null == N ? void 0 : N.rewards, null == D ? void 0 : D.selectedCategory]);
    l.useEffect(() => {
        let e = null == M ? void 0 : M.defaultHighlightedReward;
        !L && null == E && null != e && null != e && F.some((t) => t.skuId === e.skuId) && (k(e), Z(e.skuId));
    }, [M, L, E, F, k]),
        i()(null != O, "Expected plan to selected"),
        i()(null != w, "Expected selectedSkuId"),
        i()(null != C, "Step should be set");
    let H = l.useMemo(() => null != A && (null != I ? I : []).some((e) => e.skuId === A), [A, I]),
        G = l.useMemo(() => null != E && F.some((e) => e.skuId === E.skuId), [F, E]),
        U = l.useMemo(() => 0 === F.length || null == A || !G || !H, [F, A, H, G]);
    l.useEffect(() => {
        if (0 === F.length) {
            Z(void 0), k(void 0);
            return;
        }
        (H && F.some((e) => e.skuId === A)) || null == A || (Z(void 0), k(void 0));
    }, [F, H, A, k]);
    let z = (e) => {
            k(F.find((t) => t.skuId === e)), Z(e), B(!0);
        },
        K = F.map((e) => {
            var t, n;
            return (0, r.jsx)(
                d.c,
                {
                    skuId: e.skuId,
                    assetId: e.assetId,
                    productName: null == (t = e.name) ? void 0 : t.call(e),
                    a11yLabel: null == (n = e.a11yLabel) ? void 0 : n.call(e),
                    claimed: null != I && I.every((t) => t.skuId !== e.skuId),
                    user: R,
                    onSelect: z,
                    selectedSkuId: A,
                    category: null == D ? void 0 : D.selectedCategory,
                    type: e.type,
                    palette: e.palette,
                },
                e.skuId,
            );
        }),
        W = (0, r.jsx)(y.O3, {
            children: (0, r.jsx)(s.mzw, {
                "data-migration-pending": !0,
                className: _.modalFooter,
                children: (0, r.jsx)(f.y, {
                    onStepChange: (e) => {
                        null != R &&
                            null != E &&
                            g.default.track(j.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: R.id,
                                reward_sku_id: E.skuId,
                            }),
                            n(e);
                    },
                    onBackClick: () => n(x.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [O.id],
                    selectedPlanId: O.id,
                    isNextDisabled: U,
                }),
            }),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.xBx, {
                "data-migration-pending": !0,
                className: _.modalHeader,
                direction: c.Z.Direction.VERTICAL,
                align: c.Z.Align.START,
                separator: !1,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-lg/bold",
                        color: "header-primary",
                        children: S.intl.string(S.t["3JCuX1"]),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        className: _.headerSubtitle,
                        children: S.intl.string(S.t.MhwtRc),
                    }),
                    (0, r.jsx)(s.olH, {
                        "data-migration-pending": !0,
                        className: _.closeButton,
                        onClick: a,
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
                        (null == D ? void 0 : D.shouldRenderCategoryControl) &&
                            (0, r.jsx)(h.Z, {
                                defaultCategory: D.selectedCategory,
                                onCategoryChange: D.setSelectedCategory,
                            }),
                        (0, r.jsx)("div", {
                            className: _.giftRewardShopCardsGrid,
                            children: K,
                        }),
                    ],
                }),
            }),
            W,
        ],
    });
}
