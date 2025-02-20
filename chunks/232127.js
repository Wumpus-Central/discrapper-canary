n.d(t, { U: () => p });
var r = n(620824),
    i = n(737143),
    o = n(926841),
    a = n(213264),
    s = n(626135),
    l = n(91641),
    c = n(959784),
    u = n(987338),
    d = n(981631);
let f = new l.E([c.NR, c.ZI, c.Ob, c.uc, c.m1, r.y, o.b, i.L4, a.u], u.$P.PAYMENT_FLOW_STARTED, { location: 'payment flow started' });
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    s.default.track(d.rMx.PAYMENT_FLOW_STARTED, e, t), f.trigger();
}
