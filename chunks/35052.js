t.d(n, { default: () => v });
var r = t(627968);
t(64700);
var l = t(793574),
    s = t(688810),
    a = t(937008),
    i = t(156312),
    u = t(166532),
    c = t(491057),
    o = t(546042),
    d = t(735305),
    A = t(343834),
    p = t(467122),
    x = t(623020),
    _ = t(881677),
    P = t(295405),
    j = t(304186),
    h = t(920241),
    I = t(316464),
    S = t(818348);
let C = [
    { key: null, renderStep: (e) => (0, r.jsx)(_.B, { ...e }) },
    {
        key: u.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, r.jsx)(d.x, {
                ...e,
                onReturn: () => {
                    0 === Object.keys(P.A.paymentSources).length
                        ? e.handleClose()
                        : e.handleStepChange(u.pn.REVIEW, { trackedFromStep: u.pn.ADD_PAYMENT_STEPS });
                },
            }),
    },
    { key: u.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(p.A, {}) },
    { key: u.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(A.A, {}) },
    { key: u.pn.REVIEW, renderStep: (e) => (0, r.jsx)(x._, { ...e }) },
    { key: u.pn.CONFIRM, renderStep: (e) => (0, r.jsx)(j.A, { ...e }) },
];
function v(e) {
    let { guildProductContext: n, sourceAnalyticsLocations: t, applicationId: u, ...d } = e,
        { analyticsLocations: A } = (0, s.Ay)(t, l.A.GUILD_PRODUCT_PAYMENT_MODAL);
    return (0, r.jsx)(h.u, {
        ...n,
        children: (0, r.jsx)(s.f5, {
            value: A,
            children: (0, r.jsx)(i.PaymentContextProvider, {
                stepConfigs: C,
                applicationId: u,
                skuIDs: [d.skuId],
                activeSubscription: null,
                purchaseType: S.VV.ONE_TIME,
                children: (0, r.jsx)(c.Qt, {
                    children: (0, r.jsx)(a.dX, {
                        children: (0, r.jsx)(o.PaymentModal, {
                            initialPlanId: null,
                            analyticsLocations: A,
                            renderHeader: I.j,
                            ...d,
                        }),
                    }),
                }),
            }),
        }),
    });
}
