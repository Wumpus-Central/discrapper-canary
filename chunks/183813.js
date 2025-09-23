n.d(t, { S: () => y }), n(388685), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    C = n(14476),
    d = n(600164),
    c = n(699758),
    u = n(831895),
    p = n(314404),
    _ = n(594174),
    h = n(626135),
    f = n(987209),
    x = n(563132),
    m = n(409813),
    j = n(614277),
    b = n(981631),
    g = n(388032),
    L = n(739621);
function y(e) {
    var t, n;
    let { handleStepChange: l, handleClose: y } = e,
        { selectedPlan: S, selectedSkuId: v, step: E } = (0, x.JL)(),
        {
            setSelectedGiftingPromotionReward: O,
            selectedGiftingPromotionReward: I,
            claimableRewards: P,
            claimableVariants: w,
        } = (0, f.wD)(),
        k = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        M = (0, c.ZP)(P, w, I),
        [T, A] = i.useState(null != (n = null == M ? void 0 : M.defaultCategory) ? n : c.KN.Trick),
        [Z, N] = i.useState(null == M || null == (t = M.defaultHighlightedReward) ? void 0 : t.skuId),
        [F, R] = i.useState(!1),
        B = i.useRef(T),
        U = i.useMemo(
            () =>
                null == w
                    ? null != P
                        ? P
                        : []
                    : w.flatMap((e) => {
                          var t, n;
                          return e.variants.length < c.mo
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
                                })({}, e.variants[T])),
                                (n = n = { name: e.name }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(n)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                      }),
                                t);
                      }),
            [w, P, T],
        );
    i.useEffect(() => {
        let e = null == M ? void 0 : M.defaultHighlightedReward;
        !F && null == I && null != e && null != e && U.some((t) => t.skuId === e.skuId) && (O(e), N(e.skuId));
    }, [M, F, I, U, O]),
        i.useEffect(() => {
            (null == M ? void 0 : M.defaultCategory) == null || F || A(M.defaultCategory);
        }, [null == M ? void 0 : M.defaultCategory, F]),
        o()(null != S, "Expected plan to selected"),
        o()(null != v, "Expected selectedSkuId"),
        o()(null != E, "Step should be set");
    let H = i.useMemo(() => null != Z && (null != P ? P : []).some((e) => e.skuId === Z), [Z, P]),
        G = i.useMemo(() => null != I && U.some((e) => e.skuId === I.skuId), [U, I]),
        D = i.useMemo(() => 0 === U.length || null == Z || !G || !H, [U, Z, H, G]);
    i.useEffect(() => {
        if (0 === U.length) {
            N(void 0), O(void 0);
            return;
        }
        (H && U.some((e) => e.skuId === Z)) || null == Z || (N(void 0), O(void 0));
    }, [U, H, Z, O]),
        i.useEffect(() => {
            B.current === T || G || (O(void 0), N(void 0)), (B.current = T);
        }, [T, G, O]);
    let Y = (e) => {
            O(U.find((t) => t.skuId === e)), N(e), R(!0);
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
                    claimed: null != P && P.every((t) => t.skuId !== e.skuId),
                    user: k,
                    onSelect: Y,
                    selectedSkuId: Z,
                    category: T,
                },
                e.skuId,
            );
        }),
        K = (0, r.jsx)(j.O3, {
            children: (0, r.jsx)(s.mzw, {
                className: L.modalFooter,
                children: (0, r.jsx)(p.y, {
                    onStepChange: (e) => {
                        null != k &&
                            null != I &&
                            h.default.track(b.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: k.id,
                                reward_sku_id: I.skuId,
                            }),
                            l(e);
                    },
                    onBackClick: () => l(m.h8.PLAN_SELECT),
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
                className: L.modalHeader,
                direction: d.Z.Direction.VERTICAL,
                align: d.Z.Align.START,
                separator: !1,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-lg/bold",
                        color: "header-primary",
                        children: g.intl.string(g.t["3JCuX1"]),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        className: L.headerSubtitle,
                        children: g.intl.string(g.t.MhwtRU),
                    }),
                    (0, r.jsx)(s.olH, {
                        className: L.closeButton,
                        onClick: y,
                    }),
                ],
            }),
            (0, r.jsx)(s.hzk, {
                children: (0, r.jsxs)(s.Kqy, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: [
                        null != w &&
                            w.length > 1 &&
                            (0, r.jsx)(u.Z, {
                                defaultCategory: T,
                                onCategoryChange: A,
                            }),
                        (0, r.jsx)("div", {
                            className: L.giftRewardShopCardsGrid,
                            children: z,
                        }),
                    ],
                }),
            }),
            K,
        ],
    });
}
