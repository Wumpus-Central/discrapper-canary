var n = r(752266);
function l(e) {
    let { redirect_url: t } = e;
    if (null == t) throw Error("Payment redirect context has no redirect url");
    window.open(t);
}
r.d(
    t,
    {},
    {
        DL: l,
        qn: function (e) {
            let t = null != e ? e.billing_facet : null,
                r = null != t ? t.order_signing_deferral_context : null;
            return null != r ? r.payment_redirect_context : null;
        },
        yu: async function (e) {
            if (null == e) throw Error("Order signing was deferred without a deferral context");
            let { payment_redirect_context: t, stripe_3ds_context: r } = e;
            if (null != t) return void l(t);
            if (null != r) return void (await (0, n.$)(r, e.payment_gateway_merchant_account_id));
            throw Error("Order signing deferral context has no action the client can complete");
        },
    },
);
