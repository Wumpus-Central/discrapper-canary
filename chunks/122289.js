n.d(t, {
    E2: () => s,
    cn: () => o,
    g9: () => u,
    q2: () => l
});
var i = n(751767),
    r = n(960048),
    a = n(231338);
function s(e, t) {
    let n = new Date();
    return n.setMonth(e - 1), n.toLocaleString(t, { month: 'short' });
}
async function o(e) {
    let t = null;
    if (null != e && e.paymentGateway === a.gg.BRAINTREE) {
        let e = await (0, i.A)();
        null != e && (t = { braintree_device_data: e });
    }
    return t;
}
function l(e, t) {
    r.Z.captureException(e, {
        ...t,
        tags: {
            ...(null == t ? void 0 : t.tags),
            app_context: 'billing'
        }
    });
}
function u(e, t) {
    r.Z.captureMessage(e, {
        ...t,
        tags: {
            ...(null == t ? void 0 : t.tags),
            app_context: 'billing'
        }
    });
}
