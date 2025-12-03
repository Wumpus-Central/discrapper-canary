n.d(t, { S: () => _ }), n(388685), n(361932), n(187205);
var r = n(54381),
    l = n(473749),
    a = n(512722),
    i = n.n(a),
    o = n(442837),
    s = n(481060),
    u = n(14476),
    c = n(600164),
    d = n(347896),
    p = n(699758),
    m = n(858026),
    h = n(831895),
    f = n(314404),
    b = n(594174),
    g = n(626135),
    v = n(987209),
    S = n(563132),
    x = n(409813),
    y = n(614277),
    P = n(981631),
    j = n(950174);
function _(e) {
    var t, n, a, _, O, w;
    let { handleStepChange: C, handleClose: E } = e,
        { selectedPlan: k, selectedSkuId: I, step: T } = (0, S.JL)(),
        {
            setSelectedGiftingPromotionReward: N,
            selectedGiftingPromotionReward: M,
            claimableRewards: R,
            claimableVariants: A,
        } = (0, v.wD)(),
        L = (0, d.Z)(),
        Z = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        D = (0, p.ZP)(R, A, M),
        [B, F] = l.useState(null == D || null == (t = D.defaultHighlightedReward) ? void 0 : t.skuId),
        [H, G] = l.useState(!1),
        U = (0, m.Z)({
            claimableVariants: A,
            claimableRewards: R,
            defaultSelection: D,
            selectedGiftingPromotionReward: M,
            setSelectedGiftingPromotionReward: N,
            hasUserMadeSelection: H,
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
        !H && null == M && null != e && null != e && z.some((t) => t.skuId === e.skuId) && (N(e), F(e.skuId));
    }, [D, H, M, z, N]),
        i()(null != k, "Expected plan to selected"),
        i()(null != I, "Expected selectedSkuId"),
        i()(null != T, "Step should be set");
    let K = l.useMemo(() => null != B && (null != R ? R : []).some((e) => e.skuId === B), [B, R]),
        W = l.useMemo(() => null != M && z.some((e) => e.skuId === M.skuId), [z, M]),
        V = l.useMemo(() => 0 === z.length || null == B || !W || !K, [z, B, K, W]);
    l.useEffect(() => {
        if (0 === z.length) {
            F(void 0), N(void 0);
            return;
        }
        (K && z.some((e) => e.skuId === B)) || null == B || (F(void 0), N(void 0));
    }, [z, K, B, N]);
    let Y = (e) => {
            N(z.find((t) => t.skuId === e)), F(e), G(!0);
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
                    claimed: null != R && R.every((t) => t.skuId !== e.skuId),
                    user: Z,
                    onSelect: Y,
                    selectedSkuId: B,
                    category: null == U ? void 0 : U.selectedCategory,
                    type: e.type,
                    palette: e.palette,
                },
                e.skuId,
            );
        }),
        J = (0, r.jsx)(y.O3, {
            children: (0, r.jsx)(s.mzw, {
                "data-migration-pending": !0,
                className: j.modalFooter,
                children: (0, r.jsx)(f.y, {
                    onStepChange: (e) => {
                        null != Z &&
                            null != M &&
                            g.default.track(P.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: Z.id,
                                reward_sku_id: M.skuId,
                            }),
                            C(e);
                    },
                    onBackClick: () => C(x.h8.PLAN_SELECT),
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
                        children: null == L || null == (n = L.rewardSelection) ? void 0 : n.heading(),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: j.headerSubtitle,
                        children: null == L || null == (a = L.rewardSelection) ? void 0 : a.primarySubtitle(),
                    }),
                    (null == L || null == (O = L.rewardSelection) || null == (_ = O.secondarySubtitle)
                        ? void 0
                        : _.call(O)) != null &&
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "text-subtle",
                            children: null == L || null == (w = L.rewardSelection) ? void 0 : w.secondarySubtitle(),
                        }),
                    (0, r.jsx)(s.olH, {
                        "data-migration-pending": !0,
                        className: j.closeButton,
                        onClick: E,
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
