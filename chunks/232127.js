n.d(t, { U: () => f });
var r = n(620824),
    i = n(737143),
    o = n(926841),
    a = n(626135),
    s = n(91641),
    l = n(959784),
    c = n(987338),
    u = n(981631);
let d = new s.E([l.NR, l.ZI, l.Ob, l.uc, l.m1, r.y, o.b, i.L4], c.$P.PAYMENT_FLOW_STARTED, { location: 'payment flow started' });
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    a.default.track(u.rMx.PAYMENT_FLOW_STARTED, e, t), d.trigger();
}
