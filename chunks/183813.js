t.d(n, { S: () => g });
var i = t(255367),
    l = t(73800),
    r = t(512722),
    s = t.n(r),
    a = t(442837),
    o = t(481060),
    C = t(204418),
    d = t(628952),
    c = t(314404),
    u = t(594174),
    p = t(626135),
    x = t(987209),
    h = t(563132),
    f = t(409813),
    j = t(27034),
    m = t(981631),
    _ = t(388032),
    L = t(529190);
function g(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { selectedPlan: r, selectedSkuId: g, step: y } = (0, h.JL)(),
        { setSelectedGiftingPromotionReward: E, selectedGiftingPromotionReward: S, claimableRewards: v } = (0, x.wD)(),
        Z = (0, a.e7)([u.default], () => u.default.getCurrentUser());
    l.useEffect(() => {
        let e = null != v && v.length > 0;
        null == S && e && E(v[0]);
    }, [v, S, E]);
    let P = (e) => {
        let n = e.skuId;
        return (0, i.jsx)(
            d.Z,
            {
                skuId: n,
                price: _.intl.string(_.t.QQsaCQ),
                isSelected: n === (null == S ? void 0 : S.skuId),
                onSelect: () => E(e),
                className: L.giftSelectItem
            },
            n
        );
    };
    (s()(null != r, 'Expected plan to selected'), s()(null != g, 'Expected selectedSkuId'), s()(null != y, 'Step should be set'));
    let b = null == v ? void 0 : v.map((e) => P(e)),
        I =
            null != S && null != Z
                ? (0, i.jsx)(C.Z, {
                      avatarDecorationOverride: { asset: S.assetId },
                      user: Z,
                      guildId: null,
                      avatarSize: o.EFr.SIZE_152
                  })
                : null,
        O = (0, i.jsx)(j.O3, {
            children: (0, i.jsx)(o.mzw, {
                className: L.modalFooter,
                children: (0, i.jsx)(c.y, {
                    onStepChange: (e) => {
                        (null != Z &&
                            null != S &&
                            p.default.track(m.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: Z.id,
                                reward_sku_id: S.skuId
                            }),
                            n(e));
                    },
                    onBackClick: () => n(f.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [r.id],
                    selectedPlanId: r.id
                })
            })
        }),
        M = (0, i.jsx)(o.X6q, {
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
                    children: [M, (0, i.jsx)(o.olH, { onClick: t })]
                })
            }),
            (0, i.jsx)(o.hzk, {
                children: (0, i.jsxs)(o.Kqy, {
                    gap: 24,
                    align: 'center',
                    padding: { top: 24 },
                    children: [
                        I,
                        (0, i.jsx)(o.Kqy, {
                            gap: 8,
                            padding: { top: 12 },
                            children: b
                        })
                    ]
                })
            }),
            O
        ]
    });
}
