t.d(n, { S: () => g });
var r = t(951288),
    i = t(647438),
    l = t(512722),
    s = t.n(l),
    a = t(442837),
    o = t(481060),
    C = t(204418),
    d = t(628952),
    p = t(314404),
    c = t(594174),
    u = t(626135),
    x = t(987209),
    _ = t(563132),
    f = t(409813),
    h = t(27034),
    j = t(981631),
    L = t(388032),
    m = t(950174);
function g(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { selectedPlan: l, selectedSkuId: g, step: S } = (0, _.JL)(),
        {
            setSelectedGiftingPromotionReward: y,
            selectedGiftingPromotionReward: E,
            claimableRewards: b,
            claimableVariants: P,
        } = (0, x.wD)(),
        O = (0, a.e7)([c.default], () => c.default.getCurrentUser());
    i.useEffect(() => {
        null != b && b.length > 0 && null == E && y(b[0]);
    }, [b, E, y]),
        s()(null != l, "Expected plan to selected"),
        s()(null != g, "Expected selectedSkuId"),
        s()(null != S, "Step should be set");
    let I =
            null == b
                ? void 0
                : b.map((e) =>
                      ((e) => {
                          let n = e.skuId;
                          return (0, r.jsx)(
                              d.Z,
                              {
                                  skuId: n,
                                  price: L.intl.string(L.t.QQsaCQ),
                                  isSelected: n === (null == E ? void 0 : E.skuId),
                                  onSelect: () => y(e),
                                  className: m.giftSelectItem,
                              },
                              n,
                          );
                      })(e),
                  ),
        v =
            null != E && null != O
                ? (0, r.jsx)(C.Z, {
                      avatarDecorationOverride: { asset: E.assetId },
                      user: O,
                      guildId: null,
                      avatarSize: o.EFr.SIZE_152,
                  })
                : null,
        Z = (0, r.jsx)(h.O3, {
            children: (0, r.jsx)(o.mzw, {
                className: m.modalFooter,
                children: (0, r.jsx)(p.y, {
                    onStepChange: (e) => {
                        null != O &&
                            null != E &&
                            u.default.track(j.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: O.id,
                                reward_sku_id: E.skuId,
                            }),
                            n(e);
                    },
                    onBackClick: () => n(f.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [l.id],
                    selectedPlanId: l.id,
                }),
            }),
        }),
        M = (0, r.jsx)(o.X6q, {
            variant: "heading-lg/bold",
            color: "header-primary",
            children: L.intl.string(L.t["Rp0+ZG"]),
        });
    return (0, r.jsxs)("div", {
        className: m.container,
        children: [
            (0, r.jsx)(o.xBx, {
                children: (0, r.jsxs)(o.Kqy, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "center",
                    children: [M, (0, r.jsx)(o.olH, { onClick: t })],
                }),
            }),
            (0, r.jsx)(o.hzk, {
                children: (0, r.jsxs)(o.Kqy, {
                    gap: 24,
                    align: "center",
                    padding: { top: 24 },
                    children: [
                        v,
                        (0, r.jsx)(o.Kqy, {
                            gap: 8,
                            padding: { top: 12 },
                            children: I,
                        }),
                    ],
                }),
            }),
            Z,
        ],
    });
}
