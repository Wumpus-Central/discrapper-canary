let r;
n.d(t, {
    Cv: () => d,
    So: () => u,
    _Z: () => _,
    ap: () => h,
    uK: () => p,
    ux: () => f,
}),
    n(747238),
    n(896048);
var i = n(832081),
    a = n(562465),
    s = n(626584),
    o = n(652215);
let l = new s.A("StripeUtils"),
    c = (e) => {
        let t = (t) =>
                "You passed an invalid expiration date ".concat(e) +
                "".concat(null != t ? t : "") +
                "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`",
            n = e.split(/[.\-/\s]+/g);
        2 !== n.length && t();
        let r = n.map((e) => {
                let r = parseInt(e);
                return (
                    isNaN(r) && t("".concat(n, " is not a number.")), r < 1 && t("".concat(r, " is less than one.")), r
                );
            }),
            [i, a] = r[0] > 12 ? [r[1], r[0]] : [r[0], r[1]];
        return i > 12 && t("Month must be a number 1-12, not ".concat(i, ".")), a < 100 && (a += 2000), [i, a];
    },
    u = (e) => {
        let t, n;
        try {
            [t, n] = c(e);
        } catch (e) {
            return !1;
        }
        let r = new Date(n, t),
            i = new Date();
        return r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > i;
    };
function d() {
    return null != r ? Promise.resolve(r) : (0, i.loadStripe)(o.Gg3.STRIPE.KEY).then((e) => ((r = e), e));
}
function f() {
    return null == o.Gg3.STRIPE.KEY
        ? (l.warn("getStripeClientMode() called before PaymentSettings.STRIPE.KEY initialized: ", o.Gg3.STRIPE.KEY),
          "unknown")
        : o.Gg3.STRIPE.KEY.startsWith("pk_live")
          ? "live"
          : o.Gg3.STRIPE.KEY.startsWith("pk_test")
            ? "test"
            : (l.warn("Unexpected value for Stripe public key: ", o.Gg3.STRIPE.KEY), "unknown");
}
function p(e) {
    var t, n, r, i, a, s, o, l;
    let { billing_details: c } = e,
        u = null != (t = c.address) ? t : {},
        d = {
            name: null != (n = c.name) ? n : "",
            line1: null != (r = u.line1) ? r : "",
            line2: null != (i = u.line2) ? i : "",
            city: null != (a = u.city) ? a : "",
            state: null != (s = u.state) ? s : "",
            country: null != (o = u.country) ? o : "",
            postalCode: null != (l = u.postal_code) ? l : "",
        };
    return {
        token: e.id,
        billingAddressInfo: d,
    };
}
function _(e) {
    let { name: t, line1: n, line2: r, city: i, state: a, postalCode: s, country: o } = e;
    return {
        name: t,
        address: {
            line1: n,
            line2: r,
            city: i,
            state: a,
            postal_code: s,
            country: o,
        },
    };
}
async function h(e) {
    try {
        let { stripe_payment_intent_client_secret: t } = (
                await a.Bo.get({
                    url: o.Rsh.BILLING_STRIPE_PAYMENT_INTENTS(e),
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
            ).body,
            n = await d();
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
                let { error: l } = await n.confirmCardPayment(t, s);
                if (null != l) return { error: l.message };
                return {};
            case "succeeded":
            case "processing":
                return {};
            default:
                return { error: "Invalid Payment Intent status: ".concat(i.status) };
        }
    } catch (e) {
        return { error: e.message };
    }
}
