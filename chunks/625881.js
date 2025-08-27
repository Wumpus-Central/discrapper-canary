n.d(e, { Z: () => C }), n(388685);
var i = n(951288),
    a = n(647438),
    r = n(120356),
    s = n.n(r),
    l = n(544891),
    o = n(780384),
    c = n(481060),
    u = n(410030),
    d = n(63063),
    m = n(74538),
    p = n(937615),
    x = n(230916),
    f = n(798769),
    _ = n(474936),
    y = n(981631),
    h = n(388032),
    j = n(768051),
    E = n(982404),
    g = n(299156);
let C = function (t) {
    let { premiumSubscription: e, premiumType: n, onClose: r, onConfirm: C, userDiscountOffer: b } = t,
        [N, O] = a.useState(!1),
        [P, I] = a.useState(!1),
        T = async (t) => {
            try {
                I(!0),
                    O(!1),
                    await l.tn.post({
                        url: y.ANM.USER_OFFER_REDEEM,
                        body: { user_discount_offer_id: t },
                        rejectWithError: !0,
                    }),
                    C();
            } catch (t) {
                O(!0);
            }
            I(!1);
        },
        R = (0, u.ZP)(),
        v = (0, o.wj)(R) ? E : g,
        S = (0, x._n)(e, _.Xh.PREMIUM_MONTH_TIER_2, b),
        w = (0, m.aS)(_.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: e.currency,
            paymentSourceId: e.paymentSourceId,
        }),
        D = (0, p.T4)(w.amount, w.currency);
    return null == b
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(f.Z, {
                      premiumType: n,
                      onClose: r,
                  }),
                  (0, i.jsx)(c.hzk, {
                      "data-migration-pending": !0,
                      className: j.body,
                      children: (0, i.jsxs)("div", {
                          className: j.confirmDiscountContent,
                          children: [
                              (0, i.jsx)(c.X6q, {
                                  variant: "heading-xl/bold",
                                  children: h.intl.format(h.t.q9Vxu7, { percent: b.discount.amount }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: j.confirmDiscountDescription,
                                  children: [
                                      (0, i.jsx)("img", {
                                          alt: "",
                                          src: v,
                                          className: j.confirmDiscountIcon,
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: "text-sm/medium",
                                          children: h.intl.format(h.t.Eq1RHB, {
                                              percent: b.discount.amount,
                                              numMonths: b.discount.user_usage_limit,
                                              price: D,
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: j.confirmDiscountLegalese,
                                  children: (0, i.jsx)(c.Text, {
                                      variant: "text-xs/semibold",
                                      className: j.confirmDiscountLegaleseText,
                                      children: h.intl.format(h.t.hrGTjI, {
                                          discountedPrice: S,
                                          billingPeriod: (0, m.JP)(b.discount.user_usage_limit_interval),
                                          numMonths: b.discount.user_usage_limit,
                                          fullPrice: D,
                                          helpdeskArticle: d.Z.getArticleURL(y.BhN.PAID_TERMS),
                                      }),
                                  }),
                              }),
                              N &&
                                  (0, i.jsx)("div", {
                                      className: j.redemptionFailedMessage,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: "text-xs/semibold",
                                          className: j.redemptionFailedMessageCopy,
                                          children: h.intl.string(h.t.AD6odn),
                                      }),
                                  }),
                              (0, i.jsxs)("div", {
                                  className: s()(j.confirmDiscountButtons, {
                                      [j.confrimDiscountsButtonsError]: N,
                                      [j.confrimDiscountsButtonsNoError]: !N,
                                  }),
                                  children: [
                                      (0, i.jsx)(c.Avr, {
                                          variant: "primary",
                                          text: h.intl.string(h.t.zl7LZm),
                                          onClick: () => r(),
                                      }),
                                      (0, i.jsx)(c.zxk, {
                                          variant: "primary",
                                          size: "sm",
                                          text: h.intl.string(h.t.CKSuZG),
                                          loading: P,
                                          onClick: () => T(b.id),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              ],
          });
};
