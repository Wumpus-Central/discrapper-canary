n.d(t, { Z: () => I });
var i = n(255367);
n(73800);
var r = n(304789),
    s = n(481060),
    a = n(100527),
    l = n(906732),
    o = n(963249),
    c = n(301766),
    d = n(509545),
    u = n(589072),
    m = n(74538),
    p = n(937615),
    g = n(230916),
    h = n(165583),
    f = n(382791),
    b = n(45474),
    x = n(474936),
    _ = n(981631),
    j = n(388032),
    E = n(355758),
    C = n(22767);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = {
    page: _.ZY5.USER_SETTINGS,
    section: _.jXE.SETTINGS_PREMIUM,
    object: _.qAy.CARD,
};
function T(e) {
    let { premiumSubscription: t, discountInfo: n, invoicePreview: r } = e,
        a = m.ZP.getPlanIdFromInvoice(t, r),
        l = d.Z.get(a);
    if (null == l || null == r || null == n || null == n.duration || null == n.percentage) return null;
    let o = r.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === l.id;
    });
    if (null == o) return null;
    let c = (0, p.T4)(o.amount, r.currency),
        u = (0, m.aS)(x.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
        }),
        g = (0, p.T4)(u.amount, u.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.X6q, {
                variant: "heading-xl/semibold",
                color: "always-white",
                children: j.intl.format(j.t["50bA2N"], { percent: n.percentage }),
            }),
            (0, i.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                children: j.intl.format(j.t.N43FMz, {
                    numMonths: n.duration,
                    discountedPrice: c,
                    billingPeriod: j.intl.string(j.t.FPybU1),
                    fullPrice: g,
                }),
            }),
        ],
    });
}
function N(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        r = (0, g._)(n, x.Xh.PREMIUM_MONTH_TIER_2, t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.X6q, {
                variant: "heading-xl/semibold",
                color: "always-white",
                children: j.intl.format(j.t.sFO20N, { percent: t.discount.amount }),
            }),
            (0, i.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                children: j.intl.format(j.t["PH7Q+f"], {
                    numMonths: t.discount.user_usage_limit,
                    discountedPrice: r,
                    billingPeriod: (0, m.JP)(t.discount.user_usage_limit_interval),
                }),
            }),
        ],
    });
}
let I = function (e) {
    let {
            subscription: t,
            currentInvoicePreview: d,
            renewalInvoicePreview: p,
            isLoading: g,
            analyticsLocation: x,
            discountInfo: I,
            renewalChurnDiscountInfo: y,
            discountOffer: A,
        } = e,
        { analyticsLocations: P } = (0, l.ZP)(a.Z.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        R = null;
    R = null != I ? d : p;
    let D = () => {
            t.status !== _.O0b.CANCELED && Z();
        },
        Z = (e) => {
            (0, s.ZDy)(async () => {
                let { default: r } = await Promise.all([n.e("58067"), n.e("81709")]).then(n.bind(n, 833569));
                return (n) =>
                    (0, i.jsx)(
                        r,
                        v(O({}, n), {
                            premiumSubscription: t,
                            analyticsLocation: x,
                            analyticsLocations: P,
                            initialStep: e,
                        }),
                    );
            });
        },
        w = m.ZP.getPlanIdFromInvoice(t, p),
        k = (0, h.eQ)(null == A ? void 0 : A.expires_at);
    return (0, c.Q0)(w)
        ? null
        : (0, i.jsx)("div", {
              className: E.churnDiscountBannerBackground,
              children: (0, i.jsx)(r.$, {
                  className: E.headerGradient,
                  children: (0, i.jsxs)("div", {
                      className: E.churnDiscountBanner,
                      children: [
                          (0, i.jsxs)("div", {
                              className: E.headerLabel,
                              children: [
                                  (0, i.jsx)(u.Z, {
                                      className: E.churnDiscountBannerWordMark,
                                      "aria-label": j.intl.string(j.t.lpNrPj),
                                  }),
                                  null != A &&
                                      (0, i.jsx)(f.mn, {
                                          text: j.intl.formatToPlainString(j.t.AYcXGR, {
                                              discountOfferAmount: A.discount.amount,
                                          }),
                                          className: E.churnDiscountPill,
                                          colorOptions: f.VE.PREMIUM_TIER_2_MOD_BACKGROUND_FILL,
                                      }),
                                  (0, i.jsx)(s.Text, {
                                      className: E.churnDiscountBannerExpiryDate,
                                      variant: "text-sm/medium",
                                      color: "text-secondary",
                                      children: null != A && k,
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", { className: E.selectPlanDivider }),
                          (0, i.jsxs)("div", {
                              className: E.churnDiscountBannerContent,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: E.churnDiscountBannerDetails,
                                      children: [
                                          null != A
                                              ? (0, i.jsx)(N, {
                                                    discountOffer: A,
                                                    premiumSubscription: t,
                                                })
                                              : (0, i.jsx)(T, {
                                                    premiumSubscription: t,
                                                    discountInfo: null != I ? I : y,
                                                    invoicePreview: R,
                                                }),
                                          (0, i.jsx)("div", {
                                              className: E.churnDiscountBannerButton,
                                              children: (() => {
                                                  let e = m.ZP.isSwitchingPlansDisabled(t),
                                                      n = m.ZP.getSwitchingPlansDisabledMessage(t);
                                                  return m.ZP.isBaseSubscriptionCanceled(t)
                                                      ? (0, i.jsx)(s.zxk, {
                                                            variant: "expressive",
                                                            icon: s.SrA,
                                                            size: "md",
                                                            text: j.intl.string(j.t.zrCzVF),
                                                            loading: g,
                                                            onClick: () => Z(b.R.CONFIRM_DISCOUNT),
                                                        })
                                                      : (0, i.jsxs)("div", {
                                                            className: E.activeSubButtons,
                                                            children: [
                                                                (0, i.jsx)(s.ua7, {
                                                                    text: n,
                                                                    children: (n) =>
                                                                        (0, i.jsx)(
                                                                            s.zxk,
                                                                            v(O({}, n), {
                                                                                variant: "overlay-primary",
                                                                                disabled: e,
                                                                                text: j.intl.string(j.t["dylp//"]),
                                                                                size: "md",
                                                                                onClick: () => {
                                                                                    (0, o.Z)({
                                                                                        analyticsLocations: P,
                                                                                        analyticsLocation: x,
                                                                                        analyticsObject: S,
                                                                                        subscription: t,
                                                                                    });
                                                                                },
                                                                            }),
                                                                        ),
                                                                }),
                                                                (0, i.jsx)(s.zxk, {
                                                                    variant: "secondary",
                                                                    size: "md",
                                                                    text: j.intl.string(j.t["ETE/oK"]),
                                                                    loading: g,
                                                                    onClick: D,
                                                                }),
                                                            ],
                                                        });
                                              })(),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)("img", {
                                      className: E.churnDiscountBannerImage,
                                      src: C,
                                      alt: "",
                                      draggable: !1,
                                  }),
                                  ";",
                              ],
                          }),
                      ],
                  }),
              }),
          });
};
