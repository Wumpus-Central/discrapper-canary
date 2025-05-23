n.d(t, { S: () => E });
var i = n(255367),
    l = n(73800),
    s = n(512722),
    r = n.n(s),
    a = n(442837),
    C = n(481060),
    o = n(204418),
    d = n(628952),
    c = n(540059),
    u = n(314404),
    p = n(594174),
    x = n(626135),
    h = n(987209),
    f = n(563132),
    j = n(409813),
    m = n(614277),
    L = n(981631),
    _ = n(388032),
    g = n(529190);
function E(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedPlan: s, selectedSkuId: E, step: y } = (0, f.JL)(),
        { setSelectedGiftingPromotionReward: S, selectedGiftingPromotionReward: M, claimableRewards: Z } = (0, h.wD)(),
        P = (0, a.e7)([p.default], () => p.default.getCurrentUser());
    l.useEffect(() => {
        let e = null != Z && Z.length > 0;
        null == M && e && S(Z[0]);
    }, [Z, M, S]);
    let v = (e) => {
            let t = e.skuId;
            return (0, i.jsx)(
                d.Z,
                {
                    skuId: t,
                    price: _.intl.string(_.t.QQsaCQ),
                    isSelected: t === (null == M ? void 0 : M.skuId),
                    onSelect: () => S(e),
                    className: g.giftSelectItem
                },
                t
            );
        },
        I = (0, c.Q3)('PremiumPaymentFreeSKUSelectStep');
    r()(null != s, 'Expected plan to selected'), r()(null != E, 'Expected selectedSkuId'), r()(null != y, 'Step should be set');
    let b = null == Z ? void 0 : Z.map((e) => v(e)),
        T =
            null != M && null != P
                ? (0, i.jsx)(o.Z, {
                      avatarDecorationOverride: { asset: M.assetId },
                      user: P,
                      guildId: null,
                      avatarSize: C.EFr.SIZE_152
                  })
                : null,
        N = (0, i.jsx)(m.O3, {
            children: (0, i.jsx)(C.mzw, {
                className: g.modalFooter,
                children: (0, i.jsx)(u.y, {
                    onStepChange: (e) => {
                        null != P &&
                            null != M &&
                            x.default.track(L.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: P.id,
                                reward_sku_id: M.skuId
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
        O = (0, i.jsx)(C.X6q, {
            variant: 'heading-lg/bold',
            color: 'header-primary',
            children: _.intl.string(_.t['Rp0+ZG'])
        });
    return I
        ? (0, i.jsxs)('div', {
              className: g.container,
              children: [
                  (0, i.jsx)(C.xBx, {
                      children: (0, i.jsxs)(C.Kqy, {
                          direction: 'horizontal',
                          justify: 'space-between',
                          align: 'center',
                          children: [O, (0, i.jsx)(C.olH, { onClick: n })]
                      })
                  }),
                  (0, i.jsx)(C.hzk, {
                      children: (0, i.jsxs)(C.Kqy, {
                          gap: 24,
                          align: 'center',
                          padding: { top: 24 },
                          children: [
                              T,
                              (0, i.jsx)(C.Kqy, {
                                  gap: 8,
                                  padding: { top: 12 },
                                  children: b
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
                          b
                      ]
                  }),
                  (0, i.jsx)(C.olH, {
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
