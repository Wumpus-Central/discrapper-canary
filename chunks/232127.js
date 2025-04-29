n.d(t, { U: () => c });
var r = n(626135),
    i = n(91641),
    o = n(959784),
    a = n(987338),
    s = n(981631);
let l = new i.E([o.NR, o.ZI, o.Ob, o.uc, o.m1], a.$P.PAYMENT_FLOW_STARTED, { location: 'payment flow started' });
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r.default.track(s.rMx.PAYMENT_FLOW_STARTED, e, t), l.trigger();
}
