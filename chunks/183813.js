n.d(t, { S: () => S }), n(388685), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    C = n(14476),
    d = n(600164),
    c = n(347896),
    u = n(699758),
    p = n(858026),
    f = n(831895),
    h = n(314404),
    x = n(594174),
    m = n(626135),
    _ = n(987209),
    j = n(563132),
    g = n(409813),
    b = n(614277),
    y = n(981631),
    L = n(388032),
    v = n(950174);
function S(e) {
    var t;
    let { handleStepChange: n, handleClose: l } = e,
        { selectedPlan: S, selectedSkuId: O, step: E } = (0, j.JL)(),
        {
            setSelectedGiftingPromotionReward: P,
            selectedGiftingPromotionReward: w,
            claimableRewards: k,
            claimableVariants: M,
        } = (0, _.wD)(),
        I = (0, c.Z)(),
        T = (0, o.e7)([x.default], () => x.default.getCurrentUser()),
        A = (0, u.ZP)(k, M, w),
        [Z, N] = i.useState(null == A || null == (t = A.defaultHighlightedReward) ? void 0 : t.skuId),
        [R, B] = i.useState(!1),
        H = (0, p.Z)({
            claimableVariants: M,
            claimableRewards: k,
            defaultSelection: A,
            selectedGiftingPromotionReward: w,
            setSelectedGiftingPromotionReward: P,
            hasUserMadeSelection: R,
        }),
        U = i.useMemo(() => {
            var e, t;
            if (null == M || 0 === M.length) return null != (e = null == I ? void 0 : I.rewards) ? e : [];
            let n = null != (t = null == H ? void 0 : H.selectedCategory) ? t : u.KN.Trick;
            return M.flatMap((e) => {
                var t, r;
                return e.variants.length < u.mo
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
        }, [M, null == I ? void 0 : I.rewards, null == H ? void 0 : H.selectedCategory]);
    i.useEffect(() => {
        let e = null == A ? void 0 : A.defaultHighlightedReward;
        !R && null == w && null != e && null != e && U.some((t) => t.skuId === e.skuId) && (P(e), N(e.skuId));
    }, [A, R, w, U, P]),
        a()(null != S, "Expected plan to selected"),
        a()(null != O, "Expected selectedSkuId"),
        a()(null != E, "Step should be set");
    let F = i.useMemo(() => null != Z && (null != k ? k : []).some((e) => e.skuId === Z), [Z, k]),
        G = i.useMemo(() => null != w && U.some((e) => e.skuId === w.skuId), [U, w]),
        D = i.useMemo(() => 0 === U.length || null == Z || !G || !F, [U, Z, F, G]);
    i.useEffect(() => {
        if (0 === U.length) {
            N(void 0), P(void 0);
            return;
        }
        (F && U.some((e) => e.skuId === Z)) || null == Z || (N(void 0), P(void 0));
    }, [U, F, Z, P]);
    let K = (e) => {
            P(U.find((t) => t.skuId === e)), N(e), B(!0);
        },
        z = U.map((e) => {
            var t, n;
            return (0, r.jsx)(
                C.c,
                {
                    skuId: e.skuId,
                    assetId: e.assetId,
                    productName: null == (t = e.name) ? void 0 : t.call(e),
                    a11yLabel: null == (n = e.a11yLabel) ? void 0 : n.call(e),
                    claimed: null != k && k.every((t) => t.skuId !== e.skuId),
                    user: T,
                    onSelect: K,
                    selectedSkuId: Z,
                    category: null == H ? void 0 : H.selectedCategory,
                },
                e.skuId,
            );
        }),
        V = (0, r.jsx)(b.O3, {
            children: (0, r.jsx)(s.mzw, {
                "data-migration-pending": !0,
                className: v.modalFooter,
                children: (0, r.jsx)(h.y, {
                    onStepChange: (e) => {
                        null != T &&
                            null != w &&
                            m.default.track(y.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: T.id,
                                reward_sku_id: w.skuId,
                            }),
                            n(e);
                    },
                    onBackClick: () => n(g.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [S.id],
                    selectedPlanId: S.id,
                    isNextDisabled: D,
                }),
            }),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.xBx, {
                "data-migration-pending": !0,
                className: v.modalHeader,
                direction: d.Z.Direction.VERTICAL,
                align: d.Z.Align.START,
                separator: !1,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-lg/bold",
                        color: "header-primary",
                        children: L.intl.string(L.t["3JCuX1"]),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        className: v.headerSubtitle,
                        children: L.intl.string(L.t.MhwtRc),
                    }),
                    (0, r.jsx)(s.olH, {
                        "data-migration-pending": !0,
                        className: v.closeButton,
                        onClick: l,
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
                        (null == H ? void 0 : H.shouldRenderCategoryControl) &&
                            (0, r.jsx)(f.Z, {
                                defaultCategory: H.selectedCategory,
                                onCategoryChange: H.setSelectedCategory,
                            }),
                        (0, r.jsx)("div", {
                            className: v.giftRewardShopCardsGrid,
                            children: z,
                        }),
                    ],
                }),
            }),
            V,
        ],
    });
}
