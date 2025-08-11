n.d(t, { Z: () => E }), n(388685);
var i = n(255367),
    r = n(73800),
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
    g = n(982404),
    C = n(299156);
let E = function (e) {
    let { premiumSubscription: t, premiumType: n, onClose: a, onConfirm: E, userDiscountOffer: j } = e,
        [O, P] = r.useState(!1),
        [N, v] = r.useState(!1),
        I = async (e) => {
            try {
                v(!0),
                    P(!1),
                    await o.tn.post({
                        url: x.ANM.USER_OFFER_REDEEM,
                        body: { user_discount_offer_id: e },
                        rejectWithError: !0,
                    }),
                    E();
            } catch (e) {
                P(!0);
            }
            v(!1);
        },
        T = (0, u.ZP)(),
        R = (0, l.wj)(T) ? g : C,
        S = (0, _._)(t, b.Xh.PREMIUM_MONTH_TIER_2, j),
        w = (0, m.aS)(b.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
        }),
        D = (0, p.T4)(w.amount, w.currency);
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
                                              price: D,
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
                                          fullPrice: D,
                                          helpdeskArticle: d.Z.getArticleURL(x.BhN.PAID_TERMS),
                                      }),
                                  }),
                              }),
                              O &&
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
                                      [h.confrimDiscountsButtonsError]: O,
                                      [h.confrimDiscountsButtonsNoError]: !O,
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
                                          loading: N,
                                          onClick: () => I(j.id),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              ],
          });
};
