n.d(t, { k: () => b }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(481060),
    l = n(821849),
    o = n(45474),
    s = n(146528),
    c = n(246992),
    d = n(237012),
    u = n(729154),
    m = n(981631),
    p = n(362786),
    h = n(474936),
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
function g(e, t) {
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
let b = () => {
        let [e, t] = r.useState(h.PremiumTypes.TIER_0),
            [n, b] = r.useState(o.R.WHAT_YOU_LOSE),
            [j, _] = r.useState(null),
            [y, C] = r.useState(h.Xh.PREMIUM_MONTH_TIER_0),
            [S, E] = r.useState([]),
            [T, O] = r.useState(() => {
                let e = new Date();
                return e.setMonth(e.getMonth() + 1), e;
            }),
            [N, P] = r.useState(null),
            [I, w] = r.useState(!1),
            [k, R] = r.useState(!1),
            [A, D] = r.useState(!1);
        (0, r.useEffect)(() => {
            (0, l.Y2)();
        }, []),
            (0, r.useEffect)(() => {
                let e = new Date();
                switch (y) {
                    case h.Xh.PREMIUM_MONTH_TIER_0:
                    case h.Xh.PREMIUM_MONTH_TIER_1:
                    case h.Xh.PREMIUM_MONTH_TIER_2:
                        e.setMonth(e.getMonth() + 1);
                        break;
                    case h.Xh.PREMIUM_YEAR_TIER_0:
                    case h.Xh.PREMIUM_YEAR_TIER_1:
                    case h.Xh.PREMIUM_YEAR_TIER_2:
                        e.setFullYear(e.getFullYear() + 1);
                }
                O(e);
            }, [y]),
            (0, r.useEffect)(() => {
                switch (e) {
                    case h.PremiumTypes.TIER_0:
                        E([
                            {
                                label: "Nitro Basic Monthly",
                                value: h.Xh.PREMIUM_MONTH_TIER_0,
                            },
                            {
                                label: "Nitro Basic Yearly",
                                value: h.Xh.PREMIUM_YEAR_TIER_0,
                            },
                        ]),
                            C(h.Xh.PREMIUM_MONTH_TIER_0);
                        break;
                    case h.PremiumTypes.TIER_1:
                        E([
                            {
                                label: "Nitro Classic Monthly",
                                value: h.Xh.PREMIUM_MONTH_TIER_1,
                            },
                            {
                                label: "Nitro Classic Yearly",
                                value: h.Xh.PREMIUM_YEAR_TIER_1,
                            },
                        ]),
                            C(h.Xh.PREMIUM_MONTH_TIER_1);
                        break;
                    case h.PremiumTypes.TIER_2:
                        E([
                            {
                                label: "Nitro Monthly",
                                value: h.Xh.PREMIUM_MONTH_TIER_2,
                            },
                            {
                                label: "Nitro Yearly",
                                value: h.Xh.PREMIUM_YEAR_TIER_2,
                            },
                        ]),
                            C(h.Xh.PREMIUM_MONTH_TIER_2);
                }
            }, [e]),
            (0, r.useEffect)(() => {
                [o.R.CONFIRM_DISCOUNT, o.R.DISCOUNT_APPLIED].includes(n) && null === j && _(v()),
                    n === o.R.PREVIEW &&
                        null === N &&
                        P(
                            new s.Z({
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
                                        subscriptionPlanId: h.Xh.PREMIUM_MONTH_GUILD,
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
                                subscriptionPeriodEnd: T,
                                status: m.hUK.PAID,
                            }),
                        ),
                    n !== o.R.PREVIEW && null !== N && P(null);
            }, [n, j, T, y, N]);
        let Z = r.useCallback(async () => {
            D(!0),
                await (0, i.ZDy)(
                    async () => (t) =>
                        (0, a.jsx)(
                            u.x,
                            g(f({}, t), {
                                onClose: () => {
                                    t.onClose(), D(!1);
                                },
                                premiumType: e,
                                churnDiscount: j,
                                planId: y,
                                renewalInvoice: N,
                                renewalInvoiceDetails: {
                                    intervalType: h.rV.MONTH,
                                    intervalCount: 1,
                                },
                                errorOnCancel: I,
                                errorOnRedeem: k,
                                setActiveStep: (e) => {
                                    b(e), t.onClose();
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
                                    currentPeriodEnd: T,
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
                                    pauseReason: p.Id.UNKNOWN,
                                },
                            }),
                        ),
                );
        }, [e, j, y, N, I, k, n, T]);
        return (
            (0, r.useEffect)(() => {
                A && Z();
            }, [n, A, Z]),
            (0, a.jsxs)(d.$0, {
                children: [
                    (0, a.jsx)(i.Heading, {
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
                                                value: h.PremiumTypes.TIER_0,
                                            },
                                            {
                                                label: "Nitro Classic",
                                                value: h.PremiumTypes.TIER_1,
                                            },
                                            {
                                                label: "Nitro",
                                                value: h.PremiumTypes.TIER_2,
                                            },
                                        ],
                                        popoutLayerContext: c.O$,
                                    }),
                                ],
                            }),
                            S.length > 0 &&
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
                                            options: S,
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
                                            b(e);
                                        },
                                        isSelected: (e) => n === e,
                                        serialize: (e) => "".concat(e),
                                        options: [
                                            {
                                                label: "What You Lose",
                                                value: o.R.WHAT_YOU_LOSE,
                                            },
                                            {
                                                label: "Confirm Discount",
                                                value: o.R.CONFIRM_DISCOUNT,
                                            },
                                            {
                                                label: "Discount Applied",
                                                value: o.R.DISCOUNT_APPLIED,
                                            },
                                            {
                                                label: "Confirm Cancel",
                                                value: o.R.CONFIRM,
                                            },
                                            {
                                                label: "Preview Invoice",
                                                value: o.R.PREVIEW,
                                            },
                                        ],
                                        popoutLayerContext: c.O$,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(d.BZ, {
                                children: (0, a.jsx)(i.Checkbox, {
                                    checked: null !== j,
                                    onChange: () => {
                                        if (null === j) return void _(v());
                                        _(null);
                                    },
                                    label: "Churn Discount",
                                }),
                            }),
                            (0, a.jsx)(d.BZ, {
                                children: (0, a.jsx)(i.Checkbox, {
                                    checked: k,
                                    onChange: () => {
                                        R(!k);
                                    },
                                    label: "Error on Redeem Offer",
                                }),
                            }),
                            (0, a.jsx)(d.BZ, {
                                children: (0, a.jsx)(i.Checkbox, {
                                    checked: I,
                                    onChange: () => {
                                        w(!I);
                                    },
                                    label: "Error on Cancel",
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.E_, {
                        label: "Cancellation Modal",
                        children: (0, a.jsx)(i.Button, {
                            onClick: () => {
                                D(!0);
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
    v = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { discount: t = {} } = e;
        return g(
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
                        user_usage_limit_interval: h.EA.MONTH,
                        user_usage_limit_interval_count: 3,
                        amount: "40",
                    },
                    t,
                ),
            },
        );
    };
