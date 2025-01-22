r.d(n, {
    E2: function () {
        return s;
    },
    cn: function () {
        return l;
    },
    g9: function () {
        return c;
    },
    q2: function () {
        return u;
    }
});
var i = r(751767),
    a = r(960048),
    o = r(231338);
function s(e, n) {
    let r = new Date();
    return r.setMonth(e - 1), r.toLocaleString(n, { month: 'short' });
}
async function l(e) {
    let n = null;
    if (null != e && e.paymentGateway === o.gg.BRAINTREE) {
        let e = await (0, i.A)();
        null != e && (n = { braintree_device_data: e });
    }
    return n;
}
function u(e, n) {
    a.Z.captureException(e, {
        ...n,
        tags: {
            ...(null == n ? void 0 : n.tags),
            app_context: 'billing'
        }
    });
}
function c(e, n) {
    a.Z.captureMessage(e, {
        ...n,
        tags: {
            ...(null == n ? void 0 : n.tags),
            app_context: 'billing'
        }
    });
}
