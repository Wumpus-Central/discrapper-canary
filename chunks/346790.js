t.d(n, {
    n: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var l = t(853872),
    s = t(987209),
    a = t(409813),
    r = t(276442);
let o = {
    key: a.h8.ADD_PAYMENT_STEPS,
    renderStep: (e) => (0, i.jsx)(d, { ...e }),
    options: { renderHeader: !0 }
};
function d(e) {
    let { isGift: n } = (0, s.wD)();
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(r.J, {
            ...e,
            breadcrumbSteps: [a.h8.ADD_PAYMENT_STEPS, a.h8.REVIEW, a.h8.CONFIRM],
            onReturn: () => {
                if (0 === Object.keys(l.Z.paymentSources).length) {
                    if (n) {
                        e.handleStepChange(a.h8.GIFT_CUSTOMIZATION);
                        return;
                    }
                    e.handleClose();
                } else e.handleStepChange(a.h8.REVIEW, { trackedFromStep: a.h8.ADD_PAYMENT_STEPS });
            }
        })
    });
}
