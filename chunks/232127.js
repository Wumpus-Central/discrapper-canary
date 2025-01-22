r.d(n, {
    U: function () {
        return p;
    }
});
var i = r(737143),
    a = r(926841),
    o = r(213264),
    s = r(626135),
    l = r(91641),
    u = r(959784),
    c = r(987338),
    d = r(981631);
let f = new l.E([u.NR, u.ZI, u.Ob, u.uc, u.m1, a.b, i.L4, o.u], c.$P.PAYMENT_FLOW_STARTED, { location: 'payment flow started' });
function p(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    s.default.track(d.rMx.PAYMENT_FLOW_STARTED, e, n), f.trigger();
}
