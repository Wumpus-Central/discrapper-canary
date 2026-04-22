n.d(t, { hh: () => _, kJ: () => p, r2: () => h, zK: () => m, zX: () => f });
var l = n(627968);
n(64700);
var r = n(295405),
    i = n(166532),
    s = n(735305),
    a = n(343834),
    o = n(467122),
    u = n(33190),
    d = n(623020),
    c = n(881677),
    C = n(985018);
let p = { key: null, renderStep: (e) => (0, l.jsx)(c.B, { ...e }), options: { modalSizeGetter: () => "md" } },
    m = {
        key: i.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, l.jsx)(s.x, {
                ...e,
                breadcrumbSteps: [i.pn.ADD_PAYMENT_STEPS, i.pn.REVIEW, i.pn.CONFIRM],
                onReturn: () => {
                    0 === Object.keys(r.A.paymentSources).length
                        ? e.handleClose()
                        : e.handleStepChange(i.pn.REVIEW, { trackedFromStep: i.pn.ADD_PAYMENT_STEPS });
                },
            }),
        options: { renderHeader: !0 },
    },
    E = { key: i.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(o.A, {}) },
    A = { key: i.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(a.A, {}), options: { renderHeader: !0 } },
    h = {
        key: i.pn.REVIEW,
        renderStep: (e) => (0, l.jsx)(d._, { ...e }),
        options: { useBreadcrumbLabel: () => C.intl.string(C.t.QBnNHq) },
    },
    f = { key: i.pn.CONFIRM, renderStep: (e) => (0, l.jsx)(u.k, { ...e }) },
    _ = [E, A];
