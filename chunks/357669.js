n.d(t, { b: () => o });
var l = n(174459),
    r = n(840251),
    i = n(688151),
    a = n(652215);
let s = new r.E([], i.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    l.default.track(a.HAw.PAYMENT_FLOW_STARTED, e, t), s.trigger();
}
