n.d(t, { U: () => d });
var r = n(288138),
    i = n(626135),
    o = n(483942),
    a = n(91641),
    s = n(959784),
    l = n(987338),
    c = n(981631);
let u = new a.E([s.NR, s.ZI, s.Ob, s.uc, s.m1, o.kF, o.kS, o.yR, o.Aq, o.f7, o.Fe, r.Z], l.$P.PAYMENT_FLOW_STARTED, {
    location: "payment flow started",
});
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    i.default.track(c.rMx.PAYMENT_FLOW_STARTED, e, t), u.trigger();
}
