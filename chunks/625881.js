n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(544891),
    o = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(63063),
    m = n(74538),
    h = n(937615),
    g = n(230916),
    _ = n(798769),
    x = n(474936),
    p = n(981631),
    E = n(388032),
    C = n(546146),
    f = n(982404),
    T = n(299156);
let N = function (e) {
    let { premiumSubscription: t, premiumType: n, onClose: r, onConfirm: N, userDiscountOffer: I } = e,
        [S, b] = s.useState(!1),
        [v, j] = s.useState(!1),
        A = async (e) => {
            try {
                j(!0),
                    b(!1),
                    await a.tn.post({
                        url: p.ANM.USER_OFFER_REDEEM,
                        body: { user_discount_offer_id: e },
                        rejectWithError: !0
                    }),
                    N();
            } catch (e) {
                b(!0);
            }
            j(!1);
        },
        O = (0, d.ZP)(),
        R = (0, o.wj)(O) ? f : T,
        P = (0, g._)(t, x.Xh.PREMIUM_MONTH_TIER_2, I),
        D = (0, m.aS)(x.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        Z = (0, h.T4)(D.amount, D.currency);
    return null == I
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(_.Z, {
                      premiumType: n,
                      onClose: r
                  }),
                  (0, i.jsx)(c.hzk, {
                      className: C.body,
                      children: (0, i.jsxs)('div', {
                          className: C.confirmDiscountContent,
                          children: [
                              (0, i.jsx)(c.X6q, {
                                  variant: 'heading-xl/bold',
                                  children: E.intl.format(E.t.q9Vxu7, { percent: I.discount.amount })
                              }),
                              (0, i.jsxs)('div', {
                                  className: C.confirmDiscountDescription,
                                  children: [
                                      (0, i.jsx)('img', {
                                          alt: '',
                                          src: R,
                                          className: C.confirmDiscountIcon
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'text-sm/medium',
                                          children: E.intl.format(E.t.Eq1RHB, {
                                              percent: I.discount.amount,
                                              numMonths: I.discount.user_usage_limit,
                                              price: Z
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)('div', {
                                  className: C.confirmDiscountLegalese,
                                  children: (0, i.jsx)(c.Text, {
                                      variant: 'text-xs/semibold',
                                      className: C.confirmDiscountLegaleseText,
                                      children: E.intl.format(E.t.hrGTjI, {
                                          discountedPrice: P,
                                          billingPeriod: (0, m.JP)(I.discount.user_usage_limit_interval),
                                          numMonths: I.discount.user_usage_limit,
                                          fullPrice: Z,
                                          helpdeskArticle: u.Z.getArticleURL(p.BhN.PAID_TERMS)
                                      })
                                  })
                              }),
                              S &&
                                  (0, i.jsx)('div', {
                                      className: C.redemptionFailedMessage,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: 'text-xs/semibold',
                                          className: C.redemptionFailedMessageCopy,
                                          children: E.intl.string(E.t.AD6odn)
                                      })
                                  }),
                              (0, i.jsxs)('div', {
                                  className: l()(C.confirmDiscountButtons, {
                                      [C.confrimDiscountsButtonsError]: S,
                                      [C.confrimDiscountsButtonsNoError]: !S
                                  }),
                                  children: [
                                      (0, i.jsx)(c.zxk, {
                                          look: c.iLD.LINK,
                                          onClick: () => r(),
                                          children: E.intl.string(E.t.zl7LZm)
                                      }),
                                      (0, i.jsx)(c.zxk, {
                                          size: c.PhG.SMALL,
                                          submitting: v,
                                          onClick: () => A(I.id),
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
