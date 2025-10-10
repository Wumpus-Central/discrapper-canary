n.d(t, { S: () => L }), n(388685), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    l = n.n(a),
    o = n(442837),
    s = n(481060),
    d = n(14476),
    C = n(600164),
    c = n(699758),
    u = n(831895),
    p = n(314404),
    _ = n(594174),
    f = n(626135),
    h = n(987209),
    m = n(563132),
    x = n(409813),
    j = n(614277),
    g = n(981631),
    b = n(388032),
    y = n(950174);
function L(e) {
    var t, n;
    let { handleStepChange: a, handleClose: L } = e,
        { selectedPlan: v, selectedSkuId: S, step: O } = (0, m.JL)(),
        {
            setSelectedGiftingPromotionReward: P,
            selectedGiftingPromotionReward: E,
            claimableRewards: w,
            claimableVariants: I,
        } = (0, h.wD)(),
        k = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        T = (0, c.ZP)(w, I, E),
        [M, A] = i.useState(null != (n = null == T ? void 0 : T.defaultCategory) ? n : c.KN.Trick),
        [Z, N] = i.useState(null == T || null == (t = T.defaultHighlightedReward) ? void 0 : t.skuId),
        [R, B] = i.useState(!1),
        F = i.useRef(M),
        G = i.useMemo(
            () =>
                null == I
                    ? null != w
                        ? w
                        : []
                    : I.flatMap((e) => {
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
                                })({}, e.variants[M])),
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
            [I, w, M],
        );
    i.useEffect(() => {
        let e = null == T ? void 0 : T.defaultHighlightedReward;
        !R && null == E && null != e && null != e && G.some((t) => t.skuId === e.skuId) && (P(e), N(e.skuId));
    }, [T, R, E, G, P]),
        i.useEffect(() => {
            (null == T ? void 0 : T.defaultCategory) == null || R || A(T.defaultCategory);
        }, [null == T ? void 0 : T.defaultCategory, R]),
        l()(null != v, "Expected plan to selected"),
        l()(null != S, "Expected selectedSkuId"),
        l()(null != O, "Step should be set");
    let U = i.useMemo(() => null != Z && (null != w ? w : []).some((e) => e.skuId === Z), [Z, w]),
        H = i.useMemo(() => null != E && G.some((e) => e.skuId === E.skuId), [G, E]),
        D = i.useMemo(() => 0 === G.length || null == Z || !H || !U, [G, Z, U, H]);
    i.useEffect(() => {
        if (0 === G.length) {
            N(void 0), P(void 0);
            return;
        }
        (U && G.some((e) => e.skuId === Z)) || null == Z || (N(void 0), P(void 0));
    }, [G, U, Z, P]),
        i.useEffect(() => {
            F.current === M || H || (P(void 0), N(void 0)), (F.current = M);
        }, [M, H, P]);
    let z = (e) => {
            P(G.find((t) => t.skuId === e)), N(e), B(!0);
        },
        K = G.map((e) => {
            var t, n;
            return (0, r.jsx)(
                d.c,
                {
                    skuId: e.skuId,
                    assetId: e.assetId,
                    productName: null == (t = e.name) ? void 0 : t.call(e),
                    a11yLabel: null == (n = e.a11yLabel) ? void 0 : n.call(e),
                    claimed: null != w && w.every((t) => t.skuId !== e.skuId),
                    user: k,
                    onSelect: z,
                    selectedSkuId: Z,
                    category: M,
                },
                e.skuId,
            );
        }),
        W = (0, r.jsx)(j.O3, {
            children: (0, r.jsx)(s.mzw, {
                "data-migration-pending": !0,
                className: y.modalFooter,
                children: (0, r.jsx)(p.y, {
                    onStepChange: (e) => {
                        null != k &&
                            null != E &&
                            f.default.track(g.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: k.id,
                                reward_sku_id: E.skuId,
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
                className: y.modalHeader,
                direction: C.Z.Direction.VERTICAL,
                align: C.Z.Align.START,
                separator: !1,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-lg/bold",
                        color: "header-primary",
                        children: b.intl.string(b.t["3JCuX1"]),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        className: y.headerSubtitle,
                        children: b.intl.string(b.t.MhwtRU),
                    }),
                    (0, r.jsx)(s.olH, {
                        "data-migration-pending": !0,
                        className: y.closeButton,
                        onClick: L,
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
                        null != I &&
                            I.length > 1 &&
                            (0, r.jsx)(u.Z, {
                                defaultCategory: M,
                                onCategoryChange: A,
                            }),
                        (0, r.jsx)("div", {
                            className: y.giftRewardShopCardsGrid,
                            children: K,
                        }),
                    ],
                }),
            }),
            W,
        ],
    });
}
