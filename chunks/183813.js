n.d(t, {
    S: function () {
        return g;
    }
});
var i = n(200651),
    l = n(192379),
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
    S = n(732721);
function g(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedPlan: s, selectedSkuId: g, step: E } = (0, _.usePaymentContext)(),
        { setSelectedGiftingPromotionReward: I, selectedGiftingPromotionReward: M, claimableRewards: v } = (0, h.wD)(),
        y = (0, a.e7)([p.default], () => p.default.getCurrentUser());
    l.useEffect(() => {
        let e = null != v && v.length > 0;
        null == M && e && I(v[0]);
    }, [v, M, I]);
    let T = (e) => {
            let t = e.skuId;
            return (0, i.jsx)(
                d.Z,
                {
                    skuId: t,
                    price: L.intl.string(L.t.QQsaCQ),
                    isSelected: t === (null == M ? void 0 : M.skuId),
                    onSelect: () => I(e),
                    className: S.giftSelectItem
                },
                t
            );
        },
        N = (0, u.Q3)('PremiumPaymentFreeSKUSelectStep');
    r()(null != s, 'Expected plan to selected'), r()(null != g, 'Expected selectedSkuId'), r()(null != E, 'Step should be set');
    let P = null == v ? void 0 : v.map((e) => T(e)),
        Z =
            null != M && null != y
                ? (0, i.jsx)(C.Z, {
                      avatarDecorationOverride: { asset: M.assetId },
                      user: y,
                      guildId: null,
                      avatarSize: o.AvatarSizes.SIZE_152
                  })
                : null,
        A = (0, i.jsx)(j.O3, {
            children: (0, i.jsx)(o.ModalFooter, {
                className: S.modalFooter,
                children: (0, i.jsx)(c.y, {
                    onStepChange: (e) => {
                        null != y &&
                            null != M &&
                            x.default.track(m.rMx.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: y.id,
                                reward_sku_id: M.skuId
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
        U = (0, i.jsx)(o.Heading, {
            variant: 'heading-lg/bold',
            color: 'header-primary',
            children: L.intl.string(L.t['Rp0+ZG'])
        });
    return N
        ? (0, i.jsxs)('div', {
              className: S.container,
              children: [
                  (0, i.jsx)(o.ModalHeader, {
                      children: (0, i.jsxs)(o.Stack, {
                          direction: 'horizontal',
                          justify: 'space-between',
                          align: 'center',
                          children: [U, (0, i.jsx)(o.ModalCloseButton, { onClick: n })]
                      })
                  }),
                  (0, i.jsx)(o.ModalContent, {
                      children: (0, i.jsxs)(o.Stack, {
                          gap: 24,
                          align: 'center',
                          padding: { top: 24 },
                          children: [
                              Z,
                              (0, i.jsx)(o.Stack, {
                                  gap: 8,
                                  padding: { top: 12 },
                                  children: P
                              })
                          ]
                      })
                  }),
                  A
              ]
          })
        : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsxs)('div', {
                  className: S.stepBodySkuSelect,
                  children: [
                      (0, i.jsxs)('div', {
                          className: S.bodyColumnLeft,
                          children: [
                              (0, i.jsx)('div', {
                                  className: S.header,
                                  children: U
                              }),
                              P
                          ]
                      }),
                      (0, i.jsx)(o.ModalCloseButton, {
                          onClick: n,
                          className: S.closeButton
                      }),
                      (0, i.jsx)('div', {
                          className: S.bodyColumnRight,
                          children: Z
                      }),
                      A
                  ]
              })
          });
}
