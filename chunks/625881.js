n.d(t, { Z: () => j }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(544891),
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
    N = n(388032),
    x = n(828576),
    _ = n(982404),
    E = n(299156);
let j = function (e) {
    let { premiumSubscription: t, premiumType: n, onClose: s, onConfirm: j, userDiscountOffer: O } = e,
        [C, S] = i.useState(!1),
        [v, T] = i.useState(!1),
        I = async (e) => {
            try {
                T(!0),
                    S(!1),
                    await l.tn.post({
                        url: b.ANM.USER_OFFER_REDEEM,
                        body: { user_discount_offer_id: e },
                        rejectWithError: !0
                    }),
                    j();
            } catch (e) {
                S(!0);
            }
            T(!1);
        },
        y = (0, d.ZP)(),
        A = (0, o.wj)(y) ? _ : E,
        P = (0, p._)(t, f.Xh.PREMIUM_MONTH_TIER_2, O),
        R = (0, m.aS)(f.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        D = (0, g.T4)(R.amount, R.currency);
    return null == O
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(h.Z, {
                      premiumType: n,
                      onClose: s
                  }),
                  (0, r.jsx)(c.hzk, {
                      className: x.body,
                      children: (0, r.jsxs)('div', {
                          className: x.confirmDiscountContent,
                          children: [
                              (0, r.jsx)(c.X6q, {
                                  variant: 'heading-xl/bold',
                                  children: N.NW.format(N.t.q9Vxu7, { percent: O.discount.amount })
                              }),
                              (0, r.jsxs)('div', {
                                  className: x.confirmDiscountDescription,
                                  children: [
                                      (0, r.jsx)('img', {
                                          alt: '',
                                          src: A,
                                          className: x.confirmDiscountIcon
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: 'text-sm/medium',
                                          children: N.NW.format(N.t.Eq1RHB, {
                                              percent: O.discount.amount,
                                              numMonths: O.discount.user_usage_limit,
                                              price: D
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: x.confirmDiscountLegalese,
                                  children: (0, r.jsx)(c.Text, {
                                      variant: 'text-xs/semibold',
                                      className: x.confirmDiscountLegaleseText,
                                      children: N.NW.format(N.t.hrGTjI, {
                                          discountedPrice: P,
                                          billingPeriod: (0, m.JP)(O.discount.user_usage_limit_interval),
                                          numMonths: O.discount.user_usage_limit,
                                          fullPrice: D,
                                          helpdeskArticle: u.Z.getArticleURL(b.BhN.PAID_TERMS)
                                      })
                                  })
                              }),
                              C &&
                                  (0, r.jsx)('div', {
                                      className: x.redemptionFailedMessage,
                                      children: (0, r.jsx)(c.Text, {
                                          variant: 'text-xs/semibold',
                                          className: x.redemptionFailedMessageCopy,
                                          children: N.NW.string(N.t.AD6odn)
                                      })
                                  }),
                              (0, r.jsxs)('div', {
                                  className: a()(x.confirmDiscountButtons, {
                                      [x.confrimDiscountsButtonsError]: C,
                                      [x.confrimDiscountsButtonsNoError]: !C
                                  }),
                                  children: [
                                      (0, r.jsx)(c.zxk, {
                                          look: c.iLD.LINK,
                                          onClick: () => s(),
                                          children: N.NW.string(N.t.zl7LZm)
                                      }),
                                      (0, r.jsx)(c.zxk, {
                                          size: c.PhG.SMALL,
                                          submitting: v,
                                          onClick: () => I(O.id),
                                          children: N.NW.string(N.t.CKSuZG)
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
};
