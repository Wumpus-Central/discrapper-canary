n.d(t, { Z: () => E }), n(388685);
var i = n(951288),
    r = n(647438),
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
    x = n(474936),
    b = n(981631),
    y = n(388032),
    h = n(768051),
    C = n(982404),
    g = n(299156);
let E = function (e) {
    let { premiumSubscription: t, premiumType: n, onClose: a, onConfirm: E, userDiscountOffer: j } = e,
        [N, I] = r.useState(!1),
        [v, O] = r.useState(!1),
        P = async (e) => {
            try {
                O(!0),
                    I(!1),
                    await o.tn.post({
                        url: b.ANM.USER_OFFER_REDEEM,
                        body: { user_discount_offer_id: e },
                        rejectWithError: !0,
                    }),
                    E();
            } catch (e) {
                I(!0);
            }
            O(!1);
        },
        T = (0, u.ZP)(),
        R = (0, l.wj)(T) ? C : g,
        S = (0, _._)(t, x.Xh.PREMIUM_MONTH_TIER_2, j),
        D = (0, m.aS)(x.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
        }),
        w = (0, p.T4)(D.amount, D.currency);
    return null == j
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(f.Z, {
                      premiumType: n,
                      onClose: a,
                  }),
                  (0, i.jsx)(c.hzk, {
                      "data-migration-pending": !0,
                      className: h.body,
                      children: (0, i.jsxs)("div", {
                          className: h.confirmDiscountContent,
                          children: [
                              (0, i.jsx)(c.X6q, {
                                  variant: "heading-xl/bold",
                                  children: y.intl.format(y.t.q9Vxu7, { percent: j.discount.amount }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: h.confirmDiscountDescription,
                                  children: [
                                      (0, i.jsx)("img", {
                                          alt: "",
                                          src: R,
                                          className: h.confirmDiscountIcon,
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: "text-sm/medium",
                                          children: y.intl.format(y.t.Eq1RHB, {
                                              percent: j.discount.amount,
                                              numMonths: j.discount.user_usage_limit,
                                              price: w,
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: h.confirmDiscountLegalese,
                                  children: (0, i.jsx)(c.Text, {
                                      variant: "text-xs/semibold",
                                      className: h.confirmDiscountLegaleseText,
                                      children: y.intl.format(y.t.hrGTjI, {
                                          discountedPrice: S,
                                          billingPeriod: (0, m.JP)(j.discount.user_usage_limit_interval),
                                          numMonths: j.discount.user_usage_limit,
                                          fullPrice: w,
                                          helpdeskArticle: d.Z.getArticleURL(b.BhN.PAID_TERMS),
                                      }),
                                  }),
                              }),
                              N &&
                                  (0, i.jsx)("div", {
                                      className: h.redemptionFailedMessage,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: "text-xs/semibold",
                                          className: h.redemptionFailedMessageCopy,
                                          children: y.intl.string(y.t.AD6odn),
                                      }),
                                  }),
                              (0, i.jsxs)("div", {
                                  className: s()(h.confirmDiscountButtons, {
                                      [h.confrimDiscountsButtonsError]: N,
                                      [h.confrimDiscountsButtonsNoError]: !N,
                                  }),
                                  children: [
                                      (0, i.jsx)(c.Avr, {
                                          variant: "primary",
                                          text: y.intl.string(y.t.zl7LZm),
                                          onClick: () => a(),
                                      }),
                                      (0, i.jsx)(c.zxk, {
                                          variant: "primary",
                                          size: "sm",
                                          text: y.intl.string(y.t.CKSuZG),
                                          loading: v,
                                          onClick: () => P(j.id),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              ],
          });
};
