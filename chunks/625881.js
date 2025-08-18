n.d(t, { Z: () => j }), n(388685);
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
    y = n(981631),
    b = n(388032),
    h = n(768051),
    g = n(982404),
    C = n(299156);
let j = function (e) {
    let { premiumSubscription: t, premiumType: n, onClose: a, onConfirm: j, userDiscountOffer: E } = e,
        [I, v] = r.useState(!1),
        [N, P] = r.useState(!1),
        O = async (e) => {
            try {
                P(!0),
                    v(!1),
                    await o.tn.post({
                        url: y.ANM.USER_OFFER_REDEEM,
                        body: { user_discount_offer_id: e },
                        rejectWithError: !0,
                    }),
                    j();
            } catch (e) {
                v(!0);
            }
            P(!1);
        },
        T = (0, u.ZP)(),
        R = (0, l.wj)(T) ? g : C,
        S = (0, _._)(t, x.Xh.PREMIUM_MONTH_TIER_2, E),
        w = (0, m.aS)(x.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
        }),
        D = (0, p.T4)(w.amount, w.currency);
    return null == E
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
                                  children: b.intl.format(b.t.q9Vxu7, { percent: E.discount.amount }),
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
                                          children: b.intl.format(b.t.Eq1RHB, {
                                              percent: E.discount.amount,
                                              numMonths: E.discount.user_usage_limit,
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
                                      children: b.intl.format(b.t.hrGTjI, {
                                          discountedPrice: S,
                                          billingPeriod: (0, m.JP)(E.discount.user_usage_limit_interval),
                                          numMonths: E.discount.user_usage_limit,
                                          fullPrice: D,
                                          helpdeskArticle: d.Z.getArticleURL(y.BhN.PAID_TERMS),
                                      }),
                                  }),
                              }),
                              I &&
                                  (0, i.jsx)("div", {
                                      className: h.redemptionFailedMessage,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: "text-xs/semibold",
                                          className: h.redemptionFailedMessageCopy,
                                          children: b.intl.string(b.t.AD6odn),
                                      }),
                                  }),
                              (0, i.jsxs)("div", {
                                  className: s()(h.confirmDiscountButtons, {
                                      [h.confrimDiscountsButtonsError]: I,
                                      [h.confrimDiscountsButtonsNoError]: !I,
                                  }),
                                  children: [
                                      (0, i.jsx)(c.Avr, {
                                          variant: "primary",
                                          text: b.intl.string(b.t.zl7LZm),
                                          onClick: () => a(),
                                      }),
                                      (0, i.jsx)(c.zxk, {
                                          variant: "primary",
                                          size: "sm",
                                          text: b.intl.string(b.t.CKSuZG),
                                          loading: N,
                                          onClick: () => O(E.id),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              ],
          });
};
