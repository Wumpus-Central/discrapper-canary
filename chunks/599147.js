l.d(t, { o: () => _ });
var a = l(477900),
    n = l(582128),
    i = l(192308),
    r = l(691885),
    o = l(150934),
    s = l(821609),
    u = l(73825),
    c = l(473702),
    d = l(349738),
    p = l(669316),
    m = l(570221),
    h = l(793574),
    b = l(688810),
    x = l(95337),
    f = l(412314),
    g = l(456459),
    E = l(916974),
    y = l(347378),
    v = l(606423),
    C = l(652215);
function S(e) {
    let {
            transitionState: t,
            onClose: l,
            premiumSubscription: i,
            premiumType: r,
            churnDiscount: o,
            planId: s,
            renewalInvoice: u,
            renewalInvoiceDetails: c,
            errorOnCancel: d,
            errorOnRedeem: p,
            setActiveStep: m,
            activeStep: x,
        } = e,
        { analyticsLocations: f } = (0, b.Ay)(h.A.USER_SETTINGS),
        [g, y] = n.useState(j(x));
    return (
        (0, n.useEffect)(() => {
            y(j(x));
        }, [x]),
        (0, a.jsx)(E.CancellationContext.Provider, {
            value: {
                setStep: m,
                premiumType: r,
                onClose: l,
                transitionState: t,
                premiumSubscription: i,
                analyticsLocations: f,
                analyticsLocation: C.ThZ.USER_SETTINGS,
                confettiCanvas: null,
                churnUserDiscountOffer: o,
                isFetchingChurnDiscountOffer: !1,
                fullPrice: "$9.99",
                discountedPrice: "$4.99",
                planId: s,
                paymentsBlocked: !1,
                renewalInvoice: u,
                renewalInvoiceDetails: c,
                handleCancellation: () =>
                    new Promise((e, t) => {
                        setTimeout(() => {
                            d ? t() : e();
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
}
function j(e) {
    switch (e) {
        case c.g.DISCOUNT_APPLIED:
            return (0, a.jsx)(g.V, {});
        case c.g.CONFIRM_DISCOUNT:
            return (0, a.jsx)(f.M, {});
        case c.g.CONFIRM:
            return (0, a.jsx)(x.r, {});
        case c.g.PREVIEW:
            return (0, a.jsx)(y.E, {});
        case c.g.WHAT_YOU_LOSE:
        default:
            return (0, a.jsx)(v.Z, {});
    }
}
var T = l(601107),
    A = l(202541),
    I = l(818348);
let _ = () => {
    let [e, t] = n.useState(A.PremiumTypes.TIER_0),
        [l, p] = n.useState(c.g.WHAT_YOU_LOSE),
        [h, b] = n.useState(null),
        [x, f] = n.useState(A.gD.PREMIUM_MONTH_TIER_0),
        [g, E] = n.useState([]),
        [y, v] = n.useState(() => {
            let e = new Date();
            return e.setMonth(e.getMonth() + 1), e;
        }),
        [j, _] = n.useState(null),
        [R, k] = n.useState(!1),
        [N, M] = n.useState(!1),
        [D, L] = n.useState(!1);
    (0, n.useEffect)(() => {
        (0, u.zS)();
    }, []),
        (0, n.useEffect)(() => {
            let e = new Date();
            switch (x) {
                case A.gD.PREMIUM_MONTH_TIER_0:
                case A.gD.PREMIUM_MONTH_TIER_1:
                case A.gD.PREMIUM_MONTH_TIER_2:
                    e.setMonth(e.getMonth() + 1);
                    break;
                case A.gD.PREMIUM_YEAR_TIER_0:
                case A.gD.PREMIUM_YEAR_TIER_1:
                case A.gD.PREMIUM_YEAR_TIER_2:
                    e.setFullYear(e.getFullYear() + 1);
            }
            v(e);
        }, [x]),
        (0, n.useEffect)(() => {
            switch (e) {
                case A.PremiumTypes.TIER_0:
                    E([
                        { label: "Nitro Basic Monthly", value: A.gD.PREMIUM_MONTH_TIER_0 },
                        { label: "Nitro Basic Yearly", value: A.gD.PREMIUM_YEAR_TIER_0 },
                    ]),
                        f(A.gD.PREMIUM_MONTH_TIER_0);
                    break;
                case A.PremiumTypes.TIER_1:
                    E([
                        { label: "Nitro Classic Monthly", value: A.gD.PREMIUM_MONTH_TIER_1 },
                        { label: "Nitro Classic Yearly", value: A.gD.PREMIUM_YEAR_TIER_1 },
                    ]),
                        f(A.gD.PREMIUM_MONTH_TIER_1);
                    break;
                case A.PremiumTypes.TIER_2:
                    E([
                        { label: "Nitro Monthly", value: A.gD.PREMIUM_MONTH_TIER_2 },
                        { label: "Nitro Yearly", value: A.gD.PREMIUM_YEAR_TIER_2 },
                    ]),
                        f(A.gD.PREMIUM_MONTH_TIER_2);
            }
        }, [e]),
        (0, n.useEffect)(() => {
            [c.g.CONFIRM_DISCOUNT, c.g.DISCOUNT_APPLIED].includes(l) && null === h && b(P()),
                l === c.g.PREVIEW &&
                    null === j &&
                    _(
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
                                    subscriptionPlanId: A.gD.PREMIUM_MONTH_GUILD,
                                    subscriptionPlanPrice: 400,
                                    amount: 100,
                                    quantity: 1,
                                    discounts: [],
                                },
                            ],
                            total: 200,
                            currency: I.Yr.USD,
                            tax: 0,
                            taxInclusive: !0,
                            subscriptionPeriodStart: new Date(),
                            subscriptionPeriodEnd: y,
                            status: C.lT7.PAID,
                        }),
                    ),
                l !== c.g.PREVIEW && null !== j && _(null);
        }, [l, h, y, x, j]);
    let O = n.useCallback(async () => {
        L(!0),
            await (0, i.openModalLazy)(
                async () => (t) =>
                    (0, a.jsx)(S, {
                        ...t,
                        onClose: () => {
                            t.onClose(), L(!1);
                        },
                        premiumType: e,
                        churnDiscount: h,
                        planId: x,
                        renewalInvoice: j,
                        renewalInvoiceDetails: { intervalType: A.WT.MONTH, intervalCount: 1 },
                        errorOnCancel: R,
                        errorOnRedeem: N,
                        setActiveStep: (e) => {
                            p(e), t.onClose();
                        },
                        activeStep: l,
                        premiumSubscription: {
                            id: "",
                            planId: x,
                            type: I.rz.PREMIUM,
                            items: [],
                            createdAt: new Date(),
                            canceledAt: null,
                            currentPeriodStart: new Date(),
                            currentPeriodEnd: y,
                            status: C.Dmq.ACTIVE,
                            paymentSourceId: null,
                            paymentGateway: null,
                            paymentGatewayPlanId: null,
                            paymentGatewaySubscriptionId: null,
                            trialId: null,
                            trialEndsAt: null,
                            renewalMutations: null,
                            streakStartedAt: null,
                            currency: I.Yr.USD,
                            pauseEndsAt: null,
                            pauseReason: T.qf.UNKNOWN,
                        },
                    }),
            );
    }, [e, h, x, j, R, N, l, y]);
    return (
        (0, n.useEffect)(() => {
            D && O();
        }, [l, D, O]),
        (0, a.jsxs)(d.LB, {
            children: [
                (0, a.jsx)(d.MG, {
                    children: (0, a.jsx)(r.l, {
                        label: "Premium Subscription",
                        placeholder: "Premium Type",
                        onSelectionChange: t,
                        value: e,
                        options: [
                            { id: "basic", label: "Nitro Basic", value: A.PremiumTypes.TIER_0 },
                            { id: "classic", label: "Nitro Classic", value: A.PremiumTypes.TIER_1 },
                            { id: "default", label: "Nitro", value: A.PremiumTypes.TIER_2 },
                        ],
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                }),
                g.length > 0 &&
                    (0, a.jsx)(d.MG, {
                        children: (0, a.jsx)(r.l, {
                            label: "Subscription Interval",
                            placeholder: "Premium Type",
                            onSelectionChange: f,
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
                (0, a.jsx)(d.MG, {
                    children: (0, a.jsx)(r.l, {
                        label: "Modal Step",
                        placeholder: "Premium Type",
                        onSelectionChange: p,
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
                (0, a.jsx)(d.MG, {
                    children: (0, a.jsx)(o.S, {
                        checked: null !== h,
                        onChange: () => {
                            null === h ? b(P()) : b(null);
                        },
                        label: "Churn Discount",
                    }),
                }),
                (0, a.jsx)(d.MG, {
                    children: (0, a.jsx)(o.S, {
                        checked: N,
                        onChange: () => {
                            M(!N);
                        },
                        label: "Error on Redeem Offer",
                    }),
                }),
                (0, a.jsx)(d.MG, {
                    children: (0, a.jsx)(o.S, {
                        checked: R,
                        onChange: () => {
                            k(!R);
                        },
                        label: "Error on Cancel",
                    }),
                }),
                (0, a.jsx)(d.nB, {}),
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
};
function P() {
    return p.A.createFromServer({
        id: "",
        discount_id: "",
        user_id: "",
        discount: {
            id: "",
            plan_ids: [],
            user_usage_limit: 3,
            user_usage_limit_interval: A.Ff.MONTH,
            user_usage_limit_interval_count: 3,
            amount: "40",
        },
    });
}
