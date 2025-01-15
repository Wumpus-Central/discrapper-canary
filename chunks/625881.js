n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(544891),
    o = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(63063),
    m = n(74538),
    g = n(937615),
    h = n(230916),
    p = n(798769),
    x = n(474936),
    f = n(981631),
    _ = n(388032),
    E = n(546146),
    C = n(982404),
    T = n(299156);
t.Z = function (e) {
    let { premiumSubscription: t, premiumType: n, onClose: r, onConfirm: S, userDiscountOffer: b } = e,
        [I, N] = s.useState(!1),
        [v, A] = s.useState(!1),
        j = async (e) => {
            try {
                A(!0),
                    N(!1),
                    await l.tn.post({
                        url: f.ANM.USER_OFFER_REDEEM,
                        body: { user_discount_offer_id: e },
                        rejectWithError: !0
                    }),
                    S();
            } catch (e) {
                N(!0);
            }
            A(!1);
        },
        R = (0, d.ZP)(),
        O = (0, o.wj)(R) ? C : T,
        P = (0, h._)(t, x.Xh.PREMIUM_MONTH_TIER_2, b),
        y = (0, m.aS)(x.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        D = (0, g.T4)(y.amount, y.currency);
    return null == b
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(p.Z, {
                      premiumType: n,
                      onClose: r
                  }),
                  (0, i.jsx)(c.ModalContent, {
                      className: E.body,
                      children: (0, i.jsxs)('div', {
                          className: E.confirmDiscountContent,
                          children: [
                              (0, i.jsx)(c.Heading, {
                                  variant: 'heading-xl/bold',
                                  children: _.intl.format(_.t.q9Vxu7, { percent: b.discount.amount })
                              }),
                              (0, i.jsxs)('div', {
                                  className: E.confirmDiscountDescription,
                                  children: [
                                      (0, i.jsx)('img', {
                                          alt: '',
                                          src: O,
                                          className: E.confirmDiscountIcon
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'text-sm/medium',
                                          children: _.intl.format(_.t.Eq1RHB, {
                                              percent: b.discount.amount,
                                              numMonths: b.discount.user_usage_limit,
                                              price: D
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)('div', {
                                  className: E.confirmDiscountLegalese,
                                  children: (0, i.jsx)(c.Text, {
                                      variant: 'text-xs/semibold',
                                      className: E.confirmDiscountLegaleseText,
                                      children: _.intl.format(_.t.hrGTjI, {
                                          discountedPrice: P,
                                          billingPeriod: (0, m.JP)(b.discount.user_usage_limit_interval),
                                          numMonths: b.discount.user_usage_limit,
                                          fullPrice: D,
                                          helpdeskArticle: u.Z.getArticleURL(f.BhN.PAID_TERMS)
                                      })
                                  })
                              }),
                              I &&
                                  (0, i.jsx)('div', {
                                      className: E.redemptionFailedMessage,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: 'text-xs/semibold',
                                          className: E.redemptionFailedMessageCopy,
                                          children: _.intl.string(_.t.AD6odn)
                                      })
                                  }),
                              (0, i.jsxs)('div', {
                                  className: a()(E.confirmDiscountButtons, {
                                      [E.confrimDiscountsButtonsError]: I,
                                      [E.confrimDiscountsButtonsNoError]: !I
                                  }),
                                  children: [
                                      (0, i.jsx)(c.Button, {
                                          look: c.ButtonLooks.LINK,
                                          onClick: () => r(),
                                          children: _.intl.string(_.t.zl7LZm)
                                      }),
                                      (0, i.jsx)(c.Button, {
                                          size: c.ButtonSizes.SMALL,
                                          submitting: v,
                                          onClick: () => j(b.id),
                                          children: _.intl.string(_.t.CKSuZG)
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
};
