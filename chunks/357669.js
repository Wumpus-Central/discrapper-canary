n.d(t, { b: () => o });
var i = n(174459),
    l = n(840251),
    s = n(688151),
    u = n(652215);
let a = new l.E([], s.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    i.default.track(u.HAw.PAYMENT_FLOW_STARTED, e, t), a.trigger();
}
