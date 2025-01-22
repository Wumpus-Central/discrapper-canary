n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
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
    E = n(388032),
    _ = n(546146),
    C = n(982404),
    T = n(299156);
t.Z = function (e) {
    let { premiumSubscription: t, premiumType: n, onClose: s, onConfirm: S, userDiscountOffer: b } = e,
        [I, N] = r.useState(!1),
        [v, A] = r.useState(!1),
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
        O = (0, d.ZP)(),
        R = (0, o.wj)(O) ? C : T,
        P = (0, h._)(t, x.Xh.PREMIUM_MONTH_TIER_2, b),
        D = (0, m.aS)(x.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        y = (0, g.T4)(D.amount, D.currency);
    return null == b
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(p.Z, {
                      premiumType: n,
                      onClose: s
                  }),
                  (0, i.jsx)(c.ModalContent, {
                      className: _.body,
                      children: (0, i.jsxs)('div', {
                          className: _.confirmDiscountContent,
                          children: [
                              (0, i.jsx)(c.Heading, {
                                  variant: 'heading-xl/bold',
                                  children: E.intl.format(E.t.q9Vxu7, { percent: b.discount.amount })
                              }),
                              (0, i.jsxs)('div', {
                                  className: _.confirmDiscountDescription,
                                  children: [
                                      (0, i.jsx)('img', {
                                          alt: '',
                                          src: R,
                                          className: _.confirmDiscountIcon
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'text-sm/medium',
                                          children: E.intl.format(E.t.Eq1RHB, {
                                              percent: b.discount.amount,
                                              numMonths: b.discount.user_usage_limit,
                                              price: y
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)('div', {
                                  className: _.confirmDiscountLegalese,
                                  children: (0, i.jsx)(c.Text, {
                                      variant: 'text-xs/semibold',
                                      className: _.confirmDiscountLegaleseText,
                                      children: E.intl.format(E.t.hrGTjI, {
                                          discountedPrice: P,
                                          billingPeriod: (0, m.JP)(b.discount.user_usage_limit_interval),
                                          numMonths: b.discount.user_usage_limit,
                                          fullPrice: y,
                                          helpdeskArticle: u.Z.getArticleURL(f.BhN.PAID_TERMS)
                                      })
                                  })
                              }),
                              I &&
                                  (0, i.jsx)('div', {
                                      className: _.redemptionFailedMessage,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: 'text-xs/semibold',
                                          className: _.redemptionFailedMessageCopy,
                                          children: E.intl.string(E.t.AD6odn)
                                      })
                                  }),
                              (0, i.jsxs)('div', {
                                  className: a()(_.confirmDiscountButtons, {
                                      [_.confrimDiscountsButtonsError]: I,
                                      [_.confrimDiscountsButtonsNoError]: !I
                                  }),
                                  children: [
                                      (0, i.jsx)(c.Button, {
                                          look: c.ButtonLooks.LINK,
                                          onClick: () => s(),
                                          children: E.intl.string(E.t.zl7LZm)
                                      }),
                                      (0, i.jsx)(c.Button, {
                                          size: c.ButtonSizes.SMALL,
                                          submitting: v,
                                          onClick: () => j(b.id),
                                          children: E.intl.string(E.t.CKSuZG)
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
};
