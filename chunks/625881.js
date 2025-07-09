(n.d(t, { Z: () => O }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(544891),
    o = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(63063),
    m = n(74538),
    p = n(937615),
    g = n(230916),
    h = n(798769),
    f = n(474936),
    b = n(981631),
    x = n(388032),
    _ = n(828576),
    j = n(982404),
    E = n(299156);
let O = function (e) {
    let { premiumSubscription: t, premiumType: n, onClose: s, onConfirm: O, userDiscountOffer: C } = e,
        [v, S] = r.useState(!1),
        [T, N] = r.useState(!1),
        I = async (e) => {
            try {
                (N(!0),
                    S(!1),
                    await l.tn.post({
                        url: b.ANM.USER_OFFER_REDEEM,
                        body: { user_discount_offer_id: e },
                        rejectWithError: !0
                    }),
                    O());
            } catch (e) {
                S(!0);
            }
            N(!1);
        },
        y = (0, d.ZP)(),
        A = (0, o.wj)(y) ? j : E,
        P = (0, g._)(t, f.Xh.PREMIUM_MONTH_TIER_2, C),
        R = (0, m.aS)(f.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        D = (0, p.T4)(R.amount, R.currency);
    return null == C
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(h.Z, {
                      premiumType: n,
                      onClose: s
                  }),
                  (0, i.jsx)(c.hzk, {
                      className: _.body,
                      children: (0, i.jsxs)('div', {
                          className: _.confirmDiscountContent,
                          children: [
                              (0, i.jsx)(c.X6q, {
                                  variant: 'heading-xl/bold',
                                  children: x.intl.format(x.t.q9Vxu7, { percent: C.discount.amount })
                              }),
                              (0, i.jsxs)('div', {
                                  className: _.confirmDiscountDescription,
                                  children: [
                                      (0, i.jsx)('img', {
                                          alt: '',
                                          src: A,
                                          className: _.confirmDiscountIcon
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'text-sm/medium',
                                          children: x.intl.format(x.t.Eq1RHB, {
                                              percent: C.discount.amount,
                                              numMonths: C.discount.user_usage_limit,
                                              price: D
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)('div', {
                                  className: _.confirmDiscountLegalese,
                                  children: (0, i.jsx)(c.Text, {
                                      variant: 'text-xs/semibold',
                                      className: _.confirmDiscountLegaleseText,
                                      children: x.intl.format(x.t.hrGTjI, {
                                          discountedPrice: P,
                                          billingPeriod: (0, m.JP)(C.discount.user_usage_limit_interval),
                                          numMonths: C.discount.user_usage_limit,
                                          fullPrice: D,
                                          helpdeskArticle: u.Z.getArticleURL(b.BhN.PAID_TERMS)
                                      })
                                  })
                              }),
                              v &&
                                  (0, i.jsx)('div', {
                                      className: _.redemptionFailedMessage,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: 'text-xs/semibold',
                                          className: _.redemptionFailedMessageCopy,
                                          children: x.intl.string(x.t.AD6odn)
                                      })
                                  }),
                              (0, i.jsxs)('div', {
                                  className: a()(_.confirmDiscountButtons, {
                                      [_.confrimDiscountsButtonsError]: v,
                                      [_.confrimDiscountsButtonsNoError]: !v
                                  }),
                                  children: [
                                      (0, i.jsx)(c.Avr, {
                                          variant: 'primary',
                                          text: x.intl.string(x.t.zl7LZm),
                                          onClick: () => s()
                                      }),
                                      (0, i.jsx)(c.zxk, {
                                          variant: 'primary',
                                          size: 'sm',
                                          text: x.intl.string(x.t.CKSuZG),
                                          loading: T,
                                          onClick: () => I(C.id)
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
};
