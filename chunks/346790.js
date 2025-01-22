r.d(n, {
    n: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(853872),
    o = r(987209),
    s = r(409813),
    l = r(276442);
let u = {
    key: s.h8.ADD_PAYMENT_STEPS,
    renderStep: (e) => (0, i.jsx)(c, { ...e }),
    options: { renderHeader: !0 }
};
function c(e) {
    let { isGift: n } = (0, o.wD)();
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(l.J, {
            ...e,
            breadcrumbSteps: [s.h8.ADD_PAYMENT_STEPS, s.h8.REVIEW, s.h8.CONFIRM],
            onReturn: () => {
                if (0 === Object.keys(a.Z.paymentSources).length) {
                    if (n) {
                        e.handleStepChange(s.h8.GIFT_CUSTOMIZATION);
                        return;
                    }
                    e.handleClose();
                } else e.handleStepChange(s.h8.REVIEW, { trackedFromStep: s.h8.ADD_PAYMENT_STEPS });
            }
        })
    });
}
