r.d(n, {
    U: function () {
        return h;
    }
});
var i = r(620824),
    a = r(737143),
    o = r(926841),
    s = r(213264),
    l = r(626135),
    u = r(91641),
    c = r(959784),
    d = r(987338),
    f = r(981631);
let p = new u.E([c.NR, c.ZI, c.Ob, c.uc, c.m1, i.y, o.b, a.L4, s.u], d.$P.PAYMENT_FLOW_STARTED, { location: 'payment flow started' });
function h(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    l.default.track(f.rMx.PAYMENT_FLOW_STARTED, e, n), p.trigger();
}
