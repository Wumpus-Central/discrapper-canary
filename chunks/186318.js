n.d(t, { k: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(821849),
    s = n(45474),
    l = n(29594),
    c = n(146528),
    u = n(729154),
    d = n(981631),
    f = n(362786),
    _ = n(474936),
    p = n(231338);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = () => {
        let [e, t] = i.useState(_.PremiumTypes.TIER_0),
            [n, h] = i.useState(s.R.WHAT_YOU_LOSE),
            [g, b] = i.useState(null),
            [O, v] = i.useState(_.Xh.PREMIUM_MONTH_TIER_0),
            [I, T] = i.useState([]),
            [S, A] = i.useState(() => {
                let e = new Date();
                return e.setMonth(e.getMonth() + 1), e;
            }),
            [C, N] = i.useState(null),
            [R, P] = i.useState(!1),
            [D, w] = i.useState(!1),
            [L, x] = i.useState(!1);
        (0, i.useEffect)(() => {
            (0, o.Y2)();
        }, []),
            (0, i.useEffect)(() => {
                let e = new Date();
                switch (O) {
                    case _.Xh.PREMIUM_MONTH_TIER_0:
                    case _.Xh.PREMIUM_MONTH_TIER_1:
                    case _.Xh.PREMIUM_MONTH_TIER_2:
                        e.setMonth(e.getMonth() + 1);
                        break;
                    case _.Xh.PREMIUM_YEAR_TIER_0:
                    case _.Xh.PREMIUM_YEAR_TIER_1:
                    case _.Xh.PREMIUM_YEAR_TIER_2:
                        e.setFullYear(e.getFullYear() + 1);
                }
                A(e);
            }, [O]),
            (0, i.useEffect)(() => {
                switch (e) {
                    case _.PremiumTypes.TIER_0:
                        T([
                            {
                                label: "Nitro Basic Monthly",
                                value: _.Xh.PREMIUM_MONTH_TIER_0,
                            },
                            {
                                label: "Nitro Basic Yearly",
                                value: _.Xh.PREMIUM_YEAR_TIER_0,
                            },
                        ]),
                            v(_.Xh.PREMIUM_MONTH_TIER_0);
                        break;
                    case _.PremiumTypes.TIER_1:
                        T([
                            {
                                label: "Nitro Classic Monthly",
                                value: _.Xh.PREMIUM_MONTH_TIER_1,
                            },
                            {
                                label: "Nitro Classic Yearly",
                                value: _.Xh.PREMIUM_YEAR_TIER_1,
                            },
                        ]),
                            v(_.Xh.PREMIUM_MONTH_TIER_1);
                        break;
                    case _.PremiumTypes.TIER_2:
                        T([
                            {
                                label: "Nitro Monthly",
                                value: _.Xh.PREMIUM_MONTH_TIER_2,
                            },
                            {
                                label: "Nitro Yearly",
                                value: _.Xh.PREMIUM_YEAR_TIER_2,
                            },
                        ]),
                            v(_.Xh.PREMIUM_MONTH_TIER_2);
                }
            }, [e]),
            (0, i.useEffect)(() => {
                [s.R.CONFIRM_DISCOUNT, s.R.DISCOUNT_APPLIED].includes(n) && null === g && b(y()),
                    n === s.R.PREVIEW &&
                        null === C &&
                        N(
                            new c.Z({
                                id: "",
                                invoiceItems: [
                                    {
                                        id: "",
                                        subscriptionPlanId: O,
                                        subscriptionPlanPrice: 200,
                                        amount: 400,
                                        quantity: 1,
                                        discounts: [],
                                    },
                                    {
                                        id: "",
                                        subscriptionPlanId: _.Xh.PREMIUM_MONTH_GUILD,
                                        subscriptionPlanPrice: 400,
                                        amount: 100,
                                        quantity: 1,
                                        discounts: [],
                                    },
                                ],
                                total: 200,
                                currency: p.pK.USD,
                                tax: 0,
                                taxInclusive: !0,
                                subscriptionPeriodStart: new Date(),
                                subscriptionPeriodEnd: S,
                                status: d.hUK.PAID,
                            }),
                        ),
                    n !== s.R.PREVIEW && null !== C && N(null);
            }, [n, g, S, O, C]);
        let M = i.useCallback(async () => {
            x(!0),
                await (0, a.ZDy)(
                    async () => (t) =>
                        (0, r.jsx)(
                            u.x,
                            E(m({}, t), {
                                onClose: () => {
                                    t.onClose(), x(!1);
                                },
                                premiumType: e,
                                churnDiscount: g,
                                planId: O,
                                renewalInvoice: C,
                                renewalInvoiceDetails: {
                                    intervalType: _.rV.MONTH,
                                    intervalCount: 1,
                                },
                                errorOnCancel: R,
                                errorOnRedeem: D,
                                setActiveStep: (e) => {
                                    h(e), t.onClose();
                                },
                                activeStep: n,
                                premiumSubscription: {
                                    id: "",
                                    planId: O,
                                    type: p.NY.PREMIUM,
                                    items: [],
                                    createdAt: new Date(),
                                    canceledAt: null,
                                    currentPeriodStart: new Date(),
                                    currentPeriodEnd: S,
                                    status: d.O0b.ACTIVE,
                                    paymentSourceId: null,
                                    paymentGateway: null,
                                    paymentGatewayPlanId: null,
                                    paymentGatewaySubscriptionId: null,
                                    trialId: null,
                                    trialEndsAt: null,
                                    renewalMutations: null,
                                    streakStartedAt: null,
                                    currency: p.pK.USD,
                                    pauseEndsAt: null,
                                    pauseReason: f.Id.UNKNOWN,
                                },
                            }),
                        ),
                );
        }, [e, g, O, C, R, D, n, S]);
        return (
            (0, i.useEffect)(() => {
                L && M();
            }, [n, L, M]),
            (0, r.jsxs)(l.pg, {
                children: [
                    (0, r.jsxs)(l.BZ, {
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: "text-md/semibold",
                                children: "Premium Subscription",
                            }),
                            (0, r.jsx)(a.PhF, {
                                placeholder: "Premium Type",
                                select: (e) => t(e),
                                isSelected: (t) => e === t,
                                serialize: (e) => "".concat(e),
                                options: [
                                    {
                                        label: "Nitro Basic",
                                        value: _.PremiumTypes.TIER_0,
                                    },
                                    {
                                        label: "Nitro Classic",
                                        value: _.PremiumTypes.TIER_1,
                                    },
                                    {
                                        label: "Nitro",
                                        value: _.PremiumTypes.TIER_2,
                                    },
                                ],
                            }),
                        ],
                    }),
                    I.length > 0 &&
                        (0, r.jsxs)(l.BZ, {
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: "text-md/semibold",
                                    children: "Subscription Interval",
                                }),
                                (0, r.jsx)(a.PhF, {
                                    placeholder: "Premium Type",
                                    select: (e) => {
                                        v(e);
                                    },
                                    isSelected: (e) => O === e,
                                    serialize: (e) => e,
                                    options: I,
                                }),
                            ],
                        }),
                    (0, r.jsxs)(l.BZ, {
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: "text-md/semibold",
                                children: "Modal Step",
                            }),
                            (0, r.jsx)(a.PhF, {
                                placeholder: "Premium Type",
                                select: (e) => {
                                    h(e);
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
                            }),
                        ],
                    }),
                    (0, r.jsx)(l.BZ, {
                        children: (0, r.jsx)(a.Checkbox, {
                            checked: null !== g,
                            onChange: () => {
                                if (null === g) return void b(y());
                                b(null);
                            },
                            label: "Churn Discount",
                        }),
                    }),
                    (0, r.jsx)(l.BZ, {
                        children: (0, r.jsx)(a.Checkbox, {
                            checked: D,
                            onChange: () => {
                                w(!D);
                            },
                            label: "Error on Redeem Offer",
                        }),
                    }),
                    (0, r.jsx)(l.BZ, {
                        children: (0, r.jsx)(a.Checkbox, {
                            checked: R,
                            onChange: () => {
                                P(!R);
                            },
                            label: "Error on Cancel",
                        }),
                    }),
                    (0, r.jsx)(l.dv, {}),
                    (0, r.jsx)(a.Button, {
                        onClick: () => {
                            x(!0);
                        },
                        variant: "primary",
                        size: "md",
                        text: "Open Cancellation Modal",
                    }),
                ],
            })
        );
    },
    y = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { discount: t = {} } = e;
        return E(
            m(
                {
                    id: "",
                    discount_id: "",
                    user_id: "",
                },
                e,
            ),
            {
                discount: m(
                    {
                        id: "",
                        plan_ids: [],
                        user_usage_limit: 3,
                        user_usage_limit_interval: _.EA.MONTH,
                        user_usage_limit_interval_count: 3,
                        amount: "40",
                    },
                    t,
                ),
            },
        );
    };
