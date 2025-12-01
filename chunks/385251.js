n.d(t, { Z: () => N });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(100527),
    o = n(906732),
    s = n(963249),
    l = n(301766),
    c = n(509545),
    u = n(589072),
    d = n(74538),
    f = n(937615),
    p = n(230916),
    _ = n(165583),
    m = n(45474),
    h = n(474936),
    g = n(981631),
    E = n(388032),
    b = n(355758),
    y = n(22767);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
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
function I(e, t) {
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
let T = {
    page: g.ZY5.USER_SETTINGS,
    section: g.jXE.SETTINGS_PREMIUM,
    object: g.qAy.CARD,
};
function A(e) {
    let { premiumSubscription: t, discountInfo: n, invoicePreview: a, isDiscountActive: o } = e,
        s = d.ZP.getPlanIdFromInvoice(t, a),
        l = c.Z.get(s);
    if (null == l || null == a || null == n || null == n.duration || null == n.percentage) return null;
    let u = a.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === l.id;
    });
    if (null == u) return null;
    let p = (0, f.T4)(u.amount, a.currency),
        _ = (0, d.aS)(h.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
        }),
        m = (0, f.T4)(_.amount, _.currency);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                color: "text-primary",
                children: E.intl.format(E.t["50bA2I"], { percent: n.percentage }),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: o
                    ? E.intl.format(E.t["3ZiutU"], {
                          percent: n.percentage,
                          numMonths: n.duration,
                          regularPrice: m,
                      })
                    : E.intl.format(E.t.N43FMx, {
                          numMonths: n.duration,
                          discountedPrice: p,
                          billingPeriod: E.intl.string(E.t.FPybU7),
                          fullPrice: m,
                      }),
            }),
        ],
    });
}
function C(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        a = (0, p._n)(n, h.Xh.PREMIUM_MONTH_TIER_2, t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                color: "text-primary",
                children: E.intl.format(E.t.sFO20P, { percent: t.discount.amount }),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: E.intl.format(E.t["PH7Q+R"], {
                    numMonths: t.discount.user_usage_limit,
                    discountedPrice: a,
                    billingPeriod: (0, d.JP)(t.discount.user_usage_limit_interval),
                }),
            }),
        ],
    });
}
let N = function (e) {
    let {
            subscription: t,
            invoicePreview: c,
            isLoading: f,
            analyticsLocation: p,
            discountInfo: h,
            renewalChurnDiscountInfo: O,
            discountOffer: S,
        } = e,
        { analyticsLocations: N } = (0, o.ZP)(a.Z.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        P = () => {
            t.status !== g.O0b.CANCELED && R();
        },
        R = (e) => {
            (0, i.ZDy)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: i } = await n.e("26526").then(n.bind(n, 48813));
                return (n) =>
                    (0, r.jsx)(
                        i,
                        I(v({}, n), {
                            premiumSubscription: t,
                            analyticsLocation: p,
                            analyticsLocations: N,
                            initialStep: e,
                        }),
                    );
            });
        },
        w = () => {
            let e = d.ZP.isSwitchingPlansDisabled(t),
                n = d.ZP.getSwitchingPlansDisabledMessage(t);
            return d.ZP.isBaseSubscriptionCanceled(t)
                ? (0, r.jsx)(i.Button, {
                      variant: "expressive",
                      icon: i.SrA,
                      size: "md",
                      text: E.intl.string(E.t.zrCzVB),
                      loading: f,
                      onClick: () => R(m.R.CONFIRM_DISCOUNT),
                  })
                : (0, r.jsxs)("div", {
                      className: b.activeSubButtons,
                      children: [
                          (0, r.jsx)(i.aML, {
                              text: n,
                              children: (n) =>
                                  (0, r.jsx)(
                                      i.Button,
                                      I(v({}, n), {
                                          variant: "expressive",
                                          disabled: e,
                                          text: E.intl.string(E.t["dylp/7"]),
                                          size: "md",
                                          onClick: () => {
                                              (0, s.Z)({
                                                  analyticsLocations: N,
                                                  analyticsLocation: p,
                                                  analyticsObject: T,
                                                  subscription: t,
                                              });
                                          },
                                      }),
                                  ),
                          }),
                          (0, r.jsx)(i.Button, {
                              variant: "secondary",
                              size: "md",
                              text: E.intl.string(E.t["ETE/oC"]),
                              loading: f,
                              onClick: P,
                          }),
                      ],
                  });
        },
        D = d.ZP.getPlanIdFromInvoice(t, c),
        x = (0, _.eQ)(null == S ? void 0 : S.expires_at);
    return (0, l.Q0)(D)
        ? null
        : (0, r.jsx)("div", {
              className: b.churnDiscountBannerBackground,
              children: (0, r.jsx)(i.$1m, {
                  color: "nitro-pink",
                  className: b.headerGradient,
                  children: (0, r.jsxs)("div", {
                      className: b.churnDiscountBanner,
                      children: [
                          (0, r.jsxs)("div", {
                              className: b.headerLabel,
                              children: [
                                  (0, r.jsx)(u.Z, {
                                      color: "currentcolor",
                                      className: b.churnDiscountBannerWordMark,
                                      "aria-label": E.intl.string(E.t.lpNrPu),
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      className: b.churnDiscountBannerExpiryDate,
                                      variant: "text-sm/medium",
                                      color: "text-primary",
                                      children: null != S && x,
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", { className: b.selectPlanDivider }),
                          (0, r.jsxs)("div", {
                              className: b.churnDiscountBannerContent,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: b.churnDiscountBannerDetails,
                                      children: [
                                          null != S
                                              ? (0, r.jsx)(C, {
                                                    discountOffer: S,
                                                    premiumSubscription: t,
                                                })
                                              : (0, r.jsx)(A, {
                                                    premiumSubscription: t,
                                                    discountInfo: null != h ? h : O,
                                                    invoicePreview: c,
                                                    isDiscountActive: null != h,
                                                }),
                                          (0, r.jsx)("div", {
                                              className: b.churnDiscountBannerButton,
                                              children: w(),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)("img", {
                                      className: b.churnDiscountBannerImage,
                                      src: y,
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
