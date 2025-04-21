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
    h = n(563132),
    f = n(409813),
    j = n(614277),
    m = n(981631),
    L = n(388032),
    g = n(529190);
function S(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedPlan: l, selectedSkuId: S, step: E } = (0, h.JL)(),
        { setSelectedGiftingPromotionReward: y, selectedGiftingPromotionReward: I, claimableRewards: b } = (0, x.wD)(),
        T = (0, o.e7)([p.default], () => p.default.getCurrentUser());
    i.useEffect(() => {
        let e = null != b && b.length > 0;
        null == I && e && y(b[0]);
    }, [b, I, y]);
    let P = (e) => {
            let t = e.skuId;
            return (0, r.jsx)(
                d.Z,
                {
                    skuId: t,
                    price: L.intl.string(L.t.QQsaCQ),
                    isSelected: t === (null == I ? void 0 : I.skuId),
                    onSelect: () => y(e),
                    className: g.giftSelectItem
                },
                t
            );
        },
        M = (0, c.Q3)('PremiumPaymentFreeSKUSelectStep');
    s()(null != l, 'Expected plan to selected'), s()(null != S, 'Expected selectedSkuId'), s()(null != E, 'Step should be set');
    let O = null == b ? void 0 : b.map((e) => P(e)),
        Z =
            null != I && null != T
                ? (0, r.jsx)(C.Z, {
                      avatarDecorationOverride: { asset: I.assetId },
                      user: T,
                      guildId: null,
                      avatarSize: a.EFr.SIZE_152
                  })
                : null,
        v = (0, r.jsx)(j.O3, {
            children: (0, r.jsx)(a.mzw, {
                className: g.modalFooter,
                children: (0, r.jsx)(u.y, {
                    onStepChange: (e) => {
                        null != T &&
                            null != I &&
                            _.default.track(m.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: T.id,
                                reward_sku_id: I.skuId
                            }),
                            t(e);
                    },
                    onBackClick: () => t(f.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [l.id],
                    selectedPlanId: l.id
                })
            })
        }),
        N = (0, r.jsx)(a.X6q, {
            variant: 'heading-lg/bold',
            color: 'header-primary',
            children: L.intl.string(L.t['Rp0+ZG'])
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
                          children: [N, (0, r.jsx)(a.olH, { onClick: n })]
                      })
                  }),
                  (0, r.jsx)(a.hzk, {
                      children: (0, r.jsxs)(a.Kqy, {
                          gap: 24,
                          align: 'center',
                          padding: { top: 24 },
                          children: [
                              Z,
                              (0, r.jsx)(a.Kqy, {
                                  gap: 8,
                                  padding: { top: 12 },
                                  children: O
                              })
                          ]
                      })
                  }),
                  v
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
                              children: N
                          }),
                          O
                      ]
                  }),
                  (0, r.jsx)(a.olH, {
                      onClick: n,
                      className: g.closeButton
                  }),
                  (0, r.jsx)('div', {
                      className: g.bodyColumnRight,
                      children: Z
                  }),
                  v
              ]
          });
}
