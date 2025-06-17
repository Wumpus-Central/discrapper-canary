n.d(t, { U: () => u });
var r = n(288138),
    i = n(626135),
    a = n(91641),
    o = n(959784),
    s = n(987338),
    l = n(981631);
let c = new a.E([o.NR, o.ZI, o.Ob, o.uc, o.m1, r.Z], s.$P.PAYMENT_FLOW_STARTED, { location: 'payment flow started' });
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    i.default.track(l.rMx.PAYMENT_FLOW_STARTED, e, t), c.trigger();
}
