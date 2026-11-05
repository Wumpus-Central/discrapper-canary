n.d(t, { ap: () => p, yx: () => h, Cv: () => A, _Z: () => I, uK: () => f, PU: () => g, So: () => E });
var i = n(832081),
    r = n(855986),
    a = n(620632);
n(890245);
let s = {
    KEYS_BY_MERCHANT_ACCOUNT_ID: "u" < typeof window ? void 0 : window.GLOBAL_ENV.STRIPE_KEYS_BY_MERCHANT_ACCOUNT_ID,
};
var l = n(626584),
    o = n(773669),
    d = n(856383),
    c = n(652215);
new l.A("StripeUtils");
let u = new Map(),
    _ = new Set();
function E(e) {
    let t, n;
    try {
        [t, n] = (function (e) {
            function t(t) {
                return `You passed an invalid expiration date ${e}${t ?? ""}Please pass a string containing a numeric month and year such as \`01-17\` or \`2015 / 05\``;
            }
            let n = e.split(/[.\-/\s]+/g);
            2 !== n.length && t();
            let i = n.map((e) => {
                    let i = parseInt(e);
                    return (isNaN(i) && t(`${n} is not a number.`), i < 1 && t(`${i} is less than one.`), i);
                }),
                [r, a] = i[0] > 12 ? [i[1], i[0]] : [i[0], i[1]];
            return (r > 12 && t(`Month must be a number 1-12, not ${r}.`), a < 100 && (a += 2e3), [r, a]);
        })(e);
    } catch (e) {
        return !1;
    }
    let i = new Date(n, t),
        r = new Date();
    return (i.setMonth(i.getMonth() - 1), i.setMonth(i.getMonth() + 1, 1), i > r);
}
function A(e) {
    let t = (function (e) {
            let t = null != e ? s.KEYS_BY_MERCHANT_ACCOUNT_ID?.[e] : null;
            if ("string" == typeof e && "" !== e && "string" != typeof t && !_.has(e)) {
                _.add(e);
                try {
                    d.A.captureMessage(
                        "Stripe publishable key missing for merchant account",
                        {
                            tags: {
                                app_context: "billing",
                                billing_context: "stripe_publishable_key",
                                payment_gateway_merchant_account_id: e,
                                build_environment: window.GLOBAL_ENV.PROJECT_ENV,
                            },
                        },
                        "warning",
                    );
                } catch {}
            }
            return "string" == typeof t && "" !== t ? t : (c.Gg3.STRIPE.KEY ?? "");
        })(e),
        n = u.get(t);
    if (null != n) return n;
    let r = (0, i.loadStripe)(t),
        a = (async () => {
            try {
                return await r;
            } catch (e) {
                throw (u.delete(t), e);
            }
        })();
    return (u.set(t, a), a);
}
async function h(e) {
    let {
        stripe_payment_intent_client_secret: t,
        stripe_payment_intent_payment_method_id: n,
        payment_gateway_merchant_account_id: i,
    } = (await a.Bo.get({ url: c.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e), oldFormErrors: !0, rejectWithError: !0 })).body;
    return { clientSecret: t, paymentMethodId: n ?? null, merchantAccountId: i ?? null };
}
function f(e) {
    let { billing_details: t } = e,
        n = t.address ?? {},
        i = {
            name: t.name ?? "",
            line1: n.line1 ?? "",
            line2: n.line2 ?? "",
            city: n.city ?? "",
            state: n.state ?? "",
            country: n.country ?? "",
            postalCode: n.postal_code ?? "",
        };
    return { token: e.id, billingAddressInfo: i };
}
function I(e) {
    let { name: t, line1: n, line2: i, city: r, state: a, postalCode: s, country: l } = e;
    return { name: t, address: { line1: n, line2: i, city: r, state: a, postal_code: s, country: l } };
}
async function p(e) {
    try {
        let { clientSecret: t, merchantAccountId: n } = await h(e),
            i = await A(n);
        if (null == i) return { error: "unable to load stripe" };
        let { error: r, paymentIntent: a } = await i.retrievePaymentIntent(t);
        if (null != r) return { error: r.message };
        if (null == a) return { error: "payment intent does not exist" };
        let s = {};
        switch (
            ("requires_payment_method" === a.status &&
                null != a.last_payment_error &&
                null != a.last_payment_error.payment_method &&
                (s.payment_method = a.last_payment_error.payment_method.id),
            a.status)
        ) {
            case "requires_payment_method":
            case "requires_confirmation":
            case "requires_action":
                let { error: l } = await i.confirmCardPayment(t, s);
                if (null != l) return { error: l.message };
                return {};
            case "succeeded":
            case "processing":
                return {};
            default:
                return { error: `Invalid Payment Intent status: ${a.status}` };
        }
    } catch (e) {
        return { error: e.message };
    }
}
let m = { "en-US": "en", "zh-CN": "zh", "sv-SE": "sv" };
function g() {
    return (0, r.bG)([o.default], () => {
        var e;
        return m[(e = o.default.locale)] ?? e;
    });
}
