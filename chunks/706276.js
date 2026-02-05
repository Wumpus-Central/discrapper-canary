"use strict";
n.d(t, { o: () => h });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(73825),
    o = n(473702),
    l = n(252561),
    u = n(654044),
    c = n(931088),
    d = n(652215),
    _ = n(601107),
    f = n(788868),
    p = n(818348);
let h = () => {
        let [e, t] = i.useState(f.PremiumTypes.TIER_0),
            [n, h] = i.useState(o.g.WHAT_YOU_LOSE),
            [g, E] = i.useState(null),
            [A, I] = i.useState(f.gD.PREMIUM_MONTH_TIER_0),
            [T, y] = i.useState([]),
            [S, v] = i.useState(() => {
                let e = new Date();
                return e.setMonth(e.getMonth() + 1), e;
            }),
            [C, b] = i.useState(null),
            [N, R] = i.useState(!1),
            [O, D] = i.useState(!1),
            [L, w] = i.useState(!1);
        (0, i.useEffect)(() => {
            (0, s.zS)();
        }, []),
            (0, i.useEffect)(() => {
                let e = new Date();
                switch (A) {
                    case f.gD.PREMIUM_MONTH_TIER_0:
                    case f.gD.PREMIUM_MONTH_TIER_1:
                    case f.gD.PREMIUM_MONTH_TIER_2:
                        e.setMonth(e.getMonth() + 1);
                        break;
                    case f.gD.PREMIUM_YEAR_TIER_0:
                    case f.gD.PREMIUM_YEAR_TIER_1:
                    case f.gD.PREMIUM_YEAR_TIER_2:
                        e.setFullYear(e.getFullYear() + 1);
                }
                v(e);
            }, [A]),
            (0, i.useEffect)(() => {
                switch (e) {
                    case f.PremiumTypes.TIER_0:
                        y([
                            { label: "Nitro Basic Monthly", value: f.gD.PREMIUM_MONTH_TIER_0 },
                            { label: "Nitro Basic Yearly", value: f.gD.PREMIUM_YEAR_TIER_0 },
                        ]),
                            I(f.gD.PREMIUM_MONTH_TIER_0);
                        break;
                    case f.PremiumTypes.TIER_1:
                        y([
                            { label: "Nitro Classic Monthly", value: f.gD.PREMIUM_MONTH_TIER_1 },
                            { label: "Nitro Classic Yearly", value: f.gD.PREMIUM_YEAR_TIER_1 },
                        ]),
                            I(f.gD.PREMIUM_MONTH_TIER_1);
                        break;
                    case f.PremiumTypes.TIER_2:
                        y([
                            { label: "Nitro Monthly", value: f.gD.PREMIUM_MONTH_TIER_2 },
                            { label: "Nitro Yearly", value: f.gD.PREMIUM_YEAR_TIER_2 },
                        ]),
                            I(f.gD.PREMIUM_MONTH_TIER_2);
                }
            }, [e]),
            (0, i.useEffect)(() => {
                [o.g.CONFIRM_DISCOUNT, o.g.DISCOUNT_APPLIED].includes(n) && null === g && E(m()),
                    n === o.g.PREVIEW &&
                        null === C &&
                        b(
                            new u.A({
                                id: "",
                                invoiceItems: [
                                    {
                                        id: "",
                                        subscriptionPlanId: A,
                                        subscriptionPlanPrice: 200,
                                        amount: 400,
                                        quantity: 1,
                                        discounts: [],
                                    },
                                    {
                                        id: "",
                                        subscriptionPlanId: f.gD.PREMIUM_MONTH_GUILD,
                                        subscriptionPlanPrice: 400,
                                        amount: 100,
                                        quantity: 1,
                                        discounts: [],
                                    },
                                ],
                                total: 200,
                                currency: p.Yr.USD,
                                tax: 0,
                                taxInclusive: !0,
                                subscriptionPeriodStart: new Date(),
                                subscriptionPeriodEnd: S,
                                status: d.lT7.PAID,
                            }),
                        ),
                    n !== o.g.PREVIEW && null !== C && b(null);
            }, [n, g, S, A, C]);
        let x = i.useCallback(async () => {
            w(!0),
                await (0, a.mMO)(
                    async () => (t) =>
                        (0, r.jsx)(c.m, {
                            ...t,
                            onClose: () => {
                                t.onClose(), w(!1);
                            },
                            premiumType: e,
                            churnDiscount: g,
                            planId: A,
                            renewalInvoice: C,
                            renewalInvoiceDetails: { intervalType: f.WT.MONTH, intervalCount: 1 },
                            errorOnCancel: N,
                            errorOnRedeem: O,
                            setActiveStep: (e) => {
                                h(e), t.onClose();
                            },
                            activeStep: n,
                            premiumSubscription: {
                                id: "",
                                planId: A,
                                type: p.rz.PREMIUM,
                                items: [],
                                createdAt: new Date(),
                                canceledAt: null,
                                currentPeriodStart: new Date(),
                                currentPeriodEnd: S,
                                status: d.Dmq.ACTIVE,
                                paymentSourceId: null,
                                paymentGateway: null,
                                paymentGatewayPlanId: null,
                                paymentGatewaySubscriptionId: null,
                                trialId: null,
                                trialEndsAt: null,
                                renewalMutations: null,
                                streakStartedAt: null,
                                currency: p.Yr.USD,
                                pauseEndsAt: null,
                                pauseReason: _.qf.UNKNOWN,
                            },
                        }),
                );
        }, [e, g, A, C, N, O, n, S]);
        return (
            (0, i.useEffect)(() => {
                L && x();
            }, [n, L, x]),
            (0, r.jsxs)(l.LB, {
                children: [
                    (0, r.jsx)(l.MG, {
                        children: (0, r.jsx)(a.l6P, {
                            label: "Premium Subscription",
                            placeholder: "Premium Type",
                            onSelectionChange: t,
                            value: e,
                            options: [
                                { id: "basic", label: "Nitro Basic", value: f.PremiumTypes.TIER_0 },
                                { id: "classic", label: "Nitro Classic", value: f.PremiumTypes.TIER_1 },
                                { id: "default", label: "Nitro", value: f.PremiumTypes.TIER_2 },
                            ],
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    }),
                    T.length > 0 &&
                        (0, r.jsx)(l.MG, {
                            children: (0, r.jsx)(a.l6P, {
                                label: "Subscription Interval",
                                placeholder: "Premium Type",
                                onSelectionChange: I,
                                formatOption: (e) => {
                                    let { label: t, value: n } = e;
                                    return { id: n, label: t, value: n };
                                },
                                value: A,
                                options: T,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        }),
                    (0, r.jsx)(l.MG, {
                        children: (0, r.jsx)(a.l6P, {
                            label: "Modal Step",
                            placeholder: "Premium Type",
                            onSelectionChange: h,
                            value: n,
                            options: [
                                { id: "whatYouLose", label: "What You Lose", value: o.g.WHAT_YOU_LOSE },
                                { id: "confirmDiscount", label: "Confirm Discount", value: o.g.CONFIRM_DISCOUNT },
                                { id: "discountApplied", label: "Discount Applied", value: o.g.DISCOUNT_APPLIED },
                                { id: "confirmCancel", label: "Confirm Cancel", value: o.g.CONFIRM },
                                { id: "previewInvoice", label: "Preview Invoice", value: o.g.PREVIEW },
                            ],
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    }),
                    (0, r.jsx)(l.MG, {
                        children: (0, r.jsx)(a.Checkbox, {
                            checked: null !== g,
                            onChange: () => {
                                null === g ? E(m()) : E(null);
                            },
                            label: "Churn Discount",
                        }),
                    }),
                    (0, r.jsx)(l.MG, {
                        children: (0, r.jsx)(a.Checkbox, {
                            checked: O,
                            onChange: () => {
                                D(!O);
                            },
                            label: "Error on Redeem Offer",
                        }),
                    }),
                    (0, r.jsx)(l.MG, {
                        children: (0, r.jsx)(a.Checkbox, {
                            checked: N,
                            onChange: () => {
                                R(!N);
                            },
                            label: "Error on Cancel",
                        }),
                    }),
                    (0, r.jsx)(l.nB, {}),
                    (0, r.jsx)(a.Button, {
                        onClick: () => {
                            w(!0);
                        },
                        variant: "primary",
                        size: "md",
                        text: "Open Cancellation Modal",
                    }),
                ],
            })
        );
    },
    m = function () {
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
                user_usage_limit_interval: f.Ff.MONTH,
                user_usage_limit_interval_count: 3,
                amount: "40",
                ...t,
            },
        };
    };
