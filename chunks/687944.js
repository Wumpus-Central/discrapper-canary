var i = n(477900);
n(582128);
var l = n(534514),
    s = n(834730),
    r = n(192308),
    a = n(821609),
    o = n(403581),
    u = n(866665),
    c = n(315629),
    d = n(793574),
    m = n(688810),
    g = n(778705),
    A = n(832946),
    E = n(97352),
    h = n(392943),
    f = n(448645),
    p = n(580630),
    S = n(511484),
    T = n(811611),
    x = n(473702),
    I = n(682901),
    _ = n(652215),
    b = n(792996),
    y = n(858432),
    N = n(398932);
let C = { page: _.liQ.USER_SETTINGS, section: _.JJy.SETTINGS_PREMIUM, object: _.ZSU.CARD };
function v(e) {
    let { premiumSubscription: t, discountInfo: n, invoicePreview: r, isDiscountActive: a } = e,
        o = f.Ay.getPlanIdFromInvoice(t, r),
        u = E.A.get(o);
    if (null == u || null == r || null == n || null == n.duration || null == n.percentage) return null;
    let c = r.invoiceItems.find((e) => {
        let { subscriptionPlanId: t } = e;
        return t === u.id;
    });
    if (null == c) return null;
    let d = (0, p.$g)(c.amount, r.currency),
        m = (0, f.y8)(I.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        g = (0, p.$g)(m.amount, m.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: b.intl.format(b.t["50bA2I"], { percent: n.percentage }),
            }),
            (0, i.jsx)(s.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: a
                    ? b.intl.format(b.t["3ZiutU"], { percent: n.percentage, numMonths: n.duration, regularPrice: g })
                    : b.intl.format(b.t.N43FMx, {
                          numMonths: n.duration,
                          discountedPrice: d,
                          billingPeriod: b.intl.string(b.t.FPybU7),
                          fullPrice: g,
                      }),
            }),
        ],
    });
}
function j(e) {
    let { discountOffer: t, premiumSubscription: n } = e,
        r = (0, S.tQ)(n, I.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: b.intl.format(b.t.sFO20P, { percent: t.discount.amount }),
            }),
            (0, i.jsx)(s.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: b.intl.format(b.t["PH7Q+R"], {
                    numMonths: t.discount.intervalCount,
                    discountedPrice: r,
                    billingPeriod: (0, f.Ke)(t.discount.intervalType),
                }),
            }),
        ],
    });
}
function O(e, t) {
    let { analyticsLocations: l } = (0, m.Ay)(d.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER);
    function s(s) {
        (0, r.mM)(async () => {
            let { default: r } = await Promise.all([
                n.e(489361),
                n.e(216806),
                n.e(363094),
                n.e(162439),
                n.e(594161),
                n.e(435432),
                n.e(80347),
                n.e(52513),
            ]).then(n.bind(n, 336888));
            return (n) =>
                (0, i.jsx)(r, {
                    ...n,
                    premiumSubscription: e,
                    analyticsLocation: t,
                    analyticsLocations: l,
                    initialStep: s,
                });
        });
    }
    return {
        unsubscribe: function () {
            e.status !== _.Dmq.CANCELED && s();
        },
        showCancelModal: s,
        switchPlans: function () {
            (0, g.A)({ analyticsLocations: l, analyticsLocation: t, analyticsObject: C, subscription: e });
        },
    };
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    subscription: t,
                    invoicePreview: n,
                    isLoading: l,
                    analyticsLocation: r,
                    discountInfo: d,
                    renewalChurnDiscountInfo: m,
                    discountOffer: g,
                } = e,
                { unsubscribe: E, showCancelModal: p, switchPlans: S } = O(t, r),
                I = f.Ay.getPlanIdFromInvoice(t, n),
                _ = (0, T.ux)(g?.expiresAt?.toISOString());
            return (0, A.m1)(I)
                ? null
                : (0, i.jsx)("div", {
                      className: y.S6,
                      children: (0, i.jsx)(c.h, {
                          color: "nitro-pink",
                          className: y.YL,
                          children: (0, i.jsxs)("div", {
                              className: y.mK,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: y.Gp,
                                      children: [
                                          (0, i.jsx)(h.A, {
                                              color: "currentcolor",
                                              className: y.fJ,
                                              "aria-label": b.intl.string(b.t.lpNrPu),
                                          }),
                                          (0, i.jsx)(s.E, {
                                              className: y.tD,
                                              variant: "body-sm/medium",
                                              color: "text-strong",
                                              children: null != g && _,
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)("div", { className: y.T }),
                                  (0, i.jsxs)("div", {
                                      className: y.ly,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: y.Yc,
                                              children: [
                                                  null != g
                                                      ? (0, i.jsx)(j, { discountOffer: g, premiumSubscription: t })
                                                      : (0, i.jsx)(v, {
                                                            premiumSubscription: t,
                                                            discountInfo: d ?? m,
                                                            invoicePreview: n,
                                                            isDiscountActive: null != d,
                                                        }),
                                                  (0, i.jsx)("div", {
                                                      className: y.e_,
                                                      children: (function () {
                                                          let e = f.Ay.isSwitchingPlansDisabled(t),
                                                              n = f.Ay.getSwitchingPlansDisabledMessage(t);
                                                          if (!f.Ay.isBaseSubscriptionCanceled(t))
                                                              return (0, i.jsxs)("div", {
                                                                  className: y.qK,
                                                                  children: [
                                                                      (0, i.jsx)(u.m, {
                                                                          text: n,
                                                                          shouldShow: e && null != n,
                                                                          asContainer: !0,
                                                                          children: (0, i.jsx)(a.$, {
                                                                              variant: "overlay-primary",
                                                                              disabled: e,
                                                                              text: b.intl.string(b.t["dylp/7"]),
                                                                              size: "md",
                                                                              onClick: S,
                                                                          }),
                                                                      }),
                                                                      (0, i.jsx)(a.$, {
                                                                          variant: "secondary",
                                                                          size: "md",
                                                                          text: b.intl.string(b.t["ETE/oC"]),
                                                                          loading: l,
                                                                          onClick: E,
                                                                      }),
                                                                  ],
                                                              });
                                                          {
                                                              let e =
                                                                  null != g
                                                                      ? b.intl.format(b.t.XIVblY, {
                                                                            percent: g.discount.amount,
                                                                        })
                                                                      : b.intl.string(b.t.zrCzVB);
                                                              return (0, i.jsx)(a.$, {
                                                                  variant: "expressive",
                                                                  icon: o.NitroWheelIcon,
                                                                  size: "md",
                                                                  text: e,
                                                                  loading: l,
                                                                  onClick: () => p(x.g.CONFIRM_DISCOUNT),
                                                              });
                                                          }
                                                      })(),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)("img", { className: y.Hp, src: N.A, alt: "", draggable: !1 }),
                                      ],
                                  }),
                              ],
                          }),
                      }),
                  });
        },
        P: O,
    },
);
