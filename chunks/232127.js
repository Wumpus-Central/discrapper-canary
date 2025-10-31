n.d(t, { U: () => u });
var r = n(626135),
    i = n(483942),
    a = n(91641),
    o = n(959784),
    s = n(987338),
    l = n(981631);
let c = new a.E([o.NR, o.ZI, o.Ob, o.uc, o.m1, i.kF, i.kS, i.yR, i.Aq, i.f7, i.Fe], s.$P.PAYMENT_FLOW_STARTED, {
    location: "payment flow started",
});
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r.default.track(l.rMx.PAYMENT_FLOW_STARTED, e, t), c.trigger();
}
