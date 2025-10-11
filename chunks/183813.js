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
    g = n(614277),
    j = n(981631),
    b = n(388032),
    y = n(950174);
function L(e) {
    var t, n;
    let { handleStepChange: a, handleClose: L } = e,
        { selectedPlan: v, selectedSkuId: S, step: w } = (0, m.JL)(),
        {
            setSelectedGiftingPromotionReward: I,
            selectedGiftingPromotionReward: P,
            claimableRewards: O,
            claimableVariants: E,
        } = (0, h.wD)(),
        k = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        T = (0, c.ZP)(O, E, P),
        [M, A] = i.useState(null != (n = null == T ? void 0 : T.defaultCategory) ? n : c.KN.Trick),
        [Z, B] = i.useState(null == T || null == (t = T.defaultHighlightedReward) ? void 0 : t.skuId),
        [N, R] = i.useState(!1),
        G = i.useRef(M),
        F = i.useMemo(
            () =>
                null == E
                    ? null != O
                        ? O
                        : []
                    : E.flatMap((e) => {
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
            [E, O, M],
        );
    i.useEffect(() => {
        let e = null == T ? void 0 : T.defaultHighlightedReward;
        !N && null == P && null != e && null != e && F.some((t) => t.skuId === e.skuId) && (I(e), B(e.skuId));
    }, [T, N, P, F, I]),
        i.useEffect(() => {
            (null == T ? void 0 : T.defaultCategory) == null || N || A(T.defaultCategory);
        }, [null == T ? void 0 : T.defaultCategory, N]),
        l()(null != v, "Expected plan to selected"),
        l()(null != S, "Expected selectedSkuId"),
        l()(null != w, "Step should be set");
    let H = i.useMemo(() => null != Z && (null != O ? O : []).some((e) => e.skuId === Z), [Z, O]),
        U = i.useMemo(() => null != P && F.some((e) => e.skuId === P.skuId), [F, P]),
        D = i.useMemo(() => 0 === F.length || null == Z || !U || !H, [F, Z, H, U]);
    i.useEffect(() => {
        if (0 === F.length) {
            B(void 0), I(void 0);
            return;
        }
        (H && F.some((e) => e.skuId === Z)) || null == Z || (B(void 0), I(void 0));
    }, [F, H, Z, I]),
        i.useEffect(() => {
            G.current === M || U || (I(void 0), B(void 0)), (G.current = M);
        }, [M, U, I]);
    let z = (e) => {
            I(F.find((t) => t.skuId === e)), B(e), R(!0);
        },
        W = F.map((e) => {
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
                    selectedSkuId: Z,
                    category: M,
                },
                e.skuId,
            );
        }),
        K = (0, r.jsx)(g.O3, {
            children: (0, r.jsx)(s.mzw, {
                "data-migration-pending": !0,
                className: y.modalFooter,
                children: (0, r.jsx)(p.y, {
                    onStepChange: (e) => {
                        null != k &&
                            null != P &&
                            f.default.track(j.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
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
                className: y.modalHeader,
                direction: C.Z.Direction.VERTICAL,
                align: C.Z.Align.START,
                separator: !1,
                children: [
                    (0, r.jsx)(s.Heading, {
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
                        null != E &&
                            E.length > 1 &&
                            (0, r.jsx)(u.Z, {
                                defaultCategory: M,
                                onCategoryChange: A,
                            }),
                        (0, r.jsx)("div", {
                            className: y.giftRewardShopCardsGrid,
                            children: W,
                        }),
                    ],
                }),
            }),
            K,
        ],
    });
}
