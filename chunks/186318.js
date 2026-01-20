n.d(t, { k: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(821849),
    s = n(45474),
    l = n(261538),
    c = n(146528),
    u = n(729154),
    d = n(981631),
    f = n(362786),
    p = n(474936),
    _ = n(231338);
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
        let [e, t] = i.useState(p.PremiumTypes.TIER_0),
            [n, h] = i.useState(s.R.WHAT_YOU_LOSE),
            [g, b] = i.useState(null),
            [O, v] = i.useState(p.Xh.PREMIUM_MONTH_TIER_0),
            [S, I] = i.useState([]),
            [T, C] = i.useState(() => {
                let e = new Date();
                return e.setMonth(e.getMonth() + 1), e;
            }),
            [A, N] = i.useState(null),
            [P, w] = i.useState(!1),
            [R, D] = i.useState(!1),
            [x, L] = i.useState(!1);
        (0, i.useEffect)(() => {
            (0, o.Y2)();
        }, []),
            (0, i.useEffect)(() => {
                let e = new Date();
                switch (O) {
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
                C(e);
            }, [O]),
            (0, i.useEffect)(() => {
                switch (e) {
                    case p.PremiumTypes.TIER_0:
                        I([
                            {
                                label: "Nitro Basic Monthly",
                                value: p.Xh.PREMIUM_MONTH_TIER_0,
                            },
                            {
                                label: "Nitro Basic Yearly",
                                value: p.Xh.PREMIUM_YEAR_TIER_0,
                            },
                        ]),
                            v(p.Xh.PREMIUM_MONTH_TIER_0);
                        break;
                    case p.PremiumTypes.TIER_1:
                        I([
                            {
                                label: "Nitro Classic Monthly",
                                value: p.Xh.PREMIUM_MONTH_TIER_1,
                            },
                            {
                                label: "Nitro Classic Yearly",
                                value: p.Xh.PREMIUM_YEAR_TIER_1,
                            },
                        ]),
                            v(p.Xh.PREMIUM_MONTH_TIER_1);
                        break;
                    case p.PremiumTypes.TIER_2:
                        I([
                            {
                                label: "Nitro Monthly",
                                value: p.Xh.PREMIUM_MONTH_TIER_2,
                            },
                            {
                                label: "Nitro Yearly",
                                value: p.Xh.PREMIUM_YEAR_TIER_2,
                            },
                        ]),
                            v(p.Xh.PREMIUM_MONTH_TIER_2);
                }
            }, [e]),
            (0, i.useEffect)(() => {
                [s.R.CONFIRM_DISCOUNT, s.R.DISCOUNT_APPLIED].includes(n) && null === g && b(y()),
                    n === s.R.PREVIEW &&
                        null === A &&
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
                                        subscriptionPlanId: p.Xh.PREMIUM_MONTH_GUILD,
                                        subscriptionPlanPrice: 400,
                                        amount: 100,
                                        quantity: 1,
                                        discounts: [],
                                    },
                                ],
                                total: 200,
                                currency: _.pK.USD,
                                tax: 0,
                                taxInclusive: !0,
                                subscriptionPeriodStart: new Date(),
                                subscriptionPeriodEnd: T,
                                status: d.hUK.PAID,
                            }),
                        ),
                    n !== s.R.PREVIEW && null !== A && N(null);
            }, [n, g, T, O, A]);
        let j = i.useCallback(async () => {
            L(!0),
                await (0, a.ZDy)(
                    async () => (t) =>
                        (0, r.jsx)(
                            u.x,
                            E(m({}, t), {
                                onClose: () => {
                                    t.onClose(), L(!1);
                                },
                                premiumType: e,
                                churnDiscount: g,
                                planId: O,
                                renewalInvoice: A,
                                renewalInvoiceDetails: {
                                    intervalType: p.rV.MONTH,
                                    intervalCount: 1,
                                },
                                errorOnCancel: P,
                                errorOnRedeem: R,
                                setActiveStep: (e) => {
                                    h(e), t.onClose();
                                },
                                activeStep: n,
                                premiumSubscription: {
                                    id: "",
                                    planId: O,
                                    type: _.NY.PREMIUM,
                                    items: [],
                                    createdAt: new Date(),
                                    canceledAt: null,
                                    currentPeriodStart: new Date(),
                                    currentPeriodEnd: T,
                                    status: d.O0b.ACTIVE,
                                    paymentSourceId: null,
                                    paymentGateway: null,
                                    paymentGatewayPlanId: null,
                                    paymentGatewaySubscriptionId: null,
                                    trialId: null,
                                    trialEndsAt: null,
                                    renewalMutations: null,
                                    streakStartedAt: null,
                                    currency: _.pK.USD,
                                    pauseEndsAt: null,
                                    pauseReason: f.Id.UNKNOWN,
                                },
                            }),
                        ),
                );
        }, [e, g, O, A, P, R, n, T]);
        return (
            (0, i.useEffect)(() => {
                x && j();
            }, [n, x, j]),
            (0, r.jsxs)(l.pg, {
                children: [
                    (0, r.jsx)(l.BZ, {
                        children: (0, r.jsx)(a.PhF, {
                            label: "Premium Subscription",
                            placeholder: "Premium Type",
                            onSelectionChange: t,
                            value: e,
                            options: [
                                {
                                    id: "basic",
                                    label: "Nitro Basic",
                                    value: p.PremiumTypes.TIER_0,
                                },
                                {
                                    id: "classic",
                                    label: "Nitro Classic",
                                    value: p.PremiumTypes.TIER_1,
                                },
                                {
                                    id: "default",
                                    label: "Nitro",
                                    value: p.PremiumTypes.TIER_2,
                                },
                            ],
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    }),
                    S.length > 0 &&
                        (0, r.jsx)(l.BZ, {
                            children: (0, r.jsx)(a.PhF, {
                                label: "Subscription Interval",
                                placeholder: "Premium Type",
                                onSelectionChange: v,
                                formatOption: (e) => {
                                    let { label: t, value: n } = e;
                                    return {
                                        id: n,
                                        label: t,
                                        value: n,
                                    };
                                },
                                value: O,
                                options: S,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        }),
                    (0, r.jsx)(l.BZ, {
                        children: (0, r.jsx)(a.PhF, {
                            label: "Modal Step",
                            placeholder: "Premium Type",
                            onSelectionChange: h,
                            value: n,
                            options: [
                                {
                                    id: "whatYouLose",
                                    label: "What You Lose",
                                    value: s.R.WHAT_YOU_LOSE,
                                },
                                {
                                    id: "confirmDiscount",
                                    label: "Confirm Discount",
                                    value: s.R.CONFIRM_DISCOUNT,
                                },
                                {
                                    id: "discountApplied",
                                    label: "Discount Applied",
                                    value: s.R.DISCOUNT_APPLIED,
                                },
                                {
                                    id: "confirmCancel",
                                    label: "Confirm Cancel",
                                    value: s.R.CONFIRM,
                                },
                                {
                                    id: "previewInvoice",
                                    label: "Preview Invoice",
                                    value: s.R.PREVIEW,
                                },
                            ],
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
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
                            checked: R,
                            onChange: () => {
                                D(!R);
                            },
                            label: "Error on Redeem Offer",
                        }),
                    }),
                    (0, r.jsx)(l.BZ, {
                        children: (0, r.jsx)(a.Checkbox, {
                            checked: P,
                            onChange: () => {
                                w(!P);
                            },
                            label: "Error on Cancel",
                        }),
                    }),
                    (0, r.jsx)(l.dv, {}),
                    (0, r.jsx)(a.Button, {
                        onClick: () => {
                            L(!0);
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
                        user_usage_limit_interval: p.EA.MONTH,
                        user_usage_limit_interval_count: 3,
                        amount: "40",
                    },
                    t,
                ),
            },
        );
    };
