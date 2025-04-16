n.d(t, { Z: () => j }), n(388685);
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
    _ = n(981631),
    b = n(388032),
    N = n(828576),
    x = n(982404),
    E = n(299156);
let j = function (e) {
    let { premiumSubscription: t, premiumType: n, onClose: s, onConfirm: j, userDiscountOffer: C } = e,
        [O, S] = i.useState(!1),
        [v, T] = i.useState(!1),
        I = async (e) => {
            try {
                T(!0),
                    S(!1),
                    await l.tn.post({
                        url: _.ANM.USER_OFFER_REDEEM,
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
        A = (0, o.wj)(y) ? x : E,
        P = (0, p._)(t, f.Xh.PREMIUM_MONTH_TIER_2, C),
        R = (0, m.aS)(f.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        D = (0, g.T4)(R.amount, R.currency);
    return null == C
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(h.Z, {
                      premiumType: n,
                      onClose: s
                  }),
                  (0, r.jsx)(c.hzk, {
                      className: N.body,
                      children: (0, r.jsxs)('div', {
                          className: N.confirmDiscountContent,
                          children: [
                              (0, r.jsx)(c.X6q, {
                                  variant: 'heading-xl/bold',
                                  children: b.NW.format(b.t.q9Vxu7, { percent: C.discount.amount })
                              }),
                              (0, r.jsxs)('div', {
                                  className: N.confirmDiscountDescription,
                                  children: [
                                      (0, r.jsx)('img', {
                                          alt: '',
                                          src: A,
                                          className: N.confirmDiscountIcon
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: 'text-sm/medium',
                                          children: b.NW.format(b.t.Eq1RHB, {
                                              percent: C.discount.amount,
                                              numMonths: C.discount.user_usage_limit,
                                              price: D
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: N.confirmDiscountLegalese,
                                  children: (0, r.jsx)(c.Text, {
                                      variant: 'text-xs/semibold',
                                      className: N.confirmDiscountLegaleseText,
                                      children: b.NW.format(b.t.hrGTjI, {
                                          discountedPrice: P,
                                          billingPeriod: (0, m.JP)(C.discount.user_usage_limit_interval),
                                          numMonths: C.discount.user_usage_limit,
                                          fullPrice: D,
                                          helpdeskArticle: u.Z.getArticleURL(_.BhN.PAID_TERMS)
                                      })
                                  })
                              }),
                              O &&
                                  (0, r.jsx)('div', {
                                      className: N.redemptionFailedMessage,
                                      children: (0, r.jsx)(c.Text, {
                                          variant: 'text-xs/semibold',
                                          className: N.redemptionFailedMessageCopy,
                                          children: b.NW.string(b.t.AD6odn)
                                      })
                                  }),
                              (0, r.jsxs)('div', {
                                  className: a()(N.confirmDiscountButtons, {
                                      [N.confrimDiscountsButtonsError]: O,
                                      [N.confrimDiscountsButtonsNoError]: !O
                                  }),
                                  children: [
                                      (0, r.jsx)(c.zxk, {
                                          look: c.iLD.LINK,
                                          onClick: () => s(),
                                          children: b.NW.string(b.t.zl7LZm)
                                      }),
                                      (0, r.jsx)(c.zxk, {
                                          size: c.PhG.SMALL,
                                          submitting: v,
                                          onClick: () => I(C.id),
                                          children: b.NW.string(b.t.CKSuZG)
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
};
