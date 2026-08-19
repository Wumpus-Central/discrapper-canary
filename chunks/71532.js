"use strict";
let i;
n.d(t, { Cv: () => _, PU: () => p, So: () => u, _Z: () => h, ap: () => I, uK: () => A, ux: () => E });
var r = n(832081),
    a = n(17928),
    s = n(636537),
    l = n(626584),
    o = n(773669),
    d = n(652215);
let c = new l.A("StripeUtils");
function u(e) {
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
                    return isNaN(i) && t(`${n} is not a number.`), i < 1 && t(`${i} is less than one.`), i;
                }),
                [r, a] = i[0] > 12 ? [i[1], i[0]] : [i[0], i[1]];
            return r > 12 && t(`Month must be a number 1-12, not ${r}.`), a < 100 && (a += 2e3), [r, a];
        })(e);
    } catch (e) {
        return !1;
    }
    let i = new Date(n, t),
        r = new Date();
    return i.setMonth(i.getMonth() - 1), i.setMonth(i.getMonth() + 1, 1), i > r;
}
function _() {
    return null != i ? Promise.resolve(i) : (0, r.loadStripe)(d.Gg3.STRIPE.KEY).then((e) => ((i = e), e));
}
function E() {
    return null == d.Gg3.STRIPE.KEY
        ? (c.warn("getStripeClientMode() called before PaymentSettings.STRIPE.KEY initialized: ", d.Gg3.STRIPE.KEY),
          "unknown")
        : d.Gg3.STRIPE.KEY.startsWith("pk_live")
          ? "live"
          : d.Gg3.STRIPE.KEY.startsWith("pk_test")
            ? "test"
            : (c.warn("Unexpected value for Stripe public key: ", d.Gg3.STRIPE.KEY), "unknown");
}
function A(e) {
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
function h(e) {
    let { name: t, line1: n, line2: i, city: r, state: a, postalCode: s, country: l } = e;
    return { name: t, address: { line1: n, line2: i, city: r, state: a, postal_code: s, country: l } };
}
async function I(e) {
    try {
        let { stripe_payment_intent_client_secret: t } = (
                await s.Bo.get({ url: d.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e), oldFormErrors: !0, rejectWithError: !1 })
            ).body,
            n = await _();
        if (null == n) return { error: "unable to load stripe" };
        let { error: i, paymentIntent: r } = await n.retrievePaymentIntent(t);
        if (null != i) return { error: i.message };
        if (null == r) return { error: "payment intent does not exist" };
        let a = {};
        switch (
            ("requires_payment_method" === r.status &&
                null != r.last_payment_error &&
                null != r.last_payment_error.payment_method &&
                (a.payment_method = r.last_payment_error.payment_method.id),
            r.status)
        ) {
            case "requires_payment_method":
            case "requires_confirmation":
            case "requires_action":
                let { error: l } = await n.confirmCardPayment(t, a);
                if (null != l) return { error: l.message };
                return {};
            case "succeeded":
            case "processing":
                return {};
            default:
                return { error: `Invalid Payment Intent status: ${r.status}` };
        }
    } catch (e) {
        return { error: e.message };
    }
}
let f = { "en-US": "en", "zh-CN": "zh", "sv-SE": "sv" };
function p() {
    return (0, a.bG)([o.default], () => {
        var e;
        return f[(e = o.default.locale)] ?? e;
    });
}
