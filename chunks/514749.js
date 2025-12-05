n.d(t, { q: () => c }), n(415506);
var r = n(54381);
n(473749);
var i = n(512722),
    a = n.n(i),
    o = n(467368);
let s = (e) => null != e && "StepController" in e && null != e.StepController,
    l = (e) => null != e && "directProps" in e && null != e.directProps;
function c(e) {
    let { step: t, renderStep: n, DirectStepComponent: i } = e;
    return function (e) {
        let { paymentModalStepProps: c } = e,
            u = (0, o.Li)(),
            { unifiedCheckoutStepMappings: d, renderModalProps: f } = u,
            p = d[t];
        if ((a()(null != p, "Step config for ".concat(t, " is not set")), s(p))) {
            if (!u.enableStepControllers) throw Error("Step controllers are not enabled");
            let e = p.StepController,
                { checkoutContext: t } = u;
            return (0, r.jsx)(e, {
                renderStep: n,
                paymentModalStepProps: c,
                checkoutContext: t,
                renderModalProps: f,
            });
        }
        if (l(p)) {
            let e = p.directProps;
            return (0, r.jsx)(i, {
                paymentModalStepProps: c,
                unifiedStepProps: e,
            });
        }
        return null;
    };
}
