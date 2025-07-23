(n.d(t, { Z: () => j }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(544891),
    l = n(780384),
    c = n(481060),
    u = n(410030),
    d = n(63063),
    m = n(74538),
    _ = n(937615),
    p = n(230916),
    f = n(798769),
    C = n(474936),
    h = n(981631),
    x = n(388032),
    y = n(828576),
    b = n(982404),
    g = n(299156);
let j = function (e) {
    let { premiumSubscription: t, premiumType: n, onClose: o, onConfirm: j, userDiscountOffer: v } = e,
        [I, T] = i.useState(!1),
        [E, P] = i.useState(!1),
        O = async (e) => {
            try {
                (P(!0),
                    T(!1),
                    await s.tn.post({
                        url: h.ANM.USER_OFFER_REDEEM,
                        body: { user_discount_offer_id: e },
                        rejectWithError: !0
                    }),
                    j());
            } catch (e) {
                T(!0);
            }
            P(!1);
        },
        S = (0, u.ZP)(),
        N = (0, l.wj)(S) ? b : g,
        R = (0, p._)(t, C.Xh.PREMIUM_MONTH_TIER_2, v),
        D = (0, m.aS)(C.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        w = (0, _.T4)(D.amount, D.currency);
    return null == v
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(f.Z, {
                      premiumType: n,
                      onClose: o
                  }),
                  (0, r.jsx)(c.hzk, {
                      className: y.body,
                      children: (0, r.jsxs)('div', {
                          className: y.confirmDiscountContent,
                          children: [
                              (0, r.jsx)(c.X6q, {
                                  variant: 'heading-xl/bold',
                                  children: x.intl.format(x.t.q9Vxu7, { percent: v.discount.amount })
                              }),
                              (0, r.jsxs)('div', {
                                  className: y.confirmDiscountDescription,
                                  children: [
                                      (0, r.jsx)('img', {
                                          alt: '',
                                          src: N,
                                          className: y.confirmDiscountIcon
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: 'text-sm/medium',
                                          children: x.intl.format(x.t.Eq1RHB, {
                                              percent: v.discount.amount,
                                              numMonths: v.discount.user_usage_limit,
                                              price: w
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: y.confirmDiscountLegalese,
                                  children: (0, r.jsx)(c.Text, {
                                      variant: 'text-xs/semibold',
                                      className: y.confirmDiscountLegaleseText,
                                      children: x.intl.format(x.t.hrGTjI, {
                                          discountedPrice: R,
                                          billingPeriod: (0, m.JP)(v.discount.user_usage_limit_interval),
                                          numMonths: v.discount.user_usage_limit,
                                          fullPrice: w,
                                          helpdeskArticle: d.Z.getArticleURL(h.BhN.PAID_TERMS)
                                      })
                                  })
                              }),
                              I &&
                                  (0, r.jsx)('div', {
                                      className: y.redemptionFailedMessage,
                                      children: (0, r.jsx)(c.Text, {
                                          variant: 'text-xs/semibold',
                                          className: y.redemptionFailedMessageCopy,
                                          children: x.intl.string(x.t.AD6odn)
                                      })
                                  }),
                              (0, r.jsxs)('div', {
                                  className: a()(y.confirmDiscountButtons, {
                                      [y.confrimDiscountsButtonsError]: I,
                                      [y.confrimDiscountsButtonsNoError]: !I
                                  }),
                                  children: [
                                      (0, r.jsx)(c.Avr, {
                                          variant: 'primary',
                                          text: x.intl.string(x.t.zl7LZm),
                                          onClick: () => o()
                                      }),
                                      (0, r.jsx)(c.zxk, {
                                          variant: 'primary',
                                          size: 'sm',
                                          text: x.intl.string(x.t.CKSuZG),
                                          loading: E,
                                          onClick: () => O(v.id)
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
};
