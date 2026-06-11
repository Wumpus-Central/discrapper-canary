n.d(r, { getApplicationPaymentSteps: () => o });
var p = n(627968);
n(64700);
var t = n(166532),
    s = n(735305),
    d = n(7764),
    a = n(924076),
    i = n(984742),
    u = n(155301),
    S = n(758655),
    c = n(375708);
function o() {
    return [
        { key: null, renderStep: (e) => (0, p.jsx)(u.A, { ...e }) },
        {
            key: t.pn.BENEFITS,
            renderStep: (e) => (0, p.jsx)(a.A, { ...e }),
            options: { useBreadcrumbLabel: () => c.intl.string(c.t["5LD2+B"]) },
        },
        {
            key: t.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) =>
                (0, p.jsx)(s.x, { ...e, breadcrumbSteps: [t.pn.ADD_PAYMENT_STEPS, t.pn.REVIEW, t.pn.CONFIRM] }),
            options: { renderHeader: !0 },
        },
        ...d.hh,
        {
            key: t.pn.REVIEW,
            renderStep: (e) => (0, p.jsx)(S.A, { ...e }),
            options: { renderHeader: !0, useBreadcrumbLabel: () => c.intl.string(c.t.QBnNHq) },
        },
        { key: t.pn.CONFIRM, renderStep: (e) => (0, p.jsx)(i.A, { ...e }) },
    ];
}
