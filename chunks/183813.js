n.d(r, { S: () => g });
var t = n(255367),
    i = n(73800),
    o = n(512722),
    a = n.n(o),
    l = n(442837),
    s = n(481060),
    C = n(204418),
    d = n(628952),
    c = n(314404),
    p = n(594174),
    u = n(626135),
    _ = n(987209),
    x = n(563132),
    f = n(409813),
    m = n(27034),
    h = n(981631),
    j = n(388032),
    L = n(864089);
function g(e) {
    let { handleStepChange: r, handleClose: n } = e,
        { selectedPlan: o, selectedSkuId: g, step: b } = (0, x.JL)(),
        { setSelectedGiftingPromotionReward: y, selectedGiftingPromotionReward: S, claimableRewards: v } = (0, _.wD)(),
        E = (0, l.e7)([p.default], () => p.default.getCurrentUser());
    i.useEffect(() => {
        let e = null != v && v.length > 0;
        null == S && e && y(v[0]);
    }, [v, S, y]);
    let I = (e) => {
        let r = e.skuId;
        return (0, t.jsx)(
            d.Z,
            {
                skuId: r,
                price: j.intl.string(j.t.QQsaCQ),
                isSelected: r === (null == S ? void 0 : S.skuId),
                onSelect: () => y(e),
                className: L.giftSelectItem,
            },
            r,
        );
    };
    a()(null != o, "Expected plan to selected"),
        a()(null != g, "Expected selectedSkuId"),
        a()(null != b, "Step should be set");
    let P = null == v ? void 0 : v.map((e) => I(e)),
        T =
            null != S && null != E
                ? (0, t.jsx)(C.Z, {
                      avatarDecorationOverride: { asset: S.assetId },
                      user: E,
                      guildId: null,
                      avatarSize: s.EFr.SIZE_152,
                  })
                : null,
        O = (0, t.jsx)(m.O3, {
            children: (0, t.jsx)(s.mzw, {
                className: L.modalFooter,
                children: (0, t.jsx)(c.y, {
                    onStepChange: (e) => {
                        null != E &&
                            null != S &&
                            u.default.track(h.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: E.id,
                                reward_sku_id: S.skuId,
                            }),
                            r(e);
                    },
                    onBackClick: () => r(f.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [o.id],
                    selectedPlanId: o.id,
                }),
            }),
        }),
        w = (0, t.jsx)(s.X6q, {
            variant: "heading-lg/bold",
            color: "header-primary",
            children: j.intl.string(j.t["Rp0+ZG"]),
        });
    return (0, t.jsxs)("div", {
        className: L.container,
        children: [
            (0, t.jsx)(s.xBx, {
                children: (0, t.jsxs)(s.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "center",
                    children: [w, (0, t.jsx)(s.olH, { onClick: n })],
                }),
            }),
            (0, t.jsx)(s.hzk, {
                children: (0, t.jsxs)(s.Kqy, {
                    gap: 24,
                    align: "center",
                    padding: { top: 24 },
                    children: [
                        T,
                        (0, t.jsx)(s.Kqy, {
                            gap: 8,
                            padding: { top: 12 },
                            children: P,
                        }),
                    ],
                }),
            }),
            O,
        ],
    });
}
