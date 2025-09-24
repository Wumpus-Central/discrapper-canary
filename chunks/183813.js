n.d(t, { S: () => y }), n(388685), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    l = n(442837),
    s = n(481060),
    C = n(14476),
    d = n(600164),
    c = n(699758),
    u = n(831895),
    p = n(314404),
    _ = n(594174),
    f = n(626135),
    h = n(987209),
    m = n(563132),
    x = n(409813),
    j = n(27034),
    b = n(981631),
    g = n(388032),
    L = n(950174);
function y(e) {
    var t, n;
    let { handleStepChange: a, handleClose: y } = e,
        { selectedPlan: v, selectedSkuId: S, step: O } = (0, m.JL)(),
        {
            setSelectedGiftingPromotionReward: E,
            selectedGiftingPromotionReward: P,
            claimableRewards: I,
            claimableVariants: w,
        } = (0, h.wD)(),
        k = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
        M = (0, c.ZP)(I, w, P),
        [T, A] = i.useState(null != (n = null == M ? void 0 : M.defaultCategory) ? n : c.KN.Trick),
        [Z, N] = i.useState(null == M || null == (t = M.defaultHighlightedReward) ? void 0 : t.skuId),
        [R, F] = i.useState(!1),
        B = i.useRef(T),
        U = i.useMemo(
            () =>
                null == w
                    ? null != I
                        ? I
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
            [w, I, T],
        );
    i.useEffect(() => {
        let e = null == M ? void 0 : M.defaultHighlightedReward;
        !R && null == P && null != e && null != e && U.some((t) => t.skuId === e.skuId) && (E(e), N(e.skuId));
    }, [M, R, P, U, E]),
        i.useEffect(() => {
            (null == M ? void 0 : M.defaultCategory) == null || R || A(M.defaultCategory);
        }, [null == M ? void 0 : M.defaultCategory, R]),
        o()(null != v, "Expected plan to selected"),
        o()(null != S, "Expected selectedSkuId"),
        o()(null != O, "Step should be set");
    let H = i.useMemo(() => null != Z && (null != I ? I : []).some((e) => e.skuId === Z), [Z, I]),
        G = i.useMemo(() => null != P && U.some((e) => e.skuId === P.skuId), [U, P]),
        D = i.useMemo(() => 0 === U.length || null == Z || !G || !H, [U, Z, H, G]);
    i.useEffect(() => {
        if (0 === U.length) {
            N(void 0), E(void 0);
            return;
        }
        (H && U.some((e) => e.skuId === Z)) || null == Z || (N(void 0), E(void 0));
    }, [U, H, Z, E]),
        i.useEffect(() => {
            B.current === T || G || (E(void 0), N(void 0)), (B.current = T);
        }, [T, G, E]);
    let Y = (e) => {
            E(U.find((t) => t.skuId === e)), N(e), F(!0);
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
                    claimed: null != I && I.every((t) => t.skuId !== e.skuId),
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
                "data-migration-pending": !0,
                className: L.modalFooter,
                children: (0, r.jsx)(p.y, {
                    onStepChange: (e) => {
                        null != k &&
                            null != P &&
                            f.default.track(b.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: k.id,
                                reward_sku_id: P.skuId,
                            }),
                            a(e);
                    },
                    onBackClick: () => a(x.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [v.id],
                    selectedPlanId: v.id,
                    isNextDisabled: D,
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
                        "data-migration-pending": !0,
                        className: L.closeButton,
                        onClick: y,
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
