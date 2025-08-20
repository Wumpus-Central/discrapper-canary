n.d(t, { Z: () => P });
var r = n(951288);
n(647438);
var i = n(304789),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(963249),
    c = n(301766),
    u = n(509545),
    d = n(589072),
    f = n(74538),
    _ = n(937615),
    p = n(230916),
    h = n(165583),
    m = n(382791),
    g = n(45474),
    E = n(474936),
    b = n(981631),
    y = n(388032),
    O = n(355758),
    v = n(22767);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = {
    page: b.ZY5.USER_SETTINGS,
    section: b.jXE.SETTINGS_PREMIUM,
    object: b.qAy.CARD,
};
function N(e) {
    let { premiumSubscription: t, discountInfo: n, invoicePreview: i } = e,
        o = f.ZP.getPlanIdFromInvoice(t, i),
        s = u.Z.get(o);
    if (null == s || null == i || null == n || null == n.duration || null == n.percentage) return null;
    let l = i.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === s.id;
    });
    if (null == l) return null;
    let c = (0, _.T4)(l.amount, i.currency),
        d = (0, f.aS)(E.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
        }),
        p = (0, _.T4)(d.amount, d.currency);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: "heading-xl/semibold",
                color: "text-primary",
                children: y.intl.format(y.t["50bA2N"], { percent: n.percentage }),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: y.intl.format(y.t.N43FMz, {
                    numMonths: n.duration,
                    discountedPrice: c,
                    billingPeriod: y.intl.string(y.t.FPybU1),
                    fullPrice: p,
                }),
            }),
        ],
    });
}
function R(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        i = (0, p._)(n, E.Xh.PREMIUM_MONTH_TIER_2, t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: "heading-xl/semibold",
                color: "text-primary",
                children: y.intl.format(y.t.sFO20N, { percent: t.discount.amount }),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: y.intl.format(y.t["PH7Q+f"], {
                    numMonths: t.discount.user_usage_limit,
                    discountedPrice: i,
                    billingPeriod: (0, f.JP)(t.discount.user_usage_limit_interval),
                }),
            }),
        ],
    });
}
let P = function (e) {
    let {
            subscription: t,
            currentInvoicePreview: u,
            renewalInvoicePreview: _,
            isLoading: p,
            analyticsLocation: E,
            discountInfo: I,
            renewalChurnDiscountInfo: S,
            discountOffer: P,
        } = e,
        { analyticsLocations: w } = (0, s.ZP)(o.Z.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        D = null;
    D = null != I ? u : _;
    let x = () => {
            t.status !== b.O0b.CANCELED && L();
        },
        L = (e) => {
            (0, a.ZDy)(async () => {
                let { default: i } = await Promise.all([n.e("58067"), n.e("81709")]).then(n.bind(n, 833569));
                return (n) =>
                    (0, r.jsx)(
                        i,
                        A(T({}, n), {
                            premiumSubscription: t,
                            analyticsLocation: E,
                            analyticsLocations: w,
                            initialStep: e,
                        }),
                    );
            });
        },
        j = () => {
            let e = f.ZP.isSwitchingPlansDisabled(t),
                n = f.ZP.getSwitchingPlansDisabledMessage(t);
            return f.ZP.isBaseSubscriptionCanceled(t)
                ? (0, r.jsx)(a.zxk, {
                      variant: "expressive",
                      icon: a.SrA,
                      size: "md",
                      text: y.intl.string(y.t.zrCzVF),
                      loading: p,
                      onClick: () => L(g.R.CONFIRM_DISCOUNT),
                  })
                : (0, r.jsxs)("div", {
                      className: O.activeSubButtons,
                      children: [
                          (0, r.jsx)(a.ua7, {
                              text: n,
                              children: (n) =>
                                  (0, r.jsx)(
                                      a.zxk,
                                      A(T({}, n), {
                                          variant: "expressive",
                                          disabled: e,
                                          text: y.intl.string(y.t["dylp//"]),
                                          size: "md",
                                          onClick: () => {
                                              (0, l.Z)({
                                                  analyticsLocations: w,
                                                  analyticsLocation: E,
                                                  analyticsObject: C,
                                                  subscription: t,
                                              });
                                          },
                                      }),
                                  ),
                          }),
                          (0, r.jsx)(a.zxk, {
                              variant: "secondary",
                              size: "md",
                              text: y.intl.string(y.t["ETE/oK"]),
                              loading: p,
                              onClick: x,
                          }),
                      ],
                  });
        },
        M = f.ZP.getPlanIdFromInvoice(t, _),
        k = (0, h.eQ)(null == P ? void 0 : P.expires_at);
    return (0, c.Q0)(M)
        ? null
        : (0, r.jsx)("div", {
              className: O.churnDiscountBannerBackground,
              children: (0, r.jsx)(i.$, {
                  color: "nitro-pink",
                  className: O.headerGradient,
                  children: (0, r.jsxs)("div", {
                      className: O.churnDiscountBanner,
                      children: [
                          (0, r.jsxs)("div", {
                              className: O.headerLabel,
                              children: [
                                  (0, r.jsx)(d.Z, {
                                      color: "currentcolor",
                                      className: O.churnDiscountBannerWordMark,
                                      "aria-label": y.intl.string(y.t.lpNrPj),
                                  }),
                                  null != P &&
                                      (0, r.jsx)(m.mn, {
                                          text: y.intl.formatToPlainString(y.t.AYcXGR, {
                                              discountOfferAmount: P.discount.amount,
                                          }),
                                          className: O.churnDiscountPill,
                                          colorOptions: m.VE.PREMIUM_TIER_2_MOD_BACKGROUND_FILL,
                                      }),
                                  (0, r.jsx)(a.Text, {
                                      className: O.churnDiscountBannerExpiryDate,
                                      variant: "text-sm/medium",
                                      color: "text-primary",
                                      children: null != P && k,
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", { className: O.selectPlanDivider }),
                          (0, r.jsxs)("div", {
                              className: O.churnDiscountBannerContent,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: O.churnDiscountBannerDetails,
                                      children: [
                                          null != P
                                              ? (0, r.jsx)(R, {
                                                    discountOffer: P,
                                                    premiumSubscription: t,
                                                })
                                              : (0, r.jsx)(N, {
                                                    premiumSubscription: t,
                                                    discountInfo: null != I ? I : S,
                                                    invoicePreview: D,
                                                }),
                                          (0, r.jsx)("div", {
                                              className: O.churnDiscountBannerButton,
                                              children: j(),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)("img", {
                                      className: O.churnDiscountBannerImage,
                                      src: v,
                                      alt: "",
                                      draggable: !1,
                                  }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
};
