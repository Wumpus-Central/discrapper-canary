n.d(t, { n: () => l });
var i = n(200651);
n(192379);
var r = n(853872),
    a = n(987209),
    s = n(409813),
    o = n(276442);
let l = {
    key: s.h8.ADD_PAYMENT_STEPS,
    renderStep: (e) => (0, i.jsx)(u, { ...e }),
    options: { renderHeader: !0 }
};
function u(e) {
    let { isGift: t } = (0, a.wD)();
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(o.J, {
            ...e,
            breadcrumbSteps: [s.h8.ADD_PAYMENT_STEPS, s.h8.REVIEW, s.h8.CONFIRM],
            onReturn: () => {
                if (0 === Object.keys(r.Z.paymentSources).length) {
                    if (t) {
                        e.handleStepChange(s.h8.GIFT_CUSTOMIZATION);
                        return;
                    }
                    e.handleClose();
                } else e.handleStepChange(s.h8.REVIEW, { trackedFromStep: s.h8.ADD_PAYMENT_STEPS });
            }
        })
    });
}
