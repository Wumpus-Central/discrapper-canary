n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(544891),
    o = n(780384),
    c = n(481060),
    d = n(410030),
    u = n(63063),
    h = n(74538),
    m = n(937615),
    g = n(230916),
    x = n(798769),
    _ = n(474936),
    p = n(981631),
    E = n(388032),
    C = n(258233),
    N = n(982404),
    I = n(299156);
let f = function (e) {
    let { premiumSubscription: t, premiumType: n, onClose: l, onConfirm: f, userDiscountOffer: T } = e,
        [S, j] = s.useState(!1),
        [v, b] = s.useState(!1),
        A = async (e) => {
            try {
                b(!0),
                    j(!1),
                    await a.tn.post({
                        url: p.ANM.USER_OFFER_REDEEM,
                        body: { user_discount_offer_id: e },
                        rejectWithError: !0
                    }),
                    f();
            } catch (e) {
                j(!0);
            }
            b(!1);
        },
        O = (0, d.ZP)(),
        R = (0, o.wj)(O) ? N : I,
        D = (0, g._)(t, _.Xh.PREMIUM_MONTH_TIER_2, T),
        P = (0, h.aS)(_.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        y = (0, m.T4)(P.amount, P.currency);
    return null == T
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(x.Z, {
                      premiumType: n,
                      onClose: l
                  }),
                  (0, i.jsx)(c.hzk, {
                      className: C.body,
                      children: (0, i.jsxs)('div', {
                          className: C.confirmDiscountContent,
                          children: [
                              (0, i.jsx)(c.X6q, {
                                  variant: 'heading-xl/bold',
                                  children: E.intl.format(E.t.q9Vxu7, { percent: T.discount.amount })
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
                                              percent: T.discount.amount,
                                              numMonths: T.discount.user_usage_limit,
                                              price: y
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
                                          discountedPrice: D,
                                          billingPeriod: (0, h.JP)(T.discount.user_usage_limit_interval),
                                          numMonths: T.discount.user_usage_limit,
                                          fullPrice: y,
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
                                  className: r()(C.confirmDiscountButtons, {
                                      [C.confrimDiscountsButtonsError]: S,
                                      [C.confrimDiscountsButtonsNoError]: !S
                                  }),
                                  children: [
                                      (0, i.jsx)(c.zxk, {
                                          look: c.iLD.LINK,
                                          onClick: () => l(),
                                          children: E.intl.string(E.t.zl7LZm)
                                      }),
                                      (0, i.jsx)(c.zxk, {
                                          size: c.PhG.SMALL,
                                          submitting: v,
                                          onClick: () => A(T.id),
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
