"use strict";
n.d(t, { hh: () => A, kJ: () => f, r2: () => E, zK: () => p, zX: () => g });
var r = n(627968);
n(64700);
var i = n(295405),
    s = n(166532),
    a = n(735305),
    o = n(343834),
    l = n(467122),
    u = n(33190),
    c = n(623020),
    d = n(881677),
    _ = n(985018);
let f = { key: null, renderStep: (e) => (0, r.jsx)(d.B, { ...e }) },
    p = {
        key: s.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, r.jsx)(a.x, {
                ...e,
                breadcrumbSteps: [s.pn.ADD_PAYMENT_STEPS, s.pn.REVIEW, s.pn.CONFIRM],
                onReturn: () => {
                    0 === Object.keys(i.A.paymentSources).length
                        ? e.handleClose()
                        : e.handleStepChange(s.pn.REVIEW, { trackedFromStep: s.pn.ADD_PAYMENT_STEPS });
                },
            }),
        options: { renderHeader: !0 },
    },
    h = { key: s.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(l.A, {}) },
    m = { key: s.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(o.A, {}), options: { renderHeader: !0 } },
    E = {
        key: s.pn.REVIEW,
        renderStep: (e) => (0, r.jsx)(c._, { ...e }),
        options: { useBreadcrumbLabel: () => _.intl.string(_.t.QBnNHq) },
    },
    g = { key: s.pn.CONFIRM, renderStep: (e) => (0, r.jsx)(u.k, { ...e }) },
    A = [h, m];
