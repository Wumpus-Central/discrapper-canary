n.d(t, { S: () => y });
var i = n(255367),
    r = n(73800),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    C = n(204418),
    d = n(628952),
    c = n(314404),
    u = n(594174),
    p = n(626135),
    x = n(987209),
    h = n(563132),
    f = n(409813),
    j = n(27034),
    m = n(981631),
    _ = n(388032),
    L = n(529190);
function y(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedPlan: l, selectedSkuId: y, step: E } = (0, h.JL)(),
        { setSelectedGiftingPromotionReward: g, selectedGiftingPromotionReward: b, claimableRewards: S } = (0, x.wD)(),
        v = (0, a.e7)([u.default], () => u.default.getCurrentUser());
    r.useEffect(() => {
        let e = null != S && S.length > 0;
        null == b && e && g(S[0]);
    }, [S, b, g]);
    let O = (e) => {
        let t = e.skuId;
        return (0, i.jsx)(
            d.Z,
            {
                skuId: t,
                price: _.intl.string(_.t.QQsaCQ),
                isSelected: t === (null == b ? void 0 : b.skuId),
                onSelect: () => g(e),
                className: L.giftSelectItem
            },
            t
        );
    };
    (s()(null != l, 'Expected plan to selected'), s()(null != y, 'Expected selectedSkuId'), s()(null != E, 'Step should be set'));
    let w = null == S ? void 0 : S.map((e) => O(e)),
        Z =
            null != b && null != v
                ? (0, i.jsx)(C.Z, {
                      avatarDecorationOverride: { asset: b.assetId },
                      user: v,
                      guildId: null,
                      avatarSize: o.EFr.SIZE_152
                  })
                : null,
        P = (0, i.jsx)(j.O3, {
            children: (0, i.jsx)(o.mzw, {
                className: L.modalFooter,
                children: (0, i.jsx)(c.y, {
                    onStepChange: (e) => {
                        (null != v &&
                            null != b &&
                            p.default.track(m.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: v.id,
                                reward_sku_id: b.skuId
                            }),
                            t(e));
                    },
                    onBackClick: () => t(f.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [l.id],
                    selectedPlanId: l.id
                })
            })
        }),
        I = (0, i.jsx)(o.X6q, {
            variant: 'heading-lg/bold',
            color: 'header-primary',
            children: _.intl.string(_.t['Rp0+ZG'])
        });
    return (0, i.jsxs)('div', {
        className: L.container,
        children: [
            (0, i.jsx)(o.xBx, {
                children: (0, i.jsxs)(o.Kqy, {
                    direction: 'horizontal',
                    justify: 'space-between',
                    align: 'center',
                    children: [I, (0, i.jsx)(o.olH, { onClick: n })]
                })
            }),
            (0, i.jsx)(o.hzk, {
                children: (0, i.jsxs)(o.Kqy, {
                    gap: 24,
                    align: 'center',
                    padding: { top: 24 },
                    children: [
                        Z,
                        (0, i.jsx)(o.Kqy, {
                            gap: 8,
                            padding: { top: 12 },
                            children: w
                        })
                    ]
                })
            }),
            P
        ]
    });
}
