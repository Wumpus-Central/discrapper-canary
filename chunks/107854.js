n.d(e, { getApplicationPaymentSteps: () => p });
var i = n(627968);
n(64700);
var l = n(166532),
    r = n(735305),
    a = n(721252),
    s = n(924076),
    o = n(984742),
    c = n(155301),
    u = n(758655),
    d = n(985018);
function p(t) {
    let { guildId: e, showBenefitsFirst: n } = t;
    return [
        {
            key: null,
            renderStep: (t) => (0, i.jsx)(c.A, { initialStep: n ? l.pn.BENEFITS : l.pn.REVIEW, guildId: e, ...t }),
        },
        {
            key: l.pn.BENEFITS,
            renderStep: (t) => (0, i.jsx)(s.A, { ...t }),
            options: { useBreadcrumbLabel: () => d.intl.string(d.t["5LD2+B"]) },
        },
        {
            key: l.pn.ADD_PAYMENT_STEPS,
            renderStep: (t) =>
                (0, i.jsx)(r.x, { ...t, breadcrumbSteps: [l.pn.ADD_PAYMENT_STEPS, l.pn.REVIEW, l.pn.CONFIRM] }),
            options: { renderHeader: !0 },
        },
        ...a.hh,
        {
            key: l.pn.REVIEW,
            renderStep: (t) =>
                (0, i.jsx)(u.A, { backButtonEligible: !!n || void 0, prevStep: n ? l.pn.BENEFITS : void 0, ...t }),
            options: { renderHeader: !0, useBreadcrumbLabel: () => d.intl.string(d.t.QBnNHq) },
        },
        { key: l.pn.CONFIRM, renderStep: (t) => (0, i.jsx)(o.A, { showBenefits: !n, ...t }) },
    ];
}
