n.d(t, { A: () => R });
var r = n(627968);
n(64700);
var i = n(990078),
    a = n(397927),
    s = n(793574),
    o = n(688810),
    l = n(532794),
    c = n(832946),
    u = n(97352),
    d = n(392943),
    f = n(927578),
    p = n(580630),
    _ = n(511484),
    h = n(811611),
    m = n(473702),
    g = n(788868),
    E = n(652215),
    b = n(985018),
    y = n(424850),
    O = n(818724);
function A(e, t, n) {
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
                A(e, t, n[t]);
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
    page: E.liQ.USER_SETTINGS,
    section: E.JJy.SETTINGS_PREMIUM,
    object: E.ZSU.CARD,
};
function C(e) {
    let { premiumSubscription: t, discountInfo: n, invoicePreview: i, isDiscountActive: s } = e,
        o = f.Ay.getPlanIdFromInvoice(t, i),
        l = u.A.get(o);
    if (null == l || null == i || null == n || null == n.duration || null == n.percentage) return null;
    let c = i.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === l.id;
    });
    if (null == c) return null;
    let d = (0, p.$g)(c.amount, i.currency),
        _ = (0, f.y8)(g.gD.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
        }),
        h = (0, p.$g)(_.amount, _.currency);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: b.intl.format(b.t["50bA2I"], { percent: n.percentage }),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: s
                    ? b.intl.format(b.t["3ZiutU"], {
                          percent: n.percentage,
                          numMonths: n.duration,
                          regularPrice: h,
                      })
                    : b.intl.format(b.t.N43FMx, {
                          numMonths: n.duration,
                          discountedPrice: d,
                          billingPeriod: b.intl.string(b.t.FPybU7),
                          fullPrice: h,
                      }),
            }),
        ],
    });
}
function N(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        i = (0, _.tQ)(n, g.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: b.intl.format(b.t.sFO20P, { percent: t.discount.amount }),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: b.intl.format(b.t["PH7Q+R"], {
                    numMonths: t.discount.user_usage_limit,
                    discountedPrice: i,
                    billingPeriod: (0, f.Ke)(t.discount.user_usage_limit_interval),
                }),
            }),
        ],
    });
}
let R = function (e) {
    let {
            subscription: t,
            invoicePreview: u,
            isLoading: p,
            analyticsLocation: _,
            discountInfo: g,
            renewalChurnDiscountInfo: A,
            discountOffer: S,
        } = e,
        { analyticsLocations: R } = (0, o.Ay)(s.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        w = () => {
            t.status !== E.Dmq.CANCELED && P();
        },
        P = (e) => {
            (0, a.mMO)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: i } = await n
                    .e("72820")
                    .then(n.bind(n, 281439));
                return (n) =>
                    (0, r.jsx)(
                        i,
                        I(v({}, n), {
                            premiumSubscription: t,
                            analyticsLocation: _,
                            analyticsLocations: R,
                            initialStep: e,
                        }),
                    );
            });
        },
        D = () => {
            let e = f.Ay.isSwitchingPlansDisabled(t),
                n = f.Ay.getSwitchingPlansDisabledMessage(t);
            return f.Ay.isBaseSubscriptionCanceled(t)
                ? (0, r.jsx)(a.Button, {
                      variant: "expressive",
                      icon: a.tvc,
                      size: "md",
                      text: b.intl.string(b.t.zrCzVB),
                      loading: p,
                      onClick: () => P(m.g.CONFIRM_DISCOUNT),
                  })
                : (0, r.jsxs)("div", {
                      className: y.qK,
                      children: [
                          (0, r.jsx)(i.m, {
                              text: n,
                              shouldShow: e && null != n,
                              asContainer: !0,
                              children: (0, r.jsx)(a.Button, {
                                  variant: "expressive",
                                  disabled: e,
                                  text: b.intl.string(b.t["dylp/7"]),
                                  size: "md",
                                  onClick: () => {
                                      (0, l.A)({
                                          analyticsLocations: R,
                                          analyticsLocation: _,
                                          analyticsObject: T,
                                          subscription: t,
                                      });
                                  },
                              }),
                          }),
                          (0, r.jsx)(a.Button, {
                              variant: "secondary",
                              size: "md",
                              text: b.intl.string(b.t["ETE/oC"]),
                              loading: p,
                              onClick: w,
                          }),
                      ],
                  });
        },
        x = f.Ay.getPlanIdFromInvoice(t, u),
        L = (0, h.ux)(null == S ? void 0 : S.expires_at);
    return (0, c.m1)(x)
        ? null
        : (0, r.jsx)("div", {
              className: y.S6,
              children: (0, r.jsx)(a.hLv, {
                  color: "nitro-pink",
                  className: y.YL,
                  children: (0, r.jsxs)("div", {
                      className: y.mK,
                      children: [
                          (0, r.jsxs)("div", {
                              className: y.Gp,
                              children: [
                                  (0, r.jsx)(d.A, {
                                      color: "currentcolor",
                                      className: y.fJ,
                                      "aria-label": b.intl.string(b.t.lpNrPu),
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      className: y.tD,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: null != S && L,
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", { className: y.T }),
                          (0, r.jsxs)("div", {
                              className: y.ly,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: y.Yc,
                                      children: [
                                          null != S
                                              ? (0, r.jsx)(N, {
                                                    discountOffer: S,
                                                    premiumSubscription: t,
                                                })
                                              : (0, r.jsx)(C, {
                                                    premiumSubscription: t,
                                                    discountInfo: null != g ? g : A,
                                                    invoicePreview: u,
                                                    isDiscountActive: null != g,
                                                }),
                                          (0, r.jsx)("div", {
                                              className: y.e_,
                                              children: D(),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)("img", {
                                      className: y.Hp,
                                      src: O,
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
