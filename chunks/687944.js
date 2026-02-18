n.d(t, { A: () => N });
var i = n(627968);
n(64700);
var s = n(990078),
    a = n(397927),
    l = n(793574),
    r = n(688810),
    o = n(532794),
    c = n(832946),
    d = n(97352),
    u = n(392943),
    _ = n(927578),
    m = n(580630),
    A = n(511484),
    g = n(811611),
    h = n(473702),
    x = n(788868),
    p = n(652215),
    E = n(985018),
    C = n(424850),
    T = n(818724);
let S = { page: p.liQ.USER_SETTINGS, section: p.JJy.SETTINGS_PREMIUM, object: p.ZSU.CARD };
function I(e) {
    let { premiumSubscription: t, discountInfo: n, invoicePreview: s, isDiscountActive: l } = e,
        r = _.Ay.getPlanIdFromInvoice(t, s),
        o = d.A.get(r);
    if (null == o || null == s || null == n || null == n.duration || null == n.percentage) return null;
    let c = s.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === o.id;
    });
    if (null == c) return null;
    let u = (0, m.$g)(c.amount, s.currency),
        A = (0, _.y8)(x.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        g = (0, m.$g)(A.amount, A.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: E.intl.format(E.t["50bA2I"], { percent: n.percentage }),
            }),
            (0, i.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: l
                    ? E.intl.format(E.t["3ZiutU"], { percent: n.percentage, numMonths: n.duration, regularPrice: g })
                    : E.intl.format(E.t.N43FMx, {
                          numMonths: n.duration,
                          discountedPrice: u,
                          billingPeriod: E.intl.string(E.t.FPybU7),
                          fullPrice: g,
                      }),
            }),
        ],
    });
}
function f(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        s = (0, A.tQ)(n, x.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: E.intl.format(E.t.sFO20P, { percent: t.discount.amount }),
            }),
            (0, i.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: E.intl.format(E.t["PH7Q+R"], {
                    numMonths: t.discount.user_usage_limit,
                    discountedPrice: s,
                    billingPeriod: (0, _.Ke)(t.discount.user_usage_limit_interval),
                }),
            }),
        ],
    });
}
let N = function (e) {
    let t,
        d,
        {
            subscription: m,
            invoicePreview: A,
            isLoading: x,
            analyticsLocation: N,
            discountInfo: b,
            renewalChurnDiscountInfo: j,
            discountOffer: v,
        } = e,
        { analyticsLocations: O } = (0, r.Ay)(l.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        R = (e) => {
            (0, a.mMO)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: t } = await Promise.all([
                    n.e("41353"),
                    n.e("35432"),
                    n.e("82383"),
                ]).then(n.bind(n, 281439));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        premiumSubscription: m,
                        analyticsLocation: N,
                        analyticsLocations: O,
                        initialStep: e,
                    });
            });
        },
        y = _.Ay.getPlanIdFromInvoice(m, A),
        P = (0, g.ux)(v?.expires_at);
    return (0, c.m1)(y)
        ? null
        : (0, i.jsx)("div", {
              className: C.S6,
              children: (0, i.jsx)(a.hLv, {
                  color: "nitro-pink",
                  className: C.YL,
                  children: (0, i.jsxs)("div", {
                      className: C.mK,
                      children: [
                          (0, i.jsxs)("div", {
                              className: C.Gp,
                              children: [
                                  (0, i.jsx)(u.A, {
                                      color: "currentcolor",
                                      className: C.fJ,
                                      "aria-label": E.intl.string(E.t.lpNrPu),
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      className: C.tD,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: null != v && P,
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", { className: C.T }),
                          (0, i.jsxs)("div", {
                              className: C.ly,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: C.Yc,
                                      children: [
                                          null != v
                                              ? (0, i.jsx)(f, { discountOffer: v, premiumSubscription: m })
                                              : (0, i.jsx)(I, {
                                                    premiumSubscription: m,
                                                    discountInfo: b ?? j,
                                                    invoicePreview: A,
                                                    isDiscountActive: null != b,
                                                }),
                                          (0, i.jsx)("div", {
                                              className: C.e_,
                                              children:
                                                  ((t = _.Ay.isSwitchingPlansDisabled(m)),
                                                  (d = _.Ay.getSwitchingPlansDisabledMessage(m)),
                                                  _.Ay.isBaseSubscriptionCanceled(m)
                                                      ? (0, i.jsx)(a.Button, {
                                                            variant: "expressive",
                                                            icon: a.tvc,
                                                            size: "md",
                                                            text: E.intl.string(E.t.zrCzVB),
                                                            loading: x,
                                                            onClick: () => R(h.g.CONFIRM_DISCOUNT),
                                                        })
                                                      : (0, i.jsxs)("div", {
                                                            className: C.qK,
                                                            children: [
                                                                (0, i.jsx)(s.m, {
                                                                    text: d,
                                                                    shouldShow: t && null != d,
                                                                    asContainer: !0,
                                                                    children: (0, i.jsx)(a.Button, {
                                                                        variant: "expressive",
                                                                        disabled: t,
                                                                        text: E.intl.string(E.t["dylp/7"]),
                                                                        size: "md",
                                                                        onClick: () => {
                                                                            (0, o.A)({
                                                                                analyticsLocations: O,
                                                                                analyticsLocation: N,
                                                                                analyticsObject: S,
                                                                                subscription: m,
                                                                            });
                                                                        },
                                                                    }),
                                                                }),
                                                                (0, i.jsx)(a.Button, {
                                                                    variant: "secondary",
                                                                    size: "md",
                                                                    text: E.intl.string(E.t["ETE/oC"]),
                                                                    loading: x,
                                                                    onClick: () => {
                                                                        m.status !== p.Dmq.CANCELED && R();
                                                                    },
                                                                }),
                                                            ],
                                                        })),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)("img", { className: C.Hp, src: T, alt: "", draggable: !1 }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
};
