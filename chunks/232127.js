n.d(t, { U: () => l });
var r = n(626135),
    i = n(91641),
    a = n(987338),
    o = n(981631);
let s = new i.E([], a.$P.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r.default.track(o.rMx.PAYMENT_FLOW_STARTED, e, t), s.trigger();
}
