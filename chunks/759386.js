t.d(e, { getApplicationPaymentSteps: () => m }), t(47120);
var i = t(200651);
t(192379);
var l = t(409813),
    r = t(276442),
    a = t(961830),
    o = t(721165),
    s = t(519801),
    u = t(589771),
    c = t(883419),
    d = t(388032);
function m(n) {
    let { guildId: e, showBenefitsFirst: t } = n;
    return [
        {
            key: null,
            renderStep: (n) =>
                (0, i.jsx)(u.Z, {
                    initialStep: t ? l.h8.BENEFITS : l.h8.REVIEW,
                    guildId: e,
                    ...n
                })
        },
        {
            key: l.h8.BENEFITS,
            renderStep: (n) => (0, i.jsx)(o.Z, { ...n }),
            options: { useBreadcrumbLabel: () => d.intl.string(d.t['5LD2+P']) }
        },
        {
            key: l.h8.ADD_PAYMENT_STEPS,
            renderStep: (n) =>
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(r.J, {
                        ...n,
                        breadcrumbSteps: [l.h8.ADD_PAYMENT_STEPS, l.h8.REVIEW, l.h8.CONFIRM]
                    })
                }),
            options: { renderHeader: !0 }
        },
        ...a.yp,
        {
            key: l.h8.REVIEW,
            renderStep: (n) =>
                (0, i.jsx)(c.Z, {
                    backButtonEligible: !!t || void 0,
                    prevStep: t ? l.h8.BENEFITS : void 0,
                    ...n
                }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: () => d.intl.string(d.t.QBnNHh)
            }
        },
        {
            key: l.h8.CONFIRM,
            renderStep: (n) =>
                (0, i.jsx)(s.Z, {
                    showBenefits: !t,
                    ...n
                })
        }
    ];
}
