n.d(t, { k: () => g }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(481060),
    l = n(821849),
    s = n(45474),
    o = n(146528),
    c = n(246992),
    d = n(237012),
    u = n(729154),
    m = n(981631),
    h = n(362786),
    p = n(474936),
    x = n(231338);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = () => {
        let [e, t] = r.useState(p.p9.TIER_0),
            [n, g] = r.useState(s.R.WHAT_YOU_LOSE),
            [v, _] = r.useState(null),
            [y, C] = r.useState(p.Xh.PREMIUM_MONTH_TIER_0),
            [E, N] = r.useState([]),
            [S, O] = r.useState(() => {
                let e = new Date();
                return e.setMonth(e.getMonth() + 1), e;
            }),
            [T, P] = r.useState(null),
            [k, R] = r.useState(!1),
            [I, w] = r.useState(!1),
            [A, Z] = r.useState(!1);
        (0, r.useEffect)(() => {
            (0, l.Y2)();
        }, []),
            (0, r.useEffect)(() => {
                let e = new Date();
                switch (y) {
                    case p.Xh.PREMIUM_MONTH_TIER_0:
                    case p.Xh.PREMIUM_MONTH_TIER_1:
                    case p.Xh.PREMIUM_MONTH_TIER_2:
                        e.setMonth(e.getMonth() + 1);
                        break;
                    case p.Xh.PREMIUM_YEAR_TIER_0:
                    case p.Xh.PREMIUM_YEAR_TIER_1:
                    case p.Xh.PREMIUM_YEAR_TIER_2:
                        e.setFullYear(e.getFullYear() + 1);
                }
                O(e);
            }, [y]),
            (0, r.useEffect)(() => {
                switch (e) {
                    case p.p9.TIER_0:
                        N([
                            {
                                label: "Nitro Basic Monthly",
                                value: p.Xh.PREMIUM_MONTH_TIER_0,
                            },
                            {
                                label: "Nitro Basic Yearly",
                                value: p.Xh.PREMIUM_YEAR_TIER_0,
                            },
                        ]),
                            C(p.Xh.PREMIUM_MONTH_TIER_0);
                        break;
                    case p.p9.TIER_1:
                        N([
                            {
                                label: "Nitro Classic Monthly",
                                value: p.Xh.PREMIUM_MONTH_TIER_1,
                            },
                            {
                                label: "Nitro Classic Yearly",
                                value: p.Xh.PREMIUM_YEAR_TIER_1,
                            },
                        ]),
                            C(p.Xh.PREMIUM_MONTH_TIER_1);
                        break;
                    case p.p9.TIER_2:
                        N([
                            {
                                label: "Nitro Monthly",
                                value: p.Xh.PREMIUM_MONTH_TIER_2,
                            },
                            {
                                label: "Nitro Yearly",
                                value: p.Xh.PREMIUM_YEAR_TIER_2,
                            },
                        ]),
                            C(p.Xh.PREMIUM_MONTH_TIER_2);
                }
            }, [e]),
            (0, r.useEffect)(() => {
                [s.R.CONFIRM_DISCOUNT, s.R.DISCOUNT_APPLIED].includes(n) && null === v && _(j()),
                    n === s.R.PREVIEW &&
                        null === T &&
                        P(
                            new o.Z({
                                id: "",
                                invoiceItems: [
                                    {
                                        id: "",
                                        subscriptionPlanId: y,
                                        subscriptionPlanPrice: 200,
                                        amount: 400,
                                        quantity: 1,
                                        discounts: [],
                                    },
                                    {
                                        id: "",
                                        subscriptionPlanId: p.Xh.PREMIUM_MONTH_GUILD,
                                        subscriptionPlanPrice: 400,
                                        amount: 100,
                                        quantity: 1,
                                        discounts: [],
                                    },
                                ],
                                total: 200,
                                currency: x.pK.USD,
                                tax: 0,
                                taxInclusive: !0,
                                subscriptionPeriodStart: new Date(),
                                subscriptionPeriodEnd: S,
                                status: m.hUK.PAID,
                            }),
                        ),
                    n !== s.R.PREVIEW && null !== T && P(null);
            }, [n, v, S, y, T]);
        let D = r.useCallback(async () => {
            Z(!0),
                await (0, i.ZDy)(
                    async () => (t) =>
                        (0, a.jsx)(
                            u.x,
                            b(f({}, t), {
                                onClose: () => {
                                    t.onClose(), Z(!1);
                                },
                                premiumType: e,
                                churnDiscount: v,
                                planId: y,
                                renewalInvoice: T,
                                renewalInvoiceDetails: {
                                    intervalType: p.rV.MONTH,
                                    intervalCount: 1,
                                },
                                errorOnCancel: k,
                                errorOnRedeem: I,
                                setActiveStep: (e) => {
                                    g(e), t.onClose();
                                },
                                activeStep: n,
                                premiumSubscription: {
                                    id: "",
                                    planId: y,
                                    type: x.NY.PREMIUM,
                                    items: [],
                                    createdAt: new Date(),
                                    canceledAt: null,
                                    currentPeriodStart: new Date(),
                                    currentPeriodEnd: S,
                                    status: m.O0b.ACTIVE,
                                    paymentSourceId: null,
                                    paymentGateway: null,
                                    paymentGatewayPlanId: null,
                                    paymentGatewaySubscriptionId: null,
                                    trialId: null,
                                    trialEndsAt: null,
                                    renewalMutations: null,
                                    streakStartedAt: null,
                                    currency: x.pK.USD,
                                    pauseEndsAt: null,
                                    pauseReason: h.Id.UNKNOWN,
                                },
                            }),
                        ),
                );
        }, [e, v, y, T, k, I, n, S]);
        return (
            (0, r.useEffect)(() => {
                A && D();
            }, [n, A, D]),
            (0, a.jsxs)(d.$0, {
                children: [
                    (0, a.jsx)(i.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Cancellation Flow",
                    }),
                    (0, a.jsxs)(d.pg, {
                        children: [
                            (0, a.jsxs)(d.BZ, {
                                children: [
                                    (0, a.jsx)(i.Text, {
                                        variant: "text-md/semibold",
                                        children: "Premium Subscription",
                                    }),
                                    (0, a.jsx)(i.PhF, {
                                        placeholder: "Premium Type",
                                        select: (e) => {
                                            t(e);
                                        },
                                        isSelected: (t) => e === t,
                                        serialize: (e) => "".concat(e),
                                        options: [
                                            {
                                                label: "Nitro Basic",
                                                value: p.p9.TIER_0,
                                            },
                                            {
                                                label: "Nitro Classic",
                                                value: p.p9.TIER_1,
                                            },
                                            {
                                                label: "Nitro",
                                                value: p.p9.TIER_2,
                                            },
                                        ],
                                        popoutLayerContext: c.O$,
                                    }),
                                ],
                            }),
                            E.length > 0 &&
                                (0, a.jsxs)(d.BZ, {
                                    children: [
                                        (0, a.jsx)(i.Text, {
                                            variant: "text-md/semibold",
                                            children: "Subscription Interval",
                                        }),
                                        (0, a.jsx)(i.PhF, {
                                            placeholder: "Premium Type",
                                            select: (e) => {
                                                C(e);
                                            },
                                            isSelected: (e) => y === e,
                                            serialize: (e) => e,
                                            options: E,
                                            popoutLayerContext: c.O$,
                                        }),
                                    ],
                                }),
                            (0, a.jsxs)(d.BZ, {
                                children: [
                                    (0, a.jsx)(i.Text, {
                                        variant: "text-md/semibold",
                                        children: "Modal Step",
                                    }),
                                    (0, a.jsx)(i.PhF, {
                                        placeholder: "Premium Type",
                                        select: (e) => {
                                            g(e);
                                        },
                                        isSelected: (e) => n === e,
                                        serialize: (e) => "".concat(e),
                                        options: [
                                            {
                                                label: "What You Lose",
                                                value: s.R.WHAT_YOU_LOSE,
                                            },
                                            {
                                                label: "Confirm Discount",
                                                value: s.R.CONFIRM_DISCOUNT,
                                            },
                                            {
                                                label: "Discount Applied",
                                                value: s.R.DISCOUNT_APPLIED,
                                            },
                                            {
                                                label: "Confirm Cancel",
                                                value: s.R.CONFIRM,
                                            },
                                            {
                                                label: "Preview Invoice",
                                                value: s.R.PREVIEW,
                                            },
                                        ],
                                        popoutLayerContext: c.O$,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(d.BZ, {
                                children: (0, a.jsx)(i.XZJ, {
                                    checked: null !== v,
                                    onChange: () => {
                                        if (null === v) return void _(j());
                                        _(null);
                                    },
                                    label: "Churn Discount",
                                }),
                            }),
                            (0, a.jsx)(d.BZ, {
                                children: (0, a.jsx)(i.XZJ, {
                                    checked: I,
                                    onChange: () => {
                                        w(!I);
                                    },
                                    label: "Error on Redeem Offer",
                                }),
                            }),
                            (0, a.jsx)(d.BZ, {
                                children: (0, a.jsx)(i.XZJ, {
                                    checked: k,
                                    onChange: () => {
                                        R(!k);
                                    },
                                    label: "Error on Cancel",
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.E_, {
                        label: "Cancellation Modal",
                        children: (0, a.jsx)(i.zxk, {
                            onClick: () => {
                                Z(!0);
                            },
                            variant: "primary",
                            size: "sm",
                            text: "Open Modal",
                        }),
                    }),
                ],
            })
        );
    },
    j = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { discount: t = {} } = e;
        return b(
            f(
                {
                    id: "",
                    discount_id: "",
                    user_id: "",
                },
                e,
            ),
            {
                discount: f(
                    {
                        id: "",
                        plan_ids: [],
                        user_usage_limit: 3,
                        user_usage_limit_interval: p.EA.MONTH,
                        user_usage_limit_interval_count: 3,
                        amount: "40",
                    },
                    t,
                ),
            },
        );
    };
