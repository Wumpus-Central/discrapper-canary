"use strict";
n.d(t, { hh: () => A, kJ: () => f, r2: () => g, zK: () => p, zX: () => E });
var r = n(627968);
n(64700);
var i = n(295405),
    a = n(166532),
    s = n(735305),
    o = n(343834),
    l = n(467122),
    u = n(33190),
    c = n(623020),
    d = n(881677),
    _ = n(985018);
let f = { key: null, renderStep: (e) => (0, r.jsx)(d.B, { ...e }) },
    p = {
        key: a.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, r.jsx)(s.x, {
                ...e,
                breadcrumbSteps: [a.pn.ADD_PAYMENT_STEPS, a.pn.REVIEW, a.pn.CONFIRM],
                onReturn: () => {
                    0 === Object.keys(i.A.paymentSources).length
                        ? e.handleClose()
                        : e.handleStepChange(a.pn.REVIEW, { trackedFromStep: a.pn.ADD_PAYMENT_STEPS });
                },
            }),
        options: { renderHeader: !0 },
    },
    h = { key: a.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(l.A, {}) },
    m = { key: a.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(o.A, {}), options: { renderHeader: !0 } },
    g = {
        key: a.pn.REVIEW,
        renderStep: (e) => (0, r.jsx)(c._M, { ...e }),
        options: { useBreadcrumbLabel: () => _.intl.string(_.t.QBnNHq) },
    },
    E = { key: a.pn.CONFIRM, renderStep: (e) => (0, r.jsx)(u.k, { ...e }) },
    A = [h, m];
