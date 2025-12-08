n.d(t, { q: () => l });
var r = n(54381);
n(473749);
var i = n(512722),
    a = n.n(i),
    o = n(467368);
let s = (e) => null != e && "StepController" in e && null != e.StepController;
function l(e) {
    let { step: t, renderStep: n } = e;
    return function (e) {
        let { paymentModalStepProps: i, unifiedStepDefinition: l } = e,
            { renderModalProps: c, sharedCheckoutContext: u } = (0, o.Li)();
        if ((a()(null != l, "Step config for ".concat(t, " is not set")), s(l))) {
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
