n.d(t, { Z: () => P });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(100527),
    o = n(906732),
    s = n(963249),
    l = n(301766),
    c = n(509545),
    u = n(589072),
    d = n(74538),
    f = n(937615),
    _ = n(66683),
    p = n(230916),
    h = n(165583),
    m = n(382791),
    g = n(45474),
    E = n(474936),
    b = n(981631),
    y = n(388032),
    O = n(254972),
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
    let { premiumSubscription: t, discountInfo: n, invoicePreview: a, isDiscountActive: o } = e,
        s = d.ZP.getPlanIdFromInvoice(t, a),
        l = c.Z.get(s);
    if (null == l || null == a || null == n || null == n.duration || null == n.percentage) return null;
    let u = a.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === l.id;
    });
    if (null == u) return null;
    let _ = (0, f.T4)(u.amount, a.currency),
        p = (0, d.aS)(E.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
        }),
        h = (0, f.T4)(p.amount, p.currency);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.X6q, {
                variant: "heading-xl/semibold",
                color: "text-primary",
                children: y.intl.format(y.t["50bA2N"], { percent: n.percentage }),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: o
                    ? y.intl.format(y.t["3Ziutb"], {
                          percent: n.percentage,
                          numMonths: n.duration,
                          regularPrice: h,
                      })
                    : y.intl.format(y.t.N43FMz, {
                          numMonths: n.duration,
                          discountedPrice: _,
                          billingPeriod: y.intl.string(y.t.FPybU1),
                          fullPrice: h,
                      }),
            }),
        ],
    });
}
function R(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        a = (0, p._n)(n, E.Xh.PREMIUM_MONTH_TIER_2, t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.X6q, {
                variant: "heading-xl/semibold",
                color: "text-primary",
                children: y.intl.format(y.t.sFO20N, { percent: t.discount.amount }),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: y.intl.format(y.t["PH7Q+f"], {
                    numMonths: t.discount.user_usage_limit,
                    discountedPrice: a,
                    billingPeriod: (0, d.JP)(t.discount.user_usage_limit_interval),
                }),
            }),
        ],
    });
}
let P = function (e) {
    let {
            subscription: t,
            invoicePreview: c,
            isLoading: f,
            analyticsLocation: p,
            discountInfo: E,
            renewalChurnDiscountInfo: I,
            discountOffer: S,
        } = e,
        { analyticsLocations: P } = (0, o.ZP)(a.Z.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        { showDiscountBadge: w } = (0, _.k)({ location: "Subscription Details" }),
        D = () => {
            t.status !== b.O0b.CANCELED && x();
        },
        x = (e) => {
            (0, i.ZDy)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: i } = await Promise.all([
                    n.e("17938"),
                    n.e("69432"),
                    n.e("26526"),
                    n.e("60088"),
                ]).then(n.bind(n, 48813));
                return (n) =>
                    (0, r.jsx)(
                        i,
                        A(T({}, n), {
                            premiumSubscription: t,
                            analyticsLocation: p,
                            analyticsLocations: P,
                            initialStep: e,
                        }),
                    );
            });
        },
        L = () => {
            let e = d.ZP.isSwitchingPlansDisabled(t),
                n = d.ZP.getSwitchingPlansDisabledMessage(t);
            return d.ZP.isBaseSubscriptionCanceled(t)
                ? (0, r.jsx)(i.zxk, {
                      variant: "expressive",
                      icon: i.SrA,
                      size: "md",
                      text:
                          w && null != S
                              ? y.intl.format(y.t.XIVblZ, { percent: S.discount.amount })
                              : y.intl.string(y.t.zrCzVF),
                      loading: f,
                      onClick: () => x(g.R.CONFIRM_DISCOUNT),
                  })
                : (0, r.jsxs)("div", {
                      className: O.activeSubButtons,
                      children: [
                          (0, r.jsx)(i.ua7, {
                              text: n,
                              children: (n) =>
                                  (0, r.jsx)(
                                      i.zxk,
                                      A(T({}, n), {
                                          variant: "expressive",
                                          disabled: e,
                                          text: y.intl.string(y.t["dylp//"]),
                                          size: "md",
                                          onClick: () => {
                                              (0, s.Z)({
                                                  analyticsLocations: P,
                                                  analyticsLocation: p,
                                                  analyticsObject: C,
                                                  subscription: t,
                                              });
                                          },
                                      }),
                                  ),
                          }),
                          (0, r.jsx)(i.zxk, {
                              variant: "secondary",
                              size: "md",
                              text: y.intl.string(y.t["ETE/oK"]),
                              loading: f,
                              onClick: D,
                          }),
                      ],
                  });
        },
        j = d.ZP.getPlanIdFromInvoice(t, c),
        M = (0, h.eQ)(null == S ? void 0 : S.expires_at);
    return (0, l.Q0)(j)
        ? null
        : (0, r.jsx)("div", {
              className: O.churnDiscountBannerBackground,
              children: (0, r.jsx)(i.$1m, {
                  color: "nitro-pink",
                  className: O.headerGradient,
                  children: (0, r.jsxs)("div", {
                      className: O.churnDiscountBanner,
                      children: [
                          (0, r.jsxs)("div", {
                              className: O.headerLabel,
                              children: [
                                  (0, r.jsx)(u.Z, {
                                      color: "currentcolor",
                                      className: O.churnDiscountBannerWordMark,
                                      "aria-label": y.intl.string(y.t.lpNrPj),
                                  }),
                                  null != S &&
                                      w &&
                                      (0, r.jsx)(m.mn, {
                                          text: y.intl.formatToPlainString(y.t.AYcXGR, {
                                              discountOfferAmount: S.discount.amount,
                                          }),
                                          className: O.churnDiscountPill,
                                          colorOptions: m.VE.PREMIUM_TIER_2_MOD_BACKGROUND_FILL,
                                      }),
                                  (0, r.jsx)(i.Text, {
                                      className: O.churnDiscountBannerExpiryDate,
                                      variant: "text-sm/medium",
                                      color: "text-primary",
                                      children: null != S && M,
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
                                          null != S
                                              ? (0, r.jsx)(R, {
                                                    discountOffer: S,
                                                    premiumSubscription: t,
                                                })
                                              : (0, r.jsx)(N, {
                                                    premiumSubscription: t,
                                                    discountInfo: null != E ? E : I,
                                                    invoicePreview: c,
                                                    isDiscountActive: null != E,
                                                }),
                                          (0, r.jsx)("div", {
                                              className: O.churnDiscountBannerButton,
                                              children: L(),
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
