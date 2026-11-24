var r = n(752266),
    i = n(901112),
    a = n(26279);
function l(e) {
    let t = null != e ? e.billing_facet : null;
    return t?.order_signing_deferral_context ?? null;
}
function o(e) {
    return l(e)?.stripe_next_action_context ?? null;
}
function u(e) {
    let t = o(e)?.expires_at;
    return null != t ? new Date(t).getTime() : null;
}
class s extends Error {
    name = "PaymentRedirectUrlMissing";
    constructor() {
        super("Payment redirect context has no redirect url");
    }
}
class c extends Error {
    name = "SigningDeferralContextMissing";
    constructor() {
        super("Order signing was deferred without a deferral context");
    }
}
class d extends Error {
    name = "SigningDeferralActionUnsupported";
    constructor() {
        super("Order signing deferral context has no action the client can complete");
    }
}
function f(e) {
    let { redirect_url: t } = e;
    if (null == t) throw new s();
    window.open(t);
}
n.d(
    t,
    {},
    {
        A9: function (e) {
            let t = u(e);
            return null != t && Date.now() >= t;
        },
        DL: f,
        FU: function (e) {
            let t = u(e);
            return null != t ? t + 12e4 : null;
        },
        qn: function (e) {
            let t = l(e);
            return null != t ? t.payment_redirect_context : null;
        },
        rH: function (e) {
            return l(e)?.payment_gateway_merchant_account_id ?? null;
        },
        yi: o,
        yu: async function (e) {
            if (null == e) throw new c();
            let { payment_redirect_context: t, stripe_3ds_context: n, stripe_next_action_context: a } = e;
            if (null != t) return void f(t);
            if (null != n) return void (await (0, r.$)(n, e.payment_gateway_merchant_account_id));
            if (null != a) return void (await (0, i.Z)(a, e.payment_gateway_merchant_account_id));
            throw new d();
        },
        z1: function (e) {
            return null != e && e.status === a.Re.SIGNING_IN_PROGRESS && null != o(e);
        },
    },
);
