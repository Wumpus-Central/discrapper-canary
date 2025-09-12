n.d(t, { S: () => S }), n(388685), n(361932), n(187205);
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
    _ = n(626135),
    h = n(987209),
    f = n(563132),
    m = n(409813),
    j = n(27034),
    L = n(981631),
    b = n(388032),
    g = n(950174);
function S(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedPlan: l, selectedSkuId: S, step: y } = (0, f.JL)(),
        {
            setSelectedGiftingPromotionReward: v,
            selectedGiftingPromotionReward: E,
            claimableRewards: O,
            claimableVariants: P,
        } = (0, h.wD)(),
        M = (0, s.e7)([x.default], () => x.default.getCurrentUser()),
        [w, k] = i.useState(null),
        A = Math.floor(Math.random() * c.mo),
        [T, I] = i.useState(A);
    i.useEffect(() => {
        null != O && O.length > 0 && null == E && v(O[0]);
    }, [O, E, v]),
        a()(null != l, "Expected plan to selected"),
        a()(null != S, "Expected selectedSkuId"),
        a()(null != y, "Step should be set");
    let Z = i.useMemo(
            () =>
                null == P
                    ? null != O
                        ? O
                        : []
                    : P.flatMap((e) => {
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
            [P, O, T],
        ),
        N = (e) => {
            v(Z.find((t) => t.skuId === e)), k(e);
        },
        B = Z.map((e) =>
            (0, r.jsx)(
                C.c,
                {
                    skuId: e.skuId,
                    assetId: e.assetId,
                    productName: e.name,
                    a11yLabel: e.a11yLabel,
                    claimed: null != O && O.every((t) => t.skuId !== e.skuId),
                    user: M,
                    onSelect: N,
                    selectedSkuId: null != w ? w : void 0,
                    category: T,
                },
                e.skuId,
            ),
        ),
        R = (0, r.jsx)(j.O3, {
            children: (0, r.jsx)(o.mzw, {
                className: g.modalFooter,
                children: (0, r.jsx)(p.y, {
                    onStepChange: (e) => {
                        null != M &&
                            null != E &&
                            _.default.track(L.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: M.id,
                                reward_sku_id: E.skuId,
                            }),
                            t(e);
                    },
                    onBackClick: () => t(m.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [l.id],
                    selectedPlanId: l.id,
                }),
            }),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.xBx, {
                className: g.modalHeader,
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
                        className: g.headerSubtitle,
                        children: b.intl.string(b.t.MhwtRU),
                    }),
                    (0, r.jsx)(o.olH, {
                        className: g.closeButton,
                        onClick: n,
                    }),
                ],
            }),
            (0, r.jsx)(o.hzk, {
                children: (0, r.jsxs)(o.Kqy, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: [
                        null != P &&
                            P.length > 1 &&
                            (0, r.jsx)(u.Z, {
                                defaultCategory: T,
                                onCategoryChange: I,
                            }),
                        (0, r.jsx)("div", {
                            className: g.giftRewardShopCardsGrid,
                            children: B,
                        }),
                    ],
                }),
            }),
            R,
        ],
    });
}
