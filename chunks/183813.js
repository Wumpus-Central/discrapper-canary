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
    L = n(388032),
    g = n(529190);
function E(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedPlan: s, selectedSkuId: E, step: y } = (0, f.JL)(),
        { setSelectedGiftingPromotionReward: S, selectedGiftingPromotionReward: Z, claimableRewards: M } = (0, h.wD)(),
        v = (0, a.e7)([p.default], () => p.default.getCurrentUser());
    l.useEffect(() => {
        let e = null != M && M.length > 0;
        null == Z && e && S(M[0]);
    }, [M, Z, S]);
    let P = (e) => {
            let t = e.skuId;
            return (0, i.jsx)(
                d.Z,
                {
                    skuId: t,
                    price: L.intl.string(L.t.QQsaCQ),
                    isSelected: t === (null == Z ? void 0 : Z.skuId),
                    onSelect: () => S(e),
                    className: g.giftSelectItem
                },
                t
            );
        },
        b = (0, c.Q3)('PremiumPaymentFreeSKUSelectStep');
    r()(null != s, 'Expected plan to selected'), r()(null != E, 'Expected selectedSkuId'), r()(null != y, 'Step should be set');
    let I = null == M ? void 0 : M.map((e) => P(e)),
        T =
            null != Z && null != v
                ? (0, i.jsx)(C.Z, {
                      avatarDecorationOverride: { asset: Z.assetId },
                      user: v,
                      guildId: null,
                      avatarSize: o.EFr.SIZE_152
                  })
                : null,
        N = (0, i.jsx)(m.O3, {
            children: (0, i.jsx)(o.mzw, {
                className: g.modalFooter,
                children: (0, i.jsx)(u.y, {
                    onStepChange: (e) => {
                        null != v &&
                            null != Z &&
                            x.default.track(_.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: v.id,
                                reward_sku_id: Z.skuId
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
            children: L.intl.string(L.t['Rp0+ZG'])
        });
    return b
        ? (0, i.jsxs)('div', {
              className: g.container,
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
                              T,
                              (0, i.jsx)(o.Kqy, {
                                  gap: 8,
                                  padding: { top: 12 },
                                  children: I
                              })
                          ]
                      })
                  }),
                  N
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
                              children: O
                          }),
                          I
                      ]
                  }),
                  (0, i.jsx)(o.olH, {
                      onClick: n,
                      className: g.closeButton
                  }),
                  (0, i.jsx)('div', {
                      className: g.bodyColumnRight,
                      children: T
                  }),
                  N
              ]
          });
}
