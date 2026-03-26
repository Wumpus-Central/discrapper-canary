n.d(t, { A: () => v });
var i = n(627968);
n(64700);
var s = n(990078),
    l = n(397927),
    a = n(793574),
    r = n(688810),
    o = n(532794),
    d = n(832946),
    c = n(97352),
    u = n(392943),
    m = n(927578),
    _ = n(580630),
    g = n(511484),
    x = n(811611),
    A = n(473702),
    h = n(788868),
    p = n(652215),
    f = n(985018),
    T = n(81431),
    S = n(818724);
let E = { page: p.liQ.USER_SETTINGS, section: p.JJy.SETTINGS_PREMIUM, object: p.ZSU.CARD };
function b(e) {
    let { premiumSubscription: t, discountInfo: n, invoicePreview: s, isDiscountActive: a } = e,
        r = m.Ay.getPlanIdFromInvoice(t, s),
        o = c.A.get(r);
    if (null == o || null == s || null == n || null == n.duration || null == n.percentage) return null;
    let d = s.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === o.id;
    });
    if (null == d) return null;
    let u = (0, _.$g)(d.amount, s.currency),
        g = (0, m.y8)(h.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        x = (0, _.$g)(g.amount, g.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: f.intl.format(f.t["50bA2I"], { percent: n.percentage }),
            }),
            (0, i.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: a
                    ? f.intl.format(f.t["3ZiutU"], { percent: n.percentage, numMonths: n.duration, regularPrice: x })
                    : f.intl.format(f.t.N43FMx, {
                          numMonths: n.duration,
                          discountedPrice: u,
                          billingPeriod: f.intl.string(f.t.FPybU7),
                          fullPrice: x,
                      }),
            }),
        ],
    });
}
function C(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        s = (0, g.tQ)(n, h.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: f.intl.format(f.t.sFO20P, { percent: t.discount.amount }),
            }),
            (0, i.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: f.intl.format(f.t["PH7Q+R"], {
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
            subscription: _,
            invoicePreview: g,
            isLoading: h,
            analyticsLocation: v,
            discountInfo: N,
            renewalChurnDiscountInfo: I,
            discountOffer: j,
        } = e,
        { analyticsLocations: y } = (0, r.Ay)(a.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        O = (e) => {
            (0, l.mMO)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: t } = await Promise.all([
                    n.e("41353"),
                    n.e("35432"),
                    n.e("39612"),
                ]).then(n.bind(n, 281439));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        premiumSubscription: _,
                        analyticsLocation: v,
                        analyticsLocations: y,
                        initialStep: e,
                    });
            });
        },
        R = m.Ay.getPlanIdFromInvoice(_, g),
        L = (0, x.ux)(j?.expires_at);
    return (0, d.m1)(R)
        ? null
        : (0, i.jsx)("div", {
              className: T.S6,
              children: (0, i.jsx)(l.hLv, {
                  color: "nitro-pink",
                  className: T.YL,
                  children: (0, i.jsxs)("div", {
                      className: T.mK,
                      children: [
                          (0, i.jsxs)("div", {
                              className: T.Gp,
                              children: [
                                  (0, i.jsx)(u.A, {
                                      color: "currentcolor",
                                      className: T.fJ,
                                      "aria-label": f.intl.string(f.t.lpNrPu),
                                  }),
                                  (0, i.jsx)(l.Text, {
                                      className: T.tD,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: null != j && L,
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", { className: T.T }),
                          (0, i.jsxs)("div", {
                              className: T.ly,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: T.Yc,
                                      children: [
                                          null != j
                                              ? (0, i.jsx)(C, { discountOffer: j, premiumSubscription: _ })
                                              : (0, i.jsx)(b, {
                                                    premiumSubscription: _,
                                                    discountInfo: N ?? I,
                                                    invoicePreview: g,
                                                    isDiscountActive: null != N,
                                                }),
                                          (0, i.jsx)("div", {
                                              className: T.e_,
                                              children:
                                                  ((t = m.Ay.isSwitchingPlansDisabled(_)),
                                                  (c = m.Ay.getSwitchingPlansDisabledMessage(_)),
                                                  m.Ay.isBaseSubscriptionCanceled(_)
                                                      ? (0, i.jsx)(l.Button, {
                                                            variant: "expressive",
                                                            icon: l.tvc,
                                                            size: "md",
                                                            text: f.intl.string(f.t.zrCzVB),
                                                            loading: h,
                                                            onClick: () => O(A.g.CONFIRM_DISCOUNT),
                                                        })
                                                      : (0, i.jsxs)("div", {
                                                            className: T.qK,
                                                            children: [
                                                                (0, i.jsx)(s.m, {
                                                                    text: c,
                                                                    shouldShow: t && null != c,
                                                                    asContainer: !0,
                                                                    children: (0, i.jsx)(l.Button, {
                                                                        variant: "expressive",
                                                                        disabled: t,
                                                                        text: f.intl.string(f.t["dylp/7"]),
                                                                        size: "md",
                                                                        onClick: () => {
                                                                            (0, o.A)({
                                                                                analyticsLocations: y,
                                                                                analyticsLocation: v,
                                                                                analyticsObject: E,
                                                                                subscription: _,
                                                                            });
                                                                        },
                                                                    }),
                                                                }),
                                                                (0, i.jsx)(l.Button, {
                                                                    variant: "secondary",
                                                                    size: "md",
                                                                    text: f.intl.string(f.t["ETE/oC"]),
                                                                    loading: h,
                                                                    onClick: () => {
                                                                        _.status !== p.Dmq.CANCELED && O();
                                                                    },
                                                                }),
                                                            ],
                                                        })),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)("img", { className: T.Hp, src: S, alt: "", draggable: !1 }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
};
