n.d(t, { S: () => E });
var i = n(255367),
    l = n(73800),
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
    h = n(987209),
    f = n(563132),
    j = n(409813),
    m = n(614277),
    _ = n(981631),
    g = n(388032),
    L = n(529190);
function E(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedPlan: s, selectedSkuId: E, step: y } = (0, f.JL)(),
        { setSelectedGiftingPromotionReward: S, selectedGiftingPromotionReward: v, claimableRewards: P } = (0, h.wD)(),
        b = (0, a.e7)([p.default], () => p.default.getCurrentUser());
    l.useEffect(() => {
        let e = null != P && P.length > 0;
        null == v && e && S(P[0]);
    }, [P, v, S]);
    let I = (e) => {
            let t = e.skuId;
            return (0, i.jsx)(
                d.Z,
                {
                    skuId: t,
                    price: g.intl.string(g.t.QQsaCQ),
                    isSelected: t === (null == v ? void 0 : v.skuId),
                    onSelect: () => S(e),
                    className: L.giftSelectItem
                },
                t
            );
        },
        T = (0, c.Q3)('PremiumPaymentFreeSKUSelectStep');
    r()(null != s, 'Expected plan to selected'), r()(null != E, 'Expected selectedSkuId'), r()(null != y, 'Step should be set');
    let M = null == P ? void 0 : P.map((e) => I(e)),
        Z =
            null != v && null != b
                ? (0, i.jsx)(C.Z, {
                      avatarDecorationOverride: { asset: v.assetId },
                      user: b,
                      guildId: null,
                      avatarSize: o.EFr.SIZE_152
                  })
                : null,
        N = (0, i.jsx)(m.O3, {
            children: (0, i.jsx)(o.mzw, {
                className: L.modalFooter,
                children: (0, i.jsx)(u.y, {
                    onStepChange: (e) => {
                        null != b &&
                            null != v &&
                            x.default.track(_.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: b.id,
                                reward_sku_id: v.skuId
                            }),
                            t(e);
                    },
                    onBackClick: () => t(j.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [s.id],
                    selectedPlanId: s.id
                })
            })
        }),
        O = (0, i.jsx)(o.X6q, {
            variant: 'heading-lg/bold',
            color: 'header-primary',
            children: g.intl.string(g.t['Rp0+ZG'])
        });
    return T
        ? (0, i.jsxs)('div', {
              className: L.container,
              children: [
                  (0, i.jsx)(o.xBx, {
                      children: (0, i.jsxs)(o.Kqy, {
                          direction: 'horizontal',
                          justify: 'space-between',
                          align: 'center',
                          children: [O, (0, i.jsx)(o.olH, { onClick: n })]
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
                                  children: M
                              })
                          ]
                      })
                  }),
                  N
              ]
          })
        : (0, i.jsxs)('div', {
              className: L.stepBodySkuSelect,
              children: [
                  (0, i.jsxs)('div', {
                      className: L.bodyColumnLeft,
                      children: [
                          (0, i.jsx)('div', {
                              className: L.header,
                              children: O
                          }),
                          M
                      ]
                  }),
                  (0, i.jsx)(o.olH, {
                      onClick: n,
                      className: L.closeButton
                  }),
                  (0, i.jsx)('div', {
                      className: L.bodyColumnRight,
                      children: Z
                  }),
                  N
              ]
          });
}
