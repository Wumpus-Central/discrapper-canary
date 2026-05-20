s.d(n, { default: () => v });
var r = s(627968);
s(64700);
var t = s(793574),
    l = s(688810),
    a = s(75304),
    i = s(937008),
    d = s(834252),
    c = s(166532),
    o = s(491057),
    u = s(546042),
    p = s(735305),
    x = s(343834),
    I = s(926795),
    A = s(862241),
    C = s(766734),
    j = s(295405),
    h = s(731230),
    k = s(920241),
    N = s(503698),
    S = s.n(N),
    T = s(939249),
    _ = s(789645),
    E = s(935462),
    P = s(303612),
    y = s(916261),
    m = s(575650);
function g(e) {
    let { className: n, onClose: s } = e;
    return (0, r.jsx)(T.D, {
        className: S()(y.cG, n),
        onClick: s,
        children: (0, r.jsx)(_.P, { size: "xs", color: "currentColor", className: y.yP }),
    });
}
function D(e) {
    let { guildProductListing: n, onClose: s, className: t } = e;
    return (0, r.jsxs)(E.rQ, {
        className: S()(y.wx, m.GI, t),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(P.A, { className: y.F0, listing: n, imageSize: 500, alt: "" }),
            (0, r.jsx)(g, { className: y.b, onClose: s }),
        ],
    });
}
var O = s(196617);
function M(e) {
    let { onClose: n } = e,
        { guildProductListing: s } = (0, k.S)();
    return (0, r.jsx)(D, { guildProductListing: s, className: O.w, onClose: n });
}
let f = (e, n, s) => (s === c.pn.CONFIRM ? null : (0, r.jsx)(M, { onClose: () => n(!1) }));
var R = s(818348);
let U = [
    { key: null, renderStep: (e) => (0, r.jsx)(C.B, { ...e }) },
    {
        key: c.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, r.jsx)(p.x, {
                ...e,
                onReturn: () => {
                    0 === Object.keys(j.A.paymentSources).length
                        ? e.handleClose()
                        : e.handleStepChange(c.pn.REVIEW, { trackedFromStep: c.pn.ADD_PAYMENT_STEPS });
                },
            }),
    },
    { key: c.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(I.A, {}) },
    { key: c.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(x.A, {}) },
    { key: c.pn.REVIEW, renderStep: (e) => (0, r.jsx)(A._M, { ...e }) },
    { key: c.pn.CONFIRM, renderStep: (e) => (0, r.jsx)(h.A, { ...e }) },
];
function v(e) {
    let { guildProductContext: n, sourceAnalyticsLocations: s, applicationId: c, ...p } = e,
        { analyticsLocations: x } = (0, l.Ay)(s, t.A.GUILD_PRODUCT_PAYMENT_MODAL);
    return (0, r.jsx)(k.u, {
        guildId: n.guildId,
        skuId: n.skuId,
        children: (0, r.jsx)(l.f5, {
            value: x,
            children: (0, r.jsx)(d.PaymentContextProvider, {
                stepConfigs: U,
                applicationId: c,
                skuIDs: [p.skuId],
                activeSubscription: null,
                purchaseType: R.VV.ONE_TIME,
                unifiedCheckoutFlow: a.C.GUILD_PRODUCT_CHECKOUT,
                children: (0, r.jsx)(o.Qt, {
                    children: (0, r.jsx)(i.dX, {
                        children: (0, r.jsx)(u.PaymentModal, {
                            initialPlanId: null,
                            analyticsLocations: x,
                            renderHeader: f,
                            ...p,
                        }),
                    }),
                }),
            }),
        }),
    });
}
