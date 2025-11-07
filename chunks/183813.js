n.d(t, { S: () => v }), n(388685), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    C = n(14476),
    d = n(600164),
    c = n(699758),
    u = n(858026),
    p = n(831895),
    f = n(314404),
    h = n(594174),
    x = n(626135),
    m = n(987209),
    _ = n(563132),
    j = n(409813),
    g = n(614277),
    b = n(981631),
    y = n(388032),
    L = n(950174);
function v(e) {
    var t;
    let { handleStepChange: n, handleClose: l } = e,
        { selectedPlan: v, selectedSkuId: S, step: O } = (0, _.JL)(),
        {
            setSelectedGiftingPromotionReward: E,
            selectedGiftingPromotionReward: P,
            claimableRewards: w,
            claimableVariants: k,
        } = (0, m.wD)(),
        M = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        I = (0, c.ZP)(w, k, P),
        [T, A] = i.useState(null == I || null == (t = I.defaultHighlightedReward) ? void 0 : t.skuId),
        [Z, N] = i.useState(!1),
        R = (0, u.Z)({
            claimableVariants: k,
            claimableRewards: w,
            defaultSelection: I,
            selectedGiftingPromotionReward: P,
            setSelectedGiftingPromotionReward: E,
            hasUserMadeSelection: Z,
        }),
        B = i.useMemo(() => {
            var e;
            if (null == k || 0 === k.length) return null != w ? w : [];
            let t = null != (e = null == R ? void 0 : R.selectedCategory) ? e : c.KN.Trick;
            return k.flatMap((e) => {
                var n, r;
                return e.variants.length < c.mo
                    ? []
                    : ((n = (function (e) {
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
                      })({}, e.variants[t])),
                      (r = r = { name: e.name }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(r)).forEach(function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                            }),
                      n);
            });
        }, [k, w, null == R ? void 0 : R.selectedCategory]);
    i.useEffect(() => {
        let e = null == I ? void 0 : I.defaultHighlightedReward;
        !Z && null == P && null != e && null != e && B.some((t) => t.skuId === e.skuId) && (E(e), A(e.skuId));
    }, [I, Z, P, B, E]),
        a()(null != v, "Expected plan to selected"),
        a()(null != S, "Expected selectedSkuId"),
        a()(null != O, "Step should be set");
    let H = i.useMemo(() => null != T && (null != w ? w : []).some((e) => e.skuId === T), [T, w]),
        U = i.useMemo(() => null != P && B.some((e) => e.skuId === P.skuId), [B, P]),
        F = i.useMemo(() => 0 === B.length || null == T || !U || !H, [B, T, H, U]);
    i.useEffect(() => {
        if (0 === B.length) {
            A(void 0), E(void 0);
            return;
        }
        (H && B.some((e) => e.skuId === T)) || null == T || (A(void 0), E(void 0));
    }, [B, H, T, E]);
    let G = (e) => {
            E(B.find((t) => t.skuId === e)), A(e), N(!0);
        },
        D = B.map((e) => {
            var t, n;
            return (0, r.jsx)(
                C.c,
                {
                    skuId: e.skuId,
                    assetId: e.assetId,
                    productName: null == (t = e.name) ? void 0 : t.call(e),
                    a11yLabel: null == (n = e.a11yLabel) ? void 0 : n.call(e),
                    claimed: null != w && w.every((t) => t.skuId !== e.skuId),
                    user: M,
                    onSelect: G,
                    selectedSkuId: T,
                    category: null == R ? void 0 : R.selectedCategory,
                },
                e.skuId,
            );
        }),
        K = (0, r.jsx)(g.O3, {
            children: (0, r.jsx)(s.mzw, {
                "data-migration-pending": !0,
                className: L.modalFooter,
                children: (0, r.jsx)(f.y, {
                    onStepChange: (e) => {
                        null != M &&
                            null != P &&
                            x.default.track(b.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: M.id,
                                reward_sku_id: P.skuId,
                            }),
                            n(e);
                    },
                    onBackClick: () => n(j.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [v.id],
                    selectedPlanId: v.id,
                    isNextDisabled: F,
                }),
            }),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.xBx, {
                "data-migration-pending": !0,
                className: L.modalHeader,
                direction: d.Z.Direction.VERTICAL,
                align: d.Z.Align.START,
                separator: !1,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-lg/bold",
                        color: "header-primary",
                        children: y.intl.string(y.t["3JCuX1"]),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        className: L.headerSubtitle,
                        children: y.intl.string(y.t.MhwtRc),
                    }),
                    (0, r.jsx)(s.olH, {
                        "data-migration-pending": !0,
                        className: L.closeButton,
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
                        (null == R ? void 0 : R.shouldRenderCategoryControl) &&
                            (0, r.jsx)(p.Z, {
                                defaultCategory: R.selectedCategory,
                                onCategoryChange: R.setSelectedCategory,
                            }),
                        (0, r.jsx)("div", {
                            className: L.giftRewardShopCardsGrid,
                            children: D,
                        }),
                    ],
                }),
            }),
            K,
        ],
    });
}
