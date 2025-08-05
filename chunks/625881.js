(n.d(t, { Z: () => E }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    s = n.n(a),
    o = n(544891),
    l = n(780384),
    c = n(481060),
    u = n(410030),
    d = n(63063),
    m = n(74538),
    p = n(937615),
    _ = n(230916),
    f = n(798769),
    b = n(474936),
    x = n(981631),
    y = n(388032),
    h = n(828576),
    C = n(982404),
    j = n(299156);
let E = function (e) {
    let { premiumSubscription: t, premiumType: n, onClose: a, onConfirm: E, userDiscountOffer: O } = e,
        [P, g] = i.useState(!1),
        [v, N] = i.useState(!1),
        I = async (e) => {
            try {
                (N(!0),
                    g(!1),
                    await o.tn.post({
                        url: x.ANM.USER_OFFER_REDEEM,
                        body: { user_discount_offer_id: e },
                        rejectWithError: !0
                    }),
                    E());
            } catch (e) {
                g(!0);
            }
            N(!1);
        },
        T = (0, u.ZP)(),
        S = (0, l.wj)(T) ? C : j,
        R = (0, _._)(t, b.Xh.PREMIUM_MONTH_TIER_2, O),
        w = (0, m.aS)(b.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        D = (0, p.T4)(w.amount, w.currency);
    return null == O
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(f.Z, {
                      premiumType: n,
                      onClose: a
                  }),
                  (0, r.jsx)(c.hzk, {
                      className: h.body,
                      children: (0, r.jsxs)('div', {
                          className: h.confirmDiscountContent,
                          children: [
                              (0, r.jsx)(c.X6q, {
                                  variant: 'heading-xl/bold',
                                  children: y.intl.format(y.t.q9Vxu7, { percent: O.discount.amount })
                              }),
                              (0, r.jsxs)('div', {
                                  className: h.confirmDiscountDescription,
                                  children: [
                                      (0, r.jsx)('img', {
                                          alt: '',
                                          src: S,
                                          className: h.confirmDiscountIcon
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: 'text-sm/medium',
                                          children: y.intl.format(y.t.Eq1RHB, {
                                              percent: O.discount.amount,
                                              numMonths: O.discount.user_usage_limit,
                                              price: D
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: h.confirmDiscountLegalese,
                                  children: (0, r.jsx)(c.Text, {
                                      variant: 'text-xs/semibold',
                                      className: h.confirmDiscountLegaleseText,
                                      children: y.intl.format(y.t.hrGTjI, {
                                          discountedPrice: R,
                                          billingPeriod: (0, m.JP)(O.discount.user_usage_limit_interval),
                                          numMonths: O.discount.user_usage_limit,
                                          fullPrice: D,
                                          helpdeskArticle: d.Z.getArticleURL(x.BhN.PAID_TERMS)
                                      })
                                  })
                              }),
                              P &&
                                  (0, r.jsx)('div', {
                                      className: h.redemptionFailedMessage,
                                      children: (0, r.jsx)(c.Text, {
                                          variant: 'text-xs/semibold',
                                          className: h.redemptionFailedMessageCopy,
                                          children: y.intl.string(y.t.AD6odn)
                                      })
                                  }),
                              (0, r.jsxs)('div', {
                                  className: s()(h.confirmDiscountButtons, {
                                      [h.confrimDiscountsButtonsError]: P,
                                      [h.confrimDiscountsButtonsNoError]: !P
                                  }),
                                  children: [
                                      (0, r.jsx)(c.Avr, {
                                          variant: 'primary',
                                          text: y.intl.string(y.t.zl7LZm),
                                          onClick: () => a()
                                      }),
                                      (0, r.jsx)(c.zxk, {
                                          variant: 'primary',
                                          size: 'sm',
                                          text: y.intl.string(y.t.CKSuZG),
                                          loading: v,
                                          onClick: () => I(O.id)
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
};
