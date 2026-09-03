n.d(t, { eS: () => o, gr: () => u, hD: () => _, ob: () => d, pM: () => c });
var i = n(636537),
    r = n(136857),
    a = n(184015),
    s = n(38405),
    l = n(818348);
function o(e, t) {
    let n = new Date();
    return n.setMonth(e - 1), n.toLocaleString(t, { month: "short" });
}
async function d(e) {
    let t = null;
    if (null != e && e.paymentGateway === l.kM.BRAINTREE) {
        let e = await (0, a.Z)();
        null != e && (t = { braintree_device_data: e });
    }
    return t;
}
function c(e, t) {
    s.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "billing" } });
}
function u(e) {
    return (
        (e instanceof i.oh && !!(e.status >= 400) && !!(e.status < 500)) ||
        (e instanceof r.Ay && null != e.status && !!(e.status >= 400) && !!(e.status < 500))
    );
}
function _(e, t) {
    s.A.captureMessage(e, { ...t, tags: { ...t?.tags, app_context: "billing" } });
}
