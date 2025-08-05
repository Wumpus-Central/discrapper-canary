t.d(r, { S: () => b });
var n = t(255367),
    i = t(73800),
    l = t(512722),
    o = t.n(l),
    a = t(442837),
    s = t(481060),
    d = t(204418),
    C = t(628952),
    c = t(314404),
    u = t(594174),
    p = t(626135),
    _ = t(987209),
    f = t(563132),
    x = t(409813),
    m = t(27034),
    h = t(981631),
    j = t(388032),
    L = t(529190);
function b(e) {
    let { handleStepChange: r, handleClose: t } = e,
        { selectedPlan: l, selectedSkuId: b, step: g } = (0, f.JL)(),
        { setSelectedGiftingPromotionReward: y, selectedGiftingPromotionReward: S, claimableRewards: E } = (0, _.wD)(),
        v = (0, a.e7)([u.default], () => u.default.getCurrentUser());
    i.useEffect(() => {
        let e = null != E && E.length > 0;
        null == S && e && y(E[0]);
    }, [E, S, y]);
    let I = (e) => {
        let r = e.skuId;
        return (0, n.jsx)(
            C.Z,
            {
                skuId: r,
                price: j.intl.string(j.t.QQsaCQ),
                isSelected: r === (null == S ? void 0 : S.skuId),
                onSelect: () => y(e),
                className: L.giftSelectItem
            },
            r
        );
    };
    (o()(null != l, 'Expected plan to selected'), o()(null != b, 'Expected selectedSkuId'), o()(null != g, 'Step should be set'));
    let w = null == E ? void 0 : E.map((e) => I(e)),
        O =
            null != S && null != v
                ? (0, n.jsx)(d.Z, {
                      avatarDecorationOverride: { asset: S.assetId },
                      user: v,
                      guildId: null,
                      avatarSize: s.EFr.SIZE_152
                  })
                : null,
        M = (0, n.jsx)(m.O3, {
            children: (0, n.jsx)(s.mzw, {
                className: L.modalFooter,
                children: (0, n.jsx)(c.y, {
                    onStepChange: (e) => {
                        (null != v &&
                            null != S &&
                            p.default.track(h.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: v.id,
                                reward_sku_id: S.skuId
                            }),
                            r(e));
                    },
                    onBackClick: () => r(x.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [l.id],
                    selectedPlanId: l.id
                })
            })
        }),
        P = (0, n.jsx)(s.X6q, {
            variant: 'heading-lg/bold',
            color: 'header-primary',
            children: j.intl.string(j.t['Rp0+ZG'])
        });
    return (0, n.jsxs)('div', {
        className: L.container,
        children: [
            (0, n.jsx)(s.xBx, {
                children: (0, n.jsxs)(s.Kqy, {
                    direction: 'horizontal',
                    justify: 'space-between',
                    align: 'center',
                    children: [P, (0, n.jsx)(s.olH, { onClick: t })]
                })
            }),
            (0, n.jsx)(s.hzk, {
                children: (0, n.jsxs)(s.Kqy, {
                    gap: 24,
                    align: 'center',
                    padding: { top: 24 },
                    children: [
                        O,
                        (0, n.jsx)(s.Kqy, {
                            gap: 8,
                            padding: { top: 12 },
                            children: w
                        })
                    ]
                })
            }),
            M
        ]
    });
}
