l.d(t, { o: () => v });
var a = l(627968),
    n = l(64700),
    r = l(192308),
    i = l(691885),
    o = l(150934),
    s = l(821609),
    d = l(73825),
    c = l(473702),
    u = l(252561),
    p = l(570221),
    m = l(931088),
    b = l(652215),
    h = l(601107),
    x = l(788868),
    y = l(818348);
let v = () => {
        let [e, t] = n.useState(x.PremiumTypes.TIER_0),
            [l, v] = n.useState(c.g.WHAT_YOU_LOSE),
            [f, _] = n.useState(null),
            [E, C] = n.useState(x.gD.PREMIUM_MONTH_TIER_0),
            [S, j] = n.useState([]),
            [T, P] = n.useState(() => {
                let e = new Date();
                return e.setMonth(e.getMonth() + 1), e;
            }),
            [I, A] = n.useState(null),
            [k, R] = n.useState(!1),
            [N, M] = n.useState(!1),
            [D, L] = n.useState(!1);
        (0, n.useEffect)(() => {
            (0, d.zS)();
        }, []),
            (0, n.useEffect)(() => {
                let e = new Date();
                switch (E) {
                    case x.gD.PREMIUM_MONTH_TIER_0:
                    case x.gD.PREMIUM_MONTH_TIER_1:
                    case x.gD.PREMIUM_MONTH_TIER_2:
                        e.setMonth(e.getMonth() + 1);
                        break;
                    case x.gD.PREMIUM_YEAR_TIER_0:
                    case x.gD.PREMIUM_YEAR_TIER_1:
                    case x.gD.PREMIUM_YEAR_TIER_2:
                        e.setFullYear(e.getFullYear() + 1);
                }
                P(e);
            }, [E]),
            (0, n.useEffect)(() => {
                switch (e) {
                    case x.PremiumTypes.TIER_0:
                        j([
                            { label: "Nitro Basic Monthly", value: x.gD.PREMIUM_MONTH_TIER_0 },
                            { label: "Nitro Basic Yearly", value: x.gD.PREMIUM_YEAR_TIER_0 },
                        ]),
                            C(x.gD.PREMIUM_MONTH_TIER_0);
                        break;
                    case x.PremiumTypes.TIER_1:
                        j([
                            { label: "Nitro Classic Monthly", value: x.gD.PREMIUM_MONTH_TIER_1 },
                            { label: "Nitro Classic Yearly", value: x.gD.PREMIUM_YEAR_TIER_1 },
                        ]),
                            C(x.gD.PREMIUM_MONTH_TIER_1);
                        break;
                    case x.PremiumTypes.TIER_2:
                        j([
                            { label: "Nitro Monthly", value: x.gD.PREMIUM_MONTH_TIER_2 },
                            { label: "Nitro Yearly", value: x.gD.PREMIUM_YEAR_TIER_2 },
                        ]),
                            C(x.gD.PREMIUM_MONTH_TIER_2);
                }
            }, [e]),
            (0, n.useEffect)(() => {
                [c.g.CONFIRM_DISCOUNT, c.g.DISCOUNT_APPLIED].includes(l) && null === f && _(g()),
                    l === c.g.PREVIEW &&
                        null === I &&
                        A(
                            new p.A({
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
                                        subscriptionPlanId: x.gD.PREMIUM_MONTH_GUILD,
                                        subscriptionPlanPrice: 400,
                                        amount: 100,
                                        quantity: 1,
                                        discounts: [],
                                    },
                                ],
                                total: 200,
                                currency: y.Yr.USD,
                                tax: 0,
                                taxInclusive: !0,
                                subscriptionPeriodStart: new Date(),
                                subscriptionPeriodEnd: T,
                                status: b.lT7.PAID,
                            }),
                        ),
                    l !== c.g.PREVIEW && null !== I && A(null);
            }, [l, f, T, E, I]);
        let w = n.useCallback(async () => {
            L(!0),
                await (0, r.openModalLazy)(
                    async () => (t) =>
                        (0, a.jsx)(m.m, {
                            ...t,
                            onClose: () => {
                                t.onClose(), L(!1);
                            },
                            premiumType: e,
                            churnDiscount: f,
                            planId: E,
                            renewalInvoice: I,
                            renewalInvoiceDetails: { intervalType: x.WT.MONTH, intervalCount: 1 },
                            errorOnCancel: k,
                            errorOnRedeem: N,
                            setActiveStep: (e) => {
                                v(e), t.onClose();
                            },
                            activeStep: l,
                            premiumSubscription: {
                                id: "",
                                planId: E,
                                type: y.rz.PREMIUM,
                                items: [],
                                createdAt: new Date(),
                                canceledAt: null,
                                currentPeriodStart: new Date(),
                                currentPeriodEnd: T,
                                status: b.Dmq.ACTIVE,
                                paymentSourceId: null,
                                paymentGateway: null,
                                paymentGatewayPlanId: null,
                                paymentGatewaySubscriptionId: null,
                                trialId: null,
                                trialEndsAt: null,
                                renewalMutations: null,
                                streakStartedAt: null,
                                currency: y.Yr.USD,
                                pauseEndsAt: null,
                                pauseReason: h.qf.UNKNOWN,
                            },
                        }),
                );
        }, [e, f, E, I, k, N, l, T]);
        return (
            (0, n.useEffect)(() => {
                D && w();
            }, [l, D, w]),
            (0, a.jsxs)(u.LB, {
                children: [
                    (0, a.jsx)(u.MG, {
                        children: (0, a.jsx)(i.l, {
                            label: "Premium Subscription",
                            placeholder: "Premium Type",
                            onSelectionChange: t,
                            value: e,
                            options: [
                                { id: "basic", label: "Nitro Basic", value: x.PremiumTypes.TIER_0 },
                                { id: "classic", label: "Nitro Classic", value: x.PremiumTypes.TIER_1 },
                                { id: "default", label: "Nitro", value: x.PremiumTypes.TIER_2 },
                            ],
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    }),
                    S.length > 0 &&
                        (0, a.jsx)(u.MG, {
                            children: (0, a.jsx)(i.l, {
                                label: "Subscription Interval",
                                placeholder: "Premium Type",
                                onSelectionChange: C,
                                formatOption: (e) => {
                                    let { label: t, value: l } = e;
                                    return { id: l, label: t, value: l };
                                },
                                value: E,
                                options: S,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        }),
                    (0, a.jsx)(u.MG, {
                        children: (0, a.jsx)(i.l, {
                            label: "Modal Step",
                            placeholder: "Premium Type",
                            onSelectionChange: v,
                            value: l,
                            options: [
                                { id: "whatYouLose", label: "What You Lose", value: c.g.WHAT_YOU_LOSE },
                                { id: "confirmDiscount", label: "Confirm Discount", value: c.g.CONFIRM_DISCOUNT },
                                { id: "discountApplied", label: "Discount Applied", value: c.g.DISCOUNT_APPLIED },
                                { id: "confirmCancel", label: "Confirm Cancel", value: c.g.CONFIRM },
                                { id: "previewInvoice", label: "Preview Invoice", value: c.g.PREVIEW },
                            ],
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    }),
                    (0, a.jsx)(u.MG, {
                        children: (0, a.jsx)(o.S, {
                            checked: null !== f,
                            onChange: () => {
                                null === f ? _(g()) : _(null);
                            },
                            label: "Churn Discount",
                        }),
                    }),
                    (0, a.jsx)(u.MG, {
                        children: (0, a.jsx)(o.S, {
                            checked: N,
                            onChange: () => {
                                M(!N);
                            },
                            label: "Error on Redeem Offer",
                        }),
                    }),
                    (0, a.jsx)(u.MG, {
                        children: (0, a.jsx)(o.S, {
                            checked: k,
                            onChange: () => {
                                R(!k);
                            },
                            label: "Error on Cancel",
                        }),
                    }),
                    (0, a.jsx)(u.nB, {}),
                    (0, a.jsx)(s.$, {
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
    g = function () {
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
                user_usage_limit_interval: x.Ff.MONTH,
                user_usage_limit_interval_count: 3,
                amount: "40",
                ...t,
            },
        };
    };
