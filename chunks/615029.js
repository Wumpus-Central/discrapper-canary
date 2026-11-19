var i = n(477900);
n(582128);
var l = n(534514),
    s = n(834730),
    r = n(192308),
    a = n(315629),
    o = n(866665),
    u = n(821609),
    c = n(793574),
    d = n(688810),
    m = n(778705),
    g = n(832946),
    A = n(392943),
    E = n(448645),
    h = n(580630),
    f = n(682901),
    p = n(652215),
    S = n(792996),
    T = n(267023),
    x = n(907970);
let I = { page: p.liQ.USER_SETTINGS, section: p.JJy.SETTINGS_PREMIUM, object: p.ZSU.CARD };
function _(e) {
    let { premiumSubscription: t, discountInfo: n } = e;
    if (null == n.duration || null == n.percentage) return null;
    let r = (0, E.y8)(f.gD.PREMIUM_MONTH_TIER_2, !1, !1, { currency: t.currency, paymentSourceId: t.paymentSourceId }),
        a = (0, h.$g)(r.amount, r.currency),
        o = Math.round(r.amount * (1 - n.percentage / 100)),
        u = (0, h.$g)(o, r.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.D, {
                variant: "heading-xl/medium",
                color: "text-strong",
                children: S.intl.string(S.t["53BCd6"]),
            }),
            (0, i.jsx)(s.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: S.intl.format(S.t.N43FMx, {
                    numMonths: n.duration,
                    discountedPrice: u,
                    billingPeriod: S.intl.string(S.t.FPybU7),
                    fullPrice: a,
                }),
            }),
        ],
    });
}
function b(e, t) {
    let { analyticsLocations: l } = (0, d.Ay)(c.A.REFERRAL_INCENTIVE_DISCOUNT_SUBSCRIPTION_HEADER);
    return {
        unsubscribe: function () {
            e.status !== p.Dmq.CANCELED &&
                (0, r.mM)(async () => {
                    let { default: s } = await Promise.all([
                        n.e(489361),
                        n.e(216806),
                        n.e(363094),
                        n.e(384820),
                        n.e(594161),
                        n.e(435432),
                        n.e(80347),
                        n.e(52513),
                    ]).then(n.bind(n, 336888));
                    return (n) =>
                        (0, i.jsx)(s, {
                            ...n,
                            premiumSubscription: e,
                            analyticsLocation: t,
                            analyticsLocations: l,
                            initialStep: void 0,
                        });
                });
        },
        switchPlans: function () {
            (0, m.A)({ analyticsLocations: l, analyticsLocation: t, analyticsObject: I, subscription: e });
        },
    };
}
n.d(
    t,
    {},
    {
        A: function (e) {
            var t;
            let { subscription: n, invoicePreview: l, isLoading: r, discountInfo: c, analyticsLocation: d } = e,
                { unsubscribe: m, switchPlans: h } = b(n, d),
                f = E.Ay.getPlanIdFromInvoice(n, l);
            if ((0, g.m1)(f)) return null;
            let p = E.Ay.isSwitchingPlansDisabled(n),
                I = E.Ay.getSwitchingPlansDisabledMessage(n),
                C =
                    null == (t = n.metadata?.active_discount_expires_at)
                        ? null
                        : S.intl.formatToPlainString(S.t.u8bQ1q, { expiryDate: new Date(t) });
            return (0, i.jsx)("div", {
                className: T.b8,
                children: (0, i.jsx)(a.h, {
                    color: "nitro-pink",
                    className: T.YL,
                    children: (0, i.jsxs)("div", {
                        className: T.vK,
                        children: [
                            (0, i.jsxs)("div", {
                                className: T.Gp,
                                children: [
                                    (0, i.jsx)(A.A, {
                                        color: "currentcolor",
                                        className: T.Ss,
                                        "aria-label": S.intl.string(S.t.lpNrPu),
                                    }),
                                    (0, i.jsx)(s.E, {
                                        className: T.Sd,
                                        variant: "body-sm/medium",
                                        color: "text-strong",
                                        children: C,
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", { className: T.yF }),
                            (0, i.jsxs)("div", {
                                className: T.IH,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: T.Tm,
                                        children: [
                                            (0, i.jsx)(_, { premiumSubscription: n, discountInfo: c }),
                                            (0, i.jsx)("div", {
                                                className: T.Xc,
                                                children: (0, i.jsxs)("div", {
                                                    className: T.qK,
                                                    children: [
                                                        (0, i.jsx)(o.m, {
                                                            text: I,
                                                            shouldShow: p && null != I,
                                                            asContainer: !0,
                                                            children: (0, i.jsx)(u.$, {
                                                                variant: "expressive",
                                                                disabled: p,
                                                                text: S.intl.string(S.t["dylp/7"]),
                                                                size: "md",
                                                                onClick: h,
                                                            }),
                                                        }),
                                                        (0, i.jsx)(u.$, {
                                                            variant: "secondary",
                                                            size: "md",
                                                            text: S.intl.string(S.t["ETE/oC"]),
                                                            loading: r,
                                                            onClick: m,
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)("img", { className: T._e, src: x.A, alt: "", draggable: !1 }),
                                ],
                            }),
                        ],
                    }),
                }),
            });
        },
        C: b,
    },
);
