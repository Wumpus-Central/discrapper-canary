n.d(t, { Z: () => O }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(544891),
    o = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(63063),
    m = n(74538),
    g = n(937615),
    p = n(230916),
    h = n(798769),
    f = n(474936),
    b = n(981631),
    _ = n(388032),
    x = n(192752),
    E = n(982404),
    C = n(299156);
let O = function (e) {
    let { premiumSubscription: t, premiumType: n, onClose: s, onConfirm: O, userDiscountOffer: j } = e,
        [S, v] = r.useState(!1),
        [T, N] = r.useState(!1),
        I = async (e) => {
            try {
                N(!0),
                    v(!1),
                    await a.tn.post({
                        url: b.ANM.USER_OFFER_REDEEM,
                        body: { user_discount_offer_id: e },
                        rejectWithError: !0
                    }),
                    O();
            } catch (e) {
                v(!0);
            }
            N(!1);
        },
        y = (0, d.ZP)(),
        A = (0, o.wj)(y) ? E : C,
        P = (0, p._)(t, f.Xh.PREMIUM_MONTH_TIER_2, j),
        R = (0, m.aS)(f.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        D = (0, g.T4)(R.amount, R.currency);
    return null == j
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(h.Z, {
                      premiumType: n,
                      onClose: s
                  }),
                  (0, i.jsx)(c.hzk, {
                      className: x.body,
                      children: (0, i.jsxs)('div', {
                          className: x.confirmDiscountContent,
                          children: [
                              (0, i.jsx)(c.X6q, {
                                  variant: 'heading-xl/bold',
                                  children: _.intl.format(_.t.q9Vxu7, { percent: j.discount.amount })
                              }),
                              (0, i.jsxs)('div', {
                                  className: x.confirmDiscountDescription,
                                  children: [
                                      (0, i.jsx)('img', {
                                          alt: '',
                                          src: A,
                                          className: x.confirmDiscountIcon
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'text-sm/medium',
                                          children: _.intl.format(_.t.Eq1RHB, {
                                              percent: j.discount.amount,
                                              numMonths: j.discount.user_usage_limit,
                                              price: D
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)('div', {
                                  className: x.confirmDiscountLegalese,
                                  children: (0, i.jsx)(c.Text, {
                                      variant: 'text-xs/semibold',
                                      className: x.confirmDiscountLegaleseText,
                                      children: _.intl.format(_.t.hrGTjI, {
                                          discountedPrice: P,
                                          billingPeriod: (0, m.JP)(j.discount.user_usage_limit_interval),
                                          numMonths: j.discount.user_usage_limit,
                                          fullPrice: D,
                                          helpdeskArticle: u.Z.getArticleURL(b.BhN.PAID_TERMS)
                                      })
                                  })
                              }),
                              S &&
                                  (0, i.jsx)('div', {
                                      className: x.redemptionFailedMessage,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: 'text-xs/semibold',
                                          className: x.redemptionFailedMessageCopy,
                                          children: _.intl.string(_.t.AD6odn)
                                      })
                                  }),
                              (0, i.jsxs)('div', {
                                  className: l()(x.confirmDiscountButtons, {
                                      [x.confrimDiscountsButtonsError]: S,
                                      [x.confrimDiscountsButtonsNoError]: !S
                                  }),
                                  children: [
                                      (0, i.jsx)(c.zxk, {
                                          look: c.iLD.LINK,
                                          onClick: () => s(),
                                          children: _.intl.string(_.t.zl7LZm)
                                      }),
                                      (0, i.jsx)(c.zxk, {
                                          size: c.PhG.SMALL,
                                          submitting: T,
                                          onClick: () => I(j.id),
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
