n.d(t, { S: () => v }), n(388685), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    d = n(14476),
    c = n(600164),
    C = n(699758),
    u = n(831895),
    p = n(314404),
    h = n(594174),
    m = n(626135),
    _ = n(987209),
    f = n(563132),
    x = n(409813),
    j = n(614277),
    g = n(981631),
    b = n(388032),
    L = n(950174);
function v(e) {
    var t, n;
    let { handleStepChange: l, handleClose: v } = e,
        { selectedPlan: y, selectedSkuId: S, step: I } = (0, f.JL)(),
        {
            setSelectedGiftingPromotionReward: w,
            selectedGiftingPromotionReward: O,
            claimableRewards: P,
            claimableVariants: E,
        } = (0, _.wD)(),
        k = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        M = (0, C.ZP)(P, E, O),
        [T, A] = i.useState(null != (n = null == M ? void 0 : M.defaultCategory) ? n : C.KN.Trick),
        [N, Z] = i.useState(null == M || null == (t = M.defaultHighlightedReward) ? void 0 : t.skuId),
        [B, R] = i.useState(!1),
        H = i.useRef(T),
        U = i.useMemo(
            () =>
                null == E
                    ? null != P
                        ? P
                        : []
                    : E.flatMap((e) => {
                          var t, n;
                          return e.variants.length < C.mo
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
            [E, P, T],
        );
    i.useEffect(() => {
        let e = null == M ? void 0 : M.defaultHighlightedReward;
        !B && null == O && null != e && null != e && U.some((t) => t.skuId === e.skuId) && (w(e), Z(e.skuId));
    }, [M, B, O, U, w]),
        i.useEffect(() => {
            (null == M ? void 0 : M.defaultCategory) == null || B || A(M.defaultCategory);
        }, [null == M ? void 0 : M.defaultCategory, B]),
        a()(null != y, "Expected plan to selected"),
        a()(null != S, "Expected selectedSkuId"),
        a()(null != I, "Step should be set");
    let F = i.useMemo(() => null != N && (null != P ? P : []).some((e) => e.skuId === N), [N, P]),
        G = i.useMemo(() => null != O && U.some((e) => e.skuId === O.skuId), [U, O]),
        D = i.useMemo(() => 0 === U.length || null == N || !G || !F, [U, N, F, G]);
    i.useEffect(() => {
        if (0 === U.length) {
            Z(void 0), w(void 0);
            return;
        }
        (F && U.some((e) => e.skuId === N)) || null == N || (Z(void 0), w(void 0));
    }, [U, F, N, w]),
        i.useEffect(() => {
            H.current === T || G || (w(void 0), Z(void 0)), (H.current = T);
        }, [T, G, w]);
    let W = (e) => {
            w(U.find((t) => t.skuId === e)), Z(e), R(!0);
        },
        z = U.map((e) => {
            var t, n;
            return (0, r.jsx)(
                d.c,
                {
                    skuId: e.skuId,
                    assetId: e.assetId,
                    productName: null == (t = e.name) ? void 0 : t.call(e),
                    a11yLabel: null == (n = e.a11yLabel) ? void 0 : n.call(e),
                    claimed: null != P && P.every((t) => t.skuId !== e.skuId),
                    user: k,
                    onSelect: W,
                    selectedSkuId: N,
                    category: T,
                },
                e.skuId,
            );
        }),
        K = (0, r.jsx)(j.O3, {
            children: (0, r.jsx)(o.mzw, {
                "data-migration-pending": !0,
                className: L.modalFooter,
                children: (0, r.jsx)(p.y, {
                    onStepChange: (e) => {
                        null != k &&
                            null != O &&
                            m.default.track(g.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: k.id,
                                reward_sku_id: O.skuId,
                            }),
                            l(e);
                    },
                    onBackClick: () => l(x.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [y.id],
                    selectedPlanId: y.id,
                    isNextDisabled: D,
                }),
            }),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.xBx, {
                "data-migration-pending": !0,
                className: L.modalHeader,
                direction: c.Z.Direction.VERTICAL,
                align: c.Z.Align.START,
                separator: !1,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-lg/bold",
                        color: "header-primary",
                        children: b.intl.string(b.t["3JCuX1"]),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        className: L.headerSubtitle,
                        children: b.intl.string(b.t.MhwtRc),
                    }),
                    (0, r.jsx)(o.olH, {
                        "data-migration-pending": !0,
                        className: L.closeButton,
                        onClick: v,
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
                        null != E &&
                            E.length > 1 &&
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
