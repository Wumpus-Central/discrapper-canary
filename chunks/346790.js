t.d(n, {
    n: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var l = t(853872),
    s = t(987209),
    r = t(409813),
    a = t(276442);
let o = {
    key: r.h8.ADD_PAYMENT_STEPS,
    renderStep: (e) => (0, i.jsx)(d, { ...e }),
    options: { renderHeader: !0 }
};
function d(e) {
    let { isGift: n } = (0, s.wD)();
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(a.J, {
            ...e,
            breadcrumbSteps: [r.h8.ADD_PAYMENT_STEPS, r.h8.REVIEW, r.h8.CONFIRM],
            onReturn: () => {
                if (0 === Object.keys(l.Z.paymentSources).length) {
                    if (n) {
                        e.handleStepChange(r.h8.GIFT_CUSTOMIZATION);
                        return;
                    }
                    e.handleClose();
                } else e.handleStepChange(r.h8.REVIEW, { trackedFromStep: r.h8.ADD_PAYMENT_STEPS });
            }
        })
    });
}
