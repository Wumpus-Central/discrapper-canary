l.d(t, { o: () => I });
var a = l(627968),
    n = l(64700),
    i = l(192308),
    r = l(691885),
    o = l(150934),
    s = l(821609),
    u = l(73825),
    d = l(473702),
    c = l(52822),
    p = l(669316),
    m = l(570221),
    h = l(793574),
    b = l(688810),
    x = l(95337),
    y = l(412314),
    g = l(456459),
    f = l(916974),
    v = l(347378),
    E = l(606423),
    S = l(652215);
let C = (e) => {
        let {
                transitionState: t,
                onClose: l,
                premiumSubscription: i,
                premiumType: r,
                churnDiscount: o,
                planId: s,
                renewalInvoice: u,
                renewalInvoiceDetails: d,
                errorOnCancel: c,
                errorOnRedeem: p,
                setActiveStep: m,
                activeStep: x,
            } = e,
            { analyticsLocations: y } = (0, b.Ay)(h.A.USER_SETTINGS),
            [g, v] = n.useState(j(x));
        return (
            (0, n.useEffect)(() => {
                v(j(x));
            }, [x]),
            (0, a.jsx)(f.CancellationContext.Provider, {
                value: {
                    setStep: m,
                    premiumType: r,
                    onClose: l,
                    transitionState: t,
                    premiumSubscription: i,
                    analyticsLocations: y,
                    analyticsLocation: S.ThZ.USER_SETTINGS,
                    confettiCanvas: null,
                    churnUserDiscountOffer: o,
                    isFetchingChurnDiscountOffer: !1,
                    fullPrice: "$9.99",
                    discountedPrice: "$4.99",
                    planId: s,
                    paymentsBlocked: !1,
                    renewalInvoice: u,
                    renewalInvoiceDetails: d,
                    handleCancellation: () =>
                        new Promise((e, t) => {
                            setTimeout(() => {
                                c ? t() : e();
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
                children: g,
            })
        );
    },
    j = (e) => {
        switch (e) {
            case d.g.DISCOUNT_APPLIED:
                return (0, a.jsx)(g.V, {});
            case d.g.CONFIRM_DISCOUNT:
                return (0, a.jsx)(y.M, {});
            case d.g.CONFIRM:
                return (0, a.jsx)(x.r, {});
            case d.g.PREVIEW:
                return (0, a.jsx)(v.E, {});
            case d.g.WHAT_YOU_LOSE:
            default:
                return (0, a.jsx)(E.Z, {});
        }
    };
var T = l(601107),
    P = l(788868),
    A = l(818348);
let I = () => {
        let [e, t] = n.useState(P.PremiumTypes.TIER_0),
            [l, p] = n.useState(d.g.WHAT_YOU_LOSE),
            [h, b] = n.useState(null),
            [x, y] = n.useState(P.gD.PREMIUM_MONTH_TIER_0),
            [g, f] = n.useState([]),
            [v, E] = n.useState(() => {
                let e = new Date();
                return e.setMonth(e.getMonth() + 1), e;
            }),
            [j, I] = n.useState(null),
            [k, R] = n.useState(!1),
            [N, M] = n.useState(!1),
            [D, O] = n.useState(!1);
        (0, n.useEffect)(() => {
            (0, u.zS)();
        }, []),
            (0, n.useEffect)(() => {
                let e = new Date();
                switch (x) {
                    case P.gD.PREMIUM_MONTH_TIER_0:
                    case P.gD.PREMIUM_MONTH_TIER_1:
                    case P.gD.PREMIUM_MONTH_TIER_2:
                        e.setMonth(e.getMonth() + 1);
                        break;
                    case P.gD.PREMIUM_YEAR_TIER_0:
                    case P.gD.PREMIUM_YEAR_TIER_1:
                    case P.gD.PREMIUM_YEAR_TIER_2:
                        e.setFullYear(e.getFullYear() + 1);
                }
                E(e);
            }, [x]),
            (0, n.useEffect)(() => {
                switch (e) {
                    case P.PremiumTypes.TIER_0:
                        f([
                            { label: "Nitro Basic Monthly", value: P.gD.PREMIUM_MONTH_TIER_0 },
                            { label: "Nitro Basic Yearly", value: P.gD.PREMIUM_YEAR_TIER_0 },
                        ]),
                            y(P.gD.PREMIUM_MONTH_TIER_0);
                        break;
                    case P.PremiumTypes.TIER_1:
                        f([
                            { label: "Nitro Classic Monthly", value: P.gD.PREMIUM_MONTH_TIER_1 },
                            { label: "Nitro Classic Yearly", value: P.gD.PREMIUM_YEAR_TIER_1 },
                        ]),
                            y(P.gD.PREMIUM_MONTH_TIER_1);
                        break;
                    case P.PremiumTypes.TIER_2:
                        f([
                            { label: "Nitro Monthly", value: P.gD.PREMIUM_MONTH_TIER_2 },
                            { label: "Nitro Yearly", value: P.gD.PREMIUM_YEAR_TIER_2 },
                        ]),
                            y(P.gD.PREMIUM_MONTH_TIER_2);
                }
            }, [e]),
            (0, n.useEffect)(() => {
                [d.g.CONFIRM_DISCOUNT, d.g.DISCOUNT_APPLIED].includes(l) && null === h && b(_()),
                    l === d.g.PREVIEW &&
                        null === j &&
                        I(
                            new m.A({
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
                                        subscriptionPlanId: P.gD.PREMIUM_MONTH_GUILD,
                                        subscriptionPlanPrice: 400,
                                        amount: 100,
                                        quantity: 1,
                                        discounts: [],
                                    },
                                ],
                                total: 200,
                                currency: A.Yr.USD,
                                tax: 0,
                                taxInclusive: !0,
                                subscriptionPeriodStart: new Date(),
                                subscriptionPeriodEnd: v,
                                status: S.lT7.PAID,
                            }),
                        ),
                    l !== d.g.PREVIEW && null !== j && I(null);
            }, [l, h, v, x, j]);
        let L = n.useCallback(async () => {
            O(!0),
                await (0, i.openModalLazy)(
                    async () => (t) =>
                        (0, a.jsx)(C, {
                            ...t,
                            onClose: () => {
                                t.onClose(), O(!1);
                            },
                            premiumType: e,
                            churnDiscount: h,
                            planId: x,
                            renewalInvoice: j,
                            renewalInvoiceDetails: { intervalType: P.WT.MONTH, intervalCount: 1 },
                            errorOnCancel: k,
                            errorOnRedeem: N,
                            setActiveStep: (e) => {
                                p(e), t.onClose();
                            },
                            activeStep: l,
                            premiumSubscription: {
                                id: "",
                                planId: x,
                                type: A.rz.PREMIUM,
                                items: [],
                                createdAt: new Date(),
                                canceledAt: null,
                                currentPeriodStart: new Date(),
                                currentPeriodEnd: v,
                                status: S.Dmq.ACTIVE,
                                paymentSourceId: null,
                                paymentGateway: null,
                                paymentGatewayPlanId: null,
                                paymentGatewaySubscriptionId: null,
                                trialId: null,
                                trialEndsAt: null,
                                renewalMutations: null,
                                streakStartedAt: null,
                                currency: A.Yr.USD,
                                pauseEndsAt: null,
                                pauseReason: T.qf.UNKNOWN,
                            },
                        }),
                );
        }, [e, h, x, j, k, N, l, v]);
        return (
            (0, n.useEffect)(() => {
                D && L();
            }, [l, D, L]),
            (0, a.jsxs)(c.LB, {
                children: [
                    (0, a.jsx)(c.MG, {
                        children: (0, a.jsx)(r.l, {
                            label: "Premium Subscription",
                            placeholder: "Premium Type",
                            onSelectionChange: t,
                            value: e,
                            options: [
                                { id: "basic", label: "Nitro Basic", value: P.PremiumTypes.TIER_0 },
                                { id: "classic", label: "Nitro Classic", value: P.PremiumTypes.TIER_1 },
                                { id: "default", label: "Nitro", value: P.PremiumTypes.TIER_2 },
                            ],
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    }),
                    g.length > 0 &&
                        (0, a.jsx)(c.MG, {
                            children: (0, a.jsx)(r.l, {
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
                    (0, a.jsx)(c.MG, {
                        children: (0, a.jsx)(r.l, {
                            label: "Modal Step",
                            placeholder: "Premium Type",
                            onSelectionChange: p,
                            value: l,
                            options: [
                                { id: "whatYouLose", label: "What You Lose", value: d.g.WHAT_YOU_LOSE },
                                { id: "confirmDiscount", label: "Confirm Discount", value: d.g.CONFIRM_DISCOUNT },
                                { id: "discountApplied", label: "Discount Applied", value: d.g.DISCOUNT_APPLIED },
                                { id: "confirmCancel", label: "Confirm Cancel", value: d.g.CONFIRM },
                                { id: "previewInvoice", label: "Preview Invoice", value: d.g.PREVIEW },
                            ],
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                    }),
                    (0, a.jsx)(c.MG, {
                        children: (0, a.jsx)(o.S, {
                            checked: null !== h,
                            onChange: () => {
                                null === h ? b(_()) : b(null);
                            },
                            label: "Churn Discount",
                        }),
                    }),
                    (0, a.jsx)(c.MG, {
                        children: (0, a.jsx)(o.S, {
                            checked: N,
                            onChange: () => {
                                M(!N);
                            },
                            label: "Error on Redeem Offer",
                        }),
                    }),
                    (0, a.jsx)(c.MG, {
                        children: (0, a.jsx)(o.S, {
                            checked: k,
                            onChange: () => {
                                R(!k);
                            },
                            label: "Error on Cancel",
                        }),
                    }),
                    (0, a.jsx)(c.nB, {}),
                    (0, a.jsx)(s.$, {
                        onClick: () => {
                            O(!0);
                        },
                        variant: "primary",
                        size: "md",
                        text: "Open Cancellation Modal",
                    }),
                ],
            })
        );
    },
    _ = () =>
        p.A.createFromServer({
            id: "",
            discount_id: "",
            user_id: "",
            discount: {
                id: "",
                plan_ids: [],
                user_usage_limit: 3,
                user_usage_limit_interval: P.Ff.MONTH,
                user_usage_limit_interval_count: 3,
                amount: "40",
            },
        });
