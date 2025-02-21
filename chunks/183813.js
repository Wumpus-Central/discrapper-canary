n.d(t, { S: () => E });
var l = n(200651),
    i = n(192379),
    s = n(512722),
    r = n.n(s),
    a = n(442837),
    o = n(481060),
    C = n(204418),
    d = n(628952),
    c = n(540059),
    u = n(314404),
    p = n(594174),
    x = n(626135),
    f = n(987209),
    h = n(563132),
    _ = n(409813),
    j = n(614277),
    m = n(981631),
    L = n(388032),
    g = n(934457);
function E(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedPlan: s, selectedSkuId: E, step: S } = (0, h.JL)(),
        { setSelectedGiftingPromotionReward: N, selectedGiftingPromotionReward: y, claimableRewards: I } = (0, f.wD)(),
        v = (0, a.e7)([p.default], () => p.default.getCurrentUser());
    i.useEffect(() => {
        let e = null != I && I.length > 0;
        null == y && e && N(I[0]);
    }, [I, y, N]);
    let O = (e) => {
            let t = e.skuId;
            return (0, l.jsx)(
                d.Z,
                {
                    skuId: t,
                    price: L.NW.string(L.t.QQsaCQ),
                    isSelected: t === (null == y ? void 0 : y.skuId),
                    onSelect: () => N(e),
                    className: g.giftSelectItem
                },
                t
            );
        },
        P = (0, c.Q3)('PremiumPaymentFreeSKUSelectStep');
    r()(null != s, 'Expected plan to selected'), r()(null != E, 'Expected selectedSkuId'), r()(null != S, 'Step should be set');
    let b = null == I ? void 0 : I.map((e) => O(e)),
        T =
            null != y && null != v
                ? (0, l.jsx)(C.Z, {
                      avatarDecorationOverride: { asset: y.assetId },
                      user: v,
                      guildId: null,
                      avatarSize: o.EFr.SIZE_152
                  })
                : null,
        M = (0, l.jsx)(j.O3, {
            children: (0, l.jsx)(o.mzw, {
                className: g.modalFooter,
                children: (0, l.jsx)(u.y, {
                    onStepChange: (e) => {
                        null != v &&
                            null != y &&
                            x.default.track(m.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: v.id,
                                reward_sku_id: y.skuId
                            }),
                            t(e);
                    },
                    onBackClick: () => t(_.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [s.id],
                    selectedPlanId: s.id
                })
            })
        }),
        Z = (0, l.jsx)(o.X6q, {
            variant: 'heading-lg/bold',
            color: 'header-primary',
            children: L.NW.string(L.t['Rp0+ZG'])
        });
    return P
        ? (0, l.jsxs)('div', {
              className: g.container,
              children: [
                  (0, l.jsx)(o.xBx, {
                      children: (0, l.jsxs)(o.Kqy, {
                          direction: 'horizontal',
                          justify: 'space-between',
                          align: 'center',
                          children: [Z, (0, l.jsx)(o.olH, { onClick: n })]
                      })
                  }),
                  (0, l.jsx)(o.hzk, {
                      children: (0, l.jsxs)(o.Kqy, {
                          gap: 24,
                          align: 'center',
                          padding: { top: 24 },
                          children: [
                              T,
                              (0, l.jsx)(o.Kqy, {
                                  gap: 8,
                                  padding: { top: 12 },
                                  children: b
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
                              children: Z
                          }),
                          b
                      ]
                  }),
                  (0, l.jsx)(o.olH, {
                      onClick: n,
                      className: g.closeButton
                  }),
                  (0, l.jsx)('div', {
                      className: g.bodyColumnRight,
                      children: T
                  }),
                  M
              ]
          });
}
