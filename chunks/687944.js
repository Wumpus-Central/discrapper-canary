n.d(t, { A: () => v });
var i = n(627968);
n(64700);
var s = n(990078),
    l = n(397927),
    r = n(793574),
    a = n(688810),
    o = n(532794),
    d = n(832946),
    c = n(97352),
    u = n(392943),
    m = n(927578),
    g = n(580630),
    _ = n(511484),
    x = n(811611),
    h = n(473702),
    A = n(788868),
    p = n(652215),
    T = n(985018),
    f = n(657127),
    S = n(818724);
let E = { page: p.liQ.USER_SETTINGS, section: p.JJy.SETTINGS_PREMIUM, object: p.ZSU.CARD };
function b(e) {
    let { premiumSubscription: t, discountInfo: n, invoicePreview: s, isDiscountActive: r } = e,
        a = m.Ay.getPlanIdFromInvoice(t, s),
        o = c.A.get(a);
    if (null == o || null == s || null == n || null == n.duration || null == n.percentage) return null;
    let d = s.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === o.id;
    });
    if (null == d) return null;
    let u = (0, g.$g)(d.amount, s.currency),
        _ = (0, m.y8)(A.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        x = (0, g.$g)(_.amount, _.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: T.intl.format(T.t["50bA2I"], { percent: n.percentage }),
            }),
            (0, i.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: r
                    ? T.intl.format(T.t["3ZiutU"], { percent: n.percentage, numMonths: n.duration, regularPrice: x })
                    : T.intl.format(T.t.N43FMx, {
                          numMonths: n.duration,
                          discountedPrice: u,
                          billingPeriod: T.intl.string(T.t.FPybU7),
                          fullPrice: x,
                      }),
            }),
        ],
    });
}
function C(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        s = (0, _.tQ)(n, A.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: T.intl.format(T.t.sFO20P, { percent: t.discount.amount }),
            }),
            (0, i.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: T.intl.format(T.t["PH7Q+R"], {
                    numMonths: t.discount.user_usage_limit,
                    discountedPrice: s,
                    billingPeriod: (0, m.Ke)(t.discount.user_usage_limit_interval),
                }),
            }),
        ],
    });
}
let v = function (e) {
    let t,
        c,
        {
            subscription: g,
            invoicePreview: _,
            isLoading: A,
            analyticsLocation: v,
            discountInfo: N,
            renewalChurnDiscountInfo: I,
            discountOffer: j,
        } = e,
        { analyticsLocations: y } = (0, a.Ay)(r.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        O = (e) => {
            (0, l.mMO)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: t } = await Promise.all([
                    n.e("41353"),
                    n.e("35432"),
                    n.e("11108"),
                ]).then(n.bind(n, 281439));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        premiumSubscription: g,
                        analyticsLocation: v,
                        analyticsLocations: y,
                        initialStep: e,
                    });
            });
        },
        R = m.Ay.getPlanIdFromInvoice(g, _),
        L = (0, x.ux)(j?.expires_at);
    return (0, d.m1)(R)
        ? null
        : (0, i.jsx)("div", {
              className: f.S6,
              children: (0, i.jsx)(l.hLv, {
                  color: "nitro-pink",
                  className: f.YL,
                  children: (0, i.jsxs)("div", {
                      className: f.mK,
                      children: [
                          (0, i.jsxs)("div", {
                              className: f.Gp,
                              children: [
                                  (0, i.jsx)(u.A, {
                                      color: "currentcolor",
                                      className: f.fJ,
                                      "aria-label": T.intl.string(T.t.lpNrPu),
                                  }),
                                  (0, i.jsx)(l.Text, {
                                      className: f.tD,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: null != j && L,
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", { className: f.T }),
                          (0, i.jsxs)("div", {
                              className: f.ly,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: f.Yc,
                                      children: [
                                          null != j
                                              ? (0, i.jsx)(C, { discountOffer: j, premiumSubscription: g })
                                              : (0, i.jsx)(b, {
                                                    premiumSubscription: g,
                                                    discountInfo: N ?? I,
                                                    invoicePreview: _,
                                                    isDiscountActive: null != N,
                                                }),
                                          (0, i.jsx)("div", {
                                              className: f.e_,
                                              children:
                                                  ((t = m.Ay.isSwitchingPlansDisabled(g)),
                                                  (c = m.Ay.getSwitchingPlansDisabledMessage(g)),
                                                  m.Ay.isBaseSubscriptionCanceled(g)
                                                      ? (0, i.jsx)(l.Button, {
                                                            variant: "expressive",
                                                            icon: l.tvc,
                                                            size: "md",
                                                            text: T.intl.string(T.t.zrCzVB),
                                                            loading: A,
                                                            onClick: () => O(h.g.CONFIRM_DISCOUNT),
                                                        })
                                                      : (0, i.jsxs)("div", {
                                                            className: f.qK,
                                                            children: [
                                                                (0, i.jsx)(s.m, {
                                                                    text: c,
                                                                    shouldShow: t && null != c,
                                                                    asContainer: !0,
                                                                    children: (0, i.jsx)(l.Button, {
                                                                        variant: "expressive",
                                                                        disabled: t,
                                                                        text: T.intl.string(T.t["dylp/7"]),
                                                                        size: "md",
                                                                        onClick: () => {
                                                                            (0, o.A)({
                                                                                analyticsLocations: y,
                                                                                analyticsLocation: v,
                                                                                analyticsObject: E,
                                                                                subscription: g,
                                                                            });
                                                                        },
                                                                    }),
                                                                }),
                                                                (0, i.jsx)(l.Button, {
                                                                    variant: "secondary",
                                                                    size: "md",
                                                                    text: T.intl.string(T.t["ETE/oC"]),
                                                                    loading: A,
                                                                    onClick: () => {
                                                                        g.status !== p.Dmq.CANCELED && O();
                                                                    },
                                                                }),
                                                            ],
                                                        })),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)("img", { className: f.Hp, src: S, alt: "", draggable: !1 }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
};
