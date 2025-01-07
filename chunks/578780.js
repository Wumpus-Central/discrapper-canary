t.r(n),
    t.d(n, {
        default: function () {
            return v;
        }
    });
var r = t(200651);
t(192379);
var o = t(100527),
    u = t(906732),
    a = t(987209),
    c = t(563132),
    l = t(409813),
    i = t(791785),
    s = t(276442),
    d = t(793541),
    h = t(380898),
    f = t(710094),
    x = t(865921),
    p = t(853872),
    I = t(806984),
    _ = t(464797),
    C = t(946211),
    P = t(231338);
let j = [
    {
        key: null,
        renderStep: (e) => (0, r.jsx)(x.v, { ...e })
    },
    {
        key: l.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, r.jsx)(s.J, {
                ...e,
                onReturn: () => {
                    0 === Object.keys(p.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(l.h8.REVIEW, { trackedFromStep: l.h8.ADD_PAYMENT_STEPS });
                }
            })
    },
    {
        key: l.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, r.jsx)(h.Z, {})
    },
    {
        key: l.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, r.jsx)(d.Z, {})
    },
    {
        key: l.h8.REVIEW,
        renderStep: (e) => (0, r.jsx)(f.l, { ...e })
    },
    {
        key: l.h8.CONFIRM,
        renderStep: (e) => (0, r.jsx)(I.Z, { ...e })
    }
];
function v(e) {
    let { guildProductContext: n, sourceAnalyticsLocations: t, applicationId: l, ...s } = e,
        { analyticsLocations: d } = (0, u.ZP)(t, o.Z.GUILD_PRODUCT_PAYMENT_MODAL);
    return (0, r.jsx)(_.R, {
        ...n,
        children: (0, r.jsx)(u.Gt, {
            value: d,
            children: (0, r.jsx)(c.PaymentContextProvider, {
                stepConfigs: j,
                applicationId: l,
                skuIDs: [s.skuId],
                activeSubscription: null,
                purchaseType: P.GZ.ONE_TIME,
                children: (0, r.jsx)(a.KB, {
                    children: (0, r.jsx)(i.PaymentModal, {
                        initialPlanId: null,
                        analyticsLocations: d,
                        renderHeader: C.L,
                        ...s
                    })
                })
            })
        })
    });
}
