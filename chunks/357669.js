"use strict";
n.d(t, { b: () => l });
var r = n(954571),
    i = n(840251),
    a = n(688151),
    s = n(652215);
let o = new i.E([], a.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r.default.track(s.HAw.PAYMENT_FLOW_STARTED, e, t), o.trigger();
}
