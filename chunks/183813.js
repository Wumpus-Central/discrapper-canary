t.d(n, { S: () => y });
var i = t(255367),
    l = t(73800),
    s = t(512722),
    r = t.n(s),
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
    _ = t(614277),
    m = t(981631),
    L = t(388032),
    g = t(529190);
function y(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { selectedPlan: s, selectedSkuId: y, step: S } = (0, j.JL)(),
        { setSelectedGiftingPromotionReward: E, selectedGiftingPromotionReward: b, claimableRewards: v } = (0, h.wD)(),
        P = (0, a.e7)([p.default], () => p.default.getCurrentUser());
    l.useEffect(() => {
        let e = null != v && v.length > 0;
        null == b && e && E(v[0]);
    }, [v, b, E]);
    let Z = (e) => {
            let n = e.skuId;
            return (0, i.jsx)(
                d.Z,
                {
                    skuId: n,
                    price: L.intl.string(L.t.QQsaCQ),
                    isSelected: n === (null == b ? void 0 : b.skuId),
                    onSelect: () => E(e),
                    className: g.giftSelectItem
                },
                n
            );
        },
        O = (0, c.Q3)('PremiumPaymentFreeSKUSelectStep');
    r()(null != s, 'Expected plan to selected'), r()(null != y, 'Expected selectedSkuId'), r()(null != S, 'Step should be set');
    let I = null == v ? void 0 : v.map((e) => Z(e)),
        w =
            null != b && null != P
                ? (0, i.jsx)(C.Z, {
                      avatarDecorationOverride: { asset: b.assetId },
                      user: P,
                      guildId: null,
                      avatarSize: o.EFr.SIZE_152
                  })
                : null,
        M = (0, i.jsx)(_.O3, {
            children: (0, i.jsx)(o.mzw, {
                className: g.modalFooter,
                children: (0, i.jsx)(u.y, {
                    onStepChange: (e) => {
                        null != P &&
                            null != b &&
                            x.default.track(m.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: P.id,
                                reward_sku_id: b.skuId
                            }),
                            n(e);
                    },
                    onBackClick: () => n(f.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [s.id],
                    selectedPlanId: s.id
                })
            })
        }),
        T = (0, i.jsx)(o.X6q, {
            variant: 'heading-lg/bold',
            color: 'header-primary',
            children: L.intl.string(L.t['Rp0+ZG'])
        });
    return O
        ? (0, i.jsxs)('div', {
              className: g.container,
              children: [
                  (0, i.jsx)(o.xBx, {
                      children: (0, i.jsxs)(o.Kqy, {
                          direction: 'horizontal',
                          justify: 'space-between',
                          align: 'center',
                          children: [T, (0, i.jsx)(o.olH, { onClick: t })]
                      })
                  }),
                  (0, i.jsx)(o.hzk, {
                      children: (0, i.jsxs)(o.Kqy, {
                          gap: 24,
                          align: 'center',
                          padding: { top: 24 },
                          children: [
                              w,
                              (0, i.jsx)(o.Kqy, {
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
        : (0, i.jsxs)('div', {
              className: g.stepBodySkuSelect,
              children: [
                  (0, i.jsxs)('div', {
                      className: g.bodyColumnLeft,
                      children: [
                          (0, i.jsx)('div', {
                              className: g.header,
                              children: T
                          }),
                          I
                      ]
                  }),
                  (0, i.jsx)(o.olH, {
                      onClick: t,
                      className: g.closeButton
                  }),
                  (0, i.jsx)('div', {
                      className: g.bodyColumnRight,
                      children: w
                  }),
                  M
              ]
          });
}
