var n = r(752266),
    i = r(901112),
    l = r(26279);
function a(e) {
    let t = null != e ? e.billing_facet : null;
    return t?.order_signing_deferral_context ?? null;
}
function o(e) {
    return a(e)?.stripe_next_action_context ?? null;
}
function u(e) {
    let t = o(e)?.expires_at;
    return null != t ? new Date(t).getTime() : null;
}
function c(e) {
    let { redirect_url: t } = e;
    if (null == t) throw Error("Payment redirect context has no redirect url");
    window.open(t);
}
r.d(
    t,
    {},
    {
        A9: function (e) {
            let t = u(e);
            return null != t && Date.now() >= t;
        },
        DL: c,
        FU: function (e) {
            let t = u(e);
            return null != t ? t + 12e4 : null;
        },
        qn: function (e) {
            let t = a(e);
            return null != t ? t.payment_redirect_context : null;
        },
        rH: function (e) {
            return a(e)?.payment_gateway_merchant_account_id ?? null;
        },
        yi: o,
        yu: async function (e) {
            if (null == e) throw Error("Order signing was deferred without a deferral context");
            let { payment_redirect_context: t, stripe_3ds_context: r, stripe_next_action_context: l } = e;
            if (null != t) return void c(t);
            if (null != r) return void (await (0, n.$)(r, e.payment_gateway_merchant_account_id));
            if (null != l) return void (await (0, i.Z)(l, e.payment_gateway_merchant_account_id));
            throw Error("Order signing deferral context has no action the client can complete");
        },
        z1: function (e) {
            return null != e && e.status === l.Re.SIGNING_IN_PROGRESS && null != o(e);
        },
    },
);
