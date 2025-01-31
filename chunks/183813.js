n.d(t, { S: () => g });
var l = n(200651),
    i = n(192379),
    s = n(512722),
    r = n.n(s),
    a = n(442837),
    o = n(481060),
    C = n(204418),
    d = n(628952),
    u = n(540059),
    c = n(314404),
    p = n(594174),
    x = n(626135),
    h = n(987209),
    _ = n(563132),
    f = n(409813),
    j = n(614277),
    m = n(981631),
    L = n(388032),
    E = n(732721);
function g(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedPlan: s, selectedSkuId: g, step: S } = (0, _.JL)(),
        { setSelectedGiftingPromotionReward: I, selectedGiftingPromotionReward: N, claimableRewards: T } = (0, h.wD)(),
        M = (0, a.e7)([p.default], () => p.default.getCurrentUser());
    i.useEffect(() => {
        let e = null != T && T.length > 0;
        null == N && e && I(T[0]);
    }, [T, N, I]);
    let v = (e) => {
            let t = e.skuId;
            return (0, l.jsx)(
                d.Z,
                {
                    skuId: t,
                    price: L.intl.string(L.t.QQsaCQ),
                    isSelected: t === (null == N ? void 0 : N.skuId),
                    onSelect: () => I(e),
                    className: E.giftSelectItem
                },
                t
            );
        },
        y = (0, u.Q3)('PremiumPaymentFreeSKUSelectStep');
    r()(null != s, 'Expected plan to selected'), r()(null != g, 'Expected selectedSkuId'), r()(null != S, 'Step should be set');
    let Z = null == T ? void 0 : T.map((e) => v(e)),
        P =
            null != N && null != M
                ? (0, l.jsx)(C.Z, {
                      avatarDecorationOverride: { asset: N.assetId },
                      user: M,
                      guildId: null,
                      avatarSize: o.EFr.SIZE_152
                  })
                : null,
        k = (0, l.jsx)(j.O3, {
            children: (0, l.jsx)(o.mzw, {
                className: E.modalFooter,
                children: (0, l.jsx)(c.y, {
                    onStepChange: (e) => {
                        null != M &&
                            null != N &&
                            x.default.track(m.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: M.id,
                                reward_sku_id: N.skuId
                            }),
                            t(e);
                    },
                    onBackClick: () => t(f.h8.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [s.id],
                    selectedPlanId: s.id
                })
            })
        }),
        U = (0, l.jsx)(o.X6q, {
            variant: 'heading-lg/bold',
            color: 'header-primary',
            children: L.intl.string(L.t['Rp0+ZG'])
        });
    return y
        ? (0, l.jsxs)('div', {
              className: E.container,
              children: [
                  (0, l.jsx)(o.xBx, {
                      children: (0, l.jsxs)(o.Kqy, {
                          direction: 'horizontal',
                          justify: 'space-between',
                          align: 'center',
                          children: [U, (0, l.jsx)(o.olH, { onClick: n })]
                      })
                  }),
                  (0, l.jsx)(o.hzk, {
                      children: (0, l.jsxs)(o.Kqy, {
                          gap: 24,
                          align: 'center',
                          padding: { top: 24 },
                          children: [
                              P,
                              (0, l.jsx)(o.Kqy, {
                                  gap: 8,
                                  padding: { top: 12 },
                                  children: Z
                              })
                          ]
                      })
                  }),
                  k
              ]
          })
        : (0, l.jsx)(l.Fragment, {
              children: (0, l.jsxs)('div', {
                  className: E.stepBodySkuSelect,
                  children: [
                      (0, l.jsxs)('div', {
                          className: E.bodyColumnLeft,
                          children: [
                              (0, l.jsx)('div', {
                                  className: E.header,
                                  children: U
                              }),
                              Z
                          ]
                      }),
                      (0, l.jsx)(o.olH, {
                          onClick: n,
                          className: E.closeButton
                      }),
                      (0, l.jsx)('div', {
                          className: E.bodyColumnRight,
                          children: P
                      }),
                      k
                  ]
              })
          });
}
