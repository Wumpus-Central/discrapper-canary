n.d(t, { S: () => S }), n(388685), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    d = n(14476),
    C = n(600164),
    c = n(347896),
    u = n(699758),
    p = n(858026),
    h = n(831895),
    m = n(314404),
    f = n(594174),
    x = n(626135),
    _ = n(987209),
    j = n(563132),
    g = n(409813),
    b = n(614277),
    y = n(981631),
    v = n(388032),
    L = n(950174);
function S(e) {
    var t;
    let { handleStepChange: n, handleClose: l } = e,
        { selectedPlan: S, selectedSkuId: O, step: P } = (0, j.JL)(),
        {
            setSelectedGiftingPromotionReward: E,
            selectedGiftingPromotionReward: w,
            claimableRewards: I,
            claimableVariants: M,
        } = (0, _.wD)(),
        k = (0, c.Z)(),
        A = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        T = (0, u.ZP)(I, M, w),
        [Z, N] = i.useState(null == T || null == (t = T.defaultHighlightedReward) ? void 0 : t.skuId),
        [R, B] = i.useState(!1),
        U = (0, p.Z)({
            claimableVariants: M,
            claimableRewards: I,
            defaultSelection: T,
            selectedGiftingPromotionReward: w,
            setSelectedGiftingPromotionReward: E,
            hasUserMadeSelection: R,
        }),
        H = i.useMemo(() => {
            var e, t;
            if (null == M || 0 === M.length) return null != (e = null == k ? void 0 : k.rewards) ? e : [];
            let n = null != (t = null == U ? void 0 : U.selectedCategory) ? t : u.KN.Trick;
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
        }, [M, null == k ? void 0 : k.rewards, null == U ? void 0 : U.selectedCategory]);
    i.useEffect(() => {
        let e = null == T ? void 0 : T.defaultHighlightedReward;
        !R && null == w && null != e && null != e && H.some((t) => t.skuId === e.skuId) && (E(e), N(e.skuId));
    }, [T, R, w, H, E]),
        a()(null != S, "Expected plan to selected"),
        a()(null != O, "Expected selectedSkuId"),
        a()(null != P, "Step should be set");
    let F = i.useMemo(() => null != Z && (null != I ? I : []).some((e) => e.skuId === Z), [Z, I]),
        G = i.useMemo(() => null != w && H.some((e) => e.skuId === w.skuId), [H, w]),
        D = i.useMemo(() => 0 === H.length || null == Z || !G || !F, [H, Z, F, G]);
    i.useEffect(() => {
        if (0 === H.length) {
            N(void 0), E(void 0);
            return;
        }
        (F && H.some((e) => e.skuId === Z)) || null == Z || (N(void 0), E(void 0));
    }, [H, F, Z, E]);
    let K = (e) => {
            E(H.find((t) => t.skuId === e)), N(e), B(!0);
        },
        z = H.map((e) => {
            var t, n;
            return (0, r.jsx)(
                d.c,
                {
                    skuId: e.skuId,
                    assetId: e.assetId,
                    productName: null == (t = e.name) ? void 0 : t.call(e),
                    a11yLabel: null == (n = e.a11yLabel) ? void 0 : n.call(e),
                    claimed: null != I && I.every((t) => t.skuId !== e.skuId),
                    user: A,
                    onSelect: K,
                    selectedSkuId: Z,
                    category: null == U ? void 0 : U.selectedCategory,
                    type: e.type,
                    palette: e.palette,
                },
                e.skuId,
            );
        }),
        V = (0, r.jsx)(b.O3, {
            children: (0, r.jsx)(o.mzw, {
                "data-migration-pending": !0,
                className: L.modalFooter,
                children: (0, r.jsx)(m.y, {
                    onStepChange: (e) => {
                        null != A &&
                            null != w &&
                            x.default.track(y.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: A.id,
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
            (0, r.jsxs)(o.xBx, {
                "data-migration-pending": !0,
                className: L.modalHeader,
                direction: C.Z.Direction.VERTICAL,
                align: C.Z.Align.START,
                separator: !1,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-lg/bold",
                        color: "header-primary",
                        children: v.intl.string(v.t["3JCuX1"]),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        className: L.headerSubtitle,
                        children: v.intl.string(v.t.MhwtRc),
                    }),
                    (0, r.jsx)(o.olH, {
                        "data-migration-pending": !0,
                        className: L.closeButton,
                        onClick: l,
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
                            className: L.giftRewardShopCardsGrid,
                            children: z,
                        }),
                    ],
                }),
            }),
            V,
        ],
    });
}
