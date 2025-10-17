n.d(t, { S: () => S }), n(388685), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    l = n.n(a),
    s = n(442837),
    o = n(481060),
    d = n(14476),
    c = n(600164),
    C = n(699758),
    u = n(831895),
    p = n(314404),
    h = n(594174),
    _ = n(626135),
    m = n(987209),
    f = n(563132),
    x = n(409813),
    g = n(614277),
    j = n(981631),
    b = n(388032),
    v = n(950174);
function S(e) {
    var t, n;
    let { handleStepChange: a, handleClose: S } = e,
        { selectedPlan: L, selectedSkuId: y, step: I } = (0, f.JL)(),
        {
            setSelectedGiftingPromotionReward: w,
            selectedGiftingPromotionReward: P,
            claimableRewards: E,
            claimableVariants: O,
        } = (0, m.wD)(),
        T = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        k = (0, C.ZP)(E, O, P),
        [N, A] = i.useState(null != (n = null == k ? void 0 : k.defaultCategory) ? n : C.KN.Trick),
        [Z, M] = i.useState(null == k || null == (t = k.defaultHighlightedReward) ? void 0 : t.skuId),
        [R, B] = i.useState(!1),
        F = i.useRef(N),
        H = i.useMemo(
            () =>
                null == O
                    ? null != E
                        ? E
                        : []
                    : O.flatMap((e) => {
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
                                })({}, e.variants[N])),
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
            [O, E, N],
        );
    i.useEffect(() => {
        let e = null == k ? void 0 : k.defaultHighlightedReward;
        !R && null == P && null != e && null != e && H.some((t) => t.skuId === e.skuId) && (w(e), M(e.skuId));
    }, [k, R, P, H, w]),
        i.useEffect(() => {
            (null == k ? void 0 : k.defaultCategory) == null || R || A(k.defaultCategory);
        }, [null == k ? void 0 : k.defaultCategory, R]),
        l()(null != L, "Expected plan to selected"),
        l()(null != y, "Expected selectedSkuId"),
        l()(null != I, "Step should be set");
    let G = i.useMemo(() => null != Z && (null != E ? E : []).some((e) => e.skuId === Z), [Z, E]),
        U = i.useMemo(() => null != P && H.some((e) => e.skuId === P.skuId), [H, P]),
        D = i.useMemo(() => 0 === H.length || null == Z || !U || !G, [H, Z, G, U]);
    i.useEffect(() => {
        if (0 === H.length) {
            M(void 0), w(void 0);
            return;
        }
        (G && H.some((e) => e.skuId === Z)) || null == Z || (M(void 0), w(void 0));
    }, [H, G, Z, w]),
        i.useEffect(() => {
            F.current === N || U || (w(void 0), M(void 0)), (F.current = N);
        }, [N, U, w]);
    let z = (e) => {
            w(H.find((t) => t.skuId === e)), M(e), B(!0);
        },
        W = H.map((e) => {
            var t, n;
            return (0, r.jsx)(
                d.c,
                {
                    skuId: e.skuId,
                    assetId: e.assetId,
                    productName: null == (t = e.name) ? void 0 : t.call(e),
                    a11yLabel: null == (n = e.a11yLabel) ? void 0 : n.call(e),
                    claimed: null != E && E.every((t) => t.skuId !== e.skuId),
                    user: T,
                    onSelect: z,
                    selectedSkuId: Z,
                    category: N,
                },
                e.skuId,
            );
        }),
        K = (0, r.jsx)(g.O3, {
            children: (0, r.jsx)(o.mzw, {
                "data-migration-pending": !0,
                className: v.modalFooter,
                children: (0, r.jsx)(p.y, {
                    onStepChange: (e) => {
                        null != T &&
                            null != P &&
                            _.default.track(j.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: T.id,
                                reward_sku_id: P.skuId,
                            }),
                            a(e);
                    },
                    onBackClick: () => a(x.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [L.id],
                    selectedPlanId: L.id,
                    isNextDisabled: D,
                }),
            }),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.xBx, {
                "data-migration-pending": !0,
                className: v.modalHeader,
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
                        className: v.headerSubtitle,
                        children: b.intl.string(b.t.MhwtRU),
                    }),
                    (0, r.jsx)(o.olH, {
                        "data-migration-pending": !0,
                        className: v.closeButton,
                        onClick: S,
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
                        null != O &&
                            O.length > 1 &&
                            (0, r.jsx)(u.Z, {
                                defaultCategory: N,
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
