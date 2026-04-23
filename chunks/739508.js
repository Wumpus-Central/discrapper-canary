"use strict";
n.d(t, { eS: () => a, hD: () => d, ob: () => o, pM: () => l });
var i = n(184015),
    r = n(38405),
    s = n(818348);
function a(e, t) {
    let n = new Date();
    return n.setMonth(e - 1), n.toLocaleString(t, { month: "short" });
}
async function o(e) {
    let t = null;
    if (null != e && e.paymentGateway === s.kM.BRAINTREE) {
        let e = await (0, i.Z)();
        null != e && (t = { braintree_device_data: e });
    }
    return t;
}
function l(e, t) {
    r.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "billing" } });
}
function d(e, t) {
    r.A.captureMessage(e, { ...t, tags: { ...t?.tags, app_context: "billing" } });
}
