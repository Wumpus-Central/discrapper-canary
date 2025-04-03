n.d(t, { S: () => S });
var r = n(200651),
    i = n(192379),
    l = n(512722),
    s = n.n(l),
    o = n(442837),
    a = n(481060),
    C = n(204418),
    d = n(628952),
    c = n(540059),
    u = n(314404),
    p = n(594174),
    _ = n(626135),
    x = n(987209),
    f = n(563132),
    h = n(409813),
    m = n(614277),
    j = n(981631),
    L = n(388032),
    g = n(529190);
function S(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedPlan: l, selectedSkuId: S, step: y } = (0, f.JL)(),
        { setSelectedGiftingPromotionReward: E, selectedGiftingPromotionReward: b, claimableRewards: I } = (0, x.wD)(),
        N = (0, o.e7)([p.default], () => p.default.getCurrentUser());
    i.useEffect(() => {
        let e = null != I && I.length > 0;
        null == b && e && E(I[0]);
    }, [I, b, E]);
    let T = (e) => {
            let t = e.skuId;
            return (0, r.jsx)(
                d.Z,
                {
                    skuId: t,
                    price: L.NW.string(L.t.QQsaCQ),
                    isSelected: t === (null == b ? void 0 : b.skuId),
                    onSelect: () => E(e),
                    className: g.giftSelectItem
                },
                t
            );
        },
        M = (0, c.Q3)('PremiumPaymentFreeSKUSelectStep');
    s()(null != l, 'Expected plan to selected'), s()(null != S, 'Expected selectedSkuId'), s()(null != y, 'Step should be set');
    let P = null == I ? void 0 : I.map((e) => T(e)),
        v =
            null != b && null != N
                ? (0, r.jsx)(C.Z, {
                      avatarDecorationOverride: { asset: b.assetId },
                      user: N,
                      guildId: null,
                      avatarSize: a.EFr.SIZE_152
                  })
                : null,
        O = (0, r.jsx)(m.O3, {
            children: (0, r.jsx)(a.mzw, {
                className: g.modalFooter,
                children: (0, r.jsx)(u.y, {
                    onStepChange: (e) => {
                        null != N &&
                            null != b &&
                            _.default.track(j.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: N.id,
                                reward_sku_id: b.skuId
                            }),
                            t(e);
                    },
                    onBackClick: () => t(h.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [l.id],
                    selectedPlanId: l.id
                })
            })
        }),
        Z = (0, r.jsx)(a.X6q, {
            variant: 'heading-lg/bold',
            color: 'header-primary',
            children: L.NW.string(L.t['Rp0+ZG'])
        });
    return M
        ? (0, r.jsxs)('div', {
              className: g.container,
              children: [
                  (0, r.jsx)(a.xBx, {
                      children: (0, r.jsxs)(a.Kqy, {
                          direction: 'horizontal',
                          justify: 'space-between',
                          align: 'center',
                          children: [Z, (0, r.jsx)(a.olH, { onClick: n })]
                      })
                  }),
                  (0, r.jsx)(a.hzk, {
                      children: (0, r.jsxs)(a.Kqy, {
                          gap: 24,
                          align: 'center',
                          padding: { top: 24 },
                          children: [
                              v,
                              (0, r.jsx)(a.Kqy, {
                                  gap: 8,
                                  padding: { top: 12 },
                                  children: P
                              })
                          ]
                      })
                  }),
                  O
              ]
          })
        : (0, r.jsxs)('div', {
              className: g.stepBodySkuSelect,
              children: [
                  (0, r.jsxs)('div', {
                      className: g.bodyColumnLeft,
                      children: [
                          (0, r.jsx)('div', {
                              className: g.header,
                              children: Z
                          }),
                          P
                      ]
                  }),
                  (0, r.jsx)(a.olH, {
                      onClick: n,
                      className: g.closeButton
                  }),
                  (0, r.jsx)('div', {
                      className: g.bodyColumnRight,
                      children: v
                  }),
                  O
              ]
          });
}
