n.d(t, { S: () => E });
var l = n(255367),
    i = n(73800),
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
    _ = n(614277),
    L = n(981631),
    m = n(388032),
    g = n(529190);
function E(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedPlan: s, selectedSkuId: E, step: y } = (0, f.JL)(),
        { setSelectedGiftingPromotionReward: S, selectedGiftingPromotionReward: I, claimableRewards: M } = (0, h.wD)(),
        P = (0, a.e7)([p.default], () => p.default.getCurrentUser());
    i.useEffect(() => {
        let e = null != M && M.length > 0;
        null == I && e && S(M[0]);
    }, [M, I, S]);
    let O = (e) => {
            let t = e.skuId;
            return (0, l.jsx)(
                d.Z,
                {
                    skuId: t,
                    price: m.intl.string(m.t.QQsaCQ),
                    isSelected: t === (null == I ? void 0 : I.skuId),
                    onSelect: () => S(e),
                    className: g.giftSelectItem
                },
                t
            );
        },
        Z = (0, c.Q3)('PremiumPaymentFreeSKUSelectStep');
    r()(null != s, 'Expected plan to selected'), r()(null != E, 'Expected selectedSkuId'), r()(null != y, 'Step should be set');
    let T = null == M ? void 0 : M.map((e) => O(e)),
        v =
            null != I && null != P
                ? (0, l.jsx)(C.Z, {
                      avatarDecorationOverride: { asset: I.assetId },
                      user: P,
                      guildId: null,
                      avatarSize: o.EFr.SIZE_152
                  })
                : null,
        b = (0, l.jsx)(_.O3, {
            children: (0, l.jsx)(o.mzw, {
                className: g.modalFooter,
                children: (0, l.jsx)(u.y, {
                    onStepChange: (e) => {
                        null != P &&
                            null != I &&
                            x.default.track(L.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: P.id,
                                reward_sku_id: I.skuId
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
        N = (0, l.jsx)(o.X6q, {
            variant: 'heading-lg/bold',
            color: 'header-primary',
            children: m.intl.string(m.t['Rp0+ZG'])
        });
    return Z
        ? (0, l.jsxs)('div', {
              className: g.container,
              children: [
                  (0, l.jsx)(o.xBx, {
                      children: (0, l.jsxs)(o.Kqy, {
                          direction: 'horizontal',
                          justify: 'space-between',
                          align: 'center',
                          children: [N, (0, l.jsx)(o.olH, { onClick: n })]
                      })
                  }),
                  (0, l.jsx)(o.hzk, {
                      children: (0, l.jsxs)(o.Kqy, {
                          gap: 24,
                          align: 'center',
                          padding: { top: 24 },
                          children: [
                              v,
                              (0, l.jsx)(o.Kqy, {
                                  gap: 8,
                                  padding: { top: 12 },
                                  children: T
                              })
                          ]
                      })
                  }),
                  b
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
                              children: N
                          }),
                          T
                      ]
                  }),
                  (0, l.jsx)(o.olH, {
                      onClick: n,
                      className: g.closeButton
                  }),
                  (0, l.jsx)('div', {
                      className: g.bodyColumnRight,
                      children: v
                  }),
                  b
              ]
          });
}
