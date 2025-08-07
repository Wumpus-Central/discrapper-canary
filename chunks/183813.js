r.d(t, { S: () => b });
var n = r(255367),
    i = r(73800),
    o = r(512722),
    l = r.n(o),
    a = r(442837),
    s = r(481060),
    d = r(204418),
    C = r(628952),
    c = r(314404),
    u = r(594174),
    p = r(626135),
    _ = r(987209),
    f = r(563132),
    m = r(409813),
    x = r(27034),
    h = r(981631),
    j = r(388032),
    L = r(529190);
function b(e) {
    let { handleStepChange: t, handleClose: r } = e,
        { selectedPlan: o, selectedSkuId: b, step: g } = (0, f.JL)(),
        { setSelectedGiftingPromotionReward: y, selectedGiftingPromotionReward: S, claimableRewards: E } = (0, _.wD)(),
        v = (0, a.e7)([u.default], () => u.default.getCurrentUser());
    i.useEffect(() => {
        let e = null != E && E.length > 0;
        null == S && e && y(E[0]);
    }, [E, S, y]);
    let I = (e) => {
        let t = e.skuId;
        return (0, n.jsx)(
            C.Z,
            {
                skuId: t,
                price: j.intl.string(j.t.QQsaCQ),
                isSelected: t === (null == S ? void 0 : S.skuId),
                onSelect: () => y(e),
                className: L.giftSelectItem,
            },
            t,
        );
    };
    l()(null != o, "Expected plan to selected"),
        l()(null != b, "Expected selectedSkuId"),
        l()(null != g, "Step should be set");
    let w = null == E ? void 0 : E.map((e) => I(e)),
        O =
            null != S && null != v
                ? (0, n.jsx)(d.Z, {
                      avatarDecorationOverride: { asset: S.assetId },
                      user: v,
                      guildId: null,
                      avatarSize: s.EFr.SIZE_152,
                  })
                : null,
        P = (0, n.jsx)(x.O3, {
            children: (0, n.jsx)(s.mzw, {
                className: L.modalFooter,
                children: (0, n.jsx)(c.y, {
                    onStepChange: (e) => {
                        null != v &&
                            null != S &&
                            p.default.track(h.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: v.id,
                                reward_sku_id: S.skuId,
                            }),
                            t(e);
                    },
                    onBackClick: () => t(m.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [o.id],
                    selectedPlanId: o.id,
                }),
            }),
        }),
        M = (0, n.jsx)(s.X6q, {
            variant: "heading-lg/bold",
            color: "header-primary",
            children: j.intl.string(j.t["Rp0+ZG"]),
        });
    return (0, n.jsxs)("div", {
        className: L.container,
        children: [
            (0, n.jsx)(s.xBx, {
                children: (0, n.jsxs)(s.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "center",
                    children: [M, (0, n.jsx)(s.olH, { onClick: r })],
                }),
            }),
            (0, n.jsx)(s.hzk, {
                children: (0, n.jsxs)(s.Kqy, {
                    gap: 24,
                    align: "center",
                    padding: { top: 24 },
                    children: [
                        O,
                        (0, n.jsx)(s.Kqy, {
                            gap: 8,
                            padding: { top: 12 },
                            children: w,
                        }),
                    ],
                }),
            }),
            P,
        ],
    });
}
