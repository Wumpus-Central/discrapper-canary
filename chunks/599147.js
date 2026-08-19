l.d(t, { o: () => P });
var a = l(477900),
    n = l(582128),
    i = l(192308),
    r = l(691885),
    o = l(150934),
    s = l(821609),
    u = l(73825),
    d = l(473702),
    c = l(52822),
    p = l(669316),
    m = l(570221),
    b = l(793574),
    h = l(688810),
    x = l(95337),
    y = l(412314),
    f = l(456459),
    v = l(916974),
    g = l(347378),
    E = l(606423),
    S = l(652215);
function C(e) {
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
        { analyticsLocations: y } = (0, h.Ay)(b.A.USER_SETTINGS),
        [f, g] = n.useState(j(x));
    return (
        (0, n.useEffect)(() => {
            g(j(x));
        }, [x]),
        (0, a.jsx)(v.CancellationContext.Provider, {
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
            children: f,
        })
    );
}
function j(e) {
    switch (e) {
        case d.g.DISCOUNT_APPLIED:
            return (0, a.jsx)(f.V, {});
        case d.g.CONFIRM_DISCOUNT:
            return (0, a.jsx)(y.M, {});
        case d.g.CONFIRM:
            return (0, a.jsx)(x.r, {});
        case d.g.PREVIEW:
            return (0, a.jsx)(g.E, {});
        case d.g.WHAT_YOU_LOSE:
        default:
            return (0, a.jsx)(E.Z, {});
    }
}
var T = l(601107),
    I = l(202541),
    A = l(818348);
let P = () => {
    let [e, t] = n.useState(I.PremiumTypes.TIER_0),
        [l, p] = n.useState(d.g.WHAT_YOU_LOSE),
        [b, h] = n.useState(null),
        [x, y] = n.useState(I.gD.PREMIUM_MONTH_TIER_0),
        [f, v] = n.useState([]),
        [g, E] = n.useState(() => {
            let e = new Date();
            return e.setMonth(e.getMonth() + 1), e;
        }),
        [j, P] = n.useState(null),
        [R, k] = n.useState(!1),
        [M, N] = n.useState(!1),
        [D, V] = n.useState(!1);
    (0, n.useEffect)(() => {
        (0, u.zS)();
    }, []),
        (0, n.useEffect)(() => {
            let e = new Date();
            switch (x) {
                case I.gD.PREMIUM_MONTH_TIER_0:
                case I.gD.PREMIUM_MONTH_TIER_1:
                case I.gD.PREMIUM_MONTH_TIER_2:
                    e.setMonth(e.getMonth() + 1);
                    break;
                case I.gD.PREMIUM_YEAR_TIER_0:
                case I.gD.PREMIUM_YEAR_TIER_1:
                case I.gD.PREMIUM_YEAR_TIER_2:
                    e.setFullYear(e.getFullYear() + 1);
            }
            E(e);
        }, [x]),
        (0, n.useEffect)(() => {
            switch (e) {
                case I.PremiumTypes.TIER_0:
                    v([
                        { label: "Nitro Basic Monthly", value: I.gD.PREMIUM_MONTH_TIER_0 },
                        { label: "Nitro Basic Yearly", value: I.gD.PREMIUM_YEAR_TIER_0 },
                    ]),
                        y(I.gD.PREMIUM_MONTH_TIER_0);
                    break;
                case I.PremiumTypes.TIER_1:
                    v([
                        { label: "Nitro Classic Monthly", value: I.gD.PREMIUM_MONTH_TIER_1 },
                        { label: "Nitro Classic Yearly", value: I.gD.PREMIUM_YEAR_TIER_1 },
                    ]),
                        y(I.gD.PREMIUM_MONTH_TIER_1);
                    break;
                case I.PremiumTypes.TIER_2:
                    v([
                        { label: "Nitro Monthly", value: I.gD.PREMIUM_MONTH_TIER_2 },
                        { label: "Nitro Yearly", value: I.gD.PREMIUM_YEAR_TIER_2 },
                    ]),
                        y(I.gD.PREMIUM_MONTH_TIER_2);
            }
        }, [e]),
        (0, n.useEffect)(() => {
            [d.g.CONFIRM_DISCOUNT, d.g.DISCOUNT_APPLIED].includes(l) && null === b && h(_()),
                l === d.g.PREVIEW &&
                    null === j &&
                    P(
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
                                    subscriptionPlanId: I.gD.PREMIUM_MONTH_GUILD,
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
                            subscriptionPeriodEnd: g,
                            status: S.lT7.PAID,
                        }),
                    ),
                l !== d.g.PREVIEW && null !== j && P(null);
        }, [l, b, g, x, j]);
    let O = n.useCallback(async () => {
        V(!0),
            await (0, i.openModalLazy)(
                async () => (t) =>
                    (0, a.jsx)(C, {
                        ...t,
                        onClose: () => {
                            t.onClose(), V(!1);
                        },
                        premiumType: e,
                        churnDiscount: b,
                        planId: x,
                        renewalInvoice: j,
                        renewalInvoiceDetails: { intervalType: I.WT.MONTH, intervalCount: 1 },
                        errorOnCancel: R,
                        errorOnRedeem: M,
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
                            currentPeriodEnd: g,
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
    }, [e, b, x, j, R, M, l, g]);
    return (
        (0, n.useEffect)(() => {
            D && O();
        }, [l, D, O]),
        (0, a.jsxs)(c.LB, {
            children: [
                (0, a.jsx)(c.MG, {
                    children: (0, a.jsx)(r.l, {
                        label: "Premium Subscription",
                        placeholder: "Premium Type",
                        onSelectionChange: t,
                        value: e,
                        options: [
                            { id: "basic", label: "Nitro Basic", value: I.PremiumTypes.TIER_0 },
                            { id: "classic", label: "Nitro Classic", value: I.PremiumTypes.TIER_1 },
                            { id: "default", label: "Nitro", value: I.PremiumTypes.TIER_2 },
                        ],
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                }),
                f.length > 0 &&
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
                            options: f,
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
                        checked: null !== b,
                        onChange: () => {
                            null === b ? h(_()) : h(null);
                        },
                        label: "Churn Discount",
                    }),
                }),
                (0, a.jsx)(c.MG, {
                    children: (0, a.jsx)(o.S, {
                        checked: M,
                        onChange: () => {
                            N(!M);
                        },
                        label: "Error on Redeem Offer",
                    }),
                }),
                (0, a.jsx)(c.MG, {
                    children: (0, a.jsx)(o.S, {
                        checked: R,
                        onChange: () => {
                            k(!R);
                        },
                        label: "Error on Cancel",
                    }),
                }),
                (0, a.jsx)(c.nB, {}),
                (0, a.jsx)(s.$, {
                    onClick: () => {
                        V(!0);
                    },
                    variant: "primary",
                    size: "md",
                    text: "Open Cancellation Modal",
                }),
            ],
        })
    );
};
function _() {
    return p.A.createFromServer({
        id: "",
        discount_id: "",
        user_id: "",
        discount: {
            id: "",
            plan_ids: [],
            user_usage_limit: 3,
            user_usage_limit_interval: I.Ff.MONTH,
            user_usage_limit_interval_count: 3,
            amount: "40",
        },
    });
}
