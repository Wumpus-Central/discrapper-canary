"use strict";
let i;
n.d(t, { Cv: () => c, PU: () => p, So: () => u, _Z: () => m, ap: () => f, uK: () => h, ux: () => E });
var r = n(832081),
    s = n(17928),
    a = n(636537),
    o = n(626584),
    l = n(773669),
    d = n(652215);
let _ = new o.A("StripeUtils"),
    u = (e) => {
        let t, n;
        try {
            [t, n] = ((e) => {
                let t = (t) =>
                        `You passed an invalid expiration date ${e}${t ?? ""}Please pass a string containing a numeric month and year such as \`01-17\` or \`2015 / 05\``,
                    n = e.split(/[.\-/\s]+/g);
                2 !== n.length && t();
                let i = n.map((e) => {
                        let i = parseInt(e);
                        return isNaN(i) && t(`${n} is not a number.`), i < 1 && t(`${i} is less than one.`), i;
                    }),
                    [r, s] = i[0] > 12 ? [i[1], i[0]] : [i[0], i[1]];
                return r > 12 && t(`Month must be a number 1-12, not ${r}.`), s < 100 && (s += 2e3), [r, s];
            })(e);
        } catch (e) {
            return !1;
        }
        let i = new Date(n, t),
            r = new Date();
        return i.setMonth(i.getMonth() - 1), i.setMonth(i.getMonth() + 1, 1), i > r;
    };
function c() {
    return null != i ? Promise.resolve(i) : (0, r.loadStripe)(d.Gg3.STRIPE.KEY).then((e) => ((i = e), e));
}
function E() {
    return null == d.Gg3.STRIPE.KEY
        ? (_.warn("getStripeClientMode() called before PaymentSettings.STRIPE.KEY initialized: ", d.Gg3.STRIPE.KEY),
          "unknown")
        : d.Gg3.STRIPE.KEY.startsWith("pk_live")
          ? "live"
          : d.Gg3.STRIPE.KEY.startsWith("pk_test")
            ? "test"
            : (_.warn("Unexpected value for Stripe public key: ", d.Gg3.STRIPE.KEY), "unknown");
}
function h(e) {
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
function m(e) {
    let { name: t, line1: n, line2: i, city: r, state: s, postalCode: a, country: o } = e;
    return { name: t, address: { line1: n, line2: i, city: r, state: s, postal_code: a, country: o } };
}
async function f(e) {
    try {
        let { stripe_payment_intent_client_secret: t } = (
                await a.Bo.get({ url: d.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e), oldFormErrors: !0, rejectWithError: !1 })
            ).body,
            n = await c();
        if (null == n) return { error: "unable to load stripe" };
        let { error: i, paymentIntent: r } = await n.retrievePaymentIntent(t);
        if (null != i) return { error: i.message };
        if (null == r) return { error: "payment intent does not exist" };
        let s = {};
        switch (
            ("requires_payment_method" === r.status &&
                null != r.last_payment_error &&
                null != r.last_payment_error.payment_method &&
                (s.payment_method = r.last_payment_error.payment_method.id),
            r.status)
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
                return { error: `Invalid Payment Intent status: ${r.status}` };
        }
    } catch (e) {
        return { error: e.message };
    }
}
let g = { "en-US": "en", "zh-CN": "zh", "sv-SE": "sv" },
    p = () =>
        (0, s.bG)([l.default], () => {
            var e;
            return g[(e = l.default.locale)] ?? e;
        });
