n.d(t, { b: () => u });
var i = n(954571),
    r = n(840251),
    l = n(688151),
    s = n(652215);
let a = new r.E([], l.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    i.default.track(s.HAw.PAYMENT_FLOW_STARTED, e, t), a.trigger();
}
