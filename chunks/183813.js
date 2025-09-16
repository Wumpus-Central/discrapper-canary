n.d(t, { S: () => y }), n(388685), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    C = n(14476),
    d = n(600164),
    c = n(699758),
    u = n(831895),
    p = n(314404),
    x = n(594174),
    h = n(626135),
    f = n(987209),
    _ = n(563132),
    m = n(409813),
    j = n(27034),
    g = n(981631),
    b = n(388032),
    L = n(950174);
function y(e) {
    var t, n;
    let { handleStepChange: l, handleClose: y } = e,
        { selectedPlan: S, selectedSkuId: v, step: E } = (0, _.JL)(),
        {
            setSelectedGiftingPromotionReward: O,
            selectedGiftingPromotionReward: P,
            claimableRewards: k,
            claimableVariants: w,
        } = (0, f.wD)(),
        M = (0, s.e7)([x.default], () => x.default.getCurrentUser()),
        I = (0, c.ZP)(k, w, P),
        [T, A] = i.useState(null != (n = null == I ? void 0 : I.defaultCategory) ? n : c.KN.Trick),
        [Z, N] = i.useState(null == I || null == (t = I.defaultHighlightedReward) ? void 0 : t.skuId),
        [R, B] = i.useState(!1),
        U = i.useRef(T),
        H = i.useMemo(
            () =>
                null == w
                    ? null != k
                        ? k
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
            [w, k, T],
        );
    i.useEffect(() => {
        let e = null == I ? void 0 : I.defaultHighlightedReward;
        !R && null == P && null != e && null != e && H.some((t) => t.skuId === e.skuId) && (O(e), N(e.skuId));
    }, [I, R, P, H, O]),
        i.useEffect(() => {
            (null == I ? void 0 : I.defaultCategory) == null || R || A(I.defaultCategory);
        }, [null == I ? void 0 : I.defaultCategory, R]),
        a()(null != S, "Expected plan to selected"),
        a()(null != v, "Expected selectedSkuId"),
        a()(null != E, "Step should be set");
    let F = i.useMemo(() => null != Z && (null != k ? k : []).some((e) => e.skuId === Z), [Z, k]),
        G = i.useMemo(() => null != P && H.some((e) => e.skuId === P.skuId), [H, P]),
        D = i.useMemo(() => 0 === H.length || null == Z || !G || !F, [H, Z, F, G]);
    i.useEffect(() => {
        if (0 === H.length) {
            N(void 0), O(void 0);
            return;
        }
        (F && H.some((e) => e.skuId === Z)) || null == Z || (N(void 0), O(void 0));
    }, [H, F, Z, O]),
        i.useEffect(() => {
            U.current === T || G || (O(void 0), N(void 0)), (U.current = T);
        }, [T, G, O]);
    let K = (e) => {
            O(H.find((t) => t.skuId === e)), N(e), B(!0);
        },
        z = H.map((e) => {
            var t, n;
            return (0, r.jsx)(
                C.c,
                {
                    skuId: e.skuId,
                    assetId: e.assetId,
                    productName: null == (t = e.name) ? void 0 : t.call(e),
                    a11yLabel: null == (n = e.a11yLabel) ? void 0 : n.call(e),
                    claimed: null != k && k.every((t) => t.skuId !== e.skuId),
                    user: M,
                    onSelect: K,
                    selectedSkuId: Z,
                    category: T,
                },
                e.skuId,
            );
        }),
        W = (0, r.jsx)(j.O3, {
            children: (0, r.jsx)(o.mzw, {
                className: L.modalFooter,
                children: (0, r.jsx)(p.y, {
                    onStepChange: (e) => {
                        null != M &&
                            null != P &&
                            h.default.track(g.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: M.id,
                                reward_sku_id: P.skuId,
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
            (0, r.jsxs)(o.xBx, {
                className: L.modalHeader,
                direction: d.Z.Direction.VERTICAL,
                align: d.Z.Align.START,
                separator: !1,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: "heading-lg/bold",
                        color: "header-primary",
                        children: b.intl.string(b.t["3JCuX1"]),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        className: L.headerSubtitle,
                        children: b.intl.string(b.t.MhwtRU),
                    }),
                    (0, r.jsx)(o.olH, {
                        className: L.closeButton,
                        onClick: y,
                    }),
                ],
            }),
            (0, r.jsx)(o.hzk, {
                children: (0, r.jsxs)(o.Kqy, {
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
            W,
        ],
    });
}
