n.d(t, { S: () => y }), n(388685), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    l = n.n(a),
    o = n(442837),
    s = n(481060),
    d = n(14476),
    c = n(600164),
    C = n(699758),
    u = n(831895),
    p = n(314404),
    _ = n(594174),
    h = n(626135),
    f = n(987209),
    m = n(563132),
    x = n(409813),
    g = n(614277),
    j = n(981631),
    b = n(388032),
    v = n(950174);
function y(e) {
    var t, n;
    let { handleStepChange: a, handleClose: y } = e,
        { selectedPlan: S, selectedSkuId: L, step: I } = (0, m.JL)(),
        {
            setSelectedGiftingPromotionReward: w,
            selectedGiftingPromotionReward: P,
            claimableRewards: O,
            claimableVariants: E,
        } = (0, f.wD)(),
        k = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        T = (0, C.ZP)(O, E, P),
        [Z, A] = i.useState(null != (n = null == T ? void 0 : T.defaultCategory) ? n : C.KN.Trick),
        [N, M] = i.useState(null == T || null == (t = T.defaultHighlightedReward) ? void 0 : t.skuId),
        [R, B] = i.useState(!1),
        F = i.useRef(Z),
        G = i.useMemo(
            () =>
                null == E
                    ? null != O
                        ? O
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
                                })({}, e.variants[Z])),
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
            [E, O, Z],
        );
    i.useEffect(() => {
        let e = null == T ? void 0 : T.defaultHighlightedReward;
        !R && null == P && null != e && null != e && G.some((t) => t.skuId === e.skuId) && (w(e), M(e.skuId));
    }, [T, R, P, G, w]),
        i.useEffect(() => {
            (null == T ? void 0 : T.defaultCategory) == null || R || A(T.defaultCategory);
        }, [null == T ? void 0 : T.defaultCategory, R]),
        l()(null != S, "Expected plan to selected"),
        l()(null != L, "Expected selectedSkuId"),
        l()(null != I, "Step should be set");
    let H = i.useMemo(() => null != N && (null != O ? O : []).some((e) => e.skuId === N), [N, O]),
        U = i.useMemo(() => null != P && G.some((e) => e.skuId === P.skuId), [G, P]),
        D = i.useMemo(() => 0 === G.length || null == N || !U || !H, [G, N, H, U]);
    i.useEffect(() => {
        if (0 === G.length) {
            M(void 0), w(void 0);
            return;
        }
        (H && G.some((e) => e.skuId === N)) || null == N || (M(void 0), w(void 0));
    }, [G, H, N, w]),
        i.useEffect(() => {
            F.current === Z || U || (w(void 0), M(void 0)), (F.current = Z);
        }, [Z, U, w]);
    let z = (e) => {
            w(G.find((t) => t.skuId === e)), M(e), B(!0);
        },
        W = G.map((e) => {
            var t, n;
            return (0, r.jsx)(
                d.c,
                {
                    skuId: e.skuId,
                    assetId: e.assetId,
                    productName: null == (t = e.name) ? void 0 : t.call(e),
                    a11yLabel: null == (n = e.a11yLabel) ? void 0 : n.call(e),
                    claimed: null != O && O.every((t) => t.skuId !== e.skuId),
                    user: k,
                    onSelect: z,
                    selectedSkuId: N,
                    category: Z,
                },
                e.skuId,
            );
        }),
        K = (0, r.jsx)(g.O3, {
            children: (0, r.jsx)(s.mzw, {
                "data-migration-pending": !0,
                className: v.modalFooter,
                children: (0, r.jsx)(p.y, {
                    onStepChange: (e) => {
                        null != k &&
                            null != P &&
                            h.default.track(j.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: k.id,
                                reward_sku_id: P.skuId,
                            }),
                            a(e);
                    },
                    onBackClick: () => a(x.h8.PLAN_SELECT),
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
                direction: c.Z.Direction.VERTICAL,
                align: c.Z.Align.START,
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
                        className: v.headerSubtitle,
                        children: b.intl.string(b.t.MhwtRU),
                    }),
                    (0, r.jsx)(s.olH, {
                        "data-migration-pending": !0,
                        className: v.closeButton,
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
                        null != E &&
                            E.length > 1 &&
                            (0, r.jsx)(u.Z, {
                                defaultCategory: Z,
                                onCategoryChange: A,
                            }),
                        (0, r.jsx)("div", {
                            className: v.giftRewardShopCardsGrid,
                            children: W,
                        }),
                    ],
                }),
            }),
            K,
        ],
    });
}
