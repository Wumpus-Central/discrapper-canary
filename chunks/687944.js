n.d(t, { A: () => O });
var i = n(627968);
n(64700);
var s = n(990078),
    l = n(534514),
    a = n(834730),
    r = n(192308),
    o = n(821609),
    d = n(403581),
    u = n(315629),
    c = n(793574),
    g = n(688810),
    m = n(532794),
    _ = n(832946),
    A = n(97352),
    h = n(392943),
    p = n(927578),
    x = n(580630),
    E = n(511484),
    T = n(811611),
    S = n(473702),
    f = n(788868),
    b = n(652215),
    C = n(985018),
    v = n(657127),
    N = n(818724);
let I = { page: b.liQ.USER_SETTINGS, section: b.JJy.SETTINGS_PREMIUM, object: b.ZSU.CARD };
function y(e) {
    let { premiumSubscription: t, discountInfo: n, invoicePreview: s, isDiscountActive: r } = e,
        o = p.Ay.getPlanIdFromInvoice(t, s),
        d = A.A.get(o);
    if (null == d || null == s || null == n || null == n.duration || null == n.percentage) return null;
    let u = s.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === d.id;
    });
    if (null == u) return null;
    let c = (0, x.$g)(u.amount, s.currency),
        g = (0, p.y8)(f.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        m = (0, x.$g)(g.amount, g.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.D, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: C.intl.format(C.t["50bA2I"], { percent: n.percentage }),
            }),
            (0, i.jsx)(a.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: r
                    ? C.intl.format(C.t["3ZiutU"], { percent: n.percentage, numMonths: n.duration, regularPrice: m })
                    : C.intl.format(C.t.N43FMx, {
                          numMonths: n.duration,
                          discountedPrice: c,
                          billingPeriod: C.intl.string(C.t.FPybU7),
                          fullPrice: m,
                      }),
            }),
        ],
    });
}
function j(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        s = (0, E.tQ)(n, f.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.D, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: C.intl.format(C.t.sFO20P, { percent: t.discount.amount }),
            }),
            (0, i.jsx)(a.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: C.intl.format(C.t["PH7Q+R"], {
                    numMonths: t.discount.user_usage_limit,
                    discountedPrice: s,
                    billingPeriod: (0, p.Ke)(t.discount.user_usage_limit_interval),
                }),
            }),
        ],
    });
}
let O = function (e) {
    let t,
        l,
        {
            subscription: A,
            invoicePreview: x,
            isLoading: E,
            analyticsLocation: f,
            discountInfo: O,
            renewalChurnDiscountInfo: R,
            discountOffer: L,
        } = e,
        { analyticsLocations: D } = (0, g.Ay)(c.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        P = (e) => {
            (0, r.openModalLazy)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: t } = await Promise.all([
                    n.e("41353"),
                    n.e("35432"),
                    n.e("94133"),
                ]).then(n.bind(n, 281439));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        premiumSubscription: A,
                        analyticsLocation: f,
                        analyticsLocations: D,
                        initialStep: e,
                    });
            });
        },
        G = p.Ay.getPlanIdFromInvoice(A, x),
        M = (0, T.ux)(L?.expires_at);
    return (0, _.m1)(G)
        ? null
        : (0, i.jsx)("div", {
              className: v.S6,
              children: (0, i.jsx)(u.h, {
                  color: "nitro-pink",
                  className: v.YL,
                  children: (0, i.jsxs)("div", {
                      className: v.mK,
                      children: [
                          (0, i.jsxs)("div", {
                              className: v.Gp,
                              children: [
                                  (0, i.jsx)(h.A, {
                                      color: "currentcolor",
                                      className: v.fJ,
                                      "aria-label": C.intl.string(C.t.lpNrPu),
                                  }),
                                  (0, i.jsx)(a.E, {
                                      className: v.tD,
                                      variant: "text-sm/medium",
                                      color: "text-strong",
                                      children: null != L && M,
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", { className: v.T }),
                          (0, i.jsxs)("div", {
                              className: v.ly,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: v.Yc,
                                      children: [
                                          null != L
                                              ? (0, i.jsx)(j, { discountOffer: L, premiumSubscription: A })
                                              : (0, i.jsx)(y, {
                                                    premiumSubscription: A,
                                                    discountInfo: O ?? R,
                                                    invoicePreview: x,
                                                    isDiscountActive: null != O,
                                                }),
                                          (0, i.jsx)("div", {
                                              className: v.e_,
                                              children:
                                                  ((t = p.Ay.isSwitchingPlansDisabled(A)),
                                                  (l = p.Ay.getSwitchingPlansDisabledMessage(A)),
                                                  p.Ay.isBaseSubscriptionCanceled(A)
                                                      ? (0, i.jsx)(o.$, {
                                                            variant: "expressive",
                                                            icon: d.t,
                                                            size: "md",
                                                            text: C.intl.string(C.t.zrCzVB),
                                                            loading: E,
                                                            onClick: () => P(S.g.CONFIRM_DISCOUNT),
                                                        })
                                                      : (0, i.jsxs)("div", {
                                                            className: v.qK,
                                                            children: [
                                                                (0, i.jsx)(s.m, {
                                                                    text: l,
                                                                    shouldShow: t && null != l,
                                                                    asContainer: !0,
                                                                    children: (0, i.jsx)(o.$, {
                                                                        variant: "expressive",
                                                                        disabled: t,
                                                                        text: C.intl.string(C.t["dylp/7"]),
                                                                        size: "md",
                                                                        onClick: () => {
                                                                            (0, m.A)({
                                                                                analyticsLocations: D,
                                                                                analyticsLocation: f,
                                                                                analyticsObject: I,
                                                                                subscription: A,
                                                                            });
                                                                        },
                                                                    }),
                                                                }),
                                                                (0, i.jsx)(o.$, {
                                                                    variant: "secondary",
                                                                    size: "md",
                                                                    text: C.intl.string(C.t["ETE/oC"]),
                                                                    loading: E,
                                                                    onClick: () => {
                                                                        A.status !== b.Dmq.CANCELED && P();
                                                                    },
                                                                }),
                                                            ],
                                                        })),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)("img", { className: v.Hp, src: N, alt: "", draggable: !1 }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
};
