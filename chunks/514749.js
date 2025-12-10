n.d(t, { q: () => l });
var r = n(54381);
n(473749);
var i = n(512722),
    a = n.n(i),
    o = n(467368),
    s = n(508869);
function l(e) {
    let { step: t, renderStep: n } = e;
    return function (e) {
        let { paymentModalStepProps: i, unifiedStepDefinition: l } = e,
            { renderModalProps: c, sharedCheckoutContext: u } = (0, o.Li)();
        if ((a()(null != l, "Step config for ".concat(t, " is not set")), (0, s.y)(l))) {
            let e = l.StepController;
            return (0, r.jsx)(e, {
                renderStep: n,
                paymentModalStepProps: i,
                sharedCheckoutContext: u,
                renderModalProps: c,
            });
        }
        return null;
    };
}
