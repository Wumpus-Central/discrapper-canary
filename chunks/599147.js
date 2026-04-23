l.d(t, { o: () => P });
var a = l(627968),
    n = l(64700),
    r = l(192308),
    i = l(691885),
    o = l(150934),
    s = l(821609),
    d = l(73825),
    c = l(473702),
    u = l(52822),
    p = l(570221),
    m = l(793574),
    b = l(688810),
    h = l(95337),
    x = l(412314),
    y = l(456459),
    g = l(916974),
    v = l(347378),
    f = l(606423),
    _ = l(652215);
let E = (e) => {
        let {
                transitionState: t,
                onClose: l,
                premiumSubscription: r,
                premiumType: i,
                churnDiscount: o,
                planId: s,
                renewalInvoice: d,
                renewalInvoiceDetails: c,
                errorOnCancel: u,
                errorOnRedeem: p,
                setActiveStep: h,
                activeStep: x,
            } = e,
            { analyticsLocations: y } = (0, b.Ay)(m.A.USER_SETTINGS),
            [v, f] = n.useState(C(x));
        return (
            (0, n.useEffect)(() => {
                f(C(x));
            }, [x]),
            (0, a.jsx)(g.CancellationContext.Provider, {
                value: {
                    setStep: h,
                    premiumType: i,
                    onClose: l,
                    transitionState: t,
                    premiumSubscription: r,
                    analyticsLocations: y,
                    analyticsLocation: _.ThZ.USER_SETTINGS,
                    confettiCanvas: null,
                    churnUserDiscountOffer: o,
                    isFetchingChurnDiscountOffer: !1,
                    fullPrice: "$9.99",
                    discountedPrice: "$4.99",
                    planId: s,
                    paymentsBlocked: !1,
                    renewalInvoice: d,
                    renewalInvoiceDetails: c,
                    handleCancellation: () =>
                        new Promise((e, t) => {
                            setTimeout(() => {
                                u ? t() : e();
                            }, 1e3);
                        }),
                    applyOffer: () =>
                        new Promise((e, t) => {
                            setTimeout(() => {
                                p ? t() : e();
                            }, 1e3);
                        }),
                    pauseDuration: null,
                    setPauseDuration: () => {},
                },
                children: v,
            })
        );
    },
    C = (e) => {
        switch (e) {
            case c.g.DISCOUNT_APPLIED:
                return (0, a.jsx)(y.V, {});
            case c.g.CONFIRM_DISCOUNT:
                return (0, a.jsx)(x.M, {});
            case c.g.CONFIRM:
                return (0, a.jsx)(h.r, {});
            case c.g.PREVIEW:
                return (0, a.jsx)(v.E, {});
            case c.g.WHAT_YOU_LOSE:
            default:
                return (0, a.jsx)(f.Z, {});
        }
    };
var S = l(601107),
    j = l(788868),
    T = l(818348);
let P = () => {
        let [e, t] = n.useState(j.PremiumTypes.TIER_0),
            [l, m] = n.useState(c.g.WHAT_YOU_LOSE),
            [b, h] = n.useState(null),
            [x, y] = n.useState(j.gD.PREMIUM_MONTH_TIER_0),
            [g, v] = n.useState([]),
            [f, C] = n.useState(() => {
                let e = new Date();
                return e.setMonth(e.getMonth() + 1), e;
            }),
            [P, A] = n.useState(null),
            [k, R] = n.useState(!1),
            [N, M] = n.useState(!1),
            [D, L] = n.useState(!1);
        (0, n.useEffect)(() => {
            (0, d.zS)();
        }, []),
            (0, n.useEffect)(() => {
                let e = new Date();
                switch (x) {
                    case j.gD.PREMIUM_MONTH_TIER_0:
                    case j.gD.PREMIUM_MONTH_TIER_1:
                    case j.gD.PREMIUM_MONTH_TIER_2:
                        e.setMonth(e.getMonth() + 1);
                        break;
                    case j.gD.PREMIUM_YEAR_TIER_0:
                    case j.gD.PREMIUM_YEAR_TIER_1:
                    case j.gD.PREMIUM_YEAR_TIER_2:
                        e.setFullYear(e.getFullYear() + 1);
                }
                C(e);
            }, [x]),
            (0, n.useEffect)(() => {
                switch (e) {
                    case j.PremiumTypes.TIER_0:
                        v([
                            { label: "Nitro Basic Monthly", value: j.gD.PREMIUM_MONTH_TIER_0 },
                            { label: "Nitro Basic Yearly", value: j.gD.PREMIUM_YEAR_TIER_0 },
                        ]),
                            y(j.gD.PREMIUM_MONTH_TIER_0);
                        break;
                    case j.PremiumTypes.TIER_1:
                        v([
                            { label: "Nitro Classic Monthly", value: j.gD.PREMIUM_MONTH_TIER_1 },
                            { label: "Nitro Classic Yearly", value: j.gD.PREMIUM_YEAR_TIER_1 },
                        ]),
                            y(j.gD.PREMIUM_MONTH_TIER_1);
                        break;
                    case j.PremiumTypes.TIER_2:
                        v([
                            { label: "Nitro Monthly", value: j.gD.PREMIUM_MONTH_TIER_2 },
                            { label: "Nitro Yearly", value: j.gD.PREMIUM_YEAR_TIER_2 },
                        ]),
                            y(j.gD.PREMIUM_MONTH_TIER_2);
                }
            }, [e]),
            (0, n.useEffect)(() => {
                [c.g.CONFIRM_DISCOUNT, c.g.DISCOUNT_APPLIED].includes(l) && null === b && h(I()),
                    l === c.g.PREVIEW &&
                        null === P &&
                        A(
                            new p.A({
                                id: "",
                                invoiceItems: [
                                    {
                                        id: "",
                                        subscriptionPlanId: x,
                                        subscriptionPlanPrice: 200,
                                        amount: 400,
                                        quantity: 1,
                                        discounts: [],
                                    },
                                    {
                                        id: "",
                                        subscriptionPlanId: j.gD.PREMIUM_MONTH_GUILD,
                                        subscriptionPlanPrice: 400,
                                        amount: 100,
                                        quantity: 1,
                                        discounts: [],
                                    },
                                ],
                                total: 200,
                                currency: T.Yr.USD,
                                tax: 0,
                                taxInclusive: !0,
                                subscriptionPeriodStart: new Date(),
                                subscriptionPeriodEnd: f,
                                status: _.lT7.PAID,
                            }),
                        ),
                    l !== c.g.PREVIEW && null !== P && A(null);
            }, [l, b, f, x, P]);
        let w = n.useCallback(async () => {
            L(!0),
                await (0, r.openModalLazy)(
                    async () => (t) =>
                        (0, a.jsx)(E, {
                            ...t,
                            onClose: () => {
                                t.onClose(), L(!1);
                            },
                            premiumType: e,
                            churnDiscount: b,
                            planId: x,
                            renewalInvoice: P,
                            renewalInvoiceDetails: { intervalType: j.WT.MONTH, intervalCount: 1 },
                            errorOnCancel: k,
                            errorOnRedeem: N,
                            setActiveStep: (e) => {
                                m(e), t.onClose();
                            },
                            activeStep: l,
                            premiumSubscription: {
                                id: "",
                                planId: x,
                                type: T.rz.PREMIUM,
                                items: [],
                                createdAt: new Date(),
                                canceledAt: null,
                                currentPeriodStart: new Date(),
                                currentPeriodEnd: f,
                                status: _.Dmq.ACTIVE,
                                paymentSourceId: null,
                                paymentGateway: null,
                                paymentGatewayPlanId: null,
                                paymentGatewaySubscriptionId: null,
                                trialId: null,
                                trialEndsAt: null,
                                renewalMutations: null,
                                streakStartedAt: null,
                                currency: T.Yr.USD,
                                pauseEndsAt: null,
                                pauseReason: S.qf.UNKNOWN,
                            },
                        }),
                );
        }, [e, b, x, P, k, N, l, f]);
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
                                { id: "basic", label: "Nitro Basic", value: j.PremiumTypes.TIER_0 },
                                { id: "classic", label: "Nitro Classic", value: j.PremiumTypes.TIER_1 },
                                { id: "default", label: "Nitro", value: j.PremiumTypes.TIER_2 },
                            ],
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    }),
                    g.length > 0 &&
                        (0, a.jsx)(u.MG, {
                            children: (0, a.jsx)(i.l, {
                                label: "Subscription Interval",
                                placeholder: "Premium Type",
                                onSelectionChange: y,
                                formatOption: (e) => {
                                    let { label: t, value: l } = e;
                                    return { id: l, label: t, value: l };
                                },
                                value: x,
                                options: g,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        }),
                    (0, a.jsx)(u.MG, {
                        children: (0, a.jsx)(i.l, {
                            label: "Modal Step",
                            placeholder: "Premium Type",
                            onSelectionChange: m,
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
                            checked: null !== b,
                            onChange: () => {
                                null === b ? h(I()) : h(null);
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
    I = function () {
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
                user_usage_limit_interval: j.Ff.MONTH,
                user_usage_limit_interval_count: 3,
                amount: "40",
                ...t,
            },
        };
    };
