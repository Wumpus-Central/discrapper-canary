n.d(t, { A: () => N });
var i = n(627968);
n(64700);
var s = n(990078),
    r = n(397927),
    a = n(793574),
    l = n(688810),
    o = n(532794),
    c = n(832946),
    d = n(97352),
    u = n(392943),
    _ = n(927578),
    m = n(580630),
    A = n(511484),
    g = n(811611),
    E = n(473702),
    h = n(788868),
    p = n(652215),
    C = n(985018),
    x = n(424850),
    T = n(818724);
let I = { page: p.liQ.USER_SETTINGS, section: p.JJy.SETTINGS_PREMIUM, object: p.ZSU.CARD };
function S(e) {
    let { premiumSubscription: t, discountInfo: n, invoicePreview: s, isDiscountActive: a } = e,
        l = _.Ay.getPlanIdFromInvoice(t, s),
        o = d.A.get(l);
    if (null == o || null == s || null == n || null == n.duration || null == n.percentage) return null;
    let c = s.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === o.id;
    });
    if (null == c) return null;
    let u = (0, m.$g)(c.amount, s.currency),
        A = (0, _.y8)(h.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        g = (0, m.$g)(A.amount, A.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: C.intl.format(C.t["50bA2I"], { percent: n.percentage }),
            }),
            (0, i.jsx)(r.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: a
                    ? C.intl.format(C.t["3ZiutU"], { percent: n.percentage, numMonths: n.duration, regularPrice: g })
                    : C.intl.format(C.t.N43FMx, {
                          numMonths: n.duration,
                          discountedPrice: u,
                          billingPeriod: C.intl.string(C.t.FPybU7),
                          fullPrice: g,
                      }),
            }),
        ],
    });
}
function f(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        s = (0, A.tQ)(n, h.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: C.intl.format(C.t.sFO20P, { percent: t.discount.amount }),
            }),
            (0, i.jsx)(r.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: C.intl.format(C.t["PH7Q+R"], {
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
            isLoading: h,
            analyticsLocation: N,
            discountInfo: b,
            renewalChurnDiscountInfo: R,
            discountOffer: v,
        } = e,
        { analyticsLocations: O } = (0, l.Ay)(a.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        j = (e) => {
            (0, r.mMO)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: t } = await n
                    .e("72820")
                    .then(n.bind(n, 281439));
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
        P = _.Ay.getPlanIdFromInvoice(m, A),
        y = (0, g.ux)(v?.expires_at);
    return (0, c.m1)(P)
        ? null
        : (0, i.jsx)("div", {
              className: x.S6,
              children: (0, i.jsx)(r.hLv, {
                  color: "nitro-pink",
                  className: x.YL,
                  children: (0, i.jsxs)("div", {
                      className: x.mK,
                      children: [
                          (0, i.jsxs)("div", {
                              className: x.Gp,
                              children: [
                                  (0, i.jsx)(u.A, {
                                      color: "currentcolor",
                                      className: x.fJ,
                                      "aria-label": C.intl.string(C.t.lpNrPu),
                                  }),
                                  (0, i.jsx)(r.Text, {
                                      className: x.tD,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: null != v && y,
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", { className: x.T }),
                          (0, i.jsxs)("div", {
                              className: x.ly,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: x.Yc,
                                      children: [
                                          null != v
                                              ? (0, i.jsx)(f, { discountOffer: v, premiumSubscription: m })
                                              : (0, i.jsx)(S, {
                                                    premiumSubscription: m,
                                                    discountInfo: b ?? R,
                                                    invoicePreview: A,
                                                    isDiscountActive: null != b,
                                                }),
                                          (0, i.jsx)("div", {
                                              className: x.e_,
                                              children:
                                                  ((t = _.Ay.isSwitchingPlansDisabled(m)),
                                                  (d = _.Ay.getSwitchingPlansDisabledMessage(m)),
                                                  _.Ay.isBaseSubscriptionCanceled(m)
                                                      ? (0, i.jsx)(r.Button, {
                                                            variant: "expressive",
                                                            icon: r.tvc,
                                                            size: "md",
                                                            text: C.intl.string(C.t.zrCzVB),
                                                            loading: h,
                                                            onClick: () => j(E.g.CONFIRM_DISCOUNT),
                                                        })
                                                      : (0, i.jsxs)("div", {
                                                            className: x.qK,
                                                            children: [
                                                                (0, i.jsx)(s.m, {
                                                                    text: d,
                                                                    shouldShow: t && null != d,
                                                                    asContainer: !0,
                                                                    children: (0, i.jsx)(r.Button, {
                                                                        variant: "expressive",
                                                                        disabled: t,
                                                                        text: C.intl.string(C.t["dylp/7"]),
                                                                        size: "md",
                                                                        onClick: () => {
                                                                            (0, o.A)({
                                                                                analyticsLocations: O,
                                                                                analyticsLocation: N,
                                                                                analyticsObject: I,
                                                                                subscription: m,
                                                                            });
                                                                        },
                                                                    }),
                                                                }),
                                                                (0, i.jsx)(r.Button, {
                                                                    variant: "secondary",
                                                                    size: "md",
                                                                    text: C.intl.string(C.t["ETE/oC"]),
                                                                    loading: h,
                                                                    onClick: () => {
                                                                        m.status !== p.Dmq.CANCELED && j();
                                                                    },
                                                                }),
                                                            ],
                                                        })),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)("img", { className: x.Hp, src: T, alt: "", draggable: !1 }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
};
