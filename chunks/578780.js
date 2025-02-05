t.d(n, { default: () => v });
var r = t(200651);
t(192379);
var o = t(100527),
    l = t(906732),
    s = t(987209),
    u = t(563132),
    a = t(409813),
    c = t(791785),
    i = t(276442),
    d = t(793541),
    h = t(380898),
    _ = t(710094),
    x = t(865921),
    P = t(853872),
    p = t(806984),
    I = t(464797),
    C = t(946211),
    f = t(231338);
let j = [
    {
        key: null,
        renderStep: (e) => (0, r.jsx)(x.v, { ...e })
    },
    {
        key: a.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, r.jsx)(i.J, {
                ...e,
                onReturn: () => {
                    0 === Object.keys(P.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(a.h8.REVIEW, { trackedFromStep: a.h8.ADD_PAYMENT_STEPS });
                }
            })
    },
    {
        key: a.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, r.jsx)(h.Z, {})
    },
    {
        key: a.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, r.jsx)(d.Z, {})
    },
    {
        key: a.h8.REVIEW,
        renderStep: (e) => (0, r.jsx)(_.l, { ...e })
    },
    {
        key: a.h8.CONFIRM,
        renderStep: (e) => (0, r.jsx)(p.Z, { ...e })
    }
];
function v(e) {
    let { guildProductContext: n, sourceAnalyticsLocations: t, applicationId: a, ...i } = e,
        { analyticsLocations: d } = (0, l.ZP)(t, o.Z.GUILD_PRODUCT_PAYMENT_MODAL);
    return (0, r.jsx)(I.R, {
        ...n,
        children: (0, r.jsx)(l.Gt, {
            value: d,
            children: (0, r.jsx)(u.PaymentContextProvider, {
                stepConfigs: j,
                applicationId: a,
                skuIDs: [i.skuId],
                activeSubscription: null,
                purchaseType: f.GZ.ONE_TIME,
                children: (0, r.jsx)(s.KB, {
                    children: (0, r.jsx)(c.PaymentModal, {
                        initialPlanId: null,
                        analyticsLocations: d,
                        renderHeader: C.L,
                        ...i
                    })
                })
            })
        })
    });
}
