l.d(t, { o: () => x });
var a = l(627968),
    n = l(64700),
    r = l(397927),
    i = l(73825),
    s = l(473702),
    o = l(252561),
    u = l(654044),
    c = l(931088),
    d = l(652215),
    p = l(601107),
    m = l(788868),
    h = l(818348);
let x = () => {
        let [e, t] = n.useState(m.PremiumTypes.TIER_0),
            [l, x] = n.useState(s.g.WHAT_YOU_LOSE),
            [g, y] = n.useState(null),
            [E, f] = n.useState(m.gD.PREMIUM_MONTH_TIER_0),
            [v, S] = n.useState([]),
            [j, T] = n.useState(() => {
                let e = new Date();
                return e.setMonth(e.getMonth() + 1), e;
            }),
            [C, P] = n.useState(null),
            [R, A] = n.useState(!1),
            [_, N] = n.useState(!1),
            [I, k] = n.useState(!1);
        (0, n.useEffect)(() => {
            (0, i.zS)();
        }, []),
            (0, n.useEffect)(() => {
                let e = new Date();
                switch (E) {
                    case m.gD.PREMIUM_MONTH_TIER_0:
                    case m.gD.PREMIUM_MONTH_TIER_1:
                    case m.gD.PREMIUM_MONTH_TIER_2:
                        e.setMonth(e.getMonth() + 1);
                        break;
                    case m.gD.PREMIUM_YEAR_TIER_0:
                    case m.gD.PREMIUM_YEAR_TIER_1:
                    case m.gD.PREMIUM_YEAR_TIER_2:
                        e.setFullYear(e.getFullYear() + 1);
                }
                T(e);
            }, [E]),
            (0, n.useEffect)(() => {
                switch (e) {
                    case m.PremiumTypes.TIER_0:
                        S([
                            { label: "Nitro Basic Monthly", value: m.gD.PREMIUM_MONTH_TIER_0 },
                            { label: "Nitro Basic Yearly", value: m.gD.PREMIUM_YEAR_TIER_0 },
                        ]),
                            f(m.gD.PREMIUM_MONTH_TIER_0);
                        break;
                    case m.PremiumTypes.TIER_1:
                        S([
                            { label: "Nitro Classic Monthly", value: m.gD.PREMIUM_MONTH_TIER_1 },
                            { label: "Nitro Classic Yearly", value: m.gD.PREMIUM_YEAR_TIER_1 },
                        ]),
                            f(m.gD.PREMIUM_MONTH_TIER_1);
                        break;
                    case m.PremiumTypes.TIER_2:
                        S([
                            { label: "Nitro Monthly", value: m.gD.PREMIUM_MONTH_TIER_2 },
                            { label: "Nitro Yearly", value: m.gD.PREMIUM_YEAR_TIER_2 },
                        ]),
                            f(m.gD.PREMIUM_MONTH_TIER_2);
                }
            }, [e]),
            (0, n.useEffect)(() => {
                [s.g.CONFIRM_DISCOUNT, s.g.DISCOUNT_APPLIED].includes(l) && null === g && y(b()),
                    l === s.g.PREVIEW &&
                        null === C &&
                        P(
                            new u.A({
                                id: "",
                                invoiceItems: [
                                    {
                                        id: "",
                                        subscriptionPlanId: E,
                                        subscriptionPlanPrice: 200,
                                        amount: 400,
                                        quantity: 1,
                                        discounts: [],
                                    },
                                    {
                                        id: "",
                                        subscriptionPlanId: m.gD.PREMIUM_MONTH_GUILD,
                                        subscriptionPlanPrice: 400,
                                        amount: 100,
                                        quantity: 1,
                                        discounts: [],
                                    },
                                ],
                                total: 200,
                                currency: h.Yr.USD,
                                tax: 0,
                                taxInclusive: !0,
                                subscriptionPeriodStart: new Date(),
                                subscriptionPeriodEnd: j,
                                status: d.lT7.PAID,
                            }),
                        ),
                    l !== s.g.PREVIEW && null !== C && P(null);
            }, [l, g, j, E, C]);
        let D = n.useCallback(async () => {
            k(!0),
                await (0, r.mMO)(
                    async () => (t) =>
                        (0, a.jsx)(c.m, {
                            ...t,
                            onClose: () => {
                                t.onClose(), k(!1);
                            },
                            premiumType: e,
                            churnDiscount: g,
                            planId: E,
                            renewalInvoice: C,
                            renewalInvoiceDetails: { intervalType: m.WT.MONTH, intervalCount: 1 },
                            errorOnCancel: R,
                            errorOnRedeem: _,
                            setActiveStep: (e) => {
                                x(e), t.onClose();
                            },
                            activeStep: l,
                            premiumSubscription: {
                                id: "",
                                planId: E,
                                type: h.rz.PREMIUM,
                                items: [],
                                createdAt: new Date(),
                                canceledAt: null,
                                currentPeriodStart: new Date(),
                                currentPeriodEnd: j,
                                status: d.Dmq.ACTIVE,
                                paymentSourceId: null,
                                paymentGateway: null,
                                paymentGatewayPlanId: null,
                                paymentGatewaySubscriptionId: null,
                                trialId: null,
                                trialEndsAt: null,
                                renewalMutations: null,
                                streakStartedAt: null,
                                currency: h.Yr.USD,
                                pauseEndsAt: null,
                                pauseReason: p.qf.UNKNOWN,
                            },
                        }),
                );
        }, [e, g, E, C, R, _, l, j]);
        return (
            (0, n.useEffect)(() => {
                I && D();
            }, [l, I, D]),
            (0, a.jsxs)(o.LB, {
                children: [
                    (0, a.jsx)(o.MG, {
                        children: (0, a.jsx)(r.l6P, {
                            label: "Premium Subscription",
                            placeholder: "Premium Type",
                            onSelectionChange: t,
                            value: e,
                            options: [
                                { id: "basic", label: "Nitro Basic", value: m.PremiumTypes.TIER_0 },
                                { id: "classic", label: "Nitro Classic", value: m.PremiumTypes.TIER_1 },
                                { id: "default", label: "Nitro", value: m.PremiumTypes.TIER_2 },
                            ],
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    }),
                    v.length > 0 &&
                        (0, a.jsx)(o.MG, {
                            children: (0, a.jsx)(r.l6P, {
                                label: "Subscription Interval",
                                placeholder: "Premium Type",
                                onSelectionChange: f,
                                formatOption: (e) => {
                                    let { label: t, value: l } = e;
                                    return { id: l, label: t, value: l };
                                },
                                value: E,
                                options: v,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        }),
                    (0, a.jsx)(o.MG, {
                        children: (0, a.jsx)(r.l6P, {
                            label: "Modal Step",
                            placeholder: "Premium Type",
                            onSelectionChange: x,
                            value: l,
                            options: [
                                { id: "whatYouLose", label: "What You Lose", value: s.g.WHAT_YOU_LOSE },
                                { id: "confirmDiscount", label: "Confirm Discount", value: s.g.CONFIRM_DISCOUNT },
                                { id: "discountApplied", label: "Discount Applied", value: s.g.DISCOUNT_APPLIED },
                                { id: "confirmCancel", label: "Confirm Cancel", value: s.g.CONFIRM },
                                { id: "previewInvoice", label: "Preview Invoice", value: s.g.PREVIEW },
                            ],
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    }),
                    (0, a.jsx)(o.MG, {
                        children: (0, a.jsx)(r.Checkbox, {
                            checked: null !== g,
                            onChange: () => {
                                null === g ? y(b()) : y(null);
                            },
                            label: "Churn Discount",
                        }),
                    }),
                    (0, a.jsx)(o.MG, {
                        children: (0, a.jsx)(r.Checkbox, {
                            checked: _,
                            onChange: () => {
                                N(!_);
                            },
                            label: "Error on Redeem Offer",
                        }),
                    }),
                    (0, a.jsx)(o.MG, {
                        children: (0, a.jsx)(r.Checkbox, {
                            checked: R,
                            onChange: () => {
                                A(!R);
                            },
                            label: "Error on Cancel",
                        }),
                    }),
                    (0, a.jsx)(o.nB, {}),
                    (0, a.jsx)(r.Button, {
                        onClick: () => {
                            k(!0);
                        },
                        variant: "primary",
                        size: "md",
                        text: "Open Cancellation Modal",
                    }),
                ],
            })
        );
    },
    b = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { discount: t = {} } = e;
        return {
            id: "",
            discount_id: "",
            user_id: "",
            ...e,
            discount: {
                id: "",
                plan_ids: [],
                user_usage_limit: 3,
                user_usage_limit_interval: m.Ff.MONTH,
                user_usage_limit_interval_count: 3,
                amount: "40",
                ...t,
            },
        };
    };
