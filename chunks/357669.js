n.d(t, { b: () => o });
var l = n(954571),
    i = n(840251),
    a = n(688151),
    r = n(652215);
let s = new i.E([], a.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    l.default.track(r.HAw.PAYMENT_FLOW_STARTED, e, t), s.trigger();
}
