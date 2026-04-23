t.d(n, { default: () => N });
var r = t(627968);
t(64700);
var l = t(793574),
    s = t(688810),
    a = t(285871),
    i = t(937008),
    u = t(156312),
    o = t(166532),
    c = t(491057),
    d = t(546042),
    p = t(735305),
    A = t(343834),
    x = t(467122),
    _ = t(623020),
    P = t(881677),
    C = t(295405),
    j = t(304186),
    h = t(920241),
    I = t(316464),
    S = t(818348);
let v = [
    { key: null, renderStep: (e) => (0, r.jsx)(P.B, { ...e }) },
    {
        key: o.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, r.jsx)(p.x, {
                ...e,
                onReturn: () => {
                    0 === Object.keys(C.A.paymentSources).length
                        ? e.handleClose()
                        : e.handleStepChange(o.pn.REVIEW, { trackedFromStep: o.pn.ADD_PAYMENT_STEPS });
                },
            }),
    },
    { key: o.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(x.A, {}) },
    { key: o.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(A.A, {}) },
    { key: o.pn.REVIEW, renderStep: (e) => (0, r.jsx)(_._, { ...e }) },
    { key: o.pn.CONFIRM, renderStep: (e) => (0, r.jsx)(j.A, { ...e }) },
];
function N(e) {
    let { guildProductContext: n, sourceAnalyticsLocations: t, applicationId: o, ...p } = e,
        { analyticsLocations: A } = (0, s.Ay)(t, l.A.GUILD_PRODUCT_PAYMENT_MODAL);
    return (0, r.jsx)(h.u, {
        ...n,
        children: (0, r.jsx)(s.f5, {
            value: A,
            children: (0, r.jsx)(u.PaymentContextProvider, {
                stepConfigs: v,
                applicationId: o,
                skuIDs: [p.skuId],
                activeSubscription: null,
                purchaseType: S.VV.ONE_TIME,
                unifiedCheckoutFlow: a.C.GUILD_PRODUCT_CHECKOUT,
                children: (0, r.jsx)(c.Qt, {
                    children: (0, r.jsx)(i.dX, {
                        children: (0, r.jsx)(d.PaymentModal, {
                            initialPlanId: null,
                            analyticsLocations: A,
                            renderHeader: I.j,
                            ...p,
                        }),
                    }),
                }),
            }),
        }),
    });
}
