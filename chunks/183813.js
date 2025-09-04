n.d(t, { S: () => b }), n(388685), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    C = n(14476),
    d = n(699758),
    c = n(831895),
    p = n(314404),
    u = n(594174),
    x = n(626135),
    _ = n(987209),
    h = n(563132),
    f = n(409813),
    j = n(27034),
    m = n(981631),
    L = n(388032),
    g = n(950174);
function b(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedPlan: l, selectedSkuId: b, step: S } = (0, h.JL)(),
        {
            setSelectedGiftingPromotionReward: y,
            selectedGiftingPromotionReward: v,
            claimableRewards: E,
            claimableVariants: O,
        } = (0, _.wD)(),
        P = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        [w, I] = i.useState(null),
        k = Math.floor(Math.random() * d.mo),
        [M, Z] = i.useState(k);
    i.useEffect(() => {
        null != E && E.length > 0 && null == v && y(E[0]);
    }, [E, v, y]),
        s()(null != l, "Expected plan to selected"),
        s()(null != b, "Expected selectedSkuId"),
        s()(null != S, "Step should be set");
    let T = i.useMemo(
            () =>
                null == O
                    ? null != E
                        ? E
                        : []
                    : O.flatMap((e) => {
                          var t, n;
                          return e.variants.length < d.mo
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
            [O, E, M],
        ),
        A = (e) => {
            y(T.find((t) => t.skuId === e)), I(e);
        },
        B = T.map((e) =>
            (0, r.jsx)(
                C.c,
                {
                    skuId: e.skuId,
                    assetId: e.assetId,
                    productName: e.name,
                    a11yLabel: e.a11yLabel,
                    claimed: null != E && E.every((t) => t.skuId !== e.skuId),
                    user: P,
                    onSelect: A,
                    selectedSkuId: null != w ? w : void 0,
                    category: M,
                },
                e.skuId,
            ),
        ),
        N = (0, r.jsx)(j.O3, {
            children: (0, r.jsx)(o.mzw, {
                className: g.modalFooter,
                children: (0, r.jsx)(p.y, {
                    onStepChange: (e) => {
                        null != P &&
                            null != v &&
                            x.default.track(m.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: P.id,
                                reward_sku_id: v.skuId,
                            }),
                            t(e);
                    },
                    onBackClick: () => t(f.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [l.id],
                    selectedPlanId: l.id,
                }),
            }),
        }),
        U = (0, r.jsxs)(o.X6q, {
            variant: "heading-lg/bold",
            color: "header-primary",
            className: g.title,
            children: [
                L.intl.string(L.t["3JCuX1"]),
                (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    color: "text-secondary",
                    className: g.subtitle,
                    children: L.intl.string(L.t.MhwtRU),
                }),
            ],
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.xBx, { children: (0, r.jsx)(o.olH, { onClick: n }) }),
            (0, r.jsx)(o.hzk, {
                children: (0, r.jsxs)(o.Kqy, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: [
                        U,
                        null != O &&
                            O.length > 1 &&
                            (0, r.jsx)(c.Z, {
                                defaultCategory: M,
                                onCategoryChange: Z,
                            }),
                        (0, r.jsx)("div", {
                            className: g.giftRewardShopCardsGrid,
                            children: B,
                        }),
                    ],
                }),
            }),
            N,
        ],
    });
}
