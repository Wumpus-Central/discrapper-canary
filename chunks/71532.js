"use strict";
let r;
n.d(t, { Cv: () => _, PU: () => g, So: () => d, _Z: () => h, ap: () => E, uK: () => p, ux: () => f });
var i = n(832081),
    s = n(311907),
    a = n(562465),
    o = n(626584),
    l = n(773669),
    u = n(652215);
let c = new o.A("StripeUtils"),
    d = (e) => {
        let t, n;
        try {
            [t, n] = ((e) => {
                let t = (t) =>
                        `You passed an invalid expiration date ${e}${t ?? ""}Please pass a string containing a numeric month and year such as \`01-17\` or \`2015 / 05\``,
                    n = e.split(/[.\-/\s]+/g);
                2 !== n.length && t();
                let r = n.map((e) => {
                        let r = parseInt(e);
                        return isNaN(r) && t(`${n} is not a number.`), r < 1 && t(`${r} is less than one.`), r;
                    }),
                    [i, s] = r[0] > 12 ? [r[1], r[0]] : [r[0], r[1]];
                return i > 12 && t(`Month must be a number 1-12, not ${i}.`), s < 100 && (s += 2e3), [i, s];
            })(e);
        } catch (e) {
            return !1;
        }
        let r = new Date(n, t),
            i = new Date();
        return r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > i;
    };
function _() {
    return null != r ? Promise.resolve(r) : (0, i.loadStripe)(u.Gg3.STRIPE.KEY).then((e) => ((r = e), e));
}
function f() {
    return null == u.Gg3.STRIPE.KEY
        ? (c.warn("getStripeClientMode() called before PaymentSettings.STRIPE.KEY initialized: ", u.Gg3.STRIPE.KEY),
          "unknown")
        : u.Gg3.STRIPE.KEY.startsWith("pk_live")
          ? "live"
          : u.Gg3.STRIPE.KEY.startsWith("pk_test")
            ? "test"
            : (c.warn("Unexpected value for Stripe public key: ", u.Gg3.STRIPE.KEY), "unknown");
}
function p(e) {
    let { billing_details: t } = e,
        n = t.address ?? {},
        r = {
            name: t.name ?? "",
            line1: n.line1 ?? "",
            line2: n.line2 ?? "",
            city: n.city ?? "",
            state: n.state ?? "",
            country: n.country ?? "",
            postalCode: n.postal_code ?? "",
        };
    return { token: e.id, billingAddressInfo: r };
}
function h(e) {
    let { name: t, line1: n, line2: r, city: i, state: s, postalCode: a, country: o } = e;
    return { name: t, address: { line1: n, line2: r, city: i, state: s, postal_code: a, country: o } };
}
async function E(e) {
    try {
        let { stripe_payment_intent_client_secret: t } = (
                await a.Bo.get({ url: u.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e), oldFormErrors: !0, rejectWithError: !1 })
            ).body,
            n = await _();
        if (null == n) return { error: "unable to load stripe" };
        let { error: r, paymentIntent: i } = await n.retrievePaymentIntent(t);
        if (null != r) return { error: r.message };
        if (null == i) return { error: "payment intent does not exist" };
        let s = {};
        switch (
            ("requires_payment_method" === i.status &&
                null != i.last_payment_error &&
                null != i.last_payment_error.payment_method &&
                (s.payment_method = i.last_payment_error.payment_method.id),
            i.status)
        ) {
            case "requires_payment_method":
            case "requires_confirmation":
            case "requires_action":
                let { error: o } = await n.confirmCardPayment(t, s);
                if (null != o) return { error: o.message };
                return {};
            case "succeeded":
            case "processing":
                return {};
            default:
                return { error: `Invalid Payment Intent status: ${i.status}` };
        }
    } catch (e) {
        return { error: e.message };
    }
}
let m = { "en-US": "en", "zh-CN": "zh", "sv-SE": "sv" },
    g = () =>
        (0, s.bG)([l.default], () => {
            var e;
            return m[(e = l.default.locale)] ?? e;
        });
