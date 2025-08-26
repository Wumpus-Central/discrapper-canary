n.d(t, { S: () => L }), n(388685), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    C = n(14476),
    d = n(314404),
    c = n(594174),
    p = n(626135),
    u = n(987209),
    x = n(563132),
    h = n(409813),
    _ = n(27034),
    f = n(981631),
    j = n(388032),
    m = n(950174);
function L(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedPlan: l, selectedSkuId: L, step: g } = (0, x.JL)(),
        {
            setSelectedGiftingPromotionReward: b,
            selectedGiftingPromotionReward: y,
            claimableRewards: S,
            claimableVariants: E,
        } = (0, u.wD)(),
        O = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        [P, v] = i.useState(null),
        I = Math.floor(2 * Math.random()),
        [w, M] = i.useState(I);
    i.useEffect(() => {
        null != S && S.length > 0 && null == y && b(S[0]);
    }, [S, y, b]),
        s()(null != l, "Expected plan to selected"),
        s()(null != L, "Expected selectedSkuId"),
        s()(null != g, "Step should be set");
    let Z = i.useMemo(
            () =>
                null == E
                    ? null != S
                        ? S
                        : []
                    : E.flatMap((e) => {
                          var t, n;
                          return e.variants.length < 2
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
                                })({}, e.variants[w])),
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
            [E, S, w],
        ),
        k = (e) => {
            b(Z.find((t) => t.skuId === e)), v(e);
        },
        A = Z.map((e) =>
            (0, r.jsx)(
                C.c,
                {
                    skuId: e.skuId,
                    assetId: e.assetId,
                    productName: e.name,
                    a11yLabel: e.a11yLabel,
                    claimed: null != S && !S.includes(e),
                    user: O,
                    onSelect: k,
                    selectedSkuId: null != P ? P : void 0,
                },
                e.skuId,
            ),
        ),
        T = (0, r.jsx)(_.O3, {
            children: (0, r.jsx)(o.mzw, {
                className: m.modalFooter,
                children: (0, r.jsx)(d.y, {
                    onStepChange: (e) => {
                        null != O &&
                            null != y &&
                            p.default.track(f.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: O.id,
                                reward_sku_id: y.skuId,
                            }),
                            t(e);
                    },
                    onBackClick: () => t(h.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [l.id],
                    selectedPlanId: l.id,
                }),
            }),
        }),
        B = (0, r.jsxs)(o.X6q, {
            variant: "heading-lg/bold",
            color: "header-primary",
            className: m.title,
            children: [
                j.intl.string(j.t["Rp0+ZG"]),
                (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    color: "text-secondary",
                    className: m.subtitle,
                    children: j.intl.format(j.t.xGzXNT, { rewardCount: 2 * Z.length }),
                }),
            ],
        });
    return (0, r.jsxs)("div", {
        className: m.container,
        children: [
            (0, r.jsx)(o.xBx, { children: (0, r.jsx)(o.olH, { onClick: n }) }),
            (0, r.jsxs)(o.Kqy, {
                direction: "vertical",
                justify: "center",
                align: "center",
                children: [
                    B,
                    null != E &&
                        E.length > 1 &&
                        (0, r.jsx)(o.sY7, {
                            options: [
                                {
                                    name: "Trick",
                                    value: 0,
                                },
                                {
                                    name: "Treat",
                                    value: 1,
                                },
                            ],
                            value: w,
                            look: "pill",
                            onChange: (e) => {
                                let { value: t } = e;
                                M(t);
                            },
                        }),
                ],
            }),
            (0, r.jsx)(o.hzk, {
                children: (0, r.jsx)("div", {
                    className: m.cardsGrid,
                    children: A,
                }),
            }),
            T,
        ],
    });
}
