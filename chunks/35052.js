t.d(n, { default: () => v });
var r = t(627968);
t(64700);
var l = t(793574),
    s = t(688810),
    a = t(285871),
    i = t(937008),
    u = t(156312),
    c = t(166532),
    o = t(491057),
    d = t(546042),
    A = t(735305),
    p = t(343834),
    x = t(467122),
    _ = t(623020),
    P = t(881677),
    C = t(295405),
    j = t(304186),
    h = t(920241),
    I = t(316464),
    S = t(818348);
let T = [
    { key: null, renderStep: (e) => (0, r.jsx)(P.B, { ...e }) },
    {
        key: c.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, r.jsx)(A.x, {
                ...e,
                onReturn: () => {
                    0 === Object.keys(C.A.paymentSources).length
                        ? e.handleClose()
                        : e.handleStepChange(c.pn.REVIEW, { trackedFromStep: c.pn.ADD_PAYMENT_STEPS });
                },
            }),
    },
    { key: c.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(x.A, {}) },
    { key: c.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(p.A, {}) },
    { key: c.pn.REVIEW, renderStep: (e) => (0, r.jsx)(_._, { ...e }) },
    { key: c.pn.CONFIRM, renderStep: (e) => (0, r.jsx)(j.A, { ...e }) },
];
function v(e) {
    let { guildProductContext: n, sourceAnalyticsLocations: t, applicationId: c, ...A } = e,
        { analyticsLocations: p } = (0, s.Ay)(t, l.A.GUILD_PRODUCT_PAYMENT_MODAL);
    return (0, r.jsx)(h.u, {
        ...n,
        children: (0, r.jsx)(s.f5, {
            value: p,
            children: (0, r.jsx)(u.PaymentContextProvider, {
                stepConfigs: T,
                applicationId: c,
                skuIDs: [A.skuId],
                activeSubscription: null,
                purchaseType: S.VV.ONE_TIME,
                unifiedCheckoutFlow: a.C.GUILD_PRODUCT_CHECKOUT,
                children: (0, r.jsx)(o.Qt, {
                    children: (0, r.jsx)(i.dX, {
                        children: (0, r.jsx)(d.PaymentModal, {
                            initialPlanId: null,
                            analyticsLocations: p,
                            renderHeader: I.j,
                            ...A,
                        }),
                    }),
                }),
            }),
        }),
    });
}
