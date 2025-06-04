t.d(n, { S: () => y });
var l = t(255367),
    i = t(73800),
    r = t(512722),
    s = t.n(r),
    a = t(442837),
    o = t(481060),
    C = t(204418),
    d = t(628952),
    c = t(540059),
    u = t(314404),
    p = t(594174),
    x = t(626135),
    h = t(987209),
    j = t(563132),
    f = t(409813),
    m = t(614277),
    _ = t(981631),
    L = t(388032),
    g = t(529190);
function y(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { selectedPlan: r, selectedSkuId: y, step: S } = (0, j.JL)(),
        { setSelectedGiftingPromotionReward: E, selectedGiftingPromotionReward: v, claimableRewards: b } = (0, h.wD)(),
        P = (0, a.e7)([p.default], () => p.default.getCurrentUser());
    i.useEffect(() => {
        let e = null != b && b.length > 0;
        null == v && e && E(b[0]);
    }, [b, v, E]);
    let Z = (e) => {
            let n = e.skuId;
            return (0, l.jsx)(
                d.Z,
                {
                    skuId: n,
                    price: L.intl.string(L.t.QQsaCQ),
                    isSelected: n === (null == v ? void 0 : v.skuId),
                    onSelect: () => E(e),
                    className: g.giftSelectItem
                },
                n
            );
        },
        O = (0, c.Q3)('PremiumPaymentFreeSKUSelectStep');
    s()(null != r, 'Expected plan to selected'), s()(null != y, 'Expected selectedSkuId'), s()(null != S, 'Step should be set');
    let I = null == b ? void 0 : b.map((e) => Z(e)),
        w =
            null != v && null != P
                ? (0, l.jsx)(C.Z, {
                      avatarDecorationOverride: { asset: v.assetId },
                      user: P,
                      guildId: null,
                      avatarSize: o.EFr.SIZE_152
                  })
                : null,
        M = (0, l.jsx)(m.O3, {
            children: (0, l.jsx)(o.mzw, {
                className: g.modalFooter,
                children: (0, l.jsx)(u.y, {
                    onStepChange: (e) => {
                        null != P &&
                            null != v &&
                            x.default.track(_.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: P.id,
                                reward_sku_id: v.skuId
                            }),
                            n(e);
                    },
                    onBackClick: () => n(f.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [r.id],
                    selectedPlanId: r.id
                })
            })
        }),
        T = (0, l.jsx)(o.X6q, {
            variant: 'heading-lg/bold',
            color: 'header-primary',
            children: L.intl.string(L.t['Rp0+ZG'])
        });
    return O
        ? (0, l.jsxs)('div', {
              className: g.container,
              children: [
                  (0, l.jsx)(o.xBx, {
                      children: (0, l.jsxs)(o.Kqy, {
                          direction: 'horizontal',
                          justify: 'space-between',
                          align: 'center',
                          children: [T, (0, l.jsx)(o.olH, { onClick: t })]
                      })
                  }),
                  (0, l.jsx)(o.hzk, {
                      children: (0, l.jsxs)(o.Kqy, {
                          gap: 24,
                          align: 'center',
                          padding: { top: 24 },
                          children: [
                              w,
                              (0, l.jsx)(o.Kqy, {
                                  gap: 8,
                                  padding: { top: 12 },
                                  children: I
                              })
                          ]
                      })
                  }),
                  M
              ]
          })
        : (0, l.jsxs)('div', {
              className: g.stepBodySkuSelect,
              children: [
                  (0, l.jsxs)('div', {
                      className: g.bodyColumnLeft,
                      children: [
                          (0, l.jsx)('div', {
                              className: g.header,
                              children: T
                          }),
                          I
                      ]
                  }),
                  (0, l.jsx)(o.olH, {
                      onClick: t,
                      className: g.closeButton
                  }),
                  (0, l.jsx)('div', {
                      className: g.bodyColumnRight,
                      children: w
                  }),
                  M
              ]
          });
}
