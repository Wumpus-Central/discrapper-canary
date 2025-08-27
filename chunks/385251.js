n.d(t, { Z: () => w });
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
    p = n(66683),
    h = n(230916),
    m = n(165583),
    g = n(382791),
    E = n(45474),
    b = n(474936),
    y = n(981631),
    O = n(388032),
    v = n(355758),
    I = n(22767);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = {
    page: y.ZY5.USER_SETTINGS,
    section: y.jXE.SETTINGS_PREMIUM,
    object: y.qAy.CARD,
};
function R(e) {
    let { premiumSubscription: t, discountInfo: n, invoicePreview: i, isDiscountActive: o } = e,
        s = f.ZP.getPlanIdFromInvoice(t, i),
        l = u.Z.get(s);
    if (null == l || null == i || null == n || null == n.duration || null == n.percentage) return null;
    let c = i.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === l.id;
    });
    if (null == c) return null;
    let d = (0, _.T4)(c.amount, i.currency),
        p = (0, f.aS)(b.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
        }),
        h = (0, _.T4)(p.amount, p.currency);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: "heading-xl/semibold",
                color: "text-primary",
                children: O.intl.format(O.t["50bA2N"], { percent: n.percentage }),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: o
                    ? O.intl.format(O.t["3Ziutb"], {
                          percent: n.percentage,
                          numMonths: n.duration,
                          regularPrice: h,
                      })
                    : O.intl.format(O.t.N43FMz, {
                          numMonths: n.duration,
                          discountedPrice: d,
                          billingPeriod: O.intl.string(O.t.FPybU1),
                          fullPrice: h,
                      }),
            }),
        ],
    });
}
function P(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        i = (0, h._n)(n, b.Xh.PREMIUM_MONTH_TIER_2, t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: "heading-xl/semibold",
                color: "text-primary",
                children: O.intl.format(O.t.sFO20N, { percent: t.discount.amount }),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: O.intl.format(O.t["PH7Q+f"], {
                    numMonths: t.discount.user_usage_limit,
                    discountedPrice: i,
                    billingPeriod: (0, f.JP)(t.discount.user_usage_limit_interval),
                }),
            }),
        ],
    });
}
let w = function (e) {
    let {
            subscription: t,
            invoicePreview: u,
            isLoading: _,
            analyticsLocation: h,
            discountInfo: b,
            renewalChurnDiscountInfo: T,
            discountOffer: A,
        } = e,
        { analyticsLocations: w } = (0, s.ZP)(o.Z.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        { showDiscountBadge: D } = (0, p.k)({ location: "Subscription Details" }),
        x = () => {
            t.status !== y.O0b.CANCELED && L();
        },
        L = (e) => {
            (0, a.ZDy)(async () => {
                let { default: i } = await Promise.all([n.e("58067"), n.e("81709"), n.e("70349")]).then(
                    n.bind(n, 833569),
                );
                return (n) =>
                    (0, r.jsx)(
                        i,
                        C(S({}, n), {
                            premiumSubscription: t,
                            analyticsLocation: h,
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
                      text:
                          D && null != A
                              ? O.intl.format(O.t.XIVblZ, { percent: A.discount.amount })
                              : O.intl.string(O.t.zrCzVF),
                      loading: _,
                      onClick: () => L(E.R.CONFIRM_DISCOUNT),
                  })
                : (0, r.jsxs)("div", {
                      className: v.activeSubButtons,
                      children: [
                          (0, r.jsx)(a.ua7, {
                              text: n,
                              children: (n) =>
                                  (0, r.jsx)(
                                      a.zxk,
                                      C(S({}, n), {
                                          variant: "expressive",
                                          disabled: e,
                                          text: O.intl.string(O.t["dylp//"]),
                                          size: "md",
                                          onClick: () => {
                                              (0, l.Z)({
                                                  analyticsLocations: w,
                                                  analyticsLocation: h,
                                                  analyticsObject: N,
                                                  subscription: t,
                                              });
                                          },
                                      }),
                                  ),
                          }),
                          (0, r.jsx)(a.zxk, {
                              variant: "secondary",
                              size: "md",
                              text: O.intl.string(O.t["ETE/oK"]),
                              loading: _,
                              onClick: x,
                          }),
                      ],
                  });
        },
        M = f.ZP.getPlanIdFromInvoice(t, u),
        k = (0, m.eQ)(null == A ? void 0 : A.expires_at);
    return (0, c.Q0)(M)
        ? null
        : (0, r.jsx)("div", {
              className: v.churnDiscountBannerBackground,
              children: (0, r.jsx)(i.$, {
                  color: "nitro-pink",
                  className: v.headerGradient,
                  children: (0, r.jsxs)("div", {
                      className: v.churnDiscountBanner,
                      children: [
                          (0, r.jsxs)("div", {
                              className: v.headerLabel,
                              children: [
                                  (0, r.jsx)(d.Z, {
                                      color: "currentcolor",
                                      className: v.churnDiscountBannerWordMark,
                                      "aria-label": O.intl.string(O.t.lpNrPj),
                                  }),
                                  null != A &&
                                      D &&
                                      (0, r.jsx)(g.mn, {
                                          text: O.intl.formatToPlainString(O.t.AYcXGR, {
                                              discountOfferAmount: A.discount.amount,
                                          }),
                                          className: v.churnDiscountPill,
                                          colorOptions: g.VE.PREMIUM_TIER_2_MOD_BACKGROUND_FILL,
                                      }),
                                  (0, r.jsx)(a.Text, {
                                      className: v.churnDiscountBannerExpiryDate,
                                      variant: "text-sm/medium",
                                      color: "text-primary",
                                      children: null != A && k,
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", { className: v.selectPlanDivider }),
                          (0, r.jsxs)("div", {
                              className: v.churnDiscountBannerContent,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: v.churnDiscountBannerDetails,
                                      children: [
                                          null != A
                                              ? (0, r.jsx)(P, {
                                                    discountOffer: A,
                                                    premiumSubscription: t,
                                                })
                                              : (0, r.jsx)(R, {
                                                    premiumSubscription: t,
                                                    discountInfo: null != b ? b : T,
                                                    invoicePreview: u,
                                                    isDiscountActive: null != b,
                                                }),
                                          (0, r.jsx)("div", {
                                              className: v.churnDiscountBannerButton,
                                              children: j(),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)("img", {
                                      className: v.churnDiscountBannerImage,
                                      src: I,
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
