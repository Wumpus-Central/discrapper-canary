n.d(t, { b: () => o });
var l = n(954571),
    r = n(840251),
    u = n(688151),
    i = n(652215);
let a = new r.E([], u.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    l.default.track(i.HAw.PAYMENT_FLOW_STARTED, e, t), a.trigger();
}
