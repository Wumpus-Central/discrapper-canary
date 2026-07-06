n.d(t, { b: () => o });
var l = n(174459),
    i = n(840251),
    r = n(688151),
    a = n(652215);
let s = new i.E([], r.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    l.default.track(a.HAw.PAYMENT_FLOW_STARTED, e, t), s.trigger();
}
